# Visual build-out — 46 bland pages

**Problem, measured 10 August 2026.** 46 of 63 pages render zero imagery. The
copy is strong; the pages look like documents. The worst affected are the 32
markdown guides and insights, which have a heading, a rule, and then 2,000
words of prose.

## The decision that shaped everything

A page going from zero videos to one costs **~439KB of JavaScript**
(ProductVideoPlayer 247KB + React runtime 179KB + composition ~13KB). A second
and third video on that same page cost **~13KB each**.

So "2–3 videos per page" is nearly free. "A hero video on every page" is the
expensive half, and it would put 439KB above the fold on 46 pages for an
audience of tradies on phones — on a site whose weakest audit score was
already performance (58/100).

**Chosen approach (client decision, 10 August 2026): hybrid.**

- **Hero = drawn, not played.** `BlueprintFigure.astro` — inline SVG animated
  by CSS keyframes. Zero JS, zero hydration, zero network. Renders instantly.
- **Remotion sits below the fold**, `client:visible`, so its 439KB only loads
  if the reader scrolls to it.
- Result: every page looks composed, nothing above the fold got slower.

Rejected: Remotion heroes everywhere (cost), money-pages-only (leaves 32 pages
bland), build-time video rendering (best end state, but needs a render
pipeline — worth revisiting later).

## Architecture

`BlueprintFigure.astro` — 6 variants (`guide`, `insight`, `ads`, `region`,
`problem`, `service`). Shared 400×260 viewBox so every figure crops
identically. Stroke vocabulary: `.bf__plate` / `.bf__rule` / `.bf__hair` /
`.bf__lead`, with `.bf__accent` or `.bf__dot` as the single orange mark.
Registration marks match `HomeVideo.astro` exactly, so a drawn figure and a
played video read as the same kind of object.

**The accessibility contract:** `stroke-dasharray` is declared ONLY inside
`@media (prefers-reduced-motion: no-preference)`. Outside it, no dash
properties exist and the figure renders finished. Verified against the built
CSS. Never move those declarations.

`StoryVideo.tsx` — extended from 8 to 12 variants (adding `guide`,
`legislation`, `ads`, `region`), still one composition driven by config. This
is why 60+ videos do not mean 60 components.

## Phases

1. **Foundation (lead)** — BlueprintFigure contract + `guide` reference
   variant + guides hero wired as the reference implementation. Done.
2. **Artwork (2 sonnet workers, parallel, non-overlapping files)** —
   worker A: 5 remaining SVG variants; worker B: 4 StoryVideo variants and
   ~18 configs, including the three missing trade heroes.
3. **Wiring (sonnet workers)** — heroes and below-fold videos into
   insights, trade, problem, location, campaigns, ai-receptionist, hubs.
4. **Verify (lead)** — build clean, every page ≥1 figure, hydration count
   unchanged on hero-only pages, one-accent rule held, reduced-motion
   fallback intact, no banned vocabulary in any new string.

## Known gap being fixed along the way

`site.ts` carries `videoId: ""` for builders, painters and heat-pump-installers
while the other three trades have heroes. `TradePage.astro` guards it so it
fails silently, but three trade pages have visibly less than their siblings.

## Concurrency note

Six parallel agents caused API failures earlier in this project. Workers run in
pairs, on strictly non-overlapping files, and no agent runs `npm run build`
while another is mid-write — a concurrent build wiped `dist/` and invalidated a
verification pass once already.
