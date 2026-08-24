import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Work — Oasis Creative Studios",
  description:
    "Portfolio of websites, social media campaigns, promotional videos, and digital systems we've built for churches, service businesses, and ambitious brands.",
};

export default function WorkPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="px-6 lg:px-8 py-24 lg:py-32 border-b border-soft-clay/30">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h1 className="font-display text-6xl lg:text-8xl font-semibold leading-[1.1] text-ink mb-8 tracking-tight">
              Work
            </h1>
            <p className="text-2xl lg:text-3xl leading-relaxed text-ink/70 max-w-4xl">
              Systems we've built and shipped. Indexed by product line, tagged
              by sector. Real proof — no fake UI, no invented case studies.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Websites */}
      <section className="px-6 lg:px-8 py-24 border-b border-soft-clay/30">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold text-ink mb-4 tracking-tight">
              Websites
            </h2>
            <p className="text-lg text-ink/70 mb-12 max-w-3xl">
              Custom-built, headless, modern. We solve technical problems other
              agencies can't.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 gap-8">
            <FadeIn delay={0.1}>
              <div className="border border-soft-clay/30 rounded-2xl overflow-hidden">
                <div className="grid md:grid-cols-2 gap-6 p-8">
                  <div className="space-y-4">
                    <div className="aspect-video relative bg-soft-clay/20 rounded-xl overflow-hidden">
                      <Image
                        src="/work/cornerstone-site-home.jpg"
                        alt="Cornerstone Church homepage"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="aspect-video relative bg-soft-clay/20 rounded-xl overflow-hidden">
                      <Image
                        src="/work/cornerstone-site-sermons.jpg"
                        alt="Cornerstone Church sermons page"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="text-xs bg-oasis-green/10 text-oasis-green px-3 py-1 rounded-full font-medium">
                        Churches & ministries
                      </span>
                    </div>
                    <h3 className="font-display text-3xl font-semibold text-ink mb-3">
                      Cornerstone Church
                    </h3>
                    <p className="text-lg text-ink/70 leading-relaxed">
                      Unified Planning Center integration — Groups, Give, and
                      Events native to the church domain. Searchable sermon
                      library with YouTube auto-transcription.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Social Media Content */}
      <section className="px-6 lg:px-8 py-24 border-b border-soft-clay/30">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold text-ink mb-4 tracking-tight">
              Social media content
            </h2>
            <p className="text-lg text-ink/70 mb-12 max-w-3xl">
              Strategy and execution. Consistent, on-brand campaigns that
              convert.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn delay={0.1}>
              <div className="border border-soft-clay/30 rounded-2xl overflow-hidden">
                <div className="aspect-[9/16] relative bg-soft-clay/20 max-h-[600px]">
                  <Image
                    src="/work/cornerstone-clip-01.jpg"
                    alt="Cornerstone Church sermon clip"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-3 mb-3">
                    <span className="text-xs bg-oasis-green/10 text-oasis-green px-2 py-1 rounded-full font-medium">
                      Churches & ministries
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-ink mb-2">
                    Cornerstone Church
                  </h3>
                  <p className="text-base text-ink/70 leading-relaxed">
                    Weekly sermon clips and social content strategy — sermon
                    highlights, event promotion, community stories.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="border border-soft-clay/30 rounded-2xl overflow-hidden">
                <div className="aspect-[9/16] relative bg-soft-clay/20 max-h-[600px]">
                  <Image
                    src="/work/cornerstone-clip-miracles.jpg"
                    alt="Cornerstone Church sermon clip - Neither slumber nor sleep"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-3 mb-3">
                    <span className="text-xs bg-oasis-green/10 text-oasis-green px-2 py-1 rounded-full font-medium">
                      Churches & ministries
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-ink mb-2">
                    Sermon clip series
                  </h3>
                  <p className="text-base text-ink/70 leading-relaxed">
                    Email and text campaigns integrated with Planning Center —
                    consistent content that drives engagement.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Promotional Video */}
      <section className="px-6 lg:px-8 py-24 border-b border-soft-clay/30">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold text-ink mb-4 tracking-tight">
              Promotional video
            </h2>
            <p className="text-lg text-ink/70 mb-12 max-w-3xl">
              B-roll production with premium craft. Brand stories that look as
              good as the work.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn delay={0.1}>
              <div className="border border-soft-clay/30 rounded-2xl overflow-hidden">
                <div className="aspect-video relative bg-soft-clay/20">
                  <Image
                    src="/work/foster-the-city-still.jpg"
                    alt="Foster the City promotional video still"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-3 mb-3">
                    <span className="text-xs bg-oasis-green/10 text-oasis-green px-2 py-1 rounded-full font-medium">
                      Church & ministry
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-ink mb-2">
                    Foster the City
                  </h3>
                  <p className="text-base text-ink/70 leading-relaxed">
                    Ministry brand story — capturing the heart of foster care
                    and community support work through cinematic B-roll.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="border border-soft-clay/30 rounded-2xl overflow-hidden">
                <div className="aspect-video relative bg-soft-clay/20">
                  <Image
                    src="/work/foster-the-city-still-02.jpg"
                    alt="Foster the City promotional video alternate still"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-3 mb-3">
                    <span className="text-xs bg-oasis-green/10 text-oasis-green px-2 py-1 rounded-full font-medium">
                      Church & ministry
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-ink mb-2">
                    Launch promo production
                  </h3>
                  <p className="text-base text-ink/70 leading-relaxed">
                    Premium B-roll production — event coverage and brand
                    storytelling that makes the work look as good as it is.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* AI Agent Workers & Teams (Empty) */}
      <section className="px-6 lg:px-8 py-24 border-b border-soft-clay/30 opacity-70">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <h2 className="font-display text-4xl lg:text-5xl font-semibold text-ink tracking-tight">
                AI agent workers & teams
              </h2>
              <span className="text-soft-clay text-xs font-medium tracking-wider uppercase">
                Emerging
              </span>
            </div>
            <p className="text-lg text-ink/70 mb-12 max-w-3xl">
              Custom automation and AI systems. Work in progress — first client
              projects launching soon.
            </p>
          </FadeIn>

          <div className="border border-soft-clay/30 rounded-2xl p-12 text-center">
            <p className="text-soft-clay text-sm font-medium">
              Case studies coming as projects ship
            </p>
          </div>
        </div>
      </section>

      {/* Digital Presence Strategy (Empty) */}
      <section className="px-6 lg:px-8 py-24 opacity-70">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <h2 className="font-display text-4xl lg:text-5xl font-semibold text-ink tracking-tight">
                Digital presence strategy
              </h2>
              <span className="text-soft-clay text-xs font-medium tracking-wider uppercase">
                Forming
              </span>
            </div>
            <p className="text-lg text-ink/70 mb-12 max-w-3xl">
              SEO, AI search optimization, giving platform setup. Service line
              forming — reach out if you need this.
            </p>
          </FadeIn>

          <div className="border border-soft-clay/30 rounded-2xl p-12 text-center">
            <p className="text-soft-clay text-sm font-medium">
              Case studies coming as projects ship
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-8 py-24 lg:py-32 border-t border-soft-clay/30">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display text-5xl lg:text-6xl font-semibold text-ink mb-8 tracking-tight">
              Start your project
            </h2>
            <p className="text-xl text-ink/70 leading-relaxed mb-12">
              We work with ambitious brands across sectors. If you need
              cutting-edge tech and bold design, let's talk.
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
