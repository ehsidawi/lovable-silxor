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
    lede="Programs align to NIST CSF and ISO 27001 control families, evidenced during delivery."
  >
    <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8" style={{ borderTop: RULE }}>
      {industries.map((label) => (
        <li
          key={label}
          className="font-body font-[400]"
          style={{ borderBottom: RULE, padding: "10px 0", fontSize: 14.5, color: INK }}
        >
          {label}
        </li>
      ))}
    </ul>
  </Chapter>
);

export default IndustriesChapter;
