import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import Breadcrumbs, { Crumb } from "@/components/Breadcrumbs";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  lead?: string;
  crumbs?: Crumb[];
  primaryCta?: { label: string; to: string };
  children?: ReactNode;
};

/** Consistent page hero used by every interior route. */
const PageHero = ({ eyebrow, title, lead, crumbs, primaryCta, children }: PageHeroProps) => {
  const navigate = useNavigate();

  return (
    <section
      className="relative overflow-hidden border-b"
      style={{
        backgroundColor: "#141414",
        borderColor: "#25282C",
        paddingTop: "clamp(48px, 7vw, 84px)",
        paddingBottom: "clamp(40px, 6vw, 72px)",
      }}
    >
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          bottom: 0,
          insetInlineEnd: 0,
          width: "34%",
          height: "72%",
          opacity: 0.1,
          backgroundImage:
            "linear-gradient(to bottom right, transparent 49.5%, #25282C 50%, transparent 50.5%)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="relative container-content" style={{ zIndex: 1 }}>
        {crumbs && crumbs.length > 0 && (
          <div style={{ marginBottom: 20 }}>
            <Breadcrumbs items={crumbs} />
          </div>
        )}
        <span className="r-eyebrow">{eyebrow}</span>
        <h1
          className="font-display font-[700]"
          style={{
            color: "#FFFFFF",
            letterSpacing: "-0.025em",
            lineHeight: 1.06,
            fontSize: "clamp(30px, 5vw, 56px)",
            marginTop: 18,
            maxWidth: 900,
          }}
        >
          {title}
        </h1>
        {lead && (
          <p className="r-lead" style={{ marginTop: 16, maxWidth: 620, fontSize: "clamp(15px, 1.5vw, 18px)" }}>
            {lead}
          </p>
        )}
        {children}
        <div className="flex flex-wrap items-center gap-3" style={{ marginTop: 28 }}>
          <button type="button" className="r-cta" onClick={() => navigate(primaryCta?.to ?? "/book")}>
            {primaryCta?.label ?? "Book an Assessment"}
          </button>
          <a href="mailto:hello@silxor.com" className="r-cta-ghost">
            hello@silxor.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
