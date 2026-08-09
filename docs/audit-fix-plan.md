# Audit remediation plan — 9 August 2026

Execution model: the lead session orchestrates and does every surgical edit
itself (link graph, schema, meta, llms.txt — precise edits where a drafting
agent would risk collateral damage). Sonnet subagents carry the heavy lifting
(the four content expansions), launched in pairs because six concurrent agents
caused API failures earlier today. Build + verify after every phase; nothing
is trusted on an agent's word.

## Phase A — surgical (lead, one pass)

A1. **Contextual-link pass** for the 13 footer-orphans found by the audit:
   - Both AI guides + /campaigns/ + the speed pillar link up to /ai-receptionist/
   - Trade seasonal bands link their dominant region; location pages already
     link trades back (verify, don't assume)
   - Homepage + /case-studies/ link /why-were-different/
   - Guide cluster-nav gains an "all guides" hub link (one component, 19 pages)
   - /contact/ picked up via the campaigns money section
A2. **Schema**: Organization gains `logo` and `founder` (Person, sameAs:
   YouTube @AltusAI, Skool thevoiceaiagency, altussnyman.ai — verified by
   search, to be confirmed by the client). Location pages' Service.areaServed
   names the actual region instead of the country.
A3. **llms.txt**: markdown index of key pages with one-line summaries,
   emitted as a static file in public/.
A4. **Meta trio**: the three descriptions under 120 chars get widened
   (roofing-enquiries 119, triaging-emergency 114, qualifying-enquiries 115).

## Phase B — heavy lifting (sonnet ×4, two batches of two)

B1. Expand `do-tradies-need-an-answering-service` 927w → ≥1,950w (md, safe)
B2. Expand `receptionist-or-outsource` 1,020w → ≥1,950w (md, safe)
B3. Expand `/ai-receptionist/` ~1,260w → ~2,000w (astro — ADD sections only,
    follow existing band pattern, no style rewrites)
B4. Expand `/campaigns/` ~1,240w → ~2,000w (astro — same constraint)

All four: no new statistics, no Hormozi/300%, vocabulary rules per
PRODUCT.md, question-form H2s where natural (GEO cluster 3), NZ spelling.

## Phase C — verify (lead)

Build clean · all links resolve · orphan recount (target: 13 → ≤3, home and
legal pages are acceptable footer-orphans) · word counts ≥ targets · banned
vocab sweep · schema parses · no regressions on the 63 existing pages.

## Deliberately NOT in scope

Deploy (client's call) · Lighthouse/font subsetting (needs a measured
baseline first) · Review/Rating markup (no reviews exist) · hreflang
(correctly absent) · GSC and outreach (post-deploy).
