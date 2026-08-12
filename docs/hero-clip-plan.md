# Per-page hero clips — 8 second Remotion

**Client direction, 10 August 2026.** Every page hero becomes an 8-second
Remotion clip specific to that page. This supersedes the hybrid decision
(drawn SVG heroes) made earlier the same day — the client saw the SVG figures
rendered and judged them not good enough for a hero.

## What changed my ability to do this well

Installing Remotion's official AI skills (`npx skills add remotion-dev/skills`)
surfaced `npx remotion still`. I can now render a frame to PNG and **look at
it**. Every quality problem in this project's videos until now — the orange
saturation, the duplicated label rows, the overlapping footer, the off-brand
blue — existed because nobody, including me, had actually looked at a rendered
frame. The browser pane renders blank in this environment, so stills are the
only honest feedback loop. Every agent working on clips must use it.

## Why a new composition instead of more StoryVideo variants

A still of `PlumbersHeroVideo` showed the problem plainly: a thick accent
frame, an off-brand blue edge, a cramped inner card with dead space, and a row
of small cards repeating labels already on screen. StoryVideo was designed for
in-page figures and does not scale to a hero.

`HeroClip.tsx` is the replacement. Same shared frame for every page — eyebrow,
headline, one accent rule, mechanism, outcome, stamp — with a `shape` field so
page families differ visually rather than every hero being identical text in an
identical layout.

## Rules the composition enforces

1. **One accent per frame.** The old `isActive = index <= active` lit every
   completed stage, so by the end everything was orange and nothing stood out.
   Exactly one element is orange at any moment.
2. **No frames inside frames.** The player already draws a bordered frame with
   registration marks.
3. **Brand palette only.** Navy, safety orange, hi-vis yellow. `colors.blue`
   is off-brand and must not appear.
4. **Generous space.** Cramped is what made the previous clips look cheap.

## Timing — 240 frames at 30fps

| frames | beat |
|---|---|
| 0–24 | eyebrow settles |
| 12–60 | headline rises |
| 34–74 | accent rule draws |
| 54–186 | mechanism plays (differs per shape) |
| 186–240 | outcome and stamp land, then a 10-frame fade so the loop does not cut |

## Shapes

- `stages` — five-step process line. Service and trade pages.
- `leak` — enquiries escaping before they book. Problem pages.
- `timeline` — a bill's progress, later stations visibly not reached. Insights.
- `surge` — demand arriving in a burst. Seasonal and storm pages.

## Copy rules for configs

All of `site-v3/PRODUCT.md` applies. Banned: CRM, automation, automated,
funnel, SaaS, workflow, bot, chatbot, GoHighLevel. No "AI" outside the three
permitted AI pages. No statistics or invented figures. No guarantees. NZ
spelling.

## Outstanding decision — worth revisiting

A Remotion player costs ~439KB of JavaScript on a page that has none, and
these now sit above the fold on every page. The right long-term answer is
`npx remotion render` at build time to produce looping webm plus a poster
image: identical visuals, no React, no player, a fraction of the payload.
That is a build-pipeline change and is not in this pass.
