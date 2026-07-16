# Product

## Register

brand

## Platform

web

## Users

Owner-operators and office managers of small-to-medium New Zealand trade businesses — electricians, plumbers and drainage contractors, roofers, and related trades. They are on the tools most of the day: on a roof, under a house, in a van between jobs. Their phone rings while their hands are full, website enquiries and quote requests pile up in a form inbox nobody checks fast enough, and a quote sent on Friday quietly dies because no one followed up. They are not software people; they are trade people who are losing paid work to a broken front office, not to a lack of demand.

Secondary audience: the same owner's office support (a partner, admin, or dispatcher) who is often the one actually chasing calls and quotes and who feels the chaos most directly day to day. The site speaks to the owner as the primary decision-maker.

## Product Purpose

Tradie Front Desk is a done-for-you, managed front-desk system for NZ trade businesses. It captures every enquiry (missed calls, website forms, texts, social and Google messages, old leads, campaign leads), replies fast while the tradie is still on the tools, qualifies the job, moves good-fit customers toward a callback, quote, or site visit, and follows up on quotes and quiet leads so nothing rides on memory. It exists because most trade businesses do not have a leads problem first — they have an enquiry-handling problem: missed calls, slow replies, and dead quotes are costing them jobs they already paid to generate. Success looks like more of the enquiries a business already gets turning into booked jobs, with the owner spending less time chasing and worrying about what fell through the cracks, while staying in full control of pricing, promises, and which jobs they take on.

## Positioning

The front desk your trade business should already have: not a shared-lead seller, not just another ad agency, not another software login to learn — a managed front-desk system, installed and run for you, so calls, quote requests, follow-ups, and booked jobs stop depending on anyone's memory.

## Conversion & proof

- Primary CTA: **Book a Free Front Desk Audit** (`/free-audit`) — appears in the header, every CTA band, and the sticky mobile bar.
- Secondary fallback: call the business directly (the header phone number, region-matched for NZ/AU/US) for a visitor not ready to fill in a form; browsing the packages (`/pricing`) or the worked examples (`/case-studies`) are the next-best soft paths for a visitor still evaluating.
- The line a visitor should remember after 10 seconds: **more booked jobs, less chasing, no tech headaches** — delivered by a managed front desk, not more leads and not more software.
- Belief ladder a visitor must climb before booking an audit: (1) the jobs I'm losing aren't a demand problem, they're a missed-call/slow-reply/dead-quote problem; (2) this isn't a shared-lead seller, an ad agency, or a CRM I have to learn — it's a system that gets built and run for me; (3) I stay in control of pricing, promises, and which jobs I take; (4) the audit is free, low-risk, and will show me specifically where my business is leaking enquiries; (5) booking the audit is the obvious next step.
- Proof on hand: three worked/illustrative process examples (missed-call flow, quote follow-up flow, old-lead reactivation flow) captured in `src/data/site.ts` (`proofExamples` / `caseStudies`) — these are illustrations of the mechanism, not attributed case studies with a named client, and must stay phrased as such (see Claims-safe language below). No client testimonials, press, or logos are on hand yet; proof metrics (calls caught, replies sent, follow-ups completed, bookings created, reviews requested) are the reportable-outcome categories to use once real per-client numbers exist.

## Brand Personality

Voice in three words: **practical, confident, plain-spoken.** The brand is an operator, secondarily an advisor — never a hype marketer. It sounds like a practical business operator who understands tradies, explains things clearly, and builds systems that make money without overcomplicating the business: short sentences, plain English, direct explanations, confident recommendations, clear next steps. It is diagnostic and calm under sales pressure ("I would not start with ads yet. Your first issue is that enquiries are not being followed up properly."), never flashy, gimmicky, overly corporate, hype-heavy, or robotic.

Emotional goal for a visitor: recognize their own business in the problem within the first fold (the missed call on the roof, the quote gone quiet), feel the relief of "someone gets it and will just handle this," and feel the industrial confidence of the visual system — precise, serious, built like proper front-office infrastructure, not a flashy app pitch.

**Buyer-facing vocabulary bans (hard rule, carries into every page and every CTA):** AI, CRM, automation, funnel, SaaS, workflow, GoHighLevel, bot. Sell the system and the outcome, not the tooling underneath it ("we build and manage the front-desk process that captures enquiries and follows up with customers," never "we install AI agents and automations" or "we use GoHighLevel workflows").

**Claims-safe language (hard rule):** no guaranteed job counts, revenue, profit, rankings, review counts, or response rates. Use claims-safe framing throughout — "designed to help," "helps catch," "reported outcome," "results depend on" — matching `about-tradie-front-desk/terms_scope_and_guarantee.md`. Worked examples are labelled as illustrations of the process, not promises of what a visitor's business will experience.

## Anti-references

Explicitly not: the loud comic-poster / halftone-dots / tilted-sticker direction of the prior site iteration. Not AI-purple gradients. Not the centered-hero-over-dark-mesh SaaS cliché. Not the three-equal-feature-card reflex. Not cream/parchment "warm AI default" surfaces. Not uniform fade-up-on-every-section motion. Not glassmorphism-everywhere. Not a hype-marketer, guru-pitch tone, and not exaggerated income or lead-volume claims anywhere in copy.

## Design Principles

- **Engineering-drawing precision, not comic urgency.** The metaphor is the job sheet and the site plan — measured, exact, high-vis where it matters — never cartoon energy or gimmick.
- **One accent carries every action.** Safety orange is the only color a visitor is asked to act on; hi-vis yellow is a rare annotation mark, never a second CTA color.
- **Sell the system, not the tools underneath it.** Every page leads with the problem (missed calls, dead quotes, forgotten follow-up) and the outcome, never the technology stack.
- **Stay claims-safe by default.** Every proof point and promise is phrased so it survives scrutiny: reported outcomes and worked examples, never guarantees.
- **The owner stays in control.** Every mechanism description (qualify, book, follow up) reinforces that pricing, promises, and job selection stay with the trade business owner, not with the system.
- **Content is never gated on animation.** Every section renders fully and correctly with motion, JS, or `prefers-reduced-motion` off; scroll-driven reveals enhance an already-visible default, they never gate it.

## Accessibility & Inclusion

WCAG 2.1 AA as the floor: body text ≥4.5:1 contrast against its band (both the navy `--canvas-dark` and off-white `--canvas-light` bands are pre-verified per the token set), large/bold text ≥3:1. Every animation ships a `prefers-reduced-motion: reduce` fallback that shows the same content instantly rather than gating it behind a transition. All forms (audit request, contact) must be fully operable by keyboard, with visible focus states (the token set defines a dark- and light-band-aware `:focus-visible` ring), and readable without relying on color alone (the orange/yellow annotation system is decorative emphasis, not the sole carrier of meaning).
