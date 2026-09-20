import type { Metadata } from "next";
import { AboutSplit } from "@/components/blocks/AboutSplit";
import { CTABand } from "@/components/blocks/CTABand";
import { ContactForm } from "@/components/blocks/ContactForm";
import { Hero } from "@/components/blocks/Hero";
import { LegalDoc } from "@/components/blocks/LegalDoc";
import { Metrics } from "@/components/blocks/Metrics";
import { ServicesRail } from "@/components/blocks/ServicesRail";
import { StatementReveal } from "@/components/blocks/StatementReveal";
import { Testimonials } from "@/components/blocks/Testimonials";
import { Ticker } from "@/components/blocks/Ticker";
import { MotionDemo } from "@/components/system/MotionDemo";
import { TokenSwatches } from "@/components/system/TokenSwatches";
import { TypeScale } from "@/components/system/TypeScale";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HoverSwapLink } from "@/components/ui/HoverSwapLink";
import { MediaReveal } from "@/components/ui/MediaReveal";
import { ScrollCue } from "@/components/ui/ScrollCue";
import { Section } from "@/components/ui/Section";
import { about, ctaBand, hero, metrics, products, services, statement, testimonialsSample } from "@/content/site";
import { accessibility } from "@/content/legal";
import { withBasePath } from "@/lib/utils";

export const metadata: Metadata = {
  title: "System — Oasis",
  robots: { index: false, follow: false },
};

function Label({ children }: { children: string }) {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-6">
      <p className="text-eyebrow text-ink-subtle border-b border-line pb-4">{children}</p>
    </div>
  );
}

export default function SystemPage() {
  return (
    <div className="flex flex-col">
      <Hero {...hero} products={products} />

      <Section lines>
        <Eyebrow className="mb-6">Design system</Eyebrow>
        <h1 className="text-display-l text-ink mb-6">Every token and block, on one page.</h1>
        <p className="text-body-l text-ink-muted max-w-2xl">Not linked from the site. Use it to review the kit, check motion, and copy pieces.</p>
      </Section>

      <Section lines>
        <h2 className="text-display-m text-ink mb-10">Color</h2>
        <TokenSwatches />
      </Section>

      <Section lines>
        <h2 className="text-display-m text-ink mb-4">Type</h2>
        <p className="text-body text-ink-muted mb-6">Inter Tight for everything. Hermione for the wordmark and metric numbers.</p>
        <TypeScale />
      </Section>

      <Section lines>
        <h2 className="text-display-m text-ink mb-10">Shape and elevation</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="rounded-sm hairline bg-card p-6 h-40 flex items-end"><p className="text-body-s text-ink-muted">sm 12px, inputs</p></div>
          <div className="rounded-md hairline bg-card p-6 h-40 flex items-end"><p className="text-body-s text-ink-muted">md 16px, cards</p></div>
          <div className="rounded-lg hairline bg-card p-6 h-40 flex items-end"><p className="text-body-s text-ink-muted">lg 20px, media</p></div>
          <div className="rounded-pill hairline bg-card p-6 h-40 flex items-end"><p className="text-body-s text-ink-muted">pill, buttons</p></div>
        </div>
        <div className="grid md:grid-cols-4 gap-6 mt-6">
          <div className="rounded-md hairline p-6 h-40 flex items-end"><p className="text-body-s text-ink-muted">0 hairline</p></div>
          <div className="rounded-md overflow-hidden relative h-40">
            <img src={withBasePath("/atmosphere/hero-grass.jpg")} alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-4 glass hairline-dark rounded-md p-4 flex items-end"><p className="text-body-s text-on-dark">1 glass</p></div>
          </div>
          <div className="rounded-md hairline bg-card p-6 h-40 flex items-end lift"><p className="text-body-s text-ink-muted">2 lift on hover</p></div>
          <div className="rounded-md bg-paper p-6 h-40 flex items-end shadow-[0_0_0_1px_var(--color-line),0_40px_80px_-40px_rgb(14_20_27/0.5)]"><p className="text-body-s text-ink-muted">3 overlay</p></div>
        </div>
      </Section>

      <Section lines>
        <h2 className="text-display-m text-ink mb-10">Motion</h2>
        <MotionDemo />
      </Section>

      <Section lines>
        <h2 className="text-display-m text-ink mb-10">Primitives</h2>
        <div className="flex flex-col gap-12">
          <div className="flex flex-wrap items-center gap-5">
            <Button>Primary</Button>
            <Button arrow>Primary arrow</Button>
            <Button size="lg" arrow>Primary large</Button>
            <Button variant="ghost" arrow href="#">Ghost link</Button>
          </div>
          <div className="rounded-lg bg-ink p-8 flex flex-wrap items-center gap-5">
            <Button variant="onDark">On dark</Button>
            <Button variant="onDark" arrow>On dark arrow</Button>
            <span className="text-paper"><HoverSwapLink href="#">Hover swap link</HoverSwapLink></span>
            <ScrollCue href="#" />
            <Badge>Glass badge</Badge>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <Eyebrow>Eyebrow on paper</Eyebrow>
            <Badge tone="light">Light badge</Badge>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <MediaReveal className="aspect-video">
              <img src={withBasePath("/work/cornerstone-site-home.jpg")} alt="" className="w-full h-full object-cover" />
            </MediaReveal>
            <div className="rounded-lg hairline bg-card p-8">
              <p className="text-heading mb-6">Contact form, light</p>
              <ContactForm products={products} tone="light" compact />
            </div>
          </div>
        </div>
      </Section>

      <Label>Ticker</Label>
      <Ticker items={[...products, "Start a project"]} />
      <Ticker items={[...products, "Start a project"]} tone="ink" speed={20} />

      <Label>AboutSplit</Label>
      <AboutSplit {...about} />

      <Label>ServicesRail</Label>
      <ServicesRail eyebrow="What we do" headline="Five things we build" services={services} />

      <Label>StatementReveal</Label>
      <StatementReveal text={statement} />

      <Label>Metrics, ink and paper</Label>
      <Metrics items={metrics} />
      <Metrics items={metrics} tone="paper" />

      <Label>Testimonials, sample copy</Label>
      <Testimonials eyebrow="Clients" headline="What they say" items={testimonialsSample} />

      <Label>CTABand</Label>
      <CTABand {...ctaBand} />

      <Label>LegalDoc</Label>
      <LegalDoc {...accessibility} />
    </div>
  );
}
