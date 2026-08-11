import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import AssessmentForm from "@/components/AssessmentForm";


const CAL_LINK = "ehsidawi/60";
const CAL_NAMESPACE = "assessment";

const BookAssessment = () => {

  useEffect(() => {
    // Load Cal.com embed script once
    (function (C: any, A: string, L: string) {
      const p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      const d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          const cal = C.Cal;
          const ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api: any = function () {
              p(api, arguments);
            };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(window as any, "https://app.cal.com/embed/embed.js", "init");

    const Cal = (window as any).Cal;
    Cal("init", CAL_NAMESPACE, { origin: "https://app.cal.com" });

    Cal.config = Cal.config || {};
    Cal.config.forwardQueryParams = true;

    Cal.ns[CAL_NAMESPACE]("inline", {
      elementOrSelector: "#silxor-cal-inline",
      config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
      calLink: CAL_LINK,
    });

    Cal.ns[CAL_NAMESPACE]("ui", {
      cssVarsPerTheme: {
        light: { "cal-brand": "#000000" },
        dark: { "cal-brand": "#ffffff" },
      },
      hideEventTypeDetails: false,
      layout: "month_view",
    });
  }, []);

  return (
    <div className="flex flex-col" style={{ minHeight: "100vh", backgroundColor: "#141414", color: "#FFFFFF" }}>
      {/* Header bar */}
      <header
        className="functional-glass"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          padding: "16px clamp(20px, 5vw, 48px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <Link
          to="/"
          className="font-mono"
          style={{
            fontSize: 12,
            letterSpacing: "0.2em",
            color: "#F0F1F3",
            textTransform: "uppercase",
            fontWeight: 700,
          }}
        >
          ← {"Back to Silxor"}
        </Link>
        <span
          className="font-mono"
          style={{
            fontSize: 11,
            letterSpacing: "0.2em",
            color: "#B8BCC2",
            textTransform: "uppercase",
          }}
        >
          {"SILXOR // BOOKING"}
        </span>
      </header>

      <main className="flex-1">
      <section style={{ padding: "40px clamp(20px, 5vw, 48px) 20px", maxWidth: 1200, margin: "0 auto" }}>
        <div className="section-eyebrow">{"SCHEDULE"}</div>
        <h1
          className="font-mono font-[700]"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            lineHeight: 1,
            letterSpacing: "-0.03em",
            color: "#FFFFFF",
            marginBottom: 12,
          }}
        >
          {"Book an Assessment"}
        </h1>
        <p
          className="font-body font-[300]"
          style={{
            fontSize: 16,
            lineHeight: 1.7,
            color: "#F0F1F3",
            maxWidth: 640,
            marginBottom: 8,
          }}
        >
          {"30 minutes with a senior Silxor engineer. No cost, no obligation."}
        </p>
      </section>

      {/* Cal.com themed frame */}
      <section style={{ padding: "0 clamp(20px, 5vw, 48px) 44px", maxWidth: 1200, margin: "0 auto" }}>
        <Card
          className="rounded-none border-0 bg-transparent text-inherit shadow-none"
          style={{
            position: "relative",
            border: "1px solid rgba(255,255,255,0.10)",
            backgroundColor: "#14171F",
            padding: 12,
          }}
        >

          {/* Frame chrome */}
          <div
            className="font-mono"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: 10,
              letterSpacing: "0.2em",
              color: "#B8BCC2",
              textTransform: "uppercase",
              padding: "4px 8px 12px",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              marginBottom: 12,
            }}
          >
            <span>{"CAL // ASSESSMENT"}</span>
            <span style={{ color: "#F0F1F3" }} className="animate-pulse">
              LIVE ●
            </span>
          </div>

          <div
            id="silxor-cal-inline"
            style={{
              width: "100%",
              minHeight: 640,
              overflow: "auto",
              backgroundColor: "#141414",
            }}
          />
        </Card>


        <p
          className="font-mono"
          style={{
            fontSize: 10,
            letterSpacing: "0.2em",
            color: "#B8BCC2",
            textTransform: "uppercase",
            marginTop: 16,
            textAlign: "center",
          }}
        >
          {"Trouble booking? Email hello@silxor.com"}
        </p>
      </section>

      <section style={{ padding: "0 clamp(20px, 5vw, 48px) 44px", maxWidth: 800, margin: "0 auto" }}>
        <AssessmentForm />
      </section>
      </main>
    </div>
  );
};

export default BookAssessment;
