import { useEffect, useState } from "react";

const NAV_HEIGHT = 80;

const SideRail = () => {
  const [active, setActive] = useState<string>("#services");

  const items = [
    { i: "01", label: "Services", href: "#services" },
    { i: "02", label: "Industries", href: "#industries" },
    { i: "03", label: "Process", href: "#process" },
    { i: "04", label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => {
      let cur = items[0].href;
      for (const it of items) {
        const el = document.querySelector(it.href) as HTMLElement | null;
        if (!el) continue;
        if (el.getBoundingClientRect().top - NAV_HEIGHT - 24 <= 0) cur = it.href;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handle = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <aside
      className="hidden lg:flex fixed z-40 flex-col justify-between items-center"
      style={{
        top: NAV_HEIGHT,
        bottom: 0,
        insetInlineStart: 0,
        width: 96,
        borderInlineEnd: "1px solid #25282C",
        backgroundColor: "#141414",
        padding: "40px 0",
      }}
    >
      <div className="flex flex-col items-center gap-12">
        <div
          className="flex items-center justify-center"
          style={{ width: 36, height: 36, border: "2px solid #F0F1F3" }}
          aria-hidden
        >
          <div className="animate-pulse" style={{ width: 14, height: 14, backgroundColor: "#FFFFFF" }} />
        </div>
        <nav
          aria-label={"Section index"}
          className="font-mono uppercase"
          style={{
            writingMode: "vertical-lr",
            transform: "rotate(180deg)",
            display: "flex",
            flexDirection: "column",
            gap: 28,
            fontSize: 10,
            letterSpacing: "0.3em",
            fontWeight: 700,
          }}
        >
          {items.map((it) => {
            const isActive = active === it.href;
            return (
              <a
                key={it.href}
                href={it.href}
                onClick={(e) => handle(e, it.href)}
                className="transition-colors"
                aria-current={isActive ? "true" : undefined}
                style={{ color: isActive ? "#FFFFFF" : "#B8BCC2" }}
              >
                {it.i} / {it.label}
              </a>
            );
          })}
        </nav>
      </div>
      <div className="font-mono" style={{ fontSize: 10, fontWeight: 700, color: "#B8BCC2" }} aria-hidden>
        SLXR // 2026
      </div>
    </aside>
  );
};

export default SideRail;
