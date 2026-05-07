import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://tradiefrontdesk.systempros.ai",
  integrations: [react()],
});
