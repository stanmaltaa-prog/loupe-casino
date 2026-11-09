import type { PageGuide } from './types';
import { CASINOS, cheminCasino, retraitsTexte, type Casino } from '@/lib/casinos';
import { AUTEUR } from '@/lib/auteur';
import { dateLongue } from '@/lib/site';
import { DERNIER_RELEVE, RELEVES, classementRetraits, dernier, nombreDeReleves } from '@/lib/tests';

/**
 * Page « délais de retrait testés » : construite à partir du journal donnees/tests.json.
 * Chaque nouveau test ajouté au journal met la page à jour (tableaux, classement, date).
 */
const heures = (n: number | undefined | null) => (n === null || n === undefined ? 'Non testé' : `${n} h`);
const lien = (c: Casino) => `[${c.nom}](${cheminCasino(c, c.sousPages.includes('retrait') ? 'retrait' : undefined)})`;
const MOYEN = { crypto: 'Crypto', carte: 'Carte' } as const;

const CLASSEMENT = classementRetraits();
const PREMIER = CLASSEMENT[0];
const SECOND = CLASSEMENT[1];

/** Vrai si, pour chaque casino testé par les deux moyens, la crypto a été plus rapide que la carte. */
const CRYPTO_PLUS_RAPIDE = CLASSEMENT.every((c) => {
  const k = dernier(c, 'crypto')?.delaiHeures;
  const t = dernier(c, 'carte')?.delaiHeures;
  return k === undefined || t === undefined || k < t;
});

const phrasePremier = PREMIER
  ? `Lors de nos derniers relevés, ${PREMIER.nom} a été le plus rapide : ${heures(dernier(PREMIER, 'crypto')?.delaiHeures)} en crypto et ${heures(dernier(PREMIER, 'carte')?.delaiHeures)} par carte.${
      SECOND ? ` ${SECOND.nom} suit avec ${heures(dernier(SECOND, 'crypto')?.delaiHeures)} en crypto.` : ''
    }`
  : 'Aucun test n’a encore été publié.';

const tests: PageGuide[] = [
  {
    chemin: '/delais-de-retrait-casino/',
    nomFil: 'Délais de retrait testés',
    titre: 'Délais de retrait des casinos : nos tests réels (2026)',
    description:
      'Délais de retrait constatés lors de nos tests en argent réel, avec un compte en dollars canadiens : crypto et carte, casino par casino, relevés datés.',
    h1: 'Délais de retrait : nos tests réels, casino par casino',
    chapeau: `Les délais annoncés par les casinos sont des promesses. Ceux de cette page sont constatés : ${AUTEUR.nom} dépose, joue et retire chez chaque casino du comparatif avec un compte en dollars canadiens, puis rejoue environ tous les 3 jours. Dernier relevé : ${dateLongue(DERNIER_RELEVE)}.`,
    modifie: DERNIER_RELEVE,
    resume: 'Les délais de retrait constatés lors de nos tests réels, casino par casino, relevés datés.',
    sections: [
      {
        id: 'resultats',
        titre: 'Les derniers délais constatés',
        blocs: [
          {
            type: 'tableau',
            legende: `Délai entre la demande de retrait et la réception des fonds, lors du dernier test. Relevés au ${dateLongue(DERNIER_RELEVE)}.`,
            entetes: ['Rang', 'Casino', 'Retrait en crypto', 'Retrait par carte', 'Relevés publiés'],
            lignes: CLASSEMENT.map((c, i) => [
              String(i + 1),
              lien(c),
              `**${heures(dernier(c, 'crypto')?.delaiHeures)}**`,
              heures(dernier(c, 'carte')?.delaiHeures),
              String(nombreDeReleves(c))
            ])
          },
          { type: 'p', texte: phrasePremier },
          {
            type: 'encadre',
            ton: 'info',
            titre: 'Vos délais peuvent être différents',
            texte:
              'Un premier retrait est souvent plus long, le temps de vérifier votre identité. Le moyen de paiement, le montant, un bonus encore actif ou un retrait demandé la fin de semaine changent aussi le délai. Ces chiffres décrivent nos tests, pas une garantie.'
          }
        ]
      },
      {
        id: 'methode',
        titre: 'Comment se déroulent nos tests',
        blocs: [
          {
            type: 'liste',
            ordonnee: true,
            items: [
              '**Deux tests par casino.** Un dépôt minimum suivi d’un retrait, puis un dépôt de 1 000 $ CA, pour comparer avec deux soldes différents.',
              '**Un compte en dollars canadiens**, ouvert et utilisé comme celui de n’importe quel joueur, en argent réel.',
              '**Le délai mesuré** va de la demande de retrait à la réception des fonds, en crypto et par carte quand le casino le permet.',
              '**Un nouveau relevé environ tous les 3 jours**, et plus souvent si le service se dégrade. Chaque relevé est daté et ajouté au journal ci-dessous, sans effacer les anciens.',
              '**Les mauvais résultats sont publiés aussi.** Si un retrait traîne ou échoue, il apparaît ici et la note du casino en tient compte.'
            ]
          },
          {
            type: 'p',
            texte: `Les tests sont faits par ${AUTEUR.nom}, fondateur du site : [qui il est](${AUTEUR.chemin}). Notre [méthode de notation](/notre-methode/) explique comment ces résultats entrent dans la note des retraits.`
          }
        ]
      },
      {
        id: 'annonce-constate',
        titre: 'Délais annoncés et délais constatés',
        blocs: [
          {
            type: 'tableau',
            entetes: ['Casino', 'Ce qu’annoncent les conditions', 'Constaté en crypto', 'Constaté par carte'],
            lignes: CASINOS.map((c) => [lien(c), retraitsTexte(c), heures(dernier(c, 'crypto')?.delaiHeures), heures(dernier(c, 'carte')?.delaiHeures)])
          },
          {
            type: 'p',
            texte:
              'Les conditions générales donnent souvent un délai maximal (par exemple « sous 3 jours ouvrables »). Nos tests montrent le délai réel d’un retrait ordinaire. Les deux sont utiles : le premier vous dit ce que le casino s’engage à respecter, le second ce que vous vivrez en pratique.'
          }
        ]
      },
      {
        id: 'journal',
        titre: 'Le journal complet des relevés',
        blocs: [
          {
            type: 'tableau',
            legende: 'Du plus récent au plus ancien.',
            entetes: ['Date du relevé', 'Casino', 'Moyen', 'Délai constaté'],
            lignes: RELEVES.map((r) => {
              const c = CASINOS.find((x) => x.id === r.casino) as Casino;
              return [dateLongue(r.date), lien(c), MOYEN[r.moyen], `${r.delaiHeures} h`];
            })
          }
        ]
      },
      {
        id: 'allonger',
        titre: 'Ce qui peut allonger votre retrait',
        blocs: [
          {
            type: 'liste',
            items: [
              '**La vérification d’identité.** Envoyez vos documents dès l’inscription plutôt qu’au moment du premier retrait.',
              '**Un bonus encore actif.** Tant que la mise n’est pas complétée, le bonus et ses gains restent bloqués.',
              '**Un dépôt pas encore misé.** Plusieurs casinos demandent de miser un dépôt au moins une fois avant de le retirer.',
              '**Les plafonds hebdomadaires.** Un gros gain peut être versé en plusieurs fois.',
              CRYPTO_PLUS_RAPIDE
                ? '**Le moyen de paiement.** Dans nos tests, la crypto est toujours arrivée plus vite que la carte.'
                : '**Le moyen de paiement.** Selon le casino, la crypto ou la carte peut être plus rapide : comparez dans le tableau.'
            ]
          },
          { type: 'offres', casinos: CLASSEMENT.slice(0, 3).map((c) => c.id), titre: 'Les plus rapides de nos tests' }
        ]
      }
    ],
    faq: [
      {
        q: 'Quel casino en ligne paie le plus vite au Québec ?',
        r: PREMIER
          ? `Lors de nos derniers tests (${dateLongue(DERNIER_RELEVE)}), ${PREMIER.nom} : ${heures(dernier(PREMIER, 'crypto')?.delaiHeures)} pour un retrait en crypto et ${heures(dernier(PREMIER, 'carte')?.delaiHeures)} par carte. Le classement complet est en haut de cette page et change à chaque nouveau relevé.`
          : 'Nous n’avons pas encore publié de test.'
      },
      {
        q: 'Pourquoi mon retrait est-il plus long que dans vos tests ?',
        r: 'Le premier retrait demande souvent une vérification d’identité. Un bonus actif, un dépôt pas encore misé, un plafond hebdomadaire ou un autre moyen de paiement peuvent aussi l’allonger. Demandez au service à la clientèle ce qui bloque, et gardez une trace de la réponse.'
      },
      {
        q: 'À quelle fréquence mettez-vous ces délais à jour ?',
        r: 'Environ tous les 3 jours pour chaque casino, et plus souvent si le service se dégrade. La date de chaque relevé est indiquée dans le journal.'
      },
      {
        q: 'Les casinos paient-ils pour apparaître dans ces tests ?',
        r: 'Non. Les tests sont faits en argent réel par l’auteur. Nous recevons une commission quand vous vous inscrivez par nos liens, mais elle ne change ni les délais publiés ni l’ordre du classement.'
      }
    ],
    sources: CASINOS.filter((c) => c.retraits).map((c) => ({ titre: `${c.nom} : règles de retrait publiées`, url: c.retraits!.source })),
    connexes: ['/casino-retrait-rapide/', '/casino-crypto-quebec/', '/notre-methode/']
  }
];

export default tests;
