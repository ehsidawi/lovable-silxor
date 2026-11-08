import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export type Crumb = { label: string; to?: string };

const Breadcrumbs = ({ items }: { items: Crumb[] }) => (
  <nav
    aria-label="Breadcrumb"
    className="font-mono flex flex-wrap items-center gap-1.5"
    style={{ fontSize: 10.5, letterSpacing: 0, textTransform: "uppercase", color: "hsl(var(--muted-foreground))" }}
  >
    {items.map((c, i) => (
      <span key={c.label} className="inline-flex items-center gap-1.5">
        {c.to ? (
          <Link to={c.to} className="transition-colors duration-200 hover:text-forest">
            {c.label}
          </Link>
        ) : (
          <span style={{ color: "hsl(var(--muted-foreground))" }}>{c.label}</span>
        )}
        {i < items.length - 1 && (
          <ChevronRight aria-hidden style={{ width: 11, height: 11, opacity: 0.6 }} strokeWidth={1.8} />
        )}
      </span>
    ))}
  </nav>
);

export default Breadcrumbs;
