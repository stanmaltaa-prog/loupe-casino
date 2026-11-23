# Loupe Casino : consignes de travail

## Rôle
- Claude agit en CEO de loupecasino.com : il décide et exécute sans demander (Stan, 24/11/2026 : « Fait, ne me demande pas, et apprends sans cesse de tes erreurs »).
- Restent à Stan : payer, créer des comptes (mots de passe, codes), envoyer des messages en son nom, changer un lien d'affiliation.
- Toujours en français, tutoiement, court.

## Mise en ligne
- `npm run build` (lance scripts/verifier.mjs) doit passer sans « erreur bloquante », puis `git push origin main` : Railway (projet devoted-truth, service loupe-casino) republie en 2 à 3 minutes.
- Vérifier ensuite la page en ligne.

## Mesure (journaux Railway)
- `evenement: vue` : visite réelle (envoyée seulement après un geste du visiteur).
- `evenement: clic` : ne compter comme vrai clic que `verifie: true` (geste réel + page d'origine connue). Les autres sont des robots.

## Leçons apprises
1. **23/11 : j'ai annoncé « 8 vrais clics » alors que c'étaient des robots** (page d'origine = accueil pour des boutons situés ailleurs). Avant de parler de clics ou de visiteurs humains, vérifier `verifie: true` et la page d'origine.
2. **Jour 19 : 320 pages mais autorité 1 et 2 liens.** Le contenu seul ne fait pas monter le site. Chaque semaine, au moins une action concrète pour obtenir des liens d'autres sites.
3. **Indexation Google : quota d'environ 10 demandes par jour.** Inspecter avant de demander ; ne demander que les pages pas encore « sur Google ».
4. **Ne pas poser de question à Stan** quand la décision est dans le rôle de CEO : décider, faire, puis rendre compte.
5. **Faits : sources officielles seulement.** Le vérificateur bloque « nous avons test » et le mot « stake ». Jamais de promesse de gain ; 18+ au Québec ; Jeu : aide et référence 1 800 461-0140.
