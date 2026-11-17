/**
 * PowerPlay review (17 November 2026). No deal with the brand for now: no link to it,
 * our casinos at the top. Everything comes from its official pages, read on 17 November 2026.
 */
import type { PageGuide } from '@/lib/contenu/pages/types';
import { CASINOS, type Casino } from '@/lib/casinos';
import { dernier } from '@/lib/tests';
import { cheminEn, en, miseEn } from './casinos';

const MAJ = '2026-11-17';

const PP = {
  sport: { titre: 'PowerPlay: 100% sports bonus up to $500 (terms)', url: 'https://www.powerplay.com/promotions/500-sports' },
  casino: { titre: 'PowerPlay: 100% casino welcome bonus up to $200 (terms)', url: 'https://www.powerplay.com/promotions/casino-welcome-bonus' },
  paiements: { titre: 'PowerPlay: deposit and withdrawal help (limits and times)', url: 'https://www.powerplay.com/payment-options' },
  conditions: { titre: 'PowerPlay: general terms (restricted territories, age, dormant accounts)', url: 'https://www.powerplay.com/documents/terms-and-conditions' },
  apropos: { titre: 'PowerPlay: about (licence, 2018 launch, Ontario)', url: 'https://www.powerplay.com/about/' }
};

const parId = (id: string) => CASINOS.find((c) => c.id === id);
const NOS = ['velobet', 'rolletto', 'betportal'].map(parId).filter((c): c is Casino => Boolean(c));
const heures = (n?: number | null) => (n === null || n === undefined ? 'not measured' : `${n} h`);
const lien = (c: Casino) => `[${c.nom}](${cheminEn(c)})`;

export const POWERPLAY_EN: PageGuide = {
  chemin: '/en-ca/powerplay-casino-review/',
  nomFil: 'PowerPlay review',
  titre: 'PowerPlay Casino Review 2026: Bonus, Payouts and Licence',
  description:
    'PowerPlay Casino review for Canada: $200 casino bonus and $500 sports bonus explained, Interac and crypto payouts in 0 to 4 hours as stated, Curaçao licence.',
  h1: 'PowerPlay Casino review: bonuses, payouts and the fine print',
  chapeau:
    'PowerPlay is a casino and sportsbook built for Canada, in English and French. We read its offers, its withdrawal limits and its general terms: here is what to know before you deposit.',
  modifie: MAJ,
  titreTop: 'Before PowerPlay: our 3 top-rated casinos',
  resume: 'PowerPlay checked: casino and sports bonuses, payouts, licence and dormant accounts.',
  sections: [
    {
      id: 'at-a-glance',
      titre: 'PowerPlay at a glance',
      blocs: [
        {
          type: 'tableau',
          legende: 'Details read on PowerPlay’s official pages on November 17, 2026.',
          entetes: ['', 'PowerPlay'],
          lignes: [
            ['Operator', 'Deck Entertainment B.V., Curaçao (company no. 144851)'],
            ['Licence', 'Curaçao Gaming Authority, licence OGL/2024/999/0482'],
            ['Online since', '2018, according to its About page'],
            ['Minimum age', 'Over 18, or the age of majority where you live, under its general terms'],
            ['Products', 'Casino, live casino and sports betting'],
            ['Casino bonus', '100% up to $200, wager the bonus 35x within 30 days'],
            ['Sports bonus', '100% up to $500, wager the bonus 20x within 30 days'],
            ['Deposits', 'Interac, Mastercard, crypto, MuchBetter, Paysafecard: $10 to $5,000, no fee'],
            ['Withdrawals', 'Interac, crypto, MuchBetter, card: processed in 0 to 4 h according to PowerPlay, 24 h at most'],
            ['Support', 'English and French, 24/7, by live chat, email and phone']
          ]
        },
        {
          type: 'p',
          texte:
            'We have no commercial deal with PowerPlay and did not open an account there: this page is based on its official pages. The casinos in our ranking go through [real deposit and withdrawal tests](/en-ca/casino-withdrawal-times/), repeated about every 3 days.'
        }
      ]
    },
    {
      id: 'legit',
      titre: 'Is PowerPlay legit and legal in Canada?',
      blocs: [
        {
          type: 'p',
          texte:
            'PowerPlay.com accepts players from the rest of Canada under a Curaçao licence. Ontario is on its list of restricted territories: Ontario players use a separate site, registered with iGaming Ontario and the AGCO since 2023, according to its About page.'
        },
        {
          type: 'p',
          texte:
            'A Curaçao licence regulates the casino from abroad, not from Canada: if you have a dispute, your recourse is the Curaçao authority, not a provincial body. Our guide to [online gambling laws in Canada](/en-ca/is-online-gambling-legal-in-canada/) covers each province.'
        }
      ]
    },
    {
      id: 'casino-bonus',
      titre: 'The casino bonus: 100% up to $200',
      blocs: [
        {
          type: 'liste',
          items: [
            '**Offer:** 100% of your first deposit, up to $200, from a $10 deposit. One time only.',
            '**Activation:** pick the “UP TO $200 CASINO BONUS” tab before you deposit. If you skip it, the offer is gone.',
            '**Wagering:** 35x the bonus amount, within 30 days.',
            '**Maximum bet:** $25 per game; anything above does not count.',
            '**Games:** all games, but progressive jackpot slots do not count, nor do Avalon, Bridesmaids and Sure Win.',
            '**Maximum win:** $4,000 converted to real money.'
          ]
        },
        {
          type: 'encadre',
          titre: 'Example: $100 deposit',
          texte: 'Bonus: $100. Wagering: 35 × $100 = **$3,500 in bets** within 30 days, about $117 a day, at $25 per game at most.'
        },
        {
          type: 'p',
          texte: `For comparison, the wagering at our casinos: ${NOS.map((c) => `${lien(c)} ${miseEn(c)}`).join('; ')}. Every offer is detailed in our [casino bonus comparison](/en-ca/casino-bonuses/).`
        }
      ]
    },
    {
      id: 'sports-bonus',
      titre: 'The sports bonus: 100% up to $500',
      blocs: [
        {
          type: 'liste',
          items: [
            '**Offer:** 100% of your first deposit, up to $500, from a $10 deposit, picked before you deposit.',
            '**Wagering:** 20x the bonus amount, within 30 days, at odds of 1.5 (-200) or more.',
            '**Maximum bet:** $250 per bet counts toward the wagering; betting on both sides of the same event is not allowed.',
            '**Maximum win:** $4,000.'
          ]
        },
        {
          type: 'encadre',
          titre: 'Example: $100 deposit',
          texte:
            'Bonus: $100. Wagering: 20 × $100 = **$2,000 in bets** within 30 days, at odds of 1.5 or more. Single bets count, unlike bonuses that force you into parlays.'
        }
      ]
    },
    {
      id: 'payouts',
      titre: 'Deposits and withdrawals at PowerPlay',
      blocs: [
        {
          type: 'tableau',
          legende: 'Limits and times shown on PowerPlay’s payment help page on November 17, 2026.',
          entetes: ['Withdrawal', 'Minimum', 'Maximum per 24 h', 'Processing by PowerPlay', 'Then'],
          lignes: [
            ['Interac', '$10', '$3,000', '0 to 4 h (24 h at most)', 'Instant'],
            ['Crypto', '$10', '$9,999', '0 to 4 h (24 h at most)', '60 minutes'],
            ['MuchBetter', '$10', '$3,000', '0 to 4 h', '0 to 4 h'],
            ['Card', '$10', '$9,999', '0 to 4 h (24 h at most)', 'Instant']
          ]
        },
        {
          type: 'p',
          texte: `These are stated times, not times we measured. PowerPlay notes that a withdrawal can take longer if it must check your identity first. In our latest tests, crypto withdrawals arrived in ${NOS.map((c) => `${heures(dernier(c, 'crypto')?.delaiHeures)} at ${c.nom}`).join(', ')}: all our times are in our [fast withdrawal casino ranking](/en-ca/fast-withdrawal-casinos/).`
        }
      ]
    },
    {
      id: 'dormant',
      titre: 'Watch out for dormant accounts',
      blocs: [
        {
          type: 'encadre',
          ton: 'alerte',
          titre: 'Six months without a transaction is enough',
          texte:
            'Under PowerPlay’s general terms, an account with no deposit, withdrawal or bet for **6 months** is dormant. The player then has **14 days** to play again or withdraw the balance; after that, the account is closed and the remaining balance is lost. Withdraw your money before a long break.'
        }
      ]
    },
    {
      id: 'compare',
      titre: 'PowerPlay or our casinos?',
      blocs: [
        {
          type: 'tableau',
          legende: 'Offers read on the official pages; our casinos’ times measured in our November 2026 tests.',
          entetes: ['Casino', 'Casino welcome bonus', 'Wagering', 'Crypto withdrawal'],
          lignes: [
            ['PowerPlay', '100% up to $200', '35x the bonus within 30 days', '0 to 4 h stated, 24 h at most'],
            ...NOS.map((c) => [lien(c), en(c).offre.titre, miseEn(c), `${heures(dernier(c, 'crypto')?.delaiHeures)} (our test)`])
          ]
        },
        {
          type: 'p',
          texte:
            '**What PowerPlay does well:** Interac and crypto, withdrawals stated in hours, French and English support around the clock, and a sports bonus that accepts single bets. **What our casinos do better:** bigger welcome packages with free spins, and withdrawal times we measured ourselves.'
        }
      ]
    }
  ],
  faq: [
    {
      q: 'Is PowerPlay legit?',
      r: 'PowerPlay has been online since 2018. It is operated by Deck Entertainment B.V. under a Curaçao Gaming Authority licence (OGL/2024/999/0482) and publishes its withdrawal limits and times. We did not open an account there: its withdrawal times are the ones it states.'
    },
    {
      q: 'Is PowerPlay legal in Canada?',
      r: 'PowerPlay.com accepts players outside Ontario under a Curaçao licence, not a provincial one. Ontario players use a separate site registered with iGaming Ontario.'
    },
    {
      q: 'What is the PowerPlay welcome bonus?',
      r: 'Casino: 100% up to $200, wagered 35x the bonus within 30 days. Sports: 100% up to $500, wagered 20x the bonus within 30 days at odds of 1.5 or more. Either way, pick the offer before your first deposit of $10 or more.'
    },
    {
      q: 'How long does a PowerPlay withdrawal take?',
      r: 'PowerPlay states processing in 0 to 4 hours, 24 hours at most. The money then arrives instantly by Interac or card, and in about 60 minutes in crypto, according to its payment help page.'
    },
    {
      q: 'What is the PowerPlay maximum withdrawal?',
      r: 'Per 24 hours: $3,000 by Interac or MuchBetter, $9,999 in crypto or by card, according to its payment help page.'
    },
    {
      q: 'What happens if I stop using my PowerPlay account?',
      r: 'After 6 months with no deposit, withdrawal or bet, the account is dormant. PowerPlay gives 14 days to come back or withdraw; after that, the account is closed and the remaining balance is lost, under its general terms.'
    }
  ],
  sources: [PP.casino, PP.sport, PP.paiements, PP.conditions, PP.apropos],
  connexes: ['/en-ca/fast-withdrawal-casinos/', '/en-ca/casino-bonuses/', '/en-ca/interac-casinos/', '/en-ca/crypto-casinos/']
};
