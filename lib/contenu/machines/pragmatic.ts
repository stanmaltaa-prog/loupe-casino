import type { Machine } from './types';

const V = '2026-11-03';
const sc = (nom: string, chemin: string) => ({ titre: `SlotCatalog, fiche ${nom}`, url: `https://slotcatalog.com/en/slots/${chemin}` });
const pp = (nom: string, chemin: string) => ({ titre: `Pragmatic Play, fiche officielle ${nom}`, url: `https://www.pragmaticplay.com/en/games/${chemin}/` });
const PP = { fournisseur: 'Pragmatic Play', fournisseurId: 'pragmatic-play' };

const pragmatic: Machine[] = [
  {
    slug: 'sweet-bonanza',
    nom: 'Sweet Bonanza',
    ...PP,
    volume: 1600,
    difficulte: 49,
    rtp: 96.51,
    rtpSource: 'base',
    rtpAutres: [],
    volatilite: 'Moyenne à élevée',
    gainMax: 21100,
    annee: 2019,
    grille: '6 rouleaux × 5 rangées',
    gains: 'Paiement partout : 8 symboles identiques ou plus, avec cascades',
    toursGratuits: '4 scatters ou plus : 10 tours gratuits, +5 tours si 3 scatters reviennent',
    multiplicateurs: 'Bombes multiplicatrices jusqu’à 100×, additionnées sur un même tour',
    achatBonus: '100 × la mise, selon le pays',
    theme: 'Bonbons et fruits',
    analyse: [
      "Sweet Bonanza est la machine à sous la plus recherchée au Canada dans notre étude. Son principe a fait école : pas de lignes, il suffit de 8 bonbons ou fruits identiques n'importe où sur la grille, et les symboles gagnants disparaissent pour laisser tomber les suivants. Un seul tour peut donc enchaîner plusieurs gains.",
      "Tout se joue dans les tours gratuits : les bombes multiplicatrices, jusqu'à 100×, s'additionnent et s'appliquent au gain du tour. En jeu de base, les gains restent souvent modestes, ce qui explique sa volatilité moyenne à élevée. La mise « ante » (+25 %) double les chances de déclencher le bonus, mais augmente d'autant le coût de chaque tour."
    ],
    pourQui: 'Les joueurs qui aiment les tours gratuits spectaculaires et acceptent des séries de petits gains entre deux bonus.',
    attention: "La base de données SlotCatalog indique que des versions à RTP nettement plus bas existent selon l'opérateur : vérifiez le RTP affiché dans l'aide du jeu.",
    faq: [
      { q: 'Combien de tours gratuits donne Sweet Bonanza ?', r: '10 tours gratuits avec 4 scatters ou plus, et 5 tours de plus si 3 scatters réapparaissent pendant le bonus.' },
      { q: 'Quel est le gain maximal de Sweet Bonanza ?', r: '21 100 fois la mise, selon la fiche SlotCatalog.' }
    ],
    similaires: ['sweet-bonanza-1000', 'sugar-rush', 'gates-of-olympus'],
    sources: [sc('Sweet Bonanza', 'Sweet-Bonanza')],
    verifieLe: V
  },
  {
    slug: 'gates-of-olympus',
    nom: 'Gates of Olympus',
    ...PP,
    volume: 1000,
    difficulte: 18,
    rtp: 96.5,
    rtpSource: 'officiel',
    rtpAutres: [95.51],
    volatilite: 'Élevée',
    gainMax: 5000,
    annee: 2021,
    grille: '6 rouleaux × 5 rangées',
    gains: 'Paiement partout : 8 à 30 symboles identiques, avec cascades',
    toursGratuits: '4 scatters ou plus : 15 tours gratuits',
    multiplicateurs: 'Symboles multiplicateurs jusqu’à 500×, en jeu de base comme en tours gratuits ; cumulés pendant le bonus',
    achatBonus: 'Disponible selon le pays',
    theme: 'Mythologie grecque, avec Zeus',
    analyse: [
      "Gates of Olympus a popularisé la recette « paiement partout + multiplicateurs » chez Pragmatic Play. Zeus fait tomber au hasard des symboles multiplicateurs pouvant atteindre 500×, y compris en jeu de base. Selon la fiche officielle, 8 à 30 symboles identiques suffisent pour gagner, n'importe où sur la grille.",
      "La vraie différence se fait dans les 15 tours gratuits : chaque multiplicateur qui tombe sur un tour gagnant s'ajoute à un multiplicateur total, qui s'applique ensuite au gain. C'est ce cumul qui produit les gros coups, et aussi la forte volatilité : on peut enchaîner beaucoup de tours sans rien de marquant. Prévoyez un budget qui tient au moins une centaine de tours."
    ],
    pourQui: 'Les joueurs patients, avec un budget qui supporte de longues séries sans gain.',
    attention: 'Le jeu existe aussi en version 1000 et Super Scatter, aux règles proches mais aux gains maximaux différents : vérifiez la version lancée.',
    faq: [
      { q: 'Quel est le RTP de Gates of Olympus ?', r: '96,50 % selon la fiche officielle de Pragmatic Play. Une version à 95,51 % existe aussi, au choix du casino.' },
      { q: 'Comment fonctionnent les multiplicateurs de Gates of Olympus ?', r: "Des symboles de 2× à 500× peuvent tomber sur n'importe quel tour. Pendant les tours gratuits, ceux qui tombent sur un tour gagnant s'ajoutent à un multiplicateur total." }
    ],
    similaires: ['gates-of-olympus-1000', 'gates-of-olympus-super-scatter', 'starlight-princess'],
    sources: [pp('Gates of Olympus', 'gates-of-olympus'), sc('Gates of Olympus', 'Gates-of-Olympus')],
    verifieLe: V
  },
  {
    slug: 'big-bass-bonanza',
    nom: 'Big Bass Bonanza',
    ...PP,
    studio: 'Reel Kingdom',
    volume: 1000,
    difficulte: 48,
    rtp: 96.71,
    rtpSource: 'officiel',
    rtpAutres: [95.67],
    volatilite: 'Moyenne à élevée',
    gainMax: 2100,
    annee: 2020,
    grille: '5 rouleaux × 3 rangées, 10 lignes',
    gains: 'Lignes de paiement, de gauche à droite',
    toursGratuits: '3, 4 ou 5 scatters : 10, 15 ou 20 tours gratuits',
    multiplicateurs: 'Tous les 4 wilds collectés : 10 tours de plus, avec multiplicateur 2×, puis 3×, puis 10×',
    achatBonus: null,
    theme: 'Pêche',
    analyse: [
      "Big Bass Bonanza a lancé l'une des séries les plus prolifiques du marché. Le jeu de base est classique (10 lignes, 5 rouleaux), mais tout se joue en tours gratuits : chaque pêcheur (wild) qui apparaît ramasse la valeur de tous les poissons visibles, qui peuvent valoir jusqu'à 2 000× la mise selon la fiche officielle.",
      "Le mécanisme de relance est le cœur du jeu : tous les 4 pêcheurs collectés, vous gagnez 10 tours de plus et le multiplicateur passe à 2×, puis 3×, puis 10×. Son gain maximal (2 100× selon SlotCatalog) reste modeste face aux versions récentes de la série, mais il est plus accessible."
    ],
    pourQui: 'Les joueurs qui aiment un jeu de base simple et des tours gratuits faciles à suivre.',
    attention: 'Les nombreuses suites (Splash, Amazon Xtreme, versions de Noël…) ont des règles et un RTP différents : vérifiez le titre exact.',
    faq: [
      { q: 'Quel est le RTP de Big Bass Bonanza ?', r: '96,71 % selon la fiche officielle. Une version à 95,67 % est aussi recensée.' },
      { q: 'Comment marchent les tours gratuits de Big Bass Bonanza ?', r: 'Les pêcheurs ramassent la valeur des poissons à l’écran. Tous les 4 pêcheurs, vous gagnez 10 tours de plus et le multiplicateur augmente (2×, 3×, puis 10×).' }
    ],
    similaires: ['big-bass-splash', 'big-bass-amazon-xtreme', 'fishin-frenzy'],
    sources: [pp('Big Bass Bonanza', 'big-bass-bonanza'), sc('Big Bass Bonanza', 'Big-Bass-Bonanza')],
    verifieLe: V
  },
  {
    slug: 'sugar-rush-1000',
    nom: 'Sugar Rush 1000',
    ...PP,
    volume: 880,
    difficulte: 25,
    rtp: 96.0,
    rtpSource: 'officiel',
    rtpAutres: [],
    volatilite: 'Élevée',
    gainMax: 25000,
    annee: 2024,
    grille: '7 rouleaux × 7 rangées',
    gains: 'Grappes de 5 symboles ou plus qui se touchent, avec cascades',
    toursGratuits: '3 scatters ou plus : au moins 10 tours gratuits (jusqu’à 30 selon SlotCatalog)',
    multiplicateurs: 'Cases marquées qui multiplient de 2× jusqu’à 1 024×, conservées pendant les tours gratuits',
    achatBonus: '100 × la mise, ou 500 × pour le Super Bonus (selon SlotCatalog et le pays)',
    theme: 'Bonbons',
    analyse: [
      "Sugar Rush 1000 reprend le principe de Sugar Rush en poussant les multiplicateurs bien plus loin. Chaque symbole gagnant marque sa case ; si un autre gain tombe sur une case déjà marquée, elle devient multiplicatrice, puis double à chaque nouveau gain, jusqu'à 1 024× selon la fiche officielle.",
      "Pendant les tours gratuits, les cases et leurs multiplicateurs restent en place, ce qui explique le gain maximal de 25 000× recensé par SlotCatalog. Le revers : la volatilité est élevée, et la plupart des sessions se passent loin de ces sommets. Le RTP officiel (96,00 %) est aussi un peu plus bas que celui de nombreux jeux du même fournisseur."
    ],
    pourQui: 'Les joueurs qui visent les très gros multiplicateurs et ont un budget en conséquence.',
    attention: "SlotCatalog recense d'autres réglages de RTP que celui de la fiche officielle : fiez-vous au RTP affiché dans l'aide du jeu.",
    faq: [
      { q: 'Quelle différence entre Sugar Rush et Sugar Rush 1000 ?', r: "Les multiplicateurs : ils plafonnent à 128× dans Sugar Rush et montent jusqu'à 1 024× dans Sugar Rush 1000, d'après les fiches officielles." },
      { q: 'Quel est le RTP de Sugar Rush 1000 ?', r: '96,00 % selon la fiche officielle de Pragmatic Play.' }
    ],
    similaires: ['sugar-rush', 'sweet-bonanza-1000', 'gates-of-olympus-1000'],
    sources: [pp('Sugar Rush 1000', 'sugar-rush-1000'), sc('Sugar Rush 1000', 'Sugar-Rush-1000')],
    verifieLe: V
  },
  {
    slug: 'sweet-bonanza-1000',
    nom: 'Sweet Bonanza 1000',
    ...PP,
    volume: 720,
    difficulte: 47,
    rtp: 96.53,
    rtpSource: 'officiel',
    rtpAutres: [95.52, 94.51],
    volatilite: 'Élevée',
    gainMax: 25000,
    annee: 2024,
    grille: '6 rouleaux × 5 rangées',
    gains: 'Paiement partout : 8 symboles identiques ou plus, avec cascades',
    toursGratuits: '4 sucettes ou plus : 10 tours gratuits, +5 avec 3 sucettes pendant le bonus',
    multiplicateurs: 'Bombes de bonbons jusqu’à 1 000×, additionnées avant d’être appliquées au gain',
    achatBonus: '100 × la mise (Super Bonus 500 ×), selon le pays',
    theme: 'Bonbons et fruits',
    analyse: [
      "Sweet Bonanza 1000 garde la grille et le paiement partout de l'original, mais ses bombes multiplicatrices montent jusqu'à 1 000×, contre 100× dans Sweet Bonanza. Selon la fiche officielle, les bombes restent à l'écran pendant les cascades et sont additionnées avant d'être appliquées au gain.",
      "Résultat : un gain maximal annoncé de 25 000× la mise, plus de cinq fois celui de nombreux jeux classiques, et une volatilité plus élevée que l'original. Si vous aimez Sweet Bonanza mais trouvez ses tours gratuits trop sages, c'est la version à essayer ; si votre budget est serré, l'original reste plus régulier."
    ],
    pourQui: 'Les fans de Sweet Bonanza qui veulent des tours gratuits plus explosifs.',
    attention: 'Deux réglages de RTP plus bas (95,52 % et 94,51 %) sont recensés : vérifiez la version installée.',
    faq: [
      { q: 'Quel est le gain maximal de Sweet Bonanza 1000 ?', r: "Jusqu'à 25 000 fois la mise, selon la fiche officielle de Pragmatic Play." },
      { q: 'Sweet Bonanza ou Sweet Bonanza 1000 ?', r: "L'original est plus régulier (volatilité moyenne à élevée) ; la version 1000 a des multiplicateurs dix fois plus hauts et une volatilité élevée." }
    ],
    similaires: ['sweet-bonanza', 'sugar-rush-1000', 'gates-of-olympus-1000'],
    sources: [pp('Sweet Bonanza 1000', 'sweet-bonanza-1000'), sc('Sweet Bonanza 1000', 'sweet-bonanza-1000')],
    verifieLe: V
  },
  {
    slug: 'gates-of-olympus-1000',
    nom: 'Gates of Olympus 1000',
    ...PP,
    volume: 480,
    difficulte: 16,
    rtp: 96.5,
    rtpSource: 'officiel',
    rtpAutres: [95.51, 94.5],
    volatilite: 'Élevée',
    gainMax: 15000,
    annee: 2023,
    grille: '6 rouleaux × 5 rangées',
    gains: 'Paiement partout : 8 symboles identiques ou plus, avec cascades',
    toursGratuits: '15 tours gratuits au départ, +5 à chaque nouvelle série de 3 scatters',
    multiplicateurs: 'Multiplicateurs aléatoires de 2× à 1 000×',
    achatBonus: '100 × la mise, selon le pays',
    theme: 'Mythologie grecque, avec Zeus',
    analyse: [
      "Gates of Olympus 1000 reprend trait pour trait l'original, avec une différence majeure : les multiplicateurs aléatoires montent jusqu'à 1 000× au lieu de 500×. Le gain maximal recensé passe ainsi de 5 000× à 15 000× la mise.",
      "Côté jeu, attendez-vous au même rythme que l'original : beaucoup de tours calmes, puis des tours gratuits qui peuvent tout changer, ou rien du tout."
    ],
    pourQui: 'Les habitués de Gates of Olympus qui veulent un plafond de gain plus élevé.',
    attention: 'La volatilité est élevée : sans budget suffisant, les tours gratuits peuvent ne jamais arriver.',
    faq: [
      { q: 'Quel est le RTP de Gates of Olympus 1000 ?', r: '96,50 % selon la fiche officielle. Des versions à 95,51 % et 94,50 % existent aussi.' },
      { q: 'Quelle différence avec Gates of Olympus ?', r: 'Les multiplicateurs vont jusqu’à 1 000× au lieu de 500×, et le gain maximal recensé passe de 5 000× à 15 000× la mise.' }
    ],
    similaires: ['gates-of-olympus', 'gates-of-olympus-super-scatter', 'starlight-princess-1000'],
    sources: [pp('Gates of Olympus 1000', 'gates-of-olympus-1000'), sc('Gates of Olympus 1000', 'Gates-of-Olympus-1000')],
    verifieLe: V
  },
  {
    slug: 'big-bass-splash',
    nom: 'Big Bass Splash',
    ...PP,
    studio: 'Reel Kingdom',
    volume: 480,
    difficulte: 43,
    rtp: 96.71,
    rtpSource: 'officiel',
    rtpAutres: [95.67, 94.6],
    volatilite: 'Élevée',
    gainMax: 5000,
    annee: 2022,
    grille: '5 rouleaux × 3 rangées, 10 lignes',
    gains: 'Lignes de paiement',
    toursGratuits: '3, 4 ou 5 scatters : 10, 15 ou 20 tours gratuits',
    multiplicateurs: 'Tous les 4 wilds : 10 tours de plus, multiplicateur 2×, 3× puis 10×',
    achatBonus: '100 × la mise, selon le pays',
    theme: 'Pêche',
    analyse: [
      "Big Bass Splash garde la mécanique de Big Bass Bonanza (les pêcheurs ramassent les poissons, tous les 4 pêcheurs relancent le bonus) et ajoute une nouveauté : avant les tours gratuits, de 0 à 5 modificateurs peuvent s'ajouter au bonus, d'après la fiche officielle.",
      "Les poissons peuvent valoir jusqu'à 5 000× la mise selon Pragmatic Play, et la volatilité grimpe d'un cran par rapport à l'original. C'est la version à choisir si vous trouvez Big Bass Bonanza trop prévisible."
    ],
    pourQui: 'Les amateurs de la série Big Bass qui veulent plus de variété dans le bonus.',
    attention: 'Plusieurs réglages de RTP existent (jusqu’à 94,60 %) : vérifiez celui du casino.',
    faq: [
      { q: 'Quel est le RTP de Big Bass Splash ?', r: '96,71 % selon la fiche officielle de Pragmatic Play, avec des versions plus basses recensées.' },
      { q: 'Quelle différence avec Big Bass Bonanza ?', r: 'Des modificateurs aléatoires avant les tours gratuits, des poissons pouvant valoir jusqu’à 5 000× et une volatilité plus élevée.' }
    ],
    similaires: ['big-bass-bonanza', 'big-bass-amazon-xtreme', 'fishin-frenzy'],
    sources: [pp('Big Bass Splash', 'big-bass-splash'), sc('Big Bass Splash', 'Big-Bass-Splash')],
    verifieLe: V
  },
  {
    slug: 'gates-of-olympus-super-scatter',
    nom: 'Gates of Olympus Super Scatter',
    ...PP,
    volume: 480,
    difficulte: 14,
    rtp: 96.5,
    rtpSource: 'base',
    rtpAutres: [95.5, 94.5],
    volatilite: 'Élevée',
    gainMax: 50000,
    annee: 2025,
    grille: '6 rouleaux × 5 rangées',
    gains: 'Paiement partout : 8 à 30 symboles identiques, avec cascades',
    toursGratuits: '4 scatters ou plus : 15 tours gratuits avec multiplicateur total',
    multiplicateurs: 'Jusqu’à 500×, additionnés quand plusieurs tombent',
    achatBonus: 'Tours gratuits 100 × la mise, Super tours gratuits 500 ×, selon le pays',
    theme: 'Mythologie grecque, avec Zeus',
    analyse: [
      "La nouveauté de cette version, ce sont les « Super Scatters ». Selon la fiche officielle, de 1 à 4 Super Scatters présents au déclenchement des tours gratuits paient directement 100×, 500×, 5 000× ou 50 000× la mise. Les quatre ensemble donnent le gain maximal de 50 000×.",
      "Pour le reste, on retrouve Gates of Olympus : paiement partout, cascades et multiplicateurs jusqu'à 500× qui s'additionnent pendant le bonus. Les trois versions ont des plafonds très différents : 5 000× la mise pour l'original, 15 000× pour la version 1000 et 50 000× pour celle-ci."
    ],
    pourQui: 'Les joueurs qui aiment Gates of Olympus et veulent tenter le jackpot des Super Scatters.',
    attention: 'Le gain de 50 000× suppose quatre Super Scatters réunis : c’est un événement extrêmement rare.',
    faq: [
      { q: 'Que sont les Super Scatters ?', r: 'Des scatters spéciaux qui, au déclenchement des tours gratuits, paient 100×, 500×, 5 000× ou 50 000× la mise selon qu’il y en a 1, 2, 3 ou 4.' },
      { q: 'Quel est le gain maximal de Gates of Olympus Super Scatter ?', r: '50 000 fois la mise, selon la fiche officielle.' }
    ],
    similaires: ['gates-of-olympus', 'gates-of-olympus-1000', 'starlight-princess'],
    sources: [pp('Gates of Olympus Super Scatter', 'gates-of-olympus-super-scatter'), sc('Gates of Olympus Super Scatter', 'Gates-of-Olympus-Super-Scatter')],
    verifieLe: V
  },
  {
    slug: 'wolf-gold',
    nom: 'Wolf Gold',
    ...PP,
    volume: 320,
    difficulte: 43,
    rtp: 96.01,
    rtpSource: 'base',
    rtpAutres: [],
    volatilite: 'Moyenne',
    gainMax: 2500,
    annee: 2017,
    grille: '5 rouleaux × 3 rangées, 25 lignes',
    gains: 'Lignes de paiement, 3 symboles ou plus depuis la gauche',
    toursGratuits: '3 scatters sur les rouleaux 1, 3 et 5 : 5 tours gratuits',
    multiplicateurs: null,
    achatBonus: 'Non',
    theme: 'Désert américain et loups',
    analyse: [
      "Wolf Gold est un classique de 2017, toujours très recherché au Canada. Pas de cascades ni de multiplicateurs géants : 25 lignes, des tours gratuits courts, et surtout la fonction Money Respin, déclenchée par 6 pleines lunes ou plus.",
      "Pendant ce respin, les pleines lunes restent en place et les nouvelles s'ajoutent ; elles peuvent cacher l'un des trois jackpots fixes (Mini, Major et Mega). Sa volatilité moyenne en fait un bon choix pour un budget modeste qui veut jouer longtemps."
    ],
    pourQui: 'Les joueurs qui préfèrent un jeu régulier et facile à comprendre.',
    attention: 'Les jackpots sont fixes, pas progressifs : ne confondez pas avec Mega Moolah.',
    faq: [
      { q: 'Wolf Gold a-t-il un jackpot ?', r: 'Oui, trois jackpots fixes (Mini, Major et Mega), accessibles pendant la fonction Money Respin.' },
      { q: 'Quel est le RTP de Wolf Gold ?', r: '96,01 % selon SlotCatalog, qui signale aussi des réglages plus bas.' }
    ],
    similaires: ['buffalo-king-megaways', 'great-rhino-megaways', 'mega-moolah'],
    sources: [sc('Wolf Gold', 'Wolf-Gold')],
    verifieLe: V
  },
  {
    slug: 'buffalo-king-megaways',
    nom: 'Buffalo King Megaways',
    ...PP,
    volume: 320,
    difficulte: 24,
    rtp: 96.52,
    rtpSource: 'officiel',
    rtpAutres: [95.55, 94.51],
    volatilite: 'Élevée',
    gainMax: 5000,
    annee: 2021,
    grille: '6 rouleaux, 2 à 7 symboles par rouleau',
    gains: 'Megaways : jusqu’à 200 704 façons de gagner, avec cascades',
    toursGratuits: '4, 5 ou 6 scatters : 12, 17 ou 22 tours gratuits, +5 avec 3 scatters',
    multiplicateurs: 'Wilds 2×, 3× ou 5×, qui se multiplient entre eux sur une même cascade',
    achatBonus: '100 × la mise, selon le pays',
    theme: 'Prairie et bisons',
    analyse: [
      "Buffalo King Megaways transpose dans le système Megaways un thème très populaire en Amérique du Nord. Le nombre de symboles par rouleau change à chaque tour, jusqu'à plus de 200 000 façons de gagner selon la fiche officielle, et les cascades peuvent enchaîner les gains.",
      "Pendant les tours gratuits (12 à 22 au départ), les wilds portent des multiplicateurs de 2×, 3× ou 5×. Attention à ne pas confondre avec « Buffalo » d'Aristocrat, très recherché au Canada mais propre aux casinos terrestres et aux applications sociales."
    ],
    pourQui: 'Les amateurs de Megaways et de thèmes nord-américains.',
    attention: 'Ce n’est pas le « Buffalo » des casinos terrestres : les règles et le fournisseur sont différents.',
    faq: [
      { q: 'Combien de façons de gagner dans Buffalo King Megaways ?', r: 'Jusqu’à 200 704, selon SlotCatalog ; la fiche officielle parle de plus de 200 000.' },
      { q: 'Quel est le RTP de Buffalo King Megaways ?', r: '96,52 % selon la fiche officielle, avec des versions plus basses recensées.' }
    ],
    similaires: ['great-rhino-megaways', '5-lions-megaways', 'madame-destiny-megaways'],
    sources: [pp('Buffalo King Megaways', 'buffalo-king-megaways'), sc('Buffalo King Megaways', 'Buffalo-King-Megaways')],
    verifieLe: V
  },
  {
    slug: 'sugar-rush',
    nom: 'Sugar Rush',
    ...PP,
    volume: 170,
    difficulte: 42,
    rtp: 96.5,
    rtpSource: 'officiel',
    rtpAutres: [95.5, 94.5],
    volatilite: 'Élevée',
    gainMax: 5000,
    annee: 2022,
    grille: '7 rouleaux × 7 rangées',
    gains: 'Grappes de 5 à 15 symboles ou plus, avec cascades',
    toursGratuits: '3 à 7 scatters : 10 à 30 tours gratuits',
    multiplicateurs: 'Cases marquées qui doublent de 2× jusqu’à 128×, conservées en tours gratuits',
    achatBonus: '100 × la mise, selon le pays',
    theme: 'Bonbons',
    analyse: [
      "Sugar Rush est l'original de la série : une grille de 7 × 7 où les bonbons paient par grappes. Chaque gain marque les cases concernées ; un nouveau gain sur une case marquée la rend multiplicatrice (2×), puis elle double à chaque fois, jusqu'à 128× selon la fiche officielle.",
      "En tours gratuits, cases et multiplicateurs restent en place pendant tout le bonus. La recherche « sugar rush » seule atteint environ 2 900 par mois au Canada, mais elle mélange le jeu et d'autres sujets ; avec « slot », on compte environ 170 recherches."
    ],
    pourQui: 'Les joueurs qui aiment voir les multiplicateurs se construire tour après tour.',
    attention: 'Ne confondez pas avec Sugar Rush 1000, dont les multiplicateurs et la volatilité sont bien plus élevés.',
    faq: [
      { q: 'Quel est le multiplicateur maximal de Sugar Rush ?', r: '128× par case, selon la fiche officielle de Pragmatic Play.' },
      { q: 'Quel est le RTP de Sugar Rush ?', r: '96,50 % selon la fiche officielle, avec des versions à 95,5 % et 94,5 % recensées.' }
    ],
    similaires: ['sugar-rush-1000', 'sweet-bonanza', 'jammin-jars'],
    sources: [pp('Sugar Rush', 'sugar-rush'), sc('Sugar Rush', 'Sugar-Rush')],
    verifieLe: V
  },
  {
    slug: 'zeus-vs-hades',
    nom: 'Zeus vs Hades – Gods of War',
    ...PP,
    volume: 170,
    difficulte: 24,
    rtp: 96.07,
    rtpSource: 'officiel',
    rtpAutres: [95.05, 94.05],
    volatilite: 'Élevée',
    gainMax: 15000,
    annee: 2023,
    grille: '5 rouleaux × 5 rangées',
    gains: 'Lignes de paiement, de gauche à droite',
    toursGratuits: '3 scatters (rouleaux 1, 3 et 5) : 10 tours gratuits, en mode Olympus ou Hades',
    multiplicateurs: 'Wilds en expansion jusqu’à 100×, collants pendant les tours gratuits',
    achatBonus: '75 × (Olympus), 150 × (Hades) ou 300 × (Super), selon le pays',
    theme: 'Mythologie grecque',
    analyse: [
      "Zeus vs Hades laisse le joueur choisir son camp. Selon la fiche officielle, le mode Olympus déclenche le bonus plus souvent avec des gains moyens plus faibles, tandis que le mode Hades le déclenche plus rarement mais avec des gains plus élevés. C'est l'un des rares jeux où vous réglez vous-même la volatilité.",
      "Les wilds en expansion portent des multiplicateurs jusqu'à 100× et restent collés pendant les 10 tours gratuits. Le gain maximal atteint 15 000× la mise. En mode Hades, la volatilité devient très élevée : réservez-le à un budget solide."
    ],
    pourQui: 'Les joueurs qui veulent choisir leur niveau de risque.',
    attention: 'Le RTP diffère selon le mode et l’achat de bonus : consultez l’aide du jeu.',
    faq: [
      { q: 'Mode Olympus ou mode Hades ?', r: 'Olympus pour des bonus plus fréquents mais plus modestes, Hades pour des bonus plus rares mais plus lucratifs, selon la fiche officielle.' },
      { q: 'Quel est le gain maximal de Zeus vs Hades ?', r: '15 000 fois la mise, selon la fiche officielle de Pragmatic Play.' }
    ],
    similaires: ['gates-of-olympus', 'rise-of-olympus', 'wanted-dead-or-a-wild'],
    sources: [pp('Zeus vs Hades', 'zeus-vs-hades-gods-of-war'), sc('Zeus vs Hades', 'Zeus-vs-Hades-Gods-of-War')],
    verifieLe: V
  },
  {
    slug: 'big-bass-amazon-xtreme',
    nom: 'Big Bass Amazon Xtreme',
    ...PP,
    studio: 'Reel Kingdom',
    volume: 170,
    difficulte: 26,
    rtp: 96.07,
    rtpSource: 'officiel',
    rtpAutres: [95.08, 94.05],
    volatilite: 'Élevée',
    gainMax: 10000,
    annee: 2023,
    grille: '5 rouleaux × 3 rangées, 10 lignes',
    gains: 'Lignes de paiement',
    toursGratuits: '3 à 5 scatters : 10 tours, +10 par relance',
    multiplicateurs: 'Pêcheurs supplémentaires qui débloquent un multiplicateur croissant',
    achatBonus: '100 × la mise, selon le pays',
    theme: 'Pêche en Amazonie',
    analyse: [
      "La version « Xtreme » de la série Big Bass ajoute un choix avant les tours gratuits : selon la fiche officielle, six mécaniques peuvent être sélectionnées (plus de poissons, plus de pêcheurs, départ au deuxième niveau…). Le gain maximal recensé grimpe à 10 000× la mise.",
      "Le principe reste celui de la série : les pêcheurs ramassent la valeur des poissons, et en collecter davantage fait monter le multiplicateur. Plus volatil que Big Bass Bonanza, il s'adresse à ceux qui connaissent déjà la mécanique."
    ],
    pourQui: 'Les habitués de Big Bass qui veulent plus de choix et plus de risque.',
    attention: 'Le mot « Xtreme » n’est pas un effet de style : la volatilité est nettement plus élevée que l’original.',
    faq: [
      { q: 'Quel est le RTP de Big Bass Amazon Xtreme ?', r: '96,07 % selon la fiche officielle, avec des versions à 95,08 % et 94,05 % recensées.' },
      { q: 'Quel est le gain maximal ?', r: '10 000 fois la mise, selon SlotCatalog.' }
    ],
    similaires: ['big-bass-bonanza', 'big-bass-splash', 'fishin-frenzy'],
    sources: [pp('Big Bass Amazon Xtreme', 'big-bass-amazon-xtreme'), sc('Big Bass Amazon Xtreme', 'Big-Bass-Amazon-Xtreme')],
    verifieLe: V
  },
  {
    slug: '5-lions-megaways',
    nom: '5 Lions Megaways',
    ...PP,
    volume: 170,
    difficulte: 47,
    rtp: 96.5,
    rtpSource: 'officiel',
    rtpAutres: [95.52, 94.54],
    volatilite: 'Élevée',
    gainMax: 5000,
    annee: 2021,
    grille: '6 rouleaux, de 7 à 8 symboles',
    gains: 'Megaways : jusqu’à 200 704 façons de gagner',
    toursGratuits: '3 symboles bonus ou plus : choix parmi 7 options, jusqu’à 25 tours',
    multiplicateurs: 'Wilds multiplicateurs de 1× à 40× en jeu de base',
    achatBonus: '100 × la mise, selon le pays',
    theme: 'Lions de la tradition chinoise',
    analyse: [
      "5 Lions Megaways mise sur le choix : au déclenchement, vous sélectionnez l'une des sept options de tours gratuits, de 25 tours avec de petits multiplicateurs à quelques tours avec des multiplicateurs élevés, ou une option mystère, selon SlotCatalog.",
      "C'est un bon exemple de compromis assumé : peu de tours avec de gros multiplicateurs, ou beaucoup de tours plus sages. Le RTP officiel est de 96,50 %, mais SlotCatalog recense aussi des réglages plus bas."
    ],
    pourQui: 'Les joueurs qui aiment décider du profil de leur bonus.',
    attention: 'Les options à fort multiplicateur donnent peu de tours : le résultat peut être nul.',
    faq: [
      { q: 'Quelle option choisir dans 5 Lions Megaways ?', r: 'Aucune n’est meilleure en moyenne : plus de tours donnent des résultats plus réguliers, moins de tours avec gros multiplicateurs donnent des résultats plus extrêmes.' },
      { q: 'Quel est le RTP de 5 Lions Megaways ?', r: '96,50 % selon la fiche officielle de Pragmatic Play.' }
    ],
    similaires: ['buffalo-king-megaways', 'madame-destiny-megaways', 'great-rhino-megaways'],
    sources: [pp('5 Lions Megaways', '5-lions-megaways'), sc('5 Lions Megaways', '5-Lions-Megaways')],
    verifieLe: V
  },
  {
    slug: 'starlight-princess',
    nom: 'Starlight Princess',
    ...PP,
    volume: 140,
    difficulte: 19,
    rtp: 96.5,
    rtpSource: 'officiel',
    rtpAutres: [95.51],
    volatilite: 'Élevée',
    gainMax: 5000,
    annee: 2021,
    grille: '6 rouleaux × 5 rangées',
    gains: 'Paiement partout : 8 à 30 symboles identiques, avec cascades',
    toursGratuits: '4 scatters ou plus : 15 tours gratuits, avec multiplicateur total',
    multiplicateurs: 'Symboles multiplicateurs de 2× à 500×, additionnés après chaque cascade',
    achatBonus: '100 × la mise, selon le pays',
    theme: 'Princesse au style manga',
    analyse: [
      "Starlight Princess est le jumeau de Gates of Olympus dans un univers manga : même grille, même paiement partout, mêmes multiplicateurs jusqu'à 500× et même cumul pendant les 15 tours gratuits, d'après la fiche officielle.",
      "Le choix entre les deux est surtout une question de goût visuel. Les chiffres clés (RTP de 96,50 %, gain maximal de 5 000× selon SlotCatalog) sont les mêmes. Comme pour son cousin, SlotCatalog recense des réglages de RTP plus bas selon le casino."
    ],
    pourQui: 'Ceux qui aiment Gates of Olympus et préfèrent l’univers manga.',
    attention: 'Une version 1000 existe, avec des multiplicateurs plus hauts et une volatilité accrue.',
    faq: [
      { q: 'Quelle différence entre Starlight Princess et Gates of Olympus ?', r: 'Le thème. Les mécaniques et les chiffres clés sont très proches.' },
      { q: 'Quel est le RTP de Starlight Princess ?', r: '96,50 % selon la fiche officielle de Pragmatic Play.' }
    ],
    similaires: ['starlight-princess-1000', 'gates-of-olympus', 'sweet-bonanza'],
    sources: [pp('Starlight Princess', 'starlight-princess'), sc('Starlight Princess', 'Starlight-Princess')],
    verifieLe: V
  },
  {
    slug: 'the-dog-house',
    nom: 'The Dog House',
    ...PP,
    volume: 140,
    difficulte: 30,
    rtp: 95.51,
    rtpSource: 'base',
    rtpAutres: [],
    volatilite: 'Élevée',
    gainMax: 6750,
    annee: 2019,
    grille: '5 rouleaux × 3 rangées, 20 lignes',
    gains: 'Lignes de paiement',
    toursGratuits: '3 scatters (rouleaux 1, 3 et 5) : de 9 à 27 tours gratuits',
    multiplicateurs: 'Wilds 2× ou 3×, cumulables, collants pendant les tours gratuits',
    achatBonus: null,
    theme: 'Chiens',
    analyse: [
      "The Dog House est un classique de Pragmatic Play, sorti en 2019. Son atout : des wilds multiplicateurs (2× ou 3×) qui se multiplient entre eux quand plusieurs participent à un même gain, et qui restent collés pendant tous les tours gratuits, selon SlotCatalog.",
      "Le nombre de tours gratuits (9 à 27) est tiré au hasard au déclenchement. Un bonus avec beaucoup de tours et quelques wilds bien placés peut être très payant ; un bonus court peut ne rien donner. La recherche « the dog house » seule mélange le jeu et d'autres sujets ; avec « slot », on compte environ 140 recherches mensuelles."
    ],
    pourQui: 'Les joueurs qui aiment les jeux à lignes avec des tours gratuits à fort potentiel.',
    attention: 'Une version Megaways existe, avec un autre fonctionnement.',
    faq: [
      { q: 'Combien de tours gratuits dans The Dog House ?', r: 'Entre 9 et 27, tirés au hasard au déclenchement, selon SlotCatalog.' },
      { q: 'Quel est le gain maximal de The Dog House ?', r: '6 750 fois la mise, selon SlotCatalog.' }
    ],
    similaires: ['wolf-gold', 'big-bass-bonanza', 'zeus-vs-hades'],
    sources: [sc('The Dog House', 'The-Dog-House')],
    verifieLe: V
  },
  {
    slug: 'great-rhino-megaways',
    nom: 'Great Rhino Megaways',
    ...PP,
    volume: 140,
    difficulte: 27,
    rtp: 96.58,
    rtpSource: 'base',
    rtpAutres: [95.59, 94.69],
    volatilite: 'Élevée',
    gainMax: 20000,
    annee: 2020,
    grille: '6 rouleaux de 2 à 7 symboles, plus un rouleau horizontal',
    gains: 'Megaways : jusqu’à 200 704 façons de gagner',
    toursGratuits: 'Choix : 15 tours (1×), 10 tours (5×), 5 tours (10×) ou option mystère',
    multiplicateurs: 'Multiplicateur qui augmente de 1 à chaque gain, sans plafond, pendant les tours gratuits',
    achatBonus: null,
    theme: 'Savane africaine',
    analyse: [
      "Great Rhino Megaways propose, au déclenchement des tours gratuits, un choix entre 15 tours avec un multiplicateur de départ de 1×, 10 tours à 5× ou 5 tours à 10×, ou une option mystère, selon SlotCatalog.",
      "Le multiplicateur augmente de 1 à chaque gain et ne redescend pas sur les tours perdants, ce qui permet de longues montées en puissance. Le gain maximal recensé est de 20 000× la mise : un plafond très élevé pour une machine sortie en 2020."
    ],
    pourQui: 'Les joueurs qui aiment les multiplicateurs progressifs sans plafond.',
    attention: 'Deux réglages de RTP plus bas sont recensés (95,59 % et 94,69 %).',
    faq: [
      { q: 'Le multiplicateur de Great Rhino Megaways a-t-il une limite ?', r: 'Non, selon SlotCatalog : il augmente de 1 à chaque gain pendant les tours gratuits, sans plafond.' },
      { q: 'Quel est le gain maximal ?', r: '20 000 fois la mise, selon SlotCatalog.' }
    ],
    similaires: ['buffalo-king-megaways', '5-lions-megaways', 'bonanza'],
    sources: [sc('Great Rhino Megaways', 'Great-Rhino-Megaways')],
    verifieLe: V
  },
  {
    slug: 'gems-bonanza',
    nom: 'Gems Bonanza',
    ...PP,
    volume: 140,
    difficulte: 19,
    rtp: 96.51,
    rtpSource: 'officiel',
    rtpAutres: [95.54, 94.53],
    volatilite: 'Élevée',
    gainMax: 10000,
    annee: 2020,
    grille: '8 rouleaux × 8 rangées',
    gains: 'Grappes de 5 symboles ou plus',
    toursGratuits: 'Bonus Gold Fever à 5 niveaux',
    multiplicateurs: '2× au premier niveau, puis 4×, 6×, 8× et 10× au dernier',
    achatBonus: '100 × la mise, selon le pays',
    theme: 'Pierres précieuses aztèques',
    analyse: [
      "Gems Bonanza paie par grappes sur une grande grille de 8 × 8. Selon la fiche officielle, les « Lucky Wilds » apparaissent à des positions aléatoires et une progression sur une carte mène à la fonction Gold Fever.",
      "Pendant Gold Fever, le multiplicateur de gain passe de 2× au premier niveau jusqu'à 10× au cinquième, d'après SlotCatalog. Plus vous montez de niveau, plus chaque gain du bonus est multiplié : c'est la progression sur la carte qui fait la valeur du jeu."
    ],
    pourQui: 'Les amateurs de jeux à grappes sur grande grille.',
    attention: 'Les grappes demandent 5 symboles identiques connectés : les gains en jeu de base sont souvent petits.',
    faq: [
      { q: 'Quel est le RTP de Gems Bonanza ?', r: '96,51 % selon la fiche officielle de Pragmatic Play.' },
      { q: 'Qu’est-ce que Gold Fever ?', r: 'Le bonus de Gems Bonanza, à 5 niveaux, avec un multiplicateur de 2× à 10× selon le niveau atteint.' }
    ],
    similaires: ['reactoonz', 'jammin-jars', 'sugar-rush'],
    sources: [pp('Gems Bonanza', 'gems-bonanza'), sc('Gems Bonanza', 'Gems-Bonanza')],
    verifieLe: V
  },
  {
    slug: 'madame-destiny-megaways',
    nom: 'Madame Destiny Megaways',
    ...PP,
    volume: 110,
    difficulte: 31,
    rtp: 96.56,
    rtpSource: 'officiel',
    rtpAutres: [95.7, 94.63],
    volatilite: 'Élevée',
    gainMax: 5000,
    annee: 2021,
    grille: '6 rouleaux, de 7 à 8 symboles',
    gains: 'Megaways : jusqu’à 200 704 façons de gagner',
    toursGratuits: '3 à 6 scatters : une roue de fortune attribue jusqu’à 12 tours gratuits',
    multiplicateurs: 'Multiplicateur de gain fixe jusqu’à 25× pendant le bonus ; Madame Destiny (wild) double les gains',
    achatBonus: '100 × la mise, selon le pays',
    theme: 'Voyante et cartes de tarot',
    analyse: [
      "Dans Madame Destiny Megaways, une roue de fortune décide au déclenchement du nombre de tours gratuits (jusqu'à 12) et du multiplicateur de gain, jusqu'à 25×, selon la fiche officielle. Ce multiplicateur reste fixe pendant tout le bonus.",
      "Le wild Madame Destiny double les gains des combinaisons auxquelles elle participe. Le jeu est plus lisible que d'autres Megaways : on sait dès le départ ce que le bonus peut rapporter au mieux."
    ],
    pourQui: 'Les joueurs qui aiment savoir à quoi s’attendre dès le début du bonus.',
    attention: 'Un bonus court avec un petit multiplicateur peut rapporter très peu.',
    faq: [
      { q: 'Comment fonctionne la roue de Madame Destiny Megaways ?', r: 'Elle fixe au déclenchement le nombre de tours gratuits (jusqu’à 12) et le multiplicateur de gain (jusqu’à 25×).' },
      { q: 'Quel est le RTP de Madame Destiny Megaways ?', r: '96,56 % selon la fiche officielle de Pragmatic Play.' }
    ],
    similaires: ['5-lions-megaways', 'buffalo-king-megaways', 'great-rhino-megaways'],
    sources: [pp('Madame Destiny Megaways', 'madame-destiny-megaways'), sc('Madame Destiny Megaways', 'Madame-Destiny-Megaways')],
    verifieLe: V
  },
  {
    slug: 'starlight-princess-1000',
    nom: 'Starlight Princess 1000',
    ...PP,
    volume: 110,
    difficulte: 48,
    rtp: 96.5,
    rtpSource: 'officiel',
    rtpAutres: [],
    volatilite: 'Élevée',
    gainMax: 15000,
    annee: 2023,
    grille: '6 rouleaux × 5 rangées',
    gains: 'Paiement partout : 8 symboles identiques ou plus, avec cascades',
    toursGratuits: '4 scatters ou plus : 15 tours gratuits',
    multiplicateurs: 'De 2× à 1 000×, cumulés dans un multiplicateur total pendant le bonus',
    achatBonus: '100 × la mise, selon le pays',
    theme: 'Princesse au style manga',
    analyse: [
      "Starlight Princess 1000 fait à Starlight Princess ce que Gates of Olympus 1000 fait à Gates of Olympus : les multiplicateurs passent de 500× à 1 000× selon la fiche officielle, et le gain maximal recensé atteint 15 000× la mise.",
      "Le reste ne change pas : paiement partout, cascades et 15 tours gratuits avec multiplicateur total. Comme toutes les versions « 1000 », elle est plus volatile que l'original : attendez-vous à des bonus plus inégaux."
    ],
    pourQui: 'Les fans de Starlight Princess qui veulent un plafond plus haut.',
    attention: 'SlotCatalog signale des réglages de RTP inférieurs possibles, sans les détailler.',
    faq: [
      { q: 'Quel est le gain maximal de Starlight Princess 1000 ?', r: '15 000 fois la mise, selon SlotCatalog.' },
      { q: 'Quel est le RTP de Starlight Princess 1000 ?', r: '96,50 % selon la fiche officielle de Pragmatic Play.' }
    ],
    similaires: ['starlight-princess', 'gates-of-olympus-1000', 'sweet-bonanza-1000'],
    sources: [pp('Starlight Princess 1000', 'starlight-princess-1000'), sc('Starlight Princess 1000', 'Starlight-Princess-1000')],
    verifieLe: V
  }
];

export default pragmatic;
