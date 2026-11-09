/**
 * English guides (/en-ca/). Tables are built from donnees/casinos.json, so they update themselves
 * when a payment method, a limit or a bonus changes. Ontario and Alberta are excluded everywhere.
 */
import type { PageGuide } from '@/lib/contenu/pages/types';
import { CASINOS, CRITERES, noteGlobale, type Casino } from '@/lib/casinos';
import { AUTEUR } from '@/lib/auteur';
import { SITE } from '@/lib/site';
import { CRITERES_EN, cheminEn, depotMinEn, en, exempleEn, miseEn, retraitsEn } from './casinos';
import { DERNIER_RELEVE, RELEVES, classementRetraits, dernier, nombreDeReleves } from '@/lib/tests';
import { AIDE_PROVINCES, EN, MESSAGE_ZONE, SOURCE_AIDE, SOURCE_AIDE_NS, dateEn, montantEn, noteEn } from './site';

/** "1 h", "12 h" or "Not tested". */
const heuresEn = (n: number | null | undefined) => (n === null || n === undefined ? 'Not tested' : `${n} h`);

const MAJ = EN.verification;

const lien = (c: Casino, bonus = false) => `[${c.nom}](${cheminEn(c, bonus)})`;
const liste = (noms: string[]) => (noms.length <= 1 ? noms.join('') : `${noms.slice(0, -1).join(', ')} and ${noms[noms.length - 1]}`);

const ZONE = {
  type: 'encadre' as const,
  ton: 'alerte' as const,
  titre: 'Live in Ontario or Alberta?',
  texte: MESSAGE_ZONE
};

// ——— Payments ———
const INTERAC: Record<Casino['paiements']['interac'], string> = {
  confirme: '**Accepted** (confirmed)',
  'non-confirme': 'Not confirmed on the pages we checked',
  'non-affiche': 'Not shown on the site'
};
const AVEC_INTERAC = CASINOS.filter((c) => c.paiements.interac === 'confirme');
const AVEC_CRYPTO = CASINOS.filter((c) => c.paiements.crypto.length);
const moyens = (c: Casino) => {
  const m = [...c.paiements.autres];
  if (c.paiements.crypto.length) m.push(`crypto (${c.paiements.crypto.join(', ')})`);
  return m.length ? m.join(', ') : 'No payment method shown on the public pages';
};
const REPONSE_INTERAC = AVEC_INTERAC.length
  ? `Among the casinos we compare, Interac is confirmed at ${liste(AVEC_INTERAC.map((c) => c.nom))}. Still check the cashier before your first deposit: payment methods can change with the country and currency of your account.`
  : 'As of today, none of the casinos we compare shows Interac on the pages we could check. We only list it when we have seen it on the official site or had it confirmed in writing. Check the cashier, visible once your account is open, before you deposit.';

// ——— Withdrawals ———
const RETRAITS: Record<string, { delai: string; plafond: string }> = {
  velobet: { delai: 'Within 3 business days', plafond: '$7,500 per week, $15,000 per month' },
  rolletto: {
    delai: 'Within 3 business days according to the terms; instant crypto and bank transfers under 24 h according to the affiliate manager',
    plafond: '$7,500 per week, $15,000 per month'
  },
  celsius: { delai: 'Not stated on the pages we checked', plafond: '$2,500 per week for winnings up to $10,000, then $10,000 per month above that' },
  betportal: { delai: 'Not stated on the pages we checked', plafond: 'Not published' },
  '1win': { delai: 'Not verified', plafond: 'Not verified' }
};
const retraitDe = (c: Casino) => RETRAITS[c.id] || { delai: en(c).retraits?.resume || 'Not published', plafond: 'Not published' };
const AVEC_REGLES = CASINOS.filter((c) => en(c).retraits);

// ——— Minimum deposit ———
const MIN_NUM = CASINOS.filter((c) => typeof c.offre.depotMin === 'number').sort((a, b) => (a.offre.depotMin as number) - (b.offre.depotMin as number));
const PLUS_BAS = MIN_NUM[0];
const AU_PLUS_BAS = PLUS_BAS ? MIN_NUM.filter((c) => c.offre.depotMin === PLUS_BAS.offre.depotMin) : [];
const EXEMPLES = MIN_NUM.map((c) => ({ c, e: exempleEn(c, c.offre.depotMin as number) })).filter((x) => x.e);

const SOURCES_PAIEMENT = CASINOS.map((c) => ({ titre: `${c.nom}: official page checked (payments)`, url: c.paiements.source }));
const SOURCES_BONUS = CASINOS.map((c) => ({ titre: `${c.nom}: welcome bonus terms`, url: c.offre.source }));

const S = {
  code: { titre: 'Criminal Code of Canada, section 207 (permitted lotteries)', url: 'https://laws-lois.justice.gc.ca/eng/acts/c-46/section-207.html' },
  c218: { titre: 'Canada Gazette: single-event sports betting in force on August 27, 2021', url: 'https://gazette.gc.ca/rp-pr/p2/2021/2021-09-01/html/si-tr56-eng.html' },
  ontario: { titre: 'BLG: Ontario iGaming market launch on April 4, 2022 (French version)', url: 'https://www.blg.com/fr/insights/2022/01/ready-for-takeoff-ontario-igaming-market-set-to-launch-april-4-2022' },
  alberta: { titre: 'Government of Alberta: iGaming strategy (launch on July 13, 2026)', url: 'https://www.alberta.ca/albertas-igaming-strategy' },
  provinces: { titre: 'Sumsub: online gambling in Canada, province by province (May 2026)', url: 'https://sumsub.com/blog/online-gambling-canada/' },
  lrgg: { titre: 'CCSA: the Lower-Risk Gambling Guidelines', url: 'https://gamblingguidelines.ca/lower-risk-gambling-guidelines/what-are-the-guidelines/' }
};

export const PAGES_EN: PageGuide[] = [
  // ——————————————————————————— Casino bonuses
  {
    chemin: '/en-ca/casino-bonuses/',
    nomFil: 'Casino bonuses',
    titre: 'Casino Bonuses in Canada: Wagering Compared (2026)',
    description:
      'Online casino welcome bonuses in Canada compared on what matters: wagering, deadline, maximum bet and minimum deposit, from the official terms.',
    h1: 'Casino bonuses in Canada: what you really have to wager',
    chapeau:
      'A bonus amount on its own tells you almost nothing. What decides whether a bonus is worth taking is how much you must bet before withdrawing, how fast, and on which games. Here are the welcome offers we compare, side by side, from their official terms.',
    modifie: MAJ,
    resume: 'Every welcome bonus we compare, ranked on wagering and deadline.',
    sections: [
      {
        id: 'compared',
        titre: 'The welcome bonuses compared',
        blocs: [
          { type: 'p', texte: `Figures taken from each casino's official promotions page, checked on ${dateEn(MAJ)} or earlier (see each review).` },
          {
            type: 'tableau',
            entetes: ['Casino', 'Welcome offer', 'Wagering', 'Minimum deposit', 'Maximum bet'],
            lignes: CASINOS.map((c) => [lien(c, true), en(c).offre.titre, miseEn(c), depotMinEn(c), en(c).offre.miseMax || 'Not published'])
          },
          {
            type: 'encadre',
            ton: 'info',
            titre: 'Why our ranking does not follow the bonus size',
            texte:
              'Rolletto has the biggest pack, but only 5 days to clear it. Velobet, run by the same company, gives 30 days for the same wagering. BetPortal calculates its wagering on the bonus only. Our [rating grid](/en-ca/how-we-rate/) weighs these terms, not the headline amount.'
          }
        ]
      },
      {
        id: 'wagering',
        titre: 'Wagering: the number that matters',
        blocs: [
          {
            type: 'p',
            texte:
              'Wagering (or playthrough) is the total you must bet before bonus money, and the winnings made with it, can be withdrawn. It is written as a multiplier: **30x** means thirty times a base amount.'
          },
          {
            type: 'liste',
            items: [
              '**30x the bonus** (BetPortal): with a $150 bonus, you wager $4,500.',
              '**30x (deposit + bonus)** (Velobet, Rolletto): with a 100 deposit and a 150 bonus, you wager 7,500.',
              '**50x (deposit + bonus)** (Celsius): with a 100 deposit and a 100 bonus, you wager 10,000.'
            ]
          },
          {
            type: 'p',
            texte:
              'The deadline changes everything. 7,500 over 30 days is about 250 a day; the same 7,500 over 5 days is 1,500 a day. If you cannot keep that pace, the bonus and its winnings expire.'
          }
        ]
      },
      {
        id: 'traps',
        titre: 'The terms that catch players out',
        blocs: [
          {
            type: 'liste',
            items: [
              '**Maximum bet:** betting more than the limit while a bonus is active (for example $5 per spin at Velobet) can cancel the bonus and its winnings.',
              '**Eligible games:** Rolletto counts slots only. Table games and live casino often count for little or nothing.',
              '**Daily free spins:** at Velobet and Rolletto, most spins arrive day by day and you must log in to get them.',
              '**Mixed balances:** at Rolletto, cancelling the bonus also removes the winnings and bets made since activation.',
              '**Deposits wagered once:** Velobet and Rolletto ask that deposits be wagered at least once before a withdrawal.'
            ]
          }
        ]
      },
      {
        id: 'examples',
        titre: 'Worked examples at the first tier',
        blocs: [
          {
            type: 'tableau',
            legende: 'For a deposit of 100 in the currency the casino publishes. Average loss assumes slots with a 96% return to player.',
            entetes: ['Casino', 'Bonus', 'Total to wager', 'Per day', 'Average theoretical loss'],
            lignes: CASINOS.map((c) => {
              const e = exempleEn(c);
              if (!e) return [lien(c, true), 'Not confirmed', 'Not confirmed', 'Not confirmed', 'Cannot be calculated'];
              return [lien(c, true), e.f(e.bonus), `**${e.f(e.aMiser)}**`, e.parJour ? e.f(e.parJour) : 'No deadline published', e.f(e.perte)];
            })
          },
          {
            type: 'p',
            texte:
              'The theoretical loss is an average, not a forecast: a real session can end much better or much worse. It is useful to compare bonuses with each other, and a reminder that a bonus is never free money.'
          }
        ]
      },
      {
        id: 'no-deposit',
        titre: 'No-deposit bonuses',
        blocs: [
          {
            type: 'p',
            texte:
              'We found no active no-deposit bonus for new players at the casinos we compare. When such offers exist, their winnings are usually capped: the Celsius terms, for example, cap winnings from a no-deposit bonus or free spins at $100.'
          }
        ]
      },
      {
        id: 'checklist',
        titre: 'Before you accept a bonus',
        blocs: [
          {
            type: 'liste',
            ordonnee: true,
            items: [
              'Read the wagering multiplier and its base (bonus only, or deposit + bonus).',
              'Check the deadline and work out the daily amount.',
              'Note the maximum bet and the eligible games.',
              'Make sure you can decline the bonus if the terms do not suit you.',
              'Set a budget you can afford to lose before you deposit.'
            ]
          },
          ZONE,
          { type: 'offres', titre: 'The casinos we compare' }
        ]
      }
    ],
    faq: [
      {
        q: 'What is the best casino bonus in Canada?',
        r: `It depends on how you play. On our grid, ${CASINOS[0].nom} has the best overall score. If you mainly want to clear a bonus, BetPortal's 30x the bonus only is the lightest wagering we compare, but its operator and licence are not displayed.`
      },
      {
        q: 'What does 30x wagering mean?',
        r: 'You must bet 30 times a base amount before withdrawing bonus money. If the base is deposit + bonus, a 100 deposit with a 150 bonus means 7,500 in bets.'
      },
      {
        q: 'Can I withdraw a casino bonus straight away?',
        r: 'No. Bonus money and its winnings can only be withdrawn once the wagering is complete, within the deadline and without breaking the maximum-bet rule.'
      },
      {
        q: 'Are casino winnings taxable in Canada?',
        r: 'As a rule, winnings of a recreational player are not taxable in Canada. It can be different if gambling is a professional activity. If in doubt, ask a tax professional.'
      }
    ],
    sources: SOURCES_BONUS,
    connexes: ['/en-ca/minimum-deposit-casinos/', '/en-ca/fast-withdrawal-casinos/', '/en-ca/how-we-rate/']
  },

  // ——————————————————————————— Fast withdrawals
  {
    chemin: '/en-ca/fast-withdrawal-casinos/',
    nomFil: 'Fast withdrawal casinos',
    titre: 'Fast Withdrawal Casinos in Canada: Published Limits (2026)',
    description:
      'Fast payout online casinos in Canada: processing times and weekly limits as published in each casino’s terms, what slows a withdrawal, and how to avoid it.',
    h1: 'Fast withdrawal casinos: what the terms actually say',
    chapeau:
      '“Instant withdrawals” is the easiest promise to make. We looked for the processing times and limits that each casino actually publishes in its terms. Here is what we found, and what usually slows a payout down.',
    modifie: MAJ,
    resume: 'Withdrawal times and limits as published, casino by casino.',
    sections: [
      {
        id: 'compared',
        titre: 'Withdrawal times and limits compared',
        blocs: [
          {
            type: 'tableau',
            legende: `From each casino's general or bonus terms. Checked on ${dateEn(MAJ)} or earlier.`,
            entetes: ['Casino', 'Processing time', 'Limits'],
            lignes: CASINOS.map((c) => [lien(c), retraitDe(c).delai, retraitDe(c).plafond])
          },
          {
            type: 'p',
            texte: `${liste(AVEC_REGLES.map((c) => c.nom))} publish figures. For the others we found no withdrawal rules, which is a reason to start with a small deposit and test a withdrawal first.`
          },
          {
            type: 'p',
            texte: `**Our real tests (November 2026).** ${AUTEUR.nom} deposited and withdrew at every casino we compare, and repeats these tests about every 3 days. Here is how long each withdrawal took to arrive, with the identity check already done:`
          },
          {
            type: 'tableau',
            entetes: ['Casino', 'Crypto withdrawal', 'Card withdrawal'],
            lignes: [...CASINOS]
              .filter((c) => c.test)
              .sort((a, b) => (a.test?.retraitCryptoHeures ?? 99) - (b.test?.retraitCryptoHeures ?? 99))
              .map((c) => [lien(c), heuresEn(c.test?.retraitCryptoHeures), heuresEn(c.test?.retraitCarteHeures)])
          },
          {
            type: 'p',
            texte:
              'Velobet was the fastest: crypto received in 1 hour, card in 12 hours. Your times may vary with identity checks and the payment method.'
          },
          {
            type: 'cta',
            casino: 'velobet',
            titre: 'Crypto withdrawal received in 1 hour in our test',
            detail:
              'November 2026 test, identity already verified. Per the terms: processing within 3 business days at most and a $7,500 weekly limit; wager each deposit at least once before withdrawing.',
            bouton: 'Visit Velobet'
          }
        ]
      },
      {
        id: 'slows',
        titre: 'What slows a withdrawal down',
        blocs: [
          {
            type: 'liste',
            items: [
              '**Identity checks:** most casinos verify your identity before the first withdrawal. Sending your documents early saves days.',
              '**An active bonus:** while the wagering is not complete, bonus money and its winnings stay locked.',
              '**Deposits not wagered once:** Velobet and Rolletto require it; Velobet may apply a 20% fee otherwise.',
              '**Weekly limits:** a big win can be paid in instalments, for example $2,500 a week at Celsius.',
              '**The method:** crypto is usually faster than a bank transfer once the casino has approved the request.'
            ]
          }
        ]
      },
      {
        id: 'tips',
        titre: 'How to get paid faster',
        blocs: [
          {
            type: 'liste',
            ordonnee: true,
            items: [
              'Complete identity verification right after sign-up.',
              'Withdraw with the same method you used to deposit, when possible.',
              'Do not accept a bonus if you plan to withdraw quickly.',
              'Keep each request under the weekly limit.',
              'Keep screenshots of your request and of any chat with support.'
            ]
          },
          ZONE,
          { type: 'offres', casinos: AVEC_REGLES.map((c) => c.id), titre: 'Casinos that publish their withdrawal rules' }
        ]
      }
    ],
    faq: [
      {
        q: 'Which online casino pays out fastest in Canada?',
        r: 'In our November 2026 tests, Velobet: crypto withdrawal received in 1 hour and card withdrawal in 12 hours. Celsius and Rolletto followed with 2 hours in crypto. These times assume your identity is already verified.'
      },
      {
        q: 'Why is my casino withdrawal pending?',
        r: 'The usual reasons are an identity check, an active bonus whose wagering is not complete, a deposit not yet wagered once, or a weekly limit. Ask support which one applies.'
      },
      {
        q: 'Are crypto withdrawals faster?',
        r: 'Usually, once the casino approves the request, because no bank is involved. Check the network and the fees before you withdraw.'
      }
    ],
    sources: CASINOS.filter((c) => c.retraits).map((c) => ({ titre: `${c.nom}: withdrawal rules`, url: c.retraits!.source })),
    connexes: ['/en-ca/casino-withdrawal-times/', '/en-ca/crypto-casinos/', '/en-ca/interac-casinos/']
  },

  // ——————————————————————————— Interac
  {
    chemin: '/en-ca/interac-casinos/',
    nomFil: 'Interac casinos',
    titre: 'Interac Online Casinos in Canada: What We Found (2026)',
    description:
      'Interac at online casinos in Canada: what the official pages of each casino we compare show, how Interac e-Transfer deposits work, and other ways to pay.',
    h1: 'Interac casinos: what we found, casino by casino',
    chapeau:
      'Interac is the first payment method Canadian players look for. We checked the official pages of every casino we compare to see whether it is offered. Here is what we found, and how to pay otherwise.',
    modifie: MAJ,
    resume: 'Interac at each casino we compare, and the alternatives.',
    sections: [
      {
        id: 'found',
        titre: 'Interac at the casinos we compare',
        blocs: [
          {
            type: 'tableau',
            entetes: ['Casino', 'Interac', 'Other methods shown'],
            lignes: CASINOS.map((c) => [lien(c), INTERAC[c.paiements.interac], moyens(c)])
          },
          { type: 'p', texte: REPONSE_INTERAC },
          {
            type: 'encadre',
            ton: 'info',
            titre: 'Why we do not write “Interac accepted” by default',
            texte:
              'Many sites put the Interac logo next to every casino. We only list it when we have seen it on the official page or had it confirmed in writing. A method missing from our tables may still exist in the cashier: ask customer support before you deposit.'
          }
        ]
      },
      {
        id: 'how',
        titre: 'How an Interac deposit works',
        blocs: [
          {
            type: 'p',
            texte:
              '**Interac e-Transfer** sends money from your Canadian bank account using an email address or a phone number. When a casino offers it, the payment often goes through a payment processor, whose name may appear on your statement instead of the casino’s.'
          },
          {
            type: 'p',
            texte:
              'Your bank sets daily and weekly sending limits for e-Transfers. Some banks also block or question payments to gambling sites. Check both with your bank before you count on Interac.'
          }
        ]
      },
      {
        id: 'alternatives',
        titre: 'Other ways to pay',
        blocs: [
          {
            type: 'liste',
            items: [
              `**Cryptocurrencies:** accepted at ${liste(AVEC_CRYPTO.map((c) => c.nom))}. See our [crypto casino guide](/en-ca/crypto-casinos/).`,
              '**Cards and e-wallets:** Celsius shows Visa, Mastercard, Apple Pay, Google Pay, Skrill, PayPal and Paysafecard.',
              '**Before any deposit:** open the cashier, check the methods offered for your country and currency, and the minimum amounts.'
            ]
          },
          ZONE
        ]
      }
    ],
    faq: [
      { q: 'Which online casinos accept Interac in Canada?', r: REPONSE_INTERAC },
      {
        q: 'Is it safe to use Interac at an online casino?',
        r: 'Interac itself is a Canadian banking network. The risk lies with the casino: check who runs it, its licence and its withdrawal rules before depositing, whatever the method.'
      },
      {
        q: 'Can I withdraw with Interac?',
        r: 'Only if the casino offers Interac for withdrawals, which is not always the case even when deposits are accepted. Check the withdrawal methods in the cashier.'
      }
    ],
    sources: SOURCES_PAIEMENT,
    connexes: ['/en-ca/crypto-casinos/', '/en-ca/minimum-deposit-casinos/', '/en-ca/fast-withdrawal-casinos/']
  },

  // ——————————————————————————— Minimum deposit
  {
    chemin: '/en-ca/minimum-deposit-casinos/',
    nomFil: 'Minimum deposit casinos',
    titre: 'Low Minimum Deposit Casinos in Canada (2026)',
    description:
      'Minimum deposit online casinos in Canada: the smallest deposit that unlocks each welcome bonus, and what you must wager afterwards, from the official terms.',
    h1: 'Minimum deposit casinos: the smallest deposit that unlocks the bonus',
    chapeau:
      'A low minimum deposit is a good way to test a casino before committing more. Here is the smallest deposit that unlocks each welcome bonus we compare, and what it commits you to.',
    modifie: MAJ,
    resume: 'The smallest qualifying deposit at each casino, and the wagering it implies.',
    sections: [
      {
        id: 'compared',
        titre: 'Minimum deposits compared',
        blocs: [
          {
            type: 'tableau',
            entetes: ['Casino', 'Minimum deposit for the bonus', 'Wagering'],
            lignes: CASINOS.map((c) => [lien(c, true), depotMinEn(c), miseEn(c)])
          },
          {
            type: 'p',
            texte: PLUS_BAS
              ? `The lowest published minimum is ${depotMinEn(PLUS_BAS)}, at ${liste(AU_PLUS_BAS.map((c) => c.nom))}. Amounts are in Canadian dollars.`
              : 'No casino we compare publishes a minimum deposit.'
          }
        ]
      },
      {
        id: 'examples',
        titre: 'What a minimum deposit commits you to',
        blocs: [
          {
            type: 'tableau',
            legende: 'Bonus at the first tier and total to wager, for the minimum deposit.',
            entetes: ['Casino', 'Deposit', 'Bonus', 'Total to wager', 'Deadline'],
            lignes: EXEMPLES.map(({ c, e }) => [
              lien(c, true),
              montantEn(e!.depot, c.offre.depotMinDevise || '$'),
              montantEn(e!.bonus, c.offre.depotMinDevise || '$'),
              `**${montantEn(e!.aMiser, c.offre.depotMinDevise || '$')}**`,
              c.offre.mise?.delaiJours ? `${c.offre.mise.delaiJours} days` : 'Not published'
            ])
          },
          {
            type: 'p',
            texte:
              'Even a small deposit comes with the full wagering. If you only want to try the games, you can usually decline the bonus and keep your deposit withdrawable.'
          },
          {
            type: 'encadre',
            ton: 'info',
            titre: 'Later deposits can cost more',
            texte: 'At Velobet, the first deposit bonus starts at $10, but the second and third deposit bonuses require $20.'
          }
        ]
      },
      {
        id: 'tips',
        titre: 'Using a small first deposit well',
        blocs: [
          {
            type: 'liste',
            ordonnee: true,
            items: [
              'Deposit the minimum and check that the bonus is credited as described.',
              'Test a small withdrawal before depositing more.',
              'Check the minimum withdrawal: it can be higher than the minimum deposit.',
              'Set a monthly limit in your account settings.'
            ]
          },
          ZONE,
          { type: 'offres' }
        ]
      }
    ],
    faq: [
      {
        q: 'What is the lowest minimum deposit at the casinos you compare?',
        r: PLUS_BAS ? `${depotMinEn(PLUS_BAS)}, at ${liste(AU_PLUS_BAS.map((c) => c.nom))}.` : 'None is published.'
      },
      {
        q: 'Do I get the full bonus with a minimum deposit?',
        r: 'You get the percentage of the first tier on the amount you deposit, so a small deposit gives a small bonus. The wagering multiplier stays the same.'
      },
      {
        q: 'Is there a $1 deposit casino in your comparison?',
        r: 'No. The lowest published minimum among the casinos we compare is 10.'
      }
    ],
    sources: SOURCES_BONUS,
    connexes: ['/en-ca/casino-bonuses/', '/en-ca/interac-casinos/', '/en-ca/crypto-casinos/']
  },

  // ——————————————————————————— Crypto
  {
    chemin: '/en-ca/crypto-casinos/',
    nomFil: 'Crypto casinos',
    titre: 'Crypto Casinos in Canada: Coins Accepted and Bonuses (2026)',
    description:
      'Crypto casinos for Canadian players: which coins each casino accepts, crypto welcome bonuses, and how to deposit and withdraw without costly mistakes.',
    h1: 'Crypto casinos: coins accepted, bonuses and pitfalls',
    chapeau: `${AVEC_CRYPTO.length} of the ${CASINOS.length} casinos we compare accept cryptocurrencies. Here is which coins, the crypto-specific bonuses, and the mistakes to avoid when you send or receive coins.`,
    modifie: MAJ,
    resume: 'Coins accepted at each casino, crypto bonuses and safe transfers.',
    sections: [
      {
        id: 'coins',
        titre: 'Coins accepted, casino by casino',
        blocs: [
          {
            type: 'tableau',
            entetes: ['Casino', 'Cryptocurrencies', 'Withdrawals'],
            lignes: CASINOS.map((c) => [
              lien(c),
              c.paiements.crypto.length ? c.paiements.crypto.join(', ') : 'None listed on the pages we checked',
              retraitDe(c).delai
            ])
          }
        ]
      },
      {
        id: 'bonuses',
        titre: 'Crypto welcome bonuses',
        blocs: [
          {
            type: 'liste',
            items: [
              '**Velobet:** 160% up to $1,000 on the first crypto deposit ($10 minimum), slots only, 30x (deposit + bonus) within 30 days.',
              '**Rolletto:** 100% up to $1,000 + 200 free spins, $20 minimum deposit, instead of the casino pack.'
            ]
          },
          {
            type: 'p',
            texte: 'A crypto bonus usually replaces the standard welcome pack: you choose one or the other, not both.'
          }
        ]
      },
      {
        id: 'transfers',
        titre: 'Sending and receiving coins safely',
        blocs: [
          {
            type: 'liste',
            ordonnee: true,
            items: [
              '**Pick the right network.** USDT exists on several networks (for example TRON and Ethereum). Sending on the wrong one can lose the funds.',
              '**Copy the deposit address from the cashier every time.** Some casinos generate a new address per deposit.',
              '**Add the memo or tag when one is shown** (common with XRP). Without it, the deposit may not be credited.',
              '**Check the network fee** before sending: on some networks it is a large share of a small deposit.',
              '**Mind volatility.** Bitcoin or Ether can move between your deposit and your withdrawal. Stablecoins such as USDT avoid that.'
            ]
          },
          {
            type: 'p',
            texte:
              'Buying, selling or converting crypto can have tax consequences in Canada. Check the Canada Revenue Agency guidance or ask a tax professional.'
          },
          ZONE,
          { type: 'offres', casinos: AVEC_CRYPTO.map((c) => c.id), titre: 'Casinos that accept crypto' }
        ]
      }
    ],
    faq: [
      {
        q: 'Which crypto casinos accept Canadian players?',
        r: `Among the casinos we compare, ${liste(AVEC_CRYPTO.map((c) => c.nom))} accept cryptocurrencies. Their affiliate managers confirmed in writing that Canadian players are accepted, except for Velobet, whose confirmation is pending.`
      },
      {
        q: 'Are crypto casino withdrawals instant?',
        r: 'Not always. The casino must first approve the request. Rolletto’s affiliate manager says crypto withdrawals are instant; Velobet’s terms give up to three business days.'
      },
      {
        q: 'Can I get a bonus with a crypto deposit?',
        r: 'Yes at Velobet (160% up to $1,000) and Rolletto (100% up to $1,000 + 200 free spins). Both replace the standard welcome pack.'
      }
    ],
    sources: SOURCES_PAIEMENT,
    connexes: ['/en-ca/fast-withdrawal-casinos/', '/en-ca/interac-casinos/', '/en-ca/casino-bonuses/']
  },

  // ——————————————————————————— Legality
  {
    chemin: '/en-ca/is-online-gambling-legal-in-canada/',
    nomFil: 'Is online gambling legal in Canada?',
    titre: 'Is Online Gambling Legal in Canada? Rules by Province (2026)',
    description:
      'Online casino law in Canada, province by province: who may offer online gambling, Ontario and Alberta’s licensed markets, offshore sites and the minimum age.',
    h1: 'Is online gambling legal in Canada? The rules, province by province',
    chapeau:
      'In Canada, each province sets its own rules. Ontario and Alberta now license private online casinos; everywhere else, only the province’s own Crown corporation site is authorized.',
    modifie: MAJ,
    resume: 'The online gambling rules in each province, and the minimum age.',
    sections: [
      {
        id: 'short',
        titre: 'The short answer',
        blocs: [
          {
            type: 'p',
            texte:
              'Gambling falls under the Criminal Code, whose section 207 lets each province “conduct and manage” its own games, online included. So there is no single Canadian rule: there is one rule per province.'
          },
          {
            type: 'liste',
            items: [
              '**Ontario** (since April 2022) and **Alberta** (since July 13, 2026) license private online casinos.',
              '**Elsewhere**, only the province’s Crown corporation site is authorized: PlayNow in British Columbia, Manitoba and Saskatchewan, Atlantic Lottery in the Atlantic provinces, Loto-Québec in Quebec.',
              '**Offshore sites** still accept Canadian players under licences issued elsewhere. No province authorizes them.',
              '**The minimum age** is 18 in Quebec, Alberta and Manitoba, and 19 in the other provinces.'
            ]
          }
        ]
      },
      {
        id: 'provinces',
        titre: 'Province by province',
        blocs: [
          {
            type: 'tableau',
            legende: 'Sources: Government of Alberta, BLG and Sumsub (May 2026). Checked on November 4, 2026.',
            entetes: ['Province', 'Public site', 'Private casinos licensed', 'Minimum age'],
            lignes: [
              ['British Columbia', 'PlayNow (BCLC)', 'No', '19'],
              ['Manitoba', 'PlayNow (Manitoba Liquor & Lotteries)', 'No', '18'],
              ['Saskatchewan', 'PlayNow (since 2022)', 'No', '19'],
              ['New Brunswick, Nova Scotia, Prince Edward Island, Newfoundland and Labrador', 'Atlantic Lottery (alc.ca)', 'No', '19'],
              ['Quebec', 'Loto-Québec (lotoquebec.com)', 'No', '18'],
              ['Ontario', 'OLG.ca', 'Yes, registered with the AGCO, since April 2022', '19'],
              ['Alberta', 'PlayAlberta.ca', 'Yes, registered with the AGLC, since July 13, 2026', '18'],
              ['Yukon, Northwest Territories, Nunavut', 'No site listed', 'No', 'Not specified']
            ]
          },
          {
            type: 'p',
            texte: 'In Ontario, the minimum age of 19 applies to online casino and sports betting; it is 18 for lottery. In Saskatchewan, it is also 18 for lottery products.'
          }
        ]
      },
      {
        id: 'ontario-alberta',
        titre: 'Ontario and Alberta: two licensed markets',
        blocs: [
          {
            type: 'p',
            texte:
              '**Ontario** opened its market on April 4, 2022. Private operators must register with the Alcohol and Gaming Commission of Ontario (AGCO) and sign an agreement with iGaming Ontario.'
          },
          {
            type: 'p',
            texte:
              '**Alberta** launched its regulated market on July 13, 2026. The Alberta Gaming, Liquor and Cannabis Commission (AGLC) is the regulator. The Alberta government estimates that unlicensed sites capture about 70% of online gambling in the province.'
          },
          ZONE
        ]
      },
      {
        id: 'offshore',
        titre: 'Offshore casinos',
        blocs: [
          {
            type: 'p',
            texte:
              'The private casinos you find online outside Ontario and Alberta operate from abroad. Some hold a foreign licence (Curacao, Anjouan or other), whose value varies a lot from one authority to another. None is worth a provincial authorization.'
          },
          {
            type: 'p',
            texte:
              'The most concrete consequence for you is practical: in a dispute, your recourse goes through the operator and then the foreign regulator, not through a Canadian body. That is why transparency (operator, licence, withdrawal rules) weighs 25% of [our score](/en-ca/how-we-rate/).'
          }
        ]
      },
      {
        id: 'sports',
        titre: 'What about sports betting?',
        blocs: [
          {
            type: 'p',
            texte:
              'Since August 27, 2021, Canadian law allows betting on a single game, not only on parlays. Provinces offer it through their Crown corporations, and Ontario and Alberta through licensed private sites.'
          }
        ]
      },
      {
        id: 'choose',
        titre: 'How to choose a site',
        blocs: [
          {
            type: 'liste',
            ordonnee: true,
            items: [
              'Check who runs the site and which licence it shows, with its number.',
              'Read the withdrawal rules (times, limits, identity checks) before depositing.',
              'Look at the bonus wagering, not only its amount.',
              'Start with a small deposit and test a first withdrawal.',
              'Set a spending limit before you play.'
            ]
          },
          { type: 'offres', titre: 'Our comparison (outside Ontario and Alberta)' }
        ]
      }
    ],
    faq: [
      {
        q: 'Are online casinos legal in Canada?',
        r: 'It depends on the province. Every province runs its own site. Ontario (since 2022) and Alberta (since July 2026) also license private casinos registered with their regulator. Elsewhere, no province authorizes private offshore sites.'
      },
      {
        q: 'What is the legal gambling age in Canada?',
        r: '18 in Quebec, Alberta and Manitoba; 19 in the other provinces, at least for online casino.'
      },
      {
        q: 'Can I play at offshore casinos from British Columbia or the Atlantic provinces?',
        r: 'Offshore casinos accept players there, but no province authorizes them. If you choose one, check its operator, licence and withdrawal rules first: in a dispute, there is no Canadian regulator to turn to.'
      },
      {
        q: 'Are casino winnings taxable in Canada?',
        r: 'As a rule, winnings of a recreational player are not taxable, because they are not a source of income. They can be if gambling is a professional activity. If in doubt, ask a tax professional.'
      }
    ],
    sources: [S.code, S.ontario, S.alberta, S.provinces, S.c218],
    connexes: ['/en-ca/how-we-rate/', '/en-ca/responsible-gambling/', '/en-ca/casino-bonuses/']
  },

  // ——————————————————————————— Responsible gambling
  {
    chemin: '/en-ca/responsible-gambling/',
    nomFil: 'Responsible gambling',
    titre: 'Responsible Gambling: Help Lines by Province in Canada',
    description:
      'Gambling help lines in every Canadian province and territory, the lower-risk gambling guidelines, and the casino tools to set limits or self-exclude.',
    h1: 'Responsible gambling: limits, tools and help lines by province',
    chapeau:
      'Gambling should stay entertainment. Here are Canada’s lower-risk gambling guidelines, the tools casinos offer to keep control, and the help line for your province.',
    modifie: MAJ,
    resume: 'Help lines by province, lower-risk guidelines and casino tools.',
    sections: [
      {
        id: 'help',
        titre: 'Help lines by province',
        blocs: [
          {
            type: 'tableau',
            legende: 'From the Canadian Centre on Substance Use and Addiction; Nova Scotia from the provincial government. Ontario and Alberta lines are on the CCSA page.',
            entetes: ['Province or territory', 'Help line', 'Phone'],
            lignes: AIDE_PROVINCES.map((a) => [a.province, a.nom, `[${a.tel}](tel:${a.tel.replace(/[^\d]/g, '')})`])
          },
          {
            type: 'p',
            texte: 'These lines also help family and friends of people who gamble. If you are in crisis or in danger, call 911.'
          }
        ]
      },
      {
        id: 'guidelines',
        titre: 'Canada’s lower-risk gambling guidelines',
        blocs: [
          { type: 'p', texte: 'The Canadian Centre on Substance Use and Addiction (CCSA) publishes three limits to lower the risk of harm:' },
          {
            type: 'liste',
            items: [
              '**How much:** no more than 1% of your household income before tax per month. With $70,000 a year, that is $58 a month.',
              '**How often:** no more than 4 days a month.',
              '**How many:** if you gamble regularly, no more than 2 types of games.'
            ]
          },
          {
            type: 'p',
            texte:
              'The CCSA notes that fast games with frequent bets, such as slots and many online games, can lead to problems more quickly, and that gambling to escape problems raises the risk.'
          }
        ]
      },
      {
        id: 'tools',
        titre: 'The tools casinos offer',
        blocs: [
          {
            type: 'liste',
            items: [
              '**Deposit limits** per day, week or month.',
              '**Time-outs** of a few days or weeks.',
              '**Self-exclusion** for months or years: Velobet, for example, announces periods from 6 months to 5 years.',
              '**Reality checks** that remind you how long you have been playing.'
            ]
          },
          {
            type: 'p',
            texte: 'Set these limits when you open your account, not after a bad session. Our [rating grid](/en-ca/how-we-rate/) gives 15% of the score to these tools and to customer support.'
          }
        ]
      },
      {
        id: 'signs',
        titre: 'Signs that gambling is becoming a problem',
        blocs: [
          {
            type: 'liste',
            items: [
              'You spend more than you planned, or chase your losses.',
              'You hide your gambling or lie about it.',
              'You borrow money or skip bills to gamble.',
              'You feel restless or irritable when you try to cut down.'
            ]
          },
          { type: 'p', texte: 'If one of these sounds familiar, call the help line of your province. Talking early is easier.' }
        ]
      }
    ],
    faq: [
      {
        q: 'Who can I call about a gambling problem in Canada?',
        r: 'Each province and territory has its own line: see the table above. In British Columbia, for example, the BC Problem Gambling Help Line is 1-888-795-6111.'
      },
      {
        q: 'How do I self-exclude from an online casino?',
        r: 'Look for “Responsible gambling” or “Self-exclusion” in your account settings, or ask customer support. Choose a period, and close any other gambling accounts you have at the same time.'
      }
    ],
    sources: [SOURCE_AIDE, SOURCE_AIDE_NS, S.lrgg],
    connexes: ['/en-ca/is-online-gambling-legal-in-canada/', '/en-ca/how-we-rate/']
  },

  // ——————————————————————————— How we rate
  {
    chemin: '/en-ca/how-we-rate/',
    nomFil: 'How we rate',
    titre: 'How We Rate Online Casinos: Our Public Grid',
    description:
      'How Loupe Casino scores online casinos: five weighted criteria, the sources we read, how we date every check, and why commissions never change the ranking.',
    h1: 'How we rate online casinos',
    chapeau:
      'Every casino gets a score out of 10 from a public grid of five weighted criteria. We read the official pages and terms, date every check and say clearly what we could not verify.',
    modifie: MAJ,
    resume: 'Our five criteria, their weights and how we check them.',
    sections: [
      {
        id: 'grid',
        titre: 'The grid',
        blocs: [
          {
            type: 'tableau',
            entetes: ['Criterion', 'Weight', 'The question we ask'],
            lignes: CRITERES.map((cr) => [CRITERES_EN[cr.id].nom, `${cr.poids}%`, CRITERES_EN[cr.id].question])
          },
          {
            type: 'p',
            texte:
              'The overall score is the weighted average of the five partial scores, rounded to one decimal. The ranking always follows the score: a casino cannot pay to move up.'
          }
        ]
      },
      {
        id: 'current',
        titre: 'Current scores',
        blocs: [
          {
            type: 'tableau',
            entetes: ['Casino', 'Score', ...CRITERES.map((cr) => CRITERES_EN[cr.id].nom)],
            lignes: CASINOS.map((c) => [lien(c), `**${noteEn(noteGlobale(c))}**`, ...CRITERES.map((cr) => noteEn(c.notes[cr.id].note))])
          }
        ]
      },
      {
        id: 'checks',
        titre: 'What we check, and how',
        blocs: [
          {
            type: 'liste',
            items: [
              '**Sources:** the casino’s promotions page, general terms, bonus terms and legal notices. Each fact on the site has a source and a date.',
              '**Operator and licence:** we look for the company name, its registration number and the licence number, and say when one is missing.',
              '**Written confirmations:** when an affiliate manager confirms something in writing (for example that Canadian players are accepted), we say so and date it.',
              '**Real tests:** we test each casino with real money, a minimum deposit followed by a withdrawal, then a $1,000 deposit, about every 3 days. The withdrawal times on the site come from these tests.',
              '**All amounts in Canadian dollars:** some casinos publish their terms in euros. In our tests with a Canadian-dollar account (November 2026), the same figures applied in CAD with no conversion, so a €10 minimum deposit is a $10 minimum. We show them in dollars.',
              '**“Not published” versus “Not verified”:** the first means the casino does not publish it; the second means we could not access the page.'
            ]
          }
        ]
      },
      {
        id: 'money',
        titre: 'How we make money',
        blocs: [
          {
            type: 'p',
            texte:
              'We earn a commission when you sign up at a casino through our links. It changes neither the scores nor the order of the ranking. Links to casinos are marked as commercial links.'
          },
          {
            type: 'p',
            texte: `Spotted an error or an outdated offer? Write to ${SITE.courriel}: we correct and re-date the page.`
          }
        ]
      }
    ],
    faq: [
      {
        q: 'Do casinos pay to be ranked higher?',
        r: 'No. The order follows the score from the public grid. We earn a commission on sign-ups, but it has no effect on the score.'
      },
      {
        q: 'How often are the scores updated?',
        r: 'Each time an offer, a licence or a withdrawal rule changes, and at least at every general check. The date of the last check is shown on every page.'
      }
    ],
    connexes: ['/en-ca/about/', '/en-ca/is-online-gambling-legal-in-canada/']
  },

  // ——————————————————————————— About
  {
    chemin: '/en-ca/about/',
    nomFil: 'About',
    titre: 'About Loupe Casino: Who We Are and How to Reach Us',
    description:
      'Loupe Casino compares online casinos for Canadian players outside Ontario and Alberta. Who is behind it, our editorial rules and how to contact us.',
    h1: 'About Loupe Casino',
    chapeau:
      'Loupe Casino is an independent comparison of online casinos. We put the terms next to every offer, date every piece of information and say clearly what could not be verified.',
    modifie: MAJ,
    resume: 'Who we are, our editorial rules and how to reach us.',
    sections: [
      {
        id: 'author',
        titre: `${AUTEUR.nom}, founder and editor-in-chief`,
        blocs: [
          {
            type: 'p',
            texte: `${AUTEUR.nom} has worked in-house for several online casinos in Malta, with 7 years of experience as a business developer in the industry.`
          },
          {
            type: 'p',
            texte:
              'He knows how online casinos work from the inside. That is why Loupe Casino exists: to show the terms next to each offer, date every piece of information and say clearly what could not be checked.'
          }
        ]
      },
      {
        id: 'rules',
        titre: 'Our editorial rules',
        blocs: [
          {
            type: 'liste',
            items: [
              'Every figure comes from an official page or a written confirmation, with its date.',
              'We never promise winnings and never present gambling as a way to make money.',
              'When something cannot be verified, we write it.',
              'The ranking follows our [public grid](/en-ca/how-we-rate/), never the commission.'
            ]
          }
        ]
      },
      {
        id: 'coverage',
        titre: 'Who the site is for',
        blocs: [
          {
            type: 'p',
            texte: `The English section is for adults in Canada outside Ontario and Alberta: 19+, or 18+ in Manitoba and Quebec. Our French section covers Quebec in more depth: [version française](/).`
          },
          ZONE
        ]
      },
      {
        id: 'contact',
        titre: 'Contact',
        blocs: [
          {
            type: 'p',
            texte: `Write to **${SITE.courriel}** to report an error, an outdated offer or a problem with a casino we list. We do not offer customer support for the casinos themselves: contact them directly for questions about your account.`
          }
        ]
      }
    ],
    faq: [],
    connexes: ['/en-ca/how-we-rate/', '/en-ca/responsible-gambling/']
  },
  // ——————————————————————————— Withdrawal times (real tests journal, donnees/tests.json)
  (() => {
    const h = (n: number | undefined | null) => (n === null || n === undefined ? 'Not tested' : `${n} h`);
    const l = (c: Casino) => `[${c.nom}](${['velobet', 'rolletto', 'celsius'].includes(c.id) ? `/en-ca/${c.slug}/withdrawal/` : cheminEn(c)})`;
    const rank = classementRetraits();
    const first = rank[0];
    const second = rank[1];
    const cryptoFaster = rank.every((c) => {
      const k = dernier(c, 'crypto')?.delaiHeures;
      const t = dernier(c, 'carte')?.delaiHeures;
      return k === undefined || t === undefined || k < t;
    });
    const page: PageGuide = {
      chemin: '/en-ca/casino-withdrawal-times/',
      nomFil: 'Withdrawal times tested',
      titre: 'Casino Withdrawal Times in Canada: Our Real Tests',
      description:
        'Withdrawal times measured in our real-money tests with a Canadian-dollar account: crypto and card, casino by casino, every result dated.',
      h1: 'Casino withdrawal times: our real tests, casino by casino',
      chapeau: `Withdrawal times announced by casinos are promises. The ones on this page are measured: ${AUTEUR.nom} deposits, plays and withdraws at every casino we compare with a Canadian-dollar account, then plays again about every 3 days. Last result: ${dateEn(DERNIER_RELEVE)}.`,
      modifie: DERNIER_RELEVE,
      resume: 'Withdrawal times measured in our real tests, casino by casino, every result dated.',
      sections: [
        {
          id: 'results',
          titre: 'Latest withdrawal times measured',
          blocs: [
            {
              type: 'tableau',
              legende: `Time between the withdrawal request and the funds arriving, in the latest test. Results as of ${dateEn(DERNIER_RELEVE)}.`,
              entetes: ['Rank', 'Casino', 'Crypto withdrawal', 'Card withdrawal', 'Results published'],
              lignes: rank.map((c, i) => [String(i + 1), l(c), `**${h(dernier(c, 'crypto')?.delaiHeures)}**`, h(dernier(c, 'carte')?.delaiHeures), String(nombreDeReleves(c))])
            },
            {
              type: 'p',
              texte: first
                ? `In our latest results, ${first.nom} was the fastest: ${h(dernier(first, 'crypto')?.delaiHeures)} in crypto and ${h(dernier(first, 'carte')?.delaiHeures)} by card.${second ? ` ${second.nom} follows with ${h(dernier(second, 'crypto')?.delaiHeures)} in crypto.` : ''}`
                : 'No test has been published yet.'
            },
            {
              type: 'encadre',
              ton: 'info',
              titre: 'Your times may differ',
              texte:
                'A first withdrawal often takes longer while your identity is checked. The payment method, the amount, an active bonus or a weekend request also change the time. These figures describe our tests, not a guarantee.'
            },
            ZONE
          ]
        },
        {
          id: 'method',
          titre: 'How we test',
          blocs: [
            {
              type: 'liste',
              ordonnee: true,
              items: [
                '**Two tests per casino.** A minimum deposit followed by a withdrawal, then a CA$1,000 deposit, to compare two different balances.',
                '**A Canadian-dollar account**, opened and used like any player’s, with real money.',
                '**The time measured** runs from the withdrawal request to the funds arriving, in crypto and by card when the casino allows it.',
                '**A new result about every 3 days**, and more often if the service gets worse. Every result is dated and added to the log below; old ones are never deleted.',
                '**Bad results are published too.** If a withdrawal drags or fails, it shows here and the casino’s score reflects it.'
              ]
            },
            { type: 'p', texte: `The tests are run by ${AUTEUR.nom}, the site’s founder: [about the author](/en-ca/about/#author). [How we rate](/en-ca/how-we-rate/) explains how these results feed the withdrawals score.` }
          ]
        },
        {
          id: 'announced',
          titre: 'Announced versus measured',
          blocs: [
            {
              type: 'tableau',
              entetes: ['Casino', 'What the terms announce', 'Measured in crypto', 'Measured by card'],
              lignes: CASINOS.map((c) => [l(c), retraitsEn(c), h(dernier(c, 'crypto')?.delaiHeures), h(dernier(c, 'carte')?.delaiHeures)])
            },
            {
              type: 'p',
              texte:
                'Terms usually give a maximum time (for example “within 3 business days”). Our tests show the real time of an ordinary withdrawal. Both are useful: the first is what the casino commits to, the second is what you will see in practice.'
            }
          ]
        },
        {
          id: 'log',
          titre: 'The full results log',
          blocs: [
            {
              type: 'tableau',
              legende: 'Newest first.',
              entetes: ['Date', 'Casino', 'Method', 'Time measured'],
              lignes: RELEVES.map((r) => {
                const c = CASINOS.find((x) => x.id === r.casino) as Casino;
                return [dateEn(r.date), l(c), r.moyen === 'crypto' ? 'Crypto' : 'Card', `${r.delaiHeures} h`];
              })
            }
          ]
        },
        {
          id: 'slower',
          titre: 'What can slow your withdrawal down',
          blocs: [
            {
              type: 'liste',
              items: [
                '**Identity checks.** Send your documents right after sign-up rather than at your first withdrawal.',
                '**An active bonus.** Until the wagering is complete, the bonus and its winnings stay locked.',
                '**A deposit not yet wagered.** Several casinos require a deposit to be wagered once before it can be withdrawn.',
                '**Weekly limits.** A big win can be paid in instalments.',
                cryptoFaster
                  ? '**The payment method.** In our tests, crypto always arrived faster than card.'
                  : '**The payment method.** Depending on the casino, crypto or card can be faster: compare in the table.'
              ]
            },
            { type: 'offres', casinos: rank.slice(0, 3).map((c) => c.id), titre: 'The fastest in our tests' }
          ]
        }
      ],
      faq: [
        {
          q: 'Which online casino pays out fastest in Canada?',
          r: first
            ? `In our latest tests (${dateEn(DERNIER_RELEVE)}), ${first.nom}: ${h(dernier(first, 'crypto')?.delaiHeures)} for a crypto withdrawal and ${h(dernier(first, 'carte')?.delaiHeures)} by card. The full ranking is at the top of this page and changes with every new result.`
            : 'We have not published a test yet.'
        },
        {
          q: 'Why is my withdrawal slower than in your tests?',
          r: 'A first withdrawal often requires an identity check. An active bonus, a deposit not yet wagered, a weekly limit or another payment method can also slow it down. Ask customer support what is holding it, and keep a record of the answer.'
        },
        {
          q: 'How often do you update these times?',
          r: 'About every 3 days for each casino, and more often if the service gets worse. The date of each result is in the log.'
        },
        {
          q: 'Do casinos pay to appear in these tests?',
          r: 'No. The tests are run with real money by the author. We earn a commission when you sign up through our links, but it changes neither the times published nor the order of the ranking.'
        }
      ],
      sources: CASINOS.filter((c) => c.retraits).map((c) => ({ titre: `${c.nom}: published withdrawal rules`, url: c.retraits!.source })),
      connexes: ['/en-ca/fast-withdrawal-casinos/', '/en-ca/crypto-casinos/', '/en-ca/how-we-rate/']
    };
    return page;
  })()
];


export function pageEn(chemin: string): PageGuide | undefined {
  return PAGES_EN.find((p) => p.chemin === chemin);
}

export const SLUGS_GUIDES = PAGES_EN.map((p) => p.chemin.replace(/^\/en-ca\//, '').replace(/\/$/, ''));

