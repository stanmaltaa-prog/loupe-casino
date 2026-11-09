import { noteTexte } from '@/lib/casinos';
import { noteEn } from '@/lib/en/site';

/**
 * Signature visuelle du site : la note sur 10 dans une lentille de loupe.
 * L'arc représente la note ; le manche rappelle la loupe.
 */
export default function NoteLoupe({
  note,
  taille = 64,
  legende = true,
  lang = 'fr'
}: {
  note: number;
  taille?: number;
  legende?: boolean;
  lang?: 'fr' | 'en';
}) {
  const affiche = lang === 'en' ? noteEn(note) : noteTexte(note);
  const r = 22;
  const circonference = 2 * Math.PI * r;
  const plein = Math.max(0, Math.min(1, note / 10)) * circonference;
  const couleur = note >= 7 ? '#1F5F6B' : note >= 5.5 ? '#3E7F8A' : '#7A8C91';
  return (
    <span className="note-loupe">
      <svg width={taille} height={taille} viewBox="0 0 64 64" role="img" aria-label={lang === 'en' ? `Loupe score: ${affiche} out of 10` : `Note Loupe : ${affiche} sur 10`}>
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
          {affiche}
        </text>
      </svg>
      {legende ? (
        <span className="legende">
          <span className="chiffre">{lang === 'en' ? 'Loupe score' : 'Note Loupe'}</span>
          <br />
          {lang === 'en' ? 'out of 10' : 'sur 10'}
        </span>
      ) : null}
    </span>
  );
}
