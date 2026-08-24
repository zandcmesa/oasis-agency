# Oasis Creative Studios — Agency Marketing Site

Multi-sector creative studio website built per approved living brief. **Not** a church-only agency.

## About

**Positioning:** Cutting-edge tech + design studio serving multiple sectors.

**Sectors:** Churches & ministries, service businesses, real estate, commercial properties, salon/spa/wellness.

**Products:** Websites, social media content, promotional video, AI agent workers & teams (emerging), digital presence strategy (forming).

**Voice:** Studio voice (we/Oasis), NOT founder-as-product. Primary CTA: "Start a project"

## Site Structure

- `/` — Homepage with capability statement, five product lines, real proof (Cornerstone + Foster the City), sectors, CTA
- `/work` — Portfolio indexed by product line, each case tagged by sector
- `/how-we-work` — Build, integrate, publish, own — systems not feature lists
- `/contact` — "Start a project" form (studio voice, collects name/email/sector/product/message)

## Design System

**Colors:**
- Paper (background): `#F6F1EA`
- Ink (text): `#0E141B`
- Oasis Green (primary): `#1A5C4A`
- Soft Clay (secondary/accents): `#C4A484`

**Typography:**
- Display/Headlines: Fraunces (via next/font/google)
- UI/Body: Geist Sans (via geist/font/sans)

**Motion:** Subtle scroll reveal (Framer Motion, 150-300ms ease-out, respects prefers-reduced-motion)

**Design direction:** Editorial warmth + product sharpness. Mechanisms inspired by Obys, basement.studio, Studio Size, HAS.WORKS, Studio Gruhl. NO WebGL walls, purple mesh, or glassmorphism.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Fonts:** next/font/google (Fraunces), geist/font/sans (Geist Sans)
- **Animation:** Framer Motion
- **Deployment:** Vercel-ready

## Proof Policy (CRITICAL)

**REAL artifacts only.** NO fake UI chrome, NO invented screenshots, NO decorative browser frames with fabricated content.

### Current proof:
- **Cornerstone Church** — Websites + Social media (named with placeholders awaiting real screenshots)
- **Foster the City** — Promotional video (named with placeholder awaiting real stills/clips)

### Empty cells:
- AI agent workers & teams — marked "Emerging"
- Digital presence strategy — marked "Forming"

**Media placeholders:** `public/work/` directory has `.gitkeep` and README documenting expected assets. Site displays "Media coming" until real assets land.

## What Was Removed

This build **replaces** PR #1's church-focused approach:
- ❌ Removed: SermonSearchFrame / PlanningCenterFrame fake UI components
- ❌ Removed: "Book a conversation with Zach" CTA
- ❌ Removed: zandcmesa@gmail.com contact
- ❌ Removed: Church-only positioning
- ❌ Removed: Pitch-deck language

## Contact Form

"Start a project" form on `/contact` page:
- **Studio voice** (not personal)
- **NO personal Gmail** publicly displayed
- Collects: name, email, sector (optional), product interest (optional), message
- **Action:** Currently client-side placeholder (console.log). Form UI ready for backend integration (Formspree, mailto fallback, or custom API route).

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

Open [http://localhost:3000](http://localhost:3000)

### Build

```bash
npm run build
```

Build MUST pass (tested before commit).

### Production

```bash
npm start
```

Runs production build locally.

## Deployment

Configured for Vercel. Once connected, every push creates a preview deployment. No environment variables required for static site (form backend TBD).

## Leak Ban (Hard Fail)

Site **must NOT** contain:
- Donated/founding-partnership/$0 economics
- HubSpot/side-business framing
- Agent-team internal jargon / builder names as product
- "Zach Mesa" as product or CTA
- PR/process/"portfolio lab" language
- Internal workshop/brief ownership talk

## Success Criteria

✅ Site does not read as pitch deck, church-only agency, or one-founder shop  
✅ No fake chrome or invented UI  
✅ "Start a project" form present  
✅ Foster the City named under Promo video  
✅ Cornerstone cases structured without fake screenshots  
✅ `npm run build` passes  
✅ Multi-sector positioning clear  
✅ Studio voice throughout

## Content Notes

- Cornerstone naming OK for v1
- DO NOT invent Cornerstone screenshots
- Foster the City accurately tagged (Ministry / nonprofit)
- DO NOT invent Foster plot/stats
- Empty proof cells stay empty until real work ships

## Future Assets

When Cornerstone screenshots and Foster video stills are ready:
1. Add to `public/work/`
2. Update homepage and Work page to reference real media paths
3. Remove "Media coming" placeholders

## Contact

Agency studio — form at `/contact` for project inquiries.
