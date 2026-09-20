"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { HoverSwapLink } from "@/components/ui/HoverSwapLink";
import { Wordmark } from "@/components/ui/Wordmark";
import { dur, ease } from "@/lib/motion";

const links = [
  { label: "Work", href: "/work" },
  { label: "How we work", href: "/how-we-work" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const overHero = ["/", "/system"].includes(pathname.replace(/\/$/, "") || "/");
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 80);
    setScrolled(y > 8);
    setPastHero(y > window.innerHeight * 0.8);
  });

  const solid = overHero ? pastHero : scrolled;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const light = overHero && !solid;

  return (
    <>
      <motion.header
        className="fixed top-0 inset-x-0 z-50"
        animate={{ y: hidden && !open ? "-100%" : "0%" }}
        transition={{ duration: dur.base, ease: ease.outExpo }}
      >
        <div
          className={`px-6 lg:px-8 transition-[background-color,border-color,color,padding] duration-[var(--dur-base)] ease-[var(--ease-out-expo)] border-b ${
            solid ? "glass-paper border-line py-4" : "border-transparent py-6"
          } ${light ? "text-paper" : "text-ink"}`}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link href="/" className="block hover:opacity-80 transition-opacity" onClick={() => setOpen(false)} aria-label="Oasis home">
              <Wordmark className="h-8 w-auto" />
            </Link>

            <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
              {links.map((l) => (
                <HoverSwapLink key={l.href} href={l.href} active={pathname === l.href}>
                  {l.label}
                </HoverSwapLink>
              ))}
              <Button href="/contact" variant={light ? "onDark" : "primary"} size="md" className="ml-2">
                Start a project
              </Button>
            </nav>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden relative w-11 h-11 -mr-2 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current"
              aria-expanded={open}
              aria-label="Toggle menu"
            >
              <span className={`absolute left-1/2 top-1/2 -translate-x-1/2 block w-6 h-0.5 bg-current transition-transform duration-[var(--dur-base)] ease-[var(--ease-out-expo)] ${open ? "rotate-45" : "-translate-y-[4px]"}`} />
              <span className={`absolute left-1/2 top-1/2 -translate-x-1/2 block w-6 h-0.5 bg-current transition-transform duration-[var(--dur-base)] ease-[var(--ease-out-expo)] ${open ? "-rotate-45" : "translate-y-[4px]"}`} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden fixed inset-0 z-40 bg-paper text-ink flex flex-col justify-center px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: dur.fast }}
          >
            <ul className="flex flex-col gap-2">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: dur.base, delay: 0.1 + i * 0.08, ease: ease.outExpo }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`block text-display-m py-3 ${pathname === l.href ? "text-oasis-green" : "text-ink"}`}
                  >
                    {l.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: dur.base, delay: 0.4, ease: ease.outExpo }}
              className="mt-10"
            >
              <Button href="/contact" size="lg" arrow onClick={() => setOpen(false)}>
                Start a project
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
