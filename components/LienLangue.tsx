'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { estAnglais, versionAnglaise, versionFrancaise } from '@/lib/langues';

/** Lien vers la même page dans l'autre langue (ou vers l'accueil de l'autre langue s'il n'y a pas d'équivalent). */
export default function LienLangue() {
  const chemin = usePathname() || '/';
  if (estAnglais(chemin)) {
    return (
      <Link href={versionFrancaise(chemin) || '/'} hrefLang="fr-CA" lang="fr-CA" className="lien-langue">
        Français
      </Link>
    );
  }
  return (
    <Link href={versionAnglaise(chemin) || '/en-ca/'} hrefLang="en-CA" lang="en-CA" className="lien-langue">
      English
    </Link>
  );
}
