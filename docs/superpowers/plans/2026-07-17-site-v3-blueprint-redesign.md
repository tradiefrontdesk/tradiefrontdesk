# Site v3 "Blueprint" Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the Tradie Front Desk marketing site in a new `site-v3/` folder with the Blueprint & Safety Orange brand — new design system, wordmark, 13+ pages with fully rewritten copy, re-themed Remotion videos, and rich scroll motion.

**Architecture:** Static Astro 5 site with React islands for Remotion Player and motion-heavy components. One `tokens.css` design-token file drives everything; Remotion compositions are ported from `src/remotion/` and re-themed via their shared `theme.ts`. Pages consume content from a rewritten `src/data/site.ts`.

**Tech Stack:** Astro 5, @astrojs/react, React 19, @remotion/player + remotion 4, motion (framer), @fontsource-variable/{archivo,inter,jetbrains-mono}, Netlify static deploy.

**Spec:** `docs/superpowers/specs/2026-07-17-site-v3-blueprint-redesign-design.md` — read it before starting any task.

## Global Constraints

- New code lives in `/Volumes/KINGSTON/projects/tradiefrontdesk2/site-v3/` only. Never modify the existing `src/` site.
- Every implementing agent MUST load these project-local skills before designing/building UI: `design-taste-frontend` (anti-slop), `impeccable` (setup steps 1–4; brand register `reference/brand.md`), `emil-design-eng` (motion polish).
- Buyer-facing copy bans these words: AI, CRM, automation, funnel, SaaS, workflow, GoHighLevel, bot.
- Claims-safe phrasing only: "designed to help", "helps catch", "helps support", "can help", "reported outcome", "results depend on". Never guarantee jobs, leads, revenue, bookings, or reviews (`about-tradie-front-desk/terms_scope_and_guarantee.md`).
- Primary CTA everywhere: **Book a Free Front Desk Audit** → `/free-audit`.
- Single action color: safety orange `var(--action)`. Marker yellow ≤ ~5% of any viewport. No purple, no gradients-as-decoration, no glassmorphism, no cream/parchment neutrals.
- Contrast: body text ≥ 4.5:1, large text ≥ 3:1 on its actual background.
- Typography: display = Archivo (wide/black), body = Inter (65–75ch max lines), annotation layer = JetBrains Mono. Hero clamp max ≤ 6rem; display letter-spacing ≥ -0.04em; `text-wrap: balance` on h1–h3.
- Motion: ease-out expo/quart only, no bounce; content visible by default (reveals enhance, never gate); every animation has a `@media (prefers-reduced-motion: reduce)` alternative; no uniform fade-up reflex across sections.
- Verification gate for every task: `npm run build` (i.e. `astro check && astro build`) passes inside `site-v3/`.
- Commit after every task with `--no-verify` not needed; ignore `non-monotonic index ._pack*` stderr noise (exFAT AppleDouble files, harmless).

---

### Task 1: Scaffold `site-v3/` project

**Files:**
- Create: `site-v3/package.json`, `site-v3/astro.config.mjs`, `site-v3/tsconfig.json`, `site-v3/netlify.toml`, `site-v3/src/pages/index.astro` (placeholder), `site-v3/.gitignore`
- Copy: root `netlify.toml` → adapt; root `tsconfig.json` → copy as-is

**Interfaces:**
- Produces: a building Astro project; `npm run dev` serves on 4321; alias-free relative imports (match current site conventions).

- [ ] **Step 1: Create package.json**

```json
{
  "name": "tradie-front-desk-v3",
  "version": "3.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "astro dev",
    "build": "astro check && astro build",
    "preview": "astro preview"
  },
  "dependencies": {
    "@astrojs/check": "^0.9.4",
    "@astrojs/react": "^5.0.4",
    "@fontsource-variable/archivo": "^5.2.5",
    "@fontsource-variable/inter": "^5.2.5",
    "@fontsource-variable/jetbrains-mono": "^5.2.5",
    "@remotion/player": "^4.0.456",
    "astro": "^5.16.4",
    "lucide-react": "^1.14.0",
    "motion": "^12.38.0",
    "react": "^19.2.5",
    "react-dom": "^19.2.5",
    "remotion": "^4.0.456",
    "typescript": "^5.9.3",
    "zod": "4.3.6"
  },
  "devDependencies": {
    "@remotion/cli": "^4.0.456"
  }
}
```

- [ ] **Step 2: Create astro.config.mjs (same as current, site URL unchanged) and copy `tsconfig.json` from repo root**

```js
import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://tradiefrontdesk.ai",
  integrations: [react()],
});
```

- [ ] **Step 3: Copy root `netlify.toml` into `site-v3/` unchanged** (base dir is set at Netlify UI level later; do not deploy in this plan)

- [ ] **Step 4: Placeholder `src/pages/index.astro`** containing `<h1>site-v3</h1>` only, plus `.gitignore` with `node_modules/`, `dist/`, `.astro/`.

- [ ] **Step 5: Install and verify**

Run: `cd site-v3 && npm install && npm run build`
Expected: build succeeds, `dist/index.html` exists.

- [ ] **Step 6: Commit** — `git add site-v3 && git commit -m "feat(v3): scaffold site-v3 Astro project"`

---

### Task 2: Design tokens, fonts, global CSS

**Files:**
- Create: `site-v3/src/styles/tokens.css`, `site-v3/src/styles/global.css`

**Interfaces:**
- Produces: CSS custom properties consumed by all components: `--canvas-dark`, `--surface-dark`, `--surface-dark-2`, `--action`, `--action-hover`, `--marker`, `--canvas-light`, `--surface-light`, `--ink`, `--body`, `--muted`, `--on-dark`, `--on-dark-body`, `--on-dark-muted`, `--line-dark`, `--line-light`, `--font-display`, `--font-body`, `--font-mono`, `--max` (1200px), `--radius-sm/md/lg`, `--ease-out`, `--dur-fast/base/slow`. Utility classes: `.container`, `.section`, `.band-dark`, `.band-light`, `.mono-label`, `.btn`, `.btn-primary`, `.btn-ghost`.

- [ ] **Step 1: Write `tokens.css`**

```css
:root {
  /* Blueprint & Safety Orange — OKLCH with hex anchors from spec */
  --canvas-dark: oklch(0.245 0.045 245);      /* ≈ #0E2233 */
  --surface-dark: oklch(0.31 0.05 245);       /* ≈ #16334A */
  --surface-dark-2: oklch(0.275 0.048 245);   /* between canvas and surface */
  --action: oklch(0.68 0.21 38);              /* ≈ #FF5A1F safety orange */
  --action-hover: oklch(0.63 0.21 38);
  --on-action: oklch(0.18 0.05 38);
  --marker: oklch(0.87 0.15 88);              /* ≈ #FFC933 hi-vis, sparse */
  --canvas-light: oklch(0.965 0.006 245);     /* cool off-white, navy-tinted */
  --surface-light: oklch(1 0 0);
  --ink: oklch(0.22 0.04 245);
  --body: oklch(0.32 0.03 245);
  --muted: oklch(0.45 0.025 245);
  --on-dark: oklch(0.965 0.006 245);
  --on-dark-body: oklch(0.88 0.012 245);
  --on-dark-muted: oklch(0.72 0.02 245);
  --line-dark: oklch(0.38 0.045 245);
  --line-light: oklch(0.86 0.012 245);
  --font-display: "Archivo Variable", "Arial Black", sans-serif;
  --font-body: "Inter Variable", system-ui, sans-serif;
  --font-mono: "JetBrains Mono Variable", ui-monospace, monospace;
  --max: 1200px;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 14px;
  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
  --dur-fast: 180ms;
  --dur-base: 320ms;
  --dur-slow: 700ms;
}
```

- [ ] **Step 2: Write `global.css`** — imports the three @fontsource-variable CSS files and `tokens.css`; sets `font-variation-settings: "wdth" 125` on display headings (Archivo width axis for the Expanded look); base element styles; utility classes listed in Interfaces; blueprint-grid background helper `.blueprint-grid` (fine 1px lines at 72px grid on dark bands using `--line-dark` at low alpha — linear-gradient, not images); `.mono-label` (JetBrains Mono, 12–13px, uppercase, letter-spacing 0.08em); button styles (`.btn-primary`: `--action` bg, `--on-action` text, press `scale(0.97)`, hover `--action-hover`, focus-visible ring). Include `@media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; } }` plus per-component fallbacks later.

- [ ] **Step 3: Wire into placeholder index page, run `npm run build`** — Expected: PASS, fonts bundled.

- [ ] **Step 4: Commit** — `feat(v3): design tokens, fonts, global styles`

---

### Task 3: Brand assets — wordmark, favicon, OG image, manifest

**Files:**
- Create: `site-v3/public/wordmark-dark.svg` (for light bg), `site-v3/public/wordmark-light.svg` (for dark bg), `site-v3/public/favicon.svg`, `site-v3/public/og-image.svg` (+ 1200×630 PNG render if quick), `site-v3/public/site.webmanifest`, `site-v3/src/components/Wordmark.astro`

**Interfaces:**
- Produces: `<Wordmark variant="dark" | "light" />` renders inline SVG; used by Header/Footer.

- [ ] **Step 1: Design the wordmark as inline SVG.** Structure: "TRADIE" stacked over "FRONT DESK" in Archivo Black (converted to paths or `<text>` with bundled font is fine for inline use), with a drafting registration mark (circle + crosshair, 2px stroke) left of the text and a small safety-orange tab under "FRONT DESK". Colors: navy `#0E2233` text + orange `#FF5A1F` device (dark variant); off-white text + orange device (light variant). Keep total width ≈ 220×48 viewBox.
- [ ] **Step 2: Favicon** — the registration-mark device alone on navy rounded square, orange crosshair.
- [ ] **Step 3: OG image** — navy canvas, blueprint grid, wordmark, headline "Stop losing good jobs." in Archivo, orange annotation arrow. `site.webmanifest`: name "Tradie Front Desk", theme_color `#0E2233`, background_color `#0E2233`.
- [ ] **Step 4: Build + visually check the SVGs in browser preview.** Commit — `feat(v3): Blueprint wordmark and brand assets`

---

### Task 4: Content layer — rewrite `site.ts`

**Files:**
- Create: `site-v3/src/data/site.ts` (same export names/shapes as `src/data/site.ts`: `navItems`, `footerLinks`, `brand`, `contactDetails`, `legalDetails`, `disclaimer`, `corePromise`, `heroPromise`, `mechanism`, `trustItems`, `processSteps`, `modules`, `packages`, `faqs`, `proofMetrics`, `proofExamples`, `caseStudies`, `tradePages`)
- Reference (read-only): `src/data/site.ts`, `tradie-front-desk-rebuilt/02,04,05,06,07,09`, `about-tradie-front-desk/{perfect_offer,pricing_and_packaging,objection_handling,case_study_and_proof_system,features_benefits}.md`

**Interfaces:**
- Produces: identical export names and object shapes to the current `src/data/site.ts` (copy the type structure field-for-field) so ported components keep working; all strings rewritten in the new voice.

- [ ] **Step 1: Copy the current file, keep every shape, rewrite every buyer-facing string** per Global Constraints voice rules. Keep factual content (pricing numbers, package contents, contact/legal details, disclaimers) exactly accurate — pull from `pricing_and_packaging.md` and `terms_scope_and_guarantee.md`. New hero strings:
  - `heroPromise`: "Stop losing good jobs to missed calls, slow replies, and forgotten follow-up."
  - `corePromise`: "More booked jobs. Less chasing. No tech headaches."
  - Trust line (in `trustItems` intro or brand): "Not shared leads. Not just ads. Not another app. A managed front desk built for trade businesses."
- [ ] **Step 2: `npx astro check` passes (types intact). Commit** — `feat(v3): rewritten content layer`

---

### Task 5: Layout shell — BaseLayout, Header, Footer, StickyMobileCTA

**Files:**
- Create: `site-v3/src/layouts/BaseLayout.astro`, `site-v3/src/components/Header.astro`, `site-v3/src/components/Footer.astro`, `site-v3/src/components/StickyMobileCTA.astro`
- Reference (read-only): current `src/layouts/BaseLayout.astro` for meta/OG/SEO tag structure only

**Interfaces:**
- Consumes: tokens.css utilities, `Wordmark`, `navItems`/`footerLinks` from `site.ts`.
- Produces: `BaseLayout` props `{ title: string; description: string; ogImage?: string }`; slots page content; injects fonts/global.css, meta, canonical, JSON-LD LocalBusiness.

- [ ] **Step 1: BaseLayout** — head tags (title template "… | Tradie Front Desk"), global.css import, view-transitions off, skip-link, `<slot />`, Footer, StickyMobileCTA.
- [ ] **Step 2: Header** — navy band, light wordmark, nav (Home, How It Works, Pricing, Proof, Free Audit), orange `Book Free Audit` button, mono-label phone number right-aligned, mobile disclosure menu (no JS framework — `<details>` or small script), sticky with backdrop shift on scroll.
- [ ] **Step 3: Footer** — navy, blueprint grid motif, full sitemap links incl. trade pages + legal, disclaimer text, NZ contact details, stamped badge motif ("TRADIE FRONT DESK · EST. …" registration mark).
- [ ] **Step 4: StickyMobileCTA** — bottom bar < 768px, orange button, hides when the hero CTA is on screen (IntersectionObserver, port logic from current component).
- [ ] **Step 5: Build; screenshot desktop+mobile; commit** — `feat(v3): layout shell`

---

### Task 6: Remotion port + re-theme

**Files:**
- Copy then modify: entire `src/remotion/` → `site-v3/src/remotion/` (Root, components/, compositions/, data/homeVideos.ts)
- Modify: `site-v3/src/remotion/components/theme.ts`
- Copy then restyle: `src/components/{ProductVideoPlayer.tsx,HeroMarqueePlayer.tsx,SectionVideo.astro,HomeVideoGrid.astro,RemotionVideoGrid.astro}` → same paths under `site-v3/`
- Copy: `remotion.config.ts` → `site-v3/remotion.config.ts`

**Interfaces:**
- Consumes: nothing new.
- Produces: same `VideoId` registry and `<SectionVideo id={...} />` API as current site; all 24 composition ids unchanged.

- [ ] **Step 1: Copy files verbatim, then replace `theme.ts`:**

```ts
export const colors = {
  canvas: "#0E2233",
  primary: "#FF5A1F",
  surfaceCard: "#16334A",
  surfaceSoft: "#1D3C55",
  elevated: "#122B40",
  text: "#F6F4EF",
  body: "#E7E4DC",
  muted: "#9FB0BE",
  hairline: "#FF5A1F",
  success: "#2FCB6B",
  warning: "#FFC933",
  error: "#FF4D4D",
  blue: "#4DA3FF",
  pink: "#FFC933",
  orange: "#FF8B3D",
};

export const fontFamily =
  "Archivo, 'Archivo Variable', Inter, ui-sans-serif, system-ui, sans-serif";
```

- [ ] **Step 2: Sweep compositions/components for hard-coded hex values** (`grep -rn "#ff\|#0a\|#05" site-v3/src/remotion` case-insensitive) and route them through `colors`. Adjust any yellow-assumption visuals (e.g. dark-text-on-primary chips now need `#1A0C04`-on-orange or off-white-on-navy).
- [ ] **Step 3: Visual check every composition** — `cd site-v3 && npx remotion studio` (or a temporary `/dev-videos` page rendering all ids via the Player). Check title cards, message bubbles, pipeline boards, glow cards read correctly on navy.
- [ ] **Step 4: Build passes; commit** — `feat(v3): Remotion port re-themed to Blueprint brand`

---

### Task 7: Motion primitives

**Files:**
- Create: `site-v3/src/components/motion/Reveal.astro` (CSS scroll-driven / IO-based reveal wrapper with `variant` prop: `draft` (line-draw + rise), `stamp` (scale-in annotation), `fade`), `site-v3/src/components/motion/DraftPath.astro` (SVG dashed path that draws on scroll), `site-v3/src/components/motion/StatTick.tsx` (React island counter), `site-v3/src/lib/motion.ts` (shared IO helper)

**Interfaces:**
- Produces: `<Reveal variant="draft" delay={0.1}>…</Reveal>`; `<DraftPath d="M…" />`; `<StatTick value={38} suffix="%" client:visible />`.

- [ ] **Step 1: Implement `Reveal`** — content visible by default; JS adds `data-armed` before first paint only when IO is supported AND `prefers-reduced-motion: no-preference`; class-based transitions (opacity/transform, `var(--ease-out)`, `var(--dur-slow)`). No reveal on `.band` roots — only on discrete elements.
- [ ] **Step 2: Implement `DraftPath` + `StatTick`** with the same guards; StatTick uses `motion`'s `animate()` on view.
- [ ] **Step 3: Test page `/dev-motion` (temporary), verify in browser incl. emulated reduced-motion; delete page after check. Build; commit** — `feat(v3): motion primitives`

---

### Task 8: Integration components — forms and embeds

**Files:**
- Copy then restyle: `src/components/{AuditForm.astro,ContactForm.astro,VoiceAiEmbed.astro,FAQ.astro,CTASection.astro}` → `site-v3/src/components/`

**Interfaces:**
- Consumes: tokens, `.btn-primary`, mono-label styles.
- Produces: same component props/behavior as current versions (GHL loader.js widget untouched, form handlers untouched — only presentation changes).

- [ ] **Step 1: Port each component; keep every `script`, endpoint, hidden field, and widget id byte-identical; restyle markup/CSS to Blueprint** (light-band forms: white surface, navy labels in mono, orange submit; dark-band CTA sections: navy + orange).
- [ ] **Step 2: Build; verify widget script tag renders in dist HTML; commit** — `feat(v3): forms and embeds ported`

---

### Task 9: `/impeccable init` + DESIGN.md for site-v3

**Files:**
- Create: `site-v3/PRODUCT.md`, `site-v3/DESIGN.md` (via impeccable init flow)

- [ ] **Step 1: Run the impeccable `init` flow** (`reference/init.md`) with cwd context at `site-v3/`, seeding answers from the spec: register = brand/marketing, platform = web, palette/typography from Task 2 tokens, voice rules from Global Constraints.
- [ ] **Step 2: Review generated PRODUCT.md/DESIGN.md against the spec; fix drift; commit** — `chore(v3): impeccable product/design context`

---

### Task 10: Homepage (quality bar)

**Files:**
- Create: `site-v3/src/pages/index.astro` (replace placeholder), section components as needed under `site-v3/src/components/home/` (e.g. `Hero.astro`, `LeakDiagram.astro`, `Mechanism.astro`, `ModuleGrid.astro`, `ProofBand.astro`, `AuditOffer.astro`)
- Reference: `tradie-front-desk-rebuilt/09-homepage-wireframe-and-copy.md` (structure + raw material), spec §4

**Interfaces:**
- Consumes: everything from Tasks 2–8. Homepage videos: `HomeHeroVideo`, `HomeProblemVideo`, `HomeReframeVideo`, `HomeFiveStepVideo`, `HomeModulesVideo`, `HomeAuditPackagesVideo`, `HomeRealBusinessPaymentVideo` via `SectionVideo`.

Section map (final copy to be written fresh from doc 09 in the new voice; these headlines are the approved anchors):

1. **Hero (dark)** — h1 "Stop losing good jobs to missed calls, slow replies, and forgotten follow-up." + sub + orange CTA + ghost "See how it works" + `HomeHeroVideo`; drafting-assembly entrance (grid fades in, headline rises, annotation stamps).
2. **The leak (light)** — mono-label "WHERE JOBS SLIP"; annotated SVG diagram (missed call / slow reply / dead quote paths with `DraftPath`), `HomeProblemVideo`.
3. **The reframe (light)** — "Not leads. Not ads. Not another app. A managed front desk." + `HomeReframeVideo`.
4. **The mechanism (dark)** — Capture → Respond → Qualify → Book → Follow Up as scroll-animated blueprint flow; `HomeFiveStepVideo`.
5. **What's included (light)** — module grid from `modules`; `HomeModulesVideo`.
6. **Proof band (dark)** — `proofMetrics` with `StatTick`, case study cards, claims-safe framing; `HomeRealBusinessPaymentVideo`.
7. **Audit offer + packages (light)** — `packages` cards, audit explanation; `HomeAuditPackagesVideo`.
8. **FAQ (light)** — from `faqs`.
9. **Final CTA band (dark)** — corePromise + orange CTA + trust line.

- [ ] **Step 1: Load the three design skills; write a one-line taste-skill Design Read; build sections 1–4.**
- [ ] **Step 2: Build sections 5–9.**
- [ ] **Step 3: Browser pass at 1280 and 375: hero entrance, scroll motion, video playback, sticky CTA, contrast spot-check. Fix.**
- [ ] **Step 4: `npm run build` passes; commit** — `feat(v3): homepage`
- [ ] **Step 5: CHECKPOINT — show the user the homepage before fanning out.**

---

### Task 11 (Wave A, parallel agents): How It Works · What's Included · Why We're Different · Pricing

**Files:** `site-v3/src/pages/{how-it-works,whats-included,why-were-different,pricing}.astro` + per-page components under `site-v3/src/components/<page>/`

**Per-page brief (each agent gets: spec, Global Constraints, this block, and its source docs):**
- **how-it-works** — sources: `tradie-front-desk-rebuilt/02`, current page for structure; videos `HowItWorksHeroVideo`, `HowItWorksScenarioVideo`. Narrative: the 5-step mechanism in depth, day-in-the-life scenario (missed call at 2pm → text-back → qualified → booked), owner handoff.
- **whats-included** — sources: `about-tradie-front-desk/features_benefits.md`, `product_system.md`; videos `IncludedHeroVideo`, `IncludedModulesVideo`. Module-by-module breakdown from `modules`, each with "what it does / why it matters" framing.
- **why-were-different** — sources: `tradie-front-desk-rebuilt/02-new-positioning-and-category.md`, `06-sales-message-and-objection-handling.md`; videos `DifferentHeroVideo`, `DifferentComparisonVideo`. Comparison vs lead sellers / ad agencies / DIY apps as an annotated blueprint table (not three equal cards).
- **pricing** — sources: `tradie-front-desk-rebuilt/05-pricing-and-payment-structure.md`, `about-tradie-front-desk/pricing_and_packaging.md`; videos `PricingHeroVideo`, `PricingPackagesVideo`. `packages` data; value anchor callout; guarantee/terms language claims-safe.

- [ ] Dispatch 4 subagents (one per page) with the brief; each: load skills → build → self-check contrast/motion → `npm run build` → commit `feat(v3): <page> page`.
- [ ] Review all four in browser (desktop+mobile); queue fixes.

---

### Task 12 (Wave B, parallel agents): Free Audit · Contact · Case Studies

**Files:** `site-v3/src/pages/{free-audit,contact}.astro`, `site-v3/src/pages/case-studies/{index,[slug]}.astro`

- **free-audit** — sources: `about-tradie-front-desk/front_desk_audit.md`, `perfect_offer.md`; videos `AuditHeroVideo`, `AuditChecksVideo`; components `AuditForm`, `VoiceAiEmbed`. The conversion page: what the audit checks (scorecard motif), what you get, form above the fold on mobile.
- **contact** — sources: current contact page + `contactDetails`; videos `ContactHeroVideo`, `ContactNextStepsVideo`; `ContactForm`.
- **case-studies** — sources: `about-tradie-front-desk/case_study_and_proof_system.md`, `proofExamples` data; videos `CaseStudiesHeroVideo`, `CaseStudyProofVideo`, `CaseStudyDetailVideo`. Keep slug routing identical to current (`caseStudies` keys). Every metric labelled "reported outcome"; disclaimer visible.

- [ ] Dispatch 3 subagents with briefs as above; build → verify → commit per page.
- [ ] Review in browser; queue fixes.

---

### Task 13 (Wave C, parallel agents): Trade pages — Electricians · Plumbers/Drainage · Roofers

**Files:** `site-v3/src/pages/{electricians,plumbers-drainage,roofers}.astro`, shared `site-v3/src/components/TradePage.astro` template component

- Sources: `tradePages` data in `site.ts`, `about-tradie-front-desk/customer_avatar.md`, current trade pages for content coverage.
- One shared `TradePage.astro` (trade-specific hero headline, pains, scenario, modules emphasis, CTA) + thin page wrappers passing trade data. Trade-specific contextual copy, not find-and-replace.

- [ ] Build the shared template first (one agent), then 3 thin pages; verify; commit `feat(v3): trade pages`.

---

### Task 14: Legal + meta pass — Privacy · Terms · SEO

**Files:** `site-v3/src/pages/{privacy-policy,terms}.astro`; verify every page's title/description/OG/JSON-LD

- [ ] Port legal copy verbatim from current pages (legal text is NOT rewritten), restyle as quiet light-band document pages with mono-label section numbers. Videos `PrivacyPolicyVideo`/`TermsVideo` optional — include only if they don't cheapen the page.
- [ ] Meta sweep: unique title+description per page (from doc 08 messaging), canonical, OG image, sitemap (`@astrojs/sitemap` optional — only if trivial). Build; commit `feat(v3): legal pages + meta`.

---

### Task 15: Video-factory skill re-brand + b-roll check

**Files:**
- Modify: `skills/tradie-video-factory/SKILL.md` (visual direction section) and its `references/` design reference

- [ ] Update visual direction: navy canvas `#0E2233`, safety orange `#FF5A1F`, marker yellow sparse, Archivo/Inter/JetBrains Mono, blueprint motifs (grid, ticks, dashed call paths, stamps) — replacing "black canvas, electric yellow" direction. Point it at `site-v3/DESIGN.md`.
- [ ] Check whether any hyperframes b-roll files are actually embedded in v3 pages (`grep -rn "video-projects\|hyperframes\|\.mp4" site-v3/src`); regenerate only what's embedded. Commit — `chore: video factory re-branded to Blueprint`.

---

### Task 16: Polish wave — audits and fixes

- [ ] Run impeccable `audit` flow against site-v3 (brand register), page by page; collect findings.
- [ ] Run emil-design-eng review on all motion/interaction code (Before/After table); apply accepted fixes.
- [ ] Taste-skill pre-flight on each page: banned defaults check (§3.5 of spec), typography ceilings, card-reflex check.
- [ ] Apply fixes; build; commit — `polish(v3): audit fixes`.

---

### Task 17: Final verification

- [ ] `cd site-v3 && npm run build` — PASS, zero check errors.
- [ ] Dev server + browser pass: screenshot all 15 routes (13 pages + case-study slug + 404 default) at 1280 and 375. Verify: nav works everywhere, sticky mobile CTA, forms render with correct GHL script/ids, all Remotion videos play, reduced-motion mode leaves every section readable.
- [ ] Contrast spot-check each band/text combo (orange-on-navy CTA text, mono labels on both bands).
- [ ] Report to user with screenshots + follow-ups (deploy decision explicitly left to user).
