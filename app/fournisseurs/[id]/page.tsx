import Link from 'next/link';
import { notFound } from 'next/navigation';
import Guide from '@/components/Guide';
import Faq from '@/components/Faq';
import TexteRiche from '@/components/TexteRiche';
import { Offres } from '@/components/RenduGuide';
import GrilleJeux from '@/components/GrilleJeux';
import GrilleTables from '@/components/GrilleTables';
import { meta } from '@/lib/seo';
import { typo } from '@/lib/typo';
import { SITE } from '@/lib/site';
import { FOURNISSEURS, fournisseur, cheminFournisseur } from '@/lib/contenu/fournisseurs';
import { parFournisseur, cheminMachine, pct, fois } from '@/lib/contenu/machines';
import { TABLES, cheminTable, rtpTable } from '@/lib/contenu/tables';
import { demoJeu } from '@/lib/demos';

export const dynamicParams = false;

export function generateStaticParams() {
  return FOURNISSEURS.map((f) => ({ id: f.id }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const f = fournisseur(params.id);
  if (!f) return {};
  return meta({ titre: f.titre, description: f.description, chemin: cheminFournisseur(f), type: 'article' });
}

const PARENT = { nom: 'Machines à sous', chemin: '/machines-a-sous/' };

/** Jeux en direct et de table d'un fournisseur (Free Bet Blackjack compte pour Evolution et Pragmatic Play). */
const tablesDe = (nom: string) => TABLES.filter((t) => t.fournisseur.split(' et ').includes(nom));
const nbJeux = (id: string, nom: string) => parFournisseur(id).length + tablesDe(nom).length;

export default function PageFournisseur({ params }: { params: { id: string } }) {
  const f = fournisseur(params.id);
  if (!f) notFound();
  const jeux = parFournisseur(f.id);
  const direct = tablesDe(f.nom);
  const demos = jeux.filter((m) => demoJeu(m.slug)?.mode === 'integree').length;
  const autres = FOURNISSEURS.filter((x) => x.id !== f.id);
  const emplacement = `fournisseur-${f.id}`;

  const sommaire = [
    { id: 'presentation', titre: `${f.nom} en bref` },
    ...(jeux.length ? [{ id: 'jeux', titre: 'Ses machines à sous' }] : []),
    ...(direct.length ? [{ id: 'direct', titre: 'Ses jeux en direct' }] : []),
    { id: 'a-savoir', titre: 'À savoir avant de jouer' },
    { id: 'ou-jouer', titre: 'Où trouver ses jeux' },
    { id: 'faq-titre', titre: 'Questions fréquentes' }
  ];

  return (
    <Guide
      nom={f.nom}
      parent={f.parent || PARENT}
      chemin={cheminFournisseur(f)}
      h1={f.h1}
      chapeau={f.chapeau}
      description={f.description}
      modifie={f.modifie}
      sommaire={sommaire}
      emplacement={emplacement}
    >
      <section aria-labelledby="presentation">
        <h2 id="presentation">{typo(`${f.nom} en bref`)}</h2>
        {f.presentation.map((p) => (
          <p key={p.slice(0, 50)}>
            <TexteRiche texte={p} />
          </p>
        ))}
      </section>

      {jeux.length ? (
      <section aria-labelledby="jeux">
        <h2 id="jeux">{typo(`Ses ${jeux.length} machines à sous analysées sur ${SITE.nom}`)}</h2>
        {demos ? (
          <p>{typo(`${demos} de ces jeux ont une démo gratuite officielle, jouable directement sur leur fiche, sans inscription.`)}</p>
        ) : null}
        <GrilleJeux jeux={jeux} />
        <div className="tableau-defilant">
          <table>
            <caption>{typo('Classés par nombre de recherches mensuelles au Canada')}</caption>
            <thead>
              <tr>
                <th scope="col">Jeu</th>
                <th scope="col">Meilleur RTP</th>
                <th scope="col">Versions</th>
                <th scope="col">Volatilité</th>
                <th scope="col">Gain max</th>
              </tr>
            </thead>
            <tbody>
              {jeux.map((m) => (
                <tr key={m.slug}>
                  <th scope="row">
                    <Link href={cheminMachine(m)}>{m.nom}</Link>
                  </th>
                  <td>{pct(m.rtp)}</td>
                  <td>{m.rtpAutres.length + 1}</td>
                  <td>{m.volatilite}</td>
                  <td>{m.gainMax ? fois(m.gainMax) : 'Non confirmé'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="petit">
          {typo("« Versions » : nombre de réglages de RTP recensés dans nos sources. Un « 1 » ne garantit pas qu'il n'en existe pas d'autres.")}
        </p>
      </section>
      ) : null}

      {direct.length ? (
        <section aria-labelledby="direct">
          <h2 id="direct">{typo(`Ses ${direct.length} jeux en direct analysés`)}</h2>
          <GrilleTables jeux={direct} />
          <div className="tableau-defilant">
            <table>
              <caption>{typo('Classés par nombre de recherches mensuelles au Canada')}</caption>
              <thead>
                <tr>
                  <th scope="col">Jeu</th>
                  <th scope="col">Type</th>
                  <th scope="col">RTP</th>
                </tr>
              </thead>
              <tbody>
                {direct.map((t) => (
                  <tr key={t.slug}>
                    <th scope="row">
                      <Link href={cheminTable(t)}>{t.nom}</Link>
                    </th>
                    <td>{t.format}</td>
                    <td>{rtpTable(t)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ) : null}

      <section aria-labelledby="a-savoir">
        <h2 id="a-savoir">À savoir avant de jouer</h2>
        <ul>
          {f.aSavoir.map((t) => (
            <li key={t.slice(0, 50)}>
              <TexteRiche texte={t} />
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="ou-jouer">
        <h2 id="ou-jouer">{typo(`Où trouver les jeux ${f.nom}`)}</h2>
        <p>
          {typo(
            "La liste des jeux change d'un casino à l'autre, et nous n'avons pas pu vérifier chaque lobby. Une fois inscrit, cherchez le jeu par son nom, puis vérifiez son RTP dans l'aide du jeu."
          )}
        </p>
        {f.id === 'pragmatic-play' ? <p>{typo("Celsius affiche 675 jeux Pragmatic Play selon l'opérateur.")}</p> : null}
        <Offres emplacement={emplacement} />
      </section>

      <Faq questions={f.faq} />

      <section aria-labelledby="autres-fournisseurs">
        <h2 id="autres-fournisseurs">Les autres fournisseurs</h2>
        <ul className="grille-liens">
          {autres.map((x) => (
            <li key={x.id}>
              <Link href={cheminFournisseur(x)}>
                <strong>{x.nom}</strong>
                <span>{typo(`${nbJeux(x.id, x.nom)} jeux analysés`)}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="sources">
        <h2 id="sources">Sources</h2>
        <ul className="source">
          {f.sources.map((s) => (
            <li key={s.url}>
              <a href={s.url} rel="nofollow noopener" target="_blank">
                {s.titre}
              </a>
            </li>
          ))}
          <li>{typo('Volumes de recherche : Ubersuggest, Canada, novembre 2026.')}</li>
        </ul>
      </section>
    </Guide>
  );
}
