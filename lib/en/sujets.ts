/**
 * English "Is X legit?" and "X withdrawal" pages. Facts, figures and dates come from donnees/casinos.json and the
 * French pages (lib/contenu/<casino>.ts, "fiable" and "retrait"): this file translates them for Canadian players.
 * When the French data changes, update the matching text here.
 */
import type { Question } from '@/components/Faq';
import type { Section } from '@/lib/contenu/types';

export type PageSujetEn = {
  /** <title>, 65 characters at most. */
  titre: string;
  /** Meta description, 70 to 155 characters. */
  description: string;
  h1: string;
  intro: string[];
  sections: Section[];
  faq: Question[];
};

const LICENCE_PROVINCE =
  'A foreign gaming licence is not an authorization from any Canadian province. If something goes wrong, your recourse is with the foreign regulator, not with a Canadian body. Our guide [is online gambling legal in Canada?](/en-ca/is-online-gambling-legal-in-canada/) explains what that means for you.';

const CONFIRME_ECRIT = 'confirmed in writing by its affiliate manager on November 4, 2026';

export const LEGIT_EN: Record<string, PageSujetEn> = {
  velobet: {
    titre: 'Is Velobet Legit? Operator, Licence and Withdrawal Rules',
    description:
      'Is Velobet legit? Operator Santeda International B.V. (no. 151296), CGA licence OGL/2024/1798/1048 displayed and published withdrawal rules: our analysis.',
    h1: 'Is Velobet legit? What can be checked, and what to watch',
    intro: [
      "Velobet displays what you would expect from a serious casino: its operating company, its registration number and its licence number. Here is what can be checked, and the rules that still call for caution."
    ],
    sections: [
      {
        titre: 'What can be checked',
        paragraphes: [
          'The operator, Santeda International B.V., is registered in Curacao under no. 151296 and holds licence OGL/2024/1798/1048 from the Curacao Gaming Authority. It is the same operator as [Rolletto](/en-ca/rolletto-casino/legit/). The general terms publish the minimum withdrawal, the processing time and the withdrawal limits.',
          'The responsible gambling page lists account limits, cooling-off breaks, self-exclusion from 6 months to 5 years and 24/7 customer support.'
        ]
      },
      {
        titre: 'What calls for caution',
        paragraphes: [
          'Some rules work against the player: a 20% fee on a withdrawal if the deposit was not wagered at least once, a 20% monthly fee on dormant accounts, and a maximum win of $100,000 per bet or spin. They are written in plain sight, so you can avoid them. Details on [Velobet withdrawals](/en-ca/velobet-casino/withdrawal/).'
        ]
      },
      { titre: 'What the licence does not change', paragraphes: [LICENCE_PROVINCE] }
    ],
    faq: [
      {
        q: 'Who owns Velobet?',
        r: 'Velobet is run by Santeda International B.V., a company registered in Curacao under no. 151296, which also runs Rolletto.'
      },
      {
        q: 'Is Velobet a scam?',
        r: 'We have found nothing to suggest that. Its operator and licence are displayed and can be checked. Read the withdrawal rules before you deposit all the same.'
      },
      {
        q: 'Does Velobet accept Canadian players?',
        r: 'Canada is not on the list of excluded countries in its general terms, and the sign-up form offers Canada and the Canadian dollar (checked November 9, 2026). Written confirmation from its affiliate manager is pending.'
      }
    ]
  },

  rolletto: {
    titre: 'Is Rolletto Legit? CGA Licence and Operator Checked',
    description:
      'Is Rolletto legit? Curacao Gaming Authority licence OGL/2024/1798/1048 and operator Santeda International B.V. displayed: what we could verify.',
    h1: 'Is Rolletto legit? What we could verify',
    intro: [
      '"Legit" means nothing without evidence. Here is what Rolletto displays publicly, what we could check, and what remains to be confirmed.'
    ],
    sections: [
      {
        titre: 'What is verified',
        paragraphes: [
          'Rolletto names its operator, Santeda International B.V., registered in Curacao under no. 151296, and displays licence OGL/2024/1798/1048 issued by the Curacao Gaming Authority. An identifiable operator is a first good sign: if there is a dispute, you know who is responsible and which regulator to contact.',
          'The bonus terms are published in full, including the rules that work against the player (a 5-day deadline, winnings lost if you cancel the bonus). A casino that spells out its strict rules is easier to assess than one that stays vague.'
        ]
      },
      {
        titre: 'What remains to be checked',
        paragraphes: [
          'The general terms set the withdrawal rules: a $20 minimum or the equivalent, processing within 3 banking business days, and limits of $7,500 per week and $15,000 per month. The affiliate manager told us in writing that withdrawals are faster: instant in crypto, under 24 hours by bank transfer (see [Rolletto withdrawals](/en-ca/rolletto-casino/withdrawal/)). Test with a small amount first.'
        ]
      },
      { titre: 'What the licence does not change', paragraphes: [LICENCE_PROVINCE] }
    ],
    faq: [
      { q: 'Who owns Rolletto?', r: 'Rolletto is run by Santeda International B.V., a company registered in Curacao under no. 151296.' },
      {
        q: "How can I check Rolletto's licence?",
        r: 'Note the number OGL/2024/1798/1048 shown on Rolletto and check it directly with the Curacao Gaming Authority.'
      },
      {
        q: 'Are Rolletto and Velobet the same company?',
        r: 'They share the same operator, Santeda International B.V., and the same Curacao Gaming Authority licence.'
      },
      { q: 'Does Rolletto accept Canadian players?', r: `Yes, ${CONFIRME_ECRIT}.` }
    ]
  },

  celsius: {
    titre: 'Is Celsius Casino Legit? Licence, Operator and Limits',
    description:
      'Is Celsius Casino legit? Operator Celsius Holdings N.V. (no. 157856), Anjouan licence shown without a number, misleading Curacao badge: our analysis.',
    h1: 'Is Celsius Casino legit? The facts, plainly',
    intro: [
      'Celsius gives useful information about its operator, but its licence remains unclear. Here is what is reassuring, and what calls for caution.'
    ],
    sections: [
      {
        titre: 'What is reassuring',
        paragraphes: [
          'The operator is named: Celsius Holdings N.V., registered under no. 157856, with an address in Willemstad, Curacao. The bonus terms and the withdrawal limits are published in detail, including the rules least favourable to the player (see [Celsius withdrawals](/en-ca/celsius-casino/withdrawal/)).'
        ]
      },
      {
        titre: 'What calls for caution',
        paragraphes: [
          'The licence displayed is an Anjouan licence, with no number. The "Gaming Curacao" badge at the bottom of the page links to BeGambleAware, not to a licence register: it does not prove a Curacao licence.',
          'Player reviews online are mixed, as for most international casinos. When you read them, look mainly at recent complaints about withdrawals and identity checks.'
        ]
      },
      {
        titre: 'Our advice',
        paragraphes: [
          'Start with a small deposit, get your identity verified early and test a modest first withdrawal before playing bigger amounts.',
          LICENCE_PROVINCE
        ]
      }
    ],
    faq: [
      {
        q: 'Who runs Celsius Casino?',
        r: 'Celsius Holdings N.V., registered under no. 157856, with an address in Willemstad, Curacao.'
      },
      {
        q: 'Does Celsius have a Curacao licence?',
        r: 'The footer states an Anjouan licence. The "Gaming Curacao" badge links to BeGambleAware and does not prove a Curacao licence.'
      },
      { q: 'Does Celsius accept Canadian players?', r: `Yes, ${CONFIRME_ECRIT}.` }
    ]
  },

  betportal: {
    titre: 'Is BetPortal Legit? Missing Operator and Licence Details',
    description:
      'Is BetPortal legit? No operator or licence number displayed, terms governed by Anjouan law. The facts and how to play cautiously if you sign up.',
    h1: 'Is BetPortal legit? What we know, and what is missing',
    intro: [
      'BetPortal has an attractive offer, but the question deserves a straight answer: several basic pieces of information are missing from its pages.'
    ],
    sections: [
      {
        titre: 'What is missing',
        paragraphes: [
          'On the pages we checked (home, help and terms), we found neither the name of the company running the site nor a licence number. The site still displays "Licensed and regulated platform". The general terms, updated in February 2026, are governed by the law of Anjouan.'
        ]
      },
      {
        titre: 'What is there',
        paragraphes: [
          'The promotions and their main wagering requirement are clearly displayed, and a responsible gambling message and an 18+ notice appear at the bottom of the page.'
        ]
      },
      {
        titre: 'How to play cautiously',
        paragraphes: [],
        liste: [
          'Start with a small deposit.',
          'Get your identity verified before playing larger amounts.',
          'Test a modest first withdrawal.',
          'Take screenshots of the bonus terms when you claim the bonus.'
        ]
      },
      { titre: 'What the licence question changes', paragraphes: [LICENCE_PROVINCE] }
    ],
    faq: [
      {
        q: 'Who is behind BetPortal?',
        r: 'We found no operating company named on the pages we checked. The general terms refer to the law of Anjouan.'
      },
      {
        q: 'Is BetPortal a scam?',
        r: 'We have no evidence of that. But the lack of a displayed operator and licence number is a real transparency gap: it calls for caution and explains its score of 3.5 out of 10 for transparency.'
      },
      { q: 'Does BetPortal accept Canadian players?', r: `Yes, ${CONFIRME_ECRIT}.` }
    ]
  },

  '1win': {
    titre: "Is 1win Legit? What We Could and Couldn't Verify",
    description:
      "Is 1win legit? Regional restrictions tied to its licence, operator and terms we could not view: the facts we observed and how to check for yourself.",
    h1: 'Is 1win legit? Our honest answer',
    intro: [
      "We can't answer \"yes\" without evidence. Here is what we observed, what is missing, and how to check for yourself."
    ],
    sections: [
      {
        titre: 'What we observed',
        paragraphes: [
          'The site displays regional restrictions and attributes them to its gaming licence: from our checking location, outside Canada, access was limited. The site announces more than 11,000 games and 24/7 customer support.'
        ]
      },
      {
        titre: 'What is missing',
        paragraphes: [
          'We could not view the name of the operator, the licence number or the general terms. Until these points are confirmed, 1win scores 3 out of 10 for transparency in [our rating](/en-ca/how-we-rate/).'
        ]
      },
      {
        titre: 'Check for yourself',
        paragraphes: [],
        liste: [
          'Scroll to the very bottom of the site: the operator and the licence are usually shown there.',
          'Read the bonus wagering terms before you deposit.',
          'Start with a small deposit and test a first withdrawal.'
        ]
      },
      { titre: 'What the licence does not change', paragraphes: [LICENCE_PROVINCE] }
    ],
    faq: [
      {
        q: 'Does 1win have a licence?',
        r: 'The site says its regional restrictions come from its gaming licence, but we could not view the licence number or the authority that issued it.'
      },
      {
        q: 'Why is the address not 1win.com?',
        r: 'Our link goes to the address the operator gives its partners; the site appears there under the "1w" brand.'
      },
      { q: 'Does 1win accept Canadian players?', r: `Yes, ${CONFIRME_ECRIT}.` }
    ]
  }
};

export const RETRAIT_EN: Record<string, PageSujetEn> = {
  velobet: {
    titre: 'Velobet Withdrawal: $10 Minimum, Times and Limits',
    description:
      'Velobet withdrawals: $10 minimum, processing within 3 business days, limits of $7,500 a week and $15,000 a month. The rules and our tips.',
    h1: 'Velobet withdrawals: times, limits and the rules to know',
    intro: [
      'Velobet publishes its withdrawal rules in its general terms, re-read on November 9, 2026. Here is what they say, and the two rules that can cost you if you do not know them.'
    ],
    sections: [
      {
        titre: 'Two rules not to forget',
        paragraphes: [
          'If your deposits were not wagered at least once before you ask for a withdrawal, Velobet may keep 20% of the amount requested. And if your account stays inactive, an administration fee of 20% of the balance may be charged every month.'
        ]
      },
      {
        titre: 'To withdraw without a hitch',
        paragraphes: [],
        liste: [
          'Get your identity verified as soon as you sign up.',
          'Wager each deposit at least once before asking for a withdrawal.',
          'Finish the wagering of any active bonus before withdrawing.',
          'In crypto, check your wallet address and the network twice.'
        ]
      }
    ],
    faq: [
      { q: 'What is the minimum withdrawal at Velobet?', r: '$10 or the equivalent in your currency, according to the general terms.' },
      {
        q: 'How long does a Velobet withdrawal take?',
        r: 'The general terms provide for processing within three banking business days, bank transfers included.'
      },
      {
        q: 'Is there a withdrawal limit at Velobet?',
        r: '$7,500 per week and $15,000 per month, unless a promotion sets a different rule.'
      }
    ]
  },

  rolletto: {
    titre: 'Rolletto Withdrawal: Times, Minimum and Weekly Limits',
    description:
      'Rolletto withdrawals: $20 minimum, $7,500 weekly limit, processing within 3 business days in the terms, faster times announced by the operator. Our tips.',
    h1: 'Rolletto withdrawals: the times announced, and what to check',
    intro: [
      "Rolletto's general terms, re-read on November 9, 2026, set a minimum, a processing time and withdrawal limits. Its affiliate manager also told us in writing about shorter times. Here are both, and how to withdraw without a hitch."
    ],
    sections: [
      {
        titre: 'The times announced by the affiliate manager',
        paragraphes: [
          "According to Rolletto's affiliate manager (written confirmation of November 4, 2026), withdrawals are instant in cryptocurrency and take less than 24 hours by bank transfer. That is faster than the maximum in the terms: keep the three business days as your reference.",
          'These times apply once the request is approved. The identity check, usually required before the first withdrawal, can add time: do it as soon as you sign up.'
        ]
      },
      {
        titre: 'To withdraw without a hitch',
        paragraphes: [],
        liste: [
          'Finish the wagering of any active bonus: asking for a withdrawal before can cancel the bonus and its winnings.',
          'Have your ID and a proof of address ready before your first withdrawal.',
          'Withdraw to the method you used to deposit when possible.',
          'In crypto, check your wallet address and the network twice: a mistake is usually irreversible.'
        ]
      },
      {
        titre: 'What we could not confirm',
        paragraphes: [
          'Our November 2026 test was done with a Canadian-dollar account. We have not confirmed Interac: if it matters to you, ask customer support before your first deposit.'
        ]
      }
    ],
    faq: [
      {
        q: 'How long does a Rolletto withdrawal take?',
        r: 'The general terms allow up to three banking business days. The affiliate manager announces instant crypto withdrawals and under 24 hours by bank transfer.'
      },
      { q: 'What is the minimum withdrawal at Rolletto?', r: '$20 or the equivalent in your currency, according to the general terms.' },
      {
        q: 'Is there a withdrawal limit at Rolletto?',
        r: '$7,500 per week and $15,000 per month. Above that, the payment can be split into monthly instalments.'
      }
    ]
  },

  celsius: {
    titre: 'Celsius Casino Withdrawal: Weekly Limits Explained',
    description:
      'Celsius Casino withdrawals: $2,500 a week for winnings up to $10,000, then $10,000 a month. The official limits explained, with an example and tips.',
    h1: 'Celsius Casino withdrawals: the official limits explained',
    intro: [
      'Celsius is one of the few casinos we compare that publishes figures for its withdrawal limits. That is good for transparency, but you need to know them before playing big.'
    ],
    sections: [
      {
        titre: 'An example',
        paragraphes: [
          'A win of $8,000 can be paid in four weekly instalments ($2,500, $2,500, $2,500, then $500), so over about a month.'
        ]
      },
      {
        titre: 'To withdraw without a hitch',
        paragraphes: [],
        liste: [
          'Finish the wagering of any active bonus: a withdrawal requested before can cost you the bonus and its winnings.',
          'Have your ID and a proof of address ready: an identity check is usually required before the first withdrawal.',
          'Withdraw to the method you used to deposit when possible.',
          'In crypto, check your wallet address and the network twice: a mistake is usually irreversible.'
        ]
      },
      {
        titre: 'What we could not confirm',
        paragraphes: [
          'Processing times by payment method are not in the terms we checked. If speed matters to you, ask customer support before your first deposit.'
        ]
      }
    ],
    faq: [
      {
        q: 'What is the maximum withdrawal at Celsius?',
        r: '$2,500 per week for winnings up to $10,000, then $10,000 per month above that.'
      },
      {
        q: 'Can I withdraw in crypto at Celsius?',
        r: 'Celsius accepts several cryptocurrencies, including Bitcoin, Ethereum, Litecoin and Tether. Check in the cashier which ones are available for withdrawals on your account.'
      },
      {
        q: 'Why is my Celsius withdrawal blocked?',
        r: 'The most common causes are unfinished bonus wagering, a pending identity check or the weekly limit being reached. Customer support can tell you which one applies.'
      }
    ]
  }
};
