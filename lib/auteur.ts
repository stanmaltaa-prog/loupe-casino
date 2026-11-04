import { SITE } from './site';

/** Auteur des contenus du site (page /auteur/…, signature des pages et données structurées). */
export const AUTEUR = {
  nom: 'Kenzo Fitzeral',
  chemin: '/auteur/kenzo-fitzeral/',
  role: 'Fondateur et rédacteur en chef',
  /** Une ligne, affichée dans la signature des pages. */
  accroche: '7 ans de business development dans des casinos en ligne à Malte',
  bio: [
    "Kenzo Fitzeral a travaillé en interne pour plusieurs casinos en ligne à Malte. Il compte 7 ans d'expérience comme business developer dans ce secteur.",
    "Il connaît le fonctionnement des casinos en ligne vu de l'intérieur. C'est la raison d'être de Loupe Casino : afficher les conditions à côté de chaque offre, dater chaque information et dire clairement ce qui n'a pas pu être vérifié."
  ],
  domaines: ['Casinos en ligne', 'Bonus et conditions de mise', 'Machines à sous', 'Paris sportifs', 'Réglementation du jeu au Québec'],
  /** Profils publics de l'auteur, à ajouter quand ils existent (LinkedIn, X…). */
  profils: [] as string[]
};

export const ID_AUTEUR = `${SITE.url}/#auteur`;
