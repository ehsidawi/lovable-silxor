import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/PageHero";

const rows = [
  {
    metric: "Illustrative coverage window",
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

const SLADoc = () => (
  <PageShell
    title="Service Level Agreement | Silxor"
    description="Silxor service level framework: availability targets, priority response tiers, and coverage defined per contract."
    path="/sla"
  >
    <PageHero
      eyebrow="Service level framework"
      title="Commitments belong in the agreement."
      lead="Illustrative support tiers, not an executed agreement. Response times and recovery objectives are negotiated and confirmed in the master service agreement."
      crumbs={[
        { label: "Home", to: "/" },
        { label: "Service level framework" },
      ]}
    />
    <section className="ed-section">
      <div className="container-content">
        <div className="hidden md:block">
          <table className="ed-table">
            <caption className="sr-only">
              Illustrative service level comparison
            </caption>
            <thead>
              <tr>
                <th scope="col">Metric</th>
                <th scope="col">Starter tier</th>
                <th scope="col">Business tier</th>
                <th scope="col">Enterprise tier</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.metric}>
                  <th scope="row">{r.metric}</th>
                  <td>{r.starter}</td>
                  <td>{r.business}</td>
                  <td>{r.enterprise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <dl className="md:hidden ed-sla-mobile">
          {rows.map((r) => (
            <div className="border-t border-border py-5" key={r.metric}>
              <dt className="font-semibold">{r.metric}</dt>
              <dd className="mt-3 grid gap-3 text-sm">
                {(["starter", "business", "enterprise"] as const).map((t) => (
                  <div key={t} className="grid grid-cols-2 gap-4">
                    <span className="capitalize">{t} tier</span>
                    <span className="text-muted-foreground">{r[t]}</span>
                  </div>
                ))}
              </dd>
            </div>
          ))}
        </dl>
        <p className="ed-note">
          All figures above are illustrative starting points and are subject to
          change based on scope, infrastructure, and regulatory requirements.
          Final service levels, credit terms, and measurement methodology are
          set out in the signed agreement. Questions: hello@silxor.com
        </p>
      </div>
    </section>
  </PageShell>
);
export default SLADoc;
