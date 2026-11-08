import { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import Breadcrumbs, { Crumb } from "@/components/Breadcrumbs";
import SmartLink from "@/components/SmartLink";
import { Button } from "@/components/ui/button";
type PageHeroProps = { eyebrow: string; title: string; lead?: string; crumbs?: Crumb[]; primaryCta?: {label: string; to: string}; children?: ReactNode; };
const PageHero = ({eyebrow,title,lead,crumbs,primaryCta,children}:PageHeroProps) => (
  <section className="page-hero"><div className="container-content">
    {crumbs && <div className="mb-7"><Breadcrumbs items={crumbs} /></div>}
    <span className="r-eyebrow">{eyebrow}</span><h1 className="mt-5 max-w-4xl font-display font-bold leading-[1.08]">{title}</h1>
    {lead && <p className="r-lead mt-5 max-w-2xl">{lead}</p>}{children}
    <div className="mt-8 flex flex-wrap items-center gap-4"><Button asChild className="h-12 rounded-sm px-6"><SmartLink to={primaryCta?.to ?? "/book"}>{primaryCta?.label ?? "Book a Consultation"}<ArrowUpRight aria-hidden="true" /></SmartLink></Button><a href="mailto:hello@silxor.com" className="text-sm font-medium underline underline-offset-4">hello@silxor.com</a></div>
  </div></section>
);
export default PageHero;
