import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Guides are the site's first genuinely repeatable content type, so they use a
// Content Collection rather than another hand-maintained data file. The Zod
// schema is the point: it makes the SEO fields required at build time, so a
// guide cannot ship with a missing description or an over-long meta title.
// Half-finished meta is the most common way content sets like this rot.
const guides = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/guides" }),
  schema: z
    .object({
      /** Appended with " | Tradie Front Desk" (20 chars) by BaseLayout. */
      title: z.string().min(10).max(45),
      /** The <h1>. Usually longer and more human than the meta title. */
      heading: z.string().min(10),
      description: z.string().min(70).max(155),
      /** One primary keyword per URL. Cannibalisation is self-inflicted. */
      primaryKeyword: z.string().min(3),
      /** Short deck under the h1. */
      lead: z.string().min(40),
      /**
       * The pillar links down to every supporting guide and each supporting
       * guide links back up to it. Exactly one guide should set this true.
       */
      pillar: z.boolean().default(false),
      /** Controls listing order on /guides/. Lower sorts first. */
      order: z.number().default(50),
      publishDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      /** Rendered as an accessible disclosure list AND as FAQPage schema. */
      faqs: z
        .array(z.object({ q: z.string().min(8), a: z.string().min(20) }))
        .min(3)
        .max(8),
      /** Claims-safe sources note, rendered in the mono annotation layer. */
      sources: z.string().optional(),
      /**
       * Emits HowTo schema, for guides that are genuinely a numbered procedure
       * rather than an explainer. Only set this when the body really does walk
       * through ordered steps — HowTo on a discursive article is a misuse of
       * the type and a reader arriving from it would be misled.
       *
       * WORTH KNOWING BEFORE YOU ADD MORE: Google removed the HowTo rich
       * result entirely (documentation deleted 14 September 2023, no rich
       * result on desktop or mobile). This markup will NOT produce a Google
       * search feature. It is emitted because it is valid schema.org, it is
       * read by non-Google consumers including Bing and AI answer engines, and
       * it accurately describes the page. Do not add it expecting SERP lift.
       */
      howTo: z
        .object({
          name: z.string().min(10),
          /** ISO 8601 duration, e.g. "PT2H" for two hours. Optional. */
          totalTime: z.string().optional(),
          steps: z
            .array(z.object({ name: z.string().min(5), text: z.string().min(20) }))
            .min(3)
            .max(12),
        })
        .optional(),
    })
    .strict(),
});

// Insights are the dated counterpart to guides: sector changes, framed as what
// they do to a trade business's enquiry handling. They are a SEPARATE
// collection rather than more guides for one reason — they decay. A guide on
// how to reply to an enquiry is true indefinitely; a post about a bill in
// select committee is wrong the moment it passes. Keeping them apart stops
// rot sitting next to the stable pillar.
//
// Three fields exist purely to make that decay manageable, and all three are
// REQUIRED because optional maintenance metadata never gets filled in:
//   status      — a bill at first reading is not law. Saying so is the whole
//                 point; the template renders it prominently, not in a footnote.
//   reviewBy    — a date someone has to revisit. Without it "we'll keep it
//                 updated" is a wish.
//   sources     — optional on guides, mandatory here. Every factual claim in
//                 this collection traces to a primary source, which for NZ
//                 construction law means MBIE, building.govt.nz, lbp.govt.nz
//                 or legislation.govt.nz. Not a competitor's blog.
const insights = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/insights" }),
  schema: z
    .object({
      /** Appended with " | Tradie Front Desk" (20 chars) by BaseLayout. */
      title: z.string().min(10).max(45),
      /** The <h1>. Usually longer and more human than the meta title. */
      heading: z.string().min(10),
      description: z.string().min(70).max(155),
      /** One primary keyword per URL. Cannibalisation is self-inflicted. */
      primaryKeyword: z.string().min(3),
      lead: z.string().min(40),
      /** Exactly one insight should set this true — the overview post. */
      pillar: z.boolean().default(false),
      order: z.number().default(50),
      publishDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      /**
       * Where the change actually sits in the legislative process. Most of the
       * 2026 NZ construction reforms are bills, not law. Overstating this is
       * the single easiest way for this collection to mislead a reader.
       */
      status: z.enum([
        "proposed",
        "bill-first-reading",
        "bill-in-progress",
        "passed-not-in-force",
        "in-force",
      ]),
      /** Plain-language timing, e.g. "targeted for 2026". A string, not a date, because the honest answer is usually not a date. */
      effectiveFrom: z.string().min(4),
      /** Hard maintenance date. Rendered on the page so the reader can judge staleness too. */
      reviewBy: z.coerce.date(),
      /** The "what changed" box. Bullet facts only, each traceable to `sources`. */
      changeSummary: z.array(z.string().min(10)).min(2).max(6),
      faqs: z
        .array(z.object({ q: z.string().min(8), a: z.string().min(20) }))
        .min(3)
        .max(8),
      /** Required, unlike on guides. No unsourced claims in this collection. */
      sources: z.string().min(20),
    })
    .strict(),
});

export const collections = { guides, insights };
