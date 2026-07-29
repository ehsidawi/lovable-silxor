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
      q: t("Where does our data actually live?", "أين توجد بياناتنا فعلياً؟"),
      a: t("Data is hosted in a Tier IV certified facility in Ashburn, Virginia, under US operational control. Control planes remain in US jurisdiction and no data is routed through third party clouds without explicit written authorization. Air gapped deployments are available for classified workloads.", "تُستضاف البيانات في منشأة معتمدة من المستوى الرابع في أشبرن، فيرجينيا، تحت سيطرة تشغيلية أمريكية. تبقى مستويات التحكم ضمن الولاية القضائية الأمريكية. لا تُوجَّه أي بيانات عبر سُحُب طرف ثالث دون إذن كتابي صريح. النشر المعزول متاح لأحمال العمل السرية."),
    },
    {
      q: t("Can Silxor handle both infrastructure and software in one contract?", "هل يمكن لـ Silxor التعامل مع البنية التحتية والبرمجيات في عقد واحد؟"),
      a: t("Yes. Silxor operates as a single technology partner across infrastructure, software, AI, and cybersecurity: one contract, one SLA, one accountable team. Multi domain scope is defined during the technical assessment.", "نعم. تعمل Silxor كشريك تقني واحد عبر البنية التحتية والبرمجيات والذكاء الاصطناعي والأمن السيبراني: عقد واحد، واتفاقية مستوى خدمة واحدة، وفريق واحد مسؤول. يُحدَّد نطاق التعاون متعدد المجالات خلال التقييم التقني."),
    },
    {
      q: t("How does Silxor's AI differ from OpenAI or other public providers?", "كيف يختلف الذكاء الاصطناعي في Silxor عن OpenAI أو المزودين العموميين؟"),
      a: t("Silxor AI runs on private, client dedicated infrastructure. No data is sent to OpenAI, Google, or other third party model providers. Models are hosted and operated inside our Tier IV environment, and fully air gapped deployments are available for sensitive workloads.", "يعمل الذكاء الاصطناعي لدى Silxor على بنية تحتية خاصة مخصصة للعميل. لا تُرسل أي بيانات إلى OpenAI أو Google أو أي مزوّد نماذج طرف ثالث. تُستضاف النماذج وتُدار داخل بيئتنا من المستوى الرابع، والنشر المعزول بالكامل متاح للأحمال الحساسة."),
    },
    {
      q: t("What does P1 incident response look like?", "كيف تبدو استجابة حوادث P1؟"),
      a: t("P1 incidents trigger immediate paging to the 24×7 NOC with parallel escalation to Tier 3 engineering. Enterprise clients receive acknowledgment within 15 minutes and an engineer actively engaged within 30 minutes. Timelines are logged and reported monthly.", "تُفعّل حوادث P1 تنبيهاً فورياً لمركز العمليات على مدار الساعة مع تصعيد متوازٍ للهندسة من المستوى الثالث. يتلقى العملاء المؤسسيون إقراراً خلال 15 دقيقة ومهندساً منخرطاً فعلياً خلال 30 دقيقة. تُسجَّل الأوقات وتُقدَّم شهرياً."),
    },
    {
      q: t("Is Silxor aligned with US financial regulatory requirements?", "هل تتوافق Silxor مع المتطلبات التنظيمية المالية الأمريكية؟"),
      a: t("Silxor's compliance architecture is designed to support programs operating under US frameworks including FFIEC, GLBA, SOX, PCI DSS, and NIST 800 series. We work directly with client compliance and audit teams to document and evidence controls throughout the engagement.", "تم تصميم بنية الامتثال في Silxor لدعم البرامج العاملة ضمن الأطر الأمريكية بما في ذلك FFIEC وGLBA وSOX وPCI DSS وسلسلة NIST 800. نعمل مباشرةً مع فرق الامتثال والتدقيق لدى العميل لتوثيق الضوابط وإثباتها طوال التعاون."),
    },
    {
      q: t("How do we start an engagement?", "كيف نبدأ التعاون؟"),
      a: t("Every engagement begins with a no cost Technical Assessment: a 60 minute discovery session to understand environment, objectives, and constraints. A scoped proposal follows within 5 business days.", "يبدأ كل تعاون بتقييم تقني مجاني: جلسة اكتشاف مدتها 60 دقيقة لفهم البيئة والأهداف والقيود. يعقب ذلك اقتراح محدد النطاق خلال 5 أيام عمل."),
    },
    {
      q: t("Does Silxor deliver in Arabic?", "هل تُقدّم Silxor خدماتها بالعربية؟"),
      a: t("Yes. Silxor operates bilingually across engagements. Documentation, assessments, architecture reports, and operational communications can be delivered in Arabic or English on request.", "نعم. تعمل Silxor بلغتين عبر التعاونات. يمكن تسليم الوثائق والتقييمات وتقارير البنية والاتصالات التشغيلية بالعربية أو الإنجليزية عند الطلب."),
    },
    {
      q: t("Can Silxor deploy in fully air gapped environments?", "هل يمكن لـ Silxor النشر في بيئات معزولة بالكامل؟"),
      a: t("Yes. Silxor supports fully air gapped deployments for classified and high assurance workloads, covering sovereign AI, identity infrastructure, and custom platforms with zero external network dependency. Air gap architecture is defined during the technical assessment.", "نعم. تدعم Silxor النشر المعزول بالكامل لأحمال العمل السرية وعالية الضمان، بما يشمل الذكاء الاصطناعي السيادي وبنية الهوية والمنصات المخصصة دون أي اعتماد على شبكة خارجية. تُحدَّد هذه البنية خلال التقييم التقني."),
    },
    {
      q: t("What sets Silxor apart from large international providers?", "ما الذي يميّز Silxor عن كبار المزودين الدوليين؟"),
      a: t("Silxor is US operated and directly accountable. Engineering, NOC, and delivery teams sit under one command structure. Clients receive senior engineers on every engagement, transparent SLAs, and Tier IV grade infrastructure without the abstraction and handoffs of global outsourcers.", "Silxor تُدار في الولايات المتحدة ومسؤولة مباشرةً. تعمل فرق الهندسة ومركز العمليات والتسليم تحت هيكل قيادي موحّد. يحصل العملاء على مهندسين أقدم في كل تعاون، واتفاقيات مستوى خدمة شفافة، وبنية تحتية بمستوى Tier IV دون طبقات وتسليمات المزوّدين العالميين."),
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
