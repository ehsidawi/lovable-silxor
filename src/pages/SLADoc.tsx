import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const rows = [
  {
    metric: "Availability target",
    metricAr: "هدف التوفر",
    metricKu: "ئامانجی بەردەستبوون",
    starter: "Standard business hours",
    starterAr: "ساعات العمل القياسية",
    starterKu: "کاتژمێرەکانی کاری ستاندارد",
    business: "Extended coverage",
    businessAr: "تغطية موسعة",
    businessKu: "پۆشش فراوانکراو",
    enterprise: "24/7 coverage",
    enterpriseAr: "تغطية على مدار الساعة طوال أيام الأسبوع",
    enterpriseKu: "پۆششی 24/7",
  },
  {
    metric: "P1 response target",
    metricAr: "هدف الاستجابة P1",
    metricKu: "ئامانجی وەڵامدانەوەی P1",
    starter: "Defined per contract",
    starterAr: "يُحدد بحسب العقد",
    starterKu: "بەگوێرەی گرێبەست دیاری دەکرێت",
    business: "Defined per contract",
    businessAr: "يُحدد بحسب العقد",
    businessKu: "بەگوێرەی گرێبەست دیاری دەکرێت",
    enterprise: "Defined per contract",
    enterpriseAr: "يُحدد بحسب العقد",
    enterpriseKu: "بەگوێرەی گرێبەست دیاری دەکرێت",
  },
  {
    metric: "P2 response target",
    metricAr: "هدف الاستجابة P2",
    metricKu: "ئامانجی وەڵامدانەوەی P2",
    starter: "Defined per contract",
    starterAr: "يُحدد بحسب العقد",
    starterKu: "بەگوێرەی گرێبەست دیاری دەکرێت",
    business: "Defined per contract",
    businessAr: "يُحدد بحسب العقد",
    businessKu: "بەگوێرەی گرێبەست دیاری دەکرێت",
    enterprise: "Defined per contract",
    enterpriseAr: "يُحدد بحسب العقد",
    enterpriseKu: "بەگوێرەی گرێبەست دیاری دەکرێت",
  },
  {
    metric: "P3 response target",
    metricAr: "هدف الاستجابة P3",
    metricKu: "ئامانجی وەڵامدانەوەی P3",
    starter: "Defined per contract",
    starterAr: "يُحدد بحسب العقد",
    starterKu: "بەگوێرەی گرێبەست دیاری دەکرێت",
    business: "Defined per contract",
    businessAr: "يُحدد بحسب العقد",
    businessKu: "بەگوێرەی گرێبەست دیاری دەکرێت",
    enterprise: "Defined per contract",
    enterpriseAr: "يُحدد بحسب العقد",
    enterpriseKu: "بەگوێرەی گرێبەست دیاری دەکرێت",
  },
  {
    metric: "Backup frequency",
    metricAr: "تكرار النسخ الاحتياطي",
    metricKu: "دووبارەبوونەوەی پاڵپشتیکردن",
    starter: "Weekly",
    starterAr: "أسبوعيًا",
    starterKu: "هەفتانە",
    business: "Daily",
    businessAr: "يوميًا",
    businessKu: "ڕۆژانە",
    enterprise: "Continuous, where supported",
    enterpriseAr: "مستمر، حيثما كان مدعومًا",
    enterpriseKu: "بەردەوام، لە شوێنی پشتگیریکراودا",
  },
  {
    metric: "Recovery time objective (RTO)",
    metricAr: "هدف وقت الاسترداد (RTO)",
    metricKu: "ئامانجی کاتی گەڕاندنەوە (RTO)",
    starter: "Defined per contract",
    starterAr: "يُحدد بحسب العقد",
    starterKu: "بەگوێرەی گرێبەست دیاری دەکرێت",
    business: "Defined per contract",
    businessAr: "يُحدد بحسب العقد",
    businessKu: "بەگوێرەی گرێبەست دیاری دەکرێت",
    enterprise: "Defined per contract",
    enterpriseAr: "يُحدد بحسب العقد",
    enterpriseKu: "بەگوێرەی گرێبەست دیاری دەکرێت",
  },
  {
    metric: "Recovery point objective (RPO)",
    metricAr: "هدف نقطة الاسترداد (RPO)",
    metricKu: "ئامانجی خاڵی گەڕاندنەوە (RPO)",
    starter: "Defined per contract",
    starterAr: "يُحدد بحسب العقد",
    starterKu: "بەگوێرەی گرێبەست دیاری دەکرێت",
    business: "Defined per contract",
    businessAr: "يُحدد بحسب العقد",
    businessKu: "بەگوێرەی گرێبەست دیاری دەکرێت",
    enterprise: "Defined per contract",
    enterpriseAr: "يُحدد بحسب العقد",
    enterpriseKu: "بەگوێرەی گرێبەست دیاری دەکرێت",
  },
  {
    metric: "Support coverage",
    metricAr: "تغطية الدعم",
    metricKu: "پۆششی پشتگیری",
    starter: "Business hours",
    starterAr: "ساعات العمل",
    starterKu: "کاتژمێرەکانی کار",
    business: "Extended hours",
    businessAr: "ساعات موسعة",
    businessKu: "کاتژمێری فراوانکراو",
    enterprise: "24/7",
    enterpriseAr: "على مدار الساعة طوال أيام الأسبوع",
    enterpriseKu: "24/7",
  },
  {
    metric: "Support channels",
    metricAr: "قنوات الدعم",
    metricKu: "کەناڵەکانی پشتگیری",
    starter: "Email",
    starterAr: "البريد الإلكتروني",
    starterKu: "ئیمەیل",
    business: "Email + phone",
    businessAr: "البريد الإلكتروني + الهاتف",
    businessKu: "ئیمەیل + تەلەفۆن",
    enterprise: "Email + phone + dedicated channel",
    enterpriseAr: "البريد الإلكتروني + الهاتف + قناة مخصصة",
    enterpriseKu: "ئیمەیل + تەلەفۆن + کەناڵی تایبەت",
  },
];

const SLADoc = () => {
  const headers = [
    { en: "Metric", ar: "المقياس", ku: "پێوانە" },
    { en: "Starter tier", ar: "المستوى الأساسي", ku: "ئاستی سەرەتایی" },
    { en: "Business tier", ar: "مستوى الأعمال", ku: "ئاستی بازرگانی" },
    { en: "Enterprise tier", ar: "مستوى المؤسسات", ku: "ئاستی گەورە" },
  ];
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="section-spacing" style={{ paddingTop: 120 }}>
        <div className="container-content" style={{ maxWidth: 900, margin: "0 auto" }}>
          <div className="section-eyebrow" style={{ fontFamily: localeFont }}>
            {"SERVICE LEVEL FRAMEWORK"}
          </div>
          <h1
            className="font-display font-[700]"
            style={{ fontSize: 42, lineHeight: 1.15, color: "#FFFFFF", marginBottom: 8 }}
          >
            {"Service Level Commitment Framework"}
          </h1>
          <p
            className="font-body font-[300]"
            style={{ fontSize: 16, color: "#B8BCC2", lineHeight: 1.7, marginBottom: 24, textAlign: "start" }}
          >
            {"This page describes the structure of service level commitments we offer across support tiers. It is a template, not a record of an executed agreement. Exact figures, response times, and recovery objectives are negotiated and confirmed in the master service agreement for each engagement."}
          </p>

          <Card
            className="rounded-[4px] border-0 shadow-none text-inherit"
            style={{ backgroundColor: "#25282C", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 4, overflow: "hidden" }}
          >
            <Table style={{ width: "100%", borderCollapse: "collapse" }}>
              <TableHeader>
                <TableRow style={{ backgroundColor: "#25282C" }} className="border-0 hover:bg-transparent">
                  {headers.map((h) => (
                    <TableHead
                      key={h.en}
                      className="font-mono font-[400] uppercase h-auto align-top"
                      style={{
                        fontSize: 11,
                        letterSpacing: "0.1em",
                        color: "#F0F1F3",
                        padding: "14px 20px",
                        borderBottom: "1px solid rgba(255,255,255,0.06)",
                        textAlign: "start",
                      }}
                    >
                      {h.en}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {rows.map((row, i) => (
                  <TableRow
                    key={i}
                    className="border-0 hover:bg-transparent"
                    style={{ transition: "background 200ms" }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.02)")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                  >
                    <TableCell
                      className="font-body font-[400] align-top"
                      style={{ fontSize: 14, color: "#FFFFFF", padding: "12px 20px", borderBottom: "1px solid rgba(255,255,255,0.06)", textAlign: "start" }}
                    >
                      {row.metric}
                    </TableCell>
                    <TableCell
                      className="font-body font-[300] align-top"
                      style={{ fontSize: 14, color: "#B8BCC2", padding: "12px 20px", borderBottom: "1px solid rgba(255,255,255,0.06)", textAlign: "start" }}
                    >
                      {row.starter}
                    </TableCell>
                    <TableCell
                      className="font-body font-[300] align-top"
                      style={{ fontSize: 14, color: "#B8BCC2", padding: "12px 20px", borderBottom: "1px solid rgba(255,255,255,0.06)", textAlign: "start" }}
                    >
                      {row.business}
                    </TableCell>
                    <TableCell
                      className="font-body font-[300] align-top"
                      style={{ fontSize: 14, color: "#B8BCC2", padding: "12px 20px", borderBottom: "1px solid rgba(255,255,255,0.06)", textAlign: "start" }}
                    >
                      {row.enterprise}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>

          <p
            className="font-body font-[300] text-center"
            style={{ fontSize: 13, color: "#B8BCC2", fontStyle: "italic", marginTop: 48 }}
          >
            {"All figures above are illustrative starting points and are subject to change based on scope, infrastructure, and regulatory requirements. Final service levels, credit terms, and measurement methodology are set out in the signed agreement. Questions: "}
            <bdi>hello@silxor.com</bdi>
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SLADoc;
