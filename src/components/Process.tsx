import { Chapter, MUTED, INK, RULE } from "@/components/journey";

const stages = [
  { title: "Assess", description: "Technical evaluation and feasibility analysis." },
  { title: "Architect", description: "Infrastructure planning and security review." },
  { title: "Engineer", description: "Development and integration with quality assurance." },
  { title: "Deploy", description: "Production release to resilient, monitored infrastructure." },
  { title: "Operate", description: "Continuous monitoring, optimization, and iteration." },
];

const Process = () => (
  <Chapter
    id="process"
    index={3}
    eyebrow="Process"
    title="How an engagement runs."
    lede="A five stage delivery model applied to every engagement, with clear owners and measurable outcomes at each stage."
  >
    <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5" style={{ borderTop: RULE }}>
      {stages.map((s, i) => (
        <li
          key={s.title}
          style={{
            borderBottom: RULE,
            padding: "20px 0",
            paddingInlineEnd: 20,
            position: "relative",
          }}
        >
          <span
            aria-hidden
            className="hidden lg:block"
            style={{
              position: "absolute",
              top: -3,
              insetInlineStart: 0,
              width: 5,
              height: 5,
              background: "#F0F1F3",
            }}
          />
          <div className="font-mono" style={{ fontSize: 10, letterSpacing: "0.2em", color: MUTED, marginBottom: 8 }}>
            {`STAGE ${String(i + 1).padStart(2, "0")}`}
          </div>
          <h3 className="font-display font-[600]" style={{ fontSize: 18, color: INK, marginBottom: 6 }}>
            {s.title}
          </h3>
          <p className="font-body font-[300]" style={{ fontSize: 13, color: MUTED, lineHeight: 1.6 }}>
            {s.description}
          </p>
        </li>
      ))}
    </ol>
  </Chapter>
);

export default Process;
