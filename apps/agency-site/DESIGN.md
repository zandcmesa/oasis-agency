# Oasis Agency Design System

Living documentation for the Oasis Creative Studios website.

## Tokens

### Colors
- **paper** (`#F6F1EA`) — Background
- **ink** (`#0E141B`) — Primary text
- **oasis-green** (`#1A5C4A`) — Brand accent, CTAs
- **soft-clay** (`#C4A484`) — Secondary accent, borders

### Typography
- **Fraunces** — Display font (headings)
- **Geist** — Body font (text)

### Brand Assets
- **Wordmark**: `/oasis-wordmark.svg`

## Components

### Buttons
All CTAs use the `Button` component (`components/Button.tsx`).

**Variants:**
- `primary`: Green pill button for main CTAs
- `secondary`: Outlined pill button for secondary actions

**Usage:**
```tsx
<Button href="/contact">Start a project</Button>
<Button variant="secondary" href="/work">View all work</Button>
```

**Rules:**
- Fully rounded (`rounded-full`)
- One primary CTA per section: "Start a project"
- Min height: 44px (accessibility)
- Focus ring on all interactive elements

### Navigation
- Wordmark + text links (desktop)
- Wordmark + hamburger menu (mobile)
- No pill buttons in nav text links

### Work Cards
- Real artifacts with `withBasePath` for GitHub Pages deployment
- Rounded cards (`rounded-2xl`)
- Hover states on borders

### Video
- Foster the City video plays inline
- `controls`, `playsInline`, `preload="metadata"` for FTC videos

## How to Change

**Change button styles once:**
Edit `apps/agency-site/components/Button.tsx`

**Change colors once:**
Edit `apps/agency-site/app/globals.css` (Tailwind config)

**Update this file:**
When patterns change, update this file so it stays current.

## Visual Interest Queue

**Shipped:**
- Pill buttons (this)
- Wordmark header
- FTC inline video

**Queued:**
- One living-wall video loop (not site-wide wallpaper)

## Voice & Leak Bans

**Voice:**
- First person plural: "we" / "Oasis"
- Direct, technical, confident
- No fluff or superlatives

**Leak bans** (never mention):
- $0 / free tier / donated services
- HubSpot
- Gmail
- Template managers
- "Easy" or "simple"
