# Silxor — Original Design Website Template

The Silxor marketing site: a premium monochrome, industrial/technical React
template. English only (LTR).

Repository: https://github.com/ehsidawi/silxor-og-wbs

---

## Brand

- **Name:** Silxor (legal entity: Silxor Group Holding)
- **Positioning:** enterprise technology, cybersecurity, cloud and
  infrastructure, private AI, identity and access, managed services
- **Address:** 801 Barton Springs Rd, Austin, TX 78704
- **Contact:** hello@silxor.com
- **LinkedIn:** https://www.linkedin.com/company/silxorllc/

### Design system

| Token | Value |
| --- | --- |
| Background (matte black) | `#141414` |
| Surface (graphite) | `#25282C` |
| Primary text (stainless) | `#F0F1F3` / `#FFFFFF` |
| Muted text (titanium) | `#B8BCC2` |
| Radius | 2–4px (near square) |

Typography: **Work Sans** (body), **JetBrains Mono** (labels, data, display).
Motion: framer-motion, always gated on
`prefers-reduced-motion`.

---

## Architecture

```
src/
  components/        section components + shadcn/ui primitives (ui/)
  lib/
    analytics.ts     privacy-conscious analytics hook (disabled by default)
    submitLead.ts    integration-ready form submission adapter
  pages/             Index, Solutions, Partners, BookAssessment, legal, 404
public/              robots.txt, sitemap.xml, favicon, manifest
index.html           SEO metadata + JSON-LD (Organization, WebSite, Service, Breadcrumbs)
```

Stack: React 18, Vite 5, TypeScript, Tailwind CSS 3, shadcn/ui, react-router,
framer-motion, react-hook-form + zod.

---


## Local setup

```bash
npm install
cp .env.example .env   # fill in what you need
npm run dev            # http://localhost:8080
npm run build          # production build to dist/
```

## Deployment

Any static host (Lovable publish, Vercel, Netlify, S3+CloudFront). Configure an
SPA rewrite so all paths serve `index.html`.

---

## Environment variables

All `VITE_*` values are **public** — they ship inside the browser bundle.

| Variable | Required | Purpose |
| --- | --- | --- |
| `VITE_SUPABASE_URL` / `VITE_SUPABASE_PUBLISHABLE_KEY` / `VITE_SUPABASE_PROJECT_ID` | no | Lovable Cloud client (publishable keys only) |
| `VITE_LEAD_ENDPOINT` | no | POST URL that receives assessment form submissions |
| `VITE_ANALYTICS_ID` | no | Enables analytics; unset = no tracking at all |
| `VITE_ANALYTICS_SRC` | no | Analytics script URL (e.g. Plausible) |

Private keys (CRM tokens, SMTP/Resend keys, service-role keys) must live in
server-side secrets only — never in `.env` or any `VITE_` variable.

---

## Form / CRM / email integration

`src/lib/submitLead.ts` is the single submission adapter. With no configuration
it returns `{ status: "fallback" }` and the UI honestly tells the visitor that
no submission backend is connected, offering a prepared email instead. It never
fakes a success.

To connect it:

1. **HTTP endpoint** — set `VITE_LEAD_ENDPOINT` to a CRM webhook or your own
   API. The JSON body is the `LeadPayload` interface.
2. **Lovable Cloud edge function** — replace `postToEndpoint` with
   `supabase.functions.invoke("submit-lead", { body: payload })` and keep the
   CRM/email credentials in server-side secrets.

Booking is handled by the Cal.com embed on `/book` (`ehsidawi/60`).

## Analytics

`src/lib/analytics.ts` is inert until `VITE_ANALYTICS_ID` is set. It records
page views on route change and named events only; it never sends form contents,
emails, or query strings.

## SEO

Static metadata lives in `index.html` (title, description, canonical, OG,
Twitter, favicon, JSON-LD). `public/robots.txt` allows all crawlers and points
at `public/sitemap.xml`, which lists every public route. Update the sitemap when
routes change. This is a client-rendered SPA, so per-route social previews are
not visible to non-JS crawlers.

---

## Security notes

- The frontend provides **no** server-side security. Any endpoint you connect
  must do its own authentication, authorization, rate limiting, and validation.
- Form input is length-limited and control characters are stripped before use;
  treat this as UX hygiene, not as sanitization for a backend.
- Form contents are never logged to the console or to analytics.
- External links use `rel="noopener noreferrer"`.
- Only publishable keys are committed. See `SECURITY.md` for reporting.

---

## Content verification checklist

The site deliberately avoids unverifiable claims. Before publishing, the owner
must supply evidence for anything they want to state as fact:

- [ ] Certifications actually held (ISO 27001, SOC 2, etc.) with dates and auditor
- [ ] Data center tier / facility and operator, if it should be named
- [ ] Contractual uptime / latency / response-time figures per service tier
- [ ] Named clients, logos, case studies, and written permission to use them
- [ ] Testimonials with attribution and approval
- [ ] Real team members, titles, and bios
- [ ] Partner and technology-vendor relationships with permission to display
- [ ] Company facts: founding year, headcount, coverage hours, jurisdictions
- [ ] Legal review of the SLA, compliance, and privacy pages

Until provided, the corresponding sections stay capability-oriented or are
clearly labeled as illustrative.
