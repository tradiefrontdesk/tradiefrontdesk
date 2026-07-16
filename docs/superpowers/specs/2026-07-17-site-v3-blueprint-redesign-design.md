# Tradie Front Desk — Site v3 "Blueprint" Redesign — Design Spec

Date: 2026-07-17
Status: Approved direction (interview complete), pending final spec review

## 1. Goal

Rebuild the Tradie Front Desk marketing site from scratch in a new folder (`site-v3/`) with a completely new brand, design system, typography, layout, and copy — same products, services, pricing, and integrations. Target outcome: a "wow" site that converts trade business owners into booked Free Front Desk Audits, and that does not look AI-templated or comic-poster loud.

## 2. Decisions locked in interview

| Decision | Choice |
| --- | --- |
| Color direction | A — Blueprint navy + safety orange |
| Name / logo | Keep "Tradie Front Desk" name; design a new wordmark (SVG, dark + light variants) |
| Page scope | Full current sitemap (13+ pages) |
| Video/motion | Re-theme the 6 Remotion homepage videos to the new brand AND build rich scroll-driven motion |
| Light/dark | Dark navy hero and key bands (proof, final CTA), alternating with off-white working sections |
| Copy | Full overhaul — re-derive all messaging from `tradie-front-desk-rebuilt/` and `about-tradie-front-desk/` docs |
| Integrations | Carry all over unchanged: GHL/audit forms, voice AI embeds, Netlify config |

## 3. Brand system — "Blueprint & Safety Orange"

Metaphor: **the job sheet and the site plan.** Engineering-drawing precision meets high-vis urgency. Serious front-office infrastructure for trade businesses. Not comic, not soft SaaS.

### 3.1 Palette (authored as OKLCH custom properties; hex anchors below)

| Role | Anchor | Use |
| --- | --- | --- |
| Canvas dark | `#0E2233` | Hero, proof band, final CTA band, footer |
| Surface dark | `#16334A` | Cards/panels on dark bands |
| Action | `#FF5A1F` (safety orange) | The single CTA/action color, annotation arrows |
| Marker | `#FFC933` (hi-vis yellow) | Sparse highlights, "leak" callouts, annotations only |
| Canvas light | `#F6F4EF` | Working sections (off-white, chroma toward navy — not cream) |
| Ink | near-black navy ramp | Text on light |
| Text on dark | `#F6F4EF` ramp | Verified ≥4.5:1 body contrast on both bands |

Rules: one accent (orange) carries all actions; yellow never exceeds ~5% of any viewport; every text/bg pair contrast-verified (≥4.5:1 body, ≥3:1 large).

### 3.2 Typography

- **Display:** Archivo (Expanded / Black) — industrial signage. Hero clamp max ≤ 6rem, letter-spacing ≥ -0.04em, `text-wrap: balance`.
- **Body:** Inter, 65–75ch max line length.
- **Annotation layer:** JetBrains Mono for labels, stats, measurements, form labels, badges — this layer sells the blueprint feel.

### 3.3 Wordmark & assets

"TRADIE FRONT DESK" in Archivo Expanded with a drafting-mark device (registration mark / orange tab). Deliver: SVG dark + light, favicon.svg, og-image, site.webmanifest updates.

### 3.4 Motifs

Fine blueprint grid on navy, measurement ticks, dashed "call path" lines, stamped badges ("AUDIT №…"), orange annotation arrows. Replaces comic dots/halftone/tilted-sticker language entirely.

### 3.5 Anti-slop guardrails (enforced by installed skills)

No AI-purple gradients, no centered-hero-over-dark-mesh cliché, no three-equal-feature-cards reflex, no cream/parchment default, no uniform fade-up on every section, no glassmorphism-everywhere. Cards only where genuinely the right affordance.

## 4. Site architecture

New folder: `site-v3/` (own package.json; Astro 5 + React + @remotion/player).

Pages (full sitemap): Home, How It Works, What's Included, Why We're Different, Free Front Desk Audit, Pricing, Case Studies index + `[slug]`, Electricians, Plumbers/Drainage, Roofers, Contact, Privacy Policy, Terms.

Nav (conversion-focused): Home, How It Works, Pricing, Proof, Free Audit + orange "Book Free Audit" button. Secondary pages in footer. Sticky mobile CTA bar retained.

### Homepage narrative (rewritten from `tradie-front-desk-rebuilt/09`)

1. Dark hero — "stop losing good jobs" message + rebranded Remotion hero video, drafting-assembly entrance
2. The leak (light) — annotated diagram of where jobs slip (missed calls, slow replies, dead quotes)
3. The reframe — not leads, not ads, not a CRM: a managed front desk
4. The mechanism — Capture → Respond → Qualify → Book → Follow Up as a scroll-animated blueprint flow
5. What's included — module grid
6. Proof band (dark) — case studies, reported outcomes (claims-safe)
7. Audit offer + packages
8. FAQ
9. Final CTA band (dark)

## 5. Copy

Full overhaul derived from `tradie-front-desk-rebuilt/*` (positioning, offer, pricing, proof, homepage wireframe) and `about-tradie-front-desk/*` (foundation, avatar, objections, terms).

Voice: confident, plain-spoken, specific. Buyer-facing vocabulary bans: AI, CRM, automation, funnel, SaaS, workflow, GoHighLevel, bot. Claims-safe phrasing only ("designed to help", "helps catch", "reported outcome", "results depend on") per `terms_scope_and_guarantee.md`. Primary CTA everywhere: **Book a Free Front Desk Audit**.

## 6. Motion & video

### 6.1 Scroll motion (the wow layer)

- Hero assembles like a drawing being drafted (lines draw in, annotations stamp on).
- 5-step pipeline animates on scroll (dashed path draws, steps activate).
- Stat counters/ticks in proof sections; magnetic/press-scale CTA micro-interactions.
- Section-appropriate reveals — each reveal fits what it reveals; no uniform reflex.
- Easing: ease-out expo/quart family; no bounce/elastic. Transform/opacity first; blur/clip-path where materially better.
- Content never gated on animation (visible default; reveals enhance). Full `prefers-reduced-motion` alternatives.

### 6.2 Remotion

Re-theme by rewriting the shared theme (`src/remotion/components/theme.ts` equivalent in site-v3) + shared components (VideoShell, GlowCard, FlowNodes, MessageBubbles, PipelineBoard, SceneTitle) to navy/orange/Archivo. All 6 homepage compositions carry over and are visually re-verified in the Player. 1920×1080 stays.

### 6.3 Hyperframes

Update `skills/tradie-video-factory` visual direction (DESIGN reference) to the new brand so future b-roll matches. Regenerate any b-roll actually embedded in v3 pages.

## 7. Tech

- Astro 5 + @astrojs/react + @remotion/player (same proven stack), static output.
- Design tokens as CSS custom properties in one `tokens.css`; global styles minimal.
- Motion: CSS scroll-driven animations where possible + Motion (framer-motion/motion) in React islands where needed.
- Carry over: AuditForm/ContactForm (GHL), VoiceAiEmbed, StickyMobileCTA behavior, netlify.toml, site data (`src/data/site.ts`) as content source.
- Build gate: `astro check && astro build` clean.

## 8. Design-skill workflow (project-local installs)

- `/impeccable init` inside `site-v3/` to lock PRODUCT.md + DESIGN.md before building; `impeccable` brand register applies (marketing site).
- `design-taste-frontend` (taste-skill): design-read + anti-default discipline + pre-flight check on every page build.
- `emil-design-eng`: animation/micro-interaction review standards.
- Supporting installed skills available to agents: high-end-visual-design, find-animation-opportunities, review-animations.

## 9. Execution model

1. Foundation first (sequential): scaffold `site-v3/`, tokens, fonts, wordmark/assets, BaseLayout + Header/Footer, homepage — the quality bar.
2. Parallel agent waves after homepage approval:
   - Wave A: How It Works, What's Included, Why We're Different, Pricing
   - Wave B: Free Audit, Contact, Case Studies (index + slugs)
   - Wave C: Electricians, Plumbers/Drainage, Roofers
   - Wave D: Privacy, Terms (light restyle) + Remotion re-theme
   Each agent loads the three design skills and the spec; copy sourced from the docs per §5.
3. Polish wave: impeccable audit + animation review + fixes.

## 10. Verification

- `astro check && astro build` passes.
- Browser pass: every page screenshotted at desktop (1280) and mobile (375), light/dark bands checked, nav/CTA/sticky bar verified.
- All 6 Remotion videos render in the Player with new theme.
- Forms/embeds present and wired as in current site.
- Contrast spot-check on all band/text combinations.
- Taste pre-flight: no banned defaults (§3.5) on any page.

## 11. Out of scope

- Deploying to production / DNS changes (Netlify config included, deploy is a separate decision).
- New photography; imagery is SVG/diagram/video-led per current asset strategy.
- Renaming the business or changing offers/pricing.
