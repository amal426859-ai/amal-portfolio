// Project case studies. Objective/Role/Execution/Outcome text not marked
// APPROVED is DRAFT — reorganized or translated from approved brief facts
// into the four-part structure, but not Amal's own words yet. All figures
// (view counts, dates) are APPROVED and must never change.
//
// `assets` lists exactly which real files each project needs, and the path
// each one should be dropped into under /public/assets/projects/<slug>/ —
// see that folder's README. Nothing here uses generated imagery to stand
// in for real project work; empty slots render as labeled placeholders.

export type AssetSlot = {
  file: string; // expected filename under the project's asset folder
  type: "video" | "image" | "gallery" | "pdf";
  label: { en: string; ar: string };
  // Only used by "sequence" layout projects: which journey stage (index
  // into that project's `journey` array) this asset belongs to. Several
  // assets can share a stage — e.g. two reveal videos under one "Reveal
  // Video" stage — so this is explicit rather than inferred from array
  // position, which would silently misalign every asset after it.
  stageIndex?: number;
};

export type Project = {
  slug: string;
  accent: "sky" | "pink" | "green" | "yellow" | "coral";
  layout: "cinematic" | "sequence" | "editorial" | "photography" | "digital";
  assets: AssetSlot[];
  en: ProjectCopy;
  ar: ProjectCopy;
};

type ProjectCopy = {
  title: string;
  category: string;
  objectiveLabel: string;
  roleLabel: string;
  executionLabel: string;
  outcomeLabel: string;
  objective: string;
  role: string[];
  execution: string;
  outcome: string;
  stats?: { value: string; label: string }[];
  journey?: string[];
};

const labels = {
  en: {
    objectiveLabel: "The Objective",
    roleLabel: "My Role",
    executionLabel: "The Execution",
    outcomeLabel: "The Outcome",
  },
  ar: {
    objectiveLabel: "الهدف",
    roleLabel: "دوري",
    executionLabel: "التنفيذ",
    outcomeLabel: "النتيجة",
  },
};

export const projects: Project[] = [
  {
    slug: "chotto-matte-opening",
    accent: "sky",
    layout: "cinematic",
    assets: [
      { file: "invitation.jpg", type: "image", label: { en: "Invitation design", ar: "تصميم الدعوة" } },
      { file: "reveal-video.mp4", type: "video", label: { en: "Opening / reveal video", ar: "فيديو الافتتاح والكشف" } },
      { file: "photoshoot.jpg", type: "gallery", label: { en: "Photoshoot images", ar: "صور جلسة التصوير" } },
      { file: "event.jpg", type: "gallery", label: { en: "Opening night photos", ar: "صور ليلة الافتتاح" } },
      { file: "press-trend.jpg", type: "image", label: { en: "X trend screenshot", ar: "لقطة شاشة لترند X" } },
    ],
    en: {
      ...labels.en,
      title: "Chotto Matte Riyadh — Opening Campaign",
      category: "Restaurant opening · Creative direction",
      objective:
        "Launch Chotto Matte Riyadh with an opening night strong enough to generate real buzz and press attention.",
      role: [
        "Invitation concept",
        "Contribution to the opening video and reveal idea",
        "Coordination with media coverage companies",
        "Guest list coordination",
        "Photographer and restaurant coordination",
        "Model coordination and styling — outfit, hair, makeup",
        "Photoshoot moodboard and creative direction",
        "Coordination during the opening",
      ],
      execution:
        "Amal shaped the invitation concept and directed the pre-opening photoshoot — moodboard, model styling, outfit, hair, and makeup — while coordinating the photographer, restaurant, guest list, and media coverage partners. She also contributed to developing and refining the opening video and reveal idea alongside the team, then coordinated on the ground during the opening itself.",
      outcome:
        "Reached the #2 spot on X's Saudi Arabia trends, while attracting influencers and prominent guests and generating broad content reach.",
    },
    ar: {
      ...labels.ar,
      title: "افتتاح مطعم Chotto Matte الرياض",
      category: "افتتاح مطعم · توجيه إبداعي",
      objective:
        "إطلاق مطعم Chotto Matte الرياض بحفلة افتتاح تترك أثرًا حقيقيًا وتحقق حضورًا إعلاميًا لافتًا.",
      role: [
        "مفهوم الدعوة",
        "المساهمة في فكرة فيديو الافتتاح وفيديو الكشف",
        "التنسيق مع شركات التغطية الإعلامية",
        "تنسيق قائمة الضيوف",
        "تنسيق المصور والمطعم",
        "تنسيق وستايلنغ الموديلات — الإطلالة، الشعر، المكياج",
        "لوحة إلهام التصوير والتوجيه الإبداعي",
        "التنسيق أثناء الافتتاح",
      ],
      execution:
        "طوّرت أمل مفهوم الدعوة وأشرفت على جلسة التصوير التي سبقت الافتتاح — من لوحة الإلهام إلى ستايلنغ الموديلات والإطلالة والشعر والمكياج — مع تنسيق المصور والمطعم وقائمة الضيوف وشركات التغطية الإعلامية. كما ساهمت في تطوير وصقل فكرة فيديو الافتتاح وفيديو الكشف مع الفريق، ثم تولت التنسيق ميدانيًا خلال ليلة الافتتاح.",
      outcome:
        "الوصول إلى المركز الثاني ضمن قائمة الترند في السعودية على منصة X، إلى جانب جذب مؤثرين وضيوف بارزين وتحقيق انتشار واسع للمحتوى.",
    },
  },
  {
    slug: "puffery-durma",
    accent: "yellow",
    layout: "editorial",
    assets: [
      { file: "decor.jpg", type: "gallery", label: { en: "Decor photos", ar: "صور الديكور" } },
      { file: "invitation.jpg", type: "image", label: { en: "Invitation artwork", ar: "تصميم الدعوة" } },
      { file: "campaign-video.mp4", type: "video", label: { en: "Campaign video", ar: "فيديو الحملة" } },
      { file: "photoshoot.jpg", type: "gallery", label: { en: "Photographer-directed shoot", ar: "صور التصوير الموجّه" } },
      { file: "social-content.jpg", type: "gallery", label: { en: "Post-launch social content", ar: "محتوى التواصل بعد الإطلاق" } },
    ],
    en: {
      ...labels.en,
      title: "Puffery × Durma — Summer Campaign",
      category: "Product launch · Content direction",
      objective:
        "Support Puffery × Durma's summer product launch with one cohesive creative concept, from decor to post-launch content.",
      role: [
        "Summer campaign concept",
        "Decor, invitation, and video ideas",
        "Model styling",
        "Moodboard",
        "Photographer direction",
        "Content after launch — captions and social media copy",
      ],
      execution:
        "Amal developed the decor, invitation, and video concepts and built the photoshoot moodboard, then directed the photographer on set — she did not shoot the content herself. After launch, she continued the campaign with content ideas, captions, and social media copy.",
      outcome:
        "The product launch generated strong customer interest and visible engagement throughout the first week.",
    },
    ar: {
      ...labels.ar,
      title: "Puffery × Durma — حملة الصيف",
      category: "إطلاق منتج · توجيه المحتوى",
      objective:
        "دعم إطلاق منتج Puffery × Durma الصيفي بمفهوم إبداعي متكامل، من الديكور إلى المحتوى بعد الإطلاق.",
      role: [
        "مفهوم الحملة الصيفية",
        "أفكار الديكور والدعوة والفيديو",
        "ستايلنغ الموديلات",
        "لوحة الإلهام",
        "توجيه المصور",
        "المحتوى بعد الإطلاق — النصوص المصاحبة ومحتوى التواصل الاجتماعي",
      ],
      execution:
        "طوّرت أمل أفكار الديكور والدعوة والفيديو، وأعدّت لوحة إلهام التصوير، ثم أشرفت على المصور في موقع التصوير دون أن تتولى التصوير بنفسها. وبعد الإطلاق، واصلت العمل على الحملة عبر أفكار المحتوى والنصوص المصاحبة ومحتوى التواصل الاجتماعي.",
      outcome:
        "شهد إطلاق المنتج إقبالًا مرتفعًا وتفاعلًا واضحًا من العملاء خلال الأسبوع الأول.",
    },
  },
  {
    slug: "chotto-matte-halloween",
    accent: "coral",
    layout: "sequence",
    assets: [
      { file: "invitation.jpg", type: "image", label: { en: "Puzzle-based invitation", ar: "الدعوة القائمة على اللغز" }, stageIndex: 0 },
      { file: "puzzle.jpg", type: "gallery", label: { en: "Puzzle experience", ar: "تجربة اللغز" }, stageIndex: 1 },
      { file: "reveal-video-1.mp4", type: "video", label: { en: "Reveal video 1", ar: "فيديو الكشف الأول" }, stageIndex: 2 },
      { file: "reveal-video-2.mp4", type: "video", label: { en: "Reveal video 2", ar: "فيديو الكشف الثاني" }, stageIndex: 2 },
      { file: "decor.jpg", type: "gallery", label: { en: "Decor photos", ar: "صور الديكور" }, stageIndex: 3 },
      { file: "event.jpg", type: "gallery", label: { en: "Event photos — staff looks, face painting, magic performers", ar: "صور الفعالية — إطلالات الموظفين، رسم الوجه، فنانو السحر" }, stageIndex: 4 },
      { file: "coverage.mp4", type: "video", label: { en: "Halloween day coverage", ar: "تغطية يوم الهالوين" }, stageIndex: 5 },
    ],
    en: {
      ...labels.en,
      title: "Chotto Matte — Halloween Campaign (SAW-Inspired)",
      category: "Brand activation · Full creative concept & execution",
      objective:
        "Turn Chotto Matte's Halloween night into a full SAW-inspired experience guests could step into before they even arrived.",
      role: [
        "Creative concept and full execution",
        "Decor, invitation, and video ideas",
        "Puzzle-based invitation and puzzle experience",
        "Restaurant decor and styling",
        "Moodboard and photographer direction",
        "Coordination with approximately 7 celebrities and influencers",
      ],
      execution:
        "Amal owned the creative concept and led execution end-to-end: a puzzle-based invitation that turned into its own pre-event experience, full restaurant decor and styling, and direction of the photographer for the campaign's visuals. On the night itself, staff wore SAW-inspired looks with face painting, magic performers worked the room, and guests engaged with puzzles and decor built for the theme. Amal also coordinated with roughly seven celebrities and influencers, encouraging them to share the experience with their own followers.",
      outcome:
        "Halloween bookings reached full capacity and closed one day before the event.",
      stats: [
        { value: "176K", label: "Reveal video 1 views" },
        { value: "95.1K", label: "Reveal video 2 views" },
        { value: "233K", label: "Halloween day coverage views" },
        { value: "504.1K", label: "Total views" },
      ],
      journey: ["Invitation", "The Puzzle", "Reveal Video", "Decor", "The Event", "Coverage", "Results"],
    },
    ar: {
      ...labels.ar,
      title: "Chotto Matte — حملة الهالوين المستوحاة من SAW",
      category: "تفعيلة علامة تجارية · مفهوم إبداعي وتنفيذ كامل",
      objective:
        "تحويل ليلة الهالوين في Chotto Matte إلى تجربة متكاملة مستوحاة من SAW يدخلها الضيوف قبل وصولهم فعليًا.",
      role: [
        "المفهوم الإبداعي والتنفيذ الكامل",
        "أفكار الديكور والدعوة والفيديو",
        "دعوة قائمة على اللغز وتجربة اللغز",
        "ديكور المطعم والستايلنغ",
        "لوحة الإلهام وتوجيه المصور",
        "التنسيق مع نحو 7 من المشاهير والمؤثرين",
      ],
      execution:
        "تولت أمل المفهوم الإبداعي والتنفيذ الكامل: دعوة قائمة على الألغاز تحوّلت إلى تجربة قائمة بذاتها قبل الفعالية، وديكور واستايلنغ كامل للمطعم، وتوجيه المصور لالتقاط صور الحملة. وفي ليلة الفعالية، ارتدى الموظفون إطلالات مستوحاة من SAW مع رسم على الوجه، وتفاعل فنانو سحر مع الضيوف، وشارك الحضور في ألغاز وديكور صُمم خصيصًا للحفلة. كما نسّقت أمل مع نحو سبعة من المشاهير والمؤثرين، وشجعتهم على مشاركة التجربة مع متابعيهم.",
      outcome:
        "اكتملت حجوزات Halloween ووصلت إلى الطاقة الاستيعابية الكاملة وأُغلقت قبل الفعالية بيوم.",
      stats: [
        { value: "176K", label: "مشاهدات فيديو الكشف الأول" },
        { value: "95.1K", label: "مشاهدات فيديو الكشف الثاني" },
        { value: "233K", label: "مشاهدات تغطية يوم الهالوين" },
        { value: "504.1K", label: "إجمالي المشاهدات" },
      ],
      journey: ["الدعوة", "اللغز", "فيديو الكشف", "الديكور", "الفعالية", "التغطية", "النتائج"],
    },
  },
  {
    slug: "padel-way",
    accent: "green",
    layout: "editorial",
    assets: [
      { file: "collaboration-card.jpg", type: "image", label: { en: "Collaboration card", ar: "بطاقة التعاون" } },
      { file: "cafe-partners.jpg", type: "gallery", label: { en: "Café partner visuals", ar: "صور المقاهي الشريكة" } },
      { file: "campaign.jpg", type: "gallery", label: { en: "Campaign photos", ar: "صور الحملة" } },
    ],
    en: {
      ...labels.en,
      title: "Padel Way — Eid Collaboration",
      category: "Brand collaboration · Seasonal activation",
      objective:
        "Increase brand awareness and encourage audience engagement during Eid season through a collaboration suited to Padel Way's target audience.",
      role: [
        "Presented the collaboration idea to the client",
        "Contacted suitable cafés",
        "Reviewed seasonal activities",
        "Helped select relevant options",
        "Wrote content for the collaboration card",
      ],
      execution:
        "A seasonal activation focused on relevant local partnerships and clear communication based on audience behavior — collaborations with selected cafés that fit the target audience's social routines during Eid, connecting Padel Way with places people visit after family gatherings and celebrations.",
      outcome:
        "The collaboration helped attract a new audience to Padel Way and reach new potential customers through local partnerships.",
    },
    ar: {
      ...labels.ar,
      title: "Padel Way — تعاون العيد",
      category: "تعاون بين علامات تجارية · تفعيلة موسمية",
      objective:
        "زيادة الوعي بالعلامة التجارية وتشجيع تفاعل الجمهور خلال موسم العيد من خلال تعاون يتناسب مع الجمهور المستهدف لـ Padel Way.",
      role: [
        "عرضت فكرة التعاون على العميل",
        "تواصلت مع المقاهي المناسبة",
        "راجعت الفعاليات الموسمية",
        "ساعدت في اختيار الخيارات المناسبة",
        "كتبت محتوى بطاقة التعاون",
      ],
      execution:
        "تفعيلة موسمية ركّزت على شراكات محلية ملائمة وتواصل واضح مبني على سلوك الجمهور — تعاون مع مقاهٍ مختارة تتناسب مع العادات الاجتماعية للجمهور المستهدف خلال العيد، لربط Padel Way بالأماكن التي يزورها الجمهور بعد التجمعات العائلية والاحتفالات.",
      outcome:
        "ساهم التعاون في استقطاب جمهور جديد إلى Padel Way والوصول إلى عملاء محتملين من خلال التعاونات المحلية.",
    },
  },
  {
    slug: "alfaris-school",
    accent: "sky",
    layout: "photography",
    assets: [
      { file: "script-video.mp4", type: "video", label: { en: "Final video / script excerpt", ar: "الفيديو النهائي / مقتطف من السيناريو" } },
      { file: "stills.jpg", type: "gallery", label: { en: "Stills from the educational content", ar: "لقطات من المحتوى التعليمي" } },
    ],
    en: {
      ...labels.en,
      title: "Alfaris School — Scriptwriting & Educational Content",
      category: "Scriptwriting · Educational content · Brand storytelling",
      objective: "Present classrooms and learning spaces naturally and engagingly.",
      role: ["Developed the script concept", "Wrote content introducing educational spaces"],
      execution:
        "Using simple, indirect storytelling instead of simply listing facilities, Amal created a clear visual journey with concise messages.",
      outcome: "Clear, approachable educational content.",
    },
    ar: {
      ...labels.ar,
      title: "مدرسة الفارس — كتابة السيناريو والمحتوى التعليمي",
      category: "كتابة السيناريو · محتوى تعليمي · سرد قصة العلامة التجارية",
      objective: "تقديم الفصول الدراسية والمساحات التعليمية بأسلوب طبيعي وجذاب.",
      role: ["طوّرت فكرة السيناريو", "كتبت المحتوى التعريفي بالمساحات التعليمية"],
      execution:
        "باعتماد سرد بسيط وغير مباشر بدلًا من سرد المرافق بشكل مباشر، صمّمت أمل رحلة بصرية واضحة برسائل مختصرة.",
      outcome: "محتوى تعليمي واضح وسهل الوصول.",
    },
  },
  {
    slug: "deemah",
    accent: "pink",
    layout: "digital",
    assets: [
      { file: "moodboard.jpg", type: "image", label: { en: "Moodboard", ar: "لوحة الإلهام" } },
      { file: "photoshoot.jpg", type: "gallery", label: { en: "Final photoshoot images", ar: "صور جلسة التصوير النهائية" } },
      { file: "short-form-video.mp4", type: "video", label: { en: "Short-form video content", ar: "محتوى الفيديو القصير" } },
      { file: "social-content.jpg", type: "gallery", label: { en: "Social content + captions", ar: "محتوى التواصل والنصوص المصاحبة" } },
    ],
    en: {
      ...labels.en,
      title: "Deemah — Content & Creative Direction",
      category: "Content direction · Photoshoot preparation",
      objective: "Give Deemah's product content a consistent, art-directed visual identity across social media.",
      role: [
        "Social media content and short-form video ideas",
        "Moodboards",
        "Photography team and model coordination",
        "Visual direction and captions",
      ],
      execution:
        "Amal fully prepared each photoshoot session — moodboards, model and photography team coordination, and visual direction — then directed the photographer rather than shooting herself. She also developed short-form video and content ideas and wrote captions for the platforms.",
      outcome:
        "Developed visually cohesive content aligned with the brand identity and creative direction, presenting the products in a clear and engaging way.",
    },
    ar: {
      ...labels.ar,
      title: "ديمة — المحتوى والتوجيه الإبداعي",
      category: "توجيه المحتوى · تجهيز جلسات التصوير",
      objective: "منح محتوى منتجات ديمة هوية بصرية متسقة وموجّهة إبداعيًا عبر منصات التواصل الاجتماعي.",
      role: [
        "أفكار محتوى التواصل الاجتماعي والفيديوهات القصيرة",
        "لوحات الإلهام",
        "تنسيق فريق التصوير والموديلات",
        "التوجيه البصري والنصوص المصاحبة",
      ],
      execution:
        "جهّزت أمل كل جلسة تصوير بالكامل — لوحات الإلهام، وتنسيق الموديلات وفريق التصوير، والتوجيه البصري — ثم أشرفت على المصور دون أن تتولى التصوير بنفسها. كما طوّرت أفكار الفيديوهات القصيرة والمحتوى وكتبت النصوص المصاحبة للمنصات.",
      outcome:
        "تطوير محتوى بصري متسق مع هوية العلامة التجارية واتجاهها الإبداعي، مع تقديم المنتجات بطريقة جذابة وواضحة.",
    },
  },
];

// Additional work — no case studies, per Section 21. Kept intentionally
// minimal: names only, no invented descriptions.
export const additionalWork = {
  en: {
    heading: "Additional Work",
    items: [
      { name: "Alchemy", slug: "alchemy" },
      { name: "Puffery Bakery & Café", slug: "puffery-bakery" },
    ],
  },
  ar: {
    heading: "أعمال إضافية",
    items: [
      { name: "Alchemy", slug: "alchemy" },
      { name: "Puffery Bakery & Café", slug: "puffery-bakery" },
    ],
  },
};

export const workSection = {
  en: { eyebrow: "Work", heading: "Selected work" },
  ar: { eyebrow: "أعمالي", heading: "أعمال مختارة" },
};
