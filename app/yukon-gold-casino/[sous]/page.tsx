import { notFound } from 'next/navigation';
import RenduGuide from '@/components/RenduGuide';
import { metaPage, pageParChemin } from '@/lib/contenu/pages';
import { sousPagesMarque } from '@/lib/contenu/marques';

const BASE = '/yukon-gold-casino/';

export const dynamicParams = false;

/** Bonus, bonus sans dépôt, retrait et fiabilité de Yukon Gold (lib/contenu/marques.ts). */
export function generateStaticParams() {
  return sousPagesMarque(BASE).map((sous) => ({ sous }));
}

export function generateMetadata({ params }: { params: { sous: string } }) {
  const p = pageParChemin(`${BASE}${params.sous}/`);
  return p ? metaPage(p) : {};
}

export default function Page({ params }: { params: { sous: string } }) {
  const p = pageParChemin(`${BASE}${params.sous}/`);
  if (!p) notFound();
  return <RenduGuide page={p} />;
}
