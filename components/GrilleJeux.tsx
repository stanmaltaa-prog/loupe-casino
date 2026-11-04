import Link from 'next/link';
import { cheminMachine, pct, type Machine } from '@/lib/contenu/machines';
import { vignetteJeu } from '@/lib/images';

/** Vignette d'un jeu : image officielle du fournisseur, ou tuile de secours. */
export function VisuelJeu({ m, className = 'jeu-visuel' }: { m: Machine; className?: string }) {
  const img = vignetteJeu(m.slug);
  if (img) {
    return (
      <img
        src={img.src}
        alt={`${m.nom}, machine à sous ${m.fournisseur}`}
        width={339}
        height={180}
        className={className}
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
      />
    );
  }
  return (
    <span className={`${className} jeu-visuel-secours`} aria-hidden="true">
      <span>{m.nom}</span>
    </span>
  );
}

/** Grille de jeux façon lobby de casino. */
export default function GrilleJeux({ jeux }: { jeux: Machine[] }) {
  return (
    <ul className="grille-jeux">
      {jeux.map((m) => (
        <li key={m.slug}>
          <Link href={cheminMachine(m)} className="carte-machine">
            <span className="carte-machine-image">
              <VisuelJeu m={m} />
              <span className="carte-machine-rtp">RTP {pct(m.rtp)}</span>
            </span>
            <span className="carte-machine-corps">
              <strong>{m.nom}</strong>
              <span>{m.fournisseur}</span>
              <span>Volatilité {m.volatilite.toLowerCase()}</span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
