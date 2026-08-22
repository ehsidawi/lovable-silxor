import { forwardRef } from "react";
import { Link, LinkProps, NavLink, NavLinkProps } from "react-router-dom";
import { prefetchRoute } from "@/lib/routePrefetch";

type AnyHandler<E> = ((e: E) => void) | undefined;

function compose<E>(prefetch: () => void, user: AnyHandler<E>) {
  return (e: E) => {
    prefetch();
    user?.(e);
  };
}

function useIntent(target: string, props: Record<string, unknown>) {
  const warm = () => prefetchRoute(target);
  return {
    onMouseEnter: compose(warm, props.onMouseEnter as AnyHandler<React.MouseEvent<HTMLAnchorElement>>),
    onFocus: compose(warm, props.onFocus as AnyHandler<React.FocusEvent<HTMLAnchorElement>>),
    onTouchStart: compose(warm, props.onTouchStart as AnyHandler<React.TouchEvent<HTMLAnchorElement>>),
  };
}

/** Router Link that warms the target route chunk on hover, focus, or touch. */
const SmartLink = forwardRef<HTMLAnchorElement, LinkProps>(({ to, ...rest }, ref) => {
  const target = typeof to === "string" ? to : (to.pathname ?? "");
  return <Link ref={ref} to={to} {...rest} {...useIntent(target, rest)} />;
});
SmartLink.displayName = "SmartLink";

/** NavLink variant with the same prefetch intent behaviour. */
export const SmartNavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(({ to, ...rest }, ref) => {
  const target = typeof to === "string" ? to : (to.pathname ?? "");
  return <NavLink ref={ref} to={to} {...rest} {...useIntent(target, rest)} />;
});
SmartNavLink.displayName = "SmartNavLink";

export default SmartLink;
