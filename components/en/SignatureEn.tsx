import Link from 'next/link';
import { AUTEUR } from '@/lib/auteur';

/** Author line, next to the update date. */
export default function SignatureEn() {
  return (
    <span className="signature">
      By <Link href="/en-ca/about/#author">{AUTEUR.nom}</Link>
      <span className="signature-accroche">, 7 years in business development at online casinos in Malta</span>
    </span>
  );
}
