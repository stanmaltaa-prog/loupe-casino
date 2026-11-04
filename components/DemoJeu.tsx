import DemoPleinEcran from './DemoPleinEcran';
import { CASINOS, lienSortie } from '@/lib/casinos';

/**
 * Démo gratuite d'un jeu, chargée seulement au clic : aucune ressource de l'éditeur n'est chargée
 * tant que le visiteur ne lance pas la démo. Intégrée : plein écran sur téléphone, bouton plein écran
 * sur ordinateur, avec une barre « Jouer en argent réel ». En lien : la démo s'ouvre chez l'éditeur.
 */
export default function DemoJeu({
  url,
  urlMobile,
  nom,
  poster,
  mode = 'integree',
  editeur,
  emplacement = 'demo'
}: {
  url: string;
  urlMobile?: string;
  nom: string;
  poster: string | null;
  mode?: 'integree' | 'lien';
  editeur?: string;
  emplacement?: string;
}) {
  if (mode === 'lien') {
    return (
      <a className="demo-jeu demo-lien" href={url} target="_blank" rel="nofollow noopener">
        {poster ? <img src={poster} alt="" width={339} height={180} loading="lazy" decoding="async" referrerPolicy="no-referrer" /> : null}
        <span className="demo-bouton">
          <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7 4.5v15l13-7.5z" fill="currentColor" />
          </svg>
          Jouer gratuitement à {nom}
        </span>
        <span className="demo-mention">Démo officielle sur le site de {editeur || "l'éditeur"} · nouvel onglet · 18+</span>
      </a>
    );
  }
  const top = CASINOS[0];
  return (
    <div className="demo-jeu">
      <DemoPleinEcran
        url={url}
        urlMobile={urlMobile}
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
