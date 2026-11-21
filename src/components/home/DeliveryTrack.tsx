import SmartLink from "@/components/SmartLink";
import SectionHeading from "@/components/editorial/SectionHeading";
const stages = [
  {
    title: "Assess",
    line: "Technical evaluation and feasibility.",
    owner: "Engagement lead",
  },
  {
    title: "Architect",
    line: "Design and security review.",
    owner: "Lead architect",
  },
  {
    title: "Build",
    line: "Engineer, integrate, assure quality.",
    owner: "Delivery lead",
  },
  {
    title: "Deploy",
    line: "Production on monitored infrastructure.",
    owner: "Platform lead",
  },
  {
    title: "Manage",
    line: "Operate, secure, and improve.",
    owner: "Service owner",
  },
];
export default function DeliveryTrack() {
  return (
    <section className="ed-section">
      <div className="container-content ed-delivery-summary">
        <header>
          <p className="ed-kicker">Delivery</p>
          <h2 className="ed-h2">Decisions before delivery.</h2>
          <p className="ed-lead">
            Assessment through operation. One line of accountability.
          </p>
          <SmartLink to="/delivery" className="ed-text-link">
            Read the delivery model <span aria-hidden="true">↗</span>
          </SmartLink>
        </header>
        <ol className="ed-narrative">
          {stages.map((s, i) => (
            <li key={s.title}>
              <span className="ed-narrative-number">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.line}</p>
                <small>Owner: {s.owner}</small>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
