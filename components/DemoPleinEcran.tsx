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
  /** Identifiant Hacksaw Gaming : l'adresse du jeu est construite au clic, avec sa version du moment. */
  hacksaw?: string;
};

const PETIT_ECRAN = '(max-width: 900px), (pointer: coarse)';

/**
 * Le cadre du jeu ne peut ni quitter le site ni remplacer la page : pas de « allow-top-navigation ».
 * Testé avec Pragmatic Play, Play'n GO et Hacksaw Gaming (ordinateur et version mobile).
 */
const BAC_A_SABLE = 'allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-pointer-lock allow-orientation-lock';

/** Même adresse que le lanceur officiel de Hacksaw Gaming, sans sa redirection de page sur téléphone. */
async function adresseHacksaw(id: string, mobile: boolean): Promise<string> {
  const r = await fetch(`https://static-live.hacksawgaming.com/${id}/version.json?${Date.now()}`);
  if (!r.ok) throw new Error(`version ${r.status}`);
  const { version } = (await r.json()) as { version: string };
  const p = new URLSearchParams({
    language: 'fr',
    channel: mobile ? 'mobile' : 'desktop',
    gameid: id,
    mode: '2',
    token: '123131',
    lobbyurl: window.location.origin,
    currency: 'EUR',
    partner: 'demo',
    env: 'https://rgs-demo.hacksawgaming.com/api',
    realmoneyenv: 'https://rgs-demo.hacksawgaming.com/api'
  });
  return `https://static-live.hacksawgaming.com/${id}/${version}/index.html?${p.toString()}`;
}

/**
 * Démo intégrée, chargée seulement au clic.
 * Téléphone : la démo s'ouvre directement en plein écran (version mobile de l'éditeur si elle existe).
 * Ordinateur : la démo s'ouvre dans la page, avec un bouton pour passer en plein écran.
 * En plein écran, une barre fine garde « Fermer » et le lien « Jouer en argent réel ».
 * Le même cadre passe en plein écran par une simple classe CSS : le jeu ne se recharge pas.
 */
export default function DemoPleinEcran({ url, urlMobile, nom, poster, ctaHref, ctaTexte, casinoId, hacksaw }: Props) {
  // null : affiche ; '' : chargement ; 'erreur' : échec ; sinon adresse du jeu.
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
    if (hacksaw) {
      setSrc('');
      adresseHacksaw(hacksaw, mobile.current)
        .then(setSrc)
        .catch(() => setSrc('erreur'));
    } else {
      setSrc(mobile.current && urlMobile ? urlMobile : url);
    }
    // Le plein écran est demandé tout de suite, pendant le clic, sinon le navigateur le refuse.
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

  const classe = src === null ? 'demo-hote' : plein ? 'demo-cadre demo-plein' : 'demo-cadre';

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
        {src === null ? (
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
            {src === '' ? (
              <p className="demo-etat">Chargement de la démo…</p>
            ) : src === 'erreur' ? (
              <p className="demo-etat">
                La démo n’a pas pu se charger.{' '}
                <button type="button" className="demo-reessayer" onClick={lancer}>
                  Réessayer
                </button>
              </p>
            ) : (
              <iframe
                src={src}
                title={`Démo gratuite de ${nom}`}
                sandbox={BAC_A_SABLE}
                allow="fullscreen; autoplay"
                allowFullScreen
                referrerPolicy="no-referrer"
              />
            )}
          </>
        )}
      </div>
      {src && src !== 'erreur' && !plein ? (
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
