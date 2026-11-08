import { Mail, Linkedin, ArrowUpRight } from 'lucide-react';
import PageShell from '@/components/layout/PageShell';
import PageHero from '@/components/PageHero';
import FAQ from '@/components/FAQ';
import SmartLink from '@/components/SmartLink';
import { Button } from '@/components/ui/button';
const ContactPage = () => <PageShell title="Contact Silxor | Enterprise Technology Consultancy" description="Contact Silxor at hello@silxor.com or +1 979 500 3390, or submit a consultation request about your enterprise technology needs." path="/contact">
 <PageHero eyebrow="Contact" title="Start with a conversation" lead="Tell us about your environment, goals and constraints. We will review your request and discuss the next steps." crumbs={[{label:'Home',to:'/'},{label:'Contact'}]} />
 <section className="r-section"><div className="container-content grid gap-10 md:grid-cols-2"><div><span className="r-eyebrow">Direct contact</span><h2 className="mt-5 font-display text-2xl font-medium">Reach Silxor</h2><a href="mailto:hello@silxor.com" className="mt-6 flex min-h-11 items-center gap-3 font-semibold underline underline-offset-4"><Mail aria-hidden="true" className="h-5 w-5"/>hello@silxor.com</a><p className="mt-4 text-muted-foreground">+1 979 500 3390</p><a href="https://www.linkedin.com/company/silxorllc/" target="_blank" rel="noopener noreferrer" className="mt-6 flex min-h-11 items-center gap-3 text-sm underline underline-offset-4"><Linkedin className="h-5 w-5" aria-hidden="true"/>Silxor on LinkedIn</a></div><div><h2 className="font-display text-2xl font-medium">Book a Consultation</h2><p className="r-lead mt-4">Share your service interests, company context and meeting preferences. We will reply by email. A meeting is confirmed separately.</p><Button asChild className="mt-6"><SmartLink to="/book">Book a Consultation <ArrowUpRight aria-hidden="true"/></SmartLink></Button></div></div></section><FAQ />
 </PageShell>;
export default ContactPage;
