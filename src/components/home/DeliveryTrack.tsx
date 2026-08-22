import SmartLink from "@/components/SmartLink";

const steps = [
  { title: "Assess", line: "Technical evaluation and feasibility." },
  { title: "Architect", line: "Design and security review." },
  { title: "Build", line: "Engineer, integrate, assure quality." },
  { title: "Deploy", line: "Production on monitored infrastructure." },
  { title: "Manage", line: "Operate, secure, and improve." },
];

/** Five step delivery model as a connected progression. */
const DeliveryTrack = () => (
  <section className="r-section">
    <div className="container-content">
      <div className="r-panel" style={{ borderRadius: 40 }}>
        <div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4"
          style={{ marginBottom: 30 }}
        >
          <div className="flex flex-col items-start gap-4">
            <span className="r-eyebrow">Delivery</span>
            <h2 className="r-title">One path from assessment to operations.</h2>
          </div>
          <SmartLink
            to="/delivery"
            className="font-mono uppercase"
            style={{ fontSize: 11, letterSpacing: "0.16em", color: "#FFFFFF" }}
          >
            Delivery model →
          </SmartLink>
        </div>

        {/* Desktop rail */}
        <div className="hidden lg:block relative">
          <div
            aria-hidden
            style={{
              position: "absolute",
              top: 27,
              left: "10%",
              right: "10%",
              height: 1,
              background: "rgba(240,241,243,0.18)",
            }}
          />
          <ol
            className="grid grid-cols-5 gap-4 relative"
            style={{ listStyle: "none", margin: 0, padding: 0 }}
          >
            {steps.map((s, i) => (
              <li key={s.title} className="flex flex-col items-center text-center">
                <span
                  className="r-node font-mono"
                  style={{ width: 54, height: 54, background: "#191B1F", fontSize: 12, color: "#F0F1F3" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className="font-body font-[600]"
                  style={{ fontSize: 15.5, color: "#FFFFFF", marginTop: 16 }}
                >
                  {s.title}
                </h3>
                <p
                  className="font-body font-[300]"
                  style={{ fontSize: 12.5, color: "#C6CAD0", lineHeight: 1.55, marginTop: 6, maxWidth: 170 }}
                >
                  {s.line}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* Mobile / tablet vertical track */}
        <ol
          className="lg:hidden relative"
          style={{ listStyle: "none", margin: 0, padding: 0, paddingInlineStart: 4 }}
        >
          <div
            aria-hidden
            style={{
              position: "absolute",
              insetInlineStart: 25,
              top: 22,
              bottom: 22,
              width: 1,
              background: "rgba(240,241,243,0.18)",
            }}
          />
          {steps.map((s, i) => (
            <li key={s.title} className="flex items-start gap-4 relative" style={{ padding: "9px 0" }}>
              <span
                className="r-node font-mono"
                style={{ width: 42, height: 42, background: "#191B1F", fontSize: 11, color: "#F0F1F3" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0" style={{ paddingTop: 4 }}>
                <h3 className="font-body font-[600]" style={{ fontSize: 15, color: "#FFFFFF" }}>
                  {s.title}
                </h3>
                <p
                  className="font-body font-[300]"
                  style={{ fontSize: 12.5, color: "#C6CAD0", lineHeight: 1.5, marginTop: 2 }}
                >
                  {s.line}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

export default DeliveryTrack;
