---
name: tradie-video-factory
description: Create branded HyperFrames explainer video projects from Tradie Front Desk website pages. Use when Codex needs to read an Astro page or site section, identify 4-6 video opportunities, write legal-safe explainer scripts, generate ElevenLabs narration when environment variables are configured, produce numbered transcripts, and scaffold editable HyperFrames HTML animation projects using the site's DESIGN.md visual identity.
---

# Tradie Video Factory

Use this skill to turn pages from The Tradie Front Desk System website into branded explainer video projects.

## Required Sources

Read these before creating any video:

1. `DESIGN.md` for visual identity. Use black canvas, electric yellow, Inter, dark cards, glowing borders, SVG line motion, and practical non-generic visuals.
2. The target Astro page, usually `src/pages/<page>.astro`.
3. `src/data/site.ts` for reusable packages, modules, process steps, FAQs, disclaimers, and case studies.
4. `terms_scope_and_guarantee.md` when proof, pricing, or results language appears.

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

Use animated SVG and CSS/GSAP, not stock footage or robot imagery.

Preferred visuals:

- glowing enquiry lines
- missed call cards becoming SMS replies
- pipeline stages moving left to right
- quote follow-up reminders
- owner notification panels
- audit checklist score panels
- comparison cards for chaos vs organised

Keep all compositions 1920x1080 unless asked otherwise.
