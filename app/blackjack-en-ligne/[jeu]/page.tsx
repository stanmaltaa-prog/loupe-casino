import PageTable, { metaTable, paramsTables } from '@/components/PageTable';

export const dynamicParams = false;

export function generateStaticParams() {
  return paramsTables('blackjack');
}

export function generateMetadata({ params }: { params: { jeu: string } }) {
  return metaTable('blackjack', params.jeu);
}

export default function Page({ params }: { params: { jeu: string } }) {
  return <PageTable famille="blackjack" slug={params.jeu} />;
}
