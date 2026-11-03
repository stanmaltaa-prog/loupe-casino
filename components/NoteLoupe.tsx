import { noteTexte } from '@/lib/casinos';

/**
 * Signature visuelle du site : la note sur 10 dans une lentille de loupe.
 * L'arc représente la note ; le manche rappelle la loupe.
 */
export default function NoteLoupe({
  note,
  taille = 64,
  legende = true
}: {
  note: number;
  taille?: number;
  legende?: boolean;
}) {
  const r = 22;
  const circonference = 2 * Math.PI * r;
  const plein = Math.max(0, Math.min(1, note / 10)) * circonference;
  const couleur = note >= 7 ? '#1F5F6B' : note >= 5.5 ? '#3E7F8A' : '#7A8C91';
  return (
    <span className="note-loupe">
      <svg width={taille} height={taille} viewBox="0 0 64 64" role="img" aria-label={`Note Loupe : ${noteTexte(note)} sur 10`}>
        <path d="M47 47 L59 59" stroke="#10212B" strokeWidth="6" strokeLinecap="round" />
        <circle cx="28" cy="28" r={r + 5} fill="#FFFFFF" />
        <circle cx="28" cy="28" r={r} fill="none" stroke="#DCEBEC" strokeWidth="6" />
        <circle
          cx="28"
          cy="28"
          r={r}
          fill="none"
          stroke={couleur}
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={`${plein} ${circonference}`}
          transform="rotate(-90 28 28)"
        />
        <text x="28" y="33.5" textAnchor="middle" fontSize="16" fontWeight="800" fill="#10212B" style={{ fontFamily: 'var(--titre)' }}>
          {noteTexte(note)}
        </text>
      </svg>
      {legende ? (
        <span className="legende">
          <span className="chiffre">Note Loupe</span>
          <br />
          sur 10
        </span>
      ) : null}
    </span>
  );
}
