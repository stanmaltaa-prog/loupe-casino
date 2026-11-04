import type { Machine } from './types';

/**
 * Nolimit City (novembre 2026) : les jeux phares du studio, relevés sur les fiches officielles
 * nolimitcity.com (chiffres de l'en-tête et rubrique « Game Features »).
 */
const V = '2026-11-04';
const nl = (nom: string, chemin: string) => ({ titre: `Nolimit City, fiche officielle ${nom}`, url: `https://www.nolimitcity.com/games/${chemin}` });
const NL = { fournisseur: 'Nolimit City', fournisseurId: 'nolimit-city' };

const nolimit: Machine[] = [
  {
    slug: 'tombstone-rip',
    nom: 'Tombstone R.I.P.',
    ...NL,
    volume: 50,
    difficulte: 24,
    rtp: 96.08,
    rtpSource: 'officiel',
    rtpAutres: [],
    volatilite: 'Élevée',
    gainMax: 300000,
    annee: 2022,
    grille: 'Format « 3-5 » (rangées-rouleaux) selon la fiche officielle',
    gains: 'Combinaisons de symboles ; les wilds xSplit augmentent le nombre de façons de gagner',
    toursGratuits: '3 scatters : 8 Hang ’em High Freespins ; 3 scatters + 1 scatter Boothill : 10 Boothill Freespins',
    multiplicateurs: 'Wilds xNudge (+1 par décalage), multiplicateur de 5× à 999× sur un cow-boy à chaque tour des Boothill Freespins',
    achatBonus: 'Oui, de 70× à 3 000× la mise selon le bonus, retiré dans certains marchés réglementés',
    theme: 'Western sanglant à Tombstone',
    analyse: [
      "Tombstone R.I.P. (janvier 2022) est l'un des jeux les plus extrêmes de Nolimit City : la page officielle le classe en volatilité « Insane », et son gain maximal atteint 300 000 fois la mise, avec une probabilité d'environ 1 sur 130 millions. Seuls 9,08 % des tours rapportent quelque chose, selon l'éditeur.",
      "Sa règle la plus dure s'appelle xRIP : si le gain total d'un tour est inférieur à la mise de base, il n'est pas payé du tout. Les wilds xNudge glissent pour devenir entièrement visibles et augmentent leur multiplicateur à chaque décalage, tandis que les wilds xSplit du dernier rouleau coupent en deux les symboles à leur gauche. Le bonus Boothill, plus rare, ajoute un multiplicateur de 5× à 999× sur un cow-boy à chaque tour."
    ],
    pourQui: 'Les joueurs très expérimentés, qui acceptent de nombreux tours sans gain dans l’espoir d’un très gros multiplicateur.',
    attention: 'Avec xRIP, les petits gains inférieurs à la mise ne sont pas payés : le solde baisse vite. L’option Enhanced Bet augmente la mise de 10 %.',
    faq: [
      { q: 'Quel est le RTP de Tombstone R.I.P. ?', r: '96,08 % selon la fiche officielle de Nolimit City.' },
      { q: 'Qu’est-ce que la règle xRIP ?', r: 'Si le gain total d’un tour est inférieur à la mise de base, il n’est pas payé. C’est ce qui rend le jeu si volatil.' },
      { q: 'Quel est le gain maximal de Tombstone R.I.P. ?', r: '300 000 fois la mise selon Nolimit City, avec une probabilité d’environ 1 sur 130 millions.' }
    ],
    similaires: ['san-quentin', 'mental', 'fire-in-the-hole', 'duck-hunters'],
    sources: [nl('Tombstone R.I.P.', 'tombstone-rip')],
    verifieLe: V
  },
  {
    slug: 'san-quentin',
    nom: 'San Quentin xWays',
    ...NL,
    volume: 20,
    difficulte: 15,
    rtp: 96.03,
    rtpSource: 'officiel',
    rtpAutres: [],
    volatilite: 'Élevée',
    gainMax: 150000,
    annee: 2021,
    grille: '5 rouleaux × 3 rangées, avec des cases Enhancer en haut et en bas de chaque rouleau',
    gains: 'Combinaisons sur rouleaux adjacents ; xWays et Razor Split multiplient les façons de gagner',
    toursGratuits: '3, 4 ou 5 symboles bonus : Lockdown Spins avec 1, 2 ou 3 Jumping Wilds',
    multiplicateurs: 'Jumping Wilds dont le multiplicateur double sur un rouleau Razor Split, jusqu’à 512×',
    achatBonus: 'Oui : 100×, 400× ou 2 000× la mise pour 3, 4 ou 5 symboles bonus, retiré dans certains marchés réglementés',
    theme: 'Prison de haute sécurité',
    analyse: [
      "San Quentin xWays (janvier 2021) est le jeu qui a fait connaître Nolimit City auprès du grand public. Selon la fiche officielle, il peut payer jusqu'à 150 000 fois la mise, et les tours gratuits arrivent en moyenne une fois tous les 230 tours.",
      "Le jeu tourne autour des cases Enhancer, placées en haut et en bas de chaque rouleau : un ou deux symboles bonus les ouvrent et peuvent révéler un symbole fort, un wild, un Razor Split qui coupe les symboles du rouleau en deux, ou un symbole xWays empilé sur quatre. Pendant les Lockdown Spins, toutes les cases sont ouvertes et les Jumping Wilds changent de place à chaque tour."
    ],
    pourQui: 'Les amateurs de gros multiplicateurs qui connaissent déjà les jeux à très haute volatilité.',
    attention: 'Le thème est volontairement provocant, et la volatilité très élevée : prévoyez un budget qui tient plusieurs centaines de tours.',
    faq: [
      { q: 'Quel est le RTP de San Quentin xWays ?', r: '96,03 % selon la fiche officielle de Nolimit City.' },
      { q: 'Quel est le gain maximal de San Quentin ?', r: '150 000 fois la mise selon Nolimit City. Le bonus s’arrête quand ce plafond est atteint.' },
      { q: 'Tous les combien arrivent les tours gratuits de San Quentin ?', r: 'En moyenne une fois tous les 230 tours, selon Nolimit City.' }
    ],
    similaires: ['tombstone-rip', 'mental', 'fire-in-the-hole', 'duck-hunters'],
    sources: [nl('San Quentin xWays', 'san-quentin')],
    verifieLe: V
  },
  {
    slug: 'mental',
    nom: 'Mental',
    ...NL,
    volume: 20,
    difficulte: 21,
    rtp: 96.08,
    rtpSource: 'officiel',
    rtpAutres: [],
    volatilite: 'Élevée',
    gainMax: 66666,
    annee: 2021,
    grille: 'Format « 3-5 » (rangées-rouleaux) selon la fiche officielle',
    gains: 'Combinaisons de symboles ; xWays et xSplit augmentent le nombre de façons de gagner',
    toursGratuits: '3 scorpions : Autopsy Freespins ; avec 1 araignée : Lobotomy Freespins ; avec 2 araignées : Mental Freespins',
    multiplicateurs: 'Dead Patient : multiplicateur de 5× à 9 999× sur un symbole patient',
    achatBonus: 'Oui, de 80× à 1 000× la mise selon le bonus, retiré dans certains marchés réglementés',
    theme: 'Asile psychiatrique, en tons sépia',
    analyse: [
      "Mental (août 2021) se déroule dans un asile psychiatrique, avec un univers volontairement dérangeant. Selon Nolimit City, son gain maximal est de 66 666 fois la mise, atteint environ une fois sur 18 millions, et les tours gratuits arrivent en moyenne une fois tous les 216 tours.",
      "Deux symboles Dead Patient déclenchent un multiplicateur de 5× à 9 999× sur un symbole patient. Les Fire Frames ouvrent des cases Enhancer (xWays, xNudge, xSplit), et l'araignée transforme des symboles. Les tours gratuits existent en trois niveaux, Autopsy, Lobotomy et Mental, selon le nombre d'araignées qui accompagnent les trois scorpions."
    ],
    pourQui: 'Les joueurs à l’aise avec des règles complexes et un thème sombre, qui cherchent de très gros multiplicateurs.',
    attention: 'Les règles sont parmi les plus complexes du marché : essayez la démo avant de miser, et lisez l’aide du jeu.',
    faq: [
      { q: 'Quel est le RTP de Mental ?', r: '96,08 % selon la fiche officielle de Nolimit City.' },
      { q: 'Quel est le gain maximal de Mental ?', r: '66 666 fois la mise selon Nolimit City, avec une probabilité d’environ 1 sur 18 millions.' },
      { q: 'Comment fonctionnent les tours gratuits de Mental ?', r: 'Trois scorpions lancent Autopsy ; avec une araignée, c’est Lobotomy ; avec deux araignées, Mental, le niveau le plus fort.' }
    ],
    similaires: ['tombstone-rip', 'san-quentin', 'fire-in-the-hole', 'duck-hunters'],
    sources: [nl('Mental', 'mental')],
    verifieLe: V
  },
  {
    slug: 'fire-in-the-hole',
    nom: 'Fire in the Hole xBomb',
    ...NL,
    volume: 10,
    difficulte: 12,
    rtp: 96.06,
    rtpSource: 'officiel',
    rtpAutres: [],
    volatilite: 'Élevée',
    gainMax: 60000,
    annee: 2021,
    grille: '6 rouleaux, de 3 à 6 rangées selon les effondrements',
    gains: 'De 64 à 46 656 façons de gagner',
    toursGratuits: '3, 4 ou 5 symboles bonus : Lucky Wagon Spins, avec 2, 3 ou 4 rangées ouvertes et 3 tours remis à zéro à chaque pièce',
    multiplicateurs: 'Wild xBomb : +1 au multiplicateur de gain à chaque explosion',
    achatBonus: 'Oui, retiré dans certains marchés réglementés',
    theme: 'Mine d’or et nains mineurs',
    analyse: [
      "Fire in the Hole xBomb (mars 2021) emmène dans une mine d'or. La grille démarre en 6 × 3 avec 64 façons de gagner et s'agrandit jusqu'à 6 × 6, soit 46 656 façons, à chaque effondrement. Nolimit City la classe en volatilité « Extreme » et annonce un gain maximal de 60 000 fois la mise.",
      "Chaque gain, explosion de wild xBomb ou déclenchement de Wild Mining fait tomber de nouveaux symboles et ouvre une rangée de plus. Les wilds xBomb augmentent le multiplicateur de gain d'un cran à chaque explosion. Le bonus Lucky Wagon Spins repart à 3 tours chaque fois qu'une pièce tombe, et un wagon révèle des pièces, des multiplicateurs, de la dynamite ou le nain."
    ],
    pourQui: 'Les amateurs de cascades et de grilles qui s’agrandissent, prêts à affronter une volatilité très élevée.',
    attention: 'Seul un tour sur quatre environ rapporte quelque chose (25,98 % selon Nolimit City) : la plupart des gains sont petits.',
    faq: [
      { q: 'Quel est le RTP de Fire in the Hole ?', r: '96,06 % selon la fiche officielle de Nolimit City.' },
      { q: 'Combien de façons de gagner à Fire in the Hole ?', r: 'De 64, avec 3 rangées, à 46 656, avec 6 rangées, selon Nolimit City.' },
      { q: 'Quel est le gain maximal de Fire in the Hole ?', r: '60 000 fois la mise selon Nolimit City, avec une probabilité d’environ 1 sur 2,4 millions.' }
    ],
    similaires: ['san-quentin', 'tombstone-rip', 'mental', 'duck-hunters'],
    sources: [nl('Fire in the Hole xBomb', 'fire-in-the-hole')],
    verifieLe: V
  }
];

export default nolimit;
