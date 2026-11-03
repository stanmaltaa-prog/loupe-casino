// Applique la typographie française (espaces insécables) aux textes écrits directement
// dans les pages et composants (.tsx). À relancer après avoir rédigé du nouveau texte :
//   node scripts/typo-source.mjs
// Le contenu des fichiers de données et de lib/contenu est traité automatiquement au rendu (lib/typo.ts).
import ts from 'typescript';
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const racine = new URL('..', import.meta.url).pathname;
const NBSP = ' ';
const FINE = ' ';

function typo(s) {
  return s
    .replace(/(\d) (?=\d{3}(?!\d))/g, `$1${FINE}`)
    .replace(/(\d) (?=[$%€£])/g, `$1${NBSP}`)
    .replace(/(\d) (?=(fois|jours?|tours?|ans|heures|h|mois|semaines?|USDT|mBTC|casinos|cryptomonnaies|dépôts?|critères)\b)/g, `$1${NBSP}`)
    .replace(/ :/g, `${NBSP}:`)
    .replace(/ ([;?!])/g, `${FINE}$1`)
    .replace(/« /g, `«${NBSP}`)
    .replace(/ »/g, `${NBSP}»`);
}

const ATTRIBUTS_EXCLUS = new Set(['className', 'href', 'rel', 'target', 'type', 'id', 'key', 'emplacement', 'src', 'lang', 'dateTime', 'role', 'inputMode', 'chemin', 'actif', 'weight', 'viewBox', 'd', 'points', 'transform', 'strokeDasharray', 'path', 'style', 'width', 'height']);

function exclu(noeud) {
  let p = noeud.parent;
  while (p) {
    if (ts.isImportDeclaration(p) || ts.isExportDeclaration(p)) return true;
    if (ts.isJsxAttribute(p)) return ATTRIBUTS_EXCLUS.has(p.name.getText());
    if (ts.isPropertyAssignment(p)) return ATTRIBUTS_EXCLUS.has(p.name.getText());
    if (ts.isJsxElement(p) || ts.isJsxSelfClosingElement(p) || ts.isBlock(p)) return false;
    p = p.parent;
  }
  return false;
}

function traiter(fichier) {
  const source = readFileSync(fichier, 'utf8');
  const sf = ts.createSourceFile(fichier, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const remplacements = [];
  function visiter(n) {
    const estTexte =
      ts.isJsxText(n) ||
      ts.isStringLiteral(n) ||
      ts.isNoSubstitutionTemplateLiteral(n) ||
      ts.isTemplateHead(n) ||
      ts.isTemplateMiddle(n) ||
      ts.isTemplateTail(n);
    if (estTexte && !exclu(n)) {
      const debut = n.getStart(sf);
      const fin = n.getEnd();
      const brut = source.slice(debut, fin);
      const nouveau = typo(brut);
      if (nouveau !== brut) remplacements.push([debut, fin, nouveau]);
    }
    ts.forEachChild(n, visiter);
  }
  visiter(sf);
  if (!remplacements.length) return 0;
  let resultat = source;
  for (const [d, f, t] of remplacements.sort((a, b) => b[0] - a[0])) resultat = resultat.slice(0, d) + t + resultat.slice(f);
  writeFileSync(fichier, resultat);
  return remplacements.length;
}

function parcourir(dossier) {
  let total = 0;
  for (const nom of readdirSync(dossier)) {
    const chemin = join(dossier, nom);
    if (statSync(chemin).isDirectory()) total += parcourir(chemin);
    else if (nom.endsWith('.tsx')) {
      const n = traiter(chemin);
      if (n) console.log(`${chemin.replace(racine, '')} : ${n} texte(s) corrigé(s)`);
      total += n;
    }
  }
  return total;
}

const total = parcourir(join(racine, 'app')) + parcourir(join(racine, 'components'));
console.log(`Typographie : ${total} correction(s).`);
