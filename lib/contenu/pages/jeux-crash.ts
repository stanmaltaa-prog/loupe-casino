import type { PageGuide } from './types';

const MAJ = '2026-11-03';
const JEUX = { nom: 'Jeux', chemin: '/jeux/' };
const CRASH = { nom: 'Jeux de crash', chemin: '/jeux-de-crash/' };

const SOURCE_AVIATOR = { titre: 'Spribe, fiche officielle d’Aviator', url: 'https://spribe.co/games/aviator' };
const SOURCE_PLINKO = { titre: 'Spribe, fiche officielle de Plinko', url: 'https://spribe.co/games/plinko' };
const SOURCE_CHICKEN = { titre: 'InOut Games, fiche officielle de Chicken Road', url: 'https://inout.games/en/game/chicken-road' };

const crash: PageGuide[] = [
  {
    chemin: '/jeux-de-crash/',
    nomFil: 'Jeux de crash',
    parent: JEUX,
    titre: 'Jeux de crash : Aviator, Chicken Road, Plinko expliqués',
    description:
      'Jeux de crash : comment marchent Aviator, Chicken Road et Plinko, leur RTP officiel (97 à 98 %), les vrais risques et les arnaques aux « prédicteurs ».',
    h1: 'Jeux de crash : le principe, les vrais chiffres et les pièges',
    chapeau:
      "Un multiplicateur grimpe, et vous devez encaisser avant qu'il s'arrête. Ces jeux très rapides sont devenus les plus recherchés du casino en ligne. Voici ce qu'ils rendent vraiment.",
    modifie: MAJ,
    resume: 'Le principe des jeux de crash, leur RTP officiel et les pièges.',
    sections: [
      {
        id: 'principe',
        titre: 'Le principe',
        blocs: [
          {
            type: 'p',
            texte:
              "Vous placez une mise, un multiplicateur commence à monter, et vous décidez quand encaisser. Si vous encaissez à temps, vous gagnez la mise multipliée ; si le jeu « crashe » avant, vous perdez la mise. Le moment du crash est tiré au hasard à chaque partie."
          },
          {
            type: 'p',
            texte:
              "Votre seule décision est le moment où vous encaissez. Elle change le profil de risque (petits gains fréquents ou gros gains rares), **pas** le taux de retour moyen, fixé par le fournisseur."
          }
        ]
      },
      {
        id: 'comparatif',
        titre: 'Les jeux les plus populaires comparés',
        blocs: [
          {
            type: 'tableau',
            entetes: ['Jeu', 'Fournisseur', 'RTP officiel', 'Particularité'],
            lignes: [
              ['[Aviator](/aviator/)', 'Spribe', '97 %', 'Multijoueur : on voit les mises des autres'],
              ['[Chicken Road](/chicken-road/)', 'InOut Games', '98 %', 'Solo, quatre niveaux de difficulté'],
              ['[Plinko](/plinko/) (version Spribe)', 'Spribe', '97 %', 'Bille qui rebondit sur des picots, difficulté réglable']
            ],
            legende: 'RTP relevés sur les fiches officielles des fournisseurs le 3 novembre 2026.'
          }
        ]
      },
      {
        id: 'risques',
        titre: 'Pourquoi ces jeux demandent de la prudence',
        blocs: [
          {
            type: 'liste',
            items: [
              '**Le rythme** : une partie dure quelques secondes. On peut miser des centaines de fois en une heure sans s’en rendre compte.',
              '**L’effet social** : voir les gains des autres joueurs en direct pousse à miser plus.',
              '**L’illusion de contrôle** : choisir le moment d’encaisser donne l’impression de maîtriser un résultat qui reste aléatoire.'
            ]
          },
          {
            type: 'encadre',
            ton: 'alerte',
            titre: 'Les « prédicteurs » sont des arnaques',
            texte:
              "Les applications, robots Telegram ou « signaux » qui promettent de prédire le prochain crash ne peuvent pas fonctionner : le résultat est tiré au moment de la partie. Ils servent à vous faire payer un abonnement, à récupérer vos accès ou à vous faire déposer sur un site douteux."
          }
        ]
      },
      {
        id: 'bonus',
        titre: 'Jeux de crash et bonus',
        blocs: [
          {
            type: 'p',
            texte:
              "Les jeux de crash ne comptent souvent pas, ou peu, pour débloquer un bonus de bienvenue. Chez Rolletto, par exemple, le bonus casino ne vaut que sur les machines à sous. Vérifiez la liste des jeux admissibles avant de jouer avec un bonus actif."
          }
        ]
      },
      { id: 'ou-jouer', titre: 'Où jouer aux jeux de crash', blocs: [{ type: 'offres' }] }
    ],
    faq: [
      {
        q: 'Existe-t-il une stratégie gagnante pour les jeux de crash ?',
        r: "Non. Encaisser tôt ou tard change la fréquence et la taille des gains, pas le taux de retour moyen fixé par le fournisseur (97 % pour Aviator, par exemple)."
      },
      {
        q: 'Les jeux de crash sont-ils truqués ?',
        r: "Les fournisseurs sérieux font tirer le résultat par un générateur aléatoire contrôlé. Le vrai danger vient plutôt des faux sites et des « prédicteurs »."
      }
    ],
    sources: [SOURCE_AVIATOR, SOURCE_CHICKEN, SOURCE_PLINKO],
    connexes: ['/aviator/', '/chicken-road/', '/plinko/']
  },

  {
    chemin: '/aviator/',
    nomFil: 'Aviator',
    parent: CRASH,
    titre: 'Aviator : règles, RTP de 97 % et où jouer au Québec',
    description:
      'Aviator de Spribe expliqué : comment jouer, RTP officiel de 97 %, double mise, chat et mises en direct, mythes sur les stratégies et où y jouer au Québec.',
    h1: 'Aviator : comment jouer, ce que le jeu rend, et les pièges à éviter',
    chapeau:
      "Un petit avion décolle, le multiplicateur grimpe, et il faut encaisser avant qu'il disparaisse. Aviator, du fournisseur Spribe, est le jeu de crash le plus célèbre au monde. Voici comment il fonctionne vraiment.",
    modifie: MAJ,
    resume: 'Les règles d’Aviator, son RTP officiel et les mythes à éviter.',
    offresHaut: ['betportal'],
    sections: [
      {
        id: 'fiche',
        titre: 'La fiche d’Aviator',
        blocs: [
          {
            type: 'tableau',
            entetes: ['Caractéristique', 'Valeur'],
            lignes: [
              ['Fournisseur', 'Spribe'],
              ['Type', 'Mini-jeu de crash multijoueur'],
              ['RTP officiel', '97 %'],
              ['Appareils', 'Ordinateur, tablette, mobile'],
              ['Fonctions sociales', 'Chat, mises en direct des autres joueurs, statistiques des plus gros gains'],
              ['Promotions intégrées', 'Paris gratuits, distributions aléatoires dans le chat (« Rain »)']
            ],
            legende: 'D’après la fiche officielle de Spribe, consultée le 3 novembre 2026.'
          }
        ]
      },
      {
        id: 'jouer',
        titre: 'Comment jouer à Aviator',
        blocs: [
          {
            type: 'liste',
            ordonnee: true,
            items: [
              'Choisissez votre mise avant le départ de l’avion.',
              'L’avion décolle et le multiplicateur augmente (1,5×, 2×, 10×…).',
              'Cliquez sur « Encaisser » quand vous le souhaitez : vous gagnez la mise multipliée.',
              'Si l’avion s’envole avant votre clic, la mise est perdue.'
            ]
          },
          {
            type: 'p',
            texte:
              "La plupart des versions permettent de placer **deux mises en même temps** et de régler un **encaissement automatique** à un multiplicateur choisi. Utile pour garder la tête froide, mais cela ne change pas le taux de retour."
          }
        ]
      },
      {
        id: 'rtp',
        titre: 'Ce que veut dire un RTP de 97 %',
        blocs: [
          {
            type: 'p',
            texte:
              "Sur un très grand nombre de parties, Aviator rend en moyenne 97 % des mises et en garde 3 %. Ce taux est le même que vous encaissiez à 1,2× ou à 20× : encaisser tôt donne des petits gains fréquents, encaisser tard des gains rares mais plus gros. Aucune option ne fait passer le jeu à votre avantage."
          },
          {
            type: 'p',
            texte:
              "Concrètement, si vous misez 1 $ toutes les 15 secondes pendant une heure, vous misez au total environ 240 $, et la perte moyenne attendue est d'environ 7 $. Le rythme rapide fait vite grimper le total misé : fixez-vous une limite de temps."
          }
        ]
      },
      {
        id: 'mythes',
        titre: 'Les mythes à oublier',
        blocs: [
          {
            type: 'liste',
            items: [
              '**« Après une série de petits crashs, un gros multiplicateur arrive »** : faux, chaque partie est indépendante.',
              '**« Les statistiques en direct montrent la tendance »** : elles montrent le passé, pas l’avenir.',
              '**« Les applications Aviator Predictor marchent »** : non, ce sont des arnaques. Lisez notre page sur les [jeux de crash](/jeux-de-crash/).'
            ]
          }
        ]
      },
      {
        id: 'ou-jouer',
        titre: 'Où jouer à Aviator au Québec',
        blocs: [
          {
            type: 'p',
            texte:
              "BetPortal affiche Aviator dans la section « Crash Games » de sa page d'accueil (relevé du 3 novembre 2026). Pour les autres casinos, vérifiez la présence du jeu dans leur lobby avant de déposer."
          },
          { type: 'offres', titre: 'Tous les casinos de notre comparatif' }
        ]
      }
    ],
    faq: [
      {
        q: 'Quel est le RTP d’Aviator ?',
        r: '97 %, selon la fiche officielle de Spribe.'
      },
      {
        q: 'Comment gagner à Aviator ?',
        r: "Il n'existe aucune méthode pour gagner à coup sûr. Le moment du crash est aléatoire. Vous pouvez seulement choisir votre niveau de risque et vous fixer une limite."
      },
      {
        q: 'Aviator est-il légal au Québec ?',
        r: "Aviator est un jeu proposé par des casinos en ligne. Au Québec, seul Loto-Québec est autorisé par le gouvernement ; les autres sites sont exploités depuis l'étranger. Voir notre guide sur la [légalité](/casino-en-ligne-legal-quebec/)."
      },
      {
        q: 'Peut-on jouer à Aviator sur mobile ?',
        r: 'Oui, Spribe indique que le jeu fonctionne sur ordinateur, tablette et mobile.'
      }
    ],
    sources: [SOURCE_AVIATOR],
    connexes: ['/jeux-de-crash/', '/chicken-road/', '/plinko/']
  },

  {
    chemin: '/chicken-road/',
    nomFil: 'Chicken Road',
    parent: CRASH,
    titre: 'Chicken Road : règles, RTP de 98 % et niveaux de difficulté',
    description:
      "Chicken Road d'InOut Games : comment jouer, RTP officiel de 98 %, les quatre niveaux de difficulté (easy à hardcore) et les risques avant de miser.",
    h1: 'Chicken Road : faire traverser la poule, sans se faire griller',
    chapeau:
      "Une poule doit traverser une route semée de pièges pour atteindre l'œuf d'or. Chaque pas augmente le multiplicateur, et le risque. Sorti en 2024, Chicken Road d'InOut Games est devenu l'un des jeux les plus recherchés.",
    modifie: MAJ,
    resume: 'Les règles de Chicken Road, son RTP de 98 % et ses quatre niveaux.',
    sections: [
      {
        id: 'fiche',
        titre: 'La fiche de Chicken Road',
        blocs: [
          {
            type: 'tableau',
            entetes: ['Caractéristique', 'Valeur'],
            lignes: [
              ['Fournisseur', 'InOut Games'],
              ['Joueurs', 'Solo'],
              ['RTP officiel', '98 %'],
              ['Niveaux de difficulté', 'Easy, Medium, Hard, Hardcore'],
              ['Date de sortie', '4 avril 2024']
            ],
            legende: 'D’après la fiche officielle d’InOut Games, consultée le 3 novembre 2026.'
          }
        ]
      },
      {
        id: 'jouer',
        titre: 'Comment jouer',
        blocs: [
          {
            type: 'liste',
            ordonnee: true,
            items: [
              'Choisissez votre mise et votre niveau de difficulté.',
              'Faites avancer la poule case par case : chaque pas réussi augmente le multiplicateur.',
              'Encaissez quand vous voulez pour empocher la mise multipliée.',
              'Si la poule tombe sur un piège avant votre encaissement, la mise est perdue.'
            ]
          }
        ]
      },
      {
        id: 'niveaux',
        titre: 'Bien choisir son niveau',
        blocs: [
          {
            type: 'p',
            texte:
              "Selon InOut Games, chaque niveau augmente les multiplicateurs possibles, mais aussi le risque à chaque pas. En **Easy**, les gains sont plus modestes mais plus fréquents ; en **Hardcore**, chaque pas peut être le dernier. Le RTP officiel de 98 % reste une moyenne sur le long terme, quel que soit le niveau."
          },
          {
            type: 'encadre',
            ton: 'info',
            titre: 'Bon à savoir',
            texte:
              "Avec un RTP de 98 %, Chicken Road garde en moyenne 2 % des mises : c'est moins que la plupart des machines à sous. Mais son rythme est très rapide : fixez-vous une limite de parties ou de temps."
          }
        ]
      },
      {
        id: 'versions',
        titre: 'Les autres versions',
        blocs: [
          {
            type: 'p',
            texte:
              "InOut Games a lancé d'autres déclinaisons, comme Chicken Road 2.0 et Chicken Road Vegas. Leurs règles et leur RTP peuvent différer de l'original : consultez l'écran d'information du jeu avant de jouer."
          }
        ]
      },
      {
        id: 'ou-jouer',
        titre: 'Où jouer à Chicken Road',
        blocs: [
          {
            type: 'p',
            texte: "Vérifiez dans le lobby du casino que la version proposée est bien celle d'InOut Games, avec son RTP affiché."
          },
          { type: 'offres' }
        ]
      }
    ],
    faq: [
      { q: 'Quel est le RTP de Chicken Road ?', r: "98 %, selon la fiche officielle d'InOut Games." },
      {
        q: 'Quel niveau choisir dans Chicken Road ?',
        r: "Easy pour des gains plus fréquents et plus petits, Hardcore pour des multiplicateurs plus élevés mais beaucoup plus de risque à chaque pas. Le niveau ne change pas le RTP moyen."
      },
      {
        q: 'Existe-t-il un truc pour gagner à Chicken Road ?',
        r: "Non. Le résultat de chaque pas est aléatoire. Méfiez-vous des vidéos et des groupes qui vendent des « signaux »."
      }
    ],
    sources: [SOURCE_CHICKEN],
    connexes: ['/jeux-de-crash/', '/aviator/', '/plinko/']
  },

  {
    chemin: '/plinko/',
    nomFil: 'Plinko',
    parent: CRASH,
    titre: 'Plinko argent réel : règles, RTP et niveaux de risque',
    description:
      'Plinko en ligne : la bille, les picots, les multiplicateurs, le RTP officiel de 97 % de la version Spribe et le réglage du risque.',
    h1: 'Plinko : la bille, les picots, et ce que le jeu rend vraiment',
    chapeau:
      "Inspiré d'un célèbre jeu télévisé américain, Plinko fait tomber une bille entre des picots jusqu'à une case multiplicatrice. Simple à comprendre, mais toutes les versions ne se valent pas.",
    modifie: MAJ,
    resume: 'Les règles de Plinko, son RTP et le réglage du risque.',
    sections: [
      {
        id: 'jouer',
        titre: 'Comment jouer',
        blocs: [
          {
            type: 'liste',
            ordonnee: true,
            items: [
              'Choisissez votre mise et votre niveau de risque.',
              'Réglez le nombre de rangées de picots si la version le permet.',
              'Lâchez la bille : elle rebondit au hasard et tombe dans une case.',
              'Votre mise est multipliée par la valeur de la case (qui peut être inférieure à 1).'
            ]
          },
          {
            type: 'p',
            texte:
              "Dans la version de Spribe, chacun des **trois boutons de couleur** lâche une bille d'un niveau de risque différent, et le nombre de picots est réglable. Un mode de jeu automatique est aussi proposé."
          }
        ]
      },
      {
        id: 'risque',
        titre: 'Le réglage du risque',
        blocs: [
          {
            type: 'p',
            texte:
              "Les cases du centre paient peu, souvent moins que la mise ; les cases des bords paient beaucoup, mais la bille y tombe rarement. Plus le risque choisi est élevé, plus l'écart entre le centre et les bords se creuse. Le RTP moyen, lui, reste fixé par le fournisseur."
          }
        ]
      },
      {
        id: 'versions',
        titre: 'Attention : il existe plusieurs Plinko',
        blocs: [
          {
            type: 'tableau',
            entetes: ['Version', 'RTP', 'Remarque'],
            lignes: [
              ['Plinko de Spribe', '97 %', 'Trois niveaux de risque par couleur, picots réglables'],
              ['Autres fournisseurs', 'Variable', 'Vérifiez le RTP dans l’écran d’aide du jeu']
            ]
          },
          {
            type: 'p',
            texte:
              "De nombreux fournisseurs ont sorti leur propre Plinko, avec des règles et des RTP différents. Avant de jouer, ouvrez l'écran d'information du jeu pour connaître le fournisseur et le taux de retour."
          }
        ]
      },
      { id: 'ou-jouer', titre: 'Où jouer au Plinko', blocs: [{ type: 'offres' }] }
    ],
    faq: [
      { q: 'Quel est le RTP de Plinko ?', r: 'Pour la version de Spribe, 97 % selon sa fiche officielle. Les versions d’autres fournisseurs peuvent être différentes.' },
      {
        q: 'Peut-on gagner de l’argent réel au Plinko ?',
        r: "Oui, sur un casino en ligne en argent réel. Mais comme tous les jeux de casino, le Plinko garde en moyenne une partie des mises sur le long terme."
      },
      {
        q: 'Existe-t-il une stratégie au Plinko ?',
        r: "Non. La trajectoire de la bille est aléatoire. Le réglage du risque change seulement la répartition des gains."
      }
    ],
    sources: [SOURCE_PLINKO],
    connexes: ['/jeux-de-crash/', '/aviator/', '/chicken-road/']
  }
];

export default crash;
