import { notFound } from 'next/navigation';
import Link from 'next/link';
import FilAriane from '@/components/FilAriane';
import FicheBoite from '@/components/FicheBoite';
import Onglets from '@/components/Onglets';
import Tampon from '@/components/Tampon';
import Paliers from '@/components/Paliers';
import ExempleMise from '@/components/ExempleMise';
import Sections from '@/components/Sections';
import Faq from '@/components/Faq';
import EncadreAide from '@/components/EncadreAide';
import CtaCollant from '@/components/CtaCollant';
import BoutonCasino, { MentionCta } from '@/components/BoutonCasino';
import JsonLd from '@/components/JsonLd';
import {
  CASINOS,
  SOUS_PAGES,
  absent,
  autres,
  cheminCasino,
  depotMinTexte,
  licenceTexte,
  miseTexte,
  noteTexte,
  operateurTexte,
  parSlug,
  type Casino,
  type SousPage
} from '@/lib/casinos';
import { contenuDe } from '@/lib/contenu';
import type { PageCasino } from '@/lib/contenu/types';
import { dateLongue } from '@/lib/site';
import { meta, schemaPage } from '@/lib/seo';

export const dynamicParams = false;

type Params = { casino: string; sujet: string };

export function generateStaticParams(): Params[] {
  return CASINOS.flatMap((c) => c.sousPages.map((s) => ({ casino: c.slug, sujet: s })));
}

function charger(params: Params) {
  const c = parSlug(params.casino);
  const sujet = params.sujet as SousPage;
  if (!c || !c.sousPages.includes(sujet)) return null;
  const contenu = contenuDe(c.id);
  const page = contenu[sujet] as PageCasino | undefined;
  if (!page) return null;
  return { c, sujet, page, contenu };
}

export function generateMetadata({ params }: { params: Params }) {
  const d = charger(params);
  if (!d) return {};
  return meta({ titre: d.page.titre, description: d.page.description, chemin: cheminCasino(d.c, d.sujet), type: 'article' });
}

function BlocBonus({ c }: { c: Casino }) {
  const o = c.offre;
  return (
    <>
      <h2>Les paliers du bonus</h2>
      <Paliers casino={c} />
      <h2>Les conditions officielles</h2>
      <dl className="faits">
        <dt>Mise à compléter</dt>
        <dd>{miseTexte(c)}</dd>
        <dt>Dépôt minimum</dt>
        <dd>{depotMinTexte(c)}</dd>
        <dt>Mise maximale</dt>
        <dd>{o.miseMax || absent(c, 'f')}</dd>
        <dt>Jeux admissibles</dt>
        <dd>{o.jeuxAdmissibles || absent(c, 'mp')}</dd>
        {o.activation ? (
          <>
            <dt>Activation</dt>
            <dd>{o.activation}</dd>
          </>
        ) : null}
      </dl>
      {o.autres.length ? (
        <ul style={{ marginTop: 16 }}>
          {o.autres.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      ) : null}
      <p className="source">
        Source :{' '}
        <a href={o.source} rel="nofollow noopener" target="_blank">
          page officielle de {c.nom}
        </a>
        , consultée le {dateLongue(o.verifieLe)}.
      </p>
      <h2>Exemple chiffré</h2>
      <ExempleMise casino={c} />
      <p>
        Pour tester un autre montant, utilisez notre <Link href="/conditions-de-mise/">calculateur de conditions de mise</Link>.
      </p>
      {c.autresOffres.length ? (
        <>
          <h2>Les autres offres de {c.nom}</h2>
          <ul>
            {c.autresOffres.map((x) => (
              <li key={x.titre}>
                <strong>{x.titre} :</strong> {x.detail}
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </>
  );
}

function BlocRetrait({ c }: { c: Casino }) {
  if (!c.retraits) return null;
  return (
    <>
      <h2>Les règles officielles de retrait</h2>
      <ul>
        {c.retraits.detail.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>
      <p className="source">
        Source :{' '}
        <a href={c.retraits.source} rel="nofollow noopener" target="_blank">
          conditions de {c.nom}
        </a>
        , consultées le {dateLongue(c.retraits.verifieLe)}.
      </p>
      {c.paiements.crypto.length || c.paiements.autres.length ? (
        <>
          <h2>Moyens de paiement affichés</h2>
          <dl className="faits">
            {c.paiements.autres.length ? (
              <>
                <dt>Cartes et portefeuilles</dt>
                <dd>{c.paiements.autres.join(', ')}</dd>
              </>
            ) : null}
            {c.paiements.crypto.length ? (
              <>
                <dt>Cryptomonnaies</dt>
                <dd>{c.paiements.crypto.join(', ')}</dd>
              </>
            ) : null}
            {c.paiements.devises ? (
              <>
                <dt>Devises</dt>
                <dd>{c.paiements.devises}</dd>
              </>
            ) : null}
            <dt>Interac</dt>
            <dd>{c.paiements.interac === 'confirme' ? 'Accepté' : 'Non affiché sur les pages consultées'}</dd>
          </dl>
        </>
      ) : null}
    </>
  );
}

function BlocFiable({ c }: { c: Casino }) {
  return (
    <>
      <h2>La fiche d&apos;identité de {c.nom}</h2>
      <dl className="faits">
        <dt>Exploitant</dt>
        <dd>{operateurTexte(c)}</dd>
        <dt>Licence</dt>
        <dd>{licenceTexte(c)}</dd>
        <dt>Note transparence</dt>
        <dd>{noteTexte(c.notes.transparence.note)} sur 10</dd>
        <dt>Vérifié le</dt>
        <dd>
          {dateLongue(c.licence.verifieLe)}, sur{' '}
          <a href={c.licence.source} rel="nofollow noopener" target="_blank">
            le site officiel
          </a>
        </dd>
      </dl>
      <p style={{ marginTop: 16 }}>{c.licence.note}</p>
      <p>{c.notes.transparence.raison}</p>
    </>
  );
}

function BlocInscription({ etapes }: { etapes: { titre: string; texte: string }[] }) {
  return (
    <>
      <h2>Les étapes</h2>
      <ol>
        {etapes.map((e) => (
          <li key={e.titre}>
            <strong>{e.titre}.</strong> {e.texte}
          </li>
        ))}
      </ol>
    </>
  );
}

export default function PageSujet({ params }: { params: Params }) {
  const d = charger(params);
  if (!d) notFound();
  const { c, sujet, page, contenu } = d;
  const chemin = cheminCasino(c, sujet);
  const modifie = sujet === 'retrait' && c.retraits ? c.retraits.verifieLe : sujet === 'fiable' ? c.licence.verifieLe : c.offre.verifieLe;
  const etapes = sujet === 'inscription' ? contenu.inscription.etapes : [];

  return (
    <>
      <FilAriane
        elements={[
          { nom: `Avis ${c.nom}`, chemin: cheminCasino(c) },
          { nom: SOUS_PAGES[sujet].titreCourt, chemin }
        ]}
      />
      <div className="conteneur">
        <div className="fiche-tete">
          <div className="fiche-titre">
            <h1>{page.h1}</h1>
          </div>
          <div className="fiche-intro">
            {page.intro.map((p) => (
              <p key={p.slice(0, 40)} className="lecture">
                {p}
              </p>
            ))}
            <div className="heros-meta">
              <Tampon date={modifie} />
            </div>
            <Onglets casino={c} actif={sujet} />
          </div>
          <FicheBoite casino={c} emplacement={`${sujet}-${c.id}-haut`} />
        </div>

        <div className="lecture prose">
          {sujet === 'bonus' ? <BlocBonus c={c} /> : null}
          {sujet === 'retrait' ? <BlocRetrait c={c} /> : null}
          {sujet === 'fiable' ? <BlocFiable c={c} /> : null}
          {sujet === 'inscription' ? <BlocInscription etapes={etapes} /> : null}

          <Sections sections={page.sections} />

          <div className="carte centre" style={{ marginTop: 28 }}>
            <p className="offre-titre">{c.offre.titre}</p>
            <p className="offre-sous-titre">
              Mise à compléter&nbsp;: {miseTexte(c).toLowerCase()}. Dépôt minimum : {depotMinTexte(c)}.
            </p>
            <BoutonCasino casino={c} emplacement={`${sujet}-${c.id}-bas`} />
            <MentionCta />
          </div>

          <Faq questions={page.faq} />

          <h2>Pour aller plus loin</h2>
          <ul className="grille-liens">
            <li>
              <Link href={cheminCasino(c)}>
                <strong>Avis complet {c.nom}</strong>
                <span>Note détaillée, points forts et points faibles.</span>
              </Link>
            </li>
            {c.sousPages
              .filter((s) => s !== sujet)
              .map((s) => (
                <li key={s}>
                  <Link href={cheminCasino(c, s)}>
                    <strong>
                      {SOUS_PAGES[s].titreCourt} {c.nom}
                    </strong>
                    <span>{SOUS_PAGES[s].resume}</span>
                  </Link>
                </li>
              ))}
            {autres(c)
              .filter((x) => x.sousPages.includes(sujet))
              .slice(0, 1)
              .map((x) => (
                <li key={x.id}>
                  <Link href={cheminCasino(x, sujet)}>
                    <strong>
                      {SOUS_PAGES[sujet].titreCourt} {x.nom}
                    </strong>
                    <span>{x.offre.titre}.</span>
                  </Link>
                </li>
              ))}
          </ul>
          <EncadreAide />
        </div>
      </div>
      <CtaCollant casino={c} emplacement={`${sujet}-${c.id}-collant`} />
      <JsonLd donnees={schemaPage({ titre: page.h1, description: page.description, chemin, publie: '2026-11-03', modifie, type: 'Article' })} />
    </>
  );
}
