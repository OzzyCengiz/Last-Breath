/**
 * Tunable numbers in one place. Rates are per in-game hour unless noted.
 */
export const BALANCE = Object.freeze({
  vitals: {
    max: 100,
    start: { health: 100, satiety: 70, hydration: 65, energy: 85 },
    bands: { fine: 60, low: 30, critical: 1 },
  },

  /** Per-hour vital drift by what the player is doing. */
  activities: {
    idle:     { satiety: -2.5, hydration: -3.5, energy: -2 },
    travel:   { satiety: -3.5, hydration: -5,   energy: -4.5 },
    scavenge: { satiety: -3,   hydration: -4.5, energy: -4 },
    rest:     { satiety: -1.5, hydration: -2.5, energy: 9 },
  },

  deprivationDamage: { satiety: 3.5, hydration: 6, energy: 1.5 },

  regeneration: {
    requires: { satiety: 50, hydration: 50 },
    idle: 0.6,
    rest: 2.5,
  },

  inventory: {
    baseCapacityKg: 16,
    baseSlots: 10,
    hardLimitRatio: 1.5,
    overloadTravelPenalty: 1.3,
    overloadEnergyDrain: 1.35,
    armorDamageReduction: 0.08,
  },

  travel: {
    baseHours: 1.5,
    kmPerHour: 80,
    seaTimeMultiplier: 1.25,
    segmentMinutes: 8 * 60,
    roundToMinutes: 15,
    exhaustedThreshold: 20,
    exhaustedTimeMultiplier: 1.35,
    nightRiskMultiplier: 1.35,
    seaRiskBonus: 0.1,
    maxEncounterChance: 0.85,
  },

  scavenge: {
    minutes: [60, 90],
    findChance: 0.72,
    depletionPerSearch: 0.2,
    depletionRecoveryPerHour: 0.002,
    nightPenalty: 0.2,
    hazardChancePerDanger: 0.05,
  },

  survey: { minutes: 45, twoHopRumorChance: 0.35 },

  rest: { options: [1, 4, 8], ambushChancePerDanger: 0.018 },

  checks: { minChance: 0.05, maxChance: 0.95, combatPerRating: 0.06 },

  startingNode: 'istanbul',
  startingKit: [
    { itemId: 'bottled_water', qty: 2 },
    { itemId: 'canned_beans', qty: 1 },
    { itemId: 'bandage', qty: 1 },
    { itemId: 'cloth_rags', qty: 2 },
  ],
  startingEquipment: { weapon: 'kitchen_knife', body: null, pack: null },
});

