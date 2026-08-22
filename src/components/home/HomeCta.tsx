import { useNavigate } from "react-router-dom";
import SmartLink from "@/components/SmartLink";
import { prefetchHandlers } from "@/lib/routePrefetch";

/** Final conversion band on the homepage. */
const HomeCta = () => {
  const navigate = useNavigate();

  return (
    <section className="r-section">
      <div className="container-content">
        <div
          className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-center"
          style={{
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 40,
            background:
              "linear-gradient(135deg, rgba(240,241,243,0.06) 0%, rgba(240,241,243,0.015) 60%, transparent 100%), #191B1F",
            padding: "clamp(26px, 3.6vw, 52px)",
          }}
        >
          <div>
            <span className="r-eyebrow">Engage</span>
            <h2 className="r-title" style={{ marginTop: 16, maxWidth: 560 }}>
              Start with a technical assessment.
            </h2>
            <p className="r-lead" style={{ marginTop: 12, maxWidth: 480 }}>
              Tell us what you are building. We scope how to architect, build, secure, and operate
              it, with one accountable team.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              className="r-cta"
              onClick={() => navigate("/book")}
              {...prefetchHandlers("/book")}
            >
              Book an Assessment
            </button>
            <SmartLink to="/contact" className="r-cta-ghost">
              Contact Silxor
            </SmartLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCta;
