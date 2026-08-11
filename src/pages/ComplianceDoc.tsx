import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const blocks = [
  {
    title: "ISO/IEC 27001 & NIST CSF Alignment",
    titleAr: "التوافق مع ISO/IEC 27001 وإطار NIST CSF",
    titleKu: "هاوسانی لەگەڵ ISO/IEC 27001 و چوارچێوەی NIST CSF",
    status: "FRAMEWORK ALIGNED",
    statusAr: "متوافق مع الإطار",
    statusKu: "هاوسان لەگەڵ چوارچێوە",
    statusColor: "#F0F1F3",
    body: "Our security practices are designed in alignment with ISO/IEC 27001 and NIST Cybersecurity Framework control families covering information security management, risk treatment, and incident response. This describes our design approach, not an achieved third-party certification. Clients requiring a specific certification should confirm current status and scope directly with us.",
    bodyAr: "تم تصميم ممارساتنا الأمنية بما يتوافق مع عائلات الضوابط في ISO/IEC 27001 وإطار NIST للأمن السيبراني، والتي تغطي إدارة أمن المعلومات، ومعالجة المخاطر، والاستجابة للحوادث. هذا وصف لنهج التصميم لدينا وليس شهادة معتمدة من جهة خارجية. يجب على العملاء الذين يحتاجون إلى شهادة محددة تأكيد الحالة والنطاق الحاليين معنا مباشرة.",
    bodyKu: "پراکتیزەکانی ئاسایشمان بەگوێرەی خێزانی کۆنترۆڵەکانی ISO/IEC 27001 و چوارچێوەی ئاسایشی سایبەری NIST داڕێژراون کە بەڕێوەبردنی ئاسایشی زانیاری، چارەسەرکردنی مەترسی، و وەڵامدانەوە بۆ ڕووداوەکان دەگرێتەوە. ئەمە باسی شێوازی داڕشتنمانە، نەک بڕوانامەیەکی وەرگیراوی لایەنی سێیەم. ئەو کڕیارانەی پێویستیان بە بڕوانامەیەکی دیاریکراو هەیە دەبێت ڕاستەوخۆ لەگەڵمان دۆخ و ڕووبەری ئێستا بسەلمێنن.",
  },
  {
    title: "SOC 2 Control Objectives",
    titleAr: "أهداف ضوابط SOC 2",
    titleKu: "ئامانجەکانی کۆنترۆڵی SOC 2",
    status: "CONTROL MAPPING",
    statusAr: "تخطيط الضوابط",
    statusKu: "نەخشەکێشانی کۆنترۆڵ",
    statusColor: "#F0F1F3",
    body: "Where engagements require SOC 2-aligned practices, we map delivery controls to the Security, Availability, and Confidentiality trust service criteria. We do not currently hold a SOC 2 attestation report; timelines for pursuing one are discussed per client requirement.",
    bodyAr: "عندما تتطلب المشاريع ممارسات متوافقة مع SOC 2، نقوم بتخطيط ضوابط التسليم وفق معايير خدمة الثقة الخاصة بالأمن والتوفر والسرية. لا نمتلك حاليًا تقرير اعتماد SOC 2؛ ويتم مناقشة الجداول الزمنية للحصول عليه بحسب متطلبات كل عميل.",
    bodyKu: "کاتێک پرۆژەکان پێویستیان بە پراکتیزی هاوسان لەگەڵ SOC 2 هەیە، کۆنترۆڵەکانی گەیاندن بەگوێرەی پێوەرەکانی خزمەتگوزاری متمانە بۆ ئاسایش، بەردەستبوون، و نهێنیداری نەخشە دەکەین. ئێستا ڕاپۆرتی پشتڕاستکردنەوەی SOC 2 مان نییە؛ کاتبەندی بۆ بەدەستهێنانی یەکێک بەگوێرەی داواکاری هەر کڕیارێک باس دەکرێت.",
  },
  {
    title: "Infrastructure Resilience",
    titleAr: "مرونة البنية التحتية",
    titleKu: "بەرگریی بنیاتی تەکنەلۆژی",
    status: "TARGET DESIGN",
    statusAr: "تصميم مستهدف",
    statusKu: "داڕشتنی ئامانجگیراو",
    statusColor: "#F0F1F3",
    body: "Production workloads are architected for redundancy and resilience appropriate to each client's contracted tier. Specific facilities, redundancy ratings, and uptime targets are defined per engagement and documented in the relevant statement of work — not asserted generally on this page.",
    bodyAr: "يتم تصميم أعباء العمل الإنتاجية لتحقيق التكرار والمرونة المناسبين لمستوى العقد الخاص بكل عميل. يتم تحديد المرافق المحددة، ودرجات التكرار، وأهداف التوفر لكل مشروع على حدة وتوثيقها في بيان العمل ذي الصلة — ولا يتم تعميمها في هذه الصفحة.",
    bodyKu: "بارە کارییە بەرهەمهێنانەکان بۆ دووبارەبوونەوە و بەرگری گونجاو لەگەڵ ئاستی گرێبەستی هەر کڕیارێک داڕێژراون. تایبەتمەندی، ڕێژەی دووبارەبوونەوە، و ئامانجەکانی کارپێکردن بۆ هەر پرۆژەیەک دیاری دەکرێن و لە بەیاننامەی کارەکەدا تۆمار دەکرێن — بە گشتی لەم لاپەڕەیەدا باس ناکرێت.",
  },
  {
    title: "GDPR-Aligned Data Handling",
    titleAr: "التعامل مع البيانات المتوافق مع GDPR",
    titleKu: "کارکردن لەگەڵ داتا بەگوێرەی GDPR",
    status: "IN PROGRESS",
    statusAr: "قيد التنفيذ",
    statusKu: "لە پێشکەوتندا",
    statusColor: "#F0F1F3",
    body: "Silxor data handling practices are being aligned with GDPR principles, including data minimization, consent management, and data subject rights fulfillment, for engagements involving EU resident data. Formal compliance status should be verified as part of contracting for regulated engagements.",
    bodyAr: "يتم مواءمة ممارسات Silxor في التعامل مع البيانات مع مبادئ GDPR، بما في ذلك تقليل البيانات، وإدارة الموافقات، وتلبية حقوق أصحاب البيانات، للمشاريع التي تتضمن بيانات مقيمين في الاتحاد الأوروبي. يجب التحقق من حالة الامتثال الرسمية كجزء من التعاقد للمشاريع الخاضعة للتنظيم.",
    bodyKu: "پراکتیزەکانی Silxor بۆ کارکردن لەگەڵ داتا بەگوێرەی بنەماکانی GDPR ڕێکدەخرێن، لەوانە کەمکردنەوەی داتا، بەڕێوەبردنی ڕەزامەندی، و جێبەجێکردنی مافەکانی خاوەنی داتا، بۆ پرۆژەکانی پەیوەندیدار بە داتای دانیشتووانی یەکێتی ئەوروپا. دۆخی یاسایی گونجانەکە دەبێت وەک بەشێک لە گرێبەستکردن بۆ پرۆژە یاساییەکراوەکان پشتڕاست بکرێتەوە.",
  },
];

const ComplianceDoc = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="section-spacing" style={{ paddingTop: 120 }}>
        <div className="container-content" style={{ maxWidth: 800, margin: "0 auto" }}>
          <div className="section-eyebrow" style={{ fontFamily: localeFont }}>
            {"COMPLIANCE APPROACH"}
          </div>
          <h1
            className="font-display font-[700]"
            style={{ fontSize: 42, lineHeight: 1.15, color: "#FFFFFF", marginBottom: 8 }}
          >
            {"Compliance & Control Alignment Framework"}
          </h1>
          <p
            className="font-body font-[300]"
            style={{ fontSize: 16, color: "#B8BCC2", lineHeight: 1.7, marginBottom: 48, textAlign: "start" }}
          >
            {"This page describes how we design and align our controls with recognized industry frameworks. It is not a certification, audit report, or attestation. Any specific compliance claim relevant to a project is confirmed in writing during scoping and contracting."}
          </p>

          <div className="space-y-6">
            {blocks.map((block, i) => (
              <Card
                key={i}
                className="surface-elevated rounded-[4px] border-0 bg-transparent text-inherit shadow-none"
                style={{ padding: 32 }}
              >
                <div className="flex items-center gap-3" style={{ marginBottom: 12 }}>
                  <h2 className="font-body font-[500]" style={{ fontSize: 17, color: "#FFFFFF" }}>
                    {block.title}
                  </h2>
                  <Badge
                    className="badge-pill rounded-[2px] border-0 bg-transparent p-0 font-normal hover:bg-transparent font-mono font-[400] uppercase"
                    style={{
                      fontSize: 9,
                      letterSpacing: "0.15em",
                      color: block.statusColor,
                      border: `1px solid ${block.statusColor}40`,
                      padding: "3px 10px",
                      borderRadius: 2,
                    }}
                  >
                    {block.status}
                  </Badge>
                </div>
                <p
                  className="font-body font-[300]"
                  style={{ fontSize: 15, color: "#B8BCC2", lineHeight: 1.8, textAlign: "start" }}
                >
                  {block.body}
                </p>
              </Card>
            ))}
          </div>

          <p
            className="font-body font-[300] text-center"
            style={{ fontSize: 13, color: "#B8BCC2", fontStyle: "italic", marginTop: 48 }}
          >
            {"For questions about our current compliance posture or documentation needs for a specific engagement, contact: "}
            <bdi>hello@silxor.com</bdi>
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ComplianceDoc;
