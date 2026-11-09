/**
 * English texts for each casino. The facts, figures, dates and sources come from donnees/casinos.json:
 * this file only translates them. When the French data changes, update the matching text here.
 */
import type { Question } from '@/components/Faq';
import { CRITERES, type Casino, type Critere, type Palier } from '@/lib/casinos';
import { montantEn } from './site';

export type CasinoEn = {
  accroche: string;
  offre: {
    titre: string;
    sousTitre: string;
    noteDevise: string;
    toursDetail: string;
    miseMax: string | null;
    jeuxAdmissibles: string | null;
    activation: string | null;
    autres: string[];
  };
  autresOffres: { titre: string; detail: string }[];
  licenceNote: string;
  canada: string;
  devises?: string;
  nombreJeux?: string;
  retraits: { resume: string; detail: string[] } | null;
  raisons: Record<Critere, string>;
  pointsForts: string[];
  pointsFaibles: string[];
  aConfirmer: string[];
  verdict: string[];
  pourQui: string[];
  pasPourQui: string[];
  bonusIntro: string[];
  faqAvis: Question[];
  faqBonus: Question[];
};

const CGA = 'Licence issued by the Curacao Gaming Authority. It is not an authorization from any Canadian province.';
const CONFIRME = 'Canadian players accepted, confirmed in writing by the affiliate manager on November 4, 2026.';

export const CASINOS_EN: Record<string, CasinoEn> = {
  velobet: {
    accroche: 'Same operator as Rolletto, but six times longer to clear the bonus wagering.',
    offre: {
      titre: 'Up to €2,000 + 300 free spins',
      sousTitre: 'Casino welcome pack on your first 3 deposits (330% in total)',
      noteDevise:
        'Amounts as published in euros. For a first deposit between €500 and €1,000, the bonus becomes 100% (up to €1,000). Accounts can be opened in Canadian dollars: check the amounts in your currency.',
      toursDetail:
        '30 free spins with a first deposit of €10 or more, then 270 spins at 30 a day for 9 days. You must log in every day to receive them.',
      miseMax: '€5 per spin',
      jeuxAdmissibles: 'Casino games only',
      activation: null,
      autres: ['One active bonus at a time.', '€20 minimum deposit for the 2nd and 3rd deposit bonuses.']
    },
    autresOffres: [
      { titre: 'Crypto bonus', detail: '160% up to €1,000 on your first crypto deposit (€10 minimum), slots only, 30x (deposit + bonus) wagering within 30 days.' },
      { titre: 'Sports welcome offer', detail: '150% up to €1,000 + 10 free bets, 15x (deposit + bonus) wagering on accumulators of at least 3 selections at odds of 1.30 or more.' },
      { titre: 'VIP cashback', detail: '10% cashback with no wagering, on deposits made since your last withdrawal or bonus.' }
    ],
    licenceNote: CGA,
    canada:
      'Canada is not on the list of excluded countries in the general terms, and the sign-up form offers Canada and the Canadian dollar (checked November 9, 2026). Written confirmation from the affiliate manager is pending.',
    devises: 'AUD, BRL, CAD, EUR, GBP and USD (sign-up form)',
    retraits: {
      resume: 'Within 3 business days; €7,500 per week',
      detail: [
        'Minimum withdrawal: €10 or the equivalent.',
        'Processed within three banking business days, bank transfers included.',
        'Limits: €7,500 per week and €15,000 per month, or the equivalent.',
        'A 20% fee may apply if deposited funds were not wagered at least once before the withdrawal.',
        'Bank transfer is not offered for withdrawals in US dollars.'
      ]
    },
    raisons: {
      transparence: 'Operating company (Santeda International B.V., no. 151296) and CGA licence number displayed: everything can be checked.',
      bonus: '30x (deposit + bonus) within 30 days with a €5 maximum bet: six times longer than at Rolletto for the same wagering.',
      retraits: '€10 minimum, processing within 3 business days and published limits: €7,500 per week, €15,000 per month.',
      produit: 'Casino, live casino, sports betting, esports and mini-games, eight cryptocurrencies and Canadian-dollar accounts.',
      protection: 'Account limits, time-outs, self-exclusion from 6 months to 5 years and 24/7 customer support announced.'
    },
    pointsForts: [
      '30 days to clear the wagering, versus 5 at Rolletto',
      'Operator and licence number displayed',
      'Canadian-dollar accounts offered at sign-up',
      '€10 minimum withdrawal and published limits'
    ],
    pointsFaibles: [
      'Wagering of 30x the deposit plus the bonus',
      'Free spins spread over 10 days of logins',
      '20% fee if a deposit is withdrawn before being wagered once',
      '20% monthly inactivity fee on a dormant account'
    ],
    aConfirmer: ['Written acceptance of Canadian players by the affiliate manager', 'Interac support'],
    verdict: [
      'Velobet tops our grid because it pairs a transparent operator with the most workable bonus timeline in our comparison. The company behind it, Santeda International B.V., and its Curacao licence number are both displayed, and the 30x (deposit + bonus) wagering comes with 30 days to complete it.',
      'The bonus is still demanding: 30 times the deposit plus the bonus is a lot of play, and most of the free spins arrive 30 a day over nine days. Withdrawal rules are published, with limits of €7,500 a week and €15,000 a month.'
    ],
    pourQui: ['Players who want time to clear a bonus', 'Players who want to know who runs the site', 'Crypto users: eight coins accepted'],
    pasPourQui: ['Players who need Interac (not confirmed)', 'Players looking for light wagering', 'Players who will not log in every day for the free spins'],
    bonusIntro: [
      'Velobet spreads its casino welcome pack over three deposits: 150%, then 100%, then 80%, for up to €2,000 in bonus money plus 300 free spins. The figures below come from the official promotions page.',
      'What matters most is the wagering: 30 times the deposit plus the bonus, within 30 days, with a maximum bet of €5 per spin. That deadline is six times longer than at Rolletto, which is run by the same company.'
    ],
    faqAvis: [
      {
        q: 'Is Velobet legit?',
        r: 'Velobet shows its operator, Santeda International B.V. (registration no. 151296, Curacao), and a Curacao Gaming Authority licence number, OGL/2024/1798/1048. That makes it one of the most transparent sites in our comparison. A Curacao licence is not an authorization from a Canadian province.'
      },
      {
        q: 'Does Velobet accept Canadian players?',
        r: 'Canada is not on the excluded-countries list of the general terms, and the sign-up form offers Canada and Canadian-dollar accounts. We are waiting for written confirmation from the affiliate manager. We do not cover Ontario or Alberta.'
      },
      {
        q: 'How long do Velobet withdrawals take?',
        r: 'The general terms say withdrawals are processed within three banking business days. The minimum is €10 or the equivalent, and the limits are €7,500 per week and €15,000 per month.'
      },
      {
        q: 'Is Velobet linked to Rolletto?',
        r: 'Yes. Both sites display the same operating company, Santeda International B.V., and the same Curacao licence number. Their welcome offers and wagering deadlines are different.'
      }
    ],
    faqBonus: [
      {
        q: 'What is the Velobet wagering requirement?',
        r: '30 times the deposit plus the bonus, within 30 days. With a €100 first deposit, that means €7,500 in bets before the bonus can be withdrawn.'
      },
      {
        q: 'What is the minimum deposit for the Velobet bonus?',
        r: '€10 for the first deposit bonus, and €20 for the second and third deposit bonuses, according to the promotions page.'
      },
      {
        q: 'How do the 300 free spins work?',
        r: 'You get 30 spins with your first deposit, then 30 a day for nine days. You have to log in each day to receive them.'
      }
    ]
  },

  rolletto: {
    accroche: 'The biggest welcome pack in our comparison, with the operator and licence number displayed.',
    offre: {
      titre: 'Up to $5,500 + 200 free spins',
      sousTitre: 'Casino welcome pack on your first 3 deposits',
      noteDevise: 'The operator shows its amounts in £/€/$: the currency that applies is the one of your account.',
      toursDetail:
        '50 spins with the first deposit, then 30 spins a day for 5 consecutive days of logging in, on Rolletto Luck Bonus Buy. Missing a day forfeits the remaining spins. Spins are valid for 72 hours.',
      miseMax: '$5 per spin',
      jeuxAdmissibles: 'Slots only',
      activation: 'Manual, in the BONUS tab of your account, before you play',
      autres: [
        'One active bonus at a time, not combinable with another promotion.',
        'Bonus funds and real money are not separated: cancelling the bonus removes the bonus, the winnings made with it and the bets placed between activation and cancellation.',
        'If the wagering is not completed within 5 days, the bonus and the related winnings are lost.'
      ]
    },
    autresOffres: [
      { titre: 'Crypto bonus', detail: '100% up to $1,000 + 200 free spins, $20 minimum deposit (instead of the casino pack).' },
      { titre: 'Sports welcome offer', detail: '150% up to $1,500 + up to $200 in free bets.' },
      { titre: 'Esports welcome offer', detail: '100% up to $500, $20 minimum deposit.' }
    ],
    licenceNote: CGA,
    canada: CONFIRME,
    retraits: {
      resume: 'Within 3 business days (terms); instant crypto according to the affiliate manager',
      detail: [
        'Minimum withdrawal: €20 or the equivalent, according to the general terms.',
        'Processed within three banking business days, bank transfers included, according to the general terms.',
        'Limits: €7,500 per week and €15,000 per month, or the equivalent, according to the general terms.',
        'The affiliate manager states in writing (November 4, 2026) that crypto withdrawals are instant and bank transfers take under 24 hours.',
        'Deposits must be wagered at least once before they can be withdrawn.'
      ]
    },
    raisons: {
      transparence: 'Operating company, registration number and CGA licence number displayed: everything can be checked.',
      bonus: 'Very generous offer, but 30x (deposit + bonus) to clear in only 5 days, on slots only.',
      retraits: 'Minimum, timing and limits published in the terms: processing within 3 business days, €7,500 per week and €15,000 per month.',
      produit: 'Casino, sports betting and esports in one account, eight cryptocurrencies accepted.',
      protection: 'Account limits, time-outs, self-exclusion and 24/7 customer support announced on the responsible gambling page.'
    },
    pointsForts: [
      'The biggest pack in our comparison: up to $5,500 over 3 deposits',
      'Operator and licence number displayed',
      '200 free spins on top of the cash bonus',
      'Eight cryptocurrencies accepted'
    ],
    pointsFaibles: [
      'Only 5 days to clear 30x (deposit + bonus)',
      'Daily spins lost if you miss a single day of logging in',
      'Bonus valid on slots only',
      'Deposits must be wagered once before any withdrawal'
    ],
    aConfirmer: ['Interac and Canadian-dollar support'],
    verdict: [
      'Rolletto has the biggest welcome pack we compare, up to $5,500 and 200 free spins over three deposits, and it is just as transparent as Velobet: same operator, same Curacao licence number, both displayed.',
      'The catch is the clock. The 30x (deposit + bonus) wagering must be completed in 5 days, on slots only, with a $5 maximum bet. That is a heavy pace for most players, which is why Rolletto scores lower than Velobet on the bonus criterion.'
    ],
    pourQui: ['High-volume slot players who can wager fast', 'Players who want casino, sports and esports in one account', 'Crypto users: eight coins accepted'],
    pasPourQui: ['Players who need more than 5 days to clear a bonus', 'Table game and live casino players (bonus is slots only)', 'Players who need Interac (not confirmed)'],
    bonusIntro: [
      'Rolletto offers the largest casino welcome pack in our comparison: 150%, 100% and 50% on your first three deposits, for up to $5,500, plus 200 free spins. The figures come from the official promotions page.',
      'The size of the pack comes with a short deadline: 30 times the deposit plus the bonus, in 5 days, on slots only. Read the worked example below before you activate it.'
    ],
    faqAvis: [
      {
        q: 'Is Rolletto legit?',
        r: 'Rolletto displays its operator, Santeda International B.V. (no. 151296, Curacao), and its Curacao Gaming Authority licence number, OGL/2024/1798/1048. A Curacao licence is not an authorization from a Canadian province.'
      },
      {
        q: 'Does Rolletto accept Canadian players?',
        r: 'Yes. The affiliate manager confirmed in writing on November 4, 2026 that Canadian players are accepted. We do not cover Ontario or Alberta.'
      },
      {
        q: 'How long do Rolletto withdrawals take?',
        r: 'The general terms say within three banking business days, with a €20 minimum and limits of €7,500 per week and €15,000 per month. The affiliate manager says crypto withdrawals are instant.'
      }
    ],
    faqBonus: [
      {
        q: 'What is the Rolletto wagering requirement?',
        r: '30 times the deposit plus the bonus, within 5 days, on slots only. With a $100 first deposit and a $150 bonus, that means $7,500 in bets in 5 days.'
      },
      {
        q: 'Can I cancel the Rolletto bonus?',
        r: 'Yes, but bonus funds and real money are not separated. Cancelling removes the bonus, the winnings made with it and the bets placed since activation.'
      },
      {
        q: 'How do I get the 200 free spins?',
        r: '50 spins come with the first deposit, then 30 a day for 5 consecutive days of logging in. Missing a day forfeits the rest. Spins are valid for 72 hours.'
      }
    ]
  },

  celsius: {
    accroche: 'A very large catalogue and withdrawal rules published in black and white.',
    offre: {
      titre: '100% then 200% on your first 2 deposits',
      sousTitre: 'Casino welcome bonus',
      noteDevise: 'The official page shows the offer in euros without a maximum. We do not show a cap until the operator confirms it.',
      toursDetail: '',
      miseMax: '$5 or 10% of your available balance, whichever is lower',
      jeuxAdmissibles: 'Depends on the terms of each promotion',
      activation: null,
      autres: [
        'The bonus expires 20 days after it is claimed if the wagering is not completed.',
        'Winnings from a no-deposit bonus or free spins are capped at €/$100.',
        'The 10% balance rule does not apply to bets under €/$0.50.'
      ]
    },
    autresOffres: [],
    licenceNote:
      'The footer says “Anjouan Gaming Licence” with no number. A “Gaming Curacao” badge also appears, but it links to BeGambleAware: it does not prove a Curacao licence.',
    canada: CONFIRME,
    devises: 'EUR and cryptocurrencies (no Canadian dollar shown)',
    nombreJeux: 'More than 6,000 slots and 800 live games, according to the operator',
    retraits: {
      resume: 'Up to €2,500 per week',
      detail: [
        'Winnings up to €10,000: paid in weekly instalments of up to €2,500.',
        'Winnings above €10,000: paid in monthly instalments of up to €10,000.',
        'Rakeback: withdrawals capped at 20 times the amount, unless stated otherwise.'
      ]
    },
    raisons: {
      transparence: 'Company and registration number displayed, but an Anjouan licence without a number and a contradictory Curacao badge.',
      bonus: '50x (deposit + bonus) wagering, one of the heaviest on the market, and no bonus cap shown.',
      retraits: 'Rules clearly published, but a €2,500 weekly limit for big wins.',
      produit: 'Very large catalogue (more than 6,000 slots and 800 live games announced), many cryptocurrencies.',
      protection: 'Responsible gambling tools not checked in detail: neutral score.'
    },
    pointsForts: [
      'More than 6,000 slots and 800 live games announced',
      'Withdrawal rules published with figures',
      'Low minimum deposit: $10',
      'Nine cryptocurrencies and several e-wallets'
    ],
    pointsFaibles: [
      '50x (deposit + bonus) wagering: very demanding',
      'Anjouan licence with no number displayed',
      'Withdrawals limited to €2,500 per week',
      'No Canadian dollar or Interac shown'
    ],
    aConfirmer: ['Dollar cap of each bonus tier', 'Anjouan licence number'],
    verdict: [
      'Celsius is a catalogue-first casino: more than 6,000 slots and 800 live games according to the operator, nine cryptocurrencies and several e-wallets, and withdrawal rules written out with figures.',
      'Two things hold it back. The welcome bonus asks for 50 times the deposit plus the bonus, among the heaviest we have seen, with no cap displayed. And the licence shown is from Anjouan, without a number, next to a Curacao badge that does not prove a Curacao licence.'
    ],
    pourQui: ['Players who want a huge game library', 'Players who use e-wallets or crypto', 'Players who read withdrawal limits before depositing'],
    pasPourQui: ['Players who want a bonus they can realistically clear', 'Players who want a numbered licence', 'High rollers (withdrawals of €2,500 per week)'],
    bonusIntro: [
      'Celsius gives 100% on the first deposit and 200% on the second. The official page shows no maximum amount, so we do not display one.',
      'The wagering is the real story: 50 times the deposit plus the bonus, within 20 days, with a maximum bet of $5 or 10% of your balance, whichever is lower.'
    ],
    faqAvis: [
      {
        q: 'Is Celsius Casino legit?',
        r: 'Celsius displays its company, Celsius Holdings N.V. (no. 157856, Curacao). The footer mentions an Anjouan gaming licence without a number, and a Curacao badge that links to BeGambleAware rather than to a licence. Neither is an authorization from a Canadian province.'
      },
      {
        q: 'Does Celsius accept Canadian players?',
        r: 'Yes. The affiliate manager confirmed it in writing on November 4, 2026. The site shows euros and cryptocurrencies, not Canadian dollars. We do not cover Ontario or Alberta.'
      },
      {
        q: 'What are the Celsius withdrawal limits?',
        r: 'Winnings up to €10,000 are paid in weekly instalments of up to €2,500. Above €10,000, instalments are monthly, up to €10,000.'
      }
    ],
    faqBonus: [
      {
        q: 'What is the Celsius wagering requirement?',
        r: '50 times the deposit plus the bonus, within 20 days. With a €100 first deposit and a €100 bonus, that means €10,000 in bets.'
      },
      {
        q: 'Is there a maximum bet with the Celsius bonus?',
        r: 'Yes: $5 or 10% of your available balance, whichever is lower. The 10% rule does not apply to bets under $0.50.'
      },
      {
        q: 'Does Celsius have a no-deposit bonus?',
        r: 'We did not find an active no-deposit bonus for new players. The terms cap winnings from any no-deposit bonus or free spins at €/$100.'
      }
    ]
  },

  betportal: {
    accroche: 'The lightest wagering in our comparison, calculated on the bonus only.',
    offre: {
      titre: 'Up to €1,000 + 250 free spins',
      sousTitre: 'Welcome bonus on your first 3 deposits',
      noteDevise: 'Amounts as published in euros. The currency offered to a Canadian account may be different.',
      toursDetail: 'Up to 200 free spins on the first deposit and 50 on the second.',
      miseMax: null,
      jeuxAdmissibles: 'Casino (15x wagering applies to sports bonuses)',
      activation: null,
      autres: []
    },
    autresOffres: [
      { titre: 'Daily cashback', detail: 'Up to 25% cashback every day.' },
      { titre: 'Golden Monday', detail: '30% reload bonus up to €100 on Mondays.' }
    ],
    licenceNote:
      'The site says it is “licensed and regulated”, but we found neither an operating company nor a licence number. The general terms (updated in February 2026) are governed by the law of Anjouan.',
    canada: CONFIRME,
    nombreJeux: 'More than 7,000 games, according to the operator',
    retraits: null,
    raisons: {
      transparence: 'No operating company or licence number found: this is the main weak point.',
      bonus: '30x the bonus only: about half as heavy as wagering on deposit + bonus.',
      retraits: 'No withdrawal rules found on the pages we checked.',
      produit: 'More than 7,000 games, live casino, sports betting, daily cashback.',
      protection: 'Responsible gambling message displayed, tools not checked in detail.'
    },
    pointsForts: [
      'Wagering calculated on the bonus only (30x)',
      'Up to 250 free spins on the first 2 deposits',
      'Daily cashback up to 25%',
      'More than 7,000 games announced'
    ],
    pointsFaibles: [
      'No operating company or licence number displayed',
      'Amounts published in euros',
      'No withdrawal rules found',
      'Bonus wagering deadline not found'
    ],
    aConfirmer: ['Operating company and licence number', 'Amounts and currency for a Canadian account', 'Wagering deadline and minimum deposit'],
    verdict: [
      'BetPortal has the friendliest bonus maths in our comparison: 30 times the bonus only, not the deposit plus the bonus. For the same first deposit, that is 40% less to wager than at Rolletto.',
      'Its transparency is the weakest we have rated. We found no operating company, no licence number and no withdrawal rules, only general terms governed by the law of Anjouan. Keep your first deposit small until you have tested a withdrawal.'
    ],
    pourQui: ['Players who want the lightest wagering', 'Players who like cashback', 'Players who also bet on sports'],
    pasPourQui: ['Players who want to know who runs the site', 'Players who need published withdrawal rules', 'Players who want amounts in Canadian dollars'],
    bonusIntro: [
      'BetPortal spreads its welcome bonus over three deposits: 150%, 100% and 50%, for up to €1,000, plus up to 250 free spins on the first two deposits.',
      'Its strength is the wagering: 30 times the bonus only. We did not find the wagering deadline or the minimum deposit, so check them in the cashier before you deposit.'
    ],
    faqAvis: [
      {
        q: 'Is BetPortal legit?',
        r: 'We could not find an operating company or a licence number on BetPortal. The general terms are governed by the law of Anjouan. That is why it gets the lowest transparency score in our comparison.'
      },
      {
        q: 'Does BetPortal accept Canadian players?',
        r: 'Yes. The affiliate manager confirmed it in writing on November 4, 2026. Amounts are published in euros. We do not cover Ontario or Alberta.'
      },
      {
        q: 'What are the BetPortal withdrawal limits?',
        r: 'We did not find any published withdrawal rules on the pages we checked. Ask customer support before your first deposit and keep proof of the answer.'
      }
    ],
    faqBonus: [
      {
        q: 'What is the BetPortal wagering requirement?',
        r: '30 times the bonus only. With a €100 first deposit and a €150 bonus, that means €4,500 in bets: 40% less than at Rolletto for the same deposit.'
      },
      {
        q: 'How many free spins does BetPortal give?',
        r: 'Up to 200 free spins on the first deposit and 50 on the second, 250 in total.'
      },
      {
        q: 'Does the BetPortal bonus have a deadline?',
        r: 'We did not find the wagering deadline on the pages we checked. Check it in the bonus terms of your account before you play.'
      }
    ]
  },

  '1win': {
    accroche: 'The largest catalogue announced and a bonus spread over 4 deposits.',
    offre: {
      titre: 'Up to 600% + 500 free spins',
      sousTitre: 'Welcome bonus spread over your first 4 deposits',
      noteDevise: 'The “600%” is the sum of the four tiers (130 + 140 + 160 + 170). Each deposit gets its own percentage.',
      toursDetail: '70, 100, 150 then 180 free spins depending on the deposit.',
      miseMax: null,
      jeuxAdmissibles: null,
      activation:
        'The bonus goes to a separate balance. You must first play your real balance down to under 0.5 USD, then wager the bonus in the game category reserved for bonus wagering. One casino bonus can be active at a time: activating another one cancels the previous one.',
      autres: []
    },
    autresOffres: [],
    licenceNote:
      'From our checking location, the site said its service was limited in our region by its gaming licence, so we could not view its legal notices.',
    canada: CONFIRME,
    nombreJeux: 'More than 11,000 games, according to the operator',
    retraits: null,
    raisons: {
      transparence: 'Legal notices, company and licence could not be viewed from our checking location.',
      bonus: 'High percentages, but wagering terms not confirmed: we cannot assess them.',
      retraits: 'No withdrawal rules verified.',
      produit: 'More than 11,000 games announced, live casino, sports betting, 24/7 customer support.',
      protection: 'Responsible gambling tools not checked: neutral score.'
    },
    pointsForts: [
      'More than 11,000 games announced',
      'Bonus over 4 deposits with 500 free spins in total',
      'Low starting deposit: 10 USDT',
      '24/7 customer support announced'
    ],
    pointsFaibles: [
      'Bonus wagering terms not confirmed',
      'Operating company and licence not verified',
      'Tier caps not displayed',
      'No verified withdrawal rules'
    ],
    aConfirmer: ['Wagering, deadline and cap of each tier', 'Operating company and licence'],
    verdict: [
      '1win announces the largest game library we have seen, more than 11,000 games, and a welcome bonus spread over four deposits: 130%, 140%, 160% and 170%, with 500 free spins in total.',
      'We could not verify the essentials. From our checking location, the legal notices, the operating company and the licence were not viewable, and the wagering terms of each tier are not confirmed. That is why 1win ranks last in our grid despite its catalogue.'
    ],
    pourQui: ['Players who want the biggest game library', 'Crypto users comfortable with USDT', 'Players who also bet on sports'],
    pasPourQui: ['Players who want verified bonus terms', 'Players who want to know who runs the site', 'Players who want published withdrawal rules'],
    bonusIntro: [
      '1win advertises “up to 600%”: that is the sum of four separate tiers, 130%, 140%, 160% and 170%, one per deposit, plus 70, 100, 150 and 180 free spins.',
      'The bonus is credited to a separate balance and only becomes playable once your real balance is under 0.5 USD. The wagering multiplier and deadline of each tier were not confirmed when we checked.'
    ],
    faqAvis: [
      {
        q: 'Is 1win legit?',
        r: 'We could not verify it. From our checking location, the site said its service was limited by its gaming licence, and we could not view its legal notices, operating company or licence. We rate it last on transparency for that reason.'
      },
      {
        q: 'Does 1win accept Canadian players?',
        r: 'Yes. The affiliate manager confirmed it in writing on November 4, 2026. We do not cover Ontario or Alberta.'
      },
      {
        q: 'How big is the 1win game library?',
        r: 'The operator announces more than 11,000 games, plus live casino and sports betting.'
      }
    ],
    faqBonus: [
      {
        q: 'Is the 1win bonus really 600%?',
        r: 'No single deposit gets 600%. It is the sum of four tiers: 130% on the first deposit, 140% on the second, 160% on the third and 170% on the fourth.'
      },
      {
        q: 'What is the 1win wagering requirement?',
        r: 'It was not confirmed on the pages we could check. Read the bonus terms in your account before you deposit.'
      },
      {
        q: 'What is the minimum deposit for the 1win bonus?',
        r: 'The bonus page shows 10 USDT as the starting deposit.'
      }
    ]
  }
};

export function en(c: Casino): CasinoEn {
  return CASINOS_EN[c.id];
}

export const CRITERES_EN: Record<Critere, { nom: string; question: string }> = {
  transparence: { nom: 'Transparency and licence', question: 'Do we know who runs the site and under which licence? Can it be checked?' },
  bonus: { nom: 'Bonus terms', question: 'How much must you wager, how fast, on which games, with what maximum bet?' },
  retraits: { nom: 'Withdrawals and limits', question: 'Are withdrawal limits and times published and reasonable?' },
  produit: { nom: 'Games and product', question: 'Catalogue size, live casino, sports betting, payment methods.' },
  protection: { nom: 'Responsible gambling and support', question: 'Limit tools, self-exclusion and customer support.' }
};

export const POIDS = Object.fromEntries(CRITERES.map((c) => [c.id, c.poids])) as Record<Critere, number>;

export function cheminEn(c: Casino, bonus = false): string {
  return bonus ? `/en-ca/${c.slug}/bonus/` : `/en-ca/${c.slug}/`;
}

/** Same rules as the French site: "Not published" when the casino does not publish it, "Not verified" when we could not access it. */
export function absentEn(c: Casino): string {
  return c.licence.statut === 'non-verifiee' ? 'Not verified' : 'Not published';
}

/** "30x (deposit + bonus) within 5 days" */
export function miseEn(c: Casino): string {
  const m = c.offre.mise;
  if (!m) return 'Not confirmed';
  const base = m.base === 'bonus' ? 'the bonus' : '(deposit + bonus)';
  const delai = m.delaiJours ? ` within ${m.delaiJours} days` : '';
  return `${m.multiplicateur}x ${base}${delai}`;
}

export function depotMinEn(c: Casino): string {
  const d = c.offre.depotMin;
  if (d === null || d === undefined) return absentEn(c);
  if (typeof d === 'number') return montantEn(d, c.offre.depotMinDevise || '$');
  return d;
}

export function palierEn(p: Palier, devise: string): string {
  const plafond = p.plafond !== null && devise !== '%' ? ` up to ${montantEn(p.plafond, devise)}` : '';
  const tours = p.tours ? ` + ${p.tours} free spins` : '';
  return `${p.pourcentage}%${plafond}${tours}`;
}

export function rangDepot(n: number): string {
  return ['1st', '2nd', '3rd', '4th', '5th'][n - 1] || `${n}th`;
}

export function licenceEn(c: Casino): string {
  const l = c.licence;
  const autorite = l.autorite === 'Anjouan (Union des Comores)' ? 'Anjouan (Union of the Comoros)' : l.autorite;
  switch (l.statut) {
    case 'numero-affiche':
      return `${autorite}, no. ${l.numero}`;
    case 'sans-numero':
      return `${autorite}, number not displayed`;
    case 'non-affichee':
      return 'No licence number displayed';
    default:
      return 'Not verified';
  }
}

export function operateurEn(c: Casino): string {
  const o = c.operateur;
  if (!o.nom) return c.licence.statut === 'non-verifiee' ? 'Not verified' : 'Not displayed';
  const pays = o.pays === 'Curaçao (Willemstad)' ? 'Curacao (Willemstad)' : o.pays === 'Curaçao' ? 'Curacao' : o.pays;
  return `${o.nom}${o.registre ? ` (no. ${o.registre})` : ''}${pays ? `, ${pays}` : ''}`;
}

export function retraitsEn(c: Casino): string {
  const r = en(c).retraits;
  if (r) return r.resume;
  return c.licence.statut === 'non-verifiee' ? 'Rules not verified' : 'Rules not published';
}

/** Worked example of a deposit at the first tier, in the casino's own currency. */
export function exempleEn(c: Casino, depot = 100) {
  const p = c.offre.paliers[0];
  const m = c.offre.mise;
  if (!p || !m) return null;
  let bonus = (depot * p.pourcentage) / 100;
  if (p.plafond !== null) bonus = Math.min(bonus, p.plafond);
  const assiette = m.base === 'bonus' ? bonus : depot + bonus;
  const aMiser = assiette * m.multiplicateur;
  const devise = c.offre.devise === '%' ? '$' : c.offre.devise;
  return {
    depot,
    bonus,
    aMiser,
    parJour: m.delaiJours ? aMiser / m.delaiJours : null,
    perte: aMiser * 0.04,
    devise,
    f: (n: number) => montantEn(Math.round(n), devise)
  };
}
