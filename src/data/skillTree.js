/**
 * Skill Tree (Yetenek Ağacı) definitions and progression logic.
 * Connects directly to the Survivor's overall Player Level & Skill Points.
 */

export const SKILL_BRANCHES = {
  survival: {
    id: 'survival',
    glyph: '♣',
    nameKey: 'skill_tree.branch.survival',
    color: '#84cc16',
  },
  combat: {
    id: 'combat',
    glyph: '⊹',
    nameKey: 'skill_tree.branch.combat',
    color: '#ef4444',
  },
  medical: {
    id: 'medical',
    glyph: '✚',
    nameKey: 'skill_tree.branch.medical',
    color: '#38bdf8',
  },
  engineering: {
    id: 'engineering',
    glyph: '⚙',
    nameKey: 'skill_tree.branch.engineering',
    color: '#f59e0b',
  },
};

export const SKILL_PERKS = {
  // === SURVIVAL & EXPLORATION ===
  scavenger_eye: {
    id: 'scavenger_eye',
    branch: 'survival',
    tier: 1,
    minLevel: 1,
    requires: null,
    cost: 1,
    glyph: '🔍',
    nameKey: 'skill_tree.perk.scavenger_eye.name',
    descKey: 'skill_tree.perk.scavenger_eye.desc',
    bonuses: { scavengeBonus: 0.15 },
  },
  pack_mule: {
    id: 'pack_mule',
    branch: 'survival',
    tier: 2,
    minLevel: 2,
    requires: 'scavenger_eye',
    cost: 1,
    glyph: '🎒',
    nameKey: 'skill_tree.perk.pack_mule.name',
    descKey: 'skill_tree.perk.pack_mule.desc',
    bonuses: { extraKg: 5, extraSlots: 2 },
  },
  swift_scout: {
    id: 'swift_scout',
    branch: 'survival',
    tier: 3,
    minLevel: 4,
    requires: 'pack_mule',
    cost: 1,
    glyph: '🏃',
    nameKey: 'skill_tree.perk.swift_scout.name',
    descKey: 'skill_tree.perk.swift_scout.desc',
    bonuses: { travelSpeed: 0.20, travelEnergyEfficiency: 0.20 },
  },
  master_forager: {
    id: 'master_forager',
    branch: 'survival',
    tier: 4,
    minLevel: 6,
    requires: 'swift_scout',
    cost: 1,
    glyph: '👑',
    nameKey: 'skill_tree.perk.master_forager.name',
    descKey: 'skill_tree.perk.master_forager.desc',
    bonuses: { scavengeBonus: 0.25, rareLootMultiplier: 1.5 },
  },

  // === COMBAT & TACTICS ===
  quick_reflexes: {
    id: 'quick_reflexes',
    branch: 'combat',
    tier: 1,
    minLevel: 1,
    requires: null,
    cost: 1,
    glyph: '⚡',
    nameKey: 'skill_tree.perk.quick_reflexes.name',
    descKey: 'skill_tree.perk.quick_reflexes.desc',
    bonuses: { dodgeChance: 0.12 },
  },
  stopping_power: {
    id: 'stopping_power',
    branch: 'combat',
    tier: 2,
    minLevel: 2,
    requires: 'quick_reflexes',
    cost: 1,
    glyph: '💥',
    nameKey: 'skill_tree.perk.stopping_power.name',
    descKey: 'skill_tree.perk.stopping_power.desc',
    bonuses: { combatDamage: 0.25 },
  },
  iron_skin: {
    id: 'iron_skin',
    branch: 'combat',
    tier: 3,
    minLevel: 4,
    requires: 'stopping_power',
    cost: 1,
    glyph: '🛡️',
    nameKey: 'skill_tree.perk.iron_skin.name',
    descKey: 'skill_tree.perk.iron_skin.desc',
    bonuses: { damageReduction: 0.15, bleedResistance: 0.25 },
  },
  deadly_precision: {
    id: 'deadly_precision',
    branch: 'combat',
    tier: 4,
    minLevel: 6,
    requires: 'iron_skin',
    cost: 1,
    glyph: '🎯',
    nameKey: 'skill_tree.perk.deadly_precision.name',
    descKey: 'skill_tree.perk.deadly_precision.desc',
    bonuses: { critChance: 0.20, critMultiplier: 0.5 },
  },

  // === MEDICINE & BIOLOGY ===
  first_aid_instinct: {
    id: 'first_aid_instinct',
    branch: 'medical',
    tier: 1,
    minLevel: 1,
    requires: null,
    cost: 1,
    glyph: '🩹',
    nameKey: 'skill_tree.perk.first_aid_instinct.name',
    descKey: 'skill_tree.perk.first_aid_instinct.desc',
    bonuses: { medicalEfficiency: 0.30 },
  },
  triage_master: {
    id: 'triage_master',
    branch: 'medical',
    tier: 2,
    minLevel: 2,
    requires: 'first_aid_instinct',
    cost: 1,
    glyph: '💉',
    nameKey: 'skill_tree.perk.triage_master.name',
    descKey: 'skill_tree.perk.triage_master.desc',
    bonuses: { bleedStopBonus: 0.40, infectionResistance: 0.40 },
  },
  tough_metabolism: {
    id: 'tough_metabolism',
    branch: 'medical',
    tier: 3,
    minLevel: 4,
    requires: 'triage_master',
    cost: 1,
    glyph: '🧬',
    nameKey: 'skill_tree.perk.tough_metabolism.name',
    descKey: 'skill_tree.perk.tough_metabolism.desc',
    bonuses: { hungerRateReduction: 0.25, thirstRateReduction: 0.25 },
  },
  field_surgeon: {
    id: 'field_surgeon',
    branch: 'medical',
    tier: 4,
    minLevel: 6,
    requires: 'tough_metabolism',
    cost: 1,
    glyph: '🩺',
    nameKey: 'skill_tree.perk.field_surgeon.name',
    descKey: 'skill_tree.perk.field_surgeon.desc',
    bonuses: { naturalHealingRate: 2.0 },
  },

  // === ENGINEERING & MECHANICS ===
  tinkerer: {
    id: 'tinkerer',
    branch: 'engineering',
    tier: 1,
    minLevel: 1,
    requires: null,
    cost: 1,
    glyph: '🔧',
    nameKey: 'skill_tree.perk.tinkerer.name',
    descKey: 'skill_tree.perk.tinkerer.desc',
    bonuses: { repairScrapEfficiency: 0.25 },
  },
  grease_monkey: {
    id: 'grease_monkey',
    branch: 'engineering',
    tier: 2,
    minLevel: 2,
    requires: 'tinkerer',
    cost: 1,
    glyph: '🛢️',
    nameKey: 'skill_tree.perk.grease_monkey.name',
    descKey: 'skill_tree.perk.grease_monkey.desc',
    bonuses: { fuelEfficiency: 0.20, breakdownResistance: 0.50 },
  },
  resourceful_crafter: {
    id: 'resourceful_crafter',
    branch: 'engineering',
    tier: 3,
    minLevel: 4,
    requires: 'grease_monkey',
    cost: 1,
    glyph: '💡',
    nameKey: 'skill_tree.perk.resourceful_crafter.name',
    descKey: 'skill_tree.perk.resourceful_crafter.desc',
    bonuses: { scrapRefundChance: 0.20 },
  },
  base_architect: {
    id: 'base_architect',
    branch: 'engineering',
    tier: 4,
    minLevel: 6,
    requires: 'resourceful_crafter',
    cost: 1,
    glyph: '🏗️',
    nameKey: 'skill_tree.perk.base_architect.name',
    descKey: 'skill_tree.perk.base_architect.desc',
    bonuses: { baseStructureDiscount: 0.20, generatorFuelEfficiency: 0.35 },
  },
};

export const MAX_PLAYER_LEVEL = 25;

/** Cumulative XP required to reach a specific player level (1-indexed). Level 1 = 0 XP. */
export function xpForPlayerLevel(targetLevel) {
  if (targetLevel <= 1) return 0;
  let total = 0;
  for (let lvl = 1; lvl < targetLevel; lvl++) {
    // Level 1->2: 80 XP, 2->3: 110 XP, 3->4: 140 XP...
    total += 50 + lvl * 30;
  }
  return total;
}

/** Given total accumulated player XP, returns { level, currentLvlXp, nextLvlXp, ratio }. */
export function getPlayerLevelProgress(xp = 0) {
  let level = 1;
  while (level < MAX_PLAYER_LEVEL && xp >= xpForPlayerLevel(level + 1)) {
    level += 1;
  }
  const floorXp = xpForPlayerLevel(level);
  const nextXp = level < MAX_PLAYER_LEVEL ? xpForPlayerLevel(level + 1) : null;
  const ratio = nextXp !== null ? Math.min(1, Math.max(0, (xp - floorXp) / (nextXp - floorXp))) : 1;

  return {
    level,
    xp,
    floorXp,
    nextXp,
    currentLvlXp: xp - floorXp,
    neededForNext: nextXp !== null ? nextXp - floorXp : 0,
    ratio,
    isMax: level >= MAX_PLAYER_LEVEL,
  };
}

/** Returns whether a player meets all requirements to unlock a perk. */
export function canUnlockPerk(state, perkId) {
  const perk = SKILL_PERKS[perkId];
  if (!perk) return { canUnlock: false, reason: 'unknown_perk' };

  const player = state.player || {};
  const unlocked = new Set(player.unlockedPerks || []);

  if (unlocked.has(perkId)) {
    return { canUnlock: false, reason: 'already_unlocked' };
  }

  const { level } = getPlayerLevelProgress(player.xp ?? 0);
  if (level < perk.minLevel) {
    return { canUnlock: false, reason: 'level_too_low', minLevel: perk.minLevel };
  }

  if (perk.requires && !unlocked.has(perk.requires)) {
    return { canUnlock: false, reason: 'missing_prerequisite', requires: perk.requires };
  }

  const sp = player.skillPoints ?? 0;
  if (sp < perk.cost) {
    return { canUnlock: false, reason: 'no_skill_points', cost: perk.cost };
  }

  return { canUnlock: true };
}

/** Returns active bonus sum across all unlocked perks. */
export function getUnlockedPerkBonus(state, bonusKey) {
  const unlocked = state.player?.unlockedPerks || [];
  let sum = 0;
  for (const perkId of unlocked) {
    const perk = SKILL_PERKS[perkId];
    if (perk?.bonuses?.[bonusKey]) {
      sum += perk.bonuses[bonusKey];
    }
  }
  return sum;
}

/** Checks if a perk is unlocked in player state. */
export function isPerkUnlocked(state, perkId) {
  return (state.player?.unlockedPerks || []).includes(perkId);
}

