import Link from 'next/link';
import FilAriane from '../FilAriane';
import Tampon from '../Tampon';
import Faq from '../Faq';
import JsonLd from '../JsonLd';
import BoutonCasino from '../BoutonCasino';
import Sections from '../Sections';
import FicheBoiteEn from './FicheBoiteEn';
import OngletsEn from './OngletsEn';
import AideEn from './AideEn';
import CollantEn from './CollantEn';
import MentionEn from './MentionEn';
import SignatureEn from './SignatureEn';
import { CASINOS, type Casino } from '@/lib/casinos';
import { cheminEn, depotMinEn, en, licenceEn, miseEn, operateurEn, retraitsEn } from '@/lib/en/casinos';
import { LEGIT_EN, RETRAIT_EN, type PageSujetEn } from '@/lib/en/sujets';
import { EN, MESSAGE_ZONE, dateEn } from '@/lib/en/site';
import { schemaPage } from '@/lib/seo';
import TestReelEn from './TestReelEn';

export type TypeSujet = 'legit' | 'withdrawal';

export function texteSujet(c: Casino, sujet: TypeSujet): PageSujetEn | undefined {
  return (sujet === 'legit' ? LEGIT_EN : RETRAIT_EN)[c.id];
}

/** Casinos that have an English page for this topic. */
export function casinosAvec(sujet: TypeSujet): Casino[] {
  return CASINOS.filter((c) => texteSujet(c, sujet));
}

/** "Is X legit?" and "X withdrawal" pages of the English section. */
export default function SujetEn({ c, sujet }: { c: Casino; sujet: TypeSujet }) {
  const x = texteSujet(c, sujet) as PageSujetEn;
  const t = en(c);
  const chemin = cheminEn(c, sujet);
  const verifie = sujet === 'withdrawal' && c.retraits ? c.retraits.verifieLe : c.licence.verifieLe;
  const modifie = [verifie, EN.verification].sort().pop() as string;
  const emplacement = `en-${sujet}-${c.id}`;
  const avecRetrait = casinosAvec('withdrawal');

  return (
    <>
      <FilAriane
        lang="en"
        elements={[
          { nom: `${c.nom} review`, chemin: cheminEn(c) },
          { nom: sujet === 'legit' ? 'Is it legit?' : 'Withdrawals', chemin }
        ]}
      />
      <div className="conteneur">
        <div className="fiche-tete">
          <div className="fiche-titre">
            <h1>{x.h1}</h1>
          </div>
          <div className="fiche-intro">
            {x.intro.map((p) => (
              <p key={p.slice(0, 40)} className="lecture">
                {p}
              </p>
            ))}
            <div className="heros-meta">
              <Tampon lang="en" date={verifie} />
              <SignatureEn />
            </div>
            <OngletsEn casino={c} actif={sujet} />
          </div>
          <FicheBoiteEn casino={c} emplacement={`${emplacement}-haut`} />
        </div>

        <div className="lecture prose">
          <p className="petit">{MESSAGE_ZONE}</p>
          <TestReelEn casino={c} />

          {sujet === 'legit' ? (
            <>
              <h2>The facts at a glance</h2>
              <dl className="faits">
                <dt>Operator</dt>
                <dd>{operateurEn(c)}</dd>
                <dt>Licence</dt>
                <dd>{licenceEn(c)}</dd>
                <dt>Canadian players</dt>
                <dd>{t.canada}</dd>
                <dt>Withdrawals</dt>
                <dd>{retraitsEn(c)}</dd>
                <dt>Checked on</dt>
                <dd>{dateEn(c.licence.verifieLe)}</dd>
              </dl>
            </>
          ) : t.retraits ? (
            <>
              <h2>What the general terms say</h2>
              <ul>
                {t.retraits.detail.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
              {c.retraits ? (
                <p className="petit">
                  Source:{' '}
                  <a href={c.retraits.source} rel="nofollow noopener" target="_blank">
                    {c.nom} general terms
                  </a>
                  , checked on {dateEn(c.retraits.verifieLe)}.
                </p>
              ) : null}
            </>
          ) : null}

          <Sections sections={x.sections} />

          {sujet === 'legit' ? (
            <>
              <h2>How transparent are the casinos we compare?</h2>
              <div className="tableau-defilant">
                <table>
                  <caption>Operator and licence as displayed on each casino&apos;s official pages.</caption>
                  <thead>
                    <tr>
                      <th scope="col">Casino</th>
                      <th scope="col">Operator</th>
                      <th scope="col">Licence</th>
                    </tr>
                  </thead>
                  <tbody>
                    {casinosAvec('legit').map((y) => (
                      <tr key={y.id}>
                        <th scope="row">
                          {y.id === c.id ? <strong>{y.nom}</strong> : <Link href={cheminEn(y, 'legit')}>{y.nom}</Link>}
                        </th>
                        <td>{operateurEn(y)}</td>
                        <td>{licenceEn(y)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            <>
              <h2>Withdrawal rules compared</h2>
              <div className="tableau-defilant">
                <table>
                  <caption>Withdrawal rules published by the casinos we compare.</caption>
                  <thead>
                    <tr>
                      <th scope="col">Casino</th>
                      <th scope="col">In short</th>
                    </tr>
                  </thead>
                  <tbody>
                    {CASINOS.map((y) => (
                      <tr key={y.id}>
                        <th scope="row">
                          {y.id === c.id ? (
                            <strong>{y.nom}</strong>
                          ) : avecRetrait.includes(y) ? (
                            <Link href={cheminEn(y, 'withdrawal')}>{y.nom}</Link>
                          ) : (
                            <Link href={cheminEn(y)}>{y.nom}</Link>
                          )}
                        </th>
                        <td>{retraitsEn(y)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                More on payout times: <Link href="/en-ca/fast-withdrawal-casinos/">fast withdrawal casinos in Canada</Link>.
              </p>
            </>
          )}

          <div className="carte centre" style={{ marginTop: 24 }}>
            <p className="offre-titre">{t.offre.titre}</p>
            <p className="offre-sous-titre">
              Wagering: {miseEn(c)}. Minimum deposit: {depotMinEn(c)}.
            </p>
            <BoutonCasino casino={c} emplacement={`${emplacement}-bas`} texte={`Visit ${c.nom}`} />
            <MentionEn />
          </div>

          <Faq questions={x.faq} titre={sujet === 'legit' ? `Is ${c.nom} legit? FAQ` : `${c.nom} withdrawal FAQ`} />
          <p>
            The full picture, bonus included: <Link href={cheminEn(c)}>our {c.nom} review</Link>.
          </p>
          <AideEn />
        </div>
      </div>
      <CollantEn casino={c} emplacement={`${emplacement}-collant`} />
      <JsonLd
        donnees={schemaPage({ titre: x.h1, description: x.description, chemin, publie: EN.verification, modifie, type: 'Article', langue: EN.langue })}
      />
    </>
  );
}
