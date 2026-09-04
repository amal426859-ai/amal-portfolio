# Chotto Matte — Halloween Campaign (SAW-Inspired)

This project renders as a step-through sequence (Invitation → Puzzle →
Reveal Video → Decor → Event → Coverage → Results), so the order these
files appear in `src/data/projects.ts`'s `assets` array matters — it maps
1:1 to the journey stages.

| File | Type | What it is |
|---|---|---|
| `invitation.jpg` | image | The puzzle-based invitation |
| `puzzle.jpg` | gallery | The puzzle experience itself |
| `reveal-video-1.mp4` | video | Reveal video 1 (176K views) |
| `reveal-video-2.mp4` | video | Reveal video 2 (95.1K views) |
| `decor.jpg` | gallery | Decor photos |
| `event.jpg` | gallery | Event photos — staff SAW-inspired looks, face painting, magic performers |
| `coverage.mp4` | video | Halloween day coverage (233K views) |

The view-count stats (176K / 95.1K / 233K / 504.1K total) are already
wired up in the data file and don't need an asset — they display as a
stat row regardless of which files are present.
