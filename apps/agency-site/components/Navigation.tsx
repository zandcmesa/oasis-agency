"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="px-6 lg:px-8 py-6 border-b border-soft-clay/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-2xl font-semibold text-ink hover:text-oasis-green transition-colors"
        >
          Oasis
        </Link>

        <div className="flex items-center gap-8">
          <Link
            href="/work"
            className={`text-base font-medium transition-colors ${
              isActive("/work")
                ? "text-oasis-green"
                : "text-ink/70 hover:text-ink"
            }`}
          >
            Work
          </Link>
          <Link
            href="/how-we-work"
            className={`text-base font-medium transition-colors ${
              isActive("/how-we-work")
                ? "text-oasis-green"
                : "text-ink/70 hover:text-ink"
            }`}
          >
            How we work
          </Link>
          <Link
            href="/contact"
            className={`text-base font-medium transition-colors ${
              isActive("/contact")
                ? "text-oasis-green"
                : "text-ink/70 hover:text-ink"
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
