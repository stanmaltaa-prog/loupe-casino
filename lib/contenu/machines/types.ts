import type { Question } from '@/components/Faq';

export type Machine = {
  /** Adresse : /machines-a-sous/<slug>/ */
  slug: string;
  nom: string;
  fournisseur: string;
  /** Studio qui a créé le jeu, quand il diffère du fournisseur. */
  studio?: string;
  /** Identifiant de la page fournisseur (/fournisseurs/<id>/), s'il y en a une. */
  fournisseurId?: string;
  /** Recherches mensuelles au Canada (Ubersuggest, novembre 2026) et difficulté en français. */
  volume: number;
  difficulte: number;
  rtp: number;
  /** « officiel » : fiche du fournisseur ; « base » : base de données SlotCatalog. */
  rtpSource: 'officiel' | 'base';
  rtpAutres: number[];
  volatilite: 'Faible' | 'Faible à moyenne' | 'Moyenne' | 'Moyenne à élevée' | 'Élevée';
  /** Gain maximal en nombre de fois la mise, ou null s'il n'est pas confirmé. */
  gainMax: number | null;
  annee: number;
  grille: string;
  gains: string;
  toursGratuits: string;
  multiplicateurs: string | null;
  achatBonus: string | null;
  theme: string;
  /** Deux ou trois paragraphes d'analyse propres au jeu. */
  analyse: string[];
  pourQui: string;
  attention: string;
  faq: Question[];
  similaires: string[];
  sources: { titre: string; url: string }[];
  verifieLe: string;
};
