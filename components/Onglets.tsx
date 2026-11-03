import Link from 'next/link';
import { SOUS_PAGES, cheminCasino, type Casino, type SousPage } from '@/lib/casinos';

export default function Onglets({ casino, actif }: { casino: Casino; actif: SousPage | 'avis' }) {
  const liens: { nom: string; href: string; id: SousPage | 'avis' }[] = [
    { nom: 'Avis', href: cheminCasino(casino), id: 'avis' },
    ...casino.sousPages.map((s) => ({ nom: SOUS_PAGES[s].titreCourt, href: cheminCasino(casino, s), id: s }))
  ];
  return (
    <nav aria-label={`Pages ${casino.nom}`}>
      <ul className="onglets">
        {liens.map((l) => (
          <li key={l.id}>
            <Link href={l.href} aria-current={l.id === actif ? 'page' : undefined}>
              {l.nom}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
