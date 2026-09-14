import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SplitText } from "@/components/ui/SplitText";

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export function Testimonials({ eyebrow, headline, items }: { eyebrow: string; headline: string; items: Testimonial[] }) {
  return (
    <Section lines>
      <div className="mb-14">
        <Reveal>
          <Eyebrow className="mb-5">{eyebrow}</Eyebrow>
        </Reveal>
        <SplitText as="h2" effect="rise" className="text-display-l text-ink">{headline}</SplitText>
      </div>
      <ul className="grid md:grid-cols-3 gap-6">
        {items.map((t, i) => (
          <Reveal as="li" key={i} delay={i * 0.08} className="rounded-md hairline bg-card p-8 lift flex flex-col justify-between gap-10">
            <p className="text-heading font-medium text-ink">&ldquo;{t.quote}&rdquo;</p>
            <div className="flex items-center gap-4">
              <span className="w-11 h-11 rounded-pill bg-oasis-green text-paper flex items-center justify-center text-sm font-semibold">
                {t.name.charAt(0)}
              </span>
              <div>
                <p className="font-medium text-ink">{t.name}</p>
                <p className="text-body-s text-ink-muted">{t.role}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
