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
  ...Object.fromEntries(SLUGS_CASINOS.flatMap((s) => [
    [`/${s}/`, `/en-ca/${s}/`],
    [`/${s}/bonus/`, `/en-ca/${s}/bonus/`]
  ]))
};

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
