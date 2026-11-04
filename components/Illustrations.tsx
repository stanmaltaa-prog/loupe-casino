/**
 * Illustrations originales du site (aucun visuel de marque reproduit) :
 * cartes à jouer, roulette, rouleaux, courbe de crash, jetons, etc.
 */

type Couleur = '♠' | '♥' | '♦' | '♣';

/** Carte à jouer générique. */
export function CarteJeu({ valeur, couleur, cachee = false, largeur = 84 }: { valeur?: string; couleur?: Couleur; cachee?: boolean; largeur?: number }) {
  const rouge = couleur === '♥' || couleur === '♦';
  const teinte = rouge ? '#c8323a' : '#13202a';
  const h = Math.round(largeur * 1.4);
  if (cachee) {
    return (
      <svg width={largeur} height={h} viewBox="0 0 100 140" role="img" aria-label="Carte face cachée" className="carte-jeu">
        <rect x="1" y="1" width="98" height="138" rx="9" fill="#1f5f6b" stroke="#0f3d46" strokeWidth="2" />
        <rect x="9" y="9" width="82" height="122" rx="6" fill="none" stroke="#f4b23e" strokeWidth="2" strokeDasharray="5 4" />
        <circle cx="50" cy="70" r="16" fill="none" stroke="#f4b23e" strokeWidth="3" />
      </svg>
    );
  }
  return (
    <svg width={largeur} height={h} viewBox="0 0 100 140" role="img" aria-label={`${valeur} de ${couleur}`} className="carte-jeu">
      <rect x="1" y="1" width="98" height="138" rx="9" fill="#fff" stroke="#c9d4d2" strokeWidth="2" />
      <text x="11" y="27" fontSize="22" fontWeight="700" fill={teinte} fontFamily="Georgia, serif">
        {valeur}
      </text>
      <text x="11" y="47" fontSize="18" fill={teinte}>
        {couleur}
      </text>
      <text x="50" y="86" fontSize="44" textAnchor="middle" fill={teinte}>
        {couleur}
      </text>
      <g transform="rotate(180 50 70)">
        <text x="11" y="27" fontSize="22" fontWeight="700" fill={teinte} fontFamily="Georgia, serif">
          {valeur}
        </text>
        <text x="11" y="47" fontSize="18" fill={teinte}>
          {couleur}
        </text>
      </g>
    </svg>
  );
}

/** Une main de cartes avec un libellé et un total. */
export function Main({ titre, cartes, total, ton = 'neutre' }: { titre: string; cartes: { v?: string; c?: Couleur; cachee?: boolean }[]; total?: string; ton?: 'neutre' | 'bon' | 'alerte' }) {
  return (
    <div className={`main-cartes main-${ton}`}>
      <p className="main-titre">{titre}</p>
      <div className="main-jeu">
        {cartes.map((k, i) => (
          <CarteJeu key={i} valeur={k.v} couleur={k.c} cachee={k.cachee} largeur={70} />
        ))}
      </div>
      {total ? <p className="main-total">{total}</p> : null}
    </div>
  );
}

/** Rouleaux de machine à sous (symboles génériques). */
export function IllusMachine() {
  return (
    <svg viewBox="0 0 160 110" role="img" aria-label="Machine à sous" className="illus">
      <rect x="6" y="10" width="148" height="90" rx="16" fill="#7a2bd6" />
      <rect x="16" y="22" width="128" height="58" rx="10" fill="#fff" />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={22 + i * 41} y="27" width="34" height="48" rx="6" fill="#f3eefc" />
          <text x={39 + i * 41} y="61" textAnchor="middle" fontSize="28" fontWeight="800" fill="#e0412f" fontFamily="Georgia, serif">
            7
          </text>
        </g>
      ))}
      <rect x="58" y="86" width="44" height="7" rx="3.5" fill="#f4b23e" />
      <circle cx="152" cy="30" r="6" fill="#f4b23e" />
      <rect x="149" y="34" width="6" height="26" rx="3" fill="#cfa3ff" />
    </svg>
  );
}

/** Roue de roulette générique. */
export function IllusRoulette() {
  const cases = 18;
  return (
    <svg viewBox="0 0 120 120" role="img" aria-label="Roulette" className="illus">
      <circle cx="60" cy="60" r="56" fill="#5a3415" />
      {Array.from({ length: cases }).map((_, i) => {
        const a1 = (i / cases) * Math.PI * 2;
        const a2 = ((i + 1) / cases) * Math.PI * 2;
        const p = (a: number, r: number) => `${60 + r * Math.cos(a)},${60 + r * Math.sin(a)}`;
        const fill = i === 0 ? '#1d8a4e' : i % 2 ? '#c8323a' : '#13202a';
        return <path key={i} d={`M${p(a1, 48)} A48,48 0 0 1 ${p(a2, 48)} L${p(a2, 30)} A30,30 0 0 0 ${p(a1, 30)} Z`} fill={fill} />;
      })}
      <circle cx="60" cy="60" r="28" fill="#c99a4b" />
      <circle cx="60" cy="60" r="8" fill="#f4d58d" />
      <circle cx="60" cy="18" r="4.5" fill="#fff" />
    </svg>
  );
}

/** Deux cartes : un blackjack. */
export function IllusBlackjack() {
  return (
    <svg viewBox="0 0 140 110" role="img" aria-label="Blackjack" className="illus">
      <rect x="0" y="62" width="140" height="48" rx="24" fill="#1d6b46" />
      <g transform="rotate(-10 45 55)">
        <rect x="18" y="12" width="54" height="76" rx="7" fill="#fff" stroke="#c9d4d2" strokeWidth="2" />
        <text x="26" y="32" fontSize="16" fontWeight="700" fill="#13202a">A</text>
        <text x="45" y="64" fontSize="28" textAnchor="middle" fill="#13202a">♠</text>
      </g>
      <g transform="rotate(10 95 55)">
        <rect x="66" y="12" width="54" height="76" rx="7" fill="#fff" stroke="#c9d4d2" strokeWidth="2" />
        <text x="74" y="32" fontSize="16" fontWeight="700" fill="#c8323a">K</text>
        <text x="93" y="64" fontSize="28" textAnchor="middle" fill="#c8323a">♥</text>
      </g>
      <circle cx="116" cy="92" r="12" fill="#f4b23e" stroke="#fff" strokeWidth="3" strokeDasharray="4 3" />
    </svg>
  );
}

/** Courbe de multiplicateur d'un jeu de crash. */
export function IllusCrash() {
  return (
    <svg viewBox="0 0 140 110" role="img" aria-label="Jeu de crash" className="illus">
      <rect x="0" y="0" width="140" height="110" rx="14" fill="#12233a" />
      <path d="M12 96 C 60 94, 90 78, 122 22" fill="none" stroke="#ff5b5b" strokeWidth="5" strokeLinecap="round" />
      <path d="M12 96 C 60 94, 90 78, 122 22 L122 96 Z" fill="#ff5b5b" opacity="0.15" />
      <text x="16" y="30" fontSize="20" fontWeight="800" fill="#fff">2,45×</text>
      <path d="M118 16 l10 -6 l-3 11 z" fill="#fff" />
    </svg>
  );
}

/** Table de jeu en direct (croupier stylisé, sans personne réelle). */
export function IllusDirect() {
  return (
    <svg viewBox="0 0 140 110" role="img" aria-label="Casino en direct" className="illus">
      <rect x="0" y="0" width="140" height="110" rx="14" fill="#2b1b3d" />
      <circle cx="70" cy="34" r="14" fill="#f2c9a5" />
      <path d="M44 74 C 46 52, 94 52, 96 74 Z" fill="#13202a" />
      <path d="M62 52 L70 62 L78 52" fill="#fff" />
      <ellipse cx="70" cy="88" rx="62" ry="18" fill="#1d6b46" />
      <rect x="10" y="10" width="34" height="16" rx="8" fill="#e5484d" />
      <circle cx="19" cy="18" r="3.5" fill="#fff" />
      <text x="25" y="22" fontSize="10" fontWeight="800" fill="#fff">LIVE</text>
    </svg>
  );
}

/** Rondelle et bâton de hockey. */
export function IllusSport() {
  return (
    <svg viewBox="0 0 140 110" role="img" aria-label="Paris sportifs" className="illus">
      <rect x="0" y="0" width="140" height="110" rx="14" fill="#e8f1f7" />
      <path d="M28 14 L70 82 L112 82" fill="none" stroke="#7a4a1f" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
      <ellipse cx="92" cy="94" rx="16" ry="6" fill="#13202a" />
      <rect x="76" y="88" width="32" height="6" fill="#13202a" />
      <ellipse cx="92" cy="88" rx="16" ry="6" fill="#2b3a44" />
    </svg>
  );
}

/** Jeton de casino. */
export function Jeton({ taille = 28 }: { taille?: number }) {
  return (
    <svg width={taille} height={taille} viewBox="0 0 40 40" aria-hidden="true">
      <circle cx="20" cy="20" r="18" fill="#f4b23e" />
      <circle cx="20" cy="20" r="18" fill="none" stroke="#fff" strokeWidth="4" strokeDasharray="6 5" />
      <circle cx="20" cy="20" r="10" fill="#e09c22" />
    </svg>
  );
}

export const ILLUSTRATIONS = {
  machine: IllusMachine,
  roulette: IllusRoulette,
  blackjack: IllusBlackjack,
  crash: IllusCrash,
  direct: IllusDirect,
  sport: IllusSport
} as const;
