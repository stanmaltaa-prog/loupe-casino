import RenduGuide from '@/components/RenduGuide';
import { metaPage, page } from '@/lib/contenu/pages';

const P = page('/luxury-casino/');

export const metadata = metaPage(P);

export default function Page() {
  return <RenduGuide page={P} />;
}
