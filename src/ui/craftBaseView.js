import { getItem } from '../data/items.js';
import { RECIPES } from '../data/recipes.js';
import { STRUCTURES } from '../data/structures.js';
import { t } from '../i18n/i18n.js';
import { activeWorkbenchTier, canAffordCost, isAtOutpost } from '../modules/base/index.js';
import { canCraftRecipe } from '../modules/crafting/index.js';
import { countItem } from '../modules/inventory/inventoryModel.js';
import { el } from './dom.js';

export class CraftBaseView {
  #root;
  #engine;

  constructor(root, engine) {
    this.#root = root;
    this.#engine = engine;
  }

  render(state) {
    this.#root.replaceChildren(
      this.#renderCraftingSection(state),
      this.#renderOutpostSection(state),
      this.#renderLockerSection(state),
    );
  }

  #renderCraftingSection(state) {
    const stationTier = activeWorkbenchTier(state);
    const rows = Object.entries(RECIPES).map(([recipeId, recipe]) => {
      const outItem = getItem(recipe.output.itemId);
      const check = canCraftRecipe(state, recipeId);
      const ingredients = recipe.ingredients.map(({ itemId, qty }) => {
        const have = countItem(state.inventory, itemId);
        const enough = have >= qty;
        return el(
          'span',
          { class: ['ing-pill', enough ? 'tone-good' : 'tone-bad'] },
          `${t(`item.${itemId}.name`)} ${have}/${qty}`,
        );
      });

      return el(
        'li',
        { class: 'item-row' },
        el('span', { class: 'item-glyph' }, outItem.glyph),
        el(
          'div',
          { class: 'item-main' },
          el(
            'div',
            { class: 'item-title-line' },
            el('span', { class: 'item-name' }, t(`item.${recipe.output.itemId}.name`)),
            recipe.output.qty > 1 && el('span', { class: 'item-qty' }, `×${recipe.output.qty}`),
            el(
              'span',
              { class: ['route-mode-tag', stationTier < recipe.tier && 'tone-warn'] },
              t(`crafting.tier.${recipe.tier}`),
            ),
            el('span', { class: 'item-weight' }, `${recipe.minutes}m`),
          ),
          el('div', { class: 'ing-list' }, ingredients),
        ),
        el(
          'div',
          { class: 'item-actions' },
          el(
            'button',
            {
              type: 'button',
              class: ['btn', 'btn-accent', 'btn-xs', !check.ok && 'is-disabled'],
              disabled: !check.ok,
              onClick: () => this.#engine.dispatch('crafting/craft', { recipeId }),
            },
            t('crafting.action.craft'),
          ),
        ),
      );
    });

    return el(
      'section',
      { class: 'panel-block' },
      el(
        'div',
        { class: 'load-header' },
        el('h3', { class: 'block-title' }, t('crafting.section.recipes')),
        el('span', { class: 'meta-label' }, `${t('crafting.station')}: ${t(`crafting.tier.${stationTier}`)}`),
      ),
      el('ul', { class: 'item-list' }, rows),
    );
  }

  #renderOutpostSection(state) {
    const { outpostNodeId, integrity = 100, structures = {} } = state.base;
    const hereId = state.world.currentNodeId;
    const atOutpost = isAtOutpost(state);

    const headerInfo = outpostNodeId
      ? el(
        'div',
        { class: 'sector-header' },
        el(
          'div',
          {},
          el('span', { class: 'meta-label' }, t('base.location_label')),
          el('strong', { class: 'sector-title' }, t(`location.${outpostNodeId}`)),
        ),
        el(
          'div',
          {},
          el('span', { class: 'meta-label' }, t('base.integrity')),
          el('strong', { class: 'meta-val' }, `${Math.round(integrity)}%`),
        ),
      )
      : el('p', { class: 'muted-note' }, t('base.none_established'));

    const establishBtn = !atOutpost && el(
      'div',
      { class: 'ops-actions' },
      el(
        'button',
        {
          type: 'button',
          class: 'btn btn-accent',
          onClick: () => this.#engine.dispatch('base/establish'),
        },
        outpostNodeId
          ? t('base.action.relocate', { location: t(`location.${hereId}`) })
          : t('base.action.establish', { location: t(`location.${hereId}`) }),
      ),
    );

    if (!atOutpost) {
      return el(
        'section',
        { class: 'panel-block' },
        el('h3', { class: 'block-title' }, t('base.section.outpost')),
        headerInfo,
        establishBtn,
      );
    }

    const structureRows = Object.entries(STRUCTURES).map(([id, def]) => {
      const level = structures[id] ?? 0;
      const maxed = level >= def.maxLevel;
      const cost = maxed ? [] : def.costs[level];
      const affordable = !maxed && canAffordCost(state, cost);

      const costPills = cost.map(({ itemId, qty }) => {
        const have = countItem(state.inventory, itemId);
        return el(
          'span',
          { class: ['ing-pill', have >= qty ? 'tone-good' : 'tone-bad'] },
          `${t(`item.${itemId}.name`)} ${have}/${qty}`,
        );
      });

      return el(
        'li',
        { class: 'item-row' },
        el('span', { class: 'item-glyph' }, def.glyph),
        el(
          'div',
          { class: 'item-main' },
          el(
            'div',
            { class: 'item-title-line' },
            el('span', { class: 'item-name' }, t(`structure.${id}.name`)),
            el('span', { class: 'item-qty' }, `${t('skill.level_short', { level })} / ${def.maxLevel}`),
          ),
          el('p', { class: 'item-desc' }, t(`structure.${id}.desc`)),
          !maxed && el('div', { class: 'ing-list' }, costPills),
        ),
        el(
          'div',
          { class: 'item-actions' },
          el(
            'button',
            {
              type: 'button',
              class: ['btn', 'btn-xs', (!affordable || maxed) && 'is-disabled'],
              disabled: !affordable || maxed,
              onClick: () => this.#engine.dispatch('base/upgrade', { structureId: id }),
            },
            maxed ? t('skill.max_level') : t('base.action.upgrade'),
          ),
        ),
      );
    });

    return el(
      'section',
      { class: 'panel-block' },
      el('h3', { class: 'block-title' }, t('base.section.outpost')),
      headerInfo,
      integrity < 100 && el(
        'div',
        { class: 'ops-actions' },
        el(
          'button',
          {
            type: 'button',
            class: 'btn btn-xs',
            onClick: () => this.#engine.dispatch('base/repair'),
          },
          t('base.action.repair'),
        ),
      ),
      el('ul', { class: 'item-list' }, structureRows),
    );
  }

  #renderLockerSection(state) {
    if (!isAtOutpost(state)) return null;
    const storage = state.base.storage ?? [];
    const packStacks = state.inventory.stacks;

    const storedList = storage.length === 0
      ? el('p', { class: 'muted-note' }, t('base.storage_empty'))
      : el(
        'ul',
        { class: 'item-list' },
        storage.map(({ itemId, qty }) => {
          const item = getItem(itemId);
          return el(
            'li',
            { class: 'item-row' },
            el('span', { class: 'item-glyph' }, item.glyph),
            el(
              'div',
              { class: 'item-main' },
              el(
                'div',
                { class: 'item-title-line' },
                el('span', { class: 'item-name' }, t(`item.${itemId}.name`)),
                el('span', { class: 'item-qty' }, `×${qty}`),
              ),
            ),
            el(
              'div',
              { class: 'item-actions' },
              el(
                'button',
                {
                  type: 'button',
                  class: 'btn btn-xs',
                  onClick: () => this.#engine.dispatch('base/withdraw', { itemId, qty: 1 }),
                },
                t('inventory.action.take'),
              ),
            ),
          );
        }),
      );

    const stashQuickBtns = packStacks.map(({ itemId, qty }) =>
      el(
        'button',
        {
          type: 'button',
          class: 'btn btn-ghost btn-xs',
          onClick: () => this.#engine.dispatch('base/store', { itemId, qty: 1 }),
        },
        `+ ${t(`item.${itemId}.name`)} (${qty})`,
      ),
    );

    return el(
      'section',
      { class: 'panel-block' },
      el('h3', { class: 'block-title' }, t('base.section.storage')),
      storedList,
      packStacks.length > 0 && el(
        'div',
        { class: 'ops-actions' },
        ...stashQuickBtns,
      ),
    );
  }
}

