/**
 * Cal.com embed loader. The embed script is injected at most once per page
 * load and the namespace is initialised a single time, so navigating between
 * routes or re-rendering never duplicates scripts or listeners.
 */

export const CAL_LINK = "silxor/assessment";
export const CAL_NAMESPACE = "assessment";
const CAL_ORIGIN = "https://app.cal.com";
const CAL_SCRIPT = "https://app.cal.com/embed/embed.js";

type CalApi = ((...args: unknown[]) => void) & {
  loaded?: boolean;
  ns?: Record<string, (...args: unknown[]) => void>;
  q?: unknown[];
  config?: Record<string, unknown>;
};

let initialised = false;

function bootstrap(): CalApi {
  const w = window as unknown as { Cal?: CalApi; document: Document };

  if (!w.Cal) {
    const push = (a: { q: unknown[] }, ar: unknown) => {
      a.q.push(ar);
    };
    const d = w.document;
    const cal = function (...args: unknown[]) {
      const self = w.Cal as CalApi;
      if (!self.loaded) {
        self.ns = {};
        self.q = self.q || [];
        d.head.appendChild(d.createElement("script")).src = CAL_SCRIPT;
        self.loaded = true;
      }
      if (args[0] === "init") {
        const api = function (...inner: unknown[]) {
          push(api as unknown as { q: unknown[] }, inner);
        } as CalApi;
        const namespace = args[1];
        api.q = api.q || [];
        if (typeof namespace === "string") {
          self.ns![namespace] = self.ns![namespace] || (api as (...a: unknown[]) => void);
          push(self.ns![namespace] as unknown as { q: unknown[] }, args);
          push(self as unknown as { q: unknown[] }, ["initNamespace", namespace]);
        } else {
          push(self as unknown as { q: unknown[] }, args);
        }
        return;
      }
      push(self as unknown as { q: unknown[] }, args);
    } as CalApi;
    w.Cal = cal;
  }

  return w.Cal!;
}

/** Initialises the Cal namespace + UI theme once and returns the namespace api. */
export function getCalNamespace() {
  const Cal = bootstrap();

  if (!initialised) {
    initialised = true;
    Cal("init", CAL_NAMESPACE, { origin: CAL_ORIGIN });
    Cal.config = Cal.config || {};
    Cal.config.forwardQueryParams = true;
    Cal.ns![CAL_NAMESPACE]("ui", {
      cssVarsPerTheme: {
        light: { "cal-brand": "#6d6d6d" },
        dark: { "cal-brand": "#fafafa" },
      },
      hideEventTypeDetails: false,
      layout: "month_view",
    });
  }

  return Cal.ns![CAL_NAMESPACE];
}
