import Link from 'next/link';
import JsonLd from './JsonLd';
import { schemaFil } from '@/lib/seo';

export type Miette = { nom: string; chemin: string };

export default function FilAriane({ elements, lang = 'fr' }: { elements: Miette[]; lang?: 'fr' | 'en' }) {
  const accueil = lang === 'en' ? { nom: 'Home', chemin: '/en-ca/' } : { nom: 'Accueil', chemin: '/' };
  const complet = [accueil, ...elements];
  return (
    <nav className="fil conteneur" aria-label={lang === 'en' ? 'Breadcrumb' : "Fil d'Ariane"}>
      <ol>
        {complet.map((e, i) => (
          <li key={e.chemin}>
            {i < complet.length - 1 ? <Link href={e.chemin}>{e.nom}</Link> : <span aria-current="page">{e.nom}</span>}
          </li>
        ))}
      </ol>
      <JsonLd donnees={schemaFil(complet)} />
    </nav>
  );
}
