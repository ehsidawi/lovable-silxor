import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {

  const faqs = [
    {
      q: "Where does our data live?",
      a: "Hosting location and jurisdiction are agreed with each client during the technical assessment. We support US-jurisdiction hosting, private and air-gapped deployments for sensitive workloads.",
    },
    {
      q: "Can Silxor handle both infrastructure and software in one contract?",
      a: "Yes. Silxor operates as a single technology partner across infrastructure, software, AI, and cybersecurity: one contract, one SLA, one accountable team. Multi domain scope is defined during the technical assessment.",
    },
    {
      q: "How does Silxor's AI differ from public AI providers?",
      a: "Silxor can host models on private, client-dedicated infrastructure so data is not sent to third-party model providers. Fully air-gapped deployments are available for sensitive workloads.",
    },
    {
      q: "What does incident response look like?",
      a: "Severity levels, escalation paths, and response-time targets are defined per contract and documented in the SLA agreed with each client.",
    },
    {
      q: "Is Silxor aligned with US financial regulatory requirements?",
      a: "Silxor's compliance architecture is designed to support programs operating under frameworks including FFIEC, GLBA, SOX, PCI DSS, and the NIST 800 series. We work directly with client compliance and audit teams to document and evidence controls throughout the engagement.",
    },
    {
      q: "How do we start an engagement?",
      a: "Every engagement begins with a no cost Technical Assessment: a discovery session to understand environment, objectives, and constraints. A scoped proposal follows.",
    },
    {
      q: "Does Silxor deliver in Arabic?",
      a: "Yes. Silxor operates bilingually across engagements. Documentation, assessments, architecture reports, and operational communications can be delivered in Arabic or English on request.",
    },
    {
      q: "Can Silxor deploy in air-gapped environments?",
      a: "Yes. Silxor supports air-gapped deployments for high-assurance workloads, covering private AI, identity infrastructure, and custom platforms with no external network dependency. Architecture is defined during the technical assessment.",
    },
    {
      q: "What sets Silxor apart from large international providers?",
      a: "Silxor is US operated and directly accountable. Engineering, operations, and delivery teams sit under one command structure, with senior engineers involved in each engagement and transparent, contractually defined SLAs.",
    },
  ];

  return (
    <section className="section-spacing" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="container-content">
        <div style={{ marginBottom: 12 }}>
          <div className="section-eyebrow">{"FAQ"}</div>
          <h2 className="font-display font-[700]" style={{ fontSize: 32, lineHeight: 1.15, color: "#FFFFFF" }}>
            {"Answers Before You Sign"}
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
