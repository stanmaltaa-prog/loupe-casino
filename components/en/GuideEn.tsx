import Link from 'next/link';
import FilAriane from '../FilAriane';
import Tampon from '../Tampon';
import JsonLd from '../JsonLd';
import NoteLoupe from '../NoteLoupe';
import Faq from '../Faq';
import TexteRiche from '../TexteRiche';
import BoutonCasino from '../BoutonCasino';
import CarteOffreEn from './CarteOffreEn';
import MentionEn from './MentionEn';
import AideEn from './AideEn';
import SignatureEn from './SignatureEn';
import CollantEn from './CollantEn';
import TopTroisEn from './TopTroisEn';
import { CASINOS, noteGlobale, parId, rang } from '@/lib/casinos';
import { cheminEn, en, texteBoutonEn } from '@/lib/en/casinos';
import { EN, HORS_ZONE } from '@/lib/en/site';
import { schemaPage } from '@/lib/seo';
import type { Bloc, PageGuide } from '@/lib/contenu/pages/types';

export function OffresEn({ ids, titre, emplacement }: { ids?: string[]; titre?: string; emplacement: string }) {
  const liste = (ids?.length ? ids.map((id) => parId(id)).filter(Boolean) : CASINOS) as typeof CASINOS;
  if (!liste.length) return null;
  return (
    <div style={{ margin: '1.4em 0' }}>
      {titre ? <p className="encadre-titre">{titre}</p> : null}
      <ol className="classement">
        {liste.map((c) => (
          <li key={c.id}>
            <CarteOffreEn casino={c} rang={rang(c)} emplacement={emplacement} />
          </li>
        ))}
      </ol>
    </div>
  );
}

function BlocEn({ bloc, emplacement }: { bloc: Bloc; emplacement: string }) {
  switch (bloc.type) {
    case 'p':
      return (
        <p>
          <TexteRiche texte={bloc.texte} />
        </p>
      );
    case 'liste': {
      const items = bloc.items.map((t) => (
        <li key={t.slice(0, 60)}>
          <TexteRiche texte={t} />
        </li>
      ));
      return bloc.ordonnee ? <ol>{items}</ol> : <ul>{items}</ul>;
    }
    case 'tableau':
      return (
        <div className="tableau-defilant">
          <table>
            {bloc.legende ? <caption>{bloc.legende}</caption> : null}
            <thead>
              <tr>
                {bloc.entetes.map((e) => (
                  <th scope="col" key={e}>
                    {e}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bloc.lignes.map((l) => (
                <tr key={l.join('|').slice(0, 80)}>
                  {l.map((cellule, j) =>
                    j === 0 ? (
                      <th scope="row" key={j}>
                        <TexteRiche texte={cellule} />
                      </th>
                    ) : (
                      <td key={j}>
                        <TexteRiche texte={cellule} />
                      </td>
                    )
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case 'encadre':
      return (
        <div className={`encadre${bloc.ton === 'alerte' ? ' encadre-alerte' : bloc.ton === 'bon' ? ' encadre-bon' : ''}`}>
          <p className="encadre-titre">{bloc.titre}</p>
          <p>
            <TexteRiche texte={bloc.texte} />
          </p>
        </div>
      );
    case 'offres':
      return <OffresEn ids={bloc.casinos} titre={bloc.titre} emplacement={emplacement} />;
    case 'liens':
      return (
        <ul className="grille-liens">
          {bloc.items.map((l) => (
            <li key={l.href}>
              <Link href={l.href}>
                <strong>{l.titre}</strong>
                <span>{l.texte}</span>
              </Link>
            </li>
          ))}
        </ul>
      );
    case 'cta': {
      const c = parId(bloc.casino);
      if (!c) return null;
      return (
        <div className="carte carte-cta">
          <p className="offre-nom mt0">
            <Link href={cheminEn(c)}>{c.nom}</Link>
          </p>
          <p className="offre-titre">{bloc.titre}</p>
          <p className="petit">
            <TexteRiche texte={bloc.detail} />
          </p>
          <BoutonCasino casino={c} emplacement={`${emplacement}-${c.id}`} texte={bloc.bouton} />
          <MentionEn />
        </div>
      );
    }
    default:
      return null;
  }
}

/** Shared template for the English guides: breadcrumb, table of contents, top-rated offer box. */
export function GabaritEn({
  nom,
  parent,
  chemin,
  h1,
  chapeau,
  description,
  modifie,
  sommaire,
  emplacement,
  children,
  type = 'Article',
  sansOffre = false
}: {
  nom: string;
  parent?: { nom: string; chemin: string };
  chemin: string;
  h1: string;
  chapeau: string;
  description: string;
  modifie: string;
  sommaire?: { id: string; titre: string }[];
  emplacement: string;
  children: React.ReactNode;
  type?: 'Article' | 'WebPage' | 'AboutPage';
  sansOffre?: boolean;
}) {
  const top = CASINOS[0];
  return (
    <>
      <FilAriane lang="en" elements={parent ? [parent, { nom, chemin }] : [{ nom, chemin }]} />
      <section className="heros conteneur">
        <h1>{h1}</h1>
        <p className="chapeau">{chapeau}</p>
        <div className="heros-meta">
          <Tampon lang="en" date={modifie} texte="Updated on" />
          {type === 'Article' ? <SignatureEn /> : null}
        </div>
      </section>
      <div className="conteneur mise-en-page">
        <article className="prose lecture">
          {children}
          {sansOffre ? null : <AideEn />}
        </article>
        <aside>
          {sommaire?.length ? (
            <nav className="sommaire" aria-label="Table of contents">
              <p>In this guide</p>
              <ol>
                {sommaire.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`}>{s.titre}</a>
                  </li>
                ))}
              </ol>
            </nav>
          ) : null}
          {sansOffre ? null : (
            <div className="carte" style={{ marginTop: 16 }}>
              <p className="petit mt0" style={{ marginBottom: 6 }}>
                Top score in our comparison
              </p>
              <p className="offre-nom">
                <Link href={cheminEn(top)}>{top.nom}</Link>
              </p>
              <div style={{ margin: '8px 0 10px' }}>
                <NoteLoupe note={noteGlobale(top)} taille={52} lang="en" />
              </div>
              <p className="offre-titre" style={{ fontSize: '1.15rem' }}>
                {en(top).offre.titre}
              </p>
              <BoutonCasino casino={top} emplacement={emplacement} texte={texteBoutonEn(top)} large />
              <MentionEn />
            </div>
          )}
        </aside>
      </div>
      {sansOffre ? null : <CollantEn casino={top} emplacement={`${emplacement}-sticky`} />}
      <JsonLd donnees={schemaPage({ titre: h1, description, chemin, publie: EN.publication, modifie, type, langue: EN.langue })} />
    </>
  );
}

/** Full rendering of an English guide from its content. */
export default function GuideEn({
  page,
  connexes = [],
  type = 'Article',
  sansOffre = false
}: {
  page: PageGuide;
  connexes?: PageGuide[];
  type?: 'Article' | 'WebPage' | 'AboutPage';
  sansOffre?: boolean;
}) {
  const emplacement = `en${page.chemin.replace(/^\/en-ca/, '').replace(/\//g, '-').replace(/-$/, '')}`;
  return (
    <GabaritEn
      nom={page.nomFil}
      parent={page.parent}
      chemin={page.chemin}
      h1={page.h1}
      chapeau={page.chapeau}
      description={page.description}
      modifie={page.modifie}
      sommaire={page.sections.map((s) => ({ id: s.id, titre: s.titre }))}
      emplacement={emplacement}
      type={type}
      sansOffre={sansOffre}
    >
      <p className="petit">
        <strong>{HORS_ZONE}.</strong> 19+ (18+ in Manitoba and Quebec).
      </p>
      {page.offresHaut === undefined ? (
        sansOffre ? null : <TopTroisEn emplacement={`${emplacement}-top3`} titre={page.titreTop} />
      ) : page.offresHaut.length ? (
        <OffresEn ids={page.offresHaut} emplacement={`${emplacement}-top`} />
      ) : null}
      {page.sections.map((s) => (
        <section key={s.id} aria-labelledby={s.id}>
          <h2 id={s.id}>{s.titre}</h2>
          {s.blocs.map((b, i) => (
            <BlocEn key={i} bloc={b} emplacement={`${emplacement}-${s.id}`} />
          ))}
        </section>
      ))}
      <Faq questions={page.faq} titre="Frequently asked questions" />
      {page.sources?.length ? (
        <section aria-labelledby="sources">
          <h2 id="sources">Sources</h2>
          <ul className="source">
            {page.sources.map((s) => (
              <li key={s.url}>
                <a href={s.url} rel="nofollow noopener" target="_blank">
                  {s.titre}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
      {connexes.length ? (
        <section aria-labelledby="related">
          <h2 id="related">Read next</h2>
          <ul className="grille-liens">
            {connexes.map((c) => (
              <li key={c.chemin}>
                <Link href={c.chemin}>
                  <strong>{c.nomFil}</strong>
                  <span>{c.resume}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </GabaritEn>
  );
}
