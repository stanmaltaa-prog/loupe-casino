import Link from 'next/link';

export default function AideEn() {
  return (
    <aside className="encadre" aria-label="Help for players">
      <p className="encadre-titre">Gambling should stay entertainment</p>
      <p>
        Set a budget you can afford to lose, never gamble to pay off a debt and stop when it is no longer fun. Every province
        has a toll-free help line for players and their families:{' '}
        <Link href="/en-ca/responsible-gambling/">find yours here</Link>.
      </p>
    </aside>
  );
}
