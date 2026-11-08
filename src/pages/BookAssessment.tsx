import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, Send } from 'lucide-react';
import PageShell from '@/components/layout/PageShell';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { services } from '@/data/services';
import { companySizes, environments, timelines, contactMethods, needSchema, contextSchema, contactSchema, consultationSchema } from '@/lib/consultation';
import SmartLink from '@/components/SmartLink';

const steps = ['What you need','Your context','Contact details'];
const areas = [...services.map(s => ({id:s.slug,label:s.name})), ...(services.find(s=>s.slug==='identity')?.blocks ?? []).map(b => ({id:b.id ?? '', label:b.title.replace(/ \/ /g, ' · ')}))];
const initial = {service_areas:[] as string[],company:'',role:'',company_size:'',environment:'',timeline:'',description:'',name:'',work_email:'',phone:'',preferred_contact:'Email',meeting_windows:'',time_zone:'',website:''};
type Field = keyof typeof initial;
const BookAssessment = () => {
 const [step,setStep] = useState(0);
 const [values,setValues] = useState(initial);
 const [errors,setErrors] = useState<Record<string,string>>({});
 const [pending,setPending] = useState(false);
 const [saved,setSaved] = useState(false);
 const [failure,setFailure] = useState('');
 const heading = useRef<HTMLHeadingElement>(null);
 const form = useRef<HTMLFormElement>(null);
 const moved = useRef(false);
 useEffect(()=>{setValues(v=>({...v,time_zone:Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC'}));},[]);
 useEffect(()=>{ if(moved.current) heading.current?.focus(); },[step,saved]);
  const update = (key:Field,value:string|string[]) => {setValues(v=>({...v,[key]:value}));setErrors(e=>{const next={...e};delete next[key];if(key==='preferred_contact')delete next.phone;return next;});setFailure('');};
 const validate = () => {
  const result = [needSchema,contextSchema,contactSchema][step].safeParse(values);
  if(result.success) {setErrors({});return true;}
  const next:Record<string,string> = {};
  for(const issue of result.error.issues) {const key=String(issue.path[0]);if(!next[key])next[key]=issue.message;}
  setErrors(next);
  requestAnimationFrame(()=>{ const first=form.current?.querySelector<HTMLElement>('[aria-invalid="true"]');first?.focus(); });
  return false;
 };
 const field = (key:Exclude<Field,'service_areas'|'website'>,label:string,options?:readonly string[],max=100,type='text',optional=false) => <div className={key==='description'||key==='meeting_windows'?'sm:col-span-2':''} key={key}>
  <label htmlFor={key} className="mb-2 block text-sm font-semibold">{label}{optional && <span className="ml-2 font-normal text-muted-foreground">Optional</span>}</label>
  {options ? <select id={key} name={key} value={values[key]} onChange={e=>update(key,e.target.value)} aria-invalid={Boolean(errors[key])} aria-describedby={errors[key]?`${key}-error`:undefined} className="h-12 w-full rounded-sm border border-input bg-background px-3 text-base text-foreground"><option value="">Select an option</option>{options.map(o=><option key={o}>{o}</option>)}</select> : key==='description'||key==='meeting_windows' ? <Textarea id={key} name={key} value={values[key]} maxLength={max} rows={key==='description'?4:2} onChange={e=>update(key,e.target.value)} aria-invalid={Boolean(errors[key])} aria-describedby={`${key}-hint${errors[key]?` ${key}-error`:''}`} /> : <Input id={key} name={key} type={type} value={values[key]} maxLength={max} className="h-12 rounded-sm" autoComplete={key==='name'?'name':key==='work_email'?'email':key==='company'?'organization':key==='role'?'organization-title':key==='phone'?'tel':'off'} onChange={e=>update(key,e.target.value)} aria-invalid={Boolean(errors[key])} aria-describedby={errors[key]?`${key}-error`:undefined} />}
  {key==='description' && <p id="description-hint" className="mt-2 text-xs leading-relaxed text-muted-foreground">A short outline of your goals and constraints. Do not include passwords or sensitive production data. Up to 2000 characters.</p>}
  {key==='meeting_windows' && <p id="meeting_windows-hint" className="mt-2 text-xs text-muted-foreground">For example, Tuesdays and Thursdays, 09:00 to 12:00. A meeting is confirmed separately.</p>}
  {errors[key] && <p id={`${key}-error`} className="mt-2 text-sm text-destructive">{errors[key]}</p>}
 </div>;
 const submit = async (event:React.FormEvent) => {
  event.preventDefault();if(pending || !validate())return;
  if(step<2){moved.current=true;setStep(step+1);return;}
  const parsed = consultationSchema.safeParse(values);
  if(!parsed.success){setFailure('Review your details before sending.');return;}
  setPending(true);setFailure('');
  try {
   // Lazy import keeps the public static rendering free from browser auth storage.
   const {supabase} = await import('@/integrations/supabase/client');
   const {data,error} = await supabase.functions.invoke('submit-consultation',{body:parsed.data});
   if(error || !data?.success) {let message=data?.error; if(!message && error && 'context' in error && error.context instanceof Response){const body=await error.context.clone().json().catch(()=>null);message=body?.error;}setFailure(message || 'We could not save your request. Please try again or email hello@silxor.com.');return;}
   moved.current=true;setSaved(true);setValues(initial);
  } catch {setFailure('We could not save your request. Please try again or email hello@silxor.com.');}
  finally {setPending(false);}
 };
 return <PageShell title="Book a Consultation | Silxor" description="Tell Silxor about your enterprise technology needs. Submit a consultation request with your project context and contact preferences." path="/book">
  <section className="border-b border-border py-10 md:py-14"><div className="container-content"><Breadcrumbs items={[{label:'Home',to:'/'},{label:'Book a Consultation'}]} /><span className="r-eyebrow mt-7">Let’s talk</span><h1 className="r-title mt-4 max-w-3xl">Book a Consultation</h1><p className="r-lead mt-4 max-w-2xl">Share what you need and where you are today. We will review your request and reply by email.</p></div></section>
  <section className="container-content py-10 md:py-14"><div className="mx-auto max-w-3xl">
   {saved ? <div role="status" className="py-8"><CheckCircle2 className="mb-6 h-12 w-12 text-forest" aria-hidden="true" /><h2 ref={heading} tabIndex={-1} className="font-display text-3xl font-bold">Your request has been received</h2><p className="r-lead mt-4">Thank you for contacting Silxor. We will review your details and reply by email. Your meeting is not booked until we confirm it with you.</p><Button asChild variant="outline" className="mt-7"><SmartLink to="/services">Explore our services <ArrowRight aria-hidden="true" /></SmartLink></Button></div> : <>
    <ol aria-label="Consultation progress" className="mb-9 grid grid-cols-3 gap-3">{steps.map((label,i)=><li key={label} aria-current={i===step?'step':undefined} className={`border-t-4 pt-3 ${i<=step?'border-forest':'border-border'}`}><span className="font-mono text-xs text-muted-foreground">0{i+1}</span><span className={`mt-2 block text-sm ${i===step?'font-bold':'text-muted-foreground'}`}>{label}</span><span className="sr-only">{i<step?'Completed':i===step?'Current step':'Upcoming'}</span></li>)}</ol>
    <h2 ref={heading} tabIndex={-1} className="font-display text-2xl font-bold">{steps[step]}</h2>
    <form ref={form} onSubmit={submit} noValidate className="mt-6" aria-busy={pending}>
     <div hidden aria-hidden="true"><label htmlFor="website">Website</label><input id="website" name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={e=>update('website',e.target.value)} maxLength={200}/></div>
     {step===0 && <fieldset><legend className="mb-4 text-sm text-muted-foreground">Select the areas you would like to discuss.</legend><div className="grid gap-2 sm:grid-cols-2">{areas.map(a=><label key={a.id} htmlFor={`area-${a.id}`} className={`flex min-h-14 cursor-pointer items-center gap-3 rounded-sm border p-3 text-sm ${values.service_areas.includes(a.id)?'border-forest bg-secondary':'border-border bg-background'}`}><Checkbox id={`area-${a.id}`} className="h-5 w-5 border-input" checked={values.service_areas.includes(a.id)} aria-invalid={Boolean(errors.service_areas)} aria-describedby={errors.service_areas?'service_areas-error':undefined} onCheckedChange={checked=>update('service_areas',checked?[...values.service_areas,a.id]:values.service_areas.filter(id=>id!==a.id))}/><span>{a.label}</span></label>)}</div>{errors.service_areas && <p id="service_areas-error" role="alert" className="mt-3 text-sm text-destructive">{errors.service_areas}</p>}</fieldset>}
     {step===1 && <div className="grid gap-5 sm:grid-cols-2">{field('company','Company',undefined,160)}{field('role','Your role',undefined,100)}{field('company_size','Company size',companySizes)}{field('environment','Environment',environments)}{field('timeline','Timeline',timelines)}{field('description','What would you like to achieve?',undefined,2000)}</div>}
     {step===2 && <><div className="grid gap-5 sm:grid-cols-2">{field('name','Your name')}{field('work_email','Work email',undefined,254,'email')}{field('phone','Phone',undefined,40,'tel',true)}{field('preferred_contact','Preferred contact method',contactMethods)}{field('meeting_windows','Preferred meeting time windows',undefined,300)}{field('time_zone','Time zone',undefined,100)}</div><p className="mt-6 text-sm leading-relaxed text-muted-foreground">We will reply by email first, including when you prefer a phone conversation. Your details are used to review and respond to this request. <SmartLink to="/privacy" className="underline underline-offset-4">Privacy Policy</SmartLink></p></>}
     {failure && <p role="alert" className="mt-5 text-sm text-destructive">{failure}</p>}
     <div className="mt-8 flex items-center justify-between gap-3 border-t border-border pt-6">{step>0?<Button type="button" variant="outline" disabled={pending} onClick={()=>{moved.current=true;setErrors({});setStep(step-1);}}><ArrowLeft aria-hidden="true"/>Back</Button>:<span className="text-xs text-muted-foreground">Step {step+1} of 3</span>}<Button type="submit" disabled={pending}>{pending?'Sending…':step===2?'Send request':'Continue'}{step===2?<Send aria-hidden="true"/>:<ArrowRight aria-hidden="true"/>}</Button></div>
    </form></>}
   <div className="mt-9 border-t border-border pt-6 text-sm"><a href="mailto:hello@silxor.com" className="font-semibold underline underline-offset-4">hello@silxor.com</a><p className="mt-3 text-muted-foreground">+1 979 500 3390</p></div>
  </div></section>
 </PageShell>;
};
export default BookAssessment;
