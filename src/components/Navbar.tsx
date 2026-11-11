import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, Plus, Minus } from "lucide-react";
import { useLocation } from "react-router-dom";
import SmartLink, { SmartNavLink } from "@/components/SmartLink";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetDescription, SheetTrigger } from "@/components/ui/sheet";
import { services, servicePillars } from "@/data/services";
import ThemeToggle from "@/components/ThemeToggle";
import { resourceLinks } from "@/data/site";
import { caseStudies } from "@/data/caseStudies";

const links = [
  { label: "Industries", to: "/industries" }, { label: "Delivery", to: "/delivery" },
  { label: "Clients", to: "/clients" }, { label: "About", to: "/about" },
  { label: "Insights", to: "/insights" },
  ...(caseStudies.length ? [{ label: "Case studies", to: "/case-studies" }] : []),
  { label: "Contact", to: "/contact" },
];
const serviceLinks = [
  ...servicePillars.map(s => ({ label: s.navLabel, to: s.path })),
  ...services.filter(s => s.flagship || s.slug === "private-ai").map(s => ({ label: s.navLabel, to: s.path })),
];
const num = (i: number) => String(i).padStart(2, "0");

const Brand = () => <SmartLink to="/" aria-label="Silxor home" className="brand-mark">silxor<i aria-hidden="true" /></SmartLink>;

/** Fixed index rail on desktop, rounded top bar with a drawer below 1024px. */
const Navbar = () => {
  const location = useLocation();
  const inServices = location.pathname.startsWith("/services");
  const [servicesOpen, setServicesOpen] = useState(inServices);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => { setMobileOpen(false); if (inServices) setServicesOpen(true); }, [location.pathname, inServices]);

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <header className="site-rail">
        <div className="site-rail-inner">
          <div className="flex items-center justify-between px-2.5"><Brand /><ThemeToggle /></div>
          <p className="rail-label mt-2">Enterprise technology partner</p>
          <nav aria-label="Primary" className="mt-8 flex flex-col gap-1">
            <span className="rail-label mb-2">Index</span>
            <button type="button" className="rail-link w-full text-left" aria-expanded={servicesOpen} aria-controls="rail-services" onClick={() => setServicesOpen(!servicesOpen)}>
              <span className="rail-num">01</span>Services
              {servicesOpen ? <Minus className="ml-auto h-4 w-4" aria-hidden="true" /> : <Plus className="ml-auto h-4 w-4" aria-hidden="true" />}
            </button>
            {servicesOpen && <div id="rail-services" className="flex flex-col gap-0.5 pb-2">
              <SmartNavLink to="/services" end className="rail-sub font-semibold">All services</SmartNavLink>
              {serviceLinks.map(l => <SmartNavLink key={l.to} to={l.to} className="rail-sub">{l.label}</SmartNavLink>)}
            </div>}
            {links.map((l, i) => <SmartNavLink key={l.to} to={l.to} className="rail-link"><span className="rail-num">{num(i + 2)}</span>{l.label}</SmartNavLink>)}
          </nav>
          <div className="rail-foot">
            <Button asChild><SmartLink to="/book">Book a Consultation <ArrowUpRight aria-hidden="true" /></SmartLink></Button>
            <a href="mailto:hello@silxor.com" className="rail-link justify-center text-xs">hello@silxor.com</a>
          </div>
        </div>
      </header>

      <header className="site-topbar">
        <div className="site-topbar-inner">
          <Brand />
          <div className="flex items-center gap-1">
            <ThemeToggle />
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild><Button variant="outline" size="icon" aria-label="Open menu" className="h-11 w-11 border-0 bg-transparent text-on-ink hover:bg-muted"><Menu aria-hidden="true" /></Button></SheetTrigger>
              <SheetContent className="w-full overflow-y-auto sm:max-w-md">
                <SheetTitle className="brand-mark">silxor<i aria-hidden="true" /></SheetTitle>
                <SheetDescription className="sr-only">Primary navigation</SheetDescription>
                <nav aria-label="Mobile" className="mt-8 flex flex-col">
                  <span className="font-mono text-[11px] uppercase text-muted-foreground">01 Services</span>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <SmartLink to="/services" className="r-pill min-h-11">All services</SmartLink>
                    {serviceLinks.map(l => <SmartLink key={l.to} to={l.to} className="r-pill min-h-11">{l.label}</SmartLink>)}
                  </div>
                  <div className="mt-6 flex flex-col border-t border-border">
                    {links.map((l, i) => <SmartLink key={l.to} to={l.to} className="flex min-h-14 items-center gap-4 border-b border-border font-display text-2xl font-semibold"><span className="font-mono text-[11px] text-muted-foreground">{num(i + 2)}</span>{l.label}</SmartLink>)}
                  </div>
                  <span className="mt-6 font-mono text-[11px] uppercase text-muted-foreground">Resources</span>
                  <div className="mt-2 grid grid-cols-2">{resourceLinks.map(l => <SmartLink key={l.to} to={l.to} className="flex min-h-11 items-center text-sm">{l.label}</SmartLink>)}</div>
                  <Button asChild className="mt-6 w-full justify-between"><SmartLink to="/book">Book a Consultation <ArrowUpRight aria-hidden="true" /></SmartLink></Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
};
export default Navbar;
