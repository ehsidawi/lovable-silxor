import { Chapter, MUTED, INK, RULE } from "@/components/journey";

const stages = [
  { title: "Assess", description: "Technical evaluation and feasibility." },
  { title: "Architect", description: "Infrastructure and security design." },
  { title: "Engineer", description: "Build, integrate, and test." },
  { title: "Deploy", description: "Release to monitored infrastructure." },
  { title: "Operate", description: "Monitor, optimize, iterate." },
];

const Process = () => (
  <Chapter
    id="process"
    index={3}
    eyebrow="Process"
    title="How an engagement runs."
    lede="Five stages, clear owners, measurable outcomes."
  >
    <ol className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5" style={{ borderTop: RULE }}>
      {stages.map((s, i) => (
        <li
          key={s.title}
          style={{
            borderBottom: RULE,
            padding: "16px 0",
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
          <div className="font-mono" style={{ fontSize: 10, letterSpacing: "0.2em", color: MUTED, marginBottom: 6 }}>
            {String(i + 1).padStart(2, "0")}
          </div>
          <h3 className="font-display font-[600]" style={{ fontSize: 17, color: INK, marginBottom: 4 }}>
            {s.title}
          </h3>
          <p className="font-body font-[300]" style={{ fontSize: 13, color: MUTED, lineHeight: 1.5 }}>
            {s.description}
          </p>
        </li>
      ))}
    </ol>
  </Chapter>
);

export default Process;
