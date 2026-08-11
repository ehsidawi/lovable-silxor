import { useNavigate } from "react-router-dom";
import { Chapter, MUTED, INK, RULE } from "@/components/journey";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How do we start an engagement?",
    a: "Every engagement begins with a no cost technical assessment: a discovery session to understand environment, objectives, and constraints. A scoped proposal follows.",
  },
  {
    q: "Can Silxor handle infrastructure, software, and security in one contract?",
    a: "Yes. Silxor operates as a single technology partner across infrastructure, software, AI, and cybersecurity: one contract, one SLA, one accountable team. Multi domain scope is defined during the assessment.",
  },
  {
    q: "Where does our data live?",
    a: "Hosting location and jurisdiction are agreed with each client during the assessment. We support US jurisdiction hosting, private deployments, and fully air gapped environments for sensitive workloads.",
  },
  {
    q: "How does Silxor's AI differ from public AI providers?",
    a: "Silxor can host models on private, client dedicated infrastructure so data is not sent to third party model providers.",
  },
  {
    q: "Is Silxor aligned with US regulatory requirements?",
    a: "Silxor's compliance architecture supports programs operating under frameworks including FFIEC, GLBA, SOX, PCI DSS, and the NIST 800 series. We work directly with client compliance and audit teams to document and evidence controls.",
  },
  {
    q: "What does incident response look like?",
    a: "Severity levels, escalation paths, and response time targets are defined per contract and documented in the SLA agreed with each client.",
  },
];

const Engage = () => {
  const navigate = useNavigate();

  return (
    <Chapter
      id="contact"
      index={7}
      eyebrow="Next Step"
      title="Start with a technical assessment."
      lede="Tell us what you are building and we will scope exactly how to deliver it. The assessment is no cost and led by a senior engineer."
    >
      <div className="lg:grid lg:grid-cols-12 lg:gap-12" style={{ borderTop: RULE, paddingTop: 24 }}>
        <div className="lg:col-span-5">
          <Button
            type="button"
            variant="ghost"
            onClick={() => navigate("/book")}
            className="h-auto rounded-none font-mono uppercase hover:bg-white hover:text-inherit inline-flex items-center justify-center transition-colors"
            style={{
              fontSize: 12,
              letterSpacing: "0.16em",
              backgroundColor: "#FFFFFF",
              color: "#0B0B0B",
              padding: "16px 32px",
              minHeight: 44,
              fontWeight: 700,
              border: "none",
              cursor: "pointer",
            }}
          >
            Book an Assessment
          </Button>

          <dl className="mt-8 flex flex-col gap-4">
            <div>
              <dt className="font-mono uppercase" style={{ fontSize: 10, letterSpacing: "0.2em", color: MUTED, marginBottom: 4 }}>
                Email
              </dt>
              <dd>
                <a
                  href="mailto:hello@silxor.com"
                  className="font-body font-[400]"
                  style={{ fontSize: 15, color: INK }}
                >
                  hello@silxor.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-mono uppercase" style={{ fontSize: 10, letterSpacing: "0.2em", color: MUTED, marginBottom: 4 }}>
                Office
              </dt>
              <dd className="font-body font-[300]" style={{ fontSize: 15, color: INK }}>
                801 Barton Springs Rd, Austin, TX 78704
              </dd>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-7 mt-10 lg:mt-0">
          <Accordion type="single" collapsible>
            {faqs.map((faq, i) => (
              <AccordionItem
                key={faq.q}
                value={`faq-${i}`}
                className="border-none"
                style={{ borderBottom: RULE }}
              >
                <AccordionTrigger
                  className="hover:no-underline text-left font-body font-[400]"
                  style={{ fontSize: 14.5, color: INK, paddingTop: 14, paddingBottom: 14 }}
                >
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent
                  className="font-body font-[300]"
                  style={{ fontSize: 13.5, color: MUTED, lineHeight: 1.75, paddingBottom: 16 }}
                >
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </Chapter>
  );
};

export default Engage;
