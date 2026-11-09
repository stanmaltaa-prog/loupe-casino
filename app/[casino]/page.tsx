import { notFound } from 'next/navigation';
import Link from 'next/link';
import FilAriane from '@/components/FilAriane';
import FicheBoite from '@/components/FicheBoite';
import Onglets from '@/components/Onglets';
import Tampon from '@/components/Tampon';
import Signature from '@/components/Signature';
import Paliers from '@/components/Paliers';
import ExempleMise from '@/components/ExempleMise';
import Sections from '@/components/Sections';
import Faq from '@/components/Faq';
import Alternatives from '@/components/Alternatives';
import EncadreAide from '@/components/EncadreAide';
import CtaCollant from '@/components/CtaCollant';
import BoutonCasino, { MentionCta } from '@/components/BoutonCasino';
import JsonLd from '@/components/JsonLd';
import {
  CASINOS,
  CRITERES,
  absent,
  cheminCasino,
  depotMinTexte,
  licenceTexte,
  miseTexte,
  noteGlobale,
  noteTexte,
  operateurTexte,
  parSlug,
  rang,
  retraitsTexte
} from '@/lib/casinos';
import { contenuDe } from '@/lib/contenu';
import { SITE, absolu, dateLongue } from '@/lib/site';
import { meta, schemaPage } from '@/lib/seo';
import TestReel from '@/components/TestReel';

export const dynamicParams = false;

/** Casinos dont l'offre de paris sportifs est présentée dans le guide /paris-sportifs-quebec/. */
const AVEC_SPORT = ['velobet', 'rolletto', 'betportal'];

export function generateStaticParams() {
  return CASINOS.map((c) => ({ casino: c.slug }));
}

export function generateMetadata({ params }: { params: { casino: string } }) {
  const c = parSlug(params.casino);
  if (!c) return {};
  const t = contenuDe(c.id).avis;
  return meta({ titre: t.titre, description: t.description, chemin: cheminCasino(c), type: 'article' });
}

export default function PageAvis({ params }: { params: { casino: string } }) {
  const c = parSlug(params.casino);
  if (!c) notFound();
  const t = contenuDe(c.id).avis;
  const note = noteGlobale(c);
  const chemin = cheminCasino(c);
  const modifie = [c.offre.verifieLe, c.licence.verifieLe, c.paiements.verifieLe].sort().pop() as string;

  return (
    <>
      <FilAriane elements={[{ nom: `Avis ${c.nom}`, chemin }]} />
      <div className="conteneur">
        <div className="fiche-tete">
          <div className="fiche-titre">
            <h1>{t.h1}</h1>
          </div>
          <div className="fiche-intro">
            {t.intro.map((p) => (
              <p key={p.slice(0, 40)} className="lecture">
                {p}
              </p>
            ))}
            <div className="heros-meta">
              <Tampon date={modifie} />
              <Signature />
              <span>
                Rang {rang(c)} sur {CASINOS.length} dans notre <Link href="/#classement">classement</Link>
              </span>
            </div>
            <Onglets casino={c} actif="avis" />
          </div>
          <FicheBoite casino={c} emplacement={`avis-${c.id}-haut`} />
        </div>

        <div className="lecture prose">
          <TestReel casino={c} />
          <h2>L&apos;essentiel sur {c.nom}</h2>
          <dl className="faits">
            <dt>Exploitant</dt>
            <dd>{operateurTexte(c)}</dd>
            <dt>Licence</dt>
            <dd>{licenceTexte(c)}</dd>
            <dt>Offre de bienvenue</dt>
            <dd>{c.offre.titre}</dd>
            <dt>Mise à compléter</dt>
            <dd>{miseTexte(c)}</dd>
            <dt>Dépôt minimum</dt>
            <dd>{depotMinTexte(c)}</dd>
            <dt>Jeux</dt>
            <dd>{c.produit.nombreJeux || absent(c)}</dd>
            {c.paiements.crypto.length ? (
              <>
                <dt>Cryptomonnaies</dt>
                <dd>{c.paiements.crypto.join(', ')}</dd>
              </>
            ) : null}
            <dt>Retraits</dt>
            <dd>{retraitsTexte(c)}</dd>
            <dt>Vérifié le</dt>
            <dd>
              {dateLongue(modifie)}, sur{' '}
              <a href={c.offre.source} rel="nofollow noopener" target="_blank">
                le site officiel
              </a>
            </dd>
          </dl>

          <h2>
            Note Loupe : {noteTexte(note)} sur 10
          </h2>
          <p>
            La note combine cinq critères pondérés. Chaque note partielle est justifiée ci-dessous ;{' '}
            <Link href="/notre-methode/">notre méthode</Link> détaille la grille.
          </p>
          <ul className="barres">
            {CRITERES.map((cr) => (
              <li key={cr.id}>
                <div className="barre-tete">
                  <span>
                    {cr.nom} <span className="petit">({cr.poids} %)</span>
                  </span>
                  <span>{noteTexte(c.notes[cr.id].note)}</span>
                </div>
                <div className="barre" aria-hidden="true">
                  <span style={{ width: `${c.notes[cr.id].note * 10}%` }} />
                </div>
                <p className="barre-raison">{c.notes[cr.id].raison}</p>
              </li>
            ))}
          </ul>

          <h2>Points forts et points faibles</h2>
          <div className="deux-colonnes">
            <div className="carte">
              <h3 className="mt0">Points forts</h3>
              <ul className="liste-plus">
                {c.pointsForts.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
            <div className="carte">
              <h3 className="mt0">Points faibles</h3>
              <ul className="liste-moins">
                {c.pointsFaibles.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </div>

          <h2>Le bonus de bienvenue {c.nom}</h2>
          <Paliers casino={c} />
          <ExempleMise casino={c} />
          {c.autresOffres.length ? (
            <>
              <h3>Autres offres</h3>
              <ul>
                {c.autresOffres.map((o) => (
                  <li key={o.titre}>
                    <strong>{o.titre} :</strong> {o.detail}
                  </li>
                ))}
              </ul>
            </>
          ) : null}
          {c.sousPages.includes('bonus') ? (
            <p>
              Tous les détails, pièges compris : <Link href={cheminCasino(c, 'bonus')}>le bonus {c.nom} expliqué</Link>.
            </p>
          ) : null}
          {AVEC_SPORT.includes(c.id) ? (
            <p>
              {c.nom} propose aussi des paris sportifs : comparez son offre dans notre guide des{' '}
              <Link href="/paris-sportifs-quebec/">paris sportifs au Québec</Link>.
            </p>
          ) : null}

          <Sections sections={t.sections} />

          {c.aConfirmer.length ? (
            <section>
              <h2>Ce que nous n&apos;avons pas pu confirmer</h2>
              <p>
                Nous préférons signaler ce que nous ne savons pas plutôt que de l&apos;inventer. Vérifiez ces points sur le
                site avant de déposer :
              </p>
              <ul>
                {c.aConfirmer.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </section>
          ) : null}

          <h2>Notre verdict sur {c.nom}</h2>
          {t.verdict.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
          <div className="deux-colonnes">
            <div className="carte">
              <h3 className="mt0">Pour qui ?</h3>
              <ul className="liste-plus">
                {t.pourQui.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
            <div className="carte">
              <h3 className="mt0">À éviter si…</h3>
              <ul className="liste-moins">
                {t.pasPourQui.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="carte centre" style={{ marginTop: 24 }}>
            <p className="offre-titre">{c.offre.titre}</p>
            <p className="offre-sous-titre">Mise à compléter&nbsp;: {miseTexte(c).toLowerCase()}. Dépôt minimum : {depotMinTexte(c)}.</p>
            <BoutonCasino casino={c} emplacement={`avis-${c.id}-verdict`} />
            <MentionCta />
          </div>

          <Faq questions={t.faq} titre={`Questions fréquentes sur ${c.nom}`} />
          <Alternatives casino={c} />
          <EncadreAide />
        </div>
      </div>
      <CtaCollant casino={c} emplacement={`avis-${c.id}-collant`} />
      <JsonLd
        donnees={[
          schemaPage({ titre: t.h1, description: t.description, chemin, publie: '2026-11-03', modifie, type: 'Article' }),
          {
            '@context': 'https://schema.org',
            '@type': 'Review',
            name: `Avis ${c.nom}`,
            url: absolu(chemin),
            inLanguage: SITE.langue,
            itemReviewed: { '@type': 'Organization', name: c.nom },
            reviewRating: { '@type': 'Rating', ratingValue: note, bestRating: 10, worstRating: 0 },
            author: { '@type': 'Organization', name: SITE.nom, url: `${SITE.url}/` },
            publisher: { '@type': 'Organization', name: SITE.nom, url: `${SITE.url}/` },
            datePublished: '2026-11-03',
            dateModified: modifie,
            reviewBody: t.verdict.join(' '),
            positiveNotes: {
              '@type': 'ItemList',
              itemListElement: c.pointsForts.map((p, i) => ({ '@type': 'ListItem', position: i + 1, name: p }))
            },
            negativeNotes: {
              '@type': 'ItemList',
              itemListElement: c.pointsFaibles.map((p, i) => ({ '@type': 'ListItem', position: i + 1, name: p }))
            }
          }
        ]}
      />
    </>
  );
}
