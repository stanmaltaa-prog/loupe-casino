import type { Casino } from '@/lib/casinos';
import { absentEn, depotMinEn, en, miseEn } from '@/lib/en/casinos';

/** The essential terms, always shown next to the offer. */
export default function ConditionsEn({ casino }: { casino: Casino }) {
  return (
    <dl className="conditions">
      <div>
        <dt>Wagering</dt>
        <dd>{miseEn(casino)}</dd>
      </div>
      <div>
        <dt>Minimum deposit</dt>
        <dd>{depotMinEn(casino)}</dd>
      </div>
      <div>
        <dt>Maximum bet</dt>
        <dd>{en(casino).offre.miseMax || absentEn(casino)}</dd>
      </div>
    </dl>
  );
}
