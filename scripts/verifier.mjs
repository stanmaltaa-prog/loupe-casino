// Vérifie les données et le contenu avant chaque déploiement.
// Erreur = le déploiement est bloqué. Avertissement = à régler, mais le site se publie.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';

const racine = new URL('..', import.meta.url).pathname;
const erreurs = [];
const avertissements = [];

const LIENS_DE_REFERENCE = {
  rolletto: 'https://track.rollettoaffiliate.com/visit/?bta=42389&brand=rolletto&afp=simon',
  celsius: 'https://celsius.games/BODjXUCkAl',
  betportal: 'https://amliiink.com/g/vxcvg69',
  '1win': 'https://one-vv4934.com/casino/list?open=register&p=a0rb&sub1=simon'
};

const SOUS_PAGES = ['bonus', 'retrait', 'fiable', 'inscription'];
const CRITERES = ['transparence', 'bonus', 'retraits', 'produit', 'protection'];
const AUJOURDHUI = new Date();

function dateValide(iso) {
  return /^\d{4}-\d{2}-\d{2}$/.test(iso) && !Number.isNaN(new Date(iso).getTime());
}

function age(iso) {
  return Math.floor((AUJOURDHUI - new Date(iso)) / 86400000);
}

function httpsValide(url) {
  try {
    return new URL(url).protocol === 'https:';
  } catch {
    return false;
  }
}

// 1. Données des casinos
let donnees;
try {
  donnees = JSON.parse(readFileSync(join(racine, 'donnees/casinos.json'), 'utf8'));
} catch (e) {
  console.error('ERREUR : donnees/casinos.json est illisible :', e.message);
  process.exit(1);
}

const ids = new Set();
const slugs = new Set();
const actifs = donnees.casinos.filter((c) => c.actif);
if (actifs.length < 2) erreurs.push('Il faut au moins 2 casinos actifs.');

for (const c of donnees.casinos) {
  const n = c.nom || c.id || '(sans nom)';
  if (!c.id || ids.has(c.id)) erreurs.push(`${n} : identifiant manquant ou en double.`);
  ids.add(c.id);
  if (!/^[a-z0-9-]+$/.test(c.slug || '') || slugs.has(c.slug)) erreurs.push(`${n} : adresse (slug) invalide ou en double.`);
  slugs.add(c.slug);
  if (!httpsValide(c.lien)) erreurs.push(`${n} : lien d'affiliation invalide.`);
  if (LIENS_DE_REFERENCE[c.id] && LIENS_DE_REFERENCE[c.id] !== c.lien) {
    avertissements.push(`${n} : le lien d'affiliation a changé par rapport au lien de référence. Vérifiez qu'il est bien le vôtre.`);
  }
  for (const s of c.sousPages || []) if (!SOUS_PAGES.includes(s)) erreurs.push(`${n} : sous-page inconnue « ${s} ».`);
  if (c.sousPages?.includes('retrait') && !c.retraits) erreurs.push(`${n} : une page Retraits est demandée mais aucune donnée de retrait n'existe.`);

  for (const bloc of ['operateur', 'licence', 'offre', 'paiements']) {
    const b = c[bloc];
    if (!b) { erreurs.push(`${n} : bloc « ${bloc} » manquant.`); continue; }
    if (!httpsValide(b.source)) erreurs.push(`${n} : source manquante pour « ${bloc} ».`);
    if (!dateValide(b.verifieLe)) erreurs.push(`${n} : date de vérification invalide pour « ${bloc} ».`);
    else if (c.actif && age(b.verifieLe) > 31) avertissements.push(`${n} : « ${bloc} » vérifié il y a ${age(b.verifieLe)} jours. Revérifiez l'offre sur le site officiel.`);
  }
  if (c.retraits && ((!httpsValide(c.retraits.source) && c.retraits.source !== 'gestionnaire') || !dateValide(c.retraits.verifieLe))) erreurs.push(`${n} : source ou date manquante pour les retraits.`);

  if (!c.offre?.paliers?.length) erreurs.push(`${n} : l'offre n'a aucun palier.`);
  for (const cr of CRITERES) {
    const v = c.notes?.[cr];
    if (!v || typeof v.note !== 'number' || v.note < 0 || v.note > 10 || !v.raison) erreurs.push(`${n} : note « ${cr} » manquante ou hors de 0 à 10.`);
  }

  if (c.actif && c.quebec?.statut !== 'confirme') avertissements.push(`${n} : inscription depuis le Québec pas encore confirmée par écrit par le gestionnaire d'affiliation.`);
  if (c.actif && c.aConfirmer?.length) avertissements.push(`${n} : ${c.aConfirmer.length} point(s) à confirmer : ${c.aConfirmer.join(' ; ')}.`);
}

// 2. Mots interdits dans tout le contenu (conformité et honnêteté)
const INTERDITS = [
  [/\bvpn\b/i, 'aucune mention de VPN'],
  [/gains?\s+garanti/i, 'aucune promesse de gain'],
  [/sans\s+risque/i, 'le jeu comporte toujours un risque'],
  [/risque\s+z[ée]ro/i, 'le jeu comporte toujours un risque'],
  [/argent\s+facile/i, 'aucune promesse de gain'],
  [/nous\s+avons\s+test/i, 'nous n’affirmons pas avoir joué si ce n’est pas le cas'],
  [/\bstake\b/i, 'le 4e lien mène à BetPortal, pas à Stake']
];

function parcourir(dossier) {
  for (const nom of readdirSync(dossier)) {
    const chemin = join(dossier, nom);
    if (statSync(chemin).isDirectory()) parcourir(chemin);
    else if (['.ts', '.tsx', '.md', '.json'].includes(extname(nom))) {
      const texte = readFileSync(chemin, 'utf8');
      for (const [motif, raison] of INTERDITS) {
        if (motif.test(texte)) erreurs.push(`${chemin.replace(racine, '')} : expression interdite (${raison}).`);
      }
    }
  }
}
for (const d of ['app', 'components', 'lib', 'donnees']) parcourir(join(racine, d));

// 3. Réglages du site
if (!process.env.SITE_URL) avertissements.push('Variable SITE_URL absente : le domaine par défaut du fichier lib/site.ts sera utilisé.');
if (!process.env.SITE_COURRIEL) avertissements.push('Variable SITE_COURRIEL absente : la page Contact n’affichera pas d’adresse courriel.');
if (!process.env.SITE_RESPONSABLE) avertissements.push('Variable SITE_RESPONSABLE absente : la politique de confidentialité (Loi 25) doit nommer un responsable.');

// Résultat
console.log(`\nVérification Loupe Casino : ${actifs.length} casinos actifs.`);
if (avertissements.length) {
  console.log(`\n${avertissements.length} avertissement(s) :`);
  for (const a of avertissements) console.log(`  - ${a}`);
}
if (erreurs.length) {
  console.error(`\n${erreurs.length} erreur(s) bloquante(s) :`);
  for (const e of erreurs) console.error(`  - ${e}`);
  process.exit(1);
}
console.log('\nAucune erreur bloquante.\n');
