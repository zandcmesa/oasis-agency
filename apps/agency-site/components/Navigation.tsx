"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <nav className="px-6 lg:px-8 py-6 border-b border-soft-clay/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-2xl font-semibold text-ink hover:text-oasis-green transition-colors"
          onClick={() => setMobileMenuOpen(false)}
        >
          Oasis
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col items-center justify-center w-11 h-11 focus:outline-none focus:ring-2 focus:ring-oasis-green focus:ring-offset-2 focus:ring-offset-paper rounded-lg"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-ink transition-all ${
              mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-ink mt-1.5 transition-all ${
              mobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-ink mt-1.5 transition-all ${
              mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-paper z-50 pt-20">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 flex flex-col items-center justify-center w-11 h-11 focus:outline-none focus:ring-2 focus:ring-oasis-green focus:ring-offset-2 focus:ring-offset-paper rounded-lg"
            aria-label="Close menu"
          >
            <span className="block w-6 h-0.5 bg-ink rotate-45 translate-y-1.5" />
            <span className="block w-6 h-0.5 bg-ink opacity-0" />
            <span className="block w-6 h-0.5 bg-ink -rotate-45 -translate-y-1.5" />
          </button>

          <div className="flex flex-col items-center gap-8 px-6">
            <Link
              href="/work"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-2xl font-display font-semibold transition-colors min-h-[44px] flex items-center ${
                isActive("/work")
                  ? "text-oasis-green"
                  : "text-ink/70 hover:text-ink"
              }`}
            >
              Work
            </Link>
            <Link
              href="/how-we-work"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-2xl font-display font-semibold transition-colors min-h-[44px] flex items-center ${
                isActive("/how-we-work")
                  ? "text-oasis-green"
                  : "text-ink/70 hover:text-ink"
              }`}
            >
              How we work
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-2xl font-display font-semibold transition-colors min-h-[44px] flex items-center ${
                isActive("/contact")
                  ? "text-oasis-green"
                  : "text-ink/70 hover:text-ink"
              }`}
            >
              Contact
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center px-8 py-4 bg-oasis-green text-paper font-medium text-lg rounded-xl hover:bg-oasis-green/90 transition-all min-h-[44px] mt-4"
            >
              Start a project
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
