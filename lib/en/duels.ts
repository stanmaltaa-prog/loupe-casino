/**
 * English head-to-head comparisons (/en-ca/compare/<a>-vs-<b>/).
 * Same keys and same facts as lib/contenu/duels.ts (French): update both when an offer changes.
 */
export type DuelEn = {
  resume: string;
  verdict: string[];
  choisirA: string[];
  choisirB: string[];
};

export const DUELS_EN: Record<string, DuelEn> = {
  'rolletto-vs-velobet': {
    resume: 'Same operator and same licence; Velobet gives 30 days to clear the bonus wagering, Rolletto 5 days.',
    verdict: [
      'Rolletto and Velobet are two sites run by the same operator, Santeda International B.V., under the same Curacao licence. Their general terms set the same withdrawal limits: $7,500 per week and $15,000 per month.',
      'The difference is the bonus. Both ask for 30x (deposit + bonus), but Velobet gives 30 days to get there, against 5 days at Rolletto. For a $100 deposit at the first tier, you must wager $7,500 in both cases: about $250 a day at Velobet, $1,500 a day at Rolletto. Rolletto does show a higher bonus cap over three deposits.'
    ],
    choisirA: ['You want the biggest pack over three deposits', 'You play a lot over a few days', 'You want crypto withdrawals announced as instant'],
    choisirB: ['You want time to clear the wagering', 'You prefer a $10 minimum withdrawal', 'You want the fastest withdrawal in our tests']
  },
  'velobet-vs-celsius': {
    resume: 'Velobet wins on transparency and wagering; Celsius on everyday payment methods.',
    verdict: [
      'Velobet shows its operator and a Curacao licence number you can check. Celsius names its company but cites an Anjouan licence with no number. On wagering, the gap is clear: for a deposit of 100 at the first tier, you wager 7,500 within 30 days at Velobet, against 10,000 within 20 days at Celsius.',
      'Celsius keeps a practical edge: it shows Visa and Mastercard, Apple Pay, Google Pay, Skrill, PayPal and Paysafecard. Velobet leads with crypto, other methods opening once the account is verified. Velobet’s withdrawal limits are also higher: $7,500 per week against $2,500.'
    ],
    choisirA: ['You want an operator and licence you can check', 'You want the lighter wagering of the two', 'You plan large withdrawals'],
    choisirB: ['You want to pay by card or e-wallet', 'You want a 200% bonus on the second deposit', 'You do not play with crypto']
  },
  'velobet-vs-betportal': {
    resume: 'BetPortal has the lightest wagering; Velobet has transparency and clear withdrawal rules.',
    verdict: [
      'BetPortal calculates the wagering on the bonus only: for a deposit of 100 at the first tier, 4,500 to wager, against 7,500 at Velobet. That is the most concrete advantage for clearing a bonus.',
      'Velobet makes up for it with transparency: operator, registration number and licence displayed, and a published minimum withdrawal, processing time and limits. BetPortal shows no operator and no licence number, and we did not find the deadline to clear its wagering.'
    ],
    choisirA: ['You want to know who runs the site', 'You want published withdrawal rules', 'You want 30 days to clear the bonus'],
    choisirB: ['You want the smallest amount to wager', 'You like daily cashback', 'You are fine testing with a small deposit']
  },
  'velobet-vs-1win': {
    resume: 'Velobet for transparency and clear terms; 1win for the biggest percentage advertised.',
    verdict: [
      '1win advertises the biggest percentage we compare, up to 600% over four deposits with 500 free spins, according to its bonus page. We could not confirm its wagering requirement or view its legal notices from our checking location.',
      'Velobet publishes everything you need to decide: operator, licence, 30x (deposit + bonus) within 30 days, minimum withdrawal, processing time and limits. If you want to know exactly what you are signing up for, Velobet is the safer of the two.'
    ],
    choisirA: ['You want bonus terms published in full', 'You want an identifiable operator', 'You want the fastest withdrawal in our tests'],
    choisirB: ['You want the biggest percentage advertised', 'You want a bonus spread over four deposits', 'You are comfortable reading the terms yourself']
  },
  'rolletto-vs-celsius': {
    resume: 'Rolletto wins on transparency and bonus size; Celsius on the wagering deadline and the game library.',
    verdict: [
      'Rolletto shows its operator and a licence number you can check, which Celsius only half does (Anjouan licence with no number). Its pack goes up to $5,500, while Celsius shows no cap.',
      'On wagering, both are demanding in different ways: Rolletto asks for 30x (deposit + bonus) within 5 days, Celsius 50x (deposit + bonus) within 20 days. For a deposit of 100 at the first tier, that is 7,500 to wager in 5 days at Rolletto against 10,000 in 20 days at Celsius. Heavy players will prefer Rolletto; slower players will find the Celsius deadline less stressful, but the amount to wager is higher.'
    ],
    choisirA: ['You want an operator and licence you can check', 'You play slots several days in a row', 'You want the biggest welcome pack'],
    choisirB: ['You want the widest choice of live games', 'You prefer a $10 minimum deposit for the bonus', 'You want more time to clear the wagering']
  },
  'rolletto-vs-betportal': {
    resume: 'BetPortal has the easiest bonus to clear; Rolletto has transparency and the biggest amount.',
    verdict: [
      'This is the most interesting matchup we compare. BetPortal calculates the wagering on the bonus only (30x), which sharply reduces the amount to wager: 4,500 for a deposit of 100 at the first tier, against 7,500 at Rolletto.',
      'But Rolletto shows its operator and licence number, and BetPortal shows neither. If the safety of your funds comes first, Rolletto is the logical choice; if you want a realistic bonus and are fine starting small, BetPortal is the better deal.'
    ],
    choisirA: ['Operator transparency is your priority', 'You want a big pack over three deposits', 'You also bet on esports'],
    choisirB: ['You want the lightest wagering', 'You like daily cashback', 'You are fine testing with a small deposit']
  },
  'rolletto-vs-1win': {
    resume: 'Rolletto can be checked end to end; 1win bets on volume but remains to be confirmed.',
    verdict: [
      'Rolletto publishes its wagering terms, its operator and its licence. For 1win, we could not confirm any of the three. With comparable offers, that is what makes the difference in our grid.',
      '1win keeps one advantage: more than 11,000 games announced and a bonus spread over four deposits with 500 free spins. It suits experienced players who will read the terms themselves.'
    ],
    choisirA: ['You want published terms you can check', 'You want an identifiable operator', 'You bet on sports and esports'],
    choisirB: ['You want the largest possible game library', 'You prefer a bonus spread over four deposits', 'You will read the wagering terms yourself']
  },
  'celsius-vs-betportal': {
    resume: 'BetPortal clearly wins on the bonus; Celsius on operator and withdrawal transparency.',
    verdict: [
      'On the bonus, there is no contest: BetPortal asks for 30x the bonus, Celsius 50x the deposit plus the bonus. For a deposit of 100 at the first tier, that is 4,500 to wager at BetPortal against 10,000 at Celsius.',
      'Celsius takes the lead on transparency: it names its operator and publishes its withdrawal limits ($2,500 per week). BetPortal shows no operator and no licence number, and we did not find its withdrawal rules.'
    ],
    choisirA: ['You want to know the withdrawal rules before playing', 'You want a named operator', 'You play without a bonus or with a small deposit'],
    choisirB: ['You want a bonus you can realistically clear', 'You like recurring promotions', 'You want free spins from the first deposit']
  },
  'celsius-vs-1win': {
    resume: 'Two huge game libraries: Celsius is more transparent, 1win looks more generous.',
    verdict: [
      'Both casinos bet on game volume. Celsius wins on transparency: named operator, published wagering terms and withdrawal limits with figures. For 1win, that information could not be confirmed.',
      '1win offers more free spins (500 over four deposits) and a bonus spread over more deposits. But without confirmed wagering terms, there is no way to say whether it is easier to clear than the Celsius bonus.'
    ],
    choisirA: ['You want written terms with figures', 'You pay by e-wallet or card', 'You prefer a known wagering deadline (20 days)'],
    choisirB: ['You want lots of free spins', 'You want a bonus over four deposits', 'You will read the wagering terms yourself']
  },
  'betportal-vs-1win': {
    resume: 'BetPortal has published, light wagering terms; 1win remains to be verified.',
    verdict: [
      'Both sites share a weak point: the operator and the licence are not confirmed. The difference is the bonus: BetPortal publishes a wagering requirement of 30x the bonus, one of the lightest on the market, while 1win’s could not be verified.',
      '1win announces a larger library (more than 11,000 games against more than 7,000) and more free spins (500 against 250).'
    ],
    choisirA: ['You want a known, light wagering requirement', 'You like daily cashback', 'You play crash games'],
    choisirB: ['You want the largest library', 'You want the most free spins', 'You will read the wagering terms yourself']
  }
};
