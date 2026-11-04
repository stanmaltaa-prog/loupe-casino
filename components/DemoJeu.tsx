import DemoPleinEcran from './DemoPleinEcran';
import DemoLien from './DemoLien';
import { CASINOS, lienSortie } from '@/lib/casinos';

/**
 * Démo gratuite d'un jeu, chargée seulement au clic : aucune ressource de l'éditeur n'est chargée
 * tant que le visiteur ne lance pas la démo. Intégrée : plein écran sur téléphone, bouton plein écran
 * sur ordinateur, avec une barre « Jouer en argent réel ». En lien : la démo s'ouvre chez l'éditeur.
 */
export default function DemoJeu({
  url,
  urlMobile,
  hacksaw,
  nom,
  poster,
  mode = 'integree',
  editeur,
  emplacement = 'demo'
}: {
  url: string;
  urlMobile?: string;
  hacksaw?: string;
  nom: string;
  poster: string | null;
  mode?: 'integree' | 'lien';
  editeur?: string;
  emplacement?: string;
}) {
  const top = CASINOS[0];
  if (mode === 'lien') {
    return (
      <DemoLien
        url={url}
        nom={nom}
        poster={poster}
        editeur={editeur}
        ctaHref={lienSortie(top, `${emplacement}-apres-demo`)}
        ctaTexte={`Jouer en argent réel chez ${top.nom}`}
        casinoId={top.id}
      />
    );
  }
  return (
    <div className="demo-jeu">
      <DemoPleinEcran
        url={url}
        urlMobile={urlMobile}
        hacksaw={hacksaw}
        nom={nom}
        poster={poster}
        ctaHref={lienSortie(top, `${emplacement}-plein-ecran`)}
        ctaTexte={`Jouer en argent réel chez ${top.nom}`}
        casinoId={top.id}
      />
      <p className="petit">
        Mode démo avec des crédits fictifs, fourni par l&apos;éditeur du jeu. Les résultats d&apos;une démo ne prédisent pas ceux
        d&apos;une session en argent réel, et la version installée par un casino peut avoir un RTP différent.
      </p>
    </div>
  );
}
