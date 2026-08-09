# Trust Signals Plan — closing guide item #19

*Drafted 9 August 2026. Nothing built yet. Two decisions and four facts needed before implementation.*

Item #19 of the Diesel Dudes guide — "add trust indicators throughout the site including certifications, experience, and service guarantees" — is the last real gap on the site and its single biggest conversion weakness. Every drafting agent independently refused to invent proof, correctly, so the site currently has none: no certifications, no years trading, no team size, no named human, no testimonials.

The client has now supplied real material. This plan sorts it into what to use, what to reframe, and what to leave out — because roughly a third of it would actively damage the positioning if used as given.

---

## 1. The sorting

### Use as-is — verifiable, relevant, strong

| Fact | Why it works here |
|---|---|
| **Registered in New Zealand as The AI and Automation Agency LTD** | Objectively verifiable on the Companies Office register. This is the single strongest signal available, because a sceptical tradie can check it in thirty seconds. It also finally puts a real entity behind the site rather than three names in a footer disclaimer. |
| **Registered in the USA as Altcutm LLC** | Same category. Supports the "real business, not a one-page funnel" read. |
| **30+ years in the IT industry** | Relevant, plainly stated, and answers the "will this outfit still exist next year" question that a burned tradie actually has. |
| **Certifications in IT hardware, security, and operating systems (Windows, Linux)** | Relevant to "can they build and run a system that does not fall over", which is the real technical objection. **Needs specifics — see Facts Needed.** |

### Reframe before use — real, but wrong words

| Fact as given | Problem | Proposed reframe |
|---|---|---|
| **"Managed over 3,000 GoHighLevel sub-accounts 1-to-1"** | Two problems. **GoHighLevel is a hard-banned word** in buyer-facing copy — it is the tooling the brand deliberately does not sell. And naming it tells a tradie exactly what they are paying a markup on. | *"Over 3,000 client accounts set up and managed one-to-one."* Keeps the scale, drops the platform. The number is the persuasive part; the vendor name is the liability. |
| **"Certified VA assistants who are qualified"** | "Certified" with no named certifying body is the exact species of vague claim that erodes trust rather than building it. A sceptic reads it as filler. | Either name the certification, or drop the word and describe what they actually do. **See Facts Needed.** |

### Do not use — and this is the important part

### The training operation — client overruled the original recommendation, and the reframe fixes it

**Original recommendation was to leave the 99K YouTube channel and the 1,600 Skool students off entirely**, on the grounds that they point at the wrong audience and that "we teach people to start AI agencies" tells a tradie they are not the main business.

**Client's response reframes it: "we run a successful training facility."** That is a materially different claim from the one that was objected to, and it works. *People pay to learn this work from us* is a credible depth-of-expertise signal for a buyer weighing up whether the operator actually knows the systems. *We teach 1,600 people to start AI agencies* is a different business with a different audience.

**Adopted, with one condition: mention it, do not link to it.** The residual risk was never the fact — it was the click. A tradie who follows a link and lands in AI-agency content gets exactly the disconnect the original objection described. Stated as a line of copy with no outbound link, the credibility lands and the detour does not happen.

**Wording constraint:** describe it as training or teaching *this work* — enquiry handling, business systems. Do not use "AI agency" on this site in any form; the vocabulary boundary in PRODUCT.md applies here as everywhere. Do not publish the subscriber or student counts, for the same reason the "17 certifications" count is not published: a headline number invites a click that leads somewhere off-message.

---

## 2. Facts supplied — resolved 9 August 2026

### 2.1 NZBN — will not be published

Client declines, on privacy grounds. Respected and closed. "Registered in New Zealand as The AI and Automation Agency LTD" still stands on its own: anyone motivated can find it on the Companies Office register from the name alone, so the claim remains checkable without the site publishing the number.

### 2.2 The VA question — resolved, and the answer is better than "certified"

Client: *"VAs are verified and trusted, so depends what we need them for — if it's for HighLevel then it's HighLevel, if it's for data entering, we verify data entry."*

So this is **role-specific verification, not third-party certification.** That settles it: the word "certified" comes out. It would have implied an external certifying body that does not exist, which is exactly the vague claim that invites doubt.

What replaces it is more concrete and more true: *team members are verified for the specific work they do before they touch a client account.* A tradie reads that as competence-checked. "Certified team members" reads as filler.

### 2.3 The certifications — real, but three distinct tiers

Reviewed the full set (17 cards). They are **not equivalent**, and presenting them as one block of "17 certifications" would overstate the weaker ones and undersell the strongest.

**Tier 1 — a genuine industry certification, name it:**
- **CompTIA Linux+** — real exam, recognised issuing body, verifiable. This is the one a technical buyer respects, and it should be named explicitly.

**Tier 2 — legitimate training completions, characterise but do not enumerate:**
- WithYouWithMe: IT Fundamentals, Networking Fundamentals, Linux Fundamentals, Linux Systems Administrator
- TryHackMe: Pre Security, Complete Beginner, Web Fundamentals, and a **CompTIA Pentest+ learning path**
- AfriBiz: Linux Basic 101, Linux Administration 102
- freeCodeCamp: Responsive Web Design

**Tier 3 — historic:**
- Tangent Systems, Ethical Hacking & Practical Security, **2005**. Twenty-one years old. Useful as evidence of how far back the IT work goes; not presentable as current security credentials.

**Two hard rules for the copy:**

1. **Do not claim "CompTIA Pentest+ certified".** The card is a *TryHackMe learning path aligned to* Pentest+, not the CompTIA exam. Claiming the certification itself would be a false credential, and it is the sort of thing a technical prospect can check.
2. **Do not publish the "17 certifications" count.** The grid contains visible duplicates — IT Fundamentals appears three times, Linux Systems Administrator and Linux Fundamentals and Responsive Web Design twice each. A headline number that inflates under inspection does more damage than no number.

**The honest framing:** *"CompTIA Linux+ certified, with ongoing training in Linux administration, networking and IT security."* One named certification carries more weight than a padded list, and it survives scrutiny.

### 2.4 What these certifications do and do not support

Every one of them is IT infrastructure, security or web. **None is trade-related or customer-service related.** So they answer *"can this outfit build and run a system that does not fall over?"* — a real objection — and they must not be positioned as *"we understand your trade."*

That distinction has to hold in the copy. Overreaching here would undo the credibility the certifications are meant to buy.

### 2.5 Still open

**Is the 3,000-accounts figure evidenced?** If a prospect asks "how do you know", is there an answer? Claims-safe rules mean anything unverifiable gets cut rather than softened. Not blocking — the trust band can ship without it.

---

## 3. What gets built

### 3.1 A trust band component — `shared/TrustBand.astro`

A light band, reusing the hairline-grid pattern already established by `th-inc__list` and `pp-mech__list`. Four items:

- **Registered company** — NZ and US entities named, NZBN shown
- **30+ years in IT** — experience, framed as systems reliability rather than trade knowledge
- **Certified team** — pending facts above
- **3,000+ accounts managed one-to-one** — scale, platform unnamed

Placed on `/`, `/pricing/`, `/free-audit/`, `/why-were-different/` — the four pages where a sceptic is deciding. **Not** on trade, problem, location or guide pages: those already run long, and a trust band on all 36 would become wallpaper.

### 3.2 `Organization` schema extension

Real, checkable identifiers belong in structured data, not just prose:

- `legalName` — The AI and Automation Agency LTD
- `identifier` — NZBN
- `foundingDate` or `knowsAbout` for the IT domain expertise
- Keep `parentOrganization` as-is

### 3.3 The "who runs this" question

The conversion audit flagged that there is **no named human anywhere on the site**, and that a headshot already exists inside the LeadConnector booking widget. The client wants business framing rather than "me", which is fair — but "the business is mostly myself" is worth saying somewhere, because for a solo tradie buying from a small operator, that is reassurance rather than a weakness.

**Proposal:** a short paragraph on `/why-were-different/`, business-voiced, along the lines of *"A small New Zealand team, led by an operator with thirty years in IT systems."* No name required. It answers "who am I actually dealing with" without turning the site into a personal brand.

### 3.4 GST — sitewide

Client has confirmed: **prices exclude GST.** This needs to land everywhere a price appears, not just the pricing page:

- `site.ts` package prices
- `/pricing/` — `PricingPackages`, `ValueAnchor`
- `/` — `AuditPackages`
- `/guides/answering-service-cost-nz/` — including the competitor comparison, where Private Box is already noted as ex-GST and ours currently says nothing
- `/guides/receptionist-or-outsource/` — the cost comparison table
- `BaseLayout` schema — `valueAddedTaxIncluded: false` can now be set, having been deliberately omitted while it was unconfirmed

Cleanest approach: one exported constant in `site.ts` (`priceNote = "All prices in NZD, excluding GST."`) so it cannot drift out of sync across seven locations.

---

## 4. What this does not fix

Adding credentials does not give the site **client proof**. There are still no testimonials, no named trade clients, and no outcome data from a trade business. The unnamed Auckland plumbing story remains the only client outcome on record and is currently unused.

Credentials answer *"are you real and competent?"* They do not answer *"has this worked for someone like me?"* The second question is the one that closes a sceptical tradie, and the only thing that answers it is a real client agreeing to be referenced. Worth asking the next client who gets a good result.
