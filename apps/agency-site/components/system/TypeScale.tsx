const steps = [
  ["display-xl", "clamp(3rem, 7.5vw, 7.5rem) / 0.95 / -0.03em / 600", "Hero"],
  ["display-l", "clamp(2.5rem, 5vw, 5rem) / 1 / -0.025em / 600", "Section headlines"],
  ["display-m", "clamp(2rem, 3.5vw, 3.25rem) / 1.05 / -0.02em / 600", "Card titles"],
  ["heading", "clamp(1.375rem, 1.8vw, 1.75rem) / 1.2 / -0.01em / 600", "Sub-headlines, quotes"],
  ["body-l", "1.25rem / 1.5", "Lead paragraphs"],
  ["body", "1.0625rem / 1.6", "Default"],
  ["body-s", "0.9375rem / 1.5", "Captions, meta"],
  ["eyebrow", "0.75rem / 0.12em / uppercase / 500", "Labels"],
  ["metric", "clamp(2.5rem, 4vw, 4.5rem) / 1 / tabular", "Numbers"],
];

export function TypeScale() {
  return (
    <ul className="flex flex-col divide-y divide-line">
      {steps.map(([name, spec, use]) => (
        <li key={name} className="py-8 grid lg:grid-cols-12 gap-6 items-baseline">
          <div className="lg:col-span-3">
            <p className="font-medium text-ink">{name}</p>
            <p className="text-body-s text-ink-muted font-mono">{spec}</p>
            <p className="text-body-s text-ink-subtle">{use}</p>
          </div>
          <p className={`lg:col-span-9 text-${name} text-ink`}>
            {name === "metric" ? "16 5 100%" : "Cutting-edge tech + design"}
          </p>
        </li>
      ))}
      <li className="py-8 grid lg:grid-cols-12 gap-6 items-baseline">
        <div className="lg:col-span-3">
          <p className="font-medium text-ink">wordmark</p>
          <p className="text-body-s text-ink-muted font-mono">Fraunces 600 / clamp(6rem, 24vw, 30rem)</p>
          <p className="text-body-s text-ink-subtle">Footer only</p>
        </div>
        <p className="lg:col-span-9 text-wordmark text-ink leading-none">Oasis</p>
      </li>
    </ul>
  );
}
