import { CATEGORIES, EQUIPMENT_SLOTS, getItem } from '../data/items.js';
import { i18n, t } from '../i18n/i18n.js';
import { getItemUpgradeLevel, groundHere, loadSummary } from '../modules/inventory/inventorySelectors.js';
import { isAtOutpost } from '../modules/base/index.js';
import { getNode } from '../modules/map/mapGraph.js';
import { VehicleEngine, VEHICLE_CATALOG } from '../modules/vehicles/vehicleEngine.js';
import { el } from './dom.js';
import { audioEngine } from '../core/audioEngine.js';

export class InventoryView {
  #root;
  #engine;
  #activeCategory = 'all';
  #searchQuery = '';
  #sortBy = 'default';
  #selectedItemId = null;
  #packPage = 1;
  #activeInvTab = 'pack'; // 'pack' | 'equipped' | 'vehicles'
  #lastState = null;

  constructor(root, engine) {
    this.#root = root;
    this.#engine = engine;
  }

  render(state) {
    this.#lastState = state;

    // Validate that currently inspected item still exists in inventory
    if (this.#selectedItemId) {
      const stillHas = state.inventory?.stacks?.some((s) => s.itemId === this.#selectedItemId);
      if (!stillHas) {
        this.#selectedItemId = null;
      }
    }

    const nav = el(
      'div',
      { class: 'status-page-nav inv-page-nav' },
      el(
        'button',
        {
          type: 'button',
          class: ['status-page-btn', this.#activeInvTab === 'pack' && 'is-active'],
          onClick: () => {
            this.#activeInvTab = 'pack';
            this.render(this.#lastState);
          },
        },
        t('inventory.tabs.pack'),
      ),
      el(
        'button',
        {
          type: 'button',
          class: ['status-page-btn', this.#activeInvTab === 'equipped' && 'is-active'],
          onClick: () => {
            this.#activeInvTab = 'equipped';
            this.render(this.#lastState);
          },
        },
        t('inventory.tabs.equipped'),
      ),
      el(
        'button',
        {
          type: 'button',
          class: ['status-page-btn', this.#activeInvTab === 'vehicles' && 'is-active'],
          onClick: () => {
            this.#activeInvTab = 'vehicles';
            this.render(this.#lastState);
          },
        },
        `🚙 ${t('inventory.tabs.vehicles')}`,
      ),
    );

    const loadBar = this.#renderLoadBar(state);

    let content = [];
    if (this.#activeInvTab === 'pack') {
      content = [
        loadBar,
        this.#renderPackSection(state),
        this.#renderGroundSection(state),
      ];
    } else if (this.#activeInvTab === 'equipped') {
      content = [
        loadBar,
        this.#renderEquipment(state),
      ];
    } else {
      content = [
        this.#renderVehiclesSection(state),
      ];
    }

    const inspectModal = this.#selectedItemId ? this.#renderInspectModal(state) : null;

    const children = [nav, ...content, inspectModal].filter(Boolean);
    this.#root.replaceChildren(...children);
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

  #equipSlotIcon(slot) {
    if (slot === 'weapon') return '⚔️';
    if (slot === 'body') return '🛡️';
    if (slot === 'pack') return '🎒';
    return '⚙️';
  }

  #equipStatPills(item, upgradeLvl) {
    if (!item?.equip) return [];
    const pills = [];
    const dmg = (item.equip.damage ?? item.damage ?? 0) + (item.equip.slot === 'weapon' ? upgradeLvl * 3 : 0);
    const armor = (item.equip.armor ?? item.armor ?? 0) + (item.equip.slot === 'body' ? upgradeLvl * 2 : 0);
    if (dmg > 0) pills.push(el('span', { class: 'equip-stat-pill is-dmg' }, `⚔ ${dmg}`));
    if (item.equip.range) pills.push(el('span', { class: 'equip-stat-pill' }, `🎯 ${item.equip.range}`));
    if (armor > 0) pills.push(el('span', { class: 'equip-stat-pill is-armor' }, `🛡 +${armor}`));
    if (item.equip.coldRes > 0) pills.push(el('span', { class: 'equip-stat-pill' }, `❄ +${item.equip.coldRes}°C`));
    if (item.equip.acidRes > 0) pills.push(el('span', { class: 'equip-stat-pill' }, `☣ ${Math.round(item.equip.acidRes * 100)}%`));
    if (item.equip.ashRes > 0) pills.push(el('span', { class: 'equip-stat-pill' }, `🌫 ${Math.round(item.equip.ashRes * 100)}%`));
    if (item.equip.slots > 0) pills.push(el('span', { class: 'equip-stat-pill is-pack' }, `🎒 +${item.equip.slots}`));
    if (item.equip.capacityKg > 0) pills.push(el('span', { class: 'equip-stat-pill is-pack' }, `📦 +${item.equip.capacityKg} kg`));
    return pills;
  }

  #renderEquipment(state) {
    const slots = EQUIPMENT_SLOTS.map((slot) => {
      const itemId = state.inventory.equipment[slot];
      const item = itemId ? getItem(itemId) : null;
      const upgradeLvl = itemId ? getItemUpgradeLevel(state, itemId) : 0;
      const canUpgrade = Boolean(item && (slot === 'weapon' || slot === 'body') && upgradeLvl < 3);
      const scrapNeed = (upgradeLvl + 1) * 2;
      const statPills = item ? this.#equipStatPills(item, upgradeLvl) : [];

      return el(
        'div',
        { class: ['equip-slot', itemId && 'is-filled'] },
        el(
          'div',
          { class: 'equip-slot-header' },
          el('span', { class: 'equip-slot-label' }, `${this.#equipSlotIcon(slot)} ${t(`inventory.slot.${slot}`)}`),
          upgradeLvl > 0
            ? el('span', { class: 'equip-upgrade-badge' }, `+${upgradeLvl}`)
            : !item && el('span', { class: 'equip-empty-tag' }, t('inventory.slot_empty')),
        ),
        item
          ? el(
            'div',
            { class: 'equip-slot-body' },
            el(
              'div',
              { class: 'equip-slot-main' },
              el('span', { class: 'equip-item-glyph' }, item.glyph),
              el(
                'div',
                { class: 'equip-item-info' },
                el('div', { class: 'equip-item-name' }, t(`item.${itemId}.name`)),
                statPills.length > 0 && el('div', { class: 'equip-item-stats' }, statPills),
              ),
            ),
            el(
              'div',
              { class: 'equip-slot-actions' },
              canUpgrade && el(
                'button',
                {
                  type: 'button',
                  class: 'btn btn-accent btn-xs equip-act-btn',
                  title: `${scrapNeed}× ${t('item.scrap_metal.name')}, 1× ${t('item.duct_tape.name')}`,
                  onClick: () => this.#engine.dispatch('inventory/upgradeGear', { slot }),
                },
                `⬆️ +1 (${scrapNeed}⚙)`,
              ),
              el(
                'button',
                {
                  type: 'button',
                  class: 'btn btn-ghost btn-xs equip-act-btn',
                  onClick: () => this.#engine.dispatch('inventory/unequip', { slot }),
                },
                t('inventory.action.unequip'),
              ),
            ),
          )
          : el('div', { class: 'equip-empty' }, t('inventory.slot_empty')),
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
    const summary = loadSummary(state);
    const slotsTotal = Math.max(1, summary.slotsTotal || 16);

    const tabs = ['all', ...CATEGORIES].map((cat) =>
      el(
        'button',
        {
          type: 'button',
          class: ['filter-chip', this.#activeCategory === cat && 'is-active'],
          onClick: () => {
            this.#activeCategory = cat;
            this.#packPage = 1;
            if (this.#lastState) this.render(this.#lastState);
          },
        },
        t(`inventory.category.${cat}`),
      ),
    );

    const query = this.#searchQuery.trim().toLowerCase();
    const visibleStacks = (state.inventory?.stacks || [])
      .filter(({ itemId }) => {
        if (this.#activeCategory !== 'all' && getItem(itemId)?.category !== this.#activeCategory) {
          return false;
        }
        if (query) {
          const itemName = t(`item.${itemId}.name`).toLowerCase();
          if (!itemName.includes(query) && !itemId.toLowerCase().includes(query)) {
            return false;
          }
        }
        return true;
      })
      .sort((a, b) => {
        if (this.#sortBy === 'weight_desc') {
          const wa = (getItem(a.itemId)?.weight ?? 0) * a.qty;
          const wb = (getItem(b.itemId)?.weight ?? 0) * b.qty;
          return wb - wa;
        }
        if (this.#sortBy === 'value_desc') {
          return (getItem(b.itemId)?.value ?? 0) - (getItem(a.itemId)?.value ?? 0);
        }
        if (this.#sortBy === 'qty_desc') {
          return b.qty - a.qty;
        }
        return 0;
      });

    const SLOTS_PER_PAGE = 8;
    if (this.#selectedItemId) {
      const selectedIndex = visibleStacks.findIndex((s) => s.itemId === this.#selectedItemId);
      if (selectedIndex !== -1) {
        this.#packPage = Math.floor(selectedIndex / SLOTS_PER_PAGE) + 1;
      }
    }

    // Build tactical slot grid cells
    const cells = [];
    const maxRenderSlots = Math.max(slotsTotal, visibleStacks.length);

    for (let index = 0; index < maxRenderSlots; index++) {
      if (index < visibleStacks.length) {
        const stack = visibleStacks[index];
        const item = getItem(stack.itemId);
        const isSelected = this.#selectedItemId === stack.itemId;

        const cell = el(
          'button',
          {
            type: 'button',
            class: [
              'inv-slot-cell',
              item?.category ? `cat-${item.category}` : '',
              item?.rarity ? `rarity-${item.rarity}` : 'rarity-common',
              isSelected && 'is-selected',
              index >= slotsTotal && 'is-overflow',
            ],
            title: `${t(`item.${stack.itemId}.name`)} (x${stack.qty})`,
            onClick: () => {
              this.#selectedItemId = this.#selectedItemId === stack.itemId ? null : stack.itemId;
              try { audioEngine.playGearRustle(); } catch {}
              if (this.#lastState) this.render(this.#lastState);
            },
          },
          el('span', { class: 'slot-weight-tag' }, `${item.weight}k`),
          el('span', { class: 'slot-glyph' }, item.glyph),
          stack.qty > 1 ? el('span', { class: 'slot-qty-badge' }, `×${stack.qty}`) : null,
        );
        cells.push(cell);
      } else {
        // Empty slot cell
        cells.push(
          el(
            'div',
            { class: 'inv-slot-empty', title: t('inventory.grid.empty_slot') },
            el('span', { class: 'slot-empty-index' }, `· ${index + 1}`),
          ),
        );
      }
    }

    const totalPages = Math.max(1, Math.ceil(maxRenderSlots / SLOTS_PER_PAGE));
    this.#packPage = Math.min(Math.max(1, this.#packPage || 1), totalPages);
    const startIndex = (this.#packPage - 1) * SLOTS_PER_PAGE;
    const pagedCells = cells.slice(startIndex, startIndex + SLOTS_PER_PAGE);

    const gridEl = el('div', { class: 'inv-slot-grid' }, pagedCells);

    const paginationBar = totalPages > 1
      ? el(
        'div',
        { class: 'pagination-bar' },
        el(
          'button',
          {
            type: 'button',
            class: ['btn', 'btn-xs', 'btn-page', this.#packPage <= 1 && 'is-disabled'],
            disabled: this.#packPage <= 1,
            onClick: () => {
              this.#packPage = Math.max(1, this.#packPage - 1);
              if (this.#lastState) this.render(this.#lastState);
            },
          },
          '◀',
        ),
        el(
          'span',
          { class: 'page-indicator' },
          t('ui.page', { current: this.#packPage, total: totalPages }),
        ),
        el(
          'button',
          {
            type: 'button',
            class: ['btn', 'btn-xs', 'btn-page', this.#packPage >= totalPages && 'is-disabled'],
            disabled: this.#packPage >= totalPages,
            onClick: () => {
              this.#packPage = Math.min(totalPages, this.#packPage + 1);
              if (this.#lastState) this.render(this.#lastState);
            },
          },
          '▶',
        ),
      )
      : null;

    const hintBanner = el(
      'div',
      { class: 'inv-hint-banner' },
      el('span', { class: 'inv-hint-icon' }, '🔍'),
      el('span', { class: 'inv-hint-text' }, t('inventory.grid.inspect_prompt')),
    );

    const searchInput = el('input', {
      type: 'search',
      class: 'craft-search-input inv-search-input',
      value: this.#searchQuery,
      placeholder: t('inventory.search_placeholder'),
      'aria-label': t('inventory.search_placeholder'),
      onInput: (e) => {
        const input = e.target;
        const start = input.selectionStart ?? input.value.length;
        const end = input.selectionEnd ?? start;
        this.#searchQuery = input.value;
        this.#packPage = 1;
        this.#selectedItemId = null;
        if (this.#lastState) this.render(this.#lastState);
        const nextInput = this.#root?.querySelector('.inv-search-input');
        if (nextInput) {
          nextInput.focus();
          try { nextInput.setSelectionRange(start, end); } catch {}
        }
      },
    });

    const sortOptions = ['default', 'weight_desc', 'value_desc', 'qty_desc'].map((mode) =>
      el(
        'option',
        { value: mode, selected: this.#sortBy === mode },
        t(`inventory.sort.${mode}`),
      ),
    );
    const sortSelect = el(
      'select',
      {
        class: 'inv-sort-select',
        'aria-label': t('inventory.sort.label'),
        onChange: (e) => {
          this.#sortBy = e.target.value;
          this.#packPage = 1;
          if (this.#lastState) this.render(this.#lastState);
        },
      },
      sortOptions,
    );

    const toolbar = el('div', { class: 'craft-toolbar inv-toolbar' }, searchInput, sortSelect);

    return el(
      'section',
      { class: 'panel-block' },
      el(
        'div',
        { class: 'pack-section-head' },
        el('h3', { class: 'block-title' }, t('inventory.section.pack')),
        el('span', { class: 'pack-capacity-pill' }, `${visibleStacks.length} / ${slotsTotal}`),
      ),
      el('div', { class: 'filter-row' }, tabs),
      toolbar,
      gridEl,
      paginationBar,
      hintBanner,
    );
  }

  #renderInspectModal(state) {
    if (!this.#selectedItemId) return null;

    const stack = (state.inventory?.stacks || []).find((s) => s.itemId === this.#selectedItemId);
    const item = getItem(this.#selectedItemId);
    if (!item) return null;

    const qty = stack ? stack.qty : 1;
    const singleKg = i18n.formatNumber(item.weight, 2);
    const totalKg = i18n.formatNumber(item.weight * qty, 2);
    const catName = t(`inventory.category.${item.category}`).toUpperCase();

    // Attribute effect tags
    const specBadges = this.#renderItemSpecs(item, state, this.#selectedItemId);

    // Primary action buttons (Use / Equip)
    const primaryActions = [];
    if (item.use) {
      const isMed = item.category === 'medical';
      const useLabel = isMed
        ? `💊 ${t('inventory.action.treat') || 'TEDAVİ ET'}`
        : `🍴 ${t('inventory.action.use')}`;
      primaryActions.push(
        el(
          'button',
          {
            type: 'button',
            class: 'btn btn-accent btn-inspect-act-primary',
            onClick: () => {
              const id = this.#selectedItemId;
              this.#selectedItemId = null;
              this.#engine.dispatch('inventory/use', { itemId: id });
            },
          },
          useLabel,
        ),
      );
    }
    if (item.equip) {
      primaryActions.push(
        el(
          'button',
          {
            type: 'button',
            class: 'btn btn-accent btn-inspect-act-primary',
            onClick: () => {
              const id = this.#selectedItemId;
              this.#selectedItemId = null;
              this.#engine.dispatch('inventory/equip', { itemId: id });
            },
          },
          `⚔ ${t('inventory.action.equip')}`,
        ),
      );
    }
    if (item.equip || item.category === 'weapons' || item.category === 'gear') {
      primaryActions.push(
        el(
          'button',
          {
            type: 'button',
            class: 'btn btn-ghost btn-inspect-act-primary',
            onClick: () => {
              const id = this.#selectedItemId;
              if (qty <= 1) this.#selectedItemId = null;
              this.#engine.dispatch('inventory/salvage', { itemId: id });
            },
          },
          `🔧 ${t('inventory.action.salvage')}`,
        ),
      );
    }

    // Secondary action buttons (Store at Outpost / Drop 1 / Drop All)
    const dropActions = [];
    if (stack && isAtOutpost(state)) {
      dropActions.push(
        el(
          'button',
          {
            type: 'button',
            class: 'btn btn-accent btn-xs btn-inspect-store',
            onClick: () => {
              const id = this.#selectedItemId;
              if (qty <= 1) this.#selectedItemId = null;
              this.#engine.dispatch('base/store', { itemId: id, qty: 1 });
            },
          },
          `📥 ${t('inventory.action.store')}`,
        ),
      );
      if (qty > 1) {
        dropActions.push(
          el(
            'button',
            {
              type: 'button',
              class: 'btn btn-accent btn-xs btn-inspect-store',
              onClick: () => {
                const id = this.#selectedItemId;
                this.#selectedItemId = null;
                this.#engine.dispatch('base/store', { itemId: id, qty });
              },
            },
            `📥 ${t('inventory.action.store_all')} (×${qty})`,
          ),
        );
      }
    }
    if (stack) {
      dropActions.push(
        el(
          'button',
          {
            type: 'button',
            class: 'btn btn-ghost btn-xs btn-inspect-drop',
            onClick: () => {
              const id = this.#selectedItemId;
              if (qty <= 1) this.#selectedItemId = null;
              this.#engine.dispatch('inventory/drop', { itemId: id, qty: 1 });
            },
          },
          `🗑️ ${t('inventory.action.drop')}`,
        ),
      );

      if (qty > 1) {
        dropActions.push(
          el(
            'button',
            {
              type: 'button',
              class: 'btn btn-ghost btn-xs btn-inspect-drop',
              onClick: () => {
                const id = this.#selectedItemId;
                this.#selectedItemId = null;
                this.#engine.dispatch('inventory/drop', { itemId: id, qty });
              },
            },
            `📦 ${t('inventory.action.drop_all')} (×${qty})`,
          ),
        );
      }
    }

    const closeModal = () => {
      this.#selectedItemId = null;
      if (this.#lastState) this.render(this.#lastState);
    };

    return el(
      'div',
      {
        class: 'item-inspect-overlay',
        onClick: (e) => {
          if (e.target === e.currentTarget) closeModal();
        },
      },
      el(
        'div',
        { class: 'item-inspect-modal' },
        el(
          'div',
          { class: 'inspect-header' },
          el(
            'div',
            { class: 'inspect-title-wrap' },
            el('span', { class: ['inspect-glyph', `cat-${item.category}`, `rarity-${item.rarity || 'common'}`] }, item.glyph),
            el(
              'div',
              { class: 'inspect-meta' },
              el('strong', { class: ['inspect-name', `rarity-${item.rarity || 'common'}`] }, t(`item.${this.#selectedItemId}.name`)),
              el(
                'div',
                { class: 'inspect-sub-tags' },
                el('span', { class: 'inspect-cat-pill' }, catName),
                el('span', { class: ['inspect-rarity-pill', `rarity-${item.rarity || 'common'}`] }, t(`rarity.${item.rarity || 'common'}`)),
              ),
            ),
          ),
          el(
            'div',
            { class: 'inspect-right-col' },
            el(
              'div',
              { class: 'inspect-weight-wrap' },
              el('span', { class: 'inspect-weight-total' }, `${totalKg} kg`),
              qty > 1 ? el('span', { class: 'inspect-weight-unit' }, `(${singleKg} kg/ea)`) : null,
            ),
            el(
              'button',
              {
                type: 'button',
                class: 'inspect-close-btn',
                title: t('ui.close') || 'KAPAT',
                onClick: closeModal,
              },
              '✕',
            ),
          ),
        ),
        el(
          'div',
          { class: 'item-inspect-body' },
          el('p', { class: 'inspect-desc' }, t(`item.${this.#selectedItemId}.desc`)),
          specBadges.length > 0 ? el('div', { class: 'inspect-specs-row' }, specBadges) : null,
          el(
            'div',
            { class: 'inspect-actions-row' },
            ...primaryActions,
            dropActions.length > 0 ? el('div', { class: 'inspect-secondary-actions' }, dropActions) : null,
          ),
        ),
        el(
          'button',
          {
            type: 'button',
            class: 'btn btn-ghost btn-xs btn-inspect-modal-close',
            onClick: closeModal,
          },
          `✕ ${t('ui.close') || 'KAPAT'}`,
        ),
      ),
    );
  }

  #renderItemSpecs(item, state = null, itemId = null) {
    const specs = [];

    // Food / medical / chemical effects
    if (item.use?.effects) {
      for (const eff of item.use.effects) {
        if (eff.type === 'heal') {
          const val = typeof eff.amount === 'number' ? eff.amount : `${eff.amount[0]}-${eff.amount[1]}`;
          specs.push(el('span', { class: 'spec-pill spec-good' }, `❤ +${val} CAN`));
        } else if (eff.type === 'vital') {
          const sign = eff.amount > 0 ? '+' : '';
          const vitalLabel = t(`status.vital.${eff.vital}`) || eff.vital.toUpperCase();
          const toneClass = eff.amount > 0 ? 'spec-good' : 'spec-bad';
          specs.push(el('span', { class: ['spec-pill', toneClass] }, `${sign}${eff.amount} ${vitalLabel}`));
        } else if (eff.type === 'cure' || eff.type === 'cure_ailment') {
          const id = eff.id || eff.ailment;
          let label = `💊 ${id.toUpperCase()}`;
          if (id === 'bleeding') label = '🩸 KANAMA TEDAVİSİ';
          else if (id === 'infection' || id === 'infectionRisk') label = '☣ ENFEKSİYON TEDAVİSİ';
          else if (id === 'fracture') label = '🦴 KIRIK SABİTLEME';
          else if (id === 'sprain') label = '⌇ BURKULMA TEDAVİSİ';
          else if (id === 'burn') label = '♨ YANIK TEDAVİSİ';
          else if (id === 'puncture' || id === 'pneumothorax') label = '🫁 PNÖMOTORAKS MÜHRÜ';
          else if (id === 'pain') label = '⚡ AĞRI KESİCİ';
          else if (id === 'poison') label = '☠ ANTİDOT / ZEHİR';
          else if (id === 'fever') label = '🌡 ATEŞ DÜŞÜRÜCÜ';
          specs.push(el('span', { class: 'spec-pill spec-cure' }, label));
        } else if (eff.type === 'stat') {
          let statName = eff.id.toUpperCase();
          if (eff.id === 'stamina') statName = 'STAMİNA';
          else if (eff.id === 'thirst') statName = 'HİDRASYON';
          else if (eff.id === 'morale') statName = 'MORAL';
          else if (eff.id === 'radResistance') statName = 'RAD DİRENCİ';
          specs.push(el('span', { class: 'spec-pill spec-good' }, `▲ +${eff.amount} ${statName}`));
        } else if (eff.type === 'xp') {
          specs.push(el('span', { class: 'spec-pill spec-slots' }, `🎓 +${eff.amount} ${eff.skill.toUpperCase()} XP`));
        }
      }
    }

    // Equipment properties
    if (item.equip) {
      specs.push(el('span', { class: 'spec-pill spec-slot' }, `⚙ ${t(`inventory.slot.${item.equip.slot}`)}`));
      if (item.damage) specs.push(el('span', { class: 'spec-pill spec-dmg' }, `⚔ DMG ${item.damage}`));
      if (item.armor) specs.push(el('span', { class: 'spec-pill spec-armor' }, `🛡 ARMOR +${item.armor}`));
      if (item.slotsBonus) specs.push(el('span', { class: 'spec-pill spec-slots' }, `🎒 SLOTS +${item.slotsBonus}`));

      const equippedId = state?.inventory?.equipment?.[item.equip.slot];
      if (equippedId && equippedId !== itemId) {
        const eq = getItem(equippedId);
        if (eq) {
          const dDmg = (item.equip.damage ?? item.damage ?? 0) - (eq.equip?.damage ?? eq.damage ?? 0);
          const dArmor = (item.equip.armor ?? item.armor ?? 0) - (eq.equip?.armor ?? eq.armor ?? 0);
          const dSlots = (item.equip.slots ?? item.slotsBonus ?? 0) - (eq.equip?.slots ?? eq.slotsBonus ?? 0);
          const dKg = Number(((item.equip.capacityKg ?? 0) - (eq.equip?.capacityKg ?? 0)).toFixed(1));
          const dWeight = Number(((item.weight ?? 0) - (eq.weight ?? 0)).toFixed(2));
          if (dDmg !== 0) specs.push(el('span', { class: ['spec-pill', dDmg > 0 ? 'spec-good' : 'spec-bad'] }, `⚔ ${dDmg > 0 ? '+' : ''}${dDmg} DMG`));
          if (dArmor !== 0) specs.push(el('span', { class: ['spec-pill', dArmor > 0 ? 'spec-good' : 'spec-bad'] }, `🛡 ${dArmor > 0 ? '+' : ''}${dArmor} ARMOR`));
          if (dSlots !== 0) specs.push(el('span', { class: ['spec-pill', dSlots > 0 ? 'spec-good' : 'spec-bad'] }, `🎒 ${dSlots > 0 ? '+' : ''}${dSlots} SLOTS`));
          if (dKg !== 0) specs.push(el('span', { class: ['spec-pill', dKg > 0 ? 'spec-good' : 'spec-bad'] }, `📦 ${dKg > 0 ? '+' : ''}${dKg} kg`));
          if (dWeight !== 0) specs.push(el('span', { class: ['spec-pill', dWeight < 0 ? 'spec-good' : 'spec-bad'] }, `⚖ ${dWeight > 0 ? '+' : ''}${dWeight} kg`));
        }
      }
    }

    if (item.stack && item.stack > 1) {
      specs.push(el('span', { class: 'spec-pill spec-stack' }, `📦 MAX ${item.stack}`));
    }

    return specs;
  }

  #renderGroundSection(state) {
    const pile = groundHere(state);
    const node = getNode(state.world.currentNodeId);
    const hasItems = pile.length > 0;

    const header = el(
      'div',
      { class: 'ground-section-head' },
      el(
        'h3',
        { class: 'block-title' },
        `${t('inventory.section.ground')} — ${t(`location.${node.id}`)}`,
      ),
      hasItems
        ? el(
          'button',
          {
            type: 'button',
            class: 'btn btn-accent btn-xs',
            onClick: () => {
              // Pick up all items on the ground
              for (const { itemId, qty } of pile) {
                this.#engine.dispatch('inventory/pickup', { itemId, qty });
              }
            },
          },
          `📦 ${t('inventory.action.take_all')}`,
        )
        : null,
    );

    const body = !hasItems
      ? el('p', { class: 'muted-note' }, t('inventory.ground_empty'))
      : el(
        'div',
        { class: 'ground-slot-grid' },
        pile.map(({ itemId, qty }) => {
          const item = getItem(itemId);
          return el(
            'div',
            {
              class: ['ground-item-card', item?.category ? `cat-${item.category}` : ''],
              title: `${t(`item.${itemId}.name`)} (x${qty})`,
            },
            el('span', { class: 'ground-item-glyph' }, item.glyph),
            el(
              'div',
              { class: 'ground-item-info' },
              el('span', { class: 'ground-item-name' }, t(`item.${itemId}.name`)),
              el('span', { class: 'ground-item-sub' }, `${i18n.formatNumber(item.weight * qty, 2)} kg`),
            ),
            qty > 1 ? el('span', { class: 'slot-qty-badge' }, `×${qty}`) : null,
            el(
              'button',
              {
                type: 'button',
                class: 'btn btn-ghost btn-xs ground-pickup-btn',
                onClick: () => this.#engine.dispatch('inventory/pickup', { itemId, qty: 1 }),
              },
              t('inventory.action.take'),
            ),
          );
        }),
      );

    return el(
      'section',
      { class: 'panel-block' },
      header,
      body,
    );
  }

  #renderVehiclesSection(state) {
    const fleet = Object.values(state.vehicles?.fleet || {});
    const knownVehicles = fleet.filter((v) => v.discovered || v.claimed);
    const currentNodeId = state.world?.currentNodeId;
    const mountedVehicleId = state.vehicles?.mountedVehicleId;

    if (!knownVehicles.length) {
      return el(
        'section',
        { class: 'panel-block inv-vehicles-empty-block' },
        el(
          'div',
          { class: 'inv-vehicles-empty-content' },
          el('div', { class: 'empty-glyph-cluster' }, '🚙 📡 🔍'),
          el('h3', { class: 'empty-title' }, t('inventory.vehicles.empty_title')),
          el('p', { class: 'muted-note' }, t('inventory.vehicles.empty_desc')),
          el(
            'button',
            {
              type: 'button',
              class: 'btn btn-accent btn-sm',
              onClick: () => {
                const mapTab = document.querySelector('.nav-tab[data-tab="map"]');
                if (mapTab) mapTab.click();
              },
            },
            `🗺️ ${t('inventory.vehicles.action_go_map')}`,
          ),
        ),
      );
    }

    const cards = knownVehicles.map((v) => {
      const def = VEHICLE_CATALOG[v.id];
      if (!def) return null;
      const isMounted = mountedVehicleId === v.id;
      const isHere = v.nodeId === currentNodeId;
      const node = v.nodeId ? getNode(v.nodeId) : null;
      const locationLabel = node
        ? (isHere ? `📍 ${t(`location.${node.id}`)} (${t('vehicle.status.here')})` : `📍 ${t(`location.${node.id}`)}`)
        : t('vehicle.status.unknown_location');

      const isMuscle = Boolean(def.musclePowered || def.fuelType === 'muscle');
      const maxFuel = VehicleEngine.getEffectiveMaxFuel(v, def);
      const fuelPct = isMuscle ? 100 : (maxFuel > 0 ? Math.min(100, Math.round((v.fuelLiters / maxFuel) * 100)) : 0);
      const conditionPct = Math.min(100, Math.max(0, v.condition || 0));
      const cargoWeight = VehicleEngine.getCargoWeight(v);
      const maxTrunk = VehicleEngine.getEffectiveTrunkCapacity(v, def);
      const cargoPct = maxTrunk > 0 ? Math.min(100, Math.round((cargoWeight / maxTrunk) * 100)) : 0;
      const canMount = Boolean(v.restored && (isMuscle || v.fuelLiters > 0));

      let statusBadgeClass = 'is-broken';
      let statusText = `▲ ${t('vehicle.status.needs_repair')}`;
      if (isMounted) {
        statusBadgeClass = 'is-driving';
        statusText = `● ${t('vehicle.status.driving')}`;
      } else if (v.restored) {
        statusBadgeClass = 'is-parked';
        statusText = `● ${t('vehicle.status.ready')}`;
      }

      return el(
        'div',
        { class: ['inv-vehicle-card', isMounted && 'is-mounted-active', isHere && 'is-here'].filter(Boolean).join(' ') },
        // Top header row
        el(
          'div',
          { class: 'inv-veh-header' },
          el(
            'div',
            { class: 'inv-veh-title-group' },
            el('span', { class: 'inv-veh-glyph' }, def.glyph || '🚙'),
            el(
              'div',
              {},
              el('strong', { class: 'inv-veh-name' }, t(def.nameKey)),
              el('div', { class: 'inv-veh-loc' }, locationLabel),
            ),
          ),
          el('span', { class: ['vehicle-hud-badge', statusBadgeClass].join(' ') }, statusText),
        ),
        // Mini telemetry row
        el(
          'div',
          { class: 'hud-meters-grid inv-veh-meters' },
          el(
            'div',
            { class: 'hud-meter-col' },
            el('div', { class: 'hud-meter-label' }, el('span', {}, isMuscle ? t('vehicle.fuel.muscle_label') : t('vehicle.gauge.fuel')), el('span', {}, `${fuelPct}%`)),
            el('div', { class: 'hud-meter-val' }, isMuscle ? '∞ (0 L)' : `${v.fuelLiters}/${maxFuel} L`),
            el('div', { class: 'hud-meter-bar' }, el('div', { class: ['hud-meter-fill', isMuscle ? 'fill-cyan' : (fuelPct > 30 ? 'fill-green' : 'fill-danger')], style: `width: ${fuelPct}%` })),
          ),
          el(
            'div',
            { class: 'hud-meter-col' },
            el('div', { class: 'hud-meter-label' }, el('span', {}, t('vehicle.gauge.condition')), el('span', {}, `${conditionPct}%`)),
            el('div', { class: 'hud-meter-val' }, `%${conditionPct}`),
            el('div', { class: 'hud-meter-bar' }, el('div', { class: ['hud-meter-fill', conditionPct > 40 ? 'fill-green' : 'fill-danger'], style: `width: ${conditionPct}%` })),
          ),
          el(
            'div',
            { class: 'hud-meter-col' },
            el('div', { class: 'hud-meter-label' }, el('span', {}, t('vehicle.trunk_load')), el('span', {}, `${cargoPct}%`)),
            el('div', { class: 'hud-meter-val' }, `${cargoWeight}/${maxTrunk} kg`),
            el('div', { class: 'hud-meter-bar' }, el('div', { class: ['hud-meter-fill', cargoPct > 80 ? 'fill-amber' : 'fill-green'], style: `width: ${cargoPct}%` })),
          ),
        ),
        // Action buttons
        el(
          'div',
          { class: 'inv-veh-actions' },
          isHere && isMounted
            ? el(
                'button',
                {
                  type: 'button',
                  class: 'btn btn-sm btn-danger',
                  onClick: () => {
                    this.#engine.dispatch('vehicles/dismount');
                    this.render(this.#lastState);
                  },
                },
                `🛑 ${t('vehicle.action_dismount')}`,
              )
            : (isHere && canMount
                ? el(
                    'button',
                    {
                      type: 'button',
                      class: 'btn btn-sm btn-accent',
                      onClick: () => {
                        this.#engine.dispatch('vehicles/mount', { vehicleId: v.id });
                        this.render(this.#lastState);
                      },
                    },
                    `🚙 ${t('vehicle.action_mount')}`,
                  )
                : null),
          el(
            'button',
            {
              type: 'button',
              class: 'btn btn-sm btn-ghost',
              onClick: () => this.#engine.dispatch('vehicles/openModal', { vehicleId: v.id }),
            },
            `🛠️ ${t('vehicle.action_open_trunk')}`,
          ),
          !isHere && v.nodeId
            ? el(
                'button',
                {
                  type: 'button',
                  class: 'btn btn-sm btn-ghost',
                  onClick: () => {
                    this.#engine.dispatch('map/select', { nodeId: v.nodeId });
                    const mapTab = document.querySelector('.nav-tab[data-tab="map"]');
                    if (mapTab) mapTab.click();
                  },
                },
                `🗺️ ${t('vehicle.action_view_on_map')}`,
              )
            : null,
        ),
      );
    }).filter(Boolean);

    return el(
      'section',
      { class: 'panel-block inv-vehicles-section' },
      el(
        'div',
        { class: 'inv-veh-list-header' },
        el('span', { class: 'meta-label' }, t('inventory.vehicles.list_title')),
        el('span', { class: 'meta-val' }, `${knownVehicles.length} / ${Object.keys(VEHICLE_CATALOG).length}`),
      ),
      el('div', { class: 'inv-vehicles-grid' }, ...cards),
    );
  }
}
