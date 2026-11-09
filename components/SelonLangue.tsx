'use client';

import { usePathname } from 'next/navigation';
import { estAnglais } from '@/lib/langues';

/** Affiche la version anglaise (en-tête, pied de page) dans /en-ca/, la version française partout ailleurs. */
export default function SelonLangue({ fr, en }: { fr: React.ReactNode; en: React.ReactNode }) {
  const chemin = usePathname() || '/';
  return <>{estAnglais(chemin) ? en : fr}</>;
}
