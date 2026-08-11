import { Chapter, MUTED, INK, RULE } from "@/components/journey";

const points = [
  { title: "One accountable team", desc: "One named team owns advisory, build, and operations. No vendor handoffs." },
  { title: "Security by design", desc: "Security and identity controls sit in the architecture from day one." },
  { title: "Framework aligned", desc: "NIST CSF and ISO 27001 control families, evidenced during delivery." },
  { title: "Senior by default", desc: "Every engagement is led by a founder or senior practice lead." },
];

const WhySilxor = () => (
  <Chapter
    id="why"
    index={5}
    eyebrow="Why Silxor"
    title="One partner. Full stack. No handoffs."
    lede="Strategy, engineering, security, cloud, AI, and 24×7 operations from one team."
  >
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-10" style={{ borderTop: RULE }}>
      {points.map((p) => (
        <article key={p.title} style={{ borderBottom: RULE, padding: "16px 0" }}>
          <h3 className="font-display font-[600]" style={{ fontSize: 17, color: INK, marginBottom: 6 }}>
            {p.title}
          </h3>
          <p className="font-body font-[300]" style={{ fontSize: 13.5, color: MUTED, lineHeight: 1.55 }}>
            {p.desc}
          </p>
        </article>
      ))}
    </div>
    <p className="font-body font-[300]" style={{ fontSize: 13, color: MUTED, marginTop: 12 }}>
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
