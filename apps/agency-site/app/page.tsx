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
              Catch after-hours calls and web leads without hiring night staff
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-xl sm:text-2xl text-paper/80 mb-8 max-w-4xl leading-relaxed">
              For local independents — trades, auto, dental, medspa. We text people back when you're closed or miss a call, chase web forms same-day, and ask for reviews after the job.
            </p>
          </FadeIn>
          <FadeIn delay={0.25}>
            <Button href="/contact">Book a 15-minute discovery</Button>
          </FadeIn>
        </div>
      </section>

      {/* Product Section */}
      <section className="px-6 lg:px-8 py-16 lg:py-20 border-y border-soft-clay/30">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-soft-clay text-xs font-medium tracking-wider uppercase mb-4">
              What we offer
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl font-semibold text-ink mb-8 tracking-tight">
              After-Hours Lead Catcher
            </h2>
            <p className="text-xl text-ink/70 mb-12 lg:mb-16 max-w-4xl">
              A paid follow-through layer that texts people back when you're closed or miss a call, chases web forms the same day, and asks for a Google review after a completed job — without replacing your phone desk, CRM, or booking software.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
            <FadeIn delay={0.1}>
              <div className="border-l-4 border-oasis-green pl-6">
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-ink mb-3">
                  After-hours text-back when you're closed
                </h3>
                <p className="text-base text-ink/70 leading-relaxed">
                  When someone calls after hours, we text them back in ~60 seconds. They get a reply, you get their info in the morning.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="border-l-4 border-oasis-green pl-6">
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-ink mb-3">
                  Daytime miss fallback if the desk couldn't pick up
                </h3>
                <p className="text-base text-ink/70 leading-relaxed">
                  Busy? On a job site? We'll text them back so you don't lose the lead while you're working.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="border-l-4 border-oasis-green pl-6">
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-ink mb-3">
                  Same-day chase on web/estimate forms
                </h3>
                <p className="text-base text-ink/70 leading-relaxed">
                  Form submissions get followed up the same day. Speed matters — we make sure you're faster than the competition.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="border-l-4 border-oasis-green pl-6">
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-ink mb-3">
                  Optional Google review ask after the job
                </h3>
                <p className="text-base text-ink/70 leading-relaxed">
                  When you mark a job complete, we send a review request. More 5-star reviews without the manual chase.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* What you don't get */}
          <FadeIn delay={0.3}>
            <div className="border-t border-soft-clay/30 pt-12 mb-12">
              <h3 className="font-display text-2xl font-semibold text-ink mb-6">
                What you don't get
              </h3>
              <ul className="space-y-3 text-lg text-ink/70">
                <li className="flex items-start">
                  <span className="text-soft-clay mr-3">•</span>
                  <span>No voice robot answering your phone</span>
                </li>
                <li className="flex items-start">
                  <span className="text-soft-clay mr-3">•</span>
                  <span>No ads takeover or lead-gen management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-soft-clay mr-3">•</span>
                  <span>No ripping out your CRM or booking software</span>
                </li>
              </ul>
            </div>
          </FadeIn>

          {/* Pricing */}
          <FadeIn delay={0.35}>
            <div className="border-t border-soft-clay/30 pt-12">
              <h3 className="font-display text-2xl font-semibold text-ink mb-8">
                Pricing
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
                <div className="p-6 border-2 border-soft-clay/30 rounded-xl">
                  <p className="text-sm text-soft-clay font-medium tracking-wider uppercase mb-3">
                    Monthly retainer
                  </p>
                  <p className="font-display text-4xl font-semibold text-ink mb-2">
                    $297<span className="text-2xl text-ink/60">/mo</span>
                  </p>
                  <p className="text-base text-ink/70 mb-4">
                    + ~$497 one-time setup
                  </p>
                  <p className="text-sm text-ink/60">
                    Ongoing coverage after initial setup
                  </p>
                </div>
                <div className="p-6 border-2 border-oasis-green/40 rounded-xl">
                  <p className="text-sm text-soft-clay font-medium tracking-wider uppercase mb-3">
                    30-day proof
                  </p>
                  <p className="font-display text-4xl font-semibold text-ink mb-2">
                    $997
                  </p>
                  <p className="text-base text-ink/70 mb-4">
                    One-time 30-day trial
                  </p>
                  <p className="text-sm text-ink/60">
                    Test it before committing to monthly
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-6 lg:px-8 py-16 lg:py-20 border-t border-soft-clay/30">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-soft-clay text-xs font-medium tracking-wider uppercase mb-4">
              How it works
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl font-semibold text-ink mb-12 lg:mb-16 tracking-tight">
              Simple forwarding setup
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <FadeIn delay={0.1}>
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-oasis-green/10 flex items-center justify-center">
                  <span className="font-display text-2xl font-semibold text-oasis-green">1</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-ink">
                  Forward when closed
                </h3>
                <p className="text-base text-ink/70 leading-relaxed">
                  Set your phone to forward to our line when you're closed or on a job. No app, no complicated setup.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-oasis-green/10 flex items-center justify-center">
                  <span className="font-display text-2xl font-semibold text-oasis-green">2</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-ink">
                  Text in ~60 seconds
                </h3>
                <p className="text-base text-ink/70 leading-relaxed">
                  We text them back with your business info. They know you got the message, you get their details.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-oasis-green/10 flex items-center justify-center">
                  <span className="font-display text-2xl font-semibold text-oasis-green">3</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-ink">
                  Desk picks up when needed
                </h3>
                <p className="text-base text-ink/70 leading-relaxed">
                  You call them back during business hours. No robot voice, no awkward handoff. Just a warm lead ready to talk.
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.25}>
            <div className="mt-12 p-6 bg-soft-clay/10 border border-soft-clay/30 rounded-xl">
              <p className="text-lg text-ink/70">
                <span className="font-semibold text-ink">Demo line:</span> Coming soon — we're setting up a Twilio sandbox you can test before signing up.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Proof Section */}
      <section className="px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-soft-clay text-xs font-medium tracking-wider uppercase mb-4">
              Studio work
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl font-semibold text-ink mb-8 tracking-tight">
              Our craft
            </h2>
            <p className="text-xl text-ink/70 mb-12 lg:mb-16 max-w-4xl">
              We've built websites, content systems, and video work for churches and ministries. That's proof we can ship — After-Hours Lead Catcher is our first product for local independents.
            </p>
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
              Who this is for
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl font-semibold text-ink mb-12 lg:mb-16 tracking-tight">
              Local independents
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <FadeIn delay={0.1}>
              <div className="p-5 lg:p-6 border-2 border-oasis-green/40 rounded-xl">
                <h3 className="font-display text-lg sm:text-xl font-semibold text-ink">
                  Trades
                </h3>
                <p className="text-sm text-ink/60 mt-2">
                  HVAC, plumbing, electrical, roofing
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="p-5 lg:p-6 border-2 border-oasis-green/40 rounded-xl">
                <h3 className="font-display text-lg sm:text-xl font-semibold text-ink">
                  Auto
                </h3>
                <p className="text-sm text-ink/60 mt-2">
                  Repair, detailing, body shops
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="p-5 lg:p-6 border-2 border-oasis-green/40 rounded-xl">
                <h3 className="font-display text-lg sm:text-xl font-semibold text-ink">
                  Dental
                </h3>
                <p className="text-sm text-ink/60 mt-2">
                  General practice, orthodontics
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="p-5 lg:p-6 border-2 border-oasis-green/40 rounded-xl">
                <h3 className="font-display text-lg sm:text-xl font-semibold text-ink">
                  Medspa
                </h3>
                <p className="text-sm text-ink/60 mt-2">
                  Aesthetics, wellness clinics
                </p>
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
              Stop losing leads after hours
            </h2>
            <Button href="/contact">Book a 15-minute discovery</Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
