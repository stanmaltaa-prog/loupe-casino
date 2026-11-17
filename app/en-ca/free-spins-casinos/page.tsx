import GuideEn from '@/components/en/GuideEn';
import { connexesMarqueEn, pageMarqueEn } from '@/lib/contenu/marques';
import { metaEn } from '@/lib/seo';

/** Free spins compared: our casinos and the Casino Rewards group (lib/contenu/marques.ts). */
const P = pageMarqueEn('/en-ca/free-spins-casinos/');

export const metadata = metaEn({ titre: P.titre, description: P.description, chemin: P.chemin, type: 'article' });

export default function Page() {
  return <GuideEn page={P} connexes={connexesMarqueEn(P)} />;
}
