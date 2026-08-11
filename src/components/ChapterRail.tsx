import { useEffect, useState } from "react";
import { CHAPTERS } from "@/components/journey";
import { scrollToHash } from "@/lib/hashNav";

/** Subtle guided-journey progress indicator (desktop only). */
const ChapterRail = () => {
  const [active, setActive] = useState<string>(() => CHAPTERS[0].id);

  useEffect(() => {
    const onScroll = () => {
      let current = CHAPTERS[0].id;
      for (const c of CHAPTERS) {
        const el = document.getElementById(c.id);
        if (!el) continue;
        if (el.getBoundingClientRect().top - 140 <= 0) current = c.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Section progress"
      className="hidden xl:flex fixed z-40 flex-col gap-3"
      style={{ insetInlineEnd: 20, top: "50%", transform: "translateY(-50%)" }}
    >
      {CHAPTERS.map((c) => {
        const isActive = active === c.id;
        return (
          <a
            key={c.id}
            href={`#${c.id}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToHash(`#${c.id}`);
            }}
            className="group flex items-center justify-end gap-2"
            aria-current={isActive ? "true" : undefined}
          >
            <span
              className="font-mono uppercase opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200"
              style={{ fontSize: 9, letterSpacing: "0.18em", color: "#F0F1F3" }}
            >
              {c.label}
            </span>
            <span
              aria-hidden
              className="transition-all duration-300"
              style={{
                display: "block",
                height: 1,
                width: isActive ? 22 : 10,
                background: isActive ? "#FFFFFF" : "rgba(255,255,255,0.3)",
              }}
            />
          </a>
        );
      })}
    </nav>
  );
};

export default ChapterRail;
