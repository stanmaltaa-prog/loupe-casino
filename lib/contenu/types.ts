import type { Question } from '@/components/Faq';

export type Section = { titre: string; paragraphes: string[]; liste?: string[] };

export type PageCasino = {
  /** Balise <title> (60 caractères maximum, la marque du site est ajoutée automatiquement). */
  titre: string;
  /** Méta-description (155 caractères maximum). */
  description: string;
  h1: string;
  intro: string[];
  sections: Section[];
  faq: Question[];
};

export type ContenuCasino = {
  avis: PageCasino & { verdict: string[]; pourQui: string[]; pasPourQui: string[] };
  bonus: PageCasino;
  fiable: PageCasino;
  inscription: PageCasino & { etapes: { titre: string; texte: string }[] };
  retrait?: PageCasino;
};
