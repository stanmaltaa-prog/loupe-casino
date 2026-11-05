import { typoProfond } from '@/lib/typo';

/**
 * Réglages de la marque. C'est le SEUL fichier à modifier pour changer
 * le nom, le domaine ou les coordonnées du site.
 */
export const SITE = {
  nom: 'Loupe Casino',
  slogan: 'Les casinos en ligne au Québec, passés à la loupe',
  /** Domaine principal, sans barre finale. Peut être remplacé par la variable SITE_URL sur Railway. */
  url: (process.env.SITE_URL || 'https://loupecasino.com').replace(/\/$/, ''),
  /** Courriel de contact affiché sur le site (la variable SITE_COURRIEL sur Railway peut le remplacer). */
  courriel: process.env.SITE_COURRIEL || 'contact@loupecasino.com',
  /** Responsable de la protection des renseignements personnels (Loi 25). À remplir. */
  responsableDonnees: process.env.SITE_RESPONSABLE || '',
  /** Date de la dernière vérification générale des offres (AAAA-MM-JJ). */
  derniereVerification: '2026-11-03',
  langue: 'fr-CA',
  locale: 'fr_CA'
};

export const AIDE = typoProfond({
  nom: 'Jeu : aide et référence',
  telephone: '1 800 461-0140',
  telephoneMontreal: '514 527-0140',
  site: 'https://aidejeu.ca',
  message:
    "18+ seulement. Le jeu doit rester un divertissement, pas un moyen de gagner de l'argent. Besoin d'aide ? Jeu : aide et référence, 1 800 461-0140, ligne sans frais, 24 h sur 24."
});

export function absolu(chemin: string): string {
  if (!chemin || chemin === '/') return `${SITE.url}/`;
  return `${SITE.url}${chemin.startsWith('/') ? '' : '/'}${chemin}${chemin.endsWith('/') ? '' : '/'}`;
}

const MOIS = [
  'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
  'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'
];

/** « 2026-11-03 » → « 3 novembre 2026 » */
export function dateLongue(iso: string): string {
  const [a, m, j] = iso.split('-');
  const jour = Number(j) === 1 ? '1er' : String(Number(j));
  return `${jour} ${MOIS[Number(m) - 1]} ${a}`;
}

/** « 2026-11-03 » → « novembre 2026 » */
export function moisAnnee(iso: string): string {
  const [a, m] = iso.split('-');
  return `${MOIS[Number(m) - 1]} ${a}`;
}

/** Format québécois : 5 500 $ (espaces insécables). */
export function montant(valeur: number, devise: string): string {
  const nombre = valeur.toLocaleString('fr-CA').replace(/\s/g, ' ');
  return `${nombre} ${devise}`;
}

export const ANNEE = '2026';
