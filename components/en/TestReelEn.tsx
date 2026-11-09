import Link from 'next/link';
import { AUTEUR } from '@/lib/auteur';
import type { Casino } from '@/lib/casinos';

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function month(iso: string): string {
  const [y, m] = iso.split('-').map(Number);
  return `${MONTHS[m - 1]} ${y}`;
}

function hours(n: number): string {
  return `${n} hour${n > 1 ? 's' : ''}`;
}

/** Withdrawal times observed during the real test, in one phrase. */
export function delaisTestEn(c: Casino): string | null {
  const t = c.test;
  if (!t) return null;
  const parts = [
    t.retraitCryptoHeures !== null ? `crypto withdrawal received in ${hours(t.retraitCryptoHeures)}` : null,
    t.retraitCarteHeures !== null ? `card withdrawal in ${hours(t.retraitCarteHeures)}` : null
  ].filter(Boolean) as string[];
  return parts.length ? parts.join(', ') : null;
}

/** "Tested by…" box: the author's real test, with the withdrawal times observed. */
export default function TestReelEn({ casino: c }: { casino: Casino }) {
  const t = c.test;
  if (!t) return null;
  const delais = delaisTestEn(c);
  return (
    <aside className="encadre encadre-bon" aria-label="Our test">
      <p className="encadre-titre">
        Tested by <Link href="/en-ca/about/#author">{AUTEUR.nom}</Link>
      </p>
      <p>
        I tested {c.nom} twice: a minimum deposit followed by a withdrawal, then a CA$1,000 deposit, to compare two different
        balances.{delais ? ` Result: ${delais}.` : ''} Deposits, games and withdrawals worked as the terms state.
      </p>
      <p className="petit">
        I play at {c.nom} about every {t.frequenceJours} days, and more often if the service slips. Last test: {month(t.mois)}.
        Your times may vary with identity checks and the payment method.
      </p>
    </aside>
  );
}
