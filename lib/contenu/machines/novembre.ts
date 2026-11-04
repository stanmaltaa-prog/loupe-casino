import type { Machine } from './types';

/**
 * Deuxième lot (novembre 2026) : 20 jeux choisis après l'audit des recherches au Canada.
 * Priorité aux jeux dont la démo est très recherchée et peu disputée en français.
 */
const V = '2026-11-04';
const sc = (nom: string, chemin: string) => ({ titre: `SlotCatalog, fiche ${nom}`, url: `https://slotcatalog.com/en/slots/${chemin}` });
const pp = (nom: string, chemin: string) => ({ titre: `Pragmatic Play, fiche officielle ${nom}`, url: `https://www.pragmaticplay.com/en/games/${chemin}/` });
const hs = (nom: string, chemin: string) => ({ titre: `Hacksaw Gaming, fiche officielle ${nom}`, url: `https://www.hacksawgaming.com/games/${chemin}` });
const PP = { fournisseur: 'Pragmatic Play', fournisseurId: 'pragmatic-play' };
const HS = { fournisseur: 'Hacksaw Gaming', fournisseurId: 'hacksaw-gaming' };

const novembre: Machine[] = [
  {
    slug: 'sweet-rush-bonanza',
    nom: 'Sweet Rush Bonanza',
    ...PP,
    volume: 390,
    difficulte: 19,
    rtp: 96.5,
    rtpSource: 'officiel',
    rtpAutres: [95.5, 94.5],
    volatilite: 'Élevée',
    gainMax: 5000,
    annee: 2025,
    grille: '6 rouleaux × 5 rangées',
    gains: 'Paiement partout : 8 symboles identiques ou plus, avec cascades',
    toursGratuits: '4 scatters ou plus : 10 tours gratuits, où les cases marquées et leurs multiplicateurs restent d’un tour à l’autre',
    multiplicateurs: 'Case marquée par un gain : 2× au gain suivant au même endroit, puis le double à chaque fois, jusqu’à 128× ; additionnés sur un même gain',
    achatBonus: 'Deux options d’achat, dont une qui ajoute 2× sur toutes les cases, selon le pays',
    theme: 'Bonbons',
    analyse: [
      "Sweet Rush Bonanza, sorti en septembre 2025, croise deux succès de Pragmatic Play : le paiement partout de Sweet Bonanza et les cases à multiplicateurs de Sugar Rush. Il faut 8 symboles identiques ou plus n'importe où sur la grille de 6 × 5, et chaque case qui participe à un gain est marquée. Si un symbole gagne de nouveau au même endroit pendant le même tour, un multiplicateur apparaît : 2×, puis 4×, et ainsi de suite jusqu'à 128× selon la fiche officielle.",
      "En tours gratuits, les cases marquées et leurs multiplicateurs ne disparaissent plus entre deux tours : la grille se « charge » au fil du bonus, ce qui explique sa forte volatilité. Le jeu propose trois mises « ante » (plus de chances de bonus, multiplicateurs aléatoires, ou 32× sur toutes les cases) : vérifiez le coût affiché du tour avant d'en activer une."
    ],
    pourQui: 'Les joueurs qui aiment les bonus qui montent en puissance au fil des tours gratuits.',
    attention: 'SlotCatalog recense trois réglages de RTP (96,50 %, 95,50 % et 94,50 %) : vérifiez celui de votre casino dans l’aide du jeu.',
    faq: [
      { q: 'Quel est le RTP de Sweet Rush Bonanza ?', r: '96,50 % selon la fiche officielle de Pragmatic Play. SlotCatalog recense aussi des versions à 95,50 % et 94,50 %.' },
      {
        q: 'Comment fonctionnent les multiplicateurs de Sweet Rush Bonanza ?',
        r: 'Chaque case qui participe à un gain est marquée. Un nouveau gain au même endroit pendant le même tour y place un multiplicateur de 2×, qui double ensuite jusqu’à 128×. En tours gratuits, ces cases restent actives jusqu’à la fin du bonus.'
      }
    ],
    similaires: ['sweet-bonanza', 'sugar-rush-1000', 'sweet-bonanza-super-scatter'],
    sources: [pp('Sweet Rush Bonanza', 'sweet-rush-bonanza'), sc('Sweet Rush Bonanza', 'sweet-rush-bonanza')],
    verifieLe: V
  },
  {
    slug: 'sugar-rush-super-scatter',
    nom: 'Sugar Rush Super Scatter',
    ...PP,
    volume: 210,
    difficulte: 32,
    rtp: 96.58,
    rtpSource: 'officiel',
    rtpAutres: [95.53, 94.52],
    volatilite: 'Élevée',
    gainMax: 50000,
    annee: 2026,
    grille: '7 rouleaux × 7 rangées',
    gains: 'Grappes de symboles identiques, avec cascades',
    toursGratuits: '3 scatters ou plus (Super Scatters compris) : jusqu’à 30 tours gratuits, où les multiplicateurs restent en place jusqu’à la fin',
    multiplicateurs: 'Case marquée par une explosion : 2× à l’explosion suivante au même endroit, puis le double à chaque fois, jusqu’à 1 024× ; additionnés sur un même gain',
    achatBonus: null,
    theme: 'Bonbons',
    analyse: [
      "Sugar Rush Super Scatter, sorti en janvier 2026, reprend la grille de 7 × 7 de Sugar Rush et son système de cases marquées. Quand un symbole gagnant explose, sa case est marquée ; une nouvelle explosion au même endroit pendant la même série de cascades y place un multiplicateur de 2×, qui double ensuite jusqu'à 1 024× selon la fiche officielle. Plusieurs multiplicateurs dans un même gain s'additionnent.",
      "La nouveauté, ce sont les Super Scatters. Selon Pragmatic Play, le gain maximal de 50 000× la mise n'est possible que si au moins un Super Scatter sert à déclencher le bonus. Les tours gratuits (jusqu'à 30) gardent les multiplicateurs en place jusqu'à la fin : c'est là que se jouent les gros coups, et c'est aussi ce qui rend le jeu très volatil."
    ],
    pourQui: 'Les joueurs qui connaissent Sugar Rush et veulent une version au plafond de gain bien plus haut, en acceptant plus de volatilité.',
    attention: 'Le plafond de 50 000× suppose un Super Scatter au déclenchement du bonus. SlotCatalog recense trois réglages de RTP (96,58 %, 95,53 % et 94,52 %).',
    faq: [
      { q: 'Quel est le RTP de Sugar Rush Super Scatter ?', r: '96,58 % selon la fiche officielle de Pragmatic Play. Des versions à 95,53 % et 94,52 % sont aussi recensées par SlotCatalog.' },
      { q: 'Qu’est-ce qu’un Super Scatter ?', r: 'Un scatter spécial. Selon Pragmatic Play, le gain maximal de 50 000× la mise n’est accessible que si au moins un Super Scatter sert à déclencher les tours gratuits.' }
    ],
    similaires: ['sugar-rush', 'sugar-rush-1000', 'gates-of-olympus-super-scatter'],
    sources: [pp('Sugar Rush Super Scatter', 'sugar-rush-super-scatter'), sc('Sugar Rush Super Scatter', 'sugar-rush-super-scatter')],
    verifieLe: V
  },
  {
    slug: 'sweet-bonanza-super-scatter',
    nom: 'Sweet Bonanza Super Scatter',
    ...PP,
    volume: 110,
    difficulte: 16,
    rtp: 96.51,
    rtpSource: 'officiel',
    rtpAutres: [95.56, 94.48],
    volatilite: 'Élevée',
    gainMax: 50000,
    annee: 2025,
    grille: '6 rouleaux × 5 rangées',
    gains: 'Paiement partout : 8 symboles identiques ou plus, avec cascades',
    toursGratuits: '4 à 6 scatters : 10 tours gratuits, plus un gain de 3× à 100× la mise selon le nombre de scatters',
    multiplicateurs: 'En tours gratuits, multiplicateurs jusqu’à 100× qui restent sur la grille jusqu’à la fin du bonus ; additionnés à la fin de chaque cascade',
    achatBonus: null,
    theme: 'Bonbons et fruits',
    analyse: [
      "Sweet Bonanza Super Scatter, sorti en juillet 2025, garde le principe de Sweet Bonanza : 8 symboles identiques ou plus n'importe où sur la grille, puis des cascades. Les scatters paient eux-mêmes de 3× à 100× la mise selon leur nombre (4 à 6) et lancent 10 tours gratuits.",
      "Deux choses changent. D'abord les Super Scatters : selon la fiche officielle, déclencher le bonus avec 1 Super Scatter rapporte tout de suite 100× la mise, 2 en donnent 500×, 3 en donnent 5 000×, et 4 donnent le gain maximal de 50 000×. Ensuite, en tours gratuits, les multiplicateurs (jusqu'à 100×) restent sur la grille jusqu'à la fin du bonus, alors que dans l'original ils disparaissent après chaque série de cascades."
    ],
    pourQui: 'Les amateurs de Sweet Bonanza qui veulent un bonus aux multiplicateurs persistants.',
    attention: 'SlotCatalog affiche un gain maximal de 10 000×, la fiche officielle 50 000× avec 4 Super Scatters : nous retenons le chiffre officiel. Trois réglages de RTP sont recensés.',
    faq: [
      { q: 'Quel est le RTP de Sweet Bonanza Super Scatter ?', r: '96,51 % selon la fiche officielle de Pragmatic Play. SlotCatalog recense aussi 95,56 % et 94,48 %.' },
      {
        q: 'Combien rapporte un Super Scatter ?',
        r: 'Selon Pragmatic Play, au déclenchement du bonus : 100× la mise avec 1 Super Scatter, 500× avec 2, 5 000× avec 3 et 50 000× (le gain maximal) avec 4.'
      }
    ],
    similaires: ['sweet-bonanza', 'sweet-bonanza-1000', 'sugar-rush-super-scatter'],
    sources: [pp('Sweet Bonanza Super Scatter', 'sweet-bonanza-super-scatter'), sc('Sweet Bonanza Super Scatter', 'sweet-bonanza-super-scatter')],
    verifieLe: V
  },
  {
    slug: 'fruit-party',
    nom: 'Fruit Party',
    ...PP,
    volume: 170,
    difficulte: 26,
    rtp: 96.5,
    rtpSource: 'officiel',
    rtpAutres: [95.48],
    volatilite: 'Moyenne',
    gainMax: 5000,
    annee: 2020,
    grille: '7 rouleaux × 7 rangées',
    gains: 'Grappes de symboles identiques qui se touchent, avec cascades',
    toursGratuits: '3 scatters ou plus : 10 tours gratuits ; 3 à 7 scatters pendant le bonus : 10 à 14 tours de plus',
    multiplicateurs: 'Un symbole gagnant peut porter 2× ; ces multiplicateurs se multiplient entre eux, jusqu’à 256× ; en tours gratuits, 2× ou 4× plus fréquents',
    achatBonus: null,
    theme: 'Fruits',
    analyse: [
      "Fruit Party, sorti en 2020, est l'un des premiers jeux à grappes de Pragmatic Play : une grande grille de 7 × 7 où l'on gagne avec des groupes de fruits identiques qui se touchent. Les fruits gagnants disparaissent et laissent tomber les suivants, ce qui peut enchaîner plusieurs gains sur un même tour.",
      "Sa particularité : chaque symbole d'une grappe gagnante peut porter un multiplicateur de 2×, et ces multiplicateurs se multiplient entre eux (2 × 2 × 2…), jusqu'à 256× selon la fiche officielle. En tours gratuits, ils tombent plus souvent et peuvent valoir 4×. SlotCatalog le classe en volatilité moyenne, plus régulière que la plupart des jeux récents du fournisseur."
    ],
    pourQui: 'Les joueurs qui préfèrent des gains plus réguliers à la chasse au très gros bonus.',
    attention: 'Ne le confondez pas avec Fruit Party 2, aux règles différentes. SlotCatalog recense une version à 95,48 %.',
    faq: [
      { q: 'Quel est le RTP de Fruit Party ?', r: '96,50 % selon la fiche officielle de Pragmatic Play. Une version à 95,48 % est aussi recensée par SlotCatalog.' },
      {
        q: 'Comment fonctionnent les multiplicateurs de Fruit Party ?',
        r: 'Un symbole d’une grappe gagnante peut porter un multiplicateur de 2×. S’il y en a plusieurs dans la même grappe, ils se multiplient entre eux, jusqu’à 256×.'
      }
    ],
    similaires: ['fruit-party-2', 'sugar-rush', 'sweet-bonanza'],
    sources: [pp('Fruit Party', 'fruit-party-slot'), sc('Fruit Party', 'Fruit-Party-Pragmatic-Play')],
    verifieLe: V
  },
  {
    slug: 'fruit-party-2',
    nom: 'Fruit Party 2',
    ...PP,
    volume: 70,
    difficulte: 48,
    rtp: 96.53,
    rtpSource: 'officiel',
    rtpAutres: [95.45, 94.46],
    volatilite: 'Élevée',
    gainMax: 5000,
    annee: 2021,
    grille: '7 rouleaux × 7 rangées',
    gains: 'Grappes de symboles identiques qui se touchent, avec cascades',
    toursGratuits: '3 à 7 scatters : 10 à 25 tours gratuits ; 3 scatters ou plus pendant le bonus : 5 tours de plus',
    multiplicateurs: 'Wilds multiplicateurs : 2× en jeu de base, qui peuvent doubler jusqu’à 256× ; en tours gratuits, de 3× jusqu’à 729× ; additionnés dans une même grappe',
    achatBonus: null,
    theme: 'Fruits',
    analyse: [
      "Fruit Party 2 (2021) garde la grille de 7 × 7 et les grappes de son aîné, mais déplace les multiplicateurs vers des wilds. Selon la fiche officielle, une grappe gagnante peut laisser derrière elle un wild avec un multiplicateur de 2×, qui peut réapparaître et doubler dans les cascades suivantes, jusqu'à 256×.",
      "En tours gratuits (10 à 25 selon le nombre de scatters), les wilds multiplicateurs démarrent à 3× et peuvent grimper jusqu'à 729×. Plusieurs wilds dans une même grappe additionnent leurs multiplicateurs. Plus volatil que Fruit Party selon SlotCatalog, il demande un budget plus solide."
    ],
    pourQui: 'Les joueurs qui aiment les grappes et acceptent des séries sans gain en échange de multiplicateurs plus forts.',
    attention: 'SlotCatalog indique 95,45 % comme RTP principal, la fiche officielle 96,53 % : vérifiez la version de votre casino dans l’aide du jeu.',
    faq: [
      { q: 'Quel est le RTP de Fruit Party 2 ?', r: '96,53 % selon la fiche officielle de Pragmatic Play. SlotCatalog recense aussi 95,45 % et 94,46 %.' },
      {
        q: 'Quelle différence entre Fruit Party et Fruit Party 2 ?',
        r: 'Fruit Party place les multiplicateurs sur les symboles gagnants, qui se multiplient entre eux. Fruit Party 2 les place sur des wilds, qui peuvent atteindre 729× en tours gratuits. Fruit Party 2 est aussi plus volatil selon SlotCatalog.'
      }
    ],
    similaires: ['fruit-party', 'sugar-rush', 'sugar-rush-super-scatter'],
    sources: [pp('Fruit Party 2', 'fruit-party-2'), sc('Fruit Party 2', 'Fruit-Party-2')],
    verifieLe: V
  },
  {
    slug: 'big-bass-bonanza-1000',
    nom: 'Big Bass Bonanza 1000',
    ...PP,
    volume: 70,
    difficulte: 47,
    rtp: 96.51,
    rtpSource: 'officiel',
    rtpAutres: [95.51, 94.51],
    volatilite: 'Élevée',
    gainMax: 20000,
    annee: 2025,
    grille: '5 rouleaux × 3 rangées, 10 lignes',
    gains: 'Lignes de paiement, de gauche à droite',
    toursGratuits: '3, 4 ou 5 scatters : 10, 15 ou 20 tours gratuits ; avec 2 scatters, un 3e peut être « pêché » au hasard',
    multiplicateurs: 'Tous les 4 wilds collectés : 10 tours de plus, avec multiplicateur 2×, puis 3×, puis 10× ; poissons jusqu’à 1 000× la mise',
    achatBonus: null,
    theme: 'Pêche',
    analyse: [
      "Big Bass Bonanza 1000 (2025) est la version « gonflée » du classique de la pêche. Le principe ne change pas : en tours gratuits, chaque pêcheur (wild) ramasse la valeur de tous les poissons visibles. Mais selon la fiche officielle, les poissons peuvent maintenant valoir jusqu'à 1 000× la mise, et le gain maximal grimpe à 20 000×, contre 2 100× pour l'original selon SlotCatalog.",
      "La relance fonctionne comme dans le reste de la série : tous les 4 pêcheurs collectés, 10 tours de plus et un multiplicateur qui passe à 2×, 3×, puis 10×. Petite nouveauté : quand seulement 2 scatters tombent, un troisième peut être « pêché » pour lancer le bonus. Le jeu de base reste sobre ; tout se joue dans le bonus, d'où une forte volatilité."
    ],
    pourQui: 'Les habitués de Big Bass qui veulent la même mécanique avec un plafond de gain beaucoup plus haut.',
    attention: 'Ne le confondez pas avec Big Bass Bonanza, l’original, au gain maximal bien plus bas. Trois réglages de RTP sont recensés.',
    faq: [
      { q: 'Quel est le RTP de Big Bass Bonanza 1000 ?', r: '96,51 % selon la fiche officielle de Pragmatic Play. SlotCatalog recense aussi 95,51 % et 94,51 %.' },
      {
        q: 'Quelle différence entre Big Bass Bonanza et la version 1000 ?',
        r: 'La mécanique est la même, mais les poissons peuvent valoir jusqu’à 1 000× la mise et le gain maximal atteint 20 000× selon la fiche officielle, contre 2 100× pour l’original selon SlotCatalog.'
      }
    ],
    similaires: ['big-bass-bonanza', 'big-bass-splash-1000', 'bigger-bass-bonanza'],
    sources: [pp('Big Bass Bonanza 1000', 'big-bass-bonanza-1000'), sc('Big Bass Bonanza 1000', 'big-bass-bonanza-1000')],
    verifieLe: V
  },
  {
    slug: 'big-bass-splash-1000',
    nom: 'Big Bass Splash 1000',
    ...PP,
    volume: 70,
    difficulte: 22,
    rtp: 96.52,
    rtpSource: 'officiel',
    rtpAutres: [95.51, 94.53],
    volatilite: 'Élevée',
    gainMax: 25000,
    annee: 2025,
    grille: '5 rouleaux × 3 rangées, 10 lignes',
    gains: 'Lignes de paiement, de gauche à droite',
    toursGratuits: '3 à 5 scatters : 10 à 20 tours gratuits, précédés d’une animation de pêche qui peut débloquer jusqu’à 5 améliorations',
    multiplicateurs: 'Tous les 4 wilds collectés : 10 tours de plus, avec multiplicateur 2×, puis 3×, puis 10× ; poissons jusqu’à 1 000× la mise',
    achatBonus: null,
    theme: 'Pêche',
    analyse: [
      "Big Bass Splash 1000, sorti fin 2025, est la suite « 1000 » de Big Bass Splash. Avant les tours gratuits, une animation de pêche peut débloquer jusqu'à cinq améliorations : plus de poissons à valeur, des symboles spéciaux, des tours en plus, ou un départ directement au niveau 2. Selon la fiche officielle, les poissons peuvent valoir jusqu'à 1 000× la mise.",
      "Ensuite, la mécanique est celle de la série : les pêcheurs ramassent les poissons, et tous les 4 pêcheurs le bonus repart pour 10 tours avec un multiplicateur de 2×, 3× puis 10×. SlotCatalog indique un gain maximal de 25 000× ; c'est un jeu à forte volatilité, où un bonus ordinaire peut rapporter peu."
    ],
    pourQui: 'Les joueurs qui aiment la série Big Bass et veulent le plafond le plus haut de la famille.',
    attention: 'Le gain maximal (25 000×) vient de SlotCatalog : la fiche officielle ne le précise pas. Trois réglages de RTP sont recensés.',
    faq: [
      { q: 'Quel est le RTP de Big Bass Splash 1000 ?', r: '96,52 % selon la fiche officielle de Pragmatic Play. SlotCatalog recense aussi 95,51 % et 94,53 %.' },
      {
        q: 'Que se passe-t-il avant les tours gratuits de Big Bass Splash 1000 ?',
        r: 'Une animation de pêche peut débloquer jusqu’à cinq améliorations : plus de poissons à valeur, des symboles spéciaux, des tours gratuits en plus, ou un départ au niveau 2.'
      }
    ],
    similaires: ['big-bass-splash', 'big-bass-bonanza-1000', 'big-bass-christmas-bash'],
    sources: [pp('Big Bass Splash 1000', 'big-bass-splash-1000'), sc('Big Bass Splash 1000', 'big-bass-splash-1000')],
    verifieLe: V
  },
  {
    slug: 'release-the-kraken',
    nom: 'Release the Kraken',
    ...PP,
    volume: 40,
    difficulte: 5,
    rtp: 96.5,
    rtpSource: 'officiel',
    rtpAutres: [95.5],
    volatilite: 'Moyenne à élevée',
    gainMax: 10000,
    annee: 2020,
    grille: '5 rouleaux × 4 rangées, 20 lignes',
    gains: 'Lignes de paiement, de gauche à droite',
    toursGratuits: 'Tours gratuits avec multiplicateur progressif et wilds baladeurs',
    multiplicateurs: 'Multiplicateur progressif pendant les tours gratuits',
    achatBonus: null,
    theme: 'Fonds marins',
    analyse: [
      "Release the Kraken (2020) est un jeu à lignes plus classique : 5 rouleaux, 4 rangées et 20 lignes. Selon la fiche officielle, des fonctions aléatoires peuvent se déclencher à n'importe quel tour, ce qui peut pimenter un tour ordinaire.",
      "Les tours gratuits misent sur un multiplicateur progressif et des wilds baladeurs, qui se déplacent sur la grille. SlotCatalog le classe en volatilité moyenne à élevée, avec un gain maximal de 10 000×. Attention au nom : il existe aussi une version Megaways, aux règles différentes."
    ],
    pourQui: 'Les joueurs qui préfèrent un jeu à lignes classique, avec des surprises en jeu de base.',
    attention: 'Une version Megaways existe, avec d’autres règles et d’autres chiffres : vérifiez le titre exact. SlotCatalog recense une version à 95,50 %.',
    faq: [
      { q: 'Quel est le RTP de Release the Kraken ?', r: '96,50 % selon la fiche officielle de Pragmatic Play. SlotCatalog recense aussi une version à 95,50 %.' },
      { q: 'Release the Kraken a-t-il des tours gratuits ?', r: 'Oui. Selon Pragmatic Play, le bonus combine un multiplicateur progressif et des wilds baladeurs qui se déplacent sur la grille.' }
    ],
    similaires: ['wolf-gold', 'wild-west-gold', 'great-rhino-megaways'],
    sources: [pp('Release the Kraken', 'release-the-kraken-slot'), sc('Release the Kraken', 'Release-the-Kraken-Pragmatic-Play')],
    verifieLe: V
  },
  {
    slug: 'sweet-bonanza-xmas',
    nom: 'Sweet Bonanza Xmas',
    ...PP,
    volume: 70,
    difficulte: 15,
    rtp: 96.48,
    rtpSource: 'officiel',
    rtpAutres: [95.45],
    volatilite: 'Moyenne à élevée',
    gainMax: 21175,
    annee: 2019,
    grille: '6 rouleaux × 5 rangées',
    gains: 'Paiement partout : 8 symboles identiques ou plus, avec cascades',
    toursGratuits: '4 scatters ou plus : 10 tours gratuits',
    multiplicateurs: 'Multiplicateurs jusqu’à 100× en tours gratuits, additionnés à la fin de la série de cascades',
    achatBonus: null,
    theme: 'Noël et bonbons',
    analyse: [
      "Sweet Bonanza Xmas est la version de Noël de Sweet Bonanza, sortie en novembre 2019. Les règles sont celles de l'original : 8 symboles identiques ou plus n'importe où sur la grille, des cascades, et 10 tours gratuits avec 4 scatters ou plus. Le décor change : des bonbons givrés et un paysage enneigé.",
      "En tours gratuits, des multiplicateurs jusqu'à 100× peuvent tomber ; ils restent sur la grille jusqu'à la fin de la série de cascades, puis leur total s'applique au gain. Selon SlotCatalog, son gain maximal (21 175×) est très proche de celui de l'original. C'est la version de saison pour les amateurs de Sweet Bonanza."
    ],
    pourQui: 'Les amateurs de Sweet Bonanza qui veulent la même chose, en version de Noël.',
    attention: 'SlotCatalog recense plusieurs réglages, dont 95,45 % : vérifiez le RTP dans l’aide du jeu.',
    faq: [
      { q: 'Quel est le RTP de Sweet Bonanza Xmas ?', r: '96,48 % selon la fiche officielle de Pragmatic Play. SlotCatalog recense aussi une version à 95,45 %.' },
      { q: 'Quelle différence entre Sweet Bonanza et Sweet Bonanza Xmas ?', r: 'Les règles sont les mêmes ; seul le thème change. Le RTP officiel de la version de Noël est de 96,48 %.' }
    ],
    similaires: ['sweet-bonanza', 'sweet-bonanza-1000', 'christmas-big-bass-bonanza'],
    sources: [pp('Sweet Bonanza Xmas', 'sweet-bonanza-xmas-slot'), sc('Sweet Bonanza Xmas', 'Sweet-Bonanza-Xmas')],
    verifieLe: V
  },
  {
    slug: 'christmas-big-bass-bonanza',
    nom: 'Christmas Big Bass Bonanza',
    ...PP,
    volume: 30,
    difficulte: 5,
    rtp: 96.71,
    rtpSource: 'officiel',
    rtpAutres: [95.67],
    volatilite: 'Moyenne à élevée',
    gainMax: 2100,
    annee: 2021,
    grille: '5 rouleaux × 3 rangées, 10 lignes',
    gains: 'Lignes de paiement, de gauche à droite',
    toursGratuits: '3 scatters ou plus : tours gratuits',
    multiplicateurs: 'Tous les 4 wilds collectés : 10 tours de plus, avec multiplicateur 2×, puis 3×, puis 10×',
    achatBonus: null,
    theme: 'Noël et pêche',
    analyse: [
      "Christmas Big Bass Bonanza (novembre 2021) habille Big Bass Bonanza aux couleurs de Noël. On retrouve la grille de 5 × 3 et ses 10 lignes, et un bonus déclenché par 3 scatters ou plus.",
      "En tours gratuits, les poissons prennent des valeurs au hasard et chaque pêcheur (wild) ramasse tout ce qui est visible. Comme dans l'original, tous les 4 pêcheurs collectés relancent 10 tours avec un multiplicateur de 2×, 3× puis 10×. Le gain maximal recensé par SlotCatalog (2 100×) est le même que celui de Big Bass Bonanza."
    ],
    pourQui: 'Les joueurs qui aiment Big Bass Bonanza et veulent sa version de Noël, sans règles nouvelles à apprendre.',
    attention: 'Ne le confondez pas avec Big Bass Christmas Bash, une autre version de Noël aux règles différentes.',
    faq: [
      { q: 'Quel est le RTP de Christmas Big Bass Bonanza ?', r: '96,71 % selon la fiche officielle de Pragmatic Play. SlotCatalog recense aussi une version à 95,67 %.' },
      { q: 'Quelle différence avec Big Bass Bonanza ?', r: 'La mécanique est la même ; seul le thème change. Le RTP officiel est aussi de 96,71 %.' }
    ],
    similaires: ['big-bass-bonanza', 'big-bass-christmas-bash', 'sweet-bonanza-xmas'],
    sources: [pp('Christmas Big Bass Bonanza', 'christmas-big-bass-bonanza'), sc('Christmas Big Bass Bonanza', 'Christmas-Big-Bass-Bonanza')],
    verifieLe: V
  },
  {
    slug: 'big-bass-christmas-bash',
    nom: 'Big Bass Christmas Bash',
    ...PP,
    studio: 'Reel Kingdom',
    volume: 20,
    difficulte: 7,
    rtp: 96.71,
    rtpSource: 'officiel',
    rtpAutres: [95.67, 94.6],
    volatilite: 'Élevée',
    gainMax: 5000,
    annee: 2023,
    grille: '5 rouleaux × 3 rangées, 10 lignes',
    gains: 'Lignes de paiement, de gauche à droite',
    toursGratuits: '3 scatters ou plus : au moins 10 tours gratuits ; avec 2 scatters, une relance ou un hameçon peut apporter le 3e',
    multiplicateurs: null,
    achatBonus: null,
    theme: 'Noël et pêche sur glace',
    analyse: [
      "Big Bass Christmas Bash (novembre 2023) est l'une des versions de Noël de la série Big Bass, sur une grille classique de 5 × 3 à 10 lignes. Le bonus se déclenche avec 3 scatters ; s'il n'en tombe que 2, le jeu peut les bloquer pour une relance, ou un hameçon peut tirer un rouleau pour révéler le 3e, selon la fiche officielle.",
      "Avant les tours gratuits (au moins 10), cinq améliorations peuvent s'activer : plus de poissons, plus de pêcheurs, plus de dynamite, 2 tours de plus, ou un départ au niveau 2. Selon SlotCatalog, le jeu est plus volatil que Christmas Big Bass Bonanza, avec un gain maximal de 5 000×."
    ],
    pourQui: 'Les joueurs qui veulent une version de Noël de Big Bass, avec un bonus plus riche en options.',
    attention: 'Ne le confondez pas avec Christmas Big Bass Bonanza (2021), aux règles plus simples. Trois réglages de RTP sont recensés.',
    faq: [
      { q: 'Quel est le RTP de Big Bass Christmas Bash ?', r: '96,71 % selon la fiche officielle de Pragmatic Play. SlotCatalog recense aussi 95,67 % et 94,60 %.' },
      {
        q: 'Comment déclencher le bonus de Big Bass Christmas Bash ?',
        r: 'Avec 3 scatters. S’il n’en tombe que 2, le jeu peut les bloquer pour une relance, ou un hameçon peut tirer un rouleau vers le bas pour révéler le 3e.'
      }
    ],
    similaires: ['christmas-big-bass-bonanza', 'big-bass-splash', 'big-bass-bonanza'],
    sources: [pp('Big Bass Christmas Bash', 'big-bass-christmas-bash'), sc('Big Bass Christmas Bash', 'Big-Bass-Christmas-Bash')],
    verifieLe: V
  },
  {
    slug: 'the-dog-house-megaways',
    nom: 'The Dog House Megaways',
    ...PP,
    volume: 70,
    difficulte: 10,
    rtp: 96.55,
    rtpSource: 'officiel',
    rtpAutres: [95.53, 94.55],
    volatilite: 'Élevée',
    gainMax: 12305,
    annee: 2020,
    grille: '6 rouleaux Megaways, jusqu’à 117 649 façons de gagner',
    gains: 'Megaways : symboles identiques sur des rouleaux voisins, de gauche à droite',
    toursGratuits: '3 à 6 scatters : au choix, Sticky Wilds (7 à 20 tours) ou Raining Wilds (15 à 30 tours)',
    multiplicateurs: 'Wilds 2× ou 3×',
    achatBonus: null,
    theme: 'Chiens',
    analyse: [
      "The Dog House Megaways (2020) transpose The Dog House au format Megaways : le nombre de symboles par rouleau change à chaque tour, jusqu'à 117 649 façons de gagner selon SlotCatalog. Comme dans l'original, chaque wild porte un multiplicateur de 2× ou 3×.",
      "Son point fort est le choix du bonus. Avec 3 à 6 scatters, vous choisissez entre Sticky Wilds (7 à 20 tours, avec des wilds collants qui changent de taille avec les rouleaux) et Raining Wilds (15 à 30 tours, jusqu'à 6 wilds qui tombent au hasard à chaque tour), selon la fiche officielle. Deux façons de jouer le même bonus : des wilds qui restent, ou des wilds qui tombent à chaque tour."
    ],
    pourQui: 'Les joueurs qui aiment choisir leur bonus et acceptent une forte volatilité.',
    attention: 'Trois réglages de RTP sont recensés, de 96,55 % à 94,55 % : vérifiez celui de votre casino.',
    faq: [
      { q: 'Quel est le RTP de The Dog House Megaways ?', r: '96,55 % selon la fiche officielle de Pragmatic Play. SlotCatalog recense aussi 95,53 % et 94,55 %.' },
      {
        q: 'Quel bonus choisir dans The Dog House Megaways ?',
        r: 'Aucun n’est garanti plus payant. Sticky Wilds donne moins de tours avec des wilds qui restent en place ; Raining Wilds donne plus de tours avec des wilds qui tombent au hasard à chaque tour.'
      }
    ],
    similaires: ['the-dog-house', 'great-rhino-megaways', 'madame-destiny-megaways'],
    sources: [pp('The Dog House Megaways', 'the-dog-house-megaways-slot'), sc('The Dog House Megaways', 'The-Dog-House-Megaways')],
    verifieLe: V
  },
  {
    slug: 'wild-west-gold',
    nom: 'Wild West Gold',
    ...PP,
    volume: 50,
    difficulte: 14,
    rtp: 96.51,
    rtpSource: 'officiel',
    rtpAutres: [95.56],
    volatilite: 'Élevée',
    gainMax: 10000,
    annee: 2020,
    grille: '5 rouleaux × 4 rangées, 40 lignes',
    gains: 'Lignes de paiement, de gauche à droite',
    toursGratuits: '3 scatters : 8 tours gratuits ; 2 à 5 scatters pendant le bonus : 4 à 20 tours de plus',
    multiplicateurs: 'Wilds 2×, 3× ou 5×, additionnés sur un même gain ; collants en tours gratuits',
    achatBonus: null,
    theme: 'Far West',
    analyse: [
      "Wild West Gold (2020) est un jeu à lignes sur 5 rouleaux et 4 rangées. En jeu de base, les wilds portent un multiplicateur de 2×, 3× ou 5×, et plusieurs wilds sur un même gain additionnent leurs valeurs, selon la fiche officielle.",
      "Le bonus démarre avec 8 tours gratuits et devient intéressant grâce aux wilds collants : ils restent en place avec leur multiplicateur jusqu'à la fin. Des scatters supplémentaires ajoutent 4 à 20 tours. SlotCatalog le classe en forte volatilité, avec un gain maximal de 10 000×."
    ],
    pourQui: 'Les joueurs qui aiment les jeux à lignes et les bonus à wilds collants.',
    attention: 'SlotCatalog indique 95,56 % comme RTP principal, la fiche officielle 96,51 % : vérifiez dans l’aide du jeu.',
    faq: [
      { q: 'Quel est le RTP de Wild West Gold ?', r: '96,51 % selon la fiche officielle de Pragmatic Play. SlotCatalog recense aussi une version à 95,56 %.' },
      { q: 'Comment fonctionnent les wilds de Wild West Gold ?', r: 'Ils portent un multiplicateur de 2×, 3× ou 5×, additionné s’il y en a plusieurs sur un gain. En tours gratuits, ils restent collés jusqu’à la fin du bonus.' }
    ],
    similaires: ['wolf-gold', 'release-the-kraken', 'buffalo-king-megaways'],
    sources: [pp('Wild West Gold', 'wild-west-gold-slot'), sc('Wild West Gold', 'Wild-West-Gold')],
    verifieLe: V
  },
  {
    slug: 'power-of-thor-megaways',
    nom: 'Power of Thor Megaways',
    ...PP,
    volume: 50,
    difficulte: 6,
    rtp: 96.55,
    rtpSource: 'officiel',
    rtpAutres: [95.81, 94.77],
    volatilite: 'Élevée',
    gainMax: 5000,
    annee: 2021,
    grille: '6 rouleaux Megaways, jusqu’à 117 649 façons de gagner',
    gains: 'Megaways, avec cascades',
    toursGratuits: 'Former le mot THOR avec les scatters',
    multiplicateurs: 'En tours gratuits, multiplicateur qui augmente à chaque cascade',
    achatBonus: null,
    theme: 'Mythologie nordique',
    analyse: [
      "Power of Thor Megaways (2021) utilise le format Megaways : jusqu'à 117 649 façons de gagner selon la fiche officielle. Son symbole marquant est le marteau de Thor : il tombe à l'horizontale sur la rangée du haut et transforme en wilds les symboles en dessous.",
      "Les tours gratuits se déclenchent en formant le mot THOR avec les scatters. Pendant le bonus, un multiplicateur augmente à chaque cascade : plus les chutes de symboles s'enchaînent, plus le gain grimpe. SlotCatalog le classe en forte volatilité, avec un gain maximal de 5 000×."
    ],
    pourQui: 'Les joueurs qui aiment les Megaways et les multiplicateurs qui grimpent avec les cascades.',
    attention: 'SlotCatalog indique 95,81 % comme RTP principal, la fiche officielle 96,55 % : vérifiez dans l’aide du jeu.',
    faq: [
      { q: 'Quel est le RTP de Power of Thor Megaways ?', r: '96,55 % selon la fiche officielle de Pragmatic Play. SlotCatalog recense aussi 95,81 % et 94,77 %.' },
      { q: 'Comment déclencher les tours gratuits de Power of Thor Megaways ?', r: 'En formant le mot THOR avec les scatters, selon la fiche officielle.' }
    ],
    similaires: ['zeus-vs-hades', 'great-rhino-megaways', 'gates-of-olympus'],
    sources: [pp('Power of Thor Megaways', 'power-of-thor-megaways'), sc('Power of Thor Megaways', 'Power-of-Thor-Megaways')],
    verifieLe: V
  },
  {
    slug: 'bigger-bass-bonanza',
    nom: 'Bigger Bass Bonanza',
    ...PP,
    volume: 70,
    difficulte: 37,
    rtp: 96.71,
    rtpSource: 'officiel',
    rtpAutres: [95.67, 94.62],
    volatilite: 'Élevée',
    gainMax: 4000,
    annee: 2021,
    grille: '5 rouleaux × 4 rangées, 12 lignes',
    gains: 'Lignes de paiement, de gauche à droite',
    toursGratuits: '3, 4 ou 5 scatters : 10, 15 ou 20 tours gratuits',
    multiplicateurs: 'Tous les 4 wilds collectés : 10 tours de plus, avec multiplicateur 2×, puis 3×, puis 10× ; poissons jusqu’à 4 000× la mise',
    achatBonus: null,
    theme: 'Pêche',
    analyse: [
      "Bigger Bass Bonanza (2021) ajoute une rangée à Big Bass Bonanza : 5 rouleaux et 4 rangées. Le bonus reste celui de la série : 3, 4 ou 5 scatters donnent 10, 15 ou 20 tours gratuits, pendant lesquels chaque pêcheur ramasse la valeur des poissons visibles.",
      "Selon la fiche officielle, les poissons peuvent valoir jusqu'à 4 000× la mise en tours gratuits, contre 2 000× dans l'original. Tous les 4 pêcheurs, le bonus repart pour 10 tours avec un multiplicateur de 2×, 3× puis 10×. SlotCatalog indique un gain maximal de 4 000×."
    ],
    pourQui: 'Les joueurs qui aiment Big Bass Bonanza et veulent un peu plus de lignes et de poissons de valeur.',
    attention: 'Trois réglages de RTP sont recensés (96,71 %, 95,67 % et 94,62 %) : vérifiez celui de votre casino.',
    faq: [
      { q: 'Quel est le RTP de Bigger Bass Bonanza ?', r: '96,71 % selon la fiche officielle de Pragmatic Play. SlotCatalog recense aussi 95,67 % et 94,62 %.' },
      { q: 'Quelle différence entre Big Bass Bonanza et Bigger Bass Bonanza ?', r: 'Bigger Bass Bonanza a une rangée de plus (5 × 4, 12 lignes) et des poissons jusqu’à 4 000× la mise en tours gratuits, selon la fiche officielle.' }
    ],
    similaires: ['big-bass-bonanza', 'big-bass-bonanza-1000', 'big-bass-splash'],
    sources: [pp('Bigger Bass Bonanza', 'bigger-bass-bonanza'), sc('Bigger Bass Bonanza', 'Bigger-Bass-Bonanza')],
    verifieLe: V
  },
  {
    slug: 'le-bandit',
    nom: 'Le Bandit',
    ...HS,
    volume: 590,
    difficulte: 48,
    rtp: 96.34,
    rtpSource: 'base',
    rtpAutres: [],
    volatilite: 'Moyenne',
    gainMax: 10000,
    annee: 2023,
    grille: '6 rouleaux × 5 rangées',
    gains: 'Grappes de symboles identiques, avec Super Cascades',
    toursGratuits: '3, 4 ou 5 symboles FS : trois bonus différents, dont 12 tours gratuits avec 4 ou 5 FS',
    multiplicateurs: 'Pièces de 0,2× à 500× la mise, trèfles de 2× à 10× sur les cases voisines, pots d’or qui ramassent tout',
    achatBonus: 'Oui, sauf pour le bonus à 5 symboles FS, selon la fiche officielle',
    theme: 'Un raton laveur pickpocket à Paris',
    analyse: [
      "Le Bandit (2023) a lancé la série « Le » de Hacksaw Gaming, avec Smokey, un raton laveur pickpocket dans les rues de Paris. Sur une grille de 6 × 5, les gains se font par grappes, et les Super Cascades font disparaître non seulement les symboles gagnants, mais aussi tous les symboles du même type visibles à l'écran.",
      "Le cœur du jeu, ce sont les cases dorées : chaque case qui participe à un gain devient dorée. Si un arc-en-ciel apparaît, ces cases révèlent des pièces (de 0,2× à 500× la mise), des trèfles qui multiplient les cases voisines, ou des pots d'or qui ramassent tout. Les trois bonus gardent les cases dorées plus longtemps ; le meilleur, à 5 symboles FS, garantit un arc-en-ciel à chaque tour et ne peut pas être acheté, selon la fiche officielle."
    ],
    pourQui: 'Les joueurs qui aiment les mécaniques à collecter et préfèrent une volatilité moyenne à une volatilité extrême.',
    attention: 'La démo officielle s’ouvre sur le site de Hacksaw Gaming. Le RTP peut varier selon le casino : vérifiez l’aide du jeu.',
    faq: [
      { q: 'Quel est le RTP de Le Bandit ?', r: '96,34 % selon SlotCatalog. La fiche officielle de Hacksaw Gaming ne l’affiche pas : vérifiez l’aide du jeu dans votre casino.' },
      { q: 'Quel est le gain maximal de Le Bandit ?', r: '10 000 fois la mise, selon la fiche officielle de Hacksaw Gaming.' }
    ],
    similaires: ['le-fisherman', 'le-cowboy', 'le-zeus'],
    sources: [hs('Le Bandit', 'le-bandit'), sc('Le Bandit', 'Le-Bandit')],
    verifieLe: V
  },
  {
    slug: 'le-fisherman',
    nom: 'Le Fisherman',
    ...HS,
    volume: 210,
    difficulte: 23,
    rtp: 96.33,
    rtpSource: 'base',
    rtpAutres: [94.33, 92.34],
    volatilite: 'Moyenne',
    gainMax: 15000,
    annee: 2026,
    grille: '6 rouleaux × 5 rangées',
    gains: 'Grappes de symboles identiques, avec cascades',
    toursGratuits: '3, 4 ou 5 symboles FS : trois bonus de 10 tours gratuits',
    multiplicateurs: 'Trèfles verts (cases voisines) et dorés (toute la grille) qui multiplient les pièces ; seaux qui ramassent',
    achatBonus: null,
    theme: 'La pêche, avec Smokey le raton laveur',
    analyse: [
      "Le Fisherman, sorti en janvier 2026, emmène Smokey à la pêche. On retrouve les cases dorées de Le Bandit : les positions gagnantes deviennent dorées, et un arc-en-ciel les active pour révéler des pièces, des trèfles ou des seaux. Les seaux ramassent les pièces des cases voisines, et les seaux « globaux » celles de toute la grille, selon la fiche officielle.",
      "Nouveauté, l'arc-en-ciel épique révèle des symboles spéciaux sur toutes les cases à la fois. Les trois bonus (10 tours chacun) ajoutent une barre « Big Catch » qui renforce les arcs-en-ciel ; avec 5 symboles FS, le bonus caché démarre avec la barre au maximum. SlotCatalog indique un gain maximal de 15 000×."
    ],
    pourQui: 'Les fans de Le Bandit qui veulent la même mécanique avec plus de façons de collecter.',
    attention: 'SlotCatalog recense plusieurs réglages de RTP, de 96,33 % à 92,34 % : l’écart est important, vérifiez l’aide du jeu.',
    faq: [
      { q: 'Quel est le RTP de Le Fisherman ?', r: '96,33 % au mieux selon SlotCatalog, qui recense aussi des versions à 94,33 % et 92,34 %.' },
      {
        q: 'Quels sont les bonus de Le Fisherman ?',
        r: 'Trois bonus de 10 tours gratuits, selon le nombre de symboles FS (3, 4 ou 5). Le plus fort, à 5 symboles, démarre avec la barre Big Catch au maximum.'
      }
    ],
    similaires: ['le-bandit', 'le-cowboy', 'big-bass-bonanza'],
    sources: [hs('Le Fisherman', 'le-fisherman'), sc('Le Fisherman', 'le-fisherman')],
    verifieLe: V
  },
  {
    slug: 'le-zeus',
    nom: 'Le Zeus',
    ...HS,
    volume: 110,
    difficulte: 15,
    rtp: 96.26,
    rtpSource: 'base',
    rtpAutres: [94.18, 92.37],
    volatilite: 'Moyenne',
    gainMax: 20000,
    annee: 2025,
    grille: '6 rouleaux × 5 rangées, 19 lignes',
    gains: 'Lignes de paiement',
    toursGratuits: '3, 4 ou 5 symboles FS : trois bonus de 8 tours gratuits',
    multiplicateurs: 'Trèfles qui multiplient les pièces et les diamants ; pots d’or qui ramassent tout',
    achatBonus: null,
    theme: 'Mythologie grecque',
    analyse: [
      "Le Zeus (2025) applique la recette de la série « Le » à la mythologie grecque, avec un mécanisme différent : des symboles mystère tombent à la verticale sur les rouleaux 2 à 5 et se révèlent en symboles forts, en wilds ou en rouleaux mystère. Un gain avec ces symboles lance des relances où ils restent collés, tant que de nouveaux gains arrivent, selon la fiche officielle.",
      "Les rouleaux mystère révèlent des pièces et des diamants (gains directs), des trèfles qui les multiplient et des pots d'or qui ramassent tout. Les trois bonus durent 8 tours ; le meilleur, à 5 symboles FS, démarre avec 4 rouleaux sur 6 déjà en mystère. SlotCatalog indique un gain maximal de 20 000×."
    ],
    pourQui: 'Les joueurs qui aiment les relances et les symboles mystère.',
    attention: 'SlotCatalog recense des réglages de 96,26 % à 92,37 % : vérifiez l’aide du jeu avant de jouer.',
    faq: [
      { q: 'Quel est le RTP de Le Zeus ?', r: '96,26 % au mieux selon SlotCatalog, qui recense aussi des versions à 94,18 % et 92,37 %.' },
      {
        q: 'Comment fonctionnent les symboles mystère de Le Zeus ?',
        r: 'Ils tombent à la verticale sur les rouleaux 2 à 5 et se révèlent en symboles forts, en wilds ou en rouleaux mystère. Un gain avec eux déclenche des relances où ils restent en place.'
      }
    ],
    similaires: ['le-bandit', 'zeus-vs-hades', 'gates-of-olympus'],
    sources: [hs('Le Zeus', 'le-zeus'), sc('Le Zeus', 'le-zeus')],
    verifieLe: V
  },
  {
    slug: 'le-cowboy',
    nom: 'Le Cowboy',
    ...HS,
    volume: 140,
    difficulte: 15,
    rtp: 96.28,
    rtpSource: 'base',
    rtpAutres: [94.31, 92.3],
    volatilite: 'Moyenne',
    gainMax: 25000,
    annee: 2025,
    grille: '6 rouleaux × 5 rangées',
    gains: 'Grappes de symboles identiques, avec Super Cascades',
    toursGratuits: '3 symboles FS : 10 tours (High Noon Saloon) ; 4 : 10 tours avec un collecteur de balles (Trail of Trickery)',
    multiplicateurs: 'Pièces de 1× à 100×, diamants de 150× à 500×, trèfles de 2× à 20×',
    achatBonus: null,
    theme: 'Far West, avec Smokey le raton laveur',
    analyse: [
      "Le Cowboy (octobre 2025) envoie Smokey au Far West. Quand un wild fait partie d'une grappe gagnante, il se transforme en barillet de revolver (2 à 6 balles) qui tire sur la grille et révèle des symboles spéciaux : pièces, diamants, trèfles, sacs de butin ou recharges, selon la fiche officielle.",
      "Les valeurs sont détaillées : pièces de 1× à 100× la mise, diamants de 150× à 500×, trèfles qui multiplient de 2× à 20×. Avec 3 ou 4 symboles FS, on entre dans des bonus de 10 tours ; une option permet de « parier » le bonus pour tenter de l'améliorer, lisez ses règles avant de l'utiliser. SlotCatalog indique un gain maximal de 25 000×."
    ],
    pourQui: 'Les fans de la série « Le » qui veulent la version au plafond le plus haut.',
    attention: 'SlotCatalog recense des réglages de 96,28 % à 92,30 % : vérifiez l’aide du jeu. Le pari sur le bonus est une option, pas une obligation.',
    faq: [
      { q: 'Quel est le RTP de Le Cowboy ?', r: '96,28 % au mieux selon SlotCatalog, qui recense aussi des versions à 94,31 % et 92,30 %.' },
      {
        q: 'Comment fonctionne le barillet de Le Cowboy ?',
        r: 'Un wild qui fait partie d’une grappe gagnante devient un barillet de 2 à 6 balles. Il tire sur la grille et révèle des pièces, diamants, trèfles, sacs de butin ou recharges.'
      }
    ],
    similaires: ['le-bandit', 'wild-west-gold', 'wanted-dead-or-a-wild'],
    sources: [hs('Le Cowboy', 'le-cowboy'), sc('Le Cowboy', 'le-cowboy')],
    verifieLe: V
  },
  {
    slug: 'duck-hunters',
    nom: 'Duck Hunters',
    fournisseur: 'Nolimit City',
    volume: 210,
    difficulte: 19,
    rtp: 96.05,
    rtpSource: 'officiel',
    rtpAutres: [],
    volatilite: 'Élevée',
    gainMax: 30000,
    annee: 2025,
    grille: 'Grille de 5 rangées, paiement partout',
    gains: 'Paiement partout : 8 symboles identiques ou plus, avec cascades',
    toursGratuits: '3 symboles bonus : 7 tours (Duck Hunt Spins) ; 4 : 8 tours (Hawk Eye Spins), avec des améliorations au hasard',
    multiplicateurs: 'Multiplicateur de case : 2× qui double à chaque gain au même endroit, jusqu’à 8 192×',
    achatBonus: 'Oui, selon la fiche officielle',
    theme: 'Chasse au canard, sur le ton de l’humour',
    analyse: [
      "Duck Hunters (février 2025) est un jeu de Nolimit City qui paie partout : 8 symboles identiques ou plus suffisent. Chaque gain laisse un multiplicateur sur les cases libérées ; il commence à 2× et double à chaque nouveau gain au même endroit, jusqu'à 8 192× selon la fiche officielle. Une bombe peut aussi exploser sur une zone de 3 × 3, et des symboles xWays agrandissent les symboles pour multiplier les combinaisons.",
      "Le bonus Duck Hunt Spins (3 symboles) donne 7 tours avec multiplicateurs persistants et une amélioration au hasard ; Hawk Eye Spins (4 symboles) donne 8 tours et deux améliorations. Selon Nolimit City, les tours gratuits arrivent en moyenne une fois tous les 203 tours, et le gain maximal de 30 000× a une probabilité d'environ 1 sur 22 millions."
    ],
    pourQui: 'Les joueurs expérimentés qui acceptent de longues séries sans bonus.',
    attention: 'Les tours gratuits arrivent en moyenne une fois tous les 203 tours selon Nolimit City : prévoyez un budget en conséquence. La démo s’ouvre sur le site de Nolimit City.',
    faq: [
      { q: 'Quel est le RTP de Duck Hunters ?', r: '96,05 % selon la fiche officielle de Nolimit City.' },
      { q: 'Tous les combien arrivent les tours gratuits de Duck Hunters ?', r: 'En moyenne une fois tous les 203 tours, selon Nolimit City. C’est une moyenne : l’attente peut être bien plus longue.' }
    ],
    similaires: ['sugar-rush-1000', 'wanted-dead-or-a-wild', 'chaos-crew'],
    sources: [{ titre: 'Nolimit City, fiche officielle Duck Hunters', url: 'https://www.nolimitcity.com/games/duck-hunters' }, sc('Duck Hunters', 'duck-hunters')],
    verifieLe: V
  }
];

export default novembre;
