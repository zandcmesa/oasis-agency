export function ScrollCue({ href = "#about", label = "Scroll to explore" }: { href?: string; label?: string }) {
  return (
    <a href={href} className="cue inline-flex items-center gap-4 text-eyebrow text-on-dark-muted hover:text-paper transition-colors duration-[var(--dur-fast)]">
      <span className="w-10 h-10 rounded-pill hairline-dark flex items-center justify-center overflow-hidden">
        <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" aria-hidden="true">
          <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      {label}
    </a>
  );
}
