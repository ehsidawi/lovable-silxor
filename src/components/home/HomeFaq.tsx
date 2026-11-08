import { ChevronDown } from "lucide-react";
import SmartLink from "@/components/SmartLink";
import { faqs } from "@/data/site";
import heroArtwork from "@/assets/silxor-norch-hero.webp.asset.json";

const HomeFaq = () => (
  <section className="r-section" aria-labelledby="home-faq-title"><div className="container-content">
    <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
      <div><span className="r-eyebrow">FAQ</span><h2 id="home-faq-title" className="r-title mt-4 max-w-2xl">Answers before you decide</h2></div>
      <p className="r-lead max-w-xl lg:justify-self-end">Common questions about scope, engagement and how we work. <SmartLink to="/faq" className="text-foreground underline underline-offset-4">Read all questions</SmartLink></p>
    </div>
    <div className="mt-14 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
      <div className="flex flex-col gap-4">{faqs.slice(0, 5).map(f => <details key={f.q} className="group r-card px-7 py-1">
        <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-5 py-5 text-lg font-medium [&::-webkit-details-marker]:hidden">{f.q}<span className="r-node h-10 w-10"><ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" aria-hidden="true" /></span></summary>
        <p className="r-lead pb-6">{f.a}</p>
      </details>)}</div>
      <img src={heroArtwork.url} alt="" aria-hidden="true" loading="lazy" width={900} height={1056} className="hidden h-full max-h-[640px] w-full rounded-[32px] border border-border object-cover lg:block" />
    </div>
  </div></section>
);
export default HomeFaq;
