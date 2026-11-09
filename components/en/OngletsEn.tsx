import Link from 'next/link';
import type { Casino } from '@/lib/casinos';
import { cheminEn } from '@/lib/en/casinos';

export default function OngletsEn({ casino, actif }: { casino: Casino; actif: 'avis' | 'bonus' }) {
  const liens = [
    { nom: 'Review', href: cheminEn(casino), id: 'avis' },
    { nom: 'Bonus', href: cheminEn(casino, true), id: 'bonus' }
  ];
  return (
    <nav aria-label={`${casino.nom} pages`}>
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
