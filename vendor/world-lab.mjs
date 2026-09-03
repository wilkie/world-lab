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
   * What a rule says instead of naming a neighbour: gravity is a force, so it
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
  // …and the other end of the same fact. Not raised by `clear world`, which
  // empties a world rather than removing anybody from it (`rules/spatial`).
  removed: "removed"
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
    body(actor);
  }
}
function firstWhere(actors, where) {
  for (const actor of actors) {
    if (where(actor)) {
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
      if (where(actor)) {
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
    const keys = /* @__PURE__ */ new Set();
    for (const item of list) {
      const key = keyFor(item);
      if (key === void 0) {
        return list.some((item_) => sameValue(item_, value));
      }
      keys.add(key);
    }
    index = { version, keys };
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

// src/engine/core/drawing.ts
var TEXT_ANCHORS = [
  "top left",
  "top",
  "top right",
  "left",
  "centre",
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
  paint() {
    return {
      ...this.currentFill === void 0 ? {} : { fill: this.currentFill },
      ...this.currentStroke === void 0 ? {} : { stroke: this.currentStroke },
      strokeWidth: this.currentWidth
    };
  }
  fill(color) {
    this.currentFill = color;
  }
  outline(color, width) {
    this.currentStroke = color;
    this.currentWidth = width;
  }
  noFill() {
    this.currentFill = void 0;
  }
  noOutline() {
    this.currentStroke = void 0;
  }
  rectangle(x, y, width, height) {
    this.commands.push({ op: "rectangle", x, y, width, height, ...this.paint() });
  }
  circle(x, y, radius) {
    this.commands.push({ op: "circle", x, y, radius, ...this.paint() });
  }
  /**
   * A line is drawn in the outline colour, FALLING BACK TO THE FILL.
   *
   * A line has no interior, so "the colour" is the only paint it can mean. The
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
      ...paint.stroke === void 0 ? paint.fill === void 0 ? {} : { stroke: paint.fill } : { stroke: paint.stroke }
    });
  }
  text(text, x, y, size, anchor, wrapWidth) {
    this.commands.push({
      op: "text",
      text,
      x,
      y,
      size,
      anchor,
      // Absent rather than zero when there is no wrapping, because the command
      // list is a drawing's IDENTITY (`drawingKey`): a key carrying `0` for
      // every unwrapped line would differ from every drawing made before this
      // existed, and re-rasterize the lot.
      ...wrapWidth !== void 0 && wrapWidth > 0 ? { wrapWidth } : {},
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
  enqueue(event, actor, detail) {
    this.pending.push({ event, actor, detail });
  }
  /**
   * Whether this exact event is already queued for this actor.
   *
   * So a caller can raise something AT MOST ONCE a tick without keeping a flag
   * of its own: the queue is cleared on flush, so "already pending" and "already
   * raised this tick" are the same question.
   */
  isPending(event, actor) {
    return this.pending.some(
      (queued) => queued.event === event && queued.actor === actor
    );
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
    for (const { event, actor, detail } of batch) {
      if (!actor) {
        for (const handler of world.handlersFor(event)) {
          handler(world, detail);
        }
        continue;
      }
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

// src/engine/core/World.ts
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
  constructor(list) {
    this.list = list;
  }
  /** Every camera with a trait — a copy, so a body may add one while walking. */
  with(trait) {
    return this.list.filter((camera) => camera.has(trait));
  }
  [Symbol.iterator]() {
    return this.list[Symbol.iterator]();
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
   * (`actors/coin`), or a world-local template's id.
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
    (rule3) => rule3.requires,
    (rule3) => rule3.id
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
  bounds = new Vector(VIEWPORT_WIDTH, VIEWPORT_HEIGHT);
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
  // The one colour behind everything. World-scoped, not per layer: a colour on
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
  // The set of currently-pressed input keys, refreshed by the driver each frame
  // before `tick` (the engine is DOM-free, so input arrives as plain data).
  // Rule steps read it through `isKeyDown`; keys carry OUR names — 'left arrow',
  // 'a', 'space' — which the driver translates the DOM's into (core/keys).
  keys = /* @__PURE__ */ new Set();
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
    for (const rule3 of init.rules) {
      this.membership.add(rule3);
    }
    const rules = this.membership.items();
    for (const rule3 of rules) {
      for (const property of Object.values(rule3.properties)) {
        this.store.set(property, coerce2(property, property.default));
      }
    }
    for (const property of init.ownProperties ?? []) {
      this.defineOwnProperty(property, property.default);
    }
    for (const rule3 of rules) {
      for (const [id, def] of Object.entries(rule3.animations)) {
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
    this.cameraCollection = new CameraCollection(this.cameraList);
    for (const camera of this.cameraList) {
      camera.world = this;
    }
    for (const rule3 of rules) {
      this.stepList.push(...Object.values(rule3.steps));
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
   * now behaviour a kind runs without one. A rule is still what you write when
   * the behaviour is shared, elected or answerable — this is for the case where
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
            step.run(actor, world, delta);
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
    const spatial = this.membership.items().find((r) => r.id === SPATIAL.rule);
    const positional = spatial?.traits[SPATIAL.trait];
    return positional?.properties[SPATIAL.intrinsicSize];
  }
  place(actor, layer = DEFAULT_LAYER_ID) {
    actor.world = this;
    actor.bornAt = this.elapsed;
    actor.layer = this.layerIndex.has(layer) ? layer : DEFAULT_LAYER_ID;
    const drawing = this.kindDrawings.get(actor.type);
    if (drawing) {
      const property = this.intrinsicSizeProperty();
      if (property) {
        actor.set(property, new Vector(drawing.width, drawing.height));
      }
    }
    this.actorList.push(actor);
    this.actorsById.set(actor.id, (this.actorsById.get(actor.id) ?? 0) + 1);
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
   * Take the view through a different camera.
   *
   * A VALUE, not structure: switching cameras moves a transform and rebuilds
   * nothing, so a game may cut between them without restarting. An unknown id
   * leaves the view where it is rather than blacking it out.
   */
  setActiveCamera(id) {
    if (this.cameraList.some((camera) => camera.id === id)) {
      this.activeCameraId = id;
    }
    return this;
  }
  /** The camera the view is currently taken through. */
  activeCamera() {
    return this.camera(this.activeCameraId);
  }
  camera(id = DEFAULT_CAMERA_ID) {
    return this.cameraList.find((camera) => camera.id === id) ?? this.cameraList.find((entry) => entry.id === DEFAULT_CAMERA_ID) ?? this.cameraList[0];
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
  depthOf(layer) {
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
  actorsNear(at, radius, only) {
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
    const near = this.index.near(at?.x ?? 0, at?.y ?? 0, radius, positionOf);
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
  /** Raise an event for `actor`; dispatched after the current tick's steps. */
  emit(event, actor, detail) {
    this.events.enqueue(event, actor, detail);
  }
  /**
   * Whether `event` is already queued for `actor` — see `EventQueue.isPending`.
   *
   * For a raiser that must not raise twice in one tick, and would otherwise
   * have to keep a per-actor flag and clear it at some moment of its own.
   */
  hasPendingEvent(event, actor) {
    return this.events.isPending(event, actor);
  }
  /**
   * Raise an event that is about the WORLD — a key went down, a level was
   * cleared — with no actor it happened to.
   *
   * A separate method rather than an optional argument, because the two say
   * different things and `emit(event, detail)` would read as an actor with the
   * detail in its place. Which of the two a rule uses is decided by where it
   * declared the event: under a trait it is an actor's, on the rule it is the
   * world's.
   *
   * Dispatched with the actor ones, after this tick's steps.
   */
  emitToWorld(event, detail) {
    this.events.enqueue(event, void 0, detail);
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
  mapBounds() {
    return this.bounds;
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
   * A world that is not ticking does not age. Pause the game and time stops
   * with it, which is what a learner means by "two seconds later" — two seconds
   * of game, not two seconds of sitting in a paused tab.
   *
   * It agrees exactly with anything integrated from `delta`. A bullet that has
   * travelled `speed × 2` has an age of exactly 2, because the same numbers
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
  viewSize() {
    return new Vector(this.view.x, this.view.y);
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
  }
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
    if (!map.size || !map.tile) {
      return;
    }
    this.bounds = new Vector(
      Math.max(this.bounds.x, map.size.width * map.tile.width),
      Math.max(this.bounds.y, map.size.height * map.tile.height)
    );
  }
  /**
   * Place the actors a Map describes.
   *
   * A world may load several — a level and a HUD, say. Loading is additive, so
   * they stack in call order; `clearActors()` first to replace rather than add.
   *
   * IT WORKS WHILE THE GAME RUNS, which is what makes a second room possible:
   * `clear world` then `load map ⟨Room 2⟩` in a handler is a door. It lived on
   * `WorldBuilder` alone until then, and a project could describe as many maps
   * as it liked so long as it never wanted to be in a different one.
   *
   * `layer` puts every actor the map describes into one layer, which is what
   * makes a HUD a HUD: the map is an ordinary map, and the layer it is loaded
   * into is the whole of what makes it an interface (specs/VIEWPORT.md).
   */
  loadMap(map, layer) {
    this.growToFit(map);
    const lookup = this.propertyLookup();
    const added = [];
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
          actor.set(property, value);
        }
      }
      this.useActorKind(entry.type, builder);
      this.addActor(actor, layer);
      added.push(actor);
    }
    for (const [actor, property, id] of deferred) {
      const target = placed.get(id);
      if (target) {
        actor.set(property, target);
      }
    }
    return added;
  }
  /** Map `${ownerId}.${propId}` -> Property across the world's rules + traits. */
  propertyLookup() {
    const lookup = /* @__PURE__ */ new Map();
    const add = (property) => lookup.set(`${property.ownerId}.${property.id}`, property);
    for (const rule3 of this.activeRules()) {
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
  mousePosition() {
    const view = this.viewSize();
    const camera = this.activeCamera();
    return new Vector(
      camera.position.x - view.x / 2 + this.pointer.x,
      camera.position.y - view.y / 2 + this.pointer.y
    );
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
  /** The ids of every registered animation (active rules' stock + world extras). */
  animationIds() {
    return [...this.animationDefs.keys()];
  }
  /** Advance the simulation by `delta` seconds. */
  tick(delta) {
    this.inTick = true;
    this.elapsed += delta;
    try {
      this.scheduler.run(this, delta);
      this.events.flush(this);
    } finally {
      this.inTick = false;
      for (const actor of this.leaving) {
        this.detach(actor);
      }
      this.leaving.clear();
    }
    this.previousKeys = this.keys;
    this.previousButtons = this.buttons;
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
  /** The one colour behind everything, as the driver clears to it. */
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
   * `undefined` clears it, leaving the backdrop colour. The image is stretched
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
   * leaving nothing drawn: unlike the background there is no colour behind a
   * foreground, because a colour in front of everything would be a wall.
   */
  setForeground(sprite, layer = DEFAULT_LAYER_ID) {
    this.slotAt(layer, "foreground").sprite = sprite;
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
    const drawingFor = (actor) => {
      const drawing = this.kindDrawings.get(actor.type);
      if (!drawing) {
        return void 0;
      }
      const pen = new CommandPen();
      drawing.run(actor, pen, this);
      return {
        key: drawingKey(drawing.width, drawing.height, pen.commands),
        width: drawing.width,
        height: drawing.height,
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
      states.push({
        actor,
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
        layer: this.depthOf(actor.layer ?? DEFAULT_LAYER_ID)
      });
    }
    return states;
  }
  /**
   * Remove every actor (used by `WorldBuilder.clear` and the `clear world` block).
   *
   * DEFERRED while a tick is running, exactly as {@link removeActor} is and for
   * the same reason: clearing the world is something a handler does — "the
   * player reached the exit, take it all away" — and a handler runs inside the
   * walk of the very list this empties. Emptying it underneath that walk skips
   * whatever came next. `WorldBuilder.clear` calls this at setup, where nothing
   * is ticking and it takes effect at once.
   */
  clearActors() {
    if (this.inTick) {
      for (const actor of this.actorList) {
        this.leaving.add(actor);
      }
      return;
    }
    for (const actor of this.actorList) {
      actor.world = void 0;
      actor.layer = void 0;
    }
    this.actorList.length = 0;
    this.actorsById.clear();
    this.nextOrdinal.clear();
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
    for (const rule3 of rules) {
      for (const property of Object.values(rule3.properties)) {
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
      ruleIds: rules.map((rule3) => rule3.id).sort(),
      ruleCode: Object.fromEntries(
        rules.map((rule3) => [rule3.id, ruleContentHash(rule3)])
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
      // Per layer, in stack order, plus the world's one colour. Values, not
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

// src/engine/core/watchProperty.ts
function watchProperty(property, watcher) {
  const list = property.watch;
  if (list) {
    list.push(watcher);
  } else {
    property.watch = [watcher];
  }
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
  const bounds = world.mapBounds();
  return at.x + half.x < 0 || at.y + half.y < 0 || at.x - half.x > bounds.x || at.y - half.y > bounds.y;
}
function within(value, of, distance) {
  const centres = all(of);
  const reach = Number.isFinite(distance) ? distance : -1;
  const world = centres[0]?.world;
  if (world && reach >= 0 && value === world.actors) {
    return new LazyActors(function* () {
      const seen = /* @__PURE__ */ new Set();
      for (const centre of centres) {
        for (const near of world.actorsNear(
          centre.get(PositionProperty),
          reach
        )) {
          if (!centres.includes(near) && !seen.has(near)) {
            seen.add(near);
            yield near;
          }
        }
      }
    });
  }
  return filtered(
    value,
    (actor) => !centres.includes(actor) && centres.some((centre) => gap(actor, centre) <= reach)
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
var LeftMapEvent = rule.addEvent("leftMap", {
  name: "leaves the map"
});
watchProperty(PositionProperty, (actor, previous, next) => {
  const world = actor.world;
  if (!world) {
    return;
  }
  if (outsideMapAt(actor, previous) || !outsideMapAt(actor, next)) {
    return;
  }
  if (!world.hasPendingEvent(LeftMapEvent, actor)) {
    world.emit(LeftMapEvent, actor);
  }
});
var CreatedEvent = rule.addEvent(SPATIAL.created, {
  name: "is created"
});
var RemovedEvent = rule.addEvent(SPATIAL.removed, {
  name: "is removed"
});
var TweenFinishedEvent = rule.addEvent("tweenFinished", {
  name: "a tween finishes"
});
var AdvanceTweensStep = rule.addStepIn(
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
var AnimationEndedEvent = rule2.addEvent("animationEnded", {
  name: "animation ends"
});
var FrameChangedEvent = rule2.addEvent("frameChanged", {
  name: "animation frame changes"
});
function publishPictureSize(world, actor) {
  const cell = actor.get(SpriteCellSizeProperty);
  if (cell.x > 0 && cell.y > 0) {
    actor.set(IntrinsicSizeProperty, new Vector(cell.x, cell.y));
    return;
  }
  const sprite = actor.get(SpriteProperty);
  const measured = sprite ? world.imageSize(sprite) : void 0;
  if (measured) {
    actor.set(
      IntrinsicSizeProperty,
      new Vector(measured.width, measured.height)
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
    actor.set(IntrinsicSizeProperty, new Vector(width, height));
  }
}
var AdvanceAnimationStep = rule2.addStep(
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
var AnimationRule = rule2.build();

// src/engine/builders/WorldBuilder.ts
var FOUNDATION_RULES = [SpatialRule, AnimationRule];
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
  hideRule(rule3) {
    this.hidden.add(rule3);
    return this;
  }
  /** Whether a rule is marked hidden (for the interface layer). */
  isHidden(rule3) {
    return this.hidden.has(rule3);
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
  actorsNear(at, radius, only) {
    return this.getWorld().actorsNear(at, radius, only);
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
  /** Set the colour behind the backdrop. See {@link World.setBackgroundColor}. */
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
    this.built ??= this.instantiate();
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
   * Remove every actor. See {@link World.clearActors}.
   *
   * Named as the World names it, because one block calls whichever it lands on:
   * `clear world` generates `world.clearActors()` under `define world` and in a
   * handler alike. It reads as a strange thing to do while describing a world
   * until you want a second map to REPLACE the first rather than stack on it,
   * which is what `loadMap`'s note points at.
   */
  clearActors() {
    this.getWorld().clearActors();
  }
  /**
   * Place the actors a Map describes. See {@link World.loadMap}.
   *
   * Deferred like `clear world`'s, and for the same reason: one block calls
   * whichever object it lands on. What this adds is the REGISTRY — a builder's
   * `define` records templates before there is a world to record them in, so
   * they are handed over here, on the way past.
   */
  loadMap(map, layer) {
    const world = this.getWorld();
    for (const [type, builder] of this.types) {
      world.define(type, builder);
    }
    return world.loadMap(map, layer);
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
   * Build a NEW World from this description: construct, then replay the log.
   *
   * Distinct from `getWorld`, which memoizes: this is for callers that want a
   * throwaway (the thumbnail renderer builds one per picker refresh, and tests
   * build many). Two worlds made this way are independent — the log holds the
   * arguments a call was given, and the World copies what it stores (a Vector,
   * a colour), so replaying it twice shares nothing.
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
  get(property) {
    return this.traited.get(property);
  }
  /**
   * Set a property's value; returns `this` so instance setup can chain.
   *
   * A watched property (`watchProperty`) is read back after the write and the
   * watchers told what changed. Read BACK rather than passing `value` on,
   * because `Traited.set` coerces and a watcher comparing the two must be
   * comparing stored values or it will see changes that did not happen.
   *
   * Unwatched — which is every property but one, and the case this is on the
   * hot path for — costs one field read.
   */
  set(property, value) {
    const watchers = property.watch;
    if (!watchers) {
      this.traited.set(property, value);
      return this;
    }
    const previous = this.traited.get(property);
    this.traited.set(property, value);
    const next = this.traited.get(property);
    for (const watcher of watchers) {
      watcher(this, previous, next);
    }
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
   * the older run and keeping the half that does not clash is not behaviour
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
  useTraits(traits) {
    this.traits = [...this.traits, ...traits];
    return this;
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
   * The behaviour half of `defineProperty`, and the same bargain: state a kind
   * carries without a rule, and now work a kind does without one. A rule is
   * still the answer when the behaviour is SHARED between kinds, elected, or
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
   * A rule is still the answer when the behaviour is shared between kinds,
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
    this.drawing = {
      width,
      height,
      run: (actor, pen, world) => run(actor, pen, world)
    };
    return this;
  }
  /** The picture this kind describes for itself, for the World to run. */
  get ownDrawing() {
    return this.drawing;
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
      traits: [...FOUNDATION_TRAITS, ...this.traits],
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
  Actor,
  ActorBuilder,
  AdvanceAnimationStep,
  AdvanceTweensStep,
  AnimationEndedEvent,
  AnimationProperty,
  AnimationRule,
  AppearanceTrait,
  CreatedEvent,
  DEFAULT_BACKDROP_COLOR,
  DEFAULT_FRAME_DELAY,
  DependencySet,
  EventQueue,
  FOUNDATION_TRAIT_IDS,
  FrameChangedEvent,
  FrameProperty,
  IntrinsicSizeProperty,
  LazyActors,
  LeftMapEvent,
  MoveAction,
  OpacityProperty,
  OutsideMapQuery,
  PIXELS_PER_UNIT,
  PositionProperty,
  PositionalTrait,
  RemovedEvent,
  ResizeAction,
  RotateAction,
  RotationProperty,
  RuleBuilder,
  STOP_ALL_SOUNDS,
  ScaleAction,
  ScaleProperty,
  Scheduler,
  SkewProperty,
  SpatialRule,
  SpriteCellOriginProperty,
  SpriteCellSizeProperty,
  SpriteProperty,
  TEXT_ANCHORS,
  Trait,
  TweenFinishedEvent,
  Vector,
  World,
  WorldBuilder,
  addTo,
  addToFront,
  advanceTween,
  all,
  beginTween,
  each,
  extreme,
  filtered,
  firstOf,
  firstWhere,
  frameDelay,
  isTweenable,
  items,
  lastOf,
  listHas,
  one,
  ordered,
  parseAnimationFile,
  playAnimation,
  pushed,
  rgb,
  rgba,
  takeFirst,
  taken,
  toHex,
  tweenDisplaced,
  tweenValue,
  within
};
