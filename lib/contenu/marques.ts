import type { PageGuide, SectionGuide } from './pages/types';
import { CASINOS, cheminCasino, depotMinTexte, exempleMise, miseTexte, type Casino } from '@/lib/casinos';
import { cheminEn, depotMinEn, en, miseEn } from '@/lib/en/casinos';
import { classementRetraits, dernier } from '@/lib/tests';
import { dateLongue, montant } from '@/lib/site';
import { dateEn } from '@/lib/en/site';
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

type Texte = { titre: string; description: string; h1: string; chapeau: string };
/** Retrait et fiabilité : anciennes pages, fusionnées dans l'avis (redirections 301 dans next.config.mjs). */
type Textes = Record<'avis' | 'bonus' | 'sansDepot', Texte> & Partial<Record<'retrait' | 'fiable', Texte>>;

type MarqueRewards = {
  nom: string;
  slug: string;
  verifie: string;
  /** Dépôt minimum de l'offre de bienvenue, et nombre de chances sur la Mega Money Wheel (absents si l'offre n'a pas de chances). */
  depot1?: number;
  chances?: number;
  /** Tours gratuits sur 7 jours selon le montant du 1er dépôt (Quatro), à la place des chances. */
  tours?: { paliers: { depot: number; jusqua?: number; bonus: number; parJour: number }[]; jeux: string[] };
  /** Numéros d'articles qui diffèrent du gabarit commun (Quatro : section 12 décalée). */
  articles?: { suivants: string; jeux: [string, string]; argent: string };
  /** Questions propres à la marque, ajoutées à la FAQ de l'avis. */
  faqAvisFr?: { q: string; r: string }[];
  faqAvisEn?: { q: string; r: string }[];
  /** Bonus en argent des dépôts (1er ou 2e, puis suivants), tels qu'affichés sur la page bonus officielle. */
  paliers: { rang: number; pourcentage: number; plafond: number }[];
  /** Faux si le casino ne publie pas de FAQ (délais par moyen, minimums et Interac non publiés). */
  faq?: boolean;
  /** Article des conditions qui fixe le délai de 7 jours pour réclamer l'offre. */
  articleReclamer?: string;
  /** Total annoncé par le site officiel, s'il en annonce un. */
  totalAnnonce?: number;
  /** Faux si le pied de page du site ne nomme pas d'exploitant (seules les conditions nomment le gestionnaire). */
  piedExploitant?: boolean;
  /** Faux si la FAQ publie les délais de retrait mais ne cite pas Interac parmi les dépôts. */
  faqInterac?: boolean;
  noteOffreFr?: string;
  noteOffreEn?: string;
  fideliteFr: string;
  fideliteEn: string;
  /** Ce que la page d'accueil officielle annonce et qui distingue la marque du reste du groupe (relevé du 16 novembre 2026). */
  distinctionsFr: string[];
  distinctionsEn: string[];
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
  distinctionsFr: [
    'Le site annonce « des centaines » de jeux, sans nombre précis.',
    'Une section de jeux avec de vrais croupiers en direct, dont la roulette et le baccara.',
    'Site disponible en français.',
    'Service client par clavardage et par courriel, annoncé jour et nuit.',
    'Programme de fidélité Casino Rewards à plusieurs niveaux, auquel tous les joueurs sont inscrits automatiquement.'
  ],
  distinctionsEn: [
    'The site advertises “hundreds” of games, without an exact count.',
    'A real-dealer live section, including roulette and baccarat.',
    'Site available in French.',
    'Support by live chat and email, advertised day and night.',
    'Multi-tier Casino Rewards loyalty program, with every player enrolled automatically.'
  ],
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
      titre: 'Yukon Gold Casino Rewards en français : avis 2026, 150 chances',
      description:
        'Avis Yukon Gold Casino au Canada : 150 chances pour 10 $, mise de 200 fois, retraits après 48 h d’attente, licence de Kahnawake. Conditions officielles lues.',
      h1: 'Avis Yukon Gold Casino (2026) : ce que disent vraiment les conditions',
      chapeau:
        'Yukon Gold est l’un des casinos en ligne les plus cherchés au Canada. Son offre attire : 150 chances de gagner un million pour 10 $. Nous avons lu ses conditions officielles ligne par ligne. Le point qui change tout : les bonus des deux premiers dépôts doivent être misés 200 fois.'
    },
    bonus: {
      titre: 'Bonus Yukon Gold Casino : 150 chances pour 10 $ (2026)',
      description:
        'Bonus Yukon Gold : 150 chances pour 10 $, puis 100 % jusqu’à 150 $. Mise de 200 fois, jeux à 2 %, délais : exemple chiffré et comparaison avec nos casinos.',
      h1: 'Bonus Yukon Gold : 150 chances pour 10 $, et le calcul à faire avant',
      chapeau:
        'Le bonus de Yukon Gold coûte peu à activer et rapporte des tours sur une roue à un million. Mais les gains doivent être misés 200 fois. Voici les paliers, les règles et le calcul, d’après les conditions officielles.'
    },
    sansDepot: {
      titre: 'Yukon Gold Casino bonus sans dépôt : existe-t-il en 2026 ?',
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
      titre: 'Yukon Gold Casino Rewards Canada Review 2026: 150 Chances',
      description:
        'Yukon Gold Casino review for Canada: 150 chances for $10, 200x wagering, 48-hour pending withdrawals, Kahnawake licence. Official terms read line by line.',
      h1: 'Yukon Gold Casino Review (2026): What the Terms Really Say',
      chapeau:
        'Yukon Gold is one of the most searched online casinos in Canada. Its offer is tempting: 150 chances to win a million for $10. We read its official terms line by line. The detail that changes everything: the first two deposit bonuses must be wagered 200 times.'
    },
    bonus: {
      titre: 'Yukon Gold Casino 150 Free Spins for $10: What You Really Get',
      description:
        'Yukon Gold “150 free spins”: 150 chances on the Mega Money Wheel for $10, then 100% up to $150. 200x wagering, 2% game weighting: a worked example.',
      h1: 'Yukon Gold Bonus: 150 Chances for $10, and the Math to Do First',
      chapeau:
        'The Yukon Gold bonus is cheap to activate and pays out spins on a million-dollar wheel. But winnings must be wagered 200 times. Here are the tiers, the rules and the math, from the official terms.'
    },
    sansDepot: {
      titre: 'Yukon Gold Casino No Deposit Bonus: Is There One in 2026?',
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
  distinctionsFr: [
    'Plus de 1 000 jeux annoncés.',
    'Site disponible en français, avec une équipe de soutien multilingue.',
    'Service client annoncé 24 h sur 24 ; la page d’accueil ne précise pas les canaux.',
    'L’entrée la moins chère du groupe : 80 chances pour 1 $.',
    'Le site précise que ses machines à sous progressives ne sont pas offertes dans toutes les régions.'
  ],
  distinctionsEn: [
    'More than 1,000 games advertised.',
    'Site available in French, with a multilingual support team.',
    'Support advertised 24/7; the home page does not list the channels.',
    'The cheapest entry in the group: 80 chances for $1.',
    'The site notes that its progressive slots are not available in every region.'
  ],
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
      titre: 'Zodiac Casino Rewards en français : avis 2026, 80 chances',
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
      titre: 'Zodiac Casino Rewards Canada Review 2026: 80 Chances for $1',
      description:
        'Zodiac Casino review for Canada: 80 chances for $1, up to $480 in bonuses, 200x wagering, 48-hour pending withdrawals. Official terms read line by line.',
      h1: 'Zodiac Casino Review (2026): 80 Chances for $1, and the Rest of the Terms',
      chapeau:
        'Zodiac is one of the most searched online casinos in Canada, mostly for its offer: 80 chances to win a million for $1. We read its official terms. The key detail: the first two deposit bonuses must be wagered 200 times.'
    },
    bonus: {
      titre: 'Zodiac Casino 80 Free Spins for $1: What You Really Get',
      description:
        'Zodiac Casino “80 free spins”: 80 chances on the Mega Money Wheel for a $1 deposit, then up to $480. 200x then 30x wagering: a worked example.',
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

/* ---------- Luxury Casino : relevé du 10 novembre 2026 ---------- */

const LUXURY: MarqueRewards = {
  nom: 'Luxury Casino',
  slug: 'luxury-casino',
  verifie: '2026-11-10',
  paliers: [
    { rang: 1, pourcentage: 100, plafond: 150 },
    { rang: 2, pourcentage: 50, plafond: 200 },
    { rang: 3, pourcentage: 25, plafond: 300 },
    { rang: 4, pourcentage: 50, plafond: 200 },
    { rang: 5, pourcentage: 100, plafond: 150 }
  ],
  totalAnnonce: 1000,
  articleReclamer: '11.5',
  noteOffreFr:
    'La page bonus est incohérente : son titre annonce « 150 $ gratuits », alors que les 5 paliers qu’elle détaille totalisent 1 000 $, le montant repris dans sa description. Le dépôt minimum n’y est pas indiqué.',
  noteOffreEn:
    'The bonus page is inconsistent: its headline says “$150 free”, while the 5 tiers it lists add up to $1,000, the amount used in its description. It does not state the minimum deposit.',
  fideliteFr: 'Groupe Casino Rewards : le site renvoie vers le programme Casino Rewards',
  fideliteEn: 'Casino Rewards group: the site links to the Casino Rewards program',
  distinctionsFr: [
    'Plus de 1 000 jeux annoncés, avec de nouveaux jeux chaque semaine.',
    'Une section casino en direct : Crazy Time, roulette, blackjack et baccara.',
    'Site disponible en français.',
    'Un dépôt minimum de 10 $, selon la description du site.',
    'Inscription automatique au programme de fidélité VIP.'
  ],
  distinctionsEn: [
    'More than 1,000 games advertised, with new games every week.',
    'A live casino section: Crazy Time, roulette, blackjack and baccarat.',
    'Site available in French.',
    'A $10 minimum deposit, according to the site description.',
    'Automatic enrolment in the VIP loyalty program.'
  ],
  sourcesFr: [
    { titre: 'Luxury Casino : page d’accueil officielle (offre, licence, certification eCOGRA, exploitant)', url: 'https://luxury.casino/en/' },
    { titre: 'Luxury Casino : page bonus officielle (5 bonus de dépôt)', url: 'https://luxury.casino/fr/bonus/' },
    { titre: 'Luxury Casino : conditions générales (mise, contribution des jeux, retraits, licence)', url: 'https://luxury.casino/en/terms/' },
    { titre: 'Luxury Casino : FAQ (moyens de paiement, délais et frais de retrait, âge minimum)', url: 'https://luxury.casino/en/faq/' }
  ],
  sourcesEn: [
    { titre: 'Luxury Casino: official home page (offer, licence, eCOGRA certification, operator)', url: 'https://luxury.casino/en/' },
    { titre: 'Luxury Casino: official bonus page (5 deposit bonuses)', url: 'https://luxury.casino/fr/bonus/' },
    { titre: 'Luxury Casino: terms and conditions (wagering, game weighting, withdrawals, licence)', url: 'https://luxury.casino/en/terms/' },
    { titre: 'Luxury Casino: FAQ (payment methods, withdrawal times and fees, minimum age)', url: 'https://luxury.casino/en/faq/' }
  ],
  faqAvisFr: [
    {
      q: 'Qu’est devenu Colosseum Casino ?',
      r: 'Le 17 novembre 2026, l’adresse colosseumcasino.com redirigeait vers la page de Luxury Casino sur le site de Casino Rewards. Nous n’avons pas trouvé d’annonce officielle qui explique ce changement. Si vous aviez un compte chez Colosseum Casino, contactez le service client de Casino Rewards avant de déposer ailleurs.'
    }
  ],
  faqAvisEn: [
    {
      q: 'What happened to Colosseum Casino?',
      r: 'On November 17, 2026, the colosseumcasino.com address redirected to the Luxury Casino page on the Casino Rewards site. We found no official announcement explaining the change. If you had a Colosseum Casino account, contact Casino Rewards support before depositing elsewhere.'
    }
  ],
  fr: {
    avis: {
      titre: 'Luxury Casino Rewards en français : avis 2026, jusqu’à 1 000 $',
      description:
        'Avis Luxury Casino au Canada : 5 bonus de dépôt jusqu’à 1 000 $, mise de 200 fois sur les deux premiers, retraits après 48 h d’attente. Conditions lues.',
      h1: 'Avis Luxury Casino (2026) : 1 000 $ de bonus, et ce qu’il faut miser',
      chapeau:
        'Luxury Casino est l’un des casinos en ligne les plus cherchés au Canada. Son offre s’étale sur 5 dépôts, jusqu’à 1 000 $. Nous avons lu ses conditions officielles : les bonus des deux premiers dépôts doivent être misés 200 fois.'
    },
    bonus: {
      titre: 'Bonus Luxury Casino : 1 000 $ sur 5 dépôts, la mise à prévoir',
      description:
        'Bonus Luxury Casino : 100 % jusqu’à 150 $, puis 4 autres bonus, jusqu’à 1 000 $. Mise de 200 fois puis 30 fois, jeux à 2 % : exemple chiffré et comparaison.',
      h1: 'Bonus Luxury Casino : jusqu’à 1 000 $ sur 5 dépôts, et le calcul à faire',
      chapeau:
        'Luxury Casino répartit son bonus de bienvenue sur vos 5 premiers dépôts. Les deux premiers doivent être misés 200 fois, les suivants 30 fois. Voici les paliers, les règles et le calcul, d’après les conditions officielles.'
    },
    sansDepot: {
      titre: 'Luxury Casino bonus sans dépôt : existe-t-il en 2026 ?',
      description:
        'Luxury Casino a-t-il un bonus sans dépôt ? Non : son offre commence par 100 % jusqu’à 150 $ au 1er dépôt, à miser 200 fois. Explications et alternatives.',
      h1: 'Luxury Casino bonus sans dépôt : la réponse honnête',
      chapeau:
        'Beaucoup de joueurs cherchent un bonus sans dépôt chez Luxury Casino. Sur ses pages officielles relues le 10 novembre 2026, il n’y en a pas. Voici ce qui s’en approche, et ce qu’il faut savoir avant de déposer.'
    },
    retrait: {
      titre: 'Retrait Luxury Casino : délais, frais et minimum de 50 $',
      description:
        'Retrait chez Luxury : 48 h d’attente, puis 1 à 10 jours ouvrables selon le moyen, minimum de 50 $, frais du virement direct. Comparé aux retraits testés.',
      h1: 'Retrait chez Luxury Casino : délais, frais et minimums',
      chapeau:
        'Chez Luxury Casino, un retrait passe d’abord 48 h en attente. Voici les délais annoncés par moyen de paiement, les minimums, les frais et les vérifications, d’après la FAQ et les conditions officielles.'
    },
    fiable: {
      titre: 'Luxury Casino est-il fiable ? Licence et exploitant',
      description:
        'Luxury Casino est-il fiable ? Licence de Kahnawake n° 00972, certification eCOGRA, exploitant à Malte et clauses à connaître, selon ses conditions.',
      h1: 'Luxury Casino est-il fiable ? Licence, exploitant et clauses',
      chapeau:
        'Fiable ne veut pas dire avantageux. Luxury Casino publie sa licence et sa certification, mais certaines clauses méritent d’être connues avant de déposer. Voici ce que nous avons relevé dans ses pages officielles.'
    }
  },
  en: {
    avis: {
      titre: 'Luxury Casino Rewards Canada Review 2026: Up to $1,000',
      description:
        'Luxury Casino review for Canada: 5 deposit bonuses up to $1,000, 200x wagering on the first two, 48-hour pending withdrawals. Official terms checked.',
      h1: 'Luxury Casino Review (2026): $1,000 in Bonuses, and What You Must Wager',
      chapeau:
        'Luxury Casino is one of the most searched online casinos in Canada. Its offer is spread over 5 deposits, up to $1,000. We read its official terms: the first two deposit bonuses must be wagered 200 times.'
    },
    bonus: {
      titre: 'Luxury Casino Bonus: $1,000 Over 5 Deposits and the 200x Catch',
      description:
        'Luxury Casino bonus: 100% up to $150, then 4 more bonuses, up to $1,000. 200x then 30x wagering, 2% game weighting: a worked example and a comparison.',
      h1: 'Luxury Casino Bonus: Up to $1,000 Over 5 Deposits, and the Math to Do',
      chapeau:
        'Luxury Casino spreads its welcome bonus over your first 5 deposits. The first two must be wagered 200 times, the next ones 30 times. Here are the tiers, the rules and the math, from the official terms.'
    },
    sansDepot: {
      titre: 'Luxury Casino No Deposit Bonus: Is There One in 2026?',
      description:
        'Does Luxury Casino offer a no deposit bonus? Not according to its official pages: its offer starts with 100% up to $150 on the first deposit. Alternatives.',
      h1: 'Luxury Casino No Deposit Bonus: the Honest Answer',
      chapeau:
        'Many players look for a Luxury Casino no deposit bonus. On its official pages, read on November 10, 2026, there is none. Here is the closest offer, and what to know before depositing.'
    },
    retrait: {
      titre: 'Luxury Casino Withdrawal: Times, Fees and $50 Minimum',
      description:
        'Luxury Casino withdrawals: 48 hours pending, then 1 to 10 business days by method, $50 minimum, direct bank transfer fees. Compared with our tested payouts.',
      h1: 'Luxury Casino Withdrawals: Times, Fees and Minimums',
      chapeau:
        'At Luxury Casino, a withdrawal first stays pending for 48 hours. Here are the announced times by payment method, the minimums, the fees and the checks, from the official FAQ and terms.'
    },
    fiable: {
      titre: 'Is Luxury Casino Legit? Licence and Operator Checked',
      description:
        'Is Luxury Casino legit? Kahnawake licence no. 00972, eCOGRA certification, Malta operator and the clauses to know: our reading of the official terms.',
      h1: 'Is Luxury Casino Legit? Licence, Operator and Clauses',
      chapeau:
        'Legit does not mean good value. Luxury Casino publishes its licence and certification, but some clauses are worth knowing before you deposit. Here is what we found on its official pages.'
    }
  }
};

/* ---------- Captain Cooks : relevé du 10 novembre 2026 (pas de FAQ publique) ---------- */

const CAPTAIN: MarqueRewards = {
  nom: 'Captain Cooks',
  slug: 'captain-cooks-casino',
  verifie: '2026-11-10',
  depot1: 5,
  chances: 100,
  paliers: [
    { rang: 2, pourcentage: 100, plafond: 100 },
    { rang: 3, pourcentage: 50, plafond: 150 },
    { rang: 4, pourcentage: 25, plafond: 125 },
    { rang: 5, pourcentage: 100, plafond: 100 }
  ],
  faq: false,
  fideliteFr: 'Groupe Casino Rewards : ses conditions parlent des « casinos partenaires Casino Rewards »',
  fideliteEn: 'Casino Rewards group: its terms refer to “Casino Rewards partner casinos”',
  distinctionsFr: [
    'Un casino en direct avec de vrais croupiers, ouvert 24 h sur 24 : blackjack, roulette, baccara et sic bo.',
    'Le casino affirme proposer chaque jeu dans sa version au taux de retour le plus élevé disponible, « généralement de 96 % à 99,9 % ».',
    'Programme Casino Rewards à six niveaux ; les joueurs VIP d’autres casinos peuvent demander à conserver leur statut.',
    'Clavardage 24 h sur 24, avec une équipe basée au Canada, en Australie, à Malte et au Royaume-Uni.',
    'Site disponible en français.'
  ],
  distinctionsEn: [
    'A real-dealer live casino open around the clock: blackjack, roulette, baccarat and sic bo.',
    'The casino says it offers each game in its highest available return-to-player version, “typically ranging from 96% to 99.9%”.',
    'Six-tier Casino Rewards program; VIP players from other casinos can ask for a status match.',
    '24/7 live chat, with staff based in Canada, Australia, Malta and the UK.',
    'Site available in French.'
  ],
  sourcesFr: [
    { titre: 'Captain Cooks : page d’accueil officielle (offre, certifications, exploitant)', url: 'https://captaincooks.casino/en/' },
    { titre: 'Captain Cooks : page bonus officielle (100 chances pour 5 $, bonus des dépôts 2 à 5)', url: 'https://captaincooks.casino/fr/bonus/' },
    { titre: 'Captain Cooks : conditions générales (mise, contribution des jeux, retraits, licence)', url: 'https://captaincooks.casino/en/terms/' }
  ],
  sourcesEn: [
    { titre: 'Captain Cooks: official home page (offer, certificates, operator)', url: 'https://captaincooks.casino/en/' },
    { titre: 'Captain Cooks: official bonus page (100 chances for $5, deposit bonuses 2 to 5)', url: 'https://captaincooks.casino/fr/bonus/' },
    { titre: 'Captain Cooks: terms and conditions (wagering, game weighting, withdrawals, licence)', url: 'https://captaincooks.casino/en/terms/' }
  ],
  fr: {
    avis: {
      titre: 'Captain Cooks Casino Rewards en français : avis 2026',
      description:
        'Avis Captain Cooks au Canada : 100 chances pour 5 $, jusqu’à 475 $ de bonus, mise de 200 fois, retraits après 48 h d’attente. Conditions officielles lues.',
      h1: 'Avis Captain Cooks Casino (2026) : 100 chances pour 5 $, et le reste des conditions',
      chapeau:
        'Captain Cooks est l’un des casinos en ligne les plus cherchés au Canada. Son offre : 100 chances de gagner un million pour 5 $. Nous avons lu ses conditions officielles. Le point à connaître : les bonus des deux premiers dépôts doivent être misés 200 fois.'
    },
    bonus: {
      titre: 'Bonus Captain Cooks Casino : 100 chances pour 5 $ (2026)',
      description:
        'Bonus Captain Cooks : 100 chances pour 5 $, puis jusqu’à 475 $ sur 4 dépôts. Mise de 200 fois puis 30 fois, jeux à 2 % : exemple chiffré et comparaison.',
      h1: 'Bonus Captain Cooks : 100 chances pour 5 $, puis 475 $, et le calcul à faire',
      chapeau:
        'Pour 5 $, Captain Cooks donne 100 tours sur une roue à un million, puis des bonus sur les 4 dépôts suivants. Mais les gains des deux premiers dépôts doivent être misés 200 fois. Voici les paliers, les règles et le calcul.'
    },
    sansDepot: {
      titre: 'Captain Cooks Casino bonus sans dépôt : existe-t-il en 2026 ?',
      description:
        'Captain Cooks a-t-il un bonus sans dépôt ? Non, d’après ses pages officielles. Son offre la plus proche : 100 chances pour 5 $. Ce qu’elle coûte vraiment.',
      h1: 'Captain Cooks bonus sans dépôt : la réponse honnête',
      chapeau:
        'Avec 100 chances pour 5 $, l’offre de Captain Cooks ressemble à un bonus sans dépôt. Ce n’en est pas un : il faut déposer, et les gains doivent être misés 200 fois. Voici ce qu’il faut savoir.'
    },
    retrait: {
      titre: 'Retrait Captain Cooks : délais, frais et attente de 48 h',
      description:
        'Retrait chez Captain Cooks : 48 h d’attente, frais du virement direct, délais par moyen non publiés. Ses conditions, comparées à nos retraits testés.',
      h1: 'Retrait chez Captain Cooks : ce que disent les conditions',
      chapeau:
        'Captain Cooks ne publie pas de FAQ : ses délais de retrait par moyen de paiement et ses minimums ne sont pas affichés. Voici ce que disent ses conditions générales, et ce qu’il faut vérifier avant de déposer.'
    },
    fiable: {
      titre: 'Captain Cooks Casino est-il fiable ? Licence et exploitant',
      description:
        'Captain Cooks est-il fiable ? Licence de Kahnawake n° 00972, certification eCOGRA, exploitant à Malte, pas de FAQ publique : notre lecture de ses conditions.',
      h1: 'Captain Cooks Casino est-il fiable ? Licence, exploitant et clauses',
      chapeau:
        'Fiable ne veut pas dire avantageux. Captain Cooks publie sa licence et sa certification, mais pas de FAQ, et certaines clauses méritent d’être connues avant de déposer. Voici ce que nous avons relevé.'
    }
  },
  en: {
    avis: {
      titre: 'Captain Cooks Casino Rewards Canada Review 2026: 100 Chances',
      description:
        'Captain Cooks Casino review for Canada: 100 chances for $5, up to $475 in bonuses, 200x wagering, 48-hour pending withdrawals. Official terms checked.',
      h1: 'Captain Cooks Casino Review (2026): 100 Chances for $5, and the Rest of the Terms',
      chapeau:
        'Captain Cooks is one of the most searched online casinos in Canada. Its offer: 100 chances to win a million for $5. We read its official terms. The key detail: the first two deposit bonuses must be wagered 200 times.'
    },
    bonus: {
      titre: 'Captain Cooks Casino 100 Free Spins for $5: What You Get',
      description:
        'Captain Cooks “100 free spins”: 100 chances on the Mega Money Wheel for $5, then up to $475 over 4 deposits. 200x then 30x wagering: a worked example.',
      h1: 'Captain Cooks Bonus: 100 Chances for $5, Then $475, and the Math to Do',
      chapeau:
        'For $5, Captain Cooks gives 100 spins on a million-dollar wheel, then bonuses on the next 4 deposits. But winnings from the first two deposits must be wagered 200 times. Here are the tiers, the rules and the math.'
    },
    sansDepot: {
      titre: 'Captain Cooks No Deposit Bonus: Is There One in 2026?',
      description:
        'Does Captain Cooks offer a no deposit bonus? Not according to its official pages. The closest offer is 100 chances for $5: what it really costs.',
      h1: 'Captain Cooks No Deposit Bonus: the Honest Answer',
      chapeau:
        'At 100 chances for $5, the Captain Cooks offer looks like a no deposit bonus. It is not one: you must deposit, and winnings must be wagered 200 times. Here is what to know.'
    },
    retrait: {
      titre: 'Captain Cooks Withdrawal: 48-Hour Pending, Fees and Limits',
      description:
        'Captain Cooks withdrawals: 48 hours pending, direct bank transfer fees, times by method not published. What its terms say, compared with our tested payouts.',
      h1: 'Captain Cooks Withdrawals: What the Terms Say',
      chapeau:
        'Captain Cooks does not publish an FAQ: its withdrawal times by payment method and its minimums are not displayed. Here is what its terms say, and what to check before depositing.'
    },
    fiable: {
      titre: 'Is Captain Cooks Casino Legit? Licence and Operator Checked',
      description:
        'Is Captain Cooks legit? Kahnawake licence no. 00972, eCOGRA certification, Malta operator, no public FAQ: our reading of its official terms.',
      h1: 'Is Captain Cooks Casino Legit? Licence, Operator and Clauses',
      chapeau:
        'Legit does not mean good value. Captain Cooks publishes its licence and certification, but no FAQ, and some clauses are worth knowing before you deposit. Here is what we found.'
    }
  }
};

/* ---------- Grand Mondial : relevé du 10 novembre 2026 ---------- */

const GRAND: MarqueRewards = {
  nom: 'Grand Mondial',
  slug: 'grand-mondial-casino',
  verifie: '2026-11-10',
  depot1: 10,
  chances: 150,
  paliers: [{ rang: 2, pourcentage: 100, plafond: 250 }],
  noteOffreFr: 'La page bonus présente le bonus du 2e dépôt comme valable « pour une durée limitée » : vérifiez-le avant de déposer.',
  noteOffreEn: 'The bonus page presents the 2nd deposit bonus as available “for a limited time”: check it before depositing.',
  fideliteFr: 'Groupe Casino Rewards : le site renvoie vers le programme Casino Rewards',
  fideliteEn: 'Casino Rewards group: the site links to the Casino Rewards program',
  distinctionsFr: [
    'Plus de 1 000 jeux annoncés.',
    'Site disponible en français.',
    'Service client par téléphone, courriel et clavardage, annoncé 24 h sur 24, 7 jours sur 7 : le seul du groupe à afficher le téléphone sur sa page d’accueil.',
    'La page d’accueil ne mentionne pas de casino en direct.'
  ],
  distinctionsEn: [
    'More than 1,000 games advertised.',
    'Site available in French.',
    'Support by phone, email and live chat, advertised 24/7: the only casino in the group to show phone support on its home page.',
    'The home page does not mention a live casino.'
  ],
  sourcesFr: [
    { titre: 'Grand Mondial : page d’accueil officielle (offre, licence, certification eCOGRA, exploitant)', url: 'https://grandmondial.casino/en/' },
    { titre: 'Grand Mondial : page bonus officielle (150 chances pour 10 $, 100 % jusqu’à 250 $)', url: 'https://grandmondial.casino/fr/bonus/' },
    { titre: 'Grand Mondial : conditions générales (mise, contribution des jeux, retraits, licence)', url: 'https://grandmondial.casino/en/terms/' },
    { titre: 'Grand Mondial : FAQ (moyens de paiement, délais et frais de retrait, âge minimum)', url: 'https://grandmondial.casino/en/faq/' }
  ],
  sourcesEn: [
    { titre: 'Grand Mondial: official home page (offer, licence, eCOGRA certification, operator)', url: 'https://grandmondial.casino/en/' },
    { titre: 'Grand Mondial: official bonus page (150 chances for $10, 100% up to $250)', url: 'https://grandmondial.casino/fr/bonus/' },
    { titre: 'Grand Mondial: terms and conditions (wagering, game weighting, withdrawals, licence)', url: 'https://grandmondial.casino/en/terms/' },
    { titre: 'Grand Mondial: FAQ (payment methods, withdrawal times and fees, minimum age)', url: 'https://grandmondial.casino/en/faq/' }
  ],
  fr: {
    avis: {
      titre: 'Grand Mondial Casino Rewards en français : avis 2026',
      description:
        'Avis Grand Mondial au Canada : 150 chances pour 10 $, 100 % jusqu’à 250 $, mise de 200 fois, retraits après 48 h d’attente. Conditions officielles lues.',
      h1: 'Avis Grand Mondial Casino (2026) : ce que disent vraiment les conditions',
      chapeau:
        'Grand Mondial est l’un des casinos en ligne les plus cherchés au Canada. Son offre : 150 chances de gagner un million pour 10 $, puis jusqu’à 250 $ au 2e dépôt. Nous avons lu ses conditions officielles : ces deux bonus doivent être misés 200 fois.'
    },
    bonus: {
      titre: 'Bonus Casino Grand Mondial : 150 chances pour 10 $ (2026)',
      description:
        'Bonus Grand Mondial : 150 chances pour 10 $, puis 100 % jusqu’à 250 $. Mise de 200 fois, jeux à 2 %, délais : exemple chiffré et comparaison avec nos casinos.',
      h1: 'Bonus Grand Mondial : 150 chances pour 10 $, et le calcul à faire avant',
      chapeau:
        'Le bonus de Grand Mondial coûte peu à activer et rapporte des tours sur une roue à un million, puis un bonus au 2e dépôt. Mais les gains doivent être misés 200 fois. Voici les paliers, les règles et le calcul.'
    },
    sansDepot: {
      titre: 'Casino Grand Mondial bonus sans dépôt : existe-t-il en 2026 ?',
      description:
        'Grand Mondial a-t-il un bonus sans dépôt ? Non, d’après ses pages officielles. Son offre la plus proche : 150 chances pour 10 $. Explications et alternatives.',
      h1: 'Grand Mondial bonus sans dépôt : la réponse honnête',
      chapeau:
        'Beaucoup de joueurs cherchent un bonus sans dépôt chez Grand Mondial. Sur ses pages officielles relues le 10 novembre 2026, il n’y en a pas. Voici ce qui s’en approche, et ce qu’il faut savoir avant de déposer 10 $.'
    },
    retrait: {
      titre: 'Retrait Grand Mondial : délais, frais et minimum de 50 $',
      description:
        'Retrait chez Grand Mondial : 48 h d’attente, puis 1 à 10 jours ouvrables selon le moyen, minimum de 50 $, frais du virement direct. Comparé à nos tests.',
      h1: 'Retrait chez Grand Mondial : délais, frais et minimums',
      chapeau:
        'Chez Grand Mondial, un retrait passe d’abord 48 h en attente. Voici les délais annoncés par moyen de paiement, les minimums, les frais et les vérifications, d’après la FAQ et les conditions officielles.'
    },
    fiable: {
      titre: 'Grand Mondial Casino est-il fiable ? Licence et exploitant',
      description:
        'Grand Mondial est-il fiable ? Licence de Kahnawake n° 00972, certification eCOGRA, exploitant à Malte et clauses à connaître, selon ses conditions.',
      h1: 'Grand Mondial Casino est-il fiable ? Licence, exploitant et clauses',
      chapeau:
        'Fiable ne veut pas dire avantageux. Grand Mondial publie sa licence et sa certification, mais certaines clauses méritent d’être connues avant de déposer. Voici ce que nous avons relevé dans ses pages officielles.'
    }
  },
  en: {
    avis: {
      titre: 'Grand Mondial Casino Rewards Canada Review 2026: 150 Chances',
      description:
        'Grand Mondial Casino review for Canada: 150 chances for $10, 100% up to $250, 200x wagering, 48-hour pending withdrawals. Official terms read line by line.',
      h1: 'Grand Mondial Casino Review (2026): What the Terms Really Say',
      chapeau:
        'Grand Mondial is one of the most searched online casinos in Canada. Its offer: 150 chances to win a million for $10, then up to $250 on the 2nd deposit. We read its official terms: both bonuses must be wagered 200 times.'
    },
    bonus: {
      titre: 'Grand Mondial Casino 150 Free Spins for $10: What You Get',
      description:
        'Grand Mondial “150 free spins”: 150 chances on the Mega Money Wheel for $10, then 100% up to $250. 200x wagering, 2% game weighting: a worked example.',
      h1: 'Grand Mondial Bonus: 150 Chances for $10, and the Math to Do First',
      chapeau:
        'The Grand Mondial bonus is cheap to activate and pays out spins on a million-dollar wheel, then a 2nd deposit bonus. But winnings must be wagered 200 times. Here are the tiers, the rules and the math.'
    },
    sansDepot: {
      titre: 'Grand Mondial Casino No Deposit Bonus: Is There One in 2026?',
      description:
        'Does Grand Mondial offer a no deposit bonus? Not according to its official pages. The closest offer is 150 chances for $10: what it costs, and alternatives.',
      h1: 'Grand Mondial No Deposit Bonus: the Honest Answer',
      chapeau:
        'Many players look for a Grand Mondial no deposit bonus. On its official pages, read on November 10, 2026, there is none. Here is the closest offer, and what to know before depositing $10.'
    },
    retrait: {
      titre: 'Grand Mondial Withdrawal: Times, Fees and $50 Minimum',
      description:
        'Grand Mondial withdrawals: 48 hours pending, then 1 to 10 business days by method, $50 minimum, direct bank transfer fees. Compared with our tested payouts.',
      h1: 'Grand Mondial Withdrawals: Times, Fees and Minimums',
      chapeau:
        'At Grand Mondial, a withdrawal first stays pending for 48 hours. Here are the announced times by payment method, the minimums, the fees and the checks, from the official FAQ and terms.'
    },
    fiable: {
      titre: 'Is Grand Mondial Casino Legit? Licence and Operator Checked',
      description:
        'Is Grand Mondial legit? Kahnawake licence no. 00972, eCOGRA certification, Malta operator and the clauses to know: our reading of the official terms.',
      h1: 'Is Grand Mondial Casino Legit? Licence, Operator and Clauses',
      chapeau:
        'Legit does not mean good value. Grand Mondial publishes its licence and certification, but some clauses are worth knowing before you deposit. Here is what we found on its official pages.'
    }
  }
};

/* ---------- Golden Tiger : relevé du 16 novembre 2026 (FAQ sans paiements) ---------- */

const GOLDEN: MarqueRewards = {
  nom: 'Golden Tiger',
  slug: 'golden-tiger-casino',
  verifie: '2026-11-16',
  paliers: [
    { rang: 1, pourcentage: 100, plafond: 500 },
    { rang: 2, pourcentage: 50, plafond: 300 },
    { rang: 3, pourcentage: 20, plafond: 300 },
    { rang: 4, pourcentage: 30, plafond: 300 },
    { rang: 5, pourcentage: 100, plafond: 100 }
  ],
  totalAnnonce: 1500,
  articleReclamer: '11.5',
  faq: false,
  noteOffreFr: 'La page bonus n’indique pas le dépôt minimum.',
  noteOffreEn: 'The bonus page does not state the minimum deposit.',
  fideliteFr: 'Programme Casino Rewards à six niveaux, auquel tous les joueurs sont inscrits automatiquement',
  fideliteEn: 'Six-tier Casino Rewards program, with every player enrolled automatically',
  distinctionsFr: [
    'L’offre de bienvenue la plus élevée des casinos du groupe que nous avons analysés : jusqu’à 1 500 $ sur 5 dépôts.',
    'Une section de casino en direct avec de vrais croupiers, ouverte 24 h sur 24 : blackjack, roulette, baccara et jeux télévisés.',
    'Le casino affirme proposer chaque jeu dans sa version au taux de retour le plus élevé disponible, « généralement de 96 % à 99,9 % ».',
    'Clavardage 24 h sur 24, avec une équipe basée au Canada, en Australie, à Malte et au Royaume-Uni.',
    'Le sélecteur de langue propose le français.'
  ],
  distinctionsEn: [
    'The highest welcome offer among the group’s casinos we reviewed: up to $1,500 over 5 deposits.',
    'A real-dealer live casino open around the clock: blackjack, roulette, baccarat and game shows.',
    'The casino says it offers each game in its highest available return-to-player version, “typically 96% to 99.9%”.',
    '24/7 live chat, with staff based in Canada, Australia, Malta and the UK.',
    'The language menu offers French.'
  ],
  sourcesFr: [
    { titre: 'Golden Tiger : page d’accueil officielle (offre, licence, certification eCOGRA, exploitant, FAQ)', url: 'https://goldentiger.casino/en/' },
    { titre: 'Golden Tiger : page bonus officielle (5 bonus de dépôt, jusqu’à 1 500 $)', url: 'https://goldentiger.casino/en/bonus/' },
    { titre: 'Golden Tiger : conditions générales (mise, contribution des jeux, retraits, licence)', url: 'https://goldentiger.casino/en/terms/' }
  ],
  sourcesEn: [
    { titre: 'Golden Tiger: official home page (offer, licence, eCOGRA certification, operator, FAQ)', url: 'https://goldentiger.casino/en/' },
    { titre: 'Golden Tiger: official bonus page (5 deposit bonuses, up to $1,500)', url: 'https://goldentiger.casino/en/bonus/' },
    { titre: 'Golden Tiger: terms and conditions (wagering, game weighting, withdrawals, licence)', url: 'https://goldentiger.casino/en/terms/' }
  ],
  fr: {
    avis: {
      titre: 'Golden Tiger Casino Rewards en français : avis 2026, 1 500 $',
      description:
        'Avis Golden Tiger au Canada : jusqu’à 1 500 $ sur 5 dépôts, mise de 200 fois, retraits après 48 h d’attente, licence de Kahnawake. Conditions lues.',
      h1: 'Avis Golden Tiger Casino (2026) : ce que disent vraiment les conditions',
      chapeau:
        'Golden Tiger est l’un des casinos en ligne les plus cherchés au Canada. Son offre : jusqu’à 1 500 $ de bonus sur vos 5 premiers dépôts, dont 100 % jusqu’à 500 $ au 1er. Nous avons lu ses conditions officielles : les bonus des deux premiers dépôts doivent être misés 200 fois.'
    },
    bonus: {
      titre: 'Bonus Golden Tiger Casino : 100 % jusqu’à 500 $ (2026)',
      description:
        'Bonus Golden Tiger : 100 % jusqu’à 500 $, puis 4 autres bonus, 1 500 $ au total. Mise de 200 fois, jeux à 2 % : exemple chiffré et comparaison.',
      h1: 'Bonus Golden Tiger : jusqu’à 1 500 $, et le calcul à faire avant',
      chapeau:
        'Le bonus de Golden Tiger s’étale sur 5 dépôts et peut atteindre 1 500 $. Mais les bonus des deux premiers dépôts doivent être misés 200 fois. Voici les paliers, les règles et le calcul.'
    },
    sansDepot: {
      titre: 'Golden Tiger Casino bonus sans dépôt : existe-t-il en 2026 ?',
      description:
        'Golden Tiger a-t-il un bonus sans dépôt ? Non, d’après ses pages officielles. Son offre : jusqu’à 1 500 $ sur 5 dépôts. Explications et alternatives.',
      h1: 'Golden Tiger bonus sans dépôt : la réponse honnête',
      chapeau:
        'Beaucoup de joueurs cherchent un bonus sans dépôt chez Golden Tiger. Sur ses pages officielles relues le 16 novembre 2026, il n’y en a pas. Voici ce qui s’en approche, et ce qu’il faut savoir avant de déposer.'
    }
  },
  en: {
    avis: {
      titre: 'Golden Tiger Casino Rewards Canada Review 2026: $1,500 Bonus',
      description:
        'Golden Tiger Casino review for Canada: up to $1,500 over 5 deposits, 200x wagering, 48-hour pending withdrawals, Kahnawake licence. Official terms read.',
      h1: 'Golden Tiger Casino Review (2026): What the Terms Really Say',
      chapeau:
        'Golden Tiger is one of the most searched online casinos in Canada. Its offer: up to $1,500 in bonuses over your first 5 deposits, starting with 100% up to $500. We read its official terms: the first two deposit bonuses must be wagered 200 times.'
    },
    bonus: {
      titre: 'Golden Tiger Casino Bonus: 100% up to $500, $1,500 in Total',
      description:
        'Golden Tiger bonus: 100% up to $500, then 4 more bonuses, $1,500 in total. 200x wagering, 2% game weighting: a worked example and a comparison.',
      h1: 'Golden Tiger Bonus: Up to $1,500, and the Math to Do First',
      chapeau:
        'The Golden Tiger bonus is spread over 5 deposits and can reach $1,500. But the first two deposit bonuses must be wagered 200 times. Here are the tiers, the rules and the math.'
    },
    sansDepot: {
      titre: 'Golden Tiger Casino No Deposit Bonus: Is There One in 2026?',
      description:
        'Does Golden Tiger offer a no deposit bonus? Not according to its official pages. Its offer is up to $1,500 over 5 deposits: what it costs, and alternatives.',
      h1: 'Golden Tiger No Deposit Bonus: the Honest Answer',
      chapeau:
        'Many players look for a Golden Tiger no deposit bonus. On its official pages, read on November 16, 2026, there is none. Here is the closest offer, and what to know before depositing.'
    }
  }
};

/* ---------- Casino Classic : relevé du 16 novembre 2026 (FAQ sans paiements) ---------- */

const CLASSIC: MarqueRewards = {
  nom: 'Casino Classic',
  slug: 'casino-classic',
  verifie: '2026-11-16',
  paliers: [
    { rang: 1, pourcentage: 100, plafond: 150 },
    { rang: 2, pourcentage: 100, plafond: 150 },
    { rang: 3, pourcentage: 50, plafond: 200 }
  ],
  totalAnnonce: 500,
  articleReclamer: '11.5',
  faq: false,
  noteOffreFr: 'La page bonus n’indique pas le dépôt minimum.',
  noteOffreEn: 'The bonus page does not state the minimum deposit.',
  fideliteFr: 'Programme Casino Rewards à six niveaux ; les joueurs VIP d’autres casinos peuvent demander à conserver leur statut',
  fideliteEn: 'Six-tier Casino Rewards program; VIP players from other casinos can ask for a status match',
  distinctionsFr: [
    'Pas de chances sur la roue à un million : l’offre se compose de 3 bonus de dépôt, jusqu’à 500 $ au total.',
    'Le 2e dépôt est doublé comme le 1er : 100 % jusqu’à 150 $ chacun.',
    'Une section de casino en direct ouverte 24 h sur 24 : blackjack, roulette, baccara et jeux télévisés.',
    'Le casino affirme proposer chaque jeu dans sa version au taux de retour le plus élevé disponible, « généralement de 96 % à 99,9 % ».',
    'Clavardage 24 h sur 24, avec une équipe basée au Canada, en Australie, à Malte et au Royaume-Uni. Le sélecteur de langue propose le français.'
  ],
  distinctionsEn: [
    'No chances on the million-dollar wheel: the offer is made of 3 deposit bonuses, up to $500 in total.',
    'The 2nd deposit is matched like the 1st: 100% up to $150 each.',
    'A live casino section open around the clock: blackjack, roulette, baccarat and game shows.',
    'The casino says it offers each game in its highest available return-to-player version, “typically 96% to 99.9%”.',
    '24/7 live chat, with staff based in Canada, Australia, Malta and the UK. The language menu offers French.'
  ],
  sourcesFr: [
    { titre: 'Casino Classic : page d’accueil officielle (offre, licence, certification eCOGRA, exploitant, FAQ)', url: 'https://casinoclassic.casino/en/' },
    { titre: 'Casino Classic : page bonus officielle (3 bonus de dépôt, jusqu’à 500 $)', url: 'https://casinoclassic.casino/en/bonus/' },
    { titre: 'Casino Classic : conditions générales (mise, contribution des jeux, retraits, licence)', url: 'https://casinoclassic.casino/en/terms/' }
  ],
  sourcesEn: [
    { titre: 'Casino Classic: official home page (offer, licence, eCOGRA certification, operator, FAQ)', url: 'https://casinoclassic.casino/en/' },
    { titre: 'Casino Classic: official bonus page (3 deposit bonuses, up to $500)', url: 'https://casinoclassic.casino/en/bonus/' },
    { titre: 'Casino Classic: terms and conditions (wagering, game weighting, withdrawals, licence)', url: 'https://casinoclassic.casino/en/terms/' }
  ],
  fr: {
    avis: {
      titre: 'Avis Casino Classic 2026 : 500 $ de bonus, mise de 200 fois',
      description:
        'Avis Casino Classic au Canada : jusqu’à 500 $ sur 3 dépôts, mise de 200 fois, retraits après 48 h d’attente, licence de Kahnawake. Conditions lues.',
      h1: 'Avis Casino Classic (2026) : ce que disent vraiment les conditions',
      chapeau:
        'Casino Classic est l’un des casinos en ligne les plus cherchés au Canada. Son offre : jusqu’à 500 $ de bonus sur vos 3 premiers dépôts, dont 100 % jusqu’à 150 $ aux deux premiers. Nous avons lu ses conditions officielles : ces deux bonus doivent être misés 200 fois.'
    },
    bonus: {
      titre: 'Bonus Casino Classic : 100 % jusqu’à 150 $, deux fois (2026)',
      description:
        'Bonus Casino Classic : 100 % jusqu’à 150 $ aux 2 premiers dépôts, puis 50 % jusqu’à 200 $. Mise de 200 fois, jeux à 2 % : exemple chiffré et comparaison.',
      h1: 'Bonus Casino Classic : jusqu’à 500 $, et le calcul à faire avant',
      chapeau:
        'Le bonus de Casino Classic double vos deux premiers dépôts, jusqu’à 150 $ chacun, puis ajoute 50 % au 3e. Mais les deux premiers bonus doivent être misés 200 fois. Voici les paliers, les règles et le calcul.'
    },
    sansDepot: {
      titre: 'Casino Classic bonus sans dépôt : existe-t-il en 2026 ?',
      description:
        'Casino Classic a-t-il un bonus sans dépôt ou des tours gratuits ? Pas d’après ses pages officielles. Son offre : jusqu’à 500 $ sur 3 dépôts. Explications.',
      h1: 'Casino Classic bonus sans dépôt : la réponse honnête',
      chapeau:
        'Beaucoup de joueurs cherchent un bonus sans dépôt ou des tours gratuits chez Casino Classic. Sur ses pages officielles relues le 16 novembre 2026, il n’y en a pas. Voici ce qui s’en approche, et ce qu’il faut savoir avant de déposer.'
    }
  },
  en: {
    avis: {
      titre: 'Casino Classic Canada Review 2026: $500 Bonus, 200x Wagering',
      description:
        'Casino Classic review for Canada: up to $500 over 3 deposits, 200x wagering, 48-hour pending withdrawals, Kahnawake licence. Official terms read.',
      h1: 'Casino Classic Review (2026): What the Terms Really Say',
      chapeau:
        'Casino Classic is one of the most searched online casinos in Canada. Its offer: up to $500 in bonuses over your first 3 deposits, with 100% up to $150 on each of the first two. We read its official terms: both of those bonuses must be wagered 200 times.'
    },
    bonus: {
      titre: 'Casino Classic Bonus: 100% up to $150 on Two Deposits',
      description:
        'Casino Classic bonus: 100% up to $150 on the first 2 deposits, then 50% up to $200. 200x wagering, 2% game weighting: a worked example and a comparison.',
      h1: 'Casino Classic Bonus: Up to $500, and the Math to Do First',
      chapeau:
        'The Casino Classic bonus matches your first two deposits up to $150 each, then adds 50% on the 3rd. But the first two bonuses must be wagered 200 times. Here are the tiers, the rules and the math.'
    },
    sansDepot: {
      titre: 'Casino Classic No Deposit Bonus: Is There One in 2026?',
      description:
        'Does Casino Classic offer a no deposit bonus or free spins? Not according to its official pages. Its offer is up to $500 over 3 deposits: what it costs.',
      h1: 'Casino Classic No Deposit Bonus: the Honest Answer',
      chapeau:
        'Many players look for a Casino Classic no deposit bonus or free spins. On its official pages, read on November 16, 2026, there is none. Here is the closest offer, and what to know before depositing.'
    }
  }
};

/* ---------- Villento : relevé du 16 novembre 2026 ---------- */

const VILLENTO: MarqueRewards = {
  nom: 'Villento',
  slug: 'villento-casino',
  verifie: '2026-11-16',
  paliers: [
    { rang: 1, pourcentage: 100, plafond: 150 },
    { rang: 2, pourcentage: 50, plafond: 250 },
    { rang: 3, pourcentage: 30, plafond: 200 },
    { rang: 4, pourcentage: 20, plafond: 200 },
    { rang: 5, pourcentage: 50, plafond: 200 }
  ],
  totalAnnonce: 1000,
  articleReclamer: '11.5',
  piedExploitant: false,
  noteOffreFr: 'Dépôt minimum : 20 $, selon la page bonus.',
  noteOffreEn: 'Minimum deposit: $20, according to the bonus page.',
  fideliteFr: 'Groupe Casino Rewards : le pied de page renvoie vers le programme Casino Rewards',
  fideliteEn: 'Casino Rewards group: the footer links to the Casino Rewards program',
  distinctionsFr: [
    'Plus de 1 000 jeux annoncés, avec un taux de retour moyen de 97 % selon le casino.',
    'Le dépôt minimum le plus élevé des casinos du groupe que nous avons analysés : 20 $.',
    'Service client par courriel et clavardage, annoncé 24 h sur 24, 7 jours sur 7, avec une équipe multilingue. Le sélecteur de langue propose le français.',
    'Des tirages « VIP Lucky Jackpots » toutes les 8 heures, selon la page d’accueil.',
    'La page d’accueil ne mentionne pas de casino en direct, et son pied de page ne nomme pas d’exploitant.'
  ],
  distinctionsEn: [
    'More than 1,000 games advertised, with an average 97% payout rate according to the casino.',
    'The highest minimum deposit among the group’s casinos we reviewed: $20.',
    'Support by email and live chat, advertised 24/7, with a multilingual team. The language menu offers French.',
    '“VIP Lucky Jackpots” drawn every 8 hours, according to the home page.',
    'The home page does not mention a live casino, and its footer names no operator.'
  ],
  sourcesFr: [
    { titre: 'Villento : page d’accueil officielle (offre, licence, certification eCOGRA)', url: 'https://www.villento.com/en/' },
    { titre: 'Villento : page bonus officielle (5 bonus de dépôt, jusqu’à 1 000 $, dépôt minimum de 20 $)', url: 'https://www.villento.com/en/bonus/' },
    { titre: 'Villento : conditions générales (mise, contribution des jeux, retraits, licence)', url: 'https://www.villento.com/en/terms/' },
    { titre: 'Villento : FAQ (moyens de paiement, délais et frais de retrait, âge minimum)', url: 'https://www.villento.com/en/faq/' }
  ],
  sourcesEn: [
    { titre: 'Villento: official home page (offer, licence, eCOGRA certification)', url: 'https://www.villento.com/en/' },
    { titre: 'Villento: official bonus page (5 deposit bonuses, up to $1,000, $20 minimum deposit)', url: 'https://www.villento.com/en/bonus/' },
    { titre: 'Villento: terms and conditions (wagering, game weighting, withdrawals, licence)', url: 'https://www.villento.com/en/terms/' },
    { titre: 'Villento: FAQ (payment methods, withdrawal times and fees, minimum age)', url: 'https://www.villento.com/en/faq/' }
  ],
  fr: {
    avis: {
      titre: 'Avis Villento Casino 2026 : 1 000 $ de bonus, mise de 200 fois',
      description:
        'Avis Villento au Canada : jusqu’à 1 000 $ sur 5 dépôts dès 20 $, mise de 200 fois, retraits après 48 h d’attente, licence de Kahnawake. Conditions lues.',
      h1: 'Avis Villento Casino (2026) : ce que disent vraiment les conditions',
      chapeau:
        'Villento fait partie des casinos du groupe Casino Rewards les plus cherchés au Canada. Son offre : jusqu’à 1 000 $ de bonus sur vos 5 premiers dépôts, dont 100 % jusqu’à 150 $ au 1er. Nous avons lu ses conditions officielles : les bonus des deux premiers dépôts doivent être misés 200 fois.'
    },
    bonus: {
      titre: 'Bonus Villento Casino : 100 % jusqu’à 150 $, 1 000 $ au total',
      description:
        'Bonus Villento : 100 % jusqu’à 150 $, puis 4 autres bonus, 1 000 $ au total, dès 20 $ de dépôt. Mise de 200 fois, jeux à 2 % : exemple chiffré.',
      h1: 'Bonus Villento : jusqu’à 1 000 $, et le calcul à faire avant',
      chapeau:
        'Le bonus de Villento s’étale sur 5 dépôts et peut atteindre 1 000 $, avec un dépôt minimum de 20 $. Mais les bonus des deux premiers dépôts doivent être misés 200 fois. Voici les paliers, les règles et le calcul.'
    },
    sansDepot: {
      titre: 'Villento Casino bonus sans dépôt : existe-t-il en 2026 ?',
      description:
        'Villento a-t-il un bonus sans dépôt ? Non, d’après ses pages officielles. Son offre : jusqu’à 1 000 $ sur 5 dépôts, dès 20 $. Explications et alternatives.',
      h1: 'Villento bonus sans dépôt : la réponse honnête',
      chapeau:
        'Beaucoup de joueurs cherchent un bonus sans dépôt chez Villento. Sur ses pages officielles relues le 16 novembre 2026, il n’y en a pas. Voici ce qui s’en approche, et ce qu’il faut savoir avant de déposer 20 $.'
    }
  },
  en: {
    avis: {
      titre: 'Villento Casino Canada Review 2026: $1,000 Bonus, 200x',
      description:
        'Villento Casino review for Canada: up to $1,000 over 5 deposits from $20, 200x wagering, 48-hour pending withdrawals, Kahnawake licence. Terms read.',
      h1: 'Villento Casino Review (2026): What the Terms Really Say',
      chapeau:
        'Villento is one of the most searched Casino Rewards casinos in Canada. Its offer: up to $1,000 in bonuses over your first 5 deposits, starting with 100% up to $150. We read its official terms: the first two deposit bonuses must be wagered 200 times.'
    },
    bonus: {
      titre: 'Villento Casino Bonus: 100% up to $150, $1,000 in Total',
      description:
        'Villento bonus: 100% up to $150, then 4 more bonuses, $1,000 in total, from a $20 deposit. 200x wagering, 2% game weighting: a worked example.',
      h1: 'Villento Bonus: Up to $1,000, and the Math to Do First',
      chapeau:
        'The Villento bonus is spread over 5 deposits and can reach $1,000, with a $20 minimum deposit. But the first two deposit bonuses must be wagered 200 times. Here are the tiers, the rules and the math.'
    },
    sansDepot: {
      titre: 'Villento Casino No Deposit Bonus: Is There One in 2026?',
      description:
        'Does Villento offer a no deposit bonus? Not according to its official pages. Its offer is up to $1,000 over 5 deposits, from $20: what it costs.',
      h1: 'Villento No Deposit Bonus: the Honest Answer',
      chapeau:
        'Many players look for a Villento no deposit bonus. On its official pages, read on November 16, 2026, there is none. Here is the closest offer, and what to know before depositing $20.'
    }
  }
};

/** Ordre : marques les plus cherchées au Canada d'abord (Ubersuggest, novembre 2026). */
/* ---------- Casino Action : relevé du 17 novembre 2026 (FAQ sans Interac) ---------- */

const ACTION: MarqueRewards = {
  nom: 'Casino Action',
  slug: 'casino-action',
  verifie: '2026-11-17',
  paliers: [
    { rang: 1, pourcentage: 100, plafond: 150 },
    { rang: 2, pourcentage: 50, plafond: 200 },
    { rang: 3, pourcentage: 25, plafond: 500 },
    { rang: 4, pourcentage: 50, plafond: 250 },
    { rang: 5, pourcentage: 100, plafond: 150 }
  ],
  totalAnnonce: 1250,
  articleReclamer: '11.5',
  piedExploitant: false,
  faqInterac: false,
  noteOffreFr: 'Dépôt minimum : 10 $ pour le 1er dépôt, selon la page bonus.',
  noteOffreEn: 'Minimum deposit: $10 for the 1st deposit, according to the bonus page.',
  fideliteFr: 'Programme de fidélité Casino Rewards (points), avec des « Lucky Jackpots » trois fois par jour selon la page d’accueil',
  fideliteEn: 'Casino Rewards loyalty program (points), with “Lucky Jackpots” three times a day according to the home page',
  distinctionsFr: [
    'Plus de 1 000 jeux annoncés, dont des machines à sous progressives comme Mega Moolah.',
    'Une offre sur 5 dépôts, jusqu’à 1 250 $ au total ; le plus gros plafond arrive au 3e dépôt (25 % jusqu’à 500 $).',
    'Service client annoncé 24 h sur 24, 7 jours sur 7, par téléphone et courriel, selon la FAQ.',
    'Retraits au Canada par Visa, virement EFT en dollars canadiens ou Skrill, selon la FAQ.',
    'La page d’accueil ne mentionne pas de casino en direct, et son pied de page ne nomme pas d’exploitant. Le sélecteur de langue propose le français.'
  ],
  distinctionsEn: [
    'More than 1,000 games advertised, including progressive slots such as Mega Moolah.',
    'An offer over 5 deposits, up to $1,250 in total; the biggest cap comes with the 3rd deposit (25% up to $500).',
    'Support advertised 24/7 by phone and email, according to the FAQ.',
    'Withdrawals in Canada by Visa, CAD EFT transfer or Skrill, according to the FAQ.',
    'The home page does not mention a live casino, and its footer names no operator. The language menu offers French.'
  ],
  sourcesFr: [
    { titre: 'Casino Action : page d’accueil officielle (offre, licence, certification eCOGRA)', url: 'https://www.casinoaction.com/en/' },
    { titre: 'Casino Action : page bonus officielle (5 bonus de dépôt, jusqu’à 1 250 $)', url: 'https://www.casinoaction.com/en/bonus/' },
    { titre: 'Casino Action : conditions générales (mise, contribution des jeux, retraits, licence)', url: 'https://www.casinoaction.com/en/terms/' },
    { titre: 'Casino Action : FAQ (moyens de paiement, délais et frais de retrait, âge minimum)', url: 'https://www.casinoaction.com/en/faq/' }
  ],
  sourcesEn: [
    { titre: 'Casino Action: official home page (offer, licence, eCOGRA certification)', url: 'https://www.casinoaction.com/en/' },
    { titre: 'Casino Action: official bonus page (5 deposit bonuses, up to $1,250)', url: 'https://www.casinoaction.com/en/bonus/' },
    { titre: 'Casino Action: terms and conditions (wagering, game weighting, withdrawals, licence)', url: 'https://www.casinoaction.com/en/terms/' },
    { titre: 'Casino Action: FAQ (payment methods, withdrawal times and fees, minimum age)', url: 'https://www.casinoaction.com/en/faq/' }
  ],
  fr: {
    avis: {
      titre: 'Avis Casino Action 2026 : 1 250 $ de bonus, mise de 200 fois',
      description:
        'Avis Casino Action au Canada : jusqu’à 1 250 $ sur 5 dépôts, mise de 200 fois, retraits après 48 h d’attente, licence de Kahnawake. Conditions lues.',
      h1: 'Avis Casino Action (2026) : ce que disent vraiment les conditions',
      chapeau:
        'Casino Action fait partie des casinos du groupe Casino Rewards les plus cherchés au Canada. Son offre : jusqu’à 1 250 $ de bonus sur vos 5 premiers dépôts, dont 100 % jusqu’à 150 $ au 1er. Nous avons lu ses conditions officielles : les bonus des deux premiers dépôts doivent être misés 200 fois.'
    },
    bonus: {
      titre: 'Bonus Casino Action : 100 % jusqu’à 150 $, 1 250 $ au total',
      description:
        'Bonus Casino Action : 100 % jusqu’à 150 $, puis 4 autres bonus, 1 250 $ au total, dès 10 $. Mise de 200 fois, jeux à 2 % : exemple chiffré et comparaison.',
      h1: 'Bonus Casino Action : jusqu’à 1 250 $, et le calcul à faire avant',
      chapeau:
        'Le bonus de Casino Action s’étale sur 5 dépôts et peut atteindre 1 250 $. Mais les bonus des deux premiers dépôts doivent être misés 200 fois. Voici les paliers, les règles et le calcul.'
    },
    sansDepot: {
      titre: 'Casino Action bonus sans dépôt : existe-t-il en 2026 ?',
      description:
        'Casino Action a-t-il un bonus sans dépôt ? Non, d’après ses pages officielles. Son offre : jusqu’à 1 250 $ sur 5 dépôts, dès 10 $. Explications.',
      h1: 'Casino Action bonus sans dépôt : la réponse honnête',
      chapeau:
        'Beaucoup de joueurs cherchent un bonus sans dépôt chez Casino Action. Sur ses pages officielles relues le 17 novembre 2026, il n’y en a pas. Voici ce qui s’en approche, et ce qu’il faut savoir avant de déposer.'
    }
  },
  en: {
    avis: {
      titre: 'Casino Action Canada Review 2026: $1,250 Bonus, 200x',
      description:
        'Casino Action review for Canada: up to $1,250 over 5 deposits, 200x wagering, 48-hour pending withdrawals, Kahnawake licence. Official terms read.',
      h1: 'Casino Action Review (2026): What the Terms Really Say',
      chapeau:
        'Casino Action is one of the most searched Casino Rewards casinos in Canada. Its offer: up to $1,250 in bonuses over your first 5 deposits, starting with 100% up to $150. We read its official terms: the first two deposit bonuses must be wagered 200 times.'
    },
    bonus: {
      titre: 'Casino Action Bonus: 100% up to $150, $1,250 in Total',
      description:
        'Casino Action bonus: 100% up to $150, then 4 more bonuses, $1,250 in total, from $10. 200x wagering, 2% game weighting: a worked example and a comparison.',
      h1: 'Casino Action Bonus: Up to $1,250, and the Math to Do First',
      chapeau:
        'The Casino Action bonus is spread over 5 deposits and can reach $1,250. But the first two deposit bonuses must be wagered 200 times. Here are the tiers, the rules and the math.'
    },
    sansDepot: {
      titre: 'Casino Action No Deposit Bonus: Is There One in 2026?',
      description:
        'Does Casino Action offer a no deposit bonus? Not according to its official pages. Its offer is up to $1,250 over 5 deposits, from $10: what it costs.',
      h1: 'Casino Action No Deposit Bonus: the Honest Answer',
      chapeau:
        'Many players look for a Casino Action no deposit bonus. On its official pages, read on November 17, 2026, there is none. Here is the closest offer, and what to know before depositing.'
    }
  }
};

/* ---------- Quatro Casino : relevé du 17 novembre 2026 ---------- */

const QUATRO: MarqueRewards = {
  nom: 'Quatro Casino',
  slug: 'quatro-casino',
  verifie: '2026-11-17',
  depot1: 10,
  tours: {
    paliers: [
      { depot: 10, jusqua: 19.99, bonus: 10, parJour: 10 },
      { depot: 20, jusqua: 49.99, bonus: 20, parJour: 20 },
      { depot: 50, jusqua: 99.99, bonus: 50, parJour: 50 },
      { depot: 100, bonus: 100, parJour: 100 }
    ],
    jeux: [
      'Thunderstruck Wild Lightning',
      'Casino Rewards Midnight Assassin',
      '9 Masks of Fire',
      'Immortal Romance',
      'Casino Rewards 20 Year Celebration',
      'Amazing Link: Zeus',
      'Casino Rewards Hyper Strike'
    ]
  },
  /** Bonus du 1er dépôt : égal au dépôt aux montants de palier (100 $ pour 100 $), plafonné à 100 $. */
  paliers: [{ rang: 1, pourcentage: 100, plafond: 100 }],
  articles: { suivants: '12.6', jeux: ['12.15', '12.17'], argent: '12.8' },
  articleReclamer: '11.7',
  piedExploitant: false,
  noteOffreFr: 'Seul le 1er dépôt fixe le bonus et le nombre de tours (article 11.3) : un dépôt de 30 $, par exemple, donne le palier de 20 $.',
  noteOffreEn: 'Only the first deposit sets the bonus and the number of spins (section 11.3): a $30 deposit, for example, gets the $20 tier.',
  fideliteFr: 'Programme de fidélité Casino Rewards à 6 statuts ; tout joueur qui mise y est inscrit automatiquement, selon la FAQ',
  fideliteEn: 'Casino Rewards loyalty program with 6 status levels; every player who wagers is enrolled automatically, according to the FAQ',
  distinctionsFr: [
    'Parmi les casinos du groupe que nous avons analysés, c’est le seul dont l’offre de bienvenue donne des tours gratuits sur des machines à sous, au lieu de chances sur la roue Mega Money Wheel ou de bonus étalés sur plusieurs dépôts.',
    'L’offre dépend du montant du 1er dépôt : de 10 tours par jour pendant 7 jours (dès 10 $) à 100 tours par jour (dès 100 $), plus un bonus de 10 $ à 100 $.',
    'Il faut se connecter chaque jour pendant 7 jours pour recevoir les tours du jour, à jouer le jour même.',
    'Service client annoncé 24 h sur 24, 7 jours sur 7, par téléphone et courriel, selon la FAQ.',
    'La page d’accueil ne mentionne pas de casino en direct, et son pied de page ne nomme pas d’exploitant. Le sélecteur de langue propose le français.'
  ],
  distinctionsEn: [
    'Among the group’s casinos we have reviewed, it is the only one whose welcome offer gives free spins on slots, instead of chances on the Mega Money Wheel or bonuses spread over several deposits.',
    'The offer depends on the size of your first deposit: from 10 spins a day for 7 days (from $10) to 100 spins a day (from $100), plus a $10 to $100 bonus.',
    'You must log in every day for 7 days to receive that day’s spins, which must be played the same day.',
    'Support advertised 24/7 by phone and email, according to the FAQ.',
    'The home page does not mention a live casino, and its footer names no operator. The language menu offers French.'
  ],
  sourcesFr: [
    { titre: 'Quatro Casino : page d’accueil officielle (offre, langues, certificats Kahnawake et eCOGRA)', url: 'https://www.quatrocasino.com/en/' },
    { titre: 'Quatro Casino : page bonus officielle en français (jusqu’à 700 tours gratuits et 100 $)', url: 'https://www.quatrocasino.com/fr/bonus/' },
    { titre: 'Quatro Casino : conditions générales (paliers, jeux du jour, mise, contribution des jeux, retraits, licence)', url: 'https://www.quatrocasino.com/en/terms/' },
    { titre: 'Quatro Casino : FAQ (Interac, délais et minimum de retrait, connexion, service client)', url: 'https://www.quatrocasino.com/en/faq/' },
    { titre: 'Google Play : fiche de l’application « Quatro Online » (jeu social de Code Nest Hub LLC, sans argent réel)', url: 'https://play.google.com/store/apps/details?id=com.cnh.quatrocasino' }
  ],
  sourcesEn: [
    { titre: 'Quatro Casino: official home page (offer, languages, Kahnawake and eCOGRA certificates)', url: 'https://www.quatrocasino.com/en/' },
    { titre: 'Quatro Casino: official bonus page (up to 700 free spins and $100)', url: 'https://www.quatrocasino.com/en/bonus/' },
    { titre: 'Quatro Casino: terms and conditions (tiers, daily games, wagering, game weighting, withdrawals, licence)', url: 'https://www.quatrocasino.com/en/terms/' },
    { titre: 'Quatro Casino: FAQ (Interac, withdrawal times and minimum, login, support)', url: 'https://www.quatrocasino.com/en/faq/' },
    { titre: 'Google Play: “Quatro Online” app listing (a Code Nest Hub LLC social game, no real money)', url: 'https://play.google.com/store/apps/details?id=com.cnh.quatrocasino' }
  ],
  faqAvisFr: [
    {
      q: 'Comment se connecter à Quatro Casino ?',
      r: 'Sur le site officiel, quatrocasino.com, avec le nom d’utilisateur et le mot de passe choisis à l’inscription. D’après la FAQ, le mot de passe tient compte des majuscules et des minuscules ; en cas d’oubli, le lien « mot de passe oublié » du site permet de le récupérer. Tapez l’adresse vous-même plutôt que de suivre un lien de connexion reçu par courriel.'
    },
    {
      q: 'Quatro Casino a-t-il une application mobile ?',
      r: 'Sa FAQ ne décrit pas d’application pour téléphone : elle décrit surtout un logiciel à installer sur ordinateur, sous Windows. Attention : l’application « Quatro Online » de Google Play n’est pas le casino Quatro. Sa fiche, consultée le 17 novembre 2026, la présente comme un jeu de casino social gratuit, sans argent réel, publié par Code Nest Hub LLC, une société du Wyoming. Pour jouer chez Quatro Casino, passez par le site officiel, quatrocasino.com.'
    }
  ],
  faqAvisEn: [
    {
      q: 'How do I log in to Quatro Casino?',
      r: 'On the official site, quatrocasino.com, with the username and password you chose at sign-up. According to the FAQ, the password is case sensitive; if you forget it, use the site’s “forgot password” link. Type the address yourself rather than following a login link received by email.'
    },
    {
      q: 'Does Quatro Casino have a mobile app?',
      r: 'Its FAQ describes no phone app: it mainly describes desktop software for Windows. Careful: the “Quatro Online” app on Google Play is not Quatro Casino. Its store listing, checked on November 17, 2026, describes a free social casino game with no real money, published by Code Nest Hub LLC, a Wyoming company. To play at Quatro Casino, use the official site, quatrocasino.com.'
    }
  ],
  fr: {
    avis: {
      titre: 'Quatro Casino avis 2026 : 700 tours gratuits, site en français',
      description:
        'Avis Quatro Casino au Canada : jusqu’à 700 tours gratuits et 100 $ de bonus, mise de 200 fois, retraits après 48 h d’attente, en français. Conditions lues.',
      h1: 'Avis Quatro Casino (2026) : ce que disent vraiment les conditions',
      chapeau:
        'Quatro Casino est l’un des casinos du groupe Casino Rewards les plus cherchés au Canada. Son offre : jusqu’à 700 tours gratuits sur vos 7 premiers jours et jusqu’à 100 $ de bonus au 1er dépôt. Nous avons lu ses conditions officielles : le bonus et les gains des tours doivent être misés 200 fois.'
    },
    bonus: {
      titre: 'Quatro Casino 700 tours gratuits : bonus, jeux et conditions',
      description:
        'Bonus Quatro Casino : 10 à 100 tours gratuits par jour pendant 7 jours et 10 $ à 100 $ de bonus, selon le 1er dépôt. Mise de 200 fois : exemple chiffré.',
      h1: 'Bonus Quatro Casino : 700 tours gratuits, et le calcul à faire avant',
      chapeau:
        'Chez Quatro Casino, tout dépend du 1er dépôt : de 10 $ (70 tours et 10 $ de bonus) à 100 $ ou plus (700 tours et 100 $). Mais le bonus et les gains des tours doivent être misés 200 fois. Voici les paliers, les jeux du jour, les règles et le calcul.'
    },
    sansDepot: {
      titre: 'Quatro Casino bonus sans dépôt : existe-t-il en 2026 ?',
      description:
        'Quatro Casino a-t-il un bonus sans dépôt ? Non, d’après ses pages officielles. Ses 700 tours gratuits demandent un dépôt, dès 10 $. Explications.',
      h1: 'Quatro Casino bonus sans dépôt : la réponse honnête',
      chapeau:
        'Beaucoup de joueurs cherchent un bonus sans dépôt ou des tours gratuits sans dépôt chez Quatro Casino. Sur ses pages officielles relues le 17 novembre 2026, il n’y en a pas. Voici ce qui s’en approche, et ce qu’il faut savoir avant de déposer.'
    }
  },
  en: {
    avis: {
      titre: 'Quatro Casino Canada Review 2026: 700 Free Spins + $100',
      description:
        'Quatro Casino review for Canada: up to 700 free spins and a $100 bonus, 200x wagering, 48-hour pending withdrawals, Kahnawake licence. Terms read.',
      h1: 'Quatro Casino Review (2026): What the Terms Really Say',
      chapeau:
        'Quatro Casino is one of the most searched Casino Rewards casinos in Canada. Its offer: up to 700 free spins over your first 7 days and up to a $100 bonus on your first deposit. We read its official terms: the bonus and the spin winnings must be wagered 200 times.'
    },
    bonus: {
      titre: 'Quatro Casino Bonus: 700 Free Spins and Up to $100',
      description:
        'Quatro Casino bonus: 10 to 100 free spins a day for 7 days plus a $10 to $100 bonus, set by your first deposit. 200x wagering: a worked example.',
      h1: 'Quatro Casino Bonus: 700 Free Spins, and the Math to Do First',
      chapeau:
        'At Quatro Casino, everything depends on your first deposit: from $10 (70 spins and a $10 bonus) to $100 or more (700 spins and $100). But the bonus and the spin winnings must be wagered 200 times. Here are the tiers, the daily games, the rules and the math.'
    },
    sansDepot: {
      titre: 'Quatro Casino No Deposit Bonus: Is There One in 2026?',
      description:
        'Does Quatro Casino offer a no deposit bonus? Not according to its official pages. Its 700 free spins require a deposit, from $10: the details.',
      h1: 'Quatro Casino No Deposit Bonus: the Honest Answer',
      chapeau:
        'Many players look for a Quatro Casino no deposit bonus or no deposit free spins. On its official pages, read on November 17, 2026, there is none. Here is the closest offer, and what to know before depositing.'
    }
  }
};

const MARQUES: MarqueRewards[] = [QUATRO, YUKON, ZODIAC, LUXURY, CAPTAIN, GRAND, GOLDEN, CLASSIC, VILLENTO, ACTION];

/* ---------- Calculs et formats communs ---------- */

const EXEMPLES = CASINOS.map((c) => ({ c, ex: exempleMise(c, 100) })).filter((x) => x.ex) as {
  c: Casino;
  ex: NonNullable<ReturnType<typeof exempleMise>>;
}[];
const TOP3 = CASINOS.slice(0, 3).map((c) => c.id);
/** Date du relevé des pages d'accueil (16 novembre 2026 pour les premières marques, date de vérification ensuite). */
const releveAccueil = (m: MarqueRewards) => (m.verifie > '2026-11-16' ? m.verifie : '2026-11-16');
/** Dernière mise à jour du contenu des avis et des pages bonus (conditions relues : voir `verifie`). */
const MODIFIE_CONTENU = '2026-11-16';
const RAPIDES = classementRetraits();
const GAIN_EXEMPLE = 20;

const fr = (n: number) => montant(n, '$');
const enM = (n: number) => `$${Math.round(n).toLocaleString('en-CA')}`;
const heuresFr = (n?: number | null) => (n === null || n === undefined ? 'Pas encore testé' : `${n} h`);
const heuresEn = (n?: number | null) => (n === null || n === undefined ? 'Not tested yet' : `${n} h`);
const miseDe = (rang: number) => (rang <= 2 ? REWARDS.mise12 : REWARDS.mise3);
const rangFr = (n: number) => (n === 1 ? '1er dépôt' : `${n}e dépôt`);
const rangEn = (n: number) => `${n}${n === 1 ? 'st' : n === 2 ? 'nd' : n === 3 ? 'rd' : 'th'} deposit`;
const avecFaq = (m: MarqueRewards) => m.faq !== false;

/**
 * Page du groupe Casino Rewards : elle regroupe ce qui est commun aux 5 marques (retraits, clauses, licence).
 * Les anciennes pages « retrait » et « fiabilité » de chaque marque y sont fondues (redirections dans next.config.mjs),
 * pour éviter 20 pages presque identiques.
 */
const HUB_FR = '/casino-rewards/';
const HUB_EN = '/en-ca/casino-rewards/';
const listeFr = (x: string[]) => (x.length < 2 ? x.join('') : `${x.slice(0, -1).join(', ')} et ${x[x.length - 1]}`);
const listeEn = (x: string[]) => (x.length < 2 ? x.join('') : `${x.slice(0, -1).join(', ')} and ${x[x.length - 1]}`);

const chemins = (m: MarqueRewards) => ({
  fr: { avis: `/${m.slug}/`, bonus: `/${m.slug}/bonus/`, sansDepot: `/${m.slug}/bonus-sans-depot/` },
  en: { avis: `/en-ca/${m.slug}/`, bonus: `/en-ca/${m.slug}/bonus/`, sansDepot: `/en-ca/${m.slug}/no-deposit-bonus/` }
});

function chiffres(m: MarqueRewards) {
  /** Premier bonus en argent : 1er dépôt (Luxury) ou 2e dépôt (offres avec chances). */
  const p = m.paliers[0];
  const bonus100 = Math.min(100 * (p.pourcentage / 100), p.plafond);
  const total = m.totalAnnonce ?? m.paliers.reduce((s, x) => s + x.plafond, 0);
  const suivants = m.paliers.filter((x) => x !== p);
  return {
    p,
    suivants,
    bonus100,
    miseBonus100: bonus100 * REWARDS.mise12,
    miseTotal100: (100 + bonus100) * REWARDS.mise12,
    misePlafond: p.plafond * REWARDS.mise12,
    misePlafondTotal: p.plafond * 2 * REWARDS.mise12,
    pertePlafond: p.plafond * REWARDS.mise12 * 0.04,
    total,
    misesGain: GAIN_EXEMPLE * REWARDS.mise12
  };
}

const JOURS_TOURS = 7;
const ARTICLES_COMMUNS = { suivants: '12.5', jeux: ['12.13', '12.15'] as [string, string], argent: '12.6' };
/** Paliers de tours (Quatro) : le plus petit, le plus grand, et le total de tours sur 7 jours. */
function tours(m: MarqueRewards) {
  const t = m.tours!;
  const min = t.paliers[0];
  const max = t.paliers[t.paliers.length - 1];
  return { t, min, max, toursMin: min.parJour * JOURS_TOURS, toursMax: max.parJour * JOURS_TOURS, misesGain: GAIN_EXEMPLE * REWARDS.mise12 };
}
const trancheFr = (p: { depot: number; jusqua?: number }) => (p.jusqua ? `${fr(p.depot)} à ${montant(p.jusqua, '$')}` : `${fr(p.depot)} ou plus`);
const trancheEn = (p: { depot: number; jusqua?: number }) => (p.jusqua ? `${enM(p.depot)} to $${p.jusqua.toFixed(2)}` : `${enM(p.depot)} or more`);

/** Adresse officielle de la marque (première source citée), sans « www. ». */
const adresseOfficielle = (m: MarqueRewards) => new URL(m.sourcesFr[0].url).hostname.replace(/^www\./, '');
const nomComplet = (m: MarqueRewards) => (/casino/i.test(m.nom) ? m.nom : `${m.nom} Casino`);
/** Question « connexion », ajoutée à l'avis quand la marque n'en a pas déjà une. */
const connexionFr = (m: MarqueRewards) => ({
  q: `Comment se connecter à ${nomComplet(m)} ?`,
  r: `Sur le site officiel, ${adresseOfficielle(m)}, avec le nom d’utilisateur et le mot de passe choisis à l’inscription. Tapez l’adresse vous-même plutôt que de suivre un lien de connexion reçu par courriel ou trouvé sur un autre site. En cas d’oubli du mot de passe, passez par la récupération proposée sur la page de connexion ou par le service client.`
});
const connexionEn = (m: MarqueRewards) => ({
  q: `How do I log in to ${nomComplet(m)}?`,
  r: `On the official site, ${adresseOfficielle(m)}, with the username and password you chose at sign-up. Type the address yourself rather than following a login link received by email or found on another site. If you forgot your password, use the recovery option on the login page or contact customer support.`
});

/** Résumé de l'offre en une ligne. */
function offreFr(m: MarqueRewards): string {
  const k = chiffres(m);
  if (m.tours) {
    const q = tours(m);
    return `jusqu’à ${q.toursMax} tours gratuits sur ${JOURS_TOURS} jours et un bonus de ${fr(q.min.bonus)} à ${fr(q.max.bonus)}, selon le montant du 1er dépôt`;
  }
  if (!m.chances) return `${m.paliers.length} bonus de dépôt, jusqu’à ${fr(k.total)} au total, dont ${k.p.pourcentage} % jusqu’à ${fr(k.p.plafond)} au 1er dépôt`;
  if (m.paliers.length === 1) return `${m.chances} chances pour un 1er dépôt de ${fr(m.depot1!)}, puis ${k.p.pourcentage} % jusqu’à ${fr(k.p.plafond)} au 2e dépôt`;
  return `${m.chances} chances pour un 1er dépôt de ${fr(m.depot1!)}, puis jusqu’à ${fr(k.total)} de bonus sur les ${m.paliers.length} dépôts suivants`;
}
function offreEn(m: MarqueRewards): string {
  const k = chiffres(m);
  if (m.tours) {
    const q = tours(m);
    return `up to ${q.toursMax} free spins over ${JOURS_TOURS} days and a ${enM(q.min.bonus)} to ${enM(q.max.bonus)} bonus, depending on your first deposit`;
  }
  if (!m.chances) return `${m.paliers.length} deposit bonuses, up to ${enM(k.total)} in total, starting with ${k.p.pourcentage}% up to ${enM(k.p.plafond)} on the 1st deposit`;
  if (m.paliers.length === 1) return `${m.chances} chances for a first deposit of ${enM(m.depot1!)}, then ${k.p.pourcentage}% up to ${enM(k.p.plafond)} on the 2nd deposit`;
  return `${m.chances} chances for a first deposit of ${enM(m.depot1!)}, then up to ${enM(k.total)} in bonuses over the next ${m.paliers.length} deposits`;
}

/** Offre courte, pour les tableaux. */
const offreCourteFr = (m: MarqueRewards) =>
  m.tours
    ? `${tours(m).toursMin} tours gratuits et ${fr(tours(m).min.bonus)} de bonus dès ${fr(tours(m).min.depot)}, jusqu’à ${tours(m).toursMax} tours et ${fr(tours(m).max.bonus)} dès ${fr(tours(m).max.depot)} ; mise de ${REWARDS.mise12} fois`
    : m.chances ? `${m.chances} chances, mise de ${REWARDS.mise12} fois` : `${chiffres(m).p.pourcentage} % jusqu’à ${fr(chiffres(m).p.plafond)}, mise de ${REWARDS.mise12} fois`;
const offreCourteEn = (m: MarqueRewards) =>
  m.tours
    ? `${tours(m).toursMin} free spins and a ${enM(tours(m).min.bonus)} bonus from ${enM(tours(m).min.depot)}, up to ${tours(m).toursMax} spins and ${enM(tours(m).max.bonus)} from ${enM(tours(m).max.depot)}; ${REWARDS.mise12}x wagering`
    : m.chances ? `${m.chances} chances, ${REWARDS.mise12}x wagering` : `${chiffres(m).p.pourcentage}% up to ${enM(chiffres(m).p.plafond)}, ${REWARDS.mise12}x wagering`;

/** Autres marques du groupe, pour les liens internes. */
const autresFr = (m: MarqueRewards) => MARQUES.filter((x) => x !== m).map((x) => `[${x.nom}](${chemins(x).fr.avis})`).join(', ');
const autresEn = (m: MarqueRewards) => MARQUES.filter((x) => x !== m).map((x) => `[${x.nom}](${chemins(x).en.avis})`).join(', ');

function tableauMiseFr(m: MarqueRewards) {
  const k = chiffres(m);
  return {
    type: 'tableau' as const,
    legende: `Pour un dépôt de 100 $. ${m.nom} : ${rangFr(k.p.rang)}, bonus de ${k.p.pourcentage} %. Nos casinos : premier palier de leur offre de bienvenue, conditions officielles.`,
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
    legende: `For a $100 deposit. ${m.nom}: ${rangEn(k.p.rang)}, ${k.p.pourcentage}% bonus. Our casinos: first tier of their welcome offer, official terms.`,
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
  const faq = avecFaq(m);
  const parent = { nom: `Avis ${m.nom}`, chemin: c.avis };
  const titreTop = `Avant ${m.nom} : nos 3 casinos les mieux notés`;
  const base = { modifie: m.verifie, titreTop, sources: m.sourcesFr };
  const art = m.articleReclamer ?? '11.8';
  const a = m.articles ?? ARTICLES_COMMUNS;
  const q = m.tours ? tours(m) : null;

  const blocsOffre: SectionGuide['blocs'] = q
    ? [
        {
          type: 'p',
          texte: `${m.nom} ne donne pas de chances sur la roue Mega Money Wheel : son offre de bienvenue, ce sont des tours gratuits chaque jour pendant vos ${JOURS_TOURS} premiers jours, plus un bonus au 1er dépôt. Le nombre de tours et le bonus dépendent du montant de ce dépôt (article 11.4).`
        },
        {
          type: 'tableau',
          legende: `Conditions générales et page bonus officielles, relues le ${dateLongue(m.verifie)}.`,
          entetes: ['1er dépôt', 'Bonus', 'Tours gratuits'],
          lignes: q.t.paliers.map((p) => [trancheFr(p), fr(p.bonus), `${p.parJour} par jour pendant ${JOURS_TOURS} jours, soit **${p.parJour * JOURS_TOURS}**`])
        },
        {
          type: 'p',
          texte: `**Les tours ne tombent pas tous d’un coup.** Il faut se connecter chaque jour : les tours ne sont crédités que les jours où vous vous connectez, et ceux du jour sont perdus s’ils ne sont pas joués le jour même (article 11.5). Chaque jour a sa machine à sous imposée, de ${q.t.jeux[0]} le 1er jour à ${q.t.jeux[q.t.jeux.length - 1]} le ${JOURS_TOURS}e.`
        },
        {
          type: 'p',
          texte: `Les gains des tours sont versés en bonus (article 12.7) et, comme le bonus du 1er dépôt, ils doivent être misés **${REWARDS.mise12} fois** avant de pouvoir être retirés (article 12.5). Par exemple, si vos tours rapportent ${fr(GAIN_EXEMPLE)}, il faut miser ${fr(q.misesGain)} avant de toucher ces ${fr(GAIN_EXEMPLE)}. Le détail jour par jour et l’exemple chiffré : [le bonus ${m.nom}](${c.bonus}).`
        }
      ]
    : m.chances
    ? [
        {
          type: 'p',
          texte: `Au 1er dépôt de ${fr(m.depot1!)}, ${m.nom} donne ${m.chances} tours sur la roue Mega Money Wheel, à 0,10 $ le tour selon ses conditions générales (article 11.4). Le gros lot de la roue est d’un million de dollars, mais les conditions que nous avons lues ne donnent pas la probabilité de le décrocher.`
        },
        {
          type: 'p',
          texte: `Ce que gagnent ces tours est versé en bonus, et ce bonus doit être misé **${REWARDS.mise12} fois** avant de pouvoir être retiré (article 12.4). Par exemple, si vos ${m.chances} chances rapportent ${fr(GAIN_EXEMPLE)}, il faut miser ${fr(k.misesGain)} avant de toucher ces ${fr(GAIN_EXEMPLE)}.`
        },
        {
          type: 'p',
          texte:
            m.paliers.length === 1
              ? `Au 2e dépôt, le bonus est de ${k.p.pourcentage} % jusqu’à ${fr(k.p.plafond)}, avec la même mise de ${REWARDS.mise12} fois. Les bonus des dépôts suivants demandent ${REWARDS.mise3} fois. Détails et exemple chiffré : [le bonus ${m.nom}](${c.bonus}).`
              : `Les ${m.paliers.length} dépôts suivants rapportent jusqu’à ${fr(k.total)} de bonus. Le 2e dépôt (${k.p.pourcentage} % jusqu’à ${fr(k.p.plafond)}) garde la mise de ${REWARDS.mise12} fois ; à partir du 3e, elle passe à ${REWARDS.mise3} fois. Détails et exemple chiffré : [le bonus ${m.nom}](${c.bonus}).`
        }
      ]
    : [
        {
          type: 'p',
          texte: `${m.nom} n’offre pas de tours : son offre de bienvenue est un bonus sur chacun de vos ${m.paliers.length} premiers dépôts, jusqu’à ${fr(k.total)} au total.`
        },
        {
          type: 'p',
          texte: `Les bonus des 2 premiers dépôts (${m.paliers
            .slice(0, 2)
            .map((x) => `${x.pourcentage} % jusqu’à ${fr(x.plafond)}`)
            .join(', puis ')}) doivent être misés **${REWARDS.mise12} fois** (article 12.4) ; ceux des dépôts suivants, ${REWARDS.mise3} fois (article 12.5). Détails et exemple chiffré : [le bonus ${m.nom}](${c.bonus}).`
        }
      ];

  const avis: PageGuide = {
    ...base,
    modifie: m.verifie > MODIFIE_CONTENU ? m.verifie : MODIFIE_CONTENU,
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
            legende: `Conditions officielles relues le ${dateLongue(m.verifie)}.`,
            entetes: ['Point', 'Ce que disent les conditions officielles'],
            lignes: [
              ['Offre de bienvenue', offreFr(m)],
              [
                'Mise exigée',
                q
                  ? `**${REWARDS.mise12} fois** pour le bonus du 1er dépôt et les gains des tours gratuits, ${REWARDS.mise3} fois à partir du 3e dépôt`
                  : `**${REWARDS.mise12} fois** pour les bonus des 2 premiers dépôts, ${REWARDS.mise3} fois à partir du 3e`
              ],
              ['Jeux qui comptent pour la mise', 'Machines à sous : 100 %. Jeux de table et jeux en direct : 2 %'],
              ['Dépôt par Interac', faq ? (m.faqInterac === false ? 'Non cité dans la FAQ, qui renvoie à PayDirect Billing Solutions pour certains dépôts' : 'Mentionné dans la FAQ (traité par PayDirect Billing Solutions)') : 'Non mentionné : pas de FAQ sur les paiements'],
              [
                'Retrait',
                faq
                  ? `48 h d’attente, puis 1 à 10 jours ouvrables selon le moyen. Minimum ${fr(REWARDS.retraitMin)}`
                  : '48 h d’attente ; délais par moyen et minimum non publiés'
              ],
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
      {
        id: 'offre',
        titre: q
          ? `L’offre de bienvenue : jusqu’à ${q.toursMax} tours gratuits sur ${JOURS_TOURS} jours`
          : m.chances
          ? `L’offre de bienvenue : ${m.chances} chances pour ${fr(m.depot1!)}`
          : `L’offre de bienvenue : jusqu’à ${fr(k.total)} sur ${m.paliers.length} dépôts`,
        blocs: blocsOffre
      },
      {
        id: 'specificites',
        titre: `Ce qui distingue ${m.nom} des autres casinos du groupe`,
        blocs: [
          { type: 'liste', items: m.distinctionsFr },
          { type: 'p', texte: `Relevé sur la page d’accueil officielle de ${m.nom} le ${dateLongue(releveAccueil(m))}. Retraits, licence et règles du bonus sont communs au groupe : voir [Casino Rewards](${HUB_FR}).` }
        ]
      },
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
            texte: faq
              ? `Un retrait reste en attente 48 h, puis il est traité le jour ouvrable suivant. Il faut ensuite compter 1 à 3 jours ouvrables pour un portefeuille électronique, 2 à 3 pour un virement EFT en dollars canadiens, 3 pour une carte et 6 à 10 pour un virement bancaire direct. Le minimum est de ${fr(REWARDS.retraitMin)}. Délais par moyen, frais et plafonds, communs aux casinos du groupe : [Casino Rewards](${HUB_FR}).`
              : `Un retrait reste en attente 48 h, et vous pouvez l’annuler tant qu’il n’est pas traité. ${m.nom} ne publie ni délais par moyen de paiement ni minimum de retrait. Le virement bancaire direct coûte 50 $ (100 $ au-delà de 3 000 $). Ce que disent les conditions du groupe : [Casino Rewards](${HUB_FR}).`
          }
        ]
      },
      {
        id: 'licence',
        titre: 'Licence et exploitant',
        blocs: [
          {
            type: 'p',
            texte: `Les conditions indiquent une licence de la Kahnawake Gaming Commission (n° ${REWARDS.licence}) et le site renvoie vers un certificat eCOGRA. ${m.piedExploitant === false ? 'Le pied de page ne nomme pas d’exploitant' : `Le pied de page nomme ${REWARDS.exploitantFr}`} ; les conditions parlent d’une marque gérée par ${REWARDS.gestionnaire}. Les clauses à connaître, communes au groupe : [Casino Rewards](${HUB_FR}).`
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
              q
                ? `**Pour vous si** vous voulez une semaine de tours gratuits sur des machines à sous connues, dès ${fr(q.min.depot)}, et que vous pouvez vous connecter chaque jour, sans compter retirer les gains.`
                : m.chances
                ? `**Pour vous si** vous voulez tenter la roue à un million avec ${fr(m.depot1!)}, sans compter retirer le bonus.`
                : `**Pour vous si** vous voulez plus de crédit sur vos ${m.paliers.length} premiers dépôts, sans compter retirer le bonus.`,
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
        r: `Il faut miser ${REWARDS.mise12} fois les bonus des deux premiers dépôts. Avec un bonus de ${fr(k.p.plafond)} au ${rangFr(k.p.rang)}, cela fait au moins ${fr(k.misePlafond)} de mises. Voyez-le comme un divertissement, pas comme de l’argent à retirer.`
      },
      {
        q: `Combien de temps prend un retrait chez ${m.nom} ?`,
        r: faq
          ? '48 h d’attente, traitement le jour ouvrable suivant, puis 1 à 10 jours ouvrables selon le moyen choisi. Un premier retrait par un nouveau moyen peut demander jusqu’à 5 à 7 jours ouvrables de vérification.'
          : `Au moins 48 h d’attente. ${m.nom} ne publie pas les délais suivants : ses conditions disent seulement qu’ils varient selon les moyens de paiement et les banques.`
      },
      {
        q: `${m.nom} accepte-t-il Interac ?`,
        r: faq
          ? m.faqInterac === false
            ? 'Sa FAQ ne cite pas Interac parmi les moyens de dépôt ; elle renvoie aux conditions de PayDirect Billing Solutions pour certains dépôts. On retire notamment par virement EFT en dollars canadiens.'
            : 'Sa FAQ mentionne les dépôts Interac, traités par PayDirect Billing Solutions. Interac ne figure pas dans la liste des moyens de retrait : on retire notamment par virement EFT en dollars canadiens.'
          : `${m.nom} ne publie pas de FAQ sur les paiements et ses conditions ne mentionnent pas Interac. Vérifiez la page de dépôt avant de vous inscrire.`
      },
      {
        q: /^Casino /.test(m.nom) ? `${m.nom} est-il offert en français ?` : `${m.nom.replace(/ Casino$/, '')} Casino Rewards est-il offert en français ?`,
        r: `Oui : la page d’accueil officielle de ${m.nom} propose une version française (relevé du ${dateLongue(releveAccueil(m))}). Le programme de fidélité Casino Rewards est commun à tous les casinos du groupe.`
      },
      {
        q: `${m.nom} est-il fiable ?`,
        r: `Rien dans ce que nous avons lu n’indique le contraire : la licence de la Kahnawake Gaming Commission (n° ${REWARDS.licence}) ${m.piedExploitant === false ? 'et la société qui gère la marque sont publiées dans les conditions' : 'et l’exploitant sont publiés'}, et le site renvoie vers un certificat eCOGRA. Le vrai piège est ailleurs : le bonus à miser ${REWARDS.mise12} fois.`
      },
      ...(m.faqAvisFr ?? []),
      ...(m.faqAvisFr?.some((x) => /connecter/.test(x.q)) ? [] : [connexionFr(m)])
    ],
    connexes: [c.bonus, c.sansDepot, HUB_FR, '/casino-bonus-sans-depot/']
  };

  const bonus: PageGuide = {
    ...base,
    modifie: m.verifie > MODIFIE_CONTENU ? m.verifie : MODIFIE_CONTENU,
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
            legende: `Page bonus et conditions générales officielles, relues le ${dateLongue(m.verifie)}.`,
            entetes: ['Dépôt', 'Ce que vous recevez', 'Mise exigée'],
            lignes: q
              ? [
                  ...q.t.paliers.map((p) => [
                    `1er dépôt de ${trancheFr(p)}`,
                    `${fr(p.bonus)} de bonus + ${p.parJour} tours gratuits par jour pendant ${JOURS_TOURS} jours (${p.parJour * JOURS_TOURS} tours)`,
                    `${REWARDS.mise12} fois le bonus et les gains des tours`
                  ]),
                  ['Dépôts suivants', 'Selon les promotions du moment', `${REWARDS.mise12} fois au 2e dépôt, ${REWARDS.mise3} fois à partir du 3e`]
                ]
              : [
                  ...(m.chances ? [[`1er dépôt de ${fr(m.depot1!)}`, `${m.chances} tours sur la Mega Money Wheel, à 0,10 $ le tour`, `${REWARDS.mise12} fois les gains`]] : []),
                  ...m.paliers.map((p) => [rangFr(p.rang), `${p.pourcentage} % jusqu’à ${fr(p.plafond)}`, `${miseDe(p.rang)} fois`]),
                  [m.paliers.length === 1 ? '3e dépôt et suivants' : 'Dépôts suivants', 'Selon les promotions du moment', `${REWARDS.mise3} fois`]
                ]
          },
          ...(m.noteOffreFr ? [{ type: 'p' as const, texte: m.noteOffreFr }] : [])
        ]
      },
      ...(q
        ? [
            {
              id: 'jeux',
              titre: 'Les tours gratuits jour par jour',
              blocs: [
                {
                  type: 'tableau' as const,
                  legende: `Machine à sous imposée chaque jour, d’après les conditions générales (article 11.4.5), relues le ${dateLongue(m.verifie)}.`,
                  entetes: ['Jour', 'Machine à sous'],
                  lignes: q.t.jeux.map((j, i) => [`Jour ${i + 1}${i === 0 ? ' (jour du 1er dépôt)' : ''}`, j])
                },
                {
                  type: 'p' as const,
                  texte: `Les tours d’un jour se jouent ce jour-là, sur cette machine. Si vous ne vous connectez pas un jour, ses tours sont perdus (article 11.5) : sur ${q.toursMax} tours annoncés, vous ne recevrez que ceux des jours où vous vous connectez. Les conditions que nous avons lues ne donnent pas la valeur d’un tour.`
                }
              ]
            }
          ]
        : []),
      {
        id: 'exemple',
        titre: 'L’exemple chiffré',
        blocs: [
          {
            type: 'liste',
            items: [
              ...(q
                ? [`**Les tours gratuits** : leurs gains sont versés en bonus. S’ils rapportent ${fr(GAIN_EXEMPLE)}, il faut miser ${fr(q.misesGain)} avant de pouvoir retirer.`]
                : m.chances
                ? [`**Les ${m.chances} chances** : si elles rapportent ${fr(GAIN_EXEMPLE)}, il faut miser ${fr(k.misesGain)} avant de pouvoir retirer.`]
                : []),
              `**Le ${rangFr(k.p.rang)}** : avec le bonus maximum de ${fr(k.p.plafond)}, il faut miser **${fr(k.misePlafond)}** si la mise porte sur le bonus seul, ${fr(k.misePlafondTotal)} si elle porte sur le dépôt et le bonus. Les conditions ne le précisent pas.`,
              `**La perte moyenne** : avec un taux de retour de 96 %, miser ${fr(k.misePlafond)} coûte en moyenne ${fr(k.pertePlafond)}, soit bien plus que les ${fr(k.p.plafond)} de bonus.`
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
              `**Jeux** : les machines à sous comptent à 100 % ; les jeux de table, de salon et en direct à 2 % (articles ${a.jeux[0]} et ${a.jeux[1]}).`,
              ...(q
                ? [
                    '**Connexion chaque jour** : les tours ne sont crédités que les jours où vous vous connectez, et ceux du jour sont perdus s’ils ne sont pas joués le jour même (article 11.5).',
                    '**Un seul dépôt compte** : le bonus et le nombre de tours sont fixés par votre 1er dépôt uniquement (article 11.3).'
                  ]
                : []),
              '**Grosse mise** : une mise égale à 25 % du bonus ou plus, avant la fin de la mise exigée, est traitée comme du jeu irrégulier et peut faire perdre les gains (article 13.16.1).',
              `**Délai pour réclamer** : l’offre de bienvenue doit être activée par un 1er dépôt dans les 7 jours suivant l’inscription (article ${art}).`,
              '**Expiration** : un bonus inutilisé pendant plus de 60 jours depuis l’inscription est perdu (article 13.7).',
              `**Argent réel et bonus** : les mises faites avec votre argent et avec le bonus comptent toutes pour la mise exigée (article ${a.argent}).`
            ]
          }
        ]
      },
      {
        id: 'code',
        titre: `Code bonus ${m.nom} : faut-il un code promo ?`,
        blocs: [
          {
            type: 'p',
            texte: `Non. La page bonus officielle, relue le ${dateLongue(m.verifie)}, ne demande aucun code : l’offre de bienvenue s’active avec le 1er dépôt, dans les 7 jours suivant l’inscription.`
          },
          {
            type: 'p',
            texte: q
              ? `Les tours gratuits de ${m.nom} ne se jouent pas sur un jeu au choix : chaque jour a sa machine à sous imposée (tableau ci-dessus). Leur nombre dépend du 1er dépôt : ${q.toursMin} tours dès ${fr(q.min.depot)}, ${q.toursMax} dès ${fr(q.max.depot)}.`
              : m.chances
              ? `Les ${m.chances} chances sont des tours sur la Mega Money Wheel, à 0,10 $ le tour, pas des tours gratuits sur une machine à sous au choix. Elles demandent un dépôt de ${fr(m.depot1!)}.`
              : `L’offre de bienvenue de ${m.nom} ne comprend pas de tours gratuits : elle se compose de ${m.paliers.length} bonus de dépôt, jusqu’à ${fr(k.total)} au total.`
          },
          {
            type: 'p',
            texte: `Les « codes » et « liens bonus » annoncés sur d’autres sites ou des forums ne remplacent pas l’offre officielle : vérifiez toujours sur la page bonus du casino (lien dans les sources). Une fois inscrit, les promotions arrivent dans votre compte et par courriel, avec le [programme Casino Rewards](${HUB_FR}).`
          }
        ]
      },
      {
        id: 'comparaison',
        titre: 'Comparé aux bonus de nos casinos',
        blocs: [tableauMiseFr(m), { type: 'offres', casinos: TOP3, titre: 'Des bonus plus faciles à débloquer' }]
      }
    ],
    faq: q
      ? [
          {
            q: `Les ${q.toursMax} tours gratuits de ${m.nom} sont-ils vraiment gratuits ?`,
            r: `Non : il faut un 1er dépôt. ${fr(q.min.depot)} donnent ${q.toursMin} tours (${q.min.parJour} par jour) ; il faut ${fr(q.max.depot)} ou plus pour en recevoir ${q.toursMax}. Leurs gains sont versés en bonus, à miser ${REWARDS.mise12} fois.`
          },
          {
            q: `Peut-on retirer les gains des tours gratuits de ${m.nom} ?`,
            r: `Oui, mais seulement après avoir misé ${REWARDS.mise12} fois ces gains, sur des jeux qui comptent pour la mise. Avec ${fr(GAIN_EXEMPLE)} de gains, cela fait ${fr(q.misesGain)} de mises.`
          },
          {
            q: `Que se passe-t-il si je ne me connecte pas un jour ?`,
            r: 'Vous perdez les tours de ce jour-là : ils ne sont crédités que les jours où vous vous connectez, et doivent être joués le jour même (article 11.5 des conditions).'
          },
          {
            q: `Y a-t-il un code promo ${m.nom} ?`,
            r: 'La page bonus officielle n’en demande aucun : l’offre s’active avec le dépôt. Méfiez-vous des codes annoncés ailleurs et vérifiez toujours sur la page officielle.'
          }
        ]
      : m.chances
      ? [
          {
            q: `Les ${m.chances} chances de ${m.nom} sont-elles gratuites ?`,
            r: `Non : elles demandent un 1er dépôt de ${fr(m.depot1!)}, et leurs gains doivent être misés ${REWARDS.mise12} fois.`
          },
          {
            q: `Peut-on retirer les gains des ${m.chances} chances ?`,
            r: `Oui, mais seulement après avoir misé ${REWARDS.mise12} fois ces gains, sur des jeux qui comptent pour la mise. Avec ${fr(GAIN_EXEMPLE)} de gains, cela fait ${fr(k.misesGain)} de mises.`
          },
          {
            q: `Y a-t-il un code promo ${m.nom} ?`,
            r: 'La page bonus officielle n’en demande aucun : l’offre s’active avec le dépôt. Méfiez-vous des codes annoncés ailleurs et vérifiez toujours sur la page officielle.'
          }
        ]
      : [
          {
            q: `Le bonus de bienvenue de ${m.nom} est-il de ${fr(k.p.plafond)} ou de ${fr(k.total)} ?`,
            r: `Le premier bonus va jusqu’à ${fr(k.p.plafond)} ; l’ensemble des ${m.paliers.length} bonus de dépôt va jusqu’à ${fr(k.total)} : ${m.paliers.map((x) => `${x.pourcentage} % jusqu’à ${fr(x.plafond)}`).join(', ')}.`
          },
          {
            q: `Peut-on retirer le bonus de ${m.nom} ?`,
            r: `Oui, après l’avoir misé ${REWARDS.mise12} fois pour les 2 premiers dépôts, ou ${REWARDS.mise3} fois pour les suivants, sur des jeux qui comptent pour la mise.`
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
            texte: q
              ? `**Non.** ${m.nom} n’affiche aucun bonus sans dépôt sur ses pages officielles, ni tours gratuits sans dépôt. Ses tours gratuits demandent un 1er dépôt : ${fr(q.min.depot)} pour ${q.toursMin} tours, ${fr(q.max.depot)} ou plus pour ${q.toursMax}, et leurs gains doivent être misés ${REWARDS.mise12} fois.`
              : m.chances
              ? `**Non.** ${m.nom} n’affiche aucun bonus sans dépôt sur ses pages officielles. Son offre la plus proche demande un dépôt de ${fr(m.depot1!)} : ${m.chances} tours sur la roue Mega Money Wheel, dont les gains doivent être misés ${REWARDS.mise12} fois.`
              : `**Non.** ${m.nom} n’affiche aucun bonus sans dépôt sur ses pages officielles. Son offre la plus proche demande un dépôt : ${k.p.pourcentage} % jusqu’à ${fr(k.p.plafond)} au 1er dépôt, à miser ${REWARDS.mise12} fois.`
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
        titre: q
          ? `Pourquoi les ${q.toursMax} tours gratuits ne sont pas un bonus sans dépôt`
          : m.chances
          ? `Pourquoi les ${m.chances} chances ne sont pas un bonus sans dépôt`
          : 'Pourquoi le bonus du 1er dépôt n’en est pas un',
        blocs: [
          {
            type: 'liste',
            items: q
              ? [
                  `Ils demandent un 1er dépôt d’au moins ${fr(q.min.depot)}, à faire dans les 7 jours suivant l’inscription (article ${art}).`,
                  `Il faut se connecter chaque jour pendant ${JOURS_TOURS} jours pour les recevoir, et les jouer le jour même.`,
                  `Leurs gains sont versés en bonus, à miser ${REWARDS.mise12} fois : ${fr(GAIN_EXEMPLE)} de gains demandent ${fr(q.misesGain)} de mises.`,
                  'Un bonus inutilisé pendant plus de 60 jours depuis l’inscription est perdu.'
                ]
              : m.chances
              ? [
                  `Elles demandent un 1er dépôt de ${fr(m.depot1!)}, à faire dans les 7 jours suivant l’inscription.`,
                  `Leurs gains sont versés en bonus, à miser ${REWARDS.mise12} fois : ${fr(GAIN_EXEMPLE)} de gains demandent ${fr(k.misesGain)} de mises.`,
                  'Un bonus inutilisé pendant plus de 60 jours depuis l’inscription est perdu.'
                ]
              : [
                  'Il faut déposer, dans les 7 jours suivant l’inscription.',
                  `Le bonus doit être misé ${REWARDS.mise12} fois : un bonus de ${fr(k.bonus100)} demande ${fr(k.miseBonus100)} de mises.`,
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
              [`**${m.nom}**`, m.depot1 ? fr(m.depot1) : 'Non publié', offreCourteFr(m)],
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
        r: q
          ? `Pas d’après ses pages officielles. Ses tours gratuits demandent un 1er dépôt : ${q.toursMin} tours dès ${fr(q.min.depot)}, ${q.toursMax} dès ${fr(q.max.depot)}.`
          : m.chances
          ? `Pas d’après ses pages officielles. Les ${m.chances} chances demandent un dépôt de ${fr(m.depot1!)}.`
          : `Non. L’offre de bienvenue de ${m.nom} ne comprend pas de tours, seulement des bonus de dépôt.`
      },
      {
        q: `Quel est le plus petit dépôt chez ${m.nom} ?`,
        r: m.depot1
          ? `L’offre de bienvenue démarre avec un dépôt de ${fr(m.depot1)}.${faq ? ` Pour retirer, le minimum est de ${fr(REWARDS.retraitMin)}.` : ''}`
          : `La page bonus ne l’indique pas.${faq ? ` Pour retirer, le minimum est de ${fr(REWARDS.retraitMin)}.` : ''}`
      }
    ],
    connexes: [c.avis, c.bonus, '/casino-bonus-sans-depot/', '/casino-depot-minimum/']
  };

  return [avis, bonus, sansDepot];
}

/* =====================================================================
   ENGLISH
   ===================================================================== */

function pagesEn(m: MarqueRewards): PageGuide[] {
  const c = chemins(m).en;
  const k = chiffres(m);
  const t = m.en;
  const faq = avecFaq(m);
  const parent = { nom: `${m.nom} review`, chemin: c.avis };
  const titreTop = `Before ${m.nom}: our 3 top-rated casinos`;
  const base = { modifie: m.verifie, titreTop, sources: m.sourcesEn };
  const art = m.articleReclamer ?? '11.8';
  const a = m.articles ?? ARTICLES_COMMUNS;
  const q = m.tours ? tours(m) : null;

  const blocsOffre: SectionGuide['blocs'] = q
    ? [
        {
          type: 'p',
          texte: `${m.nom} gives no chances on the Mega Money Wheel: its welcome offer is free spins every day for your first ${JOURS_TOURS} days, plus a bonus on your first deposit. The number of spins and the bonus depend on the size of that deposit (section 11.4).`
        },
        {
          type: 'tableau',
          legende: `Official terms and bonus page, read on ${dateEn(m.verifie)}.`,
          entetes: ['First deposit', 'Bonus', 'Free spins'],
          lignes: q.t.paliers.map((p) => [trancheEn(p), enM(p.bonus), `${p.parJour} a day for ${JOURS_TOURS} days, so **${p.parJour * JOURS_TOURS}**`])
        },
        {
          type: 'p',
          texte: `**The spins do not all land at once.** You must log in every day: spins are only credited on the days you log in, and each day’s spins are forfeited if not played that day (section 11.5). Each day has its own set slot, from ${q.t.jeux[0]} on day 1 to ${q.t.jeux[q.t.jeux.length - 1]} on day ${JOURS_TOURS}.`
        },
        {
          type: 'p',
          texte: `Spin winnings are paid as bonus funds (section 12.7) and, like the first deposit bonus, they must be wagered **${REWARDS.mise12} times** before they can be withdrawn (section 12.5). For example, if your spins pay ${enM(GAIN_EXEMPLE)}, you must wager ${enM(q.misesGain)} before you can cash out those ${enM(GAIN_EXEMPLE)}. The day-by-day games and a worked example: [the ${m.nom} bonus](${c.bonus}).`
        }
      ]
    : m.chances
    ? [
        {
          type: 'p',
          texte: `A first deposit of ${enM(m.depot1!)} gives ${m.chances} spins on the Mega Money Wheel, at $0.10 per spin according to the terms (section 11.4). The top prize is one million dollars, but the terms we read do not give the odds of winning it.`
        },
        {
          type: 'p',
          texte: `Winnings from these spins are paid as bonus funds, which must be wagered **${REWARDS.mise12} times** before they can be withdrawn (section 12.4). For example, if your ${m.chances} chances pay ${enM(GAIN_EXEMPLE)}, you must wager ${enM(k.misesGain)} before you can cash out those ${enM(GAIN_EXEMPLE)}.`
        },
        {
          type: 'p',
          texte:
            m.paliers.length === 1
              ? `The 2nd deposit bonus is ${k.p.pourcentage}% up to ${enM(k.p.plafond)}, with the same ${REWARDS.mise12}x wagering. Later deposit bonuses require ${REWARDS.mise3}x. Details and a worked example: [the ${m.nom} bonus](${c.bonus}).`
              : `The next ${m.paliers.length} deposits pay up to ${enM(k.total)} in bonuses. The 2nd deposit (${k.p.pourcentage}% up to ${enM(k.p.plafond)}) keeps the ${REWARDS.mise12}x wagering; from the 3rd deposit it drops to ${REWARDS.mise3}x. Details and a worked example: [the ${m.nom} bonus](${c.bonus}).`
        }
      ]
    : [
        {
          type: 'p',
          texte: `${m.nom} gives no spins: its welcome offer is a bonus on each of your first ${m.paliers.length} deposits, up to ${enM(k.total)} in total.`
        },
        {
          type: 'p',
          texte: `The first two deposit bonuses (${m.paliers
            .slice(0, 2)
            .map((x) => `${x.pourcentage}% up to ${enM(x.plafond)}`)
            .join(', then ')}) must be wagered **${REWARDS.mise12} times** (section 12.4); later ones ${REWARDS.mise3} times (section 12.5). Details and a worked example: [the ${m.nom} bonus](${c.bonus}).`
        }
      ];

  const avis: PageGuide = {
    ...base,
    modifie: m.verifie > MODIFIE_CONTENU ? m.verifie : MODIFIE_CONTENU,
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
            legende: `Official terms read on ${dateEn(m.verifie)}.`,
            entetes: ['Item', 'What the official terms say'],
            lignes: [
              ['Welcome offer', offreEn(m)],
              [
                'Wagering',
                q
                  ? `**${REWARDS.mise12}x** on the first deposit bonus and free spin winnings, ${REWARDS.mise3}x from the 3rd deposit`
                  : `**${REWARDS.mise12}x** on the first two deposit bonuses, ${REWARDS.mise3}x from the 3rd deposit`
              ],
              ['Game weighting', 'Slots: 100%. Table and live games: 2%'],
              ['Interac deposits', faq ? (m.faqInterac === false ? 'Not named in the FAQ, which refers to PayDirect Billing Solutions for some deposits' : 'Mentioned in the FAQ (processed by PayDirect Billing Solutions)') : 'Not mentioned: no payment FAQ'],
              [
                'Withdrawals',
                faq ? `48-hour pending period, then 1 to 10 business days by method. Minimum ${enM(REWARDS.retraitMin)}` : '48-hour pending period; times by method and minimum not published'
              ],
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
        titre: q
          ? `The welcome offer: up to ${q.toursMax} free spins over ${JOURS_TOURS} days`
          : m.chances
          ? `The welcome offer: ${m.chances} chances for ${enM(m.depot1!)}`
          : `The welcome offer: up to ${enM(k.total)} over ${m.paliers.length} deposits`,
        blocs: blocsOffre
      },
      {
        id: 'what-sets-it-apart',
        titre: `What sets ${m.nom} apart within the group`,
        blocs: [
          { type: 'liste', items: m.distinctionsEn },
          { type: 'p', texte: `Taken from the ${m.nom} official home page on ${dateEn(releveAccueil(m))}. Withdrawals, licence and bonus rules are shared across the group: see [Casino Rewards](${HUB_EN}).` }
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
            texte: faq
              ? `A withdrawal stays pending for 48 hours, then it is processed on the next business day. After that, allow 1 to 3 business days for e-wallets, 2 to 3 for a CAD EFT transfer, 3 for a card and 6 to 10 for a direct bank transfer. The minimum is ${enM(REWARDS.retraitMin)}. Times by method, fees and limits shared by the group’s casinos: [Casino Rewards](${HUB_EN}).`
              : `A withdrawal stays pending for 48 hours, and you can reverse it until it is processed. ${m.nom} publishes no times by payment method and no minimum withdrawal. A direct bank transfer costs $50 ($100 above $3,000). What the group’s terms say: [Casino Rewards](${HUB_EN}).`
          }
        ]
      },
      {
        id: 'licence',
        titre: 'Licence and operator',
        blocs: [
          {
            type: 'p',
            texte: `The terms state a Kahnawake Gaming Commission licence (no. ${REWARDS.licence}) and the site links to an eCOGRA certificate. ${m.piedExploitant === false ? 'The footer names no operator' : `The footer names ${REWARDS.exploitantEn}`}; the terms describe a brand managed by ${REWARDS.gestionnaire}. The clauses to know, shared by the group: [Casino Rewards](${HUB_EN}).`
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
              q
                ? `**Good for you if** you want a week of free spins on well-known slots, from ${enM(q.min.depot)}, and can log in every day, without expecting to cash out the winnings.`
                : m.chances
                ? `**Good for you if** you want to try the million-dollar wheel for ${enM(m.depot1!)}, without expecting to cash out the bonus.`
                : `**Good for you if** you want more credit on your first ${m.paliers.length} deposits, without expecting to cash out the bonus.`,
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
        r: `The first two deposit bonuses must be wagered ${REWARDS.mise12} times. With a ${enM(k.p.plafond)} bonus on the ${rangEn(k.p.rang)}, that is at least ${enM(k.misePlafond)} in wagers. Treat it as entertainment, not as money to withdraw.`
      },
      {
        q: `How long does a ${m.nom} withdrawal take?`,
        r: faq
          ? '48 hours pending, processing on the next business day, then 1 to 10 business days depending on the method. A first withdrawal with a new method can take up to 5 to 7 business days of checks.'
          : `At least 48 hours pending. ${m.nom} does not publish the next delays: its terms only say they vary by payment method and bank.`
      },
      {
        q: `Does ${m.nom} accept Interac?`,
        r: faq
          ? m.faqInterac === false
            ? 'Its FAQ does not name Interac among deposit methods; it refers to PayDirect Billing Solutions terms for some deposits. Canadian players can withdraw by CAD EFT transfer, among other options.'
            : 'Its FAQ mentions Interac deposits, processed by PayDirect Billing Solutions. Interac is not listed as a withdrawal method: Canadian players can withdraw by CAD EFT transfer, among other options.'
          : `${m.nom} publishes no payment FAQ and its terms do not mention Interac. Check the deposit page before signing up.`
      },
      {
        q: `Is ${m.nom} available in French?`,
        r: `Yes: the ${m.nom} official home page offers a French version (checked on ${dateEn(releveAccueil(m))}). The Casino Rewards loyalty program is shared by all the group’s casinos.`
      },
      {
        q: `Is ${m.nom} legit?`,
        r: `Nothing we read suggests otherwise: the Kahnawake Gaming Commission licence (no. ${REWARDS.licence}) and ${m.piedExploitant === false ? 'the company managing the brand are named in the terms' : 'the operator are published'}, and the site links to an eCOGRA certificate. The real catch is elsewhere: the ${REWARDS.mise12}x bonus wagering.`
      },
      ...(m.faqAvisEn ?? []),
      ...(m.faqAvisEn?.some((x) => /log in/i.test(x.q)) ? [] : [connexionEn(m)])
    ],
    connexes: [c.bonus, c.sansDepot, HUB_EN, '/en-ca/casino-bonuses/']
  };

  const bonus: PageGuide = {
    ...base,
    modifie: m.verifie > MODIFIE_CONTENU ? m.verifie : MODIFIE_CONTENU,
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
            legende: `Official bonus page and terms, read on ${dateEn(m.verifie)}.`,
            entetes: ['Deposit', 'What you get', 'Wagering'],
            lignes: q
              ? [
                  ...q.t.paliers.map((p) => [
                    `1st deposit of ${trancheEn(p)}`,
                    `${enM(p.bonus)} bonus + ${p.parJour} free spins a day for ${JOURS_TOURS} days (${p.parJour * JOURS_TOURS} spins)`,
                    `${REWARDS.mise12}x the bonus and spin winnings`
                  ]),
                  ['Later deposits', 'Depends on current promotions', `${REWARDS.mise12}x on the 2nd deposit, ${REWARDS.mise3}x from the 3rd`]
                ]
              : [
                  ...(m.chances ? [[`1st deposit of ${enM(m.depot1!)}`, `${m.chances} spins on the Mega Money Wheel at $0.10 per spin`, `${REWARDS.mise12}x the winnings`]] : []),
                  ...m.paliers.map((p) => [rangEn(p.rang), `${p.pourcentage}% up to ${enM(p.plafond)}`, `${miseDe(p.rang)}x`]),
                  [m.paliers.length === 1 ? '3rd deposit and later' : 'Later deposits', 'Depends on current promotions', `${REWARDS.mise3}x`]
                ]
          },
          ...(m.noteOffreEn ? [{ type: 'p' as const, texte: m.noteOffreEn }] : [])
        ]
      },
      ...(q
        ? [
            {
              id: 'daily-games',
              titre: 'The free spins, day by day',
              blocs: [
                {
                  type: 'tableau' as const,
                  legende: `Set slot for each day, according to the terms (section 11.4.5), read on ${dateEn(m.verifie)}.`,
                  entetes: ['Day', 'Slot'],
                  lignes: q.t.jeux.map((j, i) => [`Day ${i + 1}${i === 0 ? ' (first deposit day)' : ''}`, j])
                },
                {
                  type: 'p' as const,
                  texte: `Each day’s spins are played that day, on that slot. If you do not log in on a given day, its spins are lost (section 11.5): out of the ${q.toursMax} spins advertised, you only get those of the days you log in. The terms we read do not give the value of a spin.`
                }
              ]
            }
          ]
        : []),
      {
        id: 'example',
        titre: 'A worked example',
        blocs: [
          {
            type: 'liste',
            items: [
              ...(q
                ? [`**The free spins**: their winnings are paid as bonus funds. If they pay ${enM(GAIN_EXEMPLE)}, you must wager ${enM(q.misesGain)} before you can withdraw.`]
                : m.chances
                ? [`**The ${m.chances} chances**: if they pay ${enM(GAIN_EXEMPLE)}, you must wager ${enM(k.misesGain)} before you can withdraw.`]
                : []),
              `**The ${rangEn(k.p.rang)}**: with the maximum ${enM(k.p.plafond)} bonus, you must wager **${enM(k.misePlafond)}** if wagering applies to the bonus only, ${enM(k.misePlafondTotal)} if it applies to deposit and bonus. The terms do not say which.`,
              `**The average cost**: at a 96% return to player, wagering ${enM(k.misePlafond)} costs ${enM(k.pertePlafond)} on average, far more than the ${enM(k.p.plafond)} bonus.`
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
              `**Games**: slots count 100%; table, parlour and live games count 2% (sections ${a.jeux[0]} and ${a.jeux[1]}).`,
              ...(q
                ? [
                    '**Log in every day**: spins are only credited on the days you log in, and each day’s spins are forfeited if not played that day (section 11.5).',
                    '**Only one deposit counts**: the bonus and the number of spins are set by your first deposit only (section 11.3).'
                  ]
                : []),
              '**Large bets**: a single bet of 25% of the bonus or more before wagering is complete is treated as irregular play and can void winnings (section 13.16.1).',
              `**Claim window**: the welcome offer must be activated with a first deposit within 7 days of registration (section ${art}).`,
              '**Expiry**: a bonus left unused for more than 60 days from registration is forfeited (section 13.7).',
              `**Cash and bonus**: wagers from both your cash and bonus balances count towards wagering (section ${a.argent}).`
            ]
          }
        ]
      },
      {
        id: 'bonus-code',
        titre: `${m.nom} bonus code and promo code`,
        blocs: [
          {
            type: 'p',
            texte: `You do not need one. The official bonus page, checked on ${dateEn(m.verifie)}, asks for no code: the welcome offer is triggered by your first deposit, within 7 days of registration.`
          },
          {
            type: 'p',
            texte: q
              ? `The ${m.nom} free spins are not played on a game of your choice: each day has its own set slot (table above). Their number depends on your first deposit: ${q.toursMin} spins from ${enM(q.min.depot)}, ${q.toursMax} from ${enM(q.max.depot)}.`
              : m.chances
              ? `The ${m.chances} chances are spins on the Mega Money Wheel at $0.10 each, not free spins on a slot of your choice. They require a ${enM(m.depot1!)} deposit.`
              : `The ${m.nom} welcome offer includes no free spins: it is made of ${m.paliers.length} deposit bonuses, up to ${enM(k.total)} in total.`
          },
          {
            type: 'p',
            texte: `“Codes” and “bonus links” posted on other sites or forums do not replace the official offer: always check the casino’s bonus page (linked in the sources). Once registered, promotions arrive in your account and by email through the [Casino Rewards program](${HUB_EN}).`
          }
        ]
      },
      {
        id: 'comparison',
        titre: 'Compared with our casinos’ bonuses',
        blocs: [tableauMiseEn(m), { type: 'offres', casinos: TOP3, titre: 'Bonuses that are easier to clear' }]
      }
    ],
    faq: q
      ? [
          {
            q: `Are the ${q.toursMax} ${m.nom} free spins really free?`,
            r: `No: they require a first deposit. ${enM(q.min.depot)} gets you ${q.toursMin} spins (${q.min.parJour} a day); you need ${enM(q.max.depot)} or more to get ${q.toursMax}. Their winnings are paid as bonus funds, with ${REWARDS.mise12}x wagering.`
          },
          {
            q: `Can you withdraw ${m.nom} free spin winnings?`,
            r: `Yes, but only after wagering those winnings ${REWARDS.mise12} times on eligible games. ${enM(GAIN_EXEMPLE)} of winnings means ${enM(q.misesGain)} in wagers.`
          },
          {
            q: 'What happens if I do not log in one day?',
            r: 'You lose that day’s spins: they are only credited on the days you log in, and must be played the same day (section 11.5 of the terms).'
          },
          {
            q: `Is there a ${m.nom} promo code?`,
            r: 'The official bonus page asks for none: the offer is triggered by the deposit. Be careful with codes advertised elsewhere and always check the official page.'
          }
        ]
      : m.chances
      ? [
          {
            q: `Are the ${m.chances} ${m.nom} chances free?`,
            r: `No: they require a first deposit of ${enM(m.depot1!)}, and their winnings must be wagered ${REWARDS.mise12} times.`
          },
          {
            q: `Can you withdraw winnings from the ${m.chances} chances?`,
            r: `Yes, but only after wagering those winnings ${REWARDS.mise12} times on eligible games. ${enM(GAIN_EXEMPLE)} of winnings means ${enM(k.misesGain)} in wagers.`
          },
          {
            q: `Is there a ${m.nom} promo code?`,
            r: 'The official bonus page asks for none: the offer is triggered by the deposit. Be careful with codes advertised elsewhere and always check the official page.'
          }
        ]
      : [
          {
            q: `Is the ${m.nom} welcome bonus ${enM(k.p.plafond)} or ${enM(k.total)}?`,
            r: `The first bonus goes up to ${enM(k.p.plafond)}; all ${m.paliers.length} deposit bonuses together go up to ${enM(k.total)}: ${m.paliers.map((x) => `${x.pourcentage}% up to ${enM(x.plafond)}`).join(', ')}.`
          },
          {
            q: `Can you withdraw the ${m.nom} bonus?`,
            r: `Yes, after wagering it ${REWARDS.mise12} times for the first two deposits, or ${REWARDS.mise3} times for later ones, on eligible games.`
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
            texte: q
              ? `**No.** ${m.nom} shows no no deposit bonus and no no deposit free spins on its official pages. Its free spins require a first deposit: ${enM(q.min.depot)} for ${q.toursMin} spins, ${enM(q.max.depot)} or more for ${q.toursMax}, with winnings to be wagered ${REWARDS.mise12} times.`
              : m.chances
              ? `**No.** ${m.nom} shows no no-deposit bonus on its official pages. The closest offer requires a ${enM(m.depot1!)} deposit: ${m.chances} spins on the Mega Money Wheel, with winnings to be wagered ${REWARDS.mise12} times.`
              : `**No.** ${m.nom} shows no no-deposit bonus on its official pages. The closest offer requires a deposit: ${k.p.pourcentage}% up to ${enM(k.p.plafond)} on the first deposit, with ${REWARDS.mise12}x wagering.`
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
        titre: q
          ? `Why the ${q.toursMax} free spins are not a no deposit bonus`
          : m.chances
          ? `Why the ${m.chances} chances are not a no deposit bonus`
          : 'Why the first deposit bonus is not one',
        blocs: [
          {
            type: 'liste',
            items: q
              ? [
                  `They require a first deposit of at least ${enM(q.min.depot)}, made within 7 days of registration (section ${art}).`,
                  `You must log in every day for ${JOURS_TOURS} days to receive them, and play them the same day.`,
                  `Their winnings are paid as bonus funds with ${REWARDS.mise12}x wagering: ${enM(GAIN_EXEMPLE)} of winnings means ${enM(q.misesGain)} in wagers.`,
                  'A bonus left unused for more than 60 days from registration is forfeited.'
                ]
              : m.chances
              ? [
                  `They require a first deposit of ${enM(m.depot1!)}, made within 7 days of registration.`,
                  `Their winnings are paid as bonus funds with ${REWARDS.mise12}x wagering: ${enM(GAIN_EXEMPLE)} of winnings means ${enM(k.misesGain)} in wagers.`,
                  'A bonus left unused for more than 60 days from registration is forfeited.'
                ]
              : [
                  'You must deposit, within 7 days of registration.',
                  `The bonus must be wagered ${REWARDS.mise12} times: a ${enM(k.bonus100)} bonus means ${enM(k.miseBonus100)} in wagers.`,
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
              [`**${m.nom}**`, m.depot1 ? enM(m.depot1) : 'Not published', offreCourteEn(m)],
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
        r: q
          ? `Not according to its official pages. Its free spins require a first deposit: ${q.toursMin} spins from ${enM(q.min.depot)}, ${q.toursMax} from ${enM(q.max.depot)}.`
          : m.chances
          ? `Not according to its official pages. The ${m.chances} chances require a ${enM(m.depot1!)} deposit.`
          : `No. The ${m.nom} welcome offer includes no spins, only deposit bonuses.`
      },
      {
        q: `What is the smallest deposit at ${m.nom}?`,
        r: m.depot1
          ? `The welcome offer starts with a ${enM(m.depot1)} deposit.${faq ? ` The minimum withdrawal is ${enM(REWARDS.retraitMin)}.` : ''}`
          : `The bonus page does not say.${faq ? ` The minimum withdrawal is ${enM(REWARDS.retraitMin)}.` : ''}`
      }
    ],
    connexes: [c.avis, c.bonus, '/en-ca/casino-bonuses/', '/en-ca/minimum-deposit-casinos/']
  };

  return [avis, bonus, sansDepot];
}

/* =====================================================================
   PAGE DU GROUPE CASINO REWARDS (français et anglais)
   ===================================================================== */

const NOMS = MARQUES.map((m) => m.nom);
const AVEC_FAQ = MARQUES.filter(avecFaq).map((m) => m.nom);
const SANS_FAQ = MARQUES.filter((m) => !avecFaq(m)).map((m) => m.nom);
const SANS_PIED = MARQUES.filter((m) => m.piedExploitant === false).map((m) => m.nom);
const AVEC_INTERAC = MARQUES.filter((m) => avecFaq(m) && m.faqInterac !== false).map((m) => m.nom);
const PLURIEL_SANS_FAQ = SANS_FAQ.length > 1;
const VERIFIE = YUKON.verifie;
const SOURCES_PROGRAMME = [
  { titre: 'Casino Rewards : FAQ officielle (points VIP, statuts, offre d’inscription)', url: 'https://www.casinorewards.com/en/faq/' },
  { titre: 'Casino Rewards : programme de fidélité', url: 'https://www.casinorewards.com/en/loyalty/' },
  { titre: 'Casino Rewards : programme VIP (reconnaissance du statut, avantages)', url: 'https://www.casinorewards.com/en/vip-program/' }
];
const SOURCES_PROGRAMME_EN = [
  { titre: 'Casino Rewards: official FAQ (VIP points, status levels, sign-up offer)', url: 'https://www.casinorewards.com/en/faq/' },
  { titre: 'Casino Rewards: loyalty program', url: 'https://www.casinorewards.com/en/loyalty/' },
  { titre: 'Casino Rewards: VIP program (status match, benefits)', url: 'https://www.casinorewards.com/en/vip-program/' }
];
const SUPPORT_FR: Record<string, string> = {
  'Yukon Gold': 'Clavardage et courriel, annoncés jour et nuit',
  Zodiac: 'Annoncé 24 h sur 24 (canaux non précisés)',
  'Luxury Casino': 'Non précisé sur la page d’accueil',
  'Captain Cooks': 'Clavardage 24 h sur 24',
  'Grand Mondial': 'Téléphone, courriel et clavardage, 24 h sur 24',
  'Golden Tiger': 'Clavardage 24 h sur 24',
  'Casino Classic': 'Clavardage 24 h sur 24',
  Villento: 'Courriel et clavardage, 24 h sur 24',
  'Casino Action': 'Téléphone et courriel, 24 h sur 24 (FAQ)',
  'Quatro Casino': 'Téléphone et courriel, 24 h sur 24 (FAQ)'
};
const MODIFIE_HUB = '2026-11-16';

function hubFr(): PageGuide {
  return {
    chemin: HUB_FR,
    nomFil: 'Casino Rewards',
    titre: 'Casino Rewards en français : avis, VIP et bonus sans dépôt',
    description: `Casino Rewards au Canada : ${MARQUES.length} casinos du groupe en français, points VIP et statuts, bonus sans dépôt, mise de ${REWARDS.mise12} fois et retraits. Conditions lues.`,
    h1: 'Casino Rewards : avis, programme VIP et casinos en français',
    chapeau: `${listeFr(NOMS)} font partie du même groupe, Casino Rewards, et partagent les mêmes conditions générales. Nous les avons lues ligne par ligne. Le point commun qui pèse le plus : les bonus des deux premiers dépôts doivent être misés ${REWARDS.mise12} fois.`,
    modifie: MODIFIE_HUB,
    titreTop: 'Avant Casino Rewards : nos 3 casinos les mieux notés',
    resume: `Retraits, mise de ${REWARDS.mise12} fois, clauses et licence communs aux casinos du groupe Casino Rewards.`,
    sources: [...YUKON.sourcesFr, ...CAPTAIN.sourcesFr, ...SOURCES_PROGRAMME],
    sections: [
      {
        id: 'casinos',
        titre: `Les ${MARQUES.length} casinos du groupe que nous avons analysés`,
        blocs: [
          {
            type: 'tableau',
            legende: 'Offres de bienvenue relevées sur les sites officiels, conditions relues entre le 10 et le 17 novembre 2026.',
            entetes: ['Casino', 'Offre de bienvenue', 'Détail du bonus', 'FAQ publique'],
            lignes: MARQUES.map((m) => [`[${m.nom}](${chemins(m).fr.avis})`, offreFr(m), `[Bonus ${m.nom}](${chemins(m).fr.bonus})`, avecFaq(m) ? 'Oui' : 'Non']
            )
          },
          {
            type: 'p',
            texte: `La page d’accueil de Casino Rewards annonce 16 casinos membres ; nous n’avons pas encore analysé les autres. Chaque casino a sa propre offre de bienvenue, mais la mise, les retraits, la licence et les clauses ci-dessous sont les mêmes partout.`
          }
        ]
      },
      {
        id: 'francais',
        titre: 'Casino Rewards en français : quels casinos du groupe',
        blocs: [
          {
            type: 'p',
            texte: `Les ${MARQUES.length} casinos que nous avons analysés ont tous une version française. Le site du programme, casinorewards.com, propose aussi le français dans son menu des langues.`
          },
          {
            type: 'tableau',
            legende: 'Relevé sur les pages d’accueil officielles le 16 novembre 2026. Le service client annoncé ne précise pas toujours la langue.',
            entetes: ['Casino', 'Site en français', 'Service client annoncé'],
            lignes: MARQUES.map((m) => [`[${m.nom}](${chemins(m).fr.avis})`, 'Oui', SUPPORT_FR[m.nom] ?? 'Non précisé'])
          }
        ]
      },
      {
        id: 'mise',
        titre: `La mise de ${REWARDS.mise12} fois, commune à tout le groupe`,
        blocs: [
          {
            type: 'p',
            texte: `Les bonus des deux premiers dépôts doivent être misés **${REWARDS.mise12} fois** avant de pouvoir être retirés (article 12.4 des conditions). À partir du 3e dépôt, la mise passe à ${REWARDS.mise3} fois (article 12.5, ou 12.6 chez Quatro Casino). Les machines à sous comptent à 100 % ; les jeux de table et en direct, à 2 % seulement.`
          },
          {
            type: 'tableau',
            legende: 'Pour un dépôt de 100 $. Casino Rewards : premier bonus à 100 % du groupe. Nos casinos : premier palier de leur offre de bienvenue, conditions officielles.',
            entetes: ['Casino', 'Bonus reçu', 'Mise exigée', 'Montant à miser'],
            lignes: [
              ['**Casinos Casino Rewards**', fr(100), `${REWARDS.mise12} fois`, `**${fr(100 * REWARDS.mise12)}** (bonus seul) à ${fr(200 * REWARDS.mise12)} (dépôt + bonus)`],
              ...EXEMPLES.map(({ c, ex }) => [`[${c.nom}](${cheminCasino(c)})`, fr(ex.bonus), `${c.offre.mise!.multiplicateur} fois`, `**${fr(ex.aMiser)}**`])
            ]
          },
          {
            type: 'p',
            texte: 'Les conditions ne précisent pas si la mise porte sur le bonus seul ou sur le dépôt et le bonus : le tableau donne les deux. Pour faire le calcul avec votre propre dépôt : [calculateur de mise](/conditions-de-mise/).'
          }
        ]
      },
      {
        id: 'retraits',
        titre: 'Les retraits : 48 h d’attente, puis le délai du moyen choisi',
        blocs: [
          {
            type: 'tableau',
            legende: `FAQ officielles de ${listeFr(AVEC_FAQ)}, relues en novembre 2026. Délais après les 48 h d’attente et le traitement. ${listeFr(SANS_FAQ)} ${PLURIEL_SANS_FAQ ? 'ne publient' : 'ne publie'} pas de FAQ sur les paiements.`,
            entetes: ['Moyen de retrait', 'Délai annoncé'],
            lignes: [
              ['Portefeuilles électroniques', '1 à 3 jours ouvrables'],
              ['Virement EFT ou eCheck en dollars canadiens (Canada seulement)', '2 à 3 jours ouvrables'],
              ['Visa, Mastercard', '3 jours ouvrables'],
              ['Virement bancaire direct', '6 à 10 jours ouvrables']
            ]
          },
          {
            type: 'liste',
            ordonnee: true,
            items: [
              '**48 h d’attente.** Pendant ce temps, vous pouvez annuler le retrait. C’est souvent là que l’on rejoue ses gains : si vous voulez retirer, n’y touchez plus.',
              '**Traitement le jour ouvrable suivant.**',
              '**Délai du moyen choisi**, de 1 à 10 jours ouvrables (tableau ci-dessus).',
              '**Premier retrait par un nouveau moyen** : vérifications supplémentaires, jusqu’à 5 à 7 jours ouvrables.'
            ]
          },
          {
            type: 'liste',
            items: [
              `**Minimum** : ${fr(REWARDS.retraitMin)}, et ${fr(REWARDS.retraitMinVirement)} par virement bancaire direct (FAQ ; ${listeFr(SANS_FAQ)} ${PLURIEL_SANS_FAQ ? 'ne publient' : 'ne publie'} pas de minimum).`,
              '**Frais** : 50 $ par virement bancaire direct (100 $ au-delà de 3 000 $). Les autres moyens sont sans frais selon les FAQ.',
              '**Plafonds** : les conditions prévoient des limites par jour, par semaine et par mois selon le pays et le moyen, sans les chiffrer (article 14.2.2).',
              '**Cas particulier** : si vos gains sont très supérieurs à vos dépôts dans les casinos du groupe, les retraits peuvent être limités à 4 000 $ par semaine (article 14.2.10).'
            ]
          },
          {
            type: 'tableau',
            legende: 'Nos casinos : délais constatés lors de nos retraits en argent réel. Casinos du groupe Casino Rewards : pas encore testés.',
            entetes: ['Casino', 'Retrait crypto constaté', 'Retrait carte constaté'],
            lignes: [
              ['**Casinos Casino Rewards**', 'Crypto non listée', 'Pas encore testé (3 jours ouvrables annoncés après l’attente)'],
              ...RAPIDES.map((x) => [`[${x.nom}](${cheminCasino(x)})`, heuresFr(dernier(x, 'crypto')?.delaiHeures), heuresFr(dernier(x, 'carte')?.delaiHeures)])
            ]
          },
          { type: 'p', texte: 'Tous nos relevés, datés : [délais de retrait testés](/delais-de-retrait-casino/).' },
          { type: 'offres', casinos: TOP3, titre: 'Des retraits plus rapides' }
        ]
      },
      {
        id: 'clauses',
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
        id: 'licence',
        titre: 'Licence, certification et exploitant',
        blocs: [
          {
            type: 'liste',
            items: [
              `**Licence** : Kahnawake Gaming Commission, licence n° ${REWARDS.licence} (article 2.1 des conditions).`,
              '**Certification** : chaque site renvoie vers un certificat eCOGRA, un organisme qui contrôle l’équité des jeux.',
              `**Exploitant** : le pied de page nomme ${REWARDS.exploitantFr}${SANS_PIED.length ? ` (sauf ${listeFr(SANS_PIED)}, qui n’en nomme aucun)` : ''} ; les conditions parlent de marques gérées par ${REWARDS.gestionnaire}. Les sites ne précisent pas le lien entre les deux sociétés.`,
              '**Âge** : 19 ans, même au Québec où l’âge légal est de 18 ans.',
              `**Fidélité** : ${YUKON.fideliteFr.charAt(0).toLowerCase()}${YUKON.fideliteFr.slice(1)}.`
            ]
          },
          {
            type: 'p',
            texte: 'La licence de Kahnawake n’est pas une autorisation du gouvernement du Québec. Ce que dit la loi : [casino en ligne légal au Québec](/casino-en-ligne-legal-quebec/).'
          }
        ]
      },
      {
        id: 'vip',
        titre: 'Le programme de fidélité et VIP Casino Rewards',
        blocs: [
          {
            type: 'p',
            texte: 'Le programme est commun aux casinos du groupe : votre statut est le même dans tous les casinos membres, d’après la FAQ officielle. Vous gagnez des points VIP en misant ; ils n’expirent jamais et s’échangent contre du crédit de jeu dès que vous en avez plus de 1 000.'
          },
          {
            type: 'tableau',
            legende: 'Points VIP gagnés pour 10 $ US misés, d’après la FAQ de Casino Rewards (relevé du 16 novembre 2026). Les taux varient selon la devise.',
            entetes: ['Type de jeu', 'Points VIP pour 10 $ US misés'],
            lignes: [
              ['Machines à sous', '1'],
              ['Jeux de table et roulette', '0,5'],
              ['Vidéo poker, blackjack, jeux variés, jeux au taux de retour de 98 % ou plus', '0,1'],
              ['Jeux au taux de retour de 99,5 % ou plus', '0'],
              ['Tournois, All Aces Video Poker et jeux en direct', '0']
            ]
          },
          {
            type: 'tableau',
            legende: 'Points de statut pour atteindre puis conserver chaque niveau, d’après la FAQ de Casino Rewards. 50 points VIP donnent 1 point de statut.',
            entetes: ['Statut', 'Pour l’atteindre', 'Pour le conserver'],
            lignes: [
              ['Bronze', '1', '1'],
              ['Argent (Silver)', '6', '4'],
              ['Or (Gold)', '81', '40'],
              ['Platine (Platinum)', '201', '100'],
              ['Diamant (Diamond)', '401', '200']
            ]
          },
          {
            type: 'p',
            texte: 'La page d’accueil du programme annonce six niveaux, mais la FAQ n’en détaille que cinq. Un statut atteint est garanti au moins jusqu’à la fin du mois en cours.'
          },
          {
            type: 'p',
            texte: '**Ce que cela représente** : le statut Or demande 81 points de statut, soit 4 050 points VIP, soit environ 40 500 $ US misés sur des machines à sous. Au blackjack, il faudrait miser dix fois plus, et les jeux en direct ne rapportent aucun point. Le programme récompense surtout les gros volumes de jeu sur les machines à sous.'
          },
          {
            type: 'p',
            texte: 'Un joueur qui a un statut VIP dans un autre casino peut demander au service client de le reconnaître ; la page VIP ne précise aucune condition. Les avantages VIP annoncés (hôte personnel, bonus d’anniversaire, limites de mise plus élevées) sont accordés à la discrétion du casino.'
          },
          {
            type: 'p',
            texte: 'Un programme de fidélité incite à jouer davantage : fixez votre budget avant de jouer, pas en fonction des points. Si le jeu cesse d’être un plaisir, appelez Jeu : aide et référence au 1 800 461-0140, 24 h sur 24.'
          }
        ]
      },
      {
        id: 'sans-depot',
        titre: 'Casino Rewards bonus sans dépôt : ce qui existe en 2026',
        blocs: [
          {
            type: 'p',
            texte: `D’après la FAQ de Casino Rewards, l’offre d’inscription se déclenche avec le premier dépôt. Aucun des casinos que nous avons analysés n’affiche de bonus sans dépôt à l’inscription. L’entrée la moins chère du groupe est celle de [Zodiac Casino](${chemins(ZODIAC).fr.avis}) : ${ZODIAC.chances} chances pour ${fr(ZODIAC.depot1!)}.`
          },
          {
            type: 'p',
            texte: 'Une fois inscrit, la FAQ indique que les membres peuvent recevoir des bonus gratuits et des promotions par courriel, dont les montants ne sont pas publics. Méfiez-vous des « codes » et des « liens bonus » partagés sur des forums : seules comptent les offres affichées sur le site officiel ou dans votre compte.'
          },
          {
            type: 'liste',
            items: MARQUES.map((m) => `[${m.nom} : bonus sans dépôt](${chemins(m).fr.sansDepot})`)
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
              '**Pour vous si** vous voulez beaucoup de crédit de jeu pour un petit dépôt, sans compter retirer le bonus.',
              '**Pour vous si** vous jouez dans plusieurs casinos du groupe : le programme de fidélité est commun.',
              `**Pas pour vous si** vous voulez un bonus que vous pourrez vraiment débloquer : ${REWARDS.mise12} fois, c’est l’une des mises les plus lourdes que nous ayons relevées.`,
              '**Pas pour vous si** vous jouez surtout aux jeux de table ou en direct : ils ne comptent qu’à 2 % pour la mise.'
            ]
          },
          { type: 'offres', casinos: TOP3, titre: 'Mise de 30 à 50 fois au lieu de 200 : nos casinos les mieux notés' }
        ]
      }
    ],
    faq: [
      {
        q: 'Casino Rewards est-il fiable ?',
        r: `Rien dans ce que nous avons lu n’indique le contraire : la licence de la Kahnawake Gaming Commission (n° ${REWARDS.licence}) et l’exploitant sont publiés, et les sites renvoient vers un certificat eCOGRA. Le vrai piège est ailleurs : les bonus des deux premiers dépôts à miser ${REWARDS.mise12} fois.`
      },
      {
        q: 'Quels casinos font partie de Casino Rewards ?',
        r: `Nous avons analysé ${listeFr(NOMS)}, qui partagent les mêmes conditions générales. La page d’accueil de Casino Rewards annonce 16 casinos membres ; nous n’avons pas encore analysé les autres.`
      },
      {
        q: 'Casino Rewards est-il en français ?',
        r: `Oui : ${listeFr(NOMS)} ont une version française, relevée sur leurs pages d’accueil le 16 novembre 2026. Le site casinorewards.com propose aussi le français dans son menu des langues.`
      },
      {
        q: 'Comment fonctionnent les points VIP Casino Rewards ?',
        r: 'D’après la FAQ officielle : 1 point VIP pour 10 $ US misés sur les machines à sous, moins sur les autres jeux, aucun sur les jeux en direct. Les points n’expirent pas et s’échangent contre du crédit de jeu au-delà de 1 000 points. 50 points VIP donnent 1 point de statut (Bronze, Argent, Or, Platine, Diamant).'
      },
      {
        q: 'Y a-t-il un bonus sans dépôt Casino Rewards ?',
        r: `Pas à l’inscription : d’après la FAQ du groupe, l’offre de bienvenue se déclenche avec le premier dépôt. L’entrée la moins chère est celle de Zodiac Casino, ${ZODIAC.chances} chances pour ${fr(ZODIAC.depot1!)}.`
      },
      {
        q: 'Combien de temps prend un retrait dans un casino Casino Rewards ?',
        r: '48 h d’attente, traitement le jour ouvrable suivant, puis 1 à 10 jours ouvrables selon le moyen, d’après les FAQ du groupe. Un premier retrait par un nouveau moyen peut demander 5 à 7 jours ouvrables de vérification.'
      },
      {
        q: 'Les casinos Casino Rewards acceptent-ils Interac ?',
        r: `Les FAQ de ${listeFr(AVEC_INTERAC)} mentionnent les dépôts Interac, traités par PayDirect Billing Solutions. Interac ne figure pas parmi les moyens de retrait : on retire notamment par virement EFT en dollars canadiens.`
      },
      {
        q: 'Casino Rewards est-il légal au Québec ?',
        r: 'Loto-Québec est le seul casino en ligne autorisé par le gouvernement du Québec. La licence de Kahnawake n’est pas une autorisation du Québec : jouer sur ces sites relève d’une zone grise, expliquée sur notre page sur le casino en ligne légal au Québec.'
      }
    ],
    connexes: [chemins(YUKON).fr.avis, chemins(ZODIAC).fr.avis, '/actualites/kahnawake-plaintes-joueurs-2025/', '/casino-retrait-rapide/', '/casino-en-ligne-fiable/']
  };
}

function hubEn(): PageGuide {
  return {
    chemin: HUB_EN,
    nomFil: 'Casino Rewards',
    titre: 'Casino Rewards Review: VIP Points, Bonuses and Casinos (2026)',
    description: `Casino Rewards in Canada: ${MARQUES.length} casinos reviewed, how VIP points and status levels work, no deposit offers, ${REWARDS.mise12}x wagering and withdrawals. Terms read.`,
    h1: 'Casino Rewards Review: VIP Program, Bonuses and the Casinos',
    chapeau: `${listeEn(NOMS)} belong to the same group, Casino Rewards, and share the same terms and conditions. We read them line by line. The shared point that matters most: the first two deposit bonuses must be wagered ${REWARDS.mise12} times.`,
    modifie: MODIFIE_HUB,
    titreTop: 'Before Casino Rewards: our 3 top-rated casinos',
    resume: `Withdrawals, ${REWARDS.mise12}x wagering, clauses and licence shared by the Casino Rewards casinos.`,
    sources: [...YUKON.sourcesEn, ...CAPTAIN.sourcesEn, ...SOURCES_PROGRAMME_EN],
    sections: [
      {
        id: 'casinos',
        titre: `The ${MARQUES.length} casinos of the group we reviewed`,
        blocs: [
          {
            type: 'tableau',
            legende: 'Welcome offers taken from the official sites, terms read between November 10 and 17, 2026.',
            entetes: ['Casino', 'Welcome offer', 'Bonus details', 'Public FAQ'],
            lignes: MARQUES.map((m) => [`[${m.nom}](${chemins(m).en.avis})`, offreEn(m), `[${m.nom} bonus](${chemins(m).en.bonus})`, avecFaq(m) ? 'Yes' : 'No'])
          },
          {
            type: 'p',
            texte: 'The Casino Rewards home page lists 16 member casinos; we have not reviewed the others yet. Each casino has its own welcome offer, but the wagering, withdrawals, licence and clauses below are the same everywhere. All the casinos we reviewed also have a French version.'
          }
        ]
      },
      {
        id: 'wagering',
        titre: `${REWARDS.mise12}x wagering, shared by the whole group`,
        blocs: [
          {
            type: 'p',
            texte: `The first two deposit bonuses must be wagered **${REWARDS.mise12} times** before they can be withdrawn (section 12.4 of the terms). From the 3rd deposit, wagering drops to ${REWARDS.mise3}x (section 12.5, or 12.6 at Quatro Casino). Slots count 100%; table and live games only 2%.`
          },
          {
            type: 'tableau',
            legende: 'For a $100 deposit. Casino Rewards: the group’s first 100% bonus. Our casinos: first tier of their welcome offer, official terms.',
            entetes: ['Casino', 'Bonus received', 'Wagering', 'Amount to wager'],
            lignes: [
              ['**Casino Rewards casinos**', enM(100), `${REWARDS.mise12}x`, `**${enM(100 * REWARDS.mise12)}** (bonus only) to ${enM(200 * REWARDS.mise12)} (deposit + bonus)`],
              ...EXEMPLES.map(({ c, ex }) => [`[${c.nom}](${cheminEn(c)})`, enM(ex.bonus), `${c.offre.mise!.multiplicateur}x`, `**${enM(ex.aMiser)}**`])
            ]
          },
          {
            type: 'p',
            texte: 'The terms do not say whether wagering applies to the bonus only or to the deposit and bonus, so the table shows both.'
          }
        ]
      },
      {
        id: 'withdrawals',
        titre: 'Withdrawals: 48 hours pending, then the method’s own delay',
        blocs: [
          {
            type: 'tableau',
            legende: `Official FAQs of ${listeEn(AVEC_FAQ)}, read in November 2026. Times after the 48-hour pending period and processing. ${listeEn(SANS_FAQ)} ${PLURIEL_SANS_FAQ ? 'publish' : 'publishes'} no payment FAQ.`,
            entetes: ['Withdrawal method', 'Announced time'],
            lignes: [
              ['E-wallets', '1 to 3 business days'],
              ['CAD EFT or eCheck (Canada only)', '2 to 3 business days'],
              ['Visa, Mastercard', '3 business days'],
              ['Direct bank transfer', '6 to 10 business days']
            ]
          },
          {
            type: 'liste',
            ordonnee: true,
            items: [
              '**48 hours pending.** During this time you can reverse the withdrawal. This is often when players gamble their winnings again: if you want to cash out, leave it alone.',
              '**Processing on the next business day.**',
              '**The method’s own delay**, from 1 to 10 business days (table above).',
              '**First withdrawal with a new method**: extra checks, up to 5 to 7 business days.'
            ]
          },
          {
            type: 'liste',
            items: [
              `**Minimum**: ${enM(REWARDS.retraitMin)}, or ${enM(REWARDS.retraitMinVirement)} by direct bank transfer (FAQ; ${listeEn(SANS_FAQ)} ${PLURIEL_SANS_FAQ ? 'publish' : 'publishes'} no minimum).`,
              '**Fees**: $50 by direct bank transfer ($100 above $3,000). Other methods are free according to the FAQs.',
              '**Limits**: the terms allow daily, weekly and monthly limits by country and method, without giving figures (section 14.2.2).',
              '**Special case**: if your winnings are much higher than your deposits across the group’s casinos, withdrawals can be capped at $4,000 per week (section 14.2.10).'
            ]
          },
          {
            type: 'tableau',
            legende: 'Our casinos: times measured during our real-money withdrawals. Casino Rewards casinos: not tested yet.',
            entetes: ['Casino', 'Crypto withdrawal measured', 'Card withdrawal measured'],
            lignes: [
              ['**Casino Rewards casinos**', 'Crypto not listed', 'Not tested yet (3 business days announced after pending)'],
              ...RAPIDES.map((x) => [`[${x.nom}](${cheminEn(x)})`, heuresEn(dernier(x, 'crypto')?.delaiHeures), heuresEn(dernier(x, 'carte')?.delaiHeures)])
            ]
          },
          { type: 'p', texte: 'All our dated results: [tested withdrawal times](/en-ca/casino-withdrawal-times/).' },
          { type: 'offres', casinos: TOP3, titre: 'Faster withdrawals' }
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
        id: 'licence',
        titre: 'Licence, certification and operator',
        blocs: [
          {
            type: 'liste',
            items: [
              `**Licence**: Kahnawake Gaming Commission, licence no. ${REWARDS.licence} (section 2.1 of the terms).`,
              '**Certification**: each site links to an eCOGRA certificate; eCOGRA audits game fairness.',
              `**Operator**: the footer names ${REWARDS.exploitantEn}${SANS_PIED.length ? ` (except ${listeEn(SANS_PIED)}, which names none)` : ''}; the terms describe brands managed by ${REWARDS.gestionnaire}. The sites do not explain how the two companies are related.`,
              '**Age**: 19, including in Quebec and Manitoba where the legal age is 18.',
              `**Loyalty**: ${YUKON.fideliteEn.charAt(0).toLowerCase()}${YUKON.fideliteEn.slice(1)}.`
            ]
          },
          { type: 'p', texte: 'For the legal picture in Quebec, see our page on [online casinos in Quebec](/en-ca/online-casino-quebec/).' }
        ]
      },
      {
        id: 'vip',
        titre: 'The Casino Rewards loyalty and VIP program',
        blocs: [
          {
            type: 'p',
            texte: 'The program is shared by the group’s casinos: your status is the same at every member casino, according to the official FAQ. You earn VIP points by wagering; they never expire and can be redeemed for casino credits once you have more than 1,000.'
          },
          {
            type: 'tableau',
            legende: 'VIP points earned per US$10 wagered, according to the Casino Rewards FAQ (checked November 16, 2026). Rates vary by currency.',
            entetes: ['Game type', 'VIP points per US$10 wagered'],
            lignes: [
              ['Slots', '1'],
              ['Table games and roulette', '0.5'],
              ['Video poker, blackjack, variety games, games with 98%+ RTP', '0.1'],
              ['Games with 99.5%+ RTP', '0'],
              ['Tournaments, All Aces Video Poker and live dealer games', '0']
            ]
          },
          {
            type: 'tableau',
            legende: 'Status points needed to reach and keep each level, according to the Casino Rewards FAQ. 50 VIP points give 1 status point.',
            entetes: ['Status', 'To reach', 'To keep'],
            lignes: [
              ['Bronze', '1', '1'],
              ['Silver', '6', '4'],
              ['Gold', '81', '40'],
              ['Platinum', '201', '100'],
              ['Diamond', '401', '200']
            ]
          },
          {
            type: 'p',
            texte: 'The program home page mentions six levels, but the FAQ only details five. Once reached, a status is guaranteed at least until the end of the current month.'
          },
          {
            type: 'p',
            texte: '**What it takes**: Gold needs 81 status points, which is 4,050 VIP points, or about US$40,500 wagered on slots. At blackjack you would have to wager ten times more, and live dealer games earn no points at all. The program mainly rewards high slot volume.'
          },
          {
            type: 'p',
            texte: 'Players with VIP status at another casino can ask support to match it; the VIP page gives no conditions. The VIP perks advertised (personal host, birthday bonuses, higher bet limits) are granted at the casino’s discretion.'
          },
          {
            type: 'p',
            texte: 'A loyalty program encourages you to play more: set your budget before you play, not around the points. If gambling stops being fun, see the [help lines by province](/en-ca/responsible-gambling/).'
          }
        ]
      },
      {
        id: 'no-deposit',
        titre: 'Casino Rewards no deposit bonus: what exists in 2026',
        blocs: [
          {
            type: 'p',
            texte: `According to the Casino Rewards FAQ, the sign-up offer is triggered by your first deposit. None of the casinos we reviewed shows a no deposit bonus at sign-up. The cheapest entry in the group is [Zodiac Casino](${chemins(ZODIAC).en.avis}): ${ZODIAC.chances} chances for ${enM(ZODIAC.depot1!)}.`
          },
          {
            type: 'p',
            texte: 'Once registered, the FAQ says members may get free bonuses and email promotions, with amounts that are not public. Be careful with “codes” and “bonus links” shared on forums: only offers shown on the official site or in your account count.'
          },
          {
            type: 'liste',
            items: MARQUES.map((m) => `[${m.nom} no deposit bonus](${chemins(m).en.sansDepot})`)
          }
        ]
      },
      {
        id: 'verdict',
        titre: 'Our verdict',
        blocs: [
          {
            type: 'liste',
            items: [
              '**Good for you if** you want a lot of playing credit for a small deposit, without expecting to cash out the bonus.',
              '**Good for you if** you play at several of the group’s casinos: the loyalty program is shared.',
              `**Not for you if** you want a bonus you can realistically clear: ${REWARDS.mise12}x is one of the heaviest wagering requirements we have seen.`,
              '**Not for you if** you mostly play table or live games: they count only 2% towards wagering.'
            ]
          },
          { type: 'offres', casinos: TOP3, titre: '30x to 50x wagering instead of 200x: our top-rated casinos' }
        ]
      }
    ],
    faq: [
      {
        q: 'Is Casino Rewards legit?',
        r: `Nothing we read suggests otherwise: the Kahnawake Gaming Commission licence (no. ${REWARDS.licence}) and the operator are published, and the sites link to an eCOGRA certificate. The real catch is elsewhere: the first two deposit bonuses must be wagered ${REWARDS.mise12} times.`
      },
      {
        q: 'Which casinos are part of Casino Rewards?',
        r: `We reviewed ${listeEn(NOMS)}, which share the same terms and conditions. The Casino Rewards home page lists 16 member casinos; we have not reviewed the others yet.`
      },
      {
        q: 'How do Casino Rewards VIP points work?',
        r: 'According to the official FAQ: 1 VIP point per US$10 wagered on slots, less on other games, none on live dealer games. Points never expire and can be redeemed for casino credits above 1,000 points. 50 VIP points give 1 status point (Bronze, Silver, Gold, Platinum, Diamond).'
      },
      {
        q: 'Is there a Casino Rewards no deposit bonus?',
        r: `Not at sign-up: according to the group’s FAQ, the welcome offer is triggered by the first deposit. The cheapest entry is Zodiac Casino, ${ZODIAC.chances} chances for ${enM(ZODIAC.depot1!)}.`
      },
      {
        q: 'Are Casino Rewards casinos available in French?',
        r: `Yes: ${listeEn(NOMS)} all have a French version, checked on their home pages on November 16, 2026.`
      },
      {
        q: 'How long does a withdrawal take at a Casino Rewards casino?',
        r: '48 hours pending, processing on the next business day, then 1 to 10 business days depending on the method, according to the group’s FAQs. A first withdrawal with a new method can take 5 to 7 business days of checks.'
      },
      {
        q: 'Do Casino Rewards casinos accept Interac?',
        r: `The FAQs of ${listeEn(AVEC_INTERAC)} mention Interac deposits, processed by PayDirect Billing Solutions. Interac is not listed as a withdrawal method: Canadian players can withdraw by CAD EFT transfer, among other options.`
      }
    ],
    connexes: [chemins(YUKON).en.avis, chemins(ZODIAC).en.avis, '/en-ca/fast-withdrawal-casinos/', '/en-ca/online-casino-quebec/']
  };
}

/* ---------- Exports ---------- */

/* ---------- Tours gratuits : nos casinos et le groupe Casino Rewards (17 novembre 2026) ---------- */

const AVEC_TOURS = CASINOS.filter((c) => c.offre.toursTotal > 0).sort((a, b) => b.offre.toursTotal - a.offre.toursTotal);
const CHANCES = MARQUES.filter((m) => m.chances).sort((a, b) => (a.depot1 ?? 0) - (b.depot1 ?? 0));
const lienBonusFr = (c: Casino) => `[${c.nom}](${cheminCasino(c, c.sousPages.includes('bonus') ? 'bonus' : undefined)})`;
const lienBonusEn = (c: Casino) => `[${c.nom}](${cheminEn(c, c.sousPages.includes('bonus'))})`;
const PLUS_TOURS = AVEC_TOURS[0];
const MIN_CHANCES = CHANCES[0];

function toursFr(): PageGuide {
  const q = tours(QUATRO);
  return {
    chemin: '/casino-tours-gratuits/',
    nomFil: 'Tours gratuits',
    titre: 'Casino tours gratuits au Canada : les offres comparées (2026)',
    description:
      'Tours gratuits au Canada : combien chaque casino en donne, pour quel dépôt, sur quels jeux et avec quelle mise, et si des tours sans dépôt existent.',
    h1: 'Casino tours gratuits : les offres comparées, et les vraies conditions',
    chapeau:
      'Les tours gratuits sont l’argument préféré des casinos. Nous avons relevé sur leurs pages officielles combien chacun en donne, pour quel dépôt, sur quels jeux et avec quelle mise. Aucun n’en donne sans dépôt.',
    modifie: '2026-11-17',
    offresHaut: AVEC_TOURS.slice(0, 3).map((c) => c.id),
    titreTop: 'Les tours gratuits de nos casinos les mieux notés',
    resume: 'Les tours gratuits de chaque casino comparés : dépôt, jeux, mise.',
    sections: [
      {
        id: 'sans-depot',
        titre: 'Tours gratuits sans dépôt : ce que nous avons trouvé',
        blocs: [
          {
            type: 'p',
            texte: `Aucun des casinos de notre comparatif, ni des ${MARQUES.length} casinos Casino Rewards que nous avons analysés, n’affiche de tours gratuits sans dépôt à l’inscription. L’offre la moins chère est celle de [${nomComplet(MIN_CHANCES)}](${chemins(MIN_CHANCES).fr.bonus}) : ${MIN_CHANCES.chances} chances sur la roue Mega Money Wheel pour ${fr(MIN_CHANCES.depot1!)}. Notre page [bonus sans dépôt](/casino-bonus-sans-depot/) fait le point sur ce qui existe vraiment.`
          }
        ]
      },
      {
        id: 'comparatif',
        titre: 'Les tours gratuits de nos casinos',
        blocs: [
          {
            type: 'tableau',
            legende: 'Offres de bienvenue relevées sur les pages officielles de chaque casino.',
            entetes: ['Casino', 'Tours gratuits', 'Dépôt minimum', 'Comment ils arrivent', 'Mise du bonus'],
            lignes: AVEC_TOURS.map((c) => [lienBonusFr(c), `**${c.offre.toursTotal}**`, depotMinTexte(c), c.offre.toursDetail || 'Non précisé', miseTexte(c)])
          },
          {
            type: 'p',
            texte: `${PLUS_TOURS.nom} annonce le plus de tours (${PLUS_TOURS.offre.toursTotal}), mais regardez aussi comment ils arrivent : répartis sur plusieurs dépôts ou versés par lots quotidiens, avec une connexion obligatoire chaque jour.`
          }
        ]
      },
      {
        id: 'casino-rewards',
        titre: 'Chez Casino Rewards : tours gratuits et « chances »',
        blocs: [
          {
            type: 'p',
            texte: `Dans le groupe Casino Rewards, seul [Quatro Casino](${chemins(QUATRO).fr.bonus}) donne de vrais tours gratuits sur des machines à sous. Les autres offrent des « chances » : des tours sur la roue Mega Money Wheel, à 0,10 $ le tour, que beaucoup de joueurs appellent aussi tours gratuits. Partout, les gains doivent être misés ${REWARDS.mise12} fois.`
          },
          {
            type: 'tableau',
            entetes: ['Casino', 'Offre', 'Dépôt', 'Mise des gains'],
            lignes: [
              [`[Quatro Casino](${chemins(QUATRO).fr.bonus})`, `${q.toursMin} à ${q.toursMax} tours gratuits sur ${JOURS_TOURS} jours, sur des machines à sous imposées`, `Dès ${fr(q.min.depot)} (${q.toursMax} tours dès ${fr(q.max.depot)})`, `${REWARDS.mise12} fois`],
              ...CHANCES.map((m) => [`[${nomComplet(m)}](${chemins(m).fr.bonus})`, `${m.chances} chances sur la Mega Money Wheel`, fr(m.depot1!), `${REWARDS.mise12} fois`])
            ]
          }
        ]
      },
      {
        id: 'pieges',
        titre: 'Les 4 pièges des tours gratuits',
        blocs: [
          {
            type: 'liste',
            ordonnee: true,
            items: [
              '**La connexion quotidienne** : chez Velobet, Rolletto ou Quatro Casino, les tours arrivent par lots, un jour après l’autre. Un jour sans connexion fait perdre les tours de ce jour, et même tous les tours restants chez Rolletto.',
              '**Les gains ne sont pas de l’argent réel** : ils sont versés en bonus et doivent être misés avant tout retrait.',
              '**Le jeu imposé** : les tours se jouent sur une machine choisie par le casino, pas sur celle de votre choix.',
              '**La durée de validité** : les tours expirent, souvent en quelques jours. Lisez la section bonus de votre compte avant de déposer.'
            ]
          }
        ]
      }
    ],
    faq: [
      {
        q: 'Existe-t-il des tours gratuits sans dépôt au Canada ?',
        r: `Pas chez les casinos que nous avons analysés : tous demandent un premier dépôt. L’entrée la moins chère est ${nomComplet(MIN_CHANCES)}, avec ${MIN_CHANCES.chances} chances pour ${fr(MIN_CHANCES.depot1!)}.`
      },
      {
        q: 'Quel casino donne le plus de tours gratuits ?',
        r: `Dans notre comparatif, ${PLUS_TOURS.nom} en annonce ${PLUS_TOURS.offre.toursTotal}. Chez Casino Rewards, Quatro Casino va jusqu’à ${q.toursMax} tours, à condition de déposer au moins ${fr(q.max.depot)}, avec des gains à miser ${REWARDS.mise12} fois.`
      },
      {
        q: 'Peut-on retirer les gains des tours gratuits ?',
        r: 'Oui, mais seulement après avoir rempli la condition de mise du bonus, sur des jeux qui comptent pour cette mise et avant la date limite.'
      }
    ],
    sources: [
      ...AVEC_TOURS.map((c) => ({ titre: `${c.nom} : conditions du bonus de bienvenue`, url: c.offre.source })),
      { titre: 'Quatro Casino : page bonus officielle en français', url: 'https://www.quatrocasino.com/fr/bonus/' }
    ],
    connexes: ['/casino-bonus-sans-depot/', '/casino-depot-minimum/', '/conditions-de-mise/', '/casino-rewards/']
  };
}

function toursEn(): PageGuide {
  const q = tours(QUATRO);
  return {
    chemin: '/en-ca/free-spins-casinos/',
    nomFil: 'Free spins',
    titre: 'Free Spins Casinos in Canada: Offers Compared (2026)',
    description:
      'Free spins in Canada: how many each casino gives, for what deposit, on which games and with what wagering, and whether no deposit free spins exist.',
    h1: 'Free spins casinos: the offers compared, and the real terms',
    chapeau:
      'Free spins are the casinos’ favourite selling point. We checked their official pages to see how many each one gives, for what deposit, on which games and with what wagering. None gives them without a deposit.',
    modifie: '2026-11-17',
    offresHaut: AVEC_TOURS.slice(0, 3).map((c) => c.id),
    titreTop: 'Free spins at our top-rated casinos',
    resume: 'Every casino’s free spins compared: deposit, games, wagering.',
    sections: [
      {
        id: 'no-deposit',
        titre: 'No deposit free spins: what we found',
        blocs: [
          {
            type: 'p',
            texte: `None of the casinos we compare, and none of the ${MARQUES.length} Casino Rewards casinos we reviewed, shows free spins without a deposit at sign-up. The cheapest offer is [${nomComplet(MIN_CHANCES)}](${chemins(MIN_CHANCES).en.bonus}): ${MIN_CHANCES.chances} chances on the Mega Money Wheel for ${enM(MIN_CHANCES.depot1!)}. Our [no deposit bonus](/en-ca/no-deposit-bonus-casinos/) page covers what really exists.`
          }
        ]
      },
      {
        id: 'compared',
        titre: 'Free spins at the casinos we compare',
        blocs: [
          {
            type: 'tableau',
            legende: 'Welcome offers checked on each casino’s official pages.',
            entetes: ['Casino', 'Free spins', 'Minimum deposit', 'How they arrive', 'Bonus wagering'],
            lignes: AVEC_TOURS.map((c) => [lienBonusEn(c), `**${c.offre.toursTotal}**`, depotMinEn(c), en(c).offre.toursDetail || 'Not stated', miseEn(c)])
          },
          {
            type: 'p',
            texte: `${PLUS_TOURS.nom} advertises the most spins (${PLUS_TOURS.offre.toursTotal}), but check how they arrive too: spread over several deposits, or in daily batches with a log-in required every day.`
          }
        ]
      },
      {
        id: 'casino-rewards',
        titre: 'At Casino Rewards: free spins and “chances”',
        blocs: [
          {
            type: 'p',
            texte: `In the Casino Rewards group, only [Quatro Casino](${chemins(QUATRO).en.bonus}) gives real free spins on slots. The others offer “chances”: spins on the Mega Money Wheel at $0.10 each, which many players also call free spins. Everywhere, the winnings must be wagered ${REWARDS.mise12} times.`
          },
          {
            type: 'tableau',
            entetes: ['Casino', 'Offer', 'Deposit', 'Winnings wagering'],
            lignes: [
              [`[Quatro Casino](${chemins(QUATRO).en.bonus})`, `${q.toursMin} to ${q.toursMax} free spins over ${JOURS_TOURS} days, on set slots`, `From ${enM(q.min.depot)} (${q.toursMax} spins from ${enM(q.max.depot)})`, `${REWARDS.mise12}x`],
              ...CHANCES.map((m) => [`[${nomComplet(m)}](${chemins(m).en.bonus})`, `${m.chances} chances on the Mega Money Wheel`, enM(m.depot1!), `${REWARDS.mise12}x`])
            ]
          }
        ]
      },
      {
        id: 'traps',
        titre: 'The 4 free spins traps',
        blocs: [
          {
            type: 'liste',
            ordonnee: true,
            items: [
              '**Daily log-ins**: at Velobet, Rolletto or Quatro Casino, spins arrive in batches, one day after another. Missing a day loses that day’s spins, and even all remaining spins at Rolletto.',
              '**Winnings are not cash**: they are paid as bonus funds and must be wagered before any withdrawal.',
              '**Set games**: the spins are played on a slot chosen by the casino, not one of your choice.',
              '**Expiry**: spins expire, often within days. Read the bonus section of your account before you deposit.'
            ]
          }
        ]
      }
    ],
    faq: [
      {
        q: 'Are there no deposit free spins in Canada?',
        r: `Not at the casinos we reviewed: all require a first deposit. The cheapest entry is ${nomComplet(MIN_CHANCES)}, with ${MIN_CHANCES.chances} chances for ${enM(MIN_CHANCES.depot1!)}.`
      },
      {
        q: 'Which casino gives the most free spins?',
        r: `Among the casinos we compare, ${PLUS_TOURS.nom} advertises ${PLUS_TOURS.offre.toursTotal}. At Casino Rewards, Quatro Casino goes up to ${q.toursMax} spins if you deposit at least ${enM(q.max.depot)}, with winnings to be wagered ${REWARDS.mise12} times.`
      },
      {
        q: 'Can I withdraw free spin winnings?',
        r: 'Yes, but only after meeting the bonus wagering requirement, on eligible games and before the deadline.'
      }
    ],
    sources: [
      ...AVEC_TOURS.map((c) => ({ titre: `${c.nom}: welcome bonus terms`, url: c.offre.source })),
      { titre: 'Quatro Casino: official bonus page', url: 'https://www.quatrocasino.com/en/bonus/' }
    ],
    connexes: ['/en-ca/no-deposit-bonus-casinos/', '/en-ca/minimum-deposit-casinos/', '/en-ca/casino-bonuses/', '/en-ca/casino-rewards/']
  };
}

export const MARQUES_FR: PageGuide[] = [...MARQUES.flatMap(pagesFr), hubFr(), toursFr()];
export const MARQUES_EN: PageGuide[] = [...MARQUES.flatMap(pagesEn), hubEn(), toursEn()];

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

/** Données courtes des marques, pour les liens internes depuis les guides (dépôt minimum, bonus sans dépôt…). */
export const RESUMES_MARQUES = MARQUES.map((m) => ({
  nom: m.nom,
  depot: m.depot1 ?? null,
  offreFr: offreCourteFr(m),
  offreEn: offreCourteEn(m),
  fr: chemins(m).fr,
  en: chemins(m).en
}));

/** Marques par volume de recherche au Canada (relevé Ubersuggest du 17 novembre 2026), pour les pages d'accueil. */
const ORDRE_RECHERCHE = ['yukon-gold-casino', 'zodiac-casino', 'luxury-casino', 'captain-cooks-casino', 'grand-mondial-casino', 'golden-tiger-casino', 'quatro-casino', 'casino-classic', 'villento-casino', 'casino-action'];
export const MARQUES_POPULAIRES = [...RESUMES_MARQUES].sort(
  (a, b) => ORDRE_RECHERCHE.indexOf(a.fr.avis.replace(/\//g, '')) - ORDRE_RECHERCHE.indexOf(b.fr.avis.replace(/\//g, ''))
);

/** Adresses de base des marques (pour les paires français-anglais). */
export const SLUGS_MARQUES = MARQUES.map((m) => m.slug);
