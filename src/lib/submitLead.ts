/**
 * Integration-ready lead submission adapter.
 *
 * No CRM / email / backend credentials are configured in this repository, so the
 * default adapter DOES NOT pretend a submission succeeded. It returns a
 * `fallback` result and the UI tells the visitor to email us directly.
 *
 * TODO (owner): pick one integration and configure it.
 *   1. HTTP endpoint  -> set VITE_LEAD_ENDPOINT to a POST URL (CRM webhook,
 *      form service, or your own API). JSON body = LeadPayload.
 *   2. Lovable Cloud   -> replace `postToEndpoint` with an edge function call
 *      (`supabase.functions.invoke("submit-lead", { body: payload })`) and keep
 *      all secrets (CRM key, SMTP, Resend key) server side.
 *
 * Never put private API keys in this file or in any VITE_* variable: everything
 * prefixed with VITE_ is shipped to the browser.
 */

export interface LeadPayload {
  name: string;
  organization: string;
  email: string;
  phone?: string;
  interest: string;
  summary: string;
  timeline: string;
  consent: boolean;
  /** Honeypot value. Must be empty for a genuine submission. */
  company_website?: string;
  locale: string;
  submittedAt: string;
}

export type LeadResult =
  | { status: "ok" }
  | { status: "fallback"; mailtoHref: string }
  | { status: "error"; message: string };

/** Hard limits mirrored by the client-side validation. */
export const LEAD_LIMITS = {
  name: 80,
  organization: 120,
  email: 254,
  phone: 32,
  summary: 1200,
} as const;

const CONTACT_EMAIL = "hello@silxor.com";

const clean = (value: string, max: number) =>
  value.replace(/[\u0000-\u001F\u007F]/g, " ").trim().slice(0, max);

export function buildMailtoHref(payload: LeadPayload): string {
  const subject = `Assessment request — ${clean(payload.organization, LEAD_LIMITS.organization) || "New enquiry"}`;
  const body = [
    `Name: ${clean(payload.name, LEAD_LIMITS.name)}`,
    `Organization: ${clean(payload.organization, LEAD_LIMITS.organization)}`,
    `Work email: ${clean(payload.email, LEAD_LIMITS.email)}`,
    payload.phone ? `Phone: ${clean(payload.phone, LEAD_LIMITS.phone)}` : null,
    `Service interest: ${payload.interest}`,
    `Timeline: ${payload.timeline}`,
    "",
    "Project summary:",
    clean(payload.summary, LEAD_LIMITS.summary),
  ]
    .filter(Boolean)
    .join("\n");

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

async function postToEndpoint(endpoint: string, payload: LeadPayload): Promise<LeadResult> {
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      return { status: "error", message: `Request failed (${response.status}).` };
    }
    return { status: "ok" };
  } catch {
    return { status: "error", message: "Network request failed." };
  }
}

export async function submitLead(payload: LeadPayload): Promise<LeadResult> {
  // Silently drop bot submissions that filled the honeypot.
  if (payload.company_website) return { status: "ok" };

  const endpoint = import.meta.env.VITE_LEAD_ENDPOINT as string | undefined;
  if (endpoint) return postToEndpoint(endpoint, payload);

  return { status: "fallback", mailtoHref: buildMailtoHref(payload) };
}
