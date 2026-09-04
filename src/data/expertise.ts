// Item 6's `body` is APPROVED verbatim (Brief Section 12). All other
// bodies are DRAFT one-line descriptions of the category itself — no new
// facts, achievements, or clients implied — flagged for review.

export const expertise = {
  en: {
    eyebrow: "Expertise",
    heading: "Creative thinking turned into execution.", // APPROVED
    items: [
      {
        title: "Developing Ideas & Campaigns", // APPROVED
        body: "Shaping a raw idea into a complete campaign concept, from spark to structure.",
      },
      {
        title: "Content Strategy", // APPROVED
        body: "Planning what a brand says, where, and why — before a single piece of content is made.",
      },
      {
        title: "Content Writing & Scriptwriting", // APPROVED
        body: "Writing the words and scripts that carry an idea from concept to camera.",
      },
      {
        title: "Production & Creative Direction", // APPROVED
        body: "Directing photoshoots, moodboards, styling, and the details that turn a concept into visuals.",
      },
      {
        title: "Activations & Brand Experiences", // APPROVED
        body: "Designing real-world brand moments people can walk into, not just scroll past.",
      },
      {
        title: "Digital Campaign Knowledge", // APPROVED
        body: "I have hands-on experience supporting, managing, and monitoring digital campaigns across Meta Ads, Google Ads, TikTok Ads, and Snapchat Ads. This knowledge helps me connect creative ideas and content with the right channels, audiences, and marketing objectives, while my broader focus remains creative marketing, content, campaigns, and brand experiences—not campaign execution alone.", // APPROVED verbatim
      },
      {
        title: "Social Media Management", // APPROVED
        body: "Managing the platforms where a brand's content and campaigns actually live.",
      },
    ],
  },
  ar: {
    eyebrow: "مجالات عملي",
    heading: "تفكير إبداعي يتحوّل إلى تنفيذ.", // draft natural equivalent — approve before launch
    items: [
      {
        title: "تطوير الأفكار والحملات", // APPROVED
        body: "تحويل فكرة أولية إلى مفهوم حملة متكامل، من الشرارة الأولى إلى البنية الكاملة.",
      },
      {
        title: "استراتيجية المحتوى", // APPROVED
        body: "تحديد ما تقوله العلامة التجارية، وأين، ولماذا — قبل إنتاج أي محتوى.",
      },
      {
        title: "كتابة المحتوى والسيناريو", // APPROVED
        body: "كتابة النصوص والسيناريوهات التي تحمل الفكرة من المفهوم إلى الكاميرا.",
      },
      {
        title: "الإنتاج والتوجيه الإبداعي", // APPROVED
        body: "الإشراف على التصوير ولوحات الإلهام والستايلينغ والتفاصيل التي تحوّل الفكرة إلى صورة.",
      },
      {
        title: "التفعيلات وتجارب العلامات التجارية", // APPROVED
        body: "تصميم لحظات واقعية للعلامة التجارية يعيشها الجمهور، لا يكتفي بمشاهدتها.",
      },
      {
        title: "معرفة وخبرة بالحملات الرقمية", // APPROVED
        body: "أمتلك خبرة عملية سابقة في إعداد وإدارة ومتابعة الحملات الرقمية عبر Meta Ads وGoogle Ads وTikTok Ads وSnapchat Ads. يساعدني هذا الفهم على ربط الأفكار الإبداعية والمحتوى بالقنوات والجمهور والأهداف التسويقية، مع امتداد تركيزي إلى تطوير الأفكار والحملات الإبداعية وتجارب العلامات التجارية، وليس إدارة الحملات الرقمية فقط.", // APPROVED verbatim
      },
      {
        title: "إدارة منصات التواصل الاجتماعي", // APPROVED
        body: "إدارة المنصات التي يعيش عليها محتوى العلامة التجارية وحملاتها فعليًا.",
      },
    ],
  },
} as const;
