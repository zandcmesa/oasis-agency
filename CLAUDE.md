# Oasis Agency

## What this is

A digital agency serving churches and ministries. The owner is a Product Design Manager at Google with deep product/design/engineering chops and a faith background. The agency is being built nights/weekends as a path to generational wealth — something that can scale beyond a W-2 ceiling and eventually be inherited by the owner's children.

Reference the generational wealth project at `/Users/mesa/Claude/generational-wealth/CLAUDE.md` for full financial and life context.

## Agency concept

**Name:** Oasis (working name — likely final)
**Niche:** Churches and ministries of all sizes
**Positioning:** The agency that can actually build things. Faith-aligned, bold creative, real engineering depth. Not template managers.

The gap in the market: most church agencies (like the incumbent, Rose and Gold) can't solve technical problems. They're designers who wrap around third-party tools and hit walls. Oasis competes by being the "technical fixer" — someone who can build custom features, integrate platforms, and execute communications strategy, not just hand off a Squarespace site.

## Services

Oasis sells five things, to any sector. Churches, ministries, and non-profits are called out as loved, not as a limit.

1. **Websites** — Custom Next.js, headless, fast. Not a template shop.
2. **AI agent workers & teams** — Named workers that do real jobs. After-Hours Catcher + Front Desk SMS are the beauty pack.
3. **Digital presence strategy** — SEO, AI search, and the plan behind all of it.
4. **Social media content** — Strategy and execution.
5. **Promotional video** — B-roll production, premium craft.

Church-specific capabilities (Planning Center / Church Center integration, sermon search, email and text campaigns) live inside Websites and Strategy rather than as separate product lines.

## First prospect: Cornerstone Church

Brother-in-law (senior pastor) is open to it but can't decide alone — needs a church council pitch. To win:
- Have something real to show them (demo or proposal)
- Demonstrate their specific pain points are solved: sermon search, two-website experience, email/text
- Assure existing systems won't break during transition

Do not assume this is a locked client. Treat it like a warm prospect that needs a proper pitch.

## Service model (in design)

Target: Full-service retainer as the primary offering.
Structure: TBD — designing from scratch. Leading options:
- Flat tiers (Starter / Growth / Pro) with bundled services
- Base retainer + usage-based add-ons

When designing pricing, anchor to: What does a mid-size church currently pay Rose and Gold per month? What do they get? What don't they get?

## Tech decisions

- **Client work:** Custom/headless Next.js for complex builds; Planning Center API for integrations; flexible per client
- **Agency website:** Next.js (custom code) — the site itself is a portfolio piece. Design system and block kit documented in `apps/agency-site/DESIGN.md`; every block renders on `/system`.
- **Staffing:** Solo nights/weekends. No contractors until demand exceeds capacity.

## Agency website goals

- Launch as credibility play — somewhere to send warm leads
- Progressively add: SEO, discovery call booking, service pages with case studies
- Tone: Bold modern design chops + warmth + faith-aligned. Shows that churches would get a premium, visually sophisticated product from someone who understands them.

## How Claude should help in this project

1. **CLAUDE.md and project structure** — Keep this file current as decisions are made. Flag when something here becomes stale.
2. **Service model design** — Help design the tier/pricing structure. Anchor to real church budgets, not guesses.
3. **Technical solutions** — Build out the "robust solutions" for each service. Actual code, not descriptions.
4. **Website** — Build the agency's Next.js site. This is a portfolio piece and should look exceptional.
5. **Pitch materials** — Help design the Cornerstone Church pitch when it's time.
6. **Business planning** — Connect decisions back to the generational wealth goal. Don't let this drift into hobby territory.

## Communication preferences

- Direct. No coddling.
- Think in product/systems terms.
- Make recommendations, not option lists.
- Faith matters here — don't treat it as a soft variable.
- Flag when a decision feels emotionally driven vs. strategically sound.
