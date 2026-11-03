# Mise en ligne de Loupe Casino, pas à pas

Ce guide part de zéro. Compte environ 1 h la première fois, sans compter l'attente du domaine.

---

## Étape 0 : à confirmer AVANT la mise en ligne (bloquant)

Le site n'affiche que des faits vérifiés sur les sites officiels. Ces points n'ont pas pu l'être et doivent être confirmés **par écrit** par chaque gestionnaire d'affiliation :

| Casino | À demander |
|---|---|
| Tous | « Acceptez-vous les joueurs résidant au Québec ? » |
| Tous | Les montants sont-ils en dollars canadiens ? Interac est-il accepté ? |
| Celsius | Le plafond en $ de chaque palier (100 % puis 200 %). Le numéro de la licence d'Anjouan. |
| Celsius | Le lien `celsius.games/BODjXUCkAl` est-il bien rattaché à **ton** compte ? (Tes campagnes Blue2 connues sont `hftHTOZApx` et `BELLEJDciY`.) |
| 1win | Condition de mise, délai, plafond de chaque palier. Société exploitante et licence. |
| BetPortal | Société exploitante, numéro de licence, délai de mise, dépôt minimum, devise pour le Canada. |
| Rolletto | Plafonds et délais de retrait. |
| Rolletto et 1win | Les liens contiennent `afp=simon` et `sub1=simon` : vérifier que les gains arrivent sur le bon compte. |

**Rappel :** le 4e lien (`amliiink.com/g/vxcvg69`) mène à **BetPortal**, pas à Stake.

Quand un point est confirmé, mets à jour `donnees/casinos.json` (voir « Mettre à jour une offre » plus bas). Quand l'acceptation du Québec est confirmée, passe `"quebec": { "statut": "confirme" }` pour ce casino.

---

## Étape 1 : acheter le domaine

1. Achète **loupecasino.com** chez le registraire de ton choix (Namecheap, Cloudflare, OVH, etc.).
2. Achète aussi **casinoloupe.com** si tu veux protéger la marque : tu le redirigeras vers loupecasino.com (étape 5).

Si tu prends un autre nom, change-le dans `lib/site.ts` (une seule ligne : `nom`) et dans la variable `SITE_URL` sur Railway.

---

## Étape 2 : mettre le code sur GitHub

1. Va sur github.com, clique sur **New repository**.
2. Nom : `loupe-casino`. Coche **Private**. Ne coche rien d'autre. Clique sur **Create repository**.
3. Sur la page qui s'affiche, clique sur **uploading an existing file**.
4. Glisse **tout le contenu** du dossier décompressé (pas le dossier lui-même), sauf `node_modules` et `.next` s'ils existent.
5. Clique sur **Commit changes**.

---

## Étape 3 : déployer sur Railway

1. Sur railway.com, clique sur **New Project**, puis **Deploy from GitHub repo**, puis choisis `loupe-casino`.
2. Avant le premier déploiement, ouvre le service, onglet **Variables**, et ajoute :

| Variable | Valeur |
|---|---|
| `SITE_URL` | `https://loupecasino.com` |
| `SITE_COURRIEL` | l'adresse de contact publique du site (ex. `contact@loupecasino.com`) |
| `SITE_RESPONSABLE` | le nom et le titre de la personne responsable des renseignements personnels (Loi 25), ex. `Stan X, responsable de la protection des renseignements personnels` |

3. Railway détecte Next.js tout seul : il lance `npm run build` puis `npm start`. Aucune autre configuration.
4. Le build commence par une vérification automatique des données. S'il affiche **« erreur bloquante »**, le site ne se publie pas : lis le message, il dit quoi corriger. Les **« avertissements »** n'empêchent pas la publication.

---

## Étape 4 : brancher le domaine

1. Dans Railway, service > **Settings** > **Networking** > **Custom Domain**, tape `loupecasino.com`.
2. Railway affiche un enregistrement DNS à créer (type **CNAME** ou **ALIAS**, avec une valeur du genre `xxxx.up.railway.app`).
3. Chez ton registraire, dans la zone DNS du domaine, crée exactement cet enregistrement. Fais pareil pour `www` si tu l'ajoutes aussi dans Railway.
4. Attends que Railway affiche le domaine en vert (de quelques minutes à quelques heures). Le certificat HTTPS est automatique.

---

## Étape 5 : rediriger casinoloupe.com

Chez le registraire de casinoloupe.com, active une **redirection permanente (301)** vers `https://loupecasino.com`. Ne mets aucun contenu sur ce domaine.

---

## Étape 6 : Google Search Console et Bing

1. Va sur search.google.com/search-console, **Ajouter une propriété** > **Domaine** > `loupecasino.com`.
2. Google te donne un enregistrement **TXT** : ajoute-le dans la zone DNS, puis clique sur **Valider**.
3. Menu **Sitemaps** : ajoute `sitemap.xml` et envoie.
4. Menu **Inspection de l'URL** : colle l'adresse de la page d'accueil puis de chaque avis casino, et clique sur **Demander l'indexation** (une dizaine de pages par jour maximum).
5. Va sur bing.com/webmasters et choisis **Importer depuis Google Search Console** : deux clics, et Bing est réglé aussi.

---

## Mettre à jour une offre (à faire au moins une fois par mois)

Le site promet une revérification mensuelle : c'est un engagement affiché sur la page « Notre méthode ».

1. Ouvre le site officiel du casino et relis l'offre et ses conditions.
2. Sur GitHub, ouvre `donnees/casinos.json`, clique sur le crayon (modifier).
3. Change les chiffres qui ont bougé, puis la date `"verifieLe"` du bloc modifié (format `AAAA-MM-JJ`).
4. Mets aussi à jour `derniereVerification` dans `lib/site.ts`.
5. Clique sur **Commit changes**. Railway republie le site tout seul en 2 à 3 minutes.

Le build affiche un avertissement quand une vérification a plus de 31 jours.

**Retirer un casino en urgence** : dans `donnees/casinos.json`, passe `"actif": true` à `"actif": false`. Il disparaît de toutes les pages, du classement et du plan du site au déploiement suivant.

**Ne modifie jamais un lien d'affiliation** (`"lien"`) sans l'accord écrit du gestionnaire.

---

## Voir les clics vers les casinos

Railway > service > **Deployments** > **View logs**, puis filtre sur `clic`. Chaque ligne indique le casino, l'emplacement du bouton (ex. `accueil-classement`, `avis-rolletto-collant`) et la page d'origine. Compare avec les inscriptions dans chaque tableau de bord d'affiliation pour savoir quels emplacements convertissent.

---

## Le plan des 30 premiers jours

**Semaine 1 : indexation**
- Étapes 1 à 6 terminées, sitemap envoyé, pages principales soumises à l'indexation.
- Crée les profils de marque au nom de Loupe Casino (X, Facebook, Instagram, TikTok, LinkedIn, Reddit) avec un lien vers le site. Ils renforcent la reconnaissance du nom par Google.

**Semaine 2 : premiers liens**
- Vise 5 à 10 liens depuis des sites québécois ou francophones liés au divertissement, à la finance personnelle ou au jeu.
- Mélange des textes de lien : environ 50 % le nom « Loupe Casino », 20 % l'adresse nue, 20 % des formules génériques (« ce comparatif », « ici »), 10 % au maximum de mots-clés exacts.
- Le calculateur de conditions de mise (`/conditions-de-mise/`) est la page la plus facile à faire citer : propose-la aux forums et aux créateurs.

**Semaine 3 : tes créateurs**
- Demande à tes influenceurs d'ajouter le lien du site (pas seulement le lien du casino) dans leurs bios et descriptions : c'est du trafic de marque et des liens.
- Ajoute un vrai auteur au site (prénom, nom, photo, courte biographie) sur la page « À propos » : c'est un signal de confiance fort pour Google sur ce secteur.

**Semaine 4 : mesurer et ajuster**
- Dans Search Console, regarde les requêtes avec beaucoup d'impressions et peu de clics : retravaille le titre de ces pages.
- Revérifie les quatre offres et mets les dates à jour.
- N'ajoute de nouvelles pages (Interac, retraits rapides, machines à sous, etc.) que lorsque tu as des faits vérifiés pour les remplir.

---

## Règles à ne jamais enfreindre

- Aucun contenu destiné aux moins de 18 ans.
- Aucune promesse de gain, aucune fausse urgence (compte à rebours, « plus que 2 places »).
- Les conditions essentielles (mise, délai, dépôt minimum) restent toujours affichées à côté de l'offre.
- Le numéro de Jeu : aide et référence reste visible sur toutes les pages.
- Aucun conseil pour contourner une restriction géographique.
- Le classement suit la note. Si tu changes une note, change aussi sa justification (`"raison"`) pour qu'elle reste vraie.

---

## À surveiller : le cadre légal pourrait changer

Pendant la campagne de 2026, le Parti libéral a proposé un régime d'accréditation des sites de jeu en ligne, et le Parti québécois, élu le 5 octobre 2026, s'est dit favorable à un marché encadré. Si le Québec adopte un modèle à l'ontarienne, les affiliés pourraient n'avoir le droit de promouvoir que des sites autorisés. Surveille l'actualité et fais valider toute évolution par ton juriste.
