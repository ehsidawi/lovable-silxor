import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

type PageShellProps = {
  title: string;
  description: string;
  path: string;
  children: ReactNode;
};

/** Shared page frame: SEO head, navbar, main landmark, footer. */
const PageShell = ({ title, description, path, children }: PageShellProps) => (
  <div className="min-h-screen">
    <Seo title={title} description={description} path={path} />
    <Navbar />
    <main id="main" tabIndex={-1} className="outline-none">
      {children}
    </main>
    <Footer />
  </div>
);

export default PageShell;
