import { exempleMise, miseTexte, type Casino } from '@/lib/casinos';
import { montant } from '@/lib/site';

/** Exemple chiffré : ce qu'un dépôt de 100 au premier palier implique vraiment. */
export default function ExempleMise({ casino, depot = 100 }: { casino: Casino; depot?: number }) {
  const ex = exempleMise(casino, depot);
  if (!ex) {
    return (
      <div className="encadre encadre-alerte">
        <p className="encadre-titre">Exemple impossible à calculer honnêtement</p>
        <p>
          La condition de mise de {casino.nom} n&apos;a pas pu être confirmée. Lisez-la sur le site avant de déposer, puis
          testez-la dans notre calculateur.
        </p>
      </div>
    );
  }
  const d = ex.devise;
  return (
    <div className="carte">
      <p className="encadre-titre">
        Exemple : un dépôt de {montant(depot, d)} au premier palier
      </p>
      <dl className="faits" style={{ marginTop: 12 }}>
        <dt>Bonus reçu</dt>
        <dd>{montant(ex.bonus, d)}</dd>
        <dt>Condition de mise</dt>
        <dd>{miseTexte(casino)}</dd>
        <dt>Total à miser</dt>
        <dd>
          <strong>{montant(ex.aMiser, d)}</strong>
        </dd>
        {ex.parJour ? (
          <>
            <dt>Soit, par jour</dt>
            <dd>environ {montant(Math.round(ex.parJour), d)}</dd>
          </>
        ) : null}
        <dt>Perte moyenne théorique</dt>
        <dd>
          environ {montant(Math.round(ex.perteTheorique), d)}{' '}
          <span className="petit">(machines à sous à 96 % de taux de retour)</span>
        </dd>
      </dl>
      <p className="petit" style={{ marginTop: 10, marginBottom: 0 }}>
        La perte théorique est une moyenne statistique : le résultat réel d&apos;une session peut être bien meilleur ou bien
        pire. Elle sert à comparer les bonus entre eux, pas à prédire vos gains.
      </p>
    </div>
  );
}
