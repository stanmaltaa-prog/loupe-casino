import GuideEn from '@/components/en/GuideEn';
import { connexesMarqueEn, pageMarqueEn } from '@/lib/contenu/marques';
import { metaEn } from '@/lib/seo';

/** Casino Rewards group: what the 5 reviewed brands share (lib/contenu/marques.ts). */
const P = pageMarqueEn('/en-ca/casino-rewards/');

export const metadata = metaEn({ titre: P.titre, description: P.description, chemin: P.chemin, type: 'article' });

export default function Page() {
  return <GuideEn page={P} connexes={connexesMarqueEn(P)} />;
}
