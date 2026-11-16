import type { PageGuide } from './types';

/**
 * Rubrique Actualités : analyses courtes et sourcées sur le jeu en ligne au Québec.
 * Chaque article est une PageGuide (rendu RenduGuide, plan du site automatique) placée sous /actualites/.
 * La date de publication est `modifie`. Le fil RSS (/actualites/flux-rss/) et l'index lisent ARTICLES.
 * Pas d'offres en haut des articles : ce sont des pages d'information, faites pour être citées.
 */

const PARENT = { nom: 'Actualités', chemin: '/actualites/' };
const CFP_114 =
  'https://www.assnat.qc.ca/Media/Process.aspx?MediaId=ANQ.Vigie.Bll.DocumentGenerique_220733&process=Default&token=ZyMoxNwUn8ikQ+TRKYwPCjWrKwg+vIv9rjij7p3xLGTZDmLVSmJLoqe/vG7/YWzz';
const CFP_090 =
  'https://www.assnat.qc.ca/Media/Process.aspx?MediaId=ANQ.Vigie.Bll.DocumentGenerique_211151&process=Default&token=ZyMoxNwUn8ikQ+TRKYwPCjWrKwg+vIv9rjij7p3xLGTZDmLVSmJLoqe/vG7/YWzz';

export const ARTICLES: PageGuide[] = [
  {
    chemin: '/actualites/loto-quebec-jeu-en-ligne-590-millions/',
    parent: PARENT,
    nomFil: 'Loto-Québec : 590 M$ en ligne',
    titre: 'Loto-Québec : 590 M$ tirés du jeu en ligne en 2025-2026',
    description:
      'Le jeu en ligne a rapporté 590,4 M$ à Loto-Québec en 2025-2026, environ 21 % de plus en un an, selon ses réponses à l’Assemblée nationale.',
    h1: 'Le jeu en ligne a rapporté 590 M$ à Loto-Québec en 2025-2026',
    chapeau:
      'Selon ses réponses déposées à l’Assemblée nationale, Loto-Québec a tiré 590,4 M$ du jeu en ligne en 2025-2026 (états financiers non vérifiés), environ 21 % de plus qu’un an plus tôt. Le jeu en ligne pèse désormais près d’un cinquième de ses revenus.',
    modifie: '2026-11-16',
    offresHaut: [],
    resume: 'Le jeu en ligne a rapporté 590,4 M$ à Loto-Québec en 2025-2026, environ 21 % de plus qu’un an plus tôt.',
    sections: [
      {
        id: 'chiffres',
        titre: 'Les chiffres',
        blocs: [
          {
            type: 'tableau',
            legende: 'Produits du jeu en ligne sur lotoquebec.com (loteries, casino et paris sportifs). Parts : calcul Loupe Casino sur les revenus des Comptes publics du Québec.',
            entetes: ['Exercice', 'Jeu en ligne', 'Part des revenus de Loto-Québec'],
            lignes: [
              ['2023-2024', '438,5 M$', 'Non calculée'],
              ['2024-2025', '488,8 M$', 'Environ 16 %'],
              ['2025-2026', '**590,4 M$** (non vérifiés)', '**Environ 19 %**']
            ]
          },
          {
            type: 'p',
            texte:
              'La croissance s’accélère : +11,7 % entre 2023-2024 et 2024-2025, puis environ +21 % l’année suivante (calculs Loupe Casino). Sur la même période, les revenus totaux de Loto-Québec ont franchi pour la première fois 3 G$, avec un surplus de 1 526 M$ selon les Comptes publics.'
          }
        ]
      },
      {
        id: 'source',
        titre: 'D’où viennent ces chiffres',
        blocs: [
          {
            type: 'p',
            texte:
              'Loto-Québec ne détaille pas le jeu en ligne dans ses communiqués. Le montant figure dans ses réponses aux questions de l’opposition, déposées lors de l’étude des crédits le 12 mai 2026. On y apprend aussi que la société a consacré 8,6 M$ à la publicité du jeu en ligne en 2024-2025 et prévoyait 8,9 M$ en 2025-2026. Le nombre de comptes joueurs, lui, reste confidentiel.'
          }
        ]
      },
      {
        id: 'part-de-marche',
        titre: 'Combien de joueurs restent hors de lotoquebec.com ?',
        blocs: [
          {
            type: 'p',
            texte:
              'Personne ne le sait avec certitude. Loto-Québec affirme que 81 % des joueurs en ligne québécois choisissent son site, sans préciser sa méthode. Une coalition d’exploitants privés avance au contraire que 73 % des joueurs utilisent des sites privés. La dernière estimation officielle du marché non autorisé date d’un sondage de 2012. Tous les chiffres et leurs sources : [le jeu en ligne au Québec en chiffres](/statistiques-jeu-en-ligne-quebec/).'
          }
        ]
      },
      {
        id: 'joueurs',
        titre: 'Ce que ça change pour les joueurs',
        blocs: [
          {
            type: 'p',
            texte:
              'Rien sur le plan légal : Loto-Québec reste le seul exploitant autorisé au Québec, et les sites étrangers sont dans une zone grise. Les explications : [casino en ligne légal au Québec, la loi expliquée](/casino-en-ligne-legal-quebec/). Si vous jouez sur un site étranger, vérifiez l’exploitant, la licence et les règles de retrait avant de déposer : c’est ce que mesure [notre classement des casinos en ligne au Québec](/#classement).'
          }
        ]
      }
    ],
    faq: [
      {
        q: 'Combien Loto-Québec gagne-t-elle avec le jeu en ligne ?',
        r: '590,4 M$ de produits en 2025-2026 selon ses réponses à l’Assemblée nationale (états financiers non vérifiés), environ 21 % de plus qu’en 2024-2025.'
      },
      {
        q: 'Loto-Québec est-elle le seul casino en ligne légal au Québec ?',
        r: 'Oui. Les sites étrangers ne sont pas autorisés par le gouvernement du Québec : c’est une zone grise, expliquée dans notre guide sur la légalité.'
      }
    ],
    sources: [
      { titre: 'Loto-Québec, réponses aux demandes de renseignements, étude des crédits 2026-2027 (CFP-114, 12 mai 2026)', url: CFP_114 },
      { titre: 'Loto-Québec, réponses aux demandes de renseignements, étude des crédits 2025-2026 (CFP-090, 7 mai 2025)', url: CFP_090 },
      { titre: 'Comptes publics du Québec 2025-2026, volume 1', url: 'https://cdn-contenu.quebec.ca/cdn-contenu/adm/min/finances/publications-adm/Comptes-publics/FR/CPTFR_vol1-2025-2026.pdf' },
      { titre: 'Loto-Québec, communiqué sur le rapport annuel 2025-2026 (3 juin 2026)', url: 'https://societe.lotoquebec.com/fr/medias-et-partenaires/communiques-de-presse/2026/juin/rapport-annuel-2025-2026-06-03' }
    ],
    connexes: ['/statistiques-jeu-en-ligne-quebec/', '/loto-quebec-casino-en-ligne/', '/casino-en-ligne-legal-quebec/']
  },
  {
    chemin: '/actualites/kahnawake-plaintes-joueurs-2025/',
    parent: PARENT,
    nomFil: 'Kahnawà:ke : plaintes 2025',
    titre: 'Kahnawà:ke : 1 143 plaintes de joueurs reçues en 2025',
    description:
      'La Commission des jeux de Kahnawà:ke a reçu 1 143 plaintes de joueurs en 2025 et en a réglé 150 en leur faveur. Les chiffres et les recours.',
    h1: 'Commission des jeux de Kahnawà:ke : 1 143 plaintes de joueurs en 2025',
    chapeau:
      'La Commission des jeux de Kahnawà:ke, qui délivre des permis à des casinos en ligne accessibles depuis le Québec, a reçu 1 143 plaintes de joueurs en 2025. Elle en a résolu 746, dont 150 en faveur du joueur.',
    modifie: '2026-11-16',
    offresHaut: [],
    resume: 'La Commission des jeux de Kahnawà:ke a reçu 1 143 plaintes de joueurs en 2025, dont 150 réglées en faveur du joueur.',
    sections: [
      {
        id: 'chiffres',
        titre: 'Les chiffres de 2025',
        blocs: [
          {
            type: 'tableau',
            legende: 'Source : résumé 2025 du règlement des différends, publié par la Commission le 15 janvier 2026.',
            entetes: ['Étape', 'Nombre'],
            lignes: [
              ['Plaintes reçues', '1 143'],
              ['Plaintes validées', '756'],
              ['Plaintes résolues', '746'],
              ['Résolues en faveur du joueur', '**150** (20,11 % des plaintes résolues)']
            ]
          }
        ]
      },
      {
        id: 'commission',
        titre: 'Qui est la Commission des jeux de Kahnawà:ke ?',
        blocs: [
          {
            type: 'p',
            texte:
              'Elle réglemente le jeu interactif depuis 1999, depuis le territoire mohawk de Kahnawà:ke, près de Montréal. Sa liste publique compte 53 exploitants, avec une mise à jour indiquée au 28 septembre 2023. Attention : son permis n’est pas une autorisation du gouvernement du Québec, où seul Loto-Québec peut exploiter des jeux en ligne.'
          }
        ]
      },
      {
        id: 'recours',
        titre: 'Quel recours pour un joueur du Québec ?',
        blocs: [
          {
            type: 'p',
            texte:
              'Pour un casino titulaire d’un permis de Kahnawà:ke, la Commission reçoit les plaintes des joueurs. C’est le cas des casinos du groupe [Casino Rewards](/casino-rewards/), comme Yukon Gold ou Zodiac, qui affichent la licence n° 00972. Pour un casino sous une autre licence étrangère, le recours dépend de ce régulateur, et aucun organisme québécois ne peut trancher.'
          },
          {
            type: 'liste',
            items: [
              'Avant de déposer, notez l’exploitant et le numéro de licence affichés en bas du site.',
              'Gardez des captures d’écran des conditions du bonus et de vos échanges avec le service client.',
              'Écrivez d’abord au casino ; en cas d’échec, adressez-vous au régulateur qui a délivré la licence.'
            ]
          },
          {
            type: 'p',
            texte: 'Le contexte légal complet : [casino en ligne légal au Québec](/casino-en-ligne-legal-quebec/). Les autres chiffres du secteur : [le jeu en ligne au Québec en chiffres](/statistiques-jeu-en-ligne-quebec/).'
          }
        ]
      }
    ],
    faq: [
      {
        q: 'Combien de plaintes la Commission des jeux de Kahnawà:ke a-t-elle reçues en 2025 ?',
        r: '1 143 plaintes de joueurs, dont 756 validées et 746 résolues ; 150 l’ont été en faveur du joueur.'
      },
      {
        q: 'Un permis de Kahnawà:ke est-il une autorisation du Québec ?',
        r: 'Non. Au Québec, seul Loto-Québec est autorisé à exploiter des jeux en ligne.'
      }
    ],
    sources: [
      { titre: 'Commission des jeux de Kahnawà:ke, résumé 2025 du règlement des différends (15 janvier 2026)', url: 'https://gamingcommission.ca/wp-content/uploads/2026/01/2025-DisputeResolutionSummary.pdf' },
      { titre: 'Commission des jeux de Kahnawà:ke, titulaires de permis', url: 'https://gamingcommission.ca/interactive-gaming/permit-holders/' }
    ],
    connexes: ['/casino-rewards/', '/casino-en-ligne-fiable/', '/casino-en-ligne-legal-quebec/']
  },
  {
    chemin: '/actualites/ontario-quebec-jeu-en-ligne/',
    parent: PARENT,
    nomFil: 'Ontario et Québec',
    titre: 'Jeu en ligne : ce que l’Ontario fait autrement que le Québec',
    description:
      'Ontario : 49 exploitants autorisés et plus de 103 G$ de mises. Québec : le seul Loto-Québec. Deux modèles de jeu en ligne comparés, chiffres à l’appui.',
    h1: 'Ontario et Québec : deux modèles de jeu en ligne, deux résultats',
    chapeau:
      'En Ontario, des exploitants privés autorisés ont reçu plus de 103 G$ de mises en 2025-2026. Au Québec, un seul exploitant est autorisé, Loto-Québec, qui revendique 81 % des joueurs en ligne. Voici ce que disent les chiffres, et ce qu’ils ne disent pas.',
    modifie: '2026-11-16',
    offresHaut: [],
    resume: 'Ontario et Québec comparés : 49 exploitants privés autorisés d’un côté, le monopole de Loto-Québec de l’autre.',
    sections: [
      {
        id: 'comparaison',
        titre: 'Les deux modèles en chiffres',
        blocs: [
          {
            type: 'tableau',
            legende: 'Ontario : iGaming Ontario (mai et septembre 2026). Québec : réponses de Loto-Québec à l’étude des crédits (mai 2026).',
            entetes: ['', 'Québec', 'Ontario'],
            lignes: [
              ['Modèle', 'Monopole de Loto-Québec', 'Exploitants privés autorisés depuis 2022'],
              ['Exploitants autorisés', '1', '49 exploitants, 84 sites (septembre 2026)'],
              ['2025-2026', '590,4 M$ de produits du jeu en ligne (non vérifiés)', 'Plus de 103 G$ de mises, plus de 4,2 G$ de revenus de jeu (non vérifiés)'],
              ['Joueurs sur les sites autorisés', '81 % selon Loto-Québec', '91,1 % selon une étude Ipsos']
            ]
          }
        ]
      },
      {
        id: 'prudence',
        titre: 'Deux chiffres qui ne se comparent pas directement',
        blocs: [
          {
            type: 'p',
            texte:
              'Le taux ontarien de 91,1 % vient d’une étude Ipsos publiée par iGaming Ontario. Le chiffre québécois de 81 % vient de Loto-Québec, qui n’en précise pas la méthode, et une coalition d’exploitants privés avance au contraire que 73 % des Québécois jouent sur des sites privés. Les mises ontariennes, elles, additionnent chaque montant misé : elles ne se comparent pas aux produits de Loto-Québec.'
          }
        ]
      },
      {
        id: 'suite',
        titre: 'Et au Québec, la suite ?',
        blocs: [
          {
            type: 'p',
            texte:
              'Le débat sur l’ouverture du marché québécois aux exploitants privés est relancé. Nous suivons les annonces dans notre guide [casino en ligne légal au Québec](/casino-en-ligne-legal-quebec/), et tous les chiffres sont réunis sur [le jeu en ligne au Québec en chiffres](/statistiques-jeu-en-ligne-quebec/).'
          }
        ]
      }
    ],
    faq: [
      {
        q: 'Combien d’exploitants de jeu en ligne sont autorisés en Ontario ?',
        r: '49 exploitants pour 84 sites au 1er septembre 2026, selon iGaming Ontario.'
      },
      {
        q: 'Le Québec va-t-il ouvrir son marché comme l’Ontario ?',
        r: 'Aucun projet de loi n’est connu à ce jour. Nous suivons les annonces dans notre guide sur la légalité du casino en ligne au Québec.'
      }
    ],
    sources: [
      { titre: 'iGaming Ontario, résultats de l’étude Ipsos, année 4 (21 mai 2026)', url: 'https://igamingontario.ca/en/news/ipsos-channelization-study-year-4-results' },
      { titre: 'iGaming Ontario, marché réglementé', url: 'https://igamingontario.ca/en/player/regulated-igaming-market' },
      { titre: 'Loto-Québec, réponses aux demandes de renseignements, étude des crédits 2026-2027 (CFP-114)', url: CFP_114 },
      { titre: 'Coalition québécoise du jeu en ligne, mémoire prébudgétaire 2026-2027', url: 'https://cdn-contenu.quebec.ca/cdn-contenu/adm/min/finances/publications-adm/Consultations_prebudgetaires/2026-2027/CQJL.pdf' }
    ],
    connexes: ['/statistiques-jeu-en-ligne-quebec/', '/casino-en-ligne-legal-quebec/', '/casino-en-ligne-canada/']
  }
];

/** Articles du plus récent au plus ancien (index et fil RSS). */
export const ARTICLES_RECENTS = [...ARTICLES].sort((a, b) => b.modifie.localeCompare(a.modifie));

export default ARTICLES;
