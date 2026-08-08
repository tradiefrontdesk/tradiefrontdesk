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
      description: z.string().min(70).max(158),
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
    })
    .strict(),
});

export const collections = { guides };
