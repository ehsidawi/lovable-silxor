- Keep the homepage hero isolated in `src/components/ui/prisma-hero.tsx` and render it through `HomeHero`; this preserves the existing multi-page shell and navigation while allowing the hero to change independently.
- Serve transformed video media through Lovable asset pointers, not external hotlinks or checked-in video files; this keeps the site self-contained and lightweight.
- Proxy asset pointers to the public asset endpoint only during local development; Vite otherwise treats those paths as HTML fallback instead of media.
- Express all page visual roles through the global semantic theme tokens; this keeps the enterprise identity consistent across existing routes.
- Keep the homepage media lightweight and static in the critical path; this avoids autoplay failures and GPU-heavy first loads.

- Keep service content and the primary navigation pillar taxonomy in shared service data; this preserves legacy detail routes while expanding enterprise IT coverage.
- Reuse the text-only technology list across home, services and the existing platforms route; this prevents inconsistent vendor relationship claims.
