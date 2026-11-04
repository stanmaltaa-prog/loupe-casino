import Link from 'next/link';
import { AUTEUR } from '@/lib/auteur';

/** Signature de l'auteur, à côté de la date de mise à jour. */
export default function Signature() {
  return (
    <span className="signature">
      Par <Link href={AUTEUR.chemin}>{AUTEUR.nom}</Link>
      <span className="signature-accroche">, {AUTEUR.accroche}</span>
    </span>
  );
}
