// APPROVED verbatim (Brief Section 22). Logo files are placeholders until
// Amal provides real logo assets — see /public/assets/brands/README.md.

export const brands = {
  en: {
    heading: "Brands",
    body: "A selection of brands I have worked with across marketing, content, and creative campaigns.",
  },
  ar: {
    heading: "العلامات التجارية",
    body: "مجموعة من العلامات التجارية التي عملت معها في مجالات التسويق والمحتوى والحملات الإبداعية.",
  },
} as const;

// Placeholder roster — replace `name` with real brand names once logos are
// supplied, and drop the matching file into /public/assets/brands/.
export const brandLogos = [
  { slug: "chotto-matte", name: "Chotto Matte", file: "chotto-matte.svg" },
  { slug: "puffery", name: "Puffery", file: "puffery.svg" },
  { slug: "padel-way", name: "Padel Way", file: "padel-way.svg" },
  { slug: "alfaris-school", name: "Alfaris School", file: "alfaris-school.svg" },
  { slug: "deemah", name: "Deemah", file: "deemah.svg" },
  { slug: "alchemy", name: "Alchemy", file: "alchemy.svg" },
];
