import { AboutSplit } from "@/components/blocks/AboutSplit";
import { CTABand } from "@/components/blocks/CTABand";
import { Hero } from "@/components/blocks/Hero";
import { Metrics } from "@/components/blocks/Metrics";
import { ServicesRail } from "@/components/blocks/ServicesRail";
import { StatementReveal } from "@/components/blocks/StatementReveal";
import { Ticker } from "@/components/blocks/Ticker";
import { about, ctaBand, hero, metrics, products, services, statement } from "@/content/site";

export default function Home() {
  return (
    <>
      <Hero {...hero} products={products} />
      <Ticker items={[...products, "Start a project"]} href="/contact" />
      <AboutSplit id="about" {...about} />
      <ServicesRail id="services" eyebrow="What we do" headline="Five things we build" services={services} />
      <StatementReveal text={statement} />
      <Metrics items={metrics} />
      <CTABand {...ctaBand} />
    </>
  );
}
