import { Link } from "react-router-dom";
import { useHashNav } from "@/lib/hashNav";

const Footer = () => {
  const hashNav = useHashNav();

  const links = [
    { label: "Capabilities", to: "/#capabilities" },
    { label: "Process", to: "/#process" },
    { label: "Partners", to: "/#partners" },
    { label: "Book an Assessment", to: "/book" },
    { label: "Privacy", to: "/privacy" },
    { label: "Compliance", to: "/compliance" },
    { label: "SLA", to: "/sla" },
  ];

  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.08)", padding: "28px 0 24px" }}>
      <div className="container-content">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <Link to="/" className="font-display font-[800]" style={{ fontSize: 20, color: "#FFFFFF" }}>
              Silxor
            </Link>
            <p className="font-body font-[300]" style={{ fontSize: 13, color: "#B8BCC2", marginTop: 8, lineHeight: 1.7 }}>
              801 Barton Springs Rd, Austin, TX 78704
              <br />
              <a href="mailto:hello@silxor.com" style={{ color: "#B8BCC2" }}>
                hello@silxor.com
              </a>
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                onClick={(e) => hashNav(e, l.to)}
                className="font-body font-[300] transition-colors duration-200 hover:text-white"
                style={{ fontSize: 13, color: "#B8BCC2" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)", marginTop: 22, paddingTop: 16 }}
        >
          <p className="font-body font-[300]" style={{ fontSize: 12, color: "#B8BCC2" }}>
            © 2026 Silxor Group Holding.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="https://www.linkedin.com/company/silxorllc/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body font-[300] transition-colors duration-200 hover:text-white"
              style={{ fontSize: 12, color: "#B8BCC2" }}
            >
              LinkedIn
            </a>
            <a
              href="https://www.linkedin.com/in/ehsidawi"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body font-[300] transition-colors duration-200 hover:text-white"
              style={{ fontSize: 12, color: "#B8BCC2" }}
            >
              Designed by Ehsan Nidawi
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
