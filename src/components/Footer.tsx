import { Shield, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { useHashNav } from "@/lib/hashNav";

const Footer = () => {
  const hashNav = useHashNav();

  const columns: { title: string; links: { label: string; to: string }[] }[] = [
    {
      title: "Services",
      links: [
        { label: "Advisory & Strategy", to: "/#services" },
        { label: "Infrastructure & Cloud", to: "/#services" },
        { label: "Cybersecurity & GRC", to: "/#services" },
        { label: "Managed Services", to: "/#services" },
      ],
    },
    {
      title: "Industries",
      links: [
        { label: "Banking", to: "/#industries" },
        { label: "Government", to: "/#industries" },
        { label: "Healthcare", to: "/#industries" },
        { label: "Critical Infrastructure", to: "/#industries" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Solutions", to: "/#solutions" },
        { label: "Selected Work", to: "/#work" },
        { label: "Process", to: "/#process" },
        { label: "About", to: "/#about" },
        { label: "Partners", to: "/partners" },
        { label: "Contact", to: "/#contact" },
      ],
    },
    {
      title: "Compliance",
      links: [
        { label: "Privacy", to: "/privacy" },
        { label: "Compliance Documentation", to: "/compliance" },
        { label: "SLA", to: "/sla" },
        { label: "Book an Assessment", to: "/book" },
      ],
    },
  ];


  return (
    <footer style={{ backgroundColor: "#141414", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "32px 0 20px" }}>
      <div className="container-content">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-10" style={{ marginBottom: 0 }}>
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-3">
              <span className="font-display font-[800]" style={{ fontSize: 24, color: "#FFFFFF" }}>
                Silxor
                <span className="inline-block ml-1" style={{ width: 6, height: 6, backgroundColor: "#F0F1F3", verticalAlign: "middle", marginBottom: 2 }} />
              </span>
            </Link>
            <p className="font-body font-[300]" style={{ fontSize: 14, color: "#B8BCC2", lineHeight: 1.7 }}>
              {"Enterprise technology, cybersecurity, cloud, private AI, identity, and managed services."}
            </p>
            <div style={{ marginTop: 16 }}>
              <p className="font-body font-[300]" style={{ fontSize: 13, color: "#B8BCC2", lineHeight: 1.7 }}>
                <bdi dir="ltr">{"801 Barton Springs Rd, Austin, TX 78704"}</bdi>
              </p>
              <a
                href="mailto:hello@silxor.com"
                className="font-body font-[300] transition-colors duration-200"
                style={{ fontSize: 13, color: "#B8BCC2" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#F0F1F3")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#B8BCC2")}
              >
                <bdi dir="ltr">hello@silxor.com</bdi>
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4
                className="font-body font-[400] uppercase"
                style={{ fontSize: 11, letterSpacing: "0.12em", color: "#FFFFFF", marginBottom: 8 }}
              >
                {col.title}
              </h4>
              <nav className="space-y-3">
                {col.links.map((l) => (
                  <Link
                    key={l.label}
                    to={l.to}
                    onClick={(e) => hashNav(e, l.to)}
                    className="block font-body font-[300] transition-colors duration-200"
                    style={{ fontSize: 14, color: "#B8BCC2" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#F0F1F3")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#B8BCC2")}
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 32, marginBottom: 20 }}>
          <p className="font-body font-[300]" style={{ fontSize: 12, color: "#B8BCC2", marginBottom: 8 }}>
            {"Aligned to:"}
          </p>
          <div className="flex flex-wrap gap-3">
            {["NIST CSF", "ISO 27001", "SOC 2 Practices", "GDPR"].map((framework) => (
              <Badge key={framework} className="badge-pill rounded-[2px] border-0 bg-transparent p-0 font-normal hover:bg-transparent">
                <Shield style={{ width: 10, height: 10 }} />
                {framework}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 18 }}>
          <p className="font-body font-[300]" style={{ fontSize: 12, color: "#B8BCC2" }}>
            {"© 2026 Silxor Group Holding."}
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/silxorllc/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Silxor on LinkedIn"
              className="flex items-center gap-2 font-body font-[300] transition-colors duration-200"
              style={{ fontSize: 12, color: "#B8BCC2" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F0F1F3")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#B8BCC2")}
            >
              <Linkedin style={{ width: 14, height: 14 }} strokeWidth={1.5} />
              {"LinkedIn"}
            </a>
            <a
              href="https://www.linkedin.com/in/ehsidawi"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body font-[300] transition-colors duration-200"
              style={{ fontSize: 12, color: "#B8BCC2" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F0F1F3")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#B8BCC2")}
            >
              {"Designed by Ehsan Nidawi"}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
