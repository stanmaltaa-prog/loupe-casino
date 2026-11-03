/**
 * Typographie française (convention québécoise) :
 * espace insécable avant le deux-points, espace fine insécable avant ; ? !,
 * nombres et unités soudés (5 500 $, 30 %, 5 jours, 18 ans).
 * Évite qu'un « $ » ou un « : » se retrouve seul en début de ligne.
 */
const NBSP = ' ';
const FINE = ' ';

export function typo(s: string): string {
  if (!s || typeof s !== 'string') return s;
  return s
    .replace(/(\d) (?=\d{3}(?!\d))/g, `$1${FINE}`)
    .replace(/(\d) (?=[$%€£])/g, `$1${NBSP}`)
    .replace(/(\d) (?=(fois|jours?|tours?|ans|heures|h|mois|semaines?|USDT|mBTC|casinos|cryptomonnaies|dépôts?|critères)\b)/g, `$1${NBSP}`)
    .replace(/ :/g, `${NBSP}:`)
    .replace(/ ([;?!])/g, `${FINE}$1`)
    .replace(/« /g, `«${NBSP}`)
    .replace(/ »/g, `${NBSP}»`);
}

const CLES_EXCLUES = new Set(['lien', 'source', 'id', 'slug', 'couleur', 'initiale', 'base', 'statut', 'interac']);

/** Applique typo() à toutes les chaînes d'un objet, sauf aux clés techniques. */
export function typoProfond<T>(valeur: T, cle?: string): T {
  if (typeof valeur === 'string') return (cle && CLES_EXCLUES.has(cle) ? valeur : typo(valeur)) as T;
  if (Array.isArray(valeur)) return valeur.map((v) => typoProfond(v, cle)) as T;
  if (valeur && typeof valeur === 'object') {
    const res: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(valeur as Record<string, unknown>)) res[k] = typoProfond(v, k);
    return res as T;
  }
  return valeur;
}
