import type { ReactNode } from "react";
type DocumentSection = {
  id?: string;
  title: string;
  body?: string;
  details?: string;
  paragraphs?: string[];
};
export default function EditorialDocument({
  sections,
  label = "On this page",
  children,
  actions,
}: {
  sections: DocumentSection[];
  label?: string;
  children?: ReactNode;
  actions?: (id?: string) => ReactNode;
}) {
  return (
    <section className="ed-section">
      <div className="container-content ed-document">
        <aside>
          <p className="ed-mini">{label}</p>
          <nav aria-label={label}>
            {sections.map((s, i) => (
              <a key={s.id ?? s.title} href={`#${s.id ?? `section-${i + 1}`}`}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                {s.title}
              </a>
            ))}
          </nav>
          {children}
        </aside>
        <article className="ed-prose">
          {sections.map((s, i) => (
            <section key={s.id ?? s.title} id={s.id ?? `section-${i + 1}`}>
              <span className="ed-mini">{String(i + 1).padStart(2, "0")}</span>
              <h2>{s.title}</h2>
              {(
                s.paragraphs ??
                [s.body, s.details].filter((p): p is string => Boolean(p))
              ).map((p) => (
                <p key={p}>{p}</p>
              ))}
              {actions?.(s.id)}
            </section>
          ))}
        </article>
      </div>
    </section>
  );
}
