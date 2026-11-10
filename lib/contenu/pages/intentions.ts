import type { PageGuide } from './types';
import {
  CASINOS,
  avecSport,
  cheminCasino,
  depotMinTexte,
  exempleMise,
  licenceTexte,
  miseTexte,
  operateurTexte,
  retraitsTexte,
  type Casino
} from '@/lib/casinos';
import { MACHINES } from '@/lib/contenu/machines';
import { DERNIER_RELEVE, classementRetraits, dernier } from '@/lib/tests';
import { dateLongue, montant } from '@/lib/site';
import { CTA_BETPORTAL, CTA_ROLLETTO, CTA_VELOBET } from './canada-sport';
import { RESUMES_MARQUES } from '../marques';

/**
 * Pages d'intention d'achat (novembre 2026) : le plus payant, nouveau casino, bonus sans dépôt,
 * casino fiable, sites de paris sportifs au Canada, bonus paris sportifs.
 * Tous les tableaux sont calculés à partir de donnees/casinos.json et du journal donnees/tests.json :
 * une offre ou un test mis à jour met ces pages à jour.
 */
const MAJ = '2026-11-10';

const heures = (n?: number | null) => (n === null || n === undefined ? 'Non testé' : `${n} h`);
const lien = (c: Casino) => `[${c.nom}](${cheminCasino(c)})`;
const lienRetrait = (c: Casino) => `[${c.nom}](${cheminCasino(c, c.sousPages.includes('retrait') ? 'retrait' : undefined)})`;

const PARIS = { nom: 'Paris sportifs', chemin: '/paris-sportifs-quebec/' };

/* ---------- Le plus payant ---------- */

const RAPIDES = classementRetraits();
const PLUS_RAPIDE = RAPIDES[0];

/** Bonus pour un dépôt de 100 $ et montant à miser, pour les casinos dont la mise est publiée. */
const EXEMPLES = CASINOS.map((c) => ({ c, ex: exempleMise(c, 100) })).filter((x) => x.ex) as {
  c: Casino;
  ex: NonNullable<ReturnType<typeof exempleMise>>;
}[];
const MOINS_A_MISER = [...EXEMPLES].sort((a, b) => a.ex.aMiser - b.ex.aMiser)[0];

const TOP_RTP = [...MACHINES].sort((a, b) => b.rtp - a.rtp).slice(0, 5);

const plusPayant: PageGuide = {
  chemin: '/casino-en-ligne-le-plus-payant/',
  nomFil: 'Casino le plus payant',
  titre: 'Casino en ligne le plus payant au Québec (2026)',
  description:
    'Quel casino en ligne paie le mieux au Québec ? Délais de retrait testés en argent réel, plafonds, mise du bonus et taux de retour des jeux, casino par casino.',
  h1: 'Casino en ligne le plus payant au Québec : ce qui compte vraiment',
  chapeau:
    "Aucun casino ne fait gagner plus que les autres à long terme : l'avantage reste toujours du côté de la maison. Ce qui change d'un site à l'autre, c'est la vitesse et le plafond des retraits, la mise exigée par le bonus et le taux de retour des jeux. Voici ces quatre critères, mesurés.",
  modifie: MAJ,
  resume: 'Retraits testés, plafonds, mise du bonus et RTP : ce qui fait vraiment un casino « payant ».',
  sections: [
    {
      id: 'classement',
      titre: 'Les casinos classés selon ce qui paie vraiment',
      blocs: [
        {
          type: 'tableau',
          legende: `Délais constatés lors de nos tests en argent réel (dernier relevé : ${dateLongue(DERNIER_RELEVE)}). Plafonds et mises selon les conditions officielles.`,
          entetes: ['Casino', 'Retrait crypto constaté', 'Retrait carte constaté', 'Plafond de retrait', 'Mise du bonus'],
          lignes: RAPIDES.map((c) => [
            lienRetrait(c),
            `**${heures(dernier(c, 'crypto')?.delaiHeures)}**`,
            heures(dernier(c, 'carte')?.delaiHeures),
            retraitsTexte(c),
            miseTexte(c)
          ])
        },
        {
          type: 'p',
          texte: PLUS_RAPIDE
            ? `Lors de nos derniers tests, ${lien(PLUS_RAPIDE)} a versé le plus vite : ${heures(dernier(PLUS_RAPIDE, 'crypto')?.delaiHeures)} en crypto. Le détail de chaque relevé est dans notre [journal des délais de retrait](/delais-de-retrait-casino/).`
            : 'Aucun test publié pour le moment.'
        }
      ]
    },
    {
      id: 'definition',
      titre: '« Le plus payant » : ce que ça veut dire',
      blocs: [
        {
          type: 'liste',
          ordonnee: true,
          items: [
            "**Le taux de retour des jeux (RTP).** C'est la part des mises qu'un jeu redistribue en moyenne, sur des millions de parties. Un RTP de 96 % ne promet rien sur une soirée : il décrit une moyenne à très long terme.",
            '**La vitesse des retraits.** Un casino qui paie en quelques heures vous laisse moins de temps pour rejouer vos gains.',
            '**Le plafond des retraits.** Un gros gain peut être versé en plusieurs fois, sur des semaines.',
            '**La mise du bonus.** Plus elle est haute, plus vous jouez avant de pouvoir retirer, et plus l’avantage de la maison pèse.'
          ]
        }
      ]
    },
    {
      id: 'rtp',
      titre: 'Les jeux au meilleur taux de retour',
      blocs: [
        {
          type: 'p',
          texte:
            'Parmi les machines à sous de notre catalogue, voici les cinq au RTP publié le plus élevé. Certains éditeurs publient plusieurs versions d’un même jeu : le casino choisit laquelle il propose. Vérifiez le RTP affiché dans l’écran d’information du jeu avant de jouer.'
        },
        {
          type: 'liste',
          items: TOP_RTP.map((m) => `[${m.nom}](/machines-a-sous/${m.slug}/) : RTP de ${String(m.rtp).replace('.', ',')} %`)
        },
        {
          type: 'p',
          texte: 'Le classement complet est dans notre guide des [machines à sous au meilleur RTP](/machines-a-sous-meilleur-rtp/).'
        }
      ]
    },
    {
      id: 'bonus',
      titre: 'Un gros bonus ne paie pas forcément plus',
      blocs: [
        {
          type: 'tableau',
          legende: 'Pour un premier dépôt de 100 $, au premier palier du bonus de bienvenue.',
          entetes: ['Casino', 'Bonus reçu', 'Montant à miser', 'Délai'],
          lignes: EXEMPLES.map(({ c, ex }) => [
            lien(c),
            montant(ex.bonus, ex.devise),
            `**${montant(ex.aMiser, ex.devise)}**`,
            ex.parJour ? `${c.offre.mise?.delaiJours} jours` : 'Non publié'
          ])
        },
        {
          type: 'p',
          texte: MOINS_A_MISER
            ? `C'est chez ${lien(MOINS_A_MISER.c)} que le montant à miser est le plus bas pour un dépôt de 100 $. Si vous voulez retirer vite, jouer sans bonus reste une option : vos gains sont alors retirables sans condition de mise, selon les règles du casino. Notre [calculateur de mise](/conditions-de-mise/) fait le calcul pour n'importe quel montant.`
            : 'Notre [calculateur de mise](/conditions-de-mise/) fait le calcul pour n’importe quel montant.'
        }
      ]
    }
  ],
  faq: [
    {
      q: 'Quel est le casino en ligne le plus payant au Québec ?',
      r: PLUS_RAPIDE
        ? `Aucun casino ne paie davantage à long terme : les jeux gardent toujours un avantage pour la maison. Selon nos tests en argent réel, ${PLUS_RAPIDE.nom} a versé ses retraits le plus vite (${heures(dernier(PLUS_RAPIDE, 'crypto')?.delaiHeures)} en crypto). Comparez aussi les plafonds et la mise du bonus dans le tableau en haut de page.`
        : 'Aucun casino ne paie davantage à long terme : les jeux gardent toujours un avantage pour la maison.'
    },
    {
      q: 'Un casino peut-il baisser le RTP de ses jeux ?',
      r: "Certains éditeurs proposent plusieurs versions d'un même jeu, avec des RTP différents, et le casino choisit laquelle il met en ligne. Le RTP est indiqué dans l'écran d'information du jeu : vérifiez-le avant de jouer."
    },
    {
      q: 'Quel bonus fait gagner le plus ?',
      r: "Aucun bonus ne fait gagner à coup sûr. Le plus avantageux est souvent celui qui demande de miser le moins, dans le délai le plus long. Comparez le montant à miser plutôt que le pourcentage affiché."
    }
  ],
  sources: CASINOS.filter((c) => c.retraits).map((c) => ({ titre: `${c.nom} : règles de retrait publiées`, url: c.retraits!.source })),
  connexes: ['/delais-de-retrait-casino/', '/casino-retrait-rapide/', '/machines-a-sous-meilleur-rtp/']
};

/* ---------- Nouveau casino ---------- */

/** Date d'ajout de chaque casino à notre comparatif. */
const AJOUTS: Record<string, string> = {
  velobet: '2026-11-09',
  rolletto: '2026-11-03',
  celsius: '2026-11-03',
  betportal: '2026-11-03',
  '1win': '2026-11-03'
};
const PAR_AJOUT = [...CASINOS].sort((a, b) => (AJOUTS[b.id] || '').localeCompare(AJOUTS[a.id] || '') || a.nom.localeCompare(b.nom));

const nouveau: PageGuide = {
  chemin: '/nouveau-casino-en-ligne/',
  nomFil: 'Nouveau casino en ligne',
  titre: 'Nouveau casino en ligne : 6 vérifications avant de jouer',
  description:
    'Nouveau casino en ligne au Canada : nos derniers ajouts, testés en argent réel, et les 6 vérifications à faire avant de déposer sur un site récent.',
  h1: 'Nouveau casino en ligne : nos derniers ajouts et comment les vérifier',
  chapeau:
    "Un casino récent peut offrir de bons bonus pour se faire connaître, mais il n'a pas encore d'historique. Voici les derniers casinos entrés dans notre comparatif, tous testés en argent réel, et les six vérifications à faire avant de déposer.",
  modifie: MAJ,
  resume: 'Nos derniers casinos ajoutés, et les 6 vérifications avant de déposer sur un site récent.',
  sections: [
    {
      id: 'ajouts',
      titre: 'Les derniers casinos ajoutés à notre comparatif',
      blocs: [
        {
          type: 'tableau',
          entetes: ['Casino', 'Ajouté le', 'Licence', 'Retrait crypto constaté'],
          lignes: PAR_AJOUT.map((c) => [lien(c), AJOUTS[c.id] ? dateLongue(AJOUTS[c.id]) : '', licenceTexte(c), heures(dernier(c, 'crypto')?.delaiHeures)])
        },
        {
          type: 'p',
          texte:
            "Nous n'ajoutons un casino qu'après l'avoir testé : un dépôt minimum suivi d'un retrait, puis un dépôt de 1 000 $ CA. Les résultats sont publiés dans notre [journal des délais de retrait](/delais-de-retrait-casino/)."
        }
      ]
    },
    {
      id: 'verifications',
      titre: 'Les 6 vérifications avant de déposer',
      blocs: [
        {
          type: 'liste',
          ordonnee: true,
          items: [
            '**La licence et son numéro.** Un numéro vérifiable vaut mieux qu’un simple logo en bas de page.',
            '**Le nom de l’exploitant.** La société qui gère le site doit être nommée dans les conditions générales.',
            '**Les conditions du bonus.** Mise, délai, mise maximale par partie, jeux exclus : tout doit être écrit avant que vous acceptiez.',
            '**Les règles de retrait.** Montant minimum, délai de traitement et plafond par semaine ou par mois.',
            '**Un petit premier dépôt.** Déposez le minimum, puis demandez un retrait pour voir comment le casino paie.',
            '**La vérification d’identité.** Envoyez vos documents dès l’inscription : c’est souvent elle qui retarde le premier retrait.'
          ]
        },
        {
          type: 'encadre',
          ton: 'info',
          titre: 'Ce que « nouveau » ne garantit pas',
          texte:
            "Un site récent n'a pas d'historique de paiements. Ses conditions peuvent aussi changer plus souvent. Relisez-les avant chaque nouveau dépôt, et gardez une copie des pages de bonus que vous acceptez."
        }
      ]
    },
    {
      id: 'loi',
      titre: 'Nouveaux casinos et loi au Québec',
      blocs: [
        {
          type: 'p',
          texte:
            "Au Québec, Loto-Québec est le seul exploitant autorisé. Les casinos de notre comparatif, nouveaux ou non, sont exploités depuis l'étranger sous d'autres licences. Le détail est dans notre guide [casino en ligne légal au Québec](/casino-en-ligne-legal-quebec/)."
        }
      ]
    }
  ],
  faq: [
    {
      q: 'Quel est le dernier casino ajouté à votre comparatif ?',
      r: PAR_AJOUT[0]
        ? `${PAR_AJOUT[0].nom}, ajouté le ${dateLongue(AJOUTS[PAR_AJOUT[0].id])} après un test en argent réel.`
        : 'Le tableau de cette page liste nos ajouts par date.'
    },
    {
      q: 'Un nouveau casino est-il moins fiable ?',
      r: "Pas forcément, mais il n'a pas encore d'historique. Vérifiez la licence, l'exploitant et les règles de retrait, et commencez par un petit dépôt suivi d'un retrait."
    },
    {
      q: 'Les nouveaux casinos ont-ils de meilleurs bonus ?',
      r: "Souvent plus gros, mais pas forcément plus faciles à débloquer. Comparez le montant à miser et le délai, pas seulement le pourcentage."
    }
  ],
  connexes: ['/casino-en-ligne-fiable/', '/delais-de-retrait-casino/', '/casino-en-ligne-legal-quebec/']
};

/* ---------- Bonus sans dépôt ---------- */

const PROCHE: Record<string, string> = {
  velobet: '30 tours gratuits dès un premier dépôt de 10 $, et une remise VIP de 10 % sans condition de mise',
  betportal: 'Remise en argent quotidienne, jusqu’à 25 %',
  celsius: 'Ses conditions plafonnent à 100 $ les gains tirés d’un bonus sans dépôt'
};

const sansDepot: PageGuide = {
  chemin: '/casino-bonus-sans-depot/',
  nomFil: 'Bonus sans dépôt',
  titre: 'Bonus sans dépôt au Québec : ce qui existe vraiment (2026)',
  description:
    'Bonus sans dépôt au Québec : ce que nous avons trouvé casino par casino, les conditions à lire et les offres les plus proches avec un petit dépôt.',
  h1: 'Bonus sans dépôt au Québec : ce qui existe vraiment',
  chapeau:
    "Lors de notre dernière vérification, aucun casino de notre comparatif ne proposait de bonus sans dépôt aux nouveaux joueurs. Voici ce que nous avons trouvé, comment fonctionnent ces offres quand elles existent, et les options les plus proches avec un petit dépôt.",
  modifie: MAJ,
  resume: 'Ce qui existe vraiment en bonus sans dépôt, et les offres les plus proches avec un petit dépôt.',
  sections: [
    {
      id: 'constat',
      titre: 'Ce que nous avons trouvé, casino par casino',
      blocs: [
        {
          type: 'tableau',
          entetes: ['Casino', 'Bonus sans dépôt pour les nouveaux joueurs', 'L’offre la plus proche', 'Vérifié le'],
          lignes: CASINOS.map((c) => [
            lien(c),
            'Aucun',
            PROCHE[c.id] || `Bonus de bienvenue dès ${depotMinTexte(c)} de dépôt`,
            dateLongue(c.offre.verifieLe)
          ])
        }
      ]
    },
    {
      id: 'fonctionnement',
      titre: 'Comment fonctionne un bonus sans dépôt',
      blocs: [
        {
          type: 'p',
          texte:
            "Un bonus sans dépôt donne un petit montant ou quelques tours gratuits à l'inscription, sans avoir à déposer. En contrepartie, ses conditions sont en général plus strictes que celles d'un bonus classique :"
        },
        {
          type: 'liste',
          items: [
            '**Une mise élevée** avant de pouvoir retirer les gains.',
            '**Un gain maximal plafonné**, souvent à quelques dizaines ou centaines de dollars.',
            '**Un dépôt exigé avant le premier retrait** chez certains casinos, pour vérifier votre moyen de paiement.',
            '**Une vérification d’identité** obligatoire avant tout versement.'
          ]
        },
        {
          type: 'encadre',
          ton: 'alerte',
          titre: 'Méfiez-vous des codes trop beaux',
          texte:
            "Un code « sans dépôt » trouvé sur un forum peut être expiré ou réservé à un autre pays. Vérifiez toujours l'offre sur la page des promotions du casino avant de vous inscrire."
        }
      ]
    },
    {
      id: 'alternatives',
      titre: 'Les alternatives avec un petit dépôt',
      blocs: [
        {
          type: 'p',
          texte:
            'Avec un premier dépôt de 10 $ à 20 $, vous accédez au bonus de bienvenue complet de la plupart des casinos du comparatif, avec des conditions publiées. Les montants minimums sont comparés dans notre guide [casino dépôt minimum](/casino-depot-minimum/).'
        },
        {
          type: 'liste',
          items: RESUMES_MARQUES.map(
            (m) => `[${m.nom} bonus sans dépôt](${m.fr.sansDepot}) : pas de bonus sans dépôt ; l’offre la plus proche, ${m.offreFr}.`
          )
        },
        { type: 'offres', titre: 'Les bonus de bienvenue les mieux notés' }
      ]
    }
  ],
  faq: [
    {
      q: 'Existe-t-il un bonus sans dépôt au Québec ?',
      r: "Lors de notre dernière vérification, aucun casino de notre comparatif n'en proposait aux nouveaux joueurs. Ces offres apparaissent et disparaissent vite : vérifiez la page des promotions du casino."
    },
    {
      q: 'Peut-on retirer les gains d’un bonus sans dépôt ?',
      r: "Oui, après avoir rempli la mise demandée, et dans la limite du gain maximal fixé par le casino. Certains casinos demandent aussi un premier dépôt avant le retrait."
    },
    {
      q: 'Quelle est la meilleure alternative à un bonus sans dépôt ?',
      r: "Un bonus de bienvenue accessible avec un petit dépôt, dont la mise et le délai sont publiés. Comparez le montant à miser plutôt que le pourcentage affiché."
    }
  ],
  connexes: ['/bonus-casino-quebec/', '/casino-depot-minimum/', '/conditions-de-mise/']
};

/* ---------- Casino fiable ---------- */

const QUEBEC: Record<string, string> = { confirme: 'Confirmé par écrit', 'a-confirmer': 'À confirmer' };

const fiable: PageGuide = {
  chemin: '/casino-en-ligne-fiable/',
  nomFil: 'Casino en ligne fiable',
  titre: 'Casino en ligne fiable au Québec : comment vérifier (2026)',
  description:
    'Casino en ligne fiable au Québec : exploitant, licence, retraits testés en argent réel et acceptation des joueurs québécois, vérifiés casino par casino.',
  h1: 'Casino en ligne fiable au Québec : ce que nous avons vérifié',
  chapeau:
    "Un casino fiable se reconnaît à des faits vérifiables : une société nommée, une licence avec son numéro, des règles de retrait publiées, et des retraits qui arrivent vraiment. Voici ces points vérifiés pour chaque casino du comparatif.",
  modifie: MAJ,
  resume: 'Exploitant, licence, retraits testés : les points de fiabilité vérifiés pour chaque casino.',
  sections: [
    {
      id: 'verifie',
      titre: 'Ce que nous avons vérifié, casino par casino',
      blocs: [
        {
          type: 'tableau',
          entetes: ['Casino', 'Exploitant', 'Licence', 'Joueurs du Québec', 'Retrait crypto constaté'],
          lignes: CASINOS.map((c) => [
            c.sousPages.includes('fiable') ? `[${c.nom}](${cheminCasino(c, 'fiable')})` : lien(c),
            operateurTexte(c),
            licenceTexte(c),
            QUEBEC[c.quebec.statut] || 'Non vérifié',
            heures(dernier(c, 'crypto')?.delaiHeures)
          ])
        },
        {
          type: 'p',
          texte:
            "Aucune de ces licences n'est une autorisation du Québec : au Québec, seul Loto-Québec est autorisé. Notre [guide sur la légalité](/casino-en-ligne-legal-quebec/) explique ce que cela change pour vous."
        }
      ]
    },
    {
      id: 'signes',
      titre: 'Les 6 signes d’un casino fiable',
      blocs: [
        {
          type: 'liste',
          ordonnee: true,
          items: [
            '**Une société exploitante nommée**, avec son numéro d’immatriculation.',
            '**Une licence avec un numéro**, que vous pouvez vérifier auprès de l’autorité qui l’a délivrée.',
            '**Des règles de retrait publiées** : minimum, délai, plafonds.',
            '**Des conditions de bonus complètes**, lisibles avant d’accepter.',
            '**Des retraits qui arrivent** : c’est ce que nos tests en argent réel vérifient.',
            '**Des outils de jeu responsable** : limites de dépôt, pause, autoexclusion.'
          ]
        }
      ]
    },
    {
      id: 'alertes',
      titre: 'Les signaux qui doivent vous faire ralentir',
      blocs: [
        {
          type: 'liste',
          items: [
            'Aucun nom de société ni numéro de licence dans les conditions générales.',
            'Des conditions de retrait introuvables, ou qui changent sans date.',
            'Un service client qui ne répond pas avant votre premier dépôt.',
            'Un bonus présenté sans mise ni délai.'
          ]
        },
        {
          type: 'p',
          texte:
            "Un seul de ces signaux ne fait pas d'un casino un site malhonnête. Il invite à commencer par un petit dépôt suivi d'un retrait, avant de jouer davantage."
        }
      ]
    },
    {
      id: 'litige',
      titre: 'En cas de problème',
      blocs: [
        {
          type: 'liste',
          ordonnee: true,
          items: [
            'Écrivez au service client et gardez une copie de chaque échange.',
            'Faites des captures d’écran de votre solde, de votre demande de retrait et des conditions du bonus.',
            'Si rien ne bouge, adressez une plainte à l’autorité qui a délivré la licence du casino : ce sont vos seuls recours, puisque ces sites ne relèvent pas du Québec.'
          ]
        }
      ]
    }
  ],
  faq: [
    {
      q: 'Comment savoir si un casino en ligne est fiable ?',
      r: "Vérifiez qu'il nomme sa société exploitante, qu'il affiche une licence avec un numéro, qu'il publie ses règles de retrait, puis testez-le avec un petit dépôt suivi d'un retrait."
    },
    {
      q: 'Un casino sous licence de Curaçao est-il fiable au Québec ?',
      r: "Une licence de Curaçao encadre le casino depuis l'étranger, pas depuis le Québec. Elle donne un recours auprès du régulateur de Curaçao, mais aucun auprès d'un organisme québécois."
    },
    {
      q: 'Testez-vous vraiment les retraits ?',
      r: "Oui. L'auteur du site dépose et retire chez chaque casino du comparatif, avec un compte en dollars canadiens, et publie chaque délai constaté dans notre journal des retraits."
    }
  ],
  sources: CASINOS.map((c) => ({ titre: `${c.nom} : licence et mentions légales`, url: c.licence.source })).filter(
    (s, i, arr) => arr.findIndex((x) => x.url === s.url) === i
  ),
  connexes: ['/notre-methode/', '/delais-de-retrait-casino/', '/casino-en-ligne-legal-quebec/']
};

/* ---------- Sites de paris sportifs au Canada ---------- */

const SPORT = avecSport();

const sitesSport: PageGuide = {
  chemin: '/sites-paris-sportifs-canada/',
  nomFil: 'Sites de paris sportifs',
  parent: PARIS,
  titre: 'Sites de paris sportifs au Canada : comparatif (2026)',
  description:
    'Sites de paris sportifs au Canada (hors Ontario et Alberta) : bonus sport comparés, conditions de mise, retraits testés et règles de chaque province.',
  h1: 'Sites de paris sportifs au Canada : notre comparatif',
  chapeau:
    "Depuis 2021, la loi canadienne permet de parier sur un seul match. Chaque province gère ensuite son propre marché. Voici les sites de paris de notre comparatif qui acceptent les joueurs canadiens hors Ontario et Alberta, avec leurs bonus sport et leurs conditions.",
  modifie: MAJ,
  resume: 'Les sites de paris sportifs comparés pour le Canada, hors Ontario et Alberta.',
  sections: [
    {
      id: 'comparatif',
      titre: 'Les sites de paris comparés',
      blocs: [
        {
          type: 'tableau',
          legende: 'Offres relevées sur les pages promotions des casinos (le 4 novembre 2026, le 9 novembre 2026 pour Velobet).',
          entetes: ['Site', 'Bonus sport de bienvenue', 'Condition principale', 'Retrait crypto constaté'],
          lignes: SPORT.map((c) => {
            const cta = [CTA_VELOBET, CTA_ROLLETTO, CTA_BETPORTAL].find((x) => x.casino === c.id);
            return [
              lien(c),
              cta ? cta.titre : 'Paris sportifs proposés ; bonus sport non vérifié',
              c.id === 'betportal'
                ? 'Combiné d’avant-match de 3 à 10 sélections, cote totale de 3,00 à 10,00'
                : cta
                  ? 'Mise de 15 fois (dépôt + bonus) en combinés de 3 sélections ou plus'
                  : 'À lire sur la page des promotions',
              heures(dernier(c, 'crypto')?.delaiHeures)
            ];
          })
        },
        CTA_VELOBET,
        CTA_ROLLETTO,
        CTA_BETPORTAL
      ]
    },
    {
      id: 'choisir',
      titre: 'Comment choisir un site de paris',
      blocs: [
        {
          type: 'liste',
          items: [
            '**Les cotes.** Sur un même match, comparez les cotes : une différence de quelques centièmes compte sur des centaines de paris.',
            '**Les sports couverts.** Vérifiez la LNH, la LCF, la MLS et les ligues européennes si vous les suivez.',
            '**Les conditions du bonus.** La plupart imposent des combinés à cote minimale : lisez-les avant d’accepter.',
            '**Les retraits.** Un site qui paie vite compte plus qu’un gros bonus : nos délais constatés sont dans le tableau ci-dessus.'
          ]
        },
        {
          type: 'p',
          texte:
            'Pour aller plus loin : nos guides [paris sur le hockey](/paris-sportifs-hockey/), [paris sur le soccer](/paris-sportifs-soccer/) et [bonus paris sportifs](/bonus-paris-sportifs/).'
        }
      ]
    },
    {
      id: 'provinces',
      titre: 'Ce que permet chaque province',
      blocs: [
        {
          type: 'liste',
          items: [
            '**Ontario et Alberta** : des sites privés autorisés par la province. Les sites de notre comparatif ne visent pas ces deux provinces.',
            '**Québec** : seul Loto-Québec est autorisé, avec [Mise-o-jeu](/mise-o-jeu/). Les sites privés y sont exploités depuis l’étranger.',
            '**Autres provinces** : la société d’État de chaque province offre les paris en ligne ; les sites étrangers n’y ont pas d’autorisation.'
          ]
        },
        {
          type: 'p',
          texte: 'Le détail province par province est dans notre guide [casino en ligne au Canada](/casino-en-ligne-canada/).'
        }
      ]
    }
  ],
  faq: [
    {
      q: 'Les paris sportifs en ligne sont-ils légaux au Canada ?',
      r: "Oui, dans le cadre fixé par chaque province. Depuis le 27 août 2021, la loi canadienne permet les paris sur un seul match. L'Ontario et l'Alberta autorisent des sites privés ; ailleurs, seule la société d'État de la province est autorisée."
    },
    {
      q: 'Quel site de paris paie le plus vite ?',
      r: 'Nos délais de retrait constatés en argent réel sont dans le tableau en haut de page et dans notre journal des délais de retrait.'
    },
    {
      q: 'Faut-il prendre le bonus sport ?',
      r: "Seulement si ses conditions vous conviennent : la plupart imposent de miser plusieurs fois le dépôt et le bonus en paris combinés. Sans bonus, vos gains sont retirables selon les règles habituelles du site."
    }
  ],
  sources: [
    { titre: 'Gazette du Canada : entrée en vigueur de la loi sur les paris sportifs (27 août 2021)', url: 'https://gazette.gc.ca/rp-pr/p2/2021/2021-09-01/html/si-tr56-eng.html' },
    { titre: 'Gouvernement de l’Alberta : stratégie iGaming', url: 'https://www.alberta.ca/albertas-igaming-strategy' },
    { titre: 'Rolletto : page des promotions (bonus de bienvenue sport)', url: 'https://r0lletto.com/fr/static/promos' }
  ],
  connexes: ['/paris-sportifs-quebec/', '/bonus-paris-sportifs/', '/mise-o-jeu/']
};

/* ---------- Bonus paris sportifs ---------- */

const bonusSport: PageGuide = {
  chemin: '/bonus-paris-sportifs/',
  nomFil: 'Bonus paris sportifs',
  parent: PARIS,
  titre: 'Bonus paris sportifs au Québec : offres et conditions (2026)',
  description:
    'Bonus paris sportifs au Québec : les offres de Velobet, Rolletto et BetPortal comparées, ce qu’elles exigent vraiment, avec un exemple chiffré pour 100 $.',
  h1: 'Bonus paris sportifs au Québec : les offres et ce qu’elles exigent',
  chapeau:
    "Un bonus sport de 150 % paraît généreux. Mais il faut souvent miser 15 fois le dépôt et le bonus, en paris combinés, avant de pouvoir retirer. Voici les offres comparées, et le calcul pour un dépôt de 100 $.",
  modifie: MAJ,
  resume: 'Les bonus de bienvenue sport comparés, avec le calcul de ce qu’ils exigent.',
  sections: [
    {
      id: 'offres',
      titre: 'Les offres de bienvenue sport',
      blocs: [CTA_VELOBET, CTA_ROLLETTO, CTA_BETPORTAL]
    },
    {
      id: 'calcul',
      titre: 'Le calcul pour un dépôt de 100 $',
      blocs: [
        {
          type: 'tableau',
          entetes: ['', 'Velobet', 'Rolletto'],
          lignes: [
            ['Bonus reçu', '150 $', '150 $'],
            ['Mise demandée', '15 × (100 $ + 150 $)', '15 × (100 $ + 150 $)'],
            ['Total à parier', '**3 750 $**', '**3 750 $**'],
            ['Délai', '30 jours', '15 jours'],
            ['Par jour en moyenne', '125 $', '250 $']
          ]
        },
        {
          type: 'p',
          texte:
            "Ces paris doivent être des combinés de 3 sélections ou plus, à une cote de 1,30 minimum par sélection. Un combiné ne gagne que si toutes ses sélections gagnent : le risque de perdre le solde avant d'atteindre le total est réel. Chez BetPortal, l'offre est un pari gratuit : sa mise est déduite du gain."
        }
      ]
    },
    {
      id: 'verifier',
      titre: 'Les 5 conditions à lire avant d’accepter',
      blocs: [
        {
          type: 'liste',
          ordonnee: true,
          items: [
            '**La mise** : combien de fois le dépôt, le bonus, ou les deux.',
            '**Le délai** pour l’atteindre.',
            '**La cote minimale** et le nombre de sélections exigés.',
            '**Les paris exclus** : paris remboursés, cash-out, certains marchés.',
            '**L’activation** : certains bonus doivent être activés avant le premier pari, sinon ils sont perdus.'
          ]
        },
        {
          type: 'p',
          texte:
            'Le contexte légal et la lecture des cotes sont expliqués dans notre guide [paris sportifs au Québec](/paris-sportifs-quebec/), et les sites dans notre [comparatif des sites de paris](/sites-paris-sportifs-canada/).'
        }
      ]
    }
  ],
  faq: [
    {
      q: 'Quel est le meilleur bonus de paris sportifs au Québec ?',
      r: "À montant égal, celui qui laisse le plus de temps pour miser. Velobet et Rolletto demandent la même mise (15 fois le dépôt et le bonus), mais Velobet donne 30 jours contre 15 chez Rolletto."
    },
    {
      q: 'Peut-on retirer un bonus de paris sportifs ?',
      r: "Pas directement : il faut d'abord miser le montant demandé, dans le délai et aux cotes fixées par le site. Ensuite, le solde devient retirable selon les règles de retrait du site."
    },
    {
      q: 'Un pari gratuit rapporte-t-il la mise ?',
      r: "En général non : avec un pari gratuit, seul le gain net est versé, la mise est déduite. C'est le cas chez BetPortal selon ses conditions."
    }
  ],
  sources: [{ titre: 'Rolletto : page des promotions (bonus de bienvenue sport)', url: 'https://r0lletto.com/fr/static/promos' }],
  connexes: ['/paris-sportifs-quebec/', '/sites-paris-sportifs-canada/', '/paris-sportifs-hockey/']
};


/* ---------- 1win : code promo, connexion et application ---------- */

const UNWIN = CASINOS.find((c) => c.id === '1win');

const pagesUnWin: PageGuide[] = UNWIN
  ? [
      {
        chemin: '/1win-code-promo/',
        nomFil: 'Code promo 1win',
        parent: { nom: 'Avis 1win', chemin: cheminCasino(UNWIN) },
        titre: 'Code promo 1win Canada : faut-il un code ? (2026)',
        description:
          'Code promo 1win au Canada : ce que montre la page officielle des bonus, comment obtenir l’offre de bienvenue et les conditions à vérifier avant de déposer.',
        h1: 'Code promo 1win : faut-il un code pour le bonus ?',
        chapeau:
          'Lors de notre vérification du 10 novembre 2026, la page des bonus de 1win n’affichait aucun code promo à saisir. Voici l’offre relevée, comment l’obtenir et ce qu’il faut vérifier avant de déposer.',
        modifie: MAJ,
        offresHaut: ['1win'],
        resume: 'Faut-il un code promo chez 1win ? L’offre relevée et les conditions à vérifier.',
        sections: [
          {
            id: 'offre',
            titre: 'L’offre de bienvenue relevée',
            blocs: [
              {
                type: 'liste',
                items: [
                  `**${UNWIN.offre.titre}**, ${UNWIN.offre.sousTitre.charAt(0).toLowerCase()}${UNWIN.offre.sousTitre.slice(1)}.`,
                  `Paliers : ${UNWIN.offre.paliers.map((p) => `${p.pourcentage} %`).join(', ')}. ${UNWIN.offre.toursDetail}`,
                  `Dépôt minimum : ${depotMinTexte(UNWIN)}.`,
                  'Le bonus est versé sur un solde séparé : il faut d’abord jouer son argent réel, puis miser le bonus sur les jeux indiqués par 1win.'
                ]
              },
              {
                type: 'encadre',
                ton: 'alerte',
                titre: 'Ce que nous n’avons pas pu confirmer',
                texte:
                  'Nous n’avons pas pu confirmer la mise exigée ni le délai pour la compléter. Lisez-les dans la section bonus de votre compte avant votre premier dépôt. Le détail est dans notre [page bonus 1win](/1win-casino/bonus/).'
              }
            ]
          },
          {
            id: 'obtenir',
            titre: 'Comment obtenir le bonus sans code',
            blocs: [
              {
                type: 'liste',
                ordonnee: true,
                items: [
                  'Ouvrez le site officiel de 1win et créez un compte en dollars canadiens.',
                  `Faites un premier dépôt d’au moins ${depotMinTexte(UNWIN)}.`,
                  'Vérifiez dans votre compte que le bonus du premier palier apparaît bien, avant de jouer.',
                  'Envoyez vos documents d’identité dès l’inscription : ils seront demandés au premier retrait.'
                ]
              }
            ]
          },
          {
            id: 'codes',
            titre: 'Les codes trouvés ailleurs',
            blocs: [
              {
                type: 'p',
                texte:
                  'Des sites publient des « codes 1win » sans dire pour quel pays ils valent. Un code peut être expiré, réservé à un autre marché ou remplacer l’offre de bienvenue par une offre moins bonne. Nous n’avons pas de code exclusif : si nous en obtenons un, il sera publié sur cette page, daté.'
              }
            ]
          }
        ],
        faq: [
          {
            q: 'Faut-il un code promo pour le bonus 1win ?',
            r: 'Lors de notre vérification du 10 novembre 2026, la page des bonus de 1win n’affichait aucun code à saisir. Vérifiez quand même dans votre compte que le bonus est actif avant de jouer.'
          },
          {
            q: 'Loupe Casino a-t-il un code exclusif 1win ?',
            r: 'Non, pas pour le moment. Si nous en obtenons un, il sera publié sur cette page, avec sa date.'
          },
          {
            q: 'Quel est le dépôt minimum chez 1win ?',
            r: `${depotMinTexte(UNWIN)} selon nos relevés, pour un compte en dollars canadiens.`
          }
        ],
        sources: [{ titre: '1win : page des bonus', url: UNWIN.offre.source }],
        connexes: ['/1win-casino/bonus/', '/1win-connexion/', '/1win-casino/']
      },
      {
        chemin: '/1win-connexion/',
        nomFil: 'Connexion et application 1win',
        parent: { nom: 'Avis 1win', chemin: cheminCasino(UNWIN) },
        titre: '1win connexion et application : le guide (2026)',
        description:
          '1win au Canada : se connecter, retrouver son mot de passe, jouer sur téléphone sans application douteuse, et ce que montrent nos tests de retrait.',
        h1: '1win : se connecter et jouer sur téléphone depuis le Canada',
        chapeau:
          'Comment vous connecter à 1win, retrouver l’accès à votre compte et jouer sur votre téléphone en toute sécurité. Avec les délais de retrait constatés lors de nos tests en argent réel.',
        modifie: MAJ,
        offresHaut: ['1win'],
        resume: 'Connexion, mot de passe, téléphone et retraits testés chez 1win.',
        sections: [
          {
            id: 'connexion',
            titre: 'Se connecter à son compte',
            blocs: [
              {
                type: 'liste',
                ordonnee: true,
                items: [
                  'Ouvrez le site officiel de 1win, de préférence par un lien que vous connaissez : des copies du site circulent.',
                  'Cliquez sur « Connexion », puis entrez l’adresse courriel ou le numéro de téléphone de votre compte et votre mot de passe.',
                  'Mot de passe oublié : utilisez le lien de récupération sur la page de connexion. Le casino envoie un lien à l’adresse ou au numéro du compte.',
                  'Compte bloqué ou vérification en attente : écrivez au service client depuis le site et gardez une copie des échanges.'
                ]
              }
            ]
          },
          {
            id: 'telephone',
            titre: 'Jouer sur téléphone',
            blocs: [
              {
                type: 'p',
                texte:
                  'Le site de 1win s’ouvre dans le navigateur du téléphone et peut être ajouté à l’écran d’accueil comme une application. Lors de notre vérification, nous n’avons pas trouvé de lien de téléchargement d’application sur la page des bonus.'
              },
              {
                type: 'encadre',
                ton: 'alerte',
                titre: 'Prudence avec les fichiers à installer',
                texte:
                  'N’installez jamais un fichier d’application trouvé sur un autre site que le site officiel. Un faux fichier peut voler vos identifiants ou vos données de paiement.'
              }
            ]
          },
          {
            id: 'acces',
            titre: 'Si le site ne s’ouvre pas',
            blocs: [
              {
                type: 'p',
                texte:
                  'Depuis notre poste de vérification, 1win a parfois affiché un message de service limité dans la région. Ne cherchez pas à contourner ce blocage : les conditions de la plupart des casinos l’interdisent, et cela peut bloquer vos retraits. 1win ne vise pas les joueurs de l’Ontario ni de l’Alberta.'
              }
            ]
          },
          {
            id: 'retraits',
            titre: 'Ce que montrent nos tests de retrait',
            blocs: [
              {
                type: 'p',
                texte: `Lors de nos derniers tests en argent réel, 1win a versé un retrait en crypto en ${heures(dernier(UNWIN, 'crypto')?.delaiHeures)} et par carte en ${heures(dernier(UNWIN, 'carte')?.delaiHeures)}. Tous les relevés sont dans notre [journal des délais de retrait](/delais-de-retrait-casino/).`
              }
            ]
          }
        ],
        faq: [
          {
            q: '1win a-t-il une application au Canada ?',
            r: 'Lors de notre vérification, nous n’avons pas trouvé de lien de téléchargement sur la page des bonus. Le site fonctionne dans le navigateur du téléphone et peut être ajouté à l’écran d’accueil.'
          },
          {
            q: 'Que faire si j’ai oublié mon mot de passe 1win ?',
            r: 'Utilisez le lien de récupération de la page de connexion : 1win envoie un lien à l’adresse courriel ou au numéro de téléphone du compte.'
          },
          {
            q: 'Pourquoi le site de 1win ne s’ouvre-t-il pas ?',
            r: 'L’accès peut être limité selon la région. Ne cherchez pas à contourner ce blocage : les conditions de la plupart des casinos l’interdisent, et cela peut entraîner le blocage du compte et des retraits.'
          }
        ],
        connexes: ['/1win-code-promo/', '/1win-casino/', '/delais-de-retrait-casino/']
      }
    ]
  : [];

const intentions: PageGuide[] = [plusPayant, nouveau, sansDepot, fiable, sitesSport, bonusSport, ...pagesUnWin];

export default intentions;
