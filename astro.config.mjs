import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://amalalsofayan.com",
  trailingSlash: "always",
  build: {
    format: "directory",
  },
});
