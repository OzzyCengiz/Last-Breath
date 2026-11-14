import { ref, t } from '../../i18n/i18n.js';
import { audioEngine } from '../../core/audioEngine.js';
import {
  SKILL_IDS,
  SKILL_PERKS,
  levelForXp,
  getPlayerLevelProgress,
  canUnlockPerk,
} from './skillSelectors.js';

export const skillsModule = {
  id: 'skills',

  createState() {
    return Object.fromEntries(SKILL_IDS.map((skillId) => [skillId, { xp: 0 }]));
  },

  install({ store, effects, engine }) {
    store.registerMutations('skills', {
      addXp(state, { skill, amount }) {
        if (!state.skills[skill]) {
          state.skills[skill] = { xp: 0 };
        }
        state.skills[skill].xp += amount;
      },

      addPlayerXp(state, { amount }) {
        if (!state.player) return { leveledUp: false };
        state.player.xp = (state.player.xp || 0) + amount;
        const currentLevel = state.player.level || 1;
        const info = getPlayerLevelProgress(state.player.xp);

        if (info.level > currentLevel) {
          const diff = info.level - currentLevel;
          state.player.level = info.level;
          state.player.skillPoints = (state.player.skillPoints || 0) + diff;
          return {
            leveledUp: true,
            oldLevel: currentLevel,
            newLevel: info.level,
            pointsGained: diff,
          };
        }
        return { leveledUp: false, level: currentLevel };
      },

      unlockPerk(state, { perkId }) {
        const perk = SKILL_PERKS[perkId];
        if (!perk) return { ok: false, reason: 'unknown_perk' };
        state.player.unlockedPerks = state.player.unlockedPerks || [];
        state.player.skillPoints = Math.max(0, (state.player.skillPoints || 0) - (perk.cost || 1));
        if (!state.player.unlockedPerks.includes(perkId)) {
          state.player.unlockedPerks.push(perkId);
        }
        return { ok: true, perkId };
      },
    });

    engine.registerAction('skills/unlockPerk', ({ perkId }) => {
      const check = canUnlockPerk(store.state, perkId);
      if (!check.canUnlock) {
        return { ok: false, reason: check.reason };
      }
      const perk = SKILL_PERKS[perkId];
      store.commit('skills/unlockPerk', { perkId });
      audioEngine.playAchievementChime();
      engine.log('log.skill_tree.unlocked', { perk: ref(perk.nameKey) }, 'good');
      engine.bus.emit('skills:perk_unlocked', { perkId, perk });
      return { ok: true, perkId };
    });

    effects.register('xp', ({ skill, amount }) => {
      const before = levelForXp(store.state.skills[skill]?.xp ?? 0);
      store.commit('skills/addXp', { skill, amount });
      const after = levelForXp(store.state.skills[skill]?.xp ?? 0);
      if (after > before) {
        engine.log('log.skill.level_up', { skill: ref(`skill.${skill}.name`), level: after }, 'good');
      }

      // Also award survivor player XP whenever any skill XP is gained
      const lvlRes = store.commit('skills/addPlayerXp', { amount });
      if (lvlRes?.leveledUp) {
        audioEngine.playAchievementChime();
        engine.log('log.skill_tree.level_up', { level: lvlRes.newLevel, points: lvlRes.pointsGained }, 'good');
        engine.bus.emit('player:level_up', lvlRes);
      }
    });

    effects.register('player_xp', ({ amount }) => {
      const lvlRes = store.commit('skills/addPlayerXp', { amount });
      if (lvlRes?.leveledUp) {
        audioEngine.playAchievementChime();
        engine.log('log.skill_tree.level_up', { level: lvlRes.newLevel, points: lvlRes.pointsGained }, 'good');
        engine.bus.emit('player:level_up', lvlRes);
      }
    });
  },
};
