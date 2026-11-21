import { practices } from "@/data/practices";
import SmartLink from "@/components/SmartLink";
export default function WhySilxor() {
  return (
    <section className="ed-section">
      <div className="container-content">
        <p className="ed-kicker">One engagement lead</p>
        <h2 className="ed-h2">Coordinated, not fragmented.</h2>
        <p className="ed-lead mt-6">
          Coordinate the disciplines in your scope through one engagement lead,
          with clear responsibilities.
        </p>
        <ul className="ed-linked-list">
          {practices.map((p) => (
            <li key={p.id}>
              <SmartLink to={p.path}>
                <h3>{p.name}</h3>
                <span>{p.summary}</span>
                <b aria-hidden="true">↗</b>
              </SmartLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
