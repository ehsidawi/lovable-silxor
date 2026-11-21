import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, Menu } from "lucide-react";
import { useLocation } from "react-router-dom";
import SmartLink, { SmartNavLink } from "@/components/SmartLink";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetDescription, SheetTrigger } from "@/components/ui/sheet";
import { servicePillars } from "@/data/services";
import ThemeToggle from "@/components/ThemeToggle";
import { resourceLinks } from "@/data/site";
import { caseStudies } from "@/data/caseStudies";

const links = [
  { label: "Industries", to: "/industries" }, { label: "Delivery", to: "/delivery" },
  { label: "About", to: "/about" }, { label: "Insights", to: "/insights" },
  ...(caseStudies.length ? [{ label: "Case studies", to: "/case-studies" }] : []),
  { label: "Contact", to: "/contact" },
];
const talent = servicePillars.find(s => s.slug === "talent-acquisition");
const tech = servicePillars.filter(s => s.slug !== "talent-acquisition");

const Brand = () => <SmartLink to="/" aria-label="Silxor home" className="mx-brand">Silxor<i aria-hidden="true" /></SmartLink>;

/** Executive masthead: sticky top bar with a two column Services panel and a drawer on small screens. */
const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { setOpen(false); setMobileOpen(false); }, [location.pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey); return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <header className={`mx-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="mx-header-inner">
          <Brand />
          <nav aria-label="Primary" className="mx-nav">
            <button type="button" className="mx-nav-link" aria-expanded={open} aria-controls="mx-services" onClick={() => setOpen(!open)}>
              Services <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true" />
            </button>
            {links.map(l => <SmartNavLink key={l.to} to={l.to} className="mx-nav-link">{l.label}</SmartNavLink>)}
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button asChild className="mx-header-cta"><SmartLink to="/book">Book a Consultation <ArrowRight aria-hidden="true" /></SmartLink></Button>
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild><Button variant="ghost" size="icon" aria-label="Open menu" className="mx-menu-btn h-11 w-11"><Menu aria-hidden="true" /></Button></SheetTrigger>
              <SheetContent className="w-full overflow-y-auto sm:max-w-md">
                <SheetTitle className="mx-brand">Silxor<i aria-hidden="true" /></SheetTitle>
                <SheetDescription className="sr-only">Primary navigation</SheetDescription>
                <nav aria-label="Mobile" className="mt-8 flex flex-col">
                  <span className="mx-label">Talent</span>
                  {talent && <SmartLink to={talent.path} className="mx-drawer-link">{talent.navLabel}</SmartLink>}
                  <span className="mx-label mt-6">Technology</span>
                  {tech.map(s => <SmartLink key={s.slug} to={s.path} className="mx-drawer-link">{s.navLabel}</SmartLink>)}
                  <SmartLink to="/services" className="mx-drawer-link font-semibold">All services</SmartLink>
                  <span className="mx-label mt-6">Company</span>
                  {links.map(l => <SmartLink key={l.to} to={l.to} className="mx-drawer-link">{l.label}</SmartLink>)}
                  <span className="mx-label mt-6">Resources</span>
                  <div className="grid grid-cols-2">{resourceLinks.map(l => <SmartLink key={l.to} to={l.to} className="flex min-h-11 items-center text-sm text-muted-foreground">{l.label}</SmartLink>)}</div>
                  <Button asChild className="mt-8 w-full"><SmartLink to="/book">Book a Consultation <ArrowRight aria-hidden="true" /></SmartLink></Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        {open && (
          <div id="mx-services" className="mx-mega">
            <div className="mx-mega-inner">
              {talent && <SmartLink to={talent.path} className="mx-mega-feature">
                <span className="mx-label">Talent</span>
                <strong>{talent.navLabel}</strong>
                <span className="text-sm text-muted-foreground">{talent.outcome}</span>
                <span className="mx-inline-link">Explore Talent <ArrowRight className="h-4 w-4" aria-hidden="true" /></span>
              </SmartLink>}
              <div>
                <span className="mx-label">Technology</span>
                <div className="mx-mega-grid">
                  {tech.map(s => <SmartLink key={s.slug} to={s.path} className="mx-mega-link">{s.navLabel}<ArrowRight className="h-4 w-4" aria-hidden="true" /></SmartLink>)}
                </div>
                <SmartLink to="/services" className="mx-inline-link mt-5">All services <ArrowRight className="h-4 w-4" aria-hidden="true" /></SmartLink>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
export default Navbar;
