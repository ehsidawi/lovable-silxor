import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const NotFound = () => {


  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Page Not Found | Silxor</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <Navbar />
      <main id="main">
        <section className="section-spacing" style={{ paddingTop: 140, paddingBottom: 120 }}>
          <div className="container-content" style={{ maxWidth: 640, margin: "0 auto" }}>
            <div className="section-eyebrow">{"ERROR 404"}</div>
            <h1
              className="font-display font-[700]"
              style={{ fontSize: 42, lineHeight: 1.15, color: "#FFFFFF", marginBottom: 12 }}
            >
              {"This page is not available"}
            </h1>
            <p
              className="font-body font-[300]"
              style={{
                fontSize: 16,
                color: "#B8BCC2",
                lineHeight: 1.7,
                marginBottom: 32,
                textAlign: "start",
              }}
            >
              {"The address you requested does not exist or has moved. Try one of the links below, or contact our team and we will point you to the right resource."}
            </p>
            <nav
              aria-label={"Helpful links"}
              className="flex flex-wrap gap-3"
            >
              <Link to="/" className="r-cta">
                {"Back to Home"}
              </Link>
              <Link to="/services" className="r-cta-ghost">
                {"Explore Services"}
              </Link>

              <Link to="/book" className="r-cta-ghost">
                {"Book an Assessment"}
              </Link>

            </nav>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
