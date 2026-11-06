import { CATEGORIES, EQUIPMENT_SLOTS, getItem } from '../data/items.js';
import { i18n, t } from '../i18n/i18n.js';
import { groundHere, loadSummary } from '../modules/inventory/inventorySelectors.js';
import { getNode } from '../modules/map/mapGraph.js';
import { el } from './dom.js';

export class InventoryView {
  #root;
  #engine;
  #activeCategory = 'all';
  #lastState = null;

  constructor(root, engine) {
    this.#root = root;
    this.#engine = engine;
  }

  render(state) {
    this.#lastState = state;
    this.#root.replaceChildren(
      this.#renderLoadBar(state),
      this.#renderEquipment(state),
      this.#renderPackSection(state),
      this.#renderGroundSection(state),
    );
  }

  #renderLoadBar(state) {
    const summary = loadSummary(state);
    const weightPct = Math.min(100, Math.round((summary.weight / summary.capacityKg) * 100));
    const weightStr = `${i18n.formatNumber(summary.weight, 2)} / ${i18n.formatNumber(summary.capacityKg, 1)} kg`;
    const slotStr = `${summary.slotsUsed} / ${summary.slotsTotal}`;

    return el(
      'section',
      { class: ['panel-block', summary.overloaded && 'is-overloaded'] },
      el(
        'div',
        { class: 'load-header' },
        el(
          'div',
          {},
          el('span', { class: 'meta-label' }, t('inventory.weight')),
          el('strong', { class: 'meta-val' }, weightStr),
        ),
        el(
          'div',
          {},
          el('span', { class: 'meta-label' }, t('inventory.slots')),
          el('strong', { class: 'meta-val' }, slotStr),
        ),
      ),
      el(
        'div',
        { class: 'meter-track' },
        el('div', {
          class: ['meter-fill', summary.overloaded && 'fill-warn'],
          style: `width: ${weightPct}%`,
        }),
      ),
      summary.overloaded && el('p', { class: 'overload-warning' }, t('inventory.overloaded_notice')),
    );
  }

  #renderEquipment(state) {
    const slots = EQUIPMENT_SLOTS.map((slot) => {
      const itemId = state.inventory.equipment[slot];
      const item = itemId ? getItem(itemId) : null;
      return el(
        'div',
        { class: ['equip-slot', itemId && 'is-filled'] },
        el('span', { class: 'equip-slot-label' }, t(`inventory.slot.${slot}`)),
        item
          ? el(
            'div',
            { class: 'equip-slot-body' },
            el('span', { class: 'item-glyph' }, item.glyph),
            el('span', { class: 'equip-item-name' }, t(`item.${itemId}.name`)),
            el(
              'button',
              {
                type: 'button',
                class: 'btn btn-ghost btn-xs',
                onClick: () => this.#engine.dispatch('inventory/unequip', { slot }),
              },
              t('inventory.action.unequip'),
            ),
          )
          : el('span', { class: 'equip-empty' }, t('inventory.slot_empty')),
      );
    });

    return el(
      'section',
      { class: 'panel-block' },
      el('h3', { class: 'block-title' }, t('inventory.section.equipped')),
      el('div', { class: 'equip-grid' }, slots),
    );
  }

  #renderPackSection(state) {
    const tabs = ['all', ...CATEGORIES].map((cat) =>
      el(
        'button',
        {
          type: 'button',
          class: ['filter-chip', this.#activeCategory === cat && 'is-active'],
          onClick: () => {
            this.#activeCategory = cat;
            if (this.#lastState) this.render(this.#lastState);
          },
        },
        t(`inventory.category.${cat}`),
      ),
    );

    const visibleStacks = state.inventory.stacks.filter(({ itemId }) =>
      this.#activeCategory === 'all' ? true : getItem(itemId).category === this.#activeCategory,
    );

    const list = visibleStacks.length === 0
      ? el('p', { class: 'muted-note' }, t('inventory.empty'))
      : el(
        'ul',
        { class: 'item-list' },
        visibleStacks.map(({ itemId, qty }) => this.#renderItemRow(itemId, qty)),
      );

    return el(
      'section',
      { class: 'panel-block' },
      el('h3', { class: 'block-title' }, t('inventory.section.pack')),
      el('div', { class: 'filter-row' }, tabs),
      list,
    );
  }

  #renderItemRow(itemId, qty) {
    const item = getItem(itemId);
    const totalKg = i18n.formatNumber(item.weight * qty, 2);

    const actions = [];
    if (item.use) {
      actions.push(
        el(
          'button',
          {
            type: 'button',
            class: 'btn btn-accent btn-xs',
            onClick: () => this.#engine.dispatch('inventory/use', { itemId }),
          },
          t('inventory.action.use'),
        ),
      );
    }
    if (item.equip) {
      actions.push(
        el(
          'button',
          {
            type: 'button',
            class: 'btn btn-xs',
            onClick: () => this.#engine.dispatch('inventory/equip', { itemId }),
          },
          t('inventory.action.equip'),
        ),
      );
    }
    actions.push(
      el(
        'button',
        {
          type: 'button',
          class: 'btn btn-ghost btn-xs',
          onClick: () => this.#engine.dispatch('inventory/drop', { itemId, qty: 1 }),
        },
        t('inventory.action.drop'),
      ),
    );

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
          qty > 1 && el('span', { class: 'item-qty' }, `×${qty}`),
          el('span', { class: 'item-weight' }, `${totalKg} kg`),
        ),
        el('p', { class: 'item-desc' }, t(`item.${itemId}.desc`)),
      ),
      el('div', { class: 'item-actions' }, actions),
    );
  }

  #renderGroundSection(state) {
    const pile = groundHere(state);
    const node = getNode(state.world.currentNodeId);
    const body = pile.length === 0
      ? el('p', { class: 'muted-note' }, t('inventory.ground_empty'))
      : el(
        'ul',
        { class: 'item-list' },
        pile.map(({ itemId, qty }) => {
          const item = getItem(itemId);
          return el(
            'li',
            { class: 'item-row is-ground' },
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
                  onClick: () => this.#engine.dispatch('inventory/pickup', { itemId, qty: 1 }),
                },
                t('inventory.action.take'),
              ),
            ),
          );
        }),
      );

    return el(
      'section',
      { class: 'panel-block' },
      el(
        'h3',
        { class: 'block-title' },
        `${t('inventory.section.ground')} — ${t(`location.${node.id}`)}`,
      ),
      body,
    );
  }
}

