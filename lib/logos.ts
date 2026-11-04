/**
 * Logos des casinos, fournis par Stan depuis les espaces affiliés (public/logos/<id>.png, 256 × 256).
 * Le site sert une copie WebP de 128 × 128 (affichée à 56 px au plus) : environ dix fois plus légère.
 */
const AVEC_LOGO = new Set(['celsius', 'rolletto', 'betportal', '1win']);

export function logoCasino(id: string): string | null {
  return AVEC_LOGO.has(id) ? `/logos/${id}.webp` : null;
}
