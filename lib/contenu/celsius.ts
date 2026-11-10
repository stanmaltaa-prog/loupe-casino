import type { ContenuCasino } from './types';
import { avecTest, titreAvisTeste } from './titre-test';

const celsius: ContenuCasino = {
  avis: {
    titre: titreAvisTeste('celsius', 'Avis Celsius Casino 2026', 'Avis Celsius Casino au Québec 2026 : fiable ? Bonus, retraits'),
    description: avecTest(
      'celsius',
      (h) => `Testé en argent réel : retrait crypto reçu en ${h} h chez Celsius. Bonus de 100 % puis 200 %, mise de 50 fois en 20 jours, licence et limites de retrait.`,
      "Avis Celsius Casino au Québec : bonus de 100 % puis 200 %, mise de 50 fois en 20 jours, retraits limités à 2 500 $ par semaine. Ce qu'il faut savoir."
    ),
    h1: 'Avis Celsius Casino : un immense catalogue, des conditions à lire de près',
    intro: [
      "Celsius mise sur le volume : plus de 6 000 machines à sous et 800 jeux en direct selon l'opérateur, et une longue liste de moyens de paiement, cryptomonnaies comprises. C'est aussi l'un des rares casinos du comparatif à publier ses règles de retrait chiffrées.",
      "Le revers, c'est un bonus exigeant (50 fois le dépôt et le bonus) et une licence d'Anjouan affichée sans numéro. Voici notre lecture, point par point."
    ],
    sections: [
      {
        titre: 'Notre lecture du bonus',
        paragraphes: [
          "Celsius offre 100 % sur le premier dépôt et 200 % sur le deuxième. La page officielle consultée n'indique pas de plafond : nous ne publions donc pas de montant maximal tant que l'opérateur ne l'a pas confirmé.",
          "La condition de mise est de 50 fois le dépôt et le bonus, à compléter en 20 jours. Avec un premier dépôt de 100 $, vous recevez 100 $ de bonus et devez miser 10 000 $ en 20 jours, soit 500 $ par jour en moyenne. C'est l'une des conditions les plus lourdes du marché ; le délai de 20 jours laisse en revanche plus de souplesse que les 5 jours de Rolletto.",
          "Pendant la mise, chaque tour est limité à 5 $ ou à 10 % de votre solde disponible, le plus bas des deux. Les gains tirés d'un bonus sans dépôt ou de tours gratuits sont plafonnés à 100 $."
        ]
      },
      {
        titre: 'Retraits',
        paragraphes: [
          "Celsius publie ses limites : les gains jusqu'à 10 000 $ sont versés par tranches hebdomadaires de 2 500 $ au maximum, et les montants plus élevés par tranches mensuelles de 10 000 $ au maximum. Pour la plupart des joueurs, ces plafonds ne posent pas de problème ; pour un gros gain, il faut prévoir plusieurs semaines, voire plusieurs mois."
        ]
      },
      {
        titre: 'Licence et sécurité',
        paragraphes: [
          "Le site est exploité par Celsius Holdings N.V., immatriculée sous le numéro 157856, avec une adresse à Willemstad (Curaçao). Le pied de page mentionne une « Anjouan Gaming Licence », sans numéro. Un badge « Gaming Curacao » apparaît aussi, mais il renvoie vers BeGambleAware : il ne prouve pas l'existence d'une licence de Curaçao.",
          "Une licence d'Anjouan offre moins de garanties de recours qu'une licence dont le numéro peut être vérifié dans un registre public. Ce n'est pas, en soi, un signe de fraude, mais c'est la principale raison pour laquelle Celsius n'obtient que 6 sur 10 en transparence."
        ]
      },
      {
        titre: 'Paiements',
        paragraphes: [
          "La page d'accueil affiche Visa, Mastercard, Apple Pay, Google Pay, Skrill, PayPal et Paysafecard, ainsi que neuf cryptomonnaies (Bitcoin, Ethereum, Litecoin, Tether, Tron, Bitcoin Cash, BNB, Dogecoin et XRP). Notre test de novembre 2026 a été fait avec un compte en dollars canadiens. Nous n'avons pas vu Interac."
        ]
      },
      {
        titre: 'Celsius pour les joueurs du Québec',
        paragraphes: [
          "Celsius accepte les joueurs du Canada et du Québec, ce que le gestionnaire d'affiliation de la marque nous a confirmé par écrit le 4 novembre 2026. Il faut avoir 18 ans ou plus pour jouer au Québec.",
          'Trois points méritent votre attention avant un premier dépôt depuis le Québec :'
        ],
        liste: [
          "**Dollar canadien** : notre test de novembre 2026 a été fait avec un compte en dollars canadiens, et les montants des conditions s'y appliquent au même chiffre.",
          "**Pas d'Interac** : les solutions les plus simples sont Visa, Mastercard, Apple Pay ou Google Pay. Voir notre guide [casino et Interac](/casino-interac/).",
          "**Pas d'autorisation québécoise** : en cas de litige, vous ne pourrez pas vous tourner vers un organisme du Québec. Voir [ce que dit la loi au Québec](/casino-en-ligne-legal-quebec/)."
        ]
      }
    ],
    verdict: [
      "Celsius convient au joueur qui veut le plus grand choix de jeux et des règles de retrait connues d'avance, et qui compte jouer sans bonus ou avec un petit dépôt.",
      "Si votre but est de débloquer un bonus, la mise de 50 fois (dépôt + bonus) le rend difficile à rentabiliser. Comparez avec BetPortal, dont la mise ne porte que sur le bonus."
    ],
    pourQui: [
      'Les joueurs qui veulent un très grand catalogue de machines à sous et de jeux en direct',
      'Ceux qui paient en cryptomonnaie ou par portefeuille électronique',
      'Ceux qui préfèrent connaître les limites de retrait avant de jouer'
    ],
    pasPourQui: [
      'Les chasseurs de bonus : 50 fois (dépôt + bonus), c’est très exigeant',
      'Ceux qui veulent payer par Interac'
    ],
    faq: [
      {
        q: 'Quel est votre avis sur Celsius Casino ?',
        r: avecTest(
          'celsius',
          (h) => `Un bon choix pour son immense catalogue et ses règles de retrait publiées : lors de notre test en argent réel, le retrait crypto est arrivé en ${h} h. Ses deux points faibles : un bonus à miser 50 fois en 20 jours et une licence d'Anjouan affichée sans numéro.`,
          "Un bon choix pour son immense catalogue et ses règles de retrait publiées. Ses deux points faibles : un bonus à miser 50 fois en 20 jours et une licence d'Anjouan affichée sans numéro."
        )
      },
      {
        q: 'Celsius Casino est-il fiable ?',
        r: "L'exploitant est identifié (Celsius Holdings N.V., n° 157856, à Curaçao) et les règles de retrait sont publiées en détail, ce qui rassure. En revanche, la licence d'Anjouan est affichée sans numéro vérifiable : c'est son principal point faible. Notre conseil : un petit dépôt et un premier retrait modeste avant d'aller plus loin."
      },
      {
        q: 'Peut-on jouer chez Celsius depuis le Québec ?',
        r: "Oui. Celsius accepte les joueurs du Canada et du Québec, ce que le gestionnaire d'affiliation de la marque nous a confirmé par écrit le 4 novembre 2026. Celsius n'est toutefois pas autorisé par le gouvernement du Québec, où seul Loto-Québec l'est, et il faut avoir 18 ans pour jouer."
      },
      {
        q: 'Quel est le bonus de bienvenue de Celsius Casino ?',
        r: "100 % sur le premier dépôt et 200 % sur le deuxième. La page officielle consultée n'indique pas de plafond ; le dépôt minimum est de 10 $ et la mise de 50 fois le dépôt et le bonus, en 20 jours."
      },
      {
        q: 'Combien peut-on retirer par semaine chez Celsius ?',
        r: "Jusqu'à 2 500 $ par semaine pour des gains allant jusqu'à 10 000 $. Au-delà, les versements se font par tranches mensuelles de 10 000 $ au maximum."
      },
      {
        q: 'Celsius Casino a-t-il une licence ?',
        r: "Le site indique une licence d'Anjouan (Union des Comores), sans numéro affiché. L'exploitant est Celsius Holdings N.V., immatriculée à Curaçao sous le numéro 157856."
      },
      {
        q: 'Celsius accepte-t-il Interac ?',
        r: "Nous ne l'avons pas vu parmi les moyens de paiement affichés. Celsius accepte notamment les cartes Visa et Mastercard, Apple Pay, Google Pay, Skrill, PayPal, Paysafecard et neuf cryptomonnaies."
      },
      {
        q: 'Y a-t-il une application Celsius ?',
        r: "Le site propose une page d'installation pour iOS et Android ; les jeux se lancent aussi directement dans le navigateur, sans téléchargement."
      }
    ]
  },

  bonus: {
    titre: 'Bonus Celsius Casino : 100 % + 200 %, mise de 50 fois',
    description:
      'Bonus Celsius expliqué : 100 % au 1er dépôt, 200 % au 2e, mise de 50 fois (dépôt + bonus) en 20 jours, mise maximale de 5 $. Exemple chiffré et conseils.',
    h1: 'Bonus Celsius Casino : 100 % puis 200 %, et ce que la mise de 50 fois implique',
    intro: [
      "Sur le papier, 300 % sur deux dépôts paraît énorme. Ce qui compte vraiment, c'est la somme à miser avant de pouvoir retirer, et chez Celsius elle est élevée."
    ],
    sections: [
      {
        titre: 'Les règles qui comptent',
        paragraphes: [],
        liste: [
          'Mise de 50 fois le montant du dépôt et du bonus, sauf mention contraire dans la promotion.',
          'Délai de 20 jours après avoir réclamé le bonus.',
          'Mise maximale de 5 $ par tour, ou 10 % du solde si c’est plus bas (la règle des 10 % ne s’applique pas sous 0,50 $).',
          'Dépôt minimum de 10 $.',
          'Gains d’un bonus sans dépôt ou de tours gratuits plafonnés à 100 $.'
        ]
      },
      {
        titre: 'Le deuxième dépôt à 200 %',
        paragraphes: [
          "Le deuxième palier triple votre dépôt, mais la mise grimpe d'autant : un dépôt de 100 $ avec 200 $ de bonus demande 300 $ × 50, soit 15 000 $ de mises. Avant de le réclamer, demandez-vous si vous jouerez vraiment autant dans les 20 jours."
        ]
      },
      {
        titre: 'Bonus sans dépôt chez Celsius ?',
        paragraphes: [
          "Les conditions de Celsius prévoient un plafond de 100 $ sur les gains de bonus sans dépôt et de tours gratuits, mais nous n'avons pas trouvé d'offre sans dépôt active pour les nouveaux joueurs sur les pages consultées. Méfiez-vous des sites qui promettent un bonus sans dépôt sans lien vers les conditions officielles."
        ]
      }
    ],
    faq: [
      {
        q: 'Quel est le plafond du bonus Celsius ?',
        r: "La page officielle consultée n'en indique pas. Nous n'affichons pas de montant maximal tant qu'il n'est pas confirmé par l'opérateur ; vérifiez-le dans la caisse avant de déposer."
      },
      {
        q: 'Combien faut-il miser pour retirer le bonus Celsius ?',
        r: '50 fois le dépôt plus le bonus. Exemple : 100 $ déposés + 100 $ de bonus = 10 000 $ à miser en 20 jours.'
      },
      {
        q: 'Peut-on jouer sans bonus chez Celsius ?',
        r: "Oui. Si vous ne voulez pas de condition de mise, ne réclamez pas le bonus au moment du dépôt. C'est souvent le meilleur choix pour un petit budget."
      }
    ]
  },

  retrait: {
    titre: 'Retrait Celsius Casino : limites, délais et conseils',
    description: avecTest(
      'celsius',
      (h) => `Retrait chez Celsius : reçu en ${h} h en crypto lors de notre test. Limites officielles : 2 500 $ par semaine jusqu'à 10 000 $ de gains, puis 10 000 $ par mois.`,
      "Retrait chez Celsius Casino : 2 500 $ par semaine jusqu'à 10 000 $ de gains, puis 10 000 $ par mois. Règles officielles expliquées et conseils pratiques."
    ),
    h1: 'Retrait chez Celsius Casino : les limites officielles expliquées',
    intro: [
      "Celsius fait partie des rares casinos de notre comparatif à publier des limites de retrait chiffrées. C'est une bonne nouvelle pour la transparence, mais il faut les connaître avant de jouer gros."
    ],
    sections: [
      {
        titre: 'Les limites en un coup d’œil',
        paragraphes: [
          "Les gains jusqu'à 10 000 $ sont versés par tranches hebdomadaires de 2 500 $ au maximum. Les montants supérieurs sont versés par tranches mensuelles de 10 000 $ au maximum. Le rakeback, lui, est plafonné à 20 fois son montant au retrait, sauf mention contraire.",
          "Exemple : un gain de 8 000 $ peut être versé en quatre tranches hebdomadaires (2 500 $, 2 500 $, 2 500 $ puis 500 $), donc sur environ un mois."
        ]
      },
      {
        titre: 'Pour retirer sans accroc',
        paragraphes: [],
        liste: [
          'Terminez la mise de tout bonus actif : un retrait demandé avant peut faire perdre le bonus et ses gains.',
          'Préparez votre pièce d’identité et une preuve d’adresse : la vérification d’identité est en général exigée avant le premier retrait.',
          'Retirez de préférence vers le moyen utilisé pour déposer.',
          'En crypto, vérifiez deux fois l’adresse de votre portefeuille et le réseau choisi : une erreur est le plus souvent irréversible.'
        ]
      },
      {
        titre: 'Ce que nous n’avons pas pu confirmer',
        paragraphes: [
          "Les délais de traitement par moyen de paiement ne figurent pas dans les conditions consultées. Si la rapidité compte pour vous, posez la question au service à la clientèle avant de déposer."
        ]
      }
    ],
    faq: [
      {
        q: 'Quel est le retrait maximum chez Celsius ?',
        r: "2 500 $ par semaine pour des gains allant jusqu'à 10 000 $, puis 10 000 $ par mois au-delà."
      },
      {
        q: 'Celsius permet-il le retrait en crypto ?',
        r: "Celsius accepte plusieurs cryptomonnaies, dont le Bitcoin, l'Ethereum, le Litecoin et le Tether. Vérifiez dans la caisse les cryptos disponibles au retrait pour votre compte."
      },
      {
        q: 'Pourquoi mon retrait Celsius est-il bloqué ?',
        r: "Les causes les plus courantes sont une mise de bonus non terminée, une vérification d'identité en attente ou un dépassement de la limite hebdomadaire. Le service à la clientèle peut vous dire laquelle s'applique."
      }
    ]
  },

  fiable: {
    titre: 'Celsius Casino est-il fiable ? Licence et exploitant',
    description:
      "Celsius Casino est-il fiable ? Exploitant Celsius Holdings N.V. (n° 157856), licence d'Anjouan sans numéro, badge de Curaçao trompeur : notre analyse.",
    h1: 'Celsius Casino est-il fiable ? Les faits, sans détour',
    intro: [
      "Celsius fournit plusieurs informations utiles sur son exploitant, mais sa licence reste floue. Voici ce qui rassure et ce qui demande de la prudence."
    ],
    sections: [
      {
        titre: 'Ce qui rassure',
        paragraphes: [
          "L'exploitant est nommé : Celsius Holdings N.V., immatriculée sous le numéro 157856, avec une adresse à Willemstad, à Curaçao. Les conditions de bonus et les limites de retrait sont publiées en détail, y compris les règles les moins favorables au joueur."
        ]
      },
      {
        titre: 'Ce qui demande de la prudence',
        paragraphes: [
          "La licence affichée est une licence d'Anjouan, sans numéro. Le badge « Gaming Curacao » visible en bas de page renvoie vers BeGambleAware, pas vers un registre de licences : il ne prouve donc pas une licence de Curaçao.",
          "Les avis de joueurs en ligne sont partagés, comme pour la plupart des casinos internationaux. Lisez-les en regardant surtout les plaintes récentes sur les retraits et la vérification d'identité."
        ]
      },
      {
        titre: 'Notre conseil',
        paragraphes: [
          "Commencez par un petit dépôt, faites vérifier votre identité tôt et testez un premier retrait modeste avant d'engager des montants plus importants. Et gardez en tête qu'aucun casino privé n'est autorisé par le gouvernement du Québec."
        ]
      }
    ],
    faq: [
      {
        q: 'Qui exploite Celsius Casino ?',
        r: 'Celsius Holdings N.V., immatriculée sous le numéro 157856, avec une adresse à Willemstad (Curaçao).'
      },
      {
        q: 'Celsius a-t-il une licence de Curaçao ?',
        r: "Le pied de page indique une licence d'Anjouan. Le badge « Gaming Curacao » renvoie vers BeGambleAware et ne prouve pas une licence de Curaçao."
      },
      {
        q: 'Les joueurs du Canada sont-ils acceptés chez Celsius ?',
        r: "Le Canada ne figure pas dans la liste des pays exclus que nous avons consultée, mais Celsius précise que cette liste peut varier. Le formulaire d'inscription vous le dira."
      }
    ]
  },

  inscription: {
    titre: 'Inscription Celsius Casino : étapes et vérification',
    description:
      "S'inscrire sur Celsius Casino : création du compte, dépôt minimum de 10 $, choix du bonus, vérification d'identité. Le guide pas à pas.",
    h1: 'Inscription sur Celsius Casino : le guide pas à pas',
    intro: [
      "Ouvrir un compte chez Celsius se fait en quelques minutes. Le choix important arrive au premier dépôt : prendre le bonus ou non."
    ],
    etapes: [
      { titre: 'Ouvrez la page de Celsius', texte: 'Passez par notre bouton pour arriver sur le site officiel, puis cliquez sur l’inscription.' },
      { titre: 'Créez votre compte', texte: "Utilisez vos vrais nom et adresse : ils devront correspondre à vos documents lors de la vérification d'identité." },
      { titre: 'Choisissez votre moyen de paiement', texte: 'Cartes, portefeuilles électroniques ou cryptomonnaies. Le dépôt minimum est de 10 $.' },
      { titre: 'Décidez si vous prenez le bonus', texte: 'Avec le bonus, il faudra miser 50 fois (dépôt + bonus) en 20 jours. Sans bonus, vos gains sont retirables sans condition de mise.' },
      { titre: 'Faites vérifier votre identité tôt', texte: "Envoyez pièce d'identité et preuve d'adresse dès le début pour ne pas attendre au moment du premier retrait." }
    ],
    sections: [
      {
        titre: 'Avant de déposer',
        paragraphes: [
          "Fixez une limite de dépôt qui correspond à votre budget de divertissement. Vous devez avoir 18 ans ou plus pour jouer."
        ]
      }
    ],
    faq: [
      {
        q: 'Quel est le dépôt minimum chez Celsius ?',
        r: '10 $ ou l’équivalent dans une autre devise, sauf mention contraire dans une promotion.'
      },
      {
        q: 'Peut-on s’inscrire chez Celsius avec un compte en dollars canadiens ?',
        r: "Oui : notre test de novembre 2026 a été fait avec un compte en dollars canadiens, et les montants des conditions s'y appliquent au même chiffre."
      }
    ]
  }
};

export default celsius;
