import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { withBasePath } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Work — Oasis Creative Studios",
  description:
    "Portfolio of websites, social media campaigns, promotional videos, and digital systems we've built for churches, service businesses, and ambitious brands.",
};

export default function WorkPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="px-6 lg:px-8 py-16 lg:py-24 border-b border-soft-clay/30">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-semibold leading-[1.1] text-ink mb-8 tracking-tight">
              Work
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl leading-relaxed text-ink/70 max-w-4xl">
              Systems we've built and shipped.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Websites */}
      <section className="px-6 lg:px-8 py-16 lg:py-20 border-b border-soft-clay/30">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink mb-10 tracking-tight">
              Websites
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 gap-8">
            <FadeIn delay={0.1}>
              <div className="border border-soft-clay/30 rounded-2xl overflow-hidden">
                <div className="grid md:grid-cols-2 gap-6 p-6 lg:p-8">
                  <div className="space-y-4">
                    <div className="aspect-video relative bg-soft-clay/20 rounded-xl overflow-hidden">
                      <Image
                        src={withBasePath("/work/cornerstone-site-home.jpg")}
                        alt="Cornerstone Church homepage"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="aspect-video relative bg-soft-clay/20 rounded-xl overflow-hidden">
                      <Image
                        src={withBasePath("/work/cornerstone-site-sermons.jpg")}
                        alt="Cornerstone Church sermons page"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="font-display text-2xl sm:text-3xl font-semibold text-ink mb-3">
                      Cornerstone Church
                    </h3>
                    <p className="text-base sm:text-lg text-ink/70 leading-relaxed">
                      Planning Center integration.<br />
                      Searchable sermon library.<br />
                      YouTube auto-transcription.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Social Media Content */}
      <section className="px-6 lg:px-8 py-16 lg:py-20 border-b border-soft-clay/30">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink mb-10 tracking-tight">
              Social media content
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <FadeIn delay={0.1}>
              <div className="border border-soft-clay/30 rounded-2xl overflow-hidden">
                <div className="aspect-[9/16] relative bg-soft-clay/20 max-h-[600px]">
                  <Image
                    src={withBasePath("/work/cornerstone-clip-01.jpg")}
                    alt="Cornerstone Church sermon clip"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 lg:p-6">
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-ink mb-2">
                    Cornerstone Church
                  </h3>
                  <p className="text-sm sm:text-base text-ink/70">
                    Weekly clips · Social strategy
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="border border-soft-clay/30 rounded-2xl overflow-hidden">
                <div className="aspect-[9/16] relative bg-soft-clay/20 max-h-[600px]">
                  <Image
                    src={withBasePath("/work/cornerstone-clip-miracles.jpg")}
                    alt="Cornerstone Church sermon clip - Neither slumber nor sleep"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 lg:p-6">
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-ink mb-2">
                    Sermon clip series
                  </h3>
                  <p className="text-sm sm:text-base text-ink/70">
                    Email & text campaigns
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Promotional Video */}
      <section className="px-6 lg:px-8 py-16 lg:py-20 border-b border-soft-clay/30">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink mb-10 tracking-tight">
              Promotional video
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <FadeIn delay={0.1}>
              <div className="border border-soft-clay/30 rounded-2xl overflow-hidden">
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
                <div className="p-5 lg:p-6">
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-ink mb-2">
                    Foster the City
                  </h3>
                  <p className="text-sm sm:text-base text-ink/70">
                    Ministry brand story · Launch promo
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="border border-soft-clay/30 rounded-2xl overflow-hidden">
                <div className="aspect-video relative bg-soft-clay/20">
                  <Image
                    src={withBasePath("/work/foster-the-city-still-02.jpg")}
                    alt="Foster the City promotional video alternate still"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 lg:p-6">
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-ink mb-2">
                    B-roll production
                  </h3>
                  <p className="text-sm sm:text-base text-ink/70">
                    Premium craft · Brand storytelling
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* AI Agent Workers & Teams (Empty) */}
      <section className="px-6 lg:px-8 py-16 lg:py-20 border-b border-soft-clay/30 opacity-70">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-tight">
                AI agent workers & teams
              </h2>
              <span className="text-soft-clay text-xs font-medium tracking-wider uppercase">
                Emerging
              </span>
            </div>
          </FadeIn>

          <div className="border border-soft-clay/30 rounded-2xl p-8 lg:p-12 text-center">
            <p className="text-soft-clay text-sm font-medium">
              Case studies coming as projects ship
            </p>
          </div>
        </div>
      </section>

      {/* Digital Presence Strategy (Empty) */}
      <section className="px-6 lg:px-8 py-16 lg:py-20 opacity-70">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-tight">
                Digital presence strategy
              </h2>
              <span className="text-soft-clay text-xs font-medium tracking-wider uppercase">
                Forming
              </span>
            </div>
          </FadeIn>

          <div className="border border-soft-clay/30 rounded-2xl p-8 lg:p-12 text-center">
            <p className="text-soft-clay text-sm font-medium">
              Case studies coming as projects ship
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-8 py-16 lg:py-24 border-t border-soft-clay/30">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-ink mb-8 tracking-tight">
              Start your project
            </h2>
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
