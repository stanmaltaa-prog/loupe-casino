'use client';

import { useEffect } from 'react';

/** Met la langue du document à jour dans la section anglaise (la balise <html> vient de la mise en page commune). */
export default function LangueDocument({ langue }: { langue: string }) {
  useEffect(() => {
    const avant = document.documentElement.lang;
    document.documentElement.lang = langue;
    return () => {
      document.documentElement.lang = avant;
    };
  }, [langue]);
  return null;
}
