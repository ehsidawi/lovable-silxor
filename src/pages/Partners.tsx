import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import {
  Cloud, ShieldCheck, Fingerprint, Cpu, Server, Network,
} from "lucide-react";

const Partners = () => {
  const { t, language, localeFont } = useLanguage();

  useEffect(() => {
    document.title = "Partnership Approach | Silxor";
  }, []);

  const categories = [
    {
      icon: Cloud,
      title: t("Cloud & Hyperscale Platforms", "منصات السحابة الكبرى"),
      body: t(
        "We design and operate on major public and hybrid cloud platforms, selecting the right provider mix per engagement rather than a single fixed stack.",
        "نصمم وندير حلولنا على منصات السحابة العامة والهجينة الرئيسية، ونختار مزيج المزودين المناسب لكل مشروع بدلاً من الاعتماد على مجموعة تقنية ثابتة."
      ),
    },
    {
      icon: ShieldCheck,
      title: t("Security & Threat Defense", "الأمن والدفاع ضد التهديدات"),
      body: t(
        "Our security architecture draws on established endpoint, network, and threat-detection tooling categories, integrated to fit each client's environment.",
        "تعتمد بنيتنا الأمنية على فئات أدوات ناضجة لحماية نقاط النهاية والشبكات والكشف عن التهديدات، ويتم دمجها بما يتناسب مع بيئة كل عميل."
      ),
    },
    {
      icon: Fingerprint,
      title: t("Identity & Access Management", "إدارة الهوية والوصول"),
      body: t(
        "We implement identity, access governance, and privileged access solutions using vetted platforms suited to each organization's scale and regulatory context.",
        "نقوم بتنفيذ حلول الهوية وحوكمة الوصول والوصول المميز باستخدام منصات موثوقة تناسب حجم كل مؤسسة وسياقها التنظيمي."
      ),
    },
    {
      icon: Cpu,
      title: t("Private & Enterprise AI", "الذكاء الاصطناعي الخاص والمؤسسي"),
      body: t(
        "Our AI engagements are built on a mix of open and commercial model and infrastructure options, chosen based on data residency and governance requirements.",
        "تُبنى مشاريعنا في الذكاء الاصطناعي على مزيج من الخيارات المفتوحة والتجارية للنماذج والبنية التحتية، يتم اختيارها بناءً على متطلبات إقامة البيانات والحوكمة."
      ),
    },
    {
      icon: Server,
      title: t("Infrastructure & Data Center", "البنية التحتية ومراكز البيانات"),
      body: t(
        "We work with infrastructure, virtualization, and storage technologies appropriate to on-premises, hybrid, and cloud-native deployments.",
        "نعمل مع تقنيات البنية التحتية والمحاكاة الافتراضية والتخزين المناسبة للنشر المحلي والهجين والسحابي الأصلي."
      ),
    },
    {
      icon: Network,
      title: t("Automation & DevOps Tooling", "الأتمتة وأدوات DevOps"),
      body: t(
        "Delivery pipelines are built with widely adopted infrastructure-as-code, CI/CD, and observability tooling categories.",
        "يتم بناء مسارات التسليم باستخدام فئات أدوات شائعة للبنية التحتية ككود، والتكامل والنشر المستمر، والمراقبة."
      ),
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container-content" style={{ paddingTop: 48, paddingBottom: 64 }}>
        <div style={{ marginBottom: 24 }}>
          <div className="section-eyebrow">{t("PARTNERSHIP APPROACH", "نهج الشراكة")}</div>
          <h1
            className="font-display font-[700]"
            style={{ fontSize: 40, color: "#FFFFFF", lineHeight: 1.1, fontFamily: localeFont }}
          >
            {t("How We Build Our Technology Ecosystem", "كيف نبني منظومتنا التقنية")}
          </h1>
          <p
            className="font-body font-[300] mt-3"
            style={{ fontSize: 15, color: "#B8BCC2", maxWidth: 640, lineHeight: 1.7, fontFamily: localeFont }}
          >
            {t(
              "Silxor is platform-agnostic. We select technologies from mature, well-supported categories based on each client's requirements rather than committing to a single fixed vendor stack. Specific vendor relationships for a given engagement are confirmed during scoping.",
              "تعتمد Silxor نهجاً محايداً تجاه المنصات. نختار التقنيات من فئات ناضجة وموثوقة بناءً على متطلبات كل عميل بدلاً من الالتزام بمجموعة تقنية ثابتة من مزود واحد. يتم تأكيد علاقات الموردين المحددة لكل مشروع أثناء مرحلة تحديد النطاق."
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px]">
          {categories.map((c) => {
            const Icon = c.icon;
            return (
              <Card
                key={c.title}
                className="surface-elevated rounded-[4px] border-0 bg-transparent text-inherit shadow-none"
                style={{ padding: 24 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 4,
                      border: "1px solid rgba(240, 241, 243,0.25)",
                      background: "rgba(240, 241, 243,0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon style={{ width: 16, height: 16, color: "#F0F1F3" }} strokeWidth={1.5} />
                  </div>
                  <h2 className="font-display font-[600]" style={{ fontSize: 15, color: "#FFFFFF", fontFamily: localeFont }}>
                    {c.title}
                  </h2>
                </div>
                <p
                  className="font-body font-[300]"
                  style={{ fontSize: 13, color: "#B8BCC2", lineHeight: 1.7, fontFamily: localeFont }}
                >
                  {c.body}
                </p>
              </Card>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Partners;
