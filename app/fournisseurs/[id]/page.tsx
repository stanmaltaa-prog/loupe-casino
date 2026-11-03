import Link from 'next/link';
import { notFound } from 'next/navigation';
import Guide from '@/components/Guide';
import Faq from '@/components/Faq';
import TexteRiche from '@/components/TexteRiche';
import { Offres } from '@/components/RenduGuide';
import { meta } from '@/lib/seo';
import { typo } from '@/lib/typo';
import { SITE } from '@/lib/site';
import { FOURNISSEURS, fournisseur, cheminFournisseur } from '@/lib/contenu/fournisseurs';
import { parFournisseur, cheminMachine, pct, fois } from '@/lib/contenu/machines';

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

export default function PageFournisseur({ params }: { params: { id: string } }) {
  const f = fournisseur(params.id);
  if (!f) notFound();
  const jeux = parFournisseur(f.id);
  const autres = FOURNISSEURS.filter((x) => x.id !== f.id);
  const emplacement = `fournisseur-${f.id}`;

  const sommaire = [
    { id: 'presentation', titre: `${f.nom} en bref` },
    { id: 'jeux', titre: 'Ses jeux analysés' },
    { id: 'a-savoir', titre: 'À savoir avant de jouer' },
    { id: 'ou-jouer', titre: 'Où trouver ses jeux' },
    { id: 'faq-titre', titre: 'Questions fréquentes' }
  ];

  return (
    <Guide
      nom={f.nom}
      parent={PARENT}
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

      <section aria-labelledby="jeux">
        <h2 id="jeux">{typo(`Ses ${jeux.length} jeux analysés sur ${SITE.nom}`)}</h2>
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
                <span>{typo(`${parFournisseur(x.id).length} jeux analysés`)}</span>
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
