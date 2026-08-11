import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NAV_HEIGHT = 80;

type NavItem = { label: string; to: string; hash?: string };

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);
  const [activeKey, setActiveKey] = useState<string>("");
  const location = useLocation();
  const navigate = useNavigate();
  const mobileToggleRef = useRef<HTMLButtonElement>(null);
  const mobilePanelRef = useRef<HTMLDivElement>(null);

  const navLinks: NavItem[] = [
    { label: "Solutions", to: "/solutions" },
    { label: "Services", to: "/", hash: "#services" },
    { label: "Industries", to: "/", hash: "#industries" },
    { label: "Process", to: "/", hash: "#process" },
    { label: "FAQ", to: "/", hash: "#faq" },
    { label: "Contact", to: "/", hash: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct(h > 0 ? Math.min(100, (y / h) * 100) : 0);

      if (location.pathname !== "/") return;
      let current = "";
      for (const link of navLinks) {
        if (!link.hash) continue;
        const el = document.querySelector(link.hash) as HTMLElement | null;
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top - NAV_HEIGHT - 24 <= 0) current = link.hash;
      }
      setActiveKey(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // Escape to close + focus management + body scroll lock
  useEffect(() => {
    if (!mobileOpen) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusFirst = () => {
      const focusable = mobilePanelRef.current?.querySelector<HTMLElement>(
        'a[href], button:not([disabled])'
      );
      focusable?.focus();
    };
    focusFirst();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        mobileToggleRef.current?.focus();
        return;
      }
      if (e.key === "Tab" && mobilePanelRef.current) {
        const focusables = Array.from(
          mobilePanelRef.current.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled])'
          )
        );
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

  const handleNavClick = (e: React.MouseEvent, item: NavItem) => {
    setMobileOpen(false);
    if (item.hash) {
      if (location.pathname !== "/") {
        e.preventDefault();
        navigate("/" + item.hash);
        return;
      }
      e.preventDefault();
      const el = document.querySelector(item.hash);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  };

  const isActive = (item: NavItem) => {
    if (item.hash) return location.pathname === "/" && activeKey === item.hash;
    return location.pathname === item.to;
  };

  return (
    <header>
      <a href="#main" className="skip-link">
        {"Skip to content"}
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
        <div className="relative h-full flex items-center justify-between px-6 lg:px-8">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3 shrink-0 z-10 group">
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
          </Link>

          {/* Center nav */}
          <div className="hidden xl:flex items-center gap-6 h-full z-10">
            {navLinks.map((link, i) => {
              const active = isActive(link);
              const content = (
                <>
                  <span
                    className="uppercase whitespace-nowrap transition-colors duration-300 group-hover:text-white"
                    style={{
                      fontSize: 11,
                      letterSpacing: "0.2em",
                      color: "#FFFFFF",
                      fontWeight: 500,
                    }}
                  >
                    {link.label}
                  </span>
                  <span
                    className="transition-all duration-300 group-hover:w-full"
                    style={{
                      height: 2,
                      marginTop: 4,
                      width: active ? "100%" : 0,
                      backgroundColor: "#F0F1F3",
                      boxShadow: active ? "0 0 8px rgba(240, 241, 243,0.5)" : "none",
                    }}
                    aria-hidden
                  />
                </>
              );
              const cls = "group flex flex-col items-center justify-center h-full";
              const st: React.CSSProperties = { fontFamily: "'JetBrains Mono', monospace" };
              return link.hash ? (
                <a
                  key={i}
                  href={link.hash}
                  onClick={(e) => handleNavClick(e, link)}
                  className={cls}
                  style={st}
                  aria-current={active ? "page" : undefined}
                >
                  {content}
                </a>
              ) : (
                <Link
                  key={i}
                  to={link.to}
                  onClick={(e) => handleNavClick(e, link)}
                  className={cls}
                  style={st}
                  aria-current={active ? "page" : undefined}
                >
                  {content}
                </Link>
              );
            })}
          </div>

          {/* Right */}
          <div className="hidden xl:flex items-center gap-5 shrink-0 z-10">
            <Link
              to="/solutions"
              className="uppercase transition-colors duration-300 hover:text-white"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                letterSpacing: "0.15em",
                color: "#B8BCC2",
                fontWeight: 500,
              }}
            >
              {"Explore Solutions"}
            </Link>

            <Button
              variant="ghost"
              type="button"
              onClick={() => navigate("/book")}
              className="h-auto p-0 rounded-none font-normal hover:text-inherit relative group overflow-hidden transition-all duration-300 active:scale-95 hover:bg-white"

              style={{
                padding: "12px 22px",
                backgroundColor: "#F0F1F3",
                color: "#0B0B0B",
                fontSize: 11,
                letterSpacing: "0.15em",
                fontWeight: 700,
                textTransform: "uppercase",
                fontFamily: "'DM Sans', sans-serif",
                borderRadius: 2,
                border: "none",
                cursor: "pointer",
              }}
            >
              <span
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 50%, transparent 100%)",
                }}
                aria-hidden
              />
              <span className="relative z-10 flex items-center gap-2">
                {"Book an Assessment"}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="square" />
                </svg>
              </span>
            </Button>

          </div>

          {/* Mobile toggle */}
          <Button
            ref={mobileToggleRef}
            variant="ghost"
            className="h-auto p-0 rounded-none font-normal hover:bg-transparent hover:text-inherit xl:hidden flex items-center justify-center w-11 h-11 z-10 touch-target"
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
          className="xl:hidden transition-all duration-500"
          role="dialog"
          aria-modal="true"
          aria-label={"Primary navigation"}
          hidden={!mobileOpen}
          style={{
            maxHeight: mobileOpen ? `calc(100vh - ${NAV_HEIGHT}px)` : 0,
            overflowY: mobileOpen ? "auto" : "hidden",
            opacity: mobileOpen ? 1 : 0,
            pointerEvents: mobileOpen ? "auto" : "none",
            backgroundColor: "rgba(11,11,11,0.98)",
            backdropFilter: "blur(24px)",
            WebkitOverflowScrolling: "touch",
            borderTop: mobileOpen ? "1px solid #25282C" : "none",
          }}
        >
          <div className="px-6 py-6">
            {navLinks.map((link, i) => {
              const active = isActive(link);
              const inner = (
                <span className="flex items-center gap-3">
                  <span
                    style={{
                      display: "inline-block",
                      width: 6,
                      height: 6,
                      backgroundColor: active ? "#F0F1F3" : "transparent",
                      border: "1px solid #F0F1F3",
                    }}
                  />
                  {link.label}
                </span>
              );
              const cls = "flex items-center justify-between py-4 uppercase transition-colors duration-200 touch-target";
              const st: React.CSSProperties = {
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12,
                letterSpacing: "0.15em",
                color: active ? "#FFFFFF" : "#F0F1F3",
                borderBottom: "1px solid #25282C",
              };
              return link.hash ? (
                <a
                  key={i}
                  href={link.hash}
                  onClick={(e) => handleNavClick(e, link)}
                  className={cls}
                  style={st}
                  aria-current={active ? "page" : undefined}
                >
                  {inner}
                  <span style={{ fontSize: 9, color: "#B8BCC2" }}>{String(i + 1).padStart(2, "0")}</span>
                </a>
              ) : (
                <Link
                  key={i}
                  to={link.to}
                  onClick={(e) => handleNavClick(e, link)}
                  className={cls}
                  style={st}
                  aria-current={active ? "page" : undefined}
                >
                  {inner}
                  <span style={{ fontSize: 9, color: "#B8BCC2" }}>{String(i + 1).padStart(2, "0")}</span>
                </Link>
              );
            })}
            <Button
              variant="ghost"
              type="button"
              onClick={() => {
                setMobileOpen(false);
                navigate("/book");
              }}
              className="h-auto p-0 rounded-none font-normal hover:bg-transparent hover:text-inherit flex items-center justify-center gap-2 uppercase w-full touch-target"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 12,
                letterSpacing: "0.15em",
                fontWeight: 700,
                backgroundColor: "#F0F1F3",
                color: "#0B0B0B",
                padding: "14px 20px",
                borderRadius: 2,
                border: "none",
                cursor: "pointer",
              }}
            >
              {"Book an Assessment"}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="square" />
              </svg>
            </Button>

          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
