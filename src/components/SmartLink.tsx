import { forwardRef } from "react";
import { Link, LinkProps, NavLink, NavLinkProps } from "react-router-dom";
import { prefetchHandlers } from "@/lib/routePrefetch";

/** Router Link that warms the target route chunk on hover, focus, or touch. */
const SmartLink = forwardRef<HTMLAnchorElement, LinkProps>(({ to, ...rest }, ref) => {
  const target = typeof to === "string" ? to : (to.pathname ?? "");
  return <Link ref={ref} to={to} {...prefetchHandlers(target)} {...rest} />;
});
SmartLink.displayName = "SmartLink";

/** NavLink variant with the same prefetch intent behaviour. */
export const SmartNavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(({ to, ...rest }, ref) => {
  const target = typeof to === "string" ? to : (to.pathname ?? "");
  return <NavLink ref={ref} to={to} {...prefetchHandlers(target)} {...rest} />;
});
SmartNavLink.displayName = "SmartNavLink";

export default SmartLink;
