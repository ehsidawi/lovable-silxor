import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PageShell from '@/components/layout/PageShell';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';
import SmartLink from '@/components/SmartLink';
import { caseStudies } from '@/data/caseStudies';
import NotFound from './NotFound';
export default function CaseStudiesPage() {
 const {slug} = useParams(); const study=caseStudies.find(s=>s.slug===slug);
 if(slug && !study) return <NotFound />;
 return <PageShell title={`${study?.title ?? 'Case studies'} | Silxor`} description={study?.summary ?? 'Silxor publishes case studies only when approved facts and publication permission are available.'} path={study?`/case-studies/${study.slug}`:'/case-studies'}>
  {!caseStudies.length && <Helmet><meta name="robots" content="noindex, follow" /></Helmet>}
  <PageHero eyebrow="Case studies" title={study?.title ?? 'Case studies'} lead={study?.summary ?? 'No public case studies are available here yet. We publish project details only with permission and approved facts.'} crumbs={[{label:'Home',to:'/'},...(study?[{label:'Case studies',to:'/case-studies'}]:[]),{label:study?.title ?? 'Case studies'}]} />
  {study ? <article className="container-content max-w-4xl py-12">{study.sections.map(s=><section key={s.title} className="py-6"><h2 className="font-display text-2xl font-medium">{s.title}</h2><p className="mt-4 leading-relaxed text-muted-foreground">{s.body}</p></section>)}</article> : caseStudies.length>0 && <section className="r-section"><div className="container-content grid gap-5 md:grid-cols-2">{caseStudies.map(s=><article key={s.slug} className="r-card p-6"><h2 className="font-display text-xl font-medium"><SmartLink to={`/case-studies/${s.slug}`}>{s.title}</SmartLink></h2><p className="mt-4 text-muted-foreground">{s.summary}</p></article>)}</div></section>}
  <CtaBand />
 </PageShell>;
}