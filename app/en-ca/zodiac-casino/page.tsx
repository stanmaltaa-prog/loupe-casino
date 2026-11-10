import GuideEn from '@/components/en/GuideEn';
import { connexesMarqueEn, pageMarqueEn } from '@/lib/contenu/marques';
import { metaEn } from '@/lib/seo';

const P = pageMarqueEn('/en-ca/zodiac-casino/');

export const metadata = metaEn({ titre: P.titre, description: P.description, chemin: P.chemin, type: 'article' });

export default function Page() {
  return <GuideEn page={P} connexes={connexesMarqueEn(P)} />;
}
