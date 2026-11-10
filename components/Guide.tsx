import Link from 'next/link';
import FilAriane from './FilAriane';
import Tampon from './Tampon';
import Signature from './Signature';
import JsonLd from './JsonLd';
import NoteLoupe from './NoteLoupe';
import BoutonCasino, { MentionCta } from './BoutonCasino';
import EncadreAide from './EncadreAide';
import CtaCollant from './CtaCollant';
import { CASINOS, cheminCasino, noteGlobale, texteBouton } from '@/lib/casinos';
import { schemaPage } from '@/lib/seo';

export type EntreeSommaire = { id: string; titre: string };

/** Gabarit commun des guides : fil d'Ariane, sommaire, encadré de l'offre la mieux notée. */
export default function Guide({
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
  sommaire?: EntreeSommaire[];
  emplacement: string;
  children: React.ReactNode;
  type?: 'Article' | 'WebPage' | 'AboutPage' | 'ContactPage';
  sansOffre?: boolean;
}) {
  const top = CASINOS[0];
  return (
    <>
      <FilAriane elements={parent ? [parent, { nom, chemin }] : [{ nom, chemin }]} />
      <section className="heros conteneur">
        <h1>{h1}</h1>
        <p className="chapeau">{chapeau}</p>
        <div className="heros-meta">
          <Tampon date={modifie} texte="Mis à jour le" />
          {type === 'Article' ? <Signature /> : null}
        </div>
      </section>
      <div className="conteneur mise-en-page">
        <article className="prose lecture">
          {children}
          {sansOffre ? null : <EncadreAide />}
        </article>
        <aside>
          {sommaire?.length ? (
            <nav className="sommaire" aria-label="Sommaire">
              <p>Dans ce guide</p>
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
              Meilleure note du comparatif
            </p>
            <p className="offre-nom">
              <Link href={cheminCasino(top)}>{top.nom}</Link>
            </p>
            <div style={{ margin: '8px 0 10px' }}>
              <NoteLoupe note={noteGlobale(top)} taille={52} />
            </div>
            <p className="offre-titre" style={{ fontSize: '1.15rem' }}>
              {top.offre.titre}
            </p>
            <BoutonCasino casino={top} emplacement={emplacement} texte={texteBouton(top)} large />
            <MentionCta />
          </div>
          )}
        </aside>
      </div>
      {sansOffre ? null : <CtaCollant casino={top} emplacement={`${emplacement}-collant`} />}
      <JsonLd donnees={schemaPage({ titre: h1, description, chemin, publie: '2026-11-03', modifie, type })} />
    </>
  );
}
