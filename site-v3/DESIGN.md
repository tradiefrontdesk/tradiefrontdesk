---
name: Tradie Front Desk — Site v3
description: Blueprint & Safety Orange — a managed front-desk system for NZ trade businesses, styled like engineering-drawing precision meeting high-vis urgency.
colors:
  canvas-dark: "oklch(0.245 0.045 245)"
  surface-dark: "oklch(0.31 0.05 245)"
  surface-dark-2: "oklch(0.275 0.048 245)"
  action: "oklch(0.68 0.21 38)"
  action-hover: "oklch(0.63 0.21 38)"
  on-action: "oklch(0.18 0.05 38)"
  marker: "oklch(0.87 0.15 88)"
  canvas-light: "oklch(0.965 0.006 245)"
  surface-light: "oklch(1 0 0)"
  ink: "oklch(0.22 0.04 245)"
  body: "oklch(0.32 0.03 245)"
  muted: "oklch(0.45 0.025 245)"
  on-dark: "oklch(0.965 0.006 245)"
  on-dark-body: "oklch(0.88 0.012 245)"
  on-dark-muted: "oklch(0.72 0.02 245)"
  line-dark: "oklch(0.38 0.045 245)"
  line-light: "oklch(0.86 0.012 245)"
typography:
  display:
    fontFamily: "Archivo Variable, Arial Black, sans-serif"
    fontSize: "clamp(2.25rem, 5.5vw, 6rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.01em"
    fontVariation: "\"wdth\" 125"
  body:
    fontFamily: "Inter Variable, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "JetBrains Mono Variable, ui-monospace, monospace"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.08em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "14px"
components:
  button-primary:
    backgroundColor: "{colors.action}"
    textColor: "{colors.on-action}"
    rounded: "{rounded.sm}"
    padding: "0.75rem 1.5rem"
  button-primary-hover:
    backgroundColor: "{colors.action-hover}"
    textColor: "{colors.on-action}"
    rounded: "{rounded.sm}"
    padding: "0.75rem 1.5rem"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "currentColor"
    rounded: "{rounded.sm}"
    padding: "0.75rem 1.5rem"
  form-field-input:
    backgroundColor: "{colors.surface-light}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0.85rem 1rem"
  surface-card:
    backgroundColor: "{colors.surface-light}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
---

# Design System: Tradie Front Desk — Site v3

## 1. Overview

**Creative North Star: "The Job Sheet And The Site Plan"**

Engineering-drawing precision meets high-vis job-site urgency. This is not a soft SaaS pitch and not the comic-poster, halftone-dot, tilted-sticker direction of the prior site iteration — it is serious front-office infrastructure for trade businesses, drawn like a set of plans and marked up like a job sheet. A dark navy canvas reads as the drafting table; a single safety-orange accent is the only color a visitor is ever asked to act on; a sparse hi-vis yellow is reserved for annotation marks, never decoration. The system explicitly rejects AI-purple gradients, the centered-hero-over-dark-mesh cliché, the three-equal-feature-card reflex, cream/parchment "warm AI default" surfaces, uniform fade-up-on-every-section motion, and glassmorphism-everywhere (per `PRODUCT.md`'s Anti-references).

Dark navy bands (hero, proof, final CTA, footer) alternate with cool off-white working bands, so the page reads like a plan set: cover sheet, detail sheets, cover sheet again. Blueprint motifs — a fine grid, measurement ticks, dashed "call path" lines, stamped badges ("AUDIT №…"), orange annotation arrows — carry the metaphor into layout and motion rather than leaving it as a color story alone. The annotation layer (JetBrains Mono, uppercase, tracked) is what sells the blueprint feel: labels, stats, form field names, and badges all read like callouts on a drawing, not UI chrome.

**Key Characteristics:**
- One accent, one job: safety orange (`--action`) is the only actionable color on any screen; hi-vis yellow (`--marker`) never exceeds roughly 5% of a viewport and is reserved for callouts and annotations, never CTAs.
- Dark-canvas / light-canvas alternation carries narrative rhythm (problem → mechanism → proof → CTA), not decoration.
- Archivo at the Expanded width axis (`"wdth" 125`) for every heading gives the industrial signage feel without needing a second display family.
- The mono annotation layer (JetBrains Mono, uppercase, tracked) is a structural device, not a decorative eyebrow — it labels figures, form fields, and measurements the way a drawing's callouts do.
- Motion enhances an already-visible default; nothing is gated behind a class-triggered transition, and every animation has a `prefers-reduced-motion` fallback that renders instantly.

## 2. Colors

A restrained-but-committed strategy: navy carries the dark bands, cool off-white carries the light bands, and exactly one saturated color (safety orange) does all the persuading.

### Primary
- **Safety Orange / Action** (`oklch(0.68 0.21 38)` ≈ `#FF5A1F`): the single CTA and action color — every primary button, the header/footer "Book Free Audit" button, annotation arrows, active-state accents. Used sparingly by area but always present wherever a visitor can act.
- **Action Hover** (`oklch(0.63 0.21 38)`): the same hue, stepped darker for `:hover`/`:active` states on orange buttons.
- **On Action** (`oklch(0.18 0.05 38)`): text/icon color sitting on top of the orange fill (near-black, orange-tinted, not pure white — keeps the orange from reading candy-bright).

### Secondary
- **Hi-Vis Marker** (`oklch(0.87 0.15 88)` ≈ `#FFC933`): reserved for sparse highlights — "leak" callouts, stamped badge text, a single eyebrow line in a dark CTA band. Never a second action color; never more than ~5% of a viewport.

### Neutral
- **Canvas Dark** (`oklch(0.245 0.045 245)` ≈ `#0E2233`): the hero, proof band, final-CTA band, and footer background. The "drafting table."
- **Surface Dark** (`oklch(0.31 0.05 245)` ≈ `#16334A`) / **Surface Dark 2** (`oklch(0.275 0.048 245)`): cards and panels sitting on a dark band, stepped lighter than the canvas so they read as raised sheets, not a flat block.
- **Canvas Light** (`oklch(0.965 0.006 245)` ≈ `#F6F4EF`): the working-section background — a cool, navy-tinted off-white, deliberately not cream or parchment (see the Cool-Canvas Rule below).
- **Surface Light** (`oklch(1 0 0)`): pure white, used for elevated cards/forms sitting on a light band (see `.surface-light` in `src/styles/global.css`).
- **Ink** (`oklch(0.22 0.04 245)`): primary heading/body text color on light bands.
- **Body** (`oklch(0.32 0.03 245)`): the default light-band body text color (`<body>` default) — slightly lifted off Ink so long-form copy doesn't read as harsh as headings.
- **Muted** (`oklch(0.45 0.025 245)`): secondary/muted text on light bands (`.text-muted`, `small`).
- **On Dark / On Dark Body / On Dark Muted** (`oklch(0.965 0.006 245)` / `oklch(0.88 0.012 245)` / `oklch(0.72 0.02 245)`): the heading / body / muted text ramp for dark bands, each independently contrast-verified against Canvas Dark rather than reusing the light-band ramp inverted.
- **Line Dark / Line Light** (`oklch(0.38 0.045 245)` / `oklch(0.86 0.012 245)`): hairline borders and dividers, one per band so a divider never disappears or overpowers its background.

### Named Rules
**The One-Accent Rule.** Orange is the only color a visitor is ever asked to act on. If a second element on the same screen looks clickable in a different color, it's a bug, not a variant.

**The Cool-Canvas Rule.** `--canvas-light` is a navy-tinted off-white (`oklch(0.965 0.006 245)`), not a warm cream or parchment. The AI-default warm-neutral band is explicitly rejected; "warmth" in this brand is carried by copy and typography, never by tinting the body background toward warm.

**The Sparse-Marker Rule.** Hi-vis yellow marks a callout; it never fills a surface, never becomes a second button color, and stays under ~5% of any given viewport.

## 3. Typography

**Display Font:** Archivo Variable (with Arial Black, sans-serif fallback), set to the Expanded width axis (`font-variation-settings: "wdth" 125`) for every heading level.
**Body Font:** Inter Variable (with system-ui, sans-serif fallback).
**Label/Mono Font:** JetBrains Mono Variable (with ui-monospace, monospace fallback) — the annotation layer.

**Character:** Archivo Expanded reads as industrial signage — wide, confident, built for a job-site sign rather than a magazine cover. Inter carries the actual reading load in plain, unfussy text. JetBrains Mono is the drawing's callout layer: every label, stat, form-field name, and badge in mono signals "this is a measurement, not prose."

### Hierarchy
- **Display** (700, `clamp(2.25rem, 5.5vw, 6rem)`, line-height 1.1): hero headlines only. Ceiling is a hard rule — never exceeds 6rem so the page states its claim, it doesn't shout it. `text-wrap: balance`, letter-spacing `-0.01em` (never tighter than `-0.04em`).
- **Headline** (700, e.g. `clamp(1.75rem, 4vw, 2.75rem)` per `CTASection.astro`'s `h2`, line-height 1.1): section headings inside dark and light bands alike; same Archivo/wdth-125 treatment as Display, just a smaller ceiling.
- **Title** (700, sized per-component, line-height 1.1): card/module headings, form section titles — same family and treatment as Headline at a tighter measure.
- **Body** (400, 1rem base, line-height 1.55, max 65–75ch / `.prose`, `.max-measure` = 68ch): all running copy. Never drops toward light gray for "elegance" — Body and Muted are both independently contrast-checked against their band.
- **Label** (500, 0.8125rem / 0.75rem at ≥640px, uppercase, letter-spacing 0.08em, JetBrains Mono): the `.mono-label` annotation layer — form field labels, figure captions ("Fig. 01 — …"), badges, stats, nav phone numbers. This is the layer that makes the blueprint metaphor legible in the UI, not just in the hero art.

### Named Rules
**The Signage Ceiling Rule.** Display type never exceeds `clamp()` max `6rem`; letter-spacing never goes tighter than `-0.04em`. Confidence comes from the Expanded width axis and weight, not from getting bigger.

**The Mono-Is-Structural Rule.** JetBrains Mono is reserved for the annotation layer (labels, stats, measurements, badges) — it is never used as a decorative "developer" flourish on prose, and Archivo/Inter never substitute for it on labels. Mono earns its place because the brand is literally about a drafting-style callout system, not as a generic "technical" costume.

## 4. Elevation

The system is flat-by-default with tonal layering, not shadow-driven depth. Dark bands separate cards from canvas by stepping the background lighter (Canvas Dark → Surface Dark / Surface Dark 2) rather than dropping a shadow on a dark-on-dark surface, where shadows barely read. Light bands use a single soft, diffuse shadow on elevated white surfaces (forms, embeds) to lift them off the off-white canvas — the one place in the system shadows do real work.

### Shadow Vocabulary
- **Surface Lift** (`box-shadow: 0 24px 48px -28px oklch(0.22 0.04 245 / 0.22)`, paired with a 1px `--line-light` border and `--radius-lg`): the `.surface-light` treatment used for the audit/contact form panel and any other elevated white card on a light band. Wide, soft, and low-opacity so it reads as a raised sheet of paper, not a UI-kit drop shadow.

### Named Rules
**The Tonal-Not-Shadow Rule on dark.** Depth on dark bands comes from stepping the surface color lighter (Canvas Dark → Surface Dark → Surface Dark 2), never from a box-shadow — shadows are effectively invisible dark-on-dark and would just add render cost for nothing.

## 5. Components

### Buttons
- **Shape:** `--radius-sm` (4px) — sharp, drafted corners, not soft app-style rounding.
- **Primary:** `background: var(--action)`, `color: var(--on-action)`, padding `0.75rem 1.5rem`, weight 600, no border. This is the only button style that should ever appear more than once per view carrying real weight — it's the "Book a Free Front Desk Audit" button, everywhere.
- **Hover / Focus:** background steps to `--action-hover`; `:active` scales to `0.97` (a press-in, not a lift) — `transform`/`background-color` only, `180ms` ease-out.
- **Ghost / Secondary:** transparent background, `currentColor` border (`1.5px`) and text, so the same class works unmodified on both dark and light bands; hover tints the background with `color-mix(in oklch, currentColor 12%, transparent)`. Used for the lower-commitment secondary action next to a primary CTA (e.g. "See How It Works" beside "Book a Free Audit").

### Cards / Containers
- **Corner style:** `--radius-lg` (14px) for elevated surfaces (forms, feature panels); `--radius-md` (8px) is available for smaller contained blocks.
- **Background:** `--surface-light` on light bands; `--surface-dark` / `--surface-dark-2` on dark bands (see Elevation).
- **Shadow strategy:** see Elevation — soft lift shadow on light-band surfaces only; tonal stepping on dark.
- **Border:** 1px `--line-light` (light bands) or `--line-dark` (dark bands) hairline, not a heavier decorative border. **Never** a colored `border-left`/`border-right` accent stripe — full borders, background tints, or a leading mono label instead.
- **Internal padding:** generous and fluid — `clamp(1.75rem, 4vw, 3rem)` on the form panel is the reference scale for a primary elevated surface.

### Inputs / Fields
- **Style:** `1.5px` `--line-light` border, `--surface-light` background, `--radius-sm` corners, `--ink` text, `0.85rem 1rem` padding. Labels are always the `.mono-label` annotation style directly above the field, not a floating/placeholder-only label.
- **Focus:** border color shifts to `--action` on `:focus-visible` (no glow, no box-shadow ring on the input itself — the ring lives on the label/button focus states instead).
- **Hover:** border steps to `--muted` as a light pre-focus affordance.
- **Placeholder:** `--muted`, held to the same 4.5:1 contrast requirement as body text — not a lighter "for elegance" gray.

### Navigation
- **Style:** sticky `band-dark` header, `color-mix`-translucent + `backdrop-filter: blur(10px)` while unscrolled, solid `--canvas-dark` with a `--line-dark` bottom border once scrolled past the sentinel.
- **Typography:** nav links are Inter body weight 500, `0.9375rem`; the primary CTA button and a region-matched phone number (`.mono-label`-adjacent styling) sit in the action cluster at the end of the bar.
- **Default/hover/active:** links get an underline that scales in from `scaleX(0)` to `scaleX(1)` on hover/focus, `--on-dark-body` → `--on-dark` color shift; no active/current-page state is styled distinctly yet (flag for a future pass once real page routing lands).
- **Mobile treatment:** collapses to a native `<details>` disclosure panel (no JS framework dependency for open/close) with a blueprint-grid background, staggered link entrance (`45ms` cascade), and full-width primary CTA + phone number stacked at the bottom.

### Blueprint Motifs (signature system)
The device that carries the metaphor everywhere it can't be typography or color alone:
- **Blueprint grid** (`.blueprint-grid`): a 72px-pitch 1px line grid at low alpha (`--line-dark` / `0.12`), built from `linear-gradient`s (no images) — the engineering-drawing backdrop for dark hero/CTA bands and the mobile nav panel.
- **Registration mark** (in `Wordmark.astro`): a circle-and-crosshair device in safety orange, always present next to the wordmark regardless of light/dark variant — the drafting-plan "you are here" mark that anchors the logo system.
- **Draft-path lines** (`DraftPath.astro`): SVG paths that draw themselves in via `stroke-dasharray`/`stroke-dashoffset` on first scroll into view, rendering fully drawn by default (no JS / reduced-motion / no-IntersectionObserver fallback) — used for dashed "call path" connectors and underlines.
- **Mono figure captions** (e.g. "Fig. 01 — Design Tokens"): every reference block or diagram gets a mono-label caption in the drawing's own voice, not a generic section eyebrow.

## 6. Do's and Don'ts

### Do:
- **Do** keep safety orange (`--action`, `oklch(0.68 0.21 38)`) as the only actionable color on any screen — every button, link-as-CTA, and interactive accent that means "click me" is orange.
- **Do** alternate `.band-dark` / `.band-light` sections deliberately to carry the page's narrative rhythm (problem → mechanism → proof → CTA), not as a random pattern.
- **Do** set every heading in Archivo at `"wdth" 125` with `text-wrap: balance` and keep the hero display ceiling at `clamp()` max `6rem`.
- **Do** use the mono annotation layer (JetBrains Mono, uppercase, 0.08em tracking) for labels, stats, form-field names, and figure captions — it's structural, not decorative.
- **Do** wrap individual reveal-eligible elements (headings, cards, badges, paths) in the `Reveal`/`DraftPath` pattern: content renders fully visible by default, motion only enhances it once armed, and every animation has a `prefers-reduced-motion` instant fallback.
- **Do** verify every text/background pairing at ≥4.5:1 for body text and ≥3:1 for large/bold text before shipping a new band or surface combination.
- **Do** keep hi-vis yellow (`--marker`) to sparse callouts under ~5% of any viewport.

### Don't:
- **Don't** use `border-left`/`border-right` greater than 1px as a colored accent stripe on any card, list item, or callout — use a full border, a background tint, a leading mono label, or nothing.
- **Don't** use gradient text (`background-clip: text` + gradient) anywhere; emphasis comes from weight, size, or the Archivo width axis, never a gradient fill.
- **Don't** reach for glassmorphism as a default surface treatment — the header's blur is a deliberate, singular exception for sticky-nav legibility, not a pattern to repeat.
- **Don't** default to three-equal feature cards, a tiny uppercase tracked eyebrow above every section, or numbered `01 / 02 / 03` section markers as scaffolding — the mono figure-caption system and blueprint motifs are this brand's alternative to those AI-default reflexes.
- **Don't** tint `--canvas-light` warm — it is a navy-tinted cool off-white by design, explicitly rejecting the cream/parchment/sand "AI default" body background.
- **Don't** apply a uniform fade-up to every section; `Reveal.astro`'s `draft` / `stamp` / `fade` variants exist precisely so each reveal fits what it reveals.
- **Don't** gate any content's visibility on a class-triggered transition — a hidden tab, headless renderer, or reduced-motion visitor must see the same fully-rendered content as everyone else.
- **Don't** introduce a second accent color for actions, even locally within one component — if it needs to look clickable, it's orange or it's not a real action.
- **Don't** let copy anywhere on the site use AI, CRM, automation, funnel, SaaS, workflow, GoHighLevel, or bot in buyer-facing language, and don't state or imply a guaranteed job count, revenue figure, or response rate — see `PRODUCT.md`'s Brand Personality and Conversion & proof sections for the claims-safe framing this rule protects.
