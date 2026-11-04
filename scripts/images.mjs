/**
 * Télécharge les images officielles des jeux (donnees/images.json) et les convertit en WebP
 * dans public/jeux/. Lancé avant chaque build. Ne bloque jamais le build : une image
 * introuvable est simplement remplacée sur le site par l'adresse d'origine ou une tuile de secours.
 */
import fs from 'node:fs';
import path from 'node:path';

const racine = process.cwd();
const dossier = path.join(racine, 'public', 'jeux');
const { jeux } = JSON.parse(fs.readFileSync(path.join(racine, 'donnees', 'images.json'), 'utf8'));
fs.mkdirSync(dossier, { recursive: true });

let sharp = null;
try {
  sharp = (await import('sharp')).default;
} catch {
  console.log('Images : sharp indisponible, les images resteront en lien direct.');
}

async function telecharger(url) {
  const ctrl = new AbortController();
  const minuteur = setTimeout(() => ctrl.abort(), 15000);
  try {
    const r = await fetch(url, { signal: ctrl.signal, headers: { 'User-Agent': 'Mozilla/5.0 (compatible; LoupeCasinoBot/1.0)' } });
    if (!r.ok) throw new Error(`statut ${r.status}`);
    return Buffer.from(await r.arrayBuffer());
  } finally {
    clearTimeout(minuteur);
  }
}

let ok = 0;
let echecs = 0;
for (const [slug, e] of Object.entries(jeux)) {
  for (const [role, largeur, suffixe] of [
    ['vignette', 640, ''],
    ['bandeau', 1600, '-bandeau']
  ]) {
    const url = e[role];
    if (!url || !sharp) continue;
    const cible = path.join(dossier, `${slug}${suffixe}.webp`);
    if (fs.existsSync(cible)) {
      ok++;
      continue;
    }
    try {
      const brut = await telecharger(url);
      await sharp(brut).resize({ width: largeur, withoutEnlargement: true }).webp({ quality: 80 }).toFile(cible);
      ok++;
    } catch (err) {
      echecs++;
      console.log(`Images : ${slug}${suffixe} non récupérée (${err.message}).`);
    }
  }
}
console.log(`Images : ${ok} prêtes, ${echecs} en lien direct.`);
