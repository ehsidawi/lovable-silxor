# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in this template, please email
**contact@silxor.com** with a description and reproduction steps.

Please do **not** open a public GitHub issue for security problems.

We aim to acknowledge reports within 72 hours and to publish a fix or
mitigation within 30 days of confirming a valid report.

## Frontend security scope

This is a static, client-rendered marketing site. It provides **no** server-side
security guarantees. Any endpoint connected via `VITE_LEAD_ENDPOINT` or an edge
function must implement its own authentication, authorization, rate limiting,
spam protection, and server-side validation.

Client-side measures in this repo are UX hygiene only:

- Length limits and control-character stripping on form input
- A honeypot field on the assessment form
- No logging of form contents to the console or analytics
- `rel="noopener noreferrer"` on all external links
- Analytics fully disabled unless an analytics id is configured

## Secrets & Credentials

This repository must never contain:

- Private API keys, secret tokens, or passwords
- `.env` files with real credentials (only `.env.example` is tracked)
- Customer data, contracts, or internal documentation

Every `VITE_*` variable is bundled into the browser build and is therefore
public. Only **publishable / anon** keys may appear in committed configuration.

## Supported Versions

Only the `main` branch receives security updates.
