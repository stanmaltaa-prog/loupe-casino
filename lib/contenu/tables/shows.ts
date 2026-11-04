import type { TableJeu } from './types';

/** Jeux télévisés en direct, vérifiés le 4 novembre 2026 sur les pages des éditeurs et sur SlotCatalog. */
const V = '2026-11-04';
const EVO = (chemin: string, nom: string) => ({ titre: `Evolution, page officielle ${nom}`, url: `https://games.evolution.com/live-casino/${chemin}/` });
const PPL = (chemin: string, nom: string) => ({ titre: `Pragmatic Play, page officielle ${nom}`, url: `https://www.pragmaticplay.com/en/live-casino/${chemin}/` });
const SC = (slug: string, nom: string) => ({ titre: `SlotCatalog, fiche ${nom}`, url: `https://slotcatalog.com/en/slots/${slug}` });

const shows: TableJeu[] = [
  {
    slug: 'crazy-time',
    nom: 'Crazy Time',
    famille: 'show',
    fournisseur: 'Evolution',
    format: 'Jeu télévisé en direct, avec présentateur',
    annee: 2020,
    volume: 720,
    rtp: 96.08,
    rtpSource: 'officiel',
    rtpNote:
      'Evolution annonce un RTP de 96,08 % pour Crazy Time. Chaque case a toutefois son propre taux de retour : celui de la mise que vous jouez est affiché dans l’aide du jeu.',
    gainMax: '20 000× la mise (bonus Crazy Time)',
    titre: 'Crazy Time : stats, probabilités réelles et RTP de 96,08 %',
    description:
      'Crazy Time expliqué : les vraies chances de chaque case de la roue, les 4 bonus, le RTP officiel de 96,08 % et pourquoi les stats en direct ne prédisent rien.',
    h1: 'Crazy Time : les vraies probabilités de chaque case, les bonus et le RTP',
    chapeau:
      'Crazy Time est le jeu télévisé en direct le plus joué d’Evolution. Voici comment fonctionne la roue, la probabilité réelle d’obtenir chaque case et chaque bonus, et ce que valent vraiment les statistiques affichées par les sites de suivi.',
    principe: [
      'Crazy Time, lancé par Evolution en juillet 2020, est diffusé en direct 24 h sur 24. Un présentateur fait tourner une grande roue de 54 cases. Avant chaque tour, vous misez sur une ou plusieurs cases : les chiffres 1, 2, 5 et 10, ou l’un des quatre bonus (Coin Flip, Cash Hunt, Pachinko et Crazy Time).',
      'Pendant que la roue tourne, le Top Slot, une machine à deux rouleaux placée au-dessus, choisit une case et lui attribue un multiplicateur. Si la roue s’arrête sur la case que vous avez jouée et qu’elle a reçu ce multiplicateur, votre gain est multiplié d’autant.',
      'Quand la roue s’arrête sur un bonus, seuls les joueurs qui avaient misé sur cette case participent. Les autres peuvent regarder la manche, sans rien gagner.'
    ],
    etapes: [
      'Choisissez une ou plusieurs cases (1, 2, 5, 10 ou un bonus) pendant le temps de mise.',
      'Le présentateur lance la roue ; le Top Slot attribue au même moment un multiplicateur à une case.',
      'Si la roue s’arrête sur un chiffre joué, il paie sa valeur : 1 pour 1, 2 pour 1, 5 pour 1 ou 10 pour 1, multiplié par le Top Slot le cas échéant.',
      'Si elle s’arrête sur un bonus joué, vous entrez dans la manche bonus correspondante.'
    ],
    particularites: [
      {
        nom: 'Coin Flip',
        texte: 'Une pièce rouge et bleue est lancée. Deux multiplicateurs sont tirés avant le lancer, un pour chaque face : la face visible à l’arrivée gagne.'
      },
      {
        nom: 'Cash Hunt',
        texte: 'Un mur de 108 multiplicateurs cachés derrière des symboles. Chaque joueur choisit sa propre cible avant la fin du compte à rebours : les gains diffèrent d’un joueur à l’autre.'
      },
      {
        nom: 'Pachinko',
        texte: 'Le présentateur lâche un palet sur un mur de picots. Le multiplicateur de la case d’arrivée est gagné ; une case « Double » double tous les multiplicateurs du bas et le palet est relâché, jusqu’à 10 000× au maximum.'
      },
      {
        nom: 'Crazy Time',
        texte: 'Derrière la porte rouge, une roue virtuelle géante. Vous choisissez un des trois clapets (bleu, vert ou jaune) : le multiplicateur indiqué par votre clapet à l’arrêt est votre gain. C’est ici que se trouve le multiplicateur maximal de 20 000×.'
      }
    ],
    tableau: {
      legende: 'Probabilité de chaque case à chaque tour de roue (54 cases)',
      entetes: ['Case', 'Cases', 'Chance par tour', 'En moyenne, 1 fois tous les'],
      lignes: [
        ['1', '21', '38,89 %', '2,6 tours'],
        ['2', '13', '24,07 %', '4,2 tours'],
        ['5', '7', '12,96 %', '7,7 tours'],
        ['10', '4', '7,41 %', '13,5 tours'],
        ['Coin Flip', '4', '7,41 %', '13,5 tours'],
        ['Cash Hunt', '2', '3,70 %', '27 tours'],
        ['Pachinko', '2', '3,70 %', '27 tours'],
        ['Crazy Time', '1', '1,85 %', '54 tours'],
        ['Un bonus, peu importe lequel', '9', '16,67 %', '6 tours']
      ],
      note:
        'Répartition des cases selon SlotCatalog ; Evolution confirme la roue de 54 cases et la chance de 1 sur 6 d’obtenir un bonus à chaque tour. « Une fois tous les 54 tours » est une moyenne : sur 100 tours, il y a environ 15 % de chances de ne jamais voir le bonus Crazy Time, et sur 200 tours, encore environ 2 %.'
    },
    analyse: [
      'Les recherches « Crazy Time stats » et « Crazy Time tracker » sont plus nombreuses que celles sur le jeu lui-même. Ces sites affichent les derniers résultats de la roue en direct. Evolution le dit clairement sur sa page officielle : chaque tour est indépendant des précédents, et l’historique ne permet pas de prédire le suivant. Si Crazy Time n’est pas sorti depuis 150 tours, sa probabilité au prochain tour reste exactement de 1 sur 54.',
      'Le tableau ci-dessus est la seule « statistique » qui compte : elle découle de la roue elle-même. Les cases 1 et 2 sortent souvent mais paient peu ; les bonus paient beaucoup mais sortent rarement, surtout Crazy Time. Miser sur toutes les cases à chaque tour ne garantit rien : la plupart des tours, la case gagnante rapporte moins que l’ensemble des mises.',
      'Côté rendement, le RTP annoncé de 96,08 % est correct pour un jeu télévisé, mais inférieur à celui de la roulette européenne (97,30 %) ou du blackjack joué correctement. Crazy Time est d’abord un spectacle : on y joue pour l’ambiance et les gros multiplicateurs, pas pour le meilleur rendement.'
    ],
    pourQui:
      'Pour ceux qui aiment l’ambiance d’une émission télévisée et acceptent de longues séries de petits tours avant un bonus. Un petit montant sur plusieurs cases fait durer la session.',
    attention:
      'Les sites de « stats » donnent l’impression qu’un bonus est « dû ». Ce n’est jamais le cas. Fixez votre budget avant de jouer et ne le relevez pas pour « attendre » un bonus.',
    faq: [
      {
        q: 'Quelles sont les chances d’obtenir le bonus Crazy Time ?',
        r: 'Une case sur 54, soit 1,85 % à chaque tour. Sur 100 tours, il y a environ 15 % de chances de ne jamais le voir. Les tours précédents ne changent rien à cette probabilité.'
      },
      {
        q: 'Les stats et trackers de Crazy Time aident-ils à gagner ?',
        r: 'Non. Ils affichent l’historique de la roue, mais Evolution précise que chaque tour est indépendant : un résultat passé n’influence pas le suivant. Ils peuvent amuser, pas prédire.'
      },
      {
        q: 'Quel est le RTP de Crazy Time ?',
        r: 'Evolution annonce 96,08 %. Le taux varie selon la case jouée : celui de votre mise est indiqué dans l’aide du jeu, à l’ouverture de la table.'
      },
      {
        q: 'Quel est le plus gros gain jamais réalisé à Crazy Time ?',
        r: 'Selon Evolution, un multiplicateur de 25 000× la mise obtenu en Cash Hunt le 11 décembre 2022, pour un gain de 2 815 169 €. Ces gains records restent exceptionnels.'
      }
    ],
    similaires: ['funky-time', 'monopoly-live', 'sweet-bonanza-candyland', 'mega-wheel'],
    sources: [EVO('game-shows/crazy-time', 'Crazy Time'), SC('Crazy-Time', 'Crazy Time')],
    verifieLe: V
  },
  {
    slug: 'monopoly-live',
    nom: 'MONOPOLY Live',
    famille: 'show',
    fournisseur: 'Evolution',
    format: 'Jeu télévisé en direct, avec présentateur',
    annee: 2019,
    volume: 260,
    rtp: 96.23,
    rtpSource: 'base',
    rtpNote: 'Evolution ne publie pas le RTP sur sa page. SlotCatalog indique 96,23 % ; le taux exact de chaque mise est affiché dans l’aide du jeu.',
    gainMax: null,
    titre: 'Monopoly Live : règles, probabilités et RTP du jeu en direct',
    description:
      'Monopoly Live d’Evolution : la roue de 54 cases, les cases Chance, 2 Rolls et 4 Rolls, le bonus de M. Monopoly, leurs probabilités et le RTP, expliqués.',
    h1: 'MONOPOLY Live : la roue, le bonus de M. Monopoly et les vraies chances',
    chapeau:
      'MONOPOLY Live mélange une roue de fortune en direct et un plateau de Monopoly en 3D. Voici les règles officielles, la probabilité de chaque case et ce qu’il faut savoir avant de miser.',
    principe: [
      'Un présentateur fait tourner une grande roue divisée en 54 cases égales : 48 chiffres (1, 2, 5 et 10), 2 cases CHANCE, 3 cases « 2 ROLLS » et 1 case « 4 ROLLS ». Vous misez sur la case où vous pensez que la roue va s’arrêter.',
      'Un chiffre gagnant paie sa valeur : le 5 paie 5 pour 1, le 10 paie 10 pour 1. Les cases 2 ROLLS et 4 ROLLS lancent le bonus en 3D, où M. Monopoly fait le tour du plateau et ramasse des gains et des multiplicateurs pour les joueurs qui avaient misé sur ces cases.'
    ],
    etapes: [
      'Misez sur un ou plusieurs chiffres (1, 2, 5, 10) ou sur 2 ROLLS et 4 ROLLS.',
      'Le présentateur lance la roue ; le clapet en haut indique la case gagnante.',
      'Chiffre joué : vous êtes payé selon sa valeur. Case CHANCE : prix en argent ou multiplicateur pour le tour suivant.',
      '2 ROLLS ou 4 ROLLS joués : le bonus commence, avec au moins 2 ou 4 lancers de dés réels en studio.'
    ],
    particularites: [
      {
        nom: 'Les cases CHANCE',
        texte: 'M. Monopoly tire une carte : soit un prix en argent pour tous les joueurs, soit un multiplicateur. Dans ce cas, les mises restent en place et la roue est relancée ; le multiplicateur s’applique au tour suivant, y compris aux gains du bonus.'
      },
      {
        nom: 'Le bonus 2 ROLLS et 4 ROLLS',
        texte: 'M. Monopoly avance sur le plateau du total des deux dés et ramasse les prix des cases où il s’arrête. Un double donne un lancer supplémentaire. Il faut avoir misé sur la case 2 ROLLS ou 4 ROLLS pour gagner pendant le bonus.'
      }
    ],
    tableau: {
      legende: 'Probabilité des cases spéciales à chaque tour (54 cases, d’après les règles d’Evolution)',
      entetes: ['Case', 'Cases', 'Chance par tour'],
      lignes: [
        ['Un chiffre (1, 2, 5 ou 10)', '48', '88,89 %'],
        ['2 ROLLS', '3', '5,56 %'],
        ['CHANCE', '2', '3,70 %'],
        ['4 ROLLS', '1', '1,85 %'],
        ['Un bonus (2 ROLLS ou 4 ROLLS)', '4', '7,41 %']
      ],
      note: 'Le bonus revient en moyenne une fois tous les 13 à 14 tours, et le 4 ROLLS une fois tous les 54 tours. Ce sont des moyennes : les écarts réels peuvent être longs.'
    },
    analyse: [
      'MONOPOLY Live reprend le principe de Dream Catcher, la roue d’Evolution, en y ajoutant un vrai bonus. Le jeu se comprend en quelques secondes, et le bonus en 3D, avec des dés lancés pour de vrai en studio, est l’un des plus réussis du genre.',
      'Le bonus 4 ROLLS est rare (1 case sur 54) et c’est lui qui offre le plus de potentiel. Miser seulement sur les bonus revient donc à accepter de nombreux tours perdants. À l’inverse, les petits chiffres sortent souvent mais paient peu.'
    ],
    pourQui: 'Pour les amateurs du jeu de société et des jeux télévisés simples, qui veulent un bonus spectaculaire sans règles compliquées.',
    attention: 'Les cases CHANCE et le bonus donnent l’impression d’un jeu « généreux », mais le RTP reste sous celui de la roulette européenne. Gardez des mises modestes.',
    faq: [
      {
        q: 'Combien de cases compte la roue de Monopoly Live ?',
        r: '54 cases : 48 chiffres (1, 2, 5 et 10), 2 cases CHANCE, 3 cases 2 ROLLS et 1 case 4 ROLLS, selon les règles d’Evolution.'
      },
      {
        q: 'Faut-il miser sur 2 ROLLS pour profiter du bonus ?',
        r: 'Oui. Tout le monde voit le bonus, mais seuls les joueurs qui ont misé sur la case 2 ROLLS ou 4 ROLLS correspondante gagnent pendant la manche.'
      },
      { q: 'Quel est le RTP de Monopoly Live ?', r: 'Evolution ne le publie pas sur sa page. SlotCatalog indique 96,23 %. Vérifiez le taux de chaque mise dans l’aide du jeu.' }
    ],
    similaires: ['monopoly-big-baller', 'crazy-time', 'mega-wheel', 'funky-time'],
    sources: [EVO('game-shows/monopoly-live', 'MONOPOLY Live'), SC('Monopoly-Live', 'Monopoly Live')],
    verifieLe: V
  },
  {
    slug: 'monopoly-big-baller',
    nom: 'MONOPOLY Big Baller',
    famille: 'show',
    fournisseur: 'Evolution',
    format: 'Jeu télévisé en direct, de type bingo',
    annee: 2022,
    volume: 210,
    rtp: 96.1,
    rtpSource: 'base',
    rtpNote: 'Evolution ne publie pas le RTP sur sa page. SlotCatalog indique 96,10 % ; le taux exact de votre mise est affiché dans l’aide du jeu.',
    gainMax: null,
    titre: 'Monopoly Big Baller : règles, multiplicateurs et RTP',
    description:
      'Monopoly Big Baller d’Evolution : cartes de bingo, 20 boules sur 60, multiplicateurs, bonus 3 Rolls et 5 Rolls, et RTP. Les règles officielles en clair.',
    h1: 'MONOPOLY Big Baller : le bingo en direct, ses multiplicateurs et son RTP',
    chapeau:
      'MONOPOLY Big Baller est un bingo en direct à la sauce Monopoly. Voici les règles officielles, les trois types de multiplicateurs et le fonctionnement du bonus sur le plateau.',
    principe: [
      'Vous misez sur une à quatre cartes de bingo de 5 × 5 cases, numérotées de 1 à 60. Chaque carte peut être une carte « Free Space », dont le centre compte comme un numéro déjà tiré, ou une carte « Chance », dont le centre porte un multiplicateur garanti.',
      'M. Monopoly place d’abord des cases gratuites et des multiplicateurs au hasard sur les cartes. Puis 20 boules sur 60 sont tirées en direct : chaque ligne complétée sur une carte fait gagner cette carte.'
    ],
    etapes: [
      'Choisissez de 1 à 4 cartes, en mode Free Space ou Chance, et votre mise.',
      'M. Monopoly ajoute des cases gratuites et des multiplicateurs au hasard.',
      '20 boules sur 60 sont tirées ; les numéros sont cochés automatiquement.',
      'Chaque ligne complète paie, multipliée le cas échéant. Les mises 3 Rolls et 5 Rolls peuvent lancer le bonus.'
    ],
    particularites: [
      { nom: 'Multiplicateur standard (10× ou 20×)', texte: 'Multiplie le gain de toute ligne gagnante qui contient ce numéro.' },
      { nom: 'Multiplicateur de ligne (20× ou 50×)', texte: 'Ne paie que si vous complétez la ligne précise qui le porte.' },
      { nom: 'Multiplicateur global (2× ou 3×)', texte: 'S’applique à toutes les lignes gagnantes de la carte et multiplie aussi les autres multiplicateurs.' },
      {
        nom: 'Le bonus 3 Rolls et 5 Rolls',
        texte: 'Si tous les numéros de votre carte 3 Rolls (3 numéros) ou 5 Rolls (4 numéros) sortent, M. Monopoly fait le tour d’un plateau où chaque propriété porte un multiplicateur. Maisons et hôtels les augmentent, les taxes réduisent le gain de 10 % ou 20 %, et passer par la case Départ double tous les prix.'
      }
    ],
    analyse: [
      'Big Baller est plus lent et plus technique que les jeux de roue : il faut comprendre la différence entre cartes Chance et Free Space, et entre les trois types de multiplicateurs. Les règles d’Evolution sont toutefois claires, et l’interface coche tout automatiquement.',
      'La carte Free Space augmente vos chances de faire une ligne, la carte Chance mise sur un multiplicateur garanti au centre. Aucune n’est « meilleure » : l’une donne des gains plus fréquents, l’autre des gains plus rares mais plus gros.'
    ],
    pourQui: 'Pour les amateurs de bingo et de Monopoly qui aiment suivre un tirage de boules plutôt qu’une roue.',
    attention: 'Avec quatre cartes à chaque tirage, la mise grimpe vite. Calculez votre mise totale par tour, pas seulement celle d’une carte.',
    faq: [
      { q: 'Combien de boules sont tirées à Monopoly Big Baller ?', r: '20 boules sur 60 à chaque partie, selon les règles d’Evolution.' },
      {
        q: 'Quelle différence entre une carte Chance et une carte Free Space ?',
        r: 'La carte Free Space a une case centrale gratuite, ce qui facilite les lignes. La carte Chance a un multiplicateur garanti au centre, mais pas de case gratuite au départ.'
      },
      { q: 'Quel est le RTP de Monopoly Big Baller ?', r: 'Evolution ne le publie pas sur sa page. SlotCatalog indique 96,10 %.' }
    ],
    similaires: ['monopoly-live', 'crazy-time', 'funky-time', 'sweet-bonanza-candyland'],
    sources: [EVO('game-shows/monopoly-big-baller', 'MONOPOLY Big Baller'), SC('Monopoly-Big-Baller', 'Monopoly Big Baller')],
    verifieLe: V
  },
  {
    slug: 'funky-time',
    nom: 'Funky Time',
    famille: 'show',
    fournisseur: 'Evolution',
    format: 'Jeu télévisé en direct, roue numérique DigiWheel',
    annee: 2023,
    volume: 0,
    rtp: 95.99,
    rtpSource: 'base',
    rtpNote: 'Evolution ne publie pas le RTP sur sa page. SlotCatalog indique 95,99 % ; le taux de chaque mise est dans l’aide du jeu.',
    gainMax: '10 000× la mise (Stayin’ Alive)',
    titre: 'Funky Time : règles, bonus et RTP du jeu télévisé Evolution',
    description:
      'Funky Time d’Evolution : la roue DigiWheel, les 24 cases lettres payées 25 pour 1, les bonus Bar, Stayin’ Alive, Disco et VIP Disco, et le RTP, expliqués.',
    h1: 'Funky Time : la roue disco d’Evolution, ses quatre bonus et son RTP',
    chapeau:
      'Funky Time est présenté par Evolution comme son plus grand jeu télévisé depuis Crazy Time. Voici comment fonctionne sa roue numérique, ce que paient les lettres et le déroulement de chacun des quatre bonus.',
    principe: [
      'Funky Time tourne autour de la DigiWheel, une roue numérique qui attribue des multiplicateurs aléatoires à des cases au hasard à chaque tour. Vous gagnez si la roue s’arrête sur une case que vous avez jouée.',
      'La roue compte 24 cases lettres (P, L, A, Y, F, U, N, K, T, I, M, E), qui paient 25 pour 1, des cases 1 et quatre cases bonus. Deux raccourcis existent : miser sur les 12 lettres d’un coup, ou sur les 4 bonus d’un coup.'
    ],
    etapes: [
      'Misez sur le 1, sur des lettres, sur un ou plusieurs bonus, ou utilisez les raccourcis « 12 lettres » et « 4 bonus ».',
      'Le présentateur lance la roue ; des multiplicateurs aléatoires sont attribués à certaines cases.',
      'Case jouée : vous êtes payé, multiplié le cas échéant. Bonus joué : vous entrez dans la manche bonus.'
    ],
    particularites: [
      { nom: 'Bar', texte: 'Vous choisissez un des trois verres. Le robot barman y verse des multiplicateurs, puis un rouleau tire un multiplicateur supplémentaire qui s’ajoute à l’un des verres.' },
      {
        nom: 'Stayin’ Alive',
        texte: 'Une machine tire des boules parmi 90. Vous choisissez une équipe (verte, rose ou orange) et montez une échelle de 20 niveaux, de 5× à 10 000×, tant que vous avez des vies : chaque boule noire STOP en retire une, sur quatre au départ.'
      },
      { nom: 'Disco et VIP Disco', texte: 'Mr Funky danse sur une piste de 37 cases (63 en VIP) et ramasse des multiplicateurs à chaque pas, jusqu’à ce qu’il sorte de la piste.' }
    ],
    analyse: [
      'Funky Time a une particularité intéressante : les lettres paient 25 pour 1 dès le jeu principal, sans passer par un bonus. C’est ce qui le distingue de Crazy Time, où les chiffres paient peu. En contrepartie, une lettre précise sort rarement.',
      'Les quatre bonus sont variés, et Stayin’ Alive offre le plafond le plus élevé avec 10 000×. Le RTP indiqué par SlotCatalog (95,99 %) est proche de celui de Crazy Time, sous celui de la roulette.'
    ],
    pourQui: 'Pour ceux qui ont aimé Crazy Time et veulent des gains plus fréquents dès le jeu principal grâce aux lettres.',
    attention: 'Le raccourci « 12 lettres » place 12 mises à la fois : votre mise réelle est multipliée par 12. Vérifiez le total avant de valider.',
    faq: [
      { q: 'Combien paient les lettres à Funky Time ?', r: '25 pour 1 dans le jeu principal, selon Evolution, avant d’éventuels multiplicateurs.' },
      { q: 'Quels sont les bonus de Funky Time ?', r: 'Quatre : Bar, Stayin’ Alive, Disco et VIP Disco. Il faut avoir misé sur la case du bonus pour y gagner.' },
      { q: 'Quel est le gain maximal à Funky Time ?', r: 'L’échelle du bonus Stayin’ Alive monte jusqu’à 10 000× la mise, selon Evolution.' }
    ],
    similaires: ['crazy-time', 'monopoly-live', 'mega-wheel', 'sweet-bonanza-candyland'],
    sources: [EVO('game-shows/funky-time', 'Funky Time'), SC('Funky-Time', 'Funky Time')],
    verifieLe: V
  },
  {
    slug: 'mega-wheel',
    nom: 'Mega Wheel',
    famille: 'show',
    fournisseur: 'Pragmatic Play',
    format: 'Jeu télévisé en direct, avec présentateur',
    annee: 2020,
    volume: 170,
    rtp: 96.5,
    rtpSource: 'base',
    rtpNote: 'Pragmatic Play ne publie pas le RTP sur sa page. SlotCatalog indique 96,50 %.',
    gainMax: '500× la mise',
    titre: 'Mega Wheel : règles, multiplicateurs et RTP (Pragmatic Play)',
    description:
      'Mega Wheel de Pragmatic Play : la roue de 54 cases, les 9 positions de mise, le Mega Lucky Number jusqu’à 500× et le RTP. Ce qu’il faut savoir avant de jouer.',
    h1: 'Mega Wheel : la roue en direct de Pragmatic Play, ses règles et son RTP',
    chapeau:
      'Mega Wheel est le premier jeu télévisé de Pragmatic Play. Une roue, neuf mises possibles et un multiplicateur surprise à chaque tour : voici comment ça marche et ce que ça rapporte vraiment.',
    principe: [
      'La grande roue multicolore compte 54 cases numérotées. Avant chaque tour, vous misez sur une ou plusieurs des neuf positions de mise, ou sur les neuf d’un coup. Si le chiffre choisi sort, vous récupérez votre mise plus le gain correspondant à ce chiffre.',
      'À chaque tour, un chiffre est désigné au hasard comme Mega Lucky Number et reçoit un Mega Multiplier, jusqu’à 500× la mise. Le jeu est diffusé 24 h sur 24 depuis un studio de Pragmatic Play.'
    ],
    etapes: [
      'Misez sur un ou plusieurs chiffres, ou sur les neuf positions d’un coup.',
      'Le présentateur lance la roue ; le Mega Lucky Number et son multiplicateur s’affichent avant l’arrêt.',
      'Si la roue s’arrête sur votre chiffre, il paie sa valeur, multipliée s’il est le Mega Lucky Number.'
    ],
    particularites: [
      { nom: 'Mega Lucky Number', texte: 'Un chiffre tiré au hasard à chaque tour reçoit un multiplicateur aléatoire, jusqu’à 500×.' },
      { nom: 'Mega Wheel Latino', texte: 'Une version en espagnol, diffusée depuis un studio en Colombie avec des présentateurs hispanophones.' }
    ],
    analyse: [
      'Mega Wheel est le plus simple des jeux de roue : pas de bonus à étapes, seulement une roue et un multiplicateur surprise. C’est un bon point d’entrée pour découvrir les jeux télévisés.',
      'Le plafond de 500× est bien plus bas que celui de Crazy Time ou de Funky Time. En contrepartie, le RTP indiqué par SlotCatalog (96,50 %) est un peu plus élevé.'
    ],
    pourQui: 'Pour ceux qui veulent un jeu de roue en direct sans règles de bonus à apprendre.',
    attention: 'Miser sur les neuf positions à chaque tour ne garantit pas de gagner plus que vous ne misez : la plupart du temps, une seule position paie.',
    faq: [
      { q: 'Combien de cases compte Mega Wheel ?', r: '54 cases numérotées, avec neuf positions de mise possibles, selon Pragmatic Play.' },
      { q: 'Quel est le gain maximal à Mega Wheel ?', r: 'Jusqu’à 500× la mise grâce au Mega Multiplier, selon Pragmatic Play.' },
      { q: 'Quel est le RTP de Mega Wheel ?', r: 'Pragmatic Play ne le publie pas sur sa page. SlotCatalog indique 96,50 %.' }
    ],
    similaires: ['sweet-bonanza-candyland', 'crazy-time', 'monopoly-live', 'mega-roulette'],
    sources: [PPL('mega-wheel', 'Mega Wheel'), SC('Mega-Wheel', 'Mega Wheel')],
    verifieLe: V
  },
  {
    slug: 'sweet-bonanza-candyland',
    nom: 'Sweet Bonanza CandyLand',
    famille: 'show',
    fournisseur: 'Pragmatic Play',
    format: 'Jeu télévisé en direct, avec présentateur',
    annee: 2021,
    volume: 110,
    rtp: 96.48,
    rtpSource: 'base',
    rtpNote: 'Pragmatic Play ne publie pas le RTP sur sa page. SlotCatalog indique 96,48 %.',
    gainMax: '500 000 €',
    titre: 'Sweet Bonanza CandyLand : règles, bonus et RTP en direct',
    description:
      'Sweet Bonanza CandyLand : la roue en direct de Pragmatic Play, les Sugar Bombs, les bonus Sweet Spins, Candy Drop et Bubble Surprise, et le RTP, expliqués.',
    h1: 'Sweet Bonanza CandyLand : la machine à sous devenue jeu télévisé',
    chapeau:
      'Pragmatic Play a transformé sa machine à sous Sweet Bonanza en jeu télévisé en direct. Voici la roue, les trois bonus, dont de vrais tours gratuits de Sweet Bonanza, et ce qu’il faut savoir avant de miser.',
    principe: [
      'Une roue occupe le centre du studio, entourée de trois espaces de bonus. Elle compte six positions de mise et trois cases Sugar Bomb. Vous misez sur les positions où vous pensez que la roue va s’arrêter.',
      'Si elle s’arrête sur une Sugar Bomb, un multiplicateur aléatoire jusqu’à 10× est tiré et la roue est relancée gratuitement. Avec l’option Sugar Bomb Booster, ce multiplicateur est doublé ; une deuxième Sugar Bomb multiplie les deux multiplicateurs entre eux.'
    ],
    etapes: [
      'Misez sur une ou plusieurs des six positions, avec ou sans Sugar Bomb Booster.',
      'Le présentateur lance la roue.',
      'Position jouée : vous êtes payé. Sugar Bomb : multiplicateur et relance gratuite. Bonus joué : vous entrez dans la manche bonus.'
    ],
    particularites: [
      { nom: 'Sweet Spins', texte: '10 tours gratuits d’une version en direct de la machine à sous Sweet Bonanza : il faut au moins 8 symboles identiques pour gagner.' },
      { nom: 'Candy Drop', texte: 'Vous choisissez une des trois boules de bonbon, lâchée dans un mur de type plinko. Si elle touche les quatre Jackpot Boxes, elle paie le maximum de 1 000×.' },
      { nom: 'Bubble Surprise', texte: 'Un bonus rapide qui paie 5×, 10× ou 25×, ou qui déclenche Candy Drop ou Sweet Spins.' }
    ],
    analyse: [
      'CandyLand est le pont le plus direct entre les machines à sous et le casino en direct : les Sweet Spins reprennent vraiment le jeu de base de Sweet Bonanza. Si vous connaissez la machine, vous comprendrez le bonus tout de suite.',
      'Pragmatic Play annonce un gain maximal de 500 000 €. Le RTP indiqué par SlotCatalog (96,48 %) est proche de celui de la machine à sous d’origine.'
    ],
    pourQui: 'Pour les fans de Sweet Bonanza qui veulent essayer un jeu en direct, avec un présentateur et des bonus connus.',
    attention: 'L’option Sugar Bomb Booster a un coût : vérifiez le montant ajouté à votre mise dans l’interface avant de l’activer.',
    faq: [
      { q: 'Sweet Bonanza CandyLand est-il une machine à sous ?', r: 'Non : c’est un jeu télévisé en direct, inspiré de la machine à sous Sweet Bonanza. Le bonus Sweet Spins reprend toutefois 10 tours de la machine.' },
      { q: 'Quel est le gain maximal à Sweet Bonanza CandyLand ?', r: '500 000 €, selon Pragmatic Play. Le bonus Candy Drop plafonne à 1 000× la mise.' },
      { q: 'Quel est le RTP de Sweet Bonanza CandyLand ?', r: 'Pragmatic Play ne le publie pas sur sa page. SlotCatalog indique 96,48 %.' }
    ],
    similaires: ['mega-wheel', 'crazy-time', 'funky-time', 'monopoly-live'],
    machinesLiees: ['sweet-bonanza'],
    sources: [PPL('sweet-bonanza-candyland', 'Sweet Bonanza CandyLand'), SC('Sweet-Bonanza-CandyLand', 'Sweet Bonanza CandyLand')],
    verifieLe: V
  }
];

export default shows;
