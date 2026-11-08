import { useEffect, useRef, ReactNode } from "react";
interface AnimatedSectionProps { children: ReactNode; className?: string; delay?: number; }
/** Visible static content; only animate after browser intersection, never hide SSR text. */
const AnimatedSection = ({children,className=""}:AnimatedSectionProps)=>{
 const ref=useRef<HTMLDivElement>(null);
 useEffect(()=>{const node=ref.current;if(!node||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const observer=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)){node.classList.add("section-arrived");observer.disconnect();}},{threshold:.08});observer.observe(node);return()=>observer.disconnect();},[]);
 return <div ref={ref} className={`below-fold-section ${className}`}>{children}</div>;
};
export default AnimatedSection;
