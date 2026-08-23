# Oasis Creative Studios — Agency Marketing Site

The marketing website for Oasis Creative Studios, a digital agency serving churches and ministries.

## About

**Positioning:** The agency that can actually build things. Faith-aligned, bold modern design, real engineering depth.

**Owner:** Zach Mesa (zandcmesa@gmail.com)

This site is a portfolio piece and serves as the primary inbound marketing channel for the agency.

## Site Structure

- `/` — Homepage with outcome-focused hero, proof strip, and CTAs
- `/work` — Portfolio showcasing case studies and outcomes
- `/how-we-work` — Process explanation and capabilities
- `/contact` — Contact page with direct mailto CTA to Zach

## Design System

**Colors:**
- Paper (background): `#F6F1EA`
- Ink (text): `#0E141B`
- Oasis Green (primary): `#1A5C4A`
- Soft Clay (secondary): `#C4A484`

**Typography:**
- Display/Headlines: Fraunces (via next/font/google)
- UI/Body: Geist Sans (via next/font/google)

**Design direction:** Bold modern product craft + warm editorial. High contrast, generous whitespace, premium spacing. Slow, confident motion if any. This site IS the portfolio.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Fonts:** next/font/google (Fraunces, Geist)
- **Deployment:** Vercel-ready

## Getting Started

### Prerequisites

- Node.js 20+ and npm

### Installation

```bash
cd apps/agency-site
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

Runs the production build locally on port 3000.

## Deployment

This app is configured for Vercel deployment. Once connected to a Vercel project, every push will create a preview deployment.

## Project Structure

```
apps/agency-site/
├── app/
│   ├── layout.tsx          # Root layout with nav/footer
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Design tokens & Tailwind config
│   ├── work/
│   │   └── page.tsx        # Portfolio page
│   ├── how-we-work/
│   │   └── page.tsx        # Process/capabilities page
│   └── contact/
│       └── page.tsx        # Contact page
├── components/
│   ├── Navigation.tsx      # Site navigation
│   └── Footer.tsx          # Site footer with CTA
└── package.json
```

## Key Features

- Outcome-focused copy (locked from Harbor strategy work)
- SEO-optimized with proper metadata and Open Graph tags
- Accessible navigation and focus states
- Responsive design (mobile-first)
- No dark mode toggle (design is light-mode optimized)
- mailto CTAs (no forms or calendar integrations yet)

## Content Guidelines

**DO NOT:**
- Add pricing information to the public site
- Mention Cornerstone's founding partnership pricing ($0/donated)
- Create extra pages beyond the locked IA (Home, Work, How, Contact)
- Use stock faith photography (crosses, praying hands, etc.)

**DO:**
- Keep copy focused on outcomes, not services
- Lead with results in case studies
- Emphasize technical capability and ownership
- Maintain warm, confident, faith-aligned tone

## Contact

For questions about this site or the agency:
**Zach Mesa** — zandcmesa@gmail.com
