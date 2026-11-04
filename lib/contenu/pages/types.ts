import type { Question } from '@/components/Faq';

/**
 * Langage de mise en forme des textes :
 * - [texte](/chemin/) fait un lien interne, [texte](https://…) un lien externe ;
 * - **texte** met en gras.
 */
export type Bloc =
  | { type: 'p'; texte: string }
  | { type: 'liste'; items: string[]; ordonnee?: boolean }
  | { type: 'tableau'; entetes: string[]; lignes: string[][]; legende?: string }
  | { type: 'encadre'; titre: string; texte: string; ton?: 'info' | 'alerte' | 'bon' }
  | { type: 'offres'; casinos?: string[]; titre?: string }
  | { type: 'liens'; items: { href: string; titre: string; texte: string }[] }
  /** Offre précise d'un casino (ex. bonus sport), avec bouton de sortie et mention légale. */
  | { type: 'cta'; casino: string; titre: string; detail: string; bouton: string }
  /** Illustration dessinée (cartes, tableaux de stratégie…), voir components/IllustrationsGuides.tsx. */
  | { type: 'illustration'; nom: 'bj-mains' | 'bj-strategie' | 'bj-paiement' }
  /** Grille d'images des machines à sous (toutes, ou une liste de slugs). */
  | { type: 'grille-jeux'; slugs?: string[] };

export type SectionGuide = { id: string; titre: string; blocs: Bloc[] };

export type PageGuide = {
  /** Adresse, avec barres obliques (ex. /aviator/). */
  chemin: string;
  /** Nom court affiché dans le fil d'Ariane. */
  nomFil: string;
  /** Parent dans le fil d'Ariane (ex. { nom: 'Jeux', chemin: '/jeux/' }). */
  parent?: { nom: string; chemin: string };
  /** Balise <title>, 60 caractères maximum. */
  titre: string;
  /** Méta-description, 155 caractères maximum. */
  description: string;
  h1: string;
  chapeau: string;
  /** Date de dernière vérification du contenu (AAAA-MM-JJ). */
  modifie: string;
  /** Casinos à mettre en avant en haut de page (identifiants), ou aucun. */
  offresHaut?: string[];
  sections: SectionGuide[];
  faq: Question[];
  sources?: { titre: string; url: string }[];
  /** Pages liées affichées en bas (chemins). */
  connexes?: string[];
  /** Résumé d'une phrase utilisé quand d'autres pages renvoient vers celle-ci. */
  resume: string;
};
