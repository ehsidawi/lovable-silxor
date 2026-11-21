import type { ReactNode } from "react";
import Breadcrumbs, { type Crumb } from "@/components/Breadcrumbs";
import SmartLink from "@/components/SmartLink";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import type { ServiceMedia } from "@/data/serviceMedia";
type Props = {
  eyebrow: string;
  title: string;
  lead?: string;
  crumbs?: Crumb[];
  primaryCta?: { label: string; to: string };
  children?: ReactNode;
  media?: ServiceMedia;
};
export default function PageHero({
  eyebrow,
  title,
  lead,
  crumbs,
  primaryCta,
  children,
  media,
}: Props) {
  return (
    <section
      className={`ed-page-opening ${media ? "ed-page-opening--media" : ""}`}
    >
      <div className="container-content">
        {crumbs && <Breadcrumbs items={crumbs} />}
        <p className="ed-kicker">{eyebrow}</p>
        <div className="ed-page-composition">
          <h1>{title}</h1>
          <div className="ed-page-intro">
            {lead && <p>{lead}</p>}
            {children}
            {primaryCta && (
              <Button asChild>
                <SmartLink to={primaryCta.to}>
                  {primaryCta.label}
                  <ArrowUpRight aria-hidden="true" />
                </SmartLink>
              </Button>
            )}
          </div>
        </div>
        {media && (
          <figure className="ed-page-photo">
            <img
              src={media.src}
              srcSet={`${media.small} 768w, ${media.src} 1536w`}
              sizes="(min-width: 1024px) 1100px, 100vw"
              alt={media.alt}
              width={1536}
              height={1024}
            />
            <figcaption>
              Illustrative study. Not a client environment.
            </figcaption>
          </figure>
        )}
      </div>
    </section>
  );
}
