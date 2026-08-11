import { Chapter, MUTED, INK, RULE } from "@/components/journey";

const points = [
  {
    title: "One accountable team",
    desc: "A single named engineering team owns advisory, build, and operations end to end, without handoffs between vendors.",
  },
  {
    title: "Security by design",
    desc: "Security and identity controls are built into architecture decisions from day one, not retrofitted after delivery.",
  },
  {
    title: "Framework aligned",
    desc: "Programs are aligned to NIST CSF and ISO 27001 control families; documentation is evidenced during delivery.",
  },
  {
    title: "Senior by default",
    desc: "Every engagement is led by a founder or senior practice lead, with staffing, seniority, and reporting cadence scoped in the proposal.",
  },
];

const WhySilxor = () => (
  <Chapter
    id="why"
    index={5}
    eyebrow="Why Silxor"
    title="One partner. Full stack. No handoffs."
    lede="Strategy, engineering, security, cloud, AI, and 24×7 managed operations, delivered end to end by one accountable team."
  >
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-10" style={{ borderTop: RULE }}>
      {points.map((p) => (
        <article key={p.title} style={{ borderBottom: RULE, padding: "20px 0" }}>
          <h3 className="font-display font-[600]" style={{ fontSize: 17, color: INK, marginBottom: 8 }}>
            {p.title}
          </h3>
          <p className="font-body font-[300]" style={{ fontSize: 13.5, color: MUTED, lineHeight: 1.65 }}>
            {p.desc}
          </p>
        </article>
      ))}
    </div>
    <p className="font-body font-[300]" style={{ fontSize: 13, color: MUTED, marginTop: 14 }}>
      {"Founded and led by "}
      <a
        href="https://www.linkedin.com/in/ehsidawi"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#FFFFFF", textDecoration: "underline", textUnderlineOffset: 3 }}
      >
        Ehsan Nidawi
      </a>
      {"."}
    </p>
  </Chapter>
);

export default WhySilxor;
