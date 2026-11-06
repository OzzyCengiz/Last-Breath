import { getItem } from '../data/items.js';
import { i18n, t } from '../i18n/i18n.js';
import { loadSummary } from '../modules/inventory/inventorySelectors.js';
import { el } from './dom.js';

export class LootModalView {
  #root;
  #engine;
  #current = null;
  #selectedMap = new Map(); // index -> boolean

  constructor(root, engine) {
    this.#root = root;
    this.#engine = engine;
  }

  get isOpen() {
    return !this.#root.hidden;
  }

  open({ type, titleKey, descKey, descParams = {}, items = [], nodeId, onConfirm }) {
    this.#current = {
      type,
      titleKey,
      descKey,
      descParams,
      items,
      nodeId,
      onConfirm,
    };
    this.#selectedMap.clear();
    // Default: select all discovered items
    items.forEach((_, idx) => this.#selectedMap.set(idx, true));
    this.#root.hidden = false;
    this.render();
  }

  close() {
    this.#root.hidden = true;
    this.#current = null;
    this.#selectedMap.clear();
  }

  render() {
    if (this.#root.hidden || !this.#current) return;

    const { titleKey, descKey, descParams, items, onConfirm } = this.#current;
    const state = this.#engine.store.state;
    const summary = loadSummary(state);

    const hasItems = items.length > 0;

    // Calculate selected weight
    let selectedWeight = 0;
    let selectedCount = 0;
    items.forEach((item, idx) => {
      if (this.#selectedMap.get(idx)) {
        const itemDef = getItem(item.itemId);
        selectedWeight += itemDef.weight * item.qty;
        selectedCount += 1;
      }
    });

    const projectedWeight = summary.weight + selectedWeight;
    const isOverload = projectedWeight > summary.capacityKg;

    // Header
    const kickerText = t(titleKey);
    const descText = t(descKey, descParams);

    // Items list
    const itemRows = items.map((item, idx) => {
      const def = getItem(item.itemId);
      const isSelected = Boolean(this.#selectedMap.get(idx));
      const totalItemWeight = i18n.formatNumber(def.weight * item.qty, 2);

      return el(
        'div',
        {
          class: ['loot-item-row', isSelected && 'is-selected'],
          onClick: () => {
            this.#selectedMap.set(idx, !isSelected);
            this.render();
          },
        },
        el(
          'div',
          { class: 'loot-item-check-col' },
          el('input', {
            type: 'checkbox',
            class: 'loot-item-checkbox',
            checked: isSelected,
            onChange: (e) => {
              this.#selectedMap.set(idx, e.target.checked);
              this.render();
            },
          }),
        ),
        el('span', { class: 'item-glyph' }, def.glyph),
        el(
          'div',
          { class: 'loot-item-details' },
          el(
            'div',
            { class: 'loot-item-title-line' },
            el('strong', { class: 'loot-item-name' }, t(`item.${item.itemId}.name`)),
            el('span', { class: 'loot-item-qty' }, `×${item.qty}`),
          ),
          el('span', { class: 'loot-item-weight' }, `${totalItemWeight} kg`),
        ),
        el(
          'button',
          {
            type: 'button',
            class: ['btn', 'btn-xs', isSelected ? 'btn-accent' : 'btn-ghost'],
          },
          isSelected ? '✓' : '−',
        ),
      );
    });

    // Capacity bar
    const capacityText = t('loot.load_status', {
      current: i18n.formatNumber(summary.weight, 1),
      max: i18n.formatNumber(summary.capacityKg, 1),
      selected: i18n.formatNumber(selectedWeight, 2),
    });

    const capacityCard = hasItems
      ? el(
          'div',
          { class: ['loot-capacity-bar', isOverload && 'is-overload'] },
          el('span', { class: 'loot-capacity-label' }, capacityText),
          isOverload && el('span', { class: 'loot-overload-alert' }, t('loot.overload_warning')),
        )
      : null;

    // Action buttons
    let actionButtons = [];
    if (hasItems) {
      actionButtons = [
        el(
          'button',
          {
            type: 'button',
            class: 'btn btn-ghost loot-action-btn',
            onClick: () => {
              // Leave all
              const left = [...items];
              this.close();
              onConfirm?.([], left);
            },
          },
          t('loot.action.leave_all'),
        ),
        el(
          'button',
          {
            type: 'button',
            class: ['btn', 'loot-action-btn', selectedCount === 0 && 'is-disabled'],
            disabled: selectedCount === 0,
            onClick: () => {
              const taken = [];
              const left = [];
              items.forEach((it, idx) => {
                if (this.#selectedMap.get(idx)) taken.push(it);
                else left.push(it);
              });
              this.close();
              onConfirm?.(taken, left);
            },
          },
          t('loot.action.take_selected', { count: selectedCount }),
        ),
        el(
          'button',
          {
            type: 'button',
            class: 'btn btn-accent loot-action-btn',
            onClick: () => {
              const taken = [...items];
              this.close();
              onConfirm?.(taken, []);
            },
          },
          t('loot.action.take_all'),
        ),
      ];
    } else {
      actionButtons = [
        el(
          'button',
          {
            type: 'button',
            class: 'btn btn-accent loot-action-btn',
            onClick: () => {
              this.close();
              onConfirm?.([], []);
            },
          },
          t('loot.action.close'),
        ),
      ];
    }

    const card = el(
      'div',
      { class: 'action-modal-card' },
      el('div', { class: 'action-modal-header' }, el('h3', { class: 'action-modal-title' }, kickerText)),
      el('p', { class: 'action-modal-desc' }, descText),
      hasItems
        ? el('div', { class: 'loot-items-list' }, itemRows)
        : el('div', { class: 'loot-empty-note' }, t('loot.no_items')),
      capacityCard,
      el('div', { class: 'action-modal-footer' }, actionButtons),
    );

    this.#root.replaceChildren(card);
  }
}

