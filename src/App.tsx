import { Suspense, lazy, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import { trackPageView } from "@/lib/analytics";
import { scrollToHash } from "@/lib/hashNav";
import { routeLoaders } from "@/lib/routePrefetch";

// Noncritical routes are split out of the initial bundle. Loaders are shared
// with the prefetcher so hovered routes are already resolved on navigation.
const NotFound = lazy(routeLoaders["*"]);
const PrivacyPolicy = lazy(routeLoaders["/privacy"]);
const ComplianceDoc = lazy(routeLoaders["/compliance"]);
const SLADoc = lazy(routeLoaders["/sla"]);
const BookAssessment = lazy(routeLoaders["/book"]);
const Partners = lazy(routeLoaders["/partners"]);
const ServicesIndex = lazy(routeLoaders["/services"]);
const ServiceDetail = lazy(routeLoaders["/services/:slug"]);
const IndustriesPage = lazy(routeLoaders["/industries"]);
const DeliveryPage = lazy(routeLoaders["/delivery"]);
const ClientsPage = lazy(routeLoaders["/clients"]);
const AboutPage = lazy(routeLoaders["/about"]);
const ContactPage = lazy(routeLoaders["/contact"]);

const queryClient = new QueryClient();

const RouteEffects = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    trackPageView(pathname);
    if (hash) {
      // Wait a frame so the target section is mounted before scrolling.
      const id = window.setTimeout(() => {
        if (!scrollToHash(hash, "auto")) window.scrollTo({ top: 0, behavior: "auto" });
      }, 60);
      return () => window.clearTimeout(id);
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
};

const RouteFallback = () => (
  <div
    role="status"
    aria-live="polite"
    aria-label="Loading page"
    style={{ minHeight: "70vh" }}
  />
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <RouteEffects />
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<ServicesIndex />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/delivery" element={<DeliveryPage />} />
            <Route path="/clients" element={<ClientsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/compliance" element={<ComplianceDoc />} />
            <Route path="/sla" element={<SLADoc />} />
            <Route path="/book" element={<BookAssessment />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
