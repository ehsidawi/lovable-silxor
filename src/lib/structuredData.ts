import { business, SITE, faqs, serviceFaqs } from "../data/site";
import { getService } from "../data/services";
import { insights, insightPath } from "../data/insights";
export function structuredData(path: string, title: string, description: string) {
 const id = `${SITE}/#organization`; const service = path.startsWith("/services/") ? getService(path.split("/")[2]) : undefined;
 const article = insights.find(a=>insightPath(a)===path);
 const graph: Record<string, unknown>[] = [
  { "@type": ["Organization", "ProfessionalService", "LocalBusiness"], "@id": id, ...business, legalName: business.name, description: "Enterprise technology consultancy covering IT strategy, infrastructure, cybersecurity, identity, managed IT, software, private AI and hardware engineering." },
  { "@type": "WebSite", "@id": `${SITE}/#website`, url: `${SITE}/`, name: business.name, inLanguage: "en", publisher: { "@id": id } },
  { "@type": "WebPage", "@id": `${SITE}${path}#webpage`, url: `${SITE}${path}`, name: title, description, isPartOf: { "@id": `${SITE}/#website` } },
 ];
 if(path !== "/") {
  const crumbs = [{"@type":"ListItem",position:1,name:"Home",item:`${SITE}/`}];
  if(service) crumbs.push({"@type":"ListItem",position:2,name:"Services",item:`${SITE}/services`});
  if(article) crumbs.push({"@type":"ListItem",position:2,name:"Insights",item:`${SITE}/insights`});
  crumbs.push({"@type":"ListItem",position:crumbs.length+1,name:service?.name ?? title.replace(/ \| Silxor.*$/, ""),item:`${SITE}${path}`});
  graph.push({"@type":"BreadcrumbList",itemListElement:crumbs});
 }
 if(service) graph.push({"@type":"Service", "@id":`${SITE}${path}#service`,name:service.name,description:service.intro,serviceType:service.name,url:`${SITE}${path}`,provider:{"@id":id}});
 if(article) graph.push({"@type":"Article","@id":`${SITE}${path}#article`,headline:article.title,description:article.description,url:`${SITE}${path}`,mainEntityOfPage:{"@id":`${SITE}${path}#webpage`},author:{"@type":"Organization",name:"Silxor",url:`${SITE}/`},publisher:{"@id":id},inLanguage:"en",articleBody:article.sections.map(s=>`${s.title}\n${s.paragraphs.join('\n')}`).join('\n')});
 const questions = path === "/faq" ? faqs : service ? serviceFaqs(service) : [];
 if(questions.length) graph.push({"@type":"FAQPage", "@id":`${SITE}${path}#faq`,mainEntity:questions.map(f=>({"@type":"Question",name:f.q,acceptedAnswer:{"@type":"Answer",text:f.a}}))});
 return { "@context": "https://schema.org", "@graph": graph };
}
