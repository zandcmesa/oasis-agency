# Oasis Design System and Building Blocks Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Give the Oasis site a tokenized design system and a kit of Harbor-grade motion building blocks, then rebuild the homepage from them.

**Architecture:** Tokens live in Tailwind 4 `@theme` in `globals.css`. Primitives (`components/ui/`) own single behaviors (text reveal, button, badge). Blocks (`components/blocks/`) compose primitives into page sections and take content as props. Pages assemble blocks. `/system` renders every token and block for review.

**Tech Stack:** Next.js 16 (static export, basePath `/oasis-agency`), React 19, Tailwind 4, Framer Motion 13, next/font/google (Inter Tight, Fraunces), ffmpeg for assets.

**Spec:** `docs/superpowers/specs/2026-09-13-oasis-design-system-design.md`

## Global Constraints

- Static export: no server code, no API routes. Form posts to `NEXT_PUBLIC_FORM_ENDPOINT` or falls back to `mailto:`.
- All asset URLs go through `withBasePath()` from `lib/utils.ts`.
- Radii: 12px inputs, 16px cards, 20px media, pill. Nothing else.
- Durations: 200ms, 550ms, 900ms, ticker 28s. Easings: `out-expo cubic-bezier(0.16,1,0.3,1)`, `swap cubic-bezier(.25,1,.33,1)`, `arrow cubic-bezier(0.12,0.75,0.4,1)`.
- Reveals run once. Every animation honors `prefers-reduced-motion`.
- Voice: first person plural, direct, no "easy" or "simple", no superlatives.
- Minimal comments. No docstrings.
- Verification per task: `npm run lint` and `npm run build` pass. No test framework exists in this project; visual verification is by screenshot in Task 13.

---

### Task 1: Assets

**Files:**
- Create: `public/atmosphere/hero-grass.mp4`, `public/atmosphere/hero-grass.jpg`
- Delete: `public/atmosphere/oasis-living-wall-loop.mp4`, `public/atmosphere/oasis-living-wall.jpg`
- Modify: `public/oasis-wordmark.svg` (fill `#292929` -> `currentColor`)

- [ ] Compress: `ffmpeg -i "$HOME/Desktop/340871_Thailand Wind Wild Grass Mountains_By_Roma_Black_Artlist_HD.mp4" -an -vf "scale=1920:-2" -c:v libx264 -preset slow -crf 27 -pix_fmt yuv420p -movflags +faststart public/atmosphere/hero-grass.mp4`
- [ ] Poster: `ffmpeg -i public/atmosphere/hero-grass.mp4 -ss 0.5 -frames:v 1 -q:v 3 public/atmosphere/hero-grass.jpg`
- [ ] Confirm mp4 under 5 MB, delete living-wall files, edit SVG fill.
- [ ] Commit.

### Task 2: Tokens and fonts

**Files:**
- Modify: `app/globals.css`, `app/layout.tsx`, `package.json` (remove `geist`)

**Produces:** Tailwind utilities `text-display-xl|display-l|display-m|heading|body-l|body|body-s|eyebrow|metric|wordmark`, colors `paper ink oasis-green soft-clay spring`, `rounded-sm|md|lg|pill` mapped to 12/16/20/999, CSS vars `--ease-out-expo --ease-swap --ease-arrow --dur-fast --dur-base --dur-slow`, utilities `.glass .glass-ink .hairline .hairline-dark`, and `data-tone="ink"` sections.

- [ ] Replace `@theme` with the token set from the spec. Define `--font-sans: var(--font-inter-tight)`, `--font-serif: var(--font-fraunces)`.
- [ ] Add `@utility` blocks for the type scale (font-size, line-height, letter-spacing, weight together).
- [ ] Add reduced-motion rule and `.text-fill-word` helpers.
- [ ] `layout.tsx`: load `Inter_Tight` (400/500/600/700) and `Fraunces`; drop Geist import; body uses `font-sans`.
- [ ] `npm uninstall geist`. Build passes. Commit.

### Task 3: Primitives

**Files:**
- Create: `components/ui/ArrowIcon.tsx`, `components/ui/Button.tsx`, `components/ui/SplitText.tsx`, `components/ui/Reveal.tsx`, `components/ui/MediaReveal.tsx`, `components/ui/Eyebrow.tsx`, `components/ui/Badge.tsx`, `components/ui/Section.tsx`, `components/ui/HoverSwapLink.tsx`, `lib/motion.ts`
- Delete: `components/Button.tsx`, `components/FadeIn.tsx` (after callers migrate in Task 10)

**Produces (exact signatures):**
```ts
// lib/motion.ts
export const ease = { outExpo: [0.16, 1, 0.3, 1], swap: [0.25, 1, 0.33, 1], arrow: [0.12, 0.75, 0.4, 1] } as const
export const dur = { fast: 0.2, base: 0.55, slow: 0.9 } as const
export const viewportOnce = { once: true, margin: "-10% 0px" } as const
export function useReducedMotion(): boolean  // re-export from framer-motion

// Button
type ButtonProps = { variant?: "primary" | "onDark" | "ghost"; size?: "md" | "lg"; href?: string; onClick?: () => void; type?: "button" | "submit"; disabled?: boolean; arrow?: boolean; className?: string; children: ReactNode }

// SplitText
type SplitTextProps = { as?: "h1"|"h2"|"h3"|"p"|"span"; effect?: "rise" | "fade" | "blur" | "scrollFill"; delay?: number; stagger?: number; className?: string; children: string }

// Reveal
type RevealProps = { delay?: number; className?: string; children: ReactNode; as?: "div" | "li" }

// MediaReveal
type MediaRevealProps = { className?: string; children: ReactNode }  // wraps img/video; applies scale 1.25 -> 1

// Eyebrow: { tone?: "ink" | "paper"; className?: string; children: ReactNode }
// Badge: { tone?: "dark" | "light"; children: ReactNode }   // dark = glass on media/ink
// Section: { tone?: "paper" | "ink"; lines?: boolean; id?: string; className?: string; children: ReactNode; width?: "wide" | "text" }
// HoverSwapLink: { href: string; className?: string; children: string; onClick?: () => void; active?: boolean }
```

- [ ] `SplitText`: split on spaces; each word `<span class="inline-block overflow-hidden align-bottom"><motion.span class="inline-block">`. `rise`: y `1.3em -> 0`. `fade`: y `.5em`, opacity 0 -> 1. `blur`: filter `blur(10px)`, y `.25em`, opacity 0. Stagger 0.06, duration `dur.base`, ease `outExpo`. `scrollFill`: `useScroll({ target, offset: ["start 85%", "end 45%"] })`; each word opacity = `useTransform(progress, [i/n, (i+1)/n], [0.2, 1])`. Reduced motion: render plain text.
- [ ] `Button`: arrow-circle CSS in `globals.css` under `.btn-arrow` using `--ease-arrow` and the Harbor transforms (`translate(50%,-150%)` out, second arrow from `top:100%; left:0`, circle `clip-path: circle(45%)` on hover).
- [ ] `HoverSwapLink`: `.swap` CSS: `overflow:hidden; display:block`; `.swap__text` with `::after { content: attr(data-text); position:absolute; left:0; bottom:-120% }`; hover `translateY(-100%)` and `::after translateY(-20%)`, `.55s var(--ease-swap)`.
- [ ] Build passes. Commit.

### Task 4: Header block

**Files:**
- Create: `components/blocks/Header.tsx`
- Delete: `components/Navigation.tsx` (Task 10 swaps the import)

**Behavior:** `fixed top-0 inset-x-0 z-50`. State `hidden` (scroll down past 80px) and `solid` (scrollY > 0.8 * innerHeight). Uses `useScroll` + `useMotionValueEvent("scrollY")` to compare with previous value. Transparent: paper text, `.glass-ink` none. Solid: `.glass` bar (paper 70% + blur 12) with ink text and hairline bottom. Transition `transform`/`background` over `dur.base` `outExpo`. Links: Work, How we work, Contact via `HoverSwapLink`; right side primary `Button size="md"` "Start a project" hidden below `md`. Mobile: hamburger (existing 3-bar) opening a paper overlay with links staggered by `Reveal`. Wordmark: `<img>` replaced by inline SVG component `components/ui/Wordmark.tsx` using `currentColor`.

- [ ] Create `components/ui/Wordmark.tsx` (inline the SVG paths from `public/oasis-wordmark.svg`, `fill="currentColor"`, `height` prop).
- [ ] Build `Header`. Commit.

### Task 5: Hero, ContactForm, ScrollCue

**Files:**
- Create: `components/blocks/Hero.tsx`, `components/blocks/ContactForm.tsx`, `components/ui/ScrollCue.tsx`
- Delete: `components/HeroAtmosphere.tsx`

**Produces:**
```ts
type HeroProps = { eyebrow: string; headline: string; sub: string; products: string[] }
type ContactFormProps = { products: string[]; tone?: "dark" | "light"; compact?: boolean }
```

- [ ] `ContactForm`: fields name, email, product select, message. Submit: if `process.env.NEXT_PUBLIC_FORM_ENDPOINT` set, `fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body })`; else `window.location.href = "mailto:hello@oasis.studio?subject=...&body=..."`. States idle | submitting | success | error. Inputs: `rounded-sm`, hairline border, `bg-white/8` on dark, focus ring `spring` on dark and `oasis-green` on light.
- [ ] `ScrollCue`: label "Scroll" + arrow in a 40px circle with hairline; arrow loops `y: [-100%, 0]` 1.6s `easeInOut` repeat, `repeatDelay 0.6`. Reduced motion: static.
- [ ] `Hero`: `<section class="relative min-h-[100svh] flex flex-col">` with `<video autoPlay muted loop playsInline poster>` (reduced motion: `<img>` poster). Scrim div. Grid `grid-cols-12` with absolutely positioned hairline-dark columns at 8/12 boundary (desktop only). Left: `Eyebrow tone="paper"`, `SplitText as="h1" effect="rise" className="text-display-xl text-paper"`, sub `text-body-l text-on-dark-muted`. Right (`lg:col-span-4`): `.glass rounded-lg p-6` with heading "Start a conversation" and `ContactForm tone="dark"`. Bottom row: `ScrollCue`. Entrance: headline delay 0.2, sub 0.5, form card `Reveal delay 0.7`.
- [ ] Commit.

### Task 6: Ticker

**Files:**
- Create: `components/blocks/Ticker.tsx`

```ts
type TickerProps = { items: string[]; tone?: "paper" | "ink"; speed?: number /* seconds, default 28 */ }
```

- [ ] CSS in `globals.css`: `.ticker { mask-image: linear-gradient(to right, transparent 0, black 10%, black 90%, transparent 100%) }`, `.ticker__track { display:flex; width:max-content; animation: ticker var(--ticker-dur, 28s) linear infinite }`, `.ticker:hover .ticker__track { animation-play-state: paused }`, `@keyframes ticker { to { transform: translateX(-50%) } }`. Render items twice, divider `•` in `soft-clay`, `text-eyebrow`. Reduced motion: no animation.
- [ ] Commit.

### Task 7: AboutSplit, StatementReveal, Metrics, CTABand, Footer

**Files:**
- Create: `components/blocks/AboutSplit.tsx`, `components/blocks/StatementReveal.tsx`, `components/blocks/Metrics.tsx`, `components/blocks/CTABand.tsx`, `components/blocks/Footer.tsx`
- Delete: `components/Footer.tsx` (Task 10)

```ts
type AboutSplitProps = { eyebrow: string; headline: string; body: string; loveLine: string; brands: string[]; cta: { label: string; href: string } }
type StatementRevealProps = { text: string; tone?: "paper" | "ink" }
type Metric = { value: number; suffix?: string; label: string; detail: string }
type MetricsProps = { items: Metric[]; tone?: "paper" | "ink" }
type CTABandProps = { headline: string; cta: { label: string; href: string } }
type FooterProps = { links: { label: string; href: string }[]; products: string[] }
```

- [ ] `Metrics`: count-up with `useMotionValue(0)` + `animate(mv, value, { duration: dur.slow, ease: ease.outExpo })` when in view; display via `useTransform(mv, Math.round)` rendered through `motion.span`. Reduced motion: static value.
- [ ] `Footer`: link columns + copyright, then `<div class="overflow-hidden leading-[0.8]"><SplitText effect="rise" className="text-wordmark font-serif">Oasis</SplitText></div>` with negative bottom margin so the baseline sits on the page edge.
- [ ] Commit.

### Task 8: ServicesRail

**Files:**
- Create: `components/blocks/ServicesRail.tsx`, `components/blocks/ServiceCard.tsx`

```ts
type Service = { number: string; title: string; copy: string; image?: string; alt?: string; href: string }
type ServicesRailProps = { eyebrow: string; headline: string; services: Service[] }
```

- [ ] Desktop (`lg`): outer `section` height `calc(${n} * 100vh)`; inner `sticky top-0 h-screen overflow-hidden flex items-center`. Track `motion.div` with `x = useSpring(useTransform(scrollYProgress, [0, 1], [0, -(trackWidth - viewportWidth + padding)]), { stiffness: 120, damping: 30 })`. Measure `trackWidth` with a ref and `ResizeObserver`. Headline sits above the track inside the sticky area.
- [ ] Mobile: `overflow-x-auto snap-x snap-mandatory flex gap-4 px-6`, cards `snap-start shrink-0 w-[85vw]`.
- [ ] `ServiceCard`: `rounded-lg` `bg-ink text-paper` (or `bg-oasis-green` for cards without image), `grid lg:grid-cols-2`, left: number `text-metric text-spring`, title `text-display-m`, copy, ghost button; right: `MediaReveal` image or typographic panel with the number at `text-wordmark` clipped.
- [ ] Commit.

### Task 9: Testimonials

**Files:**
- Create: `components/blocks/Testimonials.tsx`

```ts
type Testimonial = { quote: string; name: string; role: string }
type TestimonialsProps = { eyebrow: string; headline: string; items: Testimonial[] }
```

- [ ] 3-up grid, cards `rounded-md hairline bg-white/55 p-8`, hover lift (`elevation-2` utility), quote `text-heading`, initial avatar circle `bg-oasis-green text-paper`. Commit.

### Task 10: Page assembly

**Files:**
- Modify: `app/layout.tsx`, `app/page.tsx`, `app/contact/page.tsx`, `app/how-we-work/page.tsx`, `app/work/page.tsx`
- Create: `content/site.ts` (all homepage copy and the services array)
- Delete: `components/Button.tsx`, `components/FadeIn.tsx`, `components/Navigation.tsx`, `components/Footer.tsx`, `components/HeroAtmosphere.tsx`

- [ ] `content/site.ts` exports `products`, `services`, `hero`, `about`, `statement`, `metrics`, `ctaBand`, `footerLinks`, `testimonialsSample`.
- [ ] Homepage order: Hero, Ticker, AboutSplit, ServicesRail, StatementReveal, Metrics, CTABand. Header and Footer in layout.
- [ ] Other pages: swap `FadeIn` -> `Reveal`, `Button` import path, `font-display` -> `font-sans` on headings (`text-display-l`). Contact page uses `ContactForm tone="light"`.
- [ ] Lint and build pass. Commit.

### Task 11: /system page

**Files:**
- Create: `app/system/page.tsx`, `components/system/TokenSwatches.tsx`, `components/system/TypeScale.tsx`, `components/system/MotionDemo.tsx`

- [ ] Sections: Color (swatch grid with hex), Type (each step rendered with its name), Shape (radius squares), Elevation (four boxes), Motion (three easing curves animated on a button click, durations listed), then Buttons (all variants), SplitText (four effects), Badge/Eyebrow, then each block with sample props from `content/site.ts`, including Testimonials.
- [ ] `robots` meta `noindex`. Commit.

### Task 12: Docs

**Files:**
- Modify: `apps/agency-site/DESIGN.md`, `CLAUDE.md` (services list), `brainstorm/decisions.md` (five products, sans headlines, form not scheduler)

- [ ] Rewrite `DESIGN.md`: tokens with values, type scale table, motion rules, block inventory with props and usage, voice section carried over. Commit.

### Task 13: Verification

- [ ] `npm run lint`, `npm run build`.
- [ ] `npx serve out` (or `python3 -m http.server` in `out/`) and screenshot `/oasis-agency/` and `/oasis-agency/system/` at 1440x900 and 390x844 with headless Chrome: `"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --screenshot=... --window-size=1440,900 URL`. Review images.
- [ ] Reduced-motion check via Chrome flag `--force-prefers-reduced-motion`.
- [ ] Commit any fixes.
