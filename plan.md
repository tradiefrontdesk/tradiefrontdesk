# Growth Plan — Tradie Front Desk

*Prepared 7 August 2026 · Lead: Opus 5 · Research: 6× Sonnet 5 · Status: **AWAITING APPROVAL — nothing has been built***

---

## 0. Two things that need a decision before any of this matters

### 0.1 Your contact form has been silently discarding every enquiry

**Verified directly in source, live on production now.** [`ContactForm.astro:113-126`](site-v3/src/components/ContactForm.astro#L113) calls `preventDefault()`, logs the payload to the browser console, never sends a network request (the `fetch` is commented out), displays a success message, then calls `form.reset()` — destroying the data.

The message a real visitor currently sees is: *"Thanks. Your enquiry is ready to send once the CRM/webhook is connected."*

Every enquiry submitted at `/contact` since launch is gone and unrecoverable. `/free-audit` is unaffected — it uses the LeadConnector iframe, not this handler. This is a lead-loss bug, not an SEO issue, and it should be fixed today regardless of what you decide about the rest of this plan. **Sending traffic to a site with a broken enquiry form makes the problem worse, not better** — every page in this plan drives toward forms.

### 0.2 There is another business trading as "Tradie Front Desk™" in Australia

**Verified directly.** [tradiefrontdesk.com](https://tradiefrontdesk.com) is live, sells a 6-week "automated front desk" install to Australian trade businesses at $7,700 (founders price $4,400), and uses the name with a **™** symbol. Its headline — *"Stop Wasting Time On Site Answering Calls - Without Missing Jobs"* — is close to yours in both promise and phrasing. It lists no ABN, owner, or contact details.

It is not your site: different TLD, different market, different pricing model (one-time vs your setup + retainer).

Three things to be precise about:
- **™ is an unregistered claim, not proof of a registered trademark.** Anyone can add it. It signals intent to claim, nothing more.
- **This does not affect New Zealand.** Your NZ position is unchanged.
- **It directly affects the Australia decision you just made.** Expanding into AU under a near-identical name to an incumbent already asserting the mark is a commercial and legal question, not an SEO one.

**Recommendation:** before we build a single AU page, have someone check the IP Australia trademark register for "Tradie Front Desk". That is a question for a lawyer or trademark attorney, not for me. Wave 4 (Australia) is sequenced last in this plan specifically so this can be resolved without holding up the rest.

---

## 1. What the research actually found

Six parallel audits. The honest summary:

**Your technical foundation is good.** One shared `BaseLayout` owns every head tag, canonicals are correct and self-referencing, http→https and www→non-www both 301 properly, OG tags are complete, hydration is already `client:visible` everywhere, JSON-LD is present. This is a better starting point than most sites at this stage.

**Your content is far too thin to rank.** Competitor pages that rank for your money terms run **1,950–2,900 words** ([frontly.com.au/trades](https://frontly.com.au/trades) 1,991w with HowTo + FAQPage schema; [officehq.com.au](https://officehq.com.au/industry/building-construction-trades/) 2,865w). Your trade pages are **466–486 words**. That is the single largest gap between you and the results you want.

**The SERPs are winnable.** No directory or aggregator controls these categories. The obstacles are social-thread noise and unlocalised US SaaS content ranking on domain authority alone. Two SERPs — "marketing for plumbers" and "marketing for electricians" — return *byte-for-byte identical results in NZ and AU*, meaning Google isn't localising them and genuine local competition is essentially absent.

**Volume is low everywhere.** Once filtered to trade-*owner* intent rather than homeowner intent, almost nothing in this niche clears ~200 searches/month in NZ. This is a long-tail and question-cluster play. Anyone promising you head-term volume here is guessing.

**Australia is materially harder than New Zealand.** AU has a mature field of funded, AU-native competitors with local proof (OfficeHQ "470+ businesses", Sophiie AI with a genuine NZ regional page, Frontly with the best-built page found anywhere in the teardown). You have no AU client, address, or proof. NZ is winnable as a category leader; AU is a niche fight.

### The vocabulary conflict, and how we resolve it

Your brand bans **AI, CRM, automation, funnel, SaaS, workflow, GoHighLevel, bot** in buyer-facing copy. Every close competitor leads with at least one:

| Competitor | Uses |
|---|---|
| Call Catcher (NZ) | H1: "AI Missed-Call Service for NZ Tradies" |
| automatethetrades.co.nz | Page: "CRM for Tradies NZ" |
| Talkify (NZ) | "AI receptionist vs virtual receptionist" comparison content |
| Sophiie AI | "New Zealand's best AI receptionist... for trades" |
| G'day Desk (AU) | "AI Front Desk Australia" |

**Resolution — keep the ban.** The words **"answering service", "call answering", "virtual receptionist", "front desk", "missed call"** are all unbanned, all carry real commercial intent, and all appear in the same SERPs. We target that vocabulary instead.

**What it costs you, stated plainly:** you forfeit the "AI receptionist" query family — genuinely the fastest-growing term set in this category — and you cannot run the "AI vs human receptionist" comparison content that Talkify is winning informational traffic with. That is real traffic, not hypothetical.

**Why I still recommend keeping the ban:** your entire differentiation is *"managed service, not software"*. Ranking for "AI receptionist" would attract buyers shopping for a tool, which is the buyer you are explicitly not for, and the click would convert badly. The ban costs traffic and protects positioning. If you disagree, the cheapest test is one page — see Option B in §7.

---

## 2. Page map

Word-count targets are set against the observed competitive benchmark, not a rule of thumb.

### Wave 1 — Rewrite what exists (no new URLs)

| URL | Type | Primary keyword | Secondary | Intent | Now → Target |
|---|---|---|---|---|---|
| `/electricians` | Trade vertical | answering service for electricians NZ | missed calls electrician, after-hours electrical calls | Commercial | 471 → 2,000w |
| `/plumbers-drainage` | Trade vertical | answering service for plumbers NZ | after-hours plumbing calls, blocked drain enquiries | Commercial | 486 → 2,000w |
| `/roofers` | Trade vertical | answering service for roofers NZ | roofing enquiry follow-up, storm callout cover | Commercial | 466 → 2,000w |

### Wave 2 — Problem-led pages (NZ)

The highest-intent pages in the plan: the searcher already knows they have the problem.

| URL | Primary keyword | Secondary | Intent | Target |
|---|---|---|---|---|
| `/missed-calls` | missed call text back NZ | stop missing calls tradie, missed call service | Commercial | 2,200w |
| `/quote-follow-up` | quote follow up for tradies | how to follow up quotes, customers going quiet after a quote | Commercial | 2,200w |
| `/after-hours-cover` | after hours answering service tradies NZ | 24/7 call cover trade business | Commercial | 1,800w |
| `/qualifying-enquiries` | how to qualify leads before quoting | stop wasting time on tyre kickers | Informational→Commercial | 1,800w |

### Wave 3 — Question cluster

Pillar plus six supporting posts. Every supporting post links up to the pillar; the pillar links down to all six. Each answers its query in the first 100 words — that is what wins snippets and AI citations.

| URL | Role | Primary keyword | Target |
|---|---|---|---|
| `/guides/handling-trade-enquiries` | **Pillar** | how to handle enquiries trade business | 2,800w |
| `/guides/answering-service-cost-nz` | Supporting | how much does an answering service cost NZ | 1,400w |
| `/guides/receptionist-or-outsource` | Supporting | should I hire a receptionist or outsource | 1,200w |
| `/guides/how-fast-to-reply-to-enquiries` | Supporting | how quickly should a tradie respond to a lead | 1,200w |
| `/guides/why-customers-go-quiet` | Supporting | why do customers go quiet after a quote | 1,200w |
| `/guides/what-is-missed-call-text-back` | Supporting | what is missed call text back | 1,000w |
| `/guides/do-tradies-need-an-answering-service` | Supporting | do tradies need an answering service | 1,200w |

**The cost page is the standout opportunity.** The teardown found *no AU or NZ dollar figures anywhere* in the top 10 — every competitor deflects pricing to "contact us". You already publish real prices. An honest cost page is a genuine differentiator and a strong snippet target.

### Wave 4 — New trade verticals (NZ)

Ranked by enquiry-handling demand, not trade size.

| URL | Primary keyword | Why this trade | Target |
|---|---|---|---|
| `/heat-pump-installers` | answering service for heat pump installers NZ | Sharp seasonal spikes, multi-week install waits — overflow pain lands in the exact weeks that matter. Use "heat pump", never "HVAC" — NZ buyers don't say HVAC. | 1,800w |
| `/builders` | answering service for builders NZ | Highest job value, longest sales cycle; quote follow-up is the most-searched adjacent pain found in the whole NZ research pass | 1,800w |
| `/painters` | answering service for painters NZ | Confirmed spring/summer booking crunch, heavy comparison-shopping = high tyre-kicker volume | 1,800w |

### Wave 5 — Location pages

**Reframed, and cut from 11 to 5.** Your original phrasing — "front desk system for tradies Auckland" — was tested and returns *office furniture and job-management software*. Google doesn't parse it as a service query. The phrasing with real commercial intent is "answering service for tradies in [place]".

| URL | Primary keyword | Real local content available | Target |
|---|---|---|---|
| `/auckland` | answering service for tradies Auckland | Stats NZ consents (17,097 dwellings/yr, +20%), Master Electricians Auckland Branch, humid-climate fault patterns | 1,500w |
| `/christchurch` | answering service for tradies Christchurch | Canterbury consents (8,647, +33% — fastest-growing major region), Selwyn +29% census growth, frost-burst pipe callouts | 1,500w |

**Australia at state level, not city level** — because state licensing regulators are the one genuinely local, un-fakeable content axis there:

| URL | Primary keyword | Real local content available | Target |
|---|---|---|---|
| `/nsw` | answering service for tradies NSW | NSW Fair Trading / Building Commission NSW, ABS approvals | 1,500w |
| `/queensland` | answering service for tradies Queensland | QBCC, strongest approvals growth (+33% June 2026), storm-season callouts | 1,500w |
| `/victoria` | answering service for tradies Victoria | VBA + Energy Safe Victoria (two distinct regulators) | 1,500w |

**Explicitly not built:** Wellington, Hamilton, Tauranga, Dunedin, Perth, Adelaide. Not enough verifiable regional material to clear the substance bar. Adding them later is easy; retracting thin pages is not.

**What these pages must never contain** — no local case studies (you have none), no implied local office or team, no suburb lists as SEO padding, no area-code implication of local presence. [Aussie Business AI](https://aussiebusinessai.com.au/) is the negative example: generic "AI Automation [City]" pages that exist purely for SEO. [TradiesLine.ai](https://tradiesline.ai) is the positive one — 18 location pages carrying real regional statistics.

**Total: 19 new URLs, 3 rewrites.**

---

## 3. Keyword → URL table (cannibalisation resolved)

One primary keyword per URL. The three genuine collision risks and their resolutions:

| Collision | Resolution |
|---|---|
| `/missed-calls` vs `/electricians` vs `/auckland` all wanting "answering service for tradies" | Problem pages own the *symptom* term ("missed call text back"), trade pages own the *trade* term ("...for electricians"), location pages own the *place* term ("...in Auckland"). None target the bare head term. |
| NZ vs AU pages sharing "answering service for tradies" | Separate URLs, distinct primary keywords (NZ vs state names), `hreflang` en-NZ / en-AU on every pair. The AU research confirmed the two markets share core vocabulary — without hreflang these will cannibalise. |
| `/guides/what-is-missed-call-text-back` vs `/missed-calls` | Guide targets the *definitional* query ("what is..."), the money page targets *commercial* intent ("...service NZ"). Guide links to money page, never the reverse ordering. |

**Deliberately not targeted:** "trade business lead follow up" — the SERP for this phrase returns B2B trade-*show* content. Google reads "trade" as exhibitions. Dead keyword; dropped.

---

## 4. Internal linking graph

You asked to keep the navbar clean and link the new pages from the footer. Agreed on the nav — but **footer-only links are not enough on their own**, and the audit proves it: your three existing trade pages currently have *zero* contextual body links from anywhere and are footer-only today. They are your highest-commercial-intent pages and they're starved.

So: footer carries discovery, body copy carries the equity.

```
/  (home)
├── body → /missed-calls, /quote-follow-up        [problem pages, in the leak section]
├── body → /electricians, /plumbers-drainage, /roofers   [trade strip, new]
└── body → /guides/handling-trade-enquiries       [pillar]

/guides/handling-trade-enquiries  (pillar)
├── ↓ all 6 supporting guides
└── ↓ /missed-calls, /quote-follow-up   [commercial handoff]

each supporting guide → ↑ pillar + 1 relevant money page

each trade page → /missed-calls, /quote-follow-up, /free-audit, nearest location page
each location page → 2-3 relevant trade pages + /free-audit
```

**Anchor text rule:** descriptive, varied, never repeated verbatim across different destinations. The current site fails this — all three case-study links use the identical string *"Read the full breakdown →"*, which is both a weak ranking signal and an accessibility defect (three different destinations, one accessible name).

**Footer restructure:** the footer currently duplicates the header nav in a "Navigate" column — redundant links spending budget on pages that already have it. Replace with columns for Trades, Problems, Guides, and Locations.

---

## 5. Schema plan

| Page type | JSON-LD | Note |
|---|---|---|
| Sitewide | `Organization` *(changed from `LocalBusiness`)* | `LocalBusiness` is wrong for a remote multi-country B2B service with no street address. Also: `areaServed` currently lists **United States** — contradicts the NZ + AU scope you set. Remove it. |
| All pages | `BreadcrumbList` | Absent entirely today |
| Trade + problem + location | `Service` | With `areaServed` per page |
| Any page with FAQs | `FAQPage` | FAQs render on Home, Pricing and Free Audit today with **no schema** — free rich-result opportunity being left on the table |
| Guides | `Article` + `FAQPage` | |
| Pricing | `Service` + `Offer` | You publish real prices; competitors don't. Mark them up. |

All rendered from one typed helper, never pasted per page.

---

## 6. Priority order

### Wave 0 — Fix first, build nothing (do this week)

Sequenced first because sending traffic to the current site wastes it.

| # | Fix | Why |
|---|---|---|
| 1 | **Wire the contact form to a real endpoint** | Live lead loss. Everything else is secondary. |
| 2 | **Verify the mobile booking calendar** | The conversion audit could not select a date or see any time slot on a 375×812 viewport across 5 attempts, on the primary conversion path, on the primary device. Needs checking on a real phone today. If it reproduces it outranks everything in this plan. |
| 3 | Install `@astrojs/sitemap`, add `robots.txt` | Google currently has no crawl map |
| 4 | Rewrite all 16 page titles | Every one is 24–46 chars against a 50–60 budget. Cheapest ranking gain available. |
| 5 | Fix trailing-slash mismatch | Every internal click currently takes a 301 hop |
| 6 | Add contextual links to the trade pages | Highest-intent pages, currently footer-only |
| 7 | Move `ValueAnchor` above `PricingPackages` | Your own doctrine says anchor before the price; the page does it after. Component reorder, no copy change. |
| 8 | Add `#audit-form` to the sticky CTA's hide list | The sticky bar currently sits on top of the booking calendar on mobile — a redundant CTA covering the real one at the moment of conversion |
| 9 | Add a fallback line under the booking iframe | "Calendar not loading? Call/text —" Insurance against a third-party embed you don't control |
| 10 | Fix schema type + drop US from `areaServed` | |
| 11 | Swap "will a machine talk to my customers?" into the `/free-audit` FAQ | The exact objection a sceptic has right before handing over their calendar — currently omitted from that page |

### Waves 1–5 — Build, in order

Sequenced so each wave compounds the last: rewrite existing pages → problem pages → cluster → new trades → locations → AU.

**Two operational items sitting outside SEO but affecting all of it:**
- **Booking availability.** The live calendar's earliest slot is **17 days out**, with only 6 days of availability in the whole month. Copy promising a fast, low-friction audit collides with a two-and-a-half-week wait.
- **Connect Search Console.** Ten minutes of work. Without it there is no way to know whether any of this worked — see §8.

---

## 7. Effort and sequence

| Wave | Work | Model | Agents |
|---|---|---|---|
| 0 | Technical fixes + form endpoint | Sonnet builds, Haiku for meta/titles | 2 |
| 1–5 | Research pack → outline → raw draft, one agent per page | Sonnet | 1 per page, batched by wave |
| 1–5 | **Voice pass across all pages together** | **Opus — the lead, non-delegable** | 1 |
| 1–5 | Tightening sweep (`copy-editing`) | Sonnet | 1 |
| 1–5 | Meta titles ≤60, descriptions ≤155, slugs, alt text | Haiku | 1 |
| QA | 5 adversarial verifiers, distinct lenses | Sonnet | 5 |

**Never fanned out:** final brand voice. Subagents produce research, outlines and raw drafts; I write the shipped words in a single pass so the voice holds and the vocabulary bans and claims-safe rules are applied consistently. Nineteen pages drafted by nineteen agents would produce nineteen subtly different brands.

**Every drafting agent receives as hard constraints:** the banned-word list, the claims-safe rules (no guaranteed job counts, revenue, rankings, or response rates), and the unnamed-proof publication rules from `.agents/product-marketing-context.md`.

### Option B — if you want to test the vocabulary ban

Build **one** page — `/guides/answering-service-vs-ai-receptionist` — that uses the banned terminology, and measure it against the cluster. One page is a test; a strategy built on it is a pivot. I'd run the plan as written first and revisit at the 90-day check.

---

## 8. Success metric

**Query set:** the 11 primary keywords in Waves 1–3 (NZ only for the first 90 days; AU has no baseline until Wave 5 ships).

**Conversion event:** audit bookings completed via `/free-audit`, plus contact-form submissions **once the form actually works**.

**Honest baseline problem:** there is no Search Console, no GA4, and therefore **no baseline at all**. Every volume figure in this plan is an estimate produced without paid tools, and labelled as such throughout. Until GSC is connected, "did this work" is unanswerable — which makes connecting it the highest-ROI ten minutes in the entire plan.

**Checkpoints:** 14 days (indexation and crawl), 30 days (first impressions), 90 days (position and conversion).

**What I will not promise:** rankings, traffic figures, or booking counts. The niche is low-volume, the domain has no authority yet, and anyone giving you a number here is guessing.

---

## 9. Reconciliation with the Diesel Dudes SEO guide

*Added 8 August 2026 after the client supplied a local-service SEO guide to follow.*

The guide is sound for the business it was written for. Roughly 70% of it maps directly onto this plan. The remaining 30% depends on something Tradie Front Desk does not have — **a physical presence in a geography** — and following it literally would produce pages that cannot rank and claims that are not true.

**The structural difference:** Diesel Dudes is a local service business that physically drives to customers in named places. Tradie Front Desk is a B2B service delivered remotely, nationwide, to trade businesses. Diesel Dudes' customer searches "diesel mechanic near me". Tradie Front Desk's customer is *the mechanic*, searching for help with their own enquiries.

### Already done (guide items 1, 2, 3, 20 — Wave 0, shipped)

| Guide item | Status |
|---|---|
| §1 Technical audit, robots.txt, sitemap, canonicals, meta | Done — `@astrojs/sitemap` installed, robots.txt added, canonicals were already correct |
| §2 Apex vs www consolidation | Already correct — `www` 301s to apex, `http` 301s to `https` |
| §3 XML sitemap | Done — 14 URLs, legal pages filtered out |
| §20 FAQ schema | Done — `FAQPage` on all three pages that render FAQs |

### Adopt — the guide sharpens the plan

| Guide item | How it changes this plan |
|---|---|
| §16 Service pages to 600–800 words | **Raise it.** Our SERP teardown measured the actual bar for these keywords at 1,950–2,900 words. 600–800 would lose. Wave 1 targets 2,000. |
| §16 Service page content framework | **Adopt wholesale.** Hero → what's included → process → common issues → customer promise → FAQs is a better skeleton than the one in §2, and it fits the trade pages exactly. |
| §6 Pillar page for broader keywords | **Adopt.** Strengthens the Wave 3 pillar and argues for a service hub above the trade pages. |
| §7 Blog for informational queries | **Already in the plan** as the Wave 3 question cluster. Guide's "monthly seasonal content" is a good addition — our NZ research found real seasonality (winter storm roofing, heat-pump install crunch, spring painting bookings, the late-Dec–mid-Jan shutdown when nobody buys). |
| §12 Internal link network + RelatedServices component | **Adopt.** A reusable related-links component beats hand-placed links across 19 pages. |
| §17 Footer, 4 columns, ~24 links | **Adopt exactly.** Matches the client's own instruction — footer carries discovery, navbar stays clean. |
| §13 Duplicate content / cannibalisation scan | **Adopt as a QA lens** in Phase 5. |
| §19 Trust signals | **Adopt, hard.** The conversion audit named the absence of proof as the single biggest drag on booking rate. Constrained by claims-safe rules — see §0.2 and the proof rules in the context file. |
| §15 "Make response-time claims realistic" | **The most transferable item in the guide.** It is the same discipline as the claims-safe rules, and it applies directly to the live booking calendar: earliest slot is 17 days out while the copy promises a fast, low-friction audit. |

### Do NOT apply — these depend on a physical presence

| Guide item | Why it does not transfer |
|---|---|
| §4 Upgrade `LocalBusiness` to a more specific type | **The opposite is correct here.** We moved `LocalBusiness` → `Organization` because there is no street address and no face-to-face customer contact. Google's own Business Profile rules exclude this business model entirely. There is no schema.org type for "managed front desk service"; `Organization` sitewide + `Service` per page is right. `AutoRepair`/`Plumbing` work for Diesel Dudes precisely because those *are* physical trades. |
| §8 Location pages with landmarks, traffic patterns, interstates, neighbourhoods | **Wrong audience.** That framework targets "[city] plumber" — a homeowner query. We tested the equivalent: "front desk system for tradies Auckland" returns *office furniture*. Tradie Front Desk has no local response times, covers no routes, and drives to no landmarks. The defensible version is the reframed one already in §2 Wave 5: 5 pages built on regional construction statistics and named trade-body branches / state regulators, not on geography this business does not occupy. |
| §9 NAP consistency, geo-coordinates, citations, Google Maps embeds | **Not available.** No address, no Google Business Profile, and per the research not GBP-eligible. The one transferable piece: pick **one** canonical business name before any citations exist — three entity names in the footer is a latent inconsistency problem. |
| §18 Emergency landing page | **No emergency intent exists.** Nobody urgently searches for a managed front desk at 2am. This is Diesel Dudes' highest-converting page and has no equivalent here. The nearest real analogue is the `/after-hours-cover` problem page already in Wave 2 — but that sells *the tradie's* ability to answer emergencies, which is a different thing. |
| §10 WebP conversion + lazy loading | **Nothing to convert.** The technical audit found **zero `<img>` tags on the entire site** — every graphic is inline SVG or a Remotion canvas. The guide's 95% image saving is unavailable because the cost was never there. |
| §11 Critical CSS extraction (45KB → 12KB) | **The win does not exist here.** CSS is already 21KB raw / 6KB gzip with `font-display: swap` correctly set on all 16 `@font-face` rules. The real page weight is **88KB gzip of Remotion video JS on 14 of 16 pages** — `ProductVideoPlayer` imports all seven compositions to show one. That is the Core Web Vitals work, not CSS. |

### Net effect

The guide does not change the plan's shape; it sharpens Waves 1–3 and confirms the footer-led linking strategy. Its location-page and schema advice is the part to consciously *not* follow, and this section exists so that decision is on the record rather than looking like an oversight.

---

## 10. Approval gate 🛑

Nothing has been built. Waiting on your go.

**Decisions needed:**
1. Fix the contact form now, ahead of everything else? *(Recommended: yes, today)*
2. Check the IP Australia trademark register before Wave 5? *(Recommended: yes)*
3. Location pages at 5, or the full 11 you originally asked for? *(Recommended: 5)*
4. Keep the vocabulary ban? *(Recommended: yes, with Option B as the test)*
5. Approve the wave order, or reprioritise?
