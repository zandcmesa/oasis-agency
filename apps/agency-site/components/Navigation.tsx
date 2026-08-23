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
    <nav className="border-b border-ink/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="font-display text-2xl font-semibold text-oasis-green hover:text-oasis-green/80 transition-colors"
          >
            Oasis
          </Link>
          <div className="flex gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-oasis-green ${
                  pathname === item.href
                    ? "text-oasis-green"
                    : "text-ink/70"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
