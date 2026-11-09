import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
export default function ThemeToggle() {
 const { resolvedTheme, setTheme } = useTheme(); const [mounted,setMounted]=useState(false); useEffect(()=>setMounted(true),[]);
 const dark = mounted && resolvedTheme === "dark"; const label = dark ? "Switch to light mode" : "Switch to dark mode";
 return <Tooltip><TooltipTrigger asChild><Button variant="ghost" size="icon" className="min-h-11 min-w-11" aria-label={label} onClick={()=>setTheme(dark?"light":"dark")}>{dark?<Sun aria-hidden="true" className="h-5 w-5"/>:<Moon aria-hidden="true" className="h-5 w-5"/>}</Button></TooltipTrigger><TooltipContent>{label}</TooltipContent></Tooltip>;
}
