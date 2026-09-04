// Global site content. All copy marked "APPROVED" is verbatim from the brief
// and must not be edited without checking with Amal first. Copy marked
// "DRAFT" is original supporting microcopy written to fill structural gaps
// the brief left open (e.g. a one-line lead-in) — review before launch.

export type Locale = "en" | "ar";

export const site = {
  en: {
    lang: "en",
    dir: "ltr",
    name: "Amal Alsofayan", // APPROVED
    title: "Creative Marketing Specialist", // APPROVED
    location: "Riyadh, Saudi Arabia", // APPROVED
    email: "amal.426859@gmail.com", // APPROVED
    whatsappDisplay: "+966 53 873 0237", // APPROVED
    whatsappLink: "https://wa.me/966538730237",
    website: "amalalsofayan.com", // APPROVED
    closingStatement:
      "Every idea begins with imagination, and I turn that imagination into experiences worth seeing.", // APPROVED
    nav: [
      { label: "Home", href: "#home" }, // APPROVED
      { label: "About", href: "#about" }, // APPROVED
      { label: "Expertise", href: "#expertise" }, // APPROVED
      { label: "Work", href: "#work" }, // APPROVED
      { label: "Experience", href: "#experience" }, // APPROVED
      { label: "Contact", href: "#contact" }, // APPROVED
    ],
    languageSwitchLabel: "العربية",
    cv: {
      download: "Download CV", // APPROVED
      view: "View Full CV", // APPROVED
    },
  },
  ar: {
    lang: "ar",
    dir: "rtl",
    name: "أمل الصفيان", // APPROVED
    title: "أخصائية تسويق إبداعي", // APPROVED
    location: "الرياض، المملكة العربية السعودية", // APPROVED
    email: "amal.426859@gmail.com", // APPROVED
    whatsappDisplay: "+966 53 873 0237", // APPROVED
    whatsappLink: "https://wa.me/966538730237",
    website: "amalalsofayan.com", // APPROVED
    closingStatement:
      "كل فكرة تبدأ بخيال، وأنا أعمل على تحويلها إلى تجربة تستحق أن تُرى.", // APPROVED
    nav: [
      { label: "الرئيسية", href: "#home" }, // APPROVED
      { label: "عنّي", href: "#about" }, // APPROVED
      { label: "مجالات عملي", href: "#expertise" }, // APPROVED
      { label: "أعمالي", href: "#work" }, // APPROVED
      { label: "الخبرة", href: "#experience" }, // APPROVED
      { label: "تواصل", href: "#contact" }, // APPROVED
    ],
    languageSwitchLabel: "English",
    cv: {
      download: "تحميل السيرة الذاتية", // APPROVED
      view: "عرض السيرة الذاتية", // APPROVED
    },
  },
} as const;

// Section labels that appear in-page but not in the top nav (Brands,
// Education & Skills) — required by Section 8's page order even though
// Section 7 keeps them out of the nav itself.
export const sectionLabels = {
  en: {
    work: "Work",
    brands: "Brands", // APPROVED
    experience: "Experience",
    education: "Education & Skills",
    contact: "Contact",
  },
  ar: {
    work: "أعمالي",
    brands: "العلامات التجارية", // APPROVED
    experience: "الخبرة",
    education: "التعليم والمهارات", // APPROVED
    contact: "تواصل",
  },
} as const;
