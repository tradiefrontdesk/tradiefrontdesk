---
name: tradie-video-factory
description: Create branded HyperFrames explainer video projects from Tradie Front Desk website pages. Use when Codex needs to read an Astro page or site section, identify 4-6 video opportunities, write legal-safe explainer scripts, generate ElevenLabs narration when environment variables are configured, produce numbered transcripts, and scaffold editable HyperFrames HTML animation projects using the site's site-v3/DESIGN.md "Blueprint & Safety Orange" visual identity.
---

# Tradie Video Factory

Use this skill to turn pages from The Tradie Front Desk System website into branded explainer video projects.

## Required Sources

Read these before creating any video:

1. `site-v3/DESIGN.md` for visual identity ("Blueprint & Safety Orange"). Use the navy canvas (`#0E2233`), stepped-up navy surfaces (`#16334A`), a single safety-orange action color (`#FF5A1F`, never more than one accent), sparse hi-vis yellow (`#FFC933`, callouts only, never a CTA color, never more than ~5% of frame), off-white (`#F6F4EF`) for light bands, Archivo (Expanded, `"wdth" 125`) for display type, Inter for body/caption text, and JetBrains Mono (uppercase, tracked) for annotation labels. Also check `site-v3/src/styles/tokens.css` for the exact token values. Compositions should read like engineering drawings, not glowing dark-mode dashboards.
2. The target Astro page, usually `site-v3/src/pages/<page>.astro`.
3. `site-v3/src/data/site.ts` for reusable packages, modules, process steps, FAQs, disclaimers, and case studies.
4. `about-tradie-front-desk/terms_scope_and_guarantee.md` when proof, pricing, or results language appears.

## Claims Rules

Do not claim guaranteed jobs, leads, revenue, rankings, profit, bookings, or reviews.

Use safe phrasing:

- designed to help
- helps support
- can help
- reported outcome
- results depend on
- book an audit to see what fits

## Workflow

1. Identify 4-6 videos from the page sections.
2. Assign duration:
   - Main hero/core mechanism: 2-3 minutes.
   - Important education sections: 60-120 seconds.
   - CTA/proof/module sections: 45-90 seconds.
3. Write `script.md` with:
   - title
   - target duration
   - voiceover script
   - scene plan
   - visual motifs
   - safe CTA
4. Generate narration only if `ELEVENLABS_API_KEY` is set.
   - Use `ELEVENLABS_VOICE_ID`, default `auq43ws1oslv0tO4BDa7`.
   - Never write API keys to repo files.
5. Produce transcript files:
   - `transcript.numbered.json`
   - `transcript.srt`
6. Scaffold HyperFrames project files:
   - `index.html`
   - optional `narration.mp3`
   - `script.md`
   - transcript files
7. Run:
   - `npx hyperframes lint <project-dir>`
   - `npx hyperframes inspect <project-dir> --samples 12`

## Scripts

- `scripts/scaffold_homepage_batch.mjs`: Creates the six homepage video project folders under `video-projects/home/`.
- `scripts/generate_elevenlabs_audio.mjs`: Generates `narration.mp3` and timestamp transcript files for one project using ElevenLabs.
- `scripts/extract_page_text.mjs`: Extracts useful text from an Astro page for planning.

## Visual Direction

Use animated SVG and CSS/GSAP, not stock footage or robot imagery. Compositions should feel like a set of engineering plans marked up like a job sheet, per `site-v3/DESIGN.md` — not a glowing dark-mode SaaS dashboard. Orange is the only actionable color (buttons, CTA badges, active states); hi-vis yellow is a sparse annotation marker only, never a fill or a second CTA color.

Preferred visuals:

- fine blueprint grid backdrop (thin navy-tinted line grid, low alpha)
- registration marks (circle-and-crosshair devices) as scene anchors
- measurement ticks and dashed "call path" lines connecting enquiry stages
- stamped badges (e.g. "AUDIT №…") for proof and CTA moments
- missed call cards becoming SMS replies, drawn as annotated call-outs
- pipeline stages moving left to right along a dashed draft-path
- quote follow-up reminders styled as mono-label callouts
- owner notification panels as stepped navy surface cards
- audit checklist score panels
- comparison cards for chaos vs organised, using tonal navy stepping (not glow) for depth

Keep all compositions 1920x1080 unless asked otherwise.
