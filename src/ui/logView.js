import { formatClock, readClock } from '../core/clock.js';
import { t } from '../i18n/i18n.js';
import { el } from './dom.js';

export class LogView {
  #listEl;
  #toastEl;
  #toastTimer = null;

  constructor({ listEl, toastEl }) {
    this.#listEl = listEl;
    this.#toastEl = toastEl;
  }

  render(state) {
    const entries = state.log.slice(-60).reverse();
    const nodes = entries.map((entry) => {
      const { day } = readClock(entry.at);
      const stamp = `${t('hud.day_short', { day })} ${formatClock(entry.at)}`;
      return el(
        'li',
        { class: ['log-entry', `tone-${entry.tone ?? 'plain'}`] },
        el('span', { class: 'log-stamp' }, stamp),
        el('span', { class: 'log-msg' }, t(entry.key, entry.params)),
      );
    });
    this.#listEl.replaceChildren(...nodes);
  }

  flashRejection(reasonKey, params = {}) {
    if (!this.#toastEl) return;
    this.#toastEl.textContent = t(reasonKey, params);
    this.#toastEl.classList.add('is-visible');
    clearTimeout(this.#toastTimer);
    this.#toastTimer = setTimeout(() => {
      this.#toastEl.classList.remove('is-visible');
    }, 2400);
  }
}

