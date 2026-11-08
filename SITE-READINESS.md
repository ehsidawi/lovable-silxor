# Silxor site readiness report

## Delivery

All changes are in preview. Nothing was published.

### Pages added

- `/engagement`: assessment, project delivery, staff augmentation, managed service and advisory retainer.
- `/process`: discovery, design, build/validation, release/handover and operations.
- `/faq`: eight shared questions with visible native disclosures and matching FAQPage JSON-LD.
- `/careers`: expression of interest by email; no invented vacancies.
- `/terms`: informational website terms, separate service agreements and acceptable use.
- `/cookies`: local appearance preference, external assets and optional analytics explanation.
- `/security`: responsible disclosure contact, reporting scope and safe testing guidance.

Existing Privacy, Industries, Delivery and all nine service pages were expanded or corrected. Retail capabilities were added. Existing client statements from the supplied transcript were preserved; no new testimonials or results were created. Existing routes and the Telegram/WhatsApp assessment chooser remain intact.

### Shared design

Mineral light surfaces and carbon dark surfaces share electric lime as the signature accent. Syne display, DM Sans body and JetBrains Mono labels are loaded as compact variable font assets with preload and font-display swap. Global section spacing is 80px on desktop and 52px on mobile. Headings use fixed responsive type steps rather than viewport-scaled text. Controls use semantic tokens, visible focus and persistent light/dark preference. Skip navigation, mobile resource navigation and back-to-top are included. Purposeful intersection motion respects reduced motion; text is never hidden before JavaScript. Below-fold sections defer browser rendering through content-visibility while preserving complete static content.

### Search and AI discovery

Every public route renders unique titles, descriptions, canonical URLs and OG/Twitter text. Shared JSON-LD includes the requested Organization/ProfessionalService business identity and existing address/company profile. Deep routes have breadcrumbs. Service pages include Service and matching FAQPage schemas, direct-answer introductions, relevant service links and FAQ/industry/engagement guidance. There is no SearchAction because no site search exists.

The build-only prerender plugin emits full HTML and route-specific head metadata for 28 public routes and a 404 document. The same renderer was executed independently against the actual templates: 29 complete documents validated. No persistent runtime server was added. Generated files are capped at 100 routes. The existing Vite build invokes the plugin automatically; manual builds were not run because the preview harness owns them.

`robots.txt`, `sitemap.xml`, `llms.txt`, `llms-full.txt`, `services.json`, `/.well-known/security.txt` and `/security.txt` are present. AI crawler names requested by the owner are explicitly allowed. Sitemap dates are recorded only for the significant page-specific content changes in this pass; unchanged pages intentionally omit lastmod. Security contact uses hello@silxor.com and expires on 2027-11-08.

## Verification

- Automatic compilation log: build OK.
- Nine concrete data/rule tests passed, including existing service routes, IAM anchors, contact facts and engagement models.
- All 28 routes tested at 1280px desktop and 390px mobile: one h1, one main, no horizontal overflow and no automated WCAG A/AA findings.
- Additional dark-mode IAM accessibility check passed. Theme preference persisted after reload.
- Mobile resources navigation reached Engagement models; both assessment link targets remained correct.
- Internal page/asset links resolved, with no broken internal links detected.
- Browser runtime errors: none.
- Full HTML/head, JSON parsing, 28 sitemap entries, nine machine-readable services and native FAQ answers validated.

### Measured Lighthouse lab results

These are local **development-preview** measurements, not production scores or real-visitor performance. Vite development imports and tooling materially affect performance. Performance remains below the target and is not claimed solved.

| Page | View | Performance | Accessibility | Best practices | SEO | CLS |
|---|---|---:|---:|---:|---:|---:|
| Home | Desktop | 38 | 100 | 100 | 100 | 0 |
| Home | Mobile | 50 | 100 | 100 | 100 | 0 |
| Booking | Desktop | 64 | 100 | 100 | 100 | 0 |
| Booking | Mobile | 78 | 100 | 100 | 100 | 0 |

## Limits and follow-up

- Production Lighthouse and live hosting/deep-route HTML delivery were not measured because nothing was published. Static output generation itself was exercised and validated without executing a Vite production build manually.
- Lighthouse covers Home and Booking, not every route. Automated accessibility cannot prove full WCAG 2.2 AA compliance; assistive-technology and manual audits remain necessary.
- Telegram/WhatsApp URLs and chooser behavior were verified. Device app installation, privacy settings and actual external chat delivery are outside website control.
- AI crawler permission does not guarantee indexing or use by an AI provider.
- New legal/privacy/disclosure wording accurately describes implemented public-site behavior but should be reviewed by the business owner/legal counsel for contractual and jurisdiction-specific obligations. No legal jurisdiction, response deadline, reward or safe-harbor promise was invented.
- Fonts and other media use external asset delivery; its connection-data implications are disclosed. Optional custom analytics are not configured. Hosting platform telemetry was not independently audited.
