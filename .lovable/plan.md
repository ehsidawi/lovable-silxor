
# Silxor Enterprise Expansion

Enhancement only. Keep matte black + stainless steel palette, JetBrains Mono + Work Sans typography, existing spacing, animations, and icons. No brand redesign.

## 1. Navigation (update `Navbar.tsx`)

Replace the current 5 links with 7 executive practices:

`Services` · `Industries` · `Partners` · `Experience` · `Insights` · `About` · `Contact`

- Desktop: keep the segmented monospaced style with numeric indices and scroll-spy where sections exist on `/`, and route links for new pages.
- Mobile: same panel, updated items.
- Keep the consultation CTA and scroll progress hairline.

## 2. Services — restructure into 4 Executive Practices

Rewrite `Services.tsx` as 4 large "practice" cards (Advisory & Strategy, Infrastructure & Cloud, Cybersecurity & GRC, Managed Services), each with a compact bullet grid of capabilities. Compact enterprise cards, hover elevation, premium icon per practice.

## 3. New page: `/solutions` — Banking & Government Solutions

Route added to `App.tsx`. Contents:

- Hero: `Enterprise Solutions for Banking, Digital Banking & Government` + subtitle.
- 6 solution cards: Digital Banking, Government, Financial Compliance, AI Platform, Infrastructure, Identity — each with a compact capability list.
- Animated KPI counters row: `100%`, `99.99%`, `24x7`, `Zero Trust`, `AI Powered`, `40+`.
- Horizontal capability infographic (steel-styled bar/rail with milestones).

## 4. New page: `/experience` — Representative Enterprise Experience

Route added to `App.tsx`. Never use "Clients."

- Hero: `Representative Enterprise Experience` + subtitle.
- Timeline-style card list with compact metadata rows only (Industry / Technology / Business Outcome / Scale / Architecture / Compliance) — no paragraphs.
- Featured card: Ally Financial — `Enterprise Identity Transformation for Digital Banking`, with highlight stats ($25M+, 4M+, 100K+, 3, 99.99%) and compliance/identity/security tag rows and outcome line.
- Remaining cards: IQ Group Holding, U.S. DHS – CISA, Austin International Airport, Tesla Gigafactory, National Youth Week, Meta, Google, Dell Technologies, Apple, U.S. Marine Corps — each with their listed compact tags.

## 5. New page: `/partners` — Technology Partners

Route added to `App.tsx`.

- Premium grayscale text-mark grid (no external logos): Microsoft, AWS, Google Cloud, Cisco, VMware, Dell, HPE, Palo Alto, Fortinet, CrowdStrike, CyberArk, SailPoint, Okta, HashiCorp, Splunk, ServiceNow, Red Hat, Nutanix, Docker, Kubernetes, Terraform, GitHub, Azure AI, OpenAI, Microsoft Fabric, Power BI.
- Grayscale wordmarks in steel/graphite cells; hover: brighten + subtle scale.

## 6. Executive Dashboard (new section on `/`)

New `ExecutiveDashboard.tsx` inserted on `Index.tsx` above `SelectedWork`:

- Animated counters: `$350M+`, `250K+`, `20+`, `15+`, `99.99%`, `24x7`, `100%`, `AI Enabled`.
- Circular progress rings (SVG) for key metrics.
- Horizontal progress bars for practice mix.
- Steel/matte cards, no bright colors.

## 7. Industries section (new on `/`)

New `Industries.tsx`: 14 compact visual cards (Government, Defense, Banking, Digital Banking, Financial Services, Healthcare, Energy, Manufacturing, Transportation, Airports, Retail, Education, Telecommunications, Critical Infrastructure). Icon + label only.

## 8. Why Silxor (new on `/`)

New `WhySilxor.tsx`: premium comparison table / capability strip — Strategy, Engineering, Security, Cloud, AI, Managed Services, 24x7, End-to-End, One Partner. Steel dividers, monospaced labels, quiet check marks.

## 9. Footer

Extend `Footer.tsx` with column groups: Industries, Partners, Insights, Careers, Compliance, Privacy, Security, Accessibility. Keep contact + branding untouched.

## Technical

- Files added: `src/pages/Solutions.tsx`, `src/pages/Experience.tsx`, `src/pages/Partners.tsx`, `src/components/ExecutiveDashboard.tsx`, `src/components/Industries.tsx`, `src/components/WhySilxor.tsx`, `src/components/AnimatedCounter.tsx` (IntersectionObserver counter used by dashboard/solutions).
- Files edited: `src/App.tsx` (routes), `src/components/Navbar.tsx` (nav items + route/section awareness), `src/components/Services.tsx` (4-practice restructure), `src/pages/Index.tsx` (insert new sections), `src/components/Footer.tsx` (columns).
- No color/typography/spacing token changes. Uses existing `hsl(var(--primary))`, steel `#C5C7CB`, graphite `#25282C`, matte `#0B0B0B`.
- All CTAs continue to route to `/book` or `mailto:contact@silxor.com`.
- Placeholder `/insights`, `/about`, `/industries`, `/careers` links: `Insights` and `About` route to on-page anchors for now; footer utility links point to existing legal pages where present, otherwise anchor to `/#about`. No new legal docs created.
- Accessibility: semantic headings, alt/aria for counters, prefers-reduced-motion respected for counters.

## Out of scope

- No color, font, or spacing changes.
- No new backend, forms, or auth.
- No real partner logos (text wordmarks only to stay legally safe, matching your note about representative experience).
