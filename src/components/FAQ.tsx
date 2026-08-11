import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Where does our data live?",
    a: "Hosting jurisdiction is agreed during the assessment. We support US hosting, private, and air gapped deployments.",
  },
  {
    q: "Can one contract cover infrastructure, software, AI, and security?",
    a: "Yes. One contract, one SLA, one accountable team. Multi domain scope is defined during the assessment.",
  },
  {
    q: "How is your AI different from public providers?",
    a: "Models run on private, client dedicated infrastructure, so data is never sent to third party model providers.",
  },
  {
    q: "What does incident response look like?",
    a: "Severity levels, escalation paths, and response time targets are defined per contract and documented in the SLA.",
  },
  {
    q: "Which regulatory frameworks do you support?",
    a: "Programs are designed to support FFIEC, GLBA, SOX, PCI DSS, and the NIST 800 series, evidenced with your audit teams.",
  },
  {
    q: "How do we start?",
    a: "With a no cost technical assessment covering environment, objectives, and constraints. A scoped proposal follows.",
  },
];

const FAQ = () => {
  return (
    <section className="r-section">
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,300px)_1fr] gap-8 lg:gap-16">
          <div className="flex flex-col items-start gap-4">
            <span className="r-eyebrow">FAQ</span>
            <h2 className="r-title">Answers Before You Sign</h2>
          </div>

          <div className="r-panel" style={{ borderRadius: 28, paddingTop: 8, paddingBottom: 8 }}>
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="border-none"
                  style={{
                    borderBottom: index < faqs.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                    padding: "14px 0",
                  }}
                >
                  <AccordionTrigger
                    className="hover:no-underline text-left py-0 font-body font-[500]"
                    style={{ fontSize: 15, color: "#FFFFFF" }}
                  >
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent
                    className="font-body font-[300] pb-0"
                    style={{ fontSize: 13.5, color: "#C6CAD0", lineHeight: 1.7, paddingTop: 10 }}
                  >
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
