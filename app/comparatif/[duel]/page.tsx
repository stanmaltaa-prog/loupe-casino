import { notFound } from 'next/navigation';
import Link from 'next/link';
import FilAriane from '@/components/FilAriane';
import TableauComparatif from '@/components/TableauComparatif';
import Tampon from '@/components/Tampon';
import Signature from '@/components/Signature';
import EncadreAide from '@/components/EncadreAide';
import JsonLd from '@/components/JsonLd';
import Faq from '@/components/Faq';
import Marque from '@/components/Marque';
import NoteLoupe from '@/components/NoteLoupe';
import BoutonCasino, { MentionCta } from '@/components/BoutonCasino';
import { cheminCasino, exempleMise, miseTexte, noteGlobale, noteTexte, paireParSlug, paires } from '@/lib/casinos';
import { DUELS } from '@/lib/contenu/duels';
import { montant } from '@/lib/site';
import { meta, schemaPage } from '@/lib/seo';

export const dynamicParams = false;

export function generateStaticParams() {
  return paires()
    .filter((p) => DUELS[p.slug])
    .map((p) => ({ duel: p.slug }));
}

function titres(slug: string) {
  const p = paireParSlug(slug);
  if (!p) return null;
  return {
    p,
    titre: `${p.a.nom} ou ${p.b.nom} : quel casino choisir au Québec ?`,
    titreCourt: `${p.a.nom} vs ${p.b.nom} : comparatif bonus et licence`,
    description: (() => {
      const court = `${p.a.nom} ou ${p.b.nom} ? ${DUELS[slug]?.resume ?? ''} Bonus, mise, licence et retraits comparés.`;
      return court.length <= 158
        ? court
        : `${p.a.nom} contre ${p.b.nom} : bonus, condition de mise, licence et retraits comparés point par point, avec un verdict clair.`;
    })()
  };
}

export function generateMetadata({ params }: { params: { duel: string } }) {
  const t = titres(params.duel);
  if (!t) return {};
  return meta({ titre: t.titreCourt, description: t.description, chemin: `/comparatif/${params.duel}/`, type: 'article' });
}

export default function PageDuel({ params }: { params: { duel: string } }) {
  const t = titres(params.duel);
  const duel = DUELS[params.duel];
  if (!t || !duel) notFound();
  const { a, b } = t.p;
  const exA = exempleMise(a);
  const exB = exempleMise(b);
  const chemin = `/comparatif/${params.duel}/`;
  const modifie = [a.offre.verifieLe, b.offre.verifieLe].sort().pop() as string;
  const gagnant = noteGlobale(a) >= noteGlobale(b) ? a : b;

  return (
    <>
      <FilAriane
        elements={[
          { nom: 'Comparatifs', chemin: '/comparatif/' },
          { nom: `${a.nom} vs ${b.nom}`, chemin }
        ]}
      />
      <section className="heros conteneur">
        <h1>{t.titre}</h1>
        <p className="chapeau">{duel.resume}</p>
        <div className="heros-meta">
          <Tampon date={modifie} />
              <Signature />
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
                    <Link href={cheminCasino(c)}>{c.nom}</Link>
                  </p>
                  <NoteLoupe note={noteGlobale(c)} taille={48} />
                </div>
              </div>
              <p className="offre-titre">{c.offre.titre}</p>
              <p className="offre-sous-titre">{miseTexte(c)}</p>
              <BoutonCasino casino={c} emplacement={`duel-${params.duel}`} large />
              <MentionCta />
            </div>
          ))}
        </div>

        <h2>
          {a.nom} et {b.nom} point par point
        </h2>
        <TableauComparatif casinos={[a, b]} emplacement={`duel-${params.duel}-tableau`} />

        <div className="lecture prose">
          <h2>Notre verdict</h2>
          {duel.verdict.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
          <p>
            Dans notre grille, <strong>{gagnant.nom}</strong> obtient la meilleure note globale ({noteTexte(noteGlobale(a))} pour{' '}
            {a.nom}, {noteTexte(noteGlobale(b))} pour {b.nom}).
          </p>

          <h2>Le même dépôt, deux conditions de mise</h2>
          <p>Pour un dépôt de 100 au premier palier :</p>
          <ul>
            <li>
              <strong>{a.nom} :</strong>{' '}
              {exA
                ? `${montant(exA.bonus, exA.devise)} de bonus, ${montant(exA.aMiser, exA.devise)} à miser (${miseTexte(a)}).`
                : 'condition de mise non confirmée.'}
            </li>
            <li>
              <strong>{b.nom} :</strong>{' '}
              {exB
                ? `${montant(exB.bonus, exB.devise)} de bonus, ${montant(exB.aMiser, exB.devise)} à miser (${miseTexte(b)}).`
                : 'condition de mise non confirmée.'}
            </li>
          </ul>

          <div className="deux-colonnes">
            <div className="carte">
              <h3 className="mt0">Choisissez {a.nom} si…</h3>
              <ul className="liste-plus">
                {duel.choisirA.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
            <div className="carte">
              <h3 className="mt0">Choisissez {b.nom} si…</h3>
              <ul className="liste-plus">
                {duel.choisirB.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          </div>

          <Faq
            questions={[
              {
                q: `${a.nom} ou ${b.nom} : lequel a le meilleur bonus ?`,
                r: `${a.nom} offre ${a.offre.titre.charAt(0).toLowerCase()}${a.offre.titre.slice(1)} (${miseTexte(a)}), ${b.nom} offre ${b.offre.titre.charAt(0).toLowerCase()}${b.offre.titre.slice(1)} (${miseTexte(b)}). Le meilleur bonus est celui que vous pourrez réellement débloquer : comparez la somme à miser, pas seulement le montant.`
              },
              {
                q: `${a.nom} ou ${b.nom} : lequel est le plus transparent ?`,
                r: `Dans notre grille, ${a.nom} obtient ${noteTexte(a.notes.transparence.note)} sur 10 en transparence et ${b.nom} ${noteTexte(b.notes.transparence.note)} sur 10. ${a.nom} : ${a.notes.transparence.raison} ${b.nom} : ${b.notes.transparence.raison}`
              }
            ]}
          />

          <h2>Lire les avis complets</h2>
          <ul className="grille-liens">
            {[a, b].map((c) => (
              <li key={c.id}>
                <Link href={cheminCasino(c)}>
                  <strong>Avis {c.nom}</strong>
                  <span>{c.accroche}</span>
                </Link>
              </li>
            ))}
          </ul>
          <EncadreAide />
        </div>
      </div>
      <JsonLd donnees={schemaPage({ titre: t.titre, description: t.description, chemin, publie: '2026-11-03', modifie, type: 'Article' })} />
    </>
  );
}
