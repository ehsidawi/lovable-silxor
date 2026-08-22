/**
 * Central registry of lazy route loaders.
 *
 * The same loader reference is used by React.lazy in App.tsx and by the
 * prefetch helpers below, so a prefetched chunk is already resolved (module
 * imports are cached by the bundler) by the time the user actually navigates.
 */
export const routeLoaders = {
  "/services": () => import("@/pages/ServicesIndex"),
  "/services/:slug": () => import("@/pages/ServiceDetail"),
  "/industries": () => import("@/pages/IndustriesPage"),
  "/delivery": () => import("@/pages/DeliveryPage"),
  "/clients": () => import("@/pages/ClientsPage"),
  "/about": () => import("@/pages/AboutPage"),
  "/contact": () => import("@/pages/ContactPage"),
  "/book": () => import("@/pages/BookAssessment"),
  "/partners": () => import("@/pages/Partners"),
  "/privacy": () => import("@/pages/PrivacyPolicy"),
  "/compliance": () => import("@/pages/ComplianceDoc"),
  "/sla": () => import("@/pages/SLADoc"),
  "*": () => import("@/pages/NotFound"),
} as const;

const started = new Set<string>();

/** Resolve a concrete pathname to its registry key. */
function keyFor(path: string): keyof typeof routeLoaders | null {
  const clean = path.split("#")[0].split("?")[0];
  if (clean in routeLoaders) return clean as keyof typeof routeLoaders;
  if (clean.startsWith("/services/")) return "/services/:slug";
  return null;
}

/** Warm the chunk for a route. Safe to call repeatedly; runs at most once. */
export function prefetchRoute(path: string) {
  const key = keyFor(path);
  if (!key || started.has(key)) return;
  started.add(key);
  // Never let a prefetch failure surface as an unhandled rejection.
  routeLoaders[key]().catch(() => started.delete(key));
}

/** Warm the routes users reach most often, once the browser is idle. */
export function prefetchPrimaryRoutes() {
  const run = () => {
    ["/services", "/services/:slug", "/contact", "/book"].forEach((p) =>
      prefetchRoute(p === "/services/:slug" ? "/services/product-team" : p)
    );
  };
  if (typeof window === "undefined") return;
  const ric = (window as unknown as { requestIdleCallback?: (cb: () => void) => number })
    .requestIdleCallback;
  if (ric) ric(run);
  else window.setTimeout(run, 1200);
}

/** Props to spread on any element that should prefetch on user intent. */
export function prefetchHandlers(to: string) {
  const warm = () => prefetchRoute(to);
  return {
    onMouseEnter: warm,
    onFocus: warm,
    onTouchStart: warm,
  };
}
