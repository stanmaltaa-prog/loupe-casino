import PageTable, { metaTable, paramsTables } from '@/components/PageTable';

export const dynamicParams = false;

export function generateStaticParams() {
  return paramsTables('show');
}

export function generateMetadata({ params }: { params: { jeu: string } }) {
  return metaTable('show', params.jeu);
}

export default function Page({ params }: { params: { jeu: string } }) {
  return <PageTable famille="show" slug={params.jeu} />;
}
