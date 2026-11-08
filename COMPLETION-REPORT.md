# Completion pass, preview only

## Delivered
- Home now has seven primary sections: hero, estate diagram, capability map, industries, delivery, technologies and closing consultation CTA. Product delivery details remain on the service page; the existing supplied testimonial remains on Clients rather than being repeated on Home.
- About has one staffing block, enterprise positioning and audience copy, and an unchanged founder name and LinkedIn destination. The biography is empty until approved text is supplied.
- Six original evergreen Insights articles have reading time, related services, author Silxor, Article and BreadcrumbList data, internal links and discovery entries.
- Case studies use empty typed data. The empty route has an honest note, CTA and noindex. It stays outside navigation, sitemap and LLM discovery until entries are supplied.
- Engagement explains five commercial approaches and cost drivers without figures. Removed the old unsupported no cost assessment statement.
- Server consultation controls reserve hourly buckets atomically: five submissions per connection bucket, three per normalized email and sixty sitewide. Records hold keyed HMAC hashes. Failures return a friendly wait message and Retry-After. Reservations count attempts accepted by validation even if subsequent storage fails.
- Admin role storage, restricted inquiry read policies and status-only update privileges are installed. No user or admin grant was created.
- Consultation started/completed/submitted milestones are registered with only step numbers. Built-in page views are not duplicated. Removed the inactive external analytics loader. Privacy and storage notices now distinguish conversion properties from hosting connection metadata.
- New 1200 by 630 brand social preview is about 81 KB and served through an asset pointer. Its live metadata changes only after a future publish.
- Hero files reduced from about 99/26 KB to 62/17 KB. English font subsets reduce combined font payload from 102972 to 90096 bytes; variable weights retained. Removed four unused 3D dependencies, removed automatic background route warming, retained intent prefetch and below-fold content visibility.

## Verified
- Local mobile Lighthouse, same development environment: performance 53 to 54; accessibility 96 to 100; best practices 100 to 100; SEO 100 to 100. These are development measurements, not production scores or a significant proven speed improvement.
- All public sitemap routes checked for one heading, browser errors and internal destinations. No broken internal links found across 35 routes.
- Full static rendering verified for 36 routes including the empty case study page; case studies and admin excluded from sitemap.
- Real consultation submissions succeeded on desktop and phone in light and dark. Four stored test rows were confirmed and individually removed.
- Automated accessibility checks found no violations on Home, About, Book, Insights, one article, Case studies and Engagement. Manual screen reader coverage remains unverified.
- Visitor speed data is too sparse to assess performance: Home LCP p75 5638 ms from three readings; FCP p75 4102 ms from six readings; CLS p75 zero from four readings. No after visitor data exists because this pass is not published.

## Outstanding and limits
- Admin email login, bookings interface and CSV export await the mandatory decision: is profile data needed beyond email and the separately stored admin role? No authentication code or account was created before that answer.
- After the account exists, assign an admin by adding the account's Auth user UUID and role admin to user_roles through the private Cloud database editor. Never expose role assignment in the browser or allow self promotion.
- Hosted ingress IP-header sanitation is not documented in available authoritative sources. Connection buckets are supplementary, not a guaranteed unspoofable per-IP boundary. Email and global limits do not depend on that header. A documented trusted ingress is needed for a strict IP guarantee.
- Limit records expire logically after one hour. Records older than a day are physically removed on a later submission; no scheduled deletion was added.
- Conversion calls set no cookies and send no form properties. This does not establish that hosting infrastructure uses no cookies or processes no connection metadata.
- The monthly goal, prospects submitting a consultation request, is covered by project.consultation_submitted. Preview/production event delivery requires a real visitor trigger; localhost tracking is not collected.
- Owner email notifications still require a verified sender domain and activation of sending. Requests remain privately stored in consultation_requests, accessible through More, Database.
- Do not publish automatically. No publishing action was taken.