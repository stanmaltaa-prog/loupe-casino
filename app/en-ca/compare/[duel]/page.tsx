import { notFound } from 'next/navigation';
import Link from 'next/link';
import FilAriane from '@/components/FilAriane';
import Tampon from '@/components/Tampon';
import JsonLd from '@/components/JsonLd';
import Faq from '@/components/Faq';
import Marque from '@/components/Marque';
import NoteLoupe from '@/components/NoteLoupe';
import BoutonCasino from '@/components/BoutonCasino';
import TableauEn from '@/components/en/TableauEn';
import MentionEn from '@/components/en/MentionEn';
import AideEn from '@/components/en/AideEn';
import SignatureEn from '@/components/en/SignatureEn';
import { noteGlobale, paireParSlug, paires, type Casino } from '@/lib/casinos';
import { cheminEn, en, exempleEn, miseEn } from '@/lib/en/casinos';
import { DUELS_EN } from '@/lib/en/duels';
import { EN, MESSAGE_ZONE, noteEn } from '@/lib/en/site';
import { dernier } from '@/lib/tests';
import { metaEn, schemaPage } from '@/lib/seo';

export const dynamicParams = false;

export function generateStaticParams() {
  return paires()
    .filter((p) => DUELS_EN[p.slug])
    .map((p) => ({ duel: p.slug }));
}

function textes(slug: string) {
  const p = paireParSlug(slug);
  const d = DUELS_EN[slug];
  if (!p || !d) return null;
  const options = [
    `${p.a.nom} vs ${p.b.nom}: ${d.resume} Bonus, wagering, licence and withdrawals compared.`,
    `${p.a.nom} vs ${p.b.nom}: ${d.resume}`,
    `${p.a.nom} vs ${p.b.nom}: bonus, wagering, licence and withdrawals compared point by point, with a clear verdict.`
  ];
  return {
    p,
    d,
    h1: `${p.a.nom} or ${p.b.nom}: which casino should you choose?`,
    titre: `${p.a.nom} vs ${p.b.nom}: Bonus, Licence and Withdrawals`,
    description: options.find((o) => o.length <= 155 && o.length >= 70) as string
  };
}

export function generateMetadata({ params }: { params: { duel: string } }) {
  const t = textes(params.duel);
  if (!t) return {};
  return metaEn({ titre: t.titre, description: t.description, chemin: `/en-ca/compare/${params.duel}/`, type: 'article' });
}

const sansMajuscule = (s: string) => `${s.charAt(0).toLowerCase()}${s.slice(1)}`;

function tempsTest(c: Casino): string {
  const k = dernier(c, 'crypto')?.delaiHeures;
  const t = dernier(c, 'carte')?.delaiHeures;
  if (k === undefined && t === undefined) return 'not tested yet';
  return [k !== undefined ? `${k} h in crypto` : null, t !== undefined ? `${t} h by card` : null].filter(Boolean).join(', ');
}

export default function DuelEn({ params }: { params: { duel: string } }) {
  const t = textes(params.duel);
  if (!t) notFound();
  const { p, d } = t;
  const { a, b } = p;
  const exA = exempleEn(a);
  const exB = exempleEn(b);
  const chemin = `/en-ca/compare/${params.duel}/`;
  const modifie = [a.offre.verifieLe, b.offre.verifieLe, EN.verification].sort().pop() as string;
  const gagnant = noteGlobale(a) >= noteGlobale(b) ? a : b;
  const ligne = (c: Casino, ex: ReturnType<typeof exempleEn>) =>
    ex ? `${ex.f(ex.bonus)} bonus, ${ex.f(ex.aMiser)} to wager (${miseEn(c)}).` : 'wagering requirement not confirmed.';

  return (
    <>
      <FilAriane
        lang="en"
        elements={[
          { nom: 'Comparisons', chemin: '/en-ca/compare/' },
          { nom: `${a.nom} vs ${b.nom}`, chemin }
        ]}
      />
      <section className="heros conteneur">
        <h1>{t.h1}</h1>
        <p className="chapeau">{d.resume}</p>
        <div className="heros-meta">
          <Tampon lang="en" date={modifie} />
          <SignatureEn />
        </div>
      </section>

      <div className="conteneur">
        <div className="deux-colonnes">
          {[a, b].map((c) => (
            <div className="carte" key={c.id}>
              <div className="offre-tete" style={{ marginBottom: 14 }}>
                <Marque casino={c} />
                <div>
                  <p className="offre-nom">
                    <Link href={cheminEn(c)}>{c.nom}</Link>
                  </p>
                  <NoteLoupe note={noteGlobale(c)} taille={48} lang="en" />
                </div>
              </div>
              <p className="offre-titre">{en(c).offre.titre}</p>
              <p className="offre-sous-titre">{miseEn(c)}</p>
              <BoutonCasino casino={c} emplacement={`en-duel-${params.duel}`} texte={`Get the ${c.nom} bonus`} large />
              <MentionEn />
            </div>
          ))}
        </div>

        <h2>
          {a.nom} and {b.nom} point by point
        </h2>
        <TableauEn casinos={[a, b]} emplacement={`en-duel-${params.duel}-tableau`} />

        <div className="lecture prose">
          <p className="petit">{MESSAGE_ZONE}</p>
          <h2>Our verdict</h2>
          {d.verdict.map((x) => (
            <p key={x.slice(0, 40)}>{x}</p>
          ))}
          <p>
            In our grid, <strong>{gagnant.nom}</strong> has the better overall score ({noteEn(noteGlobale(a))} for {a.nom},{' '}
            {noteEn(noteGlobale(b))} for {b.nom}).
          </p>

          <h2>Same deposit, two wagering requirements</h2>
          <p>For a deposit of 100 at the first tier:</p>
          <ul>
            <li>
              <strong>{a.nom}:</strong> {ligne(a, exA)}
            </li>
            <li>
              <strong>{b.nom}:</strong> {ligne(b, exB)}
            </li>
          </ul>

          <h2>Withdrawal times in our tests</h2>
          <ul>
            <li>
              <strong>{a.nom}:</strong> {tempsTest(a)}.
            </li>
            <li>
              <strong>{b.nom}:</strong> {tempsTest(b)}.
            </li>
          </ul>
          <p>
            Every result, dated: <Link href="/en-ca/casino-withdrawal-times/">casino withdrawal times, our real tests</Link>.
          </p>

          <div className="deux-colonnes">
            <div className="carte">
              <h3 className="mt0">Choose {a.nom} if…</h3>
              <ul className="liste-plus">
                {d.choisirA.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
            <div className="carte">
              <h3 className="mt0">Choose {b.nom} if…</h3>
              <ul className="liste-plus">
                {d.choisirB.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          </div>

          <Faq
            titre="Frequently asked questions"
            questions={[
              {
                q: `${a.nom} or ${b.nom}: which has the better bonus?`,
                r: `${a.nom} offers ${sansMajuscule(en(a).offre.titre)} (${miseEn(a)}), ${b.nom} offers ${sansMajuscule(en(b).offre.titre)} (${miseEn(b)}). The better bonus is the one you can actually clear: compare the amount to wager, not just the headline.`
              },
              {
                q: `${a.nom} or ${b.nom}: which is more transparent?`,
                r: `In our grid, ${a.nom} scores ${noteEn(a.notes.transparence.note)} out of 10 for transparency and ${b.nom} ${noteEn(b.notes.transparence.note)}. ${a.nom}: ${en(a).raisons.transparence} ${b.nom}: ${en(b).raisons.transparence}`
              },
              {
                q: `${a.nom} or ${b.nom}: which pays out faster?`,
                r: `In our real tests, ${a.nom}: ${tempsTest(a)}; ${b.nom}: ${tempsTest(b)}. A first withdrawal can take longer while your identity is checked.`
              }
            ]}
          />

          <h2>Read the full reviews</h2>
          <ul className="grille-liens">
            {[a, b].map((c) => (
              <li key={c.id}>
                <Link href={cheminEn(c)}>
                  <strong>{c.nom} review</strong>
                  <span>{en(c).accroche}</span>
                </Link>
              </li>
            ))}
          </ul>
          <AideEn />
        </div>
      </div>
      <JsonLd donnees={schemaPage({ titre: t.h1, description: t.description, chemin, publie: EN.publication, modifie, type: 'Article', langue: EN.langue })} />
    </>
  );
}
