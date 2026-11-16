import { notFound } from 'next/navigation';
import RenduGuide from '@/components/RenduGuide';
import { metaPage, pageParChemin } from '@/lib/contenu/pages';
import { ARTICLES } from '@/lib/contenu/pages/actualites';

export const dynamicParams = false;

/** Articles de la rubrique Actualités (lib/contenu/pages/actualites.ts). */
export function generateStaticParams() {
  return ARTICLES.map((a) => ({ article: a.chemin.split('/')[2] }));
}

export function generateMetadata({ params }: { params: { article: string } }) {
  const p = pageParChemin(`/actualites/${params.article}/`);
  return p ? metaPage(p) : {};
}

export default function Page({ params }: { params: { article: string } }) {
  const p = pageParChemin(`/actualites/${params.article}/`);
  if (!p) notFound();
  return <RenduGuide page={p} />;
}
