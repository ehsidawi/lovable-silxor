import { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import Breadcrumbs, { Crumb } from "@/components/Breadcrumbs";
import SmartLink from "@/components/SmartLink";
import { Button } from "@/components/ui/button";
import type { ServiceMedia } from "@/data/serviceMedia";
type PageHeroProps = { eyebrow: string; title: string; lead?: string; crumbs?: Crumb[]; primaryCta?: {label: string; to: string}; children?: ReactNode; media?: ServiceMedia; };
/** Rounded masthead tile: title column and a visual card (photo or initial monogram). */
const PageHero = ({eyebrow,title,lead,crumbs,primaryCta,children,media}:PageHeroProps) => (
  <section className={`page-hero ${media ? "page-hero-media" : ""}`}>
    <div className="container-content">
      {crumbs && <Breadcrumbs items={crumbs} />}
      <div className="page-hero-grid">
        <div className="flex flex-col">
          <span className="r-eyebrow self-start">{eyebrow}</span>
          <h1 className="mt-6 max-w-4xl">{title}</h1>
          {lead && <p className="r-lead mt-6 max-w-2xl">{lead}</p>}
          {children}
          <div className="mt-8 flex flex-wrap items-center gap-4"><Button asChild><SmartLink to={primaryCta?.to ?? "/book"}>{primaryCta?.label ?? "Book a Consultation"}<ArrowUpRight aria-hidden="true" /></SmartLink></Button><a href="mailto:hello@silxor.com" className="text-sm font-semibold underline underline-offset-4">hello@silxor.com</a></div>
        </div>
        <figure className="page-hero-visual" aria-hidden={media ? undefined : true}>
          {media ? <img src={media.src} srcSet={`${media.small} 768w, ${media.src} 1536w`} sizes="(min-width: 1024px) 40vw, 100vw" alt={media.alt} width={1536} height={1024} />
            : <div className="page-hero-rings">{[90, 70, 50, 30].map(s => <span key={s} style={{ width: `${s}%`, aspectRatio: "1" }} />)}<b>{title.trim().charAt(0)}</b></div>}
          <figcaption>{eyebrow}</figcaption>
        </figure>
      </div>
    </div>
  </section>
);
export default PageHero;
