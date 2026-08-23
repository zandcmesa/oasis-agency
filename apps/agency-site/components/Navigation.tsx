"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "How", href: "/how-we-work" },
  { label: "Contact", href: "/contact" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="border-b border-soft-clay/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <Link
            href="/"
            className="font-display text-3xl font-semibold text-oasis-green hover:text-oasis-green/80 transition-colors"
          >
            Oasis
          </Link>
          <div className="flex gap-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-base font-medium transition-colors hover:text-oasis-green relative ${
                  pathname === item.href
                    ? "text-oasis-green"
                    : "text-ink/60"
                }`}
              >
                {item.label}
                {pathname === item.href && (
                  <span className="absolute -bottom-6 left-0 right-0 h-0.5 bg-oasis-green" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
