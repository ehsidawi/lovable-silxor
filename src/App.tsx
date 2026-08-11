import { Suspense, lazy, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import { trackPageView } from "@/lib/analytics";

// Noncritical routes are split out of the initial bundle.
const NotFound = lazy(() => import("./pages/NotFound"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const ComplianceDoc = lazy(() => import("./pages/ComplianceDoc"));
const SLADoc = lazy(() => import("./pages/SLADoc"));
const BookAssessment = lazy(() => import("./pages/BookAssessment"));
const Partners = lazy(() => import("./pages/Partners"));

const queryClient = new QueryClient();

const RouteEffects = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    trackPageView(pathname);
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return null;
};

const RouteFallback = () => (
  <div
    role="status"
    aria-live="polite"
    style={{ minHeight: "60vh", display: "grid", placeItems: "center", color: "#B8BCC2" }}
  >
    <span className="font-mono" style={{ fontSize: 11, letterSpacing: "0.2em" }}>
      LOADING…
    </span>
  </div>
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
