import Link from "next/link";
import { Button } from "@/components/Button";

export function Footer() {
  return (
    <footer className="px-6 lg:px-8 py-24 border-t border-soft-clay/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <div>
            <h3 className="font-display text-3xl font-semibold text-ink mb-4">
              Ready to start?
            </h3>
            <p className="text-lg text-ink/70 leading-relaxed mb-8">
              We work with ambitious brands that need cutting-edge tech and
              sharp design. If that's you, let's talk.
            </p>
            <Button href="/contact" className="px-8 py-4 text-lg">
              Start a project
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-soft-clay text-xs font-medium tracking-wider uppercase mb-4">
                Navigation
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/work"
                    className="text-ink/70 hover:text-oasis-green transition-colors"
                  >
                    Work
                  </Link>
                </li>
                <li>
                  <Link
                    href="/how-we-work"
                    className="text-ink/70 hover:text-oasis-green transition-colors"
                  >
                    How we work
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-ink/70 hover:text-oasis-green transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-soft-clay text-xs font-medium tracking-wider uppercase mb-4">
                Sectors
              </h4>
              <ul className="space-y-3 text-ink/70 text-sm">
                <li>Churches & ministries</li>
                <li>Service businesses</li>
                <li>Real estate</li>
                <li>Commercial properties</li>
                <li>Salon / spa / wellness</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-soft-clay/20">
          <p className="text-sm text-ink/50">
            © {new Date().getFullYear()} Oasis Creative Studios. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
