import { ArrowUpRight } from "lucide-react";
import SmartLink from "@/components/SmartLink";

const steps = [
  { title: "Assess", line: "Technical evaluation and feasibility.", owner: "Engagement lead" },
  { title: "Architect", line: "Design and security review.", owner: "Lead architect" },
  { title: "Build", line: "Engineer, integrate, assure quality.", owner: "Delivery lead" },
  { title: "Deploy", line: "Production on monitored infrastructure.", owner: "Platform lead" },
  { title: "Manage", line: "Operate, secure, and improve.", owner: "Service owner" },
];

/** Engineering lifecycle: five stages on a continuous rail with a named owner per stage. */
const DeliveryTrack = () => (
  <section className="px-section px-lifecycle" aria-labelledby="lifecycle-title">
    <div className="container-content">
      <header className="px-section-head px-section-head--row">
        <div><p className="px-mono">§ 05 · Delivery lifecycle</p><h2 id="lifecycle-title" className="px-h2">Assessment through operation. One line of accountability.</h2></div>
        <SmartLink to="/delivery" className="px-arrow-link">Delivery model <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></SmartLink>
      </header>
      <ol className="px-rail">
        {steps.map((s, i) => (
          <li key={s.title}>
            <span className="px-rail-node" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
            <h3>{s.title}</h3>
            <p>{s.line}</p>
            <p className="px-mono">Owner · {s.owner}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);
export default DeliveryTrack;
