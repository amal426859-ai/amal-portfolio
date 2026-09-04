// Company names, job titles, and dates are APPROVED verbatim (Brief
// Section 23) — do not change. Arabic job-title translations are DRAFT
// (no Arabic wording was supplied) and should be reviewed; company names
// are kept in Latin script as proper nouns, per Section 9.

export const experience = {
  en: {
    eyebrow: "Experience",
    heading: "Where the work has happened",
    companies: [
      {
        name: "Arabian Ocean Trading Company (AOTC)",
        roles: [
          { title: "Marketing Manager", period: "April 2026 – August 2026" },
          { title: "Lead Content Strategist", period: "November 2025 – April 2026" },
          { title: "Senior Marketing Specialist", period: "November 2024 – November 2025" },
        ],
      },
      {
        name: "Ghaliah",
        roles: [{ title: "Executive Social Media Specialist", period: "July 2023 – October 2024" }],
      },
      {
        name: "Beyond Reach",
        roles: [{ title: "Marketing Specialist", period: "September 2022 – June 2023" }],
      },
    ],
  },
  ar: {
    eyebrow: "الخبرة",
    heading: "مسار العمل",
    companies: [
      {
        name: "Arabian Ocean Trading Company (AOTC)",
        roles: [
          { title: "مديرة تسويق", period: "أبريل 2026 – أغسطس 2026" },
          { title: "رئيسة استراتيجية المحتوى", period: "نوفمبر 2025 – أبريل 2026" },
          { title: "أخصائية تسويق أول", period: "نوفمبر 2024 – نوفمبر 2025" },
        ],
      },
      {
        name: "Ghaliah",
        roles: [{ title: "أخصائية تنفيذية لإدارة منصات التواصل الاجتماعي", period: "يوليو 2023 – أكتوبر 2024" }],
      },
      {
        name: "Beyond Reach",
        roles: [{ title: "أخصائية تسويق", period: "سبتمبر 2022 – يونيو 2023" }],
      },
    ],
  },
} as const;
