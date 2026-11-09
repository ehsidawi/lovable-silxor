import { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import Breadcrumbs, { Crumb } from "@/components/Breadcrumbs";
import SmartLink from "@/components/SmartLink";
import { Button } from "@/components/ui/button";
import type { ServiceMedia } from "@/data/serviceMedia";
type PageHeroProps = { eyebrow: string; title: string; lead?: string; crumbs?: Crumb[]; primaryCta?: {label: string; to: string}; children?: ReactNode; media?: ServiceMedia; };
const PageHero = ({eyebrow,title,lead,crumbs,primaryCta,children,media}:PageHeroProps) => (
  <section className={`page-hero relative isolate overflow-hidden ${media ? "page-hero-media" : ""}`}>
    {media && <><img src={media.src} srcSet={`${media.small} 768w, ${media.src} 1536w`} sizes="100vw" alt={media.alt} width={1536} height={1024} className="absolute inset-0 -z-20 h-full w-full object-cover object-right" /><div className="hero-shade absolute inset-0 -z-10" aria-hidden="true" /></>}
    <div className="container-content">
    {crumbs && <div className="mb-5"><Breadcrumbs items={crumbs} /></div>}
    <span className="r-eyebrow">{eyebrow}</span><h1 className="mt-5 max-w-4xl font-display font-bold leading-[1.08]">{title}</h1>
    {lead && <p className="r-lead mt-5 max-w-2xl">{lead}</p>}{children}
    <div className="mt-6 flex flex-wrap items-center gap-4"><Button asChild className="h-12 rounded-sm px-6"><SmartLink to={primaryCta?.to ?? "/book"}>{primaryCta?.label ?? "Book a Consultation"}<ArrowUpRight aria-hidden="true" /></SmartLink></Button><a href="mailto:hello@silxor.com" className="text-sm font-medium underline underline-offset-4">hello@silxor.com</a></div>
  </div></section>
);
export default PageHero;
