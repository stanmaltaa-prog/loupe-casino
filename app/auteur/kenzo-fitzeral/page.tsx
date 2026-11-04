import Link from 'next/link';
import Guide from '@/components/Guide';
import JsonLd from '@/components/JsonLd';
import { AUTEUR, ID_AUTEUR } from '@/lib/auteur';
import { SITE, absolu } from '@/lib/site';
import { meta, ID_ORGANISATION } from '@/lib/seo';

const DESCRIPTION = `${AUTEUR.nom}, ${AUTEUR.role.toLowerCase()} de ${SITE.nom} : 7 ans de business development dans des casinos en ligne à Malte. Son rôle et sa méthode.`;

export const metadata = meta({ titre: `${AUTEUR.nom}, ${AUTEUR.role.toLowerCase()}`, description: DESCRIPTION, chemin: AUTEUR.chemin });

export default function PageAuteur() {
  return (
    <Guide
      nom={AUTEUR.nom}
      parent={{ nom: 'À propos', chemin: '/a-propos/' }}
      chemin={AUTEUR.chemin}
      h1={AUTEUR.nom}
      chapeau={`${AUTEUR.role} de ${SITE.nom}. ${AUTEUR.accroche.charAt(0).toUpperCase()}${AUTEUR.accroche.slice(1)}.`}
      description={DESCRIPTION}
      modifie="2026-11-04"
      emplacement="auteur"
      type="AboutPage"
      sansOffre
    >
      <h2>Parcours</h2>
      {AUTEUR.bio.map((p) => (
        <p key={p.slice(0, 40)}>{p}</p>
      ))}

      <h2>Ce qu’il couvre sur {SITE.nom}</h2>
      <ul>
        {AUTEUR.domaines.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>

      <h2>Sa méthode</h2>
      <p>
        Chaque chiffre publié vient d’une page officielle (casino, fournisseur de jeux, organisme public) ou d’une base de données
        reconnue, et porte sa date de vérification. Le classement des casinos suit une grille publique : voir{' '}
        <Link href="/notre-methode/">notre méthode</Link>.
      </p>

      <h2>Transparence</h2>
      <p>
        {SITE.nom} touche une commission quand un lecteur s’inscrit par ses liens. Cela ne change ni les notes ni l’ordre du
        classement : tous les détails sont dans notre <Link href="/divulgation-affiliation/">divulgation d’affiliation</Link>.
      </p>
      <JsonLd
        donnees={{
          '@context': 'https://schema.org',
          '@type': 'ProfilePage',
          url: absolu(AUTEUR.chemin),
          mainEntity: {
            '@type': 'Person',
            '@id': ID_AUTEUR,
            name: AUTEUR.nom,
            jobTitle: AUTEUR.role,
            url: absolu(AUTEUR.chemin),
            worksFor: { '@id': ID_ORGANISATION },
            knowsAbout: AUTEUR.domaines,
            ...(AUTEUR.profils.length ? { sameAs: AUTEUR.profils } : {})
          }
        }}
      />
    </Guide>
  );
}
