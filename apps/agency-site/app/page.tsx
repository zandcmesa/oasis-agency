import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { withBasePath } from "@/lib/utils";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-semibold leading-[1.1] text-ink mb-8 tracking-tight">
              Cutting-edge tech + design for ambitious brands
            </h1>
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
      <section className="px-6 lg:px-8 py-16 lg:py-20 border-y border-soft-clay/30">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-soft-clay text-xs font-medium tracking-wider uppercase mb-4">
              What we do
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl font-semibold text-ink mb-12 lg:mb-16 tracking-tight">
              Five product lines
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            <FadeIn delay={0.1}>
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-oasis-green mb-2">
                  Websites
                </h3>
                <p className="text-base text-ink/70">
                  Custom-built. Headless. Modern tech.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-oasis-green mb-2">
                  Social media content
                </h3>
                <p className="text-base text-ink/70">
                  Strategy + execution. On-brand campaigns.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-oasis-green mb-2">
                  Promotional video
                </h3>
                <p className="text-base text-ink/70">
                  B-roll production. Premium craft.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="opacity-70">
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-ink mb-2">
                  AI agent workers & teams
                </h3>
                <p className="text-base text-ink/70">
                  <span className="text-soft-clay text-xs font-medium tracking-wider uppercase mr-2">
                    Emerging
                  </span>
                  Custom automation systems.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="opacity-70">
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-ink mb-2">
                  Digital presence strategy
                </h3>
                <p className="text-base text-ink/70">
                  <span className="text-soft-clay text-xs font-medium tracking-wider uppercase mr-2">
                    Forming
                  </span>
                  SEO, search optimization, consulting.
                </p>
              </div>
            </FadeIn>
          </div>
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
      <section className="px-6 lg:px-8 py-16 lg:py-20 border-t border-soft-clay/30">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-soft-clay text-xs font-medium tracking-wider uppercase mb-4">
              Who we serve
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl font-semibold text-ink mb-12 lg:mb-16 tracking-tight">
              Multi-sector focus
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <FadeIn delay={0.1}>
              <div className="p-5 lg:p-6 border border-soft-clay/30 rounded-xl">
                <h3 className="font-display text-lg sm:text-xl font-semibold text-ink">
                  Churches & ministries
                </h3>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="p-5 lg:p-6 border border-soft-clay/30 rounded-xl">
                <h3 className="font-display text-lg sm:text-xl font-semibold text-ink">
                  Service businesses
                </h3>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="p-5 lg:p-6 border border-soft-clay/30 rounded-xl">
                <h3 className="font-display text-lg sm:text-xl font-semibold text-ink">
                  Real estate
                </h3>
              </div>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="p-5 lg:p-6 border border-soft-clay/30 rounded-xl">
                <h3 className="font-display text-lg sm:text-xl font-semibold text-ink">
                  Commercial properties
                </h3>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="p-5 lg:p-6 border border-soft-clay/30 rounded-xl">
                <h3 className="font-display text-lg sm:text-xl font-semibold text-ink">
                  Salon / spa / wellness
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
