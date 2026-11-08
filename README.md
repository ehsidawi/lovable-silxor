# Silxor company website

Public enterprise technology consultancy website with Insights, service guidance and a private consultation form. No accounts or application features.

## Development

React 18, Vite, TypeScript and Tailwind CSS. Install with `bun install`, run `bun run dev`, and run tests with `bun test src/data src/lib`. The production build prerenders public route HTML and generates sitemap and AI discovery files.

## Content and design

Shared service data defines offerings and navigation. Global semantic tokens support light and dark appearance. Subset serif and sans fonts, static original artwork and lightweight SVG diagrams avoid heavy rendering libraries.

Only approved facts may be published. Case studies remain empty until the owner supplies facts and publication permission. Founder biography remains hidden until supplied.

## Consultations

`/book` submits to the validated public function. Requests are stored privately, with server validation, honeypot protection and atomic hourly spam limits. Public visitors have no direct table privileges. Notification emails need a verified sender domain.

## Configuration

Only public Cloud configuration belongs in browser variables. Private credentials belong in server secrets, never source code or browser variables. See SECURITY.md.
