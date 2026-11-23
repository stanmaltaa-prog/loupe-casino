'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const GESTES = ['scroll', 'pointerdown', 'keydown', 'touchstart'] as const;

/**
 * Mesure sans cookie : une visite n'est comptée qu'après un vrai geste du visiteur,
 * et un clic vers un casino est marqué « h=1 » quand il vient d'un vrai doigt ou d'une vraie souris.
 * Les robots qui appellent directement les liens /go/ n'ont pas cette marque.
 */
export default function Mesure() {
  const chemin = usePathname();

  useEffect(() => {
    let envoye = false;
    const vue = () => {
      if (envoye) return;
      envoye = true;
      GESTES.forEach((g) => window.removeEventListener(g, vue));
      try {
        const corps = JSON.stringify({ page: window.location.pathname });
        if (!navigator.sendBeacon?.('/api/vue/', corps)) {
          fetch('/api/vue/', { method: 'POST', body: corps, keepalive: true }).catch(() => undefined);
        }
      } catch {
        /* la mesure ne doit jamais gêner la page */
      }
    };
    GESTES.forEach((g) => window.addEventListener(g, vue, { passive: true, once: true }));
    return () => GESTES.forEach((g) => window.removeEventListener(g, vue));
  }, [chemin]);

  useEffect(() => {
    const marquer = (e: Event) => {
      const cible = e.target instanceof Element ? e.target.closest('a[href*="/go/"]') : null;
      if (!(cible instanceof HTMLAnchorElement)) return;
      if (e instanceof KeyboardEvent && e.key !== 'Enter') return;
      if (!/[?&]h=1\b/.test(cible.href)) cible.href += (cible.href.includes('?') ? '&' : '?') + 'h=1';
    };
    document.addEventListener('pointerdown', marquer, true);
    document.addEventListener('keydown', marquer, true);
    return () => {
      document.removeEventListener('pointerdown', marquer, true);
      document.removeEventListener('keydown', marquer, true);
    };
  }, []);

  return null;
}
