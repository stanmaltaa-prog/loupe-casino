import Link from 'next/link';
import FilAriane from '../FilAriane';
import Tampon from '../Tampon';
import Faq from '../Faq';
import JsonLd from '../JsonLd';
import BoutonCasino from '../BoutonCasino';
import FicheBoiteEn from './FicheBoiteEn';
import OngletsEn from './OngletsEn';
import PaliersEn from './PaliersEn';
import ExempleEn from './ExempleEn';
import AlternativesEn from './AlternativesEn';
import AideEn from './AideEn';
import CollantEn from './CollantEn';
import MentionEn from './MentionEn';
import SignatureEn from './SignatureEn';
import { CASINOS, CRITERES, noteGlobale, rang, type Casino } from '@/lib/casinos';
import {
  CRITERES_EN,
  cheminEn,
  depotMinEn,
  en,
  licenceEn,
  miseEn,
  operateurEn,
  retraitsEn
} from '@/lib/en/casinos';
import { EN, MESSAGE_ZONE, dateEn, noteEn } from '@/lib/en/site';
import { SITE, absolu } from '@/lib/site';
import { schemaPage } from '@/lib/seo';
import { RETRAIT_EN } from '@/lib/en/sujets';
import TestReelEn from './TestReelEn';

export function textesAvis(c: Casino) {
  const t = en(c);
  const note = noteEn(noteGlobale(c));
  return {
    titre: `${c.nom} Casino Review ${EN.verification.slice(0, 4)}: Bonus, Terms, Withdrawals`,
    description: [
      `${c.nom} review for Canadian players: ${t.offre.titre}. Wagering ${miseEn(c)}. Licence and withdrawals checked. Score ${note}/10.`,
      `${c.nom} review for Canada: ${t.offre.titre}. Wagering ${miseEn(c)}. Licence and withdrawals checked. Score ${note}/10.`,
      `${c.nom} review for Canada: ${t.offre.titre}. Wagering ${miseEn(c)}. Score ${note}/10.`
    ].find((d) => d.length <= 155) as string,
    h1: `${c.nom} Casino review: bonus, licence and withdrawals`
  };
}

export function dateModif(c: Casino): string {
  return [c.offre.verifieLe, c.licence.verifieLe, c.paiements.verifieLe, c.retraits?.verifieLe || '', EN.verification].sort().pop() as string;
}

const INTERAC: Record<Casino['paiements']['interac'], string> = {
  confirme: 'Interac confirmed on the official pages',
  'non-confirme': 'Interac not confirmed on the official pages',
  'non-affiche': 'Interac not shown on the site'
};

export default function AvisEn({ c }: { c: Casino }) {
  const t = en(c);
  const x = textesAvis(c);
  const note = noteGlobale(c);
  const chemin = cheminEn(c);
  const modifie = dateModif(c);
  const sources = [
    { titre: `${c.nom}: official promotions page (welcome offer)`, url: c.offre.source, date: c.offre.verifieLe },
    { titre: `${c.nom}: licence and legal notices`, url: c.licence.source, date: c.licence.verifieLe },
    ...(c.retraits ? [{ titre: `${c.nom}: withdrawal rules`, url: c.retraits.source, date: c.retraits.verifieLe }] : [])
  ].filter((s, i, arr) => arr.findIndex((y) => y.url === s.url && y.titre === s.titre) === i);

  return (
    <>
      <FilAriane lang="en" elements={[{ nom: `${c.nom} review`, chemin }]} />
      <div className="conteneur">
        <div className="fiche-tete">
          <div className="fiche-titre">
            <h1>{x.h1}</h1>
          </div>
          <div className="fiche-intro">
            <p className="lecture">
              {c.nom} scores {noteEn(note)} out of 10 in our grid and ranks {rang(c)} of {CASINOS.length} in our comparison.{' '}
              {t.accroche}
            </p>
            <p className="lecture">
              We read its official promotions page, its terms and its legal notices. Below: what they say about the bonus,
              the licence and withdrawals, and what we could not confirm.
            </p>
            <div className="heros-meta">
              <Tampon lang="en" date={modifie} />
              <SignatureEn />
              <span>
                Rank {rang(c)} of {CASINOS.length} in our <Link href="/en-ca/#rankings">rankings</Link>
              </span>
            </div>
            <OngletsEn casino={c} actif="avis" />
          </div>
          <FicheBoiteEn casino={c} emplacement={`en-avis-${c.id}-haut`} />
        </div>

        <div className="lecture prose">
          <p className="petit">{MESSAGE_ZONE}</p>
          <TestReelEn casino={c} />

          <h2>{c.nom} at a glance</h2>
          <dl className="faits">
            <dt>Operator</dt>
            <dd>{operateurEn(c)}</dd>
            <dt>Licence</dt>
            <dd>{licenceEn(c)}</dd>
            <dt>Welcome offer</dt>
            <dd>{t.offre.titre}</dd>
            <dt>Wagering</dt>
            <dd>{miseEn(c)}</dd>
            <dt>Minimum deposit</dt>
            <dd>{depotMinEn(c)}</dd>
            <dt>Games</dt>
            <dd>{t.nombreJeux || 'Not published'}</dd>
            {c.paiements.crypto.length ? (
              <>
                <dt>Cryptocurrencies</dt>
                <dd>{c.paiements.crypto.join(', ')}</dd>
              </>
            ) : null}
            <dt>Withdrawals</dt>
            <dd>{retraitsEn(c)}</dd>
            <dt>Canadian players</dt>
            <dd>{c.quebec.statut === 'confirme' ? 'Accepted, confirmed in writing' : 'To be confirmed in writing'}</dd>
            <dt>Checked on</dt>
            <dd>
              {dateEn(modifie)}, on{' '}
              <a href={c.offre.source} rel="nofollow noopener" target="_blank">
                the official site
              </a>
            </dd>
          </dl>

          <h2>Loupe score: {noteEn(note)} out of 10</h2>
          <p>
            The score combines five weighted criteria. Each partial score is explained below; <Link href="/en-ca/how-we-rate/">how we rate</Link>{' '}
            describes the grid.
          </p>
          <ul className="barres">
            {CRITERES.map((cr) => (
              <li key={cr.id}>
                <div className="barre-tete">
                  <span>
                    {CRITERES_EN[cr.id].nom} <span className="petit">({cr.poids}%)</span>
                  </span>
                  <span>{noteEn(c.notes[cr.id].note)}</span>
                </div>
                <div className="barre" aria-hidden="true">
                  <span style={{ width: `${c.notes[cr.id].note * 10}%` }} />
                </div>
                <p className="barre-raison">{t.raisons[cr.id]}</p>
              </li>
            ))}
          </ul>

          <h2>Pros and cons</h2>
          <div className="deux-colonnes">
            <div className="carte">
              <h3 className="mt0">Pros</h3>
              <ul className="liste-plus">
                {t.pointsForts.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
            <div className="carte">
              <h3 className="mt0">Cons</h3>
              <ul className="liste-moins">
                {t.pointsFaibles.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </div>

          <h2>The {c.nom} welcome bonus</h2>
          <PaliersEn casino={c} />
          <ExempleEn casino={c} />
          {t.autresOffres.length ? (
            <>
              <h3>Other offers</h3>
              <ul>
                {t.autresOffres.map((o) => (
                  <li key={o.titre}>
                    <strong>{o.titre}:</strong> {o.detail}
                  </li>
                ))}
              </ul>
            </>
          ) : null}
          <p>
            Every term, traps included: <Link href={cheminEn(c, true)}>the {c.nom} bonus explained</Link>.
          </p>

          <h2>Licence and operator</h2>
          <p>
            <strong>Operator:</strong> {operateurEn(c)}. <strong>Licence:</strong> {licenceEn(c)}.
          </p>
          <p>{t.licenceNote}</p>
          <p>
            Whatever the licence, a foreign gaming licence is not an authorization from a Canadian province. Our guide{' '}
            <Link href="/en-ca/is-online-gambling-legal-in-canada/">is online gambling legal in Canada?</Link> explains what
            that means for you.
          </p>
          <p>
            <strong>Canadian players:</strong> {t.canada}
          </p>
          <p>
            Everything we could and could not verify: <Link href={cheminEn(c, 'legit')}>is {c.nom} legit?</Link>
          </p>

          <h2>Withdrawals</h2>
          {t.retraits ? (
            <>
              <p>
                <strong>In short:</strong> {t.retraits.resume}.
              </p>
              <ul>
                {t.retraits.detail.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </>
          ) : (
            <p>
              We found no withdrawal rules on the pages we checked. Before your first deposit, ask customer support for the
              minimum, the processing time and the weekly limit, and keep a copy of the answer.
            </p>
          )}
          {RETRAIT_EN[c.id] ? (
            <p>
              The rules, an example and our tips: <Link href={cheminEn(c, 'withdrawal')}>{c.nom} withdrawals explained</Link>.
            </p>
          ) : null}
          <p>
            Compare all the published limits on our page about <Link href="/en-ca/fast-withdrawal-casinos/">fast withdrawal casinos</Link>.
          </p>

          <h2>Payments</h2>
          <ul>
            <li>
              <strong>Cryptocurrencies:</strong> {c.paiements.crypto.length ? c.paiements.crypto.join(', ') : 'none listed on the pages we checked'}
            </li>
            {c.paiements.autres.length ? (
              <li>
                <strong>Other methods:</strong> {c.paiements.autres.join(', ')}
              </li>
            ) : null}
            {t.devises ? (
              <li>
                <strong>Currencies:</strong> {t.devises}
              </li>
            ) : null}
            <li>
              <strong>Interac:</strong> {INTERAC[c.paiements.interac]}
            </li>
          </ul>

          {t.aConfirmer.length ? (
            <section>
              <h2>What we could not confirm</h2>
              <p>We would rather flag what we do not know than make it up. Check these points on the site before you deposit:</p>
              <ul>
                {t.aConfirmer.map((y) => (
                  <li key={y}>{y}</li>
                ))}
              </ul>
            </section>
          ) : null}

          <h2>Our verdict on {c.nom}</h2>
          {t.verdict.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
          <div className="deux-colonnes">
            <div className="carte">
              <h3 className="mt0">Good for</h3>
              <ul className="liste-plus">
                {t.pourQui.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
            <div className="carte">
              <h3 className="mt0">Skip it if you are</h3>
              <ul className="liste-moins">
                {t.pasPourQui.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="carte centre" style={{ marginTop: 24 }}>
            <p className="offre-titre">{t.offre.titre}</p>
            <p className="offre-sous-titre">
              Wagering: {miseEn(c)}. Minimum deposit: {depotMinEn(c)}.
            </p>
            <BoutonCasino casino={c} emplacement={`en-avis-${c.id}-verdict`} texte={`Get the ${c.nom} bonus`} />
            <MentionEn />
          </div>

          <Faq questions={t.faqAvis} titre={`${c.nom} FAQ`} />

          <section aria-labelledby="sources">
            <h2 id="sources">Sources</h2>
            <ul className="source">
              {sources.map((s) => (
                <li key={s.titre}>
                  <a href={s.url} rel="nofollow noopener" target="_blank">
                    {s.titre}
                  </a>{' '}
                  <span className="petit">(checked on {dateEn(s.date)})</span>
                </li>
              ))}
            </ul>
          </section>

          <AlternativesEn casino={c} />
          <AideEn />
        </div>
      </div>
      <CollantEn casino={c} emplacement={`en-avis-${c.id}-collant`} />
      <JsonLd
        donnees={[
          schemaPage({ titre: x.h1, description: x.description, chemin, publie: EN.publication, modifie, type: 'Article', langue: EN.langue }),
          {
            '@context': 'https://schema.org',
            '@type': 'Review',
            name: `${c.nom} review`,
            url: absolu(chemin),
            inLanguage: EN.langue,
            itemReviewed: { '@type': 'Organization', name: c.nom },
            reviewRating: { '@type': 'Rating', ratingValue: note, bestRating: 10, worstRating: 0 },
            author: { '@type': 'Organization', name: SITE.nom, url: `${SITE.url}/` },
            publisher: { '@type': 'Organization', name: SITE.nom, url: `${SITE.url}/` },
            datePublished: EN.publication,
            dateModified: modifie,
            reviewBody: t.verdict.join(' '),
            positiveNotes: {
              '@type': 'ItemList',
              itemListElement: t.pointsForts.map((p, i) => ({ '@type': 'ListItem', position: i + 1, name: p }))
            },
            negativeNotes: {
              '@type': 'ItemList',
              itemListElement: t.pointsFaibles.map((p, i) => ({ '@type': 'ListItem', position: i + 1, name: p }))
            }
          }
        ]}
      />
    </>
  );
}
