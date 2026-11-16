import RenduGuide from '@/components/RenduGuide';
import { metaPage, page } from '@/lib/contenu/pages';

/** Le jeu en ligne au Québec en chiffres : page de données sourcées (lib/contenu/pages/statistiques.ts). */
const P = page('/statistiques-jeu-en-ligne-quebec/');

export const metadata = metaPage(P);

export default function Page() {
  return <RenduGuide page={P} />;
}
