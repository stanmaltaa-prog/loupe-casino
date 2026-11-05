import type { Machine } from './types';

/**
 * Lot 3 (novembre 2026) : machines Pragmatic Play dont la démo officielle se lance sur le site.
 * Règles et RTP : fiche officielle pragmaticplay.com. Volatilité, gain maximal et année : SlotCatalog.
 */
const V = '2026-11-05';
const sc = (nom: string, chemin: string) => ({ titre: `SlotCatalog, fiche ${nom}`, url: `https://slotcatalog.com/en/slots/${chemin}` });
const pp = (nom: string, chemin: string) => ({ titre: `Pragmatic Play, fiche officielle ${nom}`, url: `https://www.pragmaticplay.com/en/games/${chemin}/` });
const PP = { fournisseur: 'Pragmatic Play', fournisseurId: 'pragmatic-play' };

const lot3: Machine[] = [
  {
    slug: 'wisdom-of-athena',
    nom: 'Wisdom of Athena',
    ...PP,
    volume: 70,
    difficulte: 20,
    rtp: 96.07,
    rtpSource: 'officiel',
    rtpAutres: [],
    volatilite: 'Élevée',
    gainMax: 5000,
    annee: 2023,
    grille: '6 rouleaux × 5 rangées, avec un rouleau supplémentaire à débloquer',
    gains: 'Paiement partout : 8 symboles identiques ou plus, avec cascades',
    toursGratuits: '10 tours gratuits, multiplicateurs conservés pendant tout le bonus',
    multiplicateurs: 'Multiplicateurs conservés et additionnés pendant les tours gratuits',
    achatBonus: null,
    theme: 'Mythologie grecque',
    analyse: [
      "Wisdom of Athena reprend la recette de Gates of Olympus : pas de lignes, il suffit de 8 symboles identiques n'importe où sur la grille, et les symboles gagnants disparaissent pour laisser tomber les suivants. Sa particularité : chaque cascade aide à débloquer un rouleau supplémentaire, qui agrandit la grille.",
      "Pendant les 10 tours gratuits, les multiplicateurs obtenus restent acquis jusqu'à la fin du bonus, et la progression vers le rouleau supplémentaire est conservée elle aussi. C'est ce cumul qui fait les gros gains, plafonnés à 5 000 fois la mise selon SlotCatalog, avec une volatilité élevée."
    ],
    pourQui: 'Les amateurs de Gates of Olympus qui veulent une variante où les multiplicateurs restent acquis pendant tout le bonus.',
    attention: 'Le RTP de 96,07 % est un peu plus bas que celui de beaucoup de jeux du même type : vérifiez la version installée par votre casino.',
    faq: [
      { q: 'Quel est le RTP de Wisdom of Athena ?', r: '96,07 % selon la fiche officielle de Pragmatic Play.' },
      { q: 'Comment gagner à Wisdom of Athena ?', r: 'Il faut au moins 8 symboles identiques n’importe où sur la grille. Les symboles gagnants disparaissent et de nouveaux tombent, ce qui peut enchaîner plusieurs gains.' },
      { q: 'Quel est le gain maximal de Wisdom of Athena ?', r: '5 000 fois la mise selon SlotCatalog.' }
    ],
    similaires: ['gates-of-olympus', 'starlight-princess', 'zeus-vs-hades'],
    sources: [pp('Wisdom of Athena', 'wisdom-of-athena'), sc('Wisdom of Athena', 'Wisdom-of-Athena')],
    verifieLe: V
  },
  {
    slug: 'fire-portals',
    nom: 'Fire Portals',
    ...PP,
    volume: 70,
    difficulte: 19,
    rtp: 96.06,
    rtpSource: 'officiel',
    rtpAutres: [],
    volatilite: 'Élevée',
    gainMax: 10000,
    annee: 2024,
    grille: '7 rouleaux × 7 rangées',
    gains: 'Grappes de 5 symboles identiques ou plus, reliés horizontalement ou verticalement, avec cascades',
    toursGratuits: '3 scatters ou plus : au moins 10 tours gratuits, avec wilds Fire Portal persistants',
    multiplicateurs: 'Wild Fire Portal : ×1 au départ, +1 à chaque gain ; deux wilds dans un même gain fusionnent et additionnent leurs multiplicateurs',
    achatBonus: null,
    theme: 'Magie et alchimie',
    analyse: [
      "Fire Portals se joue sur une grande grille de 7 × 7, où il faut relier au moins 5 symboles identiques (potions, anneaux, sablier) à l'horizontale ou à la verticale. Les gains disparaissent et de nouveaux symboles tombent, jusqu'à ce qu'aucune combinaison ne se forme plus.",
      "Toute la mécanique repose sur le wild Fire Portal : il apparaît après un gain qui n'en contient pas, démarre à ×1 et gagne +1 chaque fois qu'il participe à un gain, en se déplaçant. Deux wilds dans le même gain fusionnent et additionnent leurs multiplicateurs. En tours gratuits, ils restent à l'écran jusqu'à la fin, ce qui explique le gain maximal de 10 000 fois la mise indiqué par SlotCatalog."
    ],
    pourQui: 'Les joueurs qui aiment les grilles à grappes, comme Sugar Rush, et les multiplicateurs qui grossissent au fil des gains.',
    attention: 'Volatilité élevée : les wilds persistants font le gros du travail en tours gratuits, et le jeu de base peut rester calme longtemps.',
    faq: [
      { q: 'Quel est le RTP de Fire Portals ?', r: '96,06 % selon la fiche officielle de Pragmatic Play.' },
      { q: 'Comment fonctionne le wild Fire Portal ?', r: 'Il apparaît après un gain qui n’en contient pas, avec un multiplicateur de ×1, qui augmente de 1 à chaque gain auquel il participe. Deux wilds d’un même gain fusionnent.' },
      { q: 'Quel est le gain maximal de Fire Portals ?', r: '10 000 fois la mise selon SlotCatalog.' }
    ],
    similaires: ['sugar-rush', 'fruit-party', 'jammin-jars'],
    sources: [pp('Fire Portals', 'fire-portals'), sc('Fire Portals', 'Fire-Portals')],
    verifieLe: V
  },
  {
    slug: 'juicy-fruits',
    nom: 'Juicy Fruits',
    ...PP,
    volume: 50,
    difficulte: 17,
    rtp: 96.51,
    rtpSource: 'officiel',
    rtpAutres: [],
    volatilite: 'Élevée',
    gainMax: 5000,
    annee: 2021,
    grille: '5 rouleaux × 5 rangées, 50 lignes',
    gains: 'Lignes de paiement, de gauche à droite',
    toursGratuits: 'Tours gratuits progressifs : les scatters ajoutent des tours, et les wilds grandissent jusqu’à couvrir la grille',
    multiplicateurs: null,
    achatBonus: null,
    theme: 'Fruits classiques et 7 chanceux',
    analyse: [
      "Juicy Fruits habille les symboles de machine classique (fraises, citrons, 7 chanceux) d'une grille plus large que d'habitude : 5 × 5 et 50 lignes de paiement, selon Pragmatic Play.",
      "Tout se joue dans les tours gratuits progressifs : les scatters peuvent ajouter des tours, et les wilds grandissent jusqu'à occuper une grille de 5 × 5. C'est ce qui permet d'atteindre le gain maximal de 5 000 fois la mise indiqué par SlotCatalog."
    ],
    pourQui: 'Les amateurs de fruits classiques qui veulent un bonus plus moderne que celui des machines rétro.',
    attention: 'Avec 50 lignes, la mise totale est répartie sur beaucoup de lignes : les petits gains sont fréquents, mais ils couvrent rarement la mise.',
    faq: [
      { q: 'Quel est le RTP de Juicy Fruits ?', r: '96,51 % selon la fiche officielle de Pragmatic Play.' },
      { q: 'Comment fonctionnent les tours gratuits de Juicy Fruits ?', r: 'Ils sont progressifs : les scatters peuvent ajouter des tours, et les wilds grandissent jusqu’à couvrir une grille de 5 × 5.' }
    ],
    similaires: ['fruit-party', 'sizzling-hot', 'sweet-bonanza'],
    sources: [pp('Juicy Fruits', 'juicy-fruits'), sc('Juicy Fruits', 'Juicy-Fruits-Pragmatic-Play')],
    verifieLe: V
  },
  {
    slug: 'floating-dragon',
    nom: 'Floating Dragon Hold and Spin',
    ...PP,
    studio: 'Reel Kingdom',
    volume: 40,
    difficulte: 20,
    rtp: 96.71,
    rtpSource: 'officiel',
    rtpAutres: [],
    volatilite: 'Élevée',
    gainMax: 5000,
    annee: 2021,
    grille: '5 rouleaux × 3 rangées, 10 lignes',
    gains: 'Lignes de paiement, de gauche à droite',
    toursGratuits: '3, 4 ou 5 scatters : 10, 15 ou 20 tours gratuits ; tous les 4 wilds, 10 tours de plus',
    multiplicateurs: 'Relances des tours gratuits avec multiplicateur 2×, puis 3×, puis 10×',
    achatBonus: null,
    theme: 'Dragon et fête asiatique',
    analyse: [
      "Floating Dragon Hold and Spin combine deux bonus. Trois symboles d'argent sur le rouleau central, d'une valeur de 1× à 20× la mise selon la description officielle, lancent le Hold & Spin avec trois relances : chaque nouveau symbole d'argent remet le compteur à trois. Des diamants valant de 100× à 4 993× la mise peuvent tomber pendant cette phase.",
      "Les tours gratuits reprennent la mécanique de Big Bass Bonanza, du même studio, Reel Kingdom : les wilds ramassent la valeur des poissons visibles (jusqu'à 500× la mise), et tous les 4 wilds, vous gagnez 10 tours de plus avec un multiplicateur de 2×, puis 3×, puis 10×. Pragmatic Play annonce un gain maximal de 5 000 fois la mise."
    ],
    pourQui: 'Les fans de Big Bass Bonanza qui veulent un deuxième bonus, de type Hold & Spin.',
    attention: 'Deux bonus ne veulent pas dire deux fois plus de gains : la volatilité reste élevée, et le jeu de base paie peu.',
    faq: [
      { q: 'Quel est le RTP de Floating Dragon ?', r: '96,71 % selon la fiche officielle de Pragmatic Play.' },
      { q: 'Comment déclencher le Hold & Spin de Floating Dragon ?', r: 'Avec trois symboles d’argent sur le rouleau central, selon Pragmatic Play. Vous obtenez trois relances, remises à trois à chaque nouveau symbole d’argent.' },
      { q: 'Quel est le gain maximal de Floating Dragon ?', r: '5 000 fois la mise selon Pragmatic Play.' }
    ],
    similaires: ['big-bass-bonanza', 'big-bass-hold-and-spinner', 'wolf-gold'],
    sources: [pp('Floating Dragon Hold and Spin', 'floating-dragon-hold-and-spin'), sc('Floating Dragon', 'Floating-Dragon')],
    verifieLe: V
  },
  {
    slug: 'big-bass-hold-and-spinner',
    nom: 'Big Bass Hold & Spinner',
    ...PP,
    studio: 'Reel Kingdom',
    volume: 40,
    difficulte: 15,
    rtp: 96.07,
    rtpSource: 'officiel',
    rtpAutres: [],
    volatilite: 'Élevée',
    gainMax: 10000,
    annee: 2023,
    grille: '5 rouleaux × 3 rangées, 10 lignes',
    gains: 'Lignes de paiement, de gauche à droite',
    toursGratuits: 'Le pêcheur ramasse les prix en argent ; 4 pêcheurs relancent le bonus avec un multiplicateur plus fort',
    multiplicateurs: 'Multiplicateur croissant à chaque relance des tours gratuits',
    achatBonus: null,
    theme: 'Pêche',
    analyse: [
      "Big Bass Hold & Spinner ajoute à la série Big Bass un second bonus. Les tours gratuits restent ceux que l'on connaît : le pêcheur ramasse les prix en argent, et il en faut quatre pour relancer le bonus avec un multiplicateur plus élevé.",
      "La nouveauté vient du bonus des pièces : trois pièces dans le jeu de base deviennent collantes et restent en place pendant le bonus, avec quatre vies, remises à quatre chaque fois qu'une pièce tombe. Des diamants peuvent aussi apparaître. SlotCatalog indique un gain maximal de 10 000 fois la mise."
    ],
    pourQui: 'Les fidèles de la série Big Bass qui veulent un bonus de type Hold & Spin en plus des tours gratuits.',
    attention: 'Son RTP officiel (96,07 %) est plus bas que celui du Big Bass Bonanza d’origine (96,71 %).',
    faq: [
      { q: 'Quel est le RTP de Big Bass Hold & Spinner ?', r: '96,07 % selon la fiche officielle de Pragmatic Play.' },
      { q: 'Comment fonctionne le bonus des pièces ?', r: 'Trois pièces dans le jeu de base deviennent collantes et lancent un bonus avec quatre vies, remises à quatre chaque fois qu’une nouvelle pièce tombe.' }
    ],
    similaires: ['big-bass-bonanza', 'big-bass-splash', 'floating-dragon'],
    sources: [pp('Big Bass Hold & Spinner', 'big-bass-hold-spinner'), sc('Big Bass Bonanza Hold and Spinner', 'Big-Bass-Bonanza-Hold-and-Spinner')],
    verifieLe: V
  },
  {
    slug: 'mustang-gold',
    nom: 'Mustang Gold',
    ...PP,
    volume: 30,
    difficulte: 19,
    rtp: 96.53,
    rtpSource: 'officiel',
    rtpAutres: [],
    volatilite: 'Moyenne à élevée',
    gainMax: 12000,
    annee: 2019,
    grille: '5 rouleaux × 3 rangées, 25 lignes',
    gains: 'Lignes de paiement, de gauche à droite ; symboles d’argent ramassés par le symbole Collect',
    toursGratuits: '3 scatters : 8 tours gratuits, avec davantage de symboles d’argent et de Collect ; relance illimitée',
    multiplicateurs: null,
    achatBonus: null,
    theme: 'Far West et chevaux sauvages',
    analyse: [
      "Mustang Gold repose sur la collecte : des symboles d'argent, d'une valeur de 1× à 35× la mise, tombent sur les rouleaux 1 à 4, et un symbole Collect sur le rouleau 5 les ramasse tous en même temps.",
      "Ramasser un symbole de jackpot lance le Jackpot Reveal, où trois symboles identiques font gagner un des quatre jackpots : 50×, 100×, 200× ou 1 000× la mise. Trois scatters donnent 8 tours gratuits, avec plus de symboles d'argent et de Collect, relançables sans limite. Pragmatic Play annonce un gain maximal de 12 000 fois la mise."
    ],
    pourQui: 'Les joueurs qui aiment ramasser des symboles d’argent, avec des jackpots fixes faciles à comprendre.',
    attention: 'Les jackpots sont fixes, en nombre de fois la mise : ce ne sont pas des jackpots progressifs.',
    faq: [
      { q: 'Quel est le RTP de Mustang Gold ?', r: '96,53 % selon la fiche officielle de Pragmatic Play.' },
      { q: 'Quels sont les jackpots de Mustang Gold ?', r: '50×, 100×, 200× et 1 000× la mise, gagnés en trouvant trois symboles identiques pendant le Jackpot Reveal.' },
      { q: 'Quel est le gain maximal de Mustang Gold ?', r: '12 000 fois la mise selon Pragmatic Play.' }
    ],
    similaires: ['wolf-gold', 'wild-west-gold', 'chilli-heat'],
    sources: [pp('Mustang Gold', 'mustang-gold-slot'), sc('Mustang Gold', 'Mustang-Gold')],
    verifieLe: V
  },
  {
    slug: 'chilli-heat',
    nom: 'Chilli Heat',
    ...PP,
    volume: 30,
    difficulte: 22,
    rtp: 96.5,
    rtpSource: 'officiel',
    rtpAutres: [],
    volatilite: 'Moyenne',
    gainMax: null,
    annee: 2018,
    grille: '5 rouleaux × 3 rangées, 25 lignes',
    gains: 'Lignes de paiement, de gauche à droite',
    toursGratuits: '3 scatters : 8 tours gratuits avec seulement les symboles les mieux payés ; relance illimitée',
    multiplicateurs: null,
    achatBonus: null,
    theme: 'Fête mexicaine',
    analyse: [
      "Chilli Heat repose sur un bonus de type « Hold & Spin ». Six symboles d'argent ou plus, d'une valeur de 1× à 100× la mise ou d'un jackpot Mini ou Major, lancent le bonus avec trois relances : seuls les symboles d'argent restent, et chaque nouveau remet le compteur à trois.",
      "Si toute la grille se remplit de symboles d'argent, vous gagnez le jackpot Grande, de 1 000 fois la mise. Les tours gratuits, eux, ne gardent que les symboles les mieux payés sur les rouleaux, et peuvent se relancer sans limite avec trois scatters."
    ],
    pourQui: 'Les joueurs qui veulent découvrir les bonus de type Hold & Spin avec une volatilité moyenne.',
    attention: 'Le jackpot Grande demande une grille entièrement remplie : c’est rare. La plupart des bonus paient la somme des symboles visibles.',
    faq: [
      { q: 'Quel est le RTP de Chilli Heat ?', r: '96,50 % selon la fiche officielle de Pragmatic Play.' },
      { q: 'Comment gagner le jackpot Grande de Chilli Heat ?', r: 'En remplissant toute la grille de symboles d’argent pendant le bonus. Il vaut 1 000 fois la mise.' }
    ],
    similaires: ['mustang-gold', 'hot-fiesta', 'wolf-gold'],
    sources: [pp('Chilli Heat', 'chilli-heat-slot'), sc('Chilli Heat', 'Chilli-Heat')],
    verifieLe: V
  },
  {
    slug: 'jokers-jewels',
    nom: 'Joker’s Jewels',
    ...PP,
    volume: 30,
    difficulte: 33,
    rtp: 96.5,
    rtpSource: 'officiel',
    rtpAutres: [],
    volatilite: 'Moyenne à élevée',
    gainMax: 1040,
    annee: 2018,
    grille: '5 rouleaux × 3 rangées, 5 lignes',
    gains: 'Lignes de paiement, de gauche à droite ; symboles bonus payés n’importe où',
    toursGratuits: 'Aucun',
    multiplicateurs: null,
    achatBonus: null,
    theme: 'Carnaval et bijoux, style rétro',
    analyse: [
      "Joker's Jewels est une machine volontairement rétro : 5 rouleaux, 5 lignes, des bijoux colorés et les accessoires du bouffon. Il n'y a pas de tours gratuits : tout se joue sur les combinaisons de gauche à droite.",
      "Le joker est le symbole le plus payant, jusqu'à 1 000 fois la mise. Trois à cinq symboles bonus n'importe où sur la grille rapportent de 10 à 250 fois la mise. Pragmatic Play annonce des gains jusqu'à 1 040 fois la mise : c'est peu face aux jeux récents, mais le jeu est simple et rapide."
    ],
    pourQui: 'Les nostalgiques des machines classiques, qui préfèrent des règles simples à des bonus complexes.',
    attention: 'Sans tours gratuits, les séries de tours perdants peuvent être longues : gardez une mise adaptée à votre budget.',
    faq: [
      { q: 'Quel est le RTP de Joker’s Jewels ?', r: '96,50 % selon la fiche officielle de Pragmatic Play.' },
      { q: 'Joker’s Jewels a-t-il des tours gratuits ?', r: 'Non. Le jeu mise sur les combinaisons de base et sur les symboles bonus, payés n’importe où sur la grille.' }
    ],
    similaires: ['sizzling-hot', 'fire-joker', 'aztec-gems'],
    sources: [pp('Joker’s Jewels', 'jokers-jewels-slot'), sc('Joker’s Jewels', 'Jokers-Jewels')],
    verifieLe: V
  },
  {
    slug: 'aztec-gems',
    nom: 'Aztec Gems',
    ...PP,
    volume: 10,
    difficulte: 22,
    rtp: 96.52,
    rtpSource: 'officiel',
    rtpAutres: [],
    volatilite: 'Moyenne',
    gainMax: 375,
    annee: 2018,
    grille: '3 rouleaux × 3 rangées, plus un 4e rouleau de multiplicateurs ; 5 lignes',
    gains: 'Trois symboles identiques sur les rouleaux 1 à 3',
    toursGratuits: 'Aucun',
    multiplicateurs: '4e rouleau : 1×, 2×, 3×, 5×, 10× ou 15×',
    achatBonus: null,
    theme: 'Empire aztèque',
    analyse: [
      "Aztec Gems est une machine minimaliste : trois rouleaux, cinq lignes, et des combinaisons qui paient jusqu'à 5 fois la mise. Les gains sur plusieurs lignes s'additionnent.",
      "Son seul vrai mécanisme est le quatrième rouleau, qui affiche un multiplicateur de 1× à 15× appliqué au gain. C'est ce qui fixe son plafond, à 375 fois la mise selon SlotCatalog : un jeu à petits risques et petits gains."
    ],
    pourQui: 'Les joueurs qui veulent un jeu très simple et rapide, avec des écarts limités.',
    attention: 'Le gain maximal est bas (375 fois la mise) : ce n’est pas un jeu pour viser un gros coup.',
    faq: [
      { q: 'Quel est le RTP d’Aztec Gems ?', r: '96,52 % selon la fiche officielle de Pragmatic Play.' },
      { q: 'À quoi sert le 4e rouleau d’Aztec Gems ?', r: 'Il affiche un multiplicateur de 1×, 2×, 3×, 5×, 10× ou 15×, appliqué au gain des trois premiers rouleaux.' }
    ],
    similaires: ['jokers-jewels', 'sizzling-hot', 'fire-joker'],
    sources: [pp('Aztec Gems', 'aztec-gems-slot'), sc('Aztec Gems', 'Aztec-Gems')],
    verifieLe: V
  },
  {
    slug: 'hot-fiesta',
    nom: 'Hot Fiesta',
    ...PP,
    volume: 10,
    difficulte: 20,
    rtp: 96.56,
    rtpSource: 'officiel',
    rtpAutres: [],
    volatilite: 'Élevée',
    gainMax: 5000,
    annee: 2021,
    grille: '5 rouleaux × 3 rangées, 25 lignes',
    gains: 'Lignes de paiement, de gauche à droite',
    toursGratuits: 'Tours gratuits avec wilds piñatas multiplicateurs',
    multiplicateurs: 'Wilds piñatas de 2×, 3× ou 5× pendant les tours gratuits',
    achatBonus: null,
    theme: 'Fête mexicaine',
    analyse: [
      "Hot Fiesta se déroule dans les rues colorées d'une ville mexicaine, sur 5 rouleaux et 25 lignes. Le jeu de base reste classique : des combinaisons de gauche à droite.",
      "Les tours gratuits apportent des wilds piñatas avec un multiplicateur de 2×, 3× ou 5×. SlotCatalog indique un gain maximal de 5 000 fois la mise et une volatilité élevée."
    ],
    pourQui: 'Les joueurs qui aiment les thèmes festifs et des tours gratuits faciles à suivre.',
    attention: 'Volatilité élevée malgré un aspect léger : l’essentiel des gains se joue en tours gratuits.',
    faq: [
      { q: 'Quel est le RTP de Hot Fiesta ?', r: '96,56 % selon la fiche officielle de Pragmatic Play.' },
      { q: 'Comment fonctionnent les tours gratuits de Hot Fiesta ?', r: 'Des wilds piñatas tombent avec un multiplicateur de 2×, 3× ou 5×, appliqué aux gains dont ils font partie.' }
    ],
    similaires: ['chilli-heat', 'mustang-gold', 'wild-booster'],
    sources: [pp('Hot Fiesta', 'hot-fiesta'), sc('Hot Fiesta', 'Hot-Fiesta')],
    verifieLe: V
  },
  {
    slug: 'wild-booster',
    nom: 'Wild Booster',
    ...PP,
    volume: 10,
    difficulte: 13,
    rtp: 96.47,
    rtpSource: 'officiel',
    rtpAutres: [],
    volatilite: 'Élevée',
    gainMax: 5000,
    annee: 2021,
    grille: '5 rouleaux × 3 rangées, 20 lignes',
    gains: 'Lignes de paiement, de gauche à droite',
    toursGratuits: 'Tours gratuits Super Boost progressifs, puis Mega Boost ou Ultra Boost',
    multiplicateurs: 'Wild multiplicateur aléatoire jusqu’à 100× ; jusqu’à ×100 en Mega Boost et ×50 en Ultra Boost',
    achatBonus: null,
    theme: 'Symboles classiques',
    analyse: [
      "Wild Booster garde les symboles classiques des machines à fruits, mais leur ajoute un wild qui peut multiplier un gain au hasard, jusqu'à 100 fois la mise selon Pragmatic Play.",
      "Les tours gratuits Super Boost sont progressifs : chaque série de 5 scatters augmente le multiplicateur total. Les versions Mega Boost et Ultra Boost montent jusqu'à ×100 et ×50. SlotCatalog indique un gain maximal de 5 000 fois la mise."
    ],
    pourQui: 'Les amateurs de symboles classiques qui veulent tout de même de gros multiplicateurs.',
    attention: 'Le multiplicateur du wild est aléatoire : la plupart des gains restent petits, et la volatilité est élevée.',
    faq: [
      { q: 'Quel est le RTP de Wild Booster ?', r: '96,47 % selon la fiche officielle de Pragmatic Play.' },
      { q: 'Jusqu’où monte le multiplicateur de Wild Booster ?', r: 'Le wild peut booster un gain jusqu’à 100 fois la mise, et les multiplicateurs atteignent ×100 en Mega Boost et ×50 en Ultra Boost, selon Pragmatic Play.' }
    ],
    similaires: ['sizzling-hot', 'hot-fiesta', 'jokers-jewels'],
    sources: [pp('Wild Booster', 'wild-booster'), sc('Wild Booster', 'Wild-Booster')],
    verifieLe: V
  },
  {
    slug: 'sugar-rush-xmas',
    nom: 'Sugar Rush Xmas',
    ...PP,
    volume: 10,
    difficulte: 15,
    rtp: 96.5,
    rtpSource: 'officiel',
    rtpAutres: [],
    volatilite: 'Élevée',
    gainMax: 5000,
    annee: 2023,
    grille: '7 rouleaux × 7 rangées',
    gains: 'Grappes de 5 symboles identiques ou plus, avec cascades',
    toursGratuits: '3 scatters ou plus : jusqu’à 30 tours gratuits, cases marquées conservées',
    multiplicateurs: 'Cases marquées : multiplicateur croissant jusqu’à 128×',
    achatBonus: null,
    theme: 'Bonbons de Noël',
    analyse: [
      "Sugar Rush Xmas est la version de Noël de Sugar Rush : même grille de 7 × 7, mêmes grappes d'au moins 5 bonbons identiques, mêmes cascades. Chaque gain marque sa position, et un nouveau gain au même endroit y ajoute un multiplicateur qui grimpe jusqu'à 128×.",
      "Trois scatters ou plus donnent jusqu'à 30 tours gratuits, pendant lesquels les cases marquées et leurs multiplicateurs restent en place. C'est là que le jeu peut atteindre son gain maximal de 5 000 fois la mise, selon SlotCatalog."
    ],
    pourQui: 'Les fans de Sugar Rush qui veulent la même mécanique dans un décor de Noël.',
    attention: 'Les règles sont presque identiques à Sugar Rush : choisissez la version dont le RTP installé par votre casino est le plus élevé.',
    faq: [
      { q: 'Quel est le RTP de Sugar Rush Xmas ?', r: '96,50 % selon la fiche officielle de Pragmatic Play.' },
      { q: 'Quelle différence avec Sugar Rush ?', r: 'Le décor de Noël. Le principe est le même : grappes d’au moins 5 bonbons, cases marquées et multiplicateurs jusqu’à 128× selon Pragmatic Play. Comparez le RTP des deux versions dans l’aide du jeu.' }
    ],
    similaires: ['sugar-rush', 'sugar-rush-1000', 'sweet-bonanza-xmas'],
    sources: [pp('Sugar Rush Xmas', 'sugar-rush-xmas'), sc('Sugar Rush Xmas', 'Sugar-Rush-Xmas')],
    verifieLe: V
  }
];

export default lot3;
