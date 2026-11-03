import Link from 'next/link';
import FilAriane from '@/components/FilAriane';
import TableauComparatif from '@/components/TableauComparatif';
import Tampon from '@/components/Tampon';
import EncadreAide from '@/components/EncadreAide';
import JsonLd from '@/components/JsonLd';
import { CASINOS, paires } from '@/lib/casinos';
import { DUELS } from '@/lib/contenu/duels';
import { SITE, dateLongue } from '@/lib/site';
import { meta, schemaPage } from '@/lib/seo';

const TITRE = 'Comparatif des casinos en ligne au Québec, face à face';
const DESCRIPTION =
  'Rolletto, Celsius, BetPortal et 1win comparés deux à deux : bonus, condition de mise, licence et retraits. Un verdict clair pour chaque duel.';

export const metadata = meta({ titre: 'Comparatif casinos en ligne Québec : face à face', description: DESCRIPTION, chemin: '/comparatif/' });

export default function PageComparatifs() {
  return (
    <>
      <FilAriane elements={[{ nom: 'Comparatifs', chemin: '/comparatif/' }]} />
      <section className="heros conteneur">
        <h1>{TITRE}</h1>
        <p className="chapeau">
          Vous hésitez entre deux casinos ? Chaque duel compare les conditions réelles et donne un verdict selon votre profil.
        </p>
        <div className="heros-meta">
          <Tampon date={SITE.derniereVerification} />
        </div>
      </section>
      <div className="conteneur">
        <h2>Tous les duels</h2>
        <ul className="grille-liens">
          {paires().map((p) => (
            <li key={p.slug}>
              <Link href={`/comparatif/${p.slug}/`}>
                <strong>
                  {p.a.nom} ou {p.b.nom}
                </strong>
                <span>{DUELS[p.slug]?.resume}</span>
              </Link>
            </li>
          ))}
        </ul>
        <h2>Le tableau complet</h2>
        <TableauComparatif casinos={CASINOS} emplacement="comparatif-tableau" legende={`Vérifié le ${dateLongue(SITE.derniereVerification)}.`} />
        <div className="lecture">
          <EncadreAide />
        </div>
      </div>
      <JsonLd
        donnees={schemaPage({ titre: TITRE, description: DESCRIPTION, chemin: '/comparatif/', publie: '2026-11-03', modifie: SITE.derniereVerification, type: 'CollectionPage' })}
      />
    </>
  );
}
