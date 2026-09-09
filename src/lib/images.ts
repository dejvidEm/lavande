/**
 * Loading stratégia fotiek: vizuálna kvalita ostáva (AVIF q=90),
 * rýchlosť ide z presného `sizes`, moderného formátu a lazy-loadu.
 *
 * Container: max 1320px, padding 20 / 24 / 36 / 40 px.
 * Breakpointy zodpovedajú Tailwind sm/lg/xl, nie off-by-one na `max-width`.
 */
export const IMAGE_QUALITY = {
  photo: 90,
} as const;

export const imageSizes = {
  /** Hero vnútri containeru, nie na celú šírku viewportu. */
  hero: "(max-width: 639px) calc(100vw - 40px), (max-width: 1023px) calc(100vw - 48px), (max-width: 1279px) calc(100vw - 72px), min(1240px, calc(100vw - 80px))",

  /**
   * Prečo Lavande: 2 stĺpce do xl, potom 4.
   * Starý `50vw` až do 1280px posielal na desktop 1080px do 320px karty.
   */
  benefit:
    "(max-width: 639px) calc((100vw - 52px) / 2), (max-width: 1023px) calc((100vw - 72px) / 2), (max-width: 1279px) calc((100vw - 96px) / 2), calc((min(100vw, 1320px) - 152px) / 4)",

  /** O štúdiu, lektorka, hero lekcie: full width do lg, potom polovička. */
  split:
    "(max-width: 639px) calc(100vw - 40px), (max-width: 1023px) calc(100vw - 48px), calc((min(100vw, 1320px) - 120px) / 2)",
} as const;
