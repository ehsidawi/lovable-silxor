import type { ArchitectureDiagram as ReferenceData } from "@/data/diagrams";
export default function ReferenceBrief({ data }: { data: ReferenceData }) {
  return (
    <section
      className="ed-section ed-reference"
      aria-labelledby={`${data.id}-brief`}
    >
      <div className="container-content ed-reference-layout">
        <header>
          <p className="ed-kicker">Practice reference</p>
          <h2 id={`${data.id}-brief`} className="ed-h2">
            {data.title}
          </h2>
          <p className="ed-lead">{data.summary}</p>
          <p className="ed-note">{data.footnote}</p>
        </header>
        <div className="ed-table-wrap">
          <table className="ed-table">
            <caption className="sr-only">
              {data.title}: responsibilities and considerations
            </caption>
            <thead>
              <tr>
                <th scope="col">Discipline</th>
                <th scope="col">Consideration</th>
              </tr>
            </thead>
            <tbody>
              {data.nodes.map((n) => (
                <tr key={n.id}>
                  <th scope="row">{n.label}</th>
                  <td>{n.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
