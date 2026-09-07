import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/Button";
import { HeroAtmosphere } from "@/components/HeroAtmosphere";
import { withBasePath } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative px-6 lg:px-8 min-h-[80vh] flex items-end pb-12 overflow-hidden">
        <HeroAtmosphere />
        <div
          className="absolute inset-0 pointer-events-none -z-[5]"
          style={{
            background:
              "linear-gradient(to top, rgba(14, 20, 27, 0.55) 0%, rgba(14, 20, 27, 0.15) 40%, transparent 70%)",
          }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <FadeIn>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.1] text-paper mb-6 tracking-tight">
              AI agent teams that pick up the phone, follow up on leads, and protect your reputation
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-xl sm:text-2xl text-paper/80 mb-8 max-w-4xl leading-relaxed">
              We build custom automation for service businesses — after-hours coverage, instant lead response, and review management that runs 24/7.
            </p>
          </FadeIn>
          <FadeIn delay={0.25}>
            <Button href="/contact">Start a project</Button>
          </FadeIn>
        </div>
      </section>

      {/* Products Section */}
      <section className="px-6 lg:px-8 py-16 lg:py-20 border-y border-soft-clay/30">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-soft-clay text-xs font-medium tracking-wider uppercase mb-4">
              What we do
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl font-semibold text-ink mb-8 tracking-tight">
              Phase 1 AI agent teams
            </h2>
            <p className="text-xl text-ink/70 mb-12 lg:mb-16 max-w-4xl">
              We build custom automation systems that solve the problems keeping you up at night — missed calls, slow follow-ups, and reputation risk.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
            <FadeIn delay={0.1}>
              <div className="border-l-4 border-oasis-green pl-6">
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-ink mb-3">
                  After-hours coverage
                </h3>
                <p className="text-base text-ink/70 leading-relaxed">
                  Phone and missed-call fallback when your team can't answer. Never lose a lead to a competitor who picked up.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="border-l-4 border-oasis-green pl-6">
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-ink mb-3">
                  Instant lead response
                </h3>
                <p className="text-base text-ink/70 leading-relaxed">
                  Form and inquiry follow-up in seconds, not hours. Speed wins deals — we make you faster than anyone calling you back tomorrow.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="border-l-4 border-oasis-green pl-6">
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-ink mb-3">
                  Review & reputation help
                </h3>
                <p className="text-base text-ink/70 leading-relaxed">
                  Automated outreach to happy customers. More 5-star reviews, less manual chasing. Protect what you've built.
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.25}>
            <div className="border-t border-soft-clay/30 pt-12">
              <p className="text-soft-clay text-xs font-medium tracking-wider uppercase mb-6">
                Also available
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <h4 className="font-display text-lg font-semibold text-ink mb-1">
                    Websites
                  </h4>
                  <p className="text-sm text-ink/60">
                    Custom-built. Headless. Modern tech.
                  </p>
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold text-ink mb-1">
                    Social media content
                  </h4>
                  <p className="text-sm text-ink/60">
                    Strategy + execution. On-brand.
                  </p>
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold text-ink mb-1">
                    Promotional video
                  </h4>
                  <p className="text-sm text-ink/60">
                    B-roll production. Premium craft.
                  </p>
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold text-ink mb-1">
                    Digital strategy
                  </h4>
                  <p className="text-sm text-ink/60">
                    SEO, search optimization, consulting.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Proof Section */}
      <section className="px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-soft-clay text-xs font-medium tracking-wider uppercase mb-4">
              Recent work
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl font-semibold text-ink mb-12 lg:mb-16 tracking-tight">
              Real proof
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Cornerstone Website */}
            <FadeIn delay={0.1}>
              <Link href="/work" className="group block">
                <div className="border border-soft-clay/30 rounded-2xl overflow-hidden hover:border-oasis-green/50 transition-colors">
                  <div className="aspect-video relative bg-soft-clay/20">
                    <Image
                      src={withBasePath("/work/cornerstone-site-home.jpg")}
                      alt="Cornerstone Church website homepage"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-semibold text-ink mb-1 group-hover:text-oasis-green transition-colors">
                      Cornerstone Church
                    </h3>
                    <p className="text-sm text-ink/60">
                      Website · Sermon search · Planning Center
                    </p>
                  </div>
                </div>
              </Link>
            </FadeIn>

            {/* Cornerstone Social Content */}
            <FadeIn delay={0.15}>
              <Link href="/work" className="group block">
                <div className="border border-soft-clay/30 rounded-2xl overflow-hidden hover:border-oasis-green/50 transition-colors">
                  <div className="aspect-[9/16] relative bg-soft-clay/20 max-h-[400px]">
                    <Image
                      src={withBasePath("/work/cornerstone-clip-01.jpg")}
                      alt="Cornerstone Church sermon clip"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-semibold text-ink mb-1 group-hover:text-oasis-green transition-colors">
                      Cornerstone Church
                    </h3>
                    <p className="text-sm text-ink/60">
                      Social content · Weekly clips
                    </p>
                  </div>
                </div>
              </Link>
            </FadeIn>

            {/* Foster the City Video */}
            <FadeIn delay={0.2}>
              <Link href="/work" className="group block">
                <div className="border border-soft-clay/30 rounded-2xl overflow-hidden hover:border-oasis-green/50 transition-colors">
                  <div className="aspect-video relative bg-soft-clay/20">
                    <video
                      controls
                      playsInline
                      preload="metadata"
                      poster={withBasePath("/work/foster-the-city-still.jpg")}
                      className="w-full h-full object-cover"
                      src={withBasePath("/work/foster-the-city-launch.mp4")}
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-semibold text-ink mb-1 group-hover:text-oasis-green transition-colors">
                      Foster the City
                    </h3>
                    <p className="text-sm text-ink/60">
                      Promotional video · Ministry brand
                    </p>
                  </div>
                </div>
              </Link>
            </FadeIn>
          </div>

          <FadeIn delay={0.3}>
            <div className="mt-12 lg:mt-16 text-center">
              <Button variant="secondary" href="/work" className="px-8 py-4 text-lg">
                View all work →
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="px-6 lg:px-8 py-16 lg:py-20 border-t border-soft-clay/30">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-soft-clay text-xs font-medium tracking-wider uppercase mb-4">
              Who we serve
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl font-semibold text-ink mb-12 lg:mb-16 tracking-tight">
              Service businesses & beyond
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <FadeIn delay={0.1}>
              <div className="p-5 lg:p-6 border-2 border-oasis-green/40 rounded-xl">
                <h3 className="font-display text-lg sm:text-xl font-semibold text-ink">
                  Service businesses
                </h3>
                <p className="text-sm text-ink/60 mt-2">
                  Trades, auto, dental/medspa
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="p-5 lg:p-6 border border-soft-clay/30 rounded-xl">
                <h3 className="font-display text-lg sm:text-xl font-semibold text-ink">
                  Real estate
                </h3>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="p-5 lg:p-6 border border-soft-clay/30 rounded-xl">
                <h3 className="font-display text-lg sm:text-xl font-semibold text-ink">
                  Commercial properties
                </h3>
              </div>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="p-5 lg:p-6 border border-soft-clay/30 rounded-xl">
                <h3 className="font-display text-lg sm:text-xl font-semibold text-ink">
                  Churches & ministries
                </h3>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="p-5 lg:p-6 border border-soft-clay/30 rounded-xl">
                <h3 className="font-display text-lg sm:text-xl font-semibold text-ink">
                  Professional services
                </h3>
              </div>
            </FadeIn>

            <FadeIn delay={0.35}>
              <div className="p-5 lg:p-6 border border-soft-clay/30 rounded-xl">
                <h3 className="font-display text-lg sm:text-xl font-semibold text-ink">
                  Local retail
                </h3>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 lg:px-8 py-16 lg:py-24 border-t border-soft-clay/30">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl font-semibold text-ink mb-8 tracking-tight">
              Ready to build?
            </h2>
            <Button href="/contact">Start a project</Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
