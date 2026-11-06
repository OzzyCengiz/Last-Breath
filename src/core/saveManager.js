import { SAVE_VERSION } from './coreModule.js';

const SAVE_KEY = 'lastbreath.save';
const AUTOSAVE_DELAY_MS = 600;

/**
 * Ordered upgrade steps. MIGRATIONS[n] upgrades a version-n payload to n + 1.
 * Add an entry here whenever the persisted shape changes incompatibly.
 */
const MIGRATIONS = {};

function migrate(payload) {
  let current = payload;
  while (current.version < SAVE_VERSION) {
    const step = MIGRATIONS[current.version];
    if (!step) throw new Error(`No migration from save version ${current.version}`);
    current = { ...step(current), version: current.version + 1 };
  }
  return current;
}

export class SaveManager {
  #store;
  #rng;
  #storage;
  #timer = null;

  constructor({ store, rng, storage = globalThis.localStorage }) {
    this.#store = store;
    this.#rng = rng;
    this.#storage = storage;
  }

  save() {
    const payload = {
      version: SAVE_VERSION,
      savedAt: Date.now(),
      rng: this.#rng.state,
      state: this.#store.state,
    };
    try {
      this.#storage.setItem(SAVE_KEY, JSON.stringify(payload));
      return true;
    } catch (error) {
      console.error('[save] write failed', error);
      return false;
    }
  }

  load() {
    const raw = this.#storage.getItem(SAVE_KEY);
    if (!raw) return null;
    try {
      const payload = migrate(JSON.parse(raw));
      return { state: payload.state, rng: payload.rng, savedAt: payload.savedAt };
    } catch (error) {
      console.error('[save] unreadable save discarded', error);
      return null;
    }
  }

  clear() {
    clearTimeout(this.#timer);
    this.#storage.removeItem(SAVE_KEY);
  }

  watch(bus) {
    return bus.on('state:changed', () => {
      clearTimeout(this.#timer);
      this.#timer = setTimeout(() => this.save(), AUTOSAVE_DELAY_MS);
    });
  }
}

