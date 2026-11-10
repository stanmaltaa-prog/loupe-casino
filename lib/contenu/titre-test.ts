import brut from '@/donnees/casinos.json';

type TestBrut = { retraitCryptoHeures?: number | null; retraitCarteHeures?: number | null };

/**
 * Titre d'avis qui reprend le délai de retrait constaté lors du dernier test réel
 * (donnees/casinos.json, champ « test »). Le titre suit automatiquement chaque nouveau test.
 * Sans test publié, on garde le titre de secours.
 */
export function titreAvisTeste(id: string, debut: string, secours: string): string {
  const c = (brut.casinos as { id: string; test?: TestBrut }[]).find((x) => x.id === id);
  const h = c?.test?.retraitCryptoHeures;
  if (typeof h !== 'number') return secours;
  return `${debut} : retrait crypto en ${h} h (testé)`;
}
