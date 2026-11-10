import { notFound } from 'next/navigation';
import GuideEn from '@/components/en/GuideEn';
import { MARQUES_EN, connexesMarqueEn, sousPagesMarque } from '@/lib/contenu/marques';
import { metaEn } from '@/lib/seo';

const BASE = '/en-ca/zodiac-casino/';

export const dynamicParams = false;

/** Bonus, no deposit bonus, withdrawal and legit pages for Zodiac (lib/contenu/marques.ts). */
export function generateStaticParams() {
  return sousPagesMarque(BASE).map((sous) => ({ sous }));
}

const trouver = (sous: string) => MARQUES_EN.find((x) => x.chemin === `${BASE}${sous}/`);

export function generateMetadata({ params }: { params: { sous: string } }) {
  const p = trouver(params.sous);
  return p ? metaEn({ titre: p.titre, description: p.description, chemin: p.chemin, type: 'article' }) : {};
}

export default function Page({ params }: { params: { sous: string } }) {
  const p = trouver(params.sous);
  if (!p) notFound();
  return <GuideEn page={p} connexes={connexesMarqueEn(p)} />;
}
