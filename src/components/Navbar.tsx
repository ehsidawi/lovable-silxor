import { useState, useEffect, useRef } from "react";
import { X, ChevronDown } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import SmartLink, { SmartNavLink } from "@/components/SmartLink";
import { prefetchHandlers } from "@/lib/routePrefetch";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";

const NAV_HEIGHT = 80;

const primaryLinks: { label: string; to: string }[] = [
  { label: "Industries", to: "/industries" },
  { label: "Delivery", to: "/delivery" },
  { label: "Clients", to: "/clients" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);

  const location = useLocation();
  const navigate = useNavigate();
  const mobileToggleRef = useRef<HTMLButtonElement>(null);
  const mobilePanelRef = useRef<HTMLDivElement>(null);
  const megaRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<number>();

  const servicesActive = location.pathname.startsWith("/services");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct(h > 0 ? Math.min(100, (y / h) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  // Close menus on navigation
  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  // Escape closes the mega menu
  useEffect(() => {
    if (!megaOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMegaOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [megaOpen]);

  // Escape to close + focus management + body scroll lock (mobile drawer)
  useEffect(() => {
    if (!mobileOpen) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusable = mobilePanelRef.current?.querySelector<HTMLElement>('a[href], button:not([disabled])');
    focusable?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        mobileToggleRef.current?.focus();
        return;
      }
      if (e.key === "Tab" && mobilePanelRef.current) {
        const focusables = Array.from(
          mobilePanelRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')
        ).filter((el) => el.tabIndex !== -1);
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", onKeyDown);
      previouslyFocused?.focus();
    };
  }, [mobileOpen]);

  const linkStyle = (isActive: boolean) => ({
    fontSize: 13,
    color: isActive ? "#FFFFFF" : "rgba(240,241,243,0.72)",
    letterSpacing: "0.01em",
  });

  const openMega = () => {
    window.clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };
  const scheduleClose = () => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setMegaOpen(false), 140);
  };

  return (
    <header>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <nav
        aria-label="Primary"
        className="sticky top-0 z-[100] transition-colors duration-500"
        style={{
          height: NAV_HEIGHT,
          backgroundColor: scrolled ? "rgba(20,20,20,0.94)" : "#141414",
          backdropFilter: scrolled ? "blur(20px) saturate(160%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px) saturate(160%)" : "none",
          borderTop: "1px solid #25282C",
          borderBottom: "1px solid #25282C",
        }}
      >
        <div className="relative h-full flex items-center justify-between gap-6 px-6 lg:px-8">
          {/* Brand */}
          <SmartLink to="/" className="flex items-center gap-3 shrink-0 z-10 group" aria-label="Silxor home">
            <div
              className="relative transition-transform duration-500 group-hover:rotate-45"
              style={{
                width: 28,
                height: 28,
                background: "linear-gradient(135deg, #F0F1F3 0%, #B8BCC2 55%, #25282C 100%)",
              }}
            >
              <div className="absolute" style={{ inset: 1, backgroundColor: "#141414" }} />
              <div className="absolute" style={{ inset: 6, backgroundColor: "#F0F1F3" }} />
            </div>
            <span
              className="font-display font-[800] text-white tracking-tight"
              style={{ fontSize: 22, letterSpacing: "-0.02em" }}
            >
              SILXOR
            </span>
          </SmartLink>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-7 z-10">
            <div
              className="relative"
              onMouseEnter={openMega}
              onMouseLeave={scheduleClose}
              ref={megaRef}
            >
              <SmartLink
                to="/services"
                className="font-body font-[400] inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-white"
                style={linkStyle(servicesActive)}
                aria-expanded={megaOpen}
                aria-haspopup="true"
                onFocus={openMega}
              >
                Services
                <ChevronDown
                  aria-hidden
                  style={{
                    width: 13,
                    height: 13,
                    transition: "transform 200ms ease",
                    transform: megaOpen ? "rotate(180deg)" : "none",
                  }}
                  strokeWidth={1.8}
                />
              </SmartLink>
              <span
                aria-hidden
                style={{
                  position: "absolute",
                  left: 0,
                  right: 14,
                  bottom: -6,
                  height: 1,
                  background: "#F0F1F3",
                  transform: servicesActive ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: "left",
                  transition: "transform 260ms ease",
                }}
              />

              {/* Mega menu */}
              <div
                className="absolute"
                style={{
                  top: "calc(100% + 22px)",
                  left: -24,
                  width: 640,
                  opacity: megaOpen ? 1 : 0,
                  transform: megaOpen ? "translateY(0)" : "translateY(-6px)",
                  pointerEvents: megaOpen ? "auto" : "none",
                  visibility: megaOpen ? "visible" : "hidden",
                  transition: "opacity 200ms ease, transform 200ms ease, visibility 0s linear " + (megaOpen ? "0s" : "200ms"),
                  backgroundColor: "rgba(17,17,17,0.98)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  border: "1px solid #25282C",
                  borderRadius: 24,
                  padding: 16,
                  boxShadow: "0 30px 70px rgba(0,0,0,0.55)",
                }}
              >
                <div className="grid grid-cols-2 gap-1.5">
                  {services.map((s) => {
                    const Icon = s.icon;
                    return (
                      <SmartLink
                        key={s.slug}
                        to={s.path}
                        className="flex items-start gap-3 transition-colors duration-200"
                        style={{ padding: "11px 12px", borderRadius: 16 }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(240,241,243,0.06)")}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                        tabIndex={megaOpen ? 0 : -1}
                      >
                        <Icon style={{ width: 16, height: 16, color: "#F0F1F3", marginTop: 2, flexShrink: 0 }} strokeWidth={1.5} />
                        <span>
                          <span className="font-body font-[500] block" style={{ fontSize: 13.5, color: "#FFFFFF" }}>
                            {s.navLabel}
                          </span>
                          <span className="font-body font-[300] block" style={{ fontSize: 11.5, color: "#9AA0A7", lineHeight: 1.5, marginTop: 2 }}>
                            {s.outcome}
                          </span>
                        </span>
                      </SmartLink>
                    );
                  })}
                </div>
                <SmartLink
                  to="/services"
                  className="font-mono uppercase block"
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.18em",
                    color: "#FFFFFF",
                    borderTop: "1px solid #25282C",
                    marginTop: 12,
                    paddingTop: 12,
                  }}
                  tabIndex={megaOpen ? 0 : -1}
                >
                  View all services →
                </SmartLink>
              </div>
            </div>

            {primaryLinks.map((l) => (
              <SmartNavLink
                key={l.to}
                to={l.to}
                className="relative font-body font-[400] transition-colors duration-200 hover:text-white"
                style={({ isActive }) => linkStyle(isActive)}
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    <span
                      aria-hidden
                      style={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        bottom: -6,
                        height: 1,
                        background: "#F0F1F3",
                        transform: isActive ? "scaleX(1)" : "scaleX(0)",
                        transformOrigin: "left",
                        transition: "transform 260ms ease",
                      }}
                    />
                  </>
                )}
              </SmartNavLink>
            ))}
          </div>

          {/* Right CTA */}
          <div className="hidden lg:flex items-center shrink-0 z-10">
            <button type="button" onClick={() => navigate("/book")} {...prefetchHandlers("/book")} className="r-cta r-cta--sm group">
              <span className="flex items-center gap-2">
                Book an Assessment
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" />
                </svg>
              </span>
            </button>
          </div>

          {/* Mobile toggle */}
          <Button
            ref={mobileToggleRef}
            variant="ghost"
            className="h-auto p-0 rounded-none font-normal hover:bg-transparent hover:text-inherit lg:hidden flex items-center justify-center w-11 h-11 z-10 touch-target"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-panel"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" style={{ color: "#F0F1F3" }} />
            ) : (
              <div className="flex flex-col items-end gap-[4px]">
                <span style={{ width: 22, height: 1, backgroundColor: "#F0F1F3", display: "block" }} />
                <span style={{ width: 14, height: 1, backgroundColor: "#F0F1F3", display: "block" }} />
                <span style={{ width: 22, height: 1, backgroundColor: "#F0F1F3", display: "block" }} />
              </div>
            )}
          </Button>
        </div>

        {/* Scroll progress */}
        <div
          className="absolute left-0 right-0 pointer-events-none"
          style={{ bottom: -1, height: 1, backgroundColor: "transparent" }}
          aria-hidden
        >
          <div
            style={{
              height: "100%",
              width: `${scrollPct}%`,
              background: "linear-gradient(90deg, transparent 0%, #F0F1F3 50%, transparent 100%)",
              boxShadow: "0 0 8px rgba(240, 241, 243,0.5)",
              transition: "width 120ms linear",
            }}
          />
        </div>

        {/* Mobile panel */}
        <div
          id="mobile-nav-panel"
          ref={mobilePanelRef}
          className="lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Primary navigation"
          aria-hidden={!mobileOpen}
          style={{
            maxHeight: mobileOpen ? `calc(100vh - ${NAV_HEIGHT}px)` : 0,
            overflowY: "auto",
            opacity: mobileOpen ? 1 : 0,
            transform: mobileOpen ? "translateY(0)" : "translateY(-8px)",
            pointerEvents: mobileOpen ? "auto" : "none",
            visibility: mobileOpen ? "visible" : "hidden",
            transition:
              "max-height 420ms cubic-bezier(0.22,1,0.36,1), opacity 280ms ease, transform 280ms ease, visibility 0s linear " +
              (mobileOpen ? "0s" : "280ms"),
            backgroundColor: "rgba(11,11,11,0.98)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            WebkitOverflowScrolling: "touch",
            borderTop: "1px solid #25282C",
          }}
        >
          <div className="px-6 py-5 flex flex-col">
            {/* Services group */}
            <button
              type="button"
              className="flex items-center justify-between w-full touch-target"
              style={{
                padding: "14px 0",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
                color: "#FFFFFF",
                fontSize: 16,
              }}
              onClick={() => setMobileServicesOpen((o) => !o)}
              aria-expanded={mobileServicesOpen}
              tabIndex={mobileOpen ? 0 : -1}
            >
              <span className="font-body font-[500]">Services</span>
              <ChevronDown
                aria-hidden
                style={{
                  width: 16,
                  height: 16,
                  transition: "transform 220ms ease",
                  transform: mobileServicesOpen ? "rotate(180deg)" : "none",
                }}
                strokeWidth={1.8}
              />
            </button>
            <div
              style={{
                maxHeight: mobileServicesOpen ? 520 : 0,
                overflow: "hidden",
                transition: "max-height 360ms cubic-bezier(0.22,1,0.36,1)",
              }}
            >
              <SmartLink
                to="/services"
                className="block font-body font-[300] touch-target"
                style={{ fontSize: 14, color: "#C6CAD0", padding: "12px 0 12px 14px" }}
                tabIndex={mobileOpen && mobileServicesOpen ? 0 : -1}
              >
                All Services
              </SmartLink>
              {services.map((s) => (
                <SmartLink
                  key={s.slug}
                  to={s.path}
                  className="block font-body font-[300] touch-target"
                  style={{ fontSize: 14, color: "#C6CAD0", padding: "12px 0 12px 14px" }}
                  tabIndex={mobileOpen && mobileServicesOpen ? 0 : -1}
                >
                  {s.navLabel}
                </SmartLink>
              ))}
            </div>

            {primaryLinks.map((l) => (
              <SmartLink
                key={l.to}
                to={l.to}
                className="font-body font-[500] touch-target"
                style={{
                  fontSize: 16,
                  color: location.pathname === l.to ? "#FFFFFF" : "rgba(240,241,243,0.8)",
                  padding: "14px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.07)",
                }}
                tabIndex={mobileOpen ? 0 : -1}
              >
                {l.label}
              </SmartLink>
            ))}

            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                navigate("/book");
              }}
              className="r-cta r-cta--block gap-2 touch-target"
              style={{ marginTop: 20, marginBottom: 8 }}
              tabIndex={mobileOpen ? 0 : -1}
            >
              Book an Assessment
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
