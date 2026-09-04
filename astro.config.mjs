import { defineConfig } from "astro/config";

// SITE_BASE is only set for temporary alternate-host previews (e.g. GitHub
// Pages, which serves this repo under /amal-portfolio/). The real
// Hostinger production build never sets it, so `base` there is always "/"
// — identical to before this was introduced.
export default defineConfig({
  site: "https://amalalsofayan.com",
  base: process.env.SITE_BASE || "/",
  trailingSlash: "always",
  build: {
    format: "directory",
  },
});
