import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h1 className="font-display text-6xl lg:text-8xl font-semibold leading-[1.1] text-ink mb-8 tracking-tight">
              Cutting-edge tech + design for ambitious brands
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-2xl lg:text-3xl leading-relaxed text-ink/70 mb-12 max-w-4xl">
              We build systems that ship. Custom websites, AI agent teams,
              social content, promotional video, and digital presence
              strategy — for churches, service businesses, real estate,
              commercial properties, and wellness brands.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-5 bg-oasis-green text-paper font-medium text-xl rounded-xl hover:bg-oasis-green/90 transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-oasis-green focus:ring-offset-2 focus:ring-offset-paper"
            >
              Start a project
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Products Section */}
      <section className="px-6 lg:px-8 py-24 border-y border-soft-clay/30">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-soft-clay text-xs font-medium tracking-wider uppercase mb-4">
              What we do
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-semibold text-ink mb-16 tracking-tight">
              Five product lines
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            <FadeIn delay={0.1}>
              <div>
                <h3 className="font-display text-2xl font-semibold text-oasis-green mb-3">
                  Websites
                </h3>
                <p className="text-lg text-ink/70 leading-relaxed">
                  Custom-built, headless, modern. The technical fixer — we
                  solve problems other agencies can't. Planning Center
                  integration, sermon search, unified digital experiences.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div>
                <h3 className="font-display text-2xl font-semibold text-oasis-green mb-3">
                  Social media content
                </h3>
                <p className="text-lg text-ink/70 leading-relaxed">
                  Strategy and execution. We run the campaigns your team
                  doesn't have time for — consistent, on-brand, conversion-
                  focused content that works.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div>
                <h3 className="font-display text-2xl font-semibold text-oasis-green mb-3">
                  Promotional video
                </h3>
                <p className="text-lg text-ink/70 leading-relaxed">
                  B-roll production with premium craft. Event coverage,
                  brand stories, ministry showcases — production that makes
                  your work look as good as it is.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="opacity-70">
                <h3 className="font-display text-2xl font-semibold text-ink mb-3">
                  AI agent workers & teams
                </h3>
                <p className="text-lg text-ink/70 leading-relaxed">
                  <span className="text-soft-clay text-xs font-medium tracking-wider uppercase mr-2">
                    Emerging
                  </span>
                  Custom automation and AI systems for operations that scale
                  beyond headcount.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="opacity-70">
                <h3 className="font-display text-2xl font-semibold text-ink mb-3">
                  Digital presence strategy
                </h3>
                <p className="text-lg text-ink/70 leading-relaxed">
                  <span className="text-soft-clay text-xs font-medium tracking-wider uppercase mr-2">
                    Forming
                  </span>
                  SEO, AI search optimization, giving platform setup, and
                  discovery consulting.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-soft-clay text-xs font-medium tracking-wider uppercase mb-4">
              Recent work
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-semibold text-ink mb-6 tracking-tight">
              Real proof
            </h2>
            <p className="text-xl text-ink/70 leading-relaxed max-w-3xl mb-16">
              Systems we've built and shipped. Not templates. Not wrappers.
              Real engineering and design craft.
            </p>
          </FadeIn>

          <div className="space-y-16">
            {/* Cornerstone Church - Websites & Social */}
            <FadeIn delay={0.1}>
              <div className="border border-soft-clay/30 rounded-2xl p-8 lg:p-12">
                <div className="mb-6">
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="text-xs bg-oasis-green/10 text-oasis-green px-3 py-1 rounded-full font-medium">
                      Churches & ministries
                    </span>
                    <span className="text-xs bg-ink/10 text-ink px-3 py-1 rounded-full font-medium">
                      Websites
                    </span>
                    <span className="text-xs bg-ink/10 text-ink px-3 py-1 rounded-full font-medium">
                      Social media
                    </span>
                  </div>
                  <h3 className="font-display text-3xl font-semibold text-ink mb-3">
                    Cornerstone Church
                  </h3>
                  <p className="text-lg text-ink/70 leading-relaxed">
                    Complete digital presence rebuild — unified Planning Center
                    experience, searchable sermon library, weekly content
                    strategy.
                  </p>
                </div>
                <div className="aspect-video bg-soft-clay/20 rounded-xl flex items-center justify-center border border-soft-clay/30">
                  <p className="text-soft-clay text-sm font-medium">
                    Media coming
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Foster the City - Promotional Video */}
            <FadeIn delay={0.2}>
              <div className="border border-soft-clay/30 rounded-2xl p-8 lg:p-12">
                <div className="mb-6">
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="text-xs bg-oasis-green/10 text-oasis-green px-3 py-1 rounded-full font-medium">
                      Ministry / nonprofit
                    </span>
                    <span className="text-xs bg-ink/10 text-ink px-3 py-1 rounded-full font-medium">
                      Promotional video
                    </span>
                  </div>
                  <h3 className="font-display text-3xl font-semibold text-ink mb-3">
                    Foster the City
                  </h3>
                  <p className="text-lg text-ink/70 leading-relaxed">
                    Ministry brand story — B-roll production capturing the
                    heart of foster care and community support work.
                  </p>
                </div>
                <div className="aspect-video bg-soft-clay/20 rounded-xl flex items-center justify-center border border-soft-clay/30">
                  <p className="text-soft-clay text-sm font-medium">
                    Media coming
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.3}>
            <div className="mt-16 text-center">
              <Link
                href="/work"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-soft-clay/40 text-ink font-medium text-lg rounded-xl hover:border-oasis-green hover:text-oasis-green transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-oasis-green focus:ring-offset-2 focus:ring-offset-paper"
              >
                View all work →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="px-6 lg:px-8 py-24 border-t border-soft-clay/30">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-soft-clay text-xs font-medium tracking-wider uppercase mb-4">
              Who we serve
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-semibold text-ink mb-16 tracking-tight">
              Multi-sector focus
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="p-6 border border-soft-clay/30 rounded-xl">
                <h3 className="font-display text-xl font-semibold text-ink mb-2">
                  Churches & ministries
                </h3>
                <p className="text-base text-ink/70">
                  Digital presence, sermon libraries, unified giving and events
                  platforms, weekly communications.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="p-6 border border-soft-clay/30 rounded-xl">
                <h3 className="font-display text-xl font-semibold text-ink mb-2">
                  Service businesses
                </h3>
                <p className="text-base text-ink/70">
                  Construction, trades, home services — websites and digital
                  marketing that convert leads into customers.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="p-6 border border-soft-clay/30 rounded-xl">
                <h3 className="font-display text-xl font-semibold text-ink mb-2">
                  Real estate
                </h3>
                <p className="text-base text-ink/70">
                  Agent websites, property showcases, branding, and social
                  content strategies.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="p-6 border border-soft-clay/30 rounded-xl">
                <h3 className="font-display text-xl font-semibold text-ink mb-2">
                  Commercial properties
                </h3>
                <p className="text-base text-ink/70">
                  Golf courses, event venues, hospitality — premium digital
                  experiences.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="p-6 border border-soft-clay/30 rounded-xl">
                <h3 className="font-display text-xl font-semibold text-ink mb-2">
                  Salon / spa / wellness
                </h3>
                <p className="text-base text-ink/70">
                  Booking-integrated websites, brand identity, and content
                  strategies that build community.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 lg:px-8 py-24 lg:py-32 border-t border-soft-clay/30">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display text-5xl lg:text-7xl font-semibold text-ink mb-8 tracking-tight">
              Ready to build?
            </h2>
            <p className="text-2xl text-ink/70 leading-relaxed mb-12">
              We work with brands that need cutting-edge tech and bold design.
              Let's talk about your project.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-5 bg-oasis-green text-paper font-medium text-xl rounded-xl hover:bg-oasis-green/90 transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-oasis-green focus:ring-offset-2 focus:ring-offset-paper"
            >
              Start a project
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
