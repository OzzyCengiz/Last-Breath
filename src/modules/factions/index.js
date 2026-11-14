/**
 * Last Breath // Factions Core Engine Module
 */

import { FactionManager } from './factionManager.js';
import { neighborsOf } from '../map/mapGraph.js';
import { grantItems } from '../inventory/index.js';
import { codexManager } from '../../core/codexManager.js';
import { ref } from '../../i18n/i18n.js';

export const factionModule = {
  id: 'factions',

  createState() {
    return {
      ...FactionManager.getInitialState(),
      activeContract: null,
      completedContracts: 0,
    };
  },

  install(ctx) {
    const { store, engine, bus, effects, rng } = ctx;

    store.registerMutations('factions', {
      setStanding(state, { factionId, standing }) {
        if (!state.factions) state.factions = FactionManager.getInitialState();
        state.factions.standings[factionId] = Math.max(-100, Math.min(100, standing));
      },
      adjustStanding(state, { factionId, delta, reason = '' }) {
        return FactionManager.adjustStanding(state, factionId, delta, reason, { bus });
      },
      setContract(state, contract) {
        if (!state.factions) state.factions = FactionManager.getInitialState();
        state.factions.activeContract = contract;
      },
      advanceContract(state, amount = 1) {
        if (state.factions?.activeContract) {
          state.factions.activeContract.progress = Math.min(
            state.factions.activeContract.targetCount,
            (state.factions.activeContract.progress ?? 0) + amount,
          );
        }
      },
      completeContract(state) {
        if (!state.factions) return;
        state.factions.activeContract = null;
        state.factions.completedContracts = (state.factions.completedContracts ?? 0) + 1;
      },
      resetFactions(state) {
        state.factions = {
          ...FactionManager.getInitialState(),
          activeContract: null,
          completedContracts: 0,
        };
      },
    });

    const tryAdvanceContract = (type, matchFn = () => true) => {
      const contract = store.state.factions?.activeContract;
      if (!contract || contract.type !== type || !matchFn(contract)) return;
      store.commit('factions/advanceContract', 1);
      if (store.state.factions.activeContract.progress >= contract.targetCount) {
        store.commit('factions/completeContract');
        store.commit('factions/adjustStanding', {
          factionId: contract.factionId,
          delta: contract.rewardRep,
          reason: 'contract_completed',
        });
        effects.apply([{ type: 'xp', skill: 'foraging', amount: contract.rewardXp }], ctx);
        grantItems(ctx, contract.rewardItemId, contract.rewardQty);
        codexManager.unlockAchievement('contract_runner');
        engine.log('log.faction.contract_completed', {
          faction: ref(`faction.${contract.factionId}.name`),
          rep: contract.rewardRep,
          xp: contract.rewardXp,
        }, 'good');
        bus.emit('factions:contract_completed', contract);
      }
    };

    bus.on('combat:victory', () => tryAdvanceContract('hunt'));
    bus.on('map:scavenged', () => tryAdvanceContract('scavenge'));
    bus.on('travel:journey', ({ toId }) => tryAdvanceContract('scout', (c) => c.targetNodeId === toId));

    engine.registerAction('factions/acceptContract', () => {
      if (store.state.factions?.activeContract) {
        return { ok: false, reason: 'reject.contract_active' };
      }
      const currentNodeId = store.state.world.currentNodeId;
      const neighbors = neighborsOf(currentNodeId);
      const types = neighbors.length > 0 ? ['hunt', 'scavenge', 'scout'] : ['hunt', 'scavenge'];
      const type = rng ? rng.pick(types) : types[0];
      const factionId = type === 'hunt' ? 'iron_guard' : 'nomad_guild';

      let contract;
      if (type === 'hunt') {
        contract = {
          type: 'hunt',
          factionId,
          targetCount: 2,
          progress: 0,
          rewardRep: 18,
          rewardXp: 45,
          rewardItemId: 'first_aid_kit',
          rewardQty: 1,
        };
      } else if (type === 'scout') {
        const edge = rng ? rng.pick(neighbors) : neighbors[0];
        contract = {
          type: 'scout',
          factionId,
          targetNodeId: edge.to,
          targetCount: 1,
          progress: 0,
          rewardRep: 15,
          rewardXp: 40,
          rewardItemId: 'mre',
          rewardQty: 2,
        };
      } else {
        contract = {
          type: 'scavenge',
          factionId,
          targetCount: 2,
          progress: 0,
          rewardRep: 15,
          rewardXp: 35,
          rewardItemId: 'scrap_metal',
          rewardQty: 3,
        };
      }

      store.commit('factions/setContract', contract);
      engine.log('log.faction.contract_accepted', {
        faction: ref(`faction.${factionId}.name`),
      }, 'good');
      return { ok: true, contract };
    });

    engine.registerAction('factions/abandonContract', () => {
      if (!store.state.factions?.activeContract) return { ok: false };
      store.commit('factions/setContract', null);
      engine.log('log.faction.contract_abandoned', {}, 'warn');
      return { ok: true };
    });

    engine.registerAction('factions/adjust', ({ factionId, delta, reason }, { store }) => {
      const result = store.commit('factions/adjustStanding', { factionId, delta, reason });
      return { ok: true, result };
    });

    effects.register('reputation', ({ factionId, delta, reason = 'field_action' }) => {
      store.commit('factions/adjustStanding', { factionId, delta, reason });
    });
  },
};

export { FactionManager };
