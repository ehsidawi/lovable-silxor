/**
 * Kurdish Sorani (ku) translation dictionary.
 *
 * Keys are the canonical English source strings passed to `t(en, ar)`.
 * Any new user-visible string added to the site MUST get an entry here,
 * or be passed explicitly as the third argument of `t(en, ar, ku)`.
 *
 * Brand names, email addresses, URLs, acronyms and technical standards
 * (Silxor, NIST, ISO 27001, SLA, IAM, PAM, IGA, FFIEC, CI/CD, ...) are kept
 * in Latin script intentionally.
 */
export const ku: Record<string, string> = {
  // ---------------------------------------------------------------- form
  "Something went wrong sending your request.": "هەڵەیەک ڕوویدا لە کاتی ناردنی داواکارییەکەت.",
  "Thank you. Your assessment request has been submitted. Our team will follow up shortly.":
    "سوپاس. داواکاری هەڵسەنگاندنەکەت نێردرا. تیمەکەمان بەم زووانە پەیوەندیت پێوە دەکات.",
  "Or tell us about your project": "یان باسی پڕۆژەکەتمان بۆ بکە",
  "Please fix the following:": "تکایە ئەمانەی خوارەوە چاک بکەرەوە:",
  "Full name": "ناوی تەواو",
  Organization: "دەزگا",
  "Work email": "ئیمەیڵی کار",
  "Phone (optional)": "تەلەفۆن (ئارەزوومەندانە)",
  "Service interest": "خزمەتگوزاری مەبەست",
  "Select a service": "خزمەتگوزارییەک هەڵبژێرە",
  Timeline: "خشتەی کات",
  "Select a timeline": "خشتەی کات هەڵبژێرە",
  "Project summary": "کورتەی پڕۆژە",
  "I agree to Silxor's ": "ڕازیم بە ",
  "privacy policy": "سیاسەتی تایبەتمەندێتی",
  " and consent to being contacted about this request.":
    " ی Silxor و ڕەزامەندی دەدەم بۆ پەیوەندیکردنم دەربارەی ئەم داواکارییە.",
  "No submission backend is configured yet, so this request was not sent automatically. Please send it by email instead:":
    "هێشتا سیستەمی وەرگرتنی داواکاری ڕێکنەخراوە، بۆیە ئەم داواکارییە بە خۆکارانە نەنێردرا. تکایە لە جیاتی ئەوە بە ئیمەیڵ بینێرە:",
  "Send prepared email to hello@silxor.com": "ناردنی ئیمەیڵی ئامادەکراو بۆ hello@silxor.com",
  "Your request could not be submitted.": "نەتوانرا داواکارییەکەت بنێردرێت.",
  "Send prepared email instead": "لە جیاتی ئەوە ئیمەیڵی ئامادەکراو بنێرە",
  "Sending…": "لە ناردندایە…",
  "Submit request": "ناردنی داواکاری",
  Retry: "دووبارە هەوڵبدەوە",

  // ------------------------------------------------------------ dashboard
  "Single Accountable Team": "یەک تیمی بەرپرسیار",
  "One engineering team owns advisory, build, and operations for each engagement.":
    "یەک تیمی ئەندازیاری بەرپرسە لە ڕاوێژکاری و دروستکردن و بەڕێوەبردنی هەر هاوکارییەک.",
  "Security by Design": "ئاسایش لە بنەڕەتەوە",
  "Security and identity controls are built into architecture decisions from day one.":
    "کۆنترۆڵەکانی ئاسایش و ناسنامە لە ڕۆژی یەکەمەوە لە بڕیارە بنیاتنانەکاندا جێگیر دەکرێن.",
  "Framework-Aligned": "لەگەڵ چوارچێوەکان گونجاو",
  "Programs are aligned to NIST CSF and ISO 27001 control families; documentation is evidenced during delivery.":
    "بەرنامەکان لەگەڵ NIST CSF و خێزانە کۆنترۆڵەکانی ISO 27001 گونجێنراون؛ بەڵگەنامەکان لە کاتی گەیاندندا بەڵگە دەکرێن.",
  "Available on Request": "بەردەست لە کاتی داواکردندا",
  "SLA tiers, staffing models, and reporting cadence are scoped per engagement during assessment.":
    "ئاستەکانی SLA و مۆدێلی تیم و ماوەی ڕاپۆرتکردن بۆ هەر هاوکارییەک لە کاتی هەڵسەنگاندندا دیاری دەکرێن.",
  "Advisory & Strategy": "ڕاوێژکاری و ستراتیژ",
  "Infrastructure & Cloud": "ژێرخان و هەور",
  "Cybersecurity & GRC": "ئاسایشی سایبەری و GRC",
  "Managed Services": "خزمەتگوزاری بەڕێوەبراو",
  "OPERATING MODEL": "مۆدێلی کارکردن",
  "How We Operate": "چۆن کار دەکەین",
  "PRACTICE AREAS": "بوارەکانی کار",

  // ------------------------------------------------------------------ FAQ
  "Where does our data live?": "داتاکانمان لە کوێ دادەنرێن؟",
  "Hosting location and jurisdiction are agreed with each client during the technical assessment. We support US-jurisdiction hosting, private and air-gapped deployments for sensitive workloads.":
    "شوێن و یاسای هۆستکردن لەگەڵ هەر کڕیارێک لە کاتی هەڵسەنگاندنی تەکنیکیدا ڕێککەوتن لەسەر دەکرێت. پشتگیری لە هۆستکردن لە ژێر یاسای ئەمریکا و دامەزراندنی تایبەت و بێ پەیوەندی دەرەکی بۆ کاری هەستیار دەکەین.",
  "Can Silxor handle both infrastructure and software in one contract?":
    "دەتوانێت Silxor ژێرخان و نەرمەکاڵا لە یەک گرێبەستدا بەڕێوە ببات؟",
  "Yes. Silxor operates as a single technology partner across infrastructure, software, AI, and cybersecurity: one contract, one SLA, one accountable team. Multi domain scope is defined during the technical assessment.":
    "بەڵێ. Silxor وەک یەک هاوبەشی تەکنەلۆژی کار دەکات لە ژێرخان و نەرمەکاڵا و AI و ئاسایشی سایبەری: یەک گرێبەست، یەک SLA، یەک تیمی بەرپرسیار. چوارچێوەی فرەبوار لە کاتی هەڵسەنگاندنی تەکنیکیدا دیاری دەکرێت.",
  "How does Silxor's AI differ from public AI providers?":
    "AI ی Silxor چۆن جیاوازە لە دابینکەرە گشتییەکانی AI؟",
  "Silxor can host models on private, client-dedicated infrastructure so data is not sent to third-party model providers. Fully air-gapped deployments are available for sensitive workloads.":
    "Silxor دەتوانێت مۆدێلەکان لەسەر ژێرخانی تایبەتی کڕیار هۆست بکات، بەشێوەیەک داتا بۆ دابینکەری لایەنی سێیەم نەنێردرێت. دامەزراندنی تەواو بێ پەیوەندی دەرەکی بۆ کاری هەستیار بەردەستە.",
  "What does incident response look like?": "وەڵامدانەوەی ڕووداوەکان چۆنە؟",
  "Severity levels, escalation paths, and response-time targets are defined per contract and documented in the SLA agreed with each client.":
    "ئاستەکانی قورسی و ڕێڕەوی بەرزکردنەوە و ئامانجەکانی کاتی وەڵامدانەوە بۆ هەر گرێبەستێک دیاری دەکرێن و لە SLA ی ڕێککەوتوو لەگەڵ هەر کڕیارێک تۆمار دەکرێن.",
  "Is Silxor aligned with US financial regulatory requirements?":
    "ئایا Silxor لەگەڵ پێداویستییە یاساییە داراییەکانی ئەمریکا گونجاوە؟",
  "Silxor's compliance architecture is designed to support programs operating under frameworks including FFIEC, GLBA, SOX, PCI DSS, and the NIST 800 series. We work directly with client compliance and audit teams to document and evidence controls throughout the engagement.":
    "بنیاتی پابەندبوونی Silxor بۆ پشتگیری بەرنامەکانی ژێر چوارچێوەکانی FFIEC و GLBA و SOX و PCI DSS و زنجیرەی NIST 800 داڕێژراوە. ڕاستەوخۆ لەگەڵ تیمەکانی پابەندبوون و پشکنینی کڕیار کار دەکەین بۆ تۆمارکردن و بەڵگەکردنی کۆنترۆڵەکان بە درێژایی هاوکاری.",
  "How do we start an engagement?": "چۆن هاوکاری دەست پێ دەکەین؟",
  "Every engagement begins with a no cost Technical Assessment: a discovery session to understand environment, objectives, and constraints. A scoped proposal follows.":
    "هەر هاوکارییەک بە هەڵسەنگاندنێکی تەکنیکی بێ بەرامبەر دەست پێ دەکات: دانیشتنێکی ناسینەوە بۆ تێگەیشتن لە ژینگە و ئامانج و سنوورەکان. دواتر پێشنیارێکی دیاریکراو دەنێردرێت.",
  "Does Silxor deliver in Arabic?": "ئایا Silxor بە زمانی عەرەبی خزمەتگوزاری دەگەیەنێت؟",
  "Yes. Silxor operates bilingually across engagements. Documentation, assessments, architecture reports, and operational communications can be delivered in Arabic or English on request.":
    "بەڵێ. Silxor بە فرەزمانی کار دەکات. بەڵگەنامە و هەڵسەنگاندن و ڕاپۆرتی بنیاتنان و پەیوەندییە کارگێڕییەکان دەتوانرێن بە عەرەبی یان ئینگلیزی بگەیەنرێن لە کاتی داواکردندا.",
  "Can Silxor deploy in air-gapped environments?":
    "ئایا Silxor دەتوانێت لە ژینگەی بێ پەیوەندی دەرەکیدا دابمەزرێنێت؟",
  "Yes. Silxor supports air-gapped deployments for high-assurance workloads, covering private AI, identity infrastructure, and custom platforms with no external network dependency. Architecture is defined during the technical assessment.":
    "بەڵێ. Silxor پشتگیری دامەزراندنی بێ پەیوەندی دەرەکی دەکات بۆ کاری زۆر هەستیار، کە AI ی تایبەت و ژێرخانی ناسنامە و پلاتفۆرمی تایبەت دەگرێتەوە بەبێ پشتبەستن بە تۆڕی دەرەکی. بنیات لە کاتی هەڵسەنگاندنی تەکنیکیدا دیاری دەکرێت.",
  "What sets Silxor apart from large international providers?":
    "چی Silxor جیا دەکاتەوە لە دابینکەرە گەورە نێودەوڵەتییەکان؟",
  "Silxor is US operated and directly accountable. Engineering, operations, and delivery teams sit under one command structure, with senior engineers involved in each engagement and transparent, contractually defined SLAs.":
    "Silxor لە ئەمریکاوە بەڕێوە دەبرێت و ڕاستەوخۆ بەرپرسیارە. تیمەکانی ئەندازیاری و کارگێڕی و گەیاندن لە ژێر یەک ساختاری بەڕێوەبردندان، لەگەڵ ئامادەبوونی ئەندازیارە پێشکەوتووەکان لە هەر هاوکارییەک و SLA ی ڕوون و گرێبەستکراو.",
  FAQ: "پرسیارە باوەکان",
  "Answers Before You Sign": "وەڵامەکان پێش ئەوەی واژوو بکەیت",

  // --------------------------------------------------------------- footer
  Services: "خزمەتگوزارییەکان",
  Industries: "کەرتەکان",
  Banking: "بانکداری",
  Government: "حکومەت",
  Healthcare: "تەندروستی",
  "Critical Infrastructure": "ژێرخانی سەرەکی",
  Company: "کۆمپانیا",
  Partners: "هاوبەشەکان",
  Insights: "تێڕوانینەکان",
  Careers: "هەلی کار",
  About: "دەربارە",
  Contact: "پەیوەندی",
  Compliance: "پابەندبوون",
  Privacy: "تایبەتمەندێتی",
  "Compliance Documentation": "بەڵگەنامەی پابەندبوون",
  "Security Practices": "ڕێوشوێنەکانی ئاسایش",
  SLA: "SLA",
  Accessibility: "دەستڕاگەیشتن",
  "Enterprise technology, cybersecurity, cloud, private AI, identity, and managed services.":
    "تەکنەلۆژیای دەزگایی، ئاسایشی سایبەری، هەور، AI ی تایبەت، ناسنامە و خزمەتگوزاری بەڕێوەبراو.",
  "801 Barton Springs Rd, Austin, TX 78704": "801 Barton Springs Rd, Austin, TX 78704",
  "Aligned to:": "گونجاو لەگەڵ:",
  "© 2026 Silxor Group Holding.": "© 2026 Silxor Group Holding.",
  LinkedIn: "LinkedIn",
  "Designed by Ehsan Nidawi": "دیزاینکراوە لەلایەن ئێحسان نیداوی",

  // ----------------------------------------------------------------- hero
  "Cloud & Infrastructure": "هەور و ژێرخان",
  "Hybrid / Multi-cloud": "تێکەڵ / فرە هەور",
  Cybersecurity: "ئاسایشی سایبەری",
  "Zero Trust": "Zero Trust",
  Identity: "ناسنامە",
  "IAM / PAM / IGA": "IAM / PAM / IGA",
  "Private AI": "AI ی تایبەت",
  "Self-hosted models": "مۆدێلی هۆستکراوی ناوخۆیی",
  "Enterprise Technology Partner": "هاوبەشی تەکنەلۆژیای دەزگایی",
  "Enterprise technology, cybersecurity, cloud, private AI, identity, and managed services for organizations that need a single accountable partner.":
    "تەکنەلۆژیای دەزگایی، ئاسایشی سایبەری، هەور، AI ی تایبەت، ناسنامە و خزمەتگوزاری بەڕێوەبراو بۆ ئەو دەزگایانەی پێویستیان بە یەک هاوبەشی بەرپرسیارە.",
  "Book an Assessment": "هەڵسەنگاندنێک بگرە",
  "Explore Solutions": "چاولێکردنی چارەسەرەکان",
  "PRACTICE INDEX": "پێڕستی بوارەکان",

  // ----------------------------------------------------------- industries
  Defense: "بەرگری",
  "Digital Banking": "بانکداری دیجیتاڵ",
  "Financial Services": "خزمەتگوزاری دارایی",
  Energy: "وزە",
  Manufacturing: "پیشەسازی",
  Transportation: "گواستنەوە",
  Airports: "فڕۆکەخانەکان",
  Retail: "بازرگانی وردەفرۆشی",
  Education: "پەروەردە",
  Telecommunications: "پەیوەندییەکان",
  INDUSTRIES: "کەرتەکان",
  "Built for Regulated Industries": "دروستکراوە بۆ کەرتە ڕێکخراوەکان",

  // -------------------------------------------------------------- navbar
  Solutions: "چارەسەرەکان",
  Process: "پرۆسە",
  "Skip to content": "بازدان بۆ ناوەڕۆک",
  "Close menu": "داخستنی لیست",
  "Open menu": "کردنەوەی لیست",
  "Primary navigation": "ڕێنیشاندەری سەرەکی",
  "Request Assessment": "داواکردنی هەڵسەنگاندن",

  // -------------------------------------------------------------- process
  "Technical evaluation and feasibility analysis": "هەڵسەنگاندنی تەکنیکی و شیکاری گونجاوی",
  "Architect & Design": "بنیاتنان و دیزاین",
  "Infrastructure planning and security review": "پلاندانانی ژێرخان و پێداچوونەوەی ئاسایش",
  "Engineer & Build": "ئەندازیاری و دروستکردن",
  "Development and integration with quality assurance": "گەشەپێدان و تێکەڵکردن لەگەڵ دڵنیایی جۆرایەتی",
  "Deploy & Host": "دامەزراندن و هۆستکردن",
  "Production deployment to resilient, monitored infrastructure":
    "دامەزراندنی بەرهەمهێنان لەسەر ژێرخانێکی بەهێز و چاودێریکراو",
  "Manage & Iterate": "بەڕێوەبردن و باشترکردن",
  "Continuous monitoring and improvement": "چاودێری و باشترکردنی بەردەوام",
  PROCESS: "پرۆسە",
  "How We Deliver": "چۆن دەگەیەنین",
  "A five stage delivery model applied to every engagement, from infrastructure to AI, with clear owners and measurable outcomes at each stage.":
    "مۆدێلێکی گەیاندنی پێنج قۆناغی کە بۆ هەر هاوکارییەک جێبەجێ دەکرێت، لە ژێرخانەوە تا AI، لەگەڵ بەرپرسی ڕوون و ئەنجامی پێواندراو لە هەر قۆناغێکدا.",
  STAGE: "قۆناغ",

  // -------------------------------------------------------- solution work
  "ENGAGEMENT MODELS": "مۆدێلەکانی هاوکاری",
  "Example Solution Patterns": "نموونەی شێوازی چارەسەر",
  "Illustrative solution patterns across infrastructure, identity, and AI. These describe how we approach common problems, not specific verified client work.":
    "شێوازی چارەسەری نموونەیی لە ژێرخان و ناسنامە و AI. ئەمانە باسی شێوازی مامەڵەکردنمان لەگەڵ کێشە باوەکان دەکەن، نەک کاری دیاریکراوی پشتڕاستکراوەی کڕیار.",
  "References and detailed case discussions available on request during the assessment.":
    "سەرچاوە و گفتوگۆی وردی نموونەکان لە کاتی هەڵسەنگاندندا بەردەستن.",
  "Cloud Migration & Modernization": "گواستنەوەی هەور و نوێکردنەوە",
  "A phased migration pattern for moving regulated workloads from legacy or public cloud environments into a resilient, access-controlled environment with minimal downtime.":
    "شێوازێکی گواستنەوەی قۆناغبەندی بۆ گواستنەوەی کاری ڕێکخراو لە ژینگەی کۆن یان هەوری گشتییەوە بۆ ژینگەیەکی بەهێز و کۆنترۆڵکراوی دەستڕاگەیشتن بە کەمترین وەستان.",
  "Enterprise Identity Program": "بەرنامەی ناسنامەی دەزگایی",
  "A greenfield IAM pattern covering single sign-on, privileged access vaulting, and identity governance lifecycle for large organizations.":
    "شێوازێکی نوێی IAM کە چوونەژوورەوەی یەکگرتوو و پاراستنی دەستڕاگەیشتنی تایبەت و سووڕی ژیانی حوکمڕانی ناسنامە بۆ دەزگا گەورەکان دەگرێتەوە.",
  "Private AI Operations Platform": "پلاتفۆرمی کارگێڕی AI ی تایبەت",
  "A pattern for deploying self-hosted models to automate internal operations while keeping data inside the client's own environment.":
    "شێوازێک بۆ دامەزراندنی مۆدێلی هۆستکراوی ناوخۆیی بۆ خۆکارکردنی کارە ناوخۆییەکان لەگەڵ هێشتنەوەی داتا لە ناو ژینگەی خودی کڕیاردا.",
  "Public Sector": "کەرتی گشتی",
  "SOFTWARE + AI": "نەرمەکاڵا + AI",
  INFRASTRUCTURE: "ژێرخان",
  IDENTITY: "ناسنامە",

  // ------------------------------------------------------------- services
  "Board level advisory on transformation, architecture, and risk.":
    "ڕاوێژکاری لە ئاستی ئەنجومەن دەربارەی گۆڕانکاری و بنیاتنان و مەترسی.",
  "Sovereign, hybrid, and multi cloud engineering built for resilience.":
    "ئەندازیاری هەوری سەربەخۆ و تێکەڵ و فرەهەور کە بۆ بەهێزی دروستکراوە.",
  "Zero Trust architecture, identity, and audit ready compliance programs.":
    "بنیاتی Zero Trust و ناسنامە و بەرنامەی پابەندبوونی ئامادە بۆ پشکنین.",
  "NOC and SOC operations with SLA tiers scoped to each engagement.":
    "کارگێڕی NOC و SOC لەگەڵ ئاستەکانی SLA کە بۆ هەر هاوکارییەک دیاری دەکرێن.",
  SERVICES: "خزمەتگوزارییەکان",
  "Four Practices. One Accountable Partner.": "چوار بوار. یەک هاوبەشی بەرپرسیار.",
  "Advisory, infrastructure, security, and managed operations delivered by a single engineering team under one SLA.":
    "ڕاوێژکاری و ژێرخان و ئاسایش و کارگێڕی بەڕێوەبراو لەلایەن یەک تیمی ئەندازیاری و لە ژێر یەک SLA دەگەیەنرێن.",
  PRACTICE: "بوار",
  "Section index": "پێڕستی بەشەکان",

  // ---------------------------------------------------------- engagement
  "Infrastructure & Hosting": "ژێرخان و هۆستکردن",
  "Begin with a sovereignty, resilience, and compliance review of your current hosting footprint.":
    "دەست پێ بکە بە پێداچوونەوەیەکی سەربەخۆیی و بەهێزی و پابەندبوونی ژینگەی هۆستی ئێستات.",
  "Software or AI Project": "پڕۆژەی نەرمەکاڵا یان AI",
  "Share your platform or AI requirements and receive a scoped delivery proposal within 5 business days.":
    "پێداویستییەکانی پلاتفۆرم یان AI ی خۆت بنێرە و لە ماوەی ٥ ڕۆژی کاردا پێشنیارێکی گەیاندنی دیاریکراو وەربگرە.",
  "Strategic Advisory": "ڕاوێژکاری ستراتیژی",
  "Book a 60 minute architecture or security session with a senior Silxor engineer.":
    "دانیشتنێکی ٦٠ خولەکی بنیاتنان یان ئاسایش لەگەڵ ئەندازیارێکی پێشکەوتووی Silxor بگرە.",
  ENGAGE: "دەستپێکردن",
  "Start With a Technical Assessment": "بە هەڵسەنگاندنێکی تەکنیکی دەست پێ بکە",
  "Every Silxor engagement starts with a no cost technical assessment. Tell us what you are building and we will scope exactly how to deliver it.":
    "هەر هاوکارییەکی Silxor بە هەڵسەنگاندنێکی تەکنیکی بێ بەرامبەر دەست پێ دەکات. پێمان بڵێ چی دروست دەکەیت و ئێمە بە وردی دیاری دەکەین چۆن بیگەیەنین.",
  "Technology domains we work in": "بوارە تەکنەلۆژییەکانی کارکردنمان",

  // ----------------------------------------------------------------- team
  "Matched to Scope": "گونجاو لەگەڵ چوارچێوە",
  "Engagements are staffed with engineers matched to the specific practice areas involved.":
    "هاوکارییەکان بە ئەندازیارانی گونجاو لەگەڵ ئەو بوارە دیاریکراوانە پڕ دەکرێنەوە.",
  "One Accountable Team": "یەک تیمی بەرپرسیار",
  "A single named team leads delivery end to end, without handoffs between vendors.":
    "یەک تیمی ناودیاریکراو گەیاندن لە سەرەتاوە تا کۆتایی بەڕێوە دەبات، بەبێ گواستنەوە لە نێوان دابینکەراندا.",
  "Scoped During Assessment": "دیاریکراو لە کاتی هەڵسەنگاندندا",
  "Seniority, headcount, and reporting cadence are defined in the proposal following the technical assessment.":
    "ئاستی شارەزایی و ژمارەی تیم و ماوەی ڕاپۆرتکردن لە پێشنیاری دوای هەڵسەنگاندنی تەکنیکیدا دیاری دەکرێن.",
  "HOW WE STAFF ENGAGEMENTS": "چۆن تیمی هاوکارییەکان پێکدەهێنین",
  "Senior Engineers. Direct Accountability.": "ئەندازیاری پێشکەوتوو. بەرپرسیارێتی ڕاستەوخۆ.",
  "Every engagement is led by a founder or senior practice lead, with a small dedicated team scoped to the work.":
    "هەر هاوکارییەک لەلایەن دامەزرێنەر یان سەرپەرشتیاری پێشکەوتووی بوارەکەوە بەڕێوە دەبرێت، لەگەڵ تیمێکی بچووکی تایبەت بۆ کارەکە.",
  FOUNDER: "دامەزرێنەر",
  "Ehsan Nidawi": "ئێحسان نیداوی",

  // ------------------------------------------------------------ why silxor
  Strategy: "ستراتیژ",
  Engineering: "ئەندازیاری",
  Security: "ئاسایش",
  Cloud: "هەور",
  AI: "AI",
  "24×7 Operations": "کارکردنی ٢٤×٧",
  "End to End": "لە سەرەتاوە تا کۆتایی",
  "One Partner": "یەک هاوبەش",
  "WHY SILXOR": "بۆچی Silxor",
  "One Partner. Full Stack. No Handoffs.": "یەک هاوبەش. تەواوی پێکهاتە. بێ گواستنەوە.",
  "Every discipline your program needs, delivered end to end by one accountable team.":
    "هەموو ئەو بوارانەی بەرنامەکەت پێویستی پێیانە، لە سەرەتاوە تا کۆتایی لەلایەن یەک تیمی بەرپرسیارەوە دەگەیەنرێن.",

  // -------------------------------------------------------------- booking
  "Back to Silxor": "گەڕانەوە بۆ Silxor",
  "SILXOR // BOOKING": "SILXOR // بەرواری دانیشتن",
  SCHEDULE: "خشتەی کات",
  "A 30 minute technical discovery with a senior Silxor engineer. No cost. No obligation.":
    "دانیشتنێکی ناسینەوەی تەکنیکی ٣٠ خولەکی لەگەڵ ئەندازیارێکی پێشکەوتووی Silxor. بێ بەرامبەر. بێ پابەندبوون.",
  "CAL // ASSESSMENT": "CAL // هەڵسەنگاندن",
  "Trouble booking? Email hello@silxor.com":
    "کێشەت لە گرتنی بەرواردا هەیە؟ ئیمەیڵ بنێرە بۆ hello@silxor.com",

  // ------------------------------------------------------------- partners
  "Cloud & Hyperscale Platforms": "پلاتفۆرمی هەور و Hyperscale",
  "We design and operate on major public and hybrid cloud platforms, selecting the right provider mix per engagement rather than a single fixed stack.":
    "لەسەر پلاتفۆرمە گشتی و تێکەڵە سەرەکییەکانی هەور دیزاین و کار دەکەین، بۆ هەر هاوکارییەک تێکەڵەی گونجاوی دابینکەر هەڵدەبژێرین نەک یەک پێکهاتەی جێگیر.",
  "Security & Threat Defense": "ئاسایش و بەرگری لە مەترسی",
  "Our security architecture draws on established endpoint, network, and threat-detection tooling categories, integrated to fit each client's environment.":
    "بنیاتی ئاسایشمان پشت بە پۆلە جێگیرەکانی ئامرازی endpoint و تۆڕ و دۆزینەوەی مەترسی دەبەستێت، کە بۆ گونجان لەگەڵ ژینگەی هەر کڕیارێک تێکەڵ دەکرێن.",
  "Identity & Access Management": "بەڕێوەبردنی ناسنامە و دەستڕاگەیشتن",
  "We implement identity, access governance, and privileged access solutions using vetted platforms suited to each organization's scale and regulatory context.":
    "چارەسەری ناسنامە و حوکمڕانی دەستڕاگەیشتن و دەستڕاگەیشتنی تایبەت جێبەجێ دەکەین بە بەکارهێنانی پلاتفۆرمی پشکنیوکراو کە لەگەڵ قەبارە و باری یاسایی هەر دەزگایەک دەگونجێن.",
  "Private & Enterprise AI": "AI ی تایبەت و دەزگایی",
  "Our AI engagements are built on a mix of open and commercial model and infrastructure options, chosen based on data residency and governance requirements.":
    "هاوکارییەکانی AI مان لەسەر تێکەڵەیەک لە مۆدێلی کراوە و بازرگانی و هەڵبژاردەکانی ژێرخان دروست دەکرێن، کە بەپێی شوێنی داتا و پێداویستییەکانی حوکمڕانی هەڵدەبژێردرێن.",
  "Infrastructure & Data Center": "ژێرخان و سەنتەری داتا",
  "We work with infrastructure, virtualization, and storage technologies appropriate to on-premises, hybrid, and cloud-native deployments.":
    "لەگەڵ تەکنەلۆژیای ژێرخان و virtualization و هەڵگرتن کار دەکەین کە گونجاون بۆ دامەزراندنی ناوخۆیی و تێکەڵ و هەوری.",
  "Automation & DevOps Tooling": "خۆکارکردن و ئامرازەکانی DevOps",
  "Delivery pipelines are built with widely adopted infrastructure-as-code, CI/CD, and observability tooling categories.":
    "ڕێڕەوەکانی گەیاندن بە پۆلە باوەکانی infrastructure-as-code و CI/CD و ئامرازەکانی چاودێری دروست دەکرێن.",
  "PARTNERSHIP APPROACH": "شێوازی هاوبەشی",
  "How We Build Our Technology Ecosystem": "چۆن ژینگەی تەکنەلۆژیمان دروست دەکەین",
  "Silxor is platform-agnostic. We select technologies from mature, well-supported categories based on each client's requirements rather than committing to a single fixed vendor stack. Specific vendor relationships for a given engagement are confirmed during scoping.":
    "Silxor پابەندی هیچ پلاتفۆرمێکی دیاریکراو نییە. تەکنەلۆژی لە پۆلە پێگەیشتوو و پشتگیریکراوەکانەوە هەڵدەبژێرین بەپێی پێداویستی هەر کڕیارێک، نەک پابەندبوون بە یەک پێکهاتەی دابینکەری جێگیر. پەیوەندی دابینکەری دیاریکراو بۆ هەر هاوکارییەک لە کاتی دیاریکردنی چوارچێوەدا پشتڕاست دەکرێتەوە.",

  // ------------------------------------------------------------ solutions
  "Financial Compliance": "پابەندبوونی دارایی",
  "AI Platform": "پلاتفۆرمی AI",
  Infrastructure: "ژێرخان",
  SOLUTIONS: "چارەسەرەکان",
  "Secure Digital Platforms for Banking & Government":
    "پلاتفۆرمی دیجیتاڵی پارێزراو بۆ بانکداری و حکومەت",
  "Compliant, AI enabled digital ecosystems engineered for financial institutions and the public sector.":
    "ژینگەی دیجیتاڵی پابەند و بەهێزکراو بە AI کە بۆ دامەزراوە داراییەکان و کەرتی گشتی داڕێژراوە.",

  // ------------------------------------------------------------- side rail
  "CAPABILITY RAIL": "پێڕستی توانا",
  Advise: "ڕاوێژ",
  Architect: "بنیاتنان",
  Engineer: "ئەندازیاری",
  Secure: "پاراستن",
  Operate: "بەڕێوەبردن",
  Optimize: "باشترکردن",

  // -------------------------------------------- form options & validation
  "This field is required.": "ئەم خانەیە داواکراوە.",
  "Enter a valid work email.": "ئیمەیڵێکی کاری دروست بنووسە.",
  "Cloud & Infrastructure ": "هەور و ژێرخان",
  "Identity & Access": "ناسنامە و دەستڕاگەیشتن",
  Advisory: "ڕاوێژکاری",
  "Immediate (0–1 month)": "دەستبەجێ (٠ تا ١ مانگ)",
  "Short term (1–3 months)": "ماوەی کورت (١ تا ٣ مانگ)",
  "Mid term (3–6 months)": "ماوەی مامناوەند (٣ تا ٦ مانگ)",
  "Long term (6+ months)": "ماوەی درێژ (٦+ مانگ)",
  "Just exploring": "تەنها لێکۆڵینەوە",

  // ------------------------------------------------------- language names
  English: "ئینگلیزی",
  Arabic: "عەرەبی",
  Kurdish: "کوردی",
  Language: "زمان",
};

export default ku;
