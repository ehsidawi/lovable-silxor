/**
 * Privacy conscious analytics hook.
 *
 * Disabled by default: nothing is loaded and no events are sent until an
 * analytics id is configured. No personal data, form contents, or query
 * strings are ever passed to a provider.
 *
 * TODO (owner): set VITE_ANALYTICS_ID (and optionally VITE_ANALYTICS_SRC for a
 * self hosted script, e.g. Plausible) in your deployment environment, then a
 * page_view is recorded on each route change.
 */

type EventProps = Record<string, string | number | boolean>;

const ANALYTICS_ID = import.meta.env.VITE_ANALYTICS_ID as string | undefined;
const ANALYTICS_SRC = import.meta.env.VITE_ANALYTICS_SRC as string | undefined;

export const analyticsEnabled = Boolean(ANALYTICS_ID);

let loaded = false;

function ensureLoaded() {
  if (!analyticsEnabled || loaded || typeof document === "undefined") return;
  loaded = true;
  if (!ANALYTICS_SRC) return;
  const script = document.createElement("script");
  script.defer = true;
  script.src = ANALYTICS_SRC;
  script.setAttribute("data-domain", ANALYTICS_ID!);
  document.head.appendChild(script);
}

export function trackPageView(path: string) {
  if (!analyticsEnabled) return;
  ensureLoaded();
  const w = window as unknown as { plausible?: (e: string, o?: unknown) => void };
  w.plausible?.("pageview", { u: path });
}

export function trackEvent(name: string, props?: EventProps) {
  if (!analyticsEnabled) return;
  ensureLoaded();
  const w = window as unknown as { plausible?: (e: string, o?: unknown) => void };
  w.plausible?.(name, props ? { props } : undefined);
}
