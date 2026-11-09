import { notFound } from 'next/navigation';
import SujetEn, { casinosAvec, texteSujet } from '@/components/en/SujetEn';
import { parSlug } from '@/lib/casinos';
import { cheminEn } from '@/lib/en/casinos';
import { metaEn } from '@/lib/seo';

export const dynamicParams = false;

export function generateStaticParams() {
  return casinosAvec('legit').map((c) => ({ page: c.slug }));
}

export function generateMetadata({ params }: { params: { page: string } }) {
  const c = parSlug(params.page);
  const x = c ? texteSujet(c, 'legit') : undefined;
  if (!c || !x) return {};
  return metaEn({ titre: x.titre, description: x.description, chemin: cheminEn(c, 'legit'), type: 'article' });
}

export default function Page({ params }: { params: { page: string } }) {
  const c = parSlug(params.page);
  if (!c || !texteSujet(c, 'legit')) notFound();
  return <SujetEn c={c} sujet="legit" />;
}
