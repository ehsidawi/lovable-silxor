import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { NAV_OFFSET, scrollToHash } from "@/lib/hashNav";

const NAV_HEIGHT = NAV_OFFSET;

const NAV_LINKS = [
  { label: "Capabilities", hash: "#capabilities" },
  { label: "Industries", hash: "#industries" },
  { label: "Process", hash: "#process" },
  { label: "Contact", hash: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const mobileToggleRef = useRef<HTMLButtonElement>(null);
  const mobilePanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 16);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct(h > 0 ? Math.min(100, (y / h) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    mobilePanelRef.current
      ?.querySelector<HTMLElement>('a[href], button:not([disabled])')
      ?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        mobileToggleRef.current?.focus();
        return;
      }
      if (e.key === "Tab" && mobilePanelRef.current) {
        const focusables = Array.from(
          mobilePanelRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')
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

  const handleNavClick = (e: React.MouseEvent, hash: string) => {
    e.preventDefault();
    setMobileOpen(false);
    if (location.pathname !== "/") {
      navigate("/" + hash);
      return;
    }
    scrollToHash(hash);
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
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div className="relative h-full flex items-center justify-between px-6 lg:px-8">
          <Link
            to="/"
            className="font-display font-[800] shrink-0"
            style={{ fontSize: 20, letterSpacing: "-0.02em", color: "#FFFFFF" }}
          >
            SILXOR
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.hash}
                href={link.hash}
                onClick={(e) => handleNavClick(e, link.hash)}
                className="font-mono uppercase transition-colors duration-200 hover:text-white"
                style={{ fontSize: 11, letterSpacing: "0.18em", color: "#B8BCC2" }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center shrink-0">
            <Button
              variant="ghost"
              type="button"
              onClick={() => navigate("/book")}
              className="h-auto rounded-none font-mono uppercase hover:bg-white hover:text-inherit transition-colors"
              style={{
                padding: "12px 22px",
                backgroundColor: "#F0F1F3",
                color: "#0B0B0B",
                fontSize: 11,
                letterSpacing: "0.15em",
                fontWeight: 700,
                border: "none",
                cursor: "pointer",
              }}
            >
              Book an Assessment
            </Button>
          </div>

          <Button
            ref={mobileToggleRef}
            variant="ghost"
            className="h-auto p-0 rounded-none hover:bg-transparent hover:text-inherit lg:hidden flex items-center justify-center w-11 h-11 touch-target"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-panel"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" style={{ color: "#F0F1F3" }} />
            ) : (
              <div className="flex flex-col items-end gap-[4px]" aria-hidden>
                <span style={{ width: 22, height: 1, backgroundColor: "#F0F1F3", display: "block" }} />
                <span style={{ width: 14, height: 1, backgroundColor: "#F0F1F3", display: "block" }} />
                <span style={{ width: 22, height: 1, backgroundColor: "#F0F1F3", display: "block" }} />
              </div>
            )}
          </Button>
        </div>

        <div
          className="absolute left-0 right-0 pointer-events-none"
          style={{ bottom: -1, height: 1 }}
          aria-hidden
        >
          <div
            style={{
              height: "100%",
              width: `${scrollPct}%`,
              background: "#F0F1F3",
              transition: "width 120ms linear",
            }}
          />
        </div>

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
            pointerEvents: mobileOpen ? "auto" : "none",
            visibility: mobileOpen ? "visible" : "hidden",
            transition:
              "max-height 380ms cubic-bezier(0.22,1,0.36,1), opacity 240ms ease, visibility 0s linear " +
              (mobileOpen ? "0s" : "240ms"),
            backgroundColor: "rgba(11,11,11,0.98)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div className="px-6 py-5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.hash}
                href={link.hash}
                onClick={(e) => handleNavClick(e, link.hash)}
                className="flex items-center py-4 font-mono uppercase touch-target"
                style={{
                  fontSize: 12,
                  letterSpacing: "0.15em",
                  color: "#F0F1F3",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                }}
                tabIndex={mobileOpen ? 0 : -1}
              >
                {link.label}
              </a>
            ))}
            <Button
              variant="ghost"
              type="button"
              onClick={() => {
                setMobileOpen(false);
                navigate("/book");
              }}
              className="h-auto rounded-none font-mono uppercase w-full touch-target hover:bg-white hover:text-inherit"
              style={{
                fontSize: 12,
                letterSpacing: "0.15em",
                fontWeight: 700,
                backgroundColor: "#F0F1F3",
                color: "#0B0B0B",
                padding: "14px 20px",
                border: "none",
                cursor: "pointer",
                marginTop: 18,
              }}
              tabIndex={mobileOpen ? 0 : -1}
            >
              Book an Assessment
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
