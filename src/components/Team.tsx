import { User } from "lucide-react";
import { founderBio } from "@/data/leadership";

const Team = () => {
  return (
    <section id="about" className="r-section">
      <div className="container-content">
        <div className="flex flex-col items-start gap-4" style={{ marginBottom: 32 }}>
          <span className="r-eyebrow">Leadership</span>
          <h2 className="r-title">Founder</h2>
        </div>

        <div
          className="r-card flex items-center gap-4"
          style={{ padding: 20, borderRadius: 4, marginTop: 16, maxWidth: 420 }}
        >
          <div className="r-node" style={{ width: 52, height: 52 }}>
            <User style={{ width: 22, height: 22, color: "hsl(var(--foreground))" }} strokeWidth={1.5} />
          </div>
          <div>
            <div className="font-body uppercase" style={{ fontSize: 10, letterSpacing: 0, color: "hsl(var(--muted-foreground))" }}>
              Founder
            </div>
            <a
              href="https://www.linkedin.com/in/ehsidawi"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body font-[500] transition-colors duration-200 hover:text-forest"
              style={{ fontSize: 16, color: "hsl(var(--foreground))" }}
            >
              Ehsan Nidawi
            </a>
            {founderBio.trim() && <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{founderBio}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
