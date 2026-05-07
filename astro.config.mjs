import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://tradiefrontdesk.ai",
  integrations: [react()],
});
