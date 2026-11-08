import { describe, expect, it } from 'bun:test';
import { insights, insightPath, readingTime } from './insights.ts';
import { caseStudies } from './caseStudies.ts';
import { founderBio } from './leadership.ts';
import { services } from './services.ts';
import { structuredData } from '../lib/structuredData.ts';
describe('completion content rules',()=>{
 it('provides the six requested educational topics',()=>expect(insights.map(a=>a.slug)).toEqual(['non-human-identity-governance','pam-vs-pim','iam-vs-ciam','practical-zero-trust-roadmap','on-premises-hybrid-multi-cloud','identity-governance-basics']));
 it('keeps case studies empty until supplied',()=>expect(caseStudies).toEqual([]));
 it('keeps the unsupplied founder bio empty',()=>expect(founderBio).toBe(''));
 it('credits every article to Silxor and adds the Insights breadcrumb',()=>{for(const a of insights){const graph=structuredData(insightPath(a),a.title,a.description)['@graph'];expect(graph.find(n=>n['@type']==='Article')?.author.name).toBe('Silxor');expect(graph.find(n=>n['@type']==='BreadcrumbList')?.itemListElement[1].item).toBe('https://silxor.com/insights');}});
 it('links articles only to actual services',()=>{for(const a of insights)for(const slug of a.services)expect(services.some(s=>s.slug===slug)).toBe(true);});
 it('computes reading time from supplied article content',()=>{expect(readingTime({...insights[0],sections:[{title:'Example',paragraphs:['word '.repeat(401)]}]})).toBe(3);});
});