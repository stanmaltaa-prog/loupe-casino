/** Données structurées schema.org, échappées avant injection dans la page. */
export default function JsonLd({ donnees }: { donnees: object | object[] }) {
  const json = JSON.stringify(donnees).replace(/</g, '\\u003c');
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
