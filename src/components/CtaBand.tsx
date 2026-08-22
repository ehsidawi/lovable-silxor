import { useNavigate } from "react-router-dom";
import { Mail } from "lucide-react";

type CtaBandProps = {
  eyebrow?: string;
  title?: string;
  lead?: string;
};

/** Closing conversion band reused at the bottom of interior pages. */
const CtaBand = ({
  eyebrow = "Engage",
  title = "Start With a Technical Assessment",
  lead = "No cost. Tell us what you are building and we scope how to deliver it.",
}: CtaBandProps) => {
  const navigate = useNavigate();

  return (
    <section className="r-section">
      <div className="container-content">
        <div className="r-panel flex flex-col items-center text-center" style={{ borderRadius: 40 }}>
          <span className="r-eyebrow">{eyebrow}</span>
          <h2 className="r-title" style={{ marginTop: 16, maxWidth: 620 }}>
            {title}
          </h2>
          <p className="r-lead" style={{ marginTop: 12, maxWidth: 520 }}>
            {lead}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3" style={{ marginTop: 26 }}>
            <button type="button" className="r-cta" onClick={() => navigate("/book")}>
              Book an Assessment
            </button>
            <a href="mailto:hello@silxor.com" className="r-cta-ghost">
              <Mail style={{ width: 14, height: 14, marginInlineEnd: 8 }} strokeWidth={1.6} />
              hello@silxor.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBand;
