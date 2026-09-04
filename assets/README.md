# Asset structure

Drop real files into the matching folder using the **exact filename**
listed below (or in each subfolder's own README) and they appear on the
site automatically — no code changes needed. Until a file exists, the site
shows a clearly labeled placeholder (a dashed box naming what belongs
there) instead of faking the work with generated imagery.

```
/assets
  /projects
    /chotto-matte-opening
    /puffery-durma
    /chotto-matte-halloween
    /padel-way
    /alfaris-school
    /deemah
    /additional-work
      /alchemy
      /puffery-bakery
  /brands
  /cv
  /hero
```

- **/projects/<slug>/** — see the README inside each project folder for
  its exact expected filenames (these match the "assets" list for that
  project in `src/data/projects.ts`).
- **/brands/** — real brand logo files (SVG preferred, transparent
  background). See `/assets/brands/README.md`.
- **/cv/** — `amal-alsofayan-cv.pdf`. Used by both the "Download CV" and
  "View Full CV" buttons in the Contact section.
- **/hero/** — optional. The homepage hero currently uses an original
  generated SVG/CSS composition (no photo needed). If a real hero photo or
  video is ever preferred instead, drop it here and update
  `src/components/sections/Hero.astro`.

## Formats & size

- Images: JPG or WebP, ideally already resized to roughly the dimension
  they'll display at (the placeholders show the intended aspect ratio).
- Video: MP4 (H.264) or WebM, compressed for web (a few MB, not raw
  camera export). Keep clips reasonably short — they autoplay/loop
  silently as background media where used.
- Keep filenames exactly as specified — the site references them
  literally, there's no build step that renames anything.
