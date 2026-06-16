// Mono section label with an optional index number and a square accent block.
export default function Eyebrow({ children, number, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 font-mono text-xs font-medium uppercase tracking-[0.18em] text-ink/60 ${className}`}
    >
      <span className="inline-block h-2.5 w-2.5 flex-none bg-gradient-to-br from-cobalt to-flare" />
      {number ? <span className="text-cobalt">{number}</span> : null}
      {children}
    </span>
  );
}
