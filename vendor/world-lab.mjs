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
  addAction(id, apply2, opts = {}) {
    if (this.frozen) {
      frozenError(this.id);
    }
    const action = {
      id,
      name: opts.name,
      ownerId: this.id,
      params: opts.params,
      apply: apply2
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
  addAction(id, apply2, opts = {}) {
    this.assertMutable();
    const action = {
      id,
      name: opts.name,
      ownerId: this.id,
      params: opts.params,
      apply: apply2
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
  /**
   * Add a per-tick step that runs in a named moment of the frame
   * (core/phases).
   *
   * What a rule says instead of naming a neighbor: gravity is a force, so it
   * runs in `push`, and it need not know that Physics exists to say so.
   */
  addStepIn(id, phase, run) {
    return this.registerStep(id, run, { kind: "phase", phase });
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

// src/engine/core/Vector.ts
var RAD_TO_DEG = 180 / Math.PI;
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
  /**
   * Which way this points, in degrees — 0 is to the right, 90 is DOWN.
   *
   * Clockwise, because y is down: the same convention `rotate` turns in and
   * the same one an actor's `rotation` is drawn with, so the angle of a
   * velocity IS the rotation that faces along it. That is the whole reason
   * this exists — "point at the thing you are moving toward" was not sayable,
   * because nothing anywhere turned a direction into an angle.
   *
   * A zero vector points nowhere; `Math.atan2(0, 0)` is 0, and 0 (to the
   * right) is as good an answer as any for a question with none.
   */
  angle() {
    return Math.atan2(this.y, this.x) * RAD_TO_DEG;
  }
  /**
   * The vector pointing `degrees` round, this long — `angle`'s inverse.
   *
   * The other half of the same missing pair: `angle` reads a direction off a
   * vector, and this makes one from a direction, which is what "thrust the way
   * I am facing" needs.
   */
  static fromAngle(degrees, length = 1) {
    const r = degrees * DEG_TO_RAD;
    return new _Vector(Math.cos(r) * length, Math.sin(r) * length);
  }
  equals(other) {
    return this.x === other.x && this.y === other.y;
  }
  clone() {
    return new _Vector(this.x, this.y);
  }
};

// src/engine/core/Layer.ts
var DEFAULT_LAYER_ID = "main";
var emptySlot = () => ({
  effects: [],
  offset: new Vector(0, 0),
  repeat: false
});
var slotFrom = (slot) => ({
  ...emptySlot(),
  ...slot?.sprite ? { sprite: slot.sprite } : {},
  repeat: slot?.repeat ?? false,
  offset: slot?.offset ? new Vector(slot.offset.x, slot.offset.y) : new Vector(0, 0)
});
function layersOfMap(layers) {
  const made = (layers ?? []).map((layer) => ({
    ...makeLayer({
      id: layer.id,
      name: layer.name,
      parallax: layer.parallax ? new Vector(layer.parallax.x, layer.parallax.y) : void 0,
      fit: layer.fit
    }),
    background: slotFrom(layer.background),
    foreground: slotFrom(layer.foreground)
  }));
  return made.some((layer) => layer.id === DEFAULT_LAYER_ID) ? made : [makeLayer({ id: DEFAULT_LAYER_ID }), ...made];
}
function makeLayer(init) {
  return {
    id: init.id,
    name: init.name ?? init.id,
    parallax: init.parallax ? Vector.from(init.parallax) : new Vector(1, 1),
    fit: init.fit ?? false,
    effects: [],
    background: emptySlot(),
    foreground: emptySlot()
  };
}

// src/engine/rules/styled.ts
var STYLED = {
  rule: "styled",
  trait: "hasAStyle",
  theme: "theme"
};
var rule = new RuleBuilder({
  id: STYLED.rule,
  name: "Styled",
  ability: "Has a Style"
});
var HasAStyleTrait = rule.addTrait({
  id: STYLED.trait,
  name: "Has a Style"
});
var ThemeProperty = HasAStyleTrait.addProperty(
  STYLED.theme,
  "string",
  "",
  { name: "theme" }
);
var StyledRule = rule.build();

// src/engine/rules/viewport.ts
var VIEWPORT = {
  rule: "viewport",
  trait: "showsMap",
  map: "map",
  scroll: "scroll",
  content: "content",
  showsThrough: "showsThrough",
  showsMap: "showsMap",
  mirrorsTheWorld: "mirrorsTheWorld",
  mirrors: "mirrors"
};
var rule2 = new RuleBuilder({
  id: VIEWPORT.rule,
  name: "Viewport",
  ability: "Shows a Map"
});
var ViewportTrait = rule2.addTrait({
  id: VIEWPORT.trait,
  name: "Shows a Map"
});
var ViewportMapProperty = ViewportTrait.addProperty(
  VIEWPORT.map,
  "string",
  "",
  { name: "map" }
);
var ViewportScrollProperty = ViewportTrait.addProperty(
  VIEWPORT.scroll,
  "vector",
  { x: 0, y: 0 },
  { name: "scroll" }
);
var ViewportContentProperty = ViewportTrait.addProperty(
  VIEWPORT.content,
  "vector",
  { x: 0, y: 0 },
  { name: "content", readonly: true }
);
var ViewportShowsThroughProperty = ViewportTrait.addProperty(
  VIEWPORT.showsThrough,
  "string",
  "",
  { name: "shows through" }
);
var ViewportShowsMapEvent = rule2.addEvent(VIEWPORT.showsMap, {
  name: "shows a map"
});
var ViewportMirrorsTheWorldProperty = ViewportTrait.addProperty(
  VIEWPORT.mirrorsTheWorld,
  "boolean",
  false,
  { name: "mirrors the world" }
);
var ViewportMirrorsProperty = ViewportTrait.addProperty(VIEWPORT.mirrors, "actor", [], { name: "mirrors" });
var ViewportRule = rule2.build();

// src/engine/core/anchors.ts
var ANCHORS = [
  "top left",
  "top",
  "top right",
  "left",
  "center",
  "right",
  "bottom left",
  "bottom",
  "bottom right"
];
var isAnchor = (value) => typeof value === "string" && ANCHORS.includes(value);
var FRACTION = {
  "top left": { x: 0, y: 0 },
  top: { x: 0.5, y: 0 },
  "top right": { x: 1, y: 0 },
  left: { x: 0, y: 0.5 },
  center: { x: 0.5, y: 0.5 },
  right: { x: 1, y: 0.5 },
  "bottom left": { x: 0, y: 1 },
  bottom: { x: 0.5, y: 1 },
  "bottom right": { x: 1, y: 1 }
};
var anchorPoint = (size, anchor) => new Vector(size.x * FRACTION[anchor].x, size.y * FRACTION[anchor].y);
function anchored(at, anchor, map, view) {
  const from = anchorPoint(map, anchor);
  const to = anchorPoint(view, anchor);
  return new Vector(at.x - from.x + to.x, at.y - from.y + to.y);
}

// src/engine/core/spatialKeys.ts
var SPATIAL = {
  rule: "spatial",
  trait: "positional",
  position: "position",
  scale: "scale",
  rotation: "rotation",
  skew: "skew",
  intrinsicSize: "intrinsicSize",
  // The event every actor gets for nothing: it was placed in a world. Here
  // rather than only in the rule because `World.place` is what raises it, and
  // core reaches the rule's members by id (`World.renderSnapshot` does the
  // same for the transform).
  created: "created",
  // …and the other end of the same fact (`rules/spatial`).
  removed: "removed",
  // Parenting (specs/PARENTING.md): the actor this one is carried by, and the
  // four events a change of parent raises. The transform properties above hold
  // a child's LOCAL values; the world ones are derived (`core/parenting`).
  parent: "parent",
  gotParent: "gotParent",
  lostParent: "lostParent",
  gainedChild: "gainedChild",
  lostChild: "lostChild"
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
  // How solid the actor is drawn, 0 to 1. On APPEARANCE and not on the
  // positional foundation, which is the line a Camera falls on: it has a
  // position and no appearance (specs/VIEWPORT.md), and a camera you could
  // fade would be a camera nobody draws.
  opacity: "opacity",
  frame: "frame",
  elapsed: "elapsed",
  done: "done",
  playing: "playing",
  restart: "restart"
};

// src/engine/core/actorValue.ts
var LazyActors = class {
  walk;
  constructor(walk2) {
    this.walk = walk2;
  }
  [Symbol.iterator]() {
    return this.walk();
  }
};
function all(value) {
  if (Array.isArray(value)) {
    return value;
  }
  return value instanceof LazyActors ? [...value] : [value];
}
function each(value, body) {
  for (const actor of all(value)) {
    inHand(actor, () => body(actor));
  }
}
var inHand = (actor, fn) => actor.world ? actor.world.withActor(actor, fn) : fn();
function firstWhere(actors, where) {
  for (const actor of actors) {
    if (inHand(actor, () => where(actor))) {
      return [actor];
    }
  }
  return [];
}
function pushed(value, actor) {
  if (Array.isArray(value)) {
    value.push(actor);
    return value;
  }
  if (value instanceof LazyActors) {
    return [...all(value), actor];
  }
  return value ? [value, actor] : [actor];
}
function one(value) {
  if (Array.isArray(value)) {
    return value[0];
  }
  if (value instanceof LazyActors) {
    return value[Symbol.iterator]().next().value;
  }
  return value;
}
function walk(value) {
  if (value instanceof LazyActors || Array.isArray(value)) {
    return value;
  }
  return typeof value[Symbol.iterator] === "function" ? value : [value];
}
function held(value) {
  return value instanceof LazyActors ? value : [...walk(value)];
}
function filtered(value, where) {
  const source = held(value);
  return new LazyActors(function* () {
    for (const actor of source) {
      if (inHand(actor, () => where(actor))) {
        yield actor;
      }
    }
  });
}
function ordered(value, key, descending = false) {
  const keyed = [...walk(value)].map((actor) => ({ actor, key: key(actor) }));
  keyed.sort(
    (left, right) => descending ? right.key - left.key : left.key - right.key
  );
  return keyed.map((entry) => entry.actor);
}
function taken(value, count) {
  const source = held(value);
  return new LazyActors(function* () {
    if (count <= 0) {
      return;
    }
    let taken2 = 0;
    for (const actor of source) {
      yield actor;
      if (++taken2 >= count) {
        return;
      }
    }
  });
}
function extreme(value, key, most = false) {
  let best;
  let bestKey = 0;
  for (const actor of walk(value)) {
    const candidate = key(actor);
    if (!Number.isFinite(candidate)) {
      continue;
    }
    if (best === void 0 || (most ? candidate > bestKey : candidate < bestKey)) {
      best = actor;
      bestKey = candidate;
    }
  }
  return best ? [best] : [];
}
function firstOf(value) {
  for (const actor of walk(value)) {
    return [actor];
  }
  return [];
}
function inThisSpace(world, value) {
  const space = world.spaceOf(world.actorInHand());
  return filtered(value, (actor) => actor.space === space);
}
function isSameActor(a, b) {
  const one2 = firstOf(a)[0];
  return one2 !== void 0 && one2 === firstOf(b)[0];
}
function anyOf(value) {
  let chosen;
  let seen = 0;
  for (const actor of walk(value)) {
    seen += 1;
    if (Math.random() * seen < 1) {
      chosen = actor;
    }
  }
  return chosen ? [chosen] : [];
}

// src/engine/core/lists.ts
var LIST_TYPES = /* @__PURE__ */ new Set(["numbers", "words", "vectors"]);
var isListType = (type) => LIST_TYPES.has(type);
function asList(type, value) {
  if (!Array.isArray(value)) {
    return [];
  }
  return type === "vectors" ? value.map((item) => Vector.from(item)) : [...value];
}
var items = (value) => Array.isArray(value) ? value : [];
var VERSION = Symbol("list version");
function touched(list) {
  const stamped = list;
  stamped[VERSION] = (stamped[VERSION] ?? 0) + 1;
}
function versionOf(list) {
  return list[VERSION] ?? 0;
}
function addToFront(list, value) {
  if (Array.isArray(list)) {
    list.unshift(value);
    touched(list);
    return list;
  }
  return [value];
}
function takeFirst(list) {
  if (!Array.isArray(list)) {
    return void 0;
  }
  const first = list.shift();
  touched(list);
  return first;
}
function without(list, place) {
  const all2 = items(list);
  const at = Math.trunc(Number(place));
  if (!Number.isFinite(at) || at < 1 || at > all2.length) {
    return [...all2];
  }
  return [...all2.slice(0, at - 1), ...all2.slice(at)];
}
function addTo(list, value) {
  if (Array.isArray(list)) {
    list.push(value);
    touched(list);
    return list;
  }
  return [value];
}
var indexes = /* @__PURE__ */ new WeakMap();
function keyFor(value) {
  if (typeof value === "number" || typeof value === "string") {
    return `${typeof value}:${value}`;
  }
  const place = value;
  return place && typeof place === "object" && typeof place.x === "number" && typeof place.y === "number" ? `place:${place.x},${place.y}` : void 0;
}
function listHas(list, value) {
  if (!Array.isArray(list)) {
    return items(list).some((item) => sameValue(item, value));
  }
  const wanted = keyFor(value);
  if (wanted === void 0) {
    return list.some((item) => sameValue(item, value));
  }
  const version = versionOf(list);
  let index = indexes.get(list);
  if (!index || index.version !== version) {
    const keys2 = /* @__PURE__ */ new Set();
    for (const item of list) {
      const key = keyFor(item);
      if (key === void 0) {
        return list.some((item_) => sameValue(item_, value));
      }
      keys2.add(key);
    }
    index = { version, keys: keys2 };
    indexes.set(list, index);
  }
  return index.keys.has(wanted);
}
function sameValue(one2, other) {
  if (one2 === other) {
    return true;
  }
  const place = (value) => typeof value === "object" && value !== null && typeof value.x === "number" && typeof value.y === "number" ? value : void 0;
  const a = place(one2);
  const b = place(other);
  return a !== void 0 && b !== void 0 && a.x === b.x && a.y === b.y;
}
var lastOf = (list) => items(list)[items(list).length - 1];
var itemOf = (list, n) => {
  const index = Math.floor(Number(n));
  return Number.isFinite(index) && index >= 1 ? items(list)[index - 1] : void 0;
};

// src/engine/core/traits.ts
var DependencySet = class {
  getDeps;
  keyOf;
  entries = /* @__PURE__ */ new Map();
  constructor(getDeps, keyOf2) {
    this.getDeps = getDeps;
    this.keyOf = keyOf2;
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

// src/engine/core/Traited.ts
var coerce = (property, value) => {
  if (property.type === "vector" || property.type === "point") {
    return Vector.from(value);
  }
  if (isListType(property.type)) {
    return asList(property.type, value);
  }
  if (property.type === "actors" || property.type === "actor") {
    const isActor = (candidate) => typeof candidate === "object" && candidate !== null && "traits" in candidate;
    const held2 = value instanceof LazyActors ? all(value) : value;
    if (property.type === "actor") {
      const one2 = Array.isArray(held2) ? held2[0] : held2;
      return isActor(one2) ? [one2] : [];
    }
    if (Array.isArray(held2)) {
      return [...held2];
    }
    return isActor(held2) ? [held2] : [];
  }
  return value;
};
var warned = /* @__PURE__ */ new Set();
var isTrait = (trait, doing) => {
  if (trait) {
    return true;
  }
  const message = `world-lab: ignored \u201C${doing}\u201D for a trait that does not exist. The rule that declared it may have been deleted or renamed \u2014 open the block and pick the trait again.`;
  if (!warned.has(message)) {
    warned.add(message);
    console.warn(message);
  }
  return false;
};
var Traited = class {
  membership = new DependencySet(
    (trait) => trait.requiredTraits,
    (trait) => trait.id
  );
  store = /* @__PURE__ */ new Map();
  /** What to call the holder in an error — `Actor 'coin'`, `Camera 'main'`. */
  describe;
  constructor(describe, traits, overrides = []) {
    this.describe = describe;
    for (const trait of traits) {
      if (isTrait(trait, "use trait")) {
        this.membership.add(trait);
      }
    }
    for (const trait of this.membership.items()) {
      for (const property of Object.values(trait.properties)) {
        this.store.set(property, coerce(property, property.default));
      }
    }
    for (const [property, value] of overrides) {
      this.store.set(property, coerce(property, value));
    }
  }
  get(property) {
    if (!this.store.has(property)) {
      throw new Error(
        `${this.describe} has no property '${property.id}' ` + (property.ownerKind === "actor" ? `(declared by the actor '${property.ownerId}' \u2014 is this one of those?)` : `(is trait '${property.ownerId}' applied?)`)
      );
    }
    return this.store.get(property);
  }
  set(property, value) {
    this.store.set(property, coerce(property, value));
  }
  /** Whether the slot exists at all — distinct from what is in it. */
  hasProperty(property) {
    return this.store.has(property);
  }
  /** Whether this holds the trait, directly or by dependency. */
  has(trait) {
    return isTrait(trait, "has trait") && this.membership.has(trait);
  }
  /**
   * Elect a trait after the fact, with the slots it brings.
   *
   * Slots that already exist keep their values, which is what makes this the
   * inverse of {@link removeTrait} rather than a reset: take a trait away and
   * put it back and the actor picks up where it left off. Only a property with
   * no slot at all is seeded, and its default is the seed — the constructor's
   * overrides were a fact about how this actor was BUILT, and there is nothing
   * to apply them to a second time.
   */
  addTrait(trait) {
    if (!isTrait(trait, "add trait")) {
      return;
    }
    this.membership.add(trait);
    for (const present of this.membership.items()) {
      for (const property of Object.values(present.properties)) {
        if (!this.store.has(property)) {
          this.store.set(property, coerce(property, property.default));
        }
      }
    }
  }
  /**
   * Drop a trait. Its steps stop running for this holder from the next frame —
   * `World.actors.with` re-filters every frame, so there is no list to update.
   *
   * THE SLOTS STAY. A property is read by anything holding a reference to it,
   * not only by the trait that declared it, so removing them would turn "this
   * camera stopped following" into a crash somewhere unrelated the next time
   * anything read the property. Keeping them also makes off-and-on preserve
   * state, which is what a toggle means. `hasProperty` is the question to ask
   * about a slot; `has` is the question about the trait.
   *
   * A trait that is only here because something else REQUIRES it does not go —
   * the count says so, and `DependencySet.remove` ignores a trait that was
   * never explicitly elected. That is silent by design: it is the same answer
   * as removing a trait the holder never had, and neither is worth stopping a
   * game over.
   */
  removeTrait(trait) {
    if (!isTrait(trait, "remove trait")) {
      return;
    }
    this.membership.remove(trait);
  }
  /** The traits in play, dependencies included. */
  traits() {
    return this.membership.items();
  }
  /**
   * The properties this thing has that no trait declared — its OWN.
   *
   * `traits()` is how everything else asks what an actor carries, and it
   * cannot answer for these: a `define property` invents no trait, on purpose
   * (`ActorBuilder.defineProperty`). So anything walking traits to find out
   * what may be configured missed them entirely — the map editor's inspector
   * showed none of them, and a map placement carrying one was dropped in
   * silence at load.
   *
   * Read off the STORE rather than kept in a second list, because the store is
   * already the answer to "what does this have a slot for": an own property's
   * slot comes from the override every instance is built with, and `ownerKind`
   * is what says a property came from a builder rather than a trait.
   */
  ownProperties() {
    return [...this.store.keys()].filter(
      (property) => property.ownerKind !== void 0
    );
  }
};

// src/engine/core/viewport.ts
var TILE_SIZE = 32;
function fitToTile(width, height) {
  const longest = Math.max(width, height);
  return longest > TILE_SIZE ? TILE_SIZE / longest : 1;
}
var VIEWPORT_TILES = 10;
var VIEWPORT_WIDTH = VIEWPORT_TILES * TILE_SIZE;
var VIEWPORT_HEIGHT = VIEWPORT_TILES * TILE_SIZE;

// src/engine/core/Camera.ts
var DEFAULT_CAMERA_ID = "main";
var RESTING_POSITION = () => new Vector(VIEWPORT_WIDTH / 2, VIEWPORT_HEIGHT / 2);
var isPosition = (property) => property.ownerId === SPATIAL.trait && property.id === SPATIAL.position;
var Camera = class {
  /**
   * The world this camera is in, set when the world takes it.
   *
   * The same back-reference an Actor carries, for the same reason: a
   * camera-scoped body is invoked as `(camera, …args)` — the engine has no
   * world to hand it — and a body like "follow the player" is a question about
   * the world asked of a camera. The generated preamble binds `const world =
   * camera.world`, exactly as an actor's binds it from the actor.
   */
  world;
  /**
   * The space this camera looks at, for a space that owns cameras of its own.
   *
   * `undefined` for the world's, which look at the root — `World.spaceOf`
   * answers with the root space for anything that names none, so the world's
   * cameras need say nothing and behave as they always have.
   *
   * WHY A CAMERA NEEDS TO KNOW. A camera step runs with its camera in hand
   * (`world.enter(camera)`, from the loop a camera-scoped trait step
   * generates), and what the world is asked without a subject — the map's size,
   * the size of the view — is answered for the space the thing in hand is in.
   * So `Camera Confined to the Map` asks `map size` and gets the space's bounds
   * and the Viewport's window rather than the world's, and confining a
   * Viewport's camera means what it says (specs/SPACE_CAMERAS_PLAN.md).
   */
  space;
  /**
   * The Viewport whose rectangle this camera draws into, for a camera a
   * Viewport owns.
   *
   * Distinct from {@link space} once a Viewport can mirror the world
   * (specs/MIRRORING_PLAN.md): a mirror's camera looks at the ROOT — so actor
   * queries with it in hand answer about the root — but is seen through the
   * Viewport's window, which is what `view size` and `Confined to the Map` have
   * to measure by. For a Viewport with a space of its own the two agree.
   */
  window;
  id;
  name;
  /** Mutable: moving the camera is the whole point of having one. */
  position;
  traited;
  constructor(init) {
    this.id = init.id;
    this.name = init.name ?? init.id;
    this.position = init.position ? new Vector(init.position.x, init.position.y) : RESTING_POSITION();
    this.traited = new Traited(
      `Camera '${init.id}'`,
      init.traits ?? [],
      init.overrides ?? []
    );
  }
  /** Whether this camera has the given trait, directly or by dependency. */
  has(trait) {
    return this.traited.has(trait);
  }
  /**
   * Elect a trait while the game runs, or drop one — see `core/Traited`, which
   * owns both and explains why a dropped trait leaves its properties behind.
   *
   * Returns `this` so a step can chain, matching `set` and `addEffect`.
   */
  addTrait(trait) {
    this.traited.addTrait(trait);
    return this;
  }
  removeTrait(trait) {
    this.traited.removeTrait(trait);
    return this;
  }
  /** The traits in play on it, dependencies included. */
  traits() {
    return this.traited.traits();
  }
  get(property) {
    if (isPosition(property)) {
      return this.position;
    }
    return this.traited.get(property);
  }
  /** Set a property; returns `this` so setup can chain, as an actor's does. */
  set(property, value) {
    if (isPosition(property)) {
      const to = value;
      this.position = new Vector(to.x, to.y);
      return this;
    }
    this.traited.set(property, value);
    return this;
  }
  /** Whether the slot exists at all — distinct from what is in it. */
  hasProperty(property) {
    return isPosition(property) || this.traited.hasProperty(property);
  }
};
function makeCamera(init) {
  return new Camera(init);
}

// src/engine/core/clock.ts
var TIME_PARTS = [
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "weekday"
];
var isTimePart = (value) => typeof value === "string" && TIME_PARTS.includes(value);
var NO_CLOCK = 946684800;
function partsOf(seconds, offsetMinutes = 0) {
  const at = new Date((Math.floor(seconds) + offsetMinutes * 60) * 1e3);
  return {
    year: at.getUTCFullYear(),
    month: at.getUTCMonth() + 1,
    day: at.getUTCDate(),
    hour: at.getUTCHours(),
    minute: at.getUTCMinutes(),
    second: at.getUTCSeconds(),
    // `getUTCDay` is 0 for Sunday; this counts Monday as one, so Sunday is
    // seven and the working week reads 1–5.
    weekday: (at.getUTCDay() + 6) % 7 + 1
  };
}
var partOf = (seconds, part, offsetMinutes = 0) => partsOf(seconds, offsetMinutes)[part];
var TIME_STYLES = ["date", "clock", "both"];
var pad = (value, width = 2) => String(Math.abs(value)).padStart(width, "0");
function timeText(seconds, style = "date", offsetMinutes = 0) {
  const at = partsOf(seconds, offsetMinutes);
  const date = `${pad(at.year, 4)}-${pad(at.month)}-${pad(at.day)}`;
  const clock = `${pad(at.hour)}:${pad(at.minute)}`;
  if (style === "date") {
    return date;
  }
  return style === "clock" ? clock : `${date} ${clock}`;
}

// src/engine/core/color.ts
var clamp01 = (value) => Number.isFinite(value) ? Math.min(1, Math.max(0, value)) : 0;
function channels(value) {
  if (Array.isArray(value)) {
    const at = (index, fallback) => clamp01(Number(value[index] ?? fallback));
    return [at(0, 0), at(1, 0), at(2, 0), at(3, 1)];
  }
  const text2 = String(value ?? "").trim();
  const short = /^#?([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])?$/i.exec(text2);
  const long = /^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i.exec(text2);
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
function cssColor(value) {
  if (!Array.isArray(value)) {
    return String(value ?? "");
  }
  const [r, g, b, a] = channels(value);
  const byte = (channel) => Math.round(channel * 255);
  return `rgba(${byte(r)}, ${byte(g)}, ${byte(b)}, ${a})`;
}
function toHex(color) {
  const channel = (index) => Math.round(clamp01(Number(color?.[index] ?? 0)) * 255).toString(16).padStart(2, "0");
  return `#${channel(0)}${channel(1)}${channel(2)}`;
}

// src/engine/core/hash.ts
function fnv1a(text2) {
  let value = 2166136261;
  for (let index = 0; index < text2.length; index++) {
    value ^= text2.charCodeAt(index);
    value += (value << 1) + (value << 4) + (value << 7) + (value << 8) + (value << 24);
  }
  return (value >>> 0).toString(36);
}

// src/engine/core/drawing.ts
var TEXT_ANCHORS = [
  "top left",
  "top",
  "top right",
  "left",
  "center",
  "right",
  "bottom left",
  "bottom",
  "bottom right"
];
var DEFAULT_FILL = "#ffffff";
var CommandPen = class {
  commands = [];
  currentFill = DEFAULT_FILL;
  currentStroke = void 0;
  currentWidth = 1;
  currentRadius = 0;
  currentShadow = void 0;
  currentBold = false;
  paint() {
    return {
      ...this.currentFill === void 0 ? {} : { fill: this.currentFill },
      ...this.currentStroke === void 0 ? {} : { stroke: this.currentStroke },
      strokeWidth: this.currentWidth,
      ...this.currentShadow === void 0 ? {} : { shadow: this.currentShadow }
    };
  }
  // SETTLED HERE, not in the driver. A color arrives as a hex string or as
  // four floats depending on which block produced it (`core/color`), and a
  // command carries the paint it was drawn with — so the command list, which
  // is also the cache key, should hold one spelling of a color rather than
  // two spellings of the same one.
  /**
   * AN UNSET COLOUR LEAVES WHAT THE PEN HAD, which is the third state a colour
   * needs and did not have.
   *
   * `text color` is a per-instance property, so a Button's caption reads it —
   * and its default was `#ffffff`, which is not a choice anybody made and
   * which overrode whatever the actor's style had just set. Classic's dark
   * caption therefore never landed, and a white caption sat on a light grey
   * face (specs/STYLES_PLAN.md).
   *
   * So that default is now EMPTY, and painting with an empty colour keeps
   * what was there. It is the same absent-leaves-alone rule a style field
   * already follows, one level down, and it needs no branch in any drawing:
   * every text row is preceded by its `use style`, so there is always a
   * class-provided fill underneath. A project with no theme is unchanged,
   * because the pen's own default fill is `#ffffff` — exactly what the
   * property's default was.
   *
   * `no fill` remains how a drawing says NONE. Empty is "I have no opinion";
   * none is an opinion.
   */
  fill(color) {
    const settled = cssColor(color);
    if (settled === "") {
      return;
    }
    this.currentFill = settled;
  }
  outline(color, width) {
    this.currentStroke = cssColor(color);
    this.currentWidth = width;
  }
  noFill() {
    this.currentFill = void 0;
  }
  noOutline() {
    this.currentStroke = void 0;
  }
  /**
   * Round corners, from here on.
   *
   * NO `noCorner()` TO GO WITH IT, where fill and outline each have their
   * absence as a block. A radius of zero IS square and reads as square; an
   * absent fill is not a fill of nothing, which is why those two needed a
   * word of their own and this does not.
   *
   * Clamped at zero because a negative radius is not a shape — `roundRect`
   * throws on one, and a drawing that computed its corner from the box would
   * take the whole picture down for a box briefly smaller than nothing.
   */
  corner(radius) {
    this.currentRadius = Math.max(0, radius);
  }
  shadow(color, blur, offsetY) {
    this.currentShadow = {
      color: cssColor(color),
      blur: Math.max(0, blur),
      offsetY
    };
  }
  noShadow() {
    this.currentShadow = void 0;
  }
  weight(bold) {
    this.currentBold = bold;
  }
  /**
   * Take a style, field by field.
   *
   * A STYLE THAT IS NOT THERE CHANGES NOTHING. Naming a style the active
   * theme lacks leaves the pen exactly as it was — which draws the control in
   * whatever came before, usually the pen's own white. That is on purpose:
   * the alternative is a control that vanishes, and a learner cannot act on a
   * thing that is not on the screen. The theme keeps the name so a sandbox
   * can say which one was missing (`ResolvedTheme.unresolved`).
   *
   * ABSENT LEAVES ALONE, NULL CLEARS. A style that says nothing about the
   * outline keeps whatever outline the pen had, so `use style ⟨chosen row⟩`
   * can change a fill and keep a corner; one that says `"stroke": null` means
   * no outline and says so.
   */
  useStyle(style) {
    if (!style) {
      return;
    }
    if (style.fill !== void 0) {
      this.currentFill = style.fill ?? void 0;
    }
    if (style.stroke !== void 0) {
      this.currentStroke = style.stroke ?? void 0;
    }
    if (style.strokeWidth !== void 0) {
      this.currentWidth = style.strokeWidth;
    }
    if (style.corner !== void 0) {
      this.currentRadius = Math.max(0, style.corner);
    }
    if (style.shadow !== void 0) {
      this.currentShadow = style.shadow ?? void 0;
    }
    if (style.weight !== void 0) {
      this.currentBold = style.weight === "bold";
    }
  }
  rectangle(x, y, width, height) {
    this.commands.push({
      op: "rectangle",
      x,
      y,
      width,
      height,
      // Never wider than the box can hold: two corners of half the width
      // each meet in the middle, and asking for more draws a shape the
      // canvas has no room for. Said here rather than in the driver so the
      // KEY says what was drawn.
      ...this.currentRadius > 0 ? { radius: Math.min(this.currentRadius, width / 2, height / 2) } : {},
      ...this.paint()
    });
  }
  circle(x, y, radius) {
    this.commands.push({ op: "circle", x, y, radius, ...this.paint() });
  }
  /**
   * A line is drawn in the outline color, FALLING BACK TO THE FILL.
   *
   * A line has no interior, so "the color" is the only paint it can mean. The
   * fallback is the whole of what stops the commonest first drawing anybody
   * writes — `draw line`, with the pen untouched — from producing nothing at
   * all and no way to find out why.
   */
  line(x1, y1, x2, y2) {
    const paint = this.paint();
    this.commands.push({
      op: "line",
      x1,
      y1,
      x2,
      y2,
      strokeWidth: paint.strokeWidth,
      ...paint.shadow === void 0 ? {} : { shadow: paint.shadow },
      ...paint.stroke === void 0 ? paint.fill === void 0 ? {} : { stroke: paint.fill } : { stroke: paint.stroke }
    });
  }
  text(text2, x, y, size, anchor, wrapWidth) {
    this.commands.push({
      op: "text",
      text: text2,
      x,
      y,
      size,
      anchor,
      // Absent rather than zero when there is no wrapping, because the command
      // list is a drawing's IDENTITY (`drawingKey`): a key carrying `0` for
      // every unwrapped line would differ from every drawing made before this
      // existed, and re-rasterize the lot.
      ...wrapWidth !== void 0 && wrapWidth > 0 ? { wrapWidth } : {},
      ...this.currentBold ? { weight: "bold" } : {},
      ...this.paint()
    });
  }
  image(sprite, x, y, cell) {
    this.commands.push({ op: "image", sprite, x, y, ...cell ? { cell } : {} });
  }
};
function drawingKey(width, height, commands) {
  return fnv1a(`${width}x${height}:${JSON.stringify(commands)}`);
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
  enqueue(event, actor, ...values) {
    this.pending.push({ event, actor, values });
  }
  size() {
    return this.pending.length;
  }
  /**
   * Dispatch every queued event to whatever elected to handle it — the actor
   * it happened to, or the world when it happened to nobody in particular. The
   * queue is snapshotted and cleared first, so an event a handler raises lands
   * in the now-empty queue and is dispatched on the next tick — bounding a tick
   * to one round of handlers and avoiding an in-tick feedback loop.
   */
  flush(world) {
    const batch = this.pending;
    this.pending = [];
    for (const { event, actor, values } of batch) {
      if (!actor) {
        for (const handler of world.handlersFor(event)) {
          handler(world, ...values);
        }
        continue;
      }
      for (const handler of actor.handlersFor(event)) {
        world.withActor(actor, () => handler(world, actor, ...values));
      }
    }
  }
};

// src/engine/core/keys.ts
var NAMED_KEYS = [
  ["space", " "],
  ["up arrow", "ArrowUp"],
  ["down arrow", "ArrowDown"],
  ["left arrow", "ArrowLeft"],
  ["right arrow", "ArrowRight"],
  ["enter", "Enter"],
  // THE EDITING KEYS, which are only in this table because of their capitals —
  // and which were missing, so a Text Input listening for `backspace` heard
  // `Backspace` and never fired. They make no CHARACTER, so they never arrive
  // as one (`rules/input`): a field that wants to delete has to hear them as
  // keys, and could not until they were named.
  ["backspace", "Backspace"],
  ["delete", "Delete"],
  ["tab", "Tab"],
  ["escape", "Escape"],
  // …AND THE MODIFIER, which is here for a different reason from the four
  // above. Shift already reached the pressed set under the browser's own name,
  // because anything the table does not hold keeps it — so `Shift` worked and
  // `shift` did not, and no author could pick either from a dropdown built
  // from this table. Naming it makes it choosable, which is what Shift+Tab
  // walking the focus backwards needs (`rules/tabNavigation`).
  //
  // It is NOT how a shifted letter is heard: `a` with shift held is the key
  // `a` and the character `A`, and the two arrive by different doors
  // (specs/UI_ACTORS.md).
  ["shift", "Shift"]
];
var KEY_REPEAT_DELAY = 0.4;
var KEY_REPEAT_INTERVAL = 0.06;
var RESERVED_KEYS = /* @__PURE__ */ new Set(["escape"]);
var BY_DOM_KEY = new Map(
  NAMED_KEYS.map(([name, domKey]) => [domKey, name])
);
var KEY_CHOICES = [
  ...NAMED_KEYS.map(([name]) => [name, name]),
  ..."abcdefghijklmnopqrstuvwxyz".split("").map((letter) => [letter.toUpperCase(), letter])
];

// src/engine/core/parenting.ts
var keys;
function registerParenting(next) {
  keys = next;
}
var parentingKeys = () => keys;
var isWorldTransformProperty = (property) => keys !== void 0 && (property === keys.position || property === keys.rotation || property === keys.scale);
function compose(parent, local) {
  return {
    position: parent.position.add(
      local.position.multiply(parent.scale).rotate(parent.rotation)
    ),
    rotation: parent.rotation + local.rotation,
    scale: parent.scale.multiply(local.scale)
  };
}
var unscale = (vector, by) => new Vector(
  by.x === 0 ? 0 : vector.x / by.x,
  by.y === 0 ? 0 : vector.y / by.y
);
function toLocal(parent, world) {
  return {
    position: unscale(
      world.position.subtract(parent.position).rotate(-parent.rotation),
      parent.scale
    ),
    rotation: world.rotation - parent.rotation,
    scale: unscale(world.scale, parent.scale)
  };
}
function localTransformOf(actor) {
  if (!keys) {
    throw new Error("world-lab: parenting is not registered");
  }
  return {
    position: actor.local(keys.position),
    rotation: actor.local(keys.rotation),
    scale: actor.local(keys.scale)
  };
}
function worldTransformOf(actor) {
  const local = localTransformOf(actor);
  const parent = actor.parent();
  return parent ? compose(worldTransformOf(parent), local) : local;
}
function isDescendantOf(candidate, actor) {
  const seen = /* @__PURE__ */ new Set();
  for (let at = candidate; at; at = at.parent()) {
    if (at === actor) {
      return true;
    }
    if (seen.has(at)) {
      return false;
    }
    seen.add(at);
  }
  return false;
}

// src/engine/core/phases.ts
var PHASES = [
  {
    id: "sense",
    name: "sense",
    subject: "world",
    summary: "Read the outside world \u2014 keys, pointer, timers."
  },
  {
    id: "decide",
    name: "decide",
    subject: "actor",
    summary: "Turn intent into motion: what the player asked for, what an enemy chose."
  },
  {
    id: "push",
    name: "push",
    subject: "actor",
    summary: "Add forces to velocity \u2014 gravity, wind, a magnet."
  },
  {
    id: "move",
    name: "move",
    subject: "actor",
    summary: "Turn velocity into position."
  },
  {
    id: "adjust",
    name: "adjust",
    subject: "actor",
    summary: "Correct a position after moving \u2014 wrap at the edges, clamp to the map, snap to a grid."
  },
  {
    id: "touch",
    name: "touch",
    subject: "actor",
    summary: "Work out what is against what."
  },
  {
    id: "settle",
    name: "settle",
    subject: "actor",
    summary: "Push overlapping bodies apart."
  },
  {
    id: "react",
    name: "react",
    subject: "actor",
    summary: "Respond to what happened \u2014 landing, damage, scoring, which animation to play."
  },
  {
    id: "choose",
    name: "choose the camera",
    subject: "camera",
    summary: "Decide which camera the view is taken through."
  },
  {
    id: "aim",
    name: "aim",
    subject: "camera",
    summary: "Choose where the camera wants to look."
  },
  {
    id: "steady",
    name: "steady the aim",
    subject: "camera",
    summary: "Adjust WHERE it is looking before deciding how fast to get there \u2014 a deadzone the subject may move inside, or leading where it is going."
  },
  {
    id: "smooth",
    name: "smooth",
    subject: "camera",
    summary: "Soften the approach \u2014 how much of the way to travel this frame."
  },
  {
    id: "confine",
    name: "confine",
    subject: "camera",
    summary: "Keep the view somewhere legal \u2014 inside the map, on one axis."
  },
  {
    id: "view",
    name: "take the view",
    subject: "camera",
    summary: "Commit the choice: the camera moves to where it decided to look."
  }
];
var INDEX = new Map(PHASES.map((phase, at) => [phase.id, at]));
var phaseIndex = (id) => INDEX.get(id);

// src/engine/core/ruleIds.ts
var placement = (order) => order.kind === "before" || order.kind === "after" ? `${order.kind} ${order.anchor.ownerId}.${order.anchor.id}` : order.kind;
function codeOf(rule6) {
  const parts = [];
  const each2 = (record, write) => Object.keys(record).sort().forEach((key) => write(record[key]));
  each2(
    rule6.steps,
    (step) => parts.push(`step ${step.id} ${placement(step.order)} ${step.run}`)
  );
  each2(
    rule6.actions,
    (action) => parts.push(`action ${action.id} ${action.apply}`)
  );
  each2(
    rule6.queries,
    (query) => parts.push(`query ${query.id} ${query.evaluate}`)
  );
  each2(rule6.traits, (trait) => {
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
function ruleContentHash(rule6) {
  return fnv1a(codeOf(rule6));
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
  /**
   * Run every step in order, once, for this tick — or only the ones `only`
   * admits, which is how a paused world keeps sensing while nothing moves
   * (`World.pause`).
   */
  run(world, delta, only) {
    for (const step of this.ordered) {
      if (only && !only(step)) {
        continue;
      }
      world.beginStep();
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
  const byPhase = /* @__PURE__ */ new Map();
  for (const step of steps) {
    if (step.order.kind !== "phase") {
      continue;
    }
    const at = phaseIndex(step.order.phase);
    if (at === void 0) {
      continue;
    }
    const group = byPhase.get(at) ?? [];
    byPhase.set(at, group);
    group.push(step);
  }
  const populated = [...byPhase.keys()].sort((a, b) => a - b);
  for (let i = 1; i < populated.length; i++) {
    for (const earlier of byPhase.get(populated[i - 1]) ?? []) {
      for (const later of byPhase.get(populated[i]) ?? []) {
        addEdge(earlier, later);
      }
    }
  }
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

// src/engine/core/Space.ts
var ROOT_SPACE_ID = "main";
var Space = class {
  id;
  /** The Viewport this is the space of; none for the root. */
  owner;
  /** How big the space is — the largest map loaded into it. */
  bounds;
  /**
   * The cameras this space may be seen through, its main one first.
   *
   * EMPTY FOR THE ROOT, whose cameras are the world's own `cameraList` — the
   * world owns them directly, having no placement to own them for it
   * (specs/SPACE_CAMERAS_PLAN.md). A Viewport's are here because a camera's
   * position belongs to a space and means nothing in another, so a Viewport
   * showing a different scene cannot share the world's.
   *
   * A LIST because a Viewport may want more than one framing — a wide shot and
   * a chase — exactly as the world may. Which of them the view is taken
   * through is the Viewport's own business to say; until it does, it is the
   * first, which is the space's `main`.
   */
  cameras;
  /**
   * Which of this space's cameras the view is taken through, by name.
   *
   * Kept in step with the owning Viewport's `shows through` property once a
   * tick (`World.settleSpaces`), which is where the same sync notices a change
   * to the map it holds. Here rather than read from the property directly
   * because a space has no way to ask one: properties belong to rules, and a
   * space is core.
   */
  activeCameraName = DEFAULT_CAMERA_ID;
  /**
   * The camera the space is currently seen through, if it has any.
   *
   * The one `activeCameraName` names, or the space's main camera — which is the
   * first, always exists and cannot be taken away. `undefined` for the root,
   * whose view is taken through the world's active camera as it always was.
   *
   * A name no camera has falls back rather than answering nothing, for the
   * reason `World.camera` does the same with an unknown id: the name arrives
   * from a field or from generated code, and a view through nothing is not a
   * better answer than a view through the default.
   */
  get camera() {
    return this.cameras.find((camera) => camera.name === this.activeCameraName) ?? this.cameras[0];
  }
  /**
   * One of this space's cameras by the name it was declared under.
   *
   * BY NAME AND NOT BY ID, because a space's camera ids carry the space —
   * `win:wide`, so that two Viewports may each have a `wide` and a list of
   * every camera in the world still tells them apart. What an author writes,
   * and what the Viewport's own property holds, is the bare name.
   */
  cameraNamed(name) {
    return this.cameras.find((camera) => camera.name === name);
  }
  /**
   * The space this Viewport SHOWS instead of one of its own — the root, or
   * another Viewport's — or undefined for a Viewport with a scene of its own
   * (specs/MIRRORING_PLAN.md).
   *
   * A mirror holds no loads and grows nothing: its bounds are its target's,
   * kept in step each tick, and its cameras look at the target — `Camera.space`
   * is the target for each of them, so `in this space`, `map size` and
   * everything else asked with one in hand answers about the scene it shows.
   * What stays the mirror's own is its cameras and its window.
   */
  mirrorOf;
  /** Whether this Viewport shows some other space's scene. */
  get mirrors() {
    return this.mirrorOf !== void 0;
  }
  /** The loads this space holds, oldest first — `unload` takes them back. */
  loads = [];
  /**
   * The space's own layers, back to front, from the map loaded into it
   * (specs/LAYERS_PLAN.md). Empty for the root, whose layers are the
   * world's and fixed when the world is built; a space's are the driver's
   * to build, so a map brings them.
   */
  layers = [];
  /**
   * The path the Viewport's `map` property held when its map was last
   * loaded, so a change to the property is noticed (`World.showHeldMap`).
   */
  shown;
  constructor(id, owner, bounds, cameras = []) {
    this.id = id;
    this.owner = owner;
    this.bounds = bounds;
    this.cameras = cameras;
  }
};

// src/engine/core/spatialIndex.ts
var CELL = 64;
var keyOf = (column, row) => (
  // A row is offset into the top half of a 32-bit pair; the map is sparse, so
  // this only has to be collision-free over the range a world spans.
  (row & 65535) << 16 | column & 65535
);
var SpatialIndex = class {
  buckets = /* @__PURE__ */ new Map();
  /** Put an actor in the bucket its middle falls in. */
  add(actor, at) {
    const key = keyOf(Math.floor(at.x / CELL), Math.floor(at.y / CELL));
    const bucket = this.buckets.get(key);
    if (bucket) {
      bucket.push(actor);
    } else {
      this.buckets.set(key, [actor]);
    }
  }
  /**
   * Every actor whose middle is within `radius` of `(x, y)`.
   *
   * Exact, not a candidate list: the buckets narrow it and the distance test
   * decides, so a caller never has to know this is a grid at all.
   *
   * Squared distances throughout — a square root per actor, to compare against
   * a number that could have been squared once, is the sort of arithmetic that
   * only shows up when there are a thousand of them.
   */
  near(x, y, radius, positionOf) {
    const found = [];
    if (!(radius >= 0)) {
      return found;
    }
    const reach = radius * radius;
    const from = Math.floor((x - radius) / CELL);
    const to = Math.floor((x + radius) / CELL);
    const top = Math.floor((y - radius) / CELL);
    const bottom = Math.floor((y + radius) / CELL);
    for (let row = top; row <= bottom; row++) {
      for (let column = from; column <= to; column++) {
        const bucket = this.buckets.get(keyOf(column, row));
        if (!bucket) {
          continue;
        }
        for (const actor of bucket) {
          const at = positionOf(actor);
          const dx = at.x - x;
          const dy = at.y - y;
          if (dx * dx + dy * dy <= reach) {
            found.push(actor);
          }
        }
      }
    }
    return found;
  }
};

// src/engine/core/textValue.ts
function text(value) {
  if (value === void 0 || value === null) {
    return "";
  }
  return Array.isArray(value) ? value.map(text).join(" ") : String(value);
}

// src/engine/core/theme.ts
var REFERENCE = /^\$(.+)$/;
var NO_THEME = {
  name: "",
  tokens: {},
  styles: /* @__PURE__ */ new Map(),
  unresolved: []
};
function follow(value, tokens, unresolved) {
  if (typeof value !== "string") {
    return value;
  }
  const match = REFERENCE.exec(value);
  if (!match) {
    return value;
  }
  const found = tokens[match[1]];
  if (found === void 0) {
    unresolved.push(value);
    return void 0;
  }
  return found;
}
var asNumber = (value) => {
  const number = typeof value === "string" ? Number(value) : value;
  return number === void 0 || !Number.isFinite(number) ? void 0 : number;
};
var asColor = (value) => value === void 0 ? void 0 : cssColor(String(value));
function resolveTheme(document, parentAt, seen = []) {
  const source = document ?? {};
  const unresolved = [];
  let inherited = NO_THEME;
  const parent = typeof source.extends === "string" ? source.extends : "";
  if (parent && parentAt) {
    if (seen.includes(parent)) {
      unresolved.push(`extends ${parent}`);
    } else {
      inherited = resolveTheme(parentAt(parent), parentAt, [...seen, parent]);
      unresolved.push(...inherited.unresolved);
    }
  }
  const tokens = { ...inherited.tokens, ...source.tokens ?? {} };
  const styles = new Map(inherited.styles);
  for (const [name, spec] of Object.entries(source.styles ?? {})) {
    if (!spec || typeof spec !== "object") {
      continue;
    }
    const style = {};
    if ("fill" in spec) {
      style.fill = spec.fill === null ? null : asColor(follow(spec.fill, tokens, unresolved)) ?? null;
    }
    if ("stroke" in spec) {
      style.stroke = spec.stroke === null ? null : asColor(follow(spec.stroke, tokens, unresolved)) ?? null;
    }
    if ("strokeWidth" in spec) {
      style.strokeWidth = asNumber(
        follow(spec.strokeWidth, tokens, unresolved)
      );
    }
    if ("corner" in spec) {
      style.corner = asNumber(follow(spec.corner, tokens, unresolved));
    }
    if ("weight" in spec) {
      style.weight = spec.weight === "bold" ? "bold" : "normal";
    }
    if ("shadow" in spec) {
      const cast = spec.shadow;
      style.shadow = cast === null || !cast ? null : {
        color: asColor(follow(cast.color, tokens, unresolved)) ?? "#000000",
        blur: Math.max(
          0,
          asNumber(follow(cast.blur, tokens, unresolved)) ?? 0
        ),
        offsetY: asNumber(follow(cast.down, tokens, unresolved)) ?? 0
      };
    }
    styles.set(name, { ...styles.get(name), ...style });
  }
  return {
    name: String(source.name ?? ""),
    tokens,
    styles,
    unresolved
  };
}

// src/engine/core/World.ts
var SENSE = phaseIndex("sense") ?? 0;
var whilePaused = (step) => step.order.kind === "phase" && (phaseIndex(step.order.phase) ?? Infinity) <= SENSE;
var MapLoad = class {
  unloadHandlers = [];
  world;
  /**
   * The list this load is ON, so it can take itself off.
   *
   * A space keeps its loads oldest first and nothing used to come off that
   * list except by clearing the whole of it — which was harmless while the
   * only question asked of it was "unload everything", and is wrong the
   * moment anything asks which load is on TOP. `go back` asks exactly that
   * (specs/SCREENS_PLAN.md).
   */
  among;
  /** Every actor this load placed, in placement order. */
  actors;
  /**
   * Whether this load COVERS what is under it — a dialog rather than a HUD.
   *
   * Input stops at the topmost modal load: everything placed by it or by a
   * load above it can be clicked, tabbed to and typed at, and everything
   * below cannot (`World.canReach`). A screen is modal; an overlay is not,
   * and the difference is not "which is on top" — an on-screen keyboard sits
   * ABOVE the form it types into and must not lock it out
   * (specs/MODALITY_PLAN.md).
   */
  modal;
  /** The theme this map named, or empty — see `WorldMap.theme`. */
  theme;
  constructor(world, actors, among = [], modal = false, theme = "") {
    this.world = world;
    this.actors = actors;
    this.among = among;
    this.modal = modal;
    this.theme = theme;
  }
  /**
   * Remove everything this load placed.
   *
   * Through `removeActor`, so a parent's children go with it and the
   * `is removed` events fire — the same removal a handler writes by hand —
   * and deferred to the end of the tick when asked mid-tick, as that is.
   * An actor already gone is skipped, not an error: a script that removed
   * the ball itself may still unload the level.
   */
  unload() {
    const at = this.among.indexOf(this);
    if (at >= 0) {
      this.among.splice(at, 1);
    }
    for (const handler of this.unloadHandlers) {
      handler(this.world);
    }
    for (const actor of this.actors) {
      this.world.removeActor(actor);
    }
  }
  /** Hear this load being unloaded — `when this map unloads`. */
  onUnload(handler) {
    this.unloadHandlers.push(handler);
  }
};
var slotValues = (layer, slot) => ({
  layer,
  ...slot.sprite === void 0 ? {} : { sprite: slot.sprite },
  offset: { x: slot.offset.x, y: slot.offset.y },
  repeat: slot.repeat
});
var DEFAULT_BACKDROP_COLOR = "#101020";
var coerce2 = (property, value) => {
  if (property.type === "vector" || property.type === "point") {
    return Vector.from(value);
  }
  if (isListType(property.type)) {
    return asList(property.type, value);
  }
  return value;
};
var CameraCollection = class {
  list;
  spaces;
  /**
   * `list` is the world's own cameras — the root space's. `spaces` answers with
   * the Viewport spaces, whose cameras are theirs (`Space.cameras`).
   *
   * BOTH, because a camera rule finds its subjects through here and a
   * Viewport's camera was never offered to one: the collection wrapped the
   * world's list alone, so following a subject had to be written a second time
   * in the engine (specs/SPACE_CAMERAS_PLAN.md).
   *
   * A function rather than the array, because Viewports are placed as a world
   * runs and a collection built once would answer about the spaces there were.
   */
  constructor(list, spaces) {
    this.list = list;
    this.spaces = spaces;
  }
  /** Every camera in the world, the root's first and then each space's. */
  all() {
    const found = [...this.list];
    for (const space of this.spaces()) {
      found.push(...space.cameras);
    }
    return found;
  }
  /** Every camera with a trait — a copy, so a body may add one while walking. */
  with(trait) {
    return this.all().filter((camera) => camera.has(trait));
  }
  [Symbol.iterator]() {
    return this.all()[Symbol.iterator]();
  }
};
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
   * (`actors/coin`).
   *
   * What `any ⟨Coin⟩` means everywhere except a handler's subject socket: the
   * coins there are, right now. (In that one socket it means the TEMPLATE, so
   * that a handler registered on it reaches the coins placed later too.)
   */
  ofType(type) {
    return this.list.filter((actor) => actor.type === type);
  }
  /**
   * Every actor drawn in a layer.
   *
   * A copy, like `ofType`, because a source is read once at the top of a loop —
   * a rule that adds actors while iterating them terminates. An unknown id
   * gives none rather than throwing, for the reason `addActor` gives about ids
   * that come from generated code naming a block.
   */
  inLayer(layer) {
    return this.list.filter((actor) => actor.layer === layer);
  }
  /**
   * A COPY, like the three above, and for the reason they give.
   *
   * This was the live array's iterator, which made the collection's one
   * un-copied exit the one a loop actually walks (`blockly/domainBlocks`'s
   * `actorSource` emits `world.actors` for a loop over `all actors`). Both ways
   * that goes wrong are reachable from blocks:
   *
   *   - a body that ADDS walks what it added, so `for each actor … do
   *     ⟨add actor⟩` never returns — a hung frame, not a wrong answer;
   *   - a body that REMOVES skips the next actor every time, because
   *     `removeActor` splices, so `for each actor … do ⟨remove actor⟩` removes
   *     half of them and says nothing.
   *
   * The second is the one worth the copy: "remove everything" is a sentence a
   * learner writes, and half-working is worse than failing.
   */
  [Symbol.iterator]() {
    return [...this.list][Symbol.iterator]();
  }
};
var STOP_ALL_SOUNDS = Symbol("stop all sounds");
var World = class {
  id;
  name;
  actors;
  membership = new DependencySet(
    (rule6) => rule6.requires,
    (rule6) => rule6.id
  );
  store = /* @__PURE__ */ new Map();
  actorList = [];
  /**
   * How many actors are in `actorList` under each id — the index that makes
   * {@link hasActor} a lookup rather than a scan.
   *
   * A COUNT and not the actor, because the list has never promised ids are
   * unique: `addActor(template, …)` goes through {@link resolveInstanceId} and
   * cannot collide, but the overload that places an actor somebody else built
   * takes whatever id it was given. A map to the actor would have to choose
   * which of two duplicates it held, and deleting one would leave `hasActor`
   * lying about the other. A count cannot: it is `some(…)` with the scan taken
   * out, and it answers the same for every input.
   *
   * WHY IT IS WORTH AN INDEX AT ALL: every `add actor` block passes its own
   * block id, so placing n of them from one block probes `id`, `id#2`, `id#3` …
   * — n²/2 probes, each of which WAS a scan of the whole list. `repeat 1000
   * times` cost 636ms of arithmetic before a single frame was drawn, and the
   * lesson that asks a learner to find where their machine gives out
   * (`simulation/many`) was measuring this instead.
   */
  actorsById = /* @__PURE__ */ new Map();
  /**
   * The ordinal {@link resolveInstanceId} should try FIRST for a base id.
   *
   * Without it the n-th actor from one block counts up from 2 again, so a
   * `repeat` of n costs n²/2 probes. It is a hint and not an answer — the
   * candidate is still checked — so the only thing it changes is where the
   * counting starts, and the only thing it gives up is REUSING an ordinal
   * freed by a removal. `bullet#5` staying spent after `bullet#5` dies is the
   * better answer anyway: an id that comes back refers to two different things
   * over one run.
   */
  nextOrdinal = /* @__PURE__ */ new Map();
  // Not readonly: an actor KIND can contribute per-frame steps of its own, and
  // a kind is not known until one of its actors is placed (`useActorKind`).
  scheduler;
  // Every step the world runs, rules' and actor kinds' alike, in the order they
  // were contributed — kept so a kind arriving later can be folded in without
  // asking the rules again.
  stepList = [];
  // Which actor kinds have already contributed, by the TYPE they were placed
  // under: a kind contributes once however many of it there are.
  kindsWithSteps = /* @__PURE__ */ new Set();
  /** How each kind that describes its own picture draws itself, by type. */
  kindDrawings = /* @__PURE__ */ new Map();
  /** The properties this world declared for itself — see `defineOwnProperty`. */
  ownProperties = [];
  events = new EventQueue();
  /**
   * Handlers for the world's own events, by event.
   *
   * On the World rather than on some actor standing in for it. `rules/input`
   * used to raise its key events once per actor per frame purely to have a
   * subject, and every `.actor` that cared had to register on itself.
   */
  worldHandlers = /* @__PURE__ */ new Map();
  /**
   * How big the world is; see `mapBounds`. One screen until a map is loaded.
   *
   * A VECTOR, not a `{width, height}`. The blocks that report it are typed
   * `Vector`, and every block that takes one apart reads `.x`/`.y` — so a pair
   * named the other way is a value whose own type is a lie about it, and the
   * failure is silent: `x of ⟨map size⟩` is `undefined`, the arithmetic around
   * it is NaN, and nothing throws.
   */
  get bounds() {
    return this.rootSpace.bounds;
  }
  set bounds(value) {
    this.rootSpace.bounds = value;
  }
  /**
   * The world's spaces (specs/VIEWPORT_PLAN.md): the root, which the main
   * map and every `load map` fill, and one per Viewport placed. Every actor
   * is in exactly one; see `Actor.space`.
   */
  rootSpace = new Space(
    ROOT_SPACE_ID,
    void 0,
    new Vector(VIEWPORT_WIDTH, VIEWPORT_HEIGHT)
    // No cameras of its own: the root's are the world's `cameraList`, which it
    // owns directly for want of a placement to own them for it
    // (specs/SPACE_CAMERAS_PLAN.md).
  );
  viewportSpaces = [];
  /**
   * The camera traits each kind elected, by type, for the main camera of the
   * space a Viewport of that kind gets (`ActorBuilder.useCameraTraits`).
   */
  kindCameraTraits = /* @__PURE__ */ new Map();
  /**
   * The actor IN HAND: the subject whose handler is running, the actor a
   * per-kind step or a loop is at, the candidate a predicate is asked about.
   * What the world is asked without an actor — the map's size, the mouse's
   * place, what is near a point, where to put a spawn — is answered for this
   * actor's space, so a rule written before spaces existed keeps meaning
   * what it meant in each space (specs/VIEWPORT_PLAN.md).
   */
  inHand = [];
  /** The project's maps by module path — see `defineMap`. */
  maps = /* @__PURE__ */ new Map();
  /**
   * How much of the world is on screen at once, in pixels — the game's native
   * resolution. Ten tiles square unless the world says otherwise
   * (`setViewSize`).
   */
  view = new Vector(VIEWPORT_WIDTH, VIEWPORT_HEIGHT);
  // Game seconds since the first tick — see `time`. Advanced by `tick` and by
  // nothing else, so a world nobody ticks stays at zero however long it exists.
  elapsed = 0;
  // Animations known to this world, by id — seeded from the active rules' stock
  // animations. The Animation rule's step and renderSnapshot resolve ids here.
  animationDefs = /* @__PURE__ */ new Map();
  /**
   * How big each of the project's images is, by file name.
   *
   * A fact about a file, not about any actor — which is why the world holds it
   * rather than an actor doing: two actors wearing one picture are the same
   * size, and neither of them is where that is written down.
   *
   * Here so a SINGLE-IMAGE actor can have an intrinsic size at all. The
   * Animation rule publishes one from a spritesheet's cells, and a plain
   * picture has no cells — so before this, everything not animated measured
   * zero, and every rule that asks how big an actor is fell back to a guess.
   */
  imageSizes = /* @__PURE__ */ new Map();
  // Effects played across the whole viewport, not on any one actor. Mutable for
  // the same reason an actor's list is: the driver re-reads it every frame.
  appliedEffects;
  // The one color behind everything. World-scoped, not per layer: a color on
  // any layer but the bottom is behind the layer under it and can never be
  // seen, so there is one sky (BACKGROUNDS.md).
  clearColor;
  // The layers actors are drawn in, back to front. Never empty: index 0 is the
  // default, which is where an actor placed without being told a layer goes.
  layerList;
  // The cameras, and the default among them. Never empty, for the reason the
  // layer list is not: a view taken through no camera would be a second kind of
  // view, and every question about the view would have to answer twice.
  cameraList;
  // Which camera the view is taken through. One today, because a VIEWPORT is
  // what would give a layer a different one and viewports are not built — so
  // this is the default viewport's camera by another name, and generalises to
  // that rather than being replaced by it.
  activeCameraId = DEFAULT_CAMERA_ID;
  cameraCollection;
  // Layer id -> its index, which is its depth. Built once; layers cannot be
  // added or removed while the world runs (they are structural — a layer cannot
  // be spliced into a live scene graph, see `snapshot`).
  layerIndex = /* @__PURE__ */ new Map();
  // Which load placed each actor, for `canReach`. A WeakMap because an actor
  // removed from the world should not be held alive by this, and because the
  // question is only ever asked of an actor somebody already has in hand.
  loadOf = /* @__PURE__ */ new WeakMap();
  // The set of currently-pressed input keys, refreshed by the driver each frame
  // before `tick` (the engine is DOM-free, so input arrives as plain data).
  // Rule steps read it through `isKeyDown`; keys carry OUR names — 'left arrow',
  // 'a', 'space' — which the driver translates the DOM's into (core/keys).
  keys = /* @__PURE__ */ new Set();
  // What the DRIVER last said, before anything the world pressed itself is
  // folded in. `keys` is the two together and is what everything reads; this
  // is kept apart so that a key the world pressed lasts one frame rather than
  // sticking until the driver next speaks (`pendingKeys`).
  held = /* @__PURE__ */ new Set();
  /**
   * The characters TYPED since the last tick, in the order they were typed.
   *
   * A QUEUE, where the keys are a set, and the difference is the whole reason
   * this is separate. A key is held or it is not, so a set answers everything
   * anybody asks about one; typing is a sequence — "aa" is two characters and
   * "ab" is not "ba" — and a set loses both facts. It is also not the same
   * question: shift, a dead key, an IME and a paste all produce characters and
   * no key edge anybody could name (specs/UI_ACTORS.md).
   *
   * Drained by `tick`, so a frame sees exactly what was typed into it.
   */
  typed = [];
  /**
   * What the WORLD typed, waiting for the next frame.
   *
   * A SEPARATE QUEUE FROM THE ONE ABOVE, because of when it is filled. The
   * driver adds to `typed` between frames, which is before the Input rule's
   * step reads it; a block adds here from a handler, and handlers run after
   * every step and before the drain — so a character added to `typed` from an
   * on-screen keyboard would be cleared at the end of the same tick without
   * ever having been read (specs/KEYBOARD_PLAN.md).
   *
   * Folded into `typed` at the top of the next `tick`, in FRONT of that
   * frame's own: an on-screen key was pressed a frame ago and a real keystroke
   * arrived since, so that is the order they happened in.
   */
  pendingTyped = [];
  /**
   * Keys the world pressed, waiting for the next frame — same reasoning.
   *
   * Held for exactly one tick, which is what makes it a keystroke rather than
   * a key held down: the frame it is folded into is a rising edge against the
   * previous frame's set, and the frame after — with nothing pending — is a
   * falling edge. The Input rule turns both into events without knowing either
   * came from a button.
   */
  pendingKeys = /* @__PURE__ */ new Set();
  /**
   * Keys the game has asked the browser to leave alone.
   *
   * THE BROWSER HAS ITS OWN USE FOR SOME KEYS, and which ones a game needs is
   * a fact about the game rather than a constant in the driver — where it has
   * been living (`PhaserBinding`'s `SCROLL_KEYS`, arrows and space, hard-coded
   * so a platformer does not scroll the page). Tab is the case that could not
   * be a constant: an interface actor holding the focus wants it, and a game
   * with nothing focused must NOT have it, or the canvas is somewhere a
   * keyboard user can enter and not leave (specs/UI_ACTORS.md).
   *
   * So the world says, and the driver reads. Escape is never in here — see
   * `RESERVED_KEYS`.
   */
  captured = /* @__PURE__ */ new Set();
  /**
   * Whether the game window took the keyboard since the last tick.
   *
   * ONE FRAME, drained by `tick` like the typed characters, because it is the
   * same kind of thing: a moment rather than a state. It is how a rule tells
   * an arrival from an ordinary keypress — tabbing ONTO the game and pressing
   * Tab INSIDE it both look like a Tab edge, and they mean opposite things
   * (one comes in, the other goes on or leaves).
   */
  keyboardArrived = false;
  /**
   * How wide a line of text is, or nothing when nobody has said.
   *
   * THE ONE MEASUREMENT THE ENGINE CANNOT MAKE. Everything else about a
   * picture is arithmetic on numbers the project stated; a letter's width is a
   * fact about a font, and this half has no font and no canvas by design
   * (specs/DRAWING.md). `draw paragraph` avoids the question by handing its
   * column down and letting the painter break the lines.
   *
   * A CARET IS THE CASE THAT COULD NOT BE AVOIDED. It belongs after the last
   * letter, and it MOVES on a click — which is a handler, not a paint, so an
   * answer published by the last frame's drawing arrives too late to place it.
   * So the tape is lent the other way: a driver that has a canvas hands one
   * over (`runtime/driver/textMetrics`), built from the same font string the
   * painter sets, and `textWidth` is what blocks ask through.
   *
   * Undefined is the headless case and answers zero rather than guessing.
   */
  measure;
  /**
   * What time it is out there, and which zone that is — lent by the driver.
   *
   * THE THIRD THING THE ENGINE CANNOT KNOW, beside the width of a letter and
   * the browser's storage, and lent the same way and for the same reason: this
   * half has no machine and no locale by design, and `time` answers a
   * different question — seconds since the world STARTED, which is what a
   * cooldown is measured in (specs/CLOCK_PLAN.md).
   *
   * Undefined is the headless case and answers a FIXED moment rather than the
   * real one (`core/clock`, NO_CLOCK). A test, a rule demo and a check all run
   * headless, and a clock that answered the real time there would make every
   * one of them differ between runs.
   */
  clock;
  zoneOffset = 0;
  /**
   * The moment this frame is at, sampled once at the top of `tick`.
   *
   * For the same reason `elapsed` is advanced there: every step and handler in
   * one frame should read ONE value, or two blocks a line apart could land on
   * opposite sides of a second and a project that compared them would see time
   * run backwards within a frame.
   */
  moment = NO_CLOCK;
  /** Actor templates by the module path a map names them with (`define`). */
  types = /* @__PURE__ */ new Map();
  // The previous tick's pressed set, so a rule step can detect rising/falling
  // edges (a key *just* pressed or released) rather than only the held state.
  // Advanced at the end of each `tick`.
  previousKeys = /* @__PURE__ */ new Set();
  // The mouse, on the same terms: held buttons, the previous tick's for edges,
  // and where the pointer is. Buttons carry OUR names — 'left', 'middle',
  // 'right' (core/pointer).
  buttons = /* @__PURE__ */ new Set();
  previousButtons = /* @__PURE__ */ new Set();
  // IN VIEWPORT PIXELS, measured from the top left of the window onto the
  // world — which is what the driver can actually report, since that is where
  // the pointer is. Turning it into a place in the WORLD needs the camera, and
  // the camera is here (`mousePosition`).
  pointer = new Vector(0, 0);
  constructor(init) {
    this.id = init.id;
    this.name = init.name;
    this.actors = new ActorCollection(this.actorList);
    for (const rule6 of init.rules) {
      this.membership.add(rule6);
    }
    const rules = this.membership.items();
    for (const rule6 of rules) {
      for (const property of Object.values(rule6.properties)) {
        this.store.set(property, coerce2(property, property.default));
      }
    }
    for (const property of init.ownProperties ?? []) {
      this.defineOwnProperty(property, property.default);
    }
    for (const rule6 of rules) {
      for (const [id, def] of Object.entries(rule6.animations)) {
        this.animationDefs.set(id, def);
      }
    }
    for (const [id, def] of init.animations ?? []) {
      this.animationDefs.set(id, def);
    }
    this.appliedEffects = [];
    this.clearColor = rgba(DEFAULT_BACKDROP_COLOR);
    this.layerList = (init.layers ?? []).map(makeLayer);
    if (!this.layerList.some((layer) => layer.id === DEFAULT_LAYER_ID)) {
      this.layerList.unshift(makeLayer({ id: DEFAULT_LAYER_ID }));
    }
    this.layerList.forEach(
      (layer, index) => this.layerIndex.set(layer.id, index)
    );
    this.cameraList = [makeCamera({ id: DEFAULT_CAMERA_ID })];
    this.cameraCollection = new CameraCollection(
      this.cameraList,
      () => this.viewportSpaces
    );
    for (const camera of this.cameraList) {
      camera.world = this;
    }
    for (const rule6 of rules) {
      this.stepList.push(...Object.values(rule6.steps));
    }
    this.scheduler = new Scheduler(this.stepList);
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
    this.store.set(property, coerce2(property, value));
  }
  /**
   * Give the world a slot for a property no rule declared.
   *
   * The world's counterpart to the overrides an Actor is built with, and the
   * whole of what `WorldBuilder.defineProperty` needs from here: `get` and
   * `set` already take any property, and the only thing they insist on is that
   * the slot exists.
   *
   * Idempotent-by-overwrite on purpose. A world module declares its properties
   * as it loads, and a hot reload replays that module against a world that may
   * already be running; re-seeding a slot to the value the file now states is
   * what "the default changed" should mean.
   */
  defineOwnProperty(property, value) {
    if (!this.store.has(property)) {
      this.ownProperties.push(property);
    }
    this.store.set(property, coerce2(property, value));
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
  inTick = false;
  /** Whether the game is paused — see {@link pause}. */
  paused = false;
  /**
   * Whether the world is inside a frame right now.
   *
   * Which is the same as "a handler is running": handlers are flushed inside
   * `tick`. `WorldBuilder.act` asks, to tell an action that is part of what the
   * world IS from one that merely happened while it ran.
   */
  get ticking() {
    return this.inTick;
  }
  /** Sounds raised since the driver last drained, in the order raised. */
  queuedSounds = [];
  /** The track playing, or undefined for silence (specs/SOUND.md). */
  track;
  /**
   * Place an actor, or make one from a template and place that.
   *
   * TWO shapes because one BLOCK reaches both. `add actor` generates
   * `world.addActor(Template, id, type, layer)`, and under `define world` that
   * lands on `WorldBuilder`; in a rule step or an event handler — spawning a
   * bullet, splitting an asteroid — it lands here. A method that existed on one
   * of them only is a crash carrying the block's own name at the moment a
   * learner runs their game (`builderSurface.test`), so the two agree.
   *
   * The template form is told apart by duck-typing rather than by importing
   * `ActorBuilder` for an `instanceof`: that import would be a cycle, and the
   * same trade is already made in `Traited`'s coercion.
   */
  addActor(subject, idOrLayer, type, layer) {
    if (typeof subject.instantiate !== "function") {
      return this.place(subject, idOrLayer);
    }
    const template = subject;
    const actor = template.instantiate(
      this.resolveInstanceId(template, idOrLayer),
      type
    );
    this.useActorKind(actor.type, template);
    return this.place(actor, layer);
  }
  /**
   * A free id for a new instance.
   *
   * A block's id is stable and unique in a WORLD, which is what makes it the
   * right name for something placed once while describing one. It is neither
   * once the same block runs again — a spawn in a step fires every frame — so a
   * taken id gains an ordinal. An id nobody asked for gets a random one, since
   * there is no name to keep.
   */
  resolveInstanceId(template, explicitId) {
    const base = explicitId ?? template.id;
    if (!this.hasActor(base)) {
      return base;
    }
    if (explicitId === void 0) {
      return `${template.id}-${crypto.randomUUID()}`;
    }
    let ordinal = this.nextOrdinal.get(base) ?? 2;
    while (this.hasActor(`${base}#${ordinal}`)) {
      ordinal += 1;
    }
    this.nextOrdinal.set(base, ordinal + 1);
    return `${base}#${ordinal}`;
  }
  /**
   * Let an actor KIND contribute its own per-frame steps.
   *
   * The `each frame` an `.actor` file may declare (blockly/actorMeta), and the
   * counterpart to `defineProperty`: state a kind carries without a rule, and
   * now behavior a kind runs without one. A rule is still what you write when
   * the behavior is shared, elected or answerable — this is for the case where
   * it is none of those and a whole `.rule` file is more ceremony than the thing
   * deserves.
   *
   * PER KIND, NOT PER ACTOR. One step is added however many of the kind there
   * are, and it walks `actors.ofType(type)` — so thirty-one ground tiles are one
   * entry in the order rather than thirty-one, and an actor placed later is
   * swept up without anything being registered again.
   *
   * Called where the template and the TYPE it is being placed under are both in
   * hand, which is `addActor` here and `loadMap` on the builder. The type is
   * what binds them: it is what `any ⟨Coin⟩` means everywhere else, so a step
   * declared by the coin runs for exactly the actors a learner would point at.
   *
   * The scheduler is rebuilt, not appended to — the order is a topological sort
   * and a new step may belong anywhere in it. A rebuild during a tick is safe:
   * `Scheduler.run` is iterating the array it started with, so a kind spawned
   * mid-frame joins the order on the next one.
   */
  useActorKind(type, template) {
    if (template.ownDrawing && !this.kindDrawings.has(type)) {
      this.kindDrawings.set(type, template.ownDrawing);
    }
    if (template.cameraTraits?.length && !this.kindCameraTraits.has(type)) {
      this.kindCameraTraits.set(type, template.cameraTraits);
    }
    const steps = template.ownSteps ?? [];
    if (!steps.length || this.kindsWithSteps.has(type)) {
      return;
    }
    this.kindsWithSteps.add(type);
    for (const step of steps) {
      this.stepList.push({
        id: `${type}.${step.id}`,
        ownerId: type,
        order: { kind: "phase", phase: step.phase },
        run: (world, delta) => {
          for (const actor of world.actors.ofType(type)) {
            world.withActor(actor, () => step.run(actor, world, delta));
          }
        }
      });
    }
    this.scheduler = new Scheduler(this.stepList);
  }
  /**
   * The `intrinsic size` property, resolved through the membership rather than
   * imported.
   *
   * `renderSnapshot` reaches Space's properties the same way and for the same
   * reason: the World holds rules it was given, and importing one of them here
   * would make the core depend on a rule it is supposed to merely run.
   */
  intrinsicSizeProperty() {
    return this.positionalProperty(SPATIAL.intrinsicSize);
  }
  /** …and `scale`, which is the other half of how big a thing is drawn. */
  scaleProperty() {
    return this.positionalProperty(SPATIAL.scale);
  }
  /**
   * The `Has a Style` trait's `theme`, if this world's rules declare it.
   *
   * Asked of the RULES rather than imported, exactly as the positional
   * properties above are: the rule is a foundation one, but a world that
   * shadowed it with one of its own should be answered from the rule that is
   * actually in play.
   */
  styleThemeProperty() {
    const styled = this.membership.items().find((r) => r.id === STYLED.rule);
    const trait = styled?.traits[STYLED.trait];
    return trait?.properties[STYLED.theme];
  }
  positionalProperty(id) {
    const spatial = this.membership.items().find((r) => r.id === SPATIAL.rule);
    const positional = spatial?.traits[SPATIAL.trait];
    return positional?.properties[id];
  }
  place(actor, layer = DEFAULT_LAYER_ID, space) {
    actor.world = this;
    actor.bornAt = this.elapsed;
    const target = space ?? this.spaceOf(this.inHand.at(-1));
    const known = target === this.rootSpace ? this.layerIndex.has(layer) : target.layers.some((held2) => held2.id === layer);
    actor.layer = known ? layer : DEFAULT_LAYER_ID;
    actor.space = space ?? this.spaceOf(this.inHand.at(-1));
    const drawing = this.kindDrawings.get(actor.type);
    if (drawing) {
      const property = this.intrinsicSizeProperty();
      if (property) {
        const { width, height } = drawing.size(actor, this);
        actor.set(property, new Vector(width, height));
      }
    }
    this.actorList.push(actor);
    this.actorsById.set(actor.id, (this.actorsById.get(actor.id) ?? 0) + 1);
    if (actor.has(ViewportTrait) && !this.viewportSpaceOf(actor)) {
      const view = this.viewSizeOf(actor);
      const space2 = new Space(
        `${ROOT_SPACE_ID}/${actor.id}`,
        actor,
        new Vector(view.x, view.y)
      );
      this.viewportSpaces.push(space2);
      this.addCameraTo(space2, {
        id: DEFAULT_CAMERA_ID,
        traits: [...this.cameraTraitsOf(actor.type)]
      });
    }
    const created = this.spatialEvent(SPATIAL.created);
    if (created) {
      this.emit(created, actor);
    }
    return actor;
  }
  /**
   * One of the Spatial rule's events, if that rule is in play.
   *
   * Absent for a world built without the foundation, which is a world with no
   * positions in it — nothing to raise the event on and nothing to hear it.
   */
  spatialEvent(id) {
    const spatial = this.membership.items().find((one2) => one2.id === SPATIAL.rule);
    return spatial?.events?.[id];
  }
  /** The cameras this world holds. Never empty; the default is among them. */
  get cameras() {
    return this.cameraCollection;
  }
  /**
   * A camera by id, or the default.
   *
   * An unknown id is the default rather than an error, for the reason
   * `addActor` gives about layers: the id comes from generated code naming a
   * block that may since have been deleted, and a world with no view at all is
   * not a better answer than a world looking through its default.
   */
  /**
   * Declare a camera.
   *
   * Not hoisted, unlike a layer: a camera is an entry in a list rather than a
   * place in a scene graph, so one can be added to a world that already exists.
   * Declaring the same id twice is the earlier one, so a reload cannot stack
   * duplicates.
   */
  defineCamera(init) {
    if (init.viewport !== void 0) {
      this.defineSpaceCamera(init.viewport, init);
      return this;
    }
    if (!this.cameraList.some((camera) => camera.id === init.id)) {
      const camera = makeCamera({
        ...init,
        position: init.position ?? new Vector(this.view.x / 2, this.view.y / 2)
      });
      camera.world = this;
      this.cameraList.push(camera);
    }
    return this;
  }
  /**
   * Add a camera to the space a Viewport owns.
   *
   * The id carries the space and the name does not: `win:wide` is the id, `wide`
   * the name, so two Viewports may each have a `wide` and a list of every camera
   * in the world still tells them apart (`Space.cameraNamed`).
   *
   * THROWS FOR ANYTHING THAT IS NOT A VIEWPORT, as `loadMapInto` does and for
   * the same reason: a camera declared of a Panel can never look at anything,
   * and holding the declaration in silence — which an earlier version of this
   * did, forever — is the failure this lab keeps meeting. The place to declare a
   * Viewport's camera is that Viewport's own `on create`, where it exists
   * (specs/SPACE_CAMERAS_PLAN.md).
   */
  defineSpaceCamera(owner, init) {
    const space = typeof owner === "string" ? this.viewportSpaces.find((one2) => one2.owner?.id === owner) : this.viewportSpaceOf(owner);
    if (!space) {
      const named = typeof owner === "string" ? owner : owner?.id;
      throw new Error(
        `world-lab: a camera cannot be defined for \u201C${named}\u201D, which is not a Viewport in this world`
      );
    }
    this.addCameraTo(space, init);
  }
  /** Put one declared camera into a space, unless it already has that name. */
  addCameraTo(space, init) {
    if (space.cameraNamed(init.name ?? init.id)) {
      return;
    }
    const view = space.owner ? this.viewSizeOf(space.owner) : this.view;
    const camera = makeCamera({
      ...init,
      id: `${space.owner?.id ?? space.id}:${init.id}`,
      name: init.name ?? init.id,
      // The middle of the space's OWN window, as its main camera starts, and
      // for the same reason the world's rest in the middle of the world's view.
      position: init.position ?? new Vector(view.x / 2, view.y / 2)
    });
    camera.space = space.mirrorOf ?? space;
    camera.window = space.owner;
    camera.world = this;
    space.cameras.push(camera);
  }
  /**
   * Take the view through a different camera.
   *
   * A VALUE, not structure: switching cameras moves a transform and rebuilds
   * nothing, so a game may cut between them without restarting. An unknown id
   * leaves the view where it is rather than blacking it out.
   */
  setActiveCamera(id) {
    if (this.cameraList.some((camera) => camera.id === id)) {
      this.activeCameraId = id;
      return this;
    }
    for (const space of this.viewportSpaces) {
      const found = space.cameras.find(
        (camera) => camera.id === id || camera.id.endsWith(`:${id}`)
      );
      if (found && space.owner?.has(ViewportTrait)) {
        space.owner.set(ViewportShowsThroughProperty, found.name);
        space.activeCameraName = found.name;
        return this;
      }
    }
    return this;
  }
  /** The camera the view is currently taken through. */
  activeCamera() {
    return this.camera(this.activeCameraId);
  }
  camera(id = DEFAULT_CAMERA_ID) {
    const own = this.cameraList.find((camera) => camera.id === id);
    if (own) {
      return own;
    }
    for (const space of this.viewportSpaces) {
      const found = space.cameras.find(
        (camera) => camera.id === id || camera.id.endsWith(`:${id}`)
      );
      if (found) {
        return found;
      }
    }
    return this.cameraList.find((entry) => entry.id === DEFAULT_CAMERA_ID) ?? this.cameraList[0];
  }
  /**
   * Move a camera, in world pixels.
   *
   * Copied rather than adopted, like a slot's offset and for the same reason: a
   * step that follows the player writes this every tick, and sharing one Vector
   * with the world would let a later mutation move the view with no call.
   */
  setCameraPosition(position, id = DEFAULT_CAMERA_ID) {
    this.camera(id).position = new Vector(position.x, position.y);
    return this;
  }
  /**
   * How much of the camera's motion a layer takes, per axis.
   *
   * Copied rather than adopted, like a camera's position and a slot's offset:
   * a rule turning this every tick would otherwise share one Vector with the
   * world.
   */
  setLayerParallax(parallax, layer = DEFAULT_LAYER_ID) {
    const found = this.layer(layer) ?? this.layerList[0];
    found.parallax = new Vector(parallax.x, parallax.y);
    return this;
  }
  /** Whether a layer ignores the camera entirely — what a HUD is. */
  setLayerFit(fit, layer = DEFAULT_LAYER_ID) {
    (this.layer(layer) ?? this.layerList[0]).fit = fit;
    return this;
  }
  /** The layers, back to front. Index is depth; index 0 is the default. */
  get layers() {
    return this.layerList;
  }
  /** A layer by id, or undefined. */
  layer(id) {
    const index = this.layerIndex.get(id);
    return index === void 0 ? void 0 : this.layerList[index];
  }
  /** How deep a layer draws — its position in the stack. */
  depthOf(layer, space) {
    if (space && space !== this.rootSpace) {
      const at = space.layers.findIndex((held2) => held2.id === layer);
      return at < 0 ? 0 : at;
    }
    return this.layerIndex.get(layer) ?? 0;
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
    if (this.inTick) {
      this.leaving.add(target);
      return true;
    }
    this.detach(target);
    return true;
  }
  /** Actually take it out: off the list, and no longer pointing at this world. */
  detach(actor) {
    for (const child of this.childrenOf(actor)) {
      this.detach(child);
    }
    const removed = this.spatialEvent(SPATIAL.removed);
    if (removed && this.actorList.includes(actor)) {
      this.emit(removed, actor);
    }
    const index = this.actorList.indexOf(actor);
    if (index >= 0) {
      this.actorList.splice(index, 1);
      const left = (this.actorsById.get(actor.id) ?? 1) - 1;
      if (left > 0) {
        this.actorsById.set(actor.id, left);
      } else {
        this.actorsById.delete(actor.id);
      }
    }
    actor.world = void 0;
    actor.layer = void 0;
    const space = this.viewportSpaceOf(actor);
    if (space) {
      this.unloadSpace(space);
      this.viewportSpaces.splice(this.viewportSpaces.indexOf(space), 1);
    }
    actor.space = void 0;
  }
  /**
   * The actors carried by `actor`, in placement order — asked here rather
   * than stored on the parent, so a `parent` set anywhere is the one answer
   * (specs/PARENTING.md).
   */
  childrenOf(actor) {
    return this.actorList.filter((candidate) => candidate.parent() === actor);
  }
  /**
   * Stop the game moving, and keep it listening.
   *
   * A paused world still ticks: the clock runs, the driver draws, and the
   * `sense` phase runs — key and mouse edges become events, so a pause menu's
   * buttons still hear a click and Tab still walks the focus — and every
   * event handler runs, since handlers are how a menu answers. What stops is
   * every step after `sense`: nothing decides, moves, collides, settles or
   * animates until {@link resume}. That is what "paused" means to a player,
   * and it needs no rule to know it is paused (specs/UI_ACTORS.md).
   *
   * The interface actors that DO something each frame — a slider following
   * the pointer, a field sliding its caret — are steps too, and stop with
   * the rest; a pause menu is buttons, and buttons are events.
   */
  pause() {
    this.paused = true;
  }
  /** The other end of {@link pause}. */
  resume() {
    this.paused = false;
  }
  isPaused() {
    return this.paused;
  }
  /** Whether an actor with `id` is already in this world. */
  hasActor(id) {
    return this.actorsById.has(id);
  }
  /** The index, and the moment it was built for. */
  index;
  indexAt = -1;
  indexMark = -1;
  indexCount = -1;
  /**
   * Which STEP is running, counted from the start of the world.
   *
   * The stamp the spatial index is kept against, and the reason it is a step
   * rather than a frame: a step is exactly the unit of "somebody may have moved
   * things". Two questions inside one step get one index — which is what makes
   * a search affordable, since a flood asks hundreds in a row — and the first
   * question in the next step gets a fresh one, which is what makes a collision
   * test right, since it runs after everything has moved.
   */
  stepMark = 0;
  /** Called by the {@link Scheduler} as each step begins. */
  beginStep() {
    this.stepMark += 1;
  }
  /**
   * Every actor whose middle is within `radius` of a place.
   *
   * The world's own spatial question, answered through a grid of buckets
   * (`core/spatialIndex`) rather than by measuring every actor. From a PLACE
   * rather than from an actor, which is the whole reason it is here and not a
   * list operation: a search asking whether a square is clear has no actor to
   * ask about, and neither has "what is near where I am going".
   *
   * REBUILT ONCE PER STEP THAT ASKS, and only for the steps that ask. A step is
   * the unit of "somebody may have moved things", so a question asked after a
   * step that moved everything gets a fresh answer, and four hundred questions
   * inside one step get one index — which is the difference between a search
   * being affordable and being a frozen frame.
   *
   * It costs a rebuild per querying step, which is an O(n) pass: measured at a
   * tenth of a millisecond for a thousand actors, against the O(n²) it exists
   * to replace. Two consumers asking in two different phases are not building
   * the same index twice — they are asking about two different moments, and one
   * shared answer would be wrong for one of them.
   *
   * BEFORE THE FIRST STEP there is no such moment, so the stamp falls back to
   * the clock and the population — a world being described is one where nothing
   * is running, and the questions asked there are about what has been placed.
   *
   * An empty list if nothing has a position: a world with no Spatial rule is a
   * world where "near" has no meaning, which is not an error to raise at a
   * learner mid-game.
   */
  actorsNear(at, radius, only, sameSpaceAs) {
    const found = this.positional();
    if (!found) {
      return [];
    }
    const { trait, position } = found;
    const positionOf = (actor) => actor.get(position);
    if (!this.index || this.indexMark !== this.stepMark || this.indexAt !== this.elapsed || this.indexCount !== this.actorList.length) {
      const index = new SpatialIndex();
      for (const actor of this.actorList) {
        if (actor.has(trait)) {
          index.add(actor, positionOf(actor));
        }
      }
      this.index = index;
      this.indexMark = this.stepMark;
      this.indexAt = this.elapsed;
      this.indexCount = this.actorList.length;
    }
    const space = this.spaceOf(sameSpaceAs ?? this.inHand.at(-1));
    const near = this.index.near(at?.x ?? 0, at?.y ?? 0, radius, positionOf).filter((actor) => actor.space === space);
    if (only?.type !== void 0) {
      return near.filter((actor) => actor.type === only.type);
    }
    if (only?.trait) {
      return near.filter((actor) => actor.has(only.trait));
    }
    return near;
  }
  /**
   * The positional trait and its `position`, resolved through the membership
   * the way `renderSnapshot` resolves them — core speaking the Spatial rule's
   * vocabulary without importing it (`core/spatialKeys`).
   */
  positional() {
    const spatial = this.membership.items().find((r) => r.id === SPATIAL.rule);
    const trait = spatial?.traits[SPATIAL.trait];
    const position = trait?.properties[SPATIAL.position];
    return trait && position ? { trait, position } : void 0;
  }
  /**
   * How many actors are in the world.
   *
   * Asked by `WorldBuilder.requireNoActors` to tell "the world exists" from
   * "the world has been populated" — only the second makes a late declaration
   * (a rule, an animation, a layer) impossible to honour.
   */
  actorCount() {
    return this.actorList.length;
  }
  /**
   * Raise an event for `actor`; dispatched after the current tick's steps.
   *
   * AS MANY VALUES AS THE EVENT'S SIGNATURE NAMES, in its order. One is the
   * ordinary case and every rule in the library makes that call; a designed
   * event may carry several, and a handler reads each by the name its author
   * gave it (specs/EVENT_VALUES_PLAN.md).
   */
  emit(event, actor, ...values) {
    this.events.enqueue(event, actor, ...values);
  }
  /**
   * Raise an event that is about the WORLD — a key went down, a level was
   * cleared — with no actor it happened to.
   *
   * A separate method rather than an optional argument, because the two say
   * different things and `emit(event, value)` would read as an actor with the
   * value in its place. Which of the two a rule uses is decided by where it
   * declared the event: under a trait it is an actor's, on the rule it is the
   * world's.
   *
   * Dispatched with the actor ones, after this tick's steps.
   */
  emitToWorld(event, ...values) {
    this.events.enqueue(event, void 0, ...values);
  }
  /**
   * Register one of the world's own events under the name it reads by.
   *
   * WHY A REGISTRY AND NOT AN IMPORT. A map raises the world's events, and a
   * map's module cannot import the world's: the world LOADS the map, so that
   * is a cycle, and a `.map` is meant to be loadable by several worlds, so it
   * cannot name one anyway (specs/MAP_EVENTS_PLAN.md).
   *
   * So the world says what it holds and the map names one — the third time a
   * name arriving as DATA has needed this, beside `define` for actor kinds and
   * `defineTheme` for themes. The preamble emits one call per declared event.
   */
  defineEvent(name, event) {
    this.namedEvents.set(name, event);
  }
  namedEvents = /* @__PURE__ */ new Map();
  /**
   * Raise one of the world's events, by name.
   *
   * BY NAME, because a map cannot import the world that loads it: the world
   * registers what it declares and the map says the word
   * (specs/MAP_EVENTS_PLAN.md).
   *
   * A name that names nothing raises nothing and says so, which is the
   * emptiest correct answer rather than a guard against anything reachable. A
   * project has one world, and a map's `emit` is a block type that exists only
   * because that world declared the event — so the name is always one the
   * preamble registered. Nothing calls this with a name of its own invention.
   */
  emitNamed(name, ...values) {
    const event = this.namedEvents.get(name);
    if (!event) {
      return false;
    }
    this.events.enqueue(event, void 0, ...values);
    return true;
  }
  /**
   * Handle a world event. The counterpart of `Actor.on`, and the reason a world
   * event needs no actor to be raised for: the world holds the handlers.
   */
  on(event, handler) {
    const list = this.worldHandlers.get(event);
    if (list) {
      list.push(handler);
    } else {
      this.worldHandlers.set(event, [handler]);
    }
  }
  /** Handlers registered for a world event; used by the EventQueue on flush. */
  handlersFor(event) {
    return this.worldHandlers.get(event) ?? [];
  }
  /**
   * How big the world is, in world pixels — the largest map loaded into it.
   *
   * The LARGEST rather than the first or the last, because a world may load
   * several (a level and a HUD) and the honest answer to "how big is this
   * world" is as big as the biggest thing in it. A HUD the size of the viewport
   * must not shrink the level.
   *
   * The viewport's own size until a map says otherwise, so a world with no map
   * is one screen big rather than zero.
   *
   * Safe to hand out directly: a Vector is immutable.
   */
  mapBounds(actor) {
    return this.spaceOf(actor ?? this.inHand.at(-1)).bounds;
  }
  /**
   * Somewhere in the map, picked at random — uniform over the whole rectangle.
   *
   * Here rather than in the block that offers it, because "the map" is the
   * world's own idea and the block would otherwise have to ask for the bounds
   * and then do arithmetic on them in generated code. It also means the builder
   * can answer it (`WorldBuilder.randomPlace`), so scattering asteroids while
   * describing a world reads the same as spawning one mid-game.
   *
   * NOT seeded, so two runs differ. That is what a learner means by random, and
   * a repeatable game is a bigger idea than this block should smuggle in.
   */
  randomPlace() {
    const bounds = this.mapBounds();
    return new Vector(Math.random() * bounds.x, Math.random() * bounds.y);
  }
  /**
   * Seconds the world has been running.
   *
   * The sum of every `delta` it has been ticked by, NOT a reading of the wall
   * clock. Three things follow, and all three are the point:
   *
   * A world that is not RUNNING does not age. A world nobody ticks does not,
   * and neither does a paused one — `tick` leaves this alone while the game is
   * paused, though it still runs the `sense` steps so the menu that paused it
   * can be clicked. That is what a learner means by "two seconds later": two
   * seconds of game, not two seconds of sitting in a menu.
   *
   * It is why `the time now` is a separate block. Everything measured in this
   * — a cooldown, a lifetime, a delay — should wait while the game does, and
   * the wall clock should not (specs/CLOCK_PLAN.md).
   *
   * It agrees exactly with anything integrated from `delta`. A bullet that has
   * traveled `speed × 2` has an age of exactly 2, because the same numbers
   * added up both times. Sampling a clock here would let the two disagree by
   * however long the frame took to draw.
   *
   * And it is stamped ONCE per frame, before any step runs, so every step in a
   * frame reads the same value. That is what lets steps sharing a moment
   * commute: two steps that both ask the time get the same answer whichever
   * order the scheduler happens to run them in (core/phases).
   */
  time() {
    return this.elapsed;
  }
  /**
   * How big the window onto the world is, in world pixels.
   *
   * Fixed today (core/viewport). A method rather than the constant so a rule
   * reads it the way it reads everything else about the world, and so making it
   * settable later changes nothing that asks.
   */
  viewSize(actor) {
    const subject = actor ?? this.inHand.at(-1);
    if (subject instanceof Camera && subject.window) {
      return this.viewSizeOf(subject.window);
    }
    const space = this.spaceOf(subject);
    return space.owner ? this.viewSizeOf(space.owner) : new Vector(this.view.x, this.view.y);
  }
  /** How big a Viewport is on screen: its drawn size. */
  viewSizeOf(viewport) {
    const size = this.intrinsicSizeProperty();
    const scale = this.scaleProperty();
    const intrinsic = size ? viewport.get(size) : new Vector(0, 0);
    const scaled = scale ? viewport.get(scale) : new Vector(1, 1);
    return new Vector(
      (intrinsic.x > 0 ? intrinsic.x : this.view.x) * Math.abs(scaled.x),
      (intrinsic.y > 0 ? intrinsic.y : this.view.y) * Math.abs(scaled.y)
    );
  }
  // ── Spaces (specs/VIEWPORT_PLAN.md) ──────────────────────────────────────
  /** The space `subject` is in: an actor's own; a camera's is the root. */
  spaceOf(subject) {
    return subject && "space" in subject && subject.space ? subject.space : this.rootSpace;
  }
  /** The space a Viewport owns, or nothing for an actor that is not one. */
  viewportSpaceOf(actor) {
    return this.viewportSpaces.find((space) => space.owner === actor);
  }
  /** Every space a Viewport owns, in the order the Viewports were placed. */
  get spaces() {
    return this.viewportSpaces;
  }
  /**
   * Take `subject` in hand for the length of `fn` — see the field. Nested,
   * so a loop inside a handler is at its own actor and the handler is back
   * at its subject after.
   */
  withActor(subject, fn) {
    this.inHand.push(subject);
    try {
      return fn();
    } finally {
      this.inHand.pop();
    }
  }
  /** The two halves of `withActor`, for a generated loop's body. */
  enter(subject) {
    this.inHand.push(subject);
  }
  leave() {
    this.inHand.pop();
  }
  /** The actor in hand, if any — for what asks after it by name. */
  actorInHand() {
    return this.inHand.at(-1);
  }
  /**
   * Register a map under its module path, so it can be loaded by a path
   * held in a property — a Viewport's `map`. The world module registers
   * every map the project holds (specs/VIEWPORT_PLAN.md).
   */
  defineMap(path, map) {
    this.maps.set(path, map);
  }
  /** A registered map, by path. */
  mapNamed(path) {
    return this.maps.get(path);
  }
  /**
   * Replace what `viewport` holds with `map` — by value, or by the path a
   * property holds. What it held is unloaded first, so a Viewport shows one
   * map at a time; the space's bounds start over at the map's size, and its
   * camera at the middle of the window it is seen through.
   */
  loadMapInto(viewport, map, layer) {
    const space = this.viewportSpaceOf(viewport);
    if (!space) {
      throw new Error(
        `world-lab: \u201C${viewport.id}\u201D is not a Viewport, so nothing can be loaded into it`
      );
    }
    this.stopMirroring(space);
    this.unloadSpace(space);
    const held2 = typeof map === "string" ? this.maps.get(map) : map;
    if (typeof map === "string") {
      this.nowShows(viewport, space, map);
    }
    space.layers = layersOfMap(held2?.layers);
    if (!held2) {
      return [];
    }
    const view = this.viewSizeOf(viewport);
    space.bounds = new Vector(view.x, view.y);
    space.camera.position = new Vector(view.x / 2, view.y / 2);
    const added = this.loadInto(space, held2, layer);
    this.settleSpace(space);
    if (viewport.has(ViewportTrait)) {
      this.emit(
        ViewportShowsMapEvent,
        viewport,
        typeof map === "string" ? map : space.shown ?? ""
      );
    }
    return added;
  }
  /** Take back everything loaded into `viewport`. */
  unloadViewport(viewport) {
    const space = this.viewportSpaceOf(viewport);
    if (space) {
      this.stopMirroring(space);
      this.unloadSpace(space);
      this.nowShows(viewport, space, "");
    }
  }
  /**
   * Record the path a Viewport shows, in the space AND in the Viewport's
   * `map` property. Both, because `showHeldMap` loads whatever the property
   * names whenever that differs from what is shown: a load by path that left
   * the property naming the old map was undone on the next tick, by the
   * engine loading the old map back. With the property written, it is also
   * what a block reading it and the inspector are told, and setting it back
   * to an earlier path is a change again.
   */
  nowShows(viewport, space, path) {
    space.shown = path;
    if (viewport.has(ViewportTrait) && String(viewport.get(ViewportMapProperty) ?? "") !== path) {
      viewport.set(ViewportMapProperty, path);
    }
  }
  unloadSpace(space) {
    for (const load of space.loads.splice(0)) {
      load.unload();
    }
  }
  /**
   * Keep each Viewport's camera on what it follows and inside what it
   * shows — what the camera rules do for the world's camera, done here for
   * a camera no block can elect a trait on. Run at the end of every tick.
   */
  settleSpaces() {
    for (const space of this.viewportSpaces) {
      this.showHeldMap(space);
      if (space.mirrorOf) {
        space.bounds = space.mirrorOf.bounds;
      }
      this.showsThrough(space);
      this.settleSpace(space);
    }
  }
  /**
   * Copy a Viewport's camera-trait property values onto its main camera.
   *
   * The values live on the ACTOR — that is what makes `actor to follow` a
   * field in the placement inspector and a `set` on the Viewport — and the
   * camera rules read them off the camera. One direction, once a tick and
   * BEFORE the steps run (`tick`), for the traits the kind elected directly: a
   * dependency's properties (`Aimed`'s goal) are the camera's own working state
   * and copying the actor's stale copy over them would undo the aim every
   * frame.
   */
  lendCameraProperties(space) {
    const owner = space.owner;
    const main = space.cameras[0];
    if (!owner || !main) {
      return;
    }
    for (const trait of this.cameraTraitsOf(owner.type)) {
      for (const property of Object.values(trait.properties)) {
        main.set(property, owner.get(property));
      }
    }
  }
  /**
   * The camera traits a kind elected.
   *
   * From what `useActorKind` recorded, else from the template `define`
   * registered under the type: `addActor` given an INSTANCE rather than a
   * template goes straight to `place` and records nothing about its kind,
   * and a Viewport placed that way still has a camera to give the traits to.
   */
  cameraTraitsOf(type) {
    return this.kindCameraTraits.get(type) ?? this.types.get(type)?.cameraTraits ?? [];
  }
  /**
   * Keep the space's active camera in step with what its Viewport says.
   *
   * Beside `showHeldMap`, and for the same reason it is there: a Viewport's
   * properties are how a project talks to its space, and a change to one is
   * noticed once a tick rather than hooked on the write. So cutting to another
   * camera is an ordinary `set` — `set shows through of ⟨the Minimap⟩ to
   * ⟨"chase"⟩` — with nothing to invent and nothing to remember to call.
   *
   * Empty is the space's main camera, which is what a Viewport that has never
   * heard of cameras says (`ViewportShowsThroughProperty`).
   */
  showsThrough(space) {
    const owner = space.owner;
    if (!owner?.has(ViewportTrait)) {
      return;
    }
    const named = String(owner.get(ViewportShowsThroughProperty) ?? "");
    space.activeCameraName = named || DEFAULT_CAMERA_ID;
  }
  /**
   * Load the map a Viewport's `map` property names, when it is not the one
   * shown: at the first tick after the Viewport is placed, and again
   * whenever the property changes (`rules/viewport`). A path nothing
   * registered shows nothing, as `loadMapInto` says.
   */
  showHeldMap(space) {
    const owner = space.owner;
    if (!owner || !owner.has(ViewportTrait)) {
      return;
    }
    const target = this.mirrorTargetOf(owner);
    if (target) {
      if (space.mirrorOf !== target) {
        this.mirrorInto(space, target);
      }
      return;
    }
    if (space.mirrors) {
      this.stopMirroring(space);
      space.shown = void 0;
    }
    const path = String(owner.get(ViewportMapProperty) ?? "");
    if (path === (space.shown ?? "")) {
      return;
    }
    space.shown = path;
    this.loadMapInto(owner, path);
  }
  /**
   * The space a Viewport says it shows instead of its own, if it says one.
   *
   * `mirrors` — another Viewport — before `mirrors the world`, on the grounds
   * that the more specific thing was said on purpose. A mirror of a mirror
   * shows what the END of the chain shows, and a chain that comes back to
   * itself shows nothing: a Viewport cannot show a scene whose definition is
   * "whatever this Viewport shows". Nothing rather than the root, because the
   * root is an answer and this question has none.
   */
  mirrorTargetOf(viewport) {
    const seen = /* @__PURE__ */ new Set();
    let at = viewport;
    while (at && !seen.has(at)) {
      seen.add(at);
      if (!at.has(ViewportTrait)) {
        return void 0;
      }
      const named = at.get(ViewportMirrorsProperty)[0];
      if (named) {
        at = named;
        continue;
      }
      if (at.get(ViewportMirrorsTheWorldProperty) === true) {
        return this.rootSpace;
      }
      return at === viewport ? void 0 : this.viewportSpaceOf(at);
    }
    return void 0;
  }
  /**
   * Bind a Viewport to another scene (specs/MIRRORING_PLAN.md).
   *
   * What it held goes, since a Viewport shows one thing at a time; its
   * cameras are pointed at the target, so a query with one in hand answers
   * about the scene it shows; and its bounds become the target's, kept in step
   * each tick, so a camera confined to the map is confined to the target's.
   */
  mirrorInto(space, target) {
    this.unloadSpace(space);
    space.mirrorOf = target;
    space.bounds = target.bounds;
    for (const camera of space.cameras) {
      camera.space = target;
    }
  }
  /** The other way: a Viewport that mirrored is about to show a map of its own. */
  stopMirroring(space) {
    if (!space.mirrors) {
      return;
    }
    space.mirrorOf = void 0;
    for (const camera of space.cameras) {
      camera.space = space;
    }
  }
  /**
   * Put a space's camera where the Viewport scrolled it, and say where it is.
   *
   * WHAT THIS NO LONGER DOES is follow an actor. The map's `camera.follows` is
   * gone, and with it the second implementation of following: where the view
   * looks is logic, a map is data, and a hundred level maps should no more each
   * configure a camera than each mint a `complete`
   * (specs/SPACE_CAMERAS_PLAN.md, specs/MAP_EVENTS_PLAN.md). A Viewport's
   * camera follows by electing `Follows`, as the world's always has.
   *
   * A CAMERA THAT ELECTS ANYTHING IS THE RULES' TO AIM, and this leaves it
   * alone — otherwise the camera steps would aim it during the frame and this
   * would overwrite them at the end of it, which is exactly what the branch
   * above did. A camera that elects NOTHING is still the Viewport's to scroll,
   * because a scroll view is the Viewport deciding about the scene it shows and
   * not a map deciding about itself (specs/SCROLLING_PLAN.md).
   *
   * Confinement goes the same way: the scroll path clamps, because `scroll`
   * promises a reading of where it actually stopped, and a camera with traits is
   * confined by `Confined to the Map` or by nothing at all — which is how the
   * world's cameras have always behaved.
   */
  settleSpace(space) {
    const camera = space.camera;
    if (!camera || !space.owner) {
      return;
    }
    const owner = space.owner;
    const view = this.viewSizeOf(owner);
    if (!camera.traits().length && owner.has(ViewportTrait)) {
      const scrolled = owner.get(ViewportScrollProperty);
      const at = new Vector(scrolled.x + view.x / 2, scrolled.y + view.y / 2);
      const clamp = (value, half, size) => size <= half * 2 ? size / 2 : Math.min(Math.max(value, half), size - half);
      camera.position = new Vector(
        clamp(at.x, view.x / 2, space.bounds.x),
        clamp(at.y, view.y / 2, space.bounds.y)
      );
    }
    if (owner.has(ViewportTrait)) {
      const settled = new Vector(
        camera.position.x - view.x / 2,
        camera.position.y - view.y / 2
      );
      const was = owner.get(ViewportScrollProperty);
      if (was.x !== settled.x || was.y !== settled.y) {
        owner.set(ViewportScrollProperty, settled);
      }
      const bounds = owner.get(ViewportContentProperty);
      if (bounds.x !== space.bounds.x || bounds.y !== space.bounds.y) {
        owner.set(ViewportContentProperty, space.bounds);
      }
    }
  }
  /**
   * Every Viewport's space, for the driver: whose it is, where its camera
   * looks, how much of it is shown, and how big it is.
   */
  spaceSnapshot() {
    return this.viewportSpaces.flatMap((space) => {
      if (!space.owner || !space.camera) {
        return [];
      }
      const view = this.viewSizeOf(space.owner);
      return [
        {
          id: space.id,
          owner: space.owner.id,
          // The space whose scene the box shows instead of its own, by id —
          // the root's, or another Viewport's — which the driver draws through
          // that space's display list (specs/MIRRORING_PLAN.md).
          mirrors: space.mirrorOf?.id,
          mirrorsRoot: space.mirrorOf === this.rootSpace,
          camera: { x: space.camera.position.x, y: space.camera.position.y },
          view: { x: view.x, y: view.y },
          bounds: { x: space.bounds.x, y: space.bounds.y },
          // A mirror has no layers of its own to draw: what it shows is the
          // target's scene, layers and all, through the target's containers.
          // Reporting the target's here would have the driver build a second
          // set of backdrops inside the box (specs/MIRRORING_PLAN.md).
          layers: (space.mirrorOf ? [] : space.layers).map((layer) => ({
            id: layer.id,
            parallax: { x: layer.parallax.x, y: layer.parallax.y },
            fit: layer.fit,
            background: layer.background,
            foreground: layer.foreground
          }))
        }
      ];
    });
  }
  /**
   * Say how much of the world is on screen at once, in TILES.
   *
   * The view was a constant — ten tiles square, the size the first levels were
   * built at — and the constant is still the default, so a world that says
   * nothing looks exactly as it did. What it could not say was the other kind
   * of level: a room 26 by 16 that is meant to be taken in at a glance, where
   * a camera panning over it would be hiding the puzzle rather than following
   * the action.
   *
   * TILES, for the reason `setMapSize` gives: a level is authored in tiles and
   * read in pixels, so each end uses its own unit and the conversion happens
   * here.
   *
   * IT IS THE NATIVE RESOLUTION, not a zoom. The driver sizes its canvas to
   * this and the pane scales that up, so a bigger view is more of the world at
   * the same tile size rather than the same world drawn smaller.
   */
  setViewSize(columns, rows) {
    const was = this.view;
    this.view = new Vector(
      Math.max(0, Math.round(columns)) * TILE_SIZE || VIEWPORT_WIDTH,
      Math.max(0, Math.round(rows)) * TILE_SIZE || VIEWPORT_HEIGHT
    );
    const middle = new Vector(this.view.x / 2, this.view.y / 2);
    for (const camera of this.cameraList) {
      if (camera.position.x === was.x / 2 && camera.position.y === was.y / 2) {
        camera.position = middle;
      }
    }
    this.reanchor();
  }
  /**
   * Place every anchored placement again, against the window as it is now.
   *
   * ANCHORS WERE MEASURED ONCE, AT LOAD, and a world's main map is loaded
   * between its prologue and its rows so that a row can name what the map
   * placed (specs/MAP_BEFORE_ROWS_PLAN.md). So `set view size` in a world's
   * body runs AFTER the load: the placements had already been fitted to the
   * default window and were never fitted again. Notes met it — NEW NOTE is
   * anchored to the bottom of a 320x576 map, was placed against the default
   * 320x320 window at y=264, and stayed there when the body made the window
   * 576 tall, which is the middle of it.
   *
   * ONE THAT HAS BEEN MOVED IS LEFT WHERE IT WAS PUT, which is the rule the
   * cameras above already follow through a resize. A placement a program has
   * dragged somewhere is somewhere for a reason, and shifting it back would
   * undo the program.
   *
   * Only the placements in a space the WORLD's window sizes. A Viewport's
   * space is sized by the Viewport (`viewSizeOf`), and nothing here changed
   * that.
   */
  reanchor() {
    const property = this.positionalProperty(SPATIAL.position);
    if (!property) {
      return;
    }
    const view = this.viewSize();
    for (const actor of this.actorList) {
      const hold = this.anchorHolds.get(actor);
      if (!hold || hold.space.owner || actor.parent()) {
        continue;
      }
      const at = actor.get(property);
      if (at.x !== hold.put.x || at.y !== hold.put.y) {
        continue;
      }
      const put = anchored(hold.at, hold.anchor, hold.drawn, view);
      actor.set(property, put);
      hold.put = put;
    }
  }
  /**
   * What it would take to place an anchored placement again.
   *
   * A WeakMap rather than a list to prune: a dialog loads and unloads over and
   * over, and a strong reference to every placement one ever made would be a
   * leak that grew with the session. What is iterated is the world's own actor
   * list, which is already the set of actors that exist.
   */
  anchorHolds = /* @__PURE__ */ new WeakMap();
  /**
   * Say how big the world is, in TILES.
   *
   * The other way bounds are decided, and the only one a world without a
   * `.map` file has: `growToFit` learns the size from a document, and this is
   * a world stating it. A world that places its actors with `create in map`
   * arranges them in the block rather than in a document, so nothing would
   * otherwise ever tell it that the level is four screens wide — and every
   * rule that asks (`Camera Confined`, "Stays in the Map", `random place`)
   * would go on answering "one screen" without complaining.
   *
   * TILES, although `mapBounds` answers in pixels, and the asymmetry is the
   * right way round. A map is AUTHORED in tiles — it is what the map editor's
   * Width and Height are, and what a `.map` file's `size` holds — while
   * everything that reads a size is doing arithmetic against positions, which
   * are pixels. So the unit each end uses is the unit its own side works in,
   * and the conversion happens once, here.
   *
   * Against the engine's `TILE_SIZE`, since a world stating its own size has
   * no document to carry a tile size of its own.
   *
   * SET rather than grow, unlike `growToFit`. This is a world saying what it
   * is, so it wins over the default; a map loaded afterwards may still grow it
   * past this, which keeps "as big as the biggest thing in it" true.
   */
  setMapSize(columns, rows) {
    this.bounds = new Vector(
      Math.max(0, Math.round(columns)) * TILE_SIZE || VIEWPORT_WIDTH,
      Math.max(0, Math.round(rows)) * TILE_SIZE || VIEWPORT_HEIGHT
    );
  }
  /**
   * Take a map's size into account. Called by `loadMap`, which is the only
   * thing that knows a map was loaded.
   */
  growToFit(map) {
    this.growSpaceToFit(this.rootSpace, map);
  }
  /**
   * Move each anchored placement to where it belongs in this window.
   *
   * WHAT IS MEASURED is how far the placement sits from its anchor's point in
   * the MAP; what is applied is that same distance from the anchor's point in
   * the VIEW. A learner drags a thing into the corner and says which corner;
   * nobody types an offset (specs/ANCHORS_PLAN.md).
   *
   * A map with no size anchors nothing: there is nothing to measure against,
   * and a synthesised map — one a `map` block builds out of blocks — has
   * none.
   *
   * A CHILD IS LEFT ALONE. A parented placement's position is its local one,
   * measured from its parent rather than from the map, so an anchor on one
   * would move it by the distance between two things it is not between. The
   * parent's anchor carries the child, which is what parenting is for.
   */
  applyAnchors(space, map, anchoring) {
    if (anchoring.length === 0 || !map.size || !map.tile) {
      return;
    }
    const property = this.positionalProperty(SPATIAL.position);
    if (!property) {
      return;
    }
    const drawn = new Vector(
      map.size.width * map.tile.width,
      map.size.height * map.tile.height
    );
    const view = space.owner ? this.viewSize(space.owner) : this.viewSize();
    for (const [actor, anchor] of anchoring) {
      if (actor.parent()) {
        continue;
      }
      const at = actor.get(property);
      const put = anchored(at, anchor, drawn, view);
      actor.set(property, put);
      this.anchorHolds.set(actor, { space, anchor, at, drawn, put });
    }
  }
  growSpaceToFit(space, map) {
    if (!map.size || !map.tile) {
      return;
    }
    space.bounds = new Vector(
      Math.max(space.bounds.x, map.size.width * map.tile.width),
      Math.max(space.bounds.y, map.size.height * map.tile.height)
    );
  }
  /**
   * Place the actors a Map describes.
   *
   * A world may load several — a HUD, a menu over a game. Loading is additive,
   * so they stack in call order, and each load can be taken back by the
   * handle its script is given (`MapLoad.unload`). REPLACING a level is not
   * this: a level is what a Viewport holds, and `loadMapInto` replaces it.
   *
   * IT WORKS WHILE THE GAME RUNS, which is what lets a menu come up in a
   * handler. It lived on `WorldBuilder` alone until that was wanted.
   *
   * `layer` puts every actor the map describes into one layer, which is what
   * makes a HUD a HUD: the map is an ordinary map, and the layer it is loaded
   * into is the whole of what makes it an interface (specs/VIEWPORT.md).
   */
  loadMap(map, layer) {
    const added = this.loadInto(this.rootSpace, map, layer);
    for (const actor of added) {
      const space = actor.has(ViewportTrait) ? this.viewportSpaceOf(actor) : void 0;
      if (space) {
        this.showHeldMap(space);
      }
    }
    return added;
  }
  /**
   * Load a map the project holds, BY PATH — `load the map named ⟨…⟩`.
   *
   * The counterpart of `loadMap`, which takes the map itself and so can only
   * name one a file imported. A path can be worked out: which screen to go
   * to, which level is next. Every map a project holds is registered here
   * whether or not anything imports it, for the reason a Viewport needs
   * (`defineMap`), so a path is enough.
   *
   * A path nothing registered loads nothing, which is what the path says.
   */
  loadMapNamed(path, layer) {
    const held2 = this.maps.get(path);
    return held2 ? this.loadMap(held2, layer) : [];
  }
  /**
   * Close the newest map the world itself holds, and say whether there was
   * one — `unload the newest map`, and the whole of what "back" is.
   *
   * THE WORLD'S OWN SPACE, not a Viewport's: a Viewport shows one map and
   * swapping it is `load map ⟨…⟩ into ⟨…⟩`, which has its own block and its
   * own meaning. This is the stack a screen sits on
   * (specs/SCREENS_PLAN.md).
   *
   * The map a world was BUILT from is a load like any other, so a project
   * that goes back often enough closes its own first screen and is left with
   * nothing. That is what it asked for; a rule that keeps a floor under it is
   * the rule's business, and `Screens` keeps one.
   */
  unloadNewestMap() {
    const load = this.rootSpace.loads.at(-1);
    load?.unload();
    return load !== void 0;
  }
  /** Place a map's actors into `space` — `loadMap`'s body, for any space. */
  loadInto(space, map, layer) {
    this.growSpaceToFit(space, map);
    const lookup = this.propertyLookup();
    const added = [];
    const anchoring = [];
    const placed = /* @__PURE__ */ new Map();
    const deferred = [];
    for (const entry of map.actors) {
      const builder = this.types.get(entry.type);
      if (!builder) {
        throw new Error(
          `World '${this.id}': map references unregistered actor type '${entry.type}' (register it with define())`
        );
      }
      const actor = builder.instantiate(
        this.resolveInstanceId(builder, entry.id),
        entry.type
      );
      const own = new Map(
        actor.ownProperties().map((property) => [`${property.ownerId}.${property.id}`, property])
      );
      if (entry.id) {
        placed.set(entry.id, actor);
      }
      for (const [ownerId, props] of Object.entries(entry.properties ?? {})) {
        for (const [propId, value] of Object.entries(props)) {
          const key = `${ownerId}.${propId}`;
          const property = own.get(key) ?? lookup.get(key);
          if (!property || !actor.hasProperty(property)) {
            continue;
          }
          if (property.type === "actor" && typeof value === "string") {
            deferred.push([actor, property, value]);
            continue;
          }
          if (property.type === "actors" && Array.isArray(value)) {
            deferred.push([actor, property, value]);
            continue;
          }
          actor.set(property, value);
        }
      }
      this.useActorKind(entry.type, builder);
      this.place(actor, entry.layer ?? layer, space);
      if (isAnchor(entry.anchor)) {
        anchoring.push([actor, entry.anchor]);
      }
      added.push(actor);
    }
    for (const [actor, property, id] of deferred) {
      if (Array.isArray(id)) {
        const targets = id.map((one2) => placed.get(one2)).filter((one2) => one2 !== void 0);
        actor.set(property, targets);
        continue;
      }
      const target = placed.get(id);
      if (!target) {
        continue;
      }
      if (parentingKeys()?.parent === property) {
        actor.setParent(target, { keepWorld: false });
        continue;
      }
      actor.set(property, target);
    }
    this.applyAnchors(space, map, anchoring);
    const load = new MapLoad(
      this,
      added,
      space.loads,
      map.modal === true,
      typeof map.theme === "string" ? map.theme : ""
    );
    space.loads.push(load);
    for (const actor of added) {
      this.loadOf.set(actor, load);
    }
    if (typeof map.script === "function") {
      map.script(this, Object.fromEntries(placed), load);
    }
    return added;
  }
  /** Map `${ownerId}.${propId}` -> Property across the world's rules + traits. */
  propertyLookup() {
    const lookup = /* @__PURE__ */ new Map();
    const add = (property) => lookup.set(`${property.ownerId}.${property.id}`, property);
    for (const rule6 of this.activeRules()) {
      for (const property of Object.values(rule6.properties)) {
        add(property);
      }
      for (const trait of Object.values(rule6.traits)) {
        for (const property of Object.values(trait.properties)) {
          add(property);
        }
      }
    }
    return lookup;
  }
  /**
   * Register an actor template under the name a Map refers to it by.
   *
   * A map is JSON: it names a kind by its module path and nothing more, so
   * something has to hold the templates those names mean. `WorldBuilder.define`
   * is the same call one level up, and hands its own over before it loads.
   */
  define(type, template) {
    this.types.set(type, template);
    return this;
  }
  /** Replace the pressed-key set (driver calls this each frame before `tick`). */
  setInput(keys2) {
    this.held = new Set(keys2);
    this.keys = this.held;
  }
  /**
   * Add to what was typed this frame — the driver calls this per keystroke.
   *
   * APPENDED rather than replaced, unlike `setInput`: several characters may
   * arrive between two frames, and a call per character is what the DOM hands
   * over.
   */
  addTyped(characters) {
    this.typed.push(...characters);
  }
  /**
   * Type as if the player had — `type ⟨"a"⟩`.
   *
   * READ NEXT FRAME, not this one, and the lag is honest rather than a
   * compromise: this is called from a handler, a handler runs after the step
   * that reads what was typed, and a click IS a frame late. See `pendingTyped`
   * and specs/KEYBOARD_PLAN.md.
   *
   * Nothing hears this as "the world typed" — it arrives exactly where the
   * keyboard's characters arrive, so a Text Input, a Text Area and a project's
   * own `types ⟨character⟩` handler all work with no change at all. That is the
   * whole reason an on-screen keyboard types instead of reaching into a field.
   */
  type(characters) {
    this.pendingTyped.push(...characters);
  }
  /**
   * Press and release a key as if the player had — `press the ⟨backspace⟩ key`.
   *
   * The counterpart to `type` for the keys that make no character: backspace,
   * delete and enter are edits and commands, and a field handles them as
   * `presses ⟨key⟩` (`actors/textInput`). Down for one frame, up the next.
   */
  pressKey(key) {
    this.pendingKeys.add(key);
  }
  /** What was typed since the last tick, in order. */
  typedCharacters() {
    return this.typed;
  }
  /**
   * Ask the browser to leave `key` to the game — `capture the ⟨tab⟩ key`.
   *
   * Refused for `escape`, which is the way out of the game and is not the
   * game's to take (`core/keys`, RESERVED_KEYS). Refused silently rather than
   * thrown: a rule asking is asking, and a game that stopped dead because it
   * wanted one key too many would be worse than one that simply does not get
   * it.
   */
  captureKey(key) {
    if (!RESERVED_KEYS.has(key)) {
      this.captured.add(key);
    }
  }
  /** Give `key` back to the browser — `release the ⟨tab⟩ key`. */
  releaseKey(key) {
    this.captured.delete(key);
  }
  /** The keys the game has claimed; the driver suppresses their default. */
  capturedKeys() {
    return this.captured;
  }
  /**
   * Say whether the game is using the wheel — the same bargain as a key.
   *
   * A CANVAS THAT SWALLOWED EVERY WHEEL would trap the page's own scroll under
   * a game that has nothing to scroll, and one that swallowed none would
   * scroll the page out from under a list somebody is reading. Neither is a
   * constant the driver could know, so the world says: the Mouse rule sets
   * this each frame from whether anything scrollable is under the pointer
   * (`rules/mouse`), and the driver reads it in its listener.
   *
   * A FRAME BEHIND, which is the whole of what it costs. The pointer has to
   * have arrived over the list before the first notch, and it has — moving
   * there is frames of pointer events. A wheel turned in the same instant the
   * pointer lands scrolls the page once.
   */
  useWheel(wanted) {
    this.wheelWanted = wanted;
  }
  /** Whether anything under the pointer asked for the wheel. */
  wantsWheel() {
    return this.wheelWanted;
  }
  wheelWanted = false;
  /** The game window took the keyboard (the driver calls this on focus). */
  gainedKeyboard() {
    this.keyboardArrived = true;
  }
  /** Whether it took the keyboard since the last tick. */
  keyboardJustArrived() {
    return this.keyboardArrived;
  }
  /**
   * Lend the world a way to measure text (the driver calls this once).
   *
   * Once, at set-up, and not per frame: a measurer is a canvas and a font, and
   * neither changes while a game runs.
   */
  useTextMetrics(measure) {
    this.measure = measure;
  }
  /**
   * Lend the world somewhere to remember things — see `save`, `recall` and
   * `forget` below (specs/SAVING_PLAN.md).
   *
   * LENT, NOT REACHED FOR, exactly as the measuring tape above is. The engine
   * knows nothing about browsers; a world with no storage behind it — the
   * headless check runner, every test that does not ask for one — remembers
   * nothing and loses nothing, which is what it should do rather than throw.
   */
  useStorage(storage) {
    this.storage = storage;
  }
  storage;
  /**
   * Which PROJECT this is, for filing what it remembers under.
   *
   * LENT, like the storage and the clock, and for the same reason: a project
   * is a thing the lab knows about and this half does not. The driver hands
   * over the channel the project lives at (`/projects/world/<channel>/edit`).
   *
   * A world lent none files under a slot shared with every other project on
   * the browser, which is what the whole lab did before this and is what
   * every headless test still does.
   */
  useChannel(channel) {
    this.channel = channel;
  }
  channel = "";
  /**
   * Lend the world the theme its interface is painted in.
   *
   * LENT, like the storage, the clock and the channel — and read the same way,
   * by whoever draws. A `.style` file is JSON the bundler loads, so this takes
   * the document and resolves it ONCE: `styleNamed` is then a map lookup,
   * which matters because a drawing asks for one per shape per actor per
   * frame (specs/STYLES_PLAN.md).
   *
   * A world lent none draws in whatever its routines set for themselves, which
   * is what every world did before this and what every headless test does.
   */
  /**
   * Register a theme by path, before anything names one.
   *
   * WHY THE WORLD IS HANDED THE LOT. Only one of the three ways a theme is
   * chosen is a path an import could follow: the world's own `use theme` row.
   * A map's is a string in its document, a placement's is a string in a
   * property, and a file's `extends` is a fourth — none of which a bundler
   * can see. So the preamble imports every `.style` the project holds and
   * says so here, exactly as it does for actor kinds and maps
   * (specs/STYLES_PLAN.md).
   */
  defineTheme(path, document) {
    this.themeDocuments.set(path, document);
    this.themeCache.delete(path);
  }
  themeDocuments = /* @__PURE__ */ new Map();
  /**
   * Name the world's own theme — the base of the cascade.
   *
   * TAKES A PATH OR A DOCUMENT. The block passes the imported document, which
   * is what a bundler gives it; a test passes one in hand. Either way the
   * lookup below is what answers `extends`, a map's theme and a placement's.
   */
  useTheme(document, parentAt = (path) => this.themeDocuments.get(path)) {
    this.findTheme = parentAt;
    this.themeCache = /* @__PURE__ */ new Map();
    this.baseTheme = resolveTheme(
      typeof document === "string" ? parentAt(document) : document,
      parentAt
    );
  }
  baseTheme = NO_THEME;
  /**
   * How to find a theme by path — the same function `useTheme` resolved the
   * base with, kept because the OTHER two levels are found at draw time: a
   * map names its theme in its own document, and a placement in a property,
   * and neither is known when the world is built.
   */
  findTheme;
  /**
   * Resolved themes by path.
   *
   * A CACHE BECAUSE A DRAWING ASKS PER SHAPE PER ACTOR PER FRAME. Resolving a
   * theme walks its parent and every class in both, which is fine once and
   * absurd sixty times a second. Cleared whenever the base changes, which is
   * the only time a file can have been reloaded.
   */
  themeCache = /* @__PURE__ */ new Map();
  /** The world's own theme — the base of the cascade. */
  currentTheme() {
    return this.baseTheme;
  }
  /** One theme by path, resolved once and kept. */
  themeAt(path) {
    if (!path || !this.findTheme) {
      return void 0;
    }
    const known = this.themeCache.get(path);
    if (known) {
      return known;
    }
    const found = this.findTheme(path);
    if (found === void 0) {
      return void 0;
    }
    const resolved = resolveTheme(found, this.findTheme, [path]);
    this.themeCache.set(path, resolved);
    return resolved;
  }
  /**
   * The theme an ACTOR is painted out of: its own, else its map's, else the
   * world's.
   *
   * THREE LEVELS AND NO MORE. The actor's own is a property a placement sets
   * in the inspector; the map's is a field on the map document; the world's
   * is the `use theme` row. Each is a whole FILE rather than a class, which
   * is what keeps the drawings out of it — a drawing names a class and never
   * learns which file answered (specs/STYLES_PLAN.md).
   *
   * `loadOf` is what makes the middle one possible, and it was already there:
   * the world keeps which load placed each actor so `canReach` can ask
   * (specs/MODALITY_PLAN.md).
   */
  themeFor(actor) {
    const property = this.styleThemeProperty();
    const own = property && actor.hasProperty(property) ? actor.get(property) : "";
    return (typeof own === "string" ? this.themeAt(own) : void 0) ?? this.themeAt(this.loadOf.get(actor)?.theme ?? "") ?? this.baseTheme;
  }
  /** One class, for this actor, or nothing — what `use style` generates. */
  styleFor(actor, name) {
    return this.themeFor(actor).styles.get(name);
  }
  /**
   * One style by name, or nothing.
   *
   * NOTHING RATHER THAN A DEFAULT. The pen leaves itself alone when handed
   * nothing (`CommandPen.useStyle`), so a drawing naming a style the theme
   * lacks paints in whatever came before rather than vanishing — and the name
   * is worth reporting, not worth guessing at.
   */
  styleNamed(name) {
    return this.baseTheme.styles.get(name);
  }
  /**
   * The key a name is stored under.
   *
   * THE PROJECT IS IN IT, and that is not a nicety. Storage belongs to an
   * ORIGIN, and every project in the lab runs on the same sandbox origin —
   * so a key of the name alone means every published app that keeps a
   * `score` reads and writes the same slot as every other. Tolerable while a
   * learner has one project; a bug the moment anybody shares one, which is
   * the point of saving at all (specs/RECORDS_PLAN.md).
   */
  memoryKey(name) {
    return this.channel ? `world-lab.memory.${this.channel}.${name}` : `world-lab.memory.${name}`;
  }
  /**
   * Write every property this world declared for itself, under `name`.
   *
   * THE WORLD'S OWN MEMORY and nothing else. What a saved GAME is — which
   * actors are alive and where — wants a vocabulary for identity across runs
   * that nothing here has; an app's data is not that, and this is an app's
   * data (specs/SAVING_PLAN.md).
   *
   * Answers whether it was written, which is false when nothing lent this
   * world a storage and false when the storage refused — a browser with its
   * site data blocked is a real thing and not a crash.
   */
  save(name) {
    if (!this.storage) {
      return false;
    }
    const written = {};
    for (const property of this.ownProperties) {
      written[`${property.ownerId}.${property.id}`] = this.store.get(property);
    }
    try {
      this.storage.setItem(this.memoryKey(name), JSON.stringify(written));
      return true;
    } catch {
      return false;
    }
  }
  /**
   * Read a memory back, and say whether there was one.
   *
   * A project asks the answer to tell a first run from a later one, which is
   * the whole of what an app's start screen needs.
   *
   * A PROPERTY THE DATA DOES NOT MENTION KEEPS WHAT IT HAS. A project that
   * adds a property after saving should not find its other values wiped, and
   * what an unmentioned property holds is already its default. A property the
   * world no longer DECLARES is ignored: saved data outlives edits, and a
   * value nothing can hold is not worth taking a project down for.
   */
  recall(name) {
    if (!this.storage) {
      return false;
    }
    let raw = null;
    try {
      raw = this.storage.getItem(this.memoryKey(name));
    } catch {
      return false;
    }
    if (raw === null) {
      return false;
    }
    let read;
    try {
      read = JSON.parse(raw);
    } catch {
      return false;
    }
    if (!read || typeof read !== "object") {
      return false;
    }
    const held2 = read;
    for (const property of this.ownProperties) {
      const key = `${property.ownerId}.${property.id}`;
      if (key in held2) {
        this.set(property, held2[key]);
      }
    }
    return true;
  }
  /**
   * Keep these actors — `remember ⟨…⟩ as ⟨"notes"⟩`.
   *
   * A RECORD IS AN ACTOR. It has named typed fields, an inspector that edits
   * them, blocks that read them and a picture; a second thing with named
   * fields beside it would be a second way to say what the lab already says
   * (specs/RECORDS_PLAN.md). So what was missing was never a way to describe
   * a record — only a way to keep one.
   *
   * IT TAKES THE ACTORS, not a kind. `any ⟨Note⟩` is the ordinary way to say
   * "all of them", and taking a value rather than a dropdown means a project
   * can keep a SUBSET with the block it already filters by:
   *
   *     remember ⟨the ⟨Note⟩s where ⟨done⟩ is false⟩ as ⟨"todo"⟩
   *
   * …and a mixed set, since each row carries the kind it came from.
   *
   * ITS OWN PROPERTIES AND NOTHING ELSE. A kind's `define property` rows are
   * what that kind says its state is; trait properties are a rule's business
   * — where it is, whether it holds the keyboard, how much health it has. A
   * project that wants something kept declares it on the kind, which is the
   * direction this lab already pushes.
   *
   * REFERENCES ARE REFUSED. A property holding an actor has nothing to point
   * at in another run: `loadMap` resolves one in a second pass because both
   * ends are in the same map, and two runs are not. Storing it would write
   * something that cannot come back.
   */
  rememberActors(actors, name) {
    if (!this.storage) {
      return false;
    }
    const rows = [...actors].map((actor) => {
      const fields = {};
      for (const property of actor.ownProperties()) {
        if (property.type === "actor" || property.type === "actors") {
          continue;
        }
        fields[property.id] = actor.get(property);
      }
      return { kind: actor.type, fields };
    });
    try {
      this.storage.setItem(this.memoryKey(name), JSON.stringify({ rows }));
      return true;
    } catch {
      return false;
    }
  }
  /**
   * Make them again — `bring back what was remembered as ⟨"notes"⟩`.
   *
   * ANSWERS THE ACTORS, not a count and not a boolean, which is the whole
   * shape of it. A record has nowhere to be and does not care; anything DRAWN
   * has to be PUT somewhere, and only the project knows where. Handing the
   * set back is what lets it say:
   *
   *     let row be each actor in ⟨bring back what was remembered as ⟨…⟩⟩
   *       do set position of row to …
   *
   * Nothing is lost by not answering a number. `how many actors in ⟨…⟩` and
   * `any actors in ⟨…⟩` are blocks the lab already has, so "how many" and
   * "was there anything saved" are each one block away and neither had to be
   * built into this.
   *
   * NO KIND IS NAMED, because each row carries its own — which is what lets
   * a mixed set come back as a mixed set. The kinds are found by path in what
   * the world was TOLD about (`define`), since a path stored in a browser is
   * one no import could have followed.
   *
   * THEY ARE IN THE WORLD when they come back. An actor outside one has no
   * age and is found by nothing, so a set of unplaced actors would be a value
   * that leaks the moment a project dropped it. They are added and then
   * handed over, and a handler that moves them does so before the frame is
   * drawn.
   */
  recallActors(name, layer) {
    if (!this.storage) {
      return [];
    }
    let raw = null;
    try {
      raw = this.storage.getItem(this.memoryKey(name));
    } catch {
      return [];
    }
    if (raw === null) {
      return [];
    }
    let read;
    try {
      read = JSON.parse(raw);
    } catch {
      return [];
    }
    const held2 = read;
    if (!Array.isArray(held2.rows)) {
      return [];
    }
    const made = [];
    for (const row of held2.rows) {
      const kind = typeof row?.kind === "string" ? row.kind : "";
      const template = this.types.get(kind);
      if (!template) {
        continue;
      }
      const actor = this.addActor(template, void 0, kind, layer);
      const fields = row.fields ?? {};
      for (const property of actor.ownProperties()) {
        if (property.id in fields) {
          actor.set(property, fields[property.id]);
        }
      }
      made.push(actor);
    }
    return made;
  }
  /** Throw a memory away, so an app that can save can also reset. */
  forget(name) {
    if (!this.storage) {
      return false;
    }
    try {
      this.storage.removeItem(this.memoryKey(name));
      return true;
    } catch {
      return false;
    }
  }
  /**
   * How wide `value` would be drawn at `size` pixels, in pixels.
   *
   * ZERO WHEN NOTHING CAN MEASURE, which is the honest answer and not a
   * failure: a world with no canvas behind it — the headless check runner is
   * one — puts a caret at the left margin, and that is visibly nothing rather
   * than invisibly wrong.
   *
   * The value is said as words the way everything else is (`core/textValue`),
   * so a list measures as the sentence it draws as rather than as its
   * brackets. A size that is not a positive number measures nothing: there is
   * no text at zero pixels, and a negative one is a typo.
   */
  textWidth(value, size, style) {
    if (!this.measure) {
      return 0;
    }
    const words = text(value);
    const at = Number(size);
    if (!words || !Number.isFinite(at) || at <= 0) {
      return 0;
    }
    return this.measure(words, at, style?.weight === "bold" ? "bold" : void 0) || 0;
  }
  /**
   * Lend the world a clock — the driver calls this once, at set-up.
   *
   * `now` reports SECONDS since the epoch, because everything else in the lab
   * is in seconds and a learner subtracting two moments should get an answer
   * in the unit a tween and a cooldown already use.
   *
   * `offsetMinutes` is minutes to ADD to UTC to reach the zone being shown —
   * so New York in winter is -300. That is the sign a person writes, and the
   * opposite of `Date.getTimezoneOffset`; the driver flips it on the way in.
   */
  useClock(now, offsetMinutes = 0) {
    this.clock = now;
    this.zoneOffset = offsetMinutes;
    this.moment = now();
    return this;
  }
  /**
   * What time it is — `the time now`, in seconds since the epoch.
   *
   * ONE VALUE FOR THE WHOLE FRAME (see `moment`). A world nobody lent a clock
   * answers the same fixed moment every time, which is a visible wrong answer
   * rather than an invisible one.
   */
  now() {
    return this.moment;
  }
  /** The zone the clock is being read in, in minutes from UTC. */
  timeZoneOffset() {
    return this.zoneOffset;
  }
  /** One part of a moment — `⟨the hour⟩ of ⟨…⟩` (`core/clock`). */
  timePart(seconds, part) {
    const at = Number(seconds);
    return isTimePart(part) && Number.isFinite(at) ? partOf(at, part, this.zoneOffset) : 0;
  }
  /** A moment as words — `⟨…⟩ as ⟨a date⟩` (`core/clock`). */
  timeText(seconds, style) {
    const at = Number(seconds);
    if (!Number.isFinite(at)) {
      return "";
    }
    const how = TIME_STYLES.includes(String(style)) ? String(style) : "date";
    return timeText(at, how, this.zoneOffset);
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
  /**
   * Keys that should fire AGAIN this tick because they are being held.
   *
   * The third edge, and the one a keyboard has that a set of held keys does
   * not describe: hold an arrow and it moves once, pauses, then moves over and
   * over. A list walked with the arrows and a field emptied with backspace
   * both want it, and neither could ask for it — `is held` is every frame,
   * which is forty repeats a second, and `presses` is one.
   *
   * NOT the rising edge. A key's first fire is its press, which the Input rule
   * already raises; this is only the repeats after it, so a rule that wants
   * both listens to both and one that wants a single shot — a jump — is
   * untouched.
   *
   * THE TIMING IS THE ENGINE'S because the frame clock is. Expressing "0.4
   * seconds, then every 0.06" in the rule language would need a timer per key
   * held, and the world already knows when each one went down.
   */
  repeatingKeys() {
    return [...this.repeatingThisTick];
  }
  /**
   * How many repeats a key held for `since` seconds has earned by now.
   *
   * Counted from the elapsed time rather than accumulated per frame, so a
   * frame that ran long fires once rather than dropping the repeat, and a
   * world ticked in big steps does not spray them.
   */
  repeatsDue(since) {
    const held2 = this.elapsed - since;
    if (held2 < KEY_REPEAT_DELAY) {
      return 0;
    }
    return Math.floor((held2 - KEY_REPEAT_DELAY) / KEY_REPEAT_INTERVAL) + 1;
  }
  /** When each held key went down, in world seconds. Cleared on release. */
  keyHeldSince = /* @__PURE__ */ new Map();
  /** Repeats already fired for each held key, so none fires twice. */
  keyRepeatsFired = /* @__PURE__ */ new Map();
  /** The keys `repeatingKeys` answers with, worked out once per tick. */
  repeatingThisTick = /* @__PURE__ */ new Set();
  /**
   * Work out which held keys repeat this tick.
   *
   * ONCE PER TICK, before the steps run, so that `repeatingKeys` is a pure
   * read: a step may ask twice in a frame, and two different answers would be
   * a key that repeated for one reader and not the other.
   *
   * A key that went down starts its clock; one that went up forgets it, so
   * releasing and pressing again waits out the delay afresh rather than
   * carrying on at speed.
   */
  advanceKeyRepeats() {
    const repeating = /* @__PURE__ */ new Set();
    for (const key of this.keys) {
      let since = this.keyHeldSince.get(key);
      if (since === void 0) {
        since = this.elapsed;
        this.keyHeldSince.set(key, since);
        this.keyRepeatsFired.set(key, 0);
      }
      const due = this.repeatsDue(since);
      if (due > (this.keyRepeatsFired.get(key) ?? 0)) {
        this.keyRepeatsFired.set(key, due);
        repeating.add(key);
      }
    }
    for (const key of [...this.keyHeldSince.keys()]) {
      if (!this.keys.has(key)) {
        this.keyHeldSince.delete(key);
        this.keyRepeatsFired.delete(key);
      }
    }
    this.repeatingThisTick = repeating;
  }
  /**
   * Replace the mouse's state — where it is, and which buttons are held.
   *
   * One call rather than two because they arrive together and are read
   * together: a click is a button and a place, and a frame that learned the
   * button before the position would put the first click of a game wherever
   * the pointer last was.
   *
   * `at` is in VIEWPORT pixels (see the field), and the driver calls this each
   * frame before `tick`, as it does `setInput`.
   */
  setPointer(at, buttons) {
    this.pointer = new Vector(at.x, at.y);
    this.buttons = new Set(buttons);
  }
  /**
   * How far the wheel was turned since the last tick, in PIXELS.
   *
   * ACCUMULATED, NOT REPLACED, because a wheel is a sequence and not a state:
   * the driver may see three notches between two frames, and a frame that read
   * only the last of them would scroll a third as far as the hand moved. The
   * keys are a set and the pointer is a place — both answer "how is it now" —
   * and this is the third kind, like what was typed.
   *
   * PIXELS, and the driver's job to make them so. A browser reports its wheel
   * in pixels, lines or pages depending on the machine, the browser and
   * whether it is a trackpad; none of that reaches here (`PhaserBinding`).
   *
   * Positive is DOWN, which is the direction the content moves under a scroll
   * down, and is what every scrollable thing in the lab adds to its offset.
   */
  scrollWheel(by) {
    this.pendingWheel += by;
  }
  /** What the wheel turned during THIS tick, in pixels. Zero on a still one. */
  wheelTurned() {
    return this.wheel;
  }
  /**
   * The wheel turned since the last tick, waiting to be read by the next.
   *
   * Two fields for the reason the typed queue has two: the driver adds between
   * frames, and the step that reads it runs inside one. The pending total
   * becomes the frame's at the top of `tick` and is zeroed there, so a frame
   * sees exactly what the hand did to it and a still frame sees nothing.
   */
  pendingWheel = 0;
  wheel = 0;
  /** Whether `button` (a name from `core/pointer`) is currently held. */
  isButtonDown(button) {
    return this.buttons.has(button);
  }
  /** Buttons pressed this tick that were not pressed last tick. */
  newlyPressedButtons() {
    return [...this.buttons].filter(
      (button) => !this.previousButtons.has(button)
    );
  }
  /** Buttons released this tick that were pressed last tick. */
  newlyReleasedButtons() {
    return [...this.previousButtons].filter(
      (button) => !this.buttons.has(button)
    );
  }
  /**
   * Where the mouse is IN THE WORLD — the point it is over.
   *
   * Not where it is on the screen, which is what the driver reported and what
   * this converts: a camera two screens along means the pointer at the middle
   * of the window is over a place two screens along, and "is the mouse over
   * this actor" is a question about that place. A camera's position is the
   * point it shows at the MIDDLE of the view (core/Camera), so the window's
   * top-left corner is half a view up and to the left of it.
   *
   * Measured against the ACTIVE camera, which is the view the learner is
   * looking at. A layer with parallax of its own draws somewhere else and this
   * does not know about it — the same thing `map size` and every other world
   * coordinate already assume, and the answer a game wants for the layer its
   * actors are on.
   */
  mousePosition(actor) {
    const subject = actor ?? this.inHand.at(-1);
    if (subject instanceof Camera && subject.window) {
      return this.throughWindow(subject.window, subject);
    }
    const space = this.spaceOf(subject);
    const mirror = this.mirrorUnderPointer(space);
    if (mirror) {
      return this.throughWindow(mirror.owner, mirror.camera);
    }
    if (!space.owner || !space.camera) {
      return this.rootPointer();
    }
    return this.throughWindow(space.owner, space.camera);
  }
  /**
   * Where the pointer is in the scene `camera` looks at, seen through the
   * rectangle of `viewport`.
   *
   * The Viewport branch of `mousePosition`, named, since a mirror and a box
   * holding a level both want it and differ only in which camera.
   */
  throughWindow(viewport, camera) {
    const position = this.positionalProperty(SPATIAL.position);
    const at = position ? viewport.get(position) : new Vector(0, 0);
    const view = this.viewSizeOf(viewport);
    const outer = this.spaceOf(viewport).owner ? this.mousePosition(viewport) : this.rootPointer();
    const inside = new Vector(
      outer.x - (at.x - view.x / 2),
      outer.y - (at.y - view.y / 2)
    );
    return new Vector(
      camera.position.x - view.x / 2 + inside.x,
      camera.position.y - view.y / 2 + inside.y
    );
  }
  /** Where the pointer is in the root, through the world's own camera. */
  rootPointer() {
    const camera = this.activeCamera();
    const view = this.viewSize(camera);
    return new Vector(
      camera.position.x - view.x / 2 + this.pointer.x,
      camera.position.y - view.y / 2 + this.pointer.y
    );
  }
  /**
   * The topmost mirror OF `target` whose rectangle the pointer is inside.
   *
   * Measured in the root, through the world's own camera — a mirror is a
   * placement in the root like any other (one inside another Viewport's space
   * is nobody's case yet). Only a mirror, and only of this scene: a box
   * holding a level of its own has actors of its own, and an actor elsewhere
   * is never under it in the sense that matters here.
   */
  mirrorUnderPointer(target) {
    const position = this.positionalProperty(SPATIAL.position);
    if (!position) {
      return void 0;
    }
    const pointer = this.rootPointer();
    for (let index = this.viewportSpaces.length - 1; index >= 0; index -= 1) {
      const space = this.viewportSpaces[index];
      if (space.mirrorOf !== target || !space.owner || !space.camera) {
        continue;
      }
      const at = space.owner.get(position);
      const box = this.viewSizeOf(space.owner);
      if (Math.abs(pointer.x - at.x) <= box.x / 2 && Math.abs(pointer.y - at.y) <= box.y / 2) {
        return space;
      }
    }
    return void 0;
  }
  /**
   * How much an animation's frames are shrunk, by its largest cell.
   *
   * THE LARGEST, not each frame's own: fitted one by one, a two-pixel frame
   * would draw as big as a hundred-pixel one and the actor would pulse. It is
   * the same quantity `publishIntrinsicSize` measures the box from, which is
   * what keeps the drawn size and the box the same number
   * (specs/ACTOR_SIZE.md).
   */
  publishAnimationSize(actor, def) {
    let width = 0;
    let height = 0;
    for (const frame of def.frames) {
      if (frame.position) {
        width = Math.max(width, frame.position.width);
        height = Math.max(height, frame.position.height);
      }
    }
    if (width <= 0 || height <= 0) {
      return 1;
    }
    const fit = fitToTile(width, height);
    this.publishSize(actor, width * fit, height * fit);
    return fit;
  }
  /**
   * Say how big an actor is, if it has changed.
   *
   * WRITTEN FROM THE SNAPSHOT, which the drawing branch below has always done
   * and which the sprite branches do now. The Animation rule publishes the
   * same number on every tick, and that is the path the game runs on; this is
   * for the reader that never ticks — the sandbox's introspection pass builds
   * a world, reads it once and throws it away, and a map editor told nothing
   * draws every kind at one nominal tile (`sandbox/worldPreviewWorkerManager`).
   *
   * Only when it moved, so an ordinary actor's is set once and never again.
   */
  publishSize(actor, width, height) {
    const property = this.intrinsicSizeProperty();
    if (!property) {
      return;
    }
    const known = actor.get(property);
    if (known?.x !== width || known?.y !== height) {
      actor.set(property, new Vector(width, height));
    }
  }
  /**
   * How big this actor is in world units, BEFORE its scale, if anything has
   * said.
   *
   * The one question "how big is it" has one answer, and it is this property:
   * a drawing's declared canvas and a sprite's picture fitted to a tile both
   * land in it, so a caller asks the size rather than asking what kind of
   * actor it is looking at (specs/ACTOR_SIZE.md).
   *
   * UNSCALED ON PURPOSE, and it was briefly not: a reader draws this box
   * through the actor's own transform, and that transform already carries the
   * scale. Folding the scale in here doubled it the moment a placement
   * overrode `scale` — the editor drawing kind × placement where the game
   * draws placement alone. The scale is a separate question with a separate
   * answer ({@link scaleOf}).
   *
   * Undefined for an actor nobody has measured — no appearance, or a picture
   * the project never stated a size for. A caller that must draw something
   * anyway falls back to a tile, which is what it always did.
   */
  sizeOf(actor) {
    const property = this.intrinsicSizeProperty();
    const size = property ? actor.get(property) : void 0;
    if (!size || size.x <= 0 || size.y <= 0) {
      return void 0;
    }
    return { width: size.x, height: size.y };
  }
  /**
   * What this actor's kind was told to scale itself by.
   *
   * THE OTHER HALF OF HOW BIG IT IS, and the half an editor could not read. A
   * `set scale of this to x 1 y 2` row runs when the actor is defined, so it
   * is true of a world that was never played — but nothing outside the engine
   * asked, and the map editor filled in a scale of one for every kind. A
   * two-tile actor was drawn as a square there: right in the game, square in
   * the editor, with nothing on screen to say which was lying.
   *
   * Left signed, unlike `rules/spatial.halfExtent`: a scale of -1 is a facing
   * and a reader drawing through a transform wants the flip, where one
   * measuring an extent wants the magnitude.
   */
  scaleOf(actor) {
    const property = this.scaleProperty();
    const scale = property ? actor.get(property) : void 0;
    return scale ? { x: scale.x, y: scale.y } : void 0;
  }
  /** The definition of a known animation, or undefined. */
  /** How big an image is, if the project measured it. */
  imageSize(name) {
    return this.imageSizes.get(name);
  }
  /** Record what the project's images measure — see {@link imageSize}. */
  useImageSizes(sizes) {
    for (const [name, size] of Object.entries(sizes)) {
      this.imageSizes.set(name, size);
    }
  }
  animation(id) {
    return this.animationDefs.get(id);
  }
  /**
   * Whether input reaches this actor — `⟨…⟩ can be reached`.
   *
   * FALSE WHILE SOMETHING MODAL COVERS IT. A screen loaded over another is a
   * dialog: the one in front takes the clicks, the tabbing and the typing,
   * and what is behind waits. Every interface anybody has used works this
   * way, and nothing here said so until an on-screen keyboard's keys started
   * pressing the button on the screen behind them (specs/MODALITY_PLAN.md).
   *
   * MEASURED FROM THE TOPMOST MODAL LOAD, not from the top of the stack, and
   * that is the whole of the design. A keyboard sits ABOVE the form it fills
   * and must not lock it out; a dialog sits above a list and must. So a map
   * says which it is (`WorldMap.modal`), and everything placed by the topmost
   * modal load OR BY ANYTHING ABOVE IT can be reached.
   *
   * AN ACTOR NO MAP PLACED IS BEHIND EVERYTHING. `add actor` in a world's
   * body, a bullet a handler made: they belong to no load, which puts them
   * under the bottom one, so a dialog covers them too. That is what a dialog
   * over a game has to mean.
   *
   * THE ROOT SPACE DECIDES FOR EVERYBODY. Screens are the root's stack, and a
   * level playing inside a Viewport is behind whatever is over the window —
   * so a modal in the root covers the other spaces whole. A modal loaded
   * INSIDE a Viewport is not a case anybody has needed and is not answered.
   */
  canReach(actor) {
    const loads = this.rootSpace.loads;
    let topModal = -1;
    for (let at = loads.length - 1; at >= 0; at -= 1) {
      if (loads[at].modal) {
        topModal = at;
        break;
      }
    }
    if (topModal < 0) {
      return true;
    }
    const load = this.loadOf.get(actor);
    return load ? loads.indexOf(load) >= topModal : false;
  }
  /** The ids of every registered animation (active rules' stock + world extras). */
  animationIds() {
    return [...this.animationDefs.keys()];
  }
  /** Advance the simulation by `delta` seconds. */
  tick(delta) {
    this.inTick = true;
    if (!this.paused) {
      this.elapsed += delta;
    }
    if (this.clock) {
      this.moment = this.clock();
    }
    if (this.pendingTyped.length > 0) {
      this.typed = [...this.pendingTyped, ...this.typed];
      this.pendingTyped = [];
    }
    if (this.pendingKeys.size > 0) {
      this.keys = /* @__PURE__ */ new Set([...this.held, ...this.pendingKeys]);
      this.pendingKeys = /* @__PURE__ */ new Set();
    } else {
      this.keys = this.held;
    }
    this.advanceKeyRepeats();
    this.wheel = this.pendingWheel;
    this.pendingWheel = 0;
    try {
      for (const space of this.viewportSpaces) {
        this.lendCameraProperties(space);
      }
      this.scheduler.run(this, delta, this.paused ? whilePaused : void 0);
      this.events.flush(this);
    } finally {
      this.inTick = false;
      for (const actor of this.leaving) {
        this.detach(actor);
      }
      this.leaving.clear();
    }
    this.settleSpaces();
    this.previousKeys = this.keys;
    this.previousButtons = this.buttons;
    this.typed = [];
    this.keyboardArrived = false;
  }
  /** The resolved step order — for inspection and tests. */
  stepOrder() {
    return this.scheduler.order();
  }
  /** Whether a rule is active (directly or by dependency). */
  hasRule(rule6) {
    return this.membership.has(rule6);
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
    return this.layerList.map((layer) => layer.background);
  }
  /**
   * The same for the foregrounds — what each layer draws IN FRONT of its
   * actors, in stack order.
   *
   * A second list rather than a second field on the first: the driver draws the
   * two at different depths and holds a separate image cache for each, so it
   * wants them apart, and there is nothing either needs to know about the other.
   */
  foregroundSnapshot() {
    return this.layerList.map((layer) => layer.foreground);
  }
  /** The one color behind everything, as the driver clears to it. */
  backdropColor() {
    return this.clearColor;
  }
  /**
   * The background slot of a layer, or of the default layer.
   *
   * An unknown id is the default rather than an error, for the reason
   * `addActor` gives: the id comes from generated code naming a `define layer`
   * block, and deleting that block while a `set background` still names it
   * should paint somewhere visible instead of taking the world down.
   */
  slotAt(layer, which) {
    return (this.layer(layer) ?? this.layerList[this.depthOf(DEFAULT_LAYER_ID)])[which];
  }
  backdropAt(layer) {
    return this.slotAt(layer, "background");
  }
  /**
   * Draw `sprite` behind everything — an image file name, as a frame names one.
   *
   * `undefined` clears it, leaving the backdrop color. The image is stretched
   * to the viewport by the driver (BACKGROUNDS.md §4); nothing here knows how
   * big it is, and a backdrop is never a spritesheet, so this takes a file name
   * and never a cell reference.
   */
  setBackground(sprite, layer = DEFAULT_LAYER_ID) {
    this.backdropAt(layer).sprite = sprite;
    return this;
  }
  // ── Sound (specs/SOUND.md) ──────────────────────────────────────────────
  //
  // Two things with opposite mechanisms, which is why they are two methods and
  // not one. A one-shot is a MOMENT: it goes on a queue the driver drains after
  // each tick, and it is NOT in the snapshot, because a moment that survived
  // into the hot-reload baseline would be compared, found different, and
  // replayed. Music is STATE: it is in the snapshot and patches in place, the
  // way the sky does.
  /**
   * Play a sound once — `play sound ⟨pop⟩`.
   *
   * Queued rather than played, because the engine has no speakers and is not
   * going to grow any: it says what happened, and the driver decides what that
   * sounds like. The same division `renderSnapshot` makes about pictures.
   *
   * Repeats are KEPT. Two coins collected in one tick are two pops, and a queue
   * that deduplicated would make a busy frame quieter than a calm one.
   */
  playSound(sound) {
    this.queuedSounds.push(sound);
    return this;
  }
  /**
   * Stop everything making a noise — `stop all sounds`.
   *
   * IN THE QUEUE, not beside it, because a tick is ordered: `stop all sounds`
   * and then `play sound ⟨pop⟩` is a pop, and a flag read after the queue was
   * drained would make it silence. So this is a cue like any other and the
   * driver reads them in order (`runtime/driver/sound`).
   *
   * The track is state and not a moment, so it is cleared HERE as well: a
   * world that went on reporting music nobody can hear would start it again
   * the moment anything else changed.
   */
  stopSounds() {
    this.queuedSounds.push(STOP_ALL_SOUNDS);
    this.track = void 0;
    return this;
  }
  /**
   * Take the sounds raised since the last call, emptying the queue.
   *
   * The driver calls this after `tick`. A world nobody drains — one built to be
   * compared against, or to draw a thumbnail with — accumulates and is thrown
   * away with its queue, which is what "building a world drops its sounds"
   * comes to in practice.
   */
  drainSounds() {
    return this.queuedSounds.splice(0, this.queuedSounds.length);
  }
  /**
   * Play a track, replacing whatever was playing — `set music to ⟨theme⟩`.
   *
   * `undefined` is silence and is how it stops, so there is one method and not
   * two here. The PALETTE has two — `set music to` and `stop music` — because
   * a menu row reading "(none)" is not where anybody looks for a way to stop
   * something (`domainBlocks`).
   */
  setMusic(track) {
    this.track = track;
    return this;
  }
  /** The track playing, or undefined for silence. */
  music() {
    return this.track;
  }
  /**
   * Slide a layer's background, in world pixels.
   *
   * Motion the author owns, independent of any camera — which is what makes
   * drifting clouds expressible before cameras exist at all (core/Layer). Pair
   * it with `setBackgroundRepeat` unless the image is meant to leave a gap.
   */
  setBackgroundOffset(offset, layer = DEFAULT_LAYER_ID) {
    this.slotAt(layer, "background").offset = new Vector(offset.x, offset.y);
    return this;
  }
  /** The same for a layer's foreground. */
  setForegroundOffset(offset, layer = DEFAULT_LAYER_ID) {
    this.slotAt(layer, "foreground").offset = new Vector(offset.x, offset.y);
    return this;
  }
  /** Tile a layer's background rather than stretching it to the surface. */
  setBackgroundRepeat(repeat, layer = DEFAULT_LAYER_ID) {
    this.slotAt(layer, "background").repeat = repeat;
    return this;
  }
  /** The same for a layer's foreground. */
  setForegroundRepeat(repeat, layer = DEFAULT_LAYER_ID) {
    this.slotAt(layer, "foreground").repeat = repeat;
    return this;
  }
  /**
   * Draw `sprite` in FRONT of this layer's actors — fog, snow, a vignette.
   *
   * The background's twin in every respect but depth. `undefined` clears it,
   * leaving nothing drawn: unlike the background there is no color behind a
   * foreground, because a color in front of everything would be a wall.
   */
  setForeground(sprite, layer = DEFAULT_LAYER_ID) {
    this.slotAt(layer, "foreground").sprite = sprite;
    return this;
  }
  /**
   * Set the color behind the backdrop image, and behind everything without one.
   *
   * Takes whatever a color block produced — hex from a picker, floats from
   * `r g b a` — because `rgba` accepts both and every color block can then
   * feed this one (see color.ts).
   *
   * One sky, not one per layer: a color on any layer but the bottom would be
   * hidden by the layer under it.
   */
  setBackgroundColor(color) {
    this.clearColor = rgba(color);
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
  addBackgroundEffect(path, document, values, layer = DEFAULT_LAYER_ID) {
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
  /**
   * Play an effect on a LAYER — its actors and both its images together.
   *
   * The scope between a slot's and the world's: a slot effect filters one
   * image, a world effect filters the whole screen after everything is
   * composited, and this filters one layer's worth of it. Blurring the game
   * while the score stays sharp is the case it exists for, and neither of the
   * other two can say it.
   */
  addLayerEffect(path, document, values, layer = DEFAULT_LAYER_ID) {
    const spec = values ? { path, document, values } : { path, document };
    const effects = (this.layer(layer) ?? this.layerList[0]).effects;
    const index = effects.findIndex((effect) => effect.path === path);
    if (index >= 0) {
      effects[index] = spec;
      return this;
    }
    effects.push(spec);
    return this;
  }
  /** Stop an effect on a layer. Removing one not playing is a no-op. */
  removeLayerEffect(path, layer = DEFAULT_LAYER_ID) {
    const effects = (this.layer(layer) ?? this.layerList[0]).effects;
    const index = effects.findIndex((effect) => effect.path === path);
    if (index >= 0) {
      effects.splice(index, 1);
    }
    return this;
  }
  /**
   * Each layer's id and its own effects, in stack order.
   *
   * What the driver needs to build one filterable container per layer; the
   * slots' images and the actors are read separately, as they always were.
   */
  layerSnapshot() {
    return this.layerList.map((layer) => ({
      id: layer.id,
      effects: layer.effects,
      parallax: { x: layer.parallax.x, y: layer.parallax.y },
      fit: layer.fit
    }));
  }
  /**
   * Where each camera is looking from, in declaration order.
   *
   * Read every frame beside `renderSnapshot`, so a camera moved by a handler or
   * a step shows up on the next one.
   */
  cameraSnapshot() {
    return this.cameraList.map((camera) => ({
      id: camera.id,
      position: { x: camera.position.x, y: camera.position.y },
      active: camera.id === this.activeCameraId
    }));
  }
  /** Play an effect on a layer's FOREGROUND. See {@link addBackgroundEffect}. */
  addForegroundEffect(path, document, values, layer = DEFAULT_LAYER_ID) {
    const spec = values ? { path, document, values } : { path, document };
    const effects = this.slotAt(layer, "foreground").effects;
    const index = effects.findIndex((effect) => effect.path === path);
    if (index >= 0) {
      effects[index] = spec;
      return this;
    }
    effects.push(spec);
    return this;
  }
  /** Stop an effect on a layer's foreground. Removing one not playing is a no-op. */
  removeForegroundEffect(path, layer = DEFAULT_LAYER_ID) {
    const effects = this.slotAt(layer, "foreground").effects;
    const index = effects.findIndex((effect) => effect.path === path);
    if (index >= 0) {
      effects.splice(index, 1);
    }
    return this;
  }
  /** Stop an effect on the backdrop. Removing one not playing is a no-op. */
  removeBackgroundEffect(path, layer = DEFAULT_LAYER_ID) {
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
      ...this.layerList.flatMap((layer) => [
        ...layer.effects,
        ...layer.background.effects,
        ...layer.foreground.effects
      ]),
      ...this.actorList.flatMap((actor) => [...actor.effects()])
    ];
  }
  /**
   * Every applied effect with what carries it: `world`, `backdrop:<layer id>`,
   * or the actor's id. The vocabulary the snapshot and the value patch share.
   *
   * Keyed by the layer's ID rather than its index: an effect must stay attached
   * to the same background when a layer is declared above it, and an index
   * would silently renumber every one below.
   */
  effectSlots() {
    return [
      ...this.appliedEffects.map(
        (effect) => ["world", effect]
      ),
      ...this.layerList.flatMap((layer) => [
        ...layer.effects.map(
          (effect) => [`layer:${layer.id}`, effect]
        ),
        ...layer.background.effects.map(
          (effect) => [`backdrop:${layer.id}`, effect]
        ),
        ...layer.foreground.effects.map(
          (effect) => [`foreground:${layer.id}`, effect]
        )
      ]),
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
    const slot = /^(backdrop|foreground):(.+)$/.exec(owner);
    if (slot) {
      const layer = this.layer(slot[2]);
      const which = slot[1] === "backdrop" ? "background" : "foreground";
      return layer ? retune(layer[which].effects) : false;
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
    for (const layer of this.layerList) {
      patch(layer.effects);
      patch(layer.background.effects);
      patch(layer.foreground.effects);
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
    const opacityProp = appearanceTrait?.properties[APPEARANCE.opacity];
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
            // FITTED, by the same factor the size was published with: the
            // largest cell across the whole animation, so a smaller frame
            // draws smaller instead of every frame swelling to a tile
            // (`rules/animation.publishIntrinsicSize`, specs/ACTOR_SIZE.md).
            scale: (f.scale ?? 1) * this.publishAnimationSize(actor, def)
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
        const measured = cell ? { width: cell.width, height: cell.height } : this.imageSize(sprite);
        if (!measured) {
          return { sprite, cell, offset: { x: 0, y: 0 }, scale: 1 };
        }
        const fit = fitToTile(measured.width, measured.height);
        this.publishSize(actor, measured.width * fit, measured.height * fit);
        return { sprite, cell, offset: { x: 0, y: 0 }, scale: fit };
      }
      return void 0;
    };
    const drawingFor = (actor) => {
      const drawing = this.kindDrawings.get(actor.type);
      if (!drawing) {
        return void 0;
      }
      const pen = new CommandPen();
      drawing.run(actor, pen, this);
      const { width, height } = drawing.size(actor, this);
      const sizeProperty = this.intrinsicSizeProperty();
      if (sizeProperty) {
        const known = actor.get(sizeProperty);
        if (known?.x !== width || known?.y !== height) {
          actor.set(sizeProperty, new Vector(width, height));
        }
      }
      return {
        key: drawingKey(width, height, pen.commands),
        width,
        height,
        commands: pen.commands
      };
    };
    const states = [];
    for (const actor of this.actorList) {
      if (!actor.has(positional)) {
        continue;
      }
      const position = actor.get(positionProp);
      const scale = actor.get(scaleProp);
      const parent = actor.parent();
      const stored = parent ? {
        position: actor.local(positionProp),
        scale: actor.local(scaleProp)
      } : void 0;
      states.push({
        actor,
        ...parent && stored ? {
          parent,
          local: {
            x: stored.position.x,
            y: stored.position.y,
            scaleX: stored.scale.x,
            scaleY: stored.scale.y,
            rotation: actor.local(rotationProp)
          }
        } : {},
        x: position.x,
        y: position.y,
        scaleX: scale.x,
        scaleY: scale.y,
        rotation: actor.get(rotationProp),
        skew: skewProp ? actor.get(skewProp) : 0,
        opacity: opacityProp && appearanceTrait && actor.has(appearanceTrait) ? actor.get(opacityProp) : 1,
        frame: frameFor(actor),
        drawing: drawingFor(actor),
        effects: actor.effects(),
        layer: this.depthOf(actor.layer ?? DEFAULT_LAYER_ID, actor.space),
        ...actor.space && actor.space !== this.rootSpace ? { space: actor.space.id } : {}
      });
    }
    return states;
  }
  /** Set a world-scoped property by its `${ruleId}.${propId}` path. */
  setWorldProperty(path, value) {
    for (const rule6 of this.membership.items()) {
      for (const property of Object.values(rule6.properties)) {
        if (`${property.ownerId}.${property.id}` === path) {
          this.set(property, value);
          return true;
        }
      }
    }
    for (const property of this.ownProperties) {
      if (`${property.ownerId}.${property.id}` === path) {
        this.set(property, value);
        return true;
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
    for (const rule6 of rules) {
      for (const property of Object.values(rule6.properties)) {
        if (property.type === "actors" || property.type === "actor") {
          continue;
        }
        world[`${property.ownerId}.${property.id}`] = this.get(property);
      }
    }
    for (const property of this.ownProperties) {
      if (property.type === "actors" || property.type === "actor") {
        continue;
      }
      world[`${property.ownerId}.${property.id}`] = this.get(property);
    }
    const actors = {};
    const actorTraits = {};
    for (const actor of this.actorList) {
      const values = {};
      for (const trait of actor.traits()) {
        for (const property of Object.values(trait.properties)) {
          if (property.type === "actors" || property.type === "actor") {
            continue;
          }
          values[`${property.ownerId}.${property.id}`] = actor.get(property);
        }
      }
      actors[actor.id] = values;
      actorTraits[actor.id] = actor.traits().map((trait) => trait.id);
    }
    return {
      ruleIds: rules.map((rule6) => rule6.id).sort(),
      ruleCode: Object.fromEntries(
        rules.map((rule6) => [rule6.id, ruleContentHash(rule6)])
      ),
      actorIds: this.actorList.map((actor) => actor.id).sort(),
      cameras: this.cameraList.map((camera) => camera.id),
      activeCamera: this.activeCameraId,
      cameraPositions: Object.fromEntries(
        this.cameraList.map((camera) => [
          camera.id,
          { x: camera.position.x, y: camera.position.y }
        ])
      ),
      layers: this.layerList.map((layer) => layer.id),
      layerMotion: Object.fromEntries(
        this.layerList.map((layer) => [
          layer.id,
          {
            parallax: { x: layer.parallax.x, y: layer.parallax.y },
            fit: layer.fit
          }
        ])
      ),
      // By actor id so the list is stable, but NOT sorted within an actor:
      // handlers for one event run in registration order, so a reorder is a
      // real change and should read as one.
      actorTraits,
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
      // Per layer, in stack order, plus the world's one color. Values, not
      // structure: changing the sky patches the running game.
      backdrops: this.layerList.map(
        (layer) => slotValues(layer.id, layer.background)
      ),
      foregrounds: this.layerList.map(
        (layer) => slotValues(layer.id, layer.foreground)
      ),
      clearColor: [...this.clearColor],
      // The track, and not the one-shots: what is playing is state a patch can
      // set, what already played is a moment (specs/SOUND.md).
      ...this.track === void 0 ? {} : { music: this.track },
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

// src/engine/core/tween.ts
var clamp012 = (value) => Math.min(1, Math.max(0, value));
var CURVES = {
  linear: (t) => t,
  "ease-in": (t) => t * t * t,
  "ease-out": (t) => 1 - (1 - t) ** 3,
  "ease-in-out": (t) => t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2
};
var isTweenable = (value) => typeof value === "number" || value instanceof Vector;
var tweenValue = (from, to, t) => {
  if (typeof from === "number" && typeof to === "number") {
    return from + (to - from) * t;
  }
  const start = from;
  const end = to;
  return new Vector(
    start.x + (end.x - start.x) * t,
    start.y + (end.y - start.y) * t
  );
};
var advanceTween = (run, actor, delta) => {
  run.elapsed += delta;
  const t = run.duration > 0 ? clamp012(run.elapsed / run.duration) : 1;
  const eased = CURVES[run.curve](t);
  for (const step of run.steps) {
    actor.set(step.property, tweenValue(step.from, step.to, eased));
  }
  return t >= 1;
};
var beginTween = (plan, actor) => {
  const steps = [];
  for (const step of plan.steps) {
    const from = actor.get(step.property);
    if (!isTweenable(from) || !isTweenable(step.to)) {
      console.warn(
        `The tween "${plan.id}" cannot move "${step.property.name ?? step.property.id}": there is no half way between two of those. That row is ignored.`
      );
      continue;
    }
    steps.push({ property: step.property, from, to: step.to });
  }
  return {
    id: plan.id,
    duration: plan.duration,
    curve: plan.curve,
    steps,
    elapsed: 0
  };
};
var tweenDisplaced = (displaced) => {
  console.warn(
    `The tween "${displaced.id}" was stopped: something else started moving a property it was moving. The newest one wins.`
  );
};

// src/engine/rules/spatial.ts
var rule3 = new RuleBuilder({
  id: SPATIAL.rule,
  name: "Space",
  ability: "Has Space"
});
var PositionalTrait = rule3.addTrait({
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
  "angle",
  0,
  { name: "rotation" }
);
var SkewProperty = PositionalTrait.addProperty(
  SPATIAL.skew,
  "angle",
  0,
  { name: "vertical skew" }
);
var IntrinsicSizeProperty = PositionalTrait.addProperty(
  SPATIAL.intrinsicSize,
  "point",
  new Vector(0, 0),
  { readonly: true, name: "intrinsic size" }
);
var ParentProperty = PositionalTrait.addProperty(
  SPATIAL.parent,
  "actor",
  [],
  { name: "parent" }
);
var GotParentEvent = rule3.addEvent(SPATIAL.gotParent, {
  name: "gets a parent"
});
var LostParentEvent = rule3.addEvent(SPATIAL.lostParent, {
  name: "loses its parent"
});
var GainedChildEvent = rule3.addEvent(SPATIAL.gainedChild, {
  name: "gains a child"
});
var LostChildEvent = rule3.addEvent(SPATIAL.lostChild, {
  name: "loses a child"
});
registerParenting({
  parent: ParentProperty,
  position: PositionProperty,
  rotation: RotationProperty,
  scale: ScaleProperty,
  events: {
    gotParent: GotParentEvent,
    lostParent: LostParentEvent,
    gainedChild: GainedChildEvent,
    lostChild: LostChildEvent
  }
});
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
  { name: "Rotate to", params: [{ name: "degrees", type: "angle", default: 0 }] }
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
var ASSUMED_SIZE = 32;
function halfExtent(actor) {
  const intrinsic = actor.get(IntrinsicSizeProperty);
  const scale = actor.get(ScaleProperty);
  const width = (intrinsic.x > 0 ? intrinsic.x : ASSUMED_SIZE) * Math.abs(scale.x);
  const height = (intrinsic.y > 0 ? intrinsic.y : ASSUMED_SIZE) * Math.abs(scale.y);
  return new Vector(width / 2, height / 2);
}
function outsideMapAt(actor, at) {
  const world = actor.world;
  if (!world) {
    return false;
  }
  const half = halfExtent(actor);
  const bounds = world.mapBounds(actor);
  return at.x + half.x < 0 || at.y + half.y < 0 || at.x - half.x > bounds.x || at.y - half.y > bounds.y;
}
function within(value, of, distance) {
  const centers = all(of);
  const reach = Number.isFinite(distance) ? distance : -1;
  const world = centers[0]?.world;
  if (world && reach >= 0 && value === world.actors) {
    return new LazyActors(function* () {
      const seen = /* @__PURE__ */ new Set();
      for (const center of centers) {
        for (const near of world.actorsNear(
          center.get(PositionProperty),
          reach,
          void 0,
          center
        )) {
          if (!centers.includes(near) && !seen.has(near)) {
            seen.add(near);
            yield near;
          }
        }
      }
    });
  }
  return filtered(
    value,
    (actor) => !centers.includes(actor) && centers.some((center) => gap(actor, center) <= reach)
  );
}
function gap(one2, other) {
  const here = one2.get(PositionProperty);
  const there = other.get(PositionProperty);
  return Math.hypot(here.x - there.x, here.y - there.y);
}
var OutsideMapQuery = PositionalTrait.addQuery(
  "outsideMap",
  (actor) => outsideMapAt(actor, actor.get(PositionProperty)),
  { name: "is outside the map", returns: "boolean" }
);
var LeftMapEvent = rule3.addEvent("leftMap", {
  name: "leaves the map"
});
var wasOutside = /* @__PURE__ */ new WeakMap();
var NoticeLeavingStep = rule3.addStepIn(
  "noticeLeaving",
  "react",
  (world) => {
    for (const actor of world.actors.with(PositionalTrait)) {
      const outside = outsideMapAt(actor, actor.get(PositionProperty));
      const before = wasOutside.get(actor);
      wasOutside.set(actor, outside);
      if (outside && before === false) {
        world.emit(LeftMapEvent, actor);
      }
    }
  }
);
var CreatedEvent = rule3.addEvent(SPATIAL.created, {
  name: "is created"
});
var RemovedEvent = rule3.addEvent(SPATIAL.removed, {
  name: "is removed"
});
var TweenFinishedEvent = rule3.addEvent("tweenFinished", {
  name: "a tween finishes"
});
var AdvanceTweensStep = rule3.addStepIn(
  "advanceTweens",
  "adjust",
  (world, delta) => {
    for (const actor of world.actors.with(PositionalTrait)) {
      for (const run of [...actor.tweens()]) {
        if (advanceTween(run, actor, delta)) {
          actor.stopTween(run);
          world.emit(TweenFinishedEvent, actor, run.id);
        }
      }
    }
  }
);
var SpatialRule = rule3.build();

// src/engine/rules/animation.ts
var rule4 = new RuleBuilder({
  id: APPEARANCE.rule,
  name: "Appearance",
  ability: "Has Appearance"
});
rule4.requires([SpatialRule]);
var AppearanceTrait = rule4.addTrait({
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
var OpacityProperty = AppearanceTrait.addProperty(
  APPEARANCE.opacity,
  "number",
  1,
  { name: "opacity" }
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
var AnimationEndedEvent = rule4.addEvent("animationEnded", {
  name: "animation ends"
});
var FrameChangedEvent = rule4.addEvent("frameChanged", {
  name: "animation frame changes"
});
function publishPictureSize(world, actor) {
  const cell = actor.get(SpriteCellSizeProperty);
  if (cell.x > 0 && cell.y > 0) {
    const fit = fitToTile(cell.x, cell.y);
    actor.set(IntrinsicSizeProperty, new Vector(cell.x * fit, cell.y * fit));
    return;
  }
  const sprite = actor.get(SpriteProperty);
  const measured = sprite ? world.imageSize(sprite) : void 0;
  if (measured) {
    const fit = fitToTile(measured.width, measured.height);
    actor.set(
      IntrinsicSizeProperty,
      new Vector(measured.width * fit, measured.height * fit)
    );
  }
}
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
    const fit = fitToTile(width, height);
    actor.set(IntrinsicSizeProperty, new Vector(width * fit, height * fit));
  }
}
var AdvanceAnimationStep = rule4.addStep(
  "advanceAnimation",
  (world, delta) => {
    for (const actor of world.actors.with(AppearanceTrait)) {
      publishPictureSize(world, actor);
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
var AnimationRule = rule4.build();

// src/engine/rules/boxed.ts
var BOXED = {
  rule: "boxed",
  trait: "hasABox",
  width: "width",
  height: "height"
};
var rule5 = new RuleBuilder({
  id: BOXED.rule,
  name: "Boxed",
  ability: "Has a Box"
});
var HasABoxTrait = rule5.addTrait({
  id: BOXED.trait,
  name: "Has a Box"
});
var WidthProperty = HasABoxTrait.addProperty(
  BOXED.width,
  "number",
  0,
  {
    name: "width"
  }
);
var HeightProperty = HasABoxTrait.addProperty(
  BOXED.height,
  "number",
  0,
  { name: "height" }
);
var BoxedRule = rule5.build();

// src/engine/builders/WorldBuilder.ts
var FOUNDATION_RULES = [
  SpatialRule,
  AnimationRule,
  ViewportRule,
  // …and a box, which every interface actor has and which a resize handle in
  // the map editor must be able to ask about without knowing what it is
  // looking at (specs/BOXES_PLAN.md).
  BoxedRule,
  // …and which theme an actor is painted out of, for the same reason: an
  // inspector cannot ask whether a project imported the rule that lets one
  // button be the red one (specs/STYLES_PLAN.md).
  StyledRule
];
var WorldBuilder = class {
  id;
  name;
  rules = [];
  hidden = /* @__PURE__ */ new Set();
  animations = {};
  // Layers as declared, back to front. Empty until something says otherwise;
  // the World fills in the default layer either way.
  layers = [];
  types = /* @__PURE__ */ new Map();
  /** The project's maps by path — see {@link defineMap}. */
  maps = /* @__PURE__ */ new Map();
  /** State this WORLD carries, without a rule to carry it (specs/WORLD_STATE.md). */
  own = [];
  /**
   * Every call made on this description, in order.
   *
   * Order is the whole of the semantics — `add effect` then `remove effect`
   * leaves none, the other way round leaves one — so replay walks it forward
   * and never merges or de-duplicates. The World's own methods are already
   * idempotent where it matters (`addEffect` by path), so nothing here has to
   * be.
   */
  log = [];
  /** The live world, once something has needed one. See `getWorld`. */
  built;
  constructor(opts) {
    this.id = opts.id;
    this.name = opts.name;
  }
  /**
   * Record a call, and make it now if there is a world to make it on.
   *
   * The single point where the builder's surface meets the World's. `name` is
   * `keyof World`, so a method that does not exist there — or one whose
   * arguments do not match — is a compile error rather than a TypeError in a
   * learner's game, which is what the old hand-written `if (this.built)` pairs
   * kept producing.
   */
  defer(name, ...args) {
    const call = { name, args };
    this.log.push(call);
    if (this.built) {
      apply(this.built, call);
    }
    return this;
  }
  /**
   * Refuse a declaration the actors already placed could not be given.
   *
   * Blocks can be reordered in the workspace, so `use rule` below `load map` is
   * a mistake a learner can make by dragging.
   *
   * When the world exists but is EMPTY the declaration is still in time, and
   * the world is thrown away rather than refused — the log makes rebuilding it
   * exact. That matters because reading a camera or the actor list builds a
   * world (`camera`, `actors`), and a read has never been the thing that makes
   * a later declaration unsafe.
   */
  requireNoActors(what) {
    if (!this.built) {
      return;
    }
    if (this.built.actorCount() > 0) {
      throw new Error(
        `World '${this.id}': ${what} must come before the actors are placed (move it above "load map" / "add actor").`
      );
    }
    this.built = void 0;
  }
  useRules(rules) {
    this.requireNoActors("use rule");
    this.rules = [...this.rules, ...rules];
    return this;
  }
  /** Mark a rule hidden in the simple view (still active at runtime). */
  hideRule(rule6) {
    this.hidden.add(rule6);
    return this;
  }
  /** Whether a rule is marked hidden (for the interface layer). */
  isHidden(rule6) {
    return this.hidden.has(rule6);
  }
  /**
   * Register animations (typically from imported `.anim` files) by id, in
   * addition to the stock animations the active rules ship.
   */
  useAnimations(defs) {
    this.requireNoActors("use animations");
    Object.assign(this.animations, defs);
    return this;
  }
  /**
   * Record how big the project's images are, by file name.
   *
   * No block says this, for the reason no block registers an animation file:
   * how big a picture is is not something a world opts into, it is a fact about
   * a file the project holds. The generated world states them all.
   *
   * Not guarded by `requireNoActors`: this is a measurement, not a law. An
   * actor placed before it hears about a size the moment one arrives, because
   * the size is looked up when asked rather than copied at placement.
   *
   * Deferred like everything else that is not a construction-time decision, so
   * it is replayed into any world rebuilt from this description — a size read
   * once and then lost on the next rebuild would be a rule that worked until
   * something unrelated touched the world.
   */
  useImageSizes(sizes) {
    return this.defer("useImageSizes", sizes);
  }
  /**
   * Declare a layer, at the back of the stack as it stands.
   *
   * Declaration order IS draw order (core/Layer), so this is one of the calls
   * that must come before the actors: a layer added afterwards would have to be
   * spliced into a scene graph the driver has already made, and the ordering a
   * learner can see in their blocks would stop being the ordering they get.
   */
  defineLayer(layer) {
    this.requireNoActors("define layer");
    this.layers.push(layer);
    return this;
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
  // The rest is the World's surface, deferred. Each is one line on purpose:
  // the doc comment says what the block means here, `World`'s says what the
  // call does, and there is no third thing to keep in step.
  /**
   * Handle a world event. See {@link World.on}.
   *
   * Deferred like everything else, so a `when ⟨space⟩ is pressed` hat at module
   * scope in a `.world` file registers on the world this describes — `world` is
   * this builder there, and the same call has to be right in a handler too.
   */
  on(event, handler) {
    return this.defer("on", event, handler);
  }
  /**
   * Perform a world action. See {@link World.act}.
   *
   * THE METHOD THAT WAS NOT HERE, and the reason `add ⟨1⟩ to the score` under
   * `define world` died at run time with `world.act is not a function`: a world
   * action generates `world.act(…)`, `world` is this builder in a `.world`
   * file's setup, and `worldContextExtension` saw a bound `world` and said
   * nothing. The palette offered a block that could not run where it offered it
   * (specs/PROGRESSION.md, "World actions in a world's setup").
   *
   * LOGGED ONLY WHEN THE WORLD IS NOT IN A FRAME, which is the same line `set`
   * draws by another route. A `.world` file's handler closes over this builder
   * too, so a score bumped on every click would otherwise append an entry per
   * click for the life of the game, and replay every one of them into the next
   * world made from this description. An action taken during a frame is a thing
   * that HAPPENED; one taken while the description is still being written is
   * part of what the world IS, and that is the one a fresh `instantiate()` — a
   * check run — has to see again.
   */
  act(action, ...args) {
    if (this.built?.ticking) {
      this.built.act(action, ...args);
      return this;
    }
    return this.defer("act", action, ...args);
  }
  /**
   * Set a world-scoped property. See {@link World.set}.
   *
   * COLLAPSED IN THE LOG rather than appended to it, alone among the deferred
   * calls. Everything else here is an act whose order is its meaning — `add
   * effect` then `remove effect` leaves none — but a property has one value and
   * the last write wins, so replaying a hundred of them and replaying the last
   * are the same world. That matters now that a `.world` file's handler is the
   * ordinary place to keep a score: `world` is this builder there, so a counter
   * incremented on every click would otherwise grow the log by one entry per
   * click, for the life of the game (specs/WORLD_STATE.md).
   *
   * Replaced IN PLACE, so a value written during setup stays where it was
   * written relative to the declarations around it.
   */
  set(property, value) {
    const existing = this.log.find(
      (call) => call.name === "set" && call.args[0] === property
    );
    if (existing) {
      existing.args = [property, value];
      if (this.built) {
        apply(this.built, existing);
      }
      return this;
    }
    return this.defer("set", property, value);
  }
  /**
   * Read a world-scoped property. See {@link World.get}.
   *
   * Builds the world, because it hands back a value out of it rather than
   * telling it something — the same family as `camera`, `actors` and
   * `mapBounds`. And it has to exist here at all because `world` in a `.world`
   * file IS this builder, including inside the event handlers written there:
   * `get score` in a click handler landed on the builder and threw
   * "world.get is not a function" (specs/WORLD_STATE.md).
   */
  get(property) {
    return this.getWorld().get(property);
  }
  /**
   * What is near a place. See {@link World.actorsNear}.
   *
   * Forwarded rather than deferred, like `get` and for the same reason: it
   * hands back a value out of the world instead of telling it something. And it
   * has to be here at all because a `.world` file may ask — `load map`, then
   * "is anything solid where this door opens" — which is a question about the
   * actors the map just placed.
   */
  actorsNear(at, radius, only, sameSpaceAs) {
    return this.getWorld().actorsNear(at, radius, only, sameSpaceAs);
  }
  /**
   * Play an effect across the whole viewport. See {@link World.addEffect}.
   *
   * The World counterpart to `ActorBuilder.addEffect`: that one filters one
   * actor's own pixels, this one filters everything the camera has drawn — the
   * underwater distortion covering the whole view, rather than a wobble on one
   * fish. Same document, same parameters; only the surface it lands on differs.
   */
  addEffect(path, document, values) {
    return this.defer("addEffect", path, document, values);
  }
  /** Stop an effect covering the whole view. See {@link World.removeEffect}. */
  removeEffect(path) {
    return this.defer("removeEffect", path);
  }
  /** Draw an image behind everything (BACKGROUNDS.md). */
  setBackground(sprite, layer = DEFAULT_LAYER_ID) {
    return this.defer("setBackground", sprite, layer);
  }
  /**
   * Play a sound once. See {@link World.playSound}.
   *
   * NOT deferred, alone among these, and that is the whole of "building a world
   * drops its sounds" (specs/SOUND.md). The log is replayed into every world
   * this description makes — a throwaway for a thumbnail, the `incoming` one a
   * rebuild is compared against — so a logged one-shot would sound again every
   * time the picker refreshed. It goes straight to the world instead, where the
   * driver's next drain finds it or nothing does.
   *
   * ONE EDGE, and it is written down rather than guarded. `requireNoActors`
   * DISCARDS a built world when a declaration arrives late and no actor has
   * been placed yet, so a `play sound` followed by a `use animations` in the
   * same setup body would queue into a world that is then thrown away. Not
   * reachable from blocks: the generator emits every declaration in the world
   * block's prologue and hoists the layers, so nothing in a body can precede
   * one. If that ever stops being true, the fix is a pending list on the
   * builder that `getWorld` flushes — deliberately not built now, because it is
   * a second queue for a case nobody can reach.
   */
  playSound(sound) {
    this.getWorld().playSound(sound);
    return this;
  }
  /**
   * Stop everything making a noise. See {@link World.stopSounds}.
   *
   * Straight to the world and NOT logged, for the reason `playSound` gives: it
   * is a moment, and a moment in the log happens again every time this
   * description makes a world.
   *
   * The track it clears is the RUNNING world's. A `set music to` in the same
   * setup is logged and says what a world built from this description starts
   * with, which is what it should say — "the music this world has" is a
   * property of the description; "and now everything stops" is something that
   * happened.
   */
  stopSounds() {
    this.getWorld().stopSounds();
    return this;
  }
  /**
   * Pause, resume, and ask — the world's own (`World.pause`), reachable from
   * the builder because a block may say them under `define world` as well as
   * in a handler: a world that opens on its title screen starts paused.
   */
  pause() {
    this.getWorld().pause();
    return this;
  }
  resume() {
    this.getWorld().resume();
    return this;
  }
  isPaused() {
    return this.getWorld().isPaused();
  }
  /**
   * The world's spaces, forwarded (specs/VIEWPORT_PLAN.md): a map registered
   * by path, a map loaded into a Viewport or taken out of it, and the actor
   * in hand a generated loop keeps. All of them are said in handlers, where
   * `world` is the live World, and under `define world`, where it is this.
   */
  defineMap(path, map) {
    this.maps.set(path, map);
    if (this.built) {
      this.built.defineMap(path, map);
    }
    return this;
  }
  loadMapInto(viewport, map, layer) {
    return this.readyWorld().loadMapInto(viewport, map, layer);
  }
  unloadViewport(viewport) {
    this.getWorld().unloadViewport(viewport);
  }
  enter(subject) {
    this.getWorld().enter(subject);
  }
  leave() {
    this.getWorld().leave();
  }
  withActor(subject, fn) {
    return this.getWorld().withActor(subject, fn);
  }
  /**
   * Play a track. See {@link World.setMusic}.
   *
   * Deferred and COLLAPSED, like `set`: music has one value and the last write
   * wins, so replaying a hundred of them and replaying the last are the same
   * world.
   */
  setMusic(track) {
    const existing = this.log.find((call) => call.name === "setMusic");
    if (existing) {
      existing.args = [track];
      if (this.built) {
        apply(this.built, existing);
      }
      return this;
    }
    return this.defer("setMusic", track);
  }
  /** Draw an image in front of a layer's actors. See {@link World.setForeground}. */
  setForeground(sprite, layer = DEFAULT_LAYER_ID) {
    return this.defer("setForeground", sprite, layer);
  }
  /**
   * Say which theme this world's interface is painted in.
   *
   * DEFERRED LIKE THE REST, because `use theme` is a row under `define world`
   * and a world's body runs against the builder. It is also legal in a
   * handler, where it runs against the live World — which is how a project
   * could change theme mid-game if it wanted to, though nothing offers a
   * reason to yet (specs/STYLES_PLAN.md).
   */
  useTheme(document) {
    return this.defer("useTheme", document);
  }
  /** Register a theme by path. See {@link World.defineTheme}. */
  defineTheme(path, document) {
    return this.defer("defineTheme", path, document);
  }
  /** Register one of the world's own events by name. See {@link World.defineEvent}. */
  defineEvent(name, event) {
    return this.defer("defineEvent", name, event);
  }
  /** Set the color behind the backdrop. See {@link World.setBackgroundColor}. */
  setBackgroundColor(color) {
    return this.defer("setBackgroundColor", color);
  }
  /** Slide a layer's background. See {@link World.setBackgroundOffset}. */
  setBackgroundOffset(offset, layer = DEFAULT_LAYER_ID) {
    return this.defer("setBackgroundOffset", offset, layer);
  }
  /** Slide a layer's foreground. */
  setForegroundOffset(offset, layer = DEFAULT_LAYER_ID) {
    return this.defer("setForegroundOffset", offset, layer);
  }
  /** Tile a layer's background rather than stretching it. */
  setBackgroundRepeat(repeat, layer = DEFAULT_LAYER_ID) {
    return this.defer("setBackgroundRepeat", repeat, layer);
  }
  /** Tile a layer's foreground rather than stretching it. */
  setForegroundRepeat(repeat, layer = DEFAULT_LAYER_ID) {
    return this.defer("setForegroundRepeat", repeat, layer);
  }
  /**
   * Play an effect on the backdrop's own pixels, not on the whole camera.
   *
   * @param path     the effect's module path (`effects/ripple`)
   * @param document the parsed `.effect` file, imported as JSON by the bundler
   * @param values   values for the effect's declared parameters, by parameter id
   * @param layer    which layer's background; the default is the one the
   *                 blocks address
   */
  addBackgroundEffect(path, document, values, layer = DEFAULT_LAYER_ID) {
    return this.defer("addBackgroundEffect", path, document, values, layer);
  }
  /** Stop an effect on the backdrop. Removing one not playing is a no-op. */
  removeBackgroundEffect(path, layer = DEFAULT_LAYER_ID) {
    return this.defer("removeBackgroundEffect", path, layer);
  }
  /** Play an effect on a layer's foreground. See {@link World.addForegroundEffect}. */
  addForegroundEffect(path, document, values, layer = DEFAULT_LAYER_ID) {
    return this.defer("addForegroundEffect", path, document, values, layer);
  }
  /** Stop an effect on a layer's foreground. */
  removeForegroundEffect(path, layer = DEFAULT_LAYER_ID) {
    return this.defer("removeForegroundEffect", path, layer);
  }
  /** Play an effect on a whole layer. See {@link World.addLayerEffect}. */
  addLayerEffect(path, document, values, layer = DEFAULT_LAYER_ID) {
    return this.defer("addLayerEffect", path, document, values, layer);
  }
  /** Stop an effect on a whole layer. Removing one not playing is a no-op. */
  removeLayerEffect(path, layer = DEFAULT_LAYER_ID) {
    return this.defer("removeLayerEffect", path, layer);
  }
  /** How much of the camera's motion a layer takes. See {@link World.setLayerParallax}. */
  setLayerParallax(parallax, layer) {
    return this.defer("setLayerParallax", parallax, layer);
  }
  /** Whether a layer ignores the camera. See {@link World.setLayerFit}. */
  setLayerFit(fit, layer) {
    return this.defer("setLayerFit", fit, layer);
  }
  /** Declare a camera. See {@link World.defineCamera}. */
  defineCamera(init) {
    return this.defer("defineCamera", init);
  }
  /** Take the view through a different camera. See {@link World.setActiveCamera}. */
  setActiveCamera(id) {
    return this.defer("setActiveCamera", id);
  }
  /** Move a camera. See {@link World.setCameraPosition}. */
  setCameraPosition(position, id) {
    return this.defer("setCameraPosition", position, id);
  }
  /**
   * A camera by id. See {@link World.camera}.
   *
   * Builds the world, because it hands back an object out of it rather than
   * telling it something — a world body sets things ON a camera (`set actor to
   * follow of ⟨camera ⟨Chase⟩⟩`), and inside `define world` the name `world` is
   * this. A declaration arriving afterwards is still fine while no actor has
   * been placed (`requireNoActors`), though the Camera read here belongs to the
   * world that is then discarded; generated code never holds one across a
   * declaration, since the world root emits every declaration above the body.
   */
  camera(id) {
    return this.getWorld().camera(id);
  }
  /**
   * How big the world is. See {@link World.mapBounds}.
   *
   * Builds the world, because it hands back a value out of it rather than
   * telling it something — the same family as `camera` and `actors`. Read
   * before any map is loaded it is one screen, which is the truth about a world
   * with nothing placed in it.
   */
  mapBounds() {
    return this.getWorld().mapBounds();
  }
  /**
   * Say how big the world is, in tiles. See {@link World.setMapSize}.
   *
   * The SAME NAME the live World uses, deliberately: a world's size is as
   * answerable while it runs as while it is described, so `set size of map`
   * generates one call that works either side of the seam. A builder-only name
   * would have made the block throw the moment it appeared anywhere but a
   * `define world` body.
   *
   * Deferred, like every other statement about the world rather than about its
   * construction, so it replays into a world rebuilt from this description.
   * A size declared once and then lost on the next rebuild would be a camera
   * that stopped moving for no reason a learner could see.
   */
  setMapSize(columns, rows) {
    return this.defer("setMapSize", columns, rows);
  }
  /**
   * Say how much of the world is on screen at once, in tiles. See
   * {@link World.setViewSize}.
   *
   * Deferred and same-named for the reasons above: it is a statement about the
   * world rather than about its construction, and one lost on the next rebuild
   * would be a level that fits the screen until the moment it is reloaded.
   */
  setViewSize(columns, rows) {
    return this.defer("setViewSize", columns, rows);
  }
  /** Somewhere in the map, at random. See {@link World.randomPlace}. */
  randomPlace() {
    return this.getWorld().randomPlace();
  }
  /**
   * Game seconds so far. See {@link World.time}.
   *
   * Zero while a world is being described, and honestly so: nothing has ticked
   * yet. Present rather than builder-forbidden because the block is a plain
   * reporter a learner may reasonably drop into a `.world` file, and answering
   * "no time has passed" is better than a method that is not there.
   */
  time() {
    return this.getWorld().time();
  }
  /** How big the view is. See {@link World.viewSize}. */
  viewSize() {
    return this.getWorld().viewSize();
  }
  /**
   * The actors in the world, as it stands. See {@link World.actors}.
   *
   * Builds the world for the reason `camera` does. Read before anything is
   * placed this is empty, which is the truth rather than an error: `first actor
   * of type ⟨Player⟩` above `load map` finds none because at that point there
   * are none.
   */
  get actors() {
    return this.getWorld().actors;
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
    if (!this.built) {
      this.built = this.instantiate();
    }
    return this.built;
  }
  /**
   * Place one actor now, and hand it back so the caller can set values on it.
   *
   * `layer` names one declared by {@link defineLayer}; omitted, or naming one
   * that is not there, it is the default layer (see `World.addActor`).
   */
  addActor(builder, id, type, layer) {
    return this.getWorld().addActor(builder, id, type, layer);
  }
  /**
   * Remove one actor. See {@link World.removeActor}.
   *
   * Direct, not logged, for the reason `addActor` is: actors are not part of
   * the description. `instantiate` replays the log into a world with nothing
   * placed in it, so a recorded removal would be a call about an actor that
   * world never had.
   */
  removeActor(actor) {
    return this.getWorld().removeActor(actor);
  }
  /**
   * Place the actors a Map describes. See {@link World.loadMap}.
   *
   * Named as the World names it, because one block calls whichever object it
   * lands on: `load map` means the same under `define world` and in a handler. What this adds is the REGISTRY — a builder's
   * `define` records templates before there is a world to record them in, so
   * they are handed over here, on the way past.
   */
  loadMap(map, layer) {
    return this.readyWorld().loadMap(map, layer);
  }
  /** …and one named by its path, which a description may also say. */
  loadMapNamed(path, layer) {
    return this.readyWorld().loadMapNamed(path, layer);
  }
  /**
   * …and taking the newest one back, which a description may also say.
   *
   * Here for the same reason `loadMap` is: the block means the same thing in
   * a handler as it does under `define world` (`domainBlocks.worldLoadMap`),
   * and a surface that carried one and not the other would make the pair mean
   * two different things depending on where it was written.
   */
  unloadNewestMap() {
    return this.readyWorld().unloadNewestMap();
  }
  /**
   * The world, with every template and map this builder was told about
   * handed over — what any load needs first.
   */
  readyWorld() {
    const world = this.getWorld();
    for (const [type, builder] of this.types) {
      world.define(type, builder);
    }
    for (const [path, map] of this.maps) {
      world.defineMap(path, map);
    }
    return world;
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
    const claimed = new Set(this.rules.map((rule6) => rule6.id));
    return [
      ...FOUNDATION_RULES.filter((rule6) => !claimed.has(rule6.id)),
      ...this.rules
    ];
  }
  /**
   * Build a NEW World from this description: construct, then replay the log.
   *
   * Distinct from `getWorld`, which memoizes: this is for callers that want a
   * throwaway (the thumbnail renderer builds one per picker refresh, and tests
   * build many). Two worlds made this way are independent — the log holds the
   * arguments a call was given, and the World copies what it stores (a Vector,
   * a color), so replaying it twice shares nothing.
   */
  /**
   * Declare state this WORLD carries — a score, a level number, a flag.
   *
   * `ActorBuilder.defineProperty`'s exact sibling, and the same bargain one
   * level up: the shorthand for state that belongs to nothing shareable. A rule
   * is still the answer when the state IS a mechanic — something another
   * project would import — and this is for the case where it is one world's
   * business and a `.rule` file is more ceremony than the thing deserves.
   *
   * NO RULE IS INVENTED. The World's store is otherwise seeded from the rules
   * in play, and an earlier reading synthesized one per world to hold these.
   * That works, and it is wrong for the reason `ActorBuilder` gives about
   * traits: a rule is imported, shared, and named by `use rule`, and this is
   * none of those — it would put a rule the learner never wrote into
   * `activeRules()`, into the rules panel, and into the count on their world
   * block. So the World seeds these slots directly instead.
   */
  defineProperty(id, type, defaultValue, opts = {}) {
    const property = {
      id,
      type,
      default: defaultValue,
      readonly: opts.readonly ?? false,
      name: opts.name,
      scope: "world",
      // The world that declared it, which is what an error about a missing slot
      // needs to name. `ownerKind` says there is no rule to point at rather
      // than leaving a reader to infer it from the id.
      ownerId: this.id,
      ownerKind: "world"
    };
    this.own.push(property);
    this.built?.defineOwnProperty(property, defaultValue);
    return property;
  }
  /** The state this world declared for itself, for the World to seed. */
  get ownProperties() {
    return this.own;
  }
  instantiate() {
    const world = new World({
      id: this.id,
      name: this.name,
      rules: this.rulesInPlay(),
      animations: Object.entries(this.animations),
      layers: this.layers.map((layer) => ({ ...layer })),
      ownProperties: this.own
    });
    for (const [type, builder] of this.types) {
      world.define(type, builder);
    }
    for (const [path, map] of this.maps) {
      world.defineMap(path, map);
    }
    for (const call of this.log) {
      apply(world, call);
    }
    return world;
  }
};
function apply(world, call) {
  const method = world[call.name];
  method.apply(world, call.args);
}

// src/engine/core/Actor.ts
var Actor = class _Actor {
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
  /**
   * The layer this actor is drawn in, set when it is placed.
   *
   * Set by the same call and for the same reason as {@link world}: placement is
   * what decides both. Undefined until placed, and the world's default layer
   * whenever nothing said otherwise — never "no layer", which would make every
   * question about layers have two answers (core/Layer).
   */
  layer;
  /**
   * The coordinate space this actor's position is in, set when it is
   * placed (`World.place`) and taken from the parent when one is set: a
   * child sits in its parent's frame, so it is in its parent's space
   * (specs/VIEWPORT_PLAN.md). Undefined until placed.
   */
  space;
  /**
   * The world's clock when this actor was placed — the zero its age counts from.
   *
   * Set by the same call as {@link world} and {@link layer}, for the same
   * reason. Zero rather than undefined before placement, so an actor described
   * in a `.world` file (placed before the first tick) is as old as the game
   * is — which is the answer a learner expects for something that has been
   * there the whole time.
   */
  bornAt = 0;
  id;
  /** The template (ActorBuilder id) this instance came from — a type tag. */
  type;
  name;
  /** Its traits, and a slot for every property they declare (core/Traited). */
  traited;
  handlers = /* @__PURE__ */ new Map();
  // Held, not interpreted: the engine never looks inside an effect document.
  // Mutable because effects can be added and removed while the game runs — the
  // driver re-reads this list every frame through `renderSnapshot`.
  appliedEffects;
  // Tweens in flight. Mutable for the reason `appliedEffects` is: they start
  // and finish while the game runs, and a step reads this list every frame.
  runningTweens = [];
  constructor(init) {
    this.id = init.id;
    this.type = init.type ?? init.id;
    this.name = init.name;
    this.traited = new Traited(
      `Actor '${init.id}'`,
      init.traits,
      init.overrides
    );
    for (const [event, handler] of init.handlers) {
      this.on(event, handler);
    }
    this.appliedEffects = init.effects ? [...init.effects] : [];
  }
  /**
   * A property's value — through the parent, for the three that have a frame.
   *
   * `position`, `rotation` and `scale` on an actor that has a parent are
   * stored in the parent's frame and answered in the world's, composed up the
   * chain on every read (`core/parenting`). Every other property, and every
   * property of an actor with no parent, is one map lookup as it always was.
   */
  get(property) {
    if (isWorldTransformProperty(property) && this.parent()) {
      const world = worldTransformOf(this);
      const keys2 = parentingKeys();
      return property === keys2.position ? world.position : property === keys2.rotation ? world.rotation : world.scale;
    }
    return this.traited.get(property);
  }
  /** The value a property STORES: a child's local transform, unconverted. */
  local(property) {
    return this.traited.get(property);
  }
  /**
   * Store a value as it is, in the frame the slot is in — a child's local
   * position rather than a world one to convert. Watchers still run.
   */
  setLocal(property, value) {
    return this.store(property, value);
  }
  /** The actor this one is carried by, or undefined for a root. */
  parent() {
    const keys2 = parentingKeys();
    if (!keys2 || !this.hasProperty(keys2.parent)) {
      return void 0;
    }
    return this.traited.get(keys2.parent)[0];
  }
  /** The actors this one carries, in placement order — asked of the world. */
  children() {
    return this.world?.childrenOf(this) ?? [];
  }
  /**
   * Give this actor a parent, or none (specs/PARENTING.md).
   *
   * KEEPS THE WORLD POSITION unless told otherwise: the local transform is
   * worked out from where the actor already is, so nothing jumps. `keepWorld:
   * false` is for a map, whose stored values are already local. A cycle — a
   * parent that is this actor or is carried by it — is refused with a warning
   * and nothing changes. The same parent again changes nothing and raises
   * nothing.
   *
   * The child takes its parent's layer, and four events are raised in order:
   * the old parent loses a child, this actor loses its parent, this actor
   * gets a parent, the new parent gains a child.
   *
   * @returns whether the parent was set.
   */
  setParent(parent, { keepWorld = true } = {}) {
    const keys2 = parentingKeys();
    if (!keys2 || !this.hasProperty(keys2.parent)) {
      return false;
    }
    const previous = this.parent();
    if (previous === parent) {
      return true;
    }
    if (parent && isDescendantOf(parent, this)) {
      console.warn(
        `world-lab: \u201C${this.id}\u201D cannot have \u201C${parent.id}\u201D as its parent, which is carried by it already. Nothing was changed.`
      );
      return false;
    }
    const world = keepWorld ? worldTransformOf(this) : void 0;
    this.store(keys2.parent, parent ? [parent] : []);
    if (world) {
      const local = parent ? toLocal(worldTransformOf(parent), world) : world;
      this.store(keys2.position, local.position);
      this.store(keys2.rotation, local.rotation);
      this.store(keys2.scale, local.scale);
    }
    if (parent?.layer !== void 0) {
      this.layer = parent.layer;
    }
    if (parent?.space) {
      this.space = parent.space;
    }
    const { events } = keys2;
    const raise = this.world;
    if (raise) {
      if (previous) {
        raise.emit(events.lostChild, previous, this);
        raise.emit(events.lostParent, this, previous);
      }
      if (parent) {
        raise.emit(events.gotParent, this, parent);
        raise.emit(events.gainedChild, parent, this);
      }
    }
    return true;
  }
  /**
   * Set a property's value; returns `this` so instance setup can chain.
   *
   * Two things happen here and nowhere else, both about PARENTING: setting the
   * `parent` property is the door a `set parent of` block comes through, and a
   * world transform written to a child is converted into the parent's frame
   * first. Everything else goes straight to the store.
   *
   * NOTHING OBSERVES THE WRITE. There was a hook here once — a property could
   * carry watchers, called with the value before and after — and one rule used
   * it to notice an actor leaving the map. A step does that now
   * (`rules/spatial`), and the hook is gone: a write is a write.
   */
  set(property, value) {
    const keys2 = parentingKeys();
    if (keys2) {
      if (property === keys2.parent) {
        const given = value instanceof LazyActors ? all(value) : value;
        const one2 = Array.isArray(given) ? given[0] : given;
        this.setParent(one2 instanceof _Actor ? one2 : void 0);
        return this;
      }
      if (isWorldTransformProperty(property) && this.parent()) {
        const parent = worldTransformOf(this.parent());
        const world = worldTransformOf(this);
        const next = property === keys2.position ? { ...world, position: Vector.from(value) } : property === keys2.rotation ? { ...world, rotation: value } : { ...world, scale: Vector.from(value) };
        const local = toLocal(parent, next);
        return this.store(
          property,
          property === keys2.position ? local.position : property === keys2.rotation ? local.rotation : local.scale
        );
      }
    }
    return this.store(property, value);
  }
  /** The write itself: coerce and store. */
  store(property, value) {
    this.traited.set(property, value);
    return this;
  }
  /** Whether this actor has the given trait (directly or by dependency). */
  has(trait) {
    return this.traited.has(trait);
  }
  /**
   * How many game seconds this actor has existed for.
   *
   * The question a spawned thing has to be able to answer about itself: a
   * bullet that removes itself after two seconds, a spark that fades, a shield
   * that lapses. Written from the world's clock rather than counted up in a
   * step, so it costs nothing per frame and is right for an actor whose rules
   * do not include a step at all.
   *
   * Zero for an actor no world holds — one made but never placed, or one
   * already removed. Not an error: asking a thing that is not in the world how
   * long it has been in the world has a true answer, and it is none.
   */
  age() {
    return this.world ? this.world.time() - this.bornAt : 0;
  }
  /**
   * Elect a trait while the game runs, or drop one — see `core/Traited`, which
   * owns both and explains why a dropped trait leaves its properties behind.
   *
   * Returns `this` so a step can chain, matching `set` and `addEffect`.
   */
  addTrait(trait) {
    this.traited.addTrait(trait);
    return this;
  }
  removeTrait(trait) {
    this.traited.removeTrait(trait);
    return this;
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
    return this.traited.traits();
  }
  /**
   * The properties this KIND declared for itself, which belong to no trait.
   *
   * Anything asking what an actor may be configured with has to ask both this
   * and {@link traits} — `define property` invents no trait, so a walk over
   * traits alone leaves these out (see `Traited.ownProperties`).
   */
  ownProperties() {
    return this.traited.ownProperties();
  }
  /** The tweens in flight on this actor, in the order they were started. */
  tweens() {
    return this.runningTweens;
  }
  /**
   * Start a tween, replacing any already moving a property it moves.
   *
   * LAST WRITE WINS, decided at the START rather than per frame. Two tweens
   * left running over one property would both write it every tick and the
   * winner would be whichever the list happened to reach second — a race
   * decided by insertion order, which is no rule at all. Replacing means the
   * newest instruction is the one in force, which is what "last write wins"
   * is for.
   *
   * WHOLE RUNS, on any overlap at all. A tween moves a SET of properties, so
   * two of them can half-collide — one fading, one moving-and-fading. Splitting
   * the older run and keeping the half that does not clash is not behavior
   * anybody could predict; "two tweens cannot fight over a property, so the
   * newer replaces the older" is one sentence.
   *
   * It is still worth saying out loud. Fading a thing out while fading it in
   * is a real mistake, and silently honouring one of them looks like the other
   * one never ran. `onReplace` is how the caller reports it — the engine has no
   * console of its own and no opinion about where a warning belongs.
   */
  startTween(run, onReplace) {
    const moving = new Set(run.steps.map((step) => step.property.id));
    for (const held2 of [...this.runningTweens]) {
      if (held2.steps.some((step) => moving.has(step.property.id))) {
        onReplace?.(held2);
        this.runningTweens.splice(this.runningTweens.indexOf(held2), 1);
      }
    }
    this.runningTweens.push(run);
    return this;
  }
  /** Drop a tween in flight, leaving the property wherever it reached. */
  stopTween(run) {
    const at = this.runningTweens.indexOf(run);
    if (at >= 0) {
      this.runningTweens.splice(at, 1);
    }
    return this;
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
    return this.traited.hasProperty(property);
  }
};

// src/engine/builders/ActorBuilder.ts
var FOUNDATION_TRAITS = [PositionalTrait, AppearanceTrait];
var FOUNDATION_TRAIT_IDS = FOUNDATION_TRAITS.map(
  (trait) => trait.id
);
var ActorBuilder = class {
  /** The template's id — the actor's type, and the default instance id. */
  id;
  name;
  traits = [];
  overrides = [];
  handlers = [];
  effects = [];
  steps = [];
  drawing;
  constructor(opts) {
    this.id = opts.id;
    this.name = opts.name;
  }
  /**
   * `is data` — a kind that is a RECORD and not a thing in the world.
   *
   * WHAT IT SUPPRESSES is the seeding below: an actor with no positional
   * trait is not drawn, is not in the spatial index, is not hit-tested, and
   * is walked by no step that asks for positioned actors. That was the
   * ordinary behaviour once, and was taken away ON PURPOSE — a forgotten
   * `use trait` row gave an actor that existed and could not be seen, which
   * reads as a bug rather than as a decision.
   *
   * So it comes back as a DECLARATION rather than as an omission. Forgetting
   * a row still gives a normal actor; only saying this gives one with no
   * place (specs/RECORDS_PLAN.md).
   *
   * EVERYTHING ELSE IS UNCHANGED. It has its own properties, it has an age,
   * it raises and hears events, it runs its own steps, and it is in
   * `all actors` — which is how a project finds its records at all. It is a
   * live object; it is not a LOCATED one.
   */
  isData() {
    this.data = true;
    return this;
  }
  /** Whether this kind is a record rather than a thing on the screen. */
  get isRecord() {
    return this.data;
  }
  data = false;
  useTraits(traits) {
    this.traits = [...this.traits, ...traits];
    return this;
  }
  /**
   * Elect camera traits, for a kind that shows a map: they go to the
   * Viewport's own main camera (specs/SPACE_CAMERAS_PLAN.md, "simplifying").
   *
   * The actor HOLDS them too, so it has their property slots — `actor to
   * follow` is then a field in the placement inspector and a `set` on the
   * Viewport — and the world copies those values onto the camera each tick
   * (`World.settleSpaces`). What generates this is a `use trait` naming a
   * camera trait under `define actor`, which the palette offers only to a kind
   * that `Shows a Map`.
   */
  useCameraTraits(traits) {
    this.traits = [...this.traits, ...traits];
    this.cameraTraitList = [...this.cameraTraitList, ...traits];
    return this;
  }
  cameraTraitList = [];
  /** The camera traits this kind elected, for its Viewport's main camera. */
  get cameraTraits() {
    return this.cameraTraitList;
  }
  /**
   * Named to match `Actor.addTrait` / `Actor.removeTrait`, and for the reason
   * `addEffect` gives: ONE Blockly block serves a template body and an event
   * handler, both bind the identifier `actor`, and the block emits
   * `actor.addTrait(…)` either way. Without these, dragging the block above the
   * handlers rather than inside one is `actor.addTrait is not a function`.
   *
   * On a template they describe what every instance is MADE with, so removing
   * one it never elected does nothing — the same silence the live actor gives.
   */
  addTrait(trait) {
    return this.useTraits([trait]);
  }
  removeTrait(trait) {
    if (!trait) {
      return this;
    }
    this.traits = this.traits.filter((held2) => held2?.id !== trait.id);
    return this;
  }
  /**
   * Take everything another KIND of actor is, and go on being this one.
   *
   * `acts like ⟨Progress Bar⟩` — the whole of subclassing here. What comes
   * across is the DESCRIPTION: the traits it elects, the slots its properties
   * sit in, the work it does each frame, the picture it paints, the handlers it
   * registers and the effects it wears. What does not is its identity.
   *
   * SO A KIND IS NOT INHERITED, and that is the interesting half. `is a
   * ⟨Progress Bar⟩` compiles to `each.type === "actors/progressBar"`, and an
   * instance carries the module it was placed from — so a Health Bar that acts
   * like a Progress Bar is not one of `any ⟨Progress Bar⟩`. It qualifies under
   * every TRAIT relationship instead, which is the one that asks what a thing
   * can do rather than what it is called.
   *
   * AT THE MOMENT THE ROW IS READ, not at instantiate: this copies what the
   * other builder holds NOW. Rows below it therefore have the last word — a
   * `set` after it overrides an inherited default, because overrides are
   * applied in order and the later one wins (`Traited`), and a `define drawing`
   * after it replaces the inherited picture. That is what reading a file
   * downwards should mean.
   *
   * The drawing is the one thing taken CONDITIONALLY, so that a child which
   * describes its own picture first and says `acts like` afterwards keeps it.
   */
  actsLike(other) {
    this.traits = [...this.traits, ...other.traits];
    this.cameraTraitList = [...this.cameraTraitList, ...other.cameraTraits];
    this.data = this.data || other.data;
    this.overrides.push(...other.overrides);
    this.handlers.push(...other.handlers);
    this.steps.push(...other.steps);
    for (const effect of other.effects) {
      this.addEffect(effect.path, effect.document, effect.values);
    }
    this.drawing ??= other.drawing;
    return this;
  }
  /** Override a trait property's initial value for this actor. */
  set(property, value) {
    this.overrides.push([property, value]);
    return this;
  }
  /**
   * Declare a property this KIND of actor carries, owned by no trait.
   *
   * The shorthand for state that needs no mechanic around it — when a Player
   * last fired, how much ammo it has — where declaring a trait would mean
   * declaring a rule in a file of its own. `Traited` already takes slots from
   * two places, a trait's defaults and the overrides, so this is the second of
   * those and not a third way for a slot to exist: the property is made here
   * and immediately overridden with its own default, which is what puts the
   * slot on every instance.
   *
   * NOT a synthesized trait, though that would also have worked. A trait is
   * something elected, that several kinds of actor may share and that
   * `has trait` can ask about — none of which is true here. Inventing one to
   * satisfy a factory signature would put a trait the learner never wrote into
   * `traits()` and into anything that introspects membership.
   *
   * Returns the property so the caller can read and write it; generated actor
   * modules bind it to a const and their handlers close over it.
   */
  defineProperty(id, type, defaultValue, opts = {}) {
    const property = {
      id,
      type,
      default: defaultValue,
      readonly: opts.readonly ?? false,
      name: opts.name,
      scope: "actor",
      // The actor kind that declared it, which is what an error about a missing
      // slot needs to name. There is no trait to point at, and `ownerKind` is
      // what says so rather than leaving a reader to infer it from the id.
      ownerId: this.id,
      ownerKind: "actor"
    };
    this.overrides.push([property, defaultValue]);
    return property;
  }
  /**
   * Declare something this KIND of actor does every frame.
   *
   * The behavior half of `defineProperty`, and the same bargain: state a kind
   * carries without a rule, and now work a kind does without one. A rule is
   * still the answer when the behavior is SHARED between kinds, elected, or
   * answerable by `has trait` — this is for the case where it is none of those
   * and a `.rule` file is more ceremony than the thing deserves.
   *
   * `run` is handed the actor, so a body written in an `.actor` file means what
   * it says: `this actor` is this one, and the step runs once per actor of the
   * kind rather than once for the kind.
   *
   * NOT A SYNTHESIZED TRAIT, for the reason `defineProperty` gives: a trait is
   * elected and shareable and askable, and this is none of them. What carries
   * it is the World, which folds a kind's steps into the tick order the first
   * time one of its actors is placed (`World.useActorKind`).
   */
  defineStep(id, phase, run) {
    this.steps.push({ id, phase, run });
    return this;
  }
  /** The per-frame bodies this kind declared, for the World to schedule. */
  get ownSteps() {
    return this.steps;
  }
  /**
   * Declare a thing this KIND of actor does, by name — `define block`.
   *
   * The third of the same bargain `defineProperty` and `defineStep` make: state
   * a kind carries, work it does every frame, and now a NAMED thing it does.
   * A rule is still the answer when the behavior is shared between kinds,
   * elected, or answerable by `has trait`; this is for the case where the
   * honest motivation is that the same six blocks were written twice.
   *
   * NOTHING IS REGISTERED, unlike a property, and that is worth saying: an
   * action is stateless, and `Actor.act` simply applies the one it is handed —
   * it does not look it up on the actor, or check that the actor has whatever
   * declared it. So this makes an object and returns it, which the generated
   * module binds to a `const` its handlers close over.
   *
   * It is a method rather than an object literal in generated code because the
   * ownership should be stated somewhere a reader can find it, and because a
   * `world.`/`actor.` call is what `builderSurface.test` can see.
   */
  defineAction(id, apply2, opts = {}) {
    return {
      id,
      name: opts.name,
      // The kind that declared it, which is what an error naming it has to
      // say. There is no trait to point at, and `ownerId` is the only thing
      // that says where it came from.
      ownerId: this.id,
      params: opts.params,
      apply: apply2
    };
  }
  /**
   * Declare what this KIND of actor looks like, by describing it.
   *
   * `defineStep`'s sibling and its opposite. A step is handed the world and may
   * change it; a drawing is handed a pen and may not — it says how the actor
   * looks GIVEN what it currently is, and nothing else. That purity is what
   * lets the picture be identified by what it describes, which is what makes it
   * possible to draw nine actors with one texture and to draw an unchanging
   * actor once (specs/DRAWING.md).
   *
   * The canvas is declared rather than measured, and becomes the actor's
   * `intrinsic size` — so a drawn actor's click box and collision box are the
   * size of the picture without anything inspecting pixels.
   *
   * ONE PER KIND. A second `define drawing` in one file would be two answers to
   * "what does this look like", and the block is a root that cannot be
   * duplicated meaningfully; the last one declared wins rather than an
   * arbitrary one, which is at least the one the author saw last.
   */
  defineDrawing(width, height, run) {
    const measure = (given) => typeof given === "function" ? (actor, world) => Number(given(actor, world)) || 0 : () => given;
    const across = measure(width);
    const down = measure(height);
    this.drawing = {
      size: (actor, world) => ({
        width: across(actor, world),
        height: down(actor, world)
      }),
      run: (actor, pen, world) => run(actor, pen, world)
    };
    return this;
  }
  /** The picture this kind describes for itself, for the World to run. */
  get ownDrawing() {
    return this.drawing;
  }
  /**
   * Declare an event this KIND of actor raises — `define event`.
   *
   * The fourth of the bargain `defineProperty`, `defineStep` and `defineAction`
   * make: state a kind carries, work it does every frame, a named thing it
   * does, and now something that HAPPENS to it. A rule is still the answer when
   * the event is shared between kinds or elected; this is for the case where
   * one kind of actor has a moment worth telling the rest of the project about
   * — a speech box finishing, a door reaching the top of its travel.
   *
   * NOTHING IS REGISTERED, as with `defineAction`, and for the same reason: an
   * event is an identity and no more. `World.emit` enqueues against the object
   * and `Actor.on` matches against it, so nothing has to have been told the
   * event exists — which is what lets a world handle an event declared in an
   * `.actor` file it merely imports.
   *
   * `ownerId` is this kind, which is what an event says about where it came
   * from when something has to name it.
   */
  defineEvent(id, opts = {}) {
    return { id, name: opts.name, ownerId: this.id };
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
    const spec = values ? { path, document, values } : { path, document };
    const at = this.effects.findIndex((effect) => effect.path === path);
    if (at >= 0) {
      this.effects[at] = spec;
      return this;
    }
    this.effects.push(spec);
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
      // The foundation, unless this kind said it has no place (`isData`).
      traits: this.data ? [...this.traits] : [...FOUNDATION_TRAITS, ...this.traits],
      overrides: [...this.overrides],
      handlers: [...this.handlers],
      effects: [...this.effects]
    });
  }
};

// src/engine/core/units.ts
var PIXELS_PER_UNIT = 100;

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
  ANCHORS,
  Actor,
  ActorBuilder,
  AdvanceAnimationStep,
  AdvanceTweensStep,
  AnimationEndedEvent,
  AnimationProperty,
  AnimationRule,
  AppearanceTrait,
  BOXED,
  BoxedRule,
  CreatedEvent,
  DEFAULT_BACKDROP_COLOR,
  DEFAULT_FRAME_DELAY,
  DependencySet,
  EventQueue,
  FOUNDATION_TRAIT_IDS,
  FrameChangedEvent,
  FrameProperty,
  GainedChildEvent,
  GotParentEvent,
  HasABoxTrait,
  HasAStyleTrait,
  HeightProperty,
  IntrinsicSizeProperty,
  LazyActors,
  LeftMapEvent,
  LostChildEvent,
  LostParentEvent,
  MapLoad,
  MoveAction,
  NO_THEME,
  NoticeLeavingStep,
  OpacityProperty,
  OutsideMapQuery,
  PIXELS_PER_UNIT,
  ParentProperty,
  PositionProperty,
  PositionalTrait,
  ROOT_SPACE_ID,
  RemovedEvent,
  ResizeAction,
  RotateAction,
  RotationProperty,
  RuleBuilder,
  STOP_ALL_SOUNDS,
  STYLED,
  ScaleAction,
  ScaleProperty,
  Scheduler,
  SkewProperty,
  Space,
  SpatialRule,
  SpriteCellOriginProperty,
  SpriteCellSizeProperty,
  SpriteProperty,
  StyledRule,
  TEXT_ANCHORS,
  ThemeProperty,
  Trait,
  TweenFinishedEvent,
  VIEWPORT,
  Vector,
  ViewportContentProperty,
  ViewportMapProperty,
  ViewportMirrorsProperty,
  ViewportMirrorsTheWorldProperty,
  ViewportRule,
  ViewportScrollProperty,
  ViewportShowsMapEvent,
  ViewportShowsThroughProperty,
  ViewportTrait,
  WidthProperty,
  World,
  WorldBuilder,
  addTo,
  addToFront,
  advanceTween,
  all,
  anchorPoint,
  anchored,
  anyOf,
  beginTween,
  compose,
  each,
  extreme,
  filtered,
  firstOf,
  firstWhere,
  frameDelay,
  inThisSpace,
  isAnchor,
  isSameActor,
  isTweenable,
  itemOf,
  items,
  lastOf,
  listHas,
  one,
  ordered,
  parseAnimationFile,
  playAnimation,
  pushed,
  resolveTheme,
  rgb,
  rgba,
  takeFirst,
  taken,
  text,
  toHex,
  toLocal,
  tweenDisplaced,
  tweenValue,
  within,
  without,
  worldTransformOf
};
