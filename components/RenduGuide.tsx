import Link from 'next/link';
import Guide from './Guide';
import Faq from './Faq';
import TexteRiche from './TexteRiche';
import CarteOffre from './CarteOffre';
import BoutonCasino, { MentionCta } from './BoutonCasino';
import { ILLUSTRATIONS_GUIDES } from './IllustrationsGuides';
import GrilleJeux from './GrilleJeux';
import GrilleTables from './GrilleTables';
import { MACHINES } from '@/lib/contenu/machines';
import { TABLES, parFamille } from '@/lib/contenu/tables';
import { CASINOS, cheminCasino, parId, rang } from '@/lib/casinos';
import { pageParChemin } from '@/lib/contenu/pages';
import type { Bloc, PageGuide } from '@/lib/contenu/pages/types';

export function Offres({ ids, titre, emplacement }: { ids?: string[]; titre?: string; emplacement: string }) {
  const liste = (ids?.length ? ids.map((id) => parId(id)).filter(Boolean) : CASINOS) as typeof CASINOS;
  if (!liste.length) return null;
  return (
    <div style={{ margin: '1.4em 0' }}>
      {titre ? <p className="encadre-titre">{titre}</p> : null}
      <ol className="classement">
        {liste.map((c) => (
          <li key={c.id}>
            <CarteOffre casino={c} rang={rang(c)} emplacement={emplacement} />
          </li>
        ))}
      </ol>
    </div>
  );
}

function RenduBloc({ bloc, emplacement }: { bloc: Bloc; emplacement: string }) {
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
      return <Offres ids={bloc.casinos} titre={bloc.titre} emplacement={emplacement} />;
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
    case 'grille-jeux': {
      const jeux = bloc.slugs?.length ? MACHINES.filter((m) => bloc.slugs!.includes(m.slug)) : MACHINES;
      return <GrilleJeux jeux={jeux} />;
    }
    case 'grille-tables':
      return <GrilleTables jeux={bloc.famille ? parFamille(bloc.famille) : TABLES} />;
    case 'illustration': {
      const Illus = ILLUSTRATIONS_GUIDES[bloc.nom];
      return Illus ? <Illus /> : null;
    }
    case 'cta': {
      const c = parId(bloc.casino);
      if (!c) return null;
      return (
        <div className="carte carte-cta">
          <p className="offre-nom mt0">
            <Link href={cheminCasino(c)}>{c.nom}</Link>
          </p>
          <p className="offre-titre">{bloc.titre}</p>
          <p className="petit">
            <TexteRiche texte={bloc.detail} />
          </p>
          <BoutonCasino casino={c} emplacement={`${emplacement}-${c.id}`} texte={bloc.bouton} />
          <MentionCta />
        </div>
      );
    }
    default:
      return null;
  }
}

/** Rendu complet d'une page guide à partir de son contenu. */
export default function RenduGuide({ page }: { page: PageGuide }) {
  const emplacement = `guide${page.chemin.replace(/\//g, '-').replace(/-$/, '')}`;
  const connexes = (page.connexes || []).map((c) => pageParChemin(c)).filter(Boolean) as PageGuide[];
  return (
    <Guide
      nom={page.nomFil}
      parent={page.parent}
      chemin={page.chemin}
      h1={page.h1}
      chapeau={page.chapeau}
      description={page.description}
      modifie={page.modifie}
      sommaire={page.sections.map((s) => ({ id: s.id, titre: s.titre }))}
      emplacement={emplacement}
    >
      {page.offresHaut?.length ? <Offres ids={page.offresHaut} emplacement={`${emplacement}-haut`} /> : null}
      {page.sections.map((s) => (
        <section key={s.id} aria-labelledby={s.id}>
          <h2 id={s.id}>{s.titre}</h2>
          {s.blocs.map((b, i) => (
            <RenduBloc key={i} bloc={b} emplacement={`${emplacement}-${s.id}`} />
          ))}
        </section>
      ))}
      <Faq questions={page.faq} />
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
        <section aria-labelledby="connexes">
          <h2 id="connexes">À lire aussi</h2>
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
    </Guide>
  );
}
