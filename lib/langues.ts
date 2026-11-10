/**
 * Pages qui existent en français et en anglais (hreflang, sitemap, lien de changement de langue).
 * Clé : adresse française ; valeur : adresse anglaise. Seules les vraies équivalences figurent ici.
 */
const SLUGS_CASINOS = ['velobet-casino', 'rolletto-casino', 'celsius-casino', 'betportal-casino', '1win-casino'];

export const PAIRES: Record<string, string> = {
  '/': '/en-ca/',
  '/bonus-casino-quebec/': '/en-ca/casino-bonuses/',
  '/casino-retrait-rapide/': '/en-ca/fast-withdrawal-casinos/',
  '/casino-interac/': '/en-ca/interac-casinos/',
  '/casino-depot-minimum/': '/en-ca/minimum-deposit-casinos/',
  '/casino-crypto-quebec/': '/en-ca/crypto-casinos/',
  '/casino-en-ligne-canada/': '/en-ca/is-online-gambling-legal-in-canada/',
  '/notre-methode/': '/en-ca/how-we-rate/',
  '/jeu-responsable/': '/en-ca/responsible-gambling/',
  '/a-propos/': '/en-ca/about/',
  '/delais-de-retrait-casino/': '/en-ca/casino-withdrawal-times/',
  '/comparatif/': '/en-ca/compare/',
  ...Object.fromEntries(SLUGS_CASINOS.flatMap((s) => [
    [`/${s}/`, `/en-ca/${s}/`],
    [`/${s}/bonus/`, `/en-ca/${s}/bonus/`],
    [`/${s}/fiable/`, `/en-ca/${s}/legit/`]
  ])),
  ...Object.fromEntries(['velobet-casino', 'rolletto-casino', 'celsius-casino'].map((s) => [`/${s}/retrait/`, `/en-ca/${s}/withdrawal/`]))
};

// Avis des marques sans deal (lib/contenu/marques.ts)
for (const m of ['yukon-gold-casino']) {
  PAIRES[`/${m}/`] = `/en-ca/${m}/`;
  PAIRES[`/${m}/bonus/`] = `/en-ca/${m}/bonus/`;
  PAIRES[`/${m}/bonus-sans-depot/`] = `/en-ca/${m}/no-deposit-bonus/`;
  PAIRES[`/${m}/retrait/`] = `/en-ca/${m}/withdrawal/`;
  PAIRES[`/${m}/fiable/`] = `/en-ca/${m}/legit/`;
}

// Comparatifs : mêmes paires de casinos dans les deux langues (ordre du fichier de données).
const DUELS_COMMUNS = [
  'rolletto-vs-velobet', 'rolletto-vs-celsius', 'rolletto-vs-betportal', 'rolletto-vs-1win', 'velobet-vs-celsius',
  'velobet-vs-betportal', 'velobet-vs-1win', 'celsius-vs-betportal', 'celsius-vs-1win', 'betportal-vs-1win'
];
for (const d of DUELS_COMMUNS) PAIRES[`/comparatif/${d}/`] = `/en-ca/compare/${d}/`;

const INVERSE: Record<string, string> = Object.fromEntries(Object.entries(PAIRES).map(([fr, en]) => [en, fr]));

export function versionAnglaise(cheminFr: string): string | undefined {
  return PAIRES[cheminFr];
}

export function versionFrancaise(cheminEn: string): string | undefined {
  return INVERSE[cheminEn];
}

export function estAnglais(chemin: string): boolean {
  return chemin === '/en-ca' || chemin.startsWith('/en-ca/');
}
