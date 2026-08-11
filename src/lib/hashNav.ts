import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const NAV_OFFSET = 80;

/** Smoothly scrolls to an in-page section, accounting for the sticky navbar. */
export function scrollToHash(hash: string, behavior: ScrollBehavior = "smooth") {
  if (!hash) return false;
  const el = document.querySelector(hash) as HTMLElement | null;
  if (!el) return false;
  const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
  window.scrollTo({ top: Math.max(0, top), behavior });
  return true;
}

/**
 * Returns a click handler for links like "/#services".
 * Same page -> smooth scroll. Other page -> route change, then scroll.
 */
export function useHashNav() {
  const navigate = useNavigate();
  const location = useLocation();

  return useCallback(
    (e: React.MouseEvent, target: string) => {
      const [path, hash] = target.split("#");
      const pathname = path || "/";
      if (!hash) return; // let the router handle plain routes
      e.preventDefault();
      if (location.pathname === pathname) {
        scrollToHash("#" + hash);
      } else {
        navigate(`${pathname}#${hash}`);
      }
    },
    [location.pathname, navigate]
  );
}
