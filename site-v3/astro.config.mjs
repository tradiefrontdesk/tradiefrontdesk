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

      // Priority and changefreq are set because the brief called for them.
      // Worth being straight about their value: Google has said publicly it
      // ignores both, and treats lastmod only when it is demonstrably
      // accurate. They cost nothing and may still be read by other crawlers,
      // so they are included — but nothing here depends on them.
      serialize(item) {
        const url = item.url;
        const path = url.replace("https://tradiefrontdesk.ai", "");
        // Money pages first, then supporting content, then the rest.
        if (path === "/") return { ...item, priority: 1.0, changefreq: "weekly" };
        if (/^\/(free-audit|pricing|contact)\/$/.test(path))
          return { ...item, priority: 0.9, changefreq: "monthly" };
        if (/^\/(electricians|plumbers-drainage|roofers|heat-pump-installers|builders|painters)\/$/.test(path))
          return { ...item, priority: 0.8, changefreq: "monthly" };
        if (/^\/(missed-calls|quote-follow-up|after-hours-cover|qualifying-enquiries)\/$/.test(path))
          return { ...item, priority: 0.8, changefreq: "monthly" };
        if (path.startsWith("/guides/")) return { ...item, priority: 0.6, changefreq: "monthly" };
        if (path.startsWith("/case-studies/")) return { ...item, priority: 0.5, changefreq: "yearly" };
        return { ...item, priority: 0.7, changefreq: "monthly" };
      },
    }),
  ],
});
