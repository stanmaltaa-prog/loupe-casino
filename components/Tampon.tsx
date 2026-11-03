import { IconeVerifie } from './Icones';
import { dateLongue } from '@/lib/site';

export default function Tampon({ date, texte = 'Vérifié le' }: { date: string; texte?: string }) {
  return (
    <span className="tampon">
      <IconeVerifie />
      <span>
        {texte} <time dateTime={date}>{dateLongue(date)}</time>
      </span>
    </span>
  );
}
