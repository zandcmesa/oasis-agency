import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
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
      <section className="px-6 lg:px-8 pt-40 pb-16 lg:pt-52 lg:pb-24 border-b border-line">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h1 className="text-display-xl text-ink mb-8">
              Work
            </h1>
            <p className="text-xl sm:text-body-l text-ink-muted max-w-4xl">
              Systems we&apos;ve built and shipped.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Websites */}
      <section id="websites" className="scroll-mt-24 px-6 lg:px-8 py-16 lg:py-20 border-b border-line">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="text-display-l text-ink mb-10">
              Websites
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-8">
            <Reveal delay={0.1}>
              <div className="border border-line rounded-lg overflow-hidden">
                <div className="grid md:grid-cols-2 gap-6 p-6 lg:p-8">
                  <div className="space-y-4">
                    <div className="aspect-video relative bg-ink/5 rounded-md overflow-hidden">
                      <Image
                        src={withBasePath("/work/cornerstone-site-home.jpg")}
                        alt="Cornerstone Church homepage"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="aspect-video relative bg-ink/5 rounded-md overflow-hidden">
                      <Image
                        src={withBasePath("/work/cornerstone-site-sermons.jpg")}
                        alt="Cornerstone Church sermons page"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-heading text-ink mb-3">
                      Cornerstone Church
                    </h3>
                    <p className="text-base sm:text-body-l text-ink-muted">
                      Planning Center integration.<br />
                      Searchable sermon library.<br />
                      YouTube auto-transcription.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Social Media Content */}
      <section id="social" className="scroll-mt-24 px-6 lg:px-8 py-16 lg:py-20 border-b border-line">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="text-display-l text-ink mb-10">
              Social media content
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <Reveal delay={0.1}>
              <div className="border border-line rounded-lg overflow-hidden">
                <div className="aspect-[9/16] relative bg-ink/5 max-h-[600px]">
                  <Image
                    src={withBasePath("/work/cornerstone-clip-01.jpg")}
                    alt="Cornerstone Church sermon clip"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 lg:p-6">
                  <h3 className="text-heading text-xl text-ink mb-2">
                    Cornerstone Church
                  </h3>
                  <p className="text-sm sm:text-base text-ink-muted">
                    Weekly clips · Social strategy
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="border border-line rounded-lg overflow-hidden">
                <div className="aspect-[9/16] relative bg-ink/5 max-h-[600px]">
                  <Image
                    src={withBasePath("/work/cornerstone-clip-miracles.jpg")}
                    alt="Cornerstone Church sermon clip - Neither slumber nor sleep"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 lg:p-6">
                  <h3 className="text-heading text-xl text-ink mb-2">
                    Sermon clip series
                  </h3>
                  <p className="text-sm sm:text-base text-ink-muted">
                    Email & text campaigns
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Promotional Video */}
      <section id="video" className="scroll-mt-24 px-6 lg:px-8 py-16 lg:py-20 border-b border-line">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="text-display-l text-ink mb-10">
              Promotional video
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <Reveal delay={0.1}>
              <div className="border border-line rounded-lg overflow-hidden">
                <div className="aspect-video relative bg-ink/5">
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
                  <h3 className="text-heading text-xl text-ink mb-2">
                    Foster the City
                  </h3>
                  <p className="text-sm sm:text-base text-ink-muted">
                    Ministry brand story · Launch promo
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="border border-line rounded-lg overflow-hidden">
                <div className="aspect-video relative bg-ink/5">
                  <Image
                    src={withBasePath("/work/foster-the-city-still-02.jpg")}
                    alt="Foster the City promotional video alternate still"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 lg:p-6">
                  <h3 className="text-heading text-xl text-ink mb-2">
                    B-roll production
                  </h3>
                  <p className="text-sm sm:text-base text-ink-muted">
                    Premium craft · Brand storytelling
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* AI Agent Workers & Teams (Empty) */}
      <section className="px-6 lg:px-8 py-16 lg:py-20 border-b border-line opacity-70">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-display-l text-ink">
                AI agent workers & teams
              </h2>
              <span className="text-eyebrow text-oasis-green">
                Emerging
              </span>
            </div>
          </Reveal>

          <div className="border border-line rounded-lg p-8 lg:p-12 text-center">
            <p className="text-soft-clay text-sm font-medium">
              Case studies coming as projects ship
            </p>
          </div>
        </div>
      </section>

      {/* Digital Presence Strategy (Empty) */}
      <section className="px-6 lg:px-8 py-16 lg:py-20 opacity-70">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-display-l text-ink">
                Digital presence strategy
              </h2>
              <span className="text-eyebrow text-oasis-green">
                Forming
              </span>
            </div>
          </Reveal>

          <div className="border border-line rounded-lg p-8 lg:p-12 text-center">
            <p className="text-soft-clay text-sm font-medium">
              Case studies coming as projects ship
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-8 py-16 lg:py-24 border-t border-line">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 className="text-display-l text-ink mb-8">
              Start your project
            </h2>
            <Button href="/contact" size="lg" arrow>Start a project</Button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
