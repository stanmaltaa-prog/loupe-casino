import type { PageGuide } from './types';

const MAJ = '2026-11-04';
const SPORT = { nom: 'Paris sportifs', chemin: '/paris-sportifs-quebec/' };

const S = {
  code: { titre: 'Code criminel, article 207 (loteries autorisées)', url: 'https://laws-lois.justice.gc.ca/fra/lois/c-46/section-207.html' },
  c218: { titre: 'Gazette du Canada : entrée en vigueur de la loi sur les paris sportifs (27 août 2021)', url: 'https://gazette.gc.ca/rp-pr/p2/2021/2021-09-01/html/si-tr56-eng.html' },
  ontario: { titre: 'BLG : lancement du marché ontarien le 4 avril 2022', url: 'https://www.blg.com/fr/insights/2022/01/ready-for-takeoff-ontario-igaming-market-set-to-launch-april-4-2022' },
  alberta: { titre: 'Gouvernement de l’Alberta : stratégie iGaming (lancement le 13 juillet 2026)', url: 'https://www.alberta.ca/albertas-igaming-strategy' },
  provinces: { titre: 'Sumsub : le jeu en ligne au Canada, province par province (mai 2026)', url: 'https://sumsub.com/blog/online-gambling-canada/' },
  espacejeux: { titre: 'Ministère des Finances du Québec : analyse d’impact (lancement d’Espacejeux en 2010)', url: 'https://cdn-contenu.quebec.ca/cdn-contenu/adm/min/finances/publications-adm/AUTFR_69_Analyse_jeux_en_ligne.pdf' },
  miseojeu: { titre: 'Loto-Québec : Mise-o-jeu offert en ligne dès le 26 mars 2012', url: 'https://newswire.ca/fr/news-releases/le-pari-sportif-bientot-offert-en-ligne-509830191.html' },
  lq: { titre: 'Loto-Québec, site de jeux en ligne', url: 'https://portail.lotoquebec.com/fr' },
  lqRevenus: { titre: 'Lottery Daily : Loto-Québec dépasse 3 milliards $ de revenus en 2025-2026', url: 'https://lotterydaily.com/2026/06/04/digital/loto-quebec-online-gaming/' },
  debat: { titre: 'Gambling.com : le débat sur l’encadrement du jeu en ligne au Québec (mars 2026)', url: 'https://www.gambling.com/ca/fr/news/quebec-igaming-debat-regulation-2026' },
  poker: { titre: 'Pokerfuse : Loto-Québec et le Canada Poker Network (septembre 2026)', url: 'https://pokerfuse.com/latest-news/2026/9/qubecs-two-leading-parties-back-regulated-online/' },
  rolletto: { titre: 'Rolletto : page des promotions (bonus de bienvenue sport)', url: 'https://r0lletto.com/fr/static/promos' },
  velobet: { titre: 'Velobet : page des promotions, bonus de bienvenue sportif (9 novembre 2026)', url: 'https://24velobet.com/fr/static/promos' },
  impots: { titre: 'BLG : l’imposition des gains de jeu au Canada', url: 'https://www.blg.com/fr/insights/2023/07/texas-hold-em-or-taxes-hold-em-taxes-and-gambling-in-canada' },
  betportal: { titre: 'BetPortal : page des promotions (100 % Kickoff Pari Gratuit)', url: 'https://betportal888.com/fr/promotions' }
};

/** Offres sport vérifiées le 4 novembre 2026 sur les pages promotions des casinos. */
export const CTA_ROLLETTO = {
  type: 'cta' as const,
  casino: 'rolletto',
  titre: '150 % jusqu’à 1 500 $ + jusqu’à 200 $ en paris gratuits',
  detail:
    'Premier dépôt de 10 $ minimum. Mise de 15 fois (dépôt + bonus) en 15 jours, sur des paris combinés de 3 sélections ou plus, à une cote de 1,30 minimum par sélection. Bonus à activer avant le premier pari.',
  bouton: 'Voir l’offre sport de Rolletto'
};

/** Offre sport de Velobet vérifiée le 9 novembre 2026 sur sa page promotions. */
export const CTA_VELOBET = {
  type: 'cta' as const,
  casino: 'velobet',
  titre: '150 % jusqu’à 1 000 $ + 10 paris gratuits',
  detail:
    'Premier dépôt de 10 $ minimum. Mise de 15 fois (dépôt + bonus) sur des paris combinés de 3 sélections ou plus, à une cote de 1,30 minimum par sélection ; bonus valable 30 jours. À activer avant le premier pari ; les 10 paris gratuits arrivent après la validation du premier pari. Montants en dollars canadiens pour un compte en CAD.',
  bouton: 'Voir l’offre sport de Velobet'
};

export const CTA_BETPORTAL = {
  type: 'cta' as const,
  casino: 'betportal',
  titre: 'Pari gratuit égal à 100 % de votre mise, jusqu’à 100 $',
  detail:
    'Dépôt de 20 $ minimum, puis un pari combiné d’avant-match de 3 à 10 sélections, à une cote totale entre 3,00 et 10,00. Pari gratuit valable 7 jours ; sa mise est déduite du gain. Montants en dollars canadiens pour un compte en CAD.',
  bouton: 'Voir l’offre sport de BetPortal'
};

const canadaSport: PageGuide[] = [
  {
    chemin: '/casino-en-ligne-canada/',
    nomFil: 'Casino en ligne au Canada',
    titre: 'Meilleur casino en ligne au Canada : top 3 et lois (2026)',
    description:
      'Meilleur casino en ligne au Canada en 2026 : notre top 3 noté sur une grille publique, puis les règles de chaque province et l’âge minimum.',
    h1: 'Meilleur casino en ligne au Canada : notre top 3 et les règles par province',
    chapeau:
      "Voici notre top 3 pour les joueurs canadiens, hors Ontario et Alberta, noté sur notre grille publique. Plus bas : les règles de chaque province, car au Canada, chacune fixe les siennes.",
    modifie: MAJ,
    resume: 'Les règles du jeu en ligne dans chaque province, et l’âge minimum.',
    sections: [
      {
        id: 'reponse',
        titre: 'La réponse courte',
        blocs: [
          {
            type: 'p',
            texte:
              "Au Canada, les jeux d'argent relèvent du Code criminel, dont l'article 207 permet à chaque province de « mettre sur pied et exploiter » ses propres jeux, y compris en ligne. Il n'existe donc pas une règle canadienne, mais une règle par province."
          },
          {
            type: 'liste',
            items: [
              '**En Ontario** (depuis avril 2022) et **en Alberta** (depuis le 13 juillet 2026), des casinos privés peuvent obtenir une autorisation provinciale.',
              '**Ailleurs**, dont au Québec, seul le site de la société d’État de la province est autorisé : [Loto-Québec](/loto-quebec-casino-en-ligne/) au Québec, PlayNow en Colombie-Britannique, au Manitoba et en Saskatchewan, Atlantic Lottery dans les provinces de l’Atlantique.',
              '**Les sites étrangers** acceptent pourtant des joueurs canadiens, sous des licences délivrées ailleurs. Ils ne sont autorisés par aucune province.',
              '**L’âge minimum** est de 18 ans au Québec, en Alberta et au Manitoba, et de 19 ans dans les autres provinces.'
            ]
          }
        ]
      },
      {
        id: 'provinces',
        titre: 'Le tableau des provinces',
        blocs: [
          {
            type: 'tableau',
            legende: 'Sources : gouvernement de l’Alberta, BLG et Sumsub (mai 2026). Vérifié le 4 novembre 2026.',
            entetes: ['Province', 'Site public', 'Casinos privés autorisés', 'Âge minimum'],
            lignes: [
              ['Québec', 'Loto-Québec (lotoquebec.com)', 'Non', '18 ans'],
              ['Ontario', 'OLG.ca', 'Oui, inscrits auprès de l’AGCO, depuis avril 2022', '19 ans'],
              ['Alberta', 'PlayAlberta.ca', 'Oui, inscrits auprès de l’AGLC, depuis le 13 juillet 2026', '18 ans'],
              ['Colombie-Britannique', 'PlayNow (BCLC)', 'Non', '19 ans'],
              ['Manitoba', 'PlayNow (Manitoba Liquor & Lotteries)', 'Non', '18 ans'],
              ['Saskatchewan', 'PlayNow (depuis 2022)', 'Non', '19 ans'],
              ['Nouveau-Brunswick, Nouvelle-Écosse, Île-du-Prince-Édouard, Terre-Neuve-et-Labrador', 'Atlantic Lottery (alc.ca)', 'Non', '19 ans'],
              ['Yukon, Territoires du Nord-Ouest, Nunavut', 'Aucun site recensé', 'Non', 'Non précisé']
            ]
          },
          {
            type: 'p',
            texte:
              "En Ontario, l'âge minimum de 19 ans vaut pour le casino et les paris sportifs en ligne ; il est de 18 ans pour la loterie. En Saskatchewan, il est aussi de 18 ans pour les produits de loterie."
          }
        ]
      },
      {
        id: 'ontario-alberta',
        titre: 'L’Ontario et l’Alberta, deux marchés ouverts au privé',
        blocs: [
          {
            type: 'p',
            texte:
              "**L'Ontario** a ouvert son marché le 4 avril 2022. Les exploitants privés doivent s'inscrire auprès de la Commission des alcools et des jeux de l'Ontario (AGCO) et signer une entente avec iGaming Ontario."
          },
          {
            type: 'p',
            texte:
              "**L'Alberta** a lancé son marché encadré le 13 juillet 2026. La Commission des jeux, des alcools et du cannabis de l'Alberta (AGLC) en est le régulateur, et l'Alberta iGaming Corporation supervise le marché. Le gouvernement albertain estime que les sites non autorisés captent environ 70 % du jeu en ligne dans la province."
          },
          {
            type: 'encadre',
            ton: 'alerte',
            titre: 'Vous habitez en Ontario ou en Alberta ?',
            texte:
              "Notre comparatif s'adresse aux joueurs du Québec. Les casinos que nous comparons ne sont inscrits ni en Ontario ni en Alberta : dans ces deux provinces, choisissez un site autorisé par l'AGCO ou par l'AGLC."
          }
        ]
      },
      {
        id: 'sites-etrangers',
        titre: 'Le cas des sites étrangers',
        blocs: [
          {
            type: 'p',
            texte:
              "Les casinos privés que vous trouvez en ligne, hors Ontario et Alberta, sont exploités depuis l'étranger. Ils détiennent parfois une licence étrangère (Curaçao, Anjouan ou autre), dont la valeur varie beaucoup d'une autorité à l'autre. Aucune ne vaut une autorisation provinciale."
          },
          {
            type: 'p',
            texte:
              "Pour vous, la conséquence la plus concrète est pratique : en cas de litige, vos recours passent par l'exploitant puis par le régulateur étranger, pas par un organisme canadien. C'est pourquoi la transparence (exploitant, licence, règles de retrait) pèse 25 % de [notre note](/notre-methode/). Pour le détail de la situation au Québec, lisez notre guide [casino en ligne légal au Québec](/casino-en-ligne-legal-quebec/)."
          }
        ]
      },
      {
        id: 'paris-sportifs',
        titre: 'Et les paris sportifs ?',
        blocs: [
          {
            type: 'p',
            texte:
              "Depuis le 27 août 2021, la loi canadienne permet de parier sur un seul match, et non plus seulement sur des combinés. Les provinces l'offrent par leur société d'État (Mise-o-jeu au Québec), et l'Ontario et l'Alberta par des sites privés autorisés. Notre guide des [paris sportifs au Québec](/paris-sportifs-quebec/) compare les offres et leurs conditions."
          }
        ]
      },
      {
        id: 'choisir',
        titre: 'Comment choisir un site au Québec',
        blocs: [
          {
            type: 'liste',
            ordonnee: true,
            items: [
              'Vérifiez qui exploite le site et quelle licence il affiche, avec son numéro.',
              'Lisez les règles de retrait (délais, plafonds, vérification d’identité) avant de déposer.',
              'Regardez la condition de mise du bonus, pas seulement son montant : notre [calculateur](/conditions-de-mise/) fait le calcul.',
              'Commencez par un petit dépôt et testez un premier retrait.',
              'Fixez-vous une limite de dépenses avant de jouer.'
            ]
          },
          { type: 'offres', titre: 'Notre comparatif pour le Québec' }
        ]
      }
    ],
    faq: [
      {
        q: 'Les casinos en ligne sont-ils légaux au Canada ?',
        r: "Cela dépend de la province. Chaque province exploite son propre site. L'Ontario (depuis 2022) et l'Alberta (depuis juillet 2026) autorisent aussi des casinos privés inscrits auprès de leur régulateur. Ailleurs, les sites privés étrangers ne sont autorisés par aucune province."
      },
      {
        q: 'Quel âge faut-il avoir pour jouer en ligne au Canada ?',
        r: '18 ans au Québec, en Alberta et au Manitoba ; 19 ans dans les autres provinces, au moins pour le casino en ligne.'
      },
      {
        q: 'Quel est le meilleur casino en ligne au Canada ?',
        r: "Il dépend de votre province. En Ontario et en Alberta, choisissez un site autorisé par le régulateur provincial. Au Québec, seul Loto-Québec est autorisé ; si vous envisagez un site étranger, notre comparatif classe les offres selon une grille publique : transparence, bonus, retraits, produit et protection du joueur."
      },
      {
        q: 'Les gains de casino sont-ils imposables au Canada ?',
        r: "En règle générale, les gains d'un joueur qui joue pour se divertir ne sont pas imposables, car ils ne proviennent pas d'une source de revenus. Ils peuvent l'être si le jeu est une activité professionnelle. En cas de doute, consultez un fiscaliste."
      }
    ],
    sources: [S.code, S.ontario, S.alberta, S.provinces, S.c218],
    connexes: ['/casino-en-ligne-fiable/', '/casino-en-ligne-le-plus-payant/', '/loto-quebec-casino-en-ligne/', '/paris-sportifs-quebec/']
  },

  {
    chemin: '/loto-quebec-casino-en-ligne/',
    nomFil: 'Loto-Québec en ligne',
    titre: 'Casino en ligne Loto-Québec : jeux, outils et comparaison',
    description:
      'Le casino en ligne de Loto-Québec (ex-Espacejeux) : ce qu’on peut y jouer, les outils de jeu responsable, et ce qui le distingue des sites privés.',
    h1: 'Casino en ligne Loto-Québec : ce qu’on y trouve et ce qui le distingue',
    chapeau:
      "Loto-Québec est le seul exploitant de jeu en ligne autorisé au Québec. Voici ce que propose son site, et comment il se compare aux casinos privés qui visent les joueurs québécois.",
    modifie: MAJ,
    resume: 'Le site de jeu en ligne de Loto-Québec, et la comparaison avec les sites privés.',
    sections: [
      {
        id: 'en-bref',
        titre: 'Loto-Québec en ligne, en bref',
        blocs: [
          {
            type: 'p',
            texte:
              "Loto-Québec est une société d'État. Elle a lancé son site de jeu en ligne en 2010, sous le nom **Espacejeux**. Ses jeux en ligne sont aujourd'hui réunis sur **lotoquebec.com**, dans la section Jeux en ligne. C'est le seul site de jeu en ligne autorisé par le gouvernement du Québec."
          },
          {
            type: 'p',
            texte:
              "Il faut avoir **18 ans** pour y jouer. Loto-Québec a dépassé pour la première fois 3 milliards $ de revenus pendant l'exercice 2025-2026, tous canaux confondus (loteries, casinos, salons de jeux et jeu en ligne)."
          }
        ]
      },
      {
        id: 'jeux',
        titre: 'Ce qu’on peut y jouer',
        blocs: [
          {
            type: 'p',
            texte: "Lors de notre visite du 4 novembre 2026, le site de jeux en ligne de Loto-Québec proposait :"
          },
          {
            type: 'liste',
            items: [
              '**des machines à sous**, dans la section casino ;',
              '**du casino en direct**, dont le blackjack avec croupier ;',
              '**le poker**, que Loto-Québec offre en partageant ses tables avec d’autres provinces au sein du Canada Poker Network ;',
              '**les paris sportifs Mise-o-jeu**, offerts en ligne depuis le 26 mars 2012 ;',
              '**le bingo, les loteries et les jeux instantanés**.'
            ]
          },
          {
            type: 'p',
            texte:
              "Pour comprendre les jeux eux-mêmes, consultez nos guides des [machines à sous](/machines-a-sous/), du [casino en direct](/casino-en-direct/) et du [blackjack](/blackjack-en-ligne/)."
          }
        ]
      },
      {
        id: 'outils',
        titre: 'Les outils de jeu responsable',
        blocs: [
          {
            type: 'p',
            texte:
              "Le site met en avant trois outils dans sa rubrique « Encadrer mon jeu » : des **limites**, des **pauses** et l'**autoexclusion**. Utilisez-les avant d'en avoir besoin : il est plus facile de fixer une limite au calme qu'au milieu d'une mauvaise série."
          }
        ]
      },
      {
        id: 'comparaison',
        titre: 'Loto-Québec ou site privé : ce qui change',
        blocs: [
          {
            type: 'tableau',
            entetes: ['', 'Loto-Québec', 'Sites privés de notre comparatif'],
            lignes: [
              ['Autorisation au Québec', 'Oui, seul site autorisé', 'Non : licences étrangères ou aucune licence affichée'],
              ['En cas de litige', 'Une société d’État québécoise', 'L’exploitant, puis le régulateur étranger'],
              ['Bonus de bienvenue', 'Selon les promotions du moment', 'Jusqu’à 5 500 $ chez Rolletto, avec une mise de 30 fois en 5 jours'],
              ['Où vont les revenus', 'Au gouvernement du Québec', 'À des sociétés établies hors du Canada']
            ]
          },
          {
            type: 'p',
            texte:
              "Les parts de marché font débat. Loto-Québec affirme, sur la foi d'une étude Léger, que 81 % des joueurs en ligne choisissent lotoquebec.com. La Coalition québécoise des jeux en ligne, qui représente des exploitants privés, estime de son côté que quelque 2 000 sites visent déjà les joueurs québécois."
          },
          {
            type: 'encadre',
            ton: 'alerte',
            titre: 'Si vous choisissez un site privé',
            texte:
              "Ces sites ne sont pas autorisés par le Québec. Choisissez un exploitant identifiable, lisez les règles de retrait avant de déposer, et commencez par un petit dépôt. Notre guide [casino en ligne légal au Québec](/casino-en-ligne-legal-quebec/) explique la situation juridique en détail."
          },
          { type: 'offres', titre: 'Les sites privés que nous comparons' }
        ]
      },
      {
        id: 'avenir',
        titre: 'Un monopole qui pourrait changer',
        blocs: [
          {
            type: 'p',
            texte:
              "Pendant la campagne électorale de 2026, le Parti libéral du Québec a proposé d'obliger les plateformes de jeu en ligne à obtenir une accréditation. Le Parti québécois, élu le 5 octobre 2026, s'est dit favorable à un marché encadré. Aucun changement n'est en vigueur à ce jour : nous mettrons cette page à jour dès qu'un projet de loi sera connu."
          }
        ]
      }
    ],
    faq: [
      {
        q: 'Espacejeux existe-t-il encore ?',
        r: "Espacejeux est le nom sous lequel Loto-Québec a lancé son site de jeu en ligne en 2010. Ses jeux en ligne se trouvent aujourd'hui sur lotoquebec.com, dans la section Jeux en ligne."
      },
      {
        q: 'Quel âge faut-il avoir pour jouer sur Loto-Québec en ligne ?',
        r: '18 ans, comme pour tous les jeux d’argent au Québec.'
      },
      {
        q: 'Loto-Québec est-il le seul casino en ligne légal au Québec ?',
        r: "Oui. Loto-Québec est le seul exploitant de jeu en ligne autorisé par le gouvernement du Québec. Les sites privés qui acceptent les joueurs québécois sont exploités depuis l'étranger, sans autorisation québécoise."
      },
      {
        q: 'Peut-on parier sur le sport en ligne avec Loto-Québec ?',
        r: 'Oui, avec Mise-o-jeu, offert en ligne depuis le 26 mars 2012.'
      }
    ],
    sources: [S.lq, S.espacejeux, S.miseojeu, S.poker, S.lqRevenus, S.debat],
    connexes: ['/casino-de-montreal-en-ligne/', '/machines-a-sous-loto-quebec/', '/mise-o-jeu/', '/casino-en-ligne-canada/']
  },

  {
    chemin: '/paris-sportifs-quebec/',
    nomFil: 'Paris sportifs',
    titre: 'Paris sportif au Québec : meilleurs sites et bonus (2026)',
    description:
      'Paris sportifs en ligne au Québec : la loi, les bonus sport de Velobet, Rolletto et BetPortal décortiqués, et comment lire une cote avant de parier.',
    h1: 'Paris sportifs au Québec : les meilleurs sites, la loi et les bonus',
    chapeau:
      "Les bonus sport paraissent généreux, mais leurs conditions sont souvent plus dures que celles des bonus casino. Voici ce qu'elles exigent vraiment, et ce qu'il faut savoir avant de parier.",
    modifie: MAJ,
    resume: 'La loi, les bonus sport comparés et la lecture des cotes.',
    sections: [
      {
        id: 'loi',
        titre: 'Ce que dit la loi',
        blocs: [
          {
            type: 'p',
            texte:
              "Depuis le 27 août 2021, la loi canadienne permet de parier sur un seul match ; avant, seuls les paris combinés étaient permis. Au Québec, seul Loto-Québec est autorisé à offrir des paris sportifs, avec **Mise-o-jeu**. Les sites de paris privés qui acceptent les Québécois sont exploités depuis l'étranger, sans autorisation québécoise. Il faut avoir 18 ans pour parier."
          }
        ]
      },
      {
        id: 'bonus',
        titre: 'Les bonus sport comparés',
        blocs: [
          {
            type: 'p',
            texte:
              'Offres relevées sur les pages promotions des casinos le 4 novembre 2026 (le 9 novembre 2026 pour Velobet). Les montants et conditions peuvent changer.'
          },
          {
            type: 'tableau',
            entetes: ['', 'Velobet', 'Rolletto', 'BetPortal'],
            lignes: [
              ['Offre', '150 % jusqu’à 1 000 $ + 10 paris gratuits', '150 % jusqu’à 1 500 $ + jusqu’à 200 $ en paris gratuits', 'Pari gratuit de 100 % de votre mise, jusqu’à 100 $'],
              ['Dépôt minimum', '10 $', '10 $', '20 $'],
              ['Condition', 'Miser 15 fois (dépôt + bonus), bonus valable 30 jours', 'Miser 15 fois (dépôt + bonus) en 15 jours', 'Placer un pari qualifiant'],
              [
                'Paris acceptés',
                'Combinés de 3 sélections ou plus, cote de 1,30 minimum par sélection',
                'Combinés de 3 sélections ou plus, cote de 1,30 minimum par sélection',
                'Combiné d’avant-match de 3 à 10 sélections, cote totale de 3,00 à 10,00'
              ],
              ['À savoir', 'Bonus à activer avant le premier pari ; paris gratuits après la validation du premier pari', 'Bonus à activer avant le premier pari', 'Mise du pari gratuit déduite du gain ; valable 7 jours']
            ]
          },
          CTA_VELOBET,
          CTA_ROLLETTO,
          CTA_BETPORTAL,
          {
            type: 'p',
            texte:
              "**1win** propose aussi des paris sportifs, mais nous n'avons pas pu vérifier les conditions de son bonus sport. [Celsius](/celsius-casino/) ne fait pas partie de cette comparaison : nous n'avons pas confirmé d'offre de paris sportifs chez lui."
          }
        ]
      },
      {
        id: 'exemple',
        titre: 'Ce que ces bonus exigent vraiment',
        blocs: [
          {
            type: 'encadre',
            titre: 'Exemple chez Rolletto : dépôt de 100 $',
            texte:
              "Bonus de 150 % : 150 $. Mise à atteindre : 15 × (100 $ + 150 $) = **3 750 $ de paris** en 15 jours, soit 250 $ par jour, uniquement en combinés de 3 sélections ou plus. Avec la marge du site sur chaque sélection, il est probable de perdre une bonne partie du solde avant d'atteindre ce total."
          },
          {
            type: 'encadre',
            titre: 'Exemple chez Velobet : dépôt de 100 $',
            texte:
              "Bonus de 150 % : 150 $. Mise à atteindre : 15 × (100 $ + 150 $) = **3 750 $ de paris** pendant les 30 jours de validité du bonus, soit 125 $ par jour en moyenne, en combinés de 3 sélections ou plus. C'est la même mise que chez Rolletto, avec deux fois plus de temps."
          },
          {
            type: 'encadre',
            titre: 'Exemple chez BetPortal : pari qualifiant de 50 $',
            texte:
              "Vous recevez un pari gratuit de 50 $. S'il gagne à une cote de 4,00, vous touchez 150 $ : 200 $ moins la mise de 50 $, qui n'est pas remboursée. S'il perd, vous ne touchez rien. Les conditions générales de BetPortal prévoient par ailleurs une mise de 15 fois pour les bonus sportifs : vérifiez si elle s'applique à vos gains avant de demander un retrait."
          },
          {
            type: 'p',
            texte:
              "Les trois offres imposent des **paris combinés**. C'est là que le risque grimpe : un combiné ne gagne que si toutes ses sélections gagnent. Trois sélections à 1,30 donnent une cote de 2,20 environ, mais, même sans marge, ce combiné ne passerait qu'environ une fois sur deux (0,77 × 0,77 × 0,77 ≈ 0,46)."
          }
        ]
      },
      {
        id: 'cotes',
        titre: 'Lire une cote et repérer la marge',
        blocs: [
          {
            type: 'p',
            texte:
              "Au Québec, les cotes sont affichées en format décimal. Une cote de 2,50 signifie qu'une mise de 10 $ rapporte 25 $ si le pari gagne, mise comprise. La probabilité implicite d'une cote se calcule ainsi : 1 ÷ cote. Une cote de 2,50 correspond donc à 40 %."
          },
          {
            type: 'p',
            texte:
              "Additionnez les probabilités implicites de toutes les issues d'un match : le total dépasse toujours 100 %. L'excédent est la **marge** du site. Exemple : deux équipes à 1,90 donnent 52,6 % + 52,6 % = 105,3 %, soit une marge d'environ 5 %. Plus la marge est faible, plus vous récupérez en moyenne."
          }
        ]
      },
      {
        id: 'sports',
        titre: 'Par sport',
        blocs: [
          {
            type: 'liens',
            items: [
              { href: '/paris-sportifs-hockey/', titre: 'Paris sur le hockey', texte: 'LNH, prolongation, écart de buts et totaux expliqués.' },
              { href: '/paris-sportifs-soccer/', titre: 'Paris sur le soccer', texte: 'Marchés, temps réglementaire et grands championnats.' }
            ]
          }
        ]
      },
      {
        id: 'conseils',
        titre: 'Nos conseils avant de parier',
        blocs: [
          {
            type: 'liste',
            ordonnee: true,
            items: [
              'Fixez un budget pour la saison, pas pour la soirée.',
              'Ne cherchez jamais à « vous refaire » après une perte.',
              'Méfiez-vous des paris sur votre équipe favorite : l’attachement fausse le jugement.',
              'Avant d’accepter un bonus, calculez la mise totale qu’il impose et le délai.',
              'Aucun système ni aucun « pronostic sûr » ne garantit un gain.'
            ]
          }
        ]
      }
    ],
    faq: [
      {
        q: 'Les paris sportifs en ligne sont-ils légaux au Québec ?',
        r: "Seul Loto-Québec est autorisé à offrir des paris sportifs au Québec, avec Mise-o-jeu. Les sites privés qui acceptent les Québécois sont exploités depuis l'étranger, sans autorisation québécoise."
      },
      {
        q: 'Peut-on parier sur un seul match au Canada ?',
        r: 'Oui, depuis le 27 août 2021. Avant cette date, seuls les paris combinés sur plusieurs matchs étaient permis.'
      },
      {
        q: 'Quel est le meilleur site de paris sportifs au Québec ?',
        r: "Le seul site autorisé par le gouvernement du Québec est Mise-o-jeu, de Loto-Québec. Parmi les sites privés que nous comparons, aucun n'est autorisé par le Québec : Velobet laisse le plus de temps pour remplir la mise de son bonus sport (30 jours), Rolletto affiche le montant le plus élevé en dollars (jusqu'à 1 500 $) et BetPortal l'offre la plus simple (un pari gratuit)."
      },
      {
        q: 'Quel est le meilleur bonus de paris sportifs ?',
        r: "Celui dont vous pouvez réellement remplir les conditions. Velobet (jusqu'à 1 000 $) et Rolletto (jusqu'à 1 500 $) demandent la même mise de 15 fois le dépôt et le bonus, en combinés, mais Velobet laisse 30 jours et Rolletto 15. Le pari gratuit de BetPortal est plus modeste mais plus simple."
      },
      {
        q: 'Les gains de paris sportifs sont-ils imposables au Québec ?',
        r: "En règle générale, non : les gains d'une personne qui parie pour se divertir ne sont pas imposables au Canada, car ils ne proviennent pas d'une source de revenus. Ils peuvent l'être si le pari constitue une activité professionnelle. En cas de doute, consultez un fiscaliste."
      },
      {
        q: 'Qu’est-ce qu’un pari gratuit ?',
        r: "Un pari placé avec un crédit offert par le site. S'il gagne, vous touchez le gain sans la mise : un pari gratuit de 50 $ gagnant à 4,00 rapporte 150 $, pas 200 $."
      }
    ],
    sources: [S.c218, S.velobet, S.rolletto, S.betportal, S.miseojeu, S.impots],
    connexes: ['/sites-paris-sportifs-canada/', '/bonus-paris-sportifs/', '/mise-o-jeu/', '/paris-sportifs-hockey/', '/paris-sportifs-soccer/', '/casino-en-ligne-legal-quebec/']
  },

  {
    chemin: '/paris-sportifs-hockey/',
    nomFil: 'Hockey',
    parent: SPORT,
    titre: 'Paris sportifs hockey : LNH, types de paris et conseils',
    description:
      'Paris sur le hockey et la LNH : vainqueur avec ou sans prolongation, écart de buts, total de buts, et où parier sur les Canadiens. Expliqué simplement.',
    h1: 'Paris sur le hockey : comprendre les paris sur la LNH',
    chapeau:
      "Au hockey, un détail change tout : la prolongation est-elle comprise ou non ? Voici les principaux types de paris sur la LNH, et les pièges propres à ce sport.",
    modifie: MAJ,
    resume: 'Les paris sur la LNH : prolongation, écart de buts et totaux.',
    sections: [
      {
        id: 'prolongation',
        titre: 'Le piège n° 1 : avec ou sans prolongation',
        blocs: [
          {
            type: 'p',
            texte:
              "Les sites proposent en général deux paris sur le vainqueur d'un match de la LNH. Lisez bien leur intitulé :"
          },
          {
            type: 'tableau',
            entetes: ['Pari', 'Ce qui compte', 'Match nul possible ?'],
            lignes: [
              ['Vainqueur (prolongation et tirs de barrage compris)', 'Le résultat final, quel qu’il soit', 'Non : deux issues'],
              ['1×2 (temps réglementaire)', 'Le score après 60 minutes seulement', 'Oui : trois issues']
            ]
          },
          {
            type: 'p',
            texte:
              "Si vous pariez sur une équipe en 1×2 et qu'elle gagne en prolongation, votre pari est perdu, car le match était nul après 60 minutes. En contrepartie, la cote 1×2 d'une équipe est plus élevée que sa cote de vainqueur. Lors de notre vérification du 4 novembre 2026, BetPortal affichait les deux marchés sur les matchs de la LNH, dont ceux des Canadiens de Montréal."
          }
        ]
      },
      {
        id: 'types',
        titre: 'Les autres types de paris',
        blocs: [
          {
            type: 'liste',
            items: [
              '**Écart de buts** (« puck line ») : le favori doit gagner par 2 buts ou plus (−1,5) ; l’outsider peut perdre par 1 but (+1,5). La cote du favori à −1,5 est donc plus élevée que sa cote de vainqueur.',
              '**Total de buts** : vous pariez sur plus ou moins d’un certain nombre de buts dans le match, par exemple 5,5.',
              '**Paris sur les joueurs** : buteur, nombre de points ou d’arrêts, selon les sites.',
              '**Paris à long terme** : vainqueur de la coupe Stanley, d’une division ou d’un trophée individuel. L’argent est immobilisé pendant des mois.',
              '**Paris en direct** : les cotes changent pendant le match. Elles bougent vite, et la marge y est souvent plus élevée.'
            ]
          }
        ]
      },
      {
        id: 'calendrier',
        titre: 'Le rythme de la saison',
        blocs: [
          {
            type: 'p',
            texte:
              "La saison régulière de la LNH va d'octobre à avril, avec plusieurs matchs presque chaque soir, puis les séries éliminatoires se jouent jusqu'en juin. Ce volume est un piège : il est facile de parier tous les soirs. Fixez-vous un budget pour toute la saison et un nombre maximal de paris par semaine."
          }
        ]
      },
      {
        id: 'ou-parier',
        titre: 'Où parier sur le hockey',
        blocs: [
          {
            type: 'p',
            texte:
              "Au Québec, Mise-o-jeu (Loto-Québec) est le seul site autorisé. Parmi les sites privés que nous comparons, BetPortal affichait les matchs de la LNH lors de notre vérification. Rolletto et 1win proposent aussi des paris sportifs : vérifiez l'offre de hockey dans leur section sports. Attention, leurs bonus sport imposent des paris combinés : voir notre [comparatif des bonus sport](/paris-sportifs-quebec/#bonus)."
          },
          CTA_BETPORTAL,
          CTA_ROLLETTO
        ]
      }
    ],
    faq: [
      {
        q: 'Que se passe-t-il si le match va en prolongation ?',
        r: "Tout dépend du pari. Un pari « vainqueur » compte la prolongation et les tirs de barrage. Un pari 1×2 ne compte que les 60 minutes du temps réglementaire : si le score est nul à ce moment, seul le pari sur le match nul gagne."
      },
      {
        q: 'Qu’est-ce que le puck line au hockey ?',
        r: 'C’est un pari avec un écart de buts, en général de 1,5 : le favori doit gagner par 2 buts ou plus, et l’outsider ne doit pas perdre par plus d’un but.'
      },
      {
        q: 'Peut-on parier sur les Canadiens de Montréal ?',
        r: 'Oui. Lors de notre vérification du 4 novembre 2026, les matchs des Canadiens figuraient parmi les matchs de la LNH proposés par BetPortal. Au Québec, Mise-o-jeu les propose aussi.'
      }
    ],
    sources: [S.betportal, S.rolletto, S.c218],
    connexes: ['/paris-sportifs-quebec/', '/bonus-paris-sportifs/', '/paris-sportifs-soccer/', '/conditions-de-mise/']
  },

  {
    chemin: '/paris-sportifs-soccer/',
    nomFil: 'Soccer',
    parent: SPORT,
    titre: 'Paris sportifs foot (soccer) : marchés, cotes et conseils',
    description:
      'Paris sur le foot (soccer) : 1×2, double chance, les deux équipes marquent, total de buts, handicap. Ce que chaque pari veut dire et les pièges à éviter.',
    h1: 'Paris sur le soccer : les marchés à connaître avant de parier',
    chapeau:
      "Le soccer est le sport le plus proposé par les sites de paris. C'est aussi celui où le nombre de marchés peut dérouter. Voici les principaux, expliqués simplement.",
    modifie: MAJ,
    resume: 'Les marchés du soccer : 1×2, double chance, buts et handicaps.',
    sections: [
      {
        id: 'marches',
        titre: 'Les principaux marchés',
        blocs: [
          {
            type: 'tableau',
            entetes: ['Pari', 'Vous gagnez si…', 'Issues'],
            lignes: [
              ['1×2', 'Vous trouvez le résultat : victoire à domicile (1), nul (×) ou victoire à l’extérieur (2)', '3'],
              ['Double chance', 'L’une de deux issues se produit (par exemple 1 ou ×)', '3 combinaisons'],
              ['Les deux équipes marquent', 'Chaque équipe marque au moins un but (ou non, selon votre choix)', '2'],
              ['Plus ou moins de 2,5 buts', 'Le match compte 3 buts ou plus (plus), ou 2 au maximum (moins)', '2'],
              ['Handicap', 'L’équipe choisie gagne une fois l’écart de buts appliqué', 'Selon le handicap']
            ]
          },
          {
            type: 'p',
            texte:
              "La double chance couvre deux issues sur trois : sa cote est donc beaucoup plus basse. Le handicap, lui, sert à rendre un match déséquilibré plus serré : un favori à −1 doit gagner par 2 buts ou plus pour que le pari gagne."
          }
        ]
      },
      {
        id: 'temps-reglementaire',
        titre: 'Le temps réglementaire, la règle qui piège',
        blocs: [
          {
            type: 'p',
            texte:
              "Sauf mention contraire, les paris de soccer se règlent en général sur le temps réglementaire : 90 minutes plus le temps additionnel. La prolongation et les tirs au but ne comptent pas. Pour parier sur l'équipe qui passe au tour suivant d'une coupe, choisissez le marché « qualification ». Vérifiez toujours le règlement du site."
          }
        ]
      },
      {
        id: 'competitions',
        titre: 'Les compétitions les plus suivies',
        blocs: [
          {
            type: 'p',
            texte:
              "Lors de notre vérification du 4 novembre 2026, BetPortal affichait notamment la Ligue des champions de l'UEFA, la Premier League anglaise, la Liga espagnole et la Ligue 1 française. Au Canada, le CF Montréal évolue en MLS, et la Coupe du monde 2026 a été organisée conjointement par le Canada, les États-Unis et le Mexique."
          },
          {
            type: 'p',
            texte:
              "Plus un championnat est suivi, plus ses cotes sont en général serrées : la marge du site y est souvent plus faible que sur des divisions inférieures ou des matchs amicaux."
          }
        ]
      },
      {
        id: 'ou-parier',
        titre: 'Où parier sur le soccer',
        blocs: [
          {
            type: 'p',
            texte:
              "Au Québec, Mise-o-jeu (Loto-Québec) est le seul site autorisé. Parmi les sites privés que nous comparons, Rolletto, BetPortal et 1win proposent des paris sportifs. Leurs bonus sport imposent des paris combinés : comparez-les dans notre [guide des paris sportifs](/paris-sportifs-quebec/#bonus)."
          },
          CTA_ROLLETTO,
          CTA_BETPORTAL
        ]
      }
    ],
    faq: [
      {
        q: 'Que veut dire 1×2 au soccer ?',
        r: '1 désigne la victoire de l’équipe qui reçoit, × le match nul et 2 la victoire de l’équipe qui se déplace. Le pari porte sur le temps réglementaire.'
      },
      {
        q: 'Les prolongations comptent-elles dans un pari de soccer ?',
        r: "En général non : la plupart des paris se règlent après 90 minutes plus le temps additionnel. Pour parier sur l'équipe qualifiée, choisissez le marché « qualification »."
      },
      {
        q: 'Foot ou soccer : est-ce la même chose ?',
        r: 'Oui. Au Québec, on dit soccer ; en France, football ou foot. Les sites de paris utilisent souvent « football ».'
      }
    ],
    sources: [S.betportal, S.rolletto, S.c218],
    connexes: ['/paris-sportifs-quebec/', '/bonus-paris-sportifs/', '/paris-sportifs-hockey/', '/conditions-de-mise/']
  }
];

export default canadaSport;
