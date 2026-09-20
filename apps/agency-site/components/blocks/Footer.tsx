import Link from "next/link";
import { FitText } from "@/components/ui/FitText";

interface FooterProps {
  links: { label: string; href: string }[];
  products: string[];
  social: { label: string; href: string }[];
  legal: { label: string; href: string }[];
}

export function Footer({ links, products, social, legal }: FooterProps) {
  return (
    <footer className="bg-paper text-ink border-t border-line overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20">
        <div className="grid md:grid-cols-12 gap-12 pb-16">
          <div className="md:col-span-6">
            <p className="text-heading max-w-md">Cutting-edge tech + design for ambitious brands.</p>
            <p className="text-body-s text-ink-muted mt-4">We love helping churches, ministries, and non-profits.</p>
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
            {social.map((s) => (
              <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-oasis-green transition-colors duration-[var(--dur-fast)]">{s.label}</a>
            ))}
            <p>Built by Oasis. Custom code, no templates.</p>
          </div>
        </div>
      </div>
      <div className="relative border-t border-line">
        <div aria-hidden className="absolute inset-0 footer-glow" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-8 md:py-12">
          <FitText as="p" className="text-wordmark text-ink">oasis</FitText>
        </div>
      </div>
    </footer>
  );
}
