// src/engine/core/Trait.ts
function frozenError(id) {
  throw new Error(`Trait '${id}' is already built and cannot be modified`);
}
var Trait = class {
  id;
  name;
  /** The Rule that declared this trait (property/action ownership). */
  ruleId;
  properties = {};
  actions = {};
  queries = {};
  requiredTraits = [];
  frozen = false;
  constructor(opts, ruleId) {
    this.id = opts.id;
    this.name = opts.name;
    this.ruleId = ruleId;
  }
  /** Declare traits this one depends on; applying it applies them too. */
  requires(traits) {
    if (this.frozen) {
      frozenError(this.id);
    }
    this.requiredTraits = [...this.requiredTraits, ...traits];
    return this;
  }
  /** Add an actor-scoped property with a default value. */
  addProperty(id, type, defaultValue, opts = {}) {
    if (this.frozen) {
      frozenError(this.id);
    }
    const property = {
      id,
      type,
      default: defaultValue,
      readonly: opts.readonly ?? false,
      name: opts.name,
      scope: "actor",
      ownerId: this.id
    };
    this.properties[id] = property;
    return property;
  }
  /** Add an actor-scoped action (a mutator that returns nothing). */
  addAction(id, apply, opts = {}) {
    if (this.frozen) {
      frozenError(this.id);
    }
    const action = {
      id,
      name: opts.name,
      ownerId: this.id,
      params: opts.params,
      apply
    };
    this.actions[id] = action;
    return action;
  }
  /** Add an actor-scoped query (a read that returns a value). */
  addQuery(id, evaluate, opts = {}) {
    if (this.frozen) {
      frozenError(this.id);
    }
    const query = {
      id,
      name: opts.name,
      ownerId: this.id,
      returns: opts.returns,
      params: opts.params,
      evaluate
    };
    this.queries[id] = query;
    return query;
  }
  /** Called by `RuleBuilder.build`; no further description is allowed after. */
  freeze() {
    this.frozen = true;
  }
};

// src/engine/builders/RuleBuilder.ts
var RuleBuilder = class {
  id;
  name;
  ability;
  requiredRules = [];
  properties = {};
  actions = {};
  queries = {};
  events = {};
  traitMap = {};
  steps = {};
  animationDefs = {};
  built = false;
  constructor(opts) {
    this.id = opts.id;
    this.name = opts.name;
    this.ability = opts.ability ?? opts.name;
  }
  assertMutable() {
    if (this.built) {
      throw new Error(`Rule '${this.id}' is already built`);
    }
  }
  /** Rules this one depends on; using it uses them too. */
  requires(rules) {
    this.assertMutable();
    this.requiredRules = [...this.requiredRules, ...rules];
    return this;
  }
  /** Add a world-scoped property with a default value. */
  addProperty(id, type, defaultValue, opts = {}) {
    this.assertMutable();
    const property = {
      id,
      type,
      default: defaultValue,
      readonly: opts.readonly ?? false,
      name: opts.name,
      scope: "world",
      ownerId: this.id
    };
    this.properties[id] = property;
    return property;
  }
  /** Add a world-scoped action (a mutator invoked via `world.act`). */
  addAction(id, apply, opts = {}) {
    this.assertMutable();
    const action = {
      id,
      name: opts.name,
      ownerId: this.id,
      params: opts.params,
      apply
    };
    this.actions[id] = action;
    return action;
  }
  /** Add a world-scoped query (a read over the world, invoked via `world.query`). */
  addQuery(id, evaluate, opts = {}) {
    this.assertMutable();
    const query = {
      id,
      name: opts.name,
      ownerId: this.id,
      returns: opts.returns,
      params: opts.params,
      evaluate
    };
    this.queries[id] = query;
    return query;
  }
  /** Create a trait this rule maintains; describe it further on the return. */
  addTrait(opts) {
    this.assertMutable();
    const trait = new Trait(opts, this.id);
    this.traitMap[opts.id] = trait;
    return trait;
  }
  addEvent(id, opts = {}) {
    this.assertMutable();
    const event = { id, name: opts.name, ownerId: this.id };
    this.events[id] = event;
    return event;
  }
  /** Register a stock animation this rule ships (a World seeds it by id). */
  addAnimation(id, def) {
    this.assertMutable();
    this.animationDefs[id] = def;
    return def;
  }
  /** Add a per-tick step with no ordering constraint. */
  addStep(id, run) {
    return this.registerStep(id, run, { kind: "free" });
  }
  /** Add a per-tick step that must run before another rule's step. */
  addStepBefore(id, anchor, run) {
    return this.registerStep(id, run, { kind: "before", anchor });
  }
  /** Add a per-tick step that must run after another rule's step. */
  addStepAfter(id, anchor, run) {
    return this.registerStep(id, run, { kind: "after", anchor });
  }
  registerStep(id, run, order) {
    this.assertMutable();
    const step = { id, ownerId: this.id, order, run };
    this.steps[id] = step;
    return step;
  }
  /** Freeze the traits and produce the immutable Rule. */
  build() {
    this.assertMutable();
    this.built = true;
    for (const trait of Object.values(this.traitMap)) {
      trait.freeze();
    }
    return Object.freeze({
      id: this.id,
      name: this.name,
      ability: this.ability,
      requires: Object.freeze([...this.requiredRules]),
      properties: Object.freeze({ ...this.properties }),
      actions: Object.freeze({ ...this.actions }),
      queries: Object.freeze({ ...this.queries }),
      events: Object.freeze({ ...this.events }),
      traits: Object.freeze({ ...this.traitMap }),
      steps: Object.freeze({ ...this.steps }),
      animations: Object.freeze({ ...this.animationDefs })
    });
  }
};

// src/engine/core/color.ts
var clamp01 = (value) => Number.isFinite(value) ? Math.min(1, Math.max(0, value)) : 0;
function channels(value) {
  if (Array.isArray(value)) {
    const at = (index, fallback) => clamp01(Number(value[index] ?? fallback));
    return [at(0, 0), at(1, 0), at(2, 0), at(3, 1)];
  }
  const text = String(value ?? "").trim();
  const short = /^#?([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])?$/i.exec(text);
  const long = /^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i.exec(text);
  const match = short ?? long;
  if (!match) {
    return [0, 0, 0, 1];
  }
  const byte = (part, fallback) => part === void 0 ? fallback : parseInt(short ? part + part : part, 16) / 255;
  return [
    byte(match[1], 0),
    byte(match[2], 0),
    byte(match[3], 0),
    byte(match[4], 1)
  ];
}
function rgb(value) {
  const [r, g, b] = channels(value);
  return [r, g, b];
}
function rgba(value) {
  return channels(value);
}
function toHex(color) {
  const channel = (index) => Math.round(clamp01(Number(color?.[index] ?? 0)) * 255).toString(16).padStart(2, "0");
  return `#${channel(0)}${channel(1)}${channel(2)}`;
}

// src/engine/core/hash.ts
function fnv1a(text) {
  let value = 2166136261;
  for (let index = 0; index < text.length; index++) {
    value ^= text.charCodeAt(index);
    value += (value << 1) + (value << 4) + (value << 7) + (value << 8) + (value << 24);
  }
  return (value >>> 0).toString(36);
}

// src/engine/core/effectIds.ts
function effectSlotId(owner, effect) {
  return JSON.stringify([owner, effect.path]);
}
function effectContentHash(effect) {
  return fnv1a(JSON.stringify(effect.document));
}

// src/engine/core/EventQueue.ts
var EventQueue = class {
  pending = [];
  enqueue(event, actor, detail) {
    this.pending.push({ event, actor, detail });
  }
  size() {
    return this.pending.length;
  }
  /**
   * Dispatch every queued event to the actors that elected to handle it. The
   * queue is snapshotted and cleared first, so an event a handler raises lands
   * in the now-empty queue and is dispatched on the next tick — bounding a tick
   * to one round of handlers and avoiding an in-tick feedback loop.
   */
  flush(world) {
    const batch = this.pending;
    this.pending = [];
    for (const { event, actor, detail } of batch) {
      for (const handler of actor.handlersFor(event)) {
        handler(world, actor, detail);
      }
    }
  }
};

// src/engine/core/ruleIds.ts
var placement = (order) => order.kind === "before" || order.kind === "after" ? `${order.kind} ${order.anchor.ownerId}.${order.anchor.id}` : order.kind;
function codeOf(rule3) {
  const parts = [];
  const each2 = (record, write) => Object.keys(record).sort().forEach((key) => write(record[key]));
  each2(
    rule3.steps,
    (step) => parts.push(`step ${step.id} ${placement(step.order)} ${step.run}`)
  );
  each2(
    rule3.actions,
    (action) => parts.push(`action ${action.id} ${action.apply}`)
  );
  each2(
    rule3.queries,
    (query) => parts.push(`query ${query.id} ${query.evaluate}`)
  );
  each2(rule3.traits, (trait) => {
    each2(
      trait.actions,
      (action) => parts.push(`${trait.id} action ${action.id} ${action.apply}`)
    );
    each2(
      trait.queries,
      (query) => parts.push(`${trait.id} query ${query.id} ${query.evaluate}`)
    );
  });
  return parts.join("\n");
}
function ruleContentHash(rule3) {
  return fnv1a(codeOf(rule3));
}

// src/engine/core/Scheduler.ts
var Scheduler = class {
  ordered;
  constructor(steps) {
    this.ordered = topologicalOrder(steps);
  }
  /** Steps in resolved order — for inspection and tests. */
  order() {
    return this.ordered;
  }
  /** Run every step in order, once, for this tick. */
  run(world, delta) {
    for (const step of this.ordered) {
      const run = step.run;
      run(world, delta);
    }
  }
};
function topologicalOrder(steps) {
  const index = /* @__PURE__ */ new Map();
  steps.forEach((step, i) => index.set(step, i));
  const after = /* @__PURE__ */ new Map();
  const indegree = /* @__PURE__ */ new Map();
  for (const step of steps) {
    after.set(step, /* @__PURE__ */ new Set());
    indegree.set(step, 0);
  }
  const addEdge = (from, to) => {
    if (from === to) {
      return;
    }
    const set = after.get(from);
    if (set && !set.has(to)) {
      set.add(to);
      indegree.set(to, (indegree.get(to) ?? 0) + 1);
    }
  };
  const firsts = steps.filter((s) => s.order.kind === "first");
  const lasts = steps.filter((s) => s.order.kind === "last");
  for (const step of steps) {
    const { order } = step;
    if (order.kind === "before") {
      requireAnchor(step, order.anchor, index);
      addEdge(step, order.anchor);
    } else if (order.kind === "after") {
      requireAnchor(step, order.anchor, index);
      addEdge(order.anchor, step);
    }
  }
  for (const f of firsts) {
    for (const s of steps) {
      if (s.order.kind !== "first") {
        addEdge(f, s);
      }
    }
  }
  for (const l of lasts) {
    for (const s of steps) {
      if (s.order.kind !== "last") {
        addEdge(s, l);
      }
    }
  }
  const ready = steps.filter((s) => (indegree.get(s) ?? 0) === 0).sort((a, b) => (index.get(a) ?? 0) - (index.get(b) ?? 0));
  const result = [];
  while (ready.length > 0) {
    const step = ready.shift();
    result.push(step);
    const dependents = [...after.get(step) ?? []].sort(
      (a, b) => (index.get(a) ?? 0) - (index.get(b) ?? 0)
    );
    for (const next of dependents) {
      const d = (indegree.get(next) ?? 0) - 1;
      indegree.set(next, d);
      if (d === 0) {
        const at = ready.findIndex(
          (r) => (index.get(r) ?? 0) > (index.get(next) ?? 0)
        );
        if (at === -1) {
          ready.push(next);
        } else {
          ready.splice(at, 0, next);
        }
      }
    }
  }
  if (result.length !== steps.length) {
    const cyclic = steps.filter((s) => !result.includes(s)).map((s) => `${s.ownerId}.${s.id}`).join(", ");
    throw new Error(`Step ordering has a cycle among: ${cyclic}`);
  }
  return result;
}
function requireAnchor(step, anchor, index) {
  if (!index.has(anchor)) {
    throw new Error(
      `Step '${step.ownerId}.${step.id}' is ordered relative to '${anchor.ownerId}.${anchor.id}', which is not active in this world (is its rule required?)`
    );
  }
}

// src/engine/core/spatialKeys.ts
var SPATIAL = {
  rule: "spatial",
  trait: "positional",
  position: "position",
  scale: "scale",
  rotation: "rotation",
  skew: "skew",
  intrinsicSize: "intrinsicSize"
};
var APPEARANCE = {
  rule: "animation",
  trait: "appearance",
  sprite: "sprite",
  // Which cell of a spritesheet the static sprite draws, as two vectors: where
  // it starts and how big it is. A size of (0, 0) means the whole image.
  spriteCellOrigin: "spriteCellOrigin",
  spriteCellSize: "spriteCellSize",
  animation: "animation",
  frame: "frame",
  elapsed: "elapsed",
  done: "done",
  playing: "playing",
  restart: "restart"
};

// src/engine/core/traits.ts
var DependencySet = class {
  getDeps;
  keyOf;
  entries = /* @__PURE__ */ new Map();
  constructor(getDeps, keyOf) {
    this.getDeps = getDeps;
    this.keyOf = keyOf;
  }
  /** Add `item`. `explicit` false marks it as pulled in by a dependent. */
  add(item, explicit = true) {
    const key = this.keyOf(item);
    let entry = this.entries.get(key);
    const wasPresent = entry !== void 0 && this.total(entry) > 0;
    if (!entry) {
      entry = { item, explicit: 0, implied: 0 };
      this.entries.set(key, entry);
    }
    if (explicit) {
      entry.explicit += 1;
    } else {
      entry.implied += 1;
    }
    if (!wasPresent) {
      for (const dep of this.getDeps(item)) {
        this.add(dep, false);
      }
    }
  }
  /** Remove one explicit add of `item`; cascades to now-orphaned dependencies. */
  remove(item) {
    const entry = this.entries.get(this.keyOf(item));
    if (!entry || entry.explicit === 0) {
      return;
    }
    entry.explicit -= 1;
    if (this.total(entry) === 0) {
      this.drop(entry);
    }
  }
  dropImplied(item) {
    const entry = this.entries.get(this.keyOf(item));
    if (!entry || entry.implied === 0) {
      return;
    }
    entry.implied -= 1;
    if (this.total(entry) === 0) {
      this.drop(entry);
    }
  }
  drop(entry) {
    this.entries.delete(this.keyOf(entry.item));
    for (const dep of this.getDeps(entry.item)) {
      this.dropImplied(dep);
    }
  }
  total(entry) {
    return entry.explicit + entry.implied;
  }
  has(item) {
    return this.entries.has(this.keyOf(item));
  }
  /** Total reference count for `item` (0 if absent). */
  count(item) {
    const entry = this.entries.get(this.keyOf(item));
    return entry ? this.total(entry) : 0;
  }
  /** All present items, in insertion order. */
  items() {
    return [...this.entries.values()].map((e) => e.item);
  }
};

// src/engine/core/Vector.ts
var DEG_TO_RAD = Math.PI / 180;
var Vector = class _Vector {
  x;
  y;
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  /** Coerce a plain `{x, y}` (as learners write in defaults) to a Vector. */
  static from(v) {
    return v instanceof _Vector ? v : new _Vector(v.x, v.y);
  }
  /** A number as a vector — both components alike. See {@link VectorOperand}. */
  static broadcast(value) {
    return typeof value === "number" ? new _Vector(value, value) : _Vector.from(value);
  }
  add(other) {
    const v = _Vector.broadcast(other);
    return new _Vector(this.x + v.x, this.y + v.y);
  }
  subtract(other) {
    const v = _Vector.broadcast(other);
    return new _Vector(this.x - v.x, this.y - v.y);
  }
  /** Component-wise product; a number multiplies both components. */
  multiply(other) {
    const v = _Vector.broadcast(other);
    return new _Vector(this.x * v.x, this.y * v.y);
  }
  /** Component-wise quotient; a number divides both components. */
  divide(other) {
    const v = _Vector.broadcast(other);
    return new _Vector(this.x / v.x, this.y / v.y);
  }
  /** Scale both components by a scalar — `multiply` with a number, named. */
  scale(factor) {
    return new _Vector(this.x * factor, this.y * factor);
  }
  /** Rotate clockwise by `degrees` (screen space: +y is down). */
  rotate(degrees) {
    const r = degrees * DEG_TO_RAD;
    const cos = Math.cos(r);
    const sin = Math.sin(r);
    return new _Vector(this.x * cos - this.y * sin, this.x * sin + this.y * cos);
  }
  length() {
    return Math.hypot(this.x, this.y);
  }
  equals(other) {
    return this.x === other.x && this.y === other.y;
  }
  clone() {
    return new _Vector(this.x, this.y);
  }
};

// src/engine/core/World.ts
var DEFAULT_BACKDROP_COLOR = "#101020";
var coerce = (property, value) => property.type === "vector" || property.type === "point" ? Vector.from(value) : value;
var ActorCollection = class {
  list;
  constructor(list) {
    this.list = list;
  }
  with(trait) {
    return this.list.filter((actor) => actor.has(trait));
  }
  /**
   * Every actor of a kind — the module a template was registered under
   * (`actors/coin`), or a world-local template's id.
   *
   * What `any ⟨Coin⟩` means everywhere except a handler's subject socket: the
   * coins there are, right now. (In that one socket it means the TEMPLATE, so
   * that a handler registered on it reaches the coins placed later too.)
   */
  ofType(type) {
    return this.list.filter((actor) => actor.type === type);
  }
  [Symbol.iterator]() {
    return this.list[Symbol.iterator]();
  }
};
var World = class {
  id;
  name;
  actors;
  membership = new DependencySet(
    (rule3) => rule3.requires,
    (rule3) => rule3.id
  );
  store = /* @__PURE__ */ new Map();
  actorList = [];
  scheduler;
  events = new EventQueue();
  // Animations known to this world, by id — seeded from the active rules' stock
  // animations. The Animation rule's step and renderSnapshot resolve ids here.
  animationDefs = /* @__PURE__ */ new Map();
  // Effects played across the whole viewport, not on any one actor. Mutable for
  // the same reason an actor's list is: the driver re-reads it every frame.
  appliedEffects;
  // Backdrop layers, back to front. Never empty: layer 0 is what every
  // background block addresses, and a world that was told nothing about its
  // background still has one, in the default colour.
  backdropList;
  // The set of currently-pressed input keys, refreshed by the driver each frame
  // before `tick` (the engine is DOM-free, so input arrives as plain data).
  // Rule steps read it through `isKeyDown`; keys carry OUR names — 'left arrow',
  // 'a', 'space' — which the driver translates the DOM's into (core/keys).
  keys = /* @__PURE__ */ new Set();
  // The previous tick's pressed set, so a rule step can detect rising/falling
  // edges (a key *just* pressed or released) rather than only the held state.
  // Advanced at the end of each `tick`.
  previousKeys = /* @__PURE__ */ new Set();
  constructor(init) {
    this.id = init.id;
    this.name = init.name;
    this.actors = new ActorCollection(this.actorList);
    for (const rule3 of init.rules) {
      this.membership.add(rule3);
    }
    const rules = this.membership.items();
    for (const rule3 of rules) {
      for (const property of Object.values(rule3.properties)) {
        this.store.set(property, coerce(property, property.default));
      }
    }
    for (const [property, value] of init.overrides) {
      this.store.set(property, coerce(property, value));
    }
    for (const rule3 of rules) {
      for (const [id, def] of Object.entries(rule3.animations)) {
        this.animationDefs.set(id, def);
      }
    }
    for (const [id, def] of init.animations ?? []) {
      this.animationDefs.set(id, def);
    }
    this.appliedEffects = init.effects ? [...init.effects] : [];
    this.backdropList = (init.backdrops ?? []).map((backdrop) => ({
      ...backdrop,
      color: [...backdrop.color],
      effects: [...backdrop.effects]
    }));
    if (this.backdropList.length === 0) {
      this.backdropList.push({
        color: rgba(DEFAULT_BACKDROP_COLOR),
        effects: []
      });
    }
    const steps = [];
    for (const rule3 of rules) {
      steps.push(...Object.values(rule3.steps));
    }
    this.scheduler = new Scheduler(steps);
  }
  get(property) {
    if (!this.store.has(property)) {
      throw new Error(
        `World '${this.id}' has no property '${property.id}' (is rule '${property.ownerId}' in use?)`
      );
    }
    return this.store.get(property);
  }
  set(property, value) {
    this.store.set(property, coerce(property, value));
  }
  act(action, ...args) {
    action.apply(this, ...args);
  }
  /** Answer a rule's world-scoped query (e.g. Collision's `TouchingQuery`). */
  query(query, ...args) {
    return query.evaluate(this, ...args);
  }
  /**
   * Actors asked to leave while a tick was in progress; swept when it ends.
   * See {@link removeActor}.
   */
  leaving = /* @__PURE__ */ new Set();
  /** Whether a tick is running, which is what makes removal deferred. */
  ticking = false;
  addActor(actor) {
    actor.world = this;
    this.actorList.push(actor);
  }
  /**
   * Take an actor out of the world.
   *
   * The other half of `addActor`, and a thing a learner asks for directly:
   * "when the player touches a coin, remove the coin". Takes the actor or its
   * id, and says whether there was one to remove.
   *
   * DEFERRED while a tick is running, and immediate otherwise. A removal
   * almost always comes from inside the tick that noticed it — an event
   * handler, a rule's step — where the world is being walked by whatever is
   * running, and splicing the list underneath a `for each` would skip the
   * actor after the one removed. The sweep happens after the steps and their
   * events, still before the frame is drawn, so the coin is gone from the
   * picture the learner sees.
   */
  removeActor(actor) {
    const target = typeof actor === "string" ? this.actorList.find((candidate) => candidate.id === actor) : actor;
    if (!target || !this.actorList.includes(target)) {
      return false;
    }
    if (this.ticking) {
      this.leaving.add(target);
      return true;
    }
    this.detach(target);
    return true;
  }
  /** Actually take it out: off the list, and no longer pointing at this world. */
  detach(actor) {
    const index = this.actorList.indexOf(actor);
    if (index >= 0) {
      this.actorList.splice(index, 1);
    }
    actor.world = void 0;
  }
  /** Whether an actor with `id` is already in this world. */
  hasActor(id) {
    return this.actorList.some((actor) => actor.id === id);
  }
  /** Raise an event for `actor`; dispatched after the current tick's steps. */
  emit(event, actor, detail) {
    this.events.enqueue(event, actor, detail);
  }
  /** Replace the pressed-key set (driver calls this each frame before `tick`). */
  setInput(keys) {
    this.keys = new Set(keys);
  }
  /** Whether `key` (a name from `core/keys`) is currently pressed. */
  isKeyDown(key) {
    return this.keys.has(key);
  }
  /** Keys pressed this tick that were not pressed last tick (rising edges). */
  newlyPressedKeys() {
    return [...this.keys].filter((key) => !this.previousKeys.has(key));
  }
  /** Keys released this tick that were pressed last tick (falling edges). */
  newlyReleasedKeys() {
    return [...this.previousKeys].filter((key) => !this.keys.has(key));
  }
  /** The definition of a known animation, or undefined. */
  animation(id) {
    return this.animationDefs.get(id);
  }
  /** The ids of every registered animation (active rules' stock + world extras). */
  animationIds() {
    return [...this.animationDefs.keys()];
  }
  /** Advance the simulation by `delta` seconds. */
  tick(delta) {
    this.ticking = true;
    try {
      this.scheduler.run(this, delta);
      this.events.flush(this);
    } finally {
      this.ticking = false;
      for (const actor of this.leaving) {
        this.detach(actor);
      }
      this.leaving.clear();
    }
    this.previousKeys = this.keys;
  }
  /** The resolved step order — for inspection and tests. */
  stepOrder() {
    return this.scheduler.order();
  }
  /** Whether a rule is active (directly or by dependency). */
  hasRule(rule3) {
    return this.membership.has(rule3);
  }
  /** The active rules, directly-used and implied. */
  activeRules() {
    return this.membership.items();
  }
  /**
   * A per-actor render view for the driver: every actor carrying the Spatial
   * "positional" trait, with its transform. Read in-instance — the Property
   * objects come from this world's own Spatial rule, so their identities match
   * the actors' stores — so the driver needs no engine internals, only these
   * numbers. Empty when the Spatial rule is not in play.
   */
  /**
   * Effects played across the whole viewport, in application order.
   *
   * Read by the driver each frame and applied to the camera, the way an actor's
   * are applied to its Game Object.
   */
  effects() {
    return this.appliedEffects;
  }
  /**
   * Start a viewport-wide effect now, or retune one already playing.
   *
   * One entry per path and never stacked, exactly as on an actor — and for the
   * same reason, adding one already present replaces its values rather than
   * doing nothing. See {@link Actor.addEffect}.
   */
  addEffect(path, document, values) {
    const spec = values ? { path, document, values } : { path, document };
    const index = this.appliedEffects.findIndex((effect) => effect.path === path);
    if (index >= 0) {
      this.appliedEffects[index] = spec;
      return this;
    }
    this.appliedEffects.push(spec);
    return this;
  }
  /**
   * The backdrop layers, back to front, as the driver draws them.
   *
   * Read every frame beside `renderSnapshot`, so a backdrop changed mid-game —
   * by an event handler, or by the hot-reload patch — shows up on the next one.
   */
  backdropSnapshot() {
    return this.backdropList;
  }
  /**
   * The layer `n`, creating the layers up to it if they do not exist yet.
   *
   * Growing rather than throwing is what makes the optional `layer` argument on
   * the methods below a real promise: parallax adds blocks that name a layer,
   * and nothing about the engine has to change when they arrive. A new layer
   * starts transparent, so adding layer 2 does not black out layer 0.
   */
  backdropAt(layer) {
    const index = Math.max(0, Math.floor(layer));
    while (this.backdropList.length <= index) {
      this.backdropList.push({ color: [0, 0, 0, 0], effects: [] });
    }
    return this.backdropList[index];
  }
  /**
   * Draw `sprite` behind everything — an image file name, as a frame names one.
   *
   * `undefined` clears it, leaving the backdrop colour. The image is stretched
   * to the viewport by the driver (BACKGROUNDS.md §4); nothing here knows how
   * big it is, and a backdrop is never a spritesheet, so this takes a file name
   * and never a cell reference.
   */
  setBackground(sprite, layer = 0) {
    this.backdropAt(layer).sprite = sprite;
    return this;
  }
  /**
   * Set the colour behind the backdrop image, and behind everything without one.
   *
   * Takes whatever a colour block produced — hex from a picker, floats from
   * `r g b a` — because `rgba` accepts both and every colour block can then
   * feed this one (see color.ts).
   *
   * One sky, not one per layer: a colour on any layer but the bottom would be
   * hidden by the layer under it.
   */
  setBackgroundColor(color) {
    this.backdropAt(0).color = rgba(color);
    return this;
  }
  /**
   * Play an effect on the backdrop's own pixels.
   *
   * Not the same as `addEffect`, and the difference is the whole reason a
   * backdrop carries effects at all: a world effect filters the camera, so it
   * covers the actors too. This filters the sky and leaves the swimmer alone.
   *
   * One entry per path and never stacked, exactly as on the world and on an
   * actor — adding one already present retunes it.
   */
  addBackgroundEffect(path, document, values, layer = 0) {
    const spec = values ? { path, document, values } : { path, document };
    const effects = this.backdropAt(layer).effects;
    const index = effects.findIndex((effect) => effect.path === path);
    if (index >= 0) {
      effects[index] = spec;
      return this;
    }
    effects.push(spec);
    return this;
  }
  /** Stop an effect on the backdrop. Removing one not playing is a no-op. */
  removeBackgroundEffect(path, layer = 0) {
    const effects = this.backdropAt(layer).effects;
    const index = effects.findIndex((effect) => effect.path === path);
    if (index >= 0) {
      effects.splice(index, 1);
    }
    return this;
  }
  /**
   * Every effect in play, the world's own, every backdrop's, and every actor's.
   *
   * Public because the hot-reload reconciler reads it off a freshly built world
   * to find the new graph for an effect the learner just edited — which may sit
   * on an actor, so `effects()` (the world's own) is not enough.
   */
  allEffects() {
    return [
      ...this.appliedEffects,
      ...this.backdropList.flatMap((backdrop) => [...backdrop.effects]),
      ...this.actorList.flatMap((actor) => [...actor.effects()])
    ];
  }
  /**
   * Every applied effect with what carries it: `world`, `backdrop:<n>`, or the
   * actor's id. The vocabulary the snapshot and the value patch share.
   */
  effectSlots() {
    return [
      ...this.appliedEffects.map(
        (effect) => ["world", effect]
      ),
      ...this.backdropList.flatMap(
        (backdrop, index) => backdrop.effects.map(
          (effect) => [`backdrop:${index}`, effect]
        )
      ),
      ...this.actorList.flatMap(
        (actor) => actor.effects().map((effect) => [actor.id, effect])
      )
    ];
  }
  /**
   * Retune one applied effect, in place.
   *
   * The live half of turning a knob on an `add effect` block: the driver
   * re-reads these specs every frame and pushes new values onto the filter that
   * is already running (effects.ts), so nothing has to restart. Addressed by
   * slot, not by path — the same effect on two actors has two sets of knobs and
   * patching one must not touch the other.
   *
   * @returns whether that slot exists
   */
  setEffectValues(owner, path, values) {
    const retune = (effects) => {
      const index = effects.findIndex((effect) => effect.path === path);
      if (index < 0) {
        return false;
      }
      effects[index] = values ? { ...effects[index], values } : (
        // No values at all is a different spec from empty ones: the driver
        // fills each parameter's declared default for anything absent.
        { path: effects[index].path, document: effects[index].document }
      );
      return true;
    };
    if (owner === "world") {
      return retune(this.appliedEffects);
    }
    const backdrop = /^backdrop:(\d+)$/.exec(owner);
    if (backdrop) {
      const layer = this.backdropList[Number(backdrop[1])];
      return layer ? retune(layer.effects) : false;
    }
    const actor = this.actorList.find((candidate) => candidate.id === owner);
    return actor ? actor.setEffectValues(path, values) : false;
  }
  /**
   * Give every effect with this path a new graph, in place.
   *
   * The live half of editing a `.effect`: the reconciler calls this on the
   * RUNNING world so the driver, which re-reads these specs each frame, notices
   * the graph changed and swaps the shader. Values are untouched — they are
   * identity, and a change to them restarts instead.
   *
   * @returns whether anything carried that path
   */
  setEffectDocument(path, document) {
    let replaced = false;
    const patch = (effects) => {
      effects.forEach((effect, index) => {
        if (effect.path === path) {
          effects[index] = { ...effect, document };
          replaced = true;
        }
      });
    };
    patch(this.appliedEffects);
    for (const backdrop of this.backdropList) {
      patch(backdrop.effects);
    }
    for (const actor of this.actorList) {
      actor.setEffectDocument(path, document);
      replaced ||= actor.effects().some((effect) => effect.path === path);
    }
    return replaced;
  }
  /** Stop a viewport-wide effect. Removing one not in play is a no-op. */
  removeEffect(path) {
    const index = this.appliedEffects.findIndex((effect) => effect.path === path);
    if (index >= 0) {
      this.appliedEffects.splice(index, 1);
    }
    return this;
  }
  renderSnapshot() {
    const spatial = this.membership.items().find((r) => r.id === SPATIAL.rule);
    const positional = spatial?.traits[SPATIAL.trait];
    if (!positional) {
      return [];
    }
    const positionProp = positional.properties[SPATIAL.position];
    const scaleProp = positional.properties[SPATIAL.scale];
    const rotationProp = positional.properties[SPATIAL.rotation];
    const skewProp = positional.properties[SPATIAL.skew];
    if (!positionProp || !scaleProp || !rotationProp) {
      return [];
    }
    const appearance = this.membership.items().find((r) => r.id === APPEARANCE.rule);
    const appearanceTrait = appearance?.traits[APPEARANCE.trait];
    const spriteProp = appearanceTrait?.properties[APPEARANCE.sprite];
    const cellOriginProp = appearanceTrait?.properties[APPEARANCE.spriteCellOrigin];
    const cellSizeProp = appearanceTrait?.properties[APPEARANCE.spriteCellSize];
    const animationProp = appearanceTrait?.properties[APPEARANCE.animation];
    const frameProp = appearanceTrait?.properties[APPEARANCE.frame];
    const frameFor = (actor) => {
      if (!appearanceTrait || !actor.has(appearanceTrait)) {
        return void 0;
      }
      const animId = animationProp ? actor.get(animationProp) : "";
      if (animId) {
        const def = this.animationDefs.get(animId);
        if (def && def.frames.length > 0) {
          const index = frameProp ? actor.get(frameProp) : 0;
          const f = def.frames[Math.min(index, def.frames.length - 1)];
          return {
            sprite: f.sprite,
            cell: f.position,
            offset: f.offset ?? { x: 0, y: 0 },
            scale: f.scale ?? 1
          };
        }
      }
      const sprite = spriteProp ? actor.get(spriteProp) : "";
      if (sprite) {
        const size = cellSizeProp ? actor.get(cellSizeProp) : void 0;
        const origin = cellOriginProp ? actor.get(cellOriginProp) : void 0;
        const cell = size && size.x > 0 && size.y > 0 ? {
          x: origin?.x ?? 0,
          y: origin?.y ?? 0,
          width: size.x,
          height: size.y
        } : void 0;
        return { sprite, cell, offset: { x: 0, y: 0 }, scale: 1 };
      }
      return void 0;
    };
    const states = [];
    for (const actor of this.actorList) {
      if (!actor.has(positional)) {
        continue;
      }
      const position = actor.get(positionProp);
      const scale = actor.get(scaleProp);
      states.push({
        actor,
        x: position.x,
        y: position.y,
        scaleX: scale.x,
        scaleY: scale.y,
        rotation: actor.get(rotationProp),
        skew: skewProp ? actor.get(skewProp) : 0,
        frame: frameFor(actor),
        effects: actor.effects()
      });
    }
    return states;
  }
  /** Remove every actor (used by `WorldBuilder.clear`). */
  clearActors() {
    for (const actor of this.actorList) {
      actor.world = void 0;
    }
    this.actorList.length = 0;
  }
  /** Set a world-scoped property by its `${ruleId}.${propId}` path. */
  setWorldProperty(path, value) {
    for (const rule3 of this.membership.items()) {
      for (const property of Object.values(rule3.properties)) {
        if (`${property.ownerId}.${property.id}` === path) {
          this.set(property, value);
          return true;
        }
      }
    }
    return false;
  }
  /**
   * Set one placed actor's property, by the path a snapshot names it with.
   *
   * The actor half of `setWorldProperty`, and the reason a learner can nudge a
   * value on a `.actor` file — a start position, a move speed — and see it in
   * the game they are watching rather than in the game that restarts around
   * them (specs/QUALITY_OF_LIFE.md §1).
   *
   * One property, addressed exactly: the reconciler patches only what the
   * learner actually changed. Writing back a whole snapshot would put every
   * actor back where it was authored, which for anything that moves is the
   * reset this exists to avoid.
   *
   * @returns whether that actor has that property
   */
  setActorProperty(actorId, path, value) {
    const actor = this.actorList.find((candidate) => candidate.id === actorId);
    if (!actor) {
      return false;
    }
    for (const trait of actor.traits()) {
      for (const property of Object.values(trait.properties)) {
        if (`${property.ownerId}.${property.id}` === path) {
          actor.set(property, value);
          return true;
        }
      }
    }
    return false;
  }
  /** A pristine, comparable snapshot of this world's structure and values. */
  snapshot() {
    const rules = this.membership.items();
    const world = {};
    for (const rule3 of rules) {
      for (const property of Object.values(rule3.properties)) {
        if (property.type === "actors") {
          continue;
        }
        world[`${property.ownerId}.${property.id}`] = this.get(property);
      }
    }
    const actors = {};
    for (const actor of this.actorList) {
      const values = {};
      for (const trait of actor.traits()) {
        for (const property of Object.values(trait.properties)) {
          if (property.type === "actors") {
            continue;
          }
          values[`${property.ownerId}.${property.id}`] = actor.get(property);
        }
      }
      actors[actor.id] = values;
    }
    return {
      ruleIds: rules.map((rule3) => rule3.id).sort(),
      ruleCode: Object.fromEntries(
        rules.map((rule3) => [rule3.id, ruleContentHash(rule3)])
      ),
      actorIds: this.actorList.map((actor) => actor.id).sort(),
      // By actor id so the list is stable, but NOT sorted within an actor:
      // handlers for one event run in registration order, so a reorder is a
      // real change and should read as one.
      handlerIds: [...this.actorList].sort((left, right) => left.id < right.id ? -1 : 1).flatMap((actor) => actor.handlerIds().map((id) => `${actor.id}:${id}`)),
      // Sorted, like the id lists: the snapshot is compared by stringifying it,
      // so a stable order is what keeps an unchanged world comparing equal.
      // World effects sit in the same list as the actors'. They are keyed by
      // path and hashed by content just the same, and nothing downstream needs
      // to tell a viewport effect from an actor's — the reconciler only asks
      // whether the set changed.
      effectIds: this.effectSlots().map(([owner, effect]) => effectSlotId(owner, effect)).sort(),
      effectValues: Object.fromEntries(
        this.effectSlots().map(([owner, effect]) => [
          effectSlotId(owner, effect),
          effect.values
        ])
      ),
      // By path, so the same effect on ten actors is hashed once — and so a
      // patch can find every spec that needs the new document.
      effectDocs: Object.fromEntries(
        this.allEffects().map((effect) => [
          effect.path,
          effectContentHash(effect)
        ])
      ),
      backdrops: this.backdropList.map((backdrop) => ({
        ...backdrop.sprite === void 0 ? {} : { sprite: backdrop.sprite },
        color: [...backdrop.color]
      })),
      world,
      actors
    };
  }
};

// src/engine/core/animationTypes.ts
var DEFAULT_FRAME_DELAY = 100;
function frameDelay(def, frame) {
  if (typeof frame.delay === "number") {
    return frame.delay;
  }
  if (typeof def.frameRate === "number" && def.frameRate > 0) {
    return 1e3 / def.frameRate;
  }
  return DEFAULT_FRAME_DELAY;
}

// src/engine/rules/spatial.ts
var rule = new RuleBuilder({
  id: SPATIAL.rule,
  name: "Space",
  ability: "Has Space"
});
var PositionalTrait = rule.addTrait({
  id: SPATIAL.trait,
  name: "Can Be Positioned"
});
var PositionProperty = PositionalTrait.addProperty(
  SPATIAL.position,
  "point",
  new Vector(0, 0),
  { name: "position" }
);
var ScaleProperty = PositionalTrait.addProperty(
  SPATIAL.scale,
  "point",
  new Vector(1, 1),
  { name: "scale" }
);
var RotationProperty = PositionalTrait.addProperty(
  SPATIAL.rotation,
  "number",
  0,
  { name: "rotation" }
);
var SkewProperty = PositionalTrait.addProperty(
  SPATIAL.skew,
  "number",
  0,
  { name: "vertical skew" }
);
var IntrinsicSizeProperty = PositionalTrait.addProperty(
  SPATIAL.intrinsicSize,
  "point",
  new Vector(0, 0),
  { readonly: true, name: "intrinsic size" }
);
var MoveAction = PositionalTrait.addAction(
  "move",
  (actor, to) => actor.set(PositionProperty, Vector.from(to)),
  {
    name: "Move to",
    params: [{ name: "to", type: "point", default: new Vector(0, 0) }]
  }
);
var RotateAction = PositionalTrait.addAction(
  "rotate",
  (actor, degrees) => actor.set(RotationProperty, degrees),
  { name: "Rotate to", params: [{ name: "degrees", type: "number", default: 0 }] }
);
var ScaleAction = PositionalTrait.addAction(
  "scaleTo",
  (actor, to) => actor.set(ScaleProperty, Vector.from(to)),
  {
    name: "Scale to",
    params: [{ name: "to", type: "point", default: new Vector(1, 1) }]
  }
);
var ResizeAction = PositionalTrait.addAction(
  "resize",
  (actor, factor) => actor.set(ScaleProperty, new Vector(factor, factor)),
  { name: "Resize to", params: [{ name: "factor", type: "number", default: 1 }] }
);
var SpatialRule = rule.build();

// src/engine/rules/animation.ts
var rule2 = new RuleBuilder({
  id: APPEARANCE.rule,
  name: "Appearance",
  ability: "Has Appearance"
});
rule2.requires([SpatialRule]);
var AppearanceTrait = rule2.addTrait({
  id: APPEARANCE.trait,
  name: "Has Appearance"
});
AppearanceTrait.requires([PositionalTrait]);
var SpriteProperty = AppearanceTrait.addProperty(
  APPEARANCE.sprite,
  "string",
  "",
  { name: "sprite" }
);
var SpriteCellOriginProperty = AppearanceTrait.addProperty(
  APPEARANCE.spriteCellOrigin,
  "vector",
  new Vector(0, 0),
  { readonly: true }
);
var SpriteCellSizeProperty = AppearanceTrait.addProperty(
  APPEARANCE.spriteCellSize,
  "vector",
  new Vector(0, 0),
  { readonly: true }
);
var AnimationProperty = AppearanceTrait.addProperty(
  APPEARANCE.animation,
  "string",
  "",
  { name: "animation" }
);
var FrameProperty = AppearanceTrait.addProperty(
  APPEARANCE.frame,
  "number",
  0,
  { readonly: true }
);
var ElapsedProperty = AppearanceTrait.addProperty(
  APPEARANCE.elapsed,
  "number",
  0,
  { readonly: true }
);
var DoneProperty = AppearanceTrait.addProperty(
  APPEARANCE.done,
  "boolean",
  false,
  { readonly: true }
);
var PlayingProperty = AppearanceTrait.addProperty(
  APPEARANCE.playing,
  "string",
  "",
  { readonly: true }
);
var RestartRequestedProperty = AppearanceTrait.addProperty(
  APPEARANCE.restart,
  "boolean",
  false,
  { readonly: true }
);
var AnimationEndedEvent = rule2.addEvent("animationEnded", {
  name: "animation ends"
});
var FrameChangedEvent = rule2.addEvent("frameChanged", {
  name: "animation frame changes"
});
function publishIntrinsicSize(actor, def) {
  let width = 0;
  let height = 0;
  for (const frame of def.frames) {
    if (frame.position) {
      width = Math.max(width, frame.position.width);
      height = Math.max(height, frame.position.height);
    }
  }
  if (width > 0 && height > 0) {
    actor.set(IntrinsicSizeProperty, new Vector(width, height));
  }
}
var AdvanceAnimationStep = rule2.addStep(
  "advanceAnimation",
  (world, delta) => {
    for (const actor of world.actors.with(AppearanceTrait)) {
      const id = actor.get(AnimationProperty);
      const def = id ? world.animation(id) : void 0;
      const requested = actor.get(RestartRequestedProperty);
      if (requested) {
        actor.set(RestartRequestedProperty, false);
      }
      const looping = def ? def.loop ?? true : true;
      const changed = id !== actor.get(PlayingProperty);
      if (changed || requested && !looping) {
        actor.set(PlayingProperty, id);
        actor.set(FrameProperty, 0);
        actor.set(ElapsedProperty, 0);
        actor.set(DoneProperty, false);
      }
      if (!id || actor.get(DoneProperty)) {
        continue;
      }
      if (!def || def.frames.length === 0) {
        continue;
      }
      publishIntrinsicSize(actor, def);
      const loop = def.loop ?? true;
      const last = def.frames.length - 1;
      let frame = actor.get(FrameProperty);
      let elapsed = actor.get(ElapsedProperty) + delta * 1e3;
      for (; ; ) {
        const delay = frameDelay(def, def.frames[frame]);
        if (!Number.isFinite(delay) || delay <= 0 || elapsed < delay) {
          break;
        }
        elapsed -= delay;
        if (frame < last) {
          frame += 1;
        } else if (loop) {
          frame = 0;
        } else {
          elapsed = 0;
          actor.set(DoneProperty, true);
          world.emit(AnimationEndedEvent, actor);
          break;
        }
        world.emit(FrameChangedEvent, actor, frame);
      }
      actor.set(FrameProperty, frame);
      actor.set(ElapsedProperty, elapsed);
    }
  }
);
function playAnimation(target, id) {
  target.set(AnimationProperty, id);
  target.set(RestartRequestedProperty, true);
}
var AnimationRule = rule2.build();

// src/engine/builders/WorldBuilder.ts
var FOUNDATION_RULES = [SpatialRule, AnimationRule];
var WorldBuilder = class {
  id;
  name;
  rules = [];
  hidden = /* @__PURE__ */ new Set();
  overrides = [];
  animations = {};
  effects = [];
  // Backdrop layers as described, back to front. Empty until something says
  // otherwise; the World fills in the default layer either way.
  backdrops = [];
  types = /* @__PURE__ */ new Map();
  /** The live world, once something has needed one. See `getWorld`. */
  built;
  constructor(opts) {
    this.id = opts.id;
    this.name = opts.name;
  }
  /**
   * Refuse a declaration the live world could not be given after the fact.
   *
   * Only for the two that have no counterpart on `World` — see the note at the
   * top. Blocks can be reordered in the workspace, so `use rule` below
   * `load map` is a mistake a learner can make by dragging, and silently
   * ignoring it would give them a world missing a rule they can plainly see
   * they asked for.
   */
  requireUnbuilt(what) {
    if (this.built) {
      throw new Error(
        `World '${this.id}': ${what} must come before the actors are placed (move it above "load map" / "add actor").`
      );
    }
  }
  useRules(rules) {
    this.requireUnbuilt("use rule");
    this.rules = [...this.rules, ...rules];
    return this;
  }
  /** Mark a rule hidden in the simple view (still active at runtime). */
  hideRule(rule3) {
    this.hidden.add(rule3);
    return this;
  }
  /** Whether a rule is marked hidden (for the interface layer). */
  isHidden(rule3) {
    return this.hidden.has(rule3);
  }
  /**
   * Set a world-scoped property.
   *
   * Before the world is built this is its initial value; after, it is a plain
   * assignment on the live world, which is what `World.set` does anyway. The
   * generated `set …` blocks emit `world.set(…)` in a `.world` body and in an
   * event handler alike, so the two must agree — the same reason `set position`
   * works on an actor template and a live actor both.
   */
  set(property, value) {
    if (this.built) {
      this.built.set(property, value);
      return this;
    }
    this.overrides.push([property, value]);
    return this;
  }
  /**
   * Register animations (typically from imported `.anim` files) by id, in
   * addition to the stock animations the active rules ship.
   */
  useAnimations(defs) {
    this.requireUnbuilt("use animations");
    Object.assign(this.animations, defs);
    return this;
  }
  /**
   * Play an effect across the whole viewport (specs/EFFECT_EDITOR.md).
   *
   * The World counterpart to `ActorBuilder.addEffect`: that one filters one
   * actor's own pixels, this one filters everything the camera has drawn — the
   * underwater distortion covering the whole view, rather than a wobble on one
   * fish. Same document, same parameters; only the surface it lands on differs.
   *
   * Named to match `World.addEffect` so one Blockly block covers both: in a
   * `.world` file `world` is this builder, in an event handler it is the live
   * World, and `world.addEffect(…)` is right in both places. Once the world
   * exists this forwards to it, for the same reason — a viewport filter has no
   * relationship to the actors, so where the block sits relative to `load map`
   * must not decide whether it works.
   *
   * @param path     the effect's module path (`effects/underwater`)
   * @param document the parsed `.effect` file, imported as JSON by the bundler
   * @param values   values for the effect's declared parameters, by parameter id
   */
  addEffect(path, document, values) {
    if (this.built) {
      this.built.addEffect(path, document, values);
      return this;
    }
    if (this.effects.some((effect) => effect.path === path)) {
      return this;
    }
    this.effects.push(values ? { path, document, values } : { path, document });
    return this;
  }
  /**
   * Draw an image behind everything (BACKGROUNDS.md).
   *
   * Forwards once the world exists, for the reason `set` and `addEffect` do:
   * `set background to …` is a block a learner can place under `define world`
   * or in an event handler, `world` is this builder in one and the live World in
   * the other, and the same call has to be right in both.
   */
  setBackground(sprite, layer = 0) {
    if (this.built) {
      this.built.setBackground(sprite, layer);
      return this;
    }
    this.backdropAt(layer).sprite = sprite;
    return this;
  }
  /** Set the colour behind the backdrop. See {@link World.setBackgroundColor}. */
  setBackgroundColor(color) {
    if (this.built) {
      this.built.setBackgroundColor(color);
      return this;
    }
    this.backdropAt(0).color = rgba(color);
    return this;
  }
  /**
   * Play an effect on the backdrop's own pixels, not on the whole camera.
   *
   * @param path     the effect's module path (`effects/ripple`)
   * @param document the parsed `.effect` file, imported as JSON by the bundler
   * @param values   values for the effect's declared parameters, by parameter id
   * @param layer    which backdrop; 0 is the one the blocks address
   */
  addBackgroundEffect(path, document, values, layer = 0) {
    if (this.built) {
      this.built.addBackgroundEffect(path, document, values, layer);
      return this;
    }
    const effects = this.backdropAt(layer).effects;
    if (effects.some((effect) => effect.path === path)) {
      return this;
    }
    effects.push(values ? { path, document, values } : { path, document });
    return this;
  }
  /** Stop an effect on the backdrop. Removing one not playing is a no-op. */
  removeBackgroundEffect(path, layer = 0) {
    if (this.built) {
      this.built.removeBackgroundEffect(path, layer);
      return this;
    }
    const effects = this.backdropAt(layer).effects;
    const index = effects.findIndex((effect) => effect.path === path);
    if (index >= 0) {
      effects.splice(index, 1);
    }
    return this;
  }
  /**
   * The described layer `n`, creating the layers up to it. Mirrors the World's
   * own, so a description and a live world grow alike.
   */
  backdropAt(layer) {
    const index = Math.max(0, Math.floor(layer));
    while (this.backdrops.length <= index) {
      this.backdrops.push({
        color: this.backdrops.length === 0 ? rgba(DEFAULT_BACKDROP_COLOR) : [0, 0, 0, 0],
        effects: []
      });
    }
    return this.backdrops[index];
  }
  /**
   * The world this describes, built on first use and returned unchanged after.
   *
   * Memoized on purpose, and the preview depends on it: an unchanged project
   * re-imports to the same module instance, so the same builder hands back the
   * world that is already running, and the preview can tell there is nothing to
   * reload (worldPreviewWorkerManager, specs/EFFECTS_PLAN.md §13).
   */
  getWorld() {
    this.built ??= this.instantiate();
    return this.built;
  }
  /**
   * Register an actor template under the name a Map refers to it by.
   *
   * Declarative — it records a template rather than placing anything — so it
   * may come before or after the world is built.
   */
  define(type, builder) {
    this.types.set(type, builder);
    return this;
  }
  /**
   * Place one actor now, and hand it back so the caller can set values on it.
   */
  addActor(builder, id, type) {
    const world = this.getWorld();
    const actor = builder.instantiate(
      this.resolveInstanceId(world, builder, id),
      type
    );
    world.addActor(actor);
    return actor;
  }
  /** Remove every actor. */
  clear() {
    this.getWorld().clearActors();
  }
  /**
   * Place the actors a Map describes.
   *
   * A world may load several — a level and a HUD, say. Loading is additive, so
   * they stack in call order; `clear()` first to replace rather than add.
   */
  loadMap(map) {
    const world = this.getWorld();
    const lookup = this.propertyLookup(world);
    const added = [];
    for (const entry of map.actors) {
      const builder = this.types.get(entry.type);
      if (!builder) {
        throw new Error(
          `World '${this.id}': map references unregistered actor type '${entry.type}' (register it with define())`
        );
      }
      const actor = builder.instantiate(
        this.resolveInstanceId(world, builder, entry.id),
        entry.type
      );
      for (const [ownerId, props] of Object.entries(entry.properties ?? {})) {
        for (const [propId, value] of Object.entries(props)) {
          const property = lookup.get(`${ownerId}.${propId}`);
          if (property && actor.hasProperty(property)) {
            actor.set(property, value);
          }
        }
      }
      world.addActor(actor);
      added.push(actor);
    }
    return added;
  }
  /**
   * Choose a unique instance id. The requested id (an explicit one, else the
   * builder's) is used verbatim when free. On collision we keep as much of the
   * caller's stability as they gave us: an explicit *base* (e.g. a Blockly
   * block's id, which repeats when its `add` block runs in a loop) is kept and
   * disambiguated with an ordinal (`base`, `base#2`, …), stable as long as the
   * loop is; a bare template id (an anonymous repeat with no stable identity)
   * falls back to a random `type-uuid`.
   */
  resolveInstanceId(world, builder, explicitId) {
    const base = explicitId ?? builder.id;
    if (!world.hasActor(base)) {
      return base;
    }
    if (explicitId === void 0) {
      return `${builder.id}-${crypto.randomUUID()}`;
    }
    let ordinal = 2;
    while (world.hasActor(`${base}#${ordinal}`)) {
      ordinal += 1;
    }
    return `${base}#${ordinal}`;
  }
  /** Map `${ownerId}.${propId}` -> Property across the world's rules + traits. */
  propertyLookup(world) {
    const lookup = /* @__PURE__ */ new Map();
    const add = (property) => lookup.set(`${property.ownerId}.${property.id}`, property);
    for (const rule3 of world.activeRules()) {
      for (const property of Object.values(rule3.properties)) {
        add(property);
      }
      for (const trait of Object.values(rule3.traits)) {
        for (const property of Object.values(trait.properties)) {
          add(property);
        }
      }
    }
    return lookup;
  }
  /**
   * The rules this world runs under: what it asked for, over the foundation.
   *
   * Space and Appearance are not asked for. They are the two the engine
   * provides because a rule CANNOT provide them — a position is not something
   * a rule can invent, and animation reads sprite sheets the language cannot
   * see (builtinMeta) — so no world can meaningfully be without them, and
   * making a learner say `use rule Has Space` is asking them to affirm a
   * tautology before their game will run. `use rule` is left meaning what it
   * says: a mechanic in play, which is a choice.
   *
   * An explicit rule of the same id WINS. That is what keeps the foundation
   * from being a trap: eject Appearance into an authored `.rule` and name it,
   * and the world runs the learner's version rather than silently running the
   * built-in one it shadows.
   */
  rulesInPlay() {
    const claimed = new Set(this.rules.map((rule3) => rule3.id));
    return [
      ...FOUNDATION_RULES.filter((rule3) => !claimed.has(rule3.id)),
      ...this.rules
    ];
  }
  /**
   * Build a NEW World from this description.
   *
   * Distinct from `getWorld`, which memoizes: this is for callers that want a
   * throwaway (the thumbnail renderer builds one per picker refresh, and tests
   * build many).
   */
  instantiate() {
    return new World({
      id: this.id,
      name: this.name,
      rules: this.rulesInPlay(),
      overrides: [...this.overrides],
      animations: Object.entries(this.animations),
      effects: [...this.effects],
      backdrops: this.backdrops.map((backdrop) => ({ ...backdrop }))
    });
  }
};

// src/engine/core/Actor.ts
var coerce2 = (property, value) => {
  if (property.type === "vector" || property.type === "point") {
    return Vector.from(value);
  }
  if (property.type === "actors") {
    if (Array.isArray(value)) {
      return [...value];
    }
    return isActor(value) ? [value] : [];
  }
  return value;
};
var isActor = (value) => typeof value === "object" && value !== null && "traits" in value;
var Actor = class {
  /**
   * The world this actor is in, set when it is placed.
   *
   * An actor-scoped action or query is invoked as `(actor, …args)` — the engine
   * has no world to hand it — so without this, a body inside a trait could not
   * reach the other actors. "Is this one standing on any ground?" is a question
   * about the world, asked of an actor, and it was unaskable.
   *
   * Undefined until `World.addActor` places it, which is also the only thing
   * that sets it: an actor belongs to one world at a time, and it is the world
   * that decides.
   */
  world;
  id;
  /** The template (ActorBuilder id) this instance came from — a type tag. */
  type;
  name;
  membership = new DependencySet(
    (trait) => trait.requiredTraits,
    (trait) => trait.id
  );
  store = /* @__PURE__ */ new Map();
  handlers = /* @__PURE__ */ new Map();
  // Held, not interpreted: the engine never looks inside an effect document.
  // Mutable because effects can be added and removed while the game runs — the
  // driver re-reads this list every frame through `renderSnapshot`.
  appliedEffects;
  constructor(init) {
    this.id = init.id;
    this.type = init.type ?? init.id;
    this.name = init.name;
    for (const trait of init.traits) {
      this.membership.add(trait);
    }
    for (const trait of this.membership.items()) {
      for (const property of Object.values(trait.properties)) {
        this.store.set(property, coerce2(property, property.default));
      }
    }
    for (const [property, value] of init.overrides) {
      this.store.set(property, coerce2(property, value));
    }
    for (const [event, handler] of init.handlers) {
      this.on(event, handler);
    }
    this.appliedEffects = init.effects ? [...init.effects] : [];
  }
  get(property) {
    if (!this.store.has(property)) {
      throw new Error(
        `Actor '${this.id}' has no property '${property.id}' (is trait '${property.ownerId}' applied?)`
      );
    }
    return this.store.get(property);
  }
  /** Set a property's value; returns `this` so instance setup can chain. */
  set(property, value) {
    this.store.set(property, coerce2(property, value));
    return this;
  }
  /** Whether this actor has the given trait (directly or by dependency). */
  has(trait) {
    return this.membership.has(trait);
  }
  query(query, ...args) {
    return query.evaluate(this, ...args);
  }
  act(action, ...args) {
    action.apply(this, ...args);
  }
  on(event, handler) {
    const list = this.handlers.get(event);
    if (list) {
      list.push(handler);
    } else {
      this.handlers.set(event, [handler]);
    }
  }
  /** Handlers registered for `event`; used by the EventQueue on flush. */
  handlersFor(event) {
    return this.handlers.get(event) ?? [];
  }
  /**
   * What this actor responds to, and with what — one `<event>@<hash of the
   * handler's source>` per registered handler, in the order they will run.
   *
   * For `World.snapshot`, so the hot-reload reconciler can see a handler being
   * added, removed, reordered or REWRITTEN. Nothing else in the snapshot says a
   * handler exists: an actor that gains a `when tapped` block has the same
   * traits, properties and effects it had a moment ago, so without this the
   * reconciler reads the rebuild as "nothing structural changed", patches the
   * running world, and the actors keep the handlers `ActorBuilder.instantiate`
   * copied into them — a deleted block that still fires.
   *
   * The source text, because that is the only handle a compiled closure gives
   * us and it is a good one: it changes when the block's body changes, so
   * editing what a handler DOES restarts the game too. Its limit is what
   * `Function.prototype.toString` cannot see — a value the handler closes over
   * rather than inlines reads as the same handler. Blockly inlines its
   * arguments, so that is a narrow gap in practice.
   */
  handlerIds() {
    const ids = [];
    for (const [event, handlers] of this.handlers) {
      for (const handler of handlers) {
        ids.push(`${event.ownerId}.${event.id}@${fnv1a(handler.toString())}`);
      }
    }
    return ids;
  }
  /** The traits present on this actor, in application order. */
  traits() {
    return this.membership.items();
  }
  /** The effects played on this actor's image, in application order. */
  effects() {
    return this.appliedEffects;
  }
  /**
   * Start playing an effect on this actor, now — or retune one already playing.
   *
   * One entry per path, always: an actor either wears an effect or it does not,
   * so this never stacks. That is what makes it safe in an event that fires
   * every frame while a condition holds — "while hurt, glow" would otherwise
   * add a filter per frame until the frame rate died.
   *
   * But adding an effect already present is NOT a no-op, because the values may
   * differ. `add effect Tint` with a random color behind it means a new color
   * each time the handler runs, and returning early there would leave the first
   * color on screen forever with nothing to show why. Same effect, same single
   * filter, new settings.
   *
   * The driver notices on its next frame (it reconciles this list against what
   * is attached to the Game Object), so nothing here touches Phaser.
   */
  addEffect(path, document, values) {
    const spec = values ? { path, document, values } : { path, document };
    const index = this.appliedEffects.findIndex((effect) => effect.path === path);
    if (index >= 0) {
      this.appliedEffects[index] = spec;
      return this;
    }
    this.appliedEffects.push(spec);
    return this;
  }
  /**
   * Give every effect with this path a new graph, in place.
   *
   * Called by the hot-reload reconciler when a `.effect` file was edited; see
   * `World.setEffectDocument`.
   */
  setEffectDocument(path, document) {
    this.appliedEffects.forEach((effect, index) => {
      if (effect.path === path) {
        this.appliedEffects[index] = { ...effect, document };
      }
    });
  }
  /**
   * Retune this actor's copy of an effect, in place.
   *
   * See `World.setEffectValues`: knob settings are patchable where an
   * attachment is not, and each actor's copy has its own.
   *
   * @returns whether this actor carries that effect
   */
  setEffectValues(path, values) {
    const index = this.appliedEffects.findIndex((effect) => effect.path === path);
    if (index < 0) {
      return false;
    }
    this.appliedEffects[index] = values ? { ...this.appliedEffects[index], values } : {
      path: this.appliedEffects[index].path,
      document: this.appliedEffects[index].document
    };
    return true;
  }
  /** Stop playing an effect. Removing one the actor does not have is a no-op. */
  removeEffect(path) {
    const index = this.appliedEffects.findIndex((effect) => effect.path === path);
    if (index >= 0) {
      this.appliedEffects.splice(index, 1);
    }
    return this;
  }
  /** Whether this actor carries `property` (seeded by one of its traits). */
  hasProperty(property) {
    return this.store.has(property);
  }
};

// src/engine/builders/ActorBuilder.ts
var FOUNDATION_TRAITS = [PositionalTrait, AppearanceTrait];
var ActorBuilder = class {
  /** The template's id — the actor's type, and the default instance id. */
  id;
  name;
  traits = [];
  overrides = [];
  handlers = [];
  effects = [];
  constructor(opts) {
    this.id = opts.id;
    this.name = opts.name;
  }
  useTraits(traits) {
    this.traits = [...this.traits, ...traits];
    return this;
  }
  /** Override a trait property's initial value for this actor. */
  set(property, value) {
    this.overrides.push([property, value]);
    return this;
  }
  /** Respond to an event raised for this actor. */
  on(event, handler) {
    this.handlers.push([event, handler]);
    return this;
  }
  /**
   * Play an effect on this actor's image (specs/EFFECT_EDITOR.md).
   *
   * Sits beside `useTraits` rather than being one, because an effect is not
   * state the simulation touches: it declares no property and runs no step. The
   * engine only carries it out to `renderSnapshot`; the driver compiles the
   * graph to GLSL and hands it to Phaser as a filter.
   *
   * Named to match `Actor.addEffect`, and identical to it in signature and in
   * behavior. That is what lets ONE Blockly block serve both a template body
   * and an event handler: both bind the identifier `actor`, and the block emits
   * `actor.addEffect(…)` either way. `set` already worked like this; effects
   * differed only by an accident of naming.
   *
   * @param path     the effect's module path (`effects/ripple`) — its identity
   *   for shader registration, so the same effect on many actors is one program
   * @param document the parsed `.effect` file, imported as JSON by the bundler
   * @param values   values for the effect's declared parameters, by parameter
   *   id; anything omitted falls back to that parameter's own default
   */
  addEffect(path, document, values) {
    if (this.effects.some((effect) => effect.path === path)) {
      return this;
    }
    this.effects.push(values ? { path, document, values } : { path, document });
    return this;
  }
  /**
   * Create a live Actor from this description. `instanceId` is the unique id the
   * world assigns (defaulting to this template's id). `type` is the actor's kind
   * — the identity `TouchingQuery` and other "actors of a type" lookups match on;
   * the world passes the module the actor was registered under (`actors/coin`),
   * so a template renamed via its `name` still matches. It defaults to the
   * builder's id when the caller gives none (engine tests, ad-hoc instances). The
   * builder is reusable — each call yields an independent actor, so one template
   * can be spawned many times.
   */
  instantiate(instanceId, type) {
    return new Actor({
      id: instanceId ?? this.id,
      type: type ?? this.id,
      name: this.name,
      traits: [...FOUNDATION_TRAITS, ...this.traits],
      overrides: [...this.overrides],
      handlers: [...this.handlers],
      effects: [...this.effects]
    });
  }
};

// src/engine/core/units.ts
var PIXELS_PER_UNIT = 100;

// src/engine/core/actorValue.ts
function all(value) {
  return Array.isArray(value) ? value : [value];
}
function each(value, body) {
  for (const actor of all(value)) {
    body(actor);
  }
}
function pushed(value, actor) {
  if (Array.isArray(value)) {
    value.push(actor);
    return value;
  }
  return value ? [value, actor] : [actor];
}
function one(value) {
  return Array.isArray(value) ? value[0] : value;
}

// src/engine/core/animationFile.ts
function fail(message) {
  throw new Error(`invalid animation file: ${message}`);
}
function isRecord(value) {
  return typeof value === "object" && value !== null;
}
function parseCell(id, index, value) {
  if (value === void 0) {
    return void 0;
  }
  if (!isRecord(value)) {
    fail(`"${id}" frame ${index} position must be an object`);
  }
  for (const k of ["x", "y", "width", "height"]) {
    if (typeof value[k] !== "number") {
      fail(`"${id}" frame ${index} position.${k} must be a number`);
    }
  }
  const cell = value;
  return { x: cell.x, y: cell.y, width: cell.width, height: cell.height };
}
function parseFrame(id, index, value) {
  if (!isRecord(value)) {
    fail(`"${id}" frame ${index} must be an object`);
  }
  if (typeof value.sprite !== "string" || value.sprite === "") {
    fail(`"${id}" frame ${index} needs a non-empty "sprite"`);
  }
  if (value.delay !== void 0 && (typeof value.delay !== "number" || !Number.isFinite(value.delay))) {
    fail(`"${id}" frame ${index} "delay" must be a number`);
  }
  let offset;
  if (value.offset !== void 0) {
    if (!isRecord(value.offset) || typeof value.offset.x !== "number" || typeof value.offset.y !== "number") {
      fail(`"${id}" frame ${index} offset must be {x, y} numbers`);
    }
    offset = { x: value.offset.x, y: value.offset.y };
  }
  if (value.scale !== void 0 && typeof value.scale !== "number") {
    fail(`"${id}" frame ${index} scale must be a number`);
  }
  return {
    sprite: value.sprite,
    delay: typeof value.delay === "number" ? value.delay : void 0,
    position: parseCell(id, index, value.position),
    offset,
    scale: typeof value.scale === "number" ? value.scale : void 0
  };
}
function parseDef(id, value) {
  if (!isRecord(value)) {
    fail(`animation "${id}" must be an object`);
  }
  if (!Array.isArray(value.frames) || value.frames.length === 0) {
    fail(`animation "${id}" needs a non-empty "frames" array`);
  }
  if (value.frameRate !== void 0 && (typeof value.frameRate !== "number" || !Number.isFinite(value.frameRate) || value.frameRate <= 0)) {
    fail(`animation "${id}" "frameRate" must be a positive number`);
  }
  return {
    loop: typeof value.loop === "boolean" ? value.loop : void 0,
    frameRate: typeof value.frameRate === "number" ? value.frameRate : void 0,
    frames: value.frames.map((frame, i) => parseFrame(id, i, frame))
  };
}
function parseAnimationFile(raw) {
  if (!isRecord(raw)) {
    fail("expected an object");
  }
  if (raw.type !== "animation") {
    fail(`expected type "animation", got ${JSON.stringify(raw.type)}`);
  }
  if (!isRecord(raw.animations)) {
    fail('missing "animations" map');
  }
  const out = {};
  for (const [id, def] of Object.entries(raw.animations)) {
    out[id] = parseDef(id, def);
  }
  return out;
}
export {
  Actor,
  ActorBuilder,
  AdvanceAnimationStep,
  AnimationEndedEvent,
  AnimationProperty,
  AnimationRule,
  AppearanceTrait,
  DEFAULT_BACKDROP_COLOR,
  DEFAULT_FRAME_DELAY,
  DependencySet,
  EventQueue,
  FrameChangedEvent,
  FrameProperty,
  IntrinsicSizeProperty,
  MoveAction,
  PIXELS_PER_UNIT,
  PositionProperty,
  PositionalTrait,
  ResizeAction,
  RotateAction,
  RotationProperty,
  RuleBuilder,
  ScaleAction,
  ScaleProperty,
  Scheduler,
  SkewProperty,
  SpatialRule,
  SpriteCellOriginProperty,
  SpriteCellSizeProperty,
  SpriteProperty,
  Trait,
  Vector,
  World,
  WorldBuilder,
  all,
  each,
  frameDelay,
  one,
  parseAnimationFile,
  playAnimation,
  pushed,
  rgb,
  rgba,
  toHex
};
