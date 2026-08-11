import { useLanguage } from "@/context/LanguageContext";

const domains = [
  "Cloud Architecture",
  "Cybersecurity",
  "Zero Trust",
  "Identity & Access Management",
  "Private AI",
  "DevSecOps",
  "Managed Services",
  "Data Protection",
  "Governance, Risk & Compliance",
  "Network Engineering",
  "Disaster Recovery",
  "Platform Engineering",
];

const StatsBar = () => {
  const { language, t, localeFont } = useLanguage();

  return (
    <section
      aria-label={t("Technology domains we work in", "المجالات التقنية التي نعمل بها")}
      style={{
        backgroundColor: "#25282C",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "28px 0",
        overflow: "hidden",
      }}
    >
      <div className="relative w-full">
        <div
          className="flex items-center whitespace-nowrap statsbar-track"
          style={{
            width: "max-content",
          }}
        >
          {[...domains, ...domains].map((name, index) => (
            <div key={index} className="flex items-center">
              <span
                className="font-mono font-[500] uppercase transition-colors duration-200 hover:text-white"
                style={{
                  fontSize: 15,
                  letterSpacing: "0.12em",
                  color: "#B8BCC2",
                  fontFamily: localeFont,
                  padding: "0 40px",
                }}
              >
                {name}
              </span>
              <span
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  backgroundColor: "rgba(240, 241, 243,0.35)",
                  flexShrink: 0,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .statsbar-track {
          animation: marquee 50s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .statsbar-track {
            animation: none;
            flex-wrap: wrap;
          }
        }
      `}</style>
    </section>
  );
};

export default StatsBar;
