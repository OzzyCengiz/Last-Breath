export const MINUTES_PER_HOUR = 60;
export const MINUTES_PER_DAY = 24 * MINUTES_PER_HOUR;

/** The collapse clock starts on day 1 at 06:00. */
export const START_MINUTES = 6 * MINUTES_PER_HOUR;

export function readClock(totalMinutes) {
  const day = Math.floor(totalMinutes / MINUTES_PER_DAY) + 1;
  const minuteOfDay = totalMinutes % MINUTES_PER_DAY;
  return {
    day,
    hour: Math.floor(minuteOfDay / MINUTES_PER_HOUR),
    minute: Math.floor(minuteOfDay % MINUTES_PER_HOUR),
  };
}

export function formatClock(totalMinutes) {
  const { hour, minute } = readClock(totalMinutes);
  return `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
}

export function isNight(totalMinutes) {
  const { hour } = readClock(totalMinutes);
  return hour >= 20 || hour < 6;
}

export function daysElapsed(totalMinutes) {
  return Math.max(0, (totalMinutes - START_MINUTES) / MINUTES_PER_DAY);
}

export const DAYS_PER_SEASON = 10;
export const SEASONS = Object.freeze(['spring', 'summer', 'autumn', 'winter']);
export const SEASON_GLYPHS = Object.freeze({
  spring: '🌱',
  summer: '☀️',
  autumn: '🍂',
  winter: '❄️',
});

/**
 * Returns the active season based on elapsed days.
 * Cycles every 40 days: Spring (1-10), Summer (11-20), Autumn (21-30), Winter (31-40).
 */
export function getSeasonInfo(totalMinutes) {
  const { day } = readClock(totalMinutes);
  const zeroBasedDay = Math.max(0, day - 1);
  const seasonIndex = Math.floor(zeroBasedDay / DAYS_PER_SEASON) % SEASONS.length;
  const id = SEASONS[seasonIndex];
  const dayOfSeason = (zeroBasedDay % DAYS_PER_SEASON) + 1;
  return {
    id,
    index: seasonIndex,
    dayOfSeason,
    daysPerSeason: DAYS_PER_SEASON,
    glyph: SEASON_GLYPHS[id],
  };
}

export function getSeason(totalMinutes) {
  return getSeasonInfo(totalMinutes).id;
}

