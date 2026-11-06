/**
 * Ailment rules. Runtime instances live in `player.ailments[id]` and carry a
 * single magnitude field: `severity` (bleeding), `progress` (infection) or
 * `hours` remaining (sprain).
 */
export const AILMENTS = {
  bleeding: {
    glyph: '♦',
    tone: 'bad',
    initial: { severity: 1 },
    maxSeverity: 3,
    healthPerHourPerSeverity: 2.5,
    stopChancePerHour: 0.12,
    infectionChancePerHour: 0.04,
  },
  infection: {
    glyph: '☣',
    tone: 'bad',
    initial: { progress: 10 },
    growthPerHour: 1.2,
    recoveryPerHour: 1,
    recoveryBelow: 25,
    symptomaticAt: 35,
    severeAt: 80,
    healthPerHourSymptomatic: 1.5,
    healthPerHourSevere: 5,
    energyPerHourSymptomatic: 1.5,
  },
  sprain: {
    glyph: '⌇',
    tone: 'warn',
    initial: { hours: 30 },
    travelTimeMultiplier: 1.3,
  },
};

