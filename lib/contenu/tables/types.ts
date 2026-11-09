import type { Question } from '@/components/Faq';

/** Rubrique qui accueille la fiche : /casino-en-direct/, /roulette-en-ligne/ ou /blackjack-en-ligne/. */
export type Famille = 'show' | 'roulette' | 'blackjack';

export type Tableau = { legende: string; entetes: string[]; lignes: string[][]; note?: string };

export type TableJeu = {
  /** Adresse : /<rubrique>/<slug>/ */
  slug: string;
  nom: string;
  famille: Famille;
  /** Éditeur du jeu (studio qui le diffuse). */
  fournisseur: string;
  /** Comment le jeu se joue : en direct ou en numérique, avec ou sans croupier. */
  format: string;
  /** Année de sortie, ou null si elle n'est pas confirmée. */
  annee: number | null;
  /** Recherches mensuelles au Canada (Ubersuggest, novembre 2026), 0 si non mesuré. */
  volume: number;
  /** RTP principal, ou null si aucune source fiable ne le publie. */
  rtp: number | null;
  /** « officiel » : page de l'éditeur ; « base » : SlotCatalog ; « calcul » : mathématique du jeu. */
  rtpSource: 'officiel' | 'base' | 'calcul' | null;
  /** Précision sur le RTP (mise par mise, stratégie, versions). */
  rtpNote: string;
  /** Gain maximal tel que publié (« 20 000× la mise », « 500 000 $ »), ou null. */
  gainMax: string | null;
  /** Balise <title> et méta-description, écrites à la main pour la recherche visée. */
  titre: string;
  description: string;
  h1: string;
  chapeau: string;
  /** Comment se déroule une partie. */
  principe: string[];
  etapes: string[];
  /** Bonus, mises spéciales ou règles particulières. */
  particularites: { nom: string; texte: string }[];
  /** Tableau de probabilités ou de paiements, calculé à partir des règles publiées. */
  tableau?: Tableau;
  analyse: string[];
  pourQui: string;
  attention: string;
  faq: Question[];
  /** Fiches voisines (slugs de jeux de table). */
  similaires: string[];
  /** Machines à sous liées (slugs de /machines-a-sous/). */
  machinesLiees?: string[];
  sources: { titre: string; url: string }[];
  verifieLe: string;
};
