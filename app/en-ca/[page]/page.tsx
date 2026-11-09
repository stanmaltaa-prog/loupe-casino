import { notFound } from 'next/navigation';
import AvisEn, { textesAvis } from '@/components/en/AvisEn';
import GuideEn from '@/components/en/GuideEn';
import { CASINOS, parSlug } from '@/lib/casinos';
import { cheminEn } from '@/lib/en/casinos';
import { PAGES_EN, SLUGS_GUIDES, pageEn } from '@/lib/en/pages';
import type { PageGuide } from '@/lib/contenu/pages/types';
import { metaEn } from '@/lib/seo';

export const dynamicParams = false;

/** English casino reviews (/en-ca/velobet-casino/) and English guides (/en-ca/casino-bonuses/). */
export function generateStaticParams() {
  return [...CASINOS.map((c) => ({ page: c.slug })), ...SLUGS_GUIDES.map((s) => ({ page: s }))];
}

const TYPES: Record<string, 'Article' | 'WebPage' | 'AboutPage'> = { about: 'AboutPage', 'how-we-rate': 'WebPage' };

export function generateMetadata({ params }: { params: { page: string } }) {
  const c = parSlug(params.page);
  if (c) {
    const x = textesAvis(c);
    return metaEn({ titre: x.titre, description: x.description, chemin: cheminEn(c), type: 'article' });
  }
  const g = pageEn(`/en-ca/${params.page}/`);
  if (!g) return {};
  return metaEn({ titre: g.titre, description: g.description, chemin: g.chemin, type: 'article' });
}

export default function PageEn({ params }: { params: { page: string } }) {
  const c = parSlug(params.page);
  if (c) return <AvisEn c={c} />;
  const g = pageEn(`/en-ca/${params.page}/`);
  if (!g) notFound();
  const connexes = (g.connexes || []).map((x) => PAGES_EN.find((p) => p.chemin === x)).filter(Boolean) as PageGuide[];
  return <GuideEn page={g} connexes={connexes} type={TYPES[params.page] || 'Article'} sansOffre={params.page === 'about'} />;
}
