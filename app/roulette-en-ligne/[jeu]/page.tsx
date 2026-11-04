import PageTable, { metaTable, paramsTables } from '@/components/PageTable';

export const dynamicParams = false;

export function generateStaticParams() {
  return paramsTables('roulette');
}

export function generateMetadata({ params }: { params: { jeu: string } }) {
  return metaTable('roulette', params.jeu);
}

export default function Page({ params }: { params: { jeu: string } }) {
  return <PageTable famille="roulette" slug={params.jeu} />;
}
