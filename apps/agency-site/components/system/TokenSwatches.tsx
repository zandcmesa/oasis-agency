const colors = [
  ["paper", "#F6F1EA", "bg-paper", "Background"],
  ["ink", "#0E141B", "bg-ink", "Text, dark surfaces"],
  ["oasis-green", "#1A5C4A", "bg-oasis-green", "Brand accent, CTAs"],
  ["soft-clay", "#C4A484", "bg-soft-clay", "Warm secondary, dividers"],
  ["spring", "#8FCDB0", "bg-spring", "Accent on dark"],
  ["ink-muted", "ink 70%", "bg-ink-muted", "Secondary text"],
  ["ink-subtle", "ink 50%", "bg-ink-subtle", "Tertiary text"],
  ["line", "ink 12%", "bg-line", "Hairlines on paper"],
  ["line-dark", "white 22%", "bg-line-dark", "Hairlines on ink or video"],
  ["card", "white 55%", "bg-card", "Card surface on paper"],
];

export function TokenSwatches() {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {colors.map(([name, value, cls, use]) => (
        <li key={name} className="rounded-md hairline overflow-hidden bg-card">
          <div className={`h-24 ${cls} ${name === "line" || name === "card" ? "border-b border-line" : ""}`} />
          <div className="p-4">
            <p className="font-medium text-ink">{name}</p>
            <p className="text-body-s text-ink-muted font-mono">{value}</p>
            <p className="text-body-s text-ink-subtle mt-1">{use}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
