import type { ReactNode } from "react";
export default function SectionHeading({
  label,
  title,
  children,
  id,
}: {
  label: string;
  title: string;
  children?: ReactNode;
  id?: string;
}) {
  return (
    <header className="ed-section-head">
      <p className="ed-kicker">{label}</p>
      <h2 id={id} className="ed-h2">
        {title}
      </h2>
      {children && <div className="ed-lead">{children}</div>}
    </header>
  );
}
