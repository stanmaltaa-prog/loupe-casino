import type { PageGuide } from './types';
import crash from './jeux-crash';
import { MACHINES, cheminMachine, pct, fois } from '@/lib/contenu/machines';
import { FOURNISSEURS, cheminFournisseur } from '@/lib/contenu/fournisseurs';
import { TABLES } from '@/lib/contenu/tables';

/** Lignes du classement des machines à sous, de la plus recherchée à la moins recherchée. */
const CLASSEMENT = MACHINES.map((m, i) => [
  `${i + 1}. [${m.nom}](${cheminMachine(m)})`,
  m.fournisseur,
  pct(m.rtp),
  m.volatilite,
  m.gainMax ? fois(m.gainMax) : 'Non confirmé',
  `≈ ${m.volume.toLocaleString('fr-CA').replace(/\s/g, ' ')}`
]);

const MAJ = '2026-11-03';
const JEUX = { nom: 'Jeux', chemin: '/jeux/' };

const jeux: PageGuide[] = [
  {
    chemin: '/jeux/',
    nomFil: 'Jeux',
    titre: 'Jeux de casino en ligne : le guide de tous les jeux',
    description:
      "Machines à sous, roulette, blackjack, casino en direct, Aviator, Plinko : comment fonctionne chaque jeu de casino en ligne et ce qu'il vous coûte vraiment.",
    h1: 'Jeux de casino en ligne : comment ils marchent, ce qu’ils coûtent',
    chapeau:
      "Chaque jeu de casino a ses règles, son rythme et son avantage pour la maison. Voici le tour complet, avec le chiffre que peu de sites affichent : combien le jeu garde en moyenne sur vos mises.",
    modifie: '2026-11-04',
    resume: 'Tous les jeux de casino expliqués, avec leur avantage pour la maison.',
    sections: [
      {
        id: 'comparatif',
        titre: 'Les jeux comparés en un tableau',
        blocs: [
          {
            type: 'p',
            texte:
              "Le **taux de retour** (RTP) indique la part des mises qu'un jeu rend en moyenne aux joueurs sur une très longue période. L'**avantage de la maison** est l'inverse : la part qu'il garde. Plus il est bas, plus votre argent dure longtemps."
          },
          {
            type: 'tableau',
            entetes: ['Jeu', 'Avantage de la maison', 'Rythme', 'Part de stratégie'],
            lignes: [
              ['[Blackjack](/blackjack-en-ligne/)', "De l'ordre de 0,5 % avec la stratégie de base", 'Moyen', 'Élevée'],
              ['[Vidéo poker](/video-poker/) (Jacks or Better 9/6)', '0,46 % avec une stratégie optimale', 'Rapide', 'Élevée'],
              ['[Baccarat](/baccarat-en-ligne/) (mise sur la Banque)', '1,06 %', 'Moyen', 'Nulle'],
              ['[Roulette européenne](/roulette-en-ligne/)', '2,70 %', 'Lent', 'Nulle'],
              ['[Chicken Road](/chicken-road/)', '2 % (RTP de 98 %)', 'Rapide', 'Choix du moment pour encaisser'],
              ['[Aviator](/aviator/) et [Plinko](/plinko/) de Spribe', '3 % (RTP de 97 %)', 'Très rapide', 'Choix du moment pour encaisser'],
              ['[Machines à sous](/machines-a-sous/)', 'Souvent 3 à 6 %, selon le jeu et la version', 'Très rapide', 'Nulle'],
              ['Roulette américaine', '5,26 %', 'Lent', 'Nulle']
            ],
            legende: 'Moyennes théoriques sur le long terme. Une session réelle peut finir bien au-dessus ou bien en dessous.'
          }
        ]
      },
      {
        id: 'choisir',
        titre: 'Quel jeu choisir selon votre profil',
        blocs: [
          {
            type: 'liste',
            items: [
              '**Vous voulez que votre budget dure** : blackjack ou vidéo poker, à condition d’apprendre la stratégie de base.',
              '**Vous voulez zéro décision à prendre** : roulette européenne ou baccarat, sur la Banque.',
              '**Vous aimez l’ambiance d’un vrai casino** : le [casino en direct](/casino-en-direct/), avec de vrais croupiers filmés.',
              '**Vous cherchez de gros gains possibles** : les [machines à sous](/machines-a-sous/) à volatilité élevée, en acceptant de longues séries sans gain.',
              '**Vous aimez les parties courtes et nerveuses** : les [jeux de crash](/jeux-de-crash/) comme Aviator ou Chicken Road.'
            ]
          }
        ]
      },
      {
        id: 'bonus',
        titre: 'Jeux et bonus : attention à la contribution',
        blocs: [
          {
            type: 'p',
            texte:
              "Tous les jeux ne comptent pas de la même façon pour débloquer un bonus. Chez Rolletto, par exemple, le bonus de bienvenue casino n'est valable que sur les machines à sous : jouer au blackjack ne fait pas avancer la mise. Lisez toujours la liste des jeux admissibles, et faites le calcul avec notre [calculateur de conditions de mise](/conditions-de-mise/)."
          }
        ]
      },
      {
        id: 'tables',
        titre: 'Les jeux de table et en direct analysés',
        blocs: [
          {
            type: 'p',
            texte: `Roulettes à multiplicateurs, blackjacks en direct et jeux télévisés : voici les ${TABLES.length} jeux de table et en direct que nous avons analysés, avec leurs règles officielles et leur RTP.`
          },
          { type: 'grille-tables' }
        ]
      },
      {
        id: 'hasard',
        titre: 'Le hasard en ligne : comment c’est contrôlé',
        blocs: [
          {
            type: 'p',
            texte:
              "Les jeux en ligne utilisent un générateur de nombres aléatoires : chaque tour, chaque main ou chaque lancer est indépendant du précédent. Une série de pertes n'annonce pas un gain, et aucun système de mise ne change l'avantage de la maison. Les jeux du [casino en direct](/casino-en-direct/) utilisent, eux, de vraies cartes et de vraies roues filmées."
          },
          {
            type: 'encadre',
            ton: 'alerte',
            titre: 'Méfiez-vous des « méthodes » et des « prédicteurs »',
            texte:
              "Les applications qui prétendent prédire le prochain tour d'Aviator ou le résultat d'une machine à sous ne peuvent pas fonctionner : le résultat n'existe pas avant le tour. Ce sont des arnaques, souvent pour récupérer votre argent ou vos accès."
          }
        ]
      },
      {
        id: 'ou-jouer',
        titre: 'Où jouer au Québec',
        blocs: [{ type: 'offres', titre: 'Les casinos de notre comparatif, classés par note' }]
      }
    ],
    faq: [
      {
        q: 'Quel est le jeu de casino le plus avantageux pour le joueur ?',
        r: "Le blackjack et le vidéo poker, joués avec une stratégie optimale, ont les avantages de la maison les plus bas : de l'ordre de 0,5 % selon les règles. Le baccarat sur la Banque (1,06 %) et la roulette européenne (2,70 %) suivent."
      },
      {
        q: 'Quel est le jeu de casino le plus facile ?',
        r: "La roulette et le baccarat : aucune décision n'influence le résultat une fois la mise placée. Les machines à sous sont aussi très simples, mais leur avantage pour la maison varie beaucoup d'un jeu à l'autre."
      },
      {
        q: 'Peut-on gagner à coup sûr au casino en ligne ?',
        r: "Non. Tous les jeux de casino ont un avantage pour la maison : sur la durée, le casino gagne. Jouez avec un budget de divertissement que vous pouvez perdre."
      }
    ],
    connexes: ['/machines-a-sous/', '/jeux-de-crash/', '/casino-en-direct/', '/roulette-en-ligne/']
  },

  {
    chemin: '/machines-a-sous/',
    nomFil: 'Machines à sous',
    parent: JEUX,
    titre: 'Machines à sous en ligne : RTP, volatilité, meilleurs jeux',
    description:
      'Machines à sous en ligne : RTP et versions de RTP, volatilité, Megaways, achat de bonus, et les jeux les plus recherchés au Canada analysés un par un.',
    h1: 'Machines à sous en ligne : bien les choisir et comprendre ce qu’elles rendent',
    chapeau:
      "C'est le jeu le plus joué en ligne, et celui où l'écart entre deux jeux est le plus grand. Deux chiffres suffisent pour bien choisir : le taux de retour et la volatilité.",
    modifie: '2026-11-04',
    resume: 'RTP, volatilité, mécaniques et les jeux les plus recherchés.',
    sections: [
      {
        id: 'classement',
        titre: `Le classement des ${MACHINES.length} machines à sous les plus recherchées`,
        blocs: [
          {
            type: 'p',
            texte:
              `Nous avons mesuré les recherches mensuelles au Canada pour plus d'une centaine de machines à sous (Ubersuggest, novembre 2026), puis retenu ${MACHINES.length} jeux parmi les plus recherchés disponibles en ligne, en écartant les recherches ambiguës et les machines propres aux casinos terrestres. Pour les jeux dont le nom seul est ambigu, nous avons retenu la recherche de leur démo. Chaque jeu a sa fiche détaillée : meilleur RTP publié, autres versions, volatilité, gain maximal et budget à prévoir. Cliquez sur un nom pour l'ouvrir.`
          },
          { type: 'grille-jeux' },
          {
            type: 'tableau',
            legende: 'RTP : meilleure version publiée (fiche officielle ou SlotCatalog). Recherches : par mois, au Canada.',
            entetes: ['Jeu', 'Fournisseur', 'RTP', 'Volatilité', 'Gain max', 'Recherches'],
            lignes: CLASSEMENT
          },
          {
            type: 'p',
            texte: 'Pour essayer sans miser, voir nos [machines à sous gratuites](/machines-a-sous-gratuites/). Pour les jeux qui rendent le plus, voir [le classement au meilleur RTP](/machines-a-sous-meilleur-rtp/).'
          }
        ]
      },
      {
        id: 'rtp',
        titre: 'Le RTP, et le piège des versions',
        blocs: [
          {
            type: 'p',
            texte:
              "Le **RTP** (taux de retour au joueur) est la part des mises qu'une machine rend en moyenne sur des millions de tours. Un RTP de 96 % veut dire que la machine garde en moyenne 4 % de ce qui est misé. Sur une seule session, le résultat peut être très différent."
          },
          {
            type: 'p',
            texte:
              "Ce que peu de sites expliquent : **beaucoup de machines existent en plusieurs versions de RTP**. Le fournisseur propose par exemple une version à 96,5 %, une à 95,5 % et une à 94,5 %, et le casino choisit laquelle il installe. Le même jeu peut donc rendre moins sur un site que sur un autre. Le RTP réellement appliqué figure en général dans l'écran d'aide ou d'information du jeu : vérifiez-le avant de jouer."
          }
        ]
      },
      {
        id: 'volatilite',
        titre: 'La volatilité : le rythme des gains',
        blocs: [
          {
            type: 'tableau',
            entetes: ['Volatilité', 'Ce qui se passe', 'Pour qui'],
            lignes: [
              ['Faible', 'Petits gains fréquents, peu de gros coups', 'Petits budgets, longues sessions'],
              ['Moyenne', 'Équilibre entre fréquence et montant', 'La plupart des joueurs'],
              ['Élevée', 'Longues séries sans gain, gains rares mais importants', 'Budgets capables d’encaisser des pertes']
            ]
          },
          {
            type: 'p',
            texte:
              "Deux machines au même RTP peuvent donner des sessions complètement différentes. Une machine très volatile peut vider un petit budget avant le premier tour gratuit : adaptez votre mise à votre budget, pas l'inverse."
          }
        ]
      },
      {
        id: 'mecaniques',
        titre: 'Les mécaniques à connaître',
        blocs: [
          {
            type: 'liste',
            items: [
              '**Lignes de paiement** : les symboles doivent s’aligner sur des lignes définies.',
              '**Megaways** : le nombre de symboles par rouleau change à chaque tour, ce qui fait varier le nombre de façons de gagner.',
              '**Paiement partout** (« pay anywhere ») : il suffit d’un certain nombre de symboles identiques n’importe où sur la grille, comme dans Gates of Olympus ou Sweet Bonanza.',
              '**Grappes** (« cluster pays ») : les symboles identiques doivent se toucher.',
              '**Cascades** : les symboles gagnants disparaissent et de nouveaux tombent, ce qui peut enchaîner plusieurs gains sur un même tour.',
              '**Achat de bonus** : vous payez un montant fixe (souvent un multiple de la mise) pour déclencher directement les tours gratuits. Le risque par tour est beaucoup plus élevé.'
            ]
          }
        ]
      },
      {
        id: 'jackpots',
        titre: 'Les jackpots progressifs',
        blocs: [
          {
            type: 'p',
            texte:
              "Un jackpot progressif grossit à chaque mise placée sur le jeu, souvent sur de nombreux casinos à la fois. [Mega Moolah](/machines-a-sous/mega-moolah/) est l'un des plus connus au Canada. Contrepartie : une partie de chaque mise alimente le jackpot, si bien que le jeu de base rend souvent moins qu'une machine classique."
          }
        ]
      },
      {
        id: 'conseils',
        titre: 'Nos conseils avant de lancer les rouleaux',
        blocs: [
          {
            type: 'liste',
            ordonnee: true,
            items: [
              'Vérifiez le RTP affiché dans l’écran d’aide du jeu.',
              'Choisissez une volatilité adaptée à votre budget.',
              'Fixez une mise qui vous permet au moins une centaine de tours.',
              'Avec un bonus, respectez la mise maximale par tour (souvent 5 $).',
              'Arrêtez-vous à la limite que vous vous êtes fixée, gain ou perte.'
            ]
          }
        ]
      },
      {
        id: 'fournisseurs',
        titre: 'Les fournisseurs de machines à sous',
        blocs: [
          {
            type: 'p',
            texte:
              "Le fournisseur fixe les règles du jeu et les versions de RTP proposées aux casinos. Certains, comme Play'n GO, proposent jusqu'à cinq réglages par jeu : c'est là que vérifier le RTP compte le plus."
          },
          {
            type: 'liens',
            items: FOURNISSEURS.filter((f) => MACHINES.some((m) => m.fournisseurId === f.id)).map((f) => ({
              href: cheminFournisseur(f),
              titre: f.nom,
              texte: `${MACHINES.filter((m) => m.fournisseurId === f.id).length} jeux analysés`
            }))
          }
        ]
      },
      {
        id: 'ou-jouer',
        titre: 'Où jouer aux machines à sous',
        blocs: [
          {
            type: 'p',
            texte:
              "Celsius affiche plus de 6 000 machines à sous selon l'opérateur, dont 675 jeux du fournisseur Pragmatic Play. Rolletto réserve son bonus de bienvenue casino aux machines à sous."
          },
          { type: 'offres' }
        ]
      }
    ],
    faq: [
      {
        q: 'Quelle machine à sous paie le plus ?',
        r: "Celle dont le RTP réellement installé par le casino est le plus élevé. Le même jeu peut exister en plusieurs versions : vérifiez le RTP dans l'écran d'aide du jeu avant de jouer."
      },
      {
        q: 'Une machine à sous peut-elle être « chaude » ou « froide » ?',
        r: "Non. Chaque tour est indépendant et déterminé par un générateur de nombres aléatoires. Une machine n'est jamais « due » pour payer."
      },
      {
        q: 'Vaut-il mieux acheter le bonus ?',
        r: "L'achat de bonus accélère l'accès aux tours gratuits, mais concentre le risque : un seul achat peut coûter 100 fois la mise ou plus. Il ne change pas l'avantage de la maison et est souvent interdit pendant la mise d'un bonus."
      }
    ],
    connexes: ['/machines-a-sous-gratuites/', '/machines-a-sous-meilleur-rtp/', '/machines-a-sous-loto-quebec/', '/jeux/']
  },

  {
    chemin: '/roulette-en-ligne/',
    nomFil: 'Roulette',
    parent: JEUX,
    titre: 'Roulette en ligne : règles, gains et meilleure version',
    description:
      'Roulette en ligne : européenne, française ou américaine, tableau des gains, avantage de la maison (2,70 % ou 5,26 %) et pourquoi la martingale échoue.',
    h1: 'Roulette en ligne : les règles, les gains et la version à choisir',
    chapeau:
      "La roulette semble simple, mais toutes les tables ne se valent pas. Le choix de la version change à lui seul l'avantage de la maison du simple au double.",
    modifie: '2026-11-04',
    resume: 'Les versions de roulette, les gains et la table à choisir.',
    sections: [
      {
        id: 'versions',
        titre: 'Européenne, française ou américaine',
        blocs: [
          {
            type: 'tableau',
            entetes: ['Version', 'Cases', 'Avantage de la maison'],
            lignes: [
              ['Européenne', '37 (0 à 36)', '2,70 %'],
              ['Française', '37, avec la règle « La Partage » ou « En Prison »', '1,35 % sur les chances simples, 2,70 % sur le reste'],
              ['Américaine', '38 (0, 00 et 1 à 36)', '5,26 %']
            ]
          },
          {
            type: 'encadre',
            ton: 'bon',
            titre: 'Notre conseil',
            texte:
              "Évitez la roulette américaine : le double zéro double presque l'avantage de la maison. Si vous misez sur rouge ou noir, pair ou impair, une table française avec « La Partage » est la plus avantageuse : vous récupérez la moitié de votre mise quand le zéro sort."
          }
        ]
      },
      {
        id: 'gains',
        titre: 'Le tableau des gains',
        blocs: [
          {
            type: 'tableau',
            entetes: ['Mise', 'Numéros couverts', 'Paiement'],
            lignes: [
              ['Plein', '1', '35 contre 1'],
              ['Cheval', '2', '17 contre 1'],
              ['Transversale', '3', '11 contre 1'],
              ['Carré', '4', '8 contre 1'],
              ['Sixain', '6', '5 contre 1'],
              ['Douzaine ou colonne', '12', '2 contre 1'],
              ['Chances simples (rouge, noir, pair, impair, manque, passe)', '18', '1 contre 1']
            ],
            legende: 'Sur une roulette européenne, toutes ces mises ont le même avantage pour la maison : 2,70 %.'
          }
        ]
      },
      {
        id: 'martingale',
        titre: 'Martingale et systèmes : pourquoi ça ne marche pas',
        blocs: [
          {
            type: 'p',
            texte:
              "La martingale consiste à doubler la mise après chaque perte pour « se refaire » au premier gain. Sur le papier, ça paraît imparable ; en pratique, une série de 7 ou 8 pertes, qui arrive plus souvent qu'on ne le croit, peut suffire à atteindre le plafond de mise de la table ou la limite de votre budget. Aucun système ne change l'avantage de la maison : il change seulement la forme de vos pertes."
          }
        ]
      },
      {
        id: 'direct',
        titre: 'Roulette virtuelle ou en direct',
        blocs: [
          {
            type: 'p',
            texte:
              "La roulette virtuelle utilise un générateur de nombres aléatoires et permet des mises très basses. La roulette en direct est tirée par un vrai croupier filmé en studio : plus d'ambiance, mais des mises minimales souvent plus élevées. Voir notre guide du [casino en direct](/casino-en-direct/)."
          }
        ]
      },
      {
        id: 'jeux',
        titre: 'Les roulettes en direct à connaître',
        blocs: [
          {
            type: 'p',
            texte:
              "Les studios de casino en direct proposent plusieurs variantes de la roulette européenne. Les plus jouées ajoutent des multiplicateurs sur les pleins, en échange d'un plein ordinaire moins bien payé. Nos fiches détaillent les règles officielles et le RTP de chacune."
          },
          { type: 'grille-tables', famille: 'roulette' },
          {
            type: 'p',
            texte:
              "Vous cherchez une roulette sans croupier ? [Auto Roulette](/roulette-en-ligne/auto-roulette/) lance la bille avec une roue automatique, en direct, de 60 à 80 fois par heure."
          }
        ]
      },
      { id: 'ou-jouer', titre: 'Où jouer à la roulette', blocs: [{ type: 'offres' }] }
    ],
    faq: [
      {
        q: 'Quelle roulette choisir en ligne ?',
        r: "La roulette européenne (2,70 %), ou mieux, la française avec la règle « La Partage » si vous misez sur les chances simples (1,35 %). Évitez l'américaine (5,26 %)."
      },
      {
        q: 'Peut-on gagner à la roulette en ligne avec une stratégie ?',
        r: "Aucune stratégie ne change l'avantage de la maison. Vous pouvez gagner sur une session, mais pas battre la roulette sur la durée."
      },
      {
        q: 'La roulette en ligne est-elle truquée ?',
        r: "Sur les casinos sérieux, la roulette virtuelle repose sur un générateur de nombres aléatoires contrôlé, et la roulette en direct sur une vraie roue filmée. Le casino n'a pas besoin de tricher : l'avantage de la maison lui suffit."
      }
    ],
    connexes: ['/jeux/', '/blackjack-en-ligne/', '/casino-en-direct/']
  },

  {
    chemin: '/blackjack-en-ligne/',
    nomFil: 'Blackjack',
    parent: JEUX,
    titre: 'Blackjack en ligne : règles, stratégie de base, conseils',
    description:
      "Blackjack en ligne : règles, stratégie de base qui ramène l'avantage de la maison vers 0,5 %, et les pièges du 6:5 et de l'assurance.",
    h1: 'Blackjack en ligne : les règles et la stratégie qui changent tout',
    chapeau:
      "C'est le jeu de table où vos décisions comptent le plus. Bien joué, le blackjack a l'un des plus faibles avantages pour la maison du casino ; mal joué, il coûte plusieurs fois plus cher.",
    modifie: '2026-11-04',
    resume: 'Les règles, la stratégie de base et les pièges à éviter.',
    sections: [
      {
        id: 'regles',
        titre: 'Les règles en 30 secondes',
        blocs: [
          {
            type: 'liste',
            items: [
              'Le but : battre le croupier en s’approchant de 21 sans le dépasser.',
              'Les figures valent 10, l’as vaut 1 ou 11, les autres cartes leur valeur.',
              'Un « blackjack » (as + carte de 10) dès les deux premières cartes paie en général 3 contre 2.',
              'Vous pouvez tirer, rester, doubler (une seule carte de plus, mise doublée) ou séparer une paire.',
              'Le croupier suit des règles fixes : il tire jusqu’à 17, avec des variantes selon la table.'
            ]
          },
          { type: 'illustration', nom: 'bj-mains' }
        ]
      },
      {
        id: 'strategie',
        titre: 'La stratégie de base',
        blocs: [
          {
            type: 'p',
            texte:
              "La stratégie de base est un tableau qui indique, pour chaque main, la décision mathématiquement la meilleure selon la carte visible du croupier. Suivie à la lettre, elle ramène l'avantage de la maison **de l'ordre de 0,5 %**, selon les règles de la table."
          },
          {
            type: 'liste',
            items: [
              'Restez à partir de 17 « dur » (sans as compté 11).',
              'Avec 12 à 16, restez si le croupier montre 2 à 6 (sauf 12 contre 2 ou 3, où l’on tire), tirez s’il montre 7 ou plus.',
              'Doublez 11 contre toutes les cartes du croupier sauf l’as (selon les règles), et 10 contre 2 à 9.',
              'Séparez toujours les as et les 8. Ne séparez jamais les 10 ni les 5.'
            ]
          },
          { type: 'illustration', nom: 'bj-strategie' }
        ]
      },
      {
        id: 'pieges',
        titre: 'Les deux pièges à éviter',
        blocs: [
          {
            type: 'encadre',
            ton: 'alerte',
            titre: 'Les tables qui paient le blackjack 6 contre 5',
            texte:
              "Un blackjack payé 6:5 au lieu de 3:2 augmente fortement l'avantage de la maison. Vérifiez toujours la mention sur le tapis ou dans les règles de la table."
          },
          { type: 'illustration', nom: 'bj-paiement' },
          {
            type: 'p',
            texte:
              "**L'assurance**, proposée quand le croupier montre un as, est une mise défavorable sur le long terme pour un joueur qui ne compte pas les cartes. La stratégie de base la refuse."
          }
        ]
      },
      {
        id: 'compter',
        titre: 'Compter les cartes en ligne ?',
        blocs: [
          {
            type: 'p',
            texte:
              "Inutile au blackjack virtuel : le paquet est en général remélangé à chaque main. Au blackjack en direct, le sabot est souvent coupé tôt, ce qui réduit fortement l'intérêt du comptage."
          }
        ]
      },
      {
        id: 'jeux',
        titre: 'Les blackjacks en direct et automatiques',
        blocs: [
          {
            type: 'p',
            texte:
              "Au-delà du blackjack classique, les éditeurs proposent des variantes aux règles très différentes : mises gratuites, multiplicateurs, places illimitées. Avant de choisir, regardez ce que chaque variante vous fait payer en échange."
          },
          { type: 'grille-tables', famille: 'blackjack' },
          {
            type: 'encadre',
            ton: 'bon',
            titre: 'Jouer au blackjack gratuitement',
            texte:
              "Evolution propose une démo gratuite officielle de [First Person Blackjack](/blackjack-en-ligne/first-person-blackjack/), sa version numérique sans croupier. C'est le meilleur moyen de s'entraîner à la stratégie de base sans miser."
          }
        ]
      },
      { id: 'ou-jouer', titre: 'Où jouer au blackjack', blocs: [{ type: 'offres' }] }
    ],
    faq: [
      {
        q: 'Quel est l’avantage de la maison au blackjack ?',
        r: "De l'ordre de 0,5 % avec la stratégie de base, selon les règles de la table. Sans stratégie, il est nettement plus élevé."
      },
      {
        q: 'Le blackjack compte-t-il pour débloquer un bonus ?',
        r: "Souvent peu ou pas du tout. Chez Rolletto, le bonus casino n'est valable que sur les machines à sous. Lisez la liste des jeux admissibles."
      },
      {
        q: 'Faut-il prendre l’assurance au blackjack ?',
        r: "Non, pas avec la stratégie de base : c'est une mise défavorable sur le long terme."
      }
    ],
    connexes: ['/jeux/', '/video-poker/', '/baccarat-en-ligne/']
  },

  {
    chemin: '/baccarat-en-ligne/',
    nomFil: 'Baccarat',
    parent: JEUX,
    titre: 'Baccarat en ligne : règles et meilleure mise',
    description:
      "Baccarat en ligne : règles simples, valeur des cartes, et pourquoi miser sur la Banque (1,06 %) plutôt que sur l'égalité (14,36 %). Le guide clair.",
    h1: 'Baccarat en ligne : les règles et la seule mise à retenir',
    chapeau: 'Au baccarat, vous ne prenez qu’une décision : sur qui miser. Elle suffit à faire passer l’avantage de la maison de 1 % à plus de 14 %.',
    modifie: MAJ,
    resume: 'Les règles du baccarat et la mise la plus avantageuse.',
    sections: [
      {
        id: 'regles',
        titre: 'Les règles',
        blocs: [
          {
            type: 'liste',
            items: [
              'Deux mains s’affrontent : la Banque et le Joueur. Vous misez sur la Banque, le Joueur ou l’égalité.',
              'Les cartes de 2 à 9 valent leur valeur, l’as vaut 1, les 10 et les figures valent 0.',
              'On ne garde que le chiffre des unités : 7 + 8 = 15, la main vaut 5.',
              'La main la plus proche de 9 gagne. La troisième carte est tirée automatiquement selon des règles fixes.'
            ]
          }
        ]
      },
      {
        id: 'mises',
        titre: 'Les trois mises comparées',
        blocs: [
          {
            type: 'tableau',
            entetes: ['Mise', 'Paiement', 'Avantage de la maison'],
            lignes: [
              ['Banque', '1 contre 1, moins 5 % de commission', '1,06 %'],
              ['Joueur', '1 contre 1', '1,24 %'],
              ['Égalité', '8 contre 1', '14,36 %']
            ],
            legende: 'Valeurs classiques pour un sabot de 8 jeux. Certaines variantes sans commission modifient ces chiffres.'
          },
          {
            type: 'encadre',
            ton: 'bon',
            titre: 'La règle d’or',
            texte: "Misez sur la Banque, ou sur le Joueur, mais évitez l'égalité : son paiement de 8 contre 1 cache l'un des pires avantages pour la maison du casino."
          }
        ]
      },
      { id: 'ou-jouer', titre: 'Où jouer au baccarat', blocs: [{ type: 'offres' }] }
    ],
    faq: [
      {
        q: 'Quelle est la meilleure mise au baccarat ?',
        r: "La Banque : 1,06 % d'avantage pour la maison avec la commission classique de 5 %. Le Joueur suit de près (1,24 %)."
      },
      {
        q: 'Pourquoi une commission sur la Banque ?',
        r: 'Parce que la Banque gagne un peu plus souvent que le Joueur, en raison des règles de tirage de la troisième carte. La commission compense cet avantage.'
      }
    ],
    connexes: ['/jeux/', '/blackjack-en-ligne/', '/casino-en-direct/']
  },

  {
    chemin: '/casino-en-direct/',
    nomFil: 'Casino en direct',
    parent: JEUX,
    titre: 'Casino en direct : croupiers en direct et jeux télévisés',
    description:
      'Casino en direct : croupiers filmés, roulette, blackjack, baccarat et jeux télévisés, mises minimales et bonus. Ce qu’il faut savoir avant de jouer.',
    h1: 'Casino en direct : jouer avec de vrais croupiers, depuis chez vous',
    chapeau:
      "Le casino en direct diffuse de vraies tables, avec de vrais croupiers, en continu. C'est le plus proche du Casino de Montréal sans quitter son salon, avec quelques différences à connaître.",
    modifie: '2026-11-04',
    resume: 'Les tables avec croupiers filmés et les jeux télévisés.',
    sections: [
      {
        id: 'fonctionnement',
        titre: 'Comment ça fonctionne',
        blocs: [
          {
            type: 'p',
            texte:
              "Les parties sont filmées dans des studios et diffusées en vidéo. Vous placez vos mises à l'écran pendant un temps limité, puis le croupier distribue les cartes ou lance la bille. Le résultat dépend de vraies cartes et de vraies roues, pas d'un générateur de nombres aléatoires."
          },
          {
            type: 'p',
            texte:
              "Evolution est le plus grand fournisseur du secteur : Celsius affiche par exemple 460 jeux Evolution dans son catalogue. On y trouve roulette, blackjack, baccarat, poker et des **jeux télévisés** à la roue de fortune et aux multiplicateurs."
          }
        ]
      },
      {
        id: 'differences',
        titre: 'Ce qui change par rapport aux jeux virtuels',
        blocs: [
          {
            type: 'tableau',
            entetes: ['', 'Jeux virtuels', 'Casino en direct'],
            lignes: [
              ['Résultat', 'Générateur de nombres aléatoires', 'Vraies cartes, vraie roue'],
              ['Rythme', 'Aussi rapide que vous voulez', 'Rythme de la table'],
              ['Mise minimale', 'Souvent très basse', 'Souvent plus élevée'],
              ['Connexion', 'Légère', 'Vidéo : connexion stable nécessaire'],
              ['Bonus', 'Contribuent souvent', 'Contribuent souvent peu ou pas du tout']
            ]
          }
        ]
      },
      {
        id: 'conseils',
        titre: 'Nos conseils',
        blocs: [
          {
            type: 'liste',
            items: [
              'Vérifiez la mise minimale avant de vous asseoir.',
              'Lisez les règles de la table : un blackjack payé 6:5 ou une roulette à double zéro coûtent plus cher.',
              'Ne comptez pas sur le casino en direct pour débloquer un bonus : la contribution est souvent faible ou nulle.',
              'Les jeux télévisés sont spectaculaires, mais leur avantage pour la maison est souvent plus élevé que celui du blackjack ou du baccarat.'
            ]
          }
        ]
      },
      {
        id: 'jeux',
        titre: 'Les jeux télévisés en direct',
        blocs: [
          {
            type: 'p',
            texte:
              "Les jeux télévisés sont la partie la plus spectaculaire du casino en direct : une roue, un présentateur et des bonus animés. Ils rendent en général un peu moins que la roulette ou le blackjack : on y joue d'abord pour le spectacle."
          },
          { type: 'grille-tables', famille: 'show' },
          {
            type: 'p',
            texte:
              "Les roulettes et blackjacks en direct ont aussi leurs fiches : [Lightning Roulette](/roulette-en-ligne/lightning-roulette/), [Auto Roulette](/roulette-en-ligne/auto-roulette/), [Free Bet Blackjack](/blackjack-en-ligne/free-bet-blackjack/) et [Infinite Blackjack](/blackjack-en-ligne/infinite-blackjack/). La plupart de ces jeux viennent d'[Evolution](/fournisseurs/evolution/), le principal studio de casino en direct."
          }
        ]
      },
      { id: 'ou-jouer', titre: 'Où jouer en direct', blocs: [{ type: 'offres' }] }
    ],
    faq: [
      {
        q: 'Le casino en direct est-il truqué ?',
        r: "Les parties sont réelles et filmées en continu. Sur un casino sérieux, le casino n'a pas besoin de tricher : l'avantage de la maison, prévu par les règles, lui suffit."
      },
      {
        q: 'Peut-on jouer en direct sur mobile ?',
        r: 'Oui, mais il faut une connexion stable : une coupure peut faire manquer le temps de mise.'
      }
    ],
    connexes: ['/jeux/', '/roulette-en-ligne/', '/blackjack-en-ligne/']
  },

  {
    chemin: '/video-poker/',
    nomFil: 'Vidéo poker',
    parent: JEUX,
    titre: 'Vidéo poker en ligne : Jacks or Better et tables de gains',
    description:
      'Vidéo poker en ligne : règles, lecture d’une table de gains (9/6 ou 8/5) et RTP de 99,54 % en Jacks or Better avec une stratégie optimale.',
    h1: 'Vidéo poker en ligne : le jeu où lire la table de gains rapporte',
    chapeau:
      "Le vidéo poker ressemble à une machine à sous, mais vos choix comptent. Bien joué sur la bonne machine, c'est l'un des jeux les plus avantageux du casino.",
    modifie: MAJ,
    resume: 'Les règles du vidéo poker et comment lire une table de gains.',
    sections: [
      {
        id: 'regles',
        titre: 'Les règles',
        blocs: [
          {
            type: 'liste',
            ordonnee: true,
            items: [
              'Vous misez et recevez cinq cartes.',
              'Vous choisissez les cartes à garder.',
              'Les autres sont remplacées une seule fois.',
              'Votre main finale est payée selon la table de gains affichée.'
            ]
          },
          {
            type: 'p',
            texte: "Dans la version la plus répandue, **Jacks or Better**, une paire de valets ou mieux est le minimum pour être payé."
          }
        ]
      },
      {
        id: 'table',
        titre: 'Lire la table de gains : 9/6 ou 8/5',
        blocs: [
          {
            type: 'p',
            texte:
              "Les joueurs désignent les machines par le paiement du full et de la couleur, pour une mise d'un crédit. Une machine « 9/6 » paie 9 pour un full et 6 pour une couleur ; une « 8/5 » paie 8 et 5. Ce détail change tout :"
          },
          {
            type: 'tableau',
            entetes: ['Jacks or Better', 'RTP avec une stratégie optimale'],
            lignes: [
              ['9/6 (« full pay »)', '99,54 %'],
              ['8/5', '97,30 %']
            ]
          },
          {
            type: 'p',
            texte:
              "Jouez aussi la mise maximale de crédits si votre budget le permet : sur la plupart des machines, la quinte flush royale paie nettement plus avec la mise maximale, et les RTP ci-dessus en tiennent compte."
          }
        ]
      },
      {
        id: 'conseils',
        titre: 'Les réflexes à prendre',
        blocs: [
          {
            type: 'liste',
            items: [
              'Gardez toujours une paire payante plutôt que de viser une couleur incertaine.',
              'Ne gardez jamais une carte isolée « au cas où » à côté d’une paire.',
              'Utilisez un tableau de stratégie pendant vos premières parties.',
              'Vérifiez si le vidéo poker compte pour un bonus : c’est souvent peu ou pas.'
            ]
          }
        ]
      },
      { id: 'ou-jouer', titre: 'Où jouer au vidéo poker', blocs: [{ type: 'offres' }] }
    ],
    faq: [
      {
        q: 'Quel est le meilleur vidéo poker ?',
        r: "Un Jacks or Better 9/6, qui rend 99,54 % avec une stratégie optimale. Vérifiez toujours la table de gains avant de jouer."
      },
      {
        q: 'Le vidéo poker est-il du vrai poker ?',
        r: "Non : vous jouez seul contre une table de gains, pas contre d'autres joueurs. Il n'y a ni bluff ni relance."
      }
    ],
    connexes: ['/jeux/', '/blackjack-en-ligne/', '/casino-en-ligne-le-plus-payant/']
  },
  ...crash
];

export default jeux;
