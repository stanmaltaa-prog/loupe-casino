import type { PageGuide } from './types';
import { MACHINES } from '@/lib/contenu/machines';
import { demoJeu } from '@/lib/demos';
import { CTA_ROLLETTO, CTA_BETPORTAL } from './canada-sport';

/**
 * Pages ouvertes après l'audit des concurrents (novembre 2026) : requêtes à fort volume
 * où les premiers résultats sont faibles ou absents en français du Québec.
 */
const MAJ = '2026-11-04';
const MACHINES_NOM = { nom: 'Machines à sous', chemin: '/machines-a-sous/' };
const SPORT = { nom: 'Paris sportifs', chemin: '/paris-sportifs-quebec/' };
const LQ = { nom: 'Loto-Québec en ligne', chemin: '/loto-quebec-casino-en-ligne/' };

const AVEC_DEMO = MACHINES.filter((m) => demoJeu(m.slug));
const INTEGREES = AVEC_DEMO.filter((m) => demoJeu(m.slug)?.mode === 'integree');
const EN_LIEN = AVEC_DEMO.filter((m) => demoJeu(m.slug)?.mode === 'lien');

const S = {
  mojEnLigne: { titre: 'Loto-Québec : Mise-o-jeu offert en ligne dès le 26 mars 2012', url: 'https://newswire.ca/fr/news-releases/le-pari-sportif-bientot-offert-en-ligne-509830191.html' },
  mojCotes: { titre: 'Loto-Québec : de meilleures cotes pour les parieurs en ligne (7 décembre 2015)', url: 'https://newswire.ca/fr/news-releases/mise-o-jeu---de-meilleures-cotes-pour-les-parieurs-en-ligne-560805621.html' },
  mojSimple: {
    titre: 'Loto-Québec : paris sur un seul événement dès le 27 août 2021',
    url: 'https://newswire.ca/fr/news-releases/du-nouveau-pour-les-paris-sportifs-loto-quebec-offrira-desormais-la-possibilite-de-parier-sur-un-seul-evenement-892221461.html'
  },
  mojApp: { titre: 'App Store : application Mise-o-jeu+ (Loto-Québec)', url: 'https://apps.apple.com/ca/app/mise-o-jeu/id6477622152' },
  casinoMtl: { titre: 'Loto-Québec : page officielle du Casino de Montréal', url: 'https://casinos.lotoquebec.com/fr/montreal/accueil' },
  casinos: { titre: 'Loto-Québec : casinos et salons de jeux', url: 'https://casinos.lotoquebec.com/fr' },
  wikiMtl: { titre: 'Wikipédia : Casino de Montréal', url: 'https://fr.wikipedia.org/wiki/Casino_de_Montr%C3%A9al' },
  lwPromo: { titre: 'Loto-Québec : offre express Light & Wonder (machines à sous en ligne)', url: 'https://www.espacejeux.com/fr/evenements/offre-promo-express-light-and-wonder' }
};

const opportunites: PageGuide[] = [
  {
    chemin: '/machines-a-sous-gratuites/',
    nomFil: 'Machines à sous gratuites',
    parent: MACHINES_NOM,
    titre: `Machines à sous gratuites : ${AVEC_DEMO.length} démos sans inscription`,
    description: `Jouez gratuitement à ${AVEC_DEMO.length} machines à sous en démo officielle, sans téléchargement ni inscription : Sweet Bonanza, Gates of Olympus, Le Bandit…`,
    h1: 'Machines à sous gratuites : les démos officielles, sans inscription',
    chapeau:
      "Toutes les démos de cette page viennent des éditeurs des jeux eux-mêmes. Vous jouez avec des crédits fictifs, sans téléchargement, sans compte et sans dépôt : le meilleur moyen de comprendre un jeu avant d'y miser un seul dollar.",
    modifie: MAJ,
    resume: `${AVEC_DEMO.length} démos officielles de machines à sous, sans inscription.`,
    sections: [
      {
        id: 'sur-le-site',
        titre: `${INTEGREES.length} démos à lancer directement ici`,
        blocs: [
          {
            type: 'p',
            texte:
              'Ces jeux de Pragmatic Play et de Play’n GO se lancent directement sur notre site. Ouvrez la fiche d’un jeu, puis cliquez sur « Jouer gratuitement » : la démo se charge dans la page, avec ses règles et ses chiffres juste en dessous.'
          },
          { type: 'grille-jeux', slugs: INTEGREES.map((m) => m.slug) }
        ]
      },
      {
        id: 'chez-l-editeur',
        titre: `${EN_LIEN.length} autres démos, sur le site de l’éditeur`,
        blocs: [
          {
            type: 'p',
            texte:
              'Pour ces jeux, l’éditeur ne permet pas d’intégrer la démo ailleurs que chez lui. Le bouton de la fiche ouvre la version gratuite officielle sur son site (Hacksaw Gaming, Nolimit City, NetEnt, Push Gaming…).'
          },
          { type: 'grille-jeux', slugs: EN_LIEN.map((m) => m.slug) }
        ]
      },
      {
        id: 'fonctionnement',
        titre: 'Comment fonctionne une démo',
        blocs: [
          {
            type: 'liste',
            items: [
              'Vous recevez des **crédits fictifs** : aucun dépôt, aucun compte, aucun téléchargement.',
              'Les règles, les symboles et les bonus sont ceux du jeu.',
              '**Aucun gain n’est réel** : rien ne peut être retiré.',
              'Le réglage de RTP de la démo peut être différent de celui installé par votre casino : vérifiez-le dans l’aide du jeu avant de miser.',
              'Certains éditeurs vous demandent de confirmer que vous avez 18 ans.'
            ]
          }
        ]
      },
      {
        id: 'pourquoi',
        titre: 'Ce qu’une démo vous apprend, et ce qu’elle ne dit pas',
        blocs: [
          {
            type: 'p',
            texte:
              "Une démo est utile pour comprendre comment se déclenche le bonus, à quoi ressemble un tour ordinaire et si le rythme du jeu vous plaît. C'est aussi la meilleure façon de sentir la **volatilité** : un jeu très volatil peut enchaîner des dizaines de tours sans rien de marquant."
          },
          {
            type: 'encadre',
            ton: 'alerte',
            titre: 'Une bonne série en démo ne prédit rien',
            texte:
              'Chaque tour est tiré au hasard, en démo comme en argent réel. Gagner en démo ne veut pas dire que vous gagnerez avec votre argent : fixez votre budget avant de passer en argent réel.'
          }
        ]
      },
      {
        id: 'argent-reel',
        titre: 'Passer à l’argent réel',
        blocs: [
          {
            type: 'p',
            texte:
              'Si vous décidez de jouer en argent réel, comparez d’abord les conditions des bonus : une mise de 30 fois ou plus change complètement ce que vaut une offre. Notre [classement des machines au meilleur RTP](/machines-a-sous-meilleur-rtp/) vous aide à choisir le jeu.'
          },
          { type: 'offres' }
        ]
      }
    ],
    faq: [
      {
        q: 'Peut-on jouer aux machines à sous gratuitement sans inscription ?',
        r: `Oui. Les ${AVEC_DEMO.length} démos de cette page sont les versions officielles des éditeurs, avec des crédits fictifs : aucun compte ni dépôt n'est nécessaire.`
      },
      { q: 'Faut-il télécharger quelque chose ?', r: 'Non. Les démos se lancent dans le navigateur, sur ordinateur comme sur téléphone.' },
      { q: 'Peut-on gagner de l’argent avec une démo ?', r: 'Non. Les crédits sont fictifs et rien ne peut être retiré.' },
      {
        q: 'La démo a-t-elle le même RTP que le jeu en casino ?',
        r: 'Pas forcément. Beaucoup de jeux existent en plusieurs réglages de RTP, et votre casino choisit le sien. Vérifiez-le dans l’aide du jeu avant de miser.'
      }
    ],
    connexes: ['/machines-a-sous/', '/machines-a-sous-meilleur-rtp/', '/jeux/']
  },

  {
    chemin: '/mise-o-jeu/',
    nomFil: 'Mise-o-jeu',
    parent: SPORT,
    titre: 'Mise-o-jeu : fonctionnement, cotes et alternatives (2026)',
    description:
      'Mise-o-jeu et Mise-o-jeu+ de Loto-Québec : paris en ligne ou chez un détaillant, paris simples, taux de retour et comment comparer les cotes avant de miser.',
    h1: 'Mise-o-jeu : comment fonctionnent les paris sportifs de Loto-Québec',
    chapeau:
      "Mise-o-jeu est le seul service de paris sportifs autorisé au Québec. Voici comment il fonctionne en ligne et chez les détaillants, ce qu'il rend en moyenne d'après Loto-Québec, et comment comparer ses cotes.",
    modifie: MAJ,
    resume: 'Les paris sportifs de Loto-Québec : en ligne, en point de vente, et ce qu’ils rendent.',
    sections: [
      {
        id: 'en-bref',
        titre: 'Mise-o-jeu en bref',
        blocs: [
          {
            type: 'p',
            texte:
              "**Mise-o-jeu** est le service de paris sportifs de Loto-Québec. Il existe chez les détaillants Loto-Québec et en ligne, sous le nom **Mise-o-jeu+**, avec l'application du même nom ou un compte lotoquebec.com. Les paris en ligne existent depuis le 26 mars 2012 ; ils se faisaient alors sur Espacejeux."
          },
          {
            type: 'p',
            texte:
              "Il faut avoir **18 ans**. Pour parier en ligne, l'application précise qu'elle est réservée à la province de Québec. Depuis le 27 août 2021, la loi canadienne permet aussi de parier sur **un seul match** : auparavant, seuls les paris combinés étaient permis."
          }
        ]
      },
      {
        id: 'en-ligne',
        titre: 'Mise-o-jeu+ en ligne ou Mise-o-jeu chez un détaillant',
        blocs: [
          {
            type: 'tableau',
            entetes: ['', 'Mise-o-jeu+ (en ligne)', 'Mise-o-jeu (chez un détaillant)'],
            lignes: [
              ['Où parier', 'Application Mise-o-jeu+ ou lotoquebec.com, avec un compte', 'Chez un détaillant Loto-Québec'],
              ['Pari sur un seul match', 'Possible sur toutes les questions, selon Loto-Québec', 'Possible sur les principales questions des grandes ligues'],
              ['Fonctions annoncées', 'Combinés sur un même match, cotes bonifiées, paris en direct, encaissement anticipé', 'Non précisé dans nos sources'],
              ['Outils de jeu responsable', 'Limites, pauses et autoexclusion dans le compte', 'Non applicable']
            ]
          },
          {
            type: 'p',
            texte:
              "Selon Loto-Québec, les cotes de Mise-o-jeu+ sont meilleures en ligne qu'en point de vente : en 2015, le taux de retour des principales questions passait de 84 % à 90 %, et jusqu'à 92 % dans certains cas, pour les paris en ligne."
          }
        ]
      },
      {
        id: 'offre',
        titre: 'Où trouver l’offre de paris Mise-o-jeu',
        blocs: [
          {
            type: 'p',
            texte:
              "En ligne, l'offre de paris s'affiche dans l'application Mise-o-jeu+ et dans la section paris sportifs de lotoquebec.com. Chez un détaillant, demandez l'offre du moment au comptoir. Les cotes changent jusqu'au début des matchs : vérifiez-les au moment de parier, pas la veille."
          }
        ]
      },
      {
        id: 'retour',
        titre: 'Comparer les cotes : le calcul qui dit tout',
        blocs: [
          {
            type: 'p',
            texte:
              "Le taux de retour se calcule à partir des cotes d'un même marché. Additionnez l'inverse de chaque cote : l'excédent au-dessus de 1 est la marge de l'opérateur."
          },
          {
            type: 'tableau',
            legende: 'Exemple : un match à deux issues',
            entetes: ['Cotes', 'Calcul', 'Marge', 'Taux de retour'],
            lignes: [
              ['1,90 et 1,90', '1 ÷ 1,90 + 1 ÷ 1,90 = 1,053', 'environ 5,3 %', 'environ 95 %'],
              ['1,80 et 1,80', '1 ÷ 1,80 + 1 ÷ 1,80 = 1,111', 'environ 11,1 %', 'environ 90 %']
            ]
          },
          {
            type: 'p',
            texte:
              "Faites ce calcul sur le même match chez Mise-o-jeu+ et ailleurs : plus le total est proche de 1, plus les cotes sont avantageuses. Nos guides [paris sur le hockey](/paris-sportifs-hockey/) et [paris sur le soccer](/paris-sportifs-soccer/) détaillent les marchés les plus courants."
          }
        ]
      },
      {
        id: 'alternatives',
        titre: 'Mise-o-jeu ou site de paris privé',
        blocs: [
          {
            type: 'tableau',
            entetes: ['', 'Mise-o-jeu+', 'Sites privés de notre comparatif'],
            lignes: [
              ['Autorisation au Québec', 'Oui, seul service autorisé', 'Non : licences étrangères ou aucune licence affichée'],
              ['En cas de litige', 'Une société d’État québécoise', 'L’exploitant, puis le régulateur étranger'],
              ['Bonus de bienvenue sport', 'Selon les promotions de Loto-Québec', 'Rolletto : 150 % jusqu’à 1 500 $, avec conditions de mise']
            ]
          },
          {
            type: 'encadre',
            ton: 'alerte',
            titre: 'Si vous choisissez un site privé',
            texte:
              "Ces sites ne sont pas autorisés par le Québec. Lisez les conditions du bonus sport avant de l'activer : elles imposent souvent des paris combinés et une cote minimale. Notre guide [paris sportifs au Québec](/paris-sportifs-quebec/) compare les offres en détail."
          },
          CTA_ROLLETTO,
          CTA_BETPORTAL
        ]
      }
    ],
    faq: [
      {
        q: 'Qu’est-ce que Mise-o-jeu+ ?',
        r: "La version en ligne de Mise-o-jeu, le service de paris sportifs de Loto-Québec. On y parie avec l'application Mise-o-jeu+ ou un compte lotoquebec.com."
      },
      { q: 'Peut-on faire un pari sur un seul match avec Mise-o-jeu ?', r: 'Oui, depuis le 27 août 2021. En ligne, toutes les questions peuvent faire l’objet d’un pari simple, selon Loto-Québec.' },
      { q: 'Faut-il être au Québec pour parier avec Mise-o-jeu+ ?', r: 'Oui. L’application est réservée à la province de Québec, et il faut avoir 18 ans et un compte lotoquebec.com.' },
      {
        q: 'Quel est le taux de retour de Mise-o-jeu ?',
        r: "Selon Loto-Québec, il est passé de 84 % à 90 % (jusqu'à 92 % dans certains cas) pour les principales questions en ligne, en 2015. Le meilleur moyen de le vérifier aujourd'hui est de le calculer à partir des cotes."
      }
    ],
    sources: [S.mojEnLigne, S.mojCotes, S.mojSimple, S.mojApp],
    connexes: ['/paris-sportifs-quebec/', '/paris-sportifs-hockey/', '/paris-sportifs-soccer/', '/loto-quebec-casino-en-ligne/']
  },

  {
    chemin: '/casino-de-montreal-en-ligne/',
    nomFil: 'Casino de Montréal en ligne',
    parent: LQ,
    titre: 'Casino de Montréal en ligne : peut-on y jouer de chez soi ?',
    description:
      "Le Casino de Montréal n'a pas de version en ligne à son nom. Ce que propose Loto-Québec à distance, ce qui change par rapport au casino, et les autres choix.",
    h1: 'Casino de Montréal en ligne : ce qui existe vraiment',
    chapeau:
      "Beaucoup de joueurs cherchent à retrouver le Casino de Montréal sur Internet. Voici ce que propose réellement Loto-Québec en ligne, et ce qui reste propre au casino de l'île Notre-Dame.",
    modifie: MAJ,
    resume: 'Ce que Loto-Québec propose en ligne, comparé au Casino de Montréal.',
    sections: [
      {
        id: 'en-bref',
        titre: 'Le Casino de Montréal, en bref',
        blocs: [
          {
            type: 'p',
            texte:
              "Le Casino de Montréal a ouvert le 9 octobre 1993 sur l'**île Notre-Dame**, dans les anciens pavillons de la France et du Québec d'Expo 67. Il est exploité par la Société des casinos du Québec, filiale de Loto-Québec. Selon Wikipédia, il compte environ 3 000 machines à sous et plus de 80 tables de jeu, sur six étages."
          },
          {
            type: 'p',
            texte:
              "Il faut avoir **18 ans** pour y entrer. Sur place, le casino propose aussi un salon de poker, des lots progressifs, un espace ARcade, des restaurants (Le Montréal, Pavillon 67, L'instant) et des spectacles au Cabaret du Casino, selon son site officiel."
          }
        ]
      },
      {
        id: 'en-ligne',
        titre: 'Peut-on jouer au Casino de Montréal en ligne ?',
        blocs: [
          {
            type: 'p',
            texte:
              "Pas sous ce nom. Le site officiel du Casino de Montréal renvoie vers les **jeux en ligne de Loto-Québec** : machines à sous, casino en direct, poker et bingo. C'est la même société d'État, mais une offre distincte : les machines et les tables du casino ne sont pas accessibles à distance."
          },
          {
            type: 'tableau',
            entetes: ['', 'Au Casino de Montréal', 'En ligne avec Loto-Québec'],
            lignes: [
              ['Machines à sous', 'Environ 3 000, selon Wikipédia', 'Oui, section casino de lotoquebec.com'],
              ['Jeux de table', 'Plus de 80 tables, selon Wikipédia', 'Casino en direct, avec croupier en vidéo'],
              ['Poker', 'Salon de poker', 'Poker en ligne'],
              ['Spectacles et restaurants', 'Oui', 'Non']
            ]
          },
          {
            type: 'p',
            texte:
              "Notre page [Loto-Québec en ligne](/loto-quebec-casino-en-ligne/) détaille ce que propose son site, et nos [machines à sous Loto-Québec](/machines-a-sous-loto-quebec/) expliquent où trouver ses machines."
          }
        ]
      },
      {
        id: 'autres-casinos',
        titre: 'Les autres casinos et salons de Loto-Québec',
        blocs: [
          {
            type: 'liste',
            items: [
              '**Casinos** : Casino de Montréal, Hôtel-Casino de Charlevoix (La Malbaie), Hôtel-Casino du Lac-Leamy et Casino de Mont-Tremblant.',
              '**Salons de jeux** : Québec, Trois-Rivières et Rimouski.'
            ]
          }
        ]
      },
      {
        id: 'prives',
        titre: 'Les casinos en ligne privés',
        blocs: [
          {
            type: 'encadre',
            ton: 'alerte',
            titre: 'Avant de choisir un site privé',
            texte:
              "Ces sites ne sont pas autorisés par le Québec : ils sont exploités depuis l'étranger. Choisissez un exploitant identifiable, lisez les règles de retrait avant de déposer, et commencez par un petit dépôt. Voir [casino en ligne légal au Québec](/casino-en-ligne-legal-quebec/)."
          },
          { type: 'offres', titre: 'Les sites privés que nous comparons' }
        ]
      }
    ],
    faq: [
      {
        q: 'Le Casino de Montréal a-t-il un site de jeu en ligne ?',
        r: "Non, pas à son nom. Son site renvoie vers les jeux en ligne de Loto-Québec, sur lotoquebec.com : machines à sous, casino en direct, poker et bingo."
      },
      { q: 'Quel âge faut-il avoir pour jouer au Casino de Montréal ?', r: '18 ans, sur place comme en ligne.' },
      { q: 'Où se trouve le Casino de Montréal ?', r: "Sur l'île Notre-Dame, à Montréal, dans les anciens pavillons de la France et du Québec d'Expo 67." },
      { q: 'Combien de machines à sous y a-t-il au Casino de Montréal ?', r: 'Environ 3 000, selon Wikipédia, et plus de 80 tables de jeu.' }
    ],
    sources: [S.casinoMtl, S.casinos, S.wikiMtl],
    connexes: ['/loto-quebec-casino-en-ligne/', '/machines-a-sous-loto-quebec/', '/casino-en-ligne-legal-quebec/', '/casino-en-direct/']
  },

  {
    chemin: '/machines-a-sous-loto-quebec/',
    nomFil: 'Machines à sous Loto-Québec',
    parent: MACHINES_NOM,
    titre: 'Machines à sous Loto-Québec : en ligne, au casino et en salon',
    description:
      'Où jouer aux machines à sous de Loto-Québec : en ligne sur lotoquebec.com, dans ses 4 casinos et ses salons de jeux. Fournisseurs, mises et RTP à vérifier.',
    h1: 'Machines à sous Loto-Québec : où y jouer et ce qu’il faut vérifier',
    chapeau:
      "Loto-Québec propose des machines à sous en ligne, dans ses casinos et dans ses salons de jeux. Voici où les trouver, ce qu'on sait de son offre en ligne, et comment la comparer avant de miser.",
    modifie: MAJ,
    resume: 'Où trouver les machines à sous de Loto-Québec, en ligne et sur place.',
    sections: [
      {
        id: 'ou',
        titre: 'Où jouer aux machines à sous de Loto-Québec',
        blocs: [
          {
            type: 'liste',
            items: [
              '**En ligne** : sur lotoquebec.com, section casino, avec un compte. Il faut avoir 18 ans et se trouver au Québec.',
              '**Dans ses 4 casinos** : Montréal, Charlevoix (La Malbaie), Lac-Leamy et Mont-Tremblant. Le Casino de Montréal compte à lui seul environ 3 000 machines, selon Wikipédia.',
              '**Dans ses salons de jeux** : Québec, Trois-Rivières et Rimouski.'
            ]
          }
        ]
      },
      {
        id: 'en-ligne',
        titre: 'L’offre en ligne : fournisseurs et mises',
        blocs: [
          {
            type: 'p',
            texte:
              "Lors d'une promotion passée, Loto-Québec a présenté **Light & Wonder** comme « notre fournisseur » de machines à sous en ligne ; la même page citait aussi Big Time Gaming et Lightning Box. Exemples de mises affichées sur cette page :"
          },
          {
            type: 'tableau',
            entetes: ['Jeu', 'Mise par tour'],
            lignes: [
              ['Extra Chilli', 'De 0,20 $ à 50 $'],
              ['Jewel of the Dragon Valley of the Tiger', 'De 0,20 $ à 20 $'],
              ['Lightning Gorilla', 'De 0,40 $ à 20 $']
            ]
          },
          {
            type: 'p',
            texte:
              "Les règles de fonctionnement de cette promotion prévoyaient aussi une durée minimale de trois secondes par partie. Le catalogue change régulièrement : consultez la section casino de lotoquebec.com pour la liste à jour."
          }
        ]
      },
      {
        id: 'rtp',
        titre: 'Le RTP : vérifiez dans l’aide du jeu',
        blocs: [
          {
            type: 'p',
            texte:
              "Nous n'avons pas trouvé de RTP publié pour les machines en ligne de Loto-Québec sur les pages consultées. Comme ailleurs, il figure en général dans l'aide ou les règles de chaque jeu. Comparez-le avec nos fiches : notre [classement des machines au meilleur RTP](/machines-a-sous-meilleur-rtp/) donne la meilleure version publiée de chaque jeu."
          }
        ]
      },
      {
        id: 'demo',
        titre: 'Essayer avant de jouer',
        blocs: [
          {
            type: 'p',
            texte: `Pour tester un jeu sans compte ni dépôt, nos [machines à sous gratuites](/machines-a-sous-gratuites/) donnent accès aux démos officielles de ${AVEC_DEMO.length} jeux. Ce ne sont pas les jeux du catalogue de Loto-Québec, mais ce sont les plus recherchés au Canada.`
          }
        ]
      },
      {
        id: 'prives',
        titre: 'Loto-Québec ou casino privé',
        blocs: [
          {
            type: 'tableau',
            entetes: ['', 'Loto-Québec', 'Sites privés de notre comparatif'],
            lignes: [
              ['Autorisation au Québec', 'Oui, seul site autorisé', 'Non : licences étrangères ou aucune licence affichée'],
              ['En cas de litige', 'Une société d’État québécoise', 'L’exploitant, puis le régulateur étranger'],
              ['Bonus de bienvenue', 'Selon les promotions du moment', 'Jusqu’à 5 500 $ chez Rolletto, avec une mise de 30 fois en 5 jours']
            ]
          },
          {
            type: 'encadre',
            ton: 'alerte',
            titre: 'Si vous choisissez un site privé',
            texte:
              "Ces sites ne sont pas autorisés par le Québec. Lisez les règles de retrait avant de déposer et commencez par un petit montant. Voir [casino en ligne légal au Québec](/casino-en-ligne-legal-quebec/)."
          },
          { type: 'offres', titre: 'Les sites privés que nous comparons' }
        ]
      }
    ],
    faq: [
      { q: 'Peut-on jouer aux machines à sous de Loto-Québec en ligne ?', r: 'Oui, sur lotoquebec.com, section casino, avec un compte. Il faut avoir 18 ans et se trouver au Québec.' },
      {
        q: 'Quels fournisseurs de machines à sous utilise Loto-Québec en ligne ?',
        r: "Lors d'une promotion, Loto-Québec a présenté Light & Wonder comme son fournisseur ; la page citait aussi Big Time Gaming et Lightning Box. Le catalogue complet est sur lotoquebec.com."
      },
      { q: 'Où sont les casinos de Loto-Québec ?', r: 'À Montréal, à Charlevoix (La Malbaie), au Lac-Leamy et à Mont-Tremblant. Il existe aussi des salons de jeux à Québec, Trois-Rivières et Rimouski.' },
      { q: 'Quel est le RTP des machines à sous de Loto-Québec ?', r: "Nous ne l'avons pas trouvé publié. Vérifiez-le dans l'aide de chaque jeu avant de miser." }
    ],
    sources: [S.casinos, S.lwPromo, S.wikiMtl],
    connexes: ['/loto-quebec-casino-en-ligne/', '/casino-de-montreal-en-ligne/', '/machines-a-sous-gratuites/', '/machines-a-sous-meilleur-rtp/']
  }
];

export default opportunites;
