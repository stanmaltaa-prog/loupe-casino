import type { PageGuide } from './types';
import { CASINOS, cheminCasino, depotMinTexte, exempleMise, miseTexte, type Casino } from '@/lib/casinos';
import { dateLongue, montant } from '@/lib/site';

/**
 * Pages paiements (novembre 2026) : Interac, retrait rapide, dépôt minimum.
 * Les tableaux sont construits à partir de donnees/casinos.json : ils se mettent à jour
 * tout seuls quand une information de paiement est confirmée.
 */

/** « 1 h », « 12 h » ou « Non testé ». */
function heuresTexte(n: number | null | undefined): string {
  return n === null || n === undefined ? 'Non testé' : `${n} h`;
}

const MAJ = '2026-11-05';

const lienCasino = (c: Casino, sous?: 'retrait' | 'bonus') =>
  `[${c.nom}](${cheminCasino(c, sous && c.sousPages.includes(sous) ? sous : undefined)})`;

const liste = (noms: string[]) =>
  noms.length <= 1 ? noms.join('') : `${noms.slice(0, -1).join(', ')} et ${noms[noms.length - 1]}`;

// ——— Interac ———
const INTERAC_TEXTE: Record<Casino['paiements']['interac'], string> = {
  confirme: '**Accepté** (confirmé)',
  'non-confirme': 'Non confirmé sur les pages consultées',
  'non-affiche': 'Non affiché sur le site'
};
const AVEC_INTERAC = CASINOS.filter((c) => c.paiements.interac === 'confirme');
const AVEC_CRYPTO = CASINOS.filter((c) => c.paiements.crypto.length);
const AVEC_CARTES = CASINOS.filter((c) => c.paiements.autres.some((a) => /visa|mastercard/i.test(a)));
const AVEC_PORTEFEUILLES = CASINOS.filter((c) => c.paiements.autres.some((a) => /skrill|paypal|paysafecard/i.test(a)));

const moyens = (c: Casino) => {
  const m = [...c.paiements.autres];
  if (c.paiements.crypto.length) m.push(`cryptomonnaies (${c.paiements.crypto.join(', ')})`);
  return m.length ? m.join(', ') : 'Aucun moyen de paiement affiché sur les pages publiques';
};

const REPONSE_INTERAC = AVEC_INTERAC.length
  ? `Parmi les casinos de notre comparatif, Interac est confirmé chez ${liste(AVEC_INTERAC.map((c) => c.nom))}. Vérifiez quand même la caisse avant votre premier dépôt : les moyens proposés peuvent changer selon le pays et la devise du compte.`
  : "À ce jour, aucun casino de notre comparatif n'affiche Interac sur les pages que nous avons pu consulter. Nous ne l'indiquons que lorsque nous l'avons vu sur le site ou qu'il nous a été confirmé par écrit. Vérifiez la caisse du casino, visible une fois le compte ouvert, avant de déposer.";

// ——— Retraits ———
const RETRAITS: Record<string, { delai: string; plafond: string; source: string }> = {
  rolletto: {
    delai: 'Sous 3 jours ouvrables selon les conditions ; crypto instantané et virement sous 24 h selon le gestionnaire',
    plafond: '7 500 $ par semaine, 15 000 $ par mois',
    source: '[Conditions générales de Rolletto](https://r0lletto.com/fr/static/terms/generalterms) et gestionnaire d’affiliation (4 novembre 2026)'
  },
  velobet: {
    delai: 'Sous 3 jours ouvrables',
    plafond: '7 500 $ par semaine, 15 000 $ par mois',
    source: '[Conditions générales de Velobet](https://24velobet.com/fr/static/terms/generalterms)'
  },
  celsius: {
    delai: 'Non indiqué dans les pages consultées',
    plafond: '2 500 $ par semaine pour des gains jusqu’à 10 000 $, puis 10 000 $ par mois au-delà',
    source: '[Conditions des bonus de Celsius](https://celsiuscasino.com/fr/bonuses-terms)'
  },
  betportal: { delai: 'Non indiqué dans les pages consultées', plafond: 'Non publiés', source: 'Pages publiques de BetPortal' },
  '1win': { delai: 'Non vérifié', plafond: 'Non vérifiés', source: 'Règles de retrait non consultées à ce jour' }
};
const retraitDe = (c: Casino) =>
  RETRAITS[c.id] || { delai: c.retraits?.resume || 'Non publié', plafond: 'Non publiés', source: 'Pages publiques du casino' };

// ——— Dépôt minimum ———
const AVEC_MIN = CASINOS.filter((c) => c.offre.depotMin !== null && c.offre.depotMin !== undefined);
const MIN_NUMERIQUE = AVEC_MIN.filter((c) => typeof c.offre.depotMin === 'number').sort(
  (a, b) => (a.offre.depotMin as number) - (b.offre.depotMin as number)
);
const PLUS_BAS = MIN_NUMERIQUE[0];
const AU_PLUS_BAS = PLUS_BAS ? MIN_NUMERIQUE.filter((c) => c.offre.depotMin === PLUS_BAS.offre.depotMin) : [];
const AU_DESSUS = MIN_NUMERIQUE.filter((c) => !AU_PLUS_BAS.includes(c));

/** Exemple : le plus petit dépôt qui donne droit au bonus, et ce qu'il faut miser ensuite. */
const EXEMPLES = MIN_NUMERIQUE.map((c) => ({ c, e: exempleMise(c, c.offre.depotMin as number) })).filter((x) => x.e);
const ligneExemple = ({ c, e }: { c: Casino; e: NonNullable<ReturnType<typeof exempleMise>> }) => [
  lienCasino(c, 'bonus'),
  montant(e.depot, c.offre.depotMinDevise || '$'),
  montant(e.bonus, c.offre.depotMinDevise || '$'),
  `**${montant(e.aMiser, c.offre.depotMinDevise || '$')}**`,
  c.offre.mise?.delaiJours ? `${c.offre.mise.delaiJours} jours` : 'Non publié'
];

const SOURCES_PAIEMENT = CASINOS.map((c) => ({ titre: `${c.nom} : page officielle consultée (paiements)`, url: c.paiements.source }));
const SOURCES_BONUS = CASINOS.map((c) => ({ titre: `${c.nom} : conditions du bonus de bienvenue`, url: c.offre.source }));
const BNC = {
  titre: 'Banque Nationale : limite d’envoi d’un Virement Interac',
  url: 'https://www.bnc.ca/particuliers/centre-aide/compte-bancaire/depot-virement/quel-montant-limite-pour-virement.html'
};

const LIENS_RETRAIT = {
  type: 'liens' as const,
  items: [
    ...CASINOS.filter((c) => c.sousPages.includes('retrait')).map((c) => ({
      href: cheminCasino(c, 'retrait'),
      titre: `Retrait chez ${c.nom}`,
      texte: 'Délais, plafonds et conseils, casino par casino.'
    })),
    { href: '/casino-crypto-quebec/', titre: 'Casino crypto', texte: 'Déposer et retirer en Bitcoin ou en USDT sans erreur.' }
  ]
};

const paiements: PageGuide[] = [
  {
    chemin: '/casino-interac/',
    nomFil: 'Casino Interac',
    titre: 'Casino Interac au Québec : dépôts, retraits et alternatives',
    description:
      'Casino en ligne et Interac au Québec : ce que nos relevés montrent casino par casino, les limites fixées par les banques et les autres façons de déposer.',
    h1: 'Casino Interac : ce que nos relevés montrent, casino par casino',
    chapeau:
      "Interac est le moyen de paiement que les joueurs québécois cherchent en premier. Nous avons regardé, sur les pages officielles de chaque casino de notre comparatif, s'il était proposé. Voici ce que nous avons trouvé, et comment payer autrement.",
    modifie: MAJ,
    resume: 'Interac chez chaque casino du comparatif, limites bancaires et autres moyens de paiement.',
    sections: [
      {
        id: 'releve',
        titre: 'Interac chez les casinos de notre comparatif',
        blocs: [
          { type: 'p', texte: `Relevé sur les sites officiels, mis à jour le ${dateLongue(MAJ)} :` },
          {
            type: 'tableau',
            entetes: ['Casino', 'Interac', 'Autres moyens affichés'],
            lignes: CASINOS.map((c) => [lienCasino(c), INTERAC_TEXTE[c.paiements.interac], moyens(c)])
          },
          { type: 'p', texte: REPONSE_INTERAC },
          {
            type: 'encadre',
            ton: 'info',
            titre: 'Pourquoi nous n’écrivons pas « Interac accepté » par défaut',
            texte:
              "Beaucoup de sites affichent le logo Interac à côté de chaque casino. Nous ne l'indiquons que lorsque nous l'avons vu sur la page officielle du casino ou qu'il nous a été confirmé par écrit. Un moyen de paiement absent de nos tableaux peut exister dans la caisse : posez la question au service à la clientèle avant de déposer."
          }
        ]
      },
      {
        id: 'fonctionnement',
        titre: 'Comment fonctionne un dépôt par Interac',
        blocs: [
          {
            type: 'p',
            texte:
              "Le **Virement Interac** permet d'envoyer de l'argent depuis votre compte bancaire canadien, avec une simple adresse courriel ou un numéro de téléphone. Quand un casino le propose, le paiement passe souvent par un intermédiaire de paiement, dont le nom peut apparaître sur votre relevé à la place de celui du casino."
          },
          {
            type: 'p',
            texte:
              "Le montant que vous pouvez envoyer est fixé par votre banque, pas par le casino. À la Banque Nationale, par exemple, la limite d'envoi est de **4 000 $ par jour** et de **14 000 $ par période de 7 jours**, selon son centre d'aide. Le casino peut ajouter ses propres minimums et plafonds."
          }
        ]
      },
      {
        id: 'alternatives',
        titre: 'Sans Interac : les autres façons de déposer',
        blocs: [
          {
            type: 'liste',
            items: [
              `**Cryptomonnaies** : acceptées chez ${liste(AVEC_CRYPTO.map((c) => c.nom))}, selon leurs pages officielles. C'est le moyen le plus répandu chez les casinos internationaux. Notre guide [casino crypto](/casino-crypto-quebec/) explique comment déposer sans erreur de réseau.`,
              ...(AVEC_CARTES.length
                ? [`**Cartes Visa et Mastercard** : affichées chez ${liste(AVEC_CARTES.map((c) => c.nom))}. Votre banque peut appliquer des frais de conversion si le compte de jeu n'est pas en dollars canadiens.`]
                : []),
              ...(AVEC_PORTEFEUILLES.length
                ? [`**Portefeuilles électroniques et cartes prépayées** (Skrill, PayPal, Paysafecard) : affichés chez ${liste(AVEC_PORTEFEUILLES.map((c) => c.nom))}.`]
                : [])
            ]
          },
          {
            type: 'encadre',
            ton: 'alerte',
            titre: 'Vérifiez le retrait avant le dépôt',
            texte:
              "Un moyen de paiement accepté au dépôt n'est pas toujours disponible au retrait. Avant de déposer, ouvrez la caisse de retrait et vérifiez comment vous pourrez récupérer vos gains, avec quels délais et quels plafonds. Notre page [casino à retrait rapide](/casino-retrait-rapide/) compare ce que chaque casino annonce."
          }
        ]
      },
      {
        id: 'verifier',
        titre: 'Avant votre premier dépôt : 5 vérifications',
        blocs: [
          {
            type: 'liste',
            ordonnee: true,
            items: [
              '**La devise du compte** : choisissez le dollar canadien à l’inscription. En euros ou en dollars américains, votre banque convertit chaque dépôt et chaque retrait, souvent avec des frais.',
              '**Le moyen de retrait** : retrouvez-le dans la caisse de retrait, pas seulement dans celle de dépôt.',
              '**Les frais** : le casino, l’intermédiaire de paiement ou le réseau crypto peuvent en prendre.',
              '**Le dépôt minimum**, en particulier pour obtenir le bonus : voir notre page [casino à dépôt minimum](/casino-depot-minimum/).',
              '**La vérification d’identité** : en général exigée avant le premier retrait. Faites-la dès l’inscription pour ne pas attendre plus tard.'
            ]
          }
        ]
      },
      {
        id: 'legal',
        titre: 'Interac ne dit rien de la légalité d’un casino',
        blocs: [
          {
            type: 'p',
            texte:
              "Interac est un réseau de paiement. Qu'un casino l'accepte ne veut pas dire qu'il est autorisé au Québec, ni qu'il est fiable. Au Québec, seul Loto-Québec est autorisé par le gouvernement à exploiter un casino en ligne : notre page [casino en ligne légal au Québec](/casino-en-ligne-legal-quebec/) explique la situation des sites étrangers."
          }
        ]
      },
      {
        id: 'casinos',
        titre: 'Les casinos de notre comparatif',
        blocs: [{ type: 'offres', titre: 'Les offres du moment' }]
      }
    ],
    faq: [
      { q: 'Quels casinos en ligne acceptent Interac au Québec ?', r: REPONSE_INTERAC },
      {
        q: 'Peut-on retirer ses gains par Interac ?',
        r: AVEC_INTERAC.length
          ? `Seulement si le casino le propose aussi au retrait. Vérifiez la caisse de retrait de ${liste(AVEC_INTERAC.map((c) => c.nom))} avant de déposer.`
          : "Seulement si le casino le propose aussi au retrait. Nous ne l'avons confirmé pour aucun casino de notre comparatif : vérifiez la caisse de retrait avant de déposer."
      },
      {
        q: 'Y a-t-il une limite de dépôt par Interac ?',
        r: "Oui : votre banque fixe un plafond d'envoi. À la Banque Nationale, par exemple, il est de 4 000 $ par jour et de 14 000 $ par période de 7 jours. Le casino peut ajouter ses propres limites."
      },
      {
        q: 'Un casino qui accepte Interac est-il légal au Québec ?',
        r: "Pas forcément. Interac est un moyen de paiement, pas une licence. Au Québec, seul Loto-Québec est autorisé par le gouvernement à exploiter un casino en ligne."
      },
      {
        q: 'Que faire si le casino n’accepte pas Interac ?',
        r: `Les autres moyens affichés par les casinos de notre comparatif sont surtout les cryptomonnaies${AVEC_CARTES.length ? ', les cartes Visa et Mastercard' : ''}${AVEC_PORTEFEUILLES.length ? ' et des portefeuilles électroniques' : ''}. Vérifiez toujours comment vous pourrez retirer avant de déposer.`
      }
    ],
    sources: [BNC, ...SOURCES_PAIEMENT],
    connexes: ['/casino-retrait-rapide/', '/casino-depot-minimum/', '/casino-en-ligne-canada/']
  },

  {
    chemin: '/casino-retrait-rapide/',
    nomFil: 'Casino retrait rapide',
    titre: 'Casino retrait rapide : délais annoncés et plafonds réels',
    description:
      'Casino à retrait rapide ou instantané au Québec : les délais annoncés par chaque casino, les plafonds publiés et ce qui retarde vraiment un retrait.',
    h1: 'Casino à retrait rapide : les délais annoncés, casino par casino',
    chapeau:
      "Un retrait « instantané » ne l'est que si tout est en règle : identité vérifiée, mise du bonus terminée, bon moyen de paiement. Voici les délais et les plafonds que chaque casino de notre comparatif annonce, et ce qui ralentit vraiment un retrait.",
    modifie: MAJ,
    resume: 'Délais et plafonds de retrait annoncés par chaque casino, et ce qui les ralentit.',
    sections: [
      {
        id: 'delais',
        titre: 'Les délais et plafonds annoncés',
        blocs: [
          { type: 'p', texte: `Relevé mis à jour le ${dateLongue(MAJ)}. Les délais s'entendent une fois la demande de retrait validée par le casino.` },
          {
            type: 'tableau',
            entetes: ['Casino', 'Délai annoncé', 'Plafonds de retrait', 'Source'],
            lignes: CASINOS.map((c) => {
              const r = retraitDe(c);
              return [lienCasino(c, 'retrait'), r.delai, r.plafond, r.source];
            })
          },
          {
            type: 'p',
            texte:
              "**Nos tests réels (novembre 2026).** Kenzo Fitzeral a déposé puis retiré chez chaque casino du comparatif, et il refait ces tests environ tous les 3 jours. Voici les délais de réception constatés, une fois l'identité vérifiée :"
          },
          {
            type: 'tableau',
            entetes: ['Casino', 'Retrait en crypto', 'Retrait par carte'],
            lignes: [...CASINOS]
              .filter((c) => c.test)
              .sort((a, b) => (a.test?.retraitCryptoHeures ?? 99) - (b.test?.retraitCryptoHeures ?? 99))
              .map((c) => [lienCasino(c, 'retrait'), heuresTexte(c.test?.retraitCryptoHeures), heuresTexte(c.test?.retraitCarteHeures)])
          },
          {
            type: 'p',
            texte:
              "Velobet a été le plus rapide : retrait en crypto reçu en 1 heure, par carte en 12 heures. Vos délais peuvent varier selon la vérification d'identité et le moyen de paiement. Côté conditions, Rolletto annonce un retrait instantané en crypto et sous 24 heures par virement, selon son gestionnaire d'affiliation ; ses conditions générales, comme celles de Velobet (même exploitant), prévoient au plus trois jours ouvrables et un plafond de 7 500 $ par semaine. Celsius plafonne les gains à 2 500 $ par semaine jusqu'à 10 000 $."
          },
          {
            type: 'cta',
            casino: 'velobet',
            titre: 'Retrait en crypto reçu en 1 heure lors de notre test',
            detail:
              "Test de novembre 2026, identité vérifiée. Selon les conditions : traitement sous 3 jours ouvrables au plus et plafond de 7 500 $ par semaine ; misez chaque dépôt au moins une fois avant de retirer.",
            bouton: 'Voir Velobet'
          }
        ]
      },
      {
        id: 'ralentit',
        titre: 'Ce qui retarde vraiment un retrait',
        blocs: [
          {
            type: 'liste',
            items: [
              '**La vérification d’identité** : en général exigée avant le premier retrait. Tant qu’elle n’est pas terminée, le retrait reste en attente.',
              '**Une mise de bonus non terminée** : un retrait demandé avant peut faire perdre le bonus et les gains obtenus avec lui.',
              '**Un plafond atteint** : chez Celsius, par exemple, les gains jusqu’à 10 000 $ sont versés par tranches de 2 500 $ par semaine au maximum.',
              '**Un moyen de retrait différent du dépôt** : beaucoup de casinos demandent de retirer vers le moyen utilisé pour déposer.',
              '**Le délai après l’envoi** : un virement dépend aussi de votre banque ; en crypto, de la confirmation sur le réseau choisi.'
            ]
          }
        ]
      },
      {
        id: 'sans-preuve',
        titre: 'Retrait « sans preuve » ou sans vérification : prudence',
        blocs: [
          {
            type: 'p',
            texte:
              "Certains sites mettent en avant des casinos où l'on pourrait retirer sans jamais fournir de pièce d'identité. Nous ne vous conseillons pas de choisir un casino sur ce critère : même un casino qui ne demande rien à l'inscription peut exiger une pièce d'identité au moment de retirer, et bloquer le retrait tant qu'elle n'est pas fournie."
          },
          {
            type: 'encadre',
            ton: 'bon',
            titre: 'Le vrai raccourci',
            texte:
              "Faites vérifier votre compte dès l'inscription, avec une pièce d'identité et une preuve d'adresse à votre nom. Quand viendra le moment de retirer, il n'y aura plus d'attente de ce côté-là."
          }
        ]
      },
      {
        id: 'crypto-virement',
        titre: 'Crypto ou virement : lequel est le plus rapide ?',
        blocs: [
          {
            type: 'p',
            texte:
              "Une fois envoyé par le casino, un retrait en cryptomonnaie arrive en général plus vite qu'un virement bancaire, qui dépend aussi des délais de votre banque. En contrepartie, une erreur d'adresse ou de réseau est le plus souvent irréversible, et la valeur d'une cryptomonnaie autre qu'une cryptomonnaie stable peut varier entre le retrait et la conversion en dollars."
          },
          LIENS_RETRAIT
        ]
      },
      {
        id: 'methode',
        titre: 'Notre méthode pour un premier retrait sans surprise',
        blocs: [
          {
            type: 'liste',
            ordonnee: true,
            items: [
              'Faites vérifier votre identité dès l’inscription.',
              'Commencez par un petit dépôt, et vérifiez dans la caisse de retrait le moyen, les délais et les plafonds.',
              'Jouez sans bonus, ou terminez entièrement la mise du bonus avant de demander un retrait.',
              'Demandez un premier retrait modeste pour tester le délai réel.',
              'Gardez une capture d’écran de chaque demande et de chaque échange avec le service à la clientèle.'
            ]
          }
        ]
      },
      {
        id: 'casinos',
        titre: 'Les casinos de notre comparatif',
        blocs: [{ type: 'offres', titre: 'Les offres du moment' }]
      }
    ],
    faq: [
      {
        q: 'Quel casino en ligne a le retrait le plus rapide ?',
        r: "Lors de nos tests de novembre 2026, Velobet : retrait en crypto reçu en 1 heure et par carte en 12 heures. Celsius et Rolletto ont suivi avec 2 heures en crypto. Ces délais supposent une identité déjà vérifiée."
      },
      {
        q: 'Un retrait instantané est-il garanti ?',
        r: "Non. Le délai annoncé suppose que votre identité est vérifiée, que la mise d'un éventuel bonus est terminée et que le moyen de retrait est disponible. Testez d'abord avec un petit montant."
      },
      {
        q: 'Peut-on retirer sans fournir de pièce d’identité ?',
        r: "Ne comptez pas dessus. Même si rien n'est demandé à l'inscription, le casino peut exiger une pièce d'identité au moment du retrait. Faites vérifier votre compte dès le départ."
      },
      {
        q: 'Pourquoi mon retrait est-il en attente ?',
        r: "Les causes les plus courantes sont une vérification d'identité en cours, une mise de bonus non terminée ou un plafond de retrait atteint. Le service à la clientèle du casino peut vous dire laquelle s'applique."
      },
      {
        q: 'Y a-t-il un montant maximum de retrait ?',
        r: "Souvent, oui. Rolletto et Velobet plafonnent les retraits à 7 500 $ par semaine et 15 000 $ par mois ; Celsius à 2 500 $ par semaine pour des gains jusqu'à 10 000 $, puis 10 000 $ par mois au-delà, selon leurs conditions."
      }
    ],
    sources: [
      { titre: 'Celsius Casino : conditions générales des bonus (retraits)', url: 'https://celsiuscasino.com/fr/bonuses-terms' },
      { titre: 'Rolletto : conditions générales (retraits)', url: 'https://r0lletto.com/fr/static/terms/generalterms' },
      { titre: 'Velobet : conditions générales (retraits)', url: 'https://24velobet.com/fr/static/terms/generalterms' }
    ],
    connexes: ['/casino-interac/', '/casino-depot-minimum/', '/casino-en-ligne-canada/']
  },

  {
    chemin: '/casino-depot-minimum/',
    nomFil: 'Casino dépôt minimum',
    titre: 'Casino dépôt minimum : 1 $, 5 $ ou 10 $ ? Nos relevés',
    description:
      'Casino à petit dépôt au Québec : le dépôt minimum de chaque casino de notre comparatif, ce qu’un bonus exige vraiment avec 10 $ et les pièges du dépôt à 1 $.',
    h1: 'Casino à dépôt minimum : combien faut-il vraiment déposer ?',
    chapeau:
      "Les casinos « à 1 $ » attirent l'œil, mais le vrai minimum dépend du bonus choisi et du moyen de paiement. Voici les minimums relevés chez chaque casino de notre comparatif, et ce que vaut un bonus avec un petit dépôt.",
    modifie: MAJ,
    resume: 'Dépôt minimum de chaque casino, et ce qu’un bonus exige avec un petit dépôt.',
    sections: [
      {
        id: 'minimums',
        titre: 'Le dépôt minimum de chaque casino',
        blocs: [
          { type: 'p', texte: `Relevé sur les conditions officielles des bonus, mis à jour le ${dateLongue(MAJ)} :` },
          {
            type: 'tableau',
            entetes: ['Casino', 'Dépôt minimum pour le bonus de bienvenue', 'Mise à compléter'],
            lignes: CASINOS.map((c) => [lienCasino(c, 'bonus'), depotMinTexte(c), miseTexte(c)])
          },
          {
            type: 'p',
            texte: `Aucun casino de notre comparatif n'annonce de dépôt à 1 $ ou à 5 $ pour son bonus de bienvenue.${
              AU_PLUS_BAS.length ? ` Le plus bas que nous ayons relevé est de ${liste(AU_PLUS_BAS.map((c) => `${depotMinTexte(c)} chez ${c.nom}`))}` : ''
            }. Le minimum de la caisse peut être différent selon le moyen de paiement : vérifiez-le avant de déposer.`
          }
        ]
      },
      {
        id: 'un-dollar',
        titre: 'Casino à dépôt de 1 $ : ce qu’il faut vérifier',
        blocs: [
          {
            type: 'p',
            texte:
              "Des sites annoncent des casinos où l'on peut commencer avec 1 $. Avant de vous inscrire pour cette raison, regardez ce que le dépôt donne vraiment : souvent quelques tours gratuits plutôt qu'un bonus en argent, avec leur propre condition de mise et un plafond de gain."
          },
          {
            type: 'liste',
            items: [
              '**Le montant du retrait minimum** : il peut être bien plus élevé que le dépôt minimum.',
              '**Les frais** : en crypto, les frais du réseau peuvent représenter une grosse part d’un très petit dépôt.',
              '**La condition de mise** : un petit bonus avec une mise de 50 fois ou plus reste difficile à transformer en argent retirable.',
              '**Le plafond de gain** des tours gratuits et des bonus sans dépôt : chez Celsius, par exemple, il est de 100 $.'
            ]
          }
        ]
      },
      {
        id: 'exemple',
        titre: 'Un bonus avec le plus petit dépôt : l’exemple chiffré',
        blocs: [
          {
            type: 'p',
            texte:
              "Voici ce qu'il faut miser pour débloquer le bonus de bienvenue avec le dépôt minimum, selon les conditions officielles de chaque casino. Le calcul ne vaut que si toutes les mises comptent à 100 %, ce qui est en général le cas des machines à sous seulement."
          },
          {
            type: 'tableau',
            entetes: ['Casino', 'Dépôt', 'Bonus reçu', 'Total à miser', 'Délai'],
            lignes: EXEMPLES.map((x) => ligneExemple(x as { c: Casino; e: NonNullable<ReturnType<typeof exempleMise>> }))
          },
          {
            type: 'encadre',
            ton: 'info',
            titre: 'Avec un petit dépôt, jouer sans bonus est souvent plus simple',
            texte:
              "Sans bonus, vos gains ne sont pas bloqués par une condition de mise. Avec 10 ou 20 $ de dépôt, un bonus à miser 30 ou 50 fois oblige à jouer 1 000 $ ou plus, en quelques jours ou quelques semaines selon le casino. Notre page [conditions de mise](/conditions-de-mise/) explique comment faire le calcul."
          }
        ]
      },
      {
        id: 'budget',
        titre: 'Petit dépôt, vrai budget',
        blocs: [
          {
            type: 'p',
            texte:
              "Un petit dépôt est une bonne façon de découvrir un casino, à condition qu'il ne devienne pas une série de petits dépôts. Fixez votre budget avant de jouer, et utilisez les limites de dépôt proposées dans votre compte. Notre page [jeu responsable](/jeu-responsable/) liste les outils et les ressources d'aide."
          }
        ]
      },
      {
        id: 'casinos',
        titre: 'Les casinos de notre comparatif',
        blocs: [{ type: 'offres', titre: 'Les offres du moment' }]
      }
    ],
    faq: [
      {
        q: 'Quel casino a le plus petit dépôt minimum ?',
        r: PLUS_BAS
          ? `Parmi les casinos de notre comparatif, les plus bas pour le bonus de bienvenue sont ${liste(AU_PLUS_BAS.map((c) => `${c.nom} (${depotMinTexte(c)})`))}.${AU_DESSUS.length ? ` ${liste(AU_DESSUS.map((c) => `${c.nom} demande ${depotMinTexte(c)}`))}.` : ''}`
          : 'Les minimums varient selon le casino et le bonus : consultez notre tableau.'
      },
      {
        q: 'Existe-t-il un casino à dépôt de 1 $ au Québec ?',
        r: "Aucun casino de notre comparatif n'annonce de dépôt à 1 $ pour son bonus de bienvenue. Si un site l'annonce, vérifiez le bonus réel, sa condition de mise et le retrait minimum avant de vous inscrire."
      },
      {
        q: 'Peut-on obtenir le bonus de bienvenue avec 10 $ ?',
        r: "Oui chez Celsius, dont les conditions fixent le dépôt minimum pour un bonus à 10 $ ou l'équivalent dans une autre devise, chez Velobet à partir de 10 $ ou l'équivalent, et chez 1win à partir de 10 $. Chez Rolletto, il faut 20 $."
      },
      {
        q: 'Le dépôt minimum est-il le même pour tous les moyens de paiement ?',
        r: 'Pas forcément : la caisse peut fixer un minimum différent selon le moyen de paiement ou la cryptomonnaie. Vérifiez-le dans la caisse avant de déposer.'
      }
    ],
    sources: SOURCES_BONUS,
    connexes: ['/casino-interac/', '/casino-retrait-rapide/', '/conditions-de-mise/', '/casino-en-ligne-canada/']
  }
];

export default paiements;
