import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function BackToTop() {
 const [shown,setShown]=useState(false); useEffect(()=>{const update=()=>setShown(window.scrollY>600); update(); window.addEventListener("scroll",update,{passive:true});return()=>window.removeEventListener("scroll",update);},[]);
 if(!shown)return null;
 return <Button size="icon" variant="outline" className="fixed bottom-5 right-5 z-30 min-h-11 min-w-11 bg-background" aria-label="Back to top" title="Back to top" onClick={()=>{window.scrollTo({top:0,behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"});document.getElementById("main")?.focus({preventScroll:true});}}><ArrowUp className="h-5 w-5" aria-hidden="true"/></Button>;
}
