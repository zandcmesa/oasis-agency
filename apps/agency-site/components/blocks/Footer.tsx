import Link from "next/link";
import { FitText } from "@/components/ui/FitText";

interface FooterProps {
  links: { label: string; href: string }[];
  products: string[];
  social: { label: string; href: string }[];
  legal: { label: string; href: string }[];
}

function YouTubeIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
    </svg>
  );
}

export function Footer({ links, products, social, legal }: FooterProps) {
  return (
    <footer className="bg-paper text-ink border-t border-line overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20">
        <div className="grid md:grid-cols-12 gap-12 pb-16">
          <div className="md:col-span-6">
            <p className="text-heading max-w-md">Cutting-edge tech + design for ambitious brands.</p>
            <p className="text-body-s text-ink-muted mt-4">We love helping churches, ministries, and non-profits.</p>
            <div className="flex gap-4 mt-6">
              {social.map((s) => (
                <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="text-oasis-green hover:text-ink transition-colors duration-[var(--dur-fast)]">
                  <YouTubeIcon />
                </a>
              ))}
            </div>
          </div>
          <div className="md:col-span-3">
            <p className="text-eyebrow text-ink-subtle mb-5">Navigate</p>
            <ul className="flex flex-col gap-3">
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-ink-muted hover:text-oasis-green transition-colors duration-[var(--dur-fast)]">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="text-eyebrow text-ink-subtle mb-5">Products</p>
            <ul className="flex flex-col gap-3 text-ink-muted">
              {products.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pb-10 flex flex-wrap justify-between gap-4 text-body-s text-ink-subtle">
          <p>© {new Date().getFullYear()} Oasis Creative Studios</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {legal.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-oasis-green transition-colors duration-[var(--dur-fast)]">{l.label}</Link>
            ))}
          </div>
        </div>
      </div>
      <div className="relative border-t border-line">
        <div aria-hidden className="absolute inset-0 footer-glow" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-6 md:py-10">
          <FitText as="p" className="text-wordmark text-ink">oasis</FitText>
        </div>
      </div>
    </footer>
  );
}
