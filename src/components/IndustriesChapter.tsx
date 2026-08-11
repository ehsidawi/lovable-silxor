import { Chapter, MUTED, INK, RULE } from "@/components/journey";

const industries = [
  "Government", "Defense", "Banking", "Digital Banking", "Financial Services",
  "Healthcare", "Energy", "Manufacturing", "Transportation", "Airports",
  "Retail", "Education", "Telecommunications", "Critical Infrastructure",
];

const IndustriesChapter = () => (
  <Chapter
    id="industries"
    index={2}
    eyebrow="Industries"
    title="Built for regulated industries."
    lede="Compliant, AI enabled digital ecosystems engineered for financial institutions, the public sector, and critical operators."
  >
    <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8" style={{ borderTop: RULE }}>
      {industries.map((label) => (
        <li
          key={label}
          className="font-body font-[400]"
          style={{ borderBottom: RULE, padding: "12px 0", fontSize: 15, color: INK }}
        >
          {label}
        </li>
      ))}
    </ul>
    <p className="font-body font-[300]" style={{ fontSize: 13, color: MUTED, marginTop: 14 }}>
      Programs are aligned to NIST CSF and ISO 27001 control families, with evidence documented during delivery.
    </p>
  </Chapter>
);

export default IndustriesChapter;
