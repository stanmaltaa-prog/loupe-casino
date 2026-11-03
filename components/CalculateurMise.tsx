'use client';

import { useMemo, useState } from 'react';

export type Prereglage = {
  nom: string;
  pourcentage: number;
  plafond: number | null;
  multiplicateur: number;
  base: 'bonus' | 'depot+bonus';
  delai: number | null;
};

function format(n: number): string {
  if (!Number.isFinite(n)) return '–';
  return `${Math.round(n).toLocaleString('fr-CA').replace(/\s/g, ' ')} $`;
}

function nombre(v: string, defaut = 0): number {
  const n = parseFloat(v.replace(',', '.'));
  return Number.isFinite(n) && n >= 0 ? n : defaut;
}

export default function CalculateurMise({ prereglages }: { prereglages: Prereglage[] }) {
  const [depot, setDepot] = useState('100');
  const [pourcentage, setPourcentage] = useState(String(prereglages[0]?.pourcentage ?? 100));
  const [plafond, setPlafond] = useState(prereglages[0]?.plafond ? String(prereglages[0].plafond) : '');
  const [multiplicateur, setMultiplicateur] = useState(String(prereglages[0]?.multiplicateur ?? 30));
  const [base, setBase] = useState<'bonus' | 'depot+bonus'>(prereglages[0]?.base ?? 'depot+bonus');
  const [delai, setDelai] = useState(prereglages[0]?.delai ? String(prereglages[0].delai) : '');
  const [miseTour, setMiseTour] = useState('1');
  const [rtp, setRtp] = useState('96');
  const [actif, setActif] = useState(prereglages[0]?.nom ?? '');

  function appliquer(p: Prereglage) {
    setPourcentage(String(p.pourcentage));
    setPlafond(p.plafond ? String(p.plafond) : '');
    setMultiplicateur(String(p.multiplicateur));
    setBase(p.base);
    setDelai(p.delai ? String(p.delai) : '');
    setActif(p.nom);
  }

  const r = useMemo(() => {
    const d = nombre(depot);
    const pct = nombre(pourcentage);
    const pl = plafond.trim() ? nombre(plafond) : Infinity;
    const bonus = Math.min((d * pct) / 100, pl);
    const assiette = base === 'bonus' ? bonus : d + bonus;
    const total = assiette * nombre(multiplicateur);
    const jours = nombre(delai);
    const tours = nombre(miseTour) > 0 ? total / nombre(miseTour) : NaN;
    const perte = total * (1 - Math.min(nombre(rtp, 96), 100) / 100);
    return { bonus, total, parJour: jours > 0 ? total / jours : null, tours, perte, valeur: bonus - perte };
  }, [depot, pourcentage, plafond, multiplicateur, base, delai, miseTour, rtp]);

  return (
    <div className="calculateur">
      <form onSubmit={(e) => e.preventDefault()} aria-label="Paramètres du bonus">
        {prereglages.length ? (
          <div className="prereglages" role="group" aria-label="Remplir avec l’offre d’un casino">
            {prereglages.map((p) => (
              <button type="button" key={p.nom} onClick={() => appliquer(p)} aria-pressed={actif === p.nom}>
                {p.nom}
              </button>
            ))}
          </div>
        ) : null}
        <label className="champ">
          <span>Votre dépôt ($)</span>
          <input inputMode="decimal" value={depot} onChange={(e) => setDepot(e.target.value)} />
        </label>
        <div className="deux-colonnes" style={{ gap: 12 }}>
          <label className="champ">
            <span>Bonus (%)</span>
            <input inputMode="decimal" value={pourcentage} onChange={(e) => { setPourcentage(e.target.value); setActif(''); }} />
          </label>
          <label className="champ">
            <span>Plafond du bonus ($)</span>
            <input inputMode="decimal" placeholder="Aucun" value={plafond} onChange={(e) => { setPlafond(e.target.value); setActif(''); }} />
          </label>
        </div>
        <div className="deux-colonnes" style={{ gap: 12 }}>
          <label className="champ">
            <span>Mise (nombre de fois)</span>
            <input inputMode="decimal" value={multiplicateur} onChange={(e) => { setMultiplicateur(e.target.value); setActif(''); }} />
          </label>
          <label className="champ">
            <span>Calculée sur</span>
            <select value={base} onChange={(e) => { setBase(e.target.value as 'bonus' | 'depot+bonus'); setActif(''); }}>
              <option value="depot+bonus">Dépôt + bonus</option>
              <option value="bonus">Bonus seulement</option>
            </select>
          </label>
        </div>
        <div className="deux-colonnes" style={{ gap: 12 }}>
          <label className="champ">
            <span>Délai (jours)</span>
            <input inputMode="decimal" placeholder="Non précisé" value={delai} onChange={(e) => { setDelai(e.target.value); setActif(''); }} />
          </label>
          <label className="champ">
            <span>Mise par tour ($)</span>
            <input inputMode="decimal" value={miseTour} onChange={(e) => setMiseTour(e.target.value)} />
          </label>
        </div>
        <label className="champ">
          <span>Taux de retour moyen des jeux (%)</span>
          <input inputMode="decimal" value={rtp} onChange={(e) => setRtp(e.target.value)} />
        </label>
      </form>

      <div className="resultats" aria-live="polite">
        <div className="resultat">
          <span>Bonus reçu</span>
          <strong>{format(r.bonus)}</strong>
        </div>
        <div className="resultat resultat-principal">
          <span>Total à miser avant de retirer</span>
          <strong>{format(r.total)}</strong>
        </div>
        {r.parJour !== null ? (
          <div className="resultat">
            <span>Soit, par jour</span>
            <strong>{format(r.parJour)}</strong>
          </div>
        ) : null}
        <div className="resultat">
          <span>Nombre de tours à jouer</span>
          <strong>{Number.isFinite(r.tours) ? Math.ceil(r.tours).toLocaleString('fr-CA') : '–'}</strong>
        </div>
        <div className="resultat">
          <span>Perte moyenne théorique pendant la mise</span>
          <strong>{format(r.perte)}</strong>
        </div>
        <div className="resultat">
          <span>Valeur théorique du bonus</span>
          <strong style={{ color: r.valeur >= 0 ? 'var(--bon)' : 'var(--alerte)' }}>
            {r.valeur >= 0 ? '+' : '−'}
            {format(Math.abs(r.valeur))}
          </strong>
        </div>
        <p className="petit" style={{ marginTop: 12, marginBottom: 0 }}>
          Moyennes statistiques : une session réelle peut finir bien au-dessus ou bien en dessous. Une valeur négative signifie
          qu&apos;en moyenne, la mise coûte plus que le bonus ne rapporte.
        </p>
      </div>
    </div>
  );
}
