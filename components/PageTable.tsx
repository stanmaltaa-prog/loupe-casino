import Link from 'next/link';
import { notFound } from 'next/navigation';
import Guide from '@/components/Guide';
import Faq from '@/components/Faq';
import { Offres } from '@/components/RenduGuide';
import GrilleTables from '@/components/GrilleTables';
import GrilleJeux from '@/components/GrilleJeux';
import DemoJeu from '@/components/DemoJeu';
import Marque from '@/components/Marque';
import BoutonCasino, { MentionCta } from '@/components/BoutonCasino';
import { CASINOS } from '@/lib/casinos';
import { bandeauJeu } from '@/lib/images';
import { demoJeu } from '@/lib/demos';
import { meta } from '@/lib/seo';
import { dateLongue } from '@/lib/site';
import { typo } from '@/lib/typo';
import { MACHINES, dollars, type Machine } from '@/lib/contenu/machines';
import { FOURNISSEURS, cheminFournisseur } from '@/lib/contenu/fournisseurs';
import { RUBRIQUES, TABLES, cheminTable, parFamille, rtpTable, sourceRtpTable, tableJeu, type Famille, type TableJeu } from '@/lib/contenu/tables';

const MODIFIE = '2026-11-04';

function trouver(famille: Famille, slug: string): TableJeu | undefined {
  const t = tableJeu(slug);
  return t && t.famille === famille ? t : undefined;
}

/** Paramètres statiques d'une rubrique (une page par fiche, aucune autre adresse acceptée). */
export function paramsTables(famille: Famille) {
  return parFamille(famille).map((t) => ({ jeu: t.slug }));
}

export function metaTable(famille: Famille, slug: string) {
  const t = trouver(famille, slug);
  if (!t) return {};
  return meta({ titre: t.titre, description: t.description, chemin: cheminTable(t), type: 'article' });
}

function Ligne({ nom, valeur }: { nom: string; valeur: React.ReactNode }) {
  return (
    <tr>
      <th scope="row">{nom}</th>
      <td>{valeur}</td>
    </tr>
  );
}

const enDirect = (t: TableJeu) => !/RNG/.test(t.format);

export default function PageTable({ famille, slug }: { famille: Famille; slug: string }) {
  const t = trouver(famille, slug);
  if (!t) notFound();

  const rubrique = RUBRIQUES[t.famille];
  const chemin = cheminTable(t);
  const emplacement = `table-${t.slug}`;
  const visuel = bandeauJeu(t.slug);
  const demo = demoJeu(t.slug);
  const top = CASINOS[0];
  const direct = enDirect(t);
  const similaires = t.similaires.map((s) => tableJeu(s)).filter(Boolean) as TableJeu[];
  const machinesLiees = (t.machinesLiees || []).map((s) => MACHINES.find((m) => m.slug === s)).filter(Boolean) as Machine[];
  const mises = [1, 2, 5];
  const parties = 100;

  const dejaGratuit = t.faq.some((x) => /gratuit/i.test(x.q));
  const faq = [
    ...t.faq,
    ...(dejaGratuit
      ? []
      : [
          {
            q: typo(`Peut-on jouer à ${t.nom} gratuitement ?`),
            r: typo(
              demo
                ? `Oui. Le bouton de démo de cette page ouvre la version gratuite officielle sur le site de ${t.fournisseur}, avec des crédits fictifs. Les gains de la démo ne sont pas réels.`
                : `Non. ${t.nom} est un jeu en direct : chaque partie se joue en argent réel et il n'existe pas de démo officielle. Une fois inscrit, il est souvent possible d'ouvrir la table pour regarder quelques tours sans miser.`
            )
          }
        ]),
    {
      q: typo(`Peut-on prévoir les résultats de ${t.nom} ?`),
      r: typo(
        direct
          ? 'Non. Chaque tour est indépendant des précédents : ni l’historique, ni les statistiques, ni une méthode de mise ne changent la probabilité du prochain résultat.'
          : 'Non. Les cartes sont tirées par un générateur de nombres aléatoires certifié : chaque main est indépendante des précédentes.'
      )
    }
  ];

  const titreParticularites = t.famille === 'show' ? `Les bonus de ${t.nom}` : `Les règles particulières de ${t.nom}`;
  const titreTableau = t.famille === 'show' ? 'Les vraies probabilités de la roue' : `${t.nom} en chiffres`;

  const sommaire = [
    { id: 'fiche', titre: 'La fiche en bref' },
    ...(demo ? [{ id: 'demo', titre: 'Jouer gratuitement' }] : []),
    { id: 'regles', titre: 'Comment on joue' },
    { id: 'particularites', titre: t.famille === 'show' ? 'Les bonus' : 'Les règles particulières' },
    ...(t.tableau ? [{ id: 'chiffres', titre: t.famille === 'show' ? 'Les probabilités' : 'Les chiffres' }] : []),
    { id: 'rtp', titre: 'Le RTP et le budget' },
    { id: 'analyse', titre: 'Notre analyse' },
    { id: 'bonus-casino', titre: 'Bonus de casino' },
    { id: 'ou-jouer', titre: `Où jouer` },
    { id: 'faq-titre', titre: 'Questions fréquentes' }
  ];

  return (
    <Guide
      nom={t.nom}
      parent={{ nom: rubrique.nom, chemin: rubrique.chemin }}
      chemin={chemin}
      h1={t.h1}
      chapeau={t.chapeau}
      description={t.description}
      modifie={t.verifieLe > MODIFIE ? t.verifieLe : MODIFIE}
      sommaire={sommaire}
      emplacement={emplacement}
    >
      <div className="jeu-tete jeu-tete-portrait">
        {visuel ? (
          <img src={visuel.src} alt={`${t.nom}, ${t.fournisseur}`} width={300} height={420} className="jeu-tete-image" referrerPolicy="no-referrer" />
        ) : null}
        <div className="jeu-tete-infos">
          <ul className="puces-chiffres">
            <li>
              <span>RTP</span>
              <strong>{t.rtp === null ? 'n. c.' : rtpTable(t)}</strong>
            </li>
            <li>
              <span>Format</span>
              <strong>{direct ? 'En direct' : 'Numérique'}</strong>
            </li>
            <li>
              <span>Éditeur</span>
              <strong>{t.fournisseur.replace(' et ', ' / ')}</strong>
            </li>
          </ul>
          <div className="jeu-tete-actions">
            {demo ? (
              <a href="#demo" className="cta-secondaire cta-clair">
                ▶ Démo gratuite
              </a>
            ) : null}
            <BoutonCasino casino={top} emplacement={`${emplacement}-tete`} texte={`Jouer en argent réel chez ${top.nom}`} />
          </div>
          <p className="jeu-tete-credit">{visuel ? `Image : ${visuel.credit}` : ''} · 18+ · Lien commercial</p>
        </div>
      </div>

      <section aria-labelledby="fiche">
        <h2 id="fiche">La fiche en bref</h2>
        <div className="tableau-defilant">
          <table className="tableau-fiche">
            <caption className="sr-only">{typo(`Caractéristiques de ${t.nom}`)}</caption>
            <tbody>
              <Ligne
                nom="Éditeur"
                valeur={t.fournisseur.split(' et ').map((n, i) => {
                  const f = FOURNISSEURS.find((x) => x.nom === n);
                  return (
                    <span key={n}>
                      {i ? ' et ' : ''}
                      {f ? <Link href={cheminFournisseur(f)}>{n}</Link> : n}
                    </span>
                  );
                })}
              />
              <Ligne nom="Type de jeu" valeur={t.format} />
              <Ligne nom="Sortie" valeur={t.annee ?? 'Non confirmée'} />
              <Ligne nom="RTP" valeur={t.rtp === null ? 'Non publié par l’éditeur' : typo(`${rtpTable(t)} (${sourceRtpTable(t)})`)} />
              <Ligne nom="Gain maximal" valeur={t.gainMax || 'Non publié par l’éditeur'} />
              <Ligne nom="Mises" valeur="Fixées par chaque casino, affichées à l’ouverture de la table" />
              <Ligne nom="Démo gratuite" valeur={demo ? `Oui, sur le site de ${t.fournisseur}` : 'Non (jeu en argent réel uniquement)'} />
            </tbody>
          </table>
        </div>
        <p className="petit">
          {typo(
            `Informations vérifiées le ${dateLongue(t.verifieLe)} sur les sources listées en bas de page.${
              t.volume ? ` Recherches mensuelles au Canada : environ ${t.volume.toLocaleString('fr-CA')} (Ubersuggest).` : ''
            }`
          )}
        </p>
      </section>

      {demo ? (
        <section aria-labelledby="demo">
          <h2 id="demo">{typo(`Jouer gratuitement à ${t.nom}`)}</h2>
          <p>{typo(`Entraînez-vous avec la démo officielle, avec des crédits fictifs, avant de miser de l'argent réel. Sa disponibilité dépend de votre pays.`)}</p>
          <DemoJeu url={demo.url} urlMobile={demo.urlMobile} mode={demo.mode} editeur={t.fournisseur} nom={t.nom} poster={null} emplacement={emplacement} />
          <div className="encadre-cta">
            <Marque casino={top} />
            <div>
              <p className="encadre-cta-titre">{typo(`Envie de jouer à ${t.nom} pour de vrai ?`)}</p>
              <p className="petit">{top.offre.titre}</p>
            </div>
            <BoutonCasino casino={top} emplacement={`${emplacement}-demo`} texte="Voir l’offre" />
          </div>
          <MentionCta />
        </section>
      ) : null}

      <section aria-labelledby="regles">
        <h2 id="regles">{typo(`Comment on joue à ${t.nom}`)}</h2>
        {t.principe.map((p) => (
          <p key={p.slice(0, 50)}>{p}</p>
        ))}
        <ol>
          {t.etapes.map((e) => (
            <li key={e.slice(0, 50)}>{e}</li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="particularites">
        <h2 id="particularites">{typo(titreParticularites)}</h2>
        <ul className="liste-definitions">
          {t.particularites.map((p) => (
            <li key={p.nom}>
              <strong>{p.nom}</strong> : {p.texte}
            </li>
          ))}
        </ul>
      </section>

      {t.tableau ? (
        <section aria-labelledby="chiffres">
          <h2 id="chiffres">{typo(titreTableau)}</h2>
          <div className="tableau-defilant">
            <table>
              <caption>{t.tableau.legende}</caption>
              <thead>
                <tr>
                  {t.tableau.entetes.map((e) => (
                    <th scope="col" key={e}>
                      {e}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.tableau.lignes.map((l) => (
                  <tr key={l.join('|')}>
                    {l.map((c, i) =>
                      i === 0 ? (
                        <th scope="row" key={i}>
                          {c}
                        </th>
                      ) : (
                        <td key={i}>{c}</td>
                      )
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {t.tableau.note ? <p className="petit">{t.tableau.note}</p> : null}
        </section>
      ) : null}

      <section aria-labelledby="rtp">
        <h2 id="rtp">{typo(`Le RTP de ${t.nom} et le budget à prévoir`)}</h2>
        <p>
          {typo(
            "Le RTP (taux de retour au joueur) est la part des mises qu'un jeu rend en moyenne, sur un très grand nombre de parties. Il ne dit rien du résultat d'une session : c'est une moyenne, pas une promesse."
          )}
        </p>
        <p>{t.rtpNote}</p>
        {t.rtp !== null ? (
          <>
            <div className="tableau-defilant">
              <table>
                <caption>{typo(`${parties} parties de ${t.nom}, selon la mise (RTP de ${rtpTable(t)})`)}</caption>
                <thead>
                  <tr>
                    <th scope="col">Mise par partie</th>
                    <th scope="col">Total misé</th>
                    <th scope="col">Perte moyenne théorique</th>
                  </tr>
                </thead>
                <tbody>
                  {mises.map((mise) => (
                    <tr key={mise}>
                      <th scope="row">{dollars(mise)}</th>
                      <td>{dollars(mise * parties)}</td>
                      <td>{dollars(mise * parties * (1 - (t.rtp as number) / 100))}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="petit">
              {typo(
                t.famille === 'blackjack'
                  ? 'Au blackjack, ce taux suppose une stratégie de base parfaite : chaque erreur le fait baisser. Les mises secondaires ont leur propre RTP, plus faible.'
                  : 'Sur une vraie session, le résultat peut s’écarter fortement de cette moyenne, dans un sens comme dans l’autre.'
              )}
            </p>
          </>
        ) : null}
        <div className="encadre">
          <p className="encadre-titre">Où vérifier le RTP réel</p>
          <p>
            {typo(
              "Ouvrez la table, puis l'aide ou les règles du jeu (souvent un « i » ou un « ? ») : l'éditeur y indique le taux de retour de chaque mise. C'est le chiffre qui fait foi."
            )}
          </p>
        </div>
      </section>

      <section aria-labelledby="analyse">
        <h2 id="analyse">Notre analyse</h2>
        {t.analyse.map((p) => (
          <p key={p.slice(0, 50)}>{p}</p>
        ))}
        <div className="deux-colonnes" style={{ margin: '1.4em 0' }}>
          <div className="encadre encadre-bon">
            <p className="encadre-titre">Pour qui ?</p>
            <p>{t.pourQui}</p>
          </div>
          <div className="encadre encadre-alerte">
            <p className="encadre-titre">À surveiller</p>
            <p>{t.attention}</p>
          </div>
        </div>
      </section>

      <section aria-labelledby="bonus-casino">
        <h2 id="bonus-casino">{typo(`Bonus de casino et ${t.nom} : attention`)}</h2>
        <p>
          {typo(
            `Les bonus de bienvenue sont presque toujours pensés pour les machines à sous. Les jeux de table et les jeux en direct comptent souvent peu, ou pas du tout, pour la mise à compléter. Chez Rolletto, par exemple, la mise du bonus ne se complète que sur les machines à sous.`
          )}
        </p>
        <p>
          {typo(`Pour jouer à ${t.nom}, jouer sans bonus est souvent le plus simple : vos gains restent retirables sans condition de mise. Lisez notre `)}
          <Link href="/bonus-casino-quebec/">comparatif des bonus</Link>
          {typo(' et notre ')}
          <Link href="/conditions-de-mise/">guide des conditions de mise</Link>
          {typo(' avant d’accepter une offre.')}
        </p>
      </section>

      <section aria-labelledby="ou-jouer">
        <h2 id="ou-jouer">{typo(`Où jouer à ${t.nom}`)}</h2>
        <p>
          {typo(
            `Nous n'avons pas pu vérifier la présence de ${t.nom} dans le lobby de chaque casino. Une fois inscrit, cherchez le jeu par son nom dans la section ${direct ? 'casino en direct' : 'jeux de table'}, et lisez ses règles avant de miser.`
          )}
        </p>
        <Offres emplacement={emplacement} />
      </section>

      <Faq questions={faq} />

      <section aria-labelledby="similaires">
        <h2 id="similaires">Jeux similaires</h2>
        <GrilleTables jeux={similaires} />
        {machinesLiees.length ? (
          <>
            <p>{typo('La machine à sous d’origine :')}</p>
            <GrilleJeux jeux={machinesLiees} />
          </>
        ) : null}
        <p>
          <Link href={`${rubrique.chemin}#jeux`}>{typo(`Retour au guide ${rubrique.nom.toLowerCase()}`)}</Link>
          {' · '}
          <Link href="/jeux/#tables">{typo(`Les ${TABLES.length} jeux de table et en direct analysés`)}</Link>
        </p>
      </section>

      <section aria-labelledby="sources">
        <h2 id="sources">Sources</h2>
        <ul className="source">
          {t.sources.map((s) => (
            <li key={s.url}>
              <a href={s.url} rel="nofollow noopener" target="_blank">
                {s.titre}
              </a>
            </li>
          ))}
          {t.volume ? <li>{typo('Volumes de recherche : Ubersuggest, Canada, novembre 2026.')}</li> : null}
        </ul>
      </section>
    </Guide>
  );
}
