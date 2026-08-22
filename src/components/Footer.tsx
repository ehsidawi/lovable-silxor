import { Shield, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { useHashNav } from "@/lib/hashNav";

const columns: { title: string; links: { label: string; to: string }[] }[] = [
  {
    title: "Explore",
    links: [
      { label: "Solutions", to: "/#solutions" },
      { label: "Full Product Team", to: "/#product-team" },
      { label: "Services", to: "/#services" },
      { label: "Industries", to: "/#industries" },
      { label: "Process", to: "/#process" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Solution Patterns", to: "/#work" },
      { label: "About", to: "/#about" },
      { label: "Partners", to: "/partners" },
      { label: "Contact", to: "/#contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", to: "/privacy" },
      { label: "Compliance Documentation", to: "/compliance" },
      { label: "SLA", to: "/sla" },
    ],
  },
];

const Footer = () => {
  const hashNav = useHashNav();

  return (
    <footer style={{ padding: "0 0 32px" }}>
      <div className="container-content">
        <div className="r-panel" style={{ borderRadius: 40 }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))] gap-8">
            <div>
              <Link to="/" className="inline-flex items-center gap-2" style={{ marginBottom: 12 }}>
                <span className="font-display font-[800]" style={{ fontSize: 22, color: "#FFFFFF" }}>Silxor</span>
                <span style={{ width: 7, height: 7, borderRadius: 999, backgroundColor: "#F0F1F3" }} />
              </Link>
              <p className="font-body font-[300]" style={{ fontSize: 13.5, color: "#C6CAD0", lineHeight: 1.65, maxWidth: 300 }}>
                Enterprise technology, cybersecurity, cloud, private AI, identity, and managed services.
              </p>
              <div className="flex flex-wrap gap-2" style={{ marginTop: 16 }}>
                <span className="r-pill">
                  <bdi dir="ltr">801 Barton Springs Rd, Austin, TX 78704</bdi>
                </span>
                <a href="mailto:hello@silxor.com" className="r-pill" style={{ color: "#FFFFFF" }}>
                  <bdi dir="ltr">hello@silxor.com</bdi>
                </a>
              </div>
            </div>

            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="font-mono uppercase" style={{ fontSize: 10, letterSpacing: "0.2em", color: "#FFFFFF", marginBottom: 12 }}>
                  {col.title}
                </h4>
                <nav className="flex flex-col gap-2.5">
                  {col.links.map((l) => (
                    <Link
                      key={l.label}
                      to={l.to}
                      onClick={(e) => hashNav(e, l.to)}
                      className="font-body font-[300] transition-colors duration-200 hover:text-[#FFFFFF]"
                      style={{ fontSize: 13.5, color: "#C6CAD0" }}
                    >
                      {l.label}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>

          <div
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            style={{ borderTop: "1px solid rgba(255,255,255,0.07)", marginTop: 28, paddingTop: 20 }}
          >
            <div className="flex flex-wrap gap-2">
              {["NIST CSF", "ISO 27001", "SOC 2 Practices", "GDPR"].map((f) => (
                <span key={f} className="r-pill" style={{ fontSize: 10 }}>
                  <Shield style={{ width: 11, height: 11 }} strokeWidth={1.6} />
                  {f}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://www.linkedin.com/company/silxorllc/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Silxor on LinkedIn"
                className="flex items-center gap-2 font-body font-[300] transition-colors duration-200 hover:text-[#FFFFFF]"
                style={{ fontSize: 12, color: "#C6CAD0" }}
              >
                <Linkedin style={{ width: 14, height: 14 }} strokeWidth={1.5} />
                LinkedIn
              </a>
              <a
                href="https://www.linkedin.com/in/ehsidawi"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body font-[300] transition-colors duration-200 hover:text-[#FFFFFF]"
                style={{ fontSize: 12, color: "#C6CAD0" }}
              >
                Designed by Ehsan Nidawi
              </a>
              <p className="font-body font-[300]" style={{ fontSize: 12, color: "#C6CAD0" }}>
                © 2026 Silxor Group Holding.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
