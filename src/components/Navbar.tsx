import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu } from "lucide-react";
import { useLocation } from "react-router-dom";
import SmartLink, { SmartNavLink } from "@/components/SmartLink";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetDescription, SheetTrigger } from "@/components/ui/sheet";
import { services, servicePillars } from "@/data/services";
import { resourceLinks } from "@/data/site";
import { caseStudies } from "@/data/caseStudies";

const links = [
  { label: "Industries", to: "/industries" }, { label: "Delivery", to: "/delivery" },
  { label: "Clients", to: "/clients" }, { label: "About", to: "/about" }, { label: "Contact", to: "/contact" },
  { label: "Insights", to: "/insights" },
  ...(caseStudies.length ? [{label:"Case studies",to:"/case-studies"}] : []),
];
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const location = useLocation();
  useEffect(() => { setMobileOpen(false); setMegaOpen(false); }, [location.pathname]);
  useEffect(() => {
    if (!megaOpen) return;
    const close = (e: KeyboardEvent) => { if (e.key === "Escape") setMegaOpen(false); };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [megaOpen]);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <a href="#main" className="skip-link">Skip to content</a>
      <nav aria-label="Primary" className="container-content flex h-20 items-center justify-between gap-5">
        <SmartLink to="/" aria-label="Silxor home" className="flex shrink-0 items-center gap-2.5">
          <span className="h-3 w-3 rounded-full bg-foreground" aria-hidden="true" />
          <span className="text-2xl font-semibold">Silxor</span>
        </SmartLink>
        <div className="hidden items-center gap-7 xl:flex">
          <div className="relative" onMouseEnter={() => setMegaOpen(true)} onMouseLeave={() => setMegaOpen(false)} onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setMegaOpen(false); }}>
            <Button variant="ghost" className="text-nav h-auto gap-1 px-0 text-base hover:bg-transparent hover:text-foreground" aria-expanded={megaOpen} aria-controls="services-menu" onClick={() => setMegaOpen(!megaOpen)}>
              Services <ChevronDown className="h-3 w-3" aria-hidden="true" />
            </Button>
            {megaOpen && <div id="services-menu" className="nav-shadow absolute -left-16 top-full w-[560px] rounded-3xl border border-border bg-card p-5">
              <div className="grid grid-cols-2 gap-1">
                {servicePillars.map((s) => <SmartLink key={s.slug} to={s.path} className="flex gap-3 rounded-2xl p-3 hover:bg-muted focus-visible:bg-muted">
                  <s.icon className="mt-0.5 h-4 w-4 shrink-0 text-forest" aria-hidden="true" />
                  <span className="text-sm font-medium">{s.navLabel}</span>
                </SmartLink>)}
              </div>
              <div className="mt-3 flex flex-wrap gap-4 border-t border-border pt-3">{services.filter(s => s.flagship || s.slug === "private-ai").map(s => <SmartLink key={s.slug} to={s.path} className="text-sm hover:underline">{s.navLabel}</SmartLink>)}</div>
              <SmartLink to="/services" className="mt-3 flex items-center justify-between border-t border-border pt-4 text-sm font-semibold">All services <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></SmartLink>
            </div>}
          </div>
          {links.map((l) => <SmartNavLink key={l.to} to={l.to} className={({isActive}) => `text-base font-medium transition-colors hover:text-foreground ${isActive ? "text-foreground" : "text-nav"}`}>{l.label}</SmartNavLink>)}
        </div>
        <div className="ml-auto flex items-center gap-2"><Button asChild className="hidden xl:inline-flex"><SmartLink to="/book">Book a Consultation <ArrowUpRight aria-hidden="true" /></SmartLink></Button></div>
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild><Button variant="outline" size="icon" aria-label="Open menu" className="min-h-11 min-w-11 xl:hidden"><Menu aria-hidden="true" /></Button></SheetTrigger>
          <SheetContent className="w-full overflow-y-auto sm:max-w-md">
            <SheetTitle className="text-2xl font-semibold">Silxor</SheetTitle><SheetDescription className="sr-only">Primary navigation</SheetDescription>
            <nav aria-label="Mobile" className="mt-8 flex flex-col gap-1">
              <SmartLink to="/services" className="border-b border-border py-3 font-semibold">All services</SmartLink>
              {servicePillars.map(s => <SmartLink key={s.slug} to={s.path} className="flex min-h-11 items-center gap-3 py-2 text-sm"><s.icon className="h-4 w-4 text-forest" aria-hidden="true" />{s.navLabel}</SmartLink>)}
              {services.filter(s => s.flagship || s.slug === "private-ai").map(s => <SmartLink key={s.slug} to={s.path} className="min-h-11 py-3 text-sm">{s.navLabel}</SmartLink>)}
              {links.map(l => <SmartLink key={l.to} to={l.to} className="border-t border-border py-3 font-medium">{l.label}</SmartLink>)}
               <span className="mt-4 font-body text-xs uppercase text-muted-foreground">Resources</span>
               {resourceLinks.map(l => <SmartLink key={l.to} to={l.to} className="min-h-11 py-3 text-sm">{l.label}</SmartLink>)}
              <Button asChild className="mt-5 h-12"><SmartLink to="/book">Book a Consultation <ArrowUpRight aria-hidden="true" /></SmartLink></Button>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};
export default Navbar;
