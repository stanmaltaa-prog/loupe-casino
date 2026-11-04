import type { Machine } from './types';
import { typo, typoProfond } from '@/lib/typo';
import pragmatic from './pragmatic';
import autres from './autres';
import novembre from './novembre';
import { demoJeu } from '@/lib/demos';

export type { Machine } from './types';

const BRUT: Machine[] = [...pragmatic, ...autres, ...novembre];

// Garde-fous : bloquent le build si une fiche est incomplète ou incohérente.
const slugs = new Set<string>();
for (const m of BRUT) {
  if (slugs.has(m.slug)) throw new Error(`Machine en double : ${m.slug}`);
  slugs.add(m.slug);
}
for (const m of BRUT) {
  const ou = `machine ${m.slug}`;
  if (m.rtp < 80 || m.rtp > 99.9) throw new Error(`RTP hors limites : ${ou}`);
  if (m.rtpAutres.some((r) => r >= m.rtp)) throw new Error(`Une version de RTP dépasse le RTP principal : ${ou}`);
  if (!m.sources.length) throw new Error(`Source manquante : ${ou}`);
  if (m.analyse.length < 2) throw new Error(`Analyse trop courte : ${ou}`);
  if (m.faq.length < 2) throw new Error(`FAQ trop courte : ${ou}`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(m.verifieLe)) throw new Error(`Date de vérification invalide : ${ou}`);
  for (const s of m.similaires) if (!slugs.has(s) || s === m.slug) throw new Error(`Jeu similaire inconnu (${s}) : ${ou}`);
}

/** Toutes les machines, de la plus recherchée à la moins recherchée au Canada. */
export const MACHINES: Machine[] = typoProfond(BRUT).sort((a, b) => b.volume - a.volume || a.nom.localeCompare(b.nom));

export function machine(slug: string): Machine | undefined {
  return MACHINES.find((m) => m.slug === slug);
}

export function cheminMachine(m: Pick<Machine, 'slug'>): string {
  return `/machines-a-sous/${m.slug}/`;
}

export function parFournisseur(id: string): Machine[] {
  return MACHINES.filter((m) => m.fournisseurId === id);
}

/** 96.5 → « 96,50 % » */
export function pct(n: number): string {
  return typo(`${n.toLocaleString('fr-CA', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} %`);
}

/** 5000 → « 5 000× » */
export function fois(n: number): string {
  return typo(`${n.toLocaleString('fr-CA').replace(/\s/g, ' ')}×`);
}

/** 12.5 → « 12,50 $ » */
export function dollars(n: number): string {
  return typo(`${n.toLocaleString('fr-CA', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(/\s/g, ' ')} $`);
}

export function sourceRtp(m: Machine): string {
  return m.rtpSource === 'officiel' ? `fiche officielle de ${m.fournisseur}` : 'base de données SlotCatalog';
}

/** Titre pour Google : le plus complet qui tient en 62 caractères. */
export function titreMachine(m: Machine): string {
  const gain = m.gainMax ? 'gain max' : 'règles';
  // Les recherches « nom + demo » sont très fréquentes : on le dit dans le titre quand la démo existe.
  const candidats = demoJeu(m.slug)
    ? [`${m.nom} : démo gratuite, RTP et ${gain}`, `${m.nom} : démo gratuite et RTP`, `${m.nom} : démo et RTP`]
    : [`${m.nom} : avis, RTP et ${gain} de la machine à sous`, `${m.nom} : RTP, volatilité et ${gain}`, `${m.nom} : RTP et avis`];
  return candidats.find((t) => t.length <= 62) || m.nom;
}

export function descriptionMachine(m: Machine): string {
  const gain = m.gainMax ? `, gain max ${fois(m.gainMax)}` : '';
  const vol = `volatilité ${m.volatilite.toLowerCase()}`;
  const candidats = demoJeu(m.slug)
    ? [
        `${m.nom} (${m.fournisseur}) : démo gratuite sans inscription, RTP de ${pct(m.rtp)}, ${vol}${gain}. Bonus et budget expliqués simplement.`,
        `${m.nom} : démo gratuite sans inscription, RTP de ${pct(m.rtp)}, ${vol}${gain}. Bonus et budget expliqués simplement.`,
        `${m.nom} : démo gratuite, RTP de ${pct(m.rtp)}, ${vol}${gain}. Bonus et budget expliqués.`
      ]
    : [
        `${m.nom} (${m.fournisseur}) : RTP de ${pct(m.rtp)}, ${vol}${gain}. Versions de RTP, bonus et budget à prévoir, expliqués simplement.`,
        `${m.nom} : RTP de ${pct(m.rtp)}, ${vol}${gain}. Versions de RTP, bonus et budget à prévoir, expliqués simplement.`,
        `${m.nom} : RTP de ${pct(m.rtp)}, ${vol}${gain}. Bonus et budget à prévoir, expliqués simplement.`
      ];
  return candidats.find((d) => d.length <= 158) || candidats[candidats.length - 1];
}

for (const m of MACHINES) {
  const d = descriptionMachine(m);
  if (d.length > 158 || d.length < 70) throw new Error(`Description hors limites (${d.length}) : machine ${m.slug}`);
  if (titreMachine(m).length > 62) throw new Error(`Titre trop long : machine ${m.slug}`);
}
