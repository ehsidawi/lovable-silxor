import { ReactNode } from "react";

export const CHAPTERS = [
  { id: "capabilities", label: "Capabilities" },
  { id: "industries", label: "Industries" },
  { id: "process", label: "Process" },
  { id: "patterns", label: "Patterns" },
  { id: "why", label: "Why Silxor" },
  { id: "partners", label: "Partners" },
  { id: "contact", label: "Contact" },
] as const;

export const RULE = "1px solid rgba(255,255,255,0.08)";
export const INK = "#FFFFFF";
export const MUTED = "#B8BCC2";
export const STEEL = "#F0F1F3";

type ChapterProps = {
  id: string;
  index: number;
  eyebrow: string;
  title: string;
  lede?: string;
  children: ReactNode;
};

/** One chapter of the guided journey: index, single idea, one explanation. */
export const Chapter = ({ id, index, eyebrow, title, lede, children }: ChapterProps) => (
  <section
    id={id}
    aria-labelledby={`${id}-title`}
    style={{ borderTop: RULE, paddingTop: "clamp(40px, 5.5vw, 72px)", paddingBottom: "clamp(40px, 5.5vw, 72px)" }}
  >
    <div className="container-content">
      <div
        className="grid gap-x-10 gap-y-5"
        style={{ gridTemplateColumns: "minmax(0,1fr)" }}
      >
        <header className="lg:grid lg:grid-cols-12 lg:gap-10 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3" style={{ marginBottom: 12 }}>
              <span
                className="font-mono"
                style={{ fontSize: 10, letterSpacing: "0.2em", color: MUTED }}
              >
                {String(index).padStart(2, "0")}
              </span>
              <span aria-hidden style={{ width: 24, height: 1, background: "rgba(255,255,255,0.2)" }} />
              <span
                className="font-mono uppercase"
                style={{ fontSize: 10, letterSpacing: "0.2em", color: MUTED }}
              >
                {eyebrow}
              </span>
            </div>
            <h2
              id={`${id}-title`}
              className="font-display font-[700]"
              style={{
                fontSize: "clamp(24px, 2.8vw, 34px)",
                lineHeight: 1.08,
                letterSpacing: "-0.025em",
                color: INK,
              }}
            >
              {title}
            </h2>
          </div>
          {lede ? (
            <p
              className="font-body font-[300] lg:col-span-5"
              style={{ fontSize: 15, lineHeight: 1.7, color: MUTED, marginTop: 12 }}
            >
              {lede}
            </p>
          ) : null}
        </header>
        <div>{children}</div>
      </div>
    </div>
  </section>
);
