# Oasis Design System

The rulebook for the Oasis site. Every token lives in `app/globals.css`. Every block renders on `/system` (not linked from the nav) so you can review the kit in one scroll.

## Tokens

### Color

| Token | Value | Use |
| --- | --- | --- |
| `paper` | `#F6F1EA` | Background |
| `ink` | `#0E141B` | Text, dark surfaces |
| `oasis-green` | `#1A5C4A` | Brand accent, primary CTA, eyebrows on paper |
| `soft-clay` | `#C4A484` | Warm secondary, ticker dividers |
| `spring` | `#8FCDB0` | Accent on dark surfaces (eyebrows, card numbers) |
| `ink-muted` / `ink-subtle` | ink 70% / 50% | Secondary and tertiary text on paper |
| `on-dark` / `on-dark-muted` / `on-dark-subtle` | paper 100% / 70% / 45% | Text on ink or video |
| `line` / `line-dark` | ink 12% / white 22% | Hairlines on paper / on ink or video |
| `card` | white 55% | Card surface on paper |

Utilities: `glass` (white 12% + 12px blur), `glass-paper` (paper 72% + blur, the scrolled header), `glass-ink` (ink 40% + blur), `hairline`, `hairline-dark`, `lift` (hover lift + shadow).

Rule: never use raw hex or arbitrary opacities in components. If you need a new color, add a token.

### Typography

Inter Tight for everything. Fraunces only for the wordmark moment in the footer and on `/system`.

| Utility | Size / line-height / tracking / weight | Use |
| --- | --- | --- |
| `text-display-xl` | clamp(3rem, 7.5vw, 7.5rem) / 0.95 / -0.03em / 600 | Hero, page titles, CTA band |
| `text-display-l` | clamp(2.5rem, 5vw, 5rem) / 1 / -0.025em / 600 | Section headlines, statements |
| `text-display-m` | clamp(2rem, 3.5vw, 3.25rem) / 1.05 / -0.02em / 600 | Card titles, brand row |
| `text-heading` | clamp(1.375rem, 1.8vw, 1.75rem) / 1.2 / -0.01em / 600 | Sub-headlines, quotes, form titles |
| `text-body-l` | 1.25rem / 1.5 | Lead paragraphs |
| `text-body` | 1.0625rem / 1.6 | Default |
| `text-body-s` | 0.9375rem / 1.5 | Captions, meta, form help |
| `text-eyebrow` | 0.75rem / 1 / 0.12em uppercase / 500 | Labels, badges, ticker |
| `text-metric` | clamp(2.5rem, 4vw, 4.5rem) / 1 / -0.03em / 600 tabular | Numbers |
| `text-wordmark` | Fraunces 600, clamp(6rem, 24vw, 30rem) / 0.8 | Footer wordmark only |

Rules: one display-xl per page. Headlines get `SplitText`, never a plain fade. Body copy maxes at about 60 characters per line (`max-w-xl` or `max-w-2xl`).

### Shape

`rounded-sm` 12px inputs. `rounded-md` 16px cards. `rounded-lg` 20px media and large cards. `rounded-pill` buttons and badges. No other radii.

### Elevation

Flat and line-based.

0. Hairline border only. Default for cards on paper.
1. Glass. Badges and panels sitting on video or imagery.
2. Lift. `lift` utility: translateY(-4px) and a soft shadow on hover. Interactive cards only.
3. Overlay. The mobile menu. Full paper.

No drop shadows anywhere else.

### Motion

Durations: `--dur-fast` 200ms (color changes), `--dur-base` 550ms (reveals, hovers, header), `--dur-slow` 900ms (hero headline, count-ups), ticker 28s.

Easings: `ease-out-expo` cubic-bezier(0.16, 1, 0.3, 1) for reveals and layout moves. `ease-swap` cubic-bezier(0.25, 1, 0.33, 1) for the nav text swap. `ease-arrow` cubic-bezier(0.12, 0.75, 0.4, 1) for the arrow button. Rail uses a spring (stiffness 120, damping 30).

Stagger: 60ms per word, 80ms per card or list item.

Rules:
- Reveals run once. Nothing re-animates on scroll back.
- Text reveals from a clipped bottom edge (`SplitText rise`). Blocks fade up 24px (`Reveal`). Images settle from 125% (`MediaReveal`).
- Hovers swap rather than fade: nav text slides, the arrow button exchanges arrows.
- Scroll-linked motion is limited to `StatementReveal` and `ServicesRail`.
- `prefers-reduced-motion`: reveals render final state, ticker stops, hero shows the poster, rail becomes a plain scroller.

Constants live in `lib/motion.ts`.

## Primitives (`components/ui/`)

| Component | Props | Notes |
| --- | --- | --- |
| `Button` | `variant: primary \| onDark \| ghost`, `size: md \| lg`, `arrow`, `href \| onClick`, `type`, `disabled` | `arrow` adds the circle with the swap animation. `onDark` is the paper pill for video and ink surfaces. |
| `SplitText` | `as`, `effect: rise \| fade \| blur \| scrollFill`, `delay`, `stagger` | Children must be a plain string. `scrollFill` ties word opacity to scroll. |
| `Reveal` | `delay`, `as: div \| li` | Replaces the old `FadeIn`. |
| `MediaReveal` | wraps an `img` or `video` | Scale settle plus `rounded-lg` and clipping. |
| `Eyebrow` | `tone: ink \| paper` | Dot plus label. |
| `Badge` | `tone: dark \| light` | Glass pill on dark, ink-tinted on paper. |
| `Section` | `tone: paper \| ink`, `lines`, `width: wide \| text`, `id` | Standard padding and container. |
| `HoverSwapLink` | `href`, `active` | Nav link with the text swap. |
| `ScrollCue` | `href`, `label` | Looping arrow in a hairline circle. |
| `Wordmark` | `className` | Inline SVG, `currentColor`. |
| `ArrowIcon` | `className` | 24px up-right arrow. |

## Blocks (`components/blocks/`)

| Block | Purpose | Content source |
| --- | --- | --- |
| `Header` | Fixed, transparent over the hero, frosted paper once scrolled, hides on scroll down. | Links inline. |
| `Hero` | Full-height video, split-text headline, glass contact card, scroll cue, product list. | `hero`, `products` |
| `ContactForm` | Name, email, product, message. `tone: dark \| light`, `compact`. | `products` |
| `Ticker` | Scrolling banner with dividers and masked edges. `tone`, `speed`, `href`. | any string list |
| `AboutSplit` | Headline left, body, love line, brand row, ghost CTA right. | `about` |
| `ServicesRail` | Pinned horizontal scroll on desktop, snap rail on mobile. | `services` |
| `ServiceCard` | Numbered card with image or typographic green panel plus tags. | one `Service` |
| `StatementReveal` | Big statement whose words fill on scroll. `tone`. | `statement` |
| `Metrics` | Three badges, count-up numbers, one line each. `tone`. | `metrics` |
| `Testimonials` | Three lifted cards. Sample copy only; not on the homepage until real quotes exist. | `testimonialsSample` |
| `CTABand` | Headline plus arrow button. | `ctaBand` |
| `Footer` | Links, copyright, giant Fraunces wordmark. | `footerLinks`, `products` |

All copy lives in `content/site.ts`. Pages assemble blocks and pass content in.

## Homepage order

Hero, Ticker, AboutSplit, ServicesRail, StatementReveal (ink), Metrics (ink), CTABand, Footer.

## Contact form

Posts JSON to `NEXT_PUBLIC_FORM_ENDPOINT` (Formspree or any JSON endpoint). If unset, it opens a mail link to `NEXT_PUBLIC_CONTACT_EMAIL`. Both are read at build time; the GitHub Pages workflow passes them from repository variables `FORM_ENDPOINT` and `CONTACT_EMAIL`.

## Assets

- Hero: `public/atmosphere/hero-grass.mp4` (H.264, 1920x1080, no audio, ~2.5 MB) with `hero-grass.jpg` poster.
- Wordmark: `public/oasis-wordmark.svg` uses `currentColor`; the inline `Wordmark` component mirrors it.
- All asset URLs go through `withBasePath()`.

## How to change

- A color, radius, easing, or type step: edit `app/globals.css`.
- A button style: `components/ui/Button.tsx` and the `.btn-arrow` rules in `globals.css`.
- Copy: `content/site.ts`.
- Add a block: build it in `components/blocks/`, add it to `/system` with sample props, then place it on a page.

## Voice

- First person plural: "we" / "Oasis".
- Direct, technical, confident. No fluff, no superlatives.
- Never mention: $0, free tier, donated services, Gmail, template managers as our tools, "easy", "simple".
