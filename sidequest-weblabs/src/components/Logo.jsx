// Brand mark: a flat cobalt tile with a lime quest-marker diamond, plus the
// wordmark. tone 'light' renders the wordmark in paper for use on dark bands.
export default function Logo({ withText = true, tone = 'dark', className = '' }) {
  const wordmark = tone === 'light' ? 'text-white' : 'text-ink';
  const sub = tone === 'light' ? 'text-white/60' : 'text-soft';
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 64 64" className="h-9 w-9 flex-none" fill="none" aria-hidden="true">
        <rect width="64" height="64" rx="14" fill="#2e2bb0" />
        <path d="M32 15 L47 32 L32 49 L17 32 Z" fill="#d4ec52" />
        <circle cx="32" cy="32" r="5.2" fill="#f4f1e9" />
      </svg>
      {withText ? (
        <span className={`font-display text-lg font-extrabold tracking-tight ${wordmark}`}>
          Sidequest <span className={sub}>Weblabs</span>
        </span>
      ) : null}
    </span>
  );
}
