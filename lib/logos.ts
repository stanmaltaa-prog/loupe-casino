/** Logos des casinos, fournis par Stan depuis les espaces affiliés (public/logos/<id>.png, 256 × 256). */
const AVEC_LOGO = new Set(['celsius', 'rolletto', 'betportal', '1win']);

export function logoCasino(id: string): string | null {
  return AVEC_LOGO.has(id) ? `/logos/${id}.png` : null;
}
