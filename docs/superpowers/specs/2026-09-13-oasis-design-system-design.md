# Oasis Design System and Building Blocks

Date: 2026-09-13
Status: approved

## Goal

Give the Oasis agency site (`apps/agency-site`, Next.js 16 static export, Tailwind 4, Framer Motion) a fine-tuned design system and a kit of reusable, motion-rich building blocks modeled on the Salient "Harbor" demo, then rebuild the homepage from those blocks. The site is itself a portfolio piece for the website product.

## Decisions already made

- Oasis sells five things: Websites, AI agent workers and teams, Digital presence strategy, Social media content, Promotional video. Any sector; churches, ministries, and non-profits called out as loved.
- Headlines switch to a sans serif. Fraunces (serif) is reserved for wordmark moments only.
- Hero call to action is a contact form, not a scheduler.
- Metrics use truthful numbers: years in tech and design, brands shipped for (Google, HubSpot, TJX), five product lines. Year count to be confirmed by owner (placeholder 19).
- No pricing tiers block.
- Hero video is the Artlist grass clip (`~/Desktop/340871_Thailand Wind Wild Grass Mountains_By_Roma_Black_Artlist_HD.mp4`). Living-wall loop and still are deleted.
- Framer Motion for scroll-linked and reveal motion; pure CSS for hover swaps, arrow button, and ticker. No smooth-scroll library.

## Harbor motion reference (measured)

- Split text: words in `overflow:hidden` spans, inner starts `translateY(1.3em)`, animates to 0 with stagger. Variants: fade (`opacity 0, translateY .5em`), blur (`blur(10px), opacity 0, translateY .25em`), scroll-fill (words at opacity .2 filling to 1 as scroll progresses, `.65s ease`).
- Nav hover: text `translateY(-100%)`, duplicate from `bottom:-120%` to `translateY(-20%)`, `.55s cubic-bezier(.25,1,.33,1)`.
- Arrow button: `.55s cubic-bezier(0.12,0.75,0.4,1)`; arrow exits `translate(50%,-150%)`, `.hover` arrow enters from `top:100%; left:0`; circle bg swaps and `clip-path: circle(45%)`.
- Header: permanently transparent, hides on scroll down, shows on scroll up. Logo 24px, padding 22px.
- Ticker: `translateX(-20%) -> translateX(-120%)` linear infinite, 14s "slow", edge mask `transparent 0, black 10%, black 90%, transparent 100%`, chunks separated by a divider.
- Horizontal rail: pinned section, cards 85% viewport wide, 100vh section, 5px gap, 15px radius, translateX driven by scroll with easeInOutSine.
- Metrics: frosted pill label (white 12%, blur 12px, radius 20px, padding .5em 1em), number ~3vw min 40px, one-line description max 280px.
- Images: `scale(1.275)` settling to 1 on reveal. Blocks: slight fade in from bottom. Radii used: 15px, 20px, 100px.

## Tokens (`app/globals.css`, Tailwind `@theme`)

### Color
- `paper #F6F1EA`, `ink #0E141B`, `oasis-green #1A5C4A`, `soft-clay #C4A484` (kept)
- `spring #8FCDB0` accent on dark surfaces
- `ink-muted` = ink 70%, `ink-subtle` = ink 50%
- `on-dark` = paper, `on-dark-muted` = paper 70%, `on-dark-subtle` = paper 45%
- `line` = ink 12% (hairline on paper), `line-on-dark` = white 22% (hairline on video/ink)
- `glass` = white 12% + `backdrop-blur 12px`; `glass-ink` = ink 40% + blur 12px
- Surfaces: `paper`, `ink`, `card` = white 55% on paper

### Typography
- `--font-sans`: Inter Tight (next/font/google, weights 400/500/600/700). Replaces Geist everywhere.
- `--font-display-serif`: Fraunces, used only for the footer wordmark and any explicit `serif` prop.
- Scale (fluid, clamp):
  - `display-xl` clamp(3rem, 7.5vw, 7.5rem) / 0.95 / -0.03em / 600
  - `display-l` clamp(2.5rem, 5vw, 5rem) / 1.0 / -0.025em / 600
  - `display-m` clamp(2rem, 3.5vw, 3.25rem) / 1.05 / -0.02em / 600
  - `heading` clamp(1.375rem, 1.8vw, 1.75rem) / 1.2 / -0.01em / 600
  - `body-l` 1.25rem / 1.5, `body` 1.0625rem / 1.6, `body-s` 0.9375rem / 1.5
  - `eyebrow` 0.75rem / 1 / 0.12em uppercase / 500
  - `metric` clamp(2.5rem, 4vw, 4.5rem) / 1 / -0.03em / 600 tabular-nums
  - `wordmark` clamp(6rem, 24vw, 30rem) / 0.8 Fraunces 600

### Shape
- `radius-sm 12px` inputs, `radius-md 16px` cards, `radius-lg 20px` media, `radius-pill 999px`.

### Elevation
- 0: hairline border only.
- 1: glass (see color).
- 2: card hover, `translateY(-4px)` + `0 24px 48px -24px ink/30`.
- 3: overlay (mobile menu) full paper.

### Motion
- Durations: `fast 200ms`, `base 550ms`, `slow 900ms`, `ticker 28s`.
- Easings: `out-expo cubic-bezier(0.16,1,0.3,1)` reveals; `swap cubic-bezier(.25,1,.33,1)` text swap; `arrow cubic-bezier(0.12,0.75,0.4,1)` arrow button; `in-out-sine` rail.
- Stagger: 60ms per word, 80ms per card/list item.
- Rules: reveal once (`once: true`, margin `-10%`); text reveals from a clipped bottom edge; images settle from 1.25 to 1; hovers swap rather than fade; `prefers-reduced-motion` makes reveals instant, stops the ticker, and shows the poster instead of video.

## Primitives (`components/ui/`)

- `Button` — props `variant: primary | onDark | ghost`, `size: md | lg`, `href | onClick`, `arrow?: boolean`. Primary: green pill, paper text. onDark: paper pill with glass blur, ink text. Ghost: underline link. `arrow` renders the arrow-circle with the Harbor swap animation (CSS).
- `SplitText` — props `as`, `effect: rise | fade | blur | scrollFill`, `delay`, `stagger`, `className`. Splits on spaces; each word in a clipped span. `scrollFill` uses `useScroll` on the element to map progress to per-word opacity.
- `Reveal` — replaces `FadeIn`. Slight fade from bottom, `delay`, `once`.
- `MediaReveal` — wraps `<img>`/`<video>`; scale 1.25 -> 1 on reveal, radius lg, overflow hidden.
- `Eyebrow` — uppercase label; `tone: paper | ink`.
- `Badge` — glass pill label.
- `Section` — `tone: paper | ink`, padding scale, optional `lines` (hairline top/bottom), container width.
- `HoverSwapLink` — text-swap hover, CSS only.
- `ArrowIcon` — the 24px up-right arrow SVG.

## Blocks (`components/blocks/`)

- `Header` — fixed, transparent over hero (paper wordmark and links), frosted paper bar with ink text once scrolled past 80vh, hides on scroll down and shows on scroll up (`base`, `out-expo`). Links use `HoverSwapLink`. Mobile overlay with staggered links and the primary button.
- `Hero` — `min-h-[100svh]`, background `<video>` (grass) with poster and reduced-motion fallback, scrim `linear-gradient(to top, ink/70, ink/20 45%, transparent 75%)`. 12-column grid with `line-on-dark` vertical hairlines. Left 8 columns: eyebrow, `display-xl` headline via `SplitText rise`, one-line sub. Right 4 columns: `ContactForm` in a glass card. Bottom-left: scroll cue with looping arrow (`translateY(-100%) -> 0`, 1.6s) and label "Scroll".
- `ContactForm` — name, email, product `<select>` (five products), message. Posts JSON to `NEXT_PUBLIC_FORM_ENDPOINT` (Formspree-compatible). If unset, opens `mailto:` with the fields prefilled. States: idle, submitting, success, error. Used in hero and on `/contact`.
- `Ticker` — items with divider, edge mask, 28s linear infinite, pauses on hover, static under reduced motion. `tone: paper | ink`.
- `AboutSplit` — two columns: left eyebrow + `display-l` headline; right body copy, the churches line, brand row (Google, HubSpot, TJX as text), ghost CTA.
- `ServicesRail` — desktop: pinned section, height `= cards * 100vh`, sticky inner `100vh`, cards translateX from 0 to `-(totalWidth - viewport)` with `useScroll` + `useTransform` + `useSpring`. Cards 85vw x ~72vh, radius lg, gap 16px. Card: number `01`, title `display-m`, copy, media on the right half (image via `MediaReveal`, or typographic green panel when no image), ghost link. Mobile (<1024px): native `overflow-x: auto` scroll-snap rail, cards 85vw.
- `StatementReveal` — full-width `display-l` statement using `SplitText scrollFill`.
- `Metrics` — 3 columns, each `Badge` label, `metric` number with count-up on reveal (900ms out-expo), one line max 280px. Hairline between columns on desktop.
- `Testimonials` — 3 cards, radius md, hairline, hover lift; quote `heading`, name, role, initial avatar. Sample copy only; not on homepage.
- `CTABand` — `display-l` headline + primary arrow button, `tone: ink`.
- `Footer` — link columns and copyright, then the wordmark "Oasis" in Fraunces at `wordmark` size, clipped at the bottom edge, revealed with `SplitText rise` (single word).

## Pages

- `/` — Header, Hero, Ticker, AboutSplit, ServicesRail, StatementReveal, Metrics, CTABand, Footer. Existing sectors grid and work grid removed from the homepage (work page unchanged).
- `/system` — not linked from nav. Sections: Color, Type scale, Shape, Elevation, Motion (each easing/duration demoed), then every block with sample props.
- `/contact` — uses `ContactForm`.
- `/how-we-work` and `/work` — only the font and header change; layout untouched.

## Content

- Hero headline: "Cutting-edge tech + design for ambitious brands." Sub: "Websites, AI agent teams, strategy, content, and video. One team that actually builds."
- Ticker: the five product names separated by a divider, plus "Start a project".
- Services (title / copy):
  1. Websites / Custom Next.js, headless, fast. Not a template shop.
  2. AI agent workers & teams / Named workers that do real jobs. After-Hours Catcher and Front Desk SMS are the beauty pack.
  3. Digital presence strategy / SEO, AI search, and the plan behind all of it.
  4. Social media content / Strategy and execution. On-brand, on schedule.
  5. Promotional video / B-roll production with premium craft.
- Statement: "Most agencies hand you a template and hit a wall the first time you need something real. We build the thing."
- About: who Oasis is, one line: "We love helping churches, ministries, and non-profits."
- Metrics: `19+` Years in tech and design; `3` Global brands shipped for (Google, HubSpot, TJX); `5` Product lines, one team.
- CTA band: "Ready to build?"

## Assets

- `public/atmosphere/hero-grass.mp4`: H.264, 1920x1080, no audio, CRF ~26, target under 5 MB. `hero-grass.jpg` poster from the first frame.
- Delete `oasis-living-wall-loop.mp4` and `oasis-living-wall.jpg`.
- Wordmark SVG must render in paper on the hero and ink elsewhere (use `currentColor` in the SVG or a CSS filter).

## Docs

- `apps/agency-site/DESIGN.md` rewritten as the rulebook: tokens, type scale, motion rules, block inventory with usage, and the voice section carried over.
- `CLAUDE.md` services list updated to the five products.

## Verification

- `npm run lint` and `npm run build` pass.
- Headless-browser screenshots of `/` and `/system` at 1440px and 390px widths reviewed for layout breakage.
- Reduced-motion check: reveals instant, ticker static, poster shown.

## Out of scope

Pricing tiers, scheduler embed, smooth-scroll library, real testimonials, changes to the work page layout.
