import { notFound } from 'next/navigation';
import BonusEn, { textesBonus } from '@/components/en/BonusEn';
import { CASINOS, parSlug } from '@/lib/casinos';
import { cheminEn } from '@/lib/en/casinos';
import { metaEn } from '@/lib/seo';

export const dynamicParams = false;

export function generateStaticParams() {
  return CASINOS.map((c) => ({ page: c.slug }));
}

export function generateMetadata({ params }: { params: { page: string } }) {
  const c = parSlug(params.page);
  if (!c) return {};
  const x = textesBonus(c);
  return metaEn({ titre: x.titre, description: x.description, chemin: cheminEn(c, true), type: 'article' });
}

export default function PageBonusEn({ params }: { params: { page: string } }) {
  const c = parSlug(params.page);
  if (!c) notFound();
  return <BonusEn c={c} />;
}
