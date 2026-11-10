/**
 * IndexNow : prévient Bing (et les autres moteurs qui suivent IndexNow) des pages
 * modifiées depuis moins de 2 jours, une minute après chaque démarrage du site sur Railway.
 * La clé est publiée dans public/6857dbc3637fa117d4b9d9c6b31b96f6.txt : ne pas supprimer ce fichier.
 * Rien n'est envoyé hors de Railway (tests locaux) ni si INDEXNOW=off.
 */
const CLE = '6857dbc3637fa117d4b9d9c6b31b96f6';
const HOTE = 'loupecasino.com';
const JOURS = 2;
const port = process.env.PORT || 3000;
const surRailway = Boolean(process.env.RAILWAY_ENVIRONMENT || process.env.RAILWAY_ENVIRONMENT_NAME || process.env.RAILWAY_PROJECT_ID);

if (surRailway && process.env.INDEXNOW !== 'off') {
  setTimeout(async () => {
    try {
      const plan = await (await fetch(`http://127.0.0.1:${port}/sitemap.xml`)).text();
      const limite = Date.now() - JOURS * 86400000;
      const pages = [...plan.matchAll(/<url>([\s\S]*?)<\/url>/g)]
        .map((m) => ({ loc: (m[1].match(/<loc>([^<]+)<\/loc>/) || [])[1], mod: (m[1].match(/<lastmod>([^<]+)<\/lastmod>/) || [])[1] }))
        .filter((p) => p.loc && p.mod && Date.parse(p.mod) >= limite)
        .map((p) => p.loc);
      if (!pages.length) return console.log('[indexnow] aucune page modifiée récemment');
      const r = await fetch('https://api.indexnow.org/indexnow', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify({ host: HOTE, key: CLE, keyLocation: `https://${HOTE}/${CLE}.txt`, urlList: pages.slice(0, 10000) })
      });
      console.log(`[indexnow] ${pages.length} page(s) envoyée(s), réponse ${r.status}`);
    } catch (e) {
      console.log('[indexnow] échec :', e.message);
    }
  }, 60000);
}
