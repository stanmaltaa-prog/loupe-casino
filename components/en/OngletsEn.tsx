import Link from 'next/link';
import type { Casino } from '@/lib/casinos';
import { cheminEn } from '@/lib/en/casinos';
import { LEGIT_EN, RETRAIT_EN } from '@/lib/en/sujets';

export default function OngletsEn({ casino, actif }: { casino: Casino; actif: 'avis' | 'bonus' | 'legit' | 'withdrawal' }) {
  const liens = [
    { nom: 'Review', href: cheminEn(casino), id: 'avis' },
    { nom: 'Bonus', href: cheminEn(casino, true), id: 'bonus' },
    ...(LEGIT_EN[casino.id] ? [{ nom: 'Is it legit?', href: cheminEn(casino, 'legit'), id: 'legit' }] : []),
    ...(RETRAIT_EN[casino.id] ? [{ nom: 'Withdrawals', href: cheminEn(casino, 'withdrawal'), id: 'withdrawal' }] : [])
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
