import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/context/LanguageContext";

const FAQ = () => {
  const { t } = useLanguage();

  const faqs = [
    {
      q: t("Where does our data live?", "أين توجد بياناتنا؟"),
      a: t("Hosting location and jurisdiction are agreed with each client during the technical assessment. We support US-jurisdiction hosting, private and air-gapped deployments for sensitive workloads.", "يُتفق على موقع الاستضافة والولاية القضائية مع كل عميل خلال التقييم التقني. ندعم الاستضافة ضمن الولاية القضائية الأمريكية والنشر الخاص والمعزول للأحمال الحساسة."),
    },
    {
      q: t("Can Silxor handle both infrastructure and software in one contract?", "هل يمكن لـ Silxor التعامل مع البنية التحتية والبرمجيات في عقد واحد؟"),
      a: t("Yes. Silxor operates as a single technology partner across infrastructure, software, AI, and cybersecurity: one contract, one SLA, one accountable team. Multi domain scope is defined during the technical assessment.", "نعم. تعمل Silxor كشريك تقني واحد عبر البنية التحتية والبرمجيات والذكاء الاصطناعي والأمن السيبراني: عقد واحد، واتفاقية مستوى خدمة واحدة، وفريق واحد مسؤول. يُحدَّد نطاق التعاون متعدد المجالات خلال التقييم التقني."),
    },
    {
      q: t("How does Silxor's AI differ from public AI providers?", "كيف يختلف الذكاء الاصطناعي في Silxor عن المزودين العموميين؟"),
      a: t("Silxor can host models on private, client-dedicated infrastructure so data is not sent to third-party model providers. Fully air-gapped deployments are available for sensitive workloads.", "يمكن استضافة النماذج على بنية تحتية خاصة مخصصة للعميل بحيث لا تُرسل البيانات إلى مزودي نماذج طرف ثالث. النشر المعزول بالكامل متاح للأحمال الحساسة."),
    },
    {
      q: t("What does incident response look like?", "كيف تبدو استجابة الحوادث؟"),
      a: t("Severity levels, escalation paths, and response-time targets are defined per contract and documented in the SLA agreed with each client.", "تُحدَّد مستويات الخطورة ومسارات التصعيد وأهداف زمن الاستجابة لكل عقد وتُوثَّق في اتفاقية مستوى الخدمة المتفق عليها مع كل عميل."),
    },
    {
      q: t("Is Silxor aligned with US financial regulatory requirements?", "هل تتوافق Silxor مع المتطلبات التنظيمية المالية الأمريكية؟"),
      a: t("Silxor's compliance architecture is designed to support programs operating under frameworks including FFIEC, GLBA, SOX, PCI DSS, and the NIST 800 series. We work directly with client compliance and audit teams to document and evidence controls throughout the engagement.", "تم تصميم بنية الامتثال في Silxor لدعم البرامج العاملة ضمن أطر مثل FFIEC وGLBA وSOX وPCI DSS وسلسلة NIST 800. نعمل مباشرةً مع فرق الامتثال والتدقيق لدى العميل لتوثيق الضوابط وإثباتها طوال التعاون."),
    },
    {
      q: t("How do we start an engagement?", "كيف نبدأ التعاون؟"),
      a: t("Every engagement begins with a no cost Technical Assessment: a discovery session to understand environment, objectives, and constraints. A scoped proposal follows.", "يبدأ كل تعاون بتقييم تقني مجاني: جلسة اكتشاف لفهم البيئة والأهداف والقيود. يعقب ذلك اقتراح محدد النطاق."),
    },
    {
      q: t("Does Silxor deliver in Arabic?", "هل تُقدّم Silxor خدماتها بالعربية؟"),
      a: t("Yes. Silxor operates bilingually across engagements. Documentation, assessments, architecture reports, and operational communications can be delivered in Arabic or English on request.", "نعم. تعمل Silxor بلغتين عبر التعاونات. يمكن تسليم الوثائق والتقييمات وتقارير البنية والاتصالات التشغيلية بالعربية أو الإنجليزية عند الطلب."),
    },
    {
      q: t("Can Silxor deploy in air-gapped environments?", "هل يمكن لـ Silxor النشر في بيئات معزولة؟"),
      a: t("Yes. Silxor supports air-gapped deployments for high-assurance workloads, covering private AI, identity infrastructure, and custom platforms with no external network dependency. Architecture is defined during the technical assessment.", "نعم. تدعم Silxor النشر المعزول للأحمال عالية الضمان، بما يشمل الذكاء الاصطناعي الخاص وبنية الهوية والمنصات المخصصة دون اعتماد على شبكة خارجية. تُحدَّد هذه البنية خلال التقييم التقني."),
    },
    {
      q: t("What sets Silxor apart from large international providers?", "ما الذي يميّز Silxor عن كبار المزودين الدوليين؟"),
      a: t("Silxor is US operated and directly accountable. Engineering, operations, and delivery teams sit under one command structure, with senior engineers involved in each engagement and transparent, contractually defined SLAs.", "Silxor تُدار في الولايات المتحدة ومسؤولة مباشرةً. تعمل فرق الهندسة والعمليات والتسليم تحت هيكل قيادي موحّد، مع مهندسين أقدم في كل تعاون واتفاقيات مستوى خدمة شفافة ومحددة تعاقدياً."),
    },
  ];

  return (
    <section className="section-spacing" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="container-content">
        <div style={{ marginBottom: 12 }}>
          <div className="section-eyebrow">{t("FAQ", "الأسئلة الشائعة")}</div>
          <h2 className="font-display font-[700]" style={{ fontSize: 32, lineHeight: 1.15, color: "#FFFFFF" }}>
            {t("Answers Before You Sign", "إجابات قبل التوقيع")}
          </h2>
        </div>

        <div className="max-w-3xl">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "16px 0" }}
                className="border-none"
              >
                <AccordionTrigger
                  className="hover:no-underline text-left py-0 font-body font-[500] [&[data-state=open]]:text-sovereign-gold"
                  style={{ fontSize: 14, color: "#FFFFFF" }}
                >
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent
                  className="font-body font-[300] pb-0"
                  style={{ fontSize: 13, color: "#B8BCC2", lineHeight: 1.75, paddingTop: 12 }}
                >
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
