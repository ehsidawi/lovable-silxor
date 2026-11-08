# Website conventions

- Keep the homepage hero isolated in prisma-hero and rendered through HomeHero; preserve the multi-page shell.
- Use global semantic theme tokens and subset display/body fonts; keep public pages consistent without heavy graphics libraries.
- Serve media and fonts through asset pointers, proxied only in local development; avoid checked-in large binaries and hotlinks.
- Keep services, navigation pillars, methodology, FAQs and technology categories in shared data; avoid duplicated facts.
- Use official monochrome vendor marks with labels, fallbacks and the approved trademark disclaimer; never imply affiliation.
- Keep data-driven SVG diagrams accessible with unique title/description IDs, mobile layouts and visible summaries.
- Site is dark only with no theme toggle or theme storage; respect reduced motion and avoid tracking identifiers.
- Prerender public HTML and generate discovery files through the build-only plugin, capped at 100 pages; use lastmod only for documented significant page edits.
- Submit consultations only through the validated public function; no browser table privileges. Lazy-load the Cloud client only on submission.
- Keep browser/server consultation option IDs and schema limits aligned, with parity tests. Reserve hourly limits atomically with keyed hashes; forwarded connection metadata is supplementary.
- Keep Insights in shared typed article data with one index/detail template.
- Add case studies to src/data/caseStudies.ts only after owner facts and publication permission, with unique slug, title, summary, sections and service slugs; empty data hides discovery and navigation.
- Render founder biography only when approved text is supplied.
- Keep only reachable website UI and required tooling; no accounts, roles, login or custom conversion tracking.
