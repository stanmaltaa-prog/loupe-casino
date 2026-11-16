import type { PageGuide } from './types';

/**
 * « Le jeu en ligne au Québec en chiffres » : page de données sourcées, faite pour être citée
 * (journalistes, blogues, étudiants). Pas d'offres en haut de page : c'est une page de référence.
 * Chaque chiffre porte sa période et sa source ; les calculs (parts, variations) sont signalés.
 * Recherche arrêtée au 16 novembre 2026.
 */

const CFP_114 =
  'https://www.assnat.qc.ca/Media/Process.aspx?MediaId=ANQ.Vigie.Bll.DocumentGenerique_220733&process=Default&token=ZyMoxNwUn8ikQ+TRKYwPCjWrKwg+vIv9rjij7p3xLGTZDmLVSmJLoqe/vG7/YWzz';
const CFP_090 =
  'https://www.assnat.qc.ca/Media/Process.aspx?MediaId=ANQ.Vigie.Bll.DocumentGenerique_211151&process=Default&token=ZyMoxNwUn8ikQ+TRKYwPCjWrKwg+vIv9rjij7p3xLGTZDmLVSmJLoqe/vG7/YWzz';
const COMPTES_2026 = 'https://cdn-contenu.quebec.ca/cdn-contenu/adm/min/finances/publications-adm/Comptes-publics/FR/CPTFR_vol1-2025-2026.pdf';
const COMPTES_2025 = 'https://cdn-contenu.quebec.ca/cdn-contenu/adm/min/finances/publications-adm/Comptes-publics/FR/CPTFR_vol1-2024-2025.pdf';
const INSPQ = 'https://www.inspq.qc.ca/jeux-de-hasard-et-d-argent-et-sante';
const STATCAN = 'https://www150.statcan.gc.ca/n1/pub/75-006-x/2022001/article/00006-fra.htm';
const FINANCES_2016 = 'https://cdn-contenu.quebec.ca/cdn-contenu/adm/min/finances/publications-adm/AUTFR_69_Analyse_jeux_en_ligne.pdf';
const KAHNAWAKE_PLAINTES = 'https://gamingcommission.ca/wp-content/uploads/2026/01/2025-DisputeResolutionSummary.pdf';
const IGO = 'https://igamingontario.ca/en/news/ipsos-channelization-study-year-4-results';

const statistiques: PageGuide[] = [
  {
    chemin: '/statistiques-jeu-en-ligne-quebec/',
    nomFil: 'Le jeu en ligne en chiffres',
    titre: 'Jeu en ligne au Québec : les chiffres clés 2026',
    description:
      'Le jeu en ligne au Québec en chiffres : revenus en ligne de Loto-Québec, part des joueurs en ligne, aide, Kahnawake et Ontario. Sources officielles.',
    h1: 'Le jeu en ligne au Québec en chiffres (2026)',
    chapeau:
      'Combien rapporte le jeu en ligne à Loto-Québec, combien de Québécois jouent en ligne, que pèse le marché non réglementé ? Voici les chiffres officiels les plus récents, chacun avec sa période et sa source. Vous pouvez les reprendre en citant Loupe Casino avec un lien vers cette page.',
    modifie: '2026-11-16',
    offresHaut: [],
    resume: 'Les chiffres officiels du jeu en ligne au Québec : Loto-Québec, joueurs, aide, Kahnawake et Ontario, sources à l’appui.',
    sections: [
      {
        id: 'essentiel',
        titre: 'L’essentiel en 8 chiffres',
        blocs: [
          {
            type: 'liste',
            items: [
              `**590,4 M$** : produits du jeu en ligne de Loto-Québec (lotoquebec.com) en 2025-2026, selon ses réponses à l'Assemblée nationale (états financiers non vérifiés).`,
              '**+21 %** sur un an : 488,8 M$ en 2024-2025 (calcul Loupe Casino).',
              '**Environ 19 %** des revenus de Loto-Québec viennent désormais du jeu en ligne (calcul Loupe Casino : 590,4 M$ sur 3 098 M$).',
              '**3 098 M$** de revenus et **1 526 M$** de surplus pour Loto-Québec en 2025-2026, selon les Comptes publics du Québec.',
              '**13 %** des Québécois jouent en ligne en 2025, contre 5 % en 2018 et 1,5 % en 2012, selon l’INSPQ.',
              '**81 %** des joueurs en ligne québécois choisiraient lotoquebec.com, selon Loto-Québec, qui ne précise pas sa méthode.',
              '**6 848** demandes d’aide à Jeu : aide et référence en 2023-2024, soit 21 % de plus qu’un an plus tôt.',
              '**1 143** plaintes de joueurs reçues en 2025 par la Commission des jeux de Kahnawà:ke.'
            ]
          }
        ]
      },
      {
        id: 'loto-quebec',
        titre: 'Loto-Québec et le jeu en ligne',
        blocs: [
          {
            type: 'tableau',
            legende:
              'Produits du jeu en ligne (loteries, casino et paris sportifs sur lotoquebec.com) : réponses de Loto-Québec à l’étude des crédits (documents CFP-090 et CFP-114). Revenus totaux : Comptes publics du Québec. Parts : calcul Loupe Casino.',
            entetes: ['Exercice', 'Jeu en ligne', 'Revenus totaux de Loto-Québec', 'Part du jeu en ligne'],
            lignes: [
              ['2023-2024', '438,5 M$', 'Non relevé', 'Non calculée'],
              ['2024-2025', '488,8 M$', '3 005 M$', 'Environ 16 %'],
              ['2025-2026', '**590,4 M$** (non vérifiés)', '3 098 M$', '**Environ 19 %**']
            ]
          },
          {
            type: 'liste',
            items: [
              '**Croissance** : +11,7 % entre 2023-2024 et 2024-2025, puis environ +21 % entre 2024-2025 et 2025-2026 (calculs Loupe Casino). Pour 2024-2025, les deux documents de Loto-Québec diffèrent légèrement : 489,7 M$ dans l’un, 488,8 M$ dans l’autre.',
              '**Publicité** : 8,6 M$ consacrés à la publicité du jeu en ligne en 2024-2025, et 8,9 M$ estimés en 2025-2026.',
              '**Nombre de comptes joueurs** : non publié. Loto-Québec le juge commercialement confidentiel.',
              '**Prévention** : plus de 36 M$ consacrés à la lutte contre le jeu problématique, selon Loto-Québec.',
              '**Gouvernement** : 1 523 M$ de revenus provenant de Loto-Québec en 2025-2026, contre 1 515 M$ l’année précédente.',
              '**Premier trimestre 2026-2027** (avril à juin 2026) : 782,6 M$ de produits (+2,1 %) et 398,1 M$ de résultat net (+3,6 %).'
            ]
          }
        ]
      },
      {
        id: 'joueurs',
        titre: 'Combien de Québécois jouent, et combien en ligne',
        blocs: [
          {
            type: 'tableau',
            legende: 'Sources : Statistique Canada (2022, données de 2018), enquête québécoise de 2018 (Direction régionale de santé publique de Montréal) et INSPQ (mise à jour du 1er décembre 2025).',
            entetes: ['Indicateur', 'Valeur', 'Année des données'],
            lignes: [
              ['Québécois de 15 ans et plus ayant joué dans l’année', '69,1 %', '2018'],
              ['Adultes ayant joué dans l’année', '65,6 %', '2018'],
              ['Adultes ayant joué en ligne', '5,2 %', '2018'],
              ['Personnes qui jouent en ligne (INSPQ)', '**13 %**', '2025'],
              ['Joueurs à risque modéré à élevé', '1,9 % des joueurs (estimation à utiliser avec prudence)', '2018'],
              ['Élèves du secondaire ayant joué en ligne', '8 % (6 % en 2013)', '2019']
            ]
          },
          {
            type: 'p',
            texte:
              'La hausse du jeu en ligne est nette : 1,5 % en 2012, 5 % en 2018 et 13 % en 2025 selon l’INSPQ. Les 45-64 ans sont les plus nombreux à jouer, tous jeux confondus (79 % en 2018). Aucune mesure québécoise du jeu problématique plus récente que 2018 n’a été publiée à notre connaissance.'
          }
        ]
      },
      {
        id: 'cadre',
        titre: 'Le cadre légal en dates',
        blocs: [
          {
            type: 'liste',
            items: [
              '**Code criminel, article 207** : seul le gouvernement d’une province peut exploiter des jeux d’argent par ordinateur sur son territoire. Au Québec, c’est Loto-Québec.',
              '**18 mai 2016** : adoption de la loi 74, qui obligeait les fournisseurs d’accès Internet à bloquer les sites de jeu non autorisés. Le ministère des Finances en attendait 13,5 M$ la première année, puis 27 M$ par an.',
              '**2018** : la Cour supérieure du Québec invalide ces dispositions.',
              '**5 mai 2021** : la Cour d’appel du Québec confirme (2021 QCCA 730) : le blocage relève de la compétence fédérale sur les télécommunications.',
              '**24 mars 2022** : la Cour suprême du Canada refuse d’entendre l’appel.',
              '**2022** : l’Ontario ouvre son marché aux exploitants privés autorisés ; le Québec garde le monopole de Loto-Québec.'
            ]
          },
          {
            type: 'p',
            texte: 'Ce que cela change pour un joueur : [casino en ligne légal au Québec, la loi expliquée](/casino-en-ligne-legal-quebec/).'
          }
        ]
      },
      {
        id: 'marche-gris',
        titre: 'Le marché non réglementé : ce que l’on sait vraiment',
        blocs: [
          {
            type: 'p',
            texte:
              'La seule estimation officielle trouvée date d’une analyse du ministère des Finances, publiée vers 2015-2016 à partir d’un sondage de 2012 : un marché du jeu en ligne de 250 M$ au Québec, dont 50 M$ pour Loto-Québec et 200 M$ pour les sites non autorisés. Le groupe de travail sur le jeu en ligne comptait alors plus de 2 200 sites accessibles depuis le Québec.'
          },
          {
            type: 'p',
            texte:
              'Les estimations récentes viennent d’acteurs intéressés et se contredisent. Loto-Québec affirme que 81 % des joueurs en ligne québécois choisissent son site. La Coalition québécoise du jeu en ligne, qui représente des exploitants privés, avance au contraire que 73 % des joueurs utilisent des sites privés (sondage de 2023) et que le Québec perdrait environ 300 M$ de taxes par an. Aucun de ces chiffres n’est une donnée officielle indépendante.'
          },
          {
            type: 'p',
            texte:
              'Côté Kahnawà:ke, la Commission des jeux liste 53 exploitants sur sa page publique (mise à jour indiquée : 28 septembre 2023). En 2025, elle a reçu 1 143 plaintes de joueurs, en a validé 756 et en a résolu 746, dont 150 en faveur du joueur.'
          }
        ]
      },
      {
        id: 'ontario',
        titre: 'Le Québec face à l’Ontario',
        blocs: [
          {
            type: 'tableau',
            legende: 'Ontario : iGaming Ontario (mai et septembre 2026). Québec : réponses de Loto-Québec à l’étude des crédits (mai 2026).',
            entetes: ['', 'Québec', 'Ontario'],
            lignes: [
              ['Modèle', 'Monopole de Loto-Québec', 'Exploitants privés autorisés'],
              ['Exploitants autorisés', '1 (Loto-Québec)', '49 exploitants, 84 sites (septembre 2026)'],
              ['Chiffres 2025-2026', '590,4 M$ de produits du jeu en ligne (non vérifiés)', 'Plus de 103 G$ de mises et plus de 4,2 G$ de revenus de jeu (non vérifiés)'],
              ['Part des joueurs sur les sites autorisés', '81 % selon Loto-Québec', '91,1 % selon une étude Ipsos']
            ]
          },
          {
            type: 'p',
            texte: 'Prudence avec la comparaison : les mises ontariennes additionnent chaque montant misé, alors que les revenus de jeu ontariens (4,2 G$) sont ce qui reste une fois les gains versés. Les produits de Loto-Québec et les revenus ontariens ne sont pas forcément calculés de la même façon.'
          }
        ]
      },
      {
        id: 'aide',
        titre: 'Aide aux joueurs',
        blocs: [
          {
            type: 'p',
            texte:
              'Jeu : aide et référence (1 800 461-0140, gratuit et confidentiel) a reçu 5 660 demandes d’aide en 2022-2023, puis 6 848 en 2023-2024 : 21 % de plus. Le jeu en ligne fait partie des problèmes les plus cités. Les chiffres plus récents ne sont pas publiés en ligne.'
          },
          {
            type: 'encadre',
            ton: 'info',
            titre: 'Besoin d’en parler ?',
            texte: 'Jeu : aide et référence, 1 800 461-0140, tous les jours, 24 heures sur 24. Nos conseils : [jouer de façon responsable](/jeu-responsable/).'
          }
        ]
      },
      {
        id: 'impot',
        titre: 'Gains et impôt',
        blocs: [
          {
            type: 'p',
            texte:
              'Selon l’Agence du revenu du Canada, les prix de loterie ne sont pas imposables pour les gagnants. En règle générale, il en va de même des gains d’un joueur qui joue pour se divertir ; ils peuvent l’être si le jeu devient une activité professionnelle.'
          }
        ]
      },
      {
        id: 'citer',
        titre: 'Citer ces chiffres',
        blocs: [
          {
            type: 'p',
            texte:
              'Ces chiffres sont libres de reprise. Merci de citer « Loupe Casino » avec un lien vers cette page. Les parts et les variations marquées « calcul Loupe Casino » sont nos calculs à partir des chiffres officiels ; tous les autres chiffres viennent des sources ci-dessous, à la date indiquée. Une erreur, un chiffre plus récent ? Écrivez-nous à contact@loupecasino.com.'
          },
          {
            type: 'p',
            texte: 'Nos propres données, mesurées en argent réel : [les délais de retrait testés, casino par casino](/delais-de-retrait-casino/).'
          }
        ]
      }
    ],
    faq: [
      {
        q: 'Combien rapporte le jeu en ligne à Loto-Québec ?',
        r: '590,4 M$ de produits en 2025-2026, selon les réponses de Loto-Québec à l’Assemblée nationale (états financiers non vérifiés), soit environ 21 % de plus qu’en 2024-2025 et environ 19 % de ses revenus totaux.'
      },
      {
        q: 'Combien de Québécois jouent en ligne ?',
        r: '13 % en 2025 selon l’INSPQ, contre 5 % en 2018 et 1,5 % en 2012.'
      },
      {
        q: 'Quelle part du jeu en ligne Loto-Québec contrôle-t-elle ?',
        r: 'Loto-Québec affirme que 81 % des joueurs en ligne québécois choisissent son site, sans préciser sa méthode. Une coalition d’exploitants privés avance au contraire 73 % de joueurs sur des sites privés. Aucune étude officielle indépendante récente ne tranche.'
      },
      {
        q: 'Le casino en ligne est-il légal au Québec ?',
        r: 'Loto-Québec est le seul exploitant autorisé. Les sites étrangers, y compris ceux sous licence de Kahnawà:ke, ne sont pas autorisés par le gouvernement du Québec : c’est une zone grise expliquée dans notre guide sur la légalité.'
      },
      {
        q: 'Où trouver de l’aide pour un problème de jeu au Québec ?',
        r: 'Jeu : aide et référence, au 1 800 461-0140, gratuit, confidentiel et ouvert 24 heures sur 24.'
      }
    ],
    sources: [
      { titre: 'Loto-Québec, réponses aux demandes de renseignements, étude des crédits 2026-2027 (CFP-114, 12 mai 2026)', url: CFP_114 },
      { titre: 'Loto-Québec, réponses aux demandes de renseignements, étude des crédits 2025-2026 (CFP-090, 7 mai 2025)', url: CFP_090 },
      { titre: 'Loto-Québec, communiqué sur le rapport annuel 2025-2026 (3 juin 2026)', url: 'https://societe.lotoquebec.com/fr/medias-et-partenaires/communiques-de-presse/2026/juin/rapport-annuel-2025-2026-06-03' },
      { titre: 'Comptes publics du Québec 2025-2026, volume 1', url: COMPTES_2026 },
      { titre: 'Comptes publics du Québec 2024-2025, volume 1', url: COMPTES_2025 },
      { titre: 'Loto-Québec, résultats du premier trimestre 2026-2027 (17 septembre 2026)', url: 'https://www.newswire.ca/fr/news-releases/premier-trimestre-de-l-exercice-2026-2027-loto-quebec-poursuit-sa-croissance-et-son-engagement-envers-la-collectivite-890011363.html' },
      { titre: 'INSPQ, Jeux de hasard et d’argent et santé (mise à jour du 1er décembre 2025)', url: INSPQ },
      { titre: 'INSPQ, participation de la population générale', url: 'https://www.inspq.qc.ca/jeux-de-hasard-et-d-argent/donnees/participation-population-generale' },
      { titre: 'INSPQ, participation des élèves du secondaire', url: 'https://www.inspq.qc.ca/jeux-de-hasard-et-d-argent/donnees/participation-jeunes-secondaire' },
      { titre: 'Statistique Canada, Qui joue à des jeux de hasard et qui éprouve des problèmes de jeu au Canada (2022)', url: STATCAN },
      { titre: 'Les jeux de hasard et d’argent au Québec et en régions : statistiques de participation en 2018', url: 'https://ccsmtlpro.ca/sites/mtlpro/files/media/document/DRSP_Pub_2018_JeuxHasardArgentQCRegions.pdf' },
      { titre: 'Code criminel, article 207', url: 'https://laws-lois.justice.gc.ca/fra/lois/c-46/section-207.html' },
      { titre: 'Ministère des Finances du Québec, analyse d’impact réglementaire sur la filtration des sites de jeu en ligne', url: FINANCES_2016 },
      { titre: 'Cour suprême du Canada, dossier 39774 (demande d’autorisation rejetée le 24 mars 2022)', url: 'https://decisions.scc-csc.ca/scc-csc/scc-l-csc-a/en/19249/1/document.do' },
      { titre: 'Commission des jeux de Kahnawà:ke, résumé des plaintes 2025', url: KAHNAWAKE_PLAINTES },
      { titre: 'Commission des jeux de Kahnawà:ke, titulaires de permis', url: 'https://gamingcommission.ca/interactive-gaming/permit-holders/' },
      { titre: 'iGaming Ontario, résultats de l’étude Ipsos, année 4 (21 mai 2026)', url: IGO },
      { titre: 'iGaming Ontario, marché réglementé', url: 'https://igamingontario.ca/en/player/regulated-igaming-market' },
      { titre: 'Jeu : aide et référence, hausse de 21 % des demandes d’aide (13 août 2024)', url: 'https://aidejeu.ca/en/articles/gambling-help-and-referral-records-a-21-increase-in-requests-for-help/' },
      { titre: 'Coalition québécoise du jeu en ligne, mémoire prébudgétaire 2026-2027', url: 'https://cdn-contenu.quebec.ca/cdn-contenu/adm/min/finances/publications-adm/Consultations_prebudgetaires/2026-2027/CQJL.pdf' },
      { titre: 'Agence du revenu du Canada, sources de revenus', url: 'https://www.canada.ca/fr/agence-revenu/services/impot/entreprises/revenu-petites-entreprises-travailleurs-independants/impot-revenu-entreprises/revenus-entreprise/sources-revenu.html' }
    ],
    connexes: ['/casino-en-ligne-legal-quebec/', '/loto-quebec-casino-en-ligne/', '/delais-de-retrait-casino/', '/jeu-responsable/']
  }
];

export default statistiques;
