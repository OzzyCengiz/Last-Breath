import { RECIPES, getRecipe } from '../../data/recipes.js';
import { activeWorkbenchTier, canAffordCost } from '../base/index.js';
import { grantItems } from '../inventory/index.js';
import { ref } from '../../i18n/i18n.js';

export function canCraftRecipe(state, recipeId) {
  const recipe = getRecipe(recipeId);
  if (activeWorkbenchTier(state) < recipe.tier) return { ok: false, reason: 'reject.workbench_tier' };
  if (!canAffordCost(state, recipe.ingredients)) return { ok: false, reason: 'reject.missing_materials' };
  return { ok: true };
}

export const craftingModule = {
  id: 'crafting',

  createState() {
    return {
      unlockedRecipes: Object.keys(RECIPES),
      craftedCount: 0,
    };
  },

  install(ctx) {
    const { store, engine, effects } = ctx;

    store.registerMutations('crafting', {
      unlockRecipe(state, recipeId) {
        if (!state.crafting.unlockedRecipes.includes(recipeId)) {
          state.crafting.unlockedRecipes.push(recipeId);
        }
      },
      recordCraft(state) {
        state.crafting.craftedCount = (state.crafting.craftedCount ?? 0) + 1;
      },
    });

    engine.registerAction('crafting/craft', ({ recipeId }) => {
      const recipe = getRecipe(recipeId);
      const check = canCraftRecipe(store.state, recipeId);
      if (!check.ok) return check;

      for (const { itemId, qty } of recipe.ingredients) {
        store.commit('inventory/remove', { itemId, qty });
      }
      store.commit('crafting/recordCraft');

      const { itemId, qty } = recipe.output;
      engine.log('log.crafting.crafted', {
        item: ref(`item.${itemId}.name`),
        count: qty,
      }, 'good');
      grantItems(ctx, itemId, qty);

      if (recipe.xp) {
        effects.apply([{ type: 'xp', skill: recipe.xp.skill, amount: recipe.xp.amount }], ctx);
      }
      engine.advanceTime(recipe.minutes, 'idle');
      return { ok: true };
    });
  },
};
