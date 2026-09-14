import Link from "next/link";
import { SplitText } from "@/components/ui/SplitText";

interface FooterProps {
  links: { label: string; href: string }[];
  products: string[];
}

export function Footer({ links, products }: FooterProps) {
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
        <div className="border-t border-line py-6 flex flex-wrap justify-between gap-4 text-body-s text-ink-subtle">
          <p>© {new Date().getFullYear()} Oasis Creative Studios</p>
          <p>Built by Oasis. Custom code, no templates.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 translate-y-[0.1em]">
        <SplitText as="p" effect="rise" className="text-wordmark text-ink text-center">Oasis</SplitText>
      </div>
    </footer>
  );
}
