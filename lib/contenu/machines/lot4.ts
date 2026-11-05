import type { Machine } from './types';

/**
 * Lot 4 (novembre 2026) : Moon Princess (Play'n GO) et R.I.P. City (Hacksaw Gaming), démos intégrées ;
 * Big Bamboo (Push Gaming) et Dead or Alive 2 (NetEnt), démos chez l'éditeur.
 * Règles et RTP : fiches officielles. Compléments signalés : SlotCatalog.
 * volume à 0 : la requête est ambiguë (plante, jeu vidéo…) et aucune variante « slot » n'est mesurée.
 */
const V = '2026-11-05';
const sc = (nom: string, chemin: string) => ({ titre: `SlotCatalog, fiche ${nom}`, url: `https://slotcatalog.com/en/slots/${chemin}` });

const lot4: Machine[] = [
  {
    slug: 'moon-princess',
    nom: 'Moon Princess',
    fournisseur: "Play'n GO",
    fournisseurId: 'play-n-go',
    volume: 170,
    difficulte: 30,
    rtp: 96.5,
    rtpSource: 'base',
    rtpAutres: [94.51],
    volatilite: 'Élevée',
    gainMax: 5000,
    annee: 2017,
    grille: '5 × 5',
    gains: 'Groupes de 3 symboles identiques ou plus, reliés horizontalement ou verticalement, avec cascades',
    toursGratuits: 'Vider les 25 cases de la grille : tours gratuits avec multiplicateur croissant, relançables jusqu’à 20 tours d’affilée',
    multiplicateurs: 'Le multiplicateur de gain augmente à chaque cascade ; en tours gratuits, jusqu’à 20 fois le gain ordinaire',
    achatBonus: null,
    theme: 'Fantaisie : trois princesses de la Lune',
    analyse: [
      "Moon Princess, sorti en juillet 2017 chez Play'n GO, se joue sur une grille de 5 × 5, il faut relier au moins trois symboles identiques à l'horizontale ou à la verticale. Les symboles gagnants disparaissent, ceux du dessus tombent, et le multiplicateur de gain augmente à chaque nouvelle chute.",
      "Après un tour perdant, une des trois princesses peut intervenir au hasard : Love transforme des symboles, Star ajoute des wilds et Storm en fait disparaître. Les gains remplissent aussi la jauge Princess Trinity, qui lance une relance où les trois princesses agissent ensemble. Vider les 25 cases de la grille ouvre les tours gratuits, dont vous choisissez le nombre et la princesse ; les vider à nouveau pendant le bonus rapporte 100 fois la mise totale."
    ],
    pourQui: 'Les joueurs qui aiment les grilles à cascades et les bonus où l’on fait des choix.',
    attention: 'Le jeu existe en plusieurs réglages de RTP (96,50 % et 94,51 % selon SlotCatalog) : vérifiez celui de votre casino dans l’aide du jeu.',
    faq: [
      { q: 'Quel est le RTP de Moon Princess ?', r: '96,50 % selon SlotCatalog, qui recense aussi une version à 94,51 %. Play’n GO ne l’affiche pas sur sa fiche.' },
      { q: 'Comment déclencher les tours gratuits de Moon Princess ?', r: 'En vidant les 25 cases de la grille au cours d’un même tour. Vous choisissez ensuite le nombre de tours et la princesse qui vous aide.' },
      { q: 'Que font les trois princesses ?', r: 'Love transforme des symboles, Star ajoute des wilds et Storm fait disparaître des symboles, selon Play’n GO.' }
    ],
    similaires: ['reactoonz', 'sugar-rush', 'jammin-jars'],
    sources: [{ titre: "Play'n GO, fiche officielle Moon Princess", url: 'https://www.playngo.com/games/moon-princess' }, sc('Moon Princess', 'Moon-Princess')],
    verifieLe: V
  },
  {
    slug: 'rip-city',
    nom: 'R.I.P. City',
    fournisseur: 'Hacksaw Gaming',
    fournisseurId: 'hacksaw-gaming',
    volume: 40,
    difficulte: 17,
    rtp: 96.22,
    rtpSource: 'officiel',
    rtpAutres: [94.27, 92.32, 88.02],
    volatilite: 'Moyenne',
    gainMax: 12500,
    annee: 2023,
    grille: '5 rouleaux × 5 rangées, 19 lignes',
    gains: 'Lignes de paiement',
    toursGratuits: 'Deux bonus : Ro$$ (Wild Cats plus fréquents) et Maxx (chaque rouleau touché par un Wild Cat reste actif jusqu’à la fin)',
    multiplicateurs: 'Un WILD recouvert par un Wild Cat devient un multiplicateur appliqué à tout le Wild Cat',
    achatBonus: 'Oui (Bonus Buy et FeatureSpins), selon le pays',
    theme: 'Dessin animé : le chat et la souris en ville',
    analyse: [
      "R.I.P. City reprend l'humour des vieux dessins animés : Ro$$ le chat et Maxx la souris s'affrontent sur une grille de 5 × 5 et 19 lignes. Le Wild Cat descend pour former un wild étendu, qui peut couvrir tout le rouleau ; s'il recouvre un WILD ordinaire, celui-ci devient un multiplicateur appliqué à tout le Wild Cat.",
      "Les deux bonus ont chacun leur logique. Dans celui de Ro$$, les Wild Cats tombent plus souvent, et cinq Wild Cats sur la rangée du haut remplissent tout l'écran. Dans celui de Maxx, le premier Wild Cat sur un rouleau active ce rouleau pour le reste du bonus. Hacksaw Gaming annonce un gain maximal de 12 500 fois la mise et une volatilité de 3 sur 5."
    ],
    pourQui: 'Les joueurs qui veulent un jeu Hacksaw à volatilité moyenne, moins extrême que Wanted Dead or a Wild.',
    attention: 'Quatre réglages de RTP existent, de 96,22 % à 88,02 % selon Hacksaw Gaming : l’écart est important, vérifiez la version de votre casino.',
    faq: [
      { q: 'Quel est le RTP de R.I.P. City ?', r: '96,22 % dans sa meilleure version, selon Hacksaw Gaming. Les autres réglages sont 94,27 %, 92,32 % et 88,02 %.' },
      { q: 'Quel est le gain maximal de R.I.P. City ?', r: '12 500 fois la mise, selon Hacksaw Gaming.' },
      { q: 'Quelle différence entre les bonus Ro$$ et Maxx ?', r: 'Ro$$ rend les Wild Cats plus fréquents ; Maxx garde actif, jusqu’à la fin du bonus, chaque rouleau où un Wild Cat est déjà tombé.' }
    ],
    similaires: ['le-bandit', 'wanted-dead-or-a-wild', 'chaos-crew'],
    sources: [{ titre: 'Hacksaw Gaming, fiche officielle R.I.P. City', url: 'https://www.hacksawgaming.com/games/rip-city' }, sc('R.I.P. City', 'RIP-City')],
    verifieLe: V
  },
  {
    slug: 'big-bamboo',
    nom: 'Big Bamboo',
    fournisseur: 'Push Gaming',
    fournisseurId: 'push-gaming',
    volume: 0,
    difficulte: 29,
    rtp: 96.13,
    rtpSource: 'officiel',
    rtpAutres: [94.13],
    volatilite: 'Élevée',
    gainMax: 50000,
    annee: 2022,
    grille: '5 rouleaux, selon SlotCatalog 6 rangées et 50 lignes',
    gains: 'Lignes de paiement',
    toursGratuits: 'Gamble Scatter (rouleaux 2 à 4) ou prix Free Spins du Golden Bamboo : tours gratuits et conversions de symboles, à encaisser ou à jouer à la roue',
    multiplicateurs: 'Golden Bamboo : symboles multiplicateurs jusqu’à 10× et prix instantanés jusqu’à 5 000×',
    achatBonus: 'Oui, selon le pays',
    theme: 'Forêt de bambous, inspiration asiatique',
    analyse: [
      "Le cœur de Big Bamboo est le Golden Bamboo : une relance pendant laquelle peuvent tomber des prix instantanés jusqu'à 5 000 fois la mise, des multiplicateurs jusqu'à 10×, des scatters ou des symboles collecteurs. Les Mystery Stacks, qui apparaissent n'importe où, révèlent des wilds, des symboles payants ou un Golden Bamboo.",
      "Les tours gratuits commencent par un choix : le Gamble Scatter, sur les rouleaux 2, 3 et 4, attribue un nombre de tours et de conversions de symboles faibles en bambous. Vous pouvez encaisser, ou tenter la roue pour obtenir une meilleure option. Push Gaming indique un plus gros gain observé de 50 000 fois la mise et une volatilité élevée."
    ],
    pourQui: 'Les joueurs expérimentés qui aiment les bonus à choix et acceptent une très forte volatilité.',
    attention: 'Tenter la roue est un pari : lisez dans l’aide du jeu ce que vous risquez avant de rejouer vos tours gratuits.',
    faq: [
      { q: 'Quel est le RTP de Big Bamboo ?', r: '96,13 % selon Push Gaming, qui publie aussi une version à 94,13 %.' },
      { q: 'Quel est le gain maximal de Big Bamboo ?', r: 'Push Gaming indique un plus gros gain observé de 50 000 fois la mise.' },
      { q: 'Comment fonctionne le Golden Bamboo ?', r: 'C’est une relance pendant laquelle peuvent tomber des prix instantanés jusqu’à 5 000× la mise, des multiplicateurs jusqu’à 10×, des scatters ou des symboles collecteurs.' }
    ],
    similaires: ['razor-shark', 'jammin-jars', 'wanted-dead-or-a-wild'],
    sources: [{ titre: 'Push Gaming, fiche officielle Big Bamboo', url: 'https://www.pushgaming.com/games/big-bamboo.html' }, sc('Big Bamboo', 'Big-Bamboo')],
    verifieLe: V
  },
  {
    slug: 'dead-or-alive-2',
    nom: 'Dead or Alive 2',
    fournisseur: 'NetEnt',
    fournisseurId: 'netent',
    volume: 0,
    difficulte: 34,
    rtp: 96.8,
    rtpSource: 'officiel',
    rtpAutres: [],
    volatilite: 'Élevée',
    gainMax: 100000,
    annee: 2019,
    grille: '5 rouleaux × 3 rangées, 9 lignes',
    gains: 'Lignes de paiement ; 2 à 5 scatters payent de 2× à 2 500× la mise',
    toursGratuits: '3 scatters ou plus : 12 tours gratuits, à choisir entre Old Saloon, High Noon Saloon et Train Heist',
    multiplicateurs: 'Old Saloon : ×2 sur tous les gains ; High Noon Saloon : wilds doubles et triples ; Train Heist : jusqu’à ×16',
    achatBonus: 'Oui, selon le pays',
    theme: 'Far West',
    analyse: [
      "Dead or Alive 2 (avril 2019) est la suite du classique de NetEnt. Le jeu de base reste sobre : 5 rouleaux, 9 lignes, et des scatters qui paient d'eux-mêmes de 2 à 2 500 fois la mise. Selon NetEnt, un tour sur trois environ rapporte quelque chose (fréquence de gain de 30 %).",
      "Trois scatters ou plus donnent 12 tours gratuits et un choix entre trois bonus. Old Saloon double tous les gains, avec des wilds collants. High Noon Saloon transforme les wilds d'un même rouleau en multiplicateurs doubles ou triples. Train Heist remplit une jauge à chaque wild, jusqu'à un multiplicateur de 16× : c'est là que NetEnt situe les gains jusqu'à 100 000 fois la mise."
    ],
    pourQui: 'Les joueurs patients, attirés par un très gros potentiel, qui acceptent de longues séries sans bonus.',
    attention: 'La fiche de NetEnt annonce jusqu’à 100 000× la mise dans son texte, mais affiche 1 600× dans son encadré de chiffres : vérifiez le gain maximal dans l’aide du jeu de votre casino.',
    faq: [
      { q: 'Quel est le RTP de Dead or Alive 2 ?', r: '96,80 % selon la fiche officielle de NetEnt.' },
      { q: 'Quel bonus choisir dans Dead or Alive 2 ?', r: 'Old Saloon double tous les gains, High Noon Saloon transforme les wilds en multiplicateurs, et Train Heist fait monter un multiplicateur jusqu’à 16× : c’est dans ce bonus que NetEnt situe les gains jusqu’à 100 000× la mise.' },
      { q: 'Peut-on jouer à Dead or Alive 2 gratuitement ?', r: 'Oui, la démo officielle est proposée sur le site de NetEnt. Elle s’ouvre dans un nouvel onglet.' }
    ],
    similaires: ['starburst', 'gonzos-quest', 'wanted-dead-or-a-wild'],
    sources: [{ titre: 'NetEnt, fiche officielle Dead or Alive 2', url: 'https://netent.com/games/dead-or-alive-2' }, sc('Dead or Alive 2', 'Dead-or-Alive-2')],
    verifieLe: V
  }
];

export default lot4;
