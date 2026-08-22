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
      className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-[90] flex-col"
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      <div className="relative flex flex-col items-end gap-7">
        {/* one continuous line from the first dot to the last */}
        <span
          aria-hidden
          className="absolute"
          style={{
            right: 5,
            top: 5,
            bottom: 5,
            width: 1,
            backgroundColor: "#25282C",
          }}
        />
        {items.map((item) => {
          const isActive = active === item.hash;
          return (
            <a
              key={item.hash}
              href={item.hash}
              onClick={(e) => go(e, item.hash)}
              className="group relative flex items-center justify-end gap-3"
              aria-current={isActive ? "true" : undefined}
              title={`Go to ${item.label}`}
              aria-label={`Go to ${item.label} section`}
            >
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
              <span
                aria-hidden
                className="relative shrink-0 rounded-full transition-all duration-300 group-hover:scale-125"
                style={{
                  width: 11,
                  height: 11,
                  border: "1px solid #B8BCC2",
                  backgroundColor: isActive ? "#F0F1F3" : "#141414",
                  boxShadow: isActive ? "0 0 10px rgba(240,241,243,0.45)" : "none",
                }}
              />
            </a>
          );
        })}
      </div>
    </nav>
  );

};

export default SideNavRail;
