import Link from 'next/link';
import FilAriane from '@/components/FilAriane';
import Tampon from '@/components/Tampon';
import JsonLd from '@/components/JsonLd';
import TableauEn from '@/components/en/TableauEn';
import AideEn from '@/components/en/AideEn';
import { CASINOS, paires } from '@/lib/casinos';
import { DUELS_EN } from '@/lib/en/duels';
import { EN, MESSAGE_ZONE, dateEn } from '@/lib/en/site';
import { metaEn, schemaPage } from '@/lib/seo';

const TITRE = 'Online casinos in Canada compared head to head';
const DESCRIPTION =
  'Velobet, Rolletto, Celsius, BetPortal and 1win compared two by two: bonus, wagering, licence and withdrawals, with a clear verdict for each matchup.';

export const metadata = metaEn({ titre: 'Online Casinos Compared Head to Head (Canada)', description: DESCRIPTION, chemin: '/en-ca/compare/' });

export default function ComparePage() {
  return (
    <>
      <FilAriane lang="en" elements={[{ nom: 'Comparisons', chemin: '/en-ca/compare/' }]} />
      <section className="heros conteneur">
        <h1>{TITRE}</h1>
        <p className="chapeau">
          Torn between two casinos? Each matchup compares the real terms side by side and gives a verdict for your profile.
        </p>
        <div className="heros-meta">
          <Tampon lang="en" date={EN.verification} />
        </div>
      </section>
      <div className="conteneur">
        <h2>All matchups</h2>
        <ul className="grille-liens">
          {paires()
            .filter((p) => DUELS_EN[p.slug])
            .map((p) => (
              <li key={p.slug}>
                <Link href={`/en-ca/compare/${p.slug}/`}>
                  <strong>
                    {p.a.nom} vs {p.b.nom}
                  </strong>
                  <span>{DUELS_EN[p.slug].resume}</span>
                </Link>
              </li>
            ))}
        </ul>
        <h2>The full table</h2>
        <TableauEn casinos={CASINOS} emplacement="en-compare-tableau" legende={`Checked on ${dateEn(EN.verification)} or earlier.`} />
        <div className="lecture">
          <p className="petit">{MESSAGE_ZONE}</p>
          <AideEn />
        </div>
      </div>
      <JsonLd
        donnees={schemaPage({ titre: TITRE, description: DESCRIPTION, chemin: '/en-ca/compare/', publie: EN.publication, modifie: EN.verification, type: 'CollectionPage', langue: EN.langue })}
      />
    </>
  );
}
