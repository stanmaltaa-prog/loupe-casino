import type { Famille, TableJeu } from './types';
import { typo, typoProfond } from '@/lib/typo';
import { MACHINES } from '@/lib/contenu/machines';
import shows from './shows';
import cartesRoulette from './cartes-roulette';
import showsLot2 from './shows-lot2';

export type { Famille, TableJeu } from './types';

const BRUT: TableJeu[] = [...shows, ...showsLot2, ...cartesRoulette];

/** Rubrique de chaque famille : la fiche vit sous la page guide déjà indexée. */
export const RUBRIQUES: Record<Famille, { nom: string; chemin: string; libelle: string }> = {
  show: { nom: 'Casino en direct', chemin: '/casino-en-direct/', libelle: 'jeu télévisé en direct' },
  roulette: { nom: 'Roulette en ligne', chemin: '/roulette-en-ligne/', libelle: 'roulette' },
  blackjack: { nom: 'Blackjack en ligne', chemin: '/blackjack-en-ligne/', libelle: 'blackjack' }
};

// Garde-fous : bloquent le build si une fiche est incomplète ou incohérente.
const slugs = new Set<string>();
for (const t of BRUT) {
  if (slugs.has(t.slug)) throw new Error(`Jeu de table en double : ${t.slug}`);
  slugs.add(t.slug);
}
const machines = new Set(MACHINES.map((m) => m.slug));
for (const t of BRUT) {
  const ou = `jeu de table ${t.slug}`;
  if (t.rtp !== null && (t.rtp < 80 || t.rtp > 99.9)) throw new Error(`RTP hors limites : ${ou}`);
  if ((t.rtp === null) !== (t.rtpSource === null)) throw new Error(`RTP et source incohérents : ${ou}`);
  if (!t.sources.length) throw new Error(`Source manquante : ${ou}`);
  if (t.analyse.length < 2) throw new Error(`Analyse trop courte : ${ou}`);
  if (t.faq.length < 2) throw new Error(`FAQ trop courte : ${ou}`);
  if (t.titre.length > 62) throw new Error(`Titre trop long (${t.titre.length}) : ${ou}`);
  if (t.description.length < 70 || t.description.length > 158) throw new Error(`Description hors limites (${t.description.length}) : ${ou}`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(t.verifieLe)) throw new Error(`Date de vérification invalide : ${ou}`);
  for (const s of t.similaires) if (!slugs.has(s) || s === t.slug) throw new Error(`Jeu similaire inconnu (${s}) : ${ou}`);
  for (const s of t.machinesLiees || []) if (!machines.has(s)) throw new Error(`Machine liée inconnue (${s}) : ${ou}`);
}

/** Tous les jeux de table, du plus recherché au moins recherché au Canada. */
export const TABLES: TableJeu[] = typoProfond(BRUT).sort((a, b) => b.volume - a.volume || a.nom.localeCompare(b.nom));

export function tableJeu(slug: string): TableJeu | undefined {
  return TABLES.find((t) => t.slug === slug);
}

export function parFamille(f: Famille): TableJeu[] {
  return TABLES.filter((t) => t.famille === f);
}

export function cheminTable(t: Pick<TableJeu, 'slug' | 'famille'>): string {
  return `${RUBRIQUES[t.famille].chemin}${t.slug}/`;
}

export function sourceRtpTable(t: TableJeu): string {
  if (t.rtpSource === 'officiel') return `page officielle de ${t.fournisseur}`;
  if (t.rtpSource === 'calcul') return 'calcul mathématique';
  if (t.rtpSource === 'base') return 'base de données SlotCatalog';
  return 'non publié';
}

export function rtpTable(t: TableJeu): string {
  return t.rtp === null
    ? 'Non publié'
    : typo(`${t.rtp.toLocaleString('fr-CA', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} %`);
}
