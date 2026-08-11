import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {

  const linkBase: React.CSSProperties = {
    fontSize: 11,
    letterSpacing: "0.12em",
    padding: "14px 28px",
    borderRadius: 2,
    minHeight: 44,
    display: "inline-flex",
    alignItems: "center",
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main id="main" className="flex-1">
        <section className="section-spacing" style={{ paddingTop: 104, paddingBottom: 64 }}>
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
              <Button
                asChild
                variant="ghost"
                className="h-auto p-0 rounded-none font-normal hover:bg-transparent hover:text-inherit"
              >
                <Link
                  to="/"
                  className="font-mono font-[400] uppercase transition-all duration-200"
                  style={{ ...linkBase, backgroundColor: "#F0F1F3", color: "#0B0B0B" }}
                >
                  {"Back to Home"}
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="h-auto p-0 rounded-none font-normal hover:bg-transparent hover:text-inherit"
              >
                <Link
                  to="/#capabilities"
                  className="font-mono font-[400] uppercase transition-all duration-200"
                  style={{
                    ...linkBase,
                    color: "#F0F1F3",
                    border: "1px solid rgba(255,255,255,0.14)",
                  }}
                >
                  {"Explore Solutions"}
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="h-auto p-0 rounded-none font-normal hover:bg-transparent hover:text-inherit"
              >
                <Link
                  to="/book"
                  className="font-mono font-[400] uppercase transition-all duration-200"
                  style={{
                    ...linkBase,
                    color: "#F0F1F3",
                    border: "1px solid rgba(255,255,255,0.14)",
                  }}
                >
                  {"Book an Assessment"}
                </Link>
              </Button>
            </nav>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
