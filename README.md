# Loupe Casino

Comparatif des casinos en ligne accessibles au Québec. Next.js 14 (App Router), entièrement statique sauf la redirection `/go/`.

- **Mise en ligne pas à pas :** voir [`LANCEMENT.md`](./LANCEMENT.md).
- **Toutes les offres et tous les faits :** `donnees/casinos.json` (une source et une date par bloc).
- **Nom, domaine, coordonnées :** `lib/site.ts` et les variables `SITE_URL`, `SITE_COURRIEL`, `SITE_RESPONSABLE`.
- **Textes des avis :** `lib/contenu/` (un fichier par casino, plus `duels.ts` pour les comparatifs).

## Commandes

```bash
npm install
npm run dev        # site local sur http://localhost:3000
npm run verifier   # contrôle des données et du contenu
npm run build      # contrôle + build de production
npm start          # serveur de production (port $PORT)
node scripts/typo-source.mjs   # espaces insécables après avoir écrit du texte dans une page .tsx
```

## Organisation

```
app/                     pages (une route = un dossier)
  [casino]/              avis de chaque casino
  [casino]/[sujet]/      bonus, retrait, fiable, inscription
  comparatif/[duel]/     duels entre deux casinos
  go/[marque]/route.ts   redirection vers le lien d'affiliation + journal des clics
components/              composants d'interface
donnees/casinos.json     données vérifiées
lib/casinos.ts           types, note globale, classement
lib/contenu/             textes éditoriaux
lib/seo.ts               balises meta et données structurées
lib/typo.ts              typographie française
scripts/verifier.mjs     contrôle avant chaque build (bloque en cas d'erreur)
```

## Garde-fous automatiques

`scripts/verifier.mjs` tourne avant chaque build. Il bloque la publication si une source ou une date manque, si une note sort de 0 à 10, ou si une expression interdite apparaît (promesse de gain, « sans risque », mention de VPN, etc.). Il avertit quand une vérification a plus de 31 jours, quand un lien d'affiliation a changé ou quand un point reste à confirmer.

## SEO technique

- Pages statiques, HTML complet au premier chargement, aucun témoin de suivi.
- Adresses stables avec barre finale, balise canonique sur chaque page, `lang="fr-CA"`.
- Données structurées : Organization, WebSite, BreadcrumbList, Review, ItemList, FAQPage, Article.
- `sitemap.xml` et `robots.txt` générés ; `/go/` exclu de l'indexation (`noindex` + `robots.txt`).
- Liens sortants marqués `rel="sponsored nofollow"`.
