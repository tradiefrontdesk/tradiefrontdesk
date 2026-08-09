# Shared brief — trade × ads/speed-to-lead matrix

Six guides, one per trade, on what running paid campaigns actually looks like
for that specific trade and why reply speed decides whether the money was
worth spending. They join the evergreen `guides` collection.

## Read before writing

1. `docs/trade-matrix-brief.md` — voice, vocabulary, evidence standard,
   claims-safe rules, frontmatter format. All of it binds here.
2. `docs/speed-to-lead-factsheet.md` — the ONLY permitted source for any
   figure about response speed. Read "What we must NOT claim" twice.
3. `site-v3/src/pages/campaigns.astro` — the service page. Your guide is the
   trade-specific argument behind it. Do not contradict its gate.
4. Your trade's existing pages, so you complement rather than repeat them.

## The hard rule this brief exists to protect

**The gate.** We do not run campaigns until the front desk is in place. Every
guide in this set must carry that, because a page that reads as "run ads for
your plumbing business" without it contradicts `/campaigns/` and the belief
ladder in PRODUCT.md. The order is: fix the handling, then buy the demand.

## The three-way cannibalisation risk

Each trade now has three pages, and they must not converge:

| Page | Job |
|---|---|
| `/{trade}/` | Sells the managed front desk to that trade |
| `/guides/{trade-problem}/` | That trade's sharpest enquiry-handling problem |
| **Yours** | What paid campaigns look like for that trade, and why speed decides the return |

If a paragraph would sit equally well on any of the other two, cut it. Your
distinguishing subject is **the money**: an enquiry you paid for behaves
differently from one that arrived free, and the arithmetic of that is specific
to each trade's job value and urgency.

## What every guide in this set must cover

1. **What an ad enquiry looks like in this trade specifically.** Urgency,
   typical job value, how long the customer takes to decide, whether they are
   ringing three businesses or one.
2. **Which channel tends to fit, and why.** Search suits people already
   looking with a problem to solve now. Meta suits interrupting someone who
   was not looking yet, which works when the work is visual or discretionary.
   Reason it out for the trade; do not assert it as fact.
3. **The speed consequence, made concrete for this trade.** This is the point
   of the whole set. A paid enquiry is intent you were invoiced for. Work
   through what a slow reply actually costs when you have paid to generate it.
4. **The gate**, in your own words.
5. **Seasonality or timing**, where the trade genuinely has it.

## Evidence — read this twice

**No statistics.** No cost-per-lead figures, no "typical conversion rate", no
percentages of any kind. You do not know what a click costs in this trade in
New Zealand, and inventing a plausible number is the single fastest way to
destroy the credibility this site has been built on. Six circulating stats
have already been rejected on this project for exactly this reason.

You may reason openly from how the work obviously goes, and you may reference
the Lead Response Management study (Oldroyd, MIT Sloan, with InsideSales.com,
2007) — but the pillar at `/guides/how-fast-to-reply-to-enquiries/` covers it
properly, so link there rather than restating it, and if you cite the figures
carry the caveats with them.

**Do not cite Alex Hormozi and do not use any "300%" figure.** It was checked
and it does not attach to speed to lead. See the fact sheet.

## Vocabulary

Banned outright: CRM, **automation**, **automated** as a label for what we
sell, funnel, SaaS, workflow, bot, chatbot, GoHighLevel. Describe the
mechanism instead: "every enquiry gets a reply the moment it arrives", never
"automated replies".

"AI" may appear at most ONCE per guide, and only inside an FAQ question
phrased the way a buyer would actually ask it. These are not part of the
dedicated AI section.

NZ spelling. "Enquiry", not "inquiry". Prices in NZD excluding GST.

## Claims-safe

No guaranteed job counts, revenue, rankings or response rates. Never promise a
reply time. "Designed to help", "helps catch", "results depend on".

## Frontmatter and body

Per `docs/trade-matrix-brief.md`. `description` must be 70–155 characters —
count it, this is the most common build failure. Body starts at `## `, never
an `h1`. 1400–1800 words.
