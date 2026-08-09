# Shared brief — trade × problem guide matrix

Six guides, each pairing one trade with the enquiry problem that bites that
trade hardest. They join the existing `guides` collection (evergreen), NOT the
`insights` collection (dated legislation).

## Read before writing

1. `site-v3/PRODUCT.md` — voice, vocabulary bans, claims-safe rules. Binding.
2. `site-v3/src/content/guides/why-customers-go-quiet.md` — format and voice
   exemplar. Match its register: short sentences, plain English, diagnostic,
   never a hype pitch.
3. The trade page you are writing alongside (e.g. `src/pages/electricians.astro`)
   — so your guide complements it instead of repeating it.

## The cannibalisation rule — the main reason this brief exists

Every one of these guides sits between a trade page and a problem page that
already exist and already rank for their own terms. Your guide must target the
**intersection**, which is a longer, more specific query than either parent.

- The trade page sells the service to that trade.
- The problem page explains the problem in general.
- **Your guide explains how that specific problem actually plays out for that
  specific trade, and what to do about it.**

If a paragraph you are writing would sit equally well on the trade page or the
problem page, it does not belong in the guide. Concrete, trade-specific detail
is the whole value: the actual shape of the working day, the actual moment the
call comes in, the actual reason it gets missed.

## Evidence standard — read this twice

**No statistics. None.** Do not write "studies show", "research indicates",
"most homeowners", "X% of calls". This project has rejected circulating vendor
figures six separate times ("62% of calls go unanswered", "$100–200 per missed
call", "80% of sales need 5 follow-ups") because none of them trace to a real
source. If you find yourself reaching for a number to make a point land, make
the point with a concrete scenario instead. A tradie on a roof with wet hands
and a ringing phone is more persuasive than a fabricated percentage, and it has
the advantage of being true.

You may reason openly from how the work obviously goes — that is not a claim,
it is observation, and readers can check it against their own day. Do not dress
reasoning up as evidence.

## Claims-safe (hard rule)

No guarantees of job counts, revenue, profit, rankings, review counts or
response rates. Use "designed to help", "helps catch", "results depend on".
Worked examples are illustrations of a process, never promises.

## Vocabulary

Banned outright: CRM, automation, funnel, SaaS, workflow, bot, chatbot,
GoHighLevel. **"AI" must not appear in these guides at all** — the restricted
allowance in PRODUCT.md covers meta descriptions and FAQ questions on other
pages, not this set.

NZ/British spelling throughout. "Enquiry", not "inquiry".

## Frontmatter — the schema is strict and will fail the build

```yaml
---
title: <given per guide — do not change. Max 45 chars.>
heading: <the h1. Longer and more human than the title. Min 10 chars.>
description: <MUST be 70–155 characters. Count them. This is the most common build failure.>
primaryKeyword: <given per guide — do not change>
lead: <deck under the h1, min 40 chars, 1–2 sentences>
pillar: false
order: <given per guide>
publishDate: 2026-08-09
faqs:
  - q: <min 8 chars>
    a: <min 20 chars>
  # 4 to 6 FAQs
---
```

Quote any string containing a colon, dash or apostrophe. Do not add fields that
are not listed — the schema is `.strict()` and unknown keys fail the build.
`sources` is optional here and should be omitted unless you are citing
something real; do not invent a source note.

## Body

- 900–1300 words. Start at `## ` — never an `h1`, the template renders it.
- Use `##` for main sections, `###` sparingly.
- Internal links (markdown, always with trailing slashes) — exactly the three
  given in your individual brief, each placed where it genuinely helps the
  reader, not dumped in a list at the end.
- Write for the owner-operator: on the tools, phone ringing, hands full.
