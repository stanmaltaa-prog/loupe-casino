import { IconeVerifie } from './Icones';
import { dateLongue } from '@/lib/site';
import { dateEn } from '@/lib/en/site';

export default function Tampon({ date, texte, lang = 'fr' }: { date: string; texte?: string; lang?: 'fr' | 'en' }) {
  return (
    <span className="tampon">
      <IconeVerifie />
      <span>
        {texte || (lang === 'en' ? 'Checked on' : 'Vérifié le')}{' '}
        <time dateTime={date}>{lang === 'en' ? dateEn(date) : dateLongue(date)}</time>
      </span>
    </span>
  );
}
