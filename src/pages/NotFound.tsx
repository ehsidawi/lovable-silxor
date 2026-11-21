import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import PageShell from "@/components/layout/PageShell";
import SmartLink from "@/components/SmartLink";
import { Button } from "@/components/ui/button";
export default function NotFound() {
  const { pathname } = useLocation();
  return (
    <PageShell
      title="Page Not Found | Silxor"
      description="This Silxor page is unavailable. Explore our services, read frequently asked questions or contact our team."
      path={pathname}
    >
      <Helmet>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <section className="ed-error">
        <div className="container-content">
          <p className="ed-error-number" aria-hidden="true">
            404
          </p>
          <h1>This page is not available.</h1>
          <p className="ed-lead mt-6">
            The address may have changed or the page may not exist. Continue
            from our homepage or find the service you need.
          </p>
          <Button asChild className="mt-8">
            <SmartLink to="/">Back to Home ↗</SmartLink>
          </Button>
          <nav aria-label="Helpful destinations" className="ed-guidance mt-8">
            <SmartLink to="/services">Explore our services</SmartLink>
            <SmartLink to="/faq">Frequently asked questions</SmartLink>
            <SmartLink to="/contact">Contact Silxor</SmartLink>
          </nav>
        </div>
      </section>
    </PageShell>
  );
}
