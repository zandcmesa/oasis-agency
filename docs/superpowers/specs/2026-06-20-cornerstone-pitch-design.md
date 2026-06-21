# Cornerstone Church Pitch — Design Spec

**Date:** 2026-06-20  
**Format:** Live demo + leave-behind PDF  
**Audience:** Cornerstone Church council (decision-makers, not just the pastor)  
**Goal:** Earn the right to become Cornerstone's technical and digital strategy partner — co-existing with Rose and Gold (their current design agency), not replacing them entirely

---

## Context

Cornerstone Church (cornerstonechurchma.com) is a mid-size church in East Longmeadow, MA led by Pastor Josh Eldridge. They currently pay Rose and Gold a monthly retainer for web management and event/campaign design. Rose and Gold is adequate for bespoke design work but can't solve technical problems.

Known pain points (confirmed from pastor conversation and direct site audit):
- **Sermon library:** 170+ sermons, no keyword search, generic titles ("Sunday Sermon (Jun 14)"), paginated over 21+ pages — content is effectively undiscoverable
- **Two-website problem:** Groups, Events, and Giving all redirect to `churchcenter.com` — members leave the Cornerstone domain without knowing it
- **No email/text campaigns:** The church does no regular digital communications with members between Sundays

Future vision (per pastor): School of ministry, New England Christian conference hub.

The council doesn't see these as burning problems — the current setup is better than what they had before Rose and Gold. The pitch must create desire for something better, not just fix what feels broken.

---

## Narrative Arc

Four beats delivered in a single meeting (20–30 minutes live + leave-behind):

1. **Current state** — Show them their site as a member sees it. No editorializing.
2. **What's possible today** — Live demo of sermon search + unified experience wireframe + email preview.
3. **Vision** — Where Cornerstone is going, and what the digital infrastructure looks like when they get there.
4. **Proposal** — Leave-behind PDF with the engagement model and a specific, low-risk first ask.

---

## Beat 1 — Current State

**Duration:** 3–4 minutes  
**Method:** Live navigation of cornerstonechurchma.com in the room

### Flow
1. Open the site as a new visitor: Home → About → Sermons
2. On the sermon page: scroll through the list. Observe generic titles, no search bar, pagination extending to page 21+. Say: *"If someone wanted to find the sermon on perseverance from two years ago, how would they get there?"*
3. Navigate: Groups → lands on `churchcenter.com/groups`. Back. Events → `churchcenter.com/calendar`. Back. Give → `churchcenter.com/giving`.
4. Close laptop. One sentence: *"This is what your members experience today — and it's fixable."*

### Tone
Direct and factual. No criticism of Rose and Gold. Let the experience speak.

---

## Beat 2 — What's Possible Today

**Duration:** 5–8 minutes  
**Method:** Live demo (pre-built sermon search app) + static mockups

### Sermon Search Demo
A working Next.js web app built before the meeting, indexed against Cornerstone's actual YouTube content (cornerstonema YouTube channel).

**Technical approach:**
- Pull video list and metadata via YouTube Data API
- Fetch auto-generated captions/transcripts per video
- Index into a search backend (Algolia, Fuse.js, or Postgres full-text search)
- UI: search bar → results showing title, speaker, date, matched quote with timestamp, direct video link (deep-linked to the timestamp)
- Filters: by speaker, by series, by scripture reference

**The demo moment:** Search for a phrase from a recent sermon the pastor preached. It finds it. Shows the exact timestamp. Click — jumps to that moment in the YouTube video. The council has never seen this for their own content.

### Unified Experience Demo
A static Next.js page showing what Groups, Events, and Giving look like when they load natively within the Cornerstone site instead of redirecting to churchcenter.com. Same branding, same nav, no domain jump. Real code running in a browser — not a mockup.

### Email Campaign Preview
One example of a designed Cornerstone email: a series launch announcement or event invite. Shows Cornerstone branding, clear hierarchy, a call to action. One sentence: *"Right now, Cornerstone's communication with members between Sundays is essentially zero. This is what it could look like."*

---

## Beat 3 — Vision

**Duration:** 4–5 minutes  
**Method:** 3 mockup screens, presented as "what Cornerstone becomes"

This is the emotional center of the pitch. Frame it before showing the screens:  
*"Cornerstone isn't a small church with a website problem. It's a growing movement that needs digital infrastructure to match where God is taking it."*

### Screen 1 — School of Ministry
A dedicated portal page within cornerstonechurchma.com. Applications, course schedules, faculty profiles, student testimonials. Looks like a credible academic institution — because it is.

### Screen 2 — Conference Hub
A New England Christian Conference landing page. Speaker lineup, schedule, registration — native to the Cornerstone domain. No Eventbrite redirect. The digital experience matches the ambition.

### Screen 3 — Member Engagement at Scale
A concept view of what communication looks like with proper email/text infrastructure: open rates, engagement by series, growth over time. Shows the pastor and council what it means to actually know how their congregation is engaging.

---

## Beat 4 — Leave-Behind PDF

**Length:** 5 pages  
**Delivered:** After the live demo, either printed or sent same day

### Page 1 — What We Built For You Today
2–3 screenshots from the sermon search demo with a brief description of what it does. Anchors the document to the live moment. The council can show this to anyone who wasn't in the room.

### Page 2 — The Full Picture
What Oasis does, in 1–2 sentences per service:
- Church website design & build
- Planning Center / Church Center seamless integration
- Sermon search & content library
- Email & text campaigns
- Brand & visual identity
- Promotional video

Honest map of what Rose and Gold handles vs. what Oasis handles. Not a teardown — a division of responsibilities that can coexist.

### Page 3 — How We'd Work Together
Two phases:

**Phase 1 — Founding Partnership (No Cost)**
Everything in the demo, built for real: sermon search library, unified Planning Center experience, email/text campaign setup, vision mockups. Cornerstone's side of the agreement: honest feedback, case study permission, testimonial. Backed by a simple one-page written agreement.

**Phase 2 — Ongoing Partnership (If You Choose)**
If Cornerstone wants to continue with Oasis after Phase 1, a retainer relationship covers ongoing web, integrations, email/text campaigns, and video production. As a founding partner, Cornerstone locks in the best rate Oasis will ever offer.

Explicit statement: *"Your relationship with Rose and Gold doesn't have to change. We can co-exist — and in some cases collaborate. Rose and Gold handles your campaign and event design. Oasis handles everything they can't."*

### Page 4 — The Ask
One clear next step. The offer is a **Founding Partnership** — not a free trial, not a favor.

Specific language: *"We'd like Cornerstone to be Oasis's founding partner church. There's no cost to you. What we ask in return is honest feedback as we build, permission to share this work as a case study with other churches, and a testimonial if you're happy with what we deliver. If you choose to continue with Oasis beyond this engagement, you'll carry founding partner pricing — the best rate we'll ever offer."*

This is backed by a simple one-page partnership agreement (not a contract with fees — just a written record of what each side is agreeing to). This keeps the relationship professional and prevents "Zach is doing us a favor" ambiguity, even at zero cost.

### Page 5 — About Me
One paragraph. Background, faith, why this work matters to me personally. A photo. The council is deciding whether to trust a person.

---

## What Needs to Be Built

For the live demo:
1. **Sermon search app** — Next.js, indexed against Cornerstone's YouTube. This is the centerpiece.
2. **Unified experience demo** — Static Next.js page showing Groups/Events/Giving native to the site (no churchcenter.com redirect).
3. **Email campaign mockup** — One designed email in Figma or as HTML.
4. **Vision mockups** — Three screens: School of Ministry portal, Conference Hub landing page, Member Engagement concept.

For the leave-behind:
5. **5-page PDF** — Designed, on-brand, includes screenshots from the demo.

---

## Success Criteria

- The pastor can hand this pitch to the council with confidence.
- The council sees that the sermon search problem (previously called unsolvable) is already solved.
- The ask is clear, low-risk, and specific — one project to start.
- Cornerstone engages Oasis for at least the first project, generating the first paid client and first portfolio case study.
