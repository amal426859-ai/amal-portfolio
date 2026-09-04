// DRAFT hero copy. Reuses the approved positioning line (Brief Section 11)
// as the headline since no separate hero copy was supplied — flagged for
// review before launch.

export const hero = {
  en: {
    kicker: "Creative Marketing Specialist", // APPROVED (Section 1)
    headline: "Creative thinking turned into execution.", // APPROVED (Section 11)
    sub: "Ideas, campaigns, content, and brand experiences — carried from concept to something real.",
    location: "Riyadh, Saudi Arabia", // APPROVED
    cta: "See the work",
  },
  ar: {
    kicker: "أخصائية تسويق إبداعي", // APPROVED (Section 1)
    headline: "تفكير إبداعي يتحوّل إلى تنفيذ.",
    sub: "أفكار وحملات ومحتوى وتجارب علامات تجارية — من المفهوم إلى شيء حقيقي.",
    location: "الرياض، المملكة العربية السعودية", // APPROVED
    cta: "مشاهدة الأعمال",
  },
} as const;
