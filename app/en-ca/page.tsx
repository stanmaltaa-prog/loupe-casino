import Link from 'next/link';
import Tampon from '@/components/Tampon';
import Faq, { type Question } from '@/components/Faq';
import JsonLd from '@/components/JsonLd';
import Marque from '@/components/Marque';
import BoutonCasino from '@/components/BoutonCasino';
import NoteLoupe from '@/components/NoteLoupe';
import CarteOffreEn from '@/components/en/CarteOffreEn';
import TableauEn from '@/components/en/TableauEn';
import AideEn from '@/components/en/AideEn';
import { CASINOS, CRITERES, noteGlobale, parId, type Casino } from '@/lib/casinos';
import { CRITERES_EN, cheminEn, en, exempleEn, miseEn } from '@/lib/en/casinos';
import { EN, MESSAGE_ZONE, dateEn, moisEn } from '@/lib/en/site';
import { absolu } from '@/lib/site';
import { metaEn, schemaPage } from '@/lib/seo';

const MAJ = EN.verification;

export const metadata = metaEn({
  titre: `Best Online Casinos in Canada: ${moisEn(MAJ)} Rankings`,
  description: `Online casinos for Canadian players outside Ontario and Alberta, compared on wagering, licence and withdrawals from official terms. Updated ${dateEn(MAJ)}.`,
  chemin: '/en-ca/',
  titreAbsolu: true
});

function choix(): { titre: string; casino: Casino; raison: string }[] {
  const top = CASINOS[0];
  const liste = [
    { titre: 'Best overall', id: top.id, raison: `Top score on our grid. ${en(top).accroche}` },
    { titre: 'Biggest welcome pack', id: 'rolletto', raison: 'Up to $5,500 + 200 free spins over 3 deposits, but only 5 days to clear the wagering.' },
    { titre: 'Lightest wagering', id: 'betportal', raison: '30x the bonus only: for the same first deposit, 40% less to wager than at Rolletto.' },
    { titre: 'Cards and e-wallets', id: 'celsius', raison: 'Visa, Mastercard, Apple Pay, Google Pay, Skrill, PayPal and Paysafecard shown, plus nine cryptocurrencies.' },
    { titre: 'Biggest game library', id: '1win', raison: 'More than 11,000 games announced and 500 free spins over four deposits.' }
  ];
  return liste
    .filter((l, i) => i === 0 || l.id !== top.id)
    .map((l) => ({ titre: l.titre, casino: parId(l.id), raison: l.raison }))
    .filter((l): l is { titre: string; casino: Casino; raison: string } => Boolean(l.casino));
}

const FAQ: Question[] = [
  {
    q: 'What is the best online casino in Canada?',
    r: `On our grid, updated on ${dateEn(MAJ)}, ${CASINOS[0].nom} has the best score. The best choice still depends on how you play: if you mainly want to clear a bonus, wagering calculated on the bonus only is lighter.`
  },
  {
    q: 'Is online gambling legal in Canada?',
    r: 'Each province sets its own rules. Ontario and Alberta license private online casinos; elsewhere, only the province’s Crown corporation site is authorized. The casinos we compare operate from abroad under foreign licences and are not authorized by any province.'
  },
  {
    q: 'Why don’t you cover Ontario and Alberta?',
    r: 'Both provinces license private online casinos, and the casinos we compare are not registered with their regulators. If you live there, use a site licensed in your province.'
  },
  {
    q: 'Can I pay with Interac at these casinos?',
    r: 'We could not confirm Interac on the official pages of the casinos we compare. Cryptocurrencies are accepted at Velobet, Rolletto, Celsius and 1win. Always check the cashier before your first deposit.'
  },
  {
    q: 'Are casino winnings taxable in Canada?',
    r: 'As a rule, winnings of a recreational player are not taxable in Canada. It can be different if gambling is a professional activity. If in doubt, ask a tax professional.'
  },
  {
    q: 'How does Loupe Casino make money?',
    r: 'We earn a commission when you sign up at a casino through our links. The ranking follows only our public rating grid: the commission changes neither the scores nor the order.'
  }
];

export default function AccueilEn() {
  const exemples = CASINOS.map((c) => ({ c, ex: exempleEn(c) }));
  return (
    <>
      <section className="accueil-heros">
        <div className="conteneur accueil-heros-grille">
          <div>
            <p className="surtitre">Independent comparison · Canada, outside ON and AB · 19+</p>
            <h1>Best online casinos in Canada, under the magnifying glass</h1>
            <p className="chapeau">
              Bonus, wagering, licence and withdrawals: we read every casino&apos;s official terms and date each check. Here is
              the ranking, with the figures that actually matter.
            </p>
            <ul className="confiance">
              <li>✓ Terms read on the official sites</li>
              <li>✓ Acceptance of Canadian players checked with each casino</li>
              <li>✓ Public rating grid</li>
            </ul>
            <div className="heros-meta heros-meta-clair">
              <Tampon lang="en" date={MAJ} texte="Rankings checked on" />
              <Link href="/en-ca/how-we-rate/">How we rate</Link>
            </div>
          </div>
          <div className="podium" aria-label="Current top 3">
            <p className="podium-titre">Current top 3</p>
            <ol>
              {CASINOS.slice(0, 3).map((c, i) => (
                <li key={c.id}>
                  <span className="podium-rang">{i + 1}</span>
                  <Marque casino={c} petite />
                  <span className="podium-texte">
                    <Link href={cheminEn(c)}>{c.nom}</Link>
                    <span>{en(c).offre.titre}</span>
                  </span>
                  <NoteLoupe note={noteGlobale(c)} taille={38} legende={false} lang="en" />
                  <BoutonCasino casino={c} emplacement="en-accueil-podium" texte="Play" />
                </li>
              ))}
            </ol>
            <p className="podium-mention">19+. Not for Ontario or Alberta. Casino terms apply. Commercial links.</p>
          </div>
        </div>
      </section>

      <section className="conteneur" id="rankings" aria-labelledby="rankings-title">
        <h2 id="rankings-title" className="sr-only">
          Online casino rankings for Canada
        </h2>
        <ol className="classement">
          {CASINOS.map((c, i) => (
            <li key={c.id}>
              <CarteOffreEn casino={c} rang={i + 1} emplacement="en-accueil-classement" />
            </li>
          ))}
        </ol>
        <p className="petit" style={{ marginTop: 14 }}>
          Commercial links: we earn a commission if you sign up through our links. The order follows only our{' '}
          <Link href="/en-ca/how-we-rate/">public rating grid</Link>. {MESSAGE_ZONE}
        </p>
      </section>

      <section className="conteneur">
        <h2>The offers side by side</h2>
        <p className="lecture">
          The bonus amount on its own says almost nothing. What counts is how much you must bet before you can withdraw, how
          fast, and who is behind the site.
        </p>
        <TableauEn casinos={CASINOS} emplacement="en-accueil-tableau" legende={`Data from the official sites, checked on ${dateEn(MAJ)} or earlier.`} />
      </section>

      <section className="conteneur">
        <h2>The best casino for your profile</h2>
        <ul className="grille-liens">
          {choix().map((x) => (
            <li key={x.titre}>
              <Link href={cheminEn(x.casino)}>
                <strong>
                  {x.titre}: {x.casino.nom}
                </strong>
                <span>{x.raison}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="conteneur">
        <h2>Guides for Canadian players</h2>
        <ul className="grille-liens">
          {[
            ['/en-ca/casino-bonuses/', 'Casino bonuses', 'Every welcome bonus ranked on wagering and deadline.'],
            ['/en-ca/fast-withdrawal-casinos/', 'Fast withdrawal casinos', 'Processing times and weekly limits, as published.'],
            ['/en-ca/interac-casinos/', 'Interac casinos', 'What we found casino by casino, and the alternatives.'],
            ['/en-ca/crypto-casinos/', 'Crypto casinos', 'Coins accepted, crypto bonuses and safe transfers.'],
            ['/en-ca/minimum-deposit-casinos/', 'Minimum deposit casinos', 'The smallest deposit that unlocks each bonus.'],
            ['/en-ca/is-online-gambling-legal-in-canada/', 'Is it legal?', 'The rules in each province, and the minimum age.']
          ].map(([href, titre, texte]) => (
            <li key={href}>
              <Link href={href}>
                <strong>{titre}</strong>
                <span>{texte}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <div className="conteneur lecture prose">
        <h2>What “up to $5,500” really means</h2>
        <p>
          A casino bonus is not money you can withdraw straight away. To turn it into real money, you must bet a certain amount
          a certain number of times: that is the wagering requirement. Two bonuses with the same percentage can be worth very
          different things.
        </p>
        <p>Here is what a deposit of 100 at the first tier means at each casino we compare:</p>
        <div className="tableau-defilant">
          <table>
            <thead>
              <tr>
                <th scope="col">Casino</th>
                <th scope="col">Bonus received</th>
                <th scope="col">Wagering</th>
                <th scope="col">Total to wager</th>
              </tr>
            </thead>
            <tbody>
              {exemples.map(({ c, ex }) => (
                <tr key={c.id}>
                  <th scope="row">
                    <Link href={cheminEn(c, true)}>{c.nom}</Link>
                  </th>
                  <td>{ex ? ex.f(ex.bonus) : 'Not confirmed'}</td>
                  <td>{miseEn(c)}</td>
                  <td>{ex ? <strong>{ex.f(ex.aMiser)}</strong> : 'Not confirmed'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Wagering calculated on the bonus only asks for much less play than wagering on the deposit plus the bonus. The
          deadline matters too: 7,500 to wager in 5 days is 1,500 a day. More in our guide to{' '}
          <Link href="/en-ca/casino-bonuses/">casino bonuses in Canada</Link>.
        </p>

        <h2>Is it legal to play online in Canada?</h2>
        <p>
          Each province decides. Ontario and Alberta license private online casinos. In British Columbia, Manitoba,
          Saskatchewan, the Atlantic provinces and Quebec, only the provincial Crown corporation&apos;s site is authorized. The
          casinos we compare operate from abroad, under Curacao or Anjouan licences when one is displayed: no province
          authorizes them, and you do not get the same recourse as with a provincial site.
        </p>
        <p>
          The details, province by province: <Link href="/en-ca/is-online-gambling-legal-in-canada/">is online gambling legal in Canada?</Link>
        </p>

        <h2>How we rank the casinos</h2>
        <p>
          Each casino gets a score out of 10 on five criteria, weighted by how much they matter to you. The overall score is a
          weighted average, and the ranking follows it without exception.
        </p>
        <div className="tableau-defilant">
          <table>
            <thead>
              <tr>
                <th scope="col">Criterion</th>
                <th scope="col">Weight</th>
                <th scope="col">What we look at</th>
              </tr>
            </thead>
            <tbody>
              {CRITERES.map((c) => (
                <tr key={c.id}>
                  <th scope="row">{CRITERES_EN[c.id].nom}</th>
                  <td>{c.poids}%</td>
                  <td>{CRITERES_EN[c.id].question}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          When a casino does not publish something, we do not make it up: we say so, and the score reflects it. Full details:{' '}
          <Link href="/en-ca/how-we-rate/">how we rate</Link>.
        </p>

        <h2>Provincial site or offshore casino: the real differences</h2>
        <div className="tableau-defilant">
          <table>
            <thead>
              <tr>
                <th scope="col">
                  <span className="sr-only">Point of comparison</span>
                </th>
                <th scope="col">Provincial site (PlayNow, Atlantic Lottery…)</th>
                <th scope="col">Casinos we compare</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Authorization</th>
                <td>Run by your province</td>
                <td>Foreign licence (Curacao, Anjouan) or none displayed</td>
              </tr>
              <tr>
                <th scope="row">Recourse in a dispute</th>
                <td>In your province</td>
                <td>With the foreign regulator, when it is known</td>
              </tr>
              <tr>
                <th scope="row">Welcome bonus</th>
                <td>Depends on the provincial promotions</td>
                <td>Up to $5,500 depending on the casino, with wagering</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          There is no universal right answer: a provincial site gives more recourse, an offshore site more aggressive offers. If
          you choose an offshore site, prefer an identifiable operator and read the withdrawal rules before depositing.
        </p>

        <h2>Before you sign up</h2>
        <ol>
          <li>Set an entertainment budget you can afford to lose, and stick to it.</li>
          <li>Read the wagering, the deadline and the maximum bet before accepting a bonus.</li>
          <li>If you play little, decline the bonus: your winnings stay withdrawable without conditions.</li>
          <li>Get your identity verified early so you do not wait at withdrawal time.</li>
          <li>Test a small first withdrawal before depositing more.</li>
        </ol>

        <Faq questions={FAQ} titre="Frequently asked questions" />
        <AideEn />
      </div>

      <JsonLd
        donnees={[
          schemaPage({
            titre: 'Best online casinos in Canada',
            description: EN.slogan,
            chemin: '/en-ca/',
            publie: EN.publication,
            modifie: MAJ,
            type: 'CollectionPage',
            langue: EN.langue
          }),
          {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Online casino rankings for Canada',
            itemListOrder: 'https://schema.org/ItemListOrderDescending',
            numberOfItems: CASINOS.length,
            itemListElement: CASINOS.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.nom, url: absolu(cheminEn(c)) }))
          }
        ]}
      />
    </>
  );
}
