'use client';

import { useState } from 'react';

type Props = {
  url: string;
  nom: string;
  poster: string | null;
  editeur?: string;
  ctaHref: string;
  ctaTexte: string;
  casinoId: string;
};

/**
 * Démo hébergée chez l'éditeur (il n'autorise pas l'intégration) : elle s'ouvre dans un nouvel onglet.
 * Une fois le lien cliqué, l'onglet du site affiche à la place une invitation à jouer en argent réel,
 * que le visiteur voit en revenant après avoir essayé le jeu.
 */
export default function DemoLien({ url, nom, poster, editeur, ctaHref, ctaTexte, casinoId }: Props) {
  const [ouverte, setOuverte] = useState(false);

  if (ouverte) {
    return (
      <div className="demo-apres" role="status">
        <p className="demo-apres-titre">Bonne partie sur {nom} !</p>
        <p>La démo officielle s’est ouverte dans un nouvel onglet. Envie de jouer à {nom} en argent réel ?</p>
        <div className="demo-apres-actions">
          <a href={ctaHref} className="cta" rel="sponsored nofollow noopener" target="_blank" data-casino={casinoId} data-emplacement="apres-demo">
            {ctaTexte}
          </a>
          <a href={url} className="demo-rouvrir" target="_blank" rel="nofollow noopener">
            Rouvrir la démo
          </a>
        </div>
        <p className="mention-cta">18+. Les conditions du casino s&apos;appliquent. Lien commercial.</p>
      </div>
    );
  }

  return (
    <a className="demo-jeu demo-lien" href={url} target="_blank" rel="nofollow noopener" onClick={() => setOuverte(true)}>
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
