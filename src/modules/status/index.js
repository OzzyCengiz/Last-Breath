import { BALANCE } from '../../data/balance.js';
import { AILMENTS } from '../../data/ailments.js';
import { ref } from '../../i18n/i18n.js';
import { rollRange } from '../../core/rng.js';
import { skillMultiplier } from '../skills/skillSelectors.js';
import { incomingDamageMultiplier, isOverloaded } from '../inventory/inventorySelectors.js';
import { NEEDS, canRegenerate, vitalBand } from './statusSelectors.js';

const BAND_ORDER = ['fine', 'low', 'critical', 'depleted'];
const DEPRIVATION_CAUSE = { satiety: 'starvation', hydration: 'dehydration', energy: 'exhaustion' };
const clampVital = (value) => Math.max(0, Math.min(BALANCE.vitals.max, value));

function createPlayer() {
  return {
    name: 'Survivor',
    age: 28,
    bloodType: 'A+',
    trait: 'stoic',
    archetype: 'scavenger',
    ...BALANCE.vitals.start,
    ailments: {},
    alive: true,
    causeOfDeath: null,
    diedAt: null,
  };
}

/** Changes a vital and narrates the moment it slides into a worse band. */
function adjustVital({ store, engine }, vital, delta) {
  const before = store.state.player[vital];
  const applied = store.commit('player/changeVital', { vital, delta });
  const fromBand = vitalBand(before);
  const toBand = vitalBand(store.state.player[vital]);
  if (BAND_ORDER.indexOf(toBand) > BAND_ORDER.indexOf(fromBand)) {
    engine.log(`log.vital.${vital}.${toBand}`, {}, toBand === 'low' ? 'warn' : 'bad');
  }
  return applied;
}

function inflictDamage(ctx, amount, cause) {
  if (amount <= 0 || !ctx.store.state.player.alive) return 0;
  const dealt = -adjustVital(ctx, 'health', -amount);
  if (ctx.store.state.player.health <= 0) {
    ctx.store.commit('player/die', { cause });
    ctx.engine.log(`death.cause.${cause}`, {}, 'bad');
    ctx.bus.emit('player:died', { cause });
  }
  return dealt;
}

function tickBleeding(ctx, bleeding, hours, harm) {
  const { store, rng, engine } = ctx;
  const rules = AILMENTS.bleeding;
  harm.add('bleeding', bleeding.severity * rules.healthPerHourPerSeverity * hours);

  const stopChance = (rules.stopChancePerHour * skillMultiplier(store.state, 'medical') * hours) / bleeding.severity;
  if (rng.chance(stopChance)) {
    store.commit('player/clearAilment', 'bleeding');
    engine.log('log.ailment.bleeding.stopped', {}, 'good');
    return;
  }
  if (!store.state.player.ailments.infection && rng.chance(rules.infectionChancePerHour * hours)) {
    store.commit('player/setAilment', { id: 'infection', data: { ...AILMENTS.infection.initial } });
    engine.log('log.ailment.infection.gained', {}, 'bad');
  }
}

function tickInfection(ctx, infection, hours, harm) {
  const { store, engine } = ctx;
  const rules = AILMENTS.infection;
  const { player } = store.state;
  const fightingItOff = infection.progress < rules.recoveryBelow && player.satiety > 60 && player.hydration > 60;

  const progress = fightingItOff
    ? infection.progress - rules.recoveryPerHour * hours
    : Math.min(100, infection.progress + rules.growthPerHour * hours);

  if (progress <= 0) {
    store.commit('player/clearAilment', 'infection');
    engine.log('log.ailment.infection.cleared', {}, 'good');
    return;
  }
  store.commit('player/setAilment', { id: 'infection', data: { progress } });

  if (infection.progress < rules.symptomaticAt && progress >= rules.symptomaticAt) {
    engine.log('log.ailment.infection.symptomatic', {}, 'bad');
  }
  if (infection.progress < rules.severeAt && progress >= rules.severeAt) {
    engine.log('log.ailment.infection.severe', {}, 'bad');
  }
  if (progress >= rules.severeAt) harm.add('infection', rules.healthPerHourSevere * hours);
  else if (progress >= rules.symptomaticAt) harm.add('infection', rules.healthPerHourSymptomatic * hours);
  if (progress >= rules.symptomaticAt) adjustVital(ctx, 'energy', -rules.energyPerHourSymptomatic * hours);
}

function tickSprain(ctx, sprain, hours) {
  const remaining = sprain.hours - hours;
  if (remaining <= 0) {
    ctx.store.commit('player/clearAilment', 'sprain');
    ctx.engine.log('log.ailment.sprain.healed', {}, 'good');
    return;
  }
  ctx.store.commit('player/setAilment', { id: 'sprain', data: { hours: remaining } });
}

/** Accumulates damage per cause so a death can be attributed to the worst one. */
function createHarmLedger() {
  const byCause = new Map();
  return {
    add(cause, amount) {
      byCause.set(cause, (byCause.get(cause) ?? 0) + amount);
    },
    total: () => [...byCause.values()].reduce((sum, amount) => sum + amount, 0),
    worstCause: () => [...byCause].sort((a, b) => b[1] - a[1])[0]?.[0],
    isEmpty: () => byCause.size === 0,
  };
}

function tickStatus(ctx, { hours, activity }) {
  const { store } = ctx;
  if (!store.state.player.alive) return;

  const profile = BALANCE.activities[activity] ?? BALANCE.activities.idle;
  const overloadDrain = activity === 'travel' && isOverloaded(store.state)
    ? BALANCE.inventory.overloadEnergyDrain
    : 1;

  for (const need of NEEDS) {
    let delta = profile[need] * hours;
    if (need === 'energy' && delta < 0) delta *= overloadDrain;
    adjustVital(ctx, need, delta);
  }

  const harm = createHarmLedger();
  for (const need of NEEDS) {
    if (store.state.player[need] <= 0) harm.add(DEPRIVATION_CAUSE[need], BALANCE.deprivationDamage[need] * hours);
  }

  const { ailments } = store.state.player;
  if (ailments.bleeding) tickBleeding(ctx, ailments.bleeding, hours, harm);
  if (ailments.infection) tickInfection(ctx, ailments.infection, hours, harm);
  if (ailments.sprain) tickSprain(ctx, ailments.sprain, hours);

  if (harm.isEmpty() && canRegenerate(store.state.player)) {
    let rate = activity === 'rest' ? BALANCE.regeneration.rest : BALANCE.regeneration.idle;
    if (store.state.player.trait === 'fast_metabolism') rate *= 1.25;
    adjustVital(ctx, 'health', rate * hours);
  }
  if (!harm.isEmpty()) inflictDamage(ctx, harm.total(), harm.worstCause());
}

function registerStatusEffects(ctx) {
  const { effects, store, rng, engine } = ctx;

  effects.register('vital', ({ vital, amount }) => {
    const applied = adjustVital(ctx, vital, amount);
    if (Math.round(applied) === 0) return;
    const key = applied > 0 ? 'log.effect.vital_up' : 'log.effect.vital_down';
    engine.log(key, { vital: ref(`status.vital.${vital}`), amount: Math.abs(Math.round(applied)) });
  });

  effects.register('heal', ({ amount }) => {
    const healed = adjustVital(ctx, 'health', rollRange(rng, amount) * skillMultiplier(store.state, 'medical'));
    engine.log('log.effect.healed', { amount: Math.round(healed) }, 'good');
  });

  effects.register('damage', ({ amount, cause = 'wounds' }) => {
    const raw = rollRange(rng, amount) * incomingDamageMultiplier(store.state);
    const dealt = inflictDamage(ctx, Math.max(1, Math.round(raw)), cause);
    if (store.state.player.alive) engine.log('log.effect.damaged', { amount: Math.round(dealt) }, 'bad');
  });

  effects.register('ailment', ({ id, severity = 1 }) => {
    const current = store.state.player.ailments[id];
    const rules = AILMENTS[id];
    let data;
    if (id === 'bleeding') {
      data = { severity: Math.min(rules.maxSeverity, (current?.severity ?? 0) + severity) };
    } else if (id === 'infection') {
      data = { progress: Math.min(100, (current?.progress ?? 0) + rules.initial.progress) };
    } else {
      data = { ...rules.initial };
    }
    store.commit('player/setAilment', { id, data });
    engine.log(current ? `log.ailment.${id}.worse` : `log.ailment.${id}.gained`, {}, 'bad');
  });

  effects.register('cure', ({ id, amount }) => {
    const current = store.state.player.ailments[id];
    if (!current) return;
    const field = Object.keys(AILMENTS[id].initial)[0];
    const remaining = amount == null ? 0 : current[field] - amount * skillMultiplier(store.state, 'medical');
    if (remaining <= 0) {
      store.commit('player/clearAilment', id);
      engine.log(`log.ailment.${id}.cured`, {}, 'good');
    } else {
      store.commit('player/setAilment', { id, data: { [field]: remaining } });
      engine.log(`log.ailment.${id}.treated`, {}, 'good');
    }
  });
}

export const statusModule = {
  id: 'player',
  createState: createPlayer,

  install(ctx) {
    const { store, bus, engine } = ctx;

    store.registerMutations('player', {
      changeVital(state, { vital, delta }) {
        const before = state.player[vital];
        state.player[vital] = clampVital(before + delta);
        return state.player[vital] - before;
      },
      setAilment(state, { id, data }) {
        state.player.ailments[id] = data;
      },
      clearAilment(state, id) {
        delete state.player.ailments[id];
      },
      setProfile(state, { name, age, bloodType, trait, archetype }) {
        if (name !== undefined) state.player.name = name;
        if (age !== undefined) state.player.age = age;
        if (bloodType !== undefined) state.player.bloodType = bloodType;
        if (trait !== undefined) state.player.trait = trait;
        if (archetype !== undefined) state.player.archetype = archetype;
      },
      die(state, { cause }) {
        state.player.alive = false;
        state.player.health = 0;
        state.player.causeOfDeath = cause;
        state.player.diedAt = state.time.minutes;
      },
    });

    engine.addGuard((type, options, state) => (state.player.alive ? null : 'reject.dead'));
    bus.on('time:tick', (tick) => tickStatus(ctx, tick));
    registerStatusEffects(ctx);
  },
};

