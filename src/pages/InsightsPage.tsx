import { useParams } from 'react-router-dom';
import PageShell from '@/components/layout/PageShell';
import PageHero from '@/components/PageHero';
import SmartLink from '@/components/SmartLink';
import CtaBand from '@/components/CtaBand';
import { insights, insightPath, readingTime } from '@/data/insights';
import { getService } from '@/data/services';
import NotFound from './NotFound';
export default function InsightsPage() {
 const { slug } = useParams();
 const article = slug ? insights.find(a => a.slug === slug) : undefined;
 if (slug && !article) return <NotFound />;
 return <PageShell title={`${article?.title ?? 'Insights'} | Silxor`} description={article?.description ?? 'Educational guides to enterprise identity, cybersecurity and infrastructure from Silxor.'} path={article ? insightPath(article) : '/insights'}>
  <PageHero eyebrow="Insights" title={article?.title ?? 'Enterprise technology insights'} lead={article?.description ?? 'Clear explanations of identity, security and infrastructure decisions.'} crumbs={article ? [{label:'Home',to:'/'},{label:'Insights',to:'/insights'},{label:article.title}] : [{label:'Home',to:'/'},{label:'Insights'}]} />
  {article ? <article className="container-content max-w-4xl py-12"><p className="border-b border-border pb-6 font-mono text-xs text-muted-foreground">Silxor · {readingTime(article)} min read</p>{article.sections.map((s,i) => <section id={`section-${i+1}`} key={s.title} className="scroll-mt-28 pt-9"><h2 className="font-display text-2xl font-bold">{s.title}</h2>{s.paragraphs.map(p => <p key={p} className="mt-4 text-base leading-relaxed text-muted-foreground">{p}</p>)}</section>)}<nav aria-label="Related services" className="mt-10 border-t border-border pt-7"><h2 className="font-display text-xl font-bold">Related services</h2><div className="mt-4 flex flex-wrap gap-6">{article.services.map(slug => getService(slug)).filter(s=>s!==undefined).map(s=><SmartLink key={s.slug} to={s.path} className="inline-flex min-h-11 items-center text-sm font-semibold underline underline-offset-4">{s.name}</SmartLink>)}<SmartLink to="/insights" className="inline-flex min-h-11 items-center text-sm underline underline-offset-4">All insights</SmartLink></div></nav></article> : <section className="r-section"><div className="container-content grid gap-5 md:grid-cols-2 lg:grid-cols-3">{insights.map(a => <article key={a.slug} className="r-card flex flex-col p-6"><p className="font-mono text-xs text-muted-foreground">Silxor · {readingTime(a)} min read</p><h2 className="mt-5 font-display text-xl font-bold"><SmartLink to={insightPath(a)} className="hover:text-forest">{a.title}</SmartLink></h2><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{a.description}</p><SmartLink to={insightPath(a)} className="mt-auto inline-flex min-h-11 items-center pt-5 text-sm font-semibold underline underline-offset-4">Read article<span className="sr-only">: {a.title}</span></SmartLink></article>)}</div></section>}
  <CtaBand />
 </PageShell>;
}