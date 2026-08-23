import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-soft-clay/30 mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="flex flex-col md:flex-row items-start justify-between gap-16">
          <div className="space-y-6 max-w-lg">
            <Link
              href="/"
              className="font-display text-3xl font-semibold text-oasis-green hover:text-oasis-green/80 transition-colors inline-block"
            >
              Oasis
            </Link>
            <p className="text-ink/70 text-lg leading-relaxed">
              The agency that can actually build things. Faith-aligned, bold
              modern design, real engineering depth.
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <a
              href="mailto:zandcmesa@gmail.com"
              className="inline-flex items-center justify-center px-10 py-5 bg-oasis-green text-paper font-medium text-xl rounded-xl hover:bg-oasis-green/90 transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-oasis-green focus:ring-offset-2 focus:ring-offset-paper"
            >
              Book a conversation with Zach
            </a>
            <div>
              <p className="text-soft-clay text-xs font-medium tracking-wider uppercase mb-1">
                Email
              </p>
              <a
                href="mailto:zandcmesa@gmail.com"
                className="text-oasis-green text-lg font-medium hover:underline transition-colors"
              >
                zandcmesa@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
