import Link from 'next/link';
import { notFound } from 'next/navigation';
import Guide from '@/components/Guide';
import Faq from '@/components/Faq';
import { Offres } from '@/components/RenduGuide';
import { meta } from '@/lib/seo';
import { dateLongue } from '@/lib/site';
import { typo } from '@/lib/typo';
import { fournisseur, cheminFournisseur } from '@/lib/contenu/fournisseurs';
import {
  MACHINES,
  machine,
  cheminMachine,
  pct,
  fois,
  dollars,
  sourceRtp,
  titreMachine,
  descriptionMachine,
  type Machine
} from '@/lib/contenu/machines';

export const dynamicParams = false;

export function generateStaticParams() {
  return MACHINES.map((m) => ({ jeu: m.slug }));
}

export function generateMetadata({ params }: { params: { jeu: string } }) {
  const m = machine(params.jeu);
  if (!m) return {};
  return meta({ titre: titreMachine(m), description: descriptionMachine(m), chemin: cheminMachine(m), type: 'article' });
}

const MODIFIE = '2026-11-04';
const PARENT = { nom: 'Machines à sous', chemin: '/machines-a-sous/' };

const SENS_VOLATILITE: Record<Machine['volatilite'], string> = {
  Faible: 'Les gains sont fréquents mais petits, et les grosses séries sans gain sont rares.',
  'Faible à moyenne': 'Les gains sont assez fréquents, avec des écarts limités d’une session à l’autre.',
  Moyenne: 'Le jeu alterne petits gains réguliers et gains plus rares mais plus importants.',
  'Moyenne à élevée': 'Les séries sans gain peuvent être longues, et l’essentiel du potentiel se joue dans le bonus.',
  Élevée: 'Les longues séries sans gain sont normales : la plupart des tours rapportent peu ou rien, et l’essentiel se joue sur de rares gros gains.'
};

const TOURS_CONSEILLES: Record<Machine['volatilite'], number> = {
  Faible: 100,
  'Faible à moyenne': 100,
  Moyenne: 100,
  'Moyenne à élevée': 150,
  Élevée: 200
};

function Ligne({ nom, valeur }: { nom: string; valeur: React.ReactNode }) {
  return (
    <tr>
      <th scope="row">{nom}</th>
      <td>{valeur}</td>
    </tr>
  );
}

export default function PageMachine({ params }: { params: { jeu: string } }) {
  const m = machine(params.jeu);
  if (!m) notFound();

  const f = m.fournisseurId ? fournisseur(m.fournisseurId) : undefined;
  const chemin = cheminMachine(m);
  const emplacement = `machine-${m.slug}`;
  const versions = [m.rtp, ...m.rtpAutres];
  const pire = Math.min(...versions);
  const ecart = m.rtp - pire;
  const tours = TOURS_CONSEILLES[m.volatilite];
  const mises = [0.2, 0.5, 1];
  const similaires = m.similaires.map((s) => machine(s)).filter(Boolean) as Machine[];

  const faq = [
    ...m.faq,
    {
      q: typo(`Quelle est la volatilité de ${m.nom} ?`),
      r: typo(`${m.volatilite}. ${SENS_VOLATILITE[m.volatilite]}`)
    },
    {
      q: typo(`Peut-on prévoir quand ${m.nom} va payer ?`),
      r: typo(
        "Non. Chaque tour est tiré au hasard par un générateur de nombres aléatoires, indépendamment des tours précédents. Une machine n'est jamais « due » pour payer, et aucune méthode ni aucun horaire ne change vos chances."
      )
    }
  ];

  const sommaire = [
    { id: 'fiche', titre: 'La fiche en bref' },
    { id: 'analyse', titre: 'Notre analyse' },
    { id: 'rtp', titre: 'Le RTP et ses versions' },
    { id: 'budget', titre: 'Quel budget prévoir' },
    { id: 'ou-jouer', titre: `Où jouer à ${m.nom}` },
    { id: 'faq-titre', titre: 'Questions fréquentes' },
    { id: 'similaires', titre: 'Jeux similaires' }
  ];

  return (
    <Guide
      nom={m.nom}
      parent={PARENT}
      chemin={chemin}
      h1={typo(`${m.nom} : RTP, volatilité et fonctionnement de la machine à sous`)}
      chapeau={typo(
        `${m.nom} est une machine à sous ${m.fournisseur}${m.studio ? ` (studio ${m.studio})` : ''} sortie en ${m.annee}. Voici ses vrais chiffres, le fonctionnement de ses bonus et le budget à prévoir avant de jouer.`
      )}
      description={descriptionMachine(m)}
      modifie={MODIFIE}
      sommaire={sommaire}
      emplacement={emplacement}
    >
      <section aria-labelledby="fiche">
        <h2 id="fiche">La fiche en bref</h2>
        <div className="tableau-defilant">
          <table className="tableau-fiche">
            <caption className="sr-only">{typo(`Caractéristiques de ${m.nom}`)}</caption>
            <tbody>
              <Ligne
                nom="Fournisseur"
                valeur={
                  f ? (
                    <>
                      <Link href={cheminFournisseur(f)}>{m.fournisseur}</Link>
                      {m.studio ? typo(` (studio ${m.studio})`) : null}
                    </>
                  ) : (
                    <>
                      {m.fournisseur}
                      {m.studio ? typo(` (studio ${m.studio})`) : null}
                    </>
                  )
                }
              />
              <Ligne nom="Sortie" valeur={m.annee} />
              <Ligne nom="RTP" valeur={typo(`${pct(m.rtp)} (${sourceRtp(m)})`)} />
              <Ligne
                nom="Autres versions de RTP"
                valeur={m.rtpAutres.length ? m.rtpAutres.map(pct).join(' · ') : 'Non publiées dans nos sources'}
              />
              <Ligne nom="Volatilité" valeur={m.volatilite} />
              <Ligne nom="Gain maximal" valeur={m.gainMax ? typo(`${fois(m.gainMax)} la mise`) : 'Non confirmé (sources divergentes)'} />
              <Ligne nom="Grille" valeur={m.grille} />
              <Ligne nom="Gains" valeur={m.gains} />
              <Ligne nom="Tours gratuits" valeur={m.toursGratuits} />
              {m.multiplicateurs ? <Ligne nom="Multiplicateurs" valeur={m.multiplicateurs} /> : null}
              <Ligne nom="Achat de bonus" valeur={m.achatBonus || 'Non signalé dans nos sources'} />
              <Ligne nom="Thème" valeur={m.theme} />
            </tbody>
          </table>
        </div>
        <p className="petit">
          {typo(`Chiffres vérifiés le ${dateLongue(m.verifieLe)} sur les sources listées en bas de page. Recherches mensuelles au Canada : environ ${m.volume.toLocaleString('fr-CA')} (Ubersuggest).`)}
        </p>
      </section>

      <section aria-labelledby="analyse">
        <h2 id="analyse">Notre analyse</h2>
        {m.analyse.map((p) => (
          <p key={p.slice(0, 50)}>{p}</p>
        ))}
        <div className="deux-colonnes" style={{ margin: '1.4em 0' }}>
          <div className="encadre encadre-bon">
            <p className="encadre-titre">Pour qui ?</p>
            <p>{m.pourQui}</p>
          </div>
          <div className="encadre encadre-alerte">
            <p className="encadre-titre">À surveiller</p>
            <p>{m.attention}</p>
          </div>
        </div>
      </section>

      <section aria-labelledby="rtp">
        <h2 id="rtp">{typo(`Le RTP de ${m.nom} et ses versions`)}</h2>
        <p>
          {typo(
            `Le RTP (taux de retour au joueur) est la part des mises que la machine rend en moyenne sur des millions de tours. Selon la ${sourceRtp(m)}, ${m.nom} affiche un RTP de ${pct(m.rtp)} dans sa meilleure version.`
          )}
        </p>
        {m.rtpAutres.length ? (
          <>
            <p>
              {typo(
                `Le casino choisit la version qu'il installe. Entre la meilleure et la moins bonne version recensées, l'écart est de ${ecart.toLocaleString('fr-CA', { maximumFractionDigits: 2 })} points : sur 1 000 $ misés au total, cela représente environ ${dollars(ecart * 10)} de retour théorique en moins.`
              )}
            </p>
            <div className="tableau-defilant">
              <table>
                <caption>{typo('Retour théorique pour 1 000 $ misés au total')}</caption>
                <thead>
                  <tr>
                    <th scope="col">Version</th>
                    <th scope="col">Retour moyen</th>
                    <th scope="col">Perte moyenne</th>
                  </tr>
                </thead>
                <tbody>
                  {versions.map((v, i) => (
                    <tr key={v}>
                      <th scope="row">{typo(`${pct(v)}${i === 0 ? ' (meilleure)' : ''}`)}</th>
                      <td>{dollars(v * 10)}</td>
                      <td>{dollars(1000 - v * 10)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <p>
            {typo(
              "Nos sources ne publient pas d'autre version de RTP pour ce jeu. Les fournisseurs en proposent pourtant souvent plusieurs aux casinos : le chiffre réellement appliqué reste celui de l'écran d'aide du jeu."
            )}
          </p>
        )}
        <div className="encadre">
          <p className="encadre-titre">Comment vérifier le RTP avant de jouer</p>
          <p>
            {typo(
              "Lancez le jeu, ouvrez l'écran d'aide ou d'information (souvent un « i » ou un menu) et cherchez « RTP » ou « taux de retour ». Si le chiffre affiché est plus bas que la meilleure version, le même jeu rendra moins en moyenne sur ce casino."
            )}
          </p>
        </div>
      </section>

      <section aria-labelledby="budget">
        <h2 id="budget">Quel budget prévoir</h2>
        <p>
          {typo(
            `Avec une volatilité ${m.volatilite.toLowerCase()}, nous conseillons de prévoir au moins ${tours} tours. Voici ce que cela représente selon la mise, et la perte moyenne théorique calculée avec le RTP de ${pct(m.rtp)}.`
          )}
        </p>
        <div className="tableau-defilant">
          <table>
            <caption>{typo(`${tours} tours de ${m.nom}, selon la mise`)}</caption>
            <thead>
              <tr>
                <th scope="col">Mise par tour</th>
                <th scope="col">Total misé</th>
                <th scope="col">Perte moyenne théorique</th>
              </tr>
            </thead>
            <tbody>
              {mises.map((mise) => (
                <tr key={mise}>
                  <th scope="row">{dollars(mise)}</th>
                  <td>{dollars(mise * tours)}</td>
                  <td>{dollars(mise * tours * (1 - m.rtp / 100))}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          {typo(
            `Ce n'est qu'une moyenne sur un très grand nombre de tours. ${SENS_VOLATILITE[m.volatilite]} Sur une session réelle, le résultat peut s'écarter fortement de ce chiffre, dans un sens comme dans l'autre.`
          )}
        </p>
        {m.gainMax ? (
          <p>
            {typo(
              `Le gain maximal de ${fois(m.gainMax)} la mise est un plafond théorique, atteint très rarement : avec une mise de 0,50 $, il correspondrait à ${dollars(m.gainMax * 0.5)}.`
            )}
          </p>
        ) : null}
        <p>
          Pour calculer ce qu&apos;un bonus de bienvenue vous oblige à miser, utilisez notre{' '}
          <Link href="/conditions-de-mise/">guide des conditions de mise</Link>.
        </p>
      </section>

      <section aria-labelledby="ou-jouer">
        <h2 id="ou-jouer">{typo(`Où jouer à ${m.nom}`)}</h2>
        <p>
          {typo(
            `Nous n'avons pas pu vérifier la présence de ${m.nom} dans le lobby de chaque casino. Une fois inscrit, cherchez le jeu par son nom et vérifiez son RTP dans l'aide du jeu avant de miser.`
          )}
        </p>
        {m.fournisseurId === 'pragmatic-play' ? (
          <p>{typo("Celsius affiche 675 jeux Pragmatic Play selon l'opérateur.")}</p>
        ) : null}
        <Offres emplacement={emplacement} />
      </section>

      <Faq questions={faq} />

      <section aria-labelledby="similaires">
        <h2 id="similaires">Jeux similaires</h2>
        <ul className="grille-liens">
          {similaires.map((s) => (
            <li key={s.slug}>
              <Link href={cheminMachine(s)}>
                <strong>{s.nom}</strong>
                <span>{typo(`${s.fournisseur} · RTP ${pct(s.rtp)} · volatilité ${s.volatilite.toLowerCase()}`)}</span>
              </Link>
            </li>
          ))}
        </ul>
        <p>
          <Link href="/machines-a-sous/#classement">Voir le classement des 40 machines à sous</Link>
          {f ? (
            <>
              {' · '}
              <Link href={cheminFournisseur(f)}>{typo(`Tous les jeux ${f.nom} analysés`)}</Link>
            </>
          ) : null}
        </p>
      </section>

      <section aria-labelledby="sources">
        <h2 id="sources">Sources</h2>
        <ul className="source">
          {m.sources.map((s) => (
            <li key={s.url}>
              <a href={s.url} rel="nofollow noopener" target="_blank">
                {s.titre}
              </a>
            </li>
          ))}
          <li>{typo('Volumes de recherche : Ubersuggest, Canada, novembre 2026.')}</li>
        </ul>
      </section>
    </Guide>
  );
}
