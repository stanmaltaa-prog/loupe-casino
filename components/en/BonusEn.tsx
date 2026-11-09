import Link from 'next/link';
import FilAriane from '../FilAriane';
import Tampon from '../Tampon';
import Faq from '../Faq';
import JsonLd from '../JsonLd';
import BoutonCasino from '../BoutonCasino';
import FicheBoiteEn from './FicheBoiteEn';
import OngletsEn from './OngletsEn';
import PaliersEn from './PaliersEn';
import ExempleEn from './ExempleEn';
import AideEn from './AideEn';
import CollantEn from './CollantEn';
import MentionEn from './MentionEn';
import SignatureEn from './SignatureEn';
import { CASINOS, type Casino } from '@/lib/casinos';
import { absentEn, cheminEn, depotMinEn, en, miseEn } from '@/lib/en/casinos';
import { EN, MESSAGE_ZONE, dateEn } from '@/lib/en/site';
import { schemaPage } from '@/lib/seo';

export function textesBonus(c: Casino) {
  const t = en(c);
  return {
    titre: `${c.nom} Bonus ${EN.verification.slice(0, 4)}: Wagering and Terms Explained`,
    description: [
      `${c.nom} welcome bonus: ${t.offre.titre}. Wagering ${miseEn(c)}, minimum deposit, maximum bet and a worked example.`,
      `${c.nom} bonus: ${t.offre.titre}. Wagering ${miseEn(c)}, minimum deposit, maximum bet and a worked example.`,
      `${c.nom} bonus: ${t.offre.titre}. Wagering ${miseEn(c)} and a worked example.`
    ].find((d) => d.length <= 155) as string,
    h1: `${c.nom} bonus: ${t.offre.titre.charAt(0).toLowerCase()}${t.offre.titre.slice(1)}`
  };
}

export default function BonusEn({ c }: { c: Casino }) {
  const t = en(c);
  const x = textesBonus(c);
  const chemin = cheminEn(c, true);
  const modifie = [c.offre.verifieLe, EN.verification].sort().pop() as string;
  return (
    <>
      <FilAriane lang="en" elements={[{ nom: `${c.nom} review`, chemin: cheminEn(c) }, { nom: 'Bonus', chemin }]} />
      <div className="conteneur">
        <div className="fiche-tete">
          <div className="fiche-titre">
            <h1>{x.h1}</h1>
          </div>
          <div className="fiche-intro">
            {t.bonusIntro.map((p) => (
              <p key={p.slice(0, 40)} className="lecture">
                {p}
              </p>
            ))}
            <div className="heros-meta">
              <Tampon lang="en" date={c.offre.verifieLe} texte="Offer checked on" />
              <SignatureEn />
            </div>
            <OngletsEn casino={c} actif="bonus" />
          </div>
          <FicheBoiteEn casino={c} emplacement={`en-bonus-${c.id}-haut`} />
        </div>

        <div className="lecture prose">
          <p className="petit">{MESSAGE_ZONE}</p>

          <h2>The bonus tiers</h2>
          <PaliersEn casino={c} />

          <h2>The official terms</h2>
          <dl className="faits">
            <dt>Wagering</dt>
            <dd>{miseEn(c)}</dd>
            <dt>Minimum deposit</dt>
            <dd>{depotMinEn(c)}</dd>
            <dt>Maximum bet</dt>
            <dd>{t.offre.miseMax || absentEn(c)}</dd>
            <dt>Eligible games</dt>
            <dd>{t.offre.jeuxAdmissibles || absentEn(c)}</dd>
            {t.offre.activation ? (
              <>
                <dt>Activation</dt>
                <dd>{t.offre.activation}</dd>
              </>
            ) : null}
            <dt>Source</dt>
            <dd>
              <a href={c.offre.source} rel="nofollow noopener" target="_blank">
                Official promotions page
              </a>
              , checked on {dateEn(c.offre.verifieLe)}
            </dd>
          </dl>
          {t.offre.autres.length ? (
            <>
              <h3>Other terms to know</h3>
              <ul>
                {t.offre.autres.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </>
          ) : null}

          <h2>What the wagering means in practice</h2>
          <p>
            Wagering is the total amount you must bet before bonus money can be withdrawn. It matters more than the size of the
            bonus: a big bonus with a short deadline can be harder to clear than a small one.
          </p>
          <ExempleEn casino={c} />

          {t.autresOffres.length ? (
            <>
              <h2>Other {c.nom} offers</h2>
              <ul>
                {t.autresOffres.map((o) => (
                  <li key={o.titre}>
                    <strong>{o.titre}:</strong> {o.detail}
                  </li>
                ))}
              </ul>
            </>
          ) : null}

          <h2>How it compares</h2>
          <div className="tableau-defilant">
            <table>
              <caption>Welcome bonuses of the casinos we compare, from their official pages.</caption>
              <thead>
                <tr>
                  <th scope="col">Casino</th>
                  <th scope="col">Offer</th>
                  <th scope="col">Wagering</th>
                  <th scope="col">Minimum deposit</th>
                </tr>
              </thead>
              <tbody>
                {CASINOS.map((y) => (
                  <tr key={y.id}>
                    <th scope="row">
                      {y.id === c.id ? <strong>{y.nom}</strong> : <Link href={cheminEn(y, true)}>{y.nom}</Link>}
                    </th>
                    <td>{en(y).offre.titre}</td>
                    <td>{miseEn(y)}</td>
                    <td>{depotMinEn(y)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            More on reading bonus terms: <Link href="/en-ca/casino-bonuses/">casino bonuses in Canada</Link>.
          </p>

          <div className="carte centre" style={{ marginTop: 24 }}>
            <p className="offre-titre">{t.offre.titre}</p>
            <p className="offre-sous-titre">
              Wagering: {miseEn(c)}. Minimum deposit: {depotMinEn(c)}.
            </p>
            <BoutonCasino casino={c} emplacement={`en-bonus-${c.id}-bas`} texte={`Get the ${c.nom} bonus`} />
            <MentionEn />
          </div>

          <Faq questions={t.faqBonus} titre={`${c.nom} bonus FAQ`} />
          <p>
            The full picture, licence and withdrawals included: <Link href={cheminEn(c)}>our {c.nom} review</Link>.
          </p>
          <AideEn />
        </div>
      </div>
      <CollantEn casino={c} emplacement={`en-bonus-${c.id}-collant`} />
      <JsonLd donnees={schemaPage({ titre: x.h1, description: x.description, chemin, publie: EN.publication, modifie, type: 'Article', langue: EN.langue })} />
    </>
  );
}
