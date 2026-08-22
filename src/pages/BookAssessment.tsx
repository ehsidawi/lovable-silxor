import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { CAL_LINK, getCalNamespace } from "@/lib/cal";

const ELEMENT_ID = "silxor-cal-assessment";

const BookAssessment = () => {
  useEffect(() => {
    const cal = getCalNamespace();
    cal("inline", {
      elementOrSelector: `#${ELEMENT_ID}`,
      config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
      calLink: CAL_LINK,
    });

    const host = document.getElementById(ELEMENT_ID);
    return () => {
      // Remove the injected iframe so a remount re-embeds cleanly.
      if (host) host.innerHTML = "";
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Seo title={"Book an Assessment | Silxor"} description={"Schedule a technical assessment with Silxor to scope architecture, cloud, security, identity, or product delivery work."} path="/book" />
      <Navbar />
      <main id="main" tabIndex={-1} className="outline-none">
        <section className="r-section">
          <div className="container-content">
            <span className="r-eyebrow">Schedule</span>
            <h1 className="r-title" style={{ marginTop: 16 }}>
              Book an Assessment
            </h1>
            <p className="r-lead" style={{ marginTop: 12, maxWidth: 620 }}>
              A short technical discovery with a senior Silxor engineer. No cost. No obligation.
            </p>

            <div
              className="r-panel"
              style={{ marginTop: 32, padding: "clamp(8px, 2vw, 20px)", overflow: "hidden" }}
            >
              <div
                id={ELEMENT_ID}
                style={{ width: "100%", minHeight: "clamp(600px, 85vh, 900px)", overflow: "auto" }}
              />
            </div>

            <p
              className="font-mono"
              style={{
                fontSize: 10,
                letterSpacing: "0.2em",
                color: "#B8BCC2",
                textTransform: "uppercase",
                marginTop: 16,
              }}
            >
              Trouble booking? Email{" "}
              <a href="mailto:hello@silxor.com" style={{ color: "#F0F1F3" }}>
                hello@silxor.com
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BookAssessment;
