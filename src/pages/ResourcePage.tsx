import { useLocation } from "react-router-dom";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import SmartLink from "@/components/SmartLink";
import { resourcePages } from "@/data/resources";
import NotFound from "./NotFound";
export default function ResourcePage() {
 const { pathname } = useLocation(); const page = resourcePages.find(p => p.path === pathname);
 if (!page) return <NotFound />;
 const informational = ["/terms", "/cookies", "/security", "/careers"].includes(pathname);
 return <PageShell title={`${page.title} | Silxor`} description={page.description} path={page.path}>
  <PageHero eyebrow={page.eyebrow} title={page.title} lead={page.lead} crumbs={[{label:"Home",to:"/"},{label:page.title}]} />
  <section className="r-section"><div className="container-content grid gap-10 lg:grid-cols-[240px_1fr]">
   <nav aria-label={`${page.title} topics`} className="flex flex-wrap gap-3 self-start lg:sticky lg:top-28 lg:flex-col">{page.sections.map(s => <a key={s.id} href={`#${s.id}`} className="min-h-11 py-2 text-sm font-medium underline underline-offset-4 hover:text-forest">{s.title}</a>)}</nav>
   <article className="max-w-3xl">{page.sections.map((s,i) => <section id={s.id} key={s.id} className="scroll-mt-28 border-b border-border py-8 first:pt-0 last:border-0"><span className="font-mono text-xs text-muted-foreground">{String(i+1).padStart(2,"0")}</span><h2 className="mt-3 font-display text-2xl font-bold">{s.title}</h2><p className="mt-4 text-base leading-relaxed text-muted-foreground">{s.body}</p>{s.details && <p className="mt-3 text-base leading-relaxed text-muted-foreground">{s.details}</p>}{s.id === "apply" && <a href="mailto:hello@silxor.com?subject=Careers%20expression%20of%20interest" className="mt-5 inline-flex min-h-11 items-center font-semibold underline underline-offset-4">Email your expression of interest</a>}{s.id === "report" && <a href="mailto:hello@silxor.com?subject=Security%20disclosure" className="mt-5 inline-flex min-h-11 items-center font-semibold underline underline-offset-4">Report a security concern</a>}{s.id === "security-file" && <a href="/.well-known/security.txt" className="mt-4 inline-flex min-h-11 items-center underline underline-offset-4">Read security.txt</a>}</section>)}</article>
  </div></section>
  <section className="border-b border-border py-8"><nav aria-label="Related guidance" className="container-content flex flex-wrap gap-x-8 gap-y-4">{[{to:"/services",label:"Explore our services"},{to:"/engagement",label:"Compare engagement models"},{to:"/process",label:"Review our process"},{to:"/faq",label:"Frequently asked questions"},{to:"/privacy",label:"Privacy Policy"},{to:"/security",label:"Responsible disclosure"}].filter(l=>l.to!==pathname).map(l=><SmartLink key={l.to} to={l.to} className="min-h-11 py-2 text-sm font-medium underline underline-offset-4">{l.label}</SmartLink>)}</nav></section>
  {!informational && <CtaBand />}
 </PageShell>;
}
