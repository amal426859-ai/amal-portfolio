import type { APIRoute } from "astro";
import { projects } from "../data/projects";

const locales = ["en", "ar"] as const;
const staticPaths = [""]; // homepage only — Brands/Experience/Education live as anchors on it

export const GET: APIRoute = ({ site }) => {
  const base = site?.toString().replace(/\/$/, "") ?? "https://amalalsofayan.com";

  const urls: string[] = [];
  for (const locale of locales) {
    for (const path of staticPaths) {
      urls.push(`${base}/${locale}/${path}`);
    }
    for (const project of projects) {
      urls.push(`${base}/${locale}/work/${project.slug}/`);
    }
  }

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${url}</loc></url>`).join("\n")}
</urlset>
`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
