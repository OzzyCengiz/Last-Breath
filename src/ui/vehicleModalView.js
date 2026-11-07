/**
 * Last Breath // Vehicle & Overland Travel Modal View
 * Dedicated terminal dossier for vehicle restoration, component installation,
 * fuel telemetry, field siphoning, and bidirectional pack/trunk cargo transfer.
 */

import { getItem } from '../data/items.js';
import { t } from '../i18n/i18n.js';
import { countItem } from '../modules/inventory/inventoryModel.js';
import { VehicleEngine, VEHICLE_CATALOG } from '../modules/vehicles/vehicleEngine.js';
import { el } from './dom.js';

export class VehicleModalView {
  #rootEl;
  #engine;
  #activeVehicleId = null;

  constructor(rootEl, engine) {
    this.#rootEl = rootEl;
    this.#engine = engine;

    // Listen to store updates
    this.#engine.bus.on('store:updated', () => {
      if (!this.#rootEl.hidden && this.#activeVehicleId) {
        this.render(this.#engine.store.state);
      }
    });

    // Action listener for opening/closing
    this.#engine.bus.on('vehicles:modal', ({ vehicleId }) => {
      if (vehicleId) {
        this.open(vehicleId);
      } else {
        this.close();
      }
    });
  }

  open(vehicleId) {
    this.#activeVehicleId = vehicleId;
    this.#rootEl.hidden = false;
    this.render(this.#engine.store.state);
  }

  close() {
    this.#activeVehicleId = null;
    this.#rootEl.hidden = true;
    this.#rootEl.replaceChildren();
    try {
      this.#engine.store.commit('vehicles/closeModal');
    } catch {}
  }

  render(state) {
    if (!this.#activeVehicleId) {
      this.#rootEl.hidden = true;
      return;
    }

    const vehicle = VehicleEngine.getVehicle(state, this.#activeVehicleId);
    const def = VEHICLE_CATALOG[this.#activeVehicleId];
    if (!vehicle || !def) {
      this.close();
      return;
    }

    const isMounted = state.vehicles?.mountedVehicleId === this.#activeVehicleId;
    const trunkWeight = VehicleEngine.getCargoWeight(vehicle);
    const trunkPct = Math.min(100, Math.round((trunkWeight / def.trunkCapacityKg) * 100));
    const fuelPct = Math.min(100, Math.round((vehicle.fuelLiters / vehicle.maxFuel) * 100));

    const card = el(
      'div',
      { class: 'modal-card vehicle-modal-card' },

      // Header Cluster
      el(
        'div',
        { class: 'vehicle-header' },
        el(
          'div',
          { class: 'vehicle-title-cluster' },
          el('span', { class: 'vehicle-glyph' }, def.glyph),
          el(
            'div',
            {},
            el('h2', { class: 'vehicle-title' }, t(def.nameKey)),
            el(
              'div',
              { class: 'vehicle-submeta' },
              el('span', {}, `${t('vehicle.label.sector')}: ${t(`location.${vehicle.nodeId}`)}`),
              el('span', {}, ' · '),
              el(
                'span',
                { class: vehicle.restored ? 'tone-good' : 'tone-warn' },
                vehicle.restored ? t('vehicle.status.operational') : t('vehicle.status.abandoned'),
              ),
              isMounted && el('span', { class: 'tactical-badge is-good' }, `🟢 ${t('vehicle.status.driving')}`),
            ),
          ),
        ),
        el(
          'button',
          {
            type: 'button',
            class: 'btn btn-ghost btn-xs',
            onClick: () => this.close(),
          },
          '✕',
        ),
      ),

      // Ignition / Mount Control Strip
      el(
        'div',
        { class: 'vehicle-control-strip' },
        isMounted
          ? el(
              'button',
              {
                type: 'button',
                class: 'btn btn-warn btn-sm',
                onClick: () => this.#engine.dispatch('vehicles/dismount'),
              },
              `🛑 ${t('vehicle.action.dismount')}`,
            )
          : el(
              'button',
              {
                type: 'button',
                class: ['btn', vehicle.restored && vehicle.fuelLiters > 0 ? 'btn-accent' : 'btn-disabled', 'btn-sm'],
                disabled: !vehicle.restored || vehicle.fuelLiters <= 0,
                onClick: () => this.#engine.dispatch('vehicles/mount', { vehicleId: this.#activeVehicleId }),
              },
              `🔑 ${t('vehicle.action.mount')}`,
            ),
        el(
          'div',
          { class: 'vehicle-specs-pills' },
          el('span', { class: 'tactical-badge' }, `⚡ ${def.speedMultiplier <= 0.25 ? '4.5x' : '3.0x'} ${t('vehicle.spec.speed')}`),
          el('span', { class: 'tactical-badge' }, `🔊 +${Math.round((def.noiseRiskMultiplier - 1) * 100)}% ${t('vehicle.spec.noise')}`),
          def.cabinShelter && el('span', { class: 'tactical-badge is-good' }, `🛡️ ${t('vehicle.spec.shelter')}`),
        ),
      ),

      // Telemetry Gauges (Fuel & Engine Health)
      el(
        'div',
        { class: 'vehicle-telemetry-grid' },
        el(
          'div',
          { class: 'vital-row' },
          el(
            'div',
            { class: 'vital-head' },
            el('span', { class: 'vital-label' }, `⛽ ${t('vehicle.gauge.fuel')} (${def.fuelType.toUpperCase()})`),
            el('span', { class: 'vital-value' }, `${vehicle.fuelLiters.toFixed(1)} / ${vehicle.maxFuel} L`),
          ),
          el(
            'div',
            { class: 'meter-track' },
            el('div', { class: ['meter-fill', fuelPct < 20 ? 'tone-fill-warn' : 'tone-fill-good'], style: `width: ${fuelPct}%` }),
          ),
        ),
        el(
          'div',
          { class: 'vital-row' },
          el(
            'div',
            { class: 'vital-head' },
            el('span', { class: 'vital-label' }, `🛠️ ${t('vehicle.gauge.condition')}`),
            el('span', { class: 'vital-value' }, `${vehicle.condition}%`),
          ),
          el(
            'div',
            { class: 'meter-track' },
            el('div', { class: ['meter-fill', vehicle.condition < 30 ? 'tone-fill-bad' : 'tone-fill-accent'], style: `width: ${vehicle.condition}%` }),
          ),
        ),
      ),

      // Restoration & Maintenance Section
      this.#renderRestorationBlock(state, vehicle, def),

      // Dual Column Trunk & Pack Cargo Transfer
      this.#renderCargoBay(state, vehicle, def, trunkWeight, trunkPct),
    );

    this.#rootEl.replaceChildren(card);
  }

  #renderRestorationBlock(state, vehicle, def) {
    const isRestored = vehicle.restored;

    // Component Checklist
    const partsRows = def.partsRequired.map((req) => {
      const installed = vehicle.installedParts?.[req.itemId] || 0;
      const needed = req.qty;
      const isComplete = installed >= needed;
      const availableItemId = VehicleEngine.findAvailablePartInInventory(state.inventory, req);

      return el(
        'div',
        { class: ['vehicle-part-row', isComplete ? 'is-complete' : 'is-missing'] },
        el(
          'div',
          { class: 'vehicle-part-info' },
          el('span', { class: 'part-icon' }, isComplete ? '✓' : '✗'),
          el('span', { class: 'part-name' }, t(`item.${req.itemId}.name`)),
          el('span', { class: 'part-qty' }, `[${installed} / ${needed}]`),
        ),
        !isComplete && availableItemId && el(
          'button',
          {
            type: 'button',
            class: 'btn btn-accent btn-xs',
            onClick: () => this.#engine.dispatch('vehicles/installPart', {
              vehicleId: vehicle.id,
              reqItemId: req.itemId,
            }),
          },
          `+ ${t('vehicle.action.install')}`,
        ),
        !isComplete && !availableItemId && el(
          'span',
          { class: 'part-missing-tag' },
          t('vehicle.status.missing'),
        ),
      );
    });

    // Quick Refuel / Siphon Buttons
    const hasGasCan = countItem(state.inventory, 'gasoline_fuel_canister_5l') > 0;
    const hasDiesel5 = countItem(state.inventory, 'diesel_fuel_canister_5l') > 0;
    const hasDiesel10 = countItem(state.inventory, 'diesel_fuel_canister_10l') > 0;
    const hasSiphonHose = countItem(state.inventory, 'fuel_siphon_hose') > 0;
    const hasScrap = countItem(state.inventory, 'scrap_metal') > 0;
    const hasOil = countItem(state.inventory, 'motor_oil_10w40_bottle') > 0 ||
      countItem(state.inventory, 'motor_oil_synthetic_10w40') > 0;

    const maintenanceOps = el(
      'div',
      { class: 'vehicle-maintenance-actions' },
      def.fuelType === 'gasoline' && hasGasCan && el(
        'button',
        {
          type: 'button',
          class: 'btn btn-xs',
          onClick: () => this.#engine.dispatch('vehicles/refuel', {
            vehicleId: vehicle.id,
            canisterItemId: 'gasoline_fuel_canister_5l',
          }),
        },
        `⛽ +5L ${t('item.gasoline_fuel_canister_5l.name')}`,
      ),
      def.fuelType === 'diesel' && hasDiesel5 && el(
        'button',
        {
          type: 'button',
          class: 'btn btn-xs',
          onClick: () => this.#engine.dispatch('vehicles/refuel', {
            vehicleId: vehicle.id,
            canisterItemId: 'diesel_fuel_canister_5l',
          }),
        },
        `⛽ +5L ${t('item.diesel_fuel_canister_5l.name')}`,
      ),
      def.fuelType === 'diesel' && hasDiesel10 && el(
        'button',
        {
          type: 'button',
          class: 'btn btn-xs',
          onClick: () => this.#engine.dispatch('vehicles/refuel', {
            vehicleId: vehicle.id,
            canisterItemId: 'diesel_fuel_canister_10l',
          }),
        },
        `⛽ +10L ${t('item.diesel_fuel_canister_10l.name')}`,
      ),
      hasSiphonHose && el(
        'button',
        {
          type: 'button',
          class: 'btn btn-ghost btn-xs',
          onClick: () => this.#engine.dispatch('vehicles/siphon', { vehicleId: vehicle.id }),
        },
        `🧪 ${t('vehicle.action.siphon')}`,
      ),
      hasScrap && vehicle.condition < 100 && el(
        'button',
        {
          type: 'button',
          class: 'btn btn-ghost btn-xs',
          onClick: () => this.#engine.dispatch('vehicles/repair', {
            vehicleId: vehicle.id,
            repairItemId: 'scrap_metal',
          }),
        },
        `🔨 +10% ${t('vehicle.action.repair_scrap')}`,
      ),
      hasOil && vehicle.condition < 100 && el(
        'button',
        {
          type: 'button',
          class: 'btn btn-ghost btn-xs',
          onClick: () => this.#engine.dispatch('vehicles/repair', {
            vehicleId: vehicle.id,
            repairItemId: countItem(state.inventory, 'motor_oil_10w40_bottle') > 0
              ? 'motor_oil_10w40_bottle'
              : 'motor_oil_synthetic_10w40',
          }),
        },
        `🛢️ +25% ${t('vehicle.action.repair_oil')}`,
      ),
    );

    return el(
      'section',
      { class: 'vehicle-section' },
      el('h3', { class: 'block-title' }, isRestored ? t('vehicle.section.maintenance') : t('vehicle.section.restoration')),
      !isRestored && el('div', { class: 'vehicle-parts-list' }, partsRows),
      maintenanceOps,
    );
  }

  #renderCargoBay(state, vehicle, def, trunkWeight, trunkPct) {
    const packStacks = state.inventory.stacks || [];
    const trunkStacks = vehicle.cargo || [];

    // Left Column: Survivor Pack
    const packItems = packStacks.map((stack) => {
      const item = getItem(stack.itemId);
      return el(
        'li',
        { class: 'cargo-item-row' },
        el(
          'div',
          { class: 'cargo-item-meta' },
          el('span', { class: 'item-glyph' }, item?.glyph || '•'),
          el('span', { class: 'item-title' }, t(`item.${stack.itemId}.name`)),
          el('span', { class: 'item-qty' }, `x${stack.qty}`),
        ),
        el(
          'button',
          {
            type: 'button',
            class: 'btn btn-ghost btn-xs',
            onClick: () => this.#engine.dispatch('vehicles/toCargo', {
              vehicleId: vehicle.id,
              itemId: stack.itemId,
              qty: 1,
            }),
          },
          `→ ${t('vehicle.action.to_trunk')}`,
        ),
      );
    });

    // Right Column: Vehicle Trunk
    const trunkItems = trunkStacks.map((stack) => {
      const item = getItem(stack.itemId);
      return el(
        'li',
        { class: 'cargo-item-row' },
        el(
          'div',
          { class: 'cargo-item-meta' },
          el('span', { class: 'item-glyph' }, item?.glyph || '•'),
          el('span', { class: 'item-title' }, t(`item.${stack.itemId}.name`)),
          el('span', { class: 'item-qty' }, `x${stack.qty}`),
        ),
        el(
          'button',
          {
            type: 'button',
            class: 'btn btn-ghost btn-xs',
            onClick: () => this.#engine.dispatch('vehicles/toPack', {
              vehicleId: vehicle.id,
              itemId: stack.itemId,
              qty: 1,
            }),
          },
          `← ${t('vehicle.action.to_pack')}`,
        ),
      );
    });

    return el(
      'section',
      { class: 'vehicle-section vehicle-cargo-section' },
      el(
        'div',
        { class: 'cargo-bay-head' },
        el('h3', { class: 'block-title' }, `📦 ${t('vehicle.section.cargo_bay')}`),
        el(
          'div',
          { class: 'trunk-capacity-strip' },
          el('span', {}, `${t('vehicle.label.trunk_load')}: `),
          el('strong', {}, `${trunkWeight} / ${def.trunkCapacityKg} kg`),
          el(
            'div',
            { class: 'meter-track meter-track-sm' },
            el('div', { class: 'meter-fill tone-fill-good', style: `width: ${trunkPct}%` }),
          ),
        ),
      ),
      el(
        'div',
        { class: 'cargo-bay-grid' },
        el(
          'div',
          { class: 'cargo-bay-col' },
          el('h4', { class: 'cargo-col-title' }, `🎒 ${t('vehicle.label.pack_inventory')}`),
          packItems.length > 0
            ? el('ul', { class: 'cargo-items-list' }, packItems)
            : el('p', { class: 'muted-note' }, t('vehicle.label.pack_empty')),
        ),
        el(
          'div',
          { class: 'cargo-bay-col' },
          el('h4', { class: 'cargo-col-title' }, `🚙 ${t('vehicle.label.trunk_inventory')}`),
          trunkItems.length > 0
            ? el('ul', { class: 'cargo-items-list' }, trunkItems)
            : el('p', { class: 'muted-note' }, t('vehicle.label.trunk_empty')),
        ),
      ),
    );
  }
}

