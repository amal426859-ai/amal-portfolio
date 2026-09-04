# Brand logos

Add real logo files (SVG preferred, transparent background; PNG is fine
too — just update the filename in `src/data/brands.ts` to match) using
these names:

| File | Brand |
|---|---|
| `chotto-matte.svg` | Chotto Matte |
| `puffery.svg` | Puffery |
| `padel-way.svg` | Padel Way |
| `alfaris-school.svg` | Alfaris School |
| `deemah.svg` | Deemah |
| `alchemy.svg` | Alchemy |

To add or remove a brand, edit the `brandLogos` array in
`src/data/brands.ts` — each entry is `{ slug, file }`. Until a file
exists, that slot shows a faint dashed placeholder with the brand's slug
as a text label instead of a broken image.
