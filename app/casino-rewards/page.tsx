import RenduGuide from '@/components/RenduGuide';
import { metaPage, page } from '@/lib/contenu/pages';

/** Groupe Casino Rewards : ce qui est commun aux 5 marques analysées (lib/contenu/marques.ts). */
const P = page('/casino-rewards/');

export const metadata = metaPage(P);

export default function Page() {
  return <RenduGuide page={P} />;
}
