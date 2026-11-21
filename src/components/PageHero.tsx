import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import Breadcrumbs, { Crumb } from "@/components/Breadcrumbs";
import SmartLink from "@/components/SmartLink";
import { Button } from "@/components/ui/button";
import type { ServiceMedia } from "@/data/serviceMedia";
type PageHeroProps = { eyebrow: string; title: string; lead?: string; crumbs?: Crumb[]; primaryCta?: { label: string; to: string }; children?: ReactNode; media?: ServiceMedia; };
/** Editorial masthead: breadcrumb, label, serif title and an optional framed illustration. */
const PageHero = ({ eyebrow, title, lead, crumbs, primaryCta, children, media }: PageHeroProps) => (
  <section className="page-hero">
    <div className="container-content">
      {crumbs && <Breadcrumbs items={crumbs} />}
      <div className={`page-hero-grid ${media ? "" : "page-hero-grid--solo"}`}>
        <div className="flex flex-col">
          <span className="mx-label">{eyebrow}</span>
          <h1 className="mt-5 max-w-4xl">{title}</h1>
          {lead && <p className="r-lead mt-6 max-w-2xl">{lead}</p>}
          {children}
          <div className="mt-9 flex flex-wrap items-center gap-6"><Button asChild><SmartLink to={primaryCta?.to ?? "/book"}>{primaryCta?.label ?? "Book a Consultation"}<ArrowRight aria-hidden="true" /></SmartLink></Button><a href="mailto:hello@silxor.com" className="mx-inline-link">hello@silxor.com</a></div>
        </div>
        {media && <figure className="page-hero-visual"><img src={media.src} srcSet={`${media.small} 768w, ${media.src} 1536w`} sizes="(min-width: 1024px) 40vw, 100vw" alt={media.alt} width={1536} height={1024} /></figure>}
      </div>
    </div>
  </section>
);
export default PageHero;
