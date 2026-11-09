import brut from '@/donnees/tests.json';
import { CASINOS, type Casino } from '@/lib/casinos';

/**
 * Journal des tests réels (donnees/tests.json) : une ligne par retrait testé par l'auteur.
 * Sert la page « délais de retrait » en français et en anglais.
 */
export type Moyen = 'crypto' | 'carte';

export type Releve = { date: string; casino: string; moyen: Moyen; delaiHeures: number; note: string };

export const RELEVES: Releve[] = (brut.tests as Releve[])
  .filter((r) => CASINOS.some((c) => c.id === r.casino))
  .sort((a, b) => (a.date === b.date ? a.casino.localeCompare(b.casino) : b.date.localeCompare(a.date)));

/** Date du relevé le plus récent (AAAA-MM-JJ). */
export const DERNIER_RELEVE: string = RELEVES.reduce((m, r) => (r.date > m ? r.date : m), '2026-11-09');

/** Dernier délai constaté pour un casino et un moyen de paiement, ou null. */
export function dernier(c: Casino, moyen: Moyen): Releve | null {
  return RELEVES.find((r) => r.casino === c.id && r.moyen === moyen) || null;
}

export function nombreDeReleves(c: Casino): number {
  return RELEVES.filter((r) => r.casino === c.id).length;
}

/** Casinos testés, du retrait crypto le plus rapide au plus lent (puis carte). */
export function classementRetraits(): Casino[] {
  const cle = (c: Casino) => [dernier(c, 'crypto')?.delaiHeures ?? 999, dernier(c, 'carte')?.delaiHeures ?? 999];
  return CASINOS.filter((c) => dernier(c, 'crypto') || dernier(c, 'carte')).sort((a, b) => {
    const [ca, ka] = cle(a);
    const [cb, kb] = cle(b);
    return ca - cb || ka - kb;
  });
}
