export type CaseStudy = { slug: string; title: string; summary: string; sections: { title: string; body: string }[]; services: string[] };
/** Publish only facts supplied and approved by the owner with client permission. */
export const caseStudies: CaseStudy[] = [];