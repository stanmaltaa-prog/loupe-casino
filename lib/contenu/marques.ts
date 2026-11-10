import type { PageGuide, SectionGuide } from './pages/types';
import { CASINOS, cheminCasino, depotMinTexte, exempleMise, type Casino } from '@/lib/casinos';
import { cheminEn, depotMinEn, en } from '@/lib/en/casinos';
import { classementRetraits, dernier } from '@/lib/tests';
import { montant } from '@/lib/site';
import { PAGES_EN } from '@/lib/en/pages';

/**
 * Pages des marques très cherchées au Canada avec lesquelles le site n'a pas (encore) de deal.
 * Règles : conditions relevées sur les sites officiels et datées, aucun bouton ni lien commercial
 * vers la marque, et le top 3 de nos casinos en haut de page (tous les boutons vont vers nos casinos).
 * Les tableaux de comparaison sont calculés à partir de donnees/casinos.json et donnees/tests.json.
 *
 * Les marques du groupe Casino Rewards partagent les mêmes conditions générales (mise de 200 fois
 * sur les 2 premiers dépôts, retraits, licence) : elles sont générées par un gabarit commun,
 * avec leur offre, leurs titres et leurs sources propres.
 */

/* ---------- Règles communes du groupe Casino Rewards (conditions générales officielles) ---------- */

const REWARDS = {
  licence: '00972',
  exploitantFr: 'Apollo Entertainment Ltd (C 45483), Malte',
  exploitantEn: 'Apollo Entertainment Ltd (C 45483), Malta',
  gestionnaire: 'Fresh Horizons Limited',
  /** Mise exigée sur les bonus des 2 premiers dépôts (art. 12.4), puis à partir du 3e (art. 12.5). */
  mise12: 200,
  mise3: 30,
  retraitMin: 50,
  retraitMinVirement: 300
};

type Type = 'avis' | 'bonus' | 'sansDepot' | 'retrait' | 'fiable';
type Textes = Record<Type, { titre: string; description: string; h1: string; chapeau: string }>;

type MarqueRewards = {
  nom: string;
  slug: string;
  verifie: string;
  depot1: number;
  chances: number;
  /** Bonus des dépôts suivants (2e, 3e…), tels qu'affichés sur la page bonus officielle. */
  paliers: { rang: number; pourcentage: number; plafond: number }[];
  /** Total annoncé par le site officiel, s'il en annonce un. */
  totalAnnonce?: number;
  noteOffreFr?: string;
  noteOffreEn?: string;
  fideliteFr: string;
  fideliteEn: string;
  sourcesFr: { titre: string; url: string }[];
  sourcesEn: { titre: string; url: string }[];
  fr: Textes;
  en: Textes;
};

/* ---------- Yukon Gold : relevé du 10 novembre 2026 ---------- */

const YUKON: MarqueRewards = {
  nom: 'Yukon Gold',
  slug: 'yukon-gold-casino',
  verifie: '2026-11-10',
  depot1: 10,
  chances: 150,
  paliers: [{ rang: 2, pourcentage: 100, plafond: 150 }],
  fideliteFr: 'Programme Casino Rewards, commun à plusieurs casinos du même groupe',
  fideliteEn: 'Casino Rewards program, shared by several casinos of the same group',
  sourcesFr: [
    { titre: 'Yukon Gold : page d’accueil officielle (licence, certification eCOGRA, exploitant)', url: 'https://yukongold.casino/en/' },
    { titre: 'Yukon Gold : page bonus officielle (150 chances pour 10 $, 100 % jusqu’à 150 $)', url: 'https://yukongold.casino/fr/bonus/' },
    { titre: 'Yukon Gold : conditions générales (mise, contribution des jeux, retraits, licence)', url: 'https://yukongold.casino/en/terms/' },
    { titre: 'Yukon Gold : FAQ (moyens de paiement, délais et frais de retrait, âge minimum)', url: 'https://yukongold.casino/en/faq/' }
  ],
  sourcesEn: [
    { titre: 'Yukon Gold: official home page (licence, eCOGRA certification, operator)', url: 'https://yukongold.casino/en/' },
    { titre: 'Yukon Gold: official bonus page (150 chances for $10, 100% up to $150)', url: 'https://yukongold.casino/en/bonus/' },
    { titre: 'Yukon Gold: terms and conditions (wagering, game weighting, withdrawals, licence)', url: 'https://yukongold.casino/en/terms/' },
    { titre: 'Yukon Gold: FAQ (payment methods, withdrawal times and fees, minimum age)', url: 'https://yukongold.casino/en/faq/' }
  ],
  fr: {
    avis: {
      titre: 'Avis Yukon Gold Casino 2026 : 150 chances, mise de 200 fois',
      description:
        'Avis Yukon Gold Casino au Canada : 150 chances pour 10 $, mise de 200 fois, retraits après 48 h d’attente, licence de Kahnawake. Conditions officielles lues.',
      h1: 'Avis Yukon Gold Casino (2026) : ce que disent vraiment les conditions',
      chapeau:
        'Yukon Gold est l’un des casinos en ligne les plus cherchés au Canada. Son offre attire : 150 chances de gagner un million pour 10 $. Nous avons lu ses conditions officielles ligne par ligne. Le point qui change tout : les bonus des deux premiers dépôts doivent être misés 200 fois.'
    },
    bonus: {
      titre: 'Bonus Yukon Gold : 150 chances pour 10 $, ce qu’il faut miser',
      description:
        'Bonus Yukon Gold : 150 chances pour 10 $, puis 100 % jusqu’à 150 $. Mise de 200 fois, jeux à 2 %, délais : exemple chiffré et comparaison avec nos casinos.',
      h1: 'Bonus Yukon Gold : 150 chances pour 10 $, et le calcul à faire avant',
      chapeau:
        'Le bonus de Yukon Gold coûte peu à activer et rapporte des tours sur une roue à un million. Mais les gains doivent être misés 200 fois. Voici les paliers, les règles et le calcul, d’après les conditions officielles.'
    },
    sansDepot: {
      titre: 'Yukon Gold bonus sans dépôt : existe-t-il en 2026 ?',
      description:
        'Yukon Gold a-t-il un bonus sans dépôt ? Non, d’après ses pages officielles. Son offre la plus proche : 150 chances pour 10 $. Explications et alternatives.',
      h1: 'Yukon Gold bonus sans dépôt : la réponse honnête',
      chapeau:
        'Beaucoup de joueurs cherchent un bonus sans dépôt chez Yukon Gold. Sur ses pages officielles relues le 10 novembre 2026, il n’y en a pas. Voici ce qui s’en approche, et ce qu’il faut savoir avant de déposer 10 $.'
    },
    retrait: {
      titre: 'Retrait Yukon Gold : délais, frais et minimum de 50 $ (2026)',
      description:
        'Retrait chez Yukon Gold : 48 h d’attente, puis 1 à 10 jours ouvrables selon le moyen, minimum de 50 $, frais du virement direct. Comparé aux retraits testés.',
      h1: 'Retrait chez Yukon Gold : délais, frais et minimums',
      chapeau:
        'Chez Yukon Gold, un retrait passe d’abord 48 h en attente. Voici les délais annoncés par moyen de paiement, les minimums, les frais et les vérifications, d’après la FAQ et les conditions officielles.'
    },
    fiable: {
      titre: 'Yukon Gold Casino est-il fiable ? Licence et exploitant',
      description:
        'Yukon Gold est-il fiable ? Licence de Kahnawake n° 00972, certification eCOGRA, exploitant à Malte et clauses à connaître, d’après les conditions officielles.',
      h1: 'Yukon Gold Casino est-il fiable ? Licence, exploitant et clauses',
      chapeau:
        'Fiable ne veut pas dire avantageux. Yukon Gold publie sa licence et sa certification, mais certaines clauses méritent d’être connues avant de déposer. Voici ce que nous avons relevé dans ses pages officielles.'
    }
  },
  en: {
    avis: {
      titre: 'Yukon Gold Casino Canada Review 2026: Bonus and 200x Wagering',
      description:
        'Yukon Gold Casino review for Canada: 150 chances for $10, 200x wagering, 48-hour pending withdrawals, Kahnawake licence. Official terms read line by line.',
      h1: 'Yukon Gold Casino Review (2026): What the Terms Really Say',
      chapeau:
        'Yukon Gold is one of the most searched online casinos in Canada. Its offer is tempting: 150 chances to win a million for $10. We read its official terms line by line. The detail that changes everything: the first two deposit bonuses must be wagered 200 times.'
    },
    bonus: {
      titre: 'Yukon Gold Bonus: 150 Chances for $10 and the 200x Catch',
      description:
        'Yukon Gold bonus: 150 chances for $10, then 100% up to $150. 200x wagering, 2% game weighting, deadlines: a worked example and a comparison with our casinos.',
      h1: 'Yukon Gold Bonus: 150 Chances for $10, and the Math to Do First',
      chapeau:
        'The Yukon Gold bonus is cheap to activate and pays out spins on a million-dollar wheel. But winnings must be wagered 200 times. Here are the tiers, the rules and the math, from the official terms.'
    },
    sansDepot: {
      titre: 'Yukon Gold No Deposit Bonus: Is There One in 2026?',
      description:
        'Does Yukon Gold offer a no deposit bonus? Not according to its official pages. The closest offer is 150 chances for $10: what it costs, and alternatives.',
      h1: 'Yukon Gold No Deposit Bonus: the Honest Answer',
      chapeau:
        'Many players look for a Yukon Gold no deposit bonus. On its official pages, read on November 10, 2026, there is none. Here is the closest offer, and what to know before depositing $10.'
    },
    retrait: {
      titre: 'Yukon Gold Withdrawal: Times, Fees and $50 Minimum (2026)',
      description:
        'Yukon Gold withdrawals: 48 hours pending, then 1 to 10 business days by method, $50 minimum, direct bank transfer fees. Compared with our tested payouts.',
      h1: 'Yukon Gold Withdrawals: Times, Fees and Minimums',
      chapeau:
        'At Yukon Gold, a withdrawal first stays pending for 48 hours. Here are the announced times by payment method, the minimums, the fees and the checks, from the official FAQ and terms.'
    },
    fiable: {
      titre: 'Is Yukon Gold Casino Legit? Licence and Operator Checked',
      description:
        'Is Yukon Gold legit? Kahnawake licence no. 00972, eCOGRA certification, Malta operator and the clauses to know: our reading of the official terms.',
      h1: 'Is Yukon Gold Casino Legit? Licence, Operator and Clauses',
      chapeau:
        'Legit does not mean good value. Yukon Gold publishes its licence and certification, but some clauses are worth knowing before you deposit. Here is what we found on its official pages.'
    }
  }
};

/* ---------- Zodiac : relevé du 10 novembre 2026 ---------- */

const ZODIAC: MarqueRewards = {
  nom: 'Zodiac',
  slug: 'zodiac-casino',
  verifie: '2026-11-10',
  depot1: 1,
  chances: 80,
  paliers: [
    { rang: 2, pourcentage: 100, plafond: 100 },
    { rang: 3, pourcentage: 50, plafond: 80 },
    { rang: 4, pourcentage: 50, plafond: 150 },
    { rang: 5, pourcentage: 50, plafond: 150 }
  ],
  totalAnnonce: 480,
  noteOffreFr: 'La page bonus parle aussi d’un 2e dépôt « d’au moins 20 $ » sans le répéter dans les étapes : vérifiez le minimum avant de déposer.',
  noteOffreEn: 'The bonus page also mentions a 2nd deposit “of at least $20” without repeating it in the steps: check the minimum before depositing.',
  fideliteFr: 'Groupe Casino Rewards : ses conditions parlent des « casinos partenaires Casino Rewards »',
  fideliteEn: 'Casino Rewards group: its terms refer to “Casino Rewards partner casinos”',
  sourcesFr: [
    { titre: 'Zodiac Casino : page d’accueil officielle (offre, licence, certification eCOGRA, exploitant)', url: 'https://zodiac.casino/en/' },
    { titre: 'Zodiac Casino : page bonus officielle (80 chances pour 1 $, bonus des dépôts 2 à 5)', url: 'https://zodiac.casino/fr/bonus/' },
    { titre: 'Zodiac Casino : conditions générales (mise, contribution des jeux, retraits, licence)', url: 'https://zodiac.casino/en/terms/' },
    { titre: 'Zodiac Casino : FAQ (moyens de paiement, délais et frais de retrait, âge minimum)', url: 'https://zodiac.casino/en/faq/' }
  ],
  sourcesEn: [
    { titre: 'Zodiac Casino: official home page (offer, licence, eCOGRA certification, operator)', url: 'https://zodiac.casino/en/' },
    { titre: 'Zodiac Casino: official bonus page (80 chances for $1, deposit bonuses 2 to 5)', url: 'https://zodiac.casino/fr/bonus/' },
    { titre: 'Zodiac Casino: terms and conditions (wagering, game weighting, withdrawals, licence)', url: 'https://zodiac.casino/en/terms/' },
    { titre: 'Zodiac Casino: FAQ (payment methods, withdrawal times and fees, minimum age)', url: 'https://zodiac.casino/en/faq/' }
  ],
  fr: {
    avis: {
      titre: 'Avis Zodiac Casino 2026 : 80 chances à 1 $, mise de 200 fois',
      description:
        'Avis Zodiac Casino au Canada : 80 chances pour 1 $, jusqu’à 480 $ de bonus, mise de 200 fois, retraits après 48 h d’attente. Conditions officielles lues.',
      h1: 'Avis Zodiac Casino (2026) : 80 chances pour 1 $, et le reste des conditions',
      chapeau:
        'Zodiac est l’un des casinos en ligne les plus cherchés au Canada, surtout pour son offre : 80 chances de gagner un million pour 1 $. Nous avons lu ses conditions officielles. Le point à connaître avant tout : les bonus des deux premiers dépôts doivent être misés 200 fois.'
    },
    bonus: {
      titre: 'Bonus Zodiac Casino : 80 chances pour 1 $, jusqu’à 480 $',
      description:
        'Bonus Zodiac Casino : 80 chances pour 1 $, puis jusqu’à 480 $ sur 4 dépôts. Mise de 200 fois puis 30 fois, jeux à 2 % : exemple chiffré et comparaison.',
      h1: 'Bonus Zodiac Casino : 80 chances pour 1 $, puis 480 $, et le calcul à faire',
      chapeau:
        'Pour 1 $, Zodiac donne 80 tours sur une roue à un million, puis des bonus sur les 4 dépôts suivants. Mais les gains des deux premiers dépôts doivent être misés 200 fois. Voici les paliers, les règles et le calcul.'
    },
    sansDepot: {
      titre: 'Zodiac Casino bonus sans dépôt : existe-t-il en 2026 ?',
      description:
        'Zodiac Casino a-t-il un bonus sans dépôt ? Non, d’après ses pages officielles. Son offre la plus proche : 80 chances pour 1 $. Ce qu’elle coûte vraiment.',
      h1: 'Zodiac Casino bonus sans dépôt : la réponse honnête',
      chapeau:
        'Avec 80 chances pour 1 $, l’offre de Zodiac ressemble à un bonus sans dépôt. Ce n’en est pas un : il faut déposer, et les gains doivent être misés 200 fois. Voici ce qu’il faut savoir.'
    },
    retrait: {
      titre: 'Retrait Zodiac Casino : délais, frais et minimum de 50 $',
      description:
        'Retrait chez Zodiac : 48 h d’attente, puis 1 à 10 jours ouvrables selon le moyen, minimum de 50 $, frais du virement direct. Comparé aux retraits testés.',
      h1: 'Retrait chez Zodiac Casino : délais, frais et minimums',
      chapeau:
        'Chez Zodiac, un retrait passe d’abord 48 h en attente. Voici les délais annoncés par moyen de paiement, les minimums, les frais et les vérifications, d’après la FAQ et les conditions officielles.'
    },
    fiable: {
      titre: 'Zodiac Casino est-il fiable ? Licence et exploitant',
      description:
        'Zodiac Casino est-il fiable ? Licence de Kahnawake n° 00972, certification eCOGRA, exploitant à Malte et clauses à connaître, selon ses conditions.',
      h1: 'Zodiac Casino est-il fiable ? Licence, exploitant et clauses',
      chapeau:
        'Fiable ne veut pas dire avantageux. Zodiac publie sa licence et sa certification, mais certaines clauses méritent d’être connues avant de déposer. Voici ce que nous avons relevé dans ses pages officielles.'
    }
  },
  en: {
    avis: {
      titre: 'Zodiac Casino Canada Review 2026: 80 Chances for $1, 200x',
      description:
        'Zodiac Casino review for Canada: 80 chances for $1, up to $480 in bonuses, 200x wagering, 48-hour pending withdrawals. Official terms read line by line.',
      h1: 'Zodiac Casino Review (2026): 80 Chances for $1, and the Rest of the Terms',
      chapeau:
        'Zodiac is one of the most searched online casinos in Canada, mostly for its offer: 80 chances to win a million for $1. We read its official terms. The key detail: the first two deposit bonuses must be wagered 200 times.'
    },
    bonus: {
      titre: 'Zodiac Casino Bonus: 80 Chances for $1, Up to $480',
      description:
        'Zodiac Casino bonus: 80 chances for $1, then up to $480 over 4 deposits. 200x then 30x wagering, 2% game weighting: a worked example and a comparison.',
      h1: 'Zodiac Casino Bonus: 80 Chances for $1, Then $480, and the Math to Do',
      chapeau:
        'For $1, Zodiac gives 80 spins on a million-dollar wheel, then bonuses on the next 4 deposits. But winnings from the first two deposits must be wagered 200 times. Here are the tiers, the rules and the math.'
    },
    sansDepot: {
      titre: 'Zodiac Casino No Deposit Bonus: Is There One in 2026?',
      description:
        'Does Zodiac Casino offer a no deposit bonus? Not according to its official pages. The closest offer is 80 chances for $1: what it really costs.',
      h1: 'Zodiac Casino No Deposit Bonus: the Honest Answer',
      chapeau:
        'At 80 chances for $1, the Zodiac offer looks like a no deposit bonus. It is not one: you must deposit, and winnings must be wagered 200 times. Here is what to know.'
    },
    retrait: {
      titre: 'Zodiac Casino Withdrawal: Times, Fees and $50 Minimum',
      description:
        'Zodiac Casino withdrawals: 48 hours pending, then 1 to 10 business days by method, $50 minimum, direct bank transfer fees. Compared with our tested payouts.',
      h1: 'Zodiac Casino Withdrawals: Times, Fees and Minimums',
      chapeau:
        'At Zodiac, a withdrawal first stays pending for 48 hours. Here are the announced times by payment method, the minimums, the fees and the checks, from the official FAQ and terms.'
    },
    fiable: {
      titre: 'Is Zodiac Casino Legit? Licence and Operator Checked',
      description:
        'Is Zodiac Casino legit? Kahnawake licence no. 00972, eCOGRA certification, Malta operator and the clauses to know: our reading of the official terms.',
      h1: 'Is Zodiac Casino Legit? Licence, Operator and Clauses',
      chapeau:
        'Legit does not mean good value. Zodiac publishes its licence and certification, but some clauses are worth knowing before you deposit. Here is what we found on its official pages.'
    }
  }
};

const MARQUES: MarqueRewards[] = [YUKON, ZODIAC];

/* ---------- Calculs et formats communs ---------- */

const EXEMPLES = CASINOS.map((c) => ({ c, ex: exempleMise(c, 100) })).filter((x) => x.ex) as {
  c: Casino;
  ex: NonNullable<ReturnType<typeof exempleMise>>;
}[];
const TOP3 = CASINOS.slice(0, 3).map((c) => c.id);
const RAPIDES = classementRetraits();
const GAIN_EXEMPLE = 20;

const fr = (n: number) => montant(n, '$');
const enM = (n: number) => `$${Math.round(n).toLocaleString('en-CA')}`;
const heuresFr = (n?: number | null) => (n === null || n === undefined ? 'Pas encore testé' : `${n} h`);
const heuresEn = (n?: number | null) => (n === null || n === undefined ? 'Not tested yet' : `${n} h`);
const miseDe = (rang: number) => (rang <= 2 ? REWARDS.mise12 : REWARDS.mise3);
const rangFr = (n: number) => `${n}e dépôt`;
const rangEn = (n: number) => `${n}${n === 2 ? 'nd' : n === 3 ? 'rd' : 'th'} deposit`;

const chemins = (m: MarqueRewards) => ({
  fr: { avis: `/${m.slug}/`, bonus: `/${m.slug}/bonus/`, sansDepot: `/${m.slug}/bonus-sans-depot/`, retrait: `/${m.slug}/retrait/`, fiable: `/${m.slug}/fiable/` },
  en: {
    avis: `/en-ca/${m.slug}/`,
    bonus: `/en-ca/${m.slug}/bonus/`,
    sansDepot: `/en-ca/${m.slug}/no-deposit-bonus/`,
    retrait: `/en-ca/${m.slug}/withdrawal/`,
    fiable: `/en-ca/${m.slug}/legit/`
  }
});

function chiffres(m: MarqueRewards) {
  const p2 = m.paliers.find((p) => p.rang === 2)!;
  const bonus100 = Math.min(100 * (p2.pourcentage / 100), p2.plafond);
  const total = m.totalAnnonce ?? m.paliers.reduce((s, p) => s + p.plafond, 0);
  return {
    p2,
    bonus100,
    miseBonus100: bonus100 * REWARDS.mise12,
    miseTotal100: (100 + bonus100) * REWARDS.mise12,
    misePlafond2: p2.plafond * REWARDS.mise12,
    misePlafond2Total: p2.plafond * 2 * REWARDS.mise12,
    pertePlafond2: p2.plafond * REWARDS.mise12 * 0.04,
    total,
    misesGain: GAIN_EXEMPLE * REWARDS.mise12
  };
}

/** Résumé de l'offre en une ligne. */
function offreFr(m: MarqueRewards): string {
  if (m.paliers.length === 1) {
    const p = m.paliers[0];
    return `${m.chances} chances pour un 1er dépôt de ${fr(m.depot1)}, puis ${p.pourcentage} % jusqu’à ${fr(p.plafond)} au 2e dépôt`;
  }
  return `${m.chances} chances pour un 1er dépôt de ${fr(m.depot1)}, puis jusqu’à ${fr(chiffres(m).total)} de bonus sur les ${m.paliers.length} dépôts suivants`;
}
function offreEn(m: MarqueRewards): string {
  if (m.paliers.length === 1) {
    const p = m.paliers[0];
    return `${m.chances} chances for a first deposit of ${enM(m.depot1)}, then ${p.pourcentage}% up to ${enM(p.plafond)} on the 2nd deposit`;
  }
  return `${m.chances} chances for a first deposit of ${enM(m.depot1)}, then up to ${enM(chiffres(m).total)} in bonuses over the next ${m.paliers.length} deposits`;
}

/** Autres marques du groupe, pour les liens internes. */
const autresFr = (m: MarqueRewards) => MARQUES.filter((x) => x !== m).map((x) => `[${x.nom}](${chemins(x).fr.avis})`).join(', ');
const autresEn = (m: MarqueRewards) => MARQUES.filter((x) => x !== m).map((x) => `[${x.nom}](${chemins(x).en.avis})`).join(', ');

function tableauMiseFr(m: MarqueRewards) {
  const k = chiffres(m);
  return {
    type: 'tableau' as const,
    legende: `Pour un dépôt de 100 $. ${m.nom} : 2e dépôt, bonus de ${k.p2.pourcentage} %. Nos casinos : premier palier de leur offre de bienvenue, conditions officielles.`,
    entetes: ['Casino', 'Bonus reçu', 'Mise exigée', 'Montant à miser'],
    lignes: [
      [`**${m.nom}**`, fr(k.bonus100), `${REWARDS.mise12} fois`, `**${fr(k.miseBonus100)}** (bonus seul) à ${fr(k.miseTotal100)} (dépôt + bonus)`],
      ...EXEMPLES.map(({ c, ex }) => [`[${c.nom}](${cheminCasino(c)})`, fr(ex.bonus), `${c.offre.mise!.multiplicateur} fois`, `**${fr(ex.aMiser)}**`])
    ]
  };
}
function tableauMiseEn(m: MarqueRewards) {
  const k = chiffres(m);
  return {
    type: 'tableau' as const,
    legende: `For a $100 deposit. ${m.nom}: 2nd deposit, ${k.p2.pourcentage}% bonus. Our casinos: first tier of their welcome offer, official terms.`,
    entetes: ['Casino', 'Bonus received', 'Wagering', 'Amount to wager'],
    lignes: [
      [`**${m.nom}**`, enM(k.bonus100), `${REWARDS.mise12}x`, `**${enM(k.miseBonus100)}** (bonus only) to ${enM(k.miseTotal100)} (deposit + bonus)`],
      ...EXEMPLES.map(({ c, ex }) => [`[${c.nom}](${cheminEn(c)})`, enM(ex.bonus), `${c.offre.mise!.multiplicateur}x`, `**${enM(ex.aMiser)}**`])
    ]
  };
}

/* =====================================================================
   FRANÇAIS
   ===================================================================== */

function pagesFr(m: MarqueRewards): PageGuide[] {
  const c = chemins(m).fr;
  const k = chiffres(m);
  const t = m.fr;
  const parent = { nom: `Avis ${m.nom}`, chemin: c.avis };
  const titreTop = `Avant ${m.nom} : nos 3 casinos les mieux notés`;
  const base = { modifie: m.verifie, titreTop, sources: m.sourcesFr };

  const sectionOffre: SectionGuide = {
    id: 'offre',
    titre: `L’offre de bienvenue : ${m.chances} chances pour ${fr(m.depot1)}`,
    blocs: [
      {
        type: 'p',
        texte: `Au 1er dépôt de ${fr(m.depot1)}, ${m.nom} donne ${m.chances} tours sur la roue Mega Money Wheel, à 0,10 $ le tour selon ses conditions générales (article 11.4). Le gros lot de la roue est d’un million de dollars, mais les conditions que nous avons lues ne donnent pas la probabilité de le décrocher.`
      },
      {
        type: 'p',
        texte: `Ce que gagnent ces tours est versé en bonus, et ce bonus doit être misé **${REWARDS.mise12} fois** avant de pouvoir être retiré (article 12.4). Par exemple, si vos ${m.chances} chances rapportent ${fr(GAIN_EXEMPLE)}, il faut miser ${fr(k.misesGain)} avant de toucher ces ${fr(GAIN_EXEMPLE)}.`
      },
      {
        type: 'p',
        texte:
          m.paliers.length === 1
            ? `Au 2e dépôt, le bonus est de ${k.p2.pourcentage} % jusqu’à ${fr(k.p2.plafond)}, avec la même mise de ${REWARDS.mise12} fois. Les bonus des dépôts suivants demandent ${REWARDS.mise3} fois. Détails et exemple chiffré : [le bonus ${m.nom}](${c.bonus}).`
            : `Les ${m.paliers.length} dépôts suivants rapportent jusqu’à ${fr(k.total)} de bonus. Le 2e dépôt (${k.p2.pourcentage} % jusqu’à ${fr(k.p2.plafond)}) garde la mise de ${REWARDS.mise12} fois ; à partir du 3e, elle passe à ${REWARDS.mise3} fois. Détails et exemple chiffré : [le bonus ${m.nom}](${c.bonus}).`
      }
    ]
  };

  const avis: PageGuide = {
    ...base,
    chemin: c.avis,
    nomFil: `Avis ${m.nom}`,
    ...t.avis,
    resume: `Offre, mise de 200 fois, retraits et licence de ${m.nom}, d’après ses conditions officielles.`,
    sections: [
      {
        id: 'en-bref',
        titre: `${m.nom} en bref`,
        blocs: [
          {
            type: 'tableau',
            legende: 'Conditions officielles relues le 10 novembre 2026.',
            entetes: ['Point', 'Ce que disent les conditions officielles'],
            lignes: [
              ['Offre de bienvenue', offreFr(m)],
              ['Mise exigée', `**${REWARDS.mise12} fois** pour les bonus des 2 premiers dépôts, ${REWARDS.mise3} fois à partir du 3e`],
              ['Jeux qui comptent pour la mise', 'Machines à sous : 100 %. Jeux de table et jeux en direct : 2 %'],
              ['Dépôt par Interac', 'Mentionné dans la FAQ (traité par PayDirect Billing Solutions)'],
              ['Retrait', `48 h d’attente, puis 1 à 10 jours ouvrables selon le moyen. Minimum ${fr(REWARDS.retraitMin)}`],
              ['Licence', `Kahnawake Gaming Commission, licence n° ${REWARDS.licence}`],
              ['Âge minimum', '19 ans, même au Québec où l’âge légal est de 18 ans'],
              ['Fidélité', m.fideliteFr],
              ['Test réel Loupe Casino', 'Pas encore fait']
            ]
          },
          {
            type: 'encadre',
            titre: `Aucun lien commercial vers ${m.nom}`,
            texte: `Cette page ne contient pour l’instant aucun lien commercial vers ${m.nom}. Les casinos proposés plus haut sont ceux de notre comparatif, notés sur notre [grille publique](/notre-methode/).`
          }
        ]
      },
      sectionOffre,
      {
        id: 'mise',
        titre: 'La mise de 200 fois, comparée à nos casinos',
        blocs: [
          tableauMiseFr(m),
          {
            type: 'p',
            texte: `C’est le point le plus faible de ${m.nom}. Les conditions ne précisent pas si la mise porte sur le bonus seul ou sur le dépôt et le bonus : le tableau donne les deux. Pour faire le calcul avec votre propre dépôt, utilisez notre [calculateur de mise](/conditions-de-mise/).`
          }
        ]
      },
      {
        id: 'retraits',
        titre: 'Les retraits',
        blocs: [
          {
            type: 'p',
            texte: `Un retrait reste en attente 48 h, puis il est traité le jour ouvrable suivant. Il faut ensuite compter 1 à 3 jours ouvrables pour un portefeuille électronique, 2 à 3 pour un virement EFT en dollars canadiens, 3 pour une carte et 6 à 10 pour un virement bancaire direct. Le minimum est de ${fr(REWARDS.retraitMin)}. Le détail des délais et des frais : [retrait chez ${m.nom}](${c.retrait}).`
          }
        ]
      },
      {
        id: 'licence',
        titre: 'Licence et exploitant',
        blocs: [
          {
            type: 'p',
            texte: `Les conditions indiquent une licence de la Kahnawake Gaming Commission (n° ${REWARDS.licence}) et le site renvoie vers un certificat eCOGRA. Le pied de page nomme ${REWARDS.exploitantFr} ; les conditions parlent d’une marque gérée par ${REWARDS.gestionnaire}. Notre analyse complète : [${m.nom} est-il fiable ?](${c.fiable})`
          },
          {
            type: 'p',
            texte: `Les mêmes conditions générales s’appliquent aux autres casinos du groupe que nous avons analysés : ${autresFr(m)}.`
          }
        ]
      },
      {
        id: 'verdict',
        titre: 'Notre verdict',
        blocs: [
          {
            type: 'liste',
            items: [
              `**Pour vous si** vous voulez tenter la roue à un million avec ${fr(m.depot1)}, sans compter retirer le bonus.`,
              '**Pour vous si** vous jouez déjà sur un autre casino du groupe Casino Rewards : les points de fidélité sont communs.',
              '**Pas pour vous si** vous voulez un bonus que vous pourrez vraiment débloquer : 200 fois, c’est l’une des mises les plus lourdes que nous ayons relevées.',
              '**Pas pour vous si** vous jouez surtout aux jeux de table ou en direct : ils ne comptent qu’à 2 % pour la mise.'
            ]
          },
          { type: 'offres', casinos: TOP3, titre: 'Mise de 30 à 50 fois au lieu de 200 : nos casinos les mieux notés' }
        ]
      }
    ],
    faq: [
      {
        q: `${m.nom} est-il disponible au Québec ?`,
        r: 'Le site existe en français et ses conditions ne nomment aucune province exclue. Il faut avoir 19 ans, même au Québec. Vérifiez à l’inscription que votre province est acceptée.'
      },
      {
        q: `Le bonus de ${m.nom} vaut-il le coup ?`,
        r: `Il faut miser ${REWARDS.mise12} fois les bonus des deux premiers dépôts. Avec un bonus de ${fr(k.p2.plafond)} au 2e dépôt, cela fait au moins ${fr(k.misePlafond2)} de mises. Voyez-le comme un divertissement, pas comme de l’argent à retirer.`
      },
      {
        q: `Combien de temps prend un retrait chez ${m.nom} ?`,
        r: '48 h d’attente, traitement le jour ouvrable suivant, puis 1 à 10 jours ouvrables selon le moyen choisi. Un premier retrait par un nouveau moyen peut demander jusqu’à 5 à 7 jours ouvrables de vérification.'
      },
      {
        q: `${m.nom} accepte-t-il Interac ?`,
        r: 'Sa FAQ mentionne les dépôts Interac, traités par PayDirect Billing Solutions. Interac ne figure pas dans la liste des moyens de retrait : on retire notamment par virement EFT en dollars canadiens.'
      }
    ],
    connexes: [c.bonus, c.retrait, c.fiable, '/casino-bonus-sans-depot/']
  };

  const bonus: PageGuide = {
    ...base,
    chemin: c.bonus,
    nomFil: 'Bonus',
    parent,
    ...t.bonus,
    resume: `Paliers, mise de 200 fois et exemple chiffré du bonus ${m.nom}.`,
    sections: [
      {
        id: 'paliers',
        titre: 'Les paliers du bonus de bienvenue',
        blocs: [
          {
            type: 'tableau',
            legende: 'Page bonus et conditions générales officielles, relues le 10 novembre 2026.',
            entetes: ['Dépôt', 'Ce que vous recevez', 'Mise exigée'],
            lignes: [
              [`1er dépôt de ${fr(m.depot1)}`, `${m.chances} tours sur la Mega Money Wheel, à 0,10 $ le tour`, `${REWARDS.mise12} fois les gains`],
              ...m.paliers.map((p) => [rangFr(p.rang), `${p.pourcentage} % jusqu’à ${fr(p.plafond)}`, `${miseDe(p.rang)} fois`]),
              [m.paliers.length === 1 ? '3e dépôt et suivants' : 'Dépôts suivants', 'Selon les promotions du moment', `${REWARDS.mise3} fois`]
            ]
          },
          ...(m.noteOffreFr ? [{ type: 'p' as const, texte: m.noteOffreFr }] : [])
        ]
      },
      {
        id: 'exemple',
        titre: 'L’exemple chiffré',
        blocs: [
          {
            type: 'liste',
            items: [
              `**Les ${m.chances} chances** : si elles rapportent ${fr(GAIN_EXEMPLE)}, il faut miser ${fr(k.misesGain)} avant de pouvoir retirer.`,
              `**Le 2e dépôt** : avec le bonus maximum de ${fr(k.p2.plafond)}, il faut miser **${fr(k.misePlafond2)}** si la mise porte sur le bonus seul, ${fr(k.misePlafond2Total)} si elle porte sur le dépôt et le bonus. Les conditions ne le précisent pas.`,
              `**La perte moyenne** : avec un taux de retour de 96 %, miser ${fr(k.misePlafond2)} coûte en moyenne ${fr(k.pertePlafond2)}, soit bien plus que les ${fr(k.p2.plafond)} de bonus.`
            ]
          },
          {
            type: 'encadre',
            ton: 'alerte',
            titre: 'Ce que ça veut dire',
            texte:
              'À 200 fois, la plupart des joueurs ne débloquent jamais le bonus. Ce n’est pas une raison de l’éviter si vous voulez simplement jouer avec plus de crédit, mais ne comptez pas le retirer.'
          }
        ]
      },
      {
        id: 'regles',
        titre: 'Les règles à connaître',
        blocs: [
          {
            type: 'liste',
            items: [
              '**Jeux** : les machines à sous comptent à 100 % ; les jeux de table, de salon et en direct à 2 % (articles 12.13 et 12.15).',
              '**Grosse mise** : une mise égale à 25 % du bonus ou plus, avant la fin de la mise exigée, est traitée comme du jeu irrégulier et peut faire perdre les gains (article 13.16.1).',
              '**Délai pour réclamer** : l’offre de bienvenue doit être activée par un 1er dépôt dans les 7 jours suivant l’inscription (article 11.8).',
              '**Expiration** : un bonus inutilisé pendant plus de 60 jours depuis l’inscription est perdu (article 13.7).',
              '**Argent réel et bonus** : les mises faites avec votre argent et avec le bonus comptent toutes pour la mise exigée (article 12.6).'
            ]
          }
        ]
      },
      {
        id: 'comparaison',
        titre: 'Comparé aux bonus de nos casinos',
        blocs: [tableauMiseFr(m), { type: 'offres', casinos: TOP3, titre: 'Des bonus plus faciles à débloquer' }]
      }
    ],
    faq: [
      {
        q: `Les ${m.chances} chances de ${m.nom} sont-elles gratuites ?`,
        r: `Non : elles demandent un 1er dépôt de ${fr(m.depot1)}, et leurs gains doivent être misés ${REWARDS.mise12} fois.`
      },
      {
        q: `Peut-on retirer les gains des ${m.chances} chances ?`,
        r: `Oui, mais seulement après avoir misé ${REWARDS.mise12} fois ces gains, sur des jeux qui comptent pour la mise. Avec ${fr(GAIN_EXEMPLE)} de gains, cela fait ${fr(k.misesGain)} de mises.`
      },
      {
        q: `Y a-t-il un code promo ${m.nom} ?`,
        r: 'La page bonus officielle n’en demande aucun : l’offre s’active avec le dépôt. Méfiez-vous des codes annoncés ailleurs et vérifiez toujours sur la page officielle.'
      }
    ],
    connexes: [c.avis, c.sansDepot, '/casino-bonus-sans-depot/', '/casino-depot-minimum/']
  };

  const sansDepot: PageGuide = {
    ...base,
    chemin: c.sansDepot,
    nomFil: 'Bonus sans dépôt',
    parent,
    ...t.sansDepot,
    resume: `Pas de bonus sans dépôt chez ${m.nom} : l’offre la plus proche et les alternatives.`,
    sections: [
      {
        id: 'reponse',
        titre: 'La réponse courte',
        blocs: [
          {
            type: 'p',
            texte: `**Non.** ${m.nom} n’affiche aucun bonus sans dépôt sur ses pages officielles. Son offre la plus proche demande un dépôt de ${fr(m.depot1)} : ${m.chances} tours sur la roue Mega Money Wheel, dont les gains doivent être misés ${REWARDS.mise12} fois.`
          },
          {
            type: 'encadre',
            titre: `Un « code sans dépôt ${m.nom} » ailleurs ?`,
            texte: `Si un site vous promet un code sans dépôt pour ${m.nom}, comparez-le avec la page bonus officielle (lien dans les sources, en bas de page) avant de vous inscrire. Les offres changent, et seules celles du site officiel comptent.`
          }
        ]
      },
      {
        id: 'chances',
        titre: `Pourquoi les ${m.chances} chances ne sont pas un bonus sans dépôt`,
        blocs: [
          {
            type: 'liste',
            items: [
              `Elles demandent un 1er dépôt de ${fr(m.depot1)}, à faire dans les 7 jours suivant l’inscription.`,
              `Leurs gains sont versés en bonus, à miser ${REWARDS.mise12} fois : ${fr(GAIN_EXEMPLE)} de gains demandent ${fr(k.misesGain)} de mises.`,
              'Un bonus inutilisé pendant plus de 60 jours depuis l’inscription est perdu.'
            ]
          }
        ]
      },
      {
        id: 'alternatives',
        titre: 'Les alternatives avec un petit dépôt',
        blocs: [
          {
            type: 'tableau',
            legende: 'Conditions officielles de chaque casino. Aucun de nos casinos n’offre de bonus sans dépôt non plus.',
            entetes: ['Casino', 'Dépôt minimum', 'Offre de bienvenue'],
            lignes: [
              [`**${m.nom}**`, fr(m.depot1), `${m.chances} chances, mise de ${REWARDS.mise12} fois`],
              ...CASINOS.map((x) => [`[${x.nom}](${cheminCasino(x)})`, depotMinTexte(x), x.offre.titre])
            ]
          },
          { type: 'p', texte: 'Notre guide complet sur le sujet : [bonus sans dépôt au Québec](/casino-bonus-sans-depot/).' },
          { type: 'offres', casinos: TOP3, titre: 'Nos casinos les mieux notés' }
        ]
      }
    ],
    faq: [
      {
        q: `${m.nom} offre-t-il des tours gratuits sans dépôt ?`,
        r: `Pas d’après ses pages officielles. Les ${m.chances} chances demandent un dépôt de ${fr(m.depot1)}.`
      },
      {
        q: `Quel est le plus petit dépôt chez ${m.nom} ?`,
        r: `L’offre de bienvenue démarre avec un dépôt de ${fr(m.depot1)}. Pour retirer, le minimum est de ${fr(REWARDS.retraitMin)}.`
      }
    ],
    connexes: [c.avis, c.bonus, '/casino-bonus-sans-depot/', '/casino-depot-minimum/']
  };

  const retrait: PageGuide = {
    ...base,
    chemin: c.retrait,
    nomFil: 'Retrait',
    parent,
    ...t.retrait,
    resume: `Délais, minimums, frais et vérifications des retraits chez ${m.nom}.`,
    sections: [
      {
        id: 'delais',
        titre: 'Les délais de retrait annoncés',
        blocs: [
          {
            type: 'tableau',
            legende: 'FAQ officielle, relue le 10 novembre 2026. Délais après les 48 h d’attente et le traitement.',
            entetes: ['Moyen de retrait', 'Délai annoncé'],
            lignes: [
              ['Portefeuilles électroniques', '1 à 3 jours ouvrables'],
              ['Virement EFT ou eCheck en dollars canadiens (Canada seulement)', '2 à 3 jours ouvrables'],
              ['Visa, Mastercard', '3 jours ouvrables'],
              ['Virement bancaire direct', '6 à 10 jours ouvrables']
            ]
          }
        ]
      },
      {
        id: 'etapes',
        titre: 'Ce qui se passe après votre demande',
        blocs: [
          {
            type: 'liste',
            ordonnee: true,
            items: [
              '**48 h d’attente.** Pendant ce temps, vous pouvez annuler le retrait. C’est souvent là que l’on rejoue ses gains : si vous voulez retirer, n’y touchez plus.',
              '**Traitement le jour ouvrable suivant.**',
              '**Délai du moyen choisi**, de 1 à 10 jours ouvrables (tableau ci-dessus).',
              '**Premier retrait par un nouveau moyen** : vérifications supplémentaires, jusqu’à 5 à 7 jours ouvrables.'
            ]
          }
        ]
      },
      {
        id: 'frais',
        titre: 'Minimum, frais et plafonds',
        blocs: [
          {
            type: 'liste',
            items: [
              `**Minimum** : ${fr(REWARDS.retraitMin)}, et ${fr(REWARDS.retraitMinVirement)} par virement bancaire direct.`,
              '**Frais** : 50 $ par virement bancaire direct (100 $ au-delà de 3 000 $). Les autres moyens sont sans frais.',
              '**Plafonds** : les conditions prévoient des limites par jour, par semaine et par mois selon le pays et le moyen, sans les chiffrer (article 14.2.2).',
              '**Cas particulier** : si vos gains sont très supérieurs à vos dépôts dans les casinos du groupe, les retraits peuvent être limités à 4 000 $ par semaine (article 14.2.10).'
            ]
          }
        ]
      },
      {
        id: 'comparaison',
        titre: 'Comparé aux retraits testés de nos casinos',
        blocs: [
          {
            type: 'tableau',
            legende: `Nos casinos : délais constatés lors de nos retraits en argent réel. ${m.nom} : pas encore testé.`,
            entetes: ['Casino', 'Retrait crypto constaté', 'Retrait carte constaté'],
            lignes: [
              [`**${m.nom}**`, 'Crypto non listée', 'Pas encore testé (3 jours ouvrables annoncés après l’attente)'],
              ...RAPIDES.map((x) => [`[${x.nom}](${cheminCasino(x)})`, heuresFr(dernier(x, 'crypto')?.delaiHeures), heuresFr(dernier(x, 'carte')?.delaiHeures)])
            ]
          },
          { type: 'p', texte: 'Tous nos relevés, datés : [délais de retrait testés](/delais-de-retrait-casino/).' },
          { type: 'offres', casinos: TOP3, titre: 'Des retraits plus rapides' }
        ]
      }
    ],
    faq: [
      {
        q: `Pourquoi mon retrait ${m.nom} est-il en attente ?`,
        r: 'Tous les retraits restent 48 h en attente avant d’être traités le jour ouvrable suivant. Un premier retrait par un nouveau moyen peut demander jusqu’à 5 à 7 jours ouvrables de vérification.'
      },
      {
        q: `Peut-on retirer par Interac chez ${m.nom} ?`,
        r: 'Interac ne figure pas dans la liste des moyens de retrait de la FAQ. Au Canada, le virement EFT ou eCheck en dollars canadiens prend 2 à 3 jours ouvrables.'
      },
      {
        q: `Quel est le retrait minimum chez ${m.nom} ?`,
        r: `${fr(REWARDS.retraitMin)} pour la plupart des moyens, ${fr(REWARDS.retraitMinVirement)} par virement bancaire direct.`
      }
    ],
    connexes: [c.avis, c.fiable, '/casino-retrait-rapide/', '/delais-de-retrait-casino/']
  };

  const fiable: PageGuide = {
    ...base,
    chemin: c.fiable,
    nomFil: 'Fiabilité',
    parent,
    ...t.fiable,
    resume: `Licence, exploitant, certification et clauses de ${m.nom}.`,
    sections: [
      {
        id: 'licence',
        titre: 'La licence et la certification',
        blocs: [
          {
            type: 'liste',
            items: [
              `**Licence** : Kahnawake Gaming Commission, licence n° ${REWARDS.licence} (article 2.1 des conditions). Le site renvoie vers le certificat sur le site de la commission.`,
              '**Certification** : le site renvoie vers un certificat eCOGRA, un organisme qui contrôle l’équité des jeux.',
              '**Âge** : il faut avoir 19 ans ou l’âge de la majorité de votre province s’il est plus élevé.'
            ]
          }
        ]
      },
      {
        id: 'exploitant',
        titre: `Qui exploite ${m.nom}`,
        blocs: [
          {
            type: 'p',
            texte: `Le pied de page indique que le site est détenu et exploité par ${REWARDS.exploitantFr}. Les conditions générales parlent d’une marque gérée par ${REWARDS.gestionnaire}. Le site ne précise pas le lien entre les deux sociétés. Les mêmes noms figurent chez les autres casinos du groupe que nous avons analysés : ${autresFr(m)}.`
          }
        ]
      },
      {
        id: 'vigilance',
        titre: 'Les clauses à connaître',
        blocs: [
          {
            type: 'liste',
            items: [
              `**Mise de ${REWARDS.mise12} fois** sur les bonus des deux premiers dépôts (article 12.4).`,
              '**Grosse mise interdite** : une mise de 25 % du bonus ou plus, avant la fin de la mise exigée, peut faire perdre les gains (article 13.16.1).',
              '**Retraits annulables** pendant les 48 h d’attente.',
              '**Plafond possible** de 4 000 $ par semaine si vos gains sont très supérieurs à vos dépôts dans les casinos du groupe (article 14.2.10).'
            ]
          }
        ]
      },
      {
        id: 'rassurant',
        titre: 'Les points rassurants',
        blocs: [
          {
            type: 'liste',
            items: [
              'Le numéro de licence et l’exploitant sont affichés.',
              'Une page de jeu responsable et un certificat eCOGRA sont accessibles depuis chaque page.',
              'Les délais, minimums et frais de retrait sont publiés dans la FAQ.'
            ]
          },
          {
            type: 'p',
            texte:
              'Pour ce que dit la loi québécoise sur les sites autres que Loto-Québec, voyez notre page [casino en ligne légal au Québec](/casino-en-ligne-legal-quebec/).'
          },
          { type: 'offres', casinos: TOP3, titre: 'Nos casinos les mieux notés' }
        ]
      }
    ],
    faq: [
      {
        q: `${m.nom} est-il une arnaque ?`,
        r: `Rien dans ce que nous avons lu ne l’indique : la licence et l’exploitant sont publiés, et le site est certifié par eCOGRA. Le vrai piège est ailleurs : le bonus à miser ${REWARDS.mise12} fois.`
      },
      {
        q: `Quelle licence a ${m.nom} ?`,
        r: `Une licence de la Kahnawake Gaming Commission, n° ${REWARDS.licence}, selon l’article 2.1 de ses conditions.`
      },
      {
        q: `Qui est derrière ${m.nom} ?`,
        r: `${REWARDS.exploitantFr}, selon le pied de page. Les conditions mentionnent aussi ${REWARDS.gestionnaire} comme gestionnaire de la marque.`
      }
    ],
    connexes: [c.avis, c.retrait, '/casino-en-ligne-fiable/', '/casino-en-ligne-legal-quebec/']
  };

  return [avis, bonus, sansDepot, retrait, fiable];
}

/* =====================================================================
   ENGLISH
   ===================================================================== */

function pagesEn(m: MarqueRewards): PageGuide[] {
  const c = chemins(m).en;
  const k = chiffres(m);
  const t = m.en;
  const parent = { nom: `${m.nom} review`, chemin: c.avis };
  const titreTop = `Before ${m.nom}: our 3 top-rated casinos`;
  const base = { modifie: m.verifie, titreTop, sources: m.sourcesEn };

  const avis: PageGuide = {
    ...base,
    chemin: c.avis,
    nomFil: `${m.nom} review`,
    ...t.avis,
    resume: `Offer, 200x wagering, withdrawals and licence of ${m.nom}, from its official terms.`,
    sections: [
      {
        id: 'at-a-glance',
        titre: `${m.nom} at a glance`,
        blocs: [
          {
            type: 'tableau',
            legende: 'Official terms read on November 10, 2026.',
            entetes: ['Item', 'What the official terms say'],
            lignes: [
              ['Welcome offer', offreEn(m)],
              ['Wagering', `**${REWARDS.mise12}x** on the first two deposit bonuses, ${REWARDS.mise3}x from the 3rd deposit`],
              ['Game weighting', 'Slots: 100%. Table and live games: 2%'],
              ['Interac deposits', 'Mentioned in the FAQ (processed by PayDirect Billing Solutions)'],
              ['Withdrawals', `48-hour pending period, then 1 to 10 business days by method. Minimum ${enM(REWARDS.retraitMin)}`],
              ['Licence', `Kahnawake Gaming Commission, licence no. ${REWARDS.licence}`],
              ['Minimum age', '19, including in Quebec and Manitoba where the legal age is 18'],
              ['Loyalty', m.fideliteEn],
              ['Loupe Casino real-money test', 'Not done yet']
            ]
          },
          {
            type: 'encadre',
            titre: `No commercial link to ${m.nom}`,
            texte: `For now, this page contains no commercial link to ${m.nom}. The casinos shown above are the ones in our comparison, rated with our [public scoring grid](/en-ca/how-we-rate/).`
          }
        ]
      },
      {
        id: 'offer',
        titre: `The welcome offer: ${m.chances} chances for ${enM(m.depot1)}`,
        blocs: [
          {
            type: 'p',
            texte: `A first deposit of ${enM(m.depot1)} gives ${m.chances} spins on the Mega Money Wheel, at $0.10 per spin according to the terms (section 11.4). The top prize is one million dollars, but the terms we read do not give the odds of winning it.`
          },
          {
            type: 'p',
            texte: `Winnings from these spins are paid as bonus funds, which must be wagered **${REWARDS.mise12} times** before they can be withdrawn (section 12.4). For example, if your ${m.chances} chances pay ${enM(GAIN_EXEMPLE)}, you must wager ${enM(k.misesGain)} before you can cash out those ${enM(GAIN_EXEMPLE)}.`
          },
          {
            type: 'p',
            texte:
              m.paliers.length === 1
                ? `The 2nd deposit bonus is ${k.p2.pourcentage}% up to ${enM(k.p2.plafond)}, with the same ${REWARDS.mise12}x wagering. Later deposit bonuses require ${REWARDS.mise3}x. Details and a worked example: [the ${m.nom} bonus](${c.bonus}).`
                : `The next ${m.paliers.length} deposits pay up to ${enM(k.total)} in bonuses. The 2nd deposit (${k.p2.pourcentage}% up to ${enM(k.p2.plafond)}) keeps the ${REWARDS.mise12}x wagering; from the 3rd deposit it drops to ${REWARDS.mise3}x. Details and a worked example: [the ${m.nom} bonus](${c.bonus}).`
          }
        ]
      },
      {
        id: 'wagering',
        titre: '200x wagering compared with our casinos',
        blocs: [
          tableauMiseEn(m),
          {
            type: 'p',
            texte: `This is ${m.nom}’s weakest point. The terms do not say whether wagering applies to the bonus only or to the deposit and bonus, so the table shows both.`
          }
        ]
      },
      {
        id: 'withdrawals',
        titre: 'Withdrawals',
        blocs: [
          {
            type: 'p',
            texte: `A withdrawal stays pending for 48 hours, then it is processed on the next business day. After that, allow 1 to 3 business days for e-wallets, 2 to 3 for a CAD EFT transfer, 3 for a card and 6 to 10 for a direct bank transfer. The minimum is ${enM(REWARDS.retraitMin)}. Times and fees in detail: [${m.nom} withdrawals](${c.retrait}).`
          }
        ]
      },
      {
        id: 'licence',
        titre: 'Licence and operator',
        blocs: [
          {
            type: 'p',
            texte: `The terms state a Kahnawake Gaming Commission licence (no. ${REWARDS.licence}) and the site links to an eCOGRA certificate. The footer names ${REWARDS.exploitantEn}; the terms describe a brand managed by ${REWARDS.gestionnaire}. Our full analysis: [is ${m.nom} legit?](${c.fiable})`
          },
          { type: 'p', texte: `The same terms apply to the other casinos of the group we have reviewed: ${autresEn(m)}.` }
        ]
      },
      {
        id: 'verdict',
        titre: 'Our verdict',
        blocs: [
          {
            type: 'liste',
            items: [
              `**Good for you if** you want to try the million-dollar wheel for ${enM(m.depot1)}, without expecting to cash out the bonus.`,
              '**Good for you if** you already play at another Casino Rewards casino: loyalty points are shared.',
              '**Not for you if** you want a bonus you can realistically clear: 200x is one of the heaviest wagering requirements we have seen.',
              '**Not for you if** you mostly play table or live games: they count only 2% towards wagering.'
            ]
          },
          { type: 'offres', casinos: TOP3, titre: '30x to 50x wagering instead of 200x: our top-rated casinos' }
        ]
      }
    ],
    faq: [
      {
        q: `Is ${m.nom} available in Canada?`,
        r: 'The site serves Canadian players in Canadian dollars and its terms name no excluded province. You must be 19. Check at sign-up that your province is accepted.'
      },
      {
        q: `Is the ${m.nom} bonus worth it?`,
        r: `The first two deposit bonuses must be wagered ${REWARDS.mise12} times. With a ${enM(k.p2.plafond)} bonus on the 2nd deposit, that is at least ${enM(k.misePlafond2)} in wagers. Treat it as entertainment, not as money to withdraw.`
      },
      {
        q: `How long does a ${m.nom} withdrawal take?`,
        r: '48 hours pending, processing on the next business day, then 1 to 10 business days depending on the method. A first withdrawal with a new method can take up to 5 to 7 business days of checks.'
      },
      {
        q: `Does ${m.nom} accept Interac?`,
        r: 'Its FAQ mentions Interac deposits, processed by PayDirect Billing Solutions. Interac is not listed as a withdrawal method: Canadian players can withdraw by CAD EFT transfer, among other options.'
      }
    ],
    connexes: [c.bonus, c.retrait, c.fiable, '/en-ca/casino-bonuses/']
  };

  const bonus: PageGuide = {
    ...base,
    chemin: c.bonus,
    nomFil: 'Bonus',
    parent,
    ...t.bonus,
    resume: `Tiers, 200x wagering and a worked example of the ${m.nom} bonus.`,
    sections: [
      {
        id: 'tiers',
        titre: 'The welcome bonus tiers',
        blocs: [
          {
            type: 'tableau',
            legende: 'Official bonus page and terms, read on November 10, 2026.',
            entetes: ['Deposit', 'What you get', 'Wagering'],
            lignes: [
              [`1st deposit of ${enM(m.depot1)}`, `${m.chances} spins on the Mega Money Wheel at $0.10 per spin`, `${REWARDS.mise12}x the winnings`],
              ...m.paliers.map((p) => [rangEn(p.rang), `${p.pourcentage}% up to ${enM(p.plafond)}`, `${miseDe(p.rang)}x`]),
              [m.paliers.length === 1 ? '3rd deposit and later' : 'Later deposits', 'Depends on current promotions', `${REWARDS.mise3}x`]
            ]
          },
          ...(m.noteOffreEn ? [{ type: 'p' as const, texte: m.noteOffreEn }] : [])
        ]
      },
      {
        id: 'example',
        titre: 'A worked example',
        blocs: [
          {
            type: 'liste',
            items: [
              `**The ${m.chances} chances**: if they pay ${enM(GAIN_EXEMPLE)}, you must wager ${enM(k.misesGain)} before you can withdraw.`,
              `**The 2nd deposit**: with the maximum ${enM(k.p2.plafond)} bonus, you must wager **${enM(k.misePlafond2)}** if wagering applies to the bonus only, ${enM(k.misePlafond2Total)} if it applies to deposit and bonus. The terms do not say which.`,
              `**The average cost**: at a 96% return to player, wagering ${enM(k.misePlafond2)} costs ${enM(k.pertePlafond2)} on average, far more than the ${enM(k.p2.plafond)} bonus.`
            ]
          },
          {
            type: 'encadre',
            ton: 'alerte',
            titre: 'What this means',
            texte:
              'At 200x, most players never clear the bonus. That is not a reason to skip it if you simply want more credit to play with, but do not count on withdrawing it.'
          }
        ]
      },
      {
        id: 'rules',
        titre: 'The rules to know',
        blocs: [
          {
            type: 'liste',
            items: [
              '**Games**: slots count 100%; table, parlour and live games count 2% (sections 12.13 and 12.15).',
              '**Large bets**: a single bet of 25% of the bonus or more before wagering is complete is treated as irregular play and can void winnings (section 13.16.1).',
              '**Claim window**: the welcome offer must be activated with a first deposit within 7 days of registration (section 11.8).',
              '**Expiry**: a bonus left unused for more than 60 days from registration is forfeited (section 13.7).',
              '**Cash and bonus**: wagers from both your cash and bonus balances count towards wagering (section 12.6).'
            ]
          }
        ]
      },
      {
        id: 'comparison',
        titre: 'Compared with our casinos’ bonuses',
        blocs: [tableauMiseEn(m), { type: 'offres', casinos: TOP3, titre: 'Bonuses that are easier to clear' }]
      }
    ],
    faq: [
      {
        q: `Are the ${m.chances} ${m.nom} chances free?`,
        r: `No: they require a first deposit of ${enM(m.depot1)}, and their winnings must be wagered ${REWARDS.mise12} times.`
      },
      {
        q: `Can you withdraw winnings from the ${m.chances} chances?`,
        r: `Yes, but only after wagering those winnings ${REWARDS.mise12} times on eligible games. ${enM(GAIN_EXEMPLE)} of winnings means ${enM(k.misesGain)} in wagers.`
      },
      {
        q: `Is there a ${m.nom} promo code?`,
        r: 'The official bonus page asks for none: the offer is triggered by the deposit. Be careful with codes advertised elsewhere and always check the official page.'
      }
    ],
    connexes: [c.avis, c.sansDepot, '/en-ca/casino-bonuses/', '/en-ca/minimum-deposit-casinos/']
  };

  const sansDepot: PageGuide = {
    ...base,
    chemin: c.sansDepot,
    nomFil: 'No deposit bonus',
    parent,
    ...t.sansDepot,
    resume: `No no-deposit bonus at ${m.nom}: the closest offer and alternatives.`,
    sections: [
      {
        id: 'answer',
        titre: 'The short answer',
        blocs: [
          {
            type: 'p',
            texte: `**No.** ${m.nom} shows no no-deposit bonus on its official pages. The closest offer requires a ${enM(m.depot1)} deposit: ${m.chances} spins on the Mega Money Wheel, with winnings to be wagered ${REWARDS.mise12} times.`
          },
          {
            type: 'encadre',
            titre: `A “${m.nom} no deposit code” somewhere else?`,
            texte: `If a site promises a ${m.nom} no deposit code, compare it with the official bonus page (linked in the sources at the bottom) before signing up. Offers change, and only the official site counts.`
          }
        ]
      },
      {
        id: 'chances',
        titre: `Why the ${m.chances} chances are not a no deposit bonus`,
        blocs: [
          {
            type: 'liste',
            items: [
              `They require a first deposit of ${enM(m.depot1)}, made within 7 days of registration.`,
              `Their winnings are paid as bonus funds with ${REWARDS.mise12}x wagering: ${enM(GAIN_EXEMPLE)} of winnings means ${enM(k.misesGain)} in wagers.`,
              'A bonus left unused for more than 60 days from registration is forfeited.'
            ]
          }
        ]
      },
      {
        id: 'alternatives',
        titre: 'Alternatives with a small deposit',
        blocs: [
          {
            type: 'tableau',
            legende: 'Official terms of each casino. None of our casinos offers a no deposit bonus either.',
            entetes: ['Casino', 'Minimum deposit', 'Welcome offer'],
            lignes: [
              [`**${m.nom}**`, enM(m.depot1), `${m.chances} chances, ${REWARDS.mise12}x wagering`],
              ...CASINOS.map((x) => [`[${x.nom}](${cheminEn(x)})`, depotMinEn(x), en(x).offre.titre])
            ]
          },
          { type: 'offres', casinos: TOP3, titre: 'Our top-rated casinos' }
        ]
      }
    ],
    faq: [
      {
        q: `Does ${m.nom} give free spins without a deposit?`,
        r: `Not according to its official pages. The ${m.chances} chances require a ${enM(m.depot1)} deposit.`
      },
      {
        q: `What is the smallest deposit at ${m.nom}?`,
        r: `The welcome offer starts with a ${enM(m.depot1)} deposit. The minimum withdrawal is ${enM(REWARDS.retraitMin)}.`
      }
    ],
    connexes: [c.avis, c.bonus, '/en-ca/casino-bonuses/', '/en-ca/minimum-deposit-casinos/']
  };

  const retrait: PageGuide = {
    ...base,
    chemin: c.retrait,
    nomFil: 'Withdrawal',
    parent,
    ...t.retrait,
    resume: `Times, minimums, fees and checks for ${m.nom} withdrawals.`,
    sections: [
      {
        id: 'times',
        titre: 'Announced withdrawal times',
        blocs: [
          {
            type: 'tableau',
            legende: 'Official FAQ, read on November 10, 2026. Times after the 48-hour pending period and processing.',
            entetes: ['Withdrawal method', 'Announced time'],
            lignes: [
              ['E-wallets', '1 to 3 business days'],
              ['CAD EFT or eCheck (Canada only)', '2 to 3 business days'],
              ['Visa, Mastercard', '3 business days'],
              ['Direct bank transfer', '6 to 10 business days']
            ]
          }
        ]
      },
      {
        id: 'steps',
        titre: 'What happens after you request a withdrawal',
        blocs: [
          {
            type: 'liste',
            ordonnee: true,
            items: [
              '**48 hours pending.** During this time you can reverse the withdrawal. This is often when players gamble their winnings again: if you want to cash out, leave it alone.',
              '**Processing on the next business day.**',
              '**The method’s own delay**, from 1 to 10 business days (table above).',
              '**First withdrawal with a new method**: extra checks, up to 5 to 7 business days.'
            ]
          }
        ]
      },
      {
        id: 'fees',
        titre: 'Minimums, fees and limits',
        blocs: [
          {
            type: 'liste',
            items: [
              `**Minimum**: ${enM(REWARDS.retraitMin)}, or ${enM(REWARDS.retraitMinVirement)} by direct bank transfer.`,
              '**Fees**: $50 by direct bank transfer ($100 above $3,000). Other methods are free.',
              '**Limits**: the terms allow daily, weekly and monthly limits by country and method, without giving figures (section 14.2.2).',
              '**Special case**: if your winnings are much higher than your deposits across the group’s casinos, withdrawals can be capped at $4,000 per week (section 14.2.10).'
            ]
          }
        ]
      },
      {
        id: 'comparison',
        titre: 'Compared with our casinos’ tested withdrawals',
        blocs: [
          {
            type: 'tableau',
            legende: `Our casinos: times measured during our real-money withdrawals. ${m.nom}: not tested yet.`,
            entetes: ['Casino', 'Crypto withdrawal measured', 'Card withdrawal measured'],
            lignes: [
              [`**${m.nom}**`, 'Crypto not listed', 'Not tested yet (3 business days announced after pending)'],
              ...RAPIDES.map((x) => [`[${x.nom}](${cheminEn(x)})`, heuresEn(dernier(x, 'crypto')?.delaiHeures), heuresEn(dernier(x, 'carte')?.delaiHeures)])
            ]
          },
          { type: 'p', texte: 'All our dated results: [tested withdrawal times](/en-ca/casino-withdrawal-times/).' },
          { type: 'offres', casinos: TOP3, titre: 'Faster withdrawals' }
        ]
      }
    ],
    faq: [
      {
        q: `Why is my ${m.nom} withdrawal pending?`,
        r: 'All withdrawals stay pending for 48 hours before being processed on the next business day. A first withdrawal with a new method can take up to 5 to 7 business days of checks.'
      },
      {
        q: `Can you withdraw by Interac at ${m.nom}?`,
        r: 'Interac is not on the FAQ’s list of withdrawal methods. In Canada, a CAD EFT or eCheck transfer takes 2 to 3 business days.'
      },
      {
        q: `What is the minimum withdrawal at ${m.nom}?`,
        r: `${enM(REWARDS.retraitMin)} for most methods, ${enM(REWARDS.retraitMinVirement)} by direct bank transfer.`
      }
    ],
    connexes: [c.avis, c.fiable, '/en-ca/fast-withdrawal-casinos/', '/en-ca/casino-withdrawal-times/']
  };

  const fiable: PageGuide = {
    ...base,
    chemin: c.fiable,
    nomFil: 'Is it legit?',
    parent,
    ...t.fiable,
    resume: `Licence, operator, certification and clauses of ${m.nom}.`,
    sections: [
      {
        id: 'licence',
        titre: 'Licence and certification',
        blocs: [
          {
            type: 'liste',
            items: [
              `**Licence**: Kahnawake Gaming Commission, licence no. ${REWARDS.licence} (section 2.1 of the terms). The site links to the certificate on the commission’s website.`,
              '**Certification**: the site links to an eCOGRA certificate; eCOGRA audits game fairness.',
              '**Age**: you must be 19, or the age of majority in your province if higher.'
            ]
          }
        ]
      },
      {
        id: 'operator',
        titre: `Who runs ${m.nom}`,
        blocs: [
          {
            type: 'p',
            texte: `The footer says the site is owned and operated by ${REWARDS.exploitantEn}. The terms describe a brand managed by ${REWARDS.gestionnaire}. The site does not explain how the two companies are related. The same names appear at the other casinos of the group we have reviewed: ${autresEn(m)}.`
          }
        ]
      },
      {
        id: 'clauses',
        titre: 'The clauses to know',
        blocs: [
          {
            type: 'liste',
            items: [
              `**${REWARDS.mise12}x wagering** on the first two deposit bonuses (section 12.4).`,
              '**No large bets**: a single bet of 25% of the bonus or more before wagering is complete can void winnings (section 13.16.1).',
              '**Reversible withdrawals** during the 48-hour pending period.',
              '**Possible cap** of $4,000 per week if your winnings are much higher than your deposits across the group’s casinos (section 14.2.10).'
            ]
          }
        ]
      },
      {
        id: 'reassuring',
        titre: 'The reassuring points',
        blocs: [
          {
            type: 'liste',
            items: [
              'The licence number and operator are displayed.',
              'A responsible gambling page and an eCOGRA certificate are linked from every page.',
              'Withdrawal times, minimums and fees are published in the FAQ.'
            ]
          },
          { type: 'p', texte: 'For the legal picture in Quebec, see our page on [online casinos in Quebec](/en-ca/online-casino-quebec/).' },
          { type: 'offres', casinos: TOP3, titre: 'Our top-rated casinos' }
        ]
      }
    ],
    faq: [
      {
        q: `Is ${m.nom} a scam?`,
        r: `Nothing we read suggests so: the licence and operator are published, and the site is eCOGRA certified. The real catch is elsewhere: the ${REWARDS.mise12}x bonus wagering.`
      },
      {
        q: `What licence does ${m.nom} hold?`,
        r: `A Kahnawake Gaming Commission licence, no. ${REWARDS.licence}, according to section 2.1 of its terms.`
      },
      {
        q: `Who owns ${m.nom}?`,
        r: `${REWARDS.exploitantEn}, according to the footer. The terms also name ${REWARDS.gestionnaire} as the brand manager.`
      }
    ],
    connexes: [c.avis, c.retrait, '/en-ca/online-casino-quebec/', '/en-ca/fast-withdrawal-casinos/']
  };

  return [avis, bonus, sansDepot, retrait, fiable];
}

/* ---------- Exports ---------- */

export const MARQUES_FR: PageGuide[] = MARQUES.flatMap(pagesFr);
export const MARQUES_EN: PageGuide[] = MARQUES.flatMap(pagesEn);

// Garde-fou anglais (le français passe par le registre des guides).
for (const p of MARQUES_EN) {
  if (p.titre.length > 62) throw new Error(`Title too long (${p.titre.length}): ${p.chemin}`);
  if (p.description.length > 158 || p.description.length < 70) throw new Error(`Description out of range (${p.description.length}): ${p.chemin}`);
}

export function pageMarqueEn(chemin: string): PageGuide {
  const p = MARQUES_EN.find((x) => x.chemin === chemin);
  if (!p) throw new Error(`Page de marque anglaise introuvable : ${chemin}`);
  return p;
}

/** Pages liées d'une page de marque anglaise (autres pages de marque ou guides anglais). */
export function connexesMarqueEn(p: PageGuide): PageGuide[] {
  return (p.connexes || []).map((c) => MARQUES_EN.find((x) => x.chemin === c) || PAGES_EN.find((x) => x.chemin === c)).filter(Boolean) as PageGuide[];
}

/** Segments des sous-pages d'une marque (ex. « bonus », « retrait ») sous une adresse de base. */
export function sousPagesMarque(base: string): string[] {
  return [...MARQUES_FR, ...MARQUES_EN]
    .map((p) => p.chemin)
    .filter((c) => c.startsWith(base) && c !== base)
    .map((c) => c.slice(base.length).replace(/\/$/, ''));
}

/** Liens de pied de page vers les avis de marque. */
export const LIENS_MARQUES = MARQUES.map((m) => ({ nom: m.nom, fr: chemins(m).fr.avis, en: chemins(m).en.avis }));

/** Adresses de base des marques (pour les paires français-anglais). */
export const SLUGS_MARQUES = MARQUES.map((m) => m.slug);
