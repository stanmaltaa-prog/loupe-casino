/**
 * Sports Interaction review (17 November 2026). No deal with the brand: no link to it,
 * our casinos at the top. Everything comes from its official pages, read on 17 November 2026.
 */
import type { PageGuide } from '@/lib/contenu/pages/types';
import { CASINOS, type Casino } from '@/lib/casinos';
import { dernier } from '@/lib/tests';
import { cheminEn, miseEn } from './casinos';

const MAJ = '2026-11-17';

const SI = {
  sport: { titre: 'Sports Interaction: sports welcome offers (promotions page)', url: 'https://www.sportsinteraction.com/en-ca/p/promotions/sports/welcome-dual' },
  casino: { titre: 'Sports Interaction: 100% casino welcome bonus up to $3,000', url: 'https://www.sportsinteraction.com/en-ca/p/promotions/casino/welcome-3000-dual-cta' },
  conditions: { titre: 'Sports Interaction: general terms and conditions, amended May 25, 2026 (licence, age, inactivity)', url: 'https://help.sportsinteraction.com/en-CA/general-information/legal-matters/general-terms-and-conditions/general' },
  interac: { titre: 'Sports Interaction help: Interac e-Transfer deposits and withdrawals', url: 'https://help.sportsinteraction.com/en-CA/general-information/payments/payment-methods/interacetransfer' },
  interacFr: { titre: 'Sports Interaction help, French version: Interac e-Transfer (1 to 3 business days after approval)', url: 'https://help.sportsinteraction.com/fr/general-information/payments/payment-methods/interacetransfer' },
  moyens: { titre: 'Sports Interaction help: payment methods', url: 'https://help.sportsinteraction.com/en-CA/general-information/payments/payment-methods' },
  rachat: { titre: 'Covers: Entain buys Avid Gaming, owner of Sports Interaction (February 2022)', url: 'https://www.covers.com/industry/entain-sports-interaction-acquisition-february-2022' },
  app: { titre: 'App Store: Sports Interaction app listing', url: 'https://apps.apple.com/ca/app/id6444409687?l=en-ca' }
};

/** Same sports offers as the French site (checked on November 4, 2026; November 9 for Velobet). */
const CTA_SPORT_EN = [
  {
    type: 'cta' as const,
    casino: 'velobet',
    titre: '150% up to $1,000 + 10 free bets',
    detail:
      'First deposit of $10 or more. Wager 15x (deposit + bonus) on parlays of 3 or more selections at minimum odds of 1.30 each; bonus valid 30 days. Activate it before your first bet; the 10 free bets arrive once the first bet is settled. Amounts in Canadian dollars for a CAD account.',
    bouton: 'See Velobet’s sports offer'
  },
  {
    type: 'cta' as const,
    casino: 'rolletto',
    titre: '150% up to $1,500 + up to $200 in free bets',
    detail:
      'First deposit of $10 or more. Wager 15x (deposit + bonus) within 15 days, on parlays of 3 or more selections at minimum odds of 1.30 each. Activate the bonus before your first bet.',
    bouton: 'See Rolletto’s sports offer'
  },
  {
    type: 'cta' as const,
    casino: 'betportal',
    titre: 'Free bet worth 100% of your bet, up to $100',
    detail:
      'Deposit $20 or more, then place a pre-match parlay of 3 to 10 selections at total odds between 3.00 and 10.00. Free bet valid 7 days; its amount is deducted from the winnings. Amounts in Canadian dollars for a CAD account.',
    bouton: 'See BetPortal’s sports offer'
  }
];

const parId = (id: string) => CASINOS.find((c) => c.id === id);
const SPORT = ['velobet', 'rolletto', 'betportal'].map(parId).filter((c): c is Casino => Boolean(c));
const heures = (n?: number | null) => (n === null || n === undefined ? 'not measured' : `${n} h`);
const lien = (c: Casino) => `[${c.nom}](${cheminEn(c)})`;
const VELO = parId('velobet');
const CRYPTO_VELO = VELO ? dernier(VELO, 'crypto')?.delaiHeures : undefined;

export const SPORTS_INTERACTION_EN: PageGuide = {
  chemin: '/en-ca/sports-interaction-review/',
  nomFil: 'Sports Interaction review',
  titre: 'Sports Interaction Review 2026: Bonus, Casino and Payouts',
  description:
    'Sports Interaction review for Canada: 125% sports bonus up to $750, $3,000 casino bonus, Interac payout times and the Kahnawake licence, checked in detail.',
  h1: 'Sports Interaction review: what the bonuses and payouts really involve',
  chapeau:
    'Sports Interaction is one of the most searched betting sites in Canada. We read its offers, its terms and its help centre to show what it really asks of you, and where our betting sites do better.',
  modifie: MAJ,
  offresHaut: SPORT.map((c) => c.id),
  resume: 'Sports Interaction checked: sports and casino bonuses, payouts, licence and alternatives.',
  sections: [
    {
      id: 'at-a-glance',
      titre: 'Sports Interaction at a glance',
      blocs: [
        {
          type: 'tableau',
          legende: 'Details read on Sports Interaction’s official pages on November 17, 2026.',
          entetes: ['', 'Sports Interaction'],
          lignes: [
            ['Operator', 'ElectraWorks Limited, Gibraltar (site footer)'],
            ['Licence', 'Kahnawake Gaming Commission, reference 899 (general terms)'],
            ['Group', 'Entain, which announced the purchase of Avid Gaming, owner of the brand, on February 7, 2022'],
            ['Minimum age', '19 or older (or a higher legal age where you live), under its general terms'],
            ['Products', 'Sports betting and online casino'],
            ['Sports bonus', 'Your choice: a No Sweat Bet up to $500 or 125% up to $750'],
            ['Casino bonus', '100% up to $3,000, wager the bonus 30x within 14 days'],
            ['Payments', 'Interac e-Transfer, Visa, Mastercard, Apple Pay, bank wire'],
            ['Crypto', 'Not in the payment methods listed in its help centre'],
            ['Languages', 'English and French']
          ]
        },
        {
          type: 'p',
          texte:
            'We have no commercial deal with Sports Interaction and did not open an account there: this page is based on its official pages. The sites in our ranking go through [real deposit and withdrawal tests](/en-ca/casino-withdrawal-times/), repeated about every 3 days.'
        }
      ]
    },
    {
      id: 'legit',
      titre: 'Is Sports Interaction legit and legal?',
      blocs: [
        {
          type: 'p',
          texte:
            'Sports Interaction is licensed by the **Kahnawake Gaming Commission**, on the Mohawk territory of Kahnawà:ke near Montreal (licence 899 under its general terms). In 2022, Covers reported that the brand is operated in Canada by an entity of the Mohawk Council of Kahnawà:ke, with services from Avid Gaming, which Entain bought.'
        },
        {
          type: 'p',
          texte:
            'This is not a provincial licence. In Quebec, only Loto-Québec is authorized by the province to offer sports betting. If you have a dispute with Sports Interaction, your recourse is the Kahnawake Gaming Commission, not a provincial body. Our guide to [online gambling laws in Canada](/en-ca/is-online-gambling-legal-in-canada/) covers each province.'
        }
      ]
    },
    {
      id: 'sports-bonus',
      titre: 'The sports welcome bonus: two offers to choose from',
      blocs: [
        {
          type: 'p',
          texte: 'New customers pick one of the two offers when they sign up; no code is needed. Both are listed until December 31, 2026.'
        },
        {
          type: 'tableau',
          legende: 'Terms read on Sports Interaction’s sports promotions page on November 17, 2026.',
          entetes: ['', '$500 No Sweat Bet', '125% bonus up to $750'],
          lignes: [
            ['Minimum deposit', '$10', '$10'],
            ['How it works', 'If your first bet with the token loses, you get a bonus bet of the same amount, up to $500', '125% of your first deposit as a bonus, up to $750'],
            ['Condition', 'Use the bonus bet within 7 days at odds of 1.5 or more; winnings exclude the bonus bet amount', 'Wager 6x (deposit + bonus) within 60 days at odds of 1.5 or more'],
            ['Locked money', 'Bonus bets cannot be withdrawn', 'Deposit, bonus and winnings stay restricted until the wagering is done'],
            ['Claim', 'Within 10 days of opening the account', 'Within 10 days; the bonus expires after 60 days']
          ]
        },
        {
          type: 'encadre',
          titre: 'Example with the 125% bonus: $100 deposit',
          texte:
            'Bonus: $125. Wagering: 6 × ($100 + $125) = **$1,350 in bets** within 60 days, at odds of 1.5 or more. Your $100 deposit stays locked with the bonus until the end. If you withdraw early, the bonus and its winnings are cancelled.'
        },
        {
          type: 'p',
          texte:
            'On paper, that is lighter than the sports bonuses at [Velobet](/en-ca/velobet-casino/) and [Rolletto](/en-ca/rolletto-casino/) (15x deposit + bonus, on parlays). But the No Sweat Bet only refunds a losing bet as a bonus bet, never as withdrawable cash, so it is worth far less than $500.'
        }
      ]
    },
    {
      id: 'casino-bonus',
      titre: 'The $3,000 casino bonus',
      blocs: [
        {
          type: 'liste',
          items: [
            '**Offer:** 100% of your first deposit, up to $3,000, from a $10 deposit.',
            '**Wagering:** 30x the bonus amount within 14 days, on qualifying games only.',
            '**Qualifying games:** a list of slots (including Gates of Olympus, Sweet Bonanza and Big Bass Bonanza), jackpot slots, blackjack and live dealer blackjack.',
            '**Deadline:** deposit within 10 days of opening the account.',
            '**Locked money:** deposit, bonus and winnings show as “restricted” until the wagering is done.'
          ]
        },
        {
          type: 'encadre',
          titre: 'Example: $100 deposit',
          texte:
            'Bonus: $100. Wagering: 30 × $100 = **$3,000 in bets** within 14 days, about $215 a day. The $3,000 maximum only applies if you deposit $3,000: the wagering then climbs to $90,000 within the same 14 days.'
        },
        {
          type: 'p',
          texte: `For comparison, the wagering at our casinos: ${SPORT.map((c) => `${lien(c)} ${miseEn(c)}`).join('; ')}. Every offer is detailed in our [casino bonus comparison](/en-ca/casino-bonuses/).`
        }
      ]
    },
    {
      id: 'payouts',
      titre: 'Deposits and withdrawals at Sports Interaction',
      blocs: [
        {
          type: 'liste',
          items: [
            '**Methods listed:** Interac e-Transfer, Visa, Mastercard, Apple Pay, bank wire and fast bank transfer, all in Canadian dollars.',
            '**Interac deposits:** instant, or up to 15 minutes depending on the bank, with no fee.',
            '**Interac withdrawals:** each withdrawal is first approved by its payments team, which takes **up to 2 business days**, then the money arrives **within 8 hours**, according to its English help centre (the French version says 1 to 3 business days). No fee.',
            '**Identity check:** required to confirm your age and identity.'
          ]
        },
        {
          type: 'p',
          texte: `So an Interac withdrawal can take about 2 business days and 8 hours, or up to 5 business days under the French version of its help centre.${CRYPTO_VELO ? ` In our latest test, a crypto withdrawal at Velobet arrived in ${CRYPTO_VELO} h.` : ''} All our measured times are in our [fast withdrawal casino ranking](/en-ca/fast-withdrawal-casinos/).`
        }
      ]
    },
    {
      id: 'compare',
      titre: 'Sports Interaction or our betting sites?',
      blocs: [
        {
          type: 'tableau',
          legende: 'Sports offers read on the promotions pages (Sports Interaction on November 17, 2026; our sites on November 4 and 9, 2026).',
          entetes: ['Site', 'Sports bonus', 'Condition', 'Withdrawal', 'Crypto'],
          lignes: [
            ['Sports Interaction', '125% up to $750 or a $500 No Sweat Bet', '6x (deposit + bonus), odds of 1.5 or more', 'Up to 2 business days of approval, then up to 8 h (Interac, per its help centre)', 'No'],
            ...SPORT.map((c) => {
              const cta = CTA_SPORT_EN.find((x) => x.casino === c.id);
              return [
                lien(c),
                cta ? cta.titre : 'Sports betting available',
                c.id === 'betportal' ? 'Pre-match parlay of 3 to 10 selections, total odds 3.00 to 10.00' : '15x (deposit + bonus), parlays of 3 or more selections',
                `Crypto: ${heures(dernier(c, 'crypto')?.delaiHeures)}; card: ${heures(dernier(c, 'carte')?.delaiHeures)} (our test)`,
                c.paiements.crypto.length || dernier(c, 'crypto') ? 'Yes' : 'No'
              ];
            })
          ]
        },
        {
          type: 'p',
          texte:
            '**Where Sports Interaction does better:** a lighter sports bonus, a well-known Canadian brand and Interac payments in Canadian dollars. **Where our sites do better:** crypto, withdrawals measured in hours in our tests, and casino welcome packages with free spins.'
        },
        ...CTA_SPORT_EN
      ]
    },
    {
      id: 'good-to-know',
      titre: 'Good to know before you sign up',
      blocs: [
        {
          type: 'liste',
          items: [
            '**Inactive accounts:** with no login, bet or deposit for 365 days, the account becomes inactive and an administrative fee can be taken every 30 days. After 18 months of inactivity, the account can be closed and its balance held; you can still claim it by contacting customer service.',
            '**App:** the App Store listing we checked refers to Ontario and Alberta rules. We could not confirm an app for the rest of Canada; the site also works in your phone’s browser.',
            '**Ontario and Alberta:** the site separates Ontario from the “rest of Canada”. Like our whole site, this page covers the rest of Canada, outside Ontario and Alberta.',
            '**Play safe:** set a deposit limit as soon as you open the account. Our [responsible gambling](/en-ca/responsible-gambling/) page lists free help in every province.'
          ]
        }
      ]
    }
  ],
  faq: [
    {
      q: 'Is Sports Interaction legit?',
      r: 'It is operated by ElectraWorks Limited, belongs to the UK group Entain and holds a licence from the Kahnawake Gaming Commission. Its help centre says Interac withdrawals are approved within 2 business days, then arrive within 8 hours.'
    },
    {
      q: 'Is Sports Interaction legal in Quebec?',
      r: 'It is licensed by the Kahnawake Gaming Commission, not by the Quebec government. In Quebec, only Loto-Québec is authorized by the province to offer sports betting.'
    },
    {
      q: 'What is the Sports Interaction welcome bonus?',
      r: 'For sports, your choice: a No Sweat Bet up to $500 (refunded as a bonus bet if your bet loses) or 125% of your first deposit up to $750, wagered 6x (deposit + bonus) within 60 days. For casino: 100% up to $3,000, with the bonus wagered 30x within 14 days.'
    },
    {
      q: 'Do I need a Sports Interaction bonus code?',
      r: 'Not for the welcome offer: you pick it on its promotions page when you sign up. We do not have an exclusive code.'
    },
    {
      q: 'How long does a Sports Interaction withdrawal take?',
      r: 'According to its English help centre, an Interac withdrawal is approved within 2 business days, then arrives within 8 hours, with no fee. The French version of the same page says 1 to 3 business days after approval.'
    },
    {
      q: 'Who owns Sports Interaction?',
      r: 'The UK group Entain, which announced the purchase of Avid Gaming, owner of the brand, on February 7, 2022. The site is operated by ElectraWorks Limited in Gibraltar.'
    },
    {
      q: 'How old do you have to be to play at Sports Interaction?',
      r: 'Its general terms require you to be 19 or older, or older still if the legal age where you live is higher. So it asks for 19 even in Manitoba and Quebec, where the legal age is 18.'
    }
  ],
  sources: [SI.sport, SI.casino, SI.conditions, SI.interac, SI.interacFr, SI.moyens, SI.rachat, SI.app],
  connexes: ['/en-ca/casino-bonuses/', '/en-ca/fast-withdrawal-casinos/', '/en-ca/legit-online-casinos/', '/en-ca/is-online-gambling-legal-in-canada/']
};
