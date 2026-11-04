import Link from 'next/link';
import { cheminTable, rtpTable, type TableJeu } from '@/lib/contenu/tables';
import { bandeauJeu } from '@/lib/images';

/** Affiche officielle d'un jeu de table (format portrait), ou tuile de secours. */
export function VisuelTable({ t, className = 'jeu-visuel' }: { t: TableJeu; className?: string }) {
  // Grande image (bandeau) si l'éditeur n'a qu'un visuel paysage : recadré au centre, il reste net.
  const img = bandeauJeu(t.slug);
  if (img) {
    return (
      <img
        src={img.src}
        alt={`${t.nom}, ${t.fournisseur}`}
        width={300}
        height={420}
        className={className}
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
      />
    );
  }
  return (
    <span className={`${className} jeu-visuel-secours`} aria-hidden="true">
      <span>{t.nom}</span>
    </span>
  );
}

/** Grille des jeux de table, façon lobby de casino en direct. */
export default function GrilleTables({ jeux }: { jeux: TableJeu[] }) {
  return (
    <ul className="grille-jeux grille-tables">
      {jeux.map((t) => (
        <li key={t.slug}>
          <Link href={cheminTable(t)} className="carte-machine carte-table">
            <span className="carte-machine-image">
              <VisuelTable t={t} />
              <span className="carte-machine-rtp">{t.rtp === null ? 'RTP non publié' : `RTP ${rtpTable(t)}`}</span>
            </span>
            <span className="carte-machine-corps">
              <strong>{t.nom}</strong>
              <span>{t.fournisseur}</span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
