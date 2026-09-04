# Amal Alsofayan — Portfolio

A bilingual (English/Arabic) portfolio built with [Astro](https://astro.build):
static output, no server required, plain CSS design system (no Tailwind),
minimal hand-written JavaScript for scroll reveals, subtle parallax, and
the mobile nav.

## Structure

```
src/
  data/           all site copy (EN + AR side by side), one file per topic
  layouts/        BaseLayout.astro — html shell, nav, footer, SEO tags
  components/
    sections/     one component per homepage section
    visuals/      the original SVG/CSS "threshold" motif + atmosphere backgrounds
  pages/
    en/           /en/ homepage + /en/work/<slug>/ case studies
    ar/           /ar/ homepage + /ar/work/<slug>/ case studies (mirrors en/)
  styles/         tokens.css (palette/type/spacing), global.css, fonts.css
public/
  fonts/          self-hosted Fraunces / Inter / El Messiri / IBM Plex Sans Arabic (woff2)
  scripts/        interactions.js — scroll reveal, parallax (vanilla JS)
  assets/         real project assets go here — see assets/README.md
```

To add or edit a project case study, edit `src/data/projects.ts` — the
page for each project is generated from that one array (English and
Arabic pages both read from the same entries, so they can't drift out of
sync). To add real photos/videos, see `public/assets/README.md`.

## Local development

```
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs static site to dist/
npm run preview   # serve the built dist/ locally
```

No environment variables or external services are required.

## Deploying to Hostinger

This is a fully static site (`npm run build` produces plain HTML/CSS/JS/
assets in `dist/`) — no Node.js needs to run on the server.

**Option A — Git-based deploy (recommended if Hostinger's Git integration
is available on your plan):**
1. Push this repository to GitHub (already set up).
2. In hPanel, connect the repository under **Git** and set the build
   command to `npm install && npm run build` with publish directory
   `dist`.
3. Hostinger rebuilds automatically on every push to the deploy branch.

**Option B — Manual/FTP deploy (works on any Hostinger plan):**
1. Run `npm run build` locally (or in CI).
2. Upload the *contents* of `dist/` (not the folder itself) to
   `public_html/` on Hostinger via the File Manager or an FTP client
   (FileZilla, etc.) — everything from `dist/index.html` down.
3. Point the `amalalsofayan.com` domain at that hosting account (already
   the case if it's the primary domain on the plan).

Either way, re-deploy after any content or asset change by repeating the
build + upload step (or just pushing, for the Git-based option).

## Before going live

- [ ] Replace placeholder project assets — see `public/assets/README.md`
      and each project subfolder's own README for exact filenames.
- [ ] Add real brand logos — `public/assets/brands/README.md`.
- [ ] Add the CV PDF — `public/assets/cv/README.md`.
- [ ] Review and approve the DRAFT copy flagged in `src/data/about.ts`,
      `src/data/expertise.ts`, and the objective/execution text in
      `src/data/projects.ts` (marked with `// DRAFT` comments) — none of
      it is fabricated fact, but it hasn't been approved word-for-word.
- [ ] Confirm the AOTC "Marketing Manager, April 2026 – August 2026" date
      range in `src/data/experience.ts` is exactly as intended.

## Known dependency advisories

`npm audit` flags several advisories in Astro 4.x, fixed only by
upgrading to Astro 7. All of them concern the dev server, SSR
middleware, or server islands — none of which this site uses (it's
100% static output, no backend, no user-submitted content), so they're
not exploitable here in practice. Worth upgrading eventually as routine
maintenance, but not urgent for this deployment. Run `npm audit` to see
the current list.
