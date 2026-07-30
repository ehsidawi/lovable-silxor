import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404: route not found:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="section-spacing" style={{ paddingTop: 140, paddingBottom: 120 }}>
        <div className="container-content" style={{ maxWidth: 640, margin: "0 auto" }}>
          <div className="section-eyebrow">ERROR 404</div>
          <h1 className="font-display font-[700]" style={{ fontSize: 42, lineHeight: 1.15, color: "#FFFFFF", marginBottom: 12 }}>
            This page is not available
          </h1>
          <p className="font-body font-[300]" style={{ fontSize: 16, color: "#B8BCC2", lineHeight: 1.7, marginBottom: 32 }}>
            The address you requested does not exist or has moved. Return to the homepage or contact our team and we will point you to the right resource.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/"
              className="font-mono font-[400] uppercase transition-all duration-200"
              style={{
                fontSize: 11,
                letterSpacing: "0.12em",
                backgroundColor: "#F0F1F3",
                color: "#0B0B0B",
                padding: "14px 28px",
                borderRadius: 2,
              }}
            >
              Back to Home
            </Link>
            <a
              href="mailto:contact@silxor.com?subject=Silxor%20-%20Website%20Inquiry"
              className="font-mono font-[400] uppercase transition-all duration-200"
              style={{
                fontSize: 11,
                letterSpacing: "0.12em",
                color: "#F0F1F3",
                border: "1px solid rgba(255,255,255,0.14)",
                padding: "14px 28px",
                borderRadius: 2,
              }}
            >
              Contact Silxor
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default NotFound;
