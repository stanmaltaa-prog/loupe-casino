import brut from '@/donnees/casinos.json';
import { montant } from '@/lib/site';
import { typo, typoProfond } from '@/lib/typo';

export type SousPage = 'bonus' | 'retrait' | 'fiable' | 'inscription';

export type Palier = { depot: number; pourcentage: number; plafond: number | null; tours: number };

export type Critere = 'transparence' | 'bonus' | 'retraits' | 'produit' | 'protection';

export type Casino = {
  id: string;
  actif: boolean;
  nom: string;
  slug: string;
  initiale: string;
  couleur: string;
  lien: string;
  accroche: string;
  sousPages: SousPage[];
  operateur: { nom: string | null; registre: string | null; pays: string | null; source: string; verifieLe: string };
  licence: {
    statut: 'numero-affiche' | 'sans-numero' | 'non-affichee' | 'non-verifiee';
    autorite: string | null;
    numero: string | null;
    note: string;
    source: string;
    verifieLe: string;
  };
  offre: {
    titre: string;
    sousTitre: string;
    devise: string;
    noteDevise: string;
    paliers: Palier[];
    toursTotal: number;
    toursDetail: string;
    mise: { multiplicateur: number; base: 'bonus' | 'depot+bonus'; delaiJours: number | null } | null;
    depotMin: number | string | null;
    /** Devise du dépôt minimum quand elle diffère du dollar (par défaut : $). */
    depotMinDevise?: string;
    miseMax: string | null;
    jeuxAdmissibles: string | null;
    activation: string | null;
    autres: string[];
    source: string;
    verifieLe: string;
  };
  autresOffres: { titre: string; detail: string }[];
  paiements: {
    crypto: string[];
    autres: string[];
    interac: 'confirme' | 'non-confirme' | 'non-affiche';
    devises?: string;
    source: string;
    verifieLe: string;
  };
  produit: { casino: boolean | null; live: boolean | null; sport: boolean | null; esport: boolean | null; nombreJeux: string | null };
  retraits: { resume: string; detail: string[]; source: string; verifieLe: string } | null;
  quebec: { statut: 'confirme' | 'a-confirmer'; note: string; confirmeLe?: string };
  /** Test réel fait par l'auteur du site : délais de retrait constatés, en heures. */
  test?: {
    par: string;
    mois: string;
    retraitCryptoHeures: number | null;
    retraitCarteHeures: number | null;
    frequenceJours: number;
    source: string;
  };
  notes: Record<Critere, { note: number; raison: string }>;
  pointsForts: string[];
  pointsFaibles: string[];
  aConfirmer: string[];
};

export const CRITERES: { id: Critere; nom: string; poids: number; question: string }[] = [
  { id: 'transparence', nom: 'Transparence et licence', poids: 25, question: "Sait-on qui exploite le site et sous quelle licence ? Peut-on le vérifier ?" },
  { id: 'bonus', nom: 'Conditions du bonus', poids: 25, question: "Combien faut-il miser, en combien de temps, sur quels jeux, avec quelle mise maximale ?" },
  { id: 'retraits', nom: 'Retraits et limites', poids: 20, question: "Les plafonds et délais de retrait sont-ils publiés et raisonnables ?" },
  { id: 'produit', nom: 'Jeux et produit', poids: 15, question: "Taille du catalogue, casino en direct, paris sportifs, moyens de paiement." },
  { id: 'protection', nom: 'Jeu responsable et service', poids: 15, question: "Outils de limites, d'autoexclusion et service à la clientèle." }
];

/** Note globale sur 10, arrondie à une décimale, calculée avec la grille publique. */
export function noteGlobale(c: Casino): number {
  const total = CRITERES.reduce((s, cr) => s + c.notes[cr.id].note * cr.poids, 0) / 100;
  return Math.round((total + 1e-9) * 10) / 10;
}

/** 7.3 → « 7,3 » */
export function noteTexte(n: number): string {
  return n.toFixed(1).replace('.', ',');
}

const TOUS: Casino[] = typoProfond(brut.casinos as unknown as Casino[]);

/** Casinos actifs, classés par note (le classement suit toujours la grille). */
export const CASINOS: Casino[] = TOUS.filter((c) => c.actif).sort((a, b) => noteGlobale(b) - noteGlobale(a));

export function parSlug(slug: string): Casino | undefined {
  return CASINOS.find((c) => c.slug === slug);
}

export function parId(id: string): Casino | undefined {
  return CASINOS.find((c) => c.id === id);
}

export function rang(c: Casino): number {
  return CASINOS.findIndex((x) => x.id === c.id) + 1;
}

export function autres(c: Casino): Casino[] {
  return CASINOS.filter((x) => x.id !== c.id);
}

/** Lien de sortie interne, suivi dans les journaux Railway. */
export function lienSortie(c: Casino, emplacement: string): string {
  return `/go/${c.id}/?src=${encodeURIComponent(emplacement)}`;
}

/**
 * Texte d'un grand bouton de sortie, construit à partir de l'offre affichée
 * (« Obtenir jusqu'à 2 000 $ + 300 tours »). Si l'offre ne commence pas par « Jusqu'à »,
 * le bouton reste générique pour ne rien inventer.
 */
export function texteBouton(c: Casino): string {
  const t = c.offre.titre.replace(/\s+tours gratuits/, ' tours');
  if (/^jusqu/i.test(t)) return `Obtenir j${t.slice(1)}`;
  return `Obtenir le bonus ${c.nom}`;
}

/** Casinos qui proposent des paris sportifs, dans l'ordre du classement. */
export function avecSport(): Casino[] {
  return CASINOS.filter((c) => c.produit.sport);
}

export const SOUS_PAGES: Record<SousPage, { titreCourt: string; segment: SousPage; resume: string }> = {
  bonus: { titreCourt: 'Bonus', segment: 'bonus', resume: 'Paliers, conditions officielles et exemple chiffré.' },
  retrait: { titreCourt: 'Retraits', segment: 'retrait', resume: 'Limites, délais et conseils pour retirer sans accroc.' },
  fiable: { titreCourt: 'Fiabilité', segment: 'fiable', resume: 'Licence, exploitant et points de vigilance.' },
  inscription: { titreCourt: 'Inscription', segment: 'inscription', resume: 'Les étapes, du formulaire au premier retrait.' }
};

export function cheminCasino(c: Casino, sous?: SousPage): string {
  return sous ? `/${c.slug}/${sous}/` : `/${c.slug}/`;
}

/** Texte court de la condition de mise, ex. « 30 fois (dépôt + bonus) en 5 jours ». */
export function miseTexte(c: Casino): string {
  const m = c.offre.mise;
  if (!m) return 'Non confirmée';
  const base = m.base === 'bonus' ? 'le bonus' : '(dépôt + bonus)';
  const delai = m.delaiJours ? ` en ${m.delaiJours} jours` : '';
  return typo(`${m.multiplicateur} fois ${base}${delai}`);
}

export function depotMinTexte(c: Casino): string {
  const d = c.offre.depotMin;
  if (d === null || d === undefined) return absent(c);
  if (typeof d === 'number') return montant(d, c.offre.depotMinDevise || '$');
  return typo(d);
}

export function palierTexte(p: Palier, devise: string): string {
  const plafond = p.plafond !== null && devise !== '%' ? ` jusqu'à ${montant(p.plafond, devise)}` : '';
  const tours = p.tours ? ` + ${p.tours} tours gratuits` : '';
  return typo(`${p.pourcentage} %${plafond}${tours}`);
}

/**
 * Exemple chiffré d'un dépôt au premier palier.
 * Renvoie null si les conditions ne permettent pas de calculer honnêtement.
 */
export function exempleMise(c: Casino, depot = 100) {
  const p = c.offre.paliers[0];
  const m = c.offre.mise;
  if (!p || !m) return null;
  let bonus = (depot * p.pourcentage) / 100;
  if (p.plafond !== null) bonus = Math.min(bonus, p.plafond);
  const assiette = m.base === 'bonus' ? bonus : depot + bonus;
  const aMiser = assiette * m.multiplicateur;
  const parJour = m.delaiJours ? aMiser / m.delaiJours : null;
  /** Perte moyenne théorique avec un taux de retour de 96 %. */
  const perteTheorique = aMiser * 0.04;
  return { depot, bonus, assiette, aMiser, parJour, perteTheorique, devise: c.offre.devise === '%' ? '$' : c.offre.devise };
}

export function licenceTexte(c: Casino): string {
  const l = c.licence;
  switch (l.statut) {
    case 'numero-affiche':
      return `${l.autorite}, n°\u00a0${l.numero}`;
    case 'sans-numero':
      return `${l.autorite}, numéro non affiché`;
    case 'non-affichee':
      return 'Aucun numéro de licence affiché';
    default:
      return 'Non vérifiée';
  }
}

/** Vrai quand les mentions légales du casino n'ont pas pu être consultées : on écrit alors « non vérifié » plutôt que « non publié ». */
export function inaccessible(c: Casino): boolean {
  return c.licence.statut === 'non-verifiee';
}

/** Libellé d'une information absente, selon qu'elle n'est pas publiée ou n'a pas pu être vérifiée. */
export function absent(c: Casino, genre: 'm' | 'f' | 'mp' | 'fp' = 'm'): string {
  const fin = { m: '', f: 'e', mp: 's', fp: 'es' }[genre];
  return inaccessible(c) ? `Non vérifié${fin}` : `Non publié${fin}`;
}

export function retraitsTexte(c: Casino): string {
  if (c.retraits) return c.retraits.resume;
  return inaccessible(c) ? 'Règles non vérifiées' : 'Règles non publiées';
}

export function operateurTexte(c: Casino): string {
  const o = c.operateur;
  if (!o.nom) return inaccessible(c) ? 'Non vérifié' : 'Non affiché';
  return `${o.nom}${o.registre ? ` (n°\u00a0${o.registre})` : ''}${o.pays ? `, ${o.pays}` : ''}`;
}

/**
 * Toutes les paires de comparaison. L'ordre dans l'adresse suit l'ordre du fichier
 * de données (et non le classement) pour que les adresses ne changent jamais.
 */
export function paires(): { slug: string; a: Casino; b: Casino }[] {
  const ordre = TOUS.filter((c) => c.actif);
  const res: { slug: string; a: Casino; b: Casino }[] = [];
  for (let i = 0; i < ordre.length; i++) {
    for (let j = i + 1; j < ordre.length; j++) {
      const a = ordre[i];
      const b = ordre[j];
      res.push({ slug: `${a.id}-vs-${b.id}`, a, b });
    }
  }
  return res;
}

export function paireParSlug(slug: string) {
  return paires().find((p) => p.slug === slug);
}
