import { SKILLS, SKILL_RULES } from '../../data/skills.js';
import {
  SKILL_PERKS,
  SKILL_BRANCHES,
  MAX_PLAYER_LEVEL,
  xpForPlayerLevel,
  getPlayerLevelProgress,
  canUnlockPerk,
  getUnlockedPerkBonus,
  isPerkUnlocked,
} from '../../data/skillTree.js';

export {
  SKILL_PERKS,
  SKILL_BRANCHES,
  MAX_PLAYER_LEVEL,
  xpForPlayerLevel,
  getPlayerLevelProgress,
  canUnlockPerk,
  getUnlockedPerkBonus,
  isPerkUnlocked,
};

export const SKILL_IDS = Object.keys(SKILLS);

export function levelForXp(xp) {
  return Math.min(SKILL_RULES.maxLevel, Math.floor(Math.sqrt(xp / SKILL_RULES.xpPerLevelSquared)));
}

export function xpForLevel(level) {
  return SKILL_RULES.xpPerLevelSquared * level * level;
}

export function skillLevel(state, skillId) {
  return levelForXp(state.skills?.[skillId]?.xp ?? 0);
}

/** 1.0 at level 0, growing by the skill's `bonusPerLevel` per level. */
export function skillMultiplier(state, skillId) {
  return 1 + skillLevel(state, skillId) * SKILLS[skillId].bonusPerLevel;
}

export function skillProgress(state, skillId) {
  const xp = state.skills?.[skillId]?.xp ?? 0;
  const level = levelForXp(xp);
  if (level >= SKILL_RULES.maxLevel) return { level, xp, ratio: 1, next: null };
  const floor = xpForLevel(level);
  const next = xpForLevel(level + 1);
  return { level, xp, next, ratio: (xp - floor) / (next - floor) };
}

// Survivor Player Level Selectors
export function playerLevel(state) {
  return state.player?.level ?? 1;
}

export function playerXp(state) {
  return state.player?.xp ?? 0;
}

export function playerSkillPoints(state) {
  return state.player?.skillPoints ?? 0;
}

export function playerUnlockedPerks(state) {
  return state.player?.unlockedPerks ?? [];
}

export function playerLevelInfo(state) {
  return getPlayerLevelProgress(state.player?.xp ?? 0);
}
