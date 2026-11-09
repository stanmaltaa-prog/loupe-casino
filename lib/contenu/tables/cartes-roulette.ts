import type { TableJeu } from './types';

/** Roulettes et blackjacks, vérifiés le 4 novembre 2026 sur les pages des éditeurs et sur SlotCatalog. */
const V = '2026-11-04';
const EVO = (chemin: string, nom: string) => ({ titre: `Evolution, page officielle ${nom}`, url: `https://games.evolution.com/${chemin}/` });
const PPL = (chemin: string, nom: string) => ({ titre: `Pragmatic Play, page officielle ${nom}`, url: `https://www.pragmaticplay.com/en/live-casino/${chemin}/` });
const SC = (slug: string, nom: string) => ({ titre: `SlotCatalog, fiche ${nom}`, url: `https://slotcatalog.com/en/slots/${slug}` });

const cartesRoulette: TableJeu[] = [
  {
    slug: 'lightning-roulette',
    nom: 'Lightning Roulette',
    famille: 'roulette',
    fournisseur: 'Evolution',
    format: 'Roulette en direct, roue automatique et présentateur',
    annee: 2018,
    volume: 210,
    rtp: 97.3,
    rtpSource: 'base',
    rtpNote:
      'SlotCatalog indique 97,30 %, comme la roulette européenne classique : les multiplicateurs sont financés par un plein moins bien payé quand il n’est pas foudroyé (29 pour 1 au lieu de 35 pour 1).',
    gainMax: '500× la mise (plein foudroyé)',
    titre: 'Lightning Roulette : règles, multiplicateurs et RTP réel',
    description:
      'Lightning Roulette d’Evolution : les numéros foudroyés de 50× à 500×, le plein payé 29 pour 1, le RTP de 97,30 % et la meilleure façon d’y jouer, expliqués.',
    h1: 'Lightning Roulette : les numéros foudroyés, les gains et le vrai RTP',
    chapeau:
      'Lightning Roulette est la roulette en direct la plus populaire d’Evolution. Elle ajoute des multiplicateurs de 50× à 500× à la roulette européenne, mais paie moins un plein ordinaire. Voici ce que ça change pour vous.',
    principe: [
      'C’est une roulette européenne à un seul zéro (numéros 0 à 36), avec toutes les mises habituelles. La bille est lancée par une roue automatique ; un présentateur anime la partie dans un décor Art déco noir et or.',
      'Après la fin des mises, le présentateur actionne un levier : la foudre frappe de 1 à 5 numéros, qui reçoivent chacun un multiplicateur de 50× à 500×. Si la bille tombe sur un de ces numéros et que vous l’aviez joué en plein, votre gain est multiplié.'
    ],
    etapes: [
      'Placez vos mises comme à la roulette européenne : pleins, chevaux, carrés, couleurs, douzaines…',
      'À la fin des mises, de 1 à 5 numéros sont foudroyés, avec un multiplicateur chacun.',
      'La bille s’arrête : un plein sur un numéro foudroyé paie le multiplicateur ; un plein ordinaire paie 29 pour 1 ; les autres mises paient comme d’habitude.'
    ],
    particularites: [
      { nom: 'Numéros foudroyés (Lucky Numbers)', texte: 'De 1 à 5 par tour, avec un multiplicateur de 50× à 500×, valable uniquement sur les mises en plein.' },
      { nom: 'Plein ordinaire payé 29 pour 1', texte: 'C’est le prix des multiplicateurs : à la roulette européenne classique, le plein paie 35 pour 1.' },
      { nom: 'Version First Person', texte: 'Evolution propose aussi First Person Lightning Roulette, une version numérique (RNG) avec les mêmes numéros foudroyés et un bouton pour passer à la table en direct.' }
    ],
    tableau: {
      legende: 'Ce que paie un plein de 1 $ selon la roulette',
      entetes: ['Roulette', 'Plein ordinaire', 'Plein sur un numéro multiplié', 'RTP'],
      lignes: [
        ['Roulette européenne classique', '35 $', 'Sans objet', '97,30 % (calcul)'],
        ['Lightning Roulette', '29 $', '50 $ à 500 $', '97,30 % (SlotCatalog)'],
        ['XXXtreme Lightning Roulette', 'Moins que Lightning (voir sa fiche)', 'Jusqu’à 2 000 $', '97,30 % (SlotCatalog)']
      ],
      note: 'Quel que soit le numéro joué, la probabilité qu’il sorte est de 1 sur 37, soit 2,70 % par tour.'
    },
    analyse: [
      'Lightning Roulette ne rend pas plus qu’une roulette européenne : selon SlotCatalog, son RTP est le même, 97,30 %. Ce qui change, c’est la répartition des gains. Les pleins ordinaires paient moins, et cet écart finance les rares gros multiplicateurs.',
      'Pour les mises extérieures (rouge ou noir, pair ou impair, douzaines), rien ne change par rapport à la roulette classique : elles ne profitent jamais des multiplicateurs. Lightning Roulette n’a donc d’intérêt que si vous aimez jouer des pleins.'
    ],
    pourQui: 'Pour les joueurs de pleins qui acceptent des gains ordinaires plus faibles en échange d’une chance de multiplicateur jusqu’à 500×.',
    attention: 'Si vous ne jouez que les chances simples (rouge, noir, pair, impair), une roulette européenne ou française classique fait aussi bien, sans les effets.',
    faq: [
      { q: 'Combien paie un plein à Lightning Roulette ?', r: '29 pour 1 s’il n’est pas foudroyé, et de 50× à 500× s’il l’est, selon Evolution.' },
      { q: 'Quel est le RTP de Lightning Roulette ?', r: 'SlotCatalog indique 97,30 %, comme la roulette européenne. Le jeu ne rend donc pas plus, il redistribue autrement.' },
      { q: 'Combien de numéros sont foudroyés à chaque tour ?', r: 'De 1 à 5, avec un multiplicateur de 50× à 500× chacun.' }
    ],
    similaires: ['xxxtreme-lightning-roulette', 'mega-roulette', 'auto-roulette', 'crazy-time'],
    sources: [EVO('live-casino/live-roulette/lightning-roulette', 'Lightning Roulette'), EVO('first-person/first-person-lightning-roulette', 'First Person Lightning Roulette'), SC('Lightning-Roulette-Evolution-Gaming', 'Lightning Roulette')],
    verifieLe: V
  },
  {
    slug: 'xxxtreme-lightning-roulette',
    nom: 'XXXtreme Lightning Roulette',
    famille: 'roulette',
    fournisseur: 'Evolution',
    format: 'Roulette en direct, avec présentateur',
    annee: 2022,
    volume: 0,
    rtp: 97.3,
    rtpSource: 'base',
    rtpNote: 'SlotCatalog indique 97,30 %, comme Lightning Roulette et la roulette européenne. Les plus gros multiplicateurs sont compensés par un plein ordinaire encore moins payé.',
    gainMax: '2 000× la mise',
    titre: 'XXXtreme Lightning Roulette : règles, gains et RTP',
    description:
      'XXXtreme Lightning Roulette d’Evolution : Chain Lightning, Double Strike jusqu’à 2 000×, RTP de 97,30 % et différence avec Lightning Roulette, expliqués.',
    h1: 'XXXtreme Lightning Roulette : jusqu’à 2 000×, et ce que ça coûte',
    chapeau:
      'XXXtreme Lightning Roulette pousse Lightning Roulette plus loin : plus de numéros foudroyés et des multiplicateurs jusqu’à 2 000×. Voici les règles officielles et la contrepartie à connaître.',
    principe: [
      'Comme dans Lightning Roulette, la roue est européenne (0 à 36) et de 1 à 5 Lightning Numbers reçoivent un multiplicateur de 50× à 500× après la fin des mises.',
      'Une phase Chain Lightning peut ensuite ajouter jusqu’à 9 numéros chanceux, sans jamais dépasser 10 au total. Enfin, un Double Strike peut frapper un numéro déjà chanceux et porter son multiplicateur entre 600× et 2 000×.'
    ],
    etapes: [
      'Placez vos mises ; seuls les pleins profitent des multiplicateurs.',
      'Phase Lightning (1 à 5 numéros), puis Chain Lightning (jusqu’à 10 numéros au total), puis éventuel Double Strike.',
      'La bille s’arrête : un plein sur un numéro chanceux paie son multiplicateur.'
    ],
    particularites: [
      { nom: 'Chain Lightning', texte: 'Ajoute des numéros chanceux à la suite des premiers, jusqu’à 10 numéros multipliés par tour au maximum.' },
      { nom: 'Double Strike', texte: 'Frappe un numéro déjà chanceux et porte son multiplicateur entre 600× et 2 000×.' }
    ],
    analyse: [
      'Plus de numéros multipliés et un plafond quatre fois plus haut : sur le papier, XXXtreme est plus généreux que Lightning Roulette. Mais le RTP indiqué par SlotCatalog reste de 97,30 % : le surplus de multiplicateurs est payé par un plein ordinaire plus faible encore (SlotCatalog parle de 19× la mise).',
      'Concrètement, la variance augmente : vos pleins ordinaires rapportent moins souvent quelque chose de significatif, et l’essentiel du potentiel repose sur de rares numéros très multipliés.'
    ],
    pourQui: 'Pour les joueurs de pleins qui cherchent le plus gros multiplicateur possible à la roulette et acceptent de longues séries sans gain notable.',
    attention: 'Un plein gagnant non multiplié rapporte nettement moins qu’à la roulette classique. Avec un petit budget, la version Lightning ou une roulette européenne est plus stable.',
    faq: [
      { q: 'Quelle différence entre Lightning et XXXtreme Lightning Roulette ?', r: 'XXXtreme ajoute Chain Lightning (jusqu’à 10 numéros chanceux par tour) et Double Strike (600× à 2 000×). Le plein ordinaire y paie moins.' },
      { q: 'Quel est le gain maximal à XXXtreme Lightning Roulette ?', r: '2 000× la mise sur un plein, selon Evolution.' },
      { q: 'Quel est le RTP de XXXtreme Lightning Roulette ?', r: 'SlotCatalog indique 97,30 %, le même que Lightning Roulette.' }
    ],
    similaires: ['lightning-roulette', 'mega-roulette', 'auto-roulette', 'crazy-time'],
    sources: [EVO('live-casino/live-roulette/xxxtreme-lightning-roulette', 'XXXtreme Lightning Roulette'), SC('Xxxtreme-Lightning-Roulette', 'XXXtreme Lightning Roulette')],
    verifieLe: V
  },
  {
    slug: 'mega-roulette',
    nom: 'Mega Roulette',
    famille: 'roulette',
    fournisseur: 'Pragmatic Play',
    format: 'Roulette en direct, avec présentateur',
    annee: 2021,
    volume: 0,
    rtp: 97.3,
    rtpSource: 'base',
    rtpNote: 'Pragmatic Play ne publie pas le RTP sur sa page. SlotCatalog indique 97,30 %, comme la roulette européenne.',
    gainMax: '500× la mise, jusqu’à 500 000 $',
    titre: 'Mega Roulette : règles, multiplicateurs et RTP (Pragmatic)',
    description:
      'Mega Roulette de Pragmatic Play : 1 à 5 Mega Multipliers de 50× à 500× sur les pleins, les mises Mega, les annonces et le RTP, expliqués simplement.',
    h1: 'Mega Roulette : la réponse de Pragmatic Play à Lightning Roulette',
    chapeau:
      'Mega Roulette est la roulette à multiplicateurs de Pragmatic Play. Le principe ressemble à Lightning Roulette d’Evolution ; voici les règles officielles et les différences à connaître.',
    principe: [
      'Mega Roulette est une roulette à un seul zéro avec toutes les mises classiques : plein, cheval, transversale, carré, sixain, douzaine, colonne, pair ou impair, rouge ou noir. Le tapis de course permet aussi les annonces Zéro, Tiers, Voisins et Orphelins.',
      'À chaque tour, de 1 à 5 Mega Multipliers de 50× à 500× sont attribués au hasard à des pleins. Vous avez 20 secondes pour miser, et Pragmatic Play annonce des gains possibles jusqu’à 500 000 $.'
    ],
    etapes: [
      'Placez vos mises en 20 secondes, sur le tapis ou sur le tapis de course.',
      'De 1 à 5 numéros reçoivent un Mega Multiplier de 50× à 500×.',
      'La bille s’arrête : un plein sur un numéro multiplié paie son multiplicateur.'
    ],
    particularites: [
      { nom: 'Mises Mega', texte: 'Mega Chances, Mega Dozens et Mega Columns placent d’un clic un jeton sur chaque numéro d’une sélection, pour couvrir plus de pleins.' },
      { nom: 'Annonces', texte: 'Zéro, Tiers, Voisins et Orphelins, disponibles sur le tapis de course.' }
    ],
    analyse: [
      'Mega Roulette joue dans la même catégorie que Lightning Roulette : même roue à un zéro, mêmes multiplicateurs de 50× à 500× sur les pleins, et un RTP identique selon SlotCatalog.',
      'Les mises Mega sont pratiques mais multiplient le nombre de jetons posés : couvrir une douzaine en pleins revient à miser 12 jetons à la fois.'
    ],
    pourQui: 'Pour les amateurs de pleins qui préfèrent l’ambiance des studios de Pragmatic Play, ou qui jouent dans un casino qui ne propose pas Evolution.',
    attention: 'Une mise Mega Dozens place 12 jetons, Mega Columns aussi : vérifiez la mise totale affichée avant le lancer.',
    faq: [
      { q: 'Combien de multiplicateurs à Mega Roulette ?', r: 'De 1 à 5 par tour, de 50× à 500×, attribués à des pleins, selon Pragmatic Play.' },
      { q: 'Mega Roulette ou Lightning Roulette ?', r: 'Les deux reposent sur le même principe et affichent le même RTP selon SlotCatalog (97,30 %). Le choix est surtout une question de studio et de casino.' },
      { q: 'Quel est le RTP de Mega Roulette ?', r: 'Pragmatic Play ne le publie pas sur sa page. SlotCatalog indique 97,30 %.' }
    ],
    similaires: ['lightning-roulette', 'xxxtreme-lightning-roulette', 'auto-roulette', 'mega-wheel'],
    sources: [PPL('mega-roulette', 'Mega Roulette'), SC('Mega-Roulette', 'Mega Roulette')],
    verifieLe: V
  },
  {
    slug: 'auto-roulette',
    nom: 'Auto Roulette',
    famille: 'roulette',
    fournisseur: 'Evolution',
    format: 'Roulette en direct, roue automatique sans croupier',
    annee: null,
    volume: 0,
    rtp: 97.3,
    rtpSource: 'calcul',
    rtpNote:
      'Calcul mathématique pour la version européenne (un zéro) : 36 numéros payés sur 37, soit 97,30 %. La version américaine (deux zéros) descend à 94,74 %. En version française, la règle La Partage, si la table l’applique, porte les chances simples à 98,65 %.',
    gainMax: '35 pour 1 (plein)',
    titre: 'Auto Roulette : la roulette automatique sans croupier',
    description:
      'Auto Roulette d’Evolution : une vraie roue en direct, sans croupier, 60 à 80 parties par heure, versions européenne, française et américaine. RTP et conseils.',
    h1: 'Auto Roulette : la roulette en direct sans croupier, et la version à choisir',
    chapeau:
      'Auto Roulette est une vraie roue filmée en direct, lancée par une machine de précision, sans croupier. Voici comment elle fonctionne, sa version la plus rapide et la variante qui rend le plus.',
    principe: [
      'Dans Auto Roulette, il n’y a pas de croupier : une roue de précision entièrement automatisée lance la bille, 24 h sur 24, à raison de 60 à 80 parties par heure. La roue et la bille sont réelles et filmées en direct.',
      'Evolution la propose en version européenne, française et américaine, sur des tables standard et VIP. Speed Auto Roulette, sa variante ultra-rapide, enchaîne environ 2 500 parties par jour : les mises se font pendant que la bille tourne.'
    ],
    etapes: [
      'Placez vos mises pendant le temps imparti (pendant le lancer en Speed Auto Roulette).',
      'La machine lance la bille dans une vraie roue, filmée en direct.',
      'Le numéro gagnant est reconnu automatiquement et les mises sont payées selon le tableau classique.'
    ],
    particularites: [
      { nom: 'Pas de croupier', texte: 'La partie est plus rapide qu’une roulette avec croupier : pas de pause ni d’annonce, le tour suivant démarre aussitôt.' },
      { nom: 'Speed Auto Roulette', texte: 'Environ 2 500 parties par jour, selon Evolution : la variante la plus rapide, idéale pour jouer peu de temps.' }
    ],
    tableau: {
      legende: 'RTP selon la version de la roue (calcul mathématique)',
      entetes: ['Version', 'Zéros', 'RTP', 'Perte moyenne pour 100 $ misés'],
      lignes: [
        ['Française, avec La Partage (chances simples)', '1', '98,65 %', '1,35 $'],
        ['Européenne', '1', '97,30 %', '2,70 $'],
        ['Américaine', '2 (0 et 00)', '94,74 %', '5,26 $']
      ],
      note: 'La Partage rend la moitié des mises simples quand le zéro sort. Vérifiez qu’elle figure dans les règles de la table avant de la choisir.'
    },
    analyse: [
      'Auto Roulette est la façon la plus directe de jouer à la roulette en direct : la vraie roue, sans attendre le croupier. C’est ce que beaucoup de joueurs appellent la « roulette automatique ».',
      'Sa rapidité est à double tranchant. À 80 parties par heure, et bien plus en Speed Auto Roulette, la perte moyenne s’accumule plus vite qu’à une table classique : 2,70 % de chaque mise en version européenne, à chaque tour.'
    ],
    pourQui: 'Pour ceux qui veulent une vraie roue en direct, sans croupier ni temps mort, et qui jouent par courtes sessions.',
    attention: 'Évitez la version américaine (deux zéros) : elle rend environ deux fois moins bien que l’européenne. Fixez un nombre de tours, car la cadence est très élevée.',
    faq: [
      { q: 'Auto Roulette est-elle truquée parce qu’il n’y a pas de croupier ?', r: 'Non. La roue et la bille sont réelles et filmées en direct ; seule l’action de lancer est confiée à une machine.' },
      { q: 'Combien de parties par heure à Auto Roulette ?', r: 'De 60 à 80 selon Evolution, et environ 2 500 par jour en Speed Auto Roulette.' },
      { q: 'Quelle version d’Auto Roulette choisir ?', r: 'La française avec La Partage si vous jouez les chances simples, sinon l’européenne. L’américaine, à deux zéros, est la moins favorable.' }
    ],
    similaires: ['lightning-roulette', 'mega-roulette', 'xxxtreme-lightning-roulette', 'first-person-blackjack'],
    sources: [EVO('live-casino/live-roulette/auto-roulette', 'Auto Roulette')],
    verifieLe: V
  },
  {
    slug: 'free-bet-blackjack',
    nom: 'Free Bet Blackjack',
    famille: 'blackjack',
    fournisseur: 'Evolution et Pragmatic Play',
    format: 'Blackjack en direct, avec croupier',
    annee: 2018,
    volume: 480,
    rtp: null,
    rtpSource: null,
    rtpNote:
      'Ni Evolution ni Pragmatic Play ne publient le RTP sur leur page, et les chiffres trouvés ailleurs divergent. Le taux exact dépend des règles de la table : consultez l’aide du jeu.',
    gainMax: null,
    titre: 'Free Bet Blackjack : règles, stratégie et piège du 22',
    description:
      'Free Bet Blackjack : doubler et séparer gratuitement, la règle Push 22 qui compense, et comment jouer. Les règles officielles en clair, sans fausse promesse.',
    h1: 'Free Bet Blackjack : doubler gratuitement, et la règle du 22 qui compense',
    chapeau:
      'Le Free Bet Blackjack vous laisse doubler et séparer sans miser plus. Ce n’est pas un cadeau : une règle sur le 22 du croupier rééquilibre la table. Voici les règles officielles et ce qu’elles changent pour vous.',
    principe: [
      'Selon les règles publiées par Pragmatic Play, vous pouvez doubler gratuitement sur un total de 9, 10 ou 11, et séparer gratuitement toute paire sauf les cartes de valeur 10 (10, valet, dame, roi). Dans certains cas, vous pouvez même doubler gratuitement après une séparation.',
      'La contrepartie s’appelle Push 22 : si le croupier termine à 22, les mains encore en jeu sont déclarées à égalité au lieu de gagner, sauf les blackjacks. Evolution propose aussi sa propre version du jeu depuis 2018.'
    ],
    etapes: [
      'Misez sur une ou plusieurs places (jusqu’à 7 chez Pragmatic Play).',
      'Sur 9, 10 ou 11, doublez gratuitement : la mise supplémentaire est offerte par la table.',
      'Sur une paire (sauf les 10), séparez gratuitement.',
      'Si le croupier s’arrête à 22, vos mains restantes sont rendues (égalité), sauf un blackjack.'
    ],
    particularites: [
      { nom: 'Doubler gratuit', texte: 'Sur 9, 10 et 11, la mise doublée est offerte. Si la main gagne, vous touchez le gain de la mise gratuite ; si elle perd, vous ne perdez que votre mise de départ.' },
      { nom: 'Séparer gratuit', texte: 'Toute paire sauf 10, valet, dame et roi peut être séparée gratuitement.' },
      { nom: 'Push 22', texte: 'Le croupier qui termine à 22 ne vous fait pas gagner : c’est une égalité, sauf contre un blackjack. C’est cette règle qui finance les mises gratuites.' }
    ],
    analyse: [
      'Le Free Bet Blackjack est attirant parce qu’il supprime le coût du doublement. Mais au blackjack classique, un croupier qui dépasse 21 vous fait gagner : ici, à 22 précisément, vous ne gagnez plus. C’est un cas fréquent, et c’est pourquoi le jeu n’est pas plus avantageux qu’un bon blackjack classique.',
      'La stratégie change : comme doubler et séparer ne coûtent rien, il faut le faire plus souvent qu’au blackjack classique. Appliquer la stratégie de base habituelle sans l’adapter fait perdre l’intérêt des mises gratuites.'
    ],
    pourQui: 'Pour les joueurs de blackjack qui aiment doubler et séparer et veulent limiter la mise engagée sur ces coups.',
    attention: 'Ne prenez pas les mises gratuites pour un avantage : la règle Push 22 le compense. Lisez les règles de la table, elles peuvent varier d’un éditeur à l’autre.',
    faq: [
      { q: 'Le Free Bet Blackjack est-il plus avantageux ?', r: 'Pas forcément. Les mises gratuites sont compensées par la règle Push 22 : un croupier à 22 donne une égalité au lieu d’un gain.' },
      { q: 'Quand peut-on doubler gratuitement ?', r: 'Sur un total de 9, 10 ou 11, selon les règles de Pragmatic Play. Les paires peuvent aussi être séparées gratuitement, sauf les 10.' },
      { q: 'Qui propose le Free Bet Blackjack ?', r: 'Evolution et Pragmatic Play ont chacun leur version en direct. Les règles détaillées peuvent différer : vérifiez l’aide de la table.' }
    ],
    similaires: ['infinite-blackjack', 'lightning-blackjack', 'first-person-blackjack', 'auto-roulette'],
    sources: [PPL('free-bet-blackjack', 'Free Bet Blackjack'), SC('Free-Bet-Blackjack-Evolution-Gaming', 'Free Bet Blackjack (Evolution)')],
    verifieLe: V
  },
  {
    slug: 'infinite-blackjack',
    nom: 'Infinite Blackjack',
    famille: 'blackjack',
    fournisseur: 'Evolution',
    format: 'Blackjack en direct, avec croupier',
    annee: 2018,
    volume: 0,
    rtp: 99.51,
    rtpSource: 'base',
    rtpNote: 'SlotCatalog indique 99,51 %. Ce taux suppose une stratégie de base parfaite ; les mises secondaires ont un RTP plus faible.',
    gainMax: null,
    titre: 'Infinite Blackjack : règles, RTP et mises secondaires',
    description:
      'Infinite Blackjack d’Evolution : places illimitées, petites mises, main commune, règle Six Card Charlie et 4 mises secondaires. Règles officielles et RTP.',
    h1: 'Infinite Blackjack : le blackjack en direct où il y a toujours une place',
    chapeau:
      'À une table de blackjack classique, les places sont limitées. Infinite Blackjack d’Evolution accepte un nombre illimité de joueurs, avec de petites mises. Voici comment c’est possible et ce que ça change.',
    principe: [
      'Tous les joueurs reçoivent la même main de départ de deux cartes. Ensuite, chacun la joue comme il veut : tirer, rester, doubler ou séparer. C’est ce qui permet un nombre de places illimité.',
      'Le jeu applique la règle Six Card Charlie : une main de six cartes sans dépasser 21 gagne automatiquement. Quatre mises secondaires facultatives existent : Any Pair, 21+3, Hot 3 et Bust It.'
    ],
    etapes: [
      'Misez sur la main commune, et éventuellement sur une mise secondaire.',
      'Le croupier distribue la main de départ, identique pour tous.',
      'Chaque joueur prend ses décisions ; les cartes suivantes sont communes, mais chaque joueur choisit de les prendre ou non.',
      'Le croupier joue sa main et les mises sont réglées.'
    ],
    particularites: [
      { nom: 'Places illimitées', texte: 'Vous n’attendez jamais qu’une place se libère, et les mises minimales sont basses.' },
      { nom: 'Six Card Charlie', texte: 'Six cartes sans dépasser 21 : la main gagne d’office.' },
      { nom: 'Quatre mises secondaires', texte: 'Any Pair, 21+3, Hot 3 et Bust It, facultatives.' }
    ],
    analyse: [
      'Infinite Blackjack est l’une des meilleures tables pour apprendre en direct : on joue à son rythme, avec de petites mises, sans la pression des autres joueurs. Avec la stratégie de base, le RTP indiqué par SlotCatalog atteint 99,51 %.',
      'Comme tout le monde reçoit la même main, l’ambiance est plus calme qu’à une table classique. En revanche, les mises secondaires rendent nettement moins que le jeu principal.'
    ],
    pourQui: 'Pour débuter au blackjack en direct avec de petites mises, ou pour jouer sans attendre une place.',
    attention: 'Le RTP élevé suppose de jouer chaque main correctement. Les mises secondaires font baisser le rendement global : jouez-les rarement, ou pas du tout.',
    faq: [
      { q: 'Pourquoi Infinite Blackjack accepte-t-il un nombre illimité de joueurs ?', r: 'Parce que tous reçoivent la même main de départ, que chacun joue ensuite à sa façon.' },
      { q: 'Quel est le RTP d’Infinite Blackjack ?', r: 'SlotCatalog indique 99,51 %, avec une stratégie de base parfaite.' },
      { q: 'Qu’est-ce que la règle Six Card Charlie ?', r: 'Une main de six cartes qui ne dépasse pas 21 gagne automatiquement.' }
    ],
    similaires: ['lightning-blackjack', 'free-bet-blackjack', 'first-person-blackjack', 'lightning-roulette'],
    sources: [EVO('live-casino/live-blackjack/infinite-blackjack', 'Infinite Blackjack'), SC('Infinite-Blackjack', 'Infinite Blackjack')],
    verifieLe: V
  },
  {
    slug: 'lightning-blackjack',
    nom: 'Lightning Blackjack',
    famille: 'blackjack',
    fournisseur: 'Evolution',
    format: 'Blackjack en direct, avec croupier',
    annee: 2021,
    volume: 0,
    rtp: 99.56,
    rtpSource: 'base',
    rtpNote: 'SlotCatalog indique 99,56 %, frais Lightning compris, avec une stratégie de base parfaite.',
    gainMax: 'Multiplicateur jusqu’à 25×',
    titre: 'Lightning Blackjack : multiplicateurs, frais et RTP',
    description:
      'Lightning Blackjack d’Evolution : multiplicateurs de 2× à 25× sur une main gagnante, frais Lightning de 100 % sur chaque mise, et RTP. Ce qu’il faut savoir.',
    h1: 'Lightning Blackjack : des multiplicateurs garantis, mais une mise doublée',
    chapeau:
      'Lightning Blackjack promet un multiplicateur à chaque main gagnante. La contrepartie est écrite dans les règles d’Evolution : des frais égaux à votre mise. Voici comment ça marche.',
    principe: [
      'C’est un blackjack classique, joué par un nombre illimité de joueurs, auquel Evolution ajoute des multiplicateurs Lightning. Chaque main gagnante vous donne un multiplicateur aléatoire de 2×, 5×, 8×, 10×, 15×, 20× ou 25×.',
      'Ce multiplicateur ne s’applique pas tout de suite : il est gardé pour le tour suivant, et augmente votre gain si vous gagnez aussi cette main-là. Il reste disponible jusqu’à 180 jours si vous quittez la table.'
    ],
    etapes: [
      'Placez votre mise : des frais Lightning de 100 % s’y ajoutent automatiquement.',
      'Jouez votre main comme au blackjack classique.',
      'Si vous gagnez, un multiplicateur est enregistré pour votre prochaine main.',
      'Si la main suivante gagne aussi, son gain est multiplié.'
    ],
    particularites: [
      { nom: 'Frais Lightning de 100 %', texte: 'Selon Evolution, des frais égaux à la mise initiale s’ajoutent à chaque tour : une mise de 10 $ coûte en réalité 20 $.' },
      { nom: 'Multiplicateur différé', texte: 'Gagné sur une main, utilisé sur la suivante, conservé jusqu’à 180 jours.' }
    ],
    analyse: [
      'Le point clé de Lightning Blackjack est dans les règles : chaque mise est accompagnée de frais Lightning du même montant. Votre budget s’épuise donc deux fois plus vite par main qu’à une table classique à mise égale.',
      'SlotCatalog indique un RTP de 99,56 % frais compris, ce qui reste élevé. Mais pour en profiter, il faut gagner deux mains de suite : la variance est bien plus forte qu’au blackjack normal.'
    ],
    pourQui: 'Pour les joueurs de blackjack qui cherchent plus de variance et acceptent de doubler le coût de chaque main.',
    attention: 'Divisez votre mise habituelle par deux pour garder le même budget par main : les frais Lightning doublent le montant engagé.',
    faq: [
      { q: 'Que sont les frais Lightning ?', r: 'Des frais égaux à 100 % de votre mise initiale, ajoutés à chaque tour selon Evolution. Une mise de 10 $ coûte 20 $ au total.' },
      { q: 'Quand s’applique le multiplicateur ?', r: 'Sur la main suivante, si elle est gagnante. Il est conservé jusqu’à 180 jours.' },
      { q: 'Quel est le RTP de Lightning Blackjack ?', r: 'SlotCatalog indique 99,56 %, frais compris, avec une stratégie de base parfaite.' }
    ],
    similaires: ['infinite-blackjack', 'free-bet-blackjack', 'first-person-blackjack', 'lightning-roulette'],
    sources: [EVO('live-casino/live-blackjack/lightning-blackjack', 'Lightning Blackjack'), SC('Lightning-Blackjack', 'Lightning Blackjack')],
    verifieLe: V
  },
  {
    slug: 'first-person-blackjack',
    nom: 'First Person Blackjack',
    famille: 'blackjack',
    fournisseur: 'Evolution',
    format: 'Blackjack numérique (RNG), sans croupier',
    annee: 2018,
    volume: 0,
    rtp: 99.21,
    rtpSource: 'base',
    rtpNote: 'SlotCatalog indique 99,21 %, avec une stratégie de base parfaite. Les mises secondaires rendent moins.',
    gainMax: null,
    titre: 'First Person Blackjack : démo gratuite, règles et RTP',
    description:
      'First Person Blackjack d’Evolution : le blackjack automatique en 3D, jusqu’à 5 mains, mises Perfect Pairs et 21+3, démo gratuite officielle et RTP.',
    h1: 'First Person Blackjack : le blackjack automatique d’Evolution, en démo gratuite',
    chapeau:
      'First Person Blackjack est un blackjack numérique, sans croupier, dans un décor 3D réaliste. Evolution en propose une démo gratuite : idéal pour apprendre avant de jouer en direct.',
    principe: [
      'Les cartes sont tirées par un générateur de nombres aléatoires (RNG), pas par un croupier. Vous jouez à votre rythme : rien ne se passe tant que vous n’avez pas cliqué sur « Deal ».',
      'Vous pouvez jouer jusqu’à cinq mains à chaque tour, avec les mises secondaires facultatives Perfect Pairs et 21+3. Un bouton « Go Live » vous transporte à une vraie table de blackjack en direct d’Evolution.'
    ],
    etapes: [
      'Choisissez un jeton et placez-le sur une à cinq mains.',
      'Cliquez sur « Deal » pour distribuer.',
      'Jouez chaque main : tirer, rester, doubler ou séparer.',
      'Le croupier virtuel joue sa main et les mises sont réglées.'
    ],
    particularites: [
      { nom: 'Démo gratuite officielle', texte: 'Evolution propose une version de démonstration sur son site, selon votre pays. Elle se joue avec des crédits fictifs.' },
      { nom: 'Bouton Go Live', texte: 'Un clic suffit pour passer de la version numérique à une table en direct avec un vrai croupier.' }
    ],
    analyse: [
      'First Person Blackjack est le meilleur moyen de s’entraîner à la stratégie de base : vous jouez sans minuterie, à votre rythme, et la démo officielle ne coûte rien. C’est ce que beaucoup appellent le « blackjack automatique ».',
      'Le RTP indiqué par SlotCatalog, 99,21 %, n’est atteint qu’avec une stratégie parfaite. Jouer cinq mains à la fois multiplie votre mise totale, pas vos chances par main.'
    ],
    pourQui: 'Pour apprendre le blackjack gratuitement, puis jouer à son rythme sans croupier ni autres joueurs.',
    attention: 'La démo n’a pas de vraie conséquence, l’argent réel si. Passer de la démo au jeu réel demande un budget fixé d’avance.',
    faq: [
      { q: 'Peut-on jouer à First Person Blackjack gratuitement ?', r: 'Oui : Evolution propose une démo gratuite sur son site, avec des crédits fictifs, selon votre pays.' },
      { q: 'First Person Blackjack est-il en direct ?', r: 'Non. C’est une version numérique (RNG) ; le bouton « Go Live » permet de passer à une table en direct.' },
      { q: 'Combien de mains peut-on jouer ?', r: 'Jusqu’à cinq mains par tour, selon Evolution.' }
    ],
    similaires: ['infinite-blackjack', 'free-bet-blackjack', 'lightning-blackjack', 'auto-roulette'],
    sources: [EVO('first-person/first-person-blackjack', 'First Person Blackjack'), SC('First-Person-Blackjack-Evolution-Gaming', 'First Person Blackjack')],
    verifieLe: V
  }
];

export default cartesRoulette;
