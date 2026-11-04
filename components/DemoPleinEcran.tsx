'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

type Props = {
  url: string;
  urlMobile?: string;
  nom: string;
  poster: string | null;
  /** Lien de sortie vers le casino (déjà passé par /go/) et son texte. */
  ctaHref: string;
  ctaTexte: string;
  casinoId: string;
};

const PETIT_ECRAN = '(max-width: 900px), (pointer: coarse)';

/**
 * Démo intégrée, chargée seulement au clic.
 * Téléphone : la démo s'ouvre directement en plein écran (version mobile de l'éditeur si elle existe).
 * Ordinateur : la démo s'ouvre dans la page, avec un bouton pour passer en plein écran.
 * En plein écran, une barre fine garde « Fermer » et le lien « Jouer en argent réel ».
 * Le même cadre passe en plein écran par une simple classe CSS : le jeu ne se recharge pas.
 */
export default function DemoPleinEcran({ url, urlMobile, nom, poster, ctaHref, ctaTexte, casinoId }: Props) {
  const [src, setSrc] = useState<string | null>(null);
  const [plein, setPlein] = useState(false);
  const cadre = useRef<HTMLDivElement>(null);
  const pleinRef = useRef(false);
  const historique = useRef(false);
  const natif = useRef(false);
  const mobile = useRef(false);

  const fermer = useCallback((depuisRetour = false) => {
    if (!pleinRef.current) return;
    pleinRef.current = false;
    setPlein(false);
    document.documentElement.classList.remove('demo-ouverte');
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
    natif.current = false;
    if (historique.current) {
      historique.current = false;
      if (!depuisRetour) history.back();
    }
    // Sur téléphone, refermer arrête le jeu (son compris) : on revient à l'affiche.
    if (mobile.current) setSrc(null);
  }, []);

  const ouvrirPlein = useCallback(() => {
    if (pleinRef.current) return;
    pleinRef.current = true;
    setPlein(true);
    document.documentElement.classList.add('demo-ouverte');
    try {
      history.pushState({ demoPleinEcran: true }, '');
      historique.current = true;
    } catch {
      historique.current = false;
    }
    const el = cadre.current;
    if (el && el.requestFullscreen) {
      el.requestFullscreen()
        .then(() => {
          natif.current = true;
        })
        .catch(() => {
          natif.current = false;
        });
    }
  }, []);

  const lancer = () => {
    mobile.current = window.matchMedia(PETIT_ECRAN).matches;
    setSrc(mobile.current && urlMobile ? urlMobile : url);
    if (mobile.current) ouvrirPlein();
  };

  useEffect(() => {
    const retour = () => fermer(true);
    const touche = (e: KeyboardEvent) => {
      if (e.key === 'Escape') fermer();
    };
    const ecran = () => {
      // Le visiteur a quitté le plein écran du navigateur (touche Échap) : on referme aussi l'affichage.
      if (!document.fullscreenElement && natif.current) fermer();
    };
    window.addEventListener('popstate', retour);
    window.addEventListener('keydown', touche);
    document.addEventListener('fullscreenchange', ecran);
    return () => {
      window.removeEventListener('popstate', retour);
      window.removeEventListener('keydown', touche);
      document.removeEventListener('fullscreenchange', ecran);
      document.documentElement.classList.remove('demo-ouverte');
    };
  }, [fermer]);

  const classe = !src ? 'demo-hote' : plein ? 'demo-cadre demo-plein' : 'demo-cadre';

  return (
    <>
      {/* Le conteneur existe dès le départ : le plein écran du navigateur peut être demandé au moment même du clic. */}
      <div
        ref={cadre}
        className={classe}
        role={plein ? 'dialog' : undefined}
        aria-modal={plein ? true : undefined}
        aria-label={plein ? `Démo gratuite de ${nom}, plein écran` : undefined}
      >
        {!src ? (
          <button type="button" className="demo-lanceur" onClick={lancer}>
            {poster ? <img src={poster} alt="" width={339} height={180} loading="lazy" decoding="async" referrerPolicy="no-referrer" /> : null}
            <span className="demo-bouton">
              <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 4.5v15l13-7.5z" fill="currentColor" />
              </svg>
              Jouer gratuitement à {nom}
            </span>
            <span className="demo-mention">Démo gratuite, sans inscription · 18+</span>
          </button>
        ) : (
          <>
            {plein ? (
              <div className="demo-barre">
                <button type="button" className="demo-fermer" onClick={() => fermer()} aria-label="Fermer la démo">
                  ✕ <span className="demo-fermer-texte">Fermer</span>
                </button>
                <span className="demo-barre-nom">{nom} · démo</span>
                <a
                  href={ctaHref}
                  className="cta demo-barre-cta"
                  rel="sponsored nofollow noopener"
                  target="_blank"
                  data-casino={casinoId}
                  data-emplacement="plein-ecran"
                >
                  <span className="demo-cta-long">{ctaTexte}</span>
                  <span className="demo-cta-court">Jouer en argent réel</span>
                </a>
                <span className="demo-barre-mention">
                  18+ <span aria-hidden="true">·</span> Lien commercial
                </span>
              </div>
            ) : null}
            <iframe src={src} title={`Démo gratuite de ${nom}`} allowFullScreen referrerPolicy="no-referrer" />
          </>
        )}
      </div>
      {src && !plein ? (
        <div className="demo-actions">
          <button type="button" className="cta-secondaire demo-agrandir" onClick={ouvrirPlein}>
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
            Plein écran
          </button>
        </div>
      ) : null}
    </>
  );
}
