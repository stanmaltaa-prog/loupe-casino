import type { Casino } from '@/lib/casinos';
import { exempleEn, miseEn } from '@/lib/en/casinos';

/** Worked example: what a deposit of 100 at the first tier really means. */
export default function ExempleEn({ casino, depot = 100 }: { casino: Casino; depot?: number }) {
  const ex = exempleEn(casino, depot);
  if (!ex) {
    return (
      <div className="encadre encadre-alerte">
        <p className="encadre-titre">No honest example possible</p>
        <p>
          We could not confirm the {casino.nom} wagering requirement. Read it on the site before you deposit: without it,
          any example would be a guess.
        </p>
      </div>
    );
  }
  return (
    <div className="carte">
      <p className="encadre-titre">Example: a {ex.f(depot)} deposit at the first tier</p>
      <dl className="faits" style={{ marginTop: 12 }}>
        <dt>Bonus received</dt>
        <dd>{ex.f(ex.bonus)}</dd>
        <dt>Wagering</dt>
        <dd>{miseEn(casino)}</dd>
        <dt>Total to wager</dt>
        <dd>
          <strong>{ex.f(ex.aMiser)}</strong>
        </dd>
        {ex.parJour ? (
          <>
            <dt>Per day</dt>
            <dd>about {ex.f(ex.parJour)}</dd>
          </>
        ) : null}
        <dt>Average theoretical loss</dt>
        <dd>
          about {ex.f(ex.perte)} <span className="petit">(slots with a 96% return to player)</span>
        </dd>
      </dl>
      <p className="petit" style={{ marginTop: 10, marginBottom: 0 }}>
        The theoretical loss is a statistical average: a real session can end much better or much worse. It is there to
        compare bonuses with each other, not to predict your results.
      </p>
    </div>
  );
}
