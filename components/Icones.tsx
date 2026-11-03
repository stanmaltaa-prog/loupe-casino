export function LogoLoupe({ taille = 30 }: { taille?: number }) {
  return (
    <svg width={taille} height={taille} viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <circle cx="13.5" cy="13.5" r="9.5" fill="none" stroke="#1F5F6B" strokeWidth="3.4" />
      <circle cx="13.5" cy="13.5" r="4.2" fill="#F4B23E" />
      <path d="M20.6 20.6 L28 28" stroke="#10212B" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export function IconeVerifie() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
      <circle cx="10" cy="10" r="8.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M6 10.3 l2.6 2.6 L14.2 7.4" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
