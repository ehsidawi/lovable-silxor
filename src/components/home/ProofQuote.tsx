import { ArrowUpRight, Quote } from "lucide-react";
import SmartLink from "@/components/SmartLink";
const ProofQuote = () => (
  <section className="r-section bg-secondary"><div className="container-content grid gap-8 md:grid-cols-[80px_1fr]">
    <Quote className="h-12 w-12 text-forest" strokeWidth={1} aria-hidden="true" />
    <figure><blockquote className="max-w-4xl font-display text-2xl font-semibold leading-snug md:text-3xl">“They are built to support non technical founders and give you a full team of experts without you having to find, vet, and hire them.”</blockquote><div className="mt-7 flex flex-wrap justify-between gap-5"><figcaption className="font-mono text-[10px] uppercase text-muted-foreground">Founder · Private Client · Identity withheld by agreement</figcaption><SmartLink to="/clients" className="inline-flex items-center gap-2 text-sm font-semibold">Client proof <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></SmartLink></div></figure>
  </div></section>
);
export default ProofQuote;
