import type { Machine } from './types';

const V = '2026-11-03';
const sc = (nom: string, chemin: string) => ({ titre: `SlotCatalog, fiche ${nom}`, url: `https://slotcatalog.com/en/slots/${chemin}` });

const PNG = { fournisseur: "Play'n GO", fournisseurId: 'play-n-go' };
const GG = { fournisseur: 'Games Global', fournisseurId: 'games-global' };
const NE = { fournisseur: 'NetEnt', fournisseurId: 'netent' };
const HS = { fournisseur: 'Hacksaw Gaming', fournisseurId: 'hacksaw-gaming' };
const PUSH = { fournisseur: 'Push Gaming', fournisseurId: 'push-gaming' };
const NOVO = { fournisseur: 'Novomatic', studio: 'Greentube', fournisseurId: 'novomatic' };

const autres: Machine[] = [
  {
    slug: 'book-of-dead',
    nom: 'Book of Dead',
    ...PNG,
    volume: 1300,
    difficulte: 17,
    rtp: 96.21,
    rtpSource: 'base',
    rtpAutres: [94.25, 91.25, 87.25, 84.18],
    volatilite: 'Élevée',
    gainMax: 5000,
    annee: 2016,
    grille: '5 rouleaux × 3 rangées, 10 lignes',
    gains: 'Lignes de paiement',
    toursGratuits: '3 scatters ou plus : 10 tours gratuits avec un symbole spécial en expansion, rejouables',
    multiplicateurs: null,
    achatBonus: null,
    theme: 'Égypte ancienne, avec l’explorateur Rich Wilde',
    analyse: [
      "Book of Dead est la deuxième machine à sous la plus recherchée au Canada dans notre étude, juste derrière Sweet Bonanza. Son principe tient en une phrase : trois livres déclenchent 10 tours gratuits, et un symbole tiré au hasard devient « symbole spécial en expansion » pour tout le bonus.",
      "Selon la fiche de Play'n GO, ce symbole s'étend sur tout son rouleau quand il peut payer sur les lignes actives, sans avoir besoin d'être sur des rouleaux voisins. Si le tirage tombe sur l'explorateur, le bonus peut être énorme ; s'il tombe sur un 10 ou un J, il rapporte souvent peu. C'est ce qui fait sa forte volatilité.",
      "Book of Dead est aussi l'exemple parfait du piège des versions de RTP : SlotCatalog recense cinq réglages, de 96,21 % à 84,18 %. Sur 1 000 $ misés au total, l'écart de retour théorique dépasse 120 $. Avant de jouer, ouvrez l'aide du jeu et lisez le RTP affiché."
    ],
    pourQui: 'Les joueurs qui aiment les bonus courts et intenses, avec un tirage décisif au départ.',
    attention: 'C’est l’un des jeux où l’écart entre les versions de RTP est le plus grand : jusqu’à 12 points.',
    faq: [
      { q: 'Comment fonctionne le symbole en expansion de Book of Dead ?', r: 'Avant les tours gratuits, un symbole est tiré au hasard. Pendant le bonus, il s’étend sur tout son rouleau quand il peut payer sur une ligne active, même sans être sur des rouleaux voisins.' },
      { q: 'Quel est le RTP de Book of Dead ?', r: '96,21 % dans sa meilleure version, selon SlotCatalog. Des versions à 94,25 %, 91,25 %, 87,25 % et 84,18 % existent aussi, au choix du casino.' }
    ],
    similaires: ['legacy-of-dead', 'book-of-ra', 'book-of-oz'],
    sources: [{ titre: "Play'n GO, fiche officielle Book of Dead", url: 'https://www.playngo.com/games/book-of-dead' }, sc('Book of Dead', 'Book-of-Dead')],
    verifieLe: V
  },
  {
    slug: 'fishin-frenzy',
    nom: "Fishin' Frenzy",
    fournisseur: 'Blueprint Gaming',
    studio: 'Reel Time Gaming',
    volume: 590,
    difficulte: 19,
    rtp: 96.12,
    rtpSource: 'base',
    rtpAutres: [],
    volatilite: 'Faible à moyenne',
    gainMax: null,
    annee: 2014,
    grille: '5 rouleaux × 3 rangées, 10 lignes',
    gains: '3 symboles identiques ou plus sur une ligne, depuis la gauche',
    toursGratuits: '3, 4 ou 5 scatters : 10, 15 ou 20 tours gratuits',
    multiplicateurs: 'Pendant le bonus, le pêcheur ramasse la valeur des poissons à l’écran (jusqu’à 50× selon SlotCatalog)',
    achatBonus: null,
    theme: 'Pêche',
    analyse: [
      "Fishin' Frenzy est l'ancêtre des jeux de pêche que l'on retrouve partout aujourd'hui. Sorti en 2014, il a posé le principe repris plus tard par Big Bass Bonanza : pendant les tours gratuits, le pêcheur ramasse la valeur en argent de chaque poisson visible.",
      "Sa volatilité faible à moyenne en fait un jeu plus régulier que ses successeurs, avec des gains plus fréquents mais plus petits. Le gain maximal varie fortement selon les sources (SlotCatalog mentionne 50 000×, un chiffre que nous n'avons pas pu confirmer) : nous ne l'affichons donc pas."
    ],
    pourQui: 'Les joueurs qui veulent un jeu simple, au rythme calme, pour un petit budget.',
    attention: "Il existe de nombreuses versions (Megaways, Big Catch…) aux règles différentes : vérifiez le nom exact du jeu.",
    faq: [
      { q: "Combien de tours gratuits dans Fishin' Frenzy ?", r: '10, 15 ou 20 tours gratuits avec 3, 4 ou 5 scatters, selon SlotCatalog.' },
      { q: "Quelle différence avec Big Bass Bonanza ?", r: "Le principe du pêcheur qui ramasse les poissons est le même. Big Bass Bonanza ajoute des relances avec multiplicateurs, et sa volatilité est plus élevée." }
    ],
    similaires: ['big-bass-bonanza', 'big-bass-splash', 'starburst'],
    sources: [sc("Fishin' Frenzy", 'Fishin-Frenzy')],
    verifieLe: V
  },
  {
    slug: 'mega-moolah',
    nom: 'Mega Moolah',
    ...GG,
    volume: 390,
    difficulte: 31,
    rtp: 88.12,
    rtpSource: 'base',
    rtpAutres: [],
    volatilite: 'Moyenne',
    gainMax: null,
    annee: 2006,
    grille: '5 rouleaux × 3 rangées, 25 lignes',
    gains: 'Lignes de paiement',
    toursGratuits: '3 scatters : 15 tours gratuits avec gains triplés, rejouables',
    multiplicateurs: 'Le wild double les gains auxquels il participe ; gains × 3 pendant les tours gratuits',
    achatBonus: null,
    theme: 'Safari africain',
    analyse: [
      "Mega Moolah est la machine à jackpot progressif la plus connue au monde. Une partie de chaque mise alimente quatre jackpots (Mini, Minor, Major et Mega), et le Mega repart d'au moins 1 000 000 £ selon SlotCatalog. Le jeu de jackpot se déclenche au hasard, sur n'importe quel tour.",
      "Ce jackpot a un prix : le RTP affiché par SlotCatalog n'est que de 88,12 %, très en dessous des 96 % habituels, parce qu'une partie du retour est réservée aux jackpots. Concrètement, hors jackpot, vous récupérez en moyenne moins qu'avec la plupart des jeux de cette page. Le gain maximal dépend du montant du jackpot au moment du gain : nous n'affichons donc pas de plafond."
    ],
    pourQui: 'Les joueurs qui acceptent un retour moyen plus faible pour une petite chance de jackpot.',
    attention: 'La probabilité de gagner le jackpot Mega est infime. Ne misez jamais en pensant le décrocher.',
    faq: [
      { q: 'Pourquoi le RTP de Mega Moolah est-il si bas ?', r: 'Parce qu’une partie de chaque mise alimente les jackpots progressifs. Le RTP de 88,12 % indiqué par SlotCatalog inclut cette part.' },
      { q: 'Comment gagner le jackpot de Mega Moolah ?', r: 'Le jeu de jackpot se déclenche au hasard. Aucune méthode ne permet d’augmenter ses chances, en dehors de la mise jouée selon les règles du jeu.' }
    ],
    similaires: ['wolf-gold', 'immortal-romance', 'book-of-oz'],
    sources: [sc('Mega Moolah', 'Mega-Moolah')],
    verifieLe: V
  },
  {
    slug: 'book-of-oz',
    nom: 'Book of Oz',
    ...GG,
    studio: 'Triple Edge Studios',
    volume: 390,
    difficulte: 19,
    rtp: 96.31,
    rtpSource: 'base',
    rtpAutres: [],
    volatilite: 'Élevée',
    gainMax: 5000,
    annee: 2018,
    grille: '5 rouleaux × 3 rangées, 10 lignes',
    gains: 'Lignes de paiement',
    toursGratuits: '3, 4 ou 5 livres : 10, 12 ou 25 tours gratuits avec un symbole en expansion, rejouables',
    multiplicateurs: null,
    achatBonus: null,
    theme: 'Conte fantastique : magicien, potions et grimoire',
    analyse: [
      "Book of Oz reprend la mécanique des jeux « Book » (un symbole tiré au hasard s'étend pendant les tours gratuits) et y ajoute une option originale : la relance payante d'un rouleau. Selon SlotCatalog, vous pouvez payer pour relancer un seul rouleau, autant de fois que vous le voulez, afin de compléter une combinaison ou d'aller chercher le troisième livre.",
      "SlotCatalog indique un RTP de 96,31 % en jeu normal, qui monterait à 96,5 % avec les relances. Avec 5 livres, le bonus offre 25 tours gratuits, nettement plus que les 10 tours d'autres jeux du même genre."
    ],
    pourQui: 'Les amateurs de jeux « Book » qui aiment garder un peu de contrôle.',
    attention: 'Les relances payantes peuvent coûter cher : fixez une limite avant de les utiliser.',
    faq: [
      { q: 'Comment fonctionne la relance de Book of Oz ?', r: 'Après un tour, vous pouvez payer pour relancer un seul rouleau, autant de fois que vous le voulez, pour compléter un gain ou chercher le bonus, selon SlotCatalog.' },
      { q: 'Combien de tours gratuits dans Book of Oz ?', r: '10, 12 ou 25 tours avec 3, 4 ou 5 livres, selon SlotCatalog.' }
    ],
    similaires: ['book-of-dead', 'book-of-ra', 'legacy-of-dead'],
    sources: [sc('Book of Oz', 'Book-of-Oz')],
    verifieLe: V
  },
  {
    slug: 'book-of-ra',
    nom: 'Book of Ra Deluxe',
    ...NOVO,
    volume: 260,
    difficulte: 48,
    rtp: 95.1,
    rtpSource: 'base',
    rtpAutres: [],
    volatilite: 'Élevée',
    gainMax: 10035,
    annee: 2008,
    grille: '5 rouleaux × 3 rangées, 10 lignes',
    gains: 'Lignes de paiement',
    toursGratuits: '3 livres ou plus : 10 tours gratuits avec un symbole en expansion',
    multiplicateurs: null,
    achatBonus: null,
    theme: 'Égypte ancienne et explorateur',
    analyse: [
      "Book of Ra est le jeu qui a lancé la mode des machines « Book », d'abord dans les salles de jeu européennes, puis en ligne. Cette fiche décrit Book of Ra Deluxe, la version la plus répandue en ligne : 10 lignes, et 10 tours gratuits pendant lesquels un symbole tiré au hasard s'étend sur ses rouleaux.",
      "Le jeu propose aussi le « quitte ou double » : après un gain, vous pouvez deviner la couleur d'une carte pour doubler la somme ou la perdre. Son RTP de 95,1 % selon SlotCatalog est un peu plus bas que celui de Book of Dead, qui reprend la même idée."
    ],
    pourQui: 'Les nostalgiques des machines de salle et les amateurs de jeux simples.',
    attention: 'Le « quitte ou double » ne change pas vos chances à long terme : il ne fait qu’augmenter les écarts.',
    faq: [
      { q: 'Quelle différence entre Book of Ra et Book of Ra Deluxe ?', r: 'La version Deluxe, la plus répandue en ligne, joue sur 10 lignes au lieu de 9 et a des graphismes modernisés. Cette fiche décrit la version Deluxe.' },
      { q: 'Quel est le RTP de Book of Ra Deluxe ?', r: '95,1 %, selon SlotCatalog.' }
    ],
    similaires: ['book-of-dead', 'book-of-oz', 'sizzling-hot'],
    sources: [sc('Book of Ra Deluxe', 'Book-of-Ra-Deluxe')],
    verifieLe: V
  },
  {
    slug: '9-masks-of-fire',
    nom: '9 Masks of Fire',
    ...GG,
    studio: 'Gameburger Studios',
    volume: 260,
    difficulte: 38,
    rtp: 96.24,
    rtpSource: 'base',
    rtpAutres: [],
    volatilite: 'Moyenne',
    gainMax: null,
    annee: 2019,
    grille: '5 rouleaux × 3 rangées, 20 lignes',
    gains: 'Lignes de paiement, plus des masques qui paient n’importe où',
    toursGratuits: '3 scatters sur les rouleaux 2, 3 et 4 : une roue attribue de 10 à 30 tours gratuits',
    multiplicateurs: 'La roue fixe un multiplicateur de 2× ou 3× pour tout le bonus',
    achatBonus: null,
    theme: 'Masques et feu, avec des symboles de machine classique',
    analyse: [
      "9 Masks of Fire mélange les symboles d'une machine classique (7, BAR, cloches, cerises) avec un scatter original : les masques paient n'importe où sur la grille, dès 3 masques, et 9 masques sur un même tour paient 2 000× la mise selon SlotCatalog.",
      "Les tours gratuits commencent par une roue qui fixe à la fois le nombre de tours (10 à 30) et le multiplicateur (2× ou 3×). Comme les masques restent actifs pendant le bonus, le plafond réel dépend de ce multiplicateur ; les chiffres de SlotCatalog varient (2 000× ou 6 000×), nous n'affichons donc pas de gain maximal unique."
    ],
    pourQui: 'Les joueurs qui aiment les machines classiques avec un bonus à multiplicateur.',
    attention: 'En dehors des masques et des tours gratuits, le jeu de base n’a pas d’autre fonction bonus.',
    faq: [
      { q: 'Combien paient 9 masques dans 9 Masks of Fire ?', r: '2 000 fois la mise sur un même tour, selon SlotCatalog.' },
      { q: 'Comment se déclenchent les tours gratuits ?', r: 'Avec 3 scatters sur les rouleaux 2, 3 et 4. Une roue attribue alors de 10 à 30 tours et un multiplicateur de 2× ou 3×.' }
    ],
    similaires: ['fire-joker', 'sizzling-hot', 'immortal-romance'],
    sources: [sc('9 Masks of Fire', '9-Masks-Of-Fire')],
    verifieLe: V
  },
  {
    slug: 'starburst',
    nom: 'Starburst',
    ...NE,
    volume: 210,
    difficulte: 46,
    rtp: 96.08,
    rtpSource: 'officiel',
    rtpAutres: [],
    volatilite: 'Faible',
    gainMax: 800,
    annee: 2013,
    grille: '5 rouleaux × 3 rangées, 10 lignes',
    gains: 'Lignes qui paient dans les deux sens',
    toursGratuits: 'Aucun',
    multiplicateurs: null,
    achatBonus: null,
    theme: 'Espace et pierres précieuses',
    analyse: [
      "Starburst est l'une des machines à sous les plus jouées de l'histoire du jeu en ligne. Elle n'a ni tours gratuits ni multiplicateurs : quand un wild étoilé tombe sur les rouleaux 2, 3 ou 4, il s'étend sur tout le rouleau et offre un nouveau tour, jusqu'à trois de suite selon SlotCatalog.",
      "Les lignes paient de gauche à droite et de droite à gauche, ce qui donne des gains fréquents. Sa volatilité est faible et son gain maximal limité à 800× la mise selon la fiche officielle de NetEnt : c'est le jeu idéal pour faire durer un petit budget, ou pour remplir les conditions d'un bonus sans trop de variations."
    ],
    pourQui: 'Les débutants et les joueurs qui veulent des sessions longues et régulières.',
    attention: 'Avec un gain maximal de 800×, il ne faut pas y chercher le gros coup.',
    faq: [
      { q: 'Starburst a-t-il des tours gratuits ?', r: 'Non. Sa seule fonction est le wild en expansion des rouleaux 2, 3 et 4, qui offre jusqu’à trois nouveaux tours.' },
      { q: 'Quel est le gain maximal de Starburst ?', r: '800 fois la mise, selon la fiche officielle de NetEnt.' }
    ],
    similaires: ['gonzos-quest', 'fire-joker', 'sizzling-hot'],
    sources: [{ titre: 'NetEnt, fiche officielle Starburst', url: 'https://netent.com/games/starburst' }, sc('Starburst', 'Starburst')],
    verifieLe: V
  },
  {
    slug: 'gonzos-quest',
    nom: "Gonzo's Quest",
    ...NE,
    volume: 170,
    difficulte: 28,
    rtp: 95.97,
    rtpSource: 'officiel',
    rtpAutres: [],
    volatilite: 'Moyenne à élevée',
    gainMax: 2200,
    annee: 2011,
    grille: '5 rouleaux × 3 rangées, 20 lignes',
    gains: 'Lignes de paiement, avec avalanches',
    toursGratuits: '3 symboles Free Fall : 10 chutes gratuites',
    multiplicateurs: 'Avalanches de 1× à 5× en jeu de base, jusqu’à 15× en chutes gratuites',
    achatBonus: null,
    theme: 'Conquistador à la recherche d’El Dorado',
    analyse: [
      "Gonzo's Quest, sorti en 2011, a popularisé les « avalanches » : au lieu de tourner, les blocs tombent, et les symboles gagnants explosent pour laisser tomber les suivants. Chaque avalanche consécutive augmente le multiplicateur, de 1× à 5× en jeu de base selon SlotCatalog.",
      "Pendant les 10 chutes gratuites, l'échelle des multiplicateurs passe à 3×, 6×, 9× puis 15×. C'est cette mécanique, reprise depuis par de nombreux jeux, qui fait l'intérêt de Gonzo's Quest. Selon la fiche officielle de NetEnt, son gain maximal est de 2 200× la mise."
    ],
    pourQui: 'Les joueurs qui veulent découvrir l’origine des cascades, sur un jeu à volatilité modérée.',
    attention: 'Une version Megaways (Red Tiger, 2020) et une suite existent, avec des règles différentes.',
    faq: [
      { q: 'Comment fonctionnent les avalanches de Gonzo’s Quest ?', r: 'Les symboles gagnants explosent et de nouveaux tombent. Chaque gain consécutif augmente le multiplicateur, jusqu’à 5× en jeu de base et 15× pendant les chutes gratuites.' },
      { q: 'Quel est le RTP de Gonzo’s Quest ?', r: '95,97 %, selon la fiche officielle de NetEnt.' }
    ],
    similaires: ['starburst', 'bonanza', 'reactoonz'],
    sources: [{ titre: "NetEnt, fiche officielle Gonzo's Quest", url: 'https://netent.com/games/gonzos-quest' }, sc("Gonzo's Quest", 'Gonzos-Quest'), { titre: "Wikipédia (anglais), Gonzo's Quest", url: 'https://en.wikipedia.org/wiki/Gonzo%27s_Quest' }],
    verifieLe: V
  },
  {
    slug: 'wanted-dead-or-a-wild',
    nom: 'Wanted Dead or a Wild',
    ...HS,
    volume: 170,
    difficulte: 37,
    rtp: 96.38,
    rtpSource: 'base',
    rtpAutres: [94.55, 92.33, 88.42],
    volatilite: 'Élevée',
    gainMax: 12500,
    annee: 2021,
    grille: '5 rouleaux × 5 rangées, 15 lignes',
    gains: 'Lignes de paiement',
    toursGratuits: 'Trois bonus différents : Great Train Robbery, Duel at Dawn et Dead Man’s Hand',
    multiplicateurs: 'Wilds « VS » de 2× à 100×',
    achatBonus: '80 ×, 200 × ou 400 × la mise selon le bonus, selon le pays',
    theme: 'Western',
    analyse: [
      "Wanted Dead or a Wild est devenu le jeu phare de Hacksaw Gaming. Son symbole clé est le wild « VS » : il se transforme en rouleau wild et affiche un multiplicateur de 2× à 100× selon SlotCatalog.",
      "Le jeu propose trois bonus aux règles différentes, chacun pouvant être acheté dans certains pays (80×, 200× ou 400× la mise). Son gain maximal de 12 500× et sa volatilité élevée en font un jeu à réserver à un budget solide. Acheter un bonus ne change pas le RTP en votre faveur : c'est simplement une façon de dépenser plus vite."
    ],
    pourQui: 'Les joueurs expérimentés qui recherchent des bonus explosifs.',
    attention: 'Quatre réglages de RTP sont recensés, de 96,38 % à 88,42 % : vérifiez l’aide du jeu.',
    faq: [
      { q: 'Quels sont les bonus de Wanted Dead or a Wild ?', r: 'Great Train Robbery, Duel at Dawn et Dead Man’s Hand, trois bonus aux règles différentes.' },
      { q: 'Quel est le gain maximal ?', r: '12 500 fois la mise, selon SlotCatalog.' }
    ],
    similaires: ['chaos-crew', 'razor-shark', 'zeus-vs-hades'],
    sources: [sc('Wanted Dead or a Wild', 'Wanted-Dead-or-a-Wild')],
    verifieLe: V
  },
  {
    slug: 'legacy-of-dead',
    nom: 'Legacy of Dead',
    ...PNG,
    volume: 170,
    difficulte: 38,
    rtp: 96.58,
    rtpSource: 'base',
    rtpAutres: [94.51, 91.51, 87.56, 84.55],
    volatilite: 'Élevée',
    gainMax: 5000,
    annee: 2019,
    grille: '5 rouleaux × 3 rangées, 10 lignes',
    gains: 'Lignes de paiement',
    toursGratuits: '3 tombeaux ou plus : 10 tours gratuits ; chaque relance ajoute 10 tours et un nouveau symbole en expansion',
    multiplicateurs: null,
    achatBonus: 'Non',
    theme: 'Égypte ancienne',
    analyse: [
      "Legacy of Dead, du même studio que Book of Dead, corrige le défaut principal de son aîné. Selon SlotCatalog, chaque relance des tours gratuits ajoute 10 tours et un nouveau symbole en expansion, jusqu'à 9 symboles. Un mauvais tirage au départ peut donc être rattrapé.",
      "Les tombeaux paient aussi un gain immédiat au déclenchement : 2×, 20× ou 200× la mise pour 3, 4 ou 5 tombeaux. Le RTP de sa meilleure version (96,58 %) est légèrement supérieur à celui de Book of Dead, mais SlotCatalog recense là aussi des versions jusqu'à 84,55 %."
    ],
    pourQui: 'Les fans de Book of Dead qui veulent un bonus plus généreux en relances.',
    attention: 'Comme pour Book of Dead, l’écart entre la meilleure et la pire version de RTP dépasse 12 points.',
    faq: [
      { q: 'Quelle différence entre Legacy of Dead et Book of Dead ?', r: 'Dans Legacy of Dead, chaque relance du bonus ajoute un nouveau symbole en expansion (jusqu’à 9), et les tombeaux paient un gain immédiat au déclenchement.' },
      { q: 'Quel est le RTP de Legacy of Dead ?', r: '96,58 % dans sa meilleure version, selon SlotCatalog.' }
    ],
    similaires: ['book-of-dead', 'book-of-oz', 'rise-of-olympus'],
    sources: [sc('Legacy of Dead', 'Legacy-of-Dead')],
    verifieLe: V
  },
  {
    slug: 'razor-shark',
    nom: 'Razor Shark',
    ...PUSH,
    volume: 170,
    difficulte: 39,
    rtp: 96.7,
    rtpSource: 'base',
    rtpAutres: [95.05, 90.52],
    volatilite: 'Élevée',
    gainMax: null,
    annee: 2019,
    grille: '5 rouleaux × 4 rangées, 20 lignes',
    gains: 'Lignes de paiement',
    toursGratuits: '3 scatters ou plus ; les rouleaux 2 et 4 sont remplis de piles mystère',
    multiplicateurs: 'Les requins orange révèlent un scatter ou un multiplicateur de 1× à 2 500× ; en tours gratuits, le multiplicateur augmente à chaque glissement',
    achatBonus: null,
    theme: 'Fonds marins et requins',
    analyse: [
      "Razor Shark repose sur les « piles mystère » : des algues de 4 cases de haut qui déclenchent des relances. À chaque relance, la pile descend d'une case et se transforme en symboles identiques ou en requins orange. Selon SlotCatalog, chaque requin orange révèle un scatter ou un multiplicateur de 1× à 2 500×.",
      "En tours gratuits, les rouleaux 2 et 4 sont couverts de piles mystère, et le multiplicateur augmente de 1 à chaque glissement. Le gain maximal annoncé varie selon les passages de SlotCatalog (50 000×, voire sans plafond théorique) : nous ne l'affichons pas."
    ],
    pourQui: 'Les joueurs qui aiment les fonctions aléatoires spectaculaires et acceptent une forte volatilité.',
    attention: 'Trois réglages de RTP sont recensés (96,7 %, 95,05 % et 90,52 %).',
    faq: [
      { q: 'Que sont les piles mystère de Razor Shark ?', r: 'Des algues de 4 cases qui déclenchent des relances : à chaque relance, elles descendent d’une case et se transforment en symboles identiques ou en requins orange.' },
      { q: 'Quel est le RTP de Razor Shark ?', r: '96,7 % dans sa meilleure version, selon SlotCatalog.' }
    ],
    similaires: ['jammin-jars', 'wanted-dead-or-a-wild', 'chaos-crew'],
    sources: [sc('Razor Shark', 'Razor-Shark')],
    verifieLe: V
  },
  {
    slug: 'immortal-romance',
    nom: 'Immortal Romance',
    ...GG,
    volume: 140,
    difficulte: 47,
    rtp: 96.86,
    rtpSource: 'base',
    rtpAutres: [],
    volatilite: 'Moyenne à élevée',
    gainMax: 12150,
    annee: 2011,
    grille: '5 rouleaux × 3 rangées, 243 façons de gagner',
    gains: '243 façons de gagner',
    toursGratuits: '3 scatters ou plus : quatre bonus (Amber, Troy, Michael, Sarah) débloqués au fil des visites',
    multiplicateurs: 'Selon le bonus : gains × 5 (Amber), chauves-souris multiplicatrices (Troy), rouleaux en cascade de 2× à 5× (Michael)',
    achatBonus: null,
    theme: 'Vampires et romance',
    analyse: [
      "Immortal Romance récompense la fidélité. Selon SlotCatalog, la « Chambre des tours » ne propose d'abord que le bonus d'Amber (10 tours, gains × 5). Troy se débloque après 5 visites, Michael après 10, et Sarah, avec ses wilds grimpants, après 15.",
      "En jeu de base, la fonction aléatoire « Wild Desire » peut transformer jusqu'à cinq rouleaux entiers en wilds. SlotCatalog classe sa volatilité tantôt moyenne, tantôt élevée : nous retenons « moyenne à élevée ». Son RTP de 96,86 % est l'un des plus hauts de notre sélection."
    ],
    pourQui: 'Les joueurs réguliers qui aiment débloquer du contenu au fil des parties.',
    attention: 'La progression des bonus dépend du casino et du compte : elle peut repartir de zéro ailleurs.',
    faq: [
      { q: 'Comment débloquer les bonus d’Immortal Romance ?', r: 'Amber est disponible dès la première visite de la Chambre des tours, Troy après 5 visites, Michael après 10 et Sarah après 15, selon SlotCatalog.' },
      { q: 'Quel est le gain maximal ?', r: '12 150 fois la mise, selon SlotCatalog.' }
    ],
    similaires: ['mega-moolah', '9-masks-of-fire', 'book-of-oz'],
    sources: [sc('Immortal Romance', 'Immortal-Romance')],
    verifieLe: V
  },
  {
    slug: 'bonanza',
    nom: 'Bonanza Megaways',
    fournisseur: 'Big Time Gaming',
    fournisseurId: 'big-time-gaming',
    volume: 140,
    difficulte: 44,
    rtp: 96.0,
    rtpSource: 'base',
    rtpAutres: [],
    volatilite: 'Élevée',
    gainMax: 26000,
    annee: 2016,
    grille: '6 rouleaux jusqu’à 7 symboles, plus un wagonnet horizontal',
    gains: 'Megaways : jusqu’à 117 649 façons de gagner, avec cascades',
    toursGratuits: 'Les lettres G-O-L-D : 12 tours gratuits, +5 par scatter supplémentaire',
    multiplicateurs: 'Multiplicateur qui augmente de 1 à chaque gain pendant les tours gratuits, sans retour à zéro',
    achatBonus: null,
    theme: 'Mine d’or',
    analyse: [
      "Bonanza, sorti en 2016, est le jeu qui a rendu célèbre le système Megaways, inventé par son studio, Big Time Gaming. Le nombre de symboles par rouleau change à chaque tour, jusqu'à 117 649 façons de gagner, et un wagonnet au-dessus de la grille ajoute des symboles.",
      "Pendant les tours gratuits, déclenchés en alignant les lettres G-O-L-D, le multiplicateur augmente de 1 à chaque cascade gagnante et ne redescend jamais. Ce principe a été repris par de nombreux Megaways. SlotCatalog indique un gain maximal de 26 000× la mise."
    ],
    pourQui: 'Les curieux qui veulent jouer à l’original des Megaways.',
    attention: 'SlotCatalog signale d’autres réglages de RTP, sans les détailler.',
    faq: [
      { q: 'Qui a créé le système Megaways ?', r: 'Big Time Gaming, le studio de Bonanza. Le système est aujourd’hui utilisé sous licence par de nombreux fournisseurs, comme Pragmatic Play.' },
      { q: 'Comment déclencher les tours gratuits de Bonanza ?', r: 'En faisant apparaître les lettres G, O, L et D. Vous obtenez 12 tours gratuits, plus 5 par scatter supplémentaire.' }
    ],
    similaires: ['great-rhino-megaways', 'buffalo-king-megaways', 'gonzos-quest'],
    sources: [sc('Bonanza', 'Bonanza')],
    verifieLe: V
  },
  {
    slug: 'fire-joker',
    nom: 'Fire Joker',
    ...PNG,
    volume: 140,
    difficulte: 32,
    rtp: 96.15,
    rtpSource: 'base',
    rtpAutres: [94.23],
    volatilite: 'Moyenne',
    gainMax: 800,
    annee: 2016,
    grille: '3 rouleaux × 3 rangées, 5 lignes',
    gains: 'Lignes de paiement',
    toursGratuits: 'Aucun',
    multiplicateurs: 'Roue des multiplicateurs jusqu’à 10× quand la grille est remplie d’un même symbole',
    achatBonus: null,
    theme: 'Machine à fruits classique',
    analyse: [
      "Fire Joker est une machine à fruits à trois rouleaux, sans tours gratuits. Sa fonction phare est la relance enflammée : quand deux rouleaux affichent une pile de symboles identiques sans gain, ils restent en place et le troisième rouleau est relancé, selon SlotCatalog.",
      "Si la grille entière se remplit du même symbole, la roue des multiplicateurs tourne et multiplie le gain jusqu'à 10×. Le plafond de 800× la mise est modeste : c'est un jeu rapide et lisible, pas une machine à gros coups."
    ],
    pourQui: 'Les amateurs de machines classiques qui veulent un jeu rapide.',
    attention: 'Deux RTP sont cités (96,15 % et 94,23 %) : vérifiez l’aide du jeu.',
    faq: [
      { q: 'Fire Joker a-t-il des tours gratuits ?', r: 'Non. Ses fonctions sont la relance enflammée et la roue des multiplicateurs, jusqu’à 10×.' },
      { q: 'Quel est le gain maximal de Fire Joker ?', r: '800 fois la mise, selon SlotCatalog.' }
    ],
    similaires: ['sizzling-hot', '9-masks-of-fire', 'starburst'],
    sources: [sc('Fire Joker', 'Fire-Joker')],
    verifieLe: V
  },
  {
    slug: 'fortune-tiger',
    nom: 'Fortune Tiger',
    fournisseur: 'PG Soft',
    volume: 140,
    difficulte: 27,
    rtp: 96.81,
    rtpSource: 'base',
    rtpAutres: [],
    volatilite: 'Moyenne',
    gainMax: 2500,
    annee: 2022,
    grille: '3 rouleaux × 3 rangées, 5 lignes',
    gains: 'Lignes de paiement',
    toursGratuits: 'Aucun',
    multiplicateurs: 'Gain × 10 quand toute la grille est remplie',
    achatBonus: null,
    theme: 'Tigre porte-bonheur et fêtes asiatiques',
    analyse: [
      "Fortune Tiger est un jeu de PG Soft très populaire en Amérique latine, notamment au Brésil, sur une petite grille de 3 × 3. Il n'a pas de tours gratuits : sa fonction « Fortune Tiger » se déclenche au hasard, fixe un symbole, puis relance les autres cases tant que ce symbole ou un wild apparaît.",
      "Si toute la grille se remplit, le gain est multiplié par 10, ce qui mène au plafond de 2 500× la mise indiqué par SlotCatalog. Le jeu est simple et rapide, mais la fonction ne se déclenche qu'environ une fois sur cent tours selon les statistiques de SlotCatalog."
    ],
    pourQui: 'Les joueurs qui aiment les jeux très courts et simples, sur mobile.',
    attention: 'Ce jeu circule beaucoup sur les réseaux sociaux avec de fausses « astuces » : aucune méthode ne prédit la fonction.',
    faq: [
      { q: 'Fortune Tiger a-t-il des tours gratuits ?', r: 'Non. Sa fonction est une série de relances déclenchée au hasard, avec un gain × 10 si toute la grille est remplie.' },
      { q: 'Existe-t-il une astuce pour gagner à Fortune Tiger ?', r: 'Non. Les résultats sont aléatoires. Les « horaires » ou « méthodes » partagés en ligne ne reposent sur rien.' }
    ],
    similaires: ['fire-joker', 'sizzling-hot', 'starburst'],
    sources: [sc('Fortune Tiger', 'Fortune-Tiger-PG-Soft')],
    verifieLe: V
  },
  {
    slug: 'reactoonz',
    nom: 'Reactoonz',
    ...PNG,
    volume: 110,
    difficulte: 49,
    rtp: 96.51,
    rtpSource: 'base',
    rtpAutres: [94.51, 91.49, 87.5, 84.51],
    volatilite: 'Élevée',
    gainMax: 4570,
    annee: 2017,
    grille: '7 rouleaux × 7 rangées',
    gains: 'Grappes de 5 symboles ou plus, avec cascades',
    toursGratuits: 'Aucun',
    multiplicateurs: 'Les symboles géants 2 × 2 doublent les gains auxquels ils participent',
    achatBonus: null,
    theme: 'Extraterrestres de dessin animé',
    analyse: [
      "Reactoonz n'a pas de tours gratuits : tout se passe en jeu de base. Chaque symbole gagnant remplit une jauge, la « Quantum Leap ». Selon SlotCatalog, chaque segment rempli met en réserve une fonction aléatoire (destruction de symboles, wilds, transformation…), et le cinquième segment garantit le Gargantoon, un wild géant de 3 × 3.",
      "Le jeu récompense les longues chaînes de cascades, qui font monter la jauge. Les tours sans gain sont nombreux, d'où sa volatilité élevée. Comme les autres jeux Play'n GO de cette liste, il existe en cinq versions de RTP, de 96,51 % à 84,51 %."
    ],
    pourQui: 'Les joueurs qui aiment les jeux à grappes et les fonctions en chaîne.',
    attention: 'Cinq réglages de RTP existent : l’écart atteint 12 points entre le meilleur et le pire.',
    faq: [
      { q: 'Reactoonz a-t-il des tours gratuits ?', r: 'Non. Les fonctions se déclenchent en jeu de base, grâce à la jauge Quantum Leap.' },
      { q: 'Quel est le gain maximal de Reactoonz ?', r: '4 570 fois la mise, selon SlotCatalog.' }
    ],
    similaires: ['jammin-jars', 'gems-bonanza', 'sugar-rush'],
    sources: [sc('Reactoonz', 'Reactoonz')],
    verifieLe: V
  },
  {
    slug: 'chaos-crew',
    nom: 'Chaos Crew',
    ...HS,
    volume: 90,
    difficulte: 18,
    rtp: 96.3,
    rtpSource: 'base',
    rtpAutres: [],
    volatilite: 'Élevée',
    gainMax: 10000,
    annee: 2020,
    grille: '5 rouleaux × 5 rangées, 15 lignes',
    gains: 'Lignes de paiement',
    toursGratuits: '3 scatters : 3 tours, remis à 3 à chaque symbole multiplicateur',
    multiplicateurs: 'Wild de 2×, 3× ou 5× en jeu de base ; multiplicateurs par rouleau pendant le bonus',
    achatBonus: '129 × la mise, selon le pays',
    theme: 'Univers punk et gothique',
    analyse: [
      "Chaos Crew, sorti en 2020, est l'un des jeux les plus connus de Hacksaw Gaming. En jeu de base, le chat wild porte un multiplicateur mystère de 2×, 3× ou 5×, et plusieurs wilds sur un même gain se multiplient entre eux selon SlotCatalog.",
      "Le bonus fonctionne à rebours : il commence avec 3 tours, et chaque symbole multiplicateur remet le compteur à 3. Chaque rouleau a son propre multiplicateur, que les crânes augmentent et que les chats multiplient ; tout est additionné à la fin. Un bonus peut donc s'arrêter au bout de 3 tours, ou durer bien plus longtemps."
    ],
    pourQui: 'Les joueurs qui aiment les bonus à suspense et acceptent une volatilité très marquée.',
    attention: 'SlotCatalog indique un RTP plus bas (95,92 %) quand le bonus est acheté.',
    faq: [
      { q: 'Comment fonctionne le bonus de Chaos Crew ?', r: 'Il commence avec 3 tours. Chaque symbole multiplicateur remet le compteur à 3 et augmente ou multiplie le multiplicateur d’un rouleau. Les multiplicateurs sont additionnés à la fin.' },
      { q: 'Quel est le gain maximal de Chaos Crew ?', r: '10 000 fois la mise, selon SlotCatalog.' }
    ],
    similaires: ['wanted-dead-or-a-wild', 'razor-shark', 'jammin-jars'],
    sources: [sc('Chaos Crew', 'Chaos-Crew')],
    verifieLe: V
  },
  {
    slug: 'jammin-jars',
    nom: "Jammin' Jars",
    ...PUSH,
    volume: 70,
    difficulte: 24,
    rtp: 96.83,
    rtpSource: 'base',
    rtpAutres: [95.25, 94.24],
    volatilite: 'Élevée',
    gainMax: 20000,
    annee: 2018,
    grille: '8 rouleaux × 8 rangées',
    gains: 'Grappes de 5 symboles ou plus, avec cascades',
    toursGratuits: '3 pots de confiture ou plus : 6 tours gratuits',
    multiplicateurs: 'Chaque pot de confiture (wild) gagne +1 à son multiplicateur à chaque gain, sans plafond',
    achatBonus: 'Selon le pays',
    theme: 'Fruits et confitures',
    analyse: [
      "Dans Jammin' Jars, les pots de confiture sont des wilds qui se déplacent. Selon OLBG, quand un pot participe à un gain, il se déplace vers une case voisine et son multiplicateur augmente de 1, sans plafond. Il disparaît au premier tour sans gain.",
      "Trois pots déclenchent 6 tours gratuits, pendant lesquels les multiplicateurs ne peuvent que monter. La fonction « arc-en-ciel », déclenchée au hasard après un tour perdant, peut aussi faire tomber des fruits géants. Le gain maximal est d'environ 20 000× la mise."
    ],
    pourQui: 'Les joueurs qui aiment voir les multiplicateurs grimper au fil des cascades.',
    attention: 'Des versions à 95,25 % et 94,24 % de RTP sont recensées : vérifiez celle du casino.',
    faq: [
      { q: 'Comment fonctionnent les pots de Jammin’ Jars ?', r: 'Ce sont des wilds : à chaque gain auquel ils participent, ils se déplacent et leur multiplicateur augmente de 1.' },
      { q: 'Combien de tours gratuits dans Jammin’ Jars ?', r: '6 tours gratuits avec 3 pots ou plus, selon OLBG et SlotCatalog.' }
    ],
    similaires: ['reactoonz', 'razor-shark', 'sugar-rush'],
    sources: [{ titre: "OLBG, fiche Jammin' Jars", url: 'https://www.olbg.com/slots/games/jammin-jars' }, sc("Jammin' Jars", 'Jammin-Jars')],
    verifieLe: V
  },
  {
    slug: 'rise-of-olympus',
    nom: 'Rise of Olympus',
    ...PNG,
    volume: 70,
    difficulte: 23,
    rtp: 96.5,
    rtpSource: 'base',
    rtpAutres: [94.51, 91.49, 87.5, 84.5],
    volatilite: 'Élevée',
    gainMax: 5000,
    annee: 2018,
    grille: '5 rouleaux × 5 rangées',
    gains: 'Grappes de 3 symboles ou plus, avec cascades',
    toursGratuits: 'Vider toute la grille : choix entre Zeus (8 tours), Poséidon (5 tours) et Hadès (4 tours)',
    multiplicateurs: 'Multiplicateur qui augmente à chaque gain consécutif, sans retour à zéro pendant les tours gratuits',
    achatBonus: null,
    theme: 'Mythologie grecque',
    analyse: [
      "Rise of Olympus a un déclencheur de bonus unique : il faut vider entièrement la grille de 5 × 5 à force de cascades. Vous choisissez alors votre dieu : Zeus (8 tours, volatilité faible), Poséidon (5 tours, moyenne) ou Hadès (4 tours, élevée), selon SlotCatalog.",
      "En jeu de base, la fonction « Mains des dieux » peut se déclencher après un tour perdant et modifier la grille selon le dieu actif. Sorti en 2018, il est plus ancien que Gates of Olympus et joue sur un tout autre principe : des grappes, pas un paiement partout."
    ],
    pourQui: 'Les joueurs qui aiment la mythologie grecque et choisir leur bonus.',
    attention: 'SlotCatalog affiche deux RTP (96,5 % et 94,51 %) et trois autres versions : vérifiez l’aide du jeu.',
    faq: [
      { q: 'Comment déclencher les tours gratuits de Rise of Olympus ?', r: 'En vidant toute la grille grâce aux cascades. Vous choisissez ensuite Zeus, Poséidon ou Hadès.' },
      { q: 'Quel dieu choisir ?', r: 'Zeus donne plus de tours et des résultats plus réguliers, Hadès moins de tours et des résultats plus extrêmes. Aucun n’est meilleur en moyenne.' }
    ],
    similaires: ['gates-of-olympus', 'zeus-vs-hades', 'legacy-of-dead'],
    sources: [sc('Rise of Olympus', 'Rise-Of-Olympus')],
    verifieLe: V
  },
  {
    slug: 'sizzling-hot',
    nom: 'Sizzling Hot Deluxe',
    ...NOVO,
    volume: 70,
    difficulte: 19,
    rtp: 95.66,
    rtpSource: 'base',
    rtpAutres: [92.28, 90.02],
    volatilite: 'Moyenne',
    gainMax: 1000,
    annee: 2007,
    grille: '5 rouleaux × 3 rangées, 5 lignes',
    gains: 'Lignes de paiement, plus des étoiles qui paient n’importe où',
    toursGratuits: 'Aucun',
    multiplicateurs: null,
    achatBonus: null,
    theme: 'Machine à fruits classique',
    analyse: [
      "Sizzling Hot Deluxe est la machine à fruits dans sa forme la plus pure : 5 lignes, des fruits, des 7, des étoiles qui paient n'importe où, et rien d'autre. Pas de wild, pas de tours gratuits : seulement un « quitte ou double » après chaque gain, selon SlotCatalog.",
      "Ce classique des salles de jeu européennes reste très recherché en ligne. Son gain maximal est de 1 000× la mise. Attention, SlotCatalog cite aussi des versions à 92,28 % et 90,02 % de RTP."
    ],
    pourQui: 'Les nostalgiques des machines de salle.',
    attention: 'Sans fonction bonus, les gains dépendent uniquement des combinaisons de base.',
    faq: [
      { q: 'Sizzling Hot a-t-il des tours gratuits ?', r: 'Non. La seule fonction est le « quitte ou double » après un gain.' },
      { q: 'Quel est le RTP de Sizzling Hot Deluxe ?', r: '95,66 % selon SlotCatalog, qui cite aussi des versions à 92,28 % et 90,02 %.' }
    ],
    similaires: ['fire-joker', 'book-of-ra', 'starburst'],
    sources: [sc('Sizzling Hot Deluxe', 'Sizzling-Hot-deluxe')],
    verifieLe: V
  }
];

export default autres;
