import { useEffect, useState } from "react";

const NAV_HEIGHT = 80;

const items = [
  { label: "Solutions", hash: "#solutions" },
  { label: "Services", hash: "#services" },
  { label: "Industries", hash: "#industries" },
  { label: "Process", hash: "#process" },
  { label: "FAQ", hash: "#faq" },
  { label: "Contact", hash: "#contact" },
];

const SideNavRail = () => {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => {
      let current = "";
      for (const item of items) {
        const el = document.querySelector(item.hash) as HTMLElement | null;
        if (!el) continue;
        if (el.getBoundingClientRect().top - NAV_HEIGHT - 24 <= 0) current = item.hash;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e: React.MouseEvent, hash: string) => {
    e.preventDefault();
    const el = document.querySelector(hash);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <nav
      aria-label="Section navigation"
      className="hidden xl:flex fixed left-6 top-1/2 -translate-y-1/2 z-[90] flex-col"
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      {/* connecting line */}
      <div className="relative flex flex-col gap-7 py-2">
        <span
          aria-hidden
          className="absolute"
          style={{
            left: 5,
            top: 12,
            bottom: 12,
            width: 1,
            background: "linear-gradient(180deg, transparent 0%, #25282C 12%, #25282C 88%, transparent 100%)",
          }}
        />
        {items.map((item) => {
          const isActive = active === item.hash;
          return (
            <a
              key={item.hash}
              href={item.hash}
              onClick={(e) => go(e, item.hash)}
              className="group relative flex items-center gap-3"
              aria-current={isActive ? "true" : undefined}
            >
              <span
                aria-hidden
                className="relative shrink-0 rounded-full transition-all duration-300"
                style={{
                  width: 11,
                  height: 11,
                  border: "1px solid #B8BCC2",
                  backgroundColor: isActive ? "#F0F1F3" : "#141414",
                  boxShadow: isActive ? "0 0 10px rgba(240,241,243,0.45)" : "none",
                }}
              />
              <span
                className="uppercase whitespace-nowrap transition-all duration-300 group-hover:text-white group-hover:opacity-100"
                style={{
                  fontSize: 10,
                  letterSpacing: "0.22em",
                  fontWeight: 500,
                  color: isActive ? "#FFFFFF" : "#B8BCC2",
                  opacity: isActive ? 1 : 0.55,
                }}
              >
                {item.label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default SideNavRail;
