import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://tradiefrontdesk.ai",

  // Netlify serves these pages at /path/ and 301s /path to it. Astro's default
  // ("ignore") let internal links be authored without the slash, so every
  // in-site click cost a redirect hop. "always" makes the generated canonical,
  // sitemap and link URLs agree with what Netlify actually serves.
  trailingSlash: "always",

  integrations: [
    react(),
    sitemap({
      // Legal pages are indexable but carry no search value and would only
      // dilute the sitemap's signal about what this site is for.
      filter: (page) =>
        !page.includes("/privacy-policy/") && !page.includes("/terms/"),
    }),
  ],
});
