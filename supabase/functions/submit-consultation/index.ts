import { createClient } from 'npm:@supabase/supabase-js@2';
import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';
import { consultationSchema } from './schema.ts';

const reply = (status: number, data: unknown) => new Response(JSON.stringify(data), {status, headers:{...corsHeaders, 'Content-Type':'application/json','Cache-Control':'no-store'}});
Deno.serve(async req => {
 if(req.method === 'OPTIONS') return new Response('ok', {headers:corsHeaders});
 if(req.method !== 'POST') return reply(405,{error:'Use the consultation form to submit a request.'});
 try {
  if(Number(req.headers.get('content-length')) > 16000) return reply(413,{error:'Your request is too long.'});
  const raw = await req.text();
  if(new TextEncoder().encode(raw).length > 16000) return reply(413,{error:'Your request is too long.'});
  const parsed = consultationSchema.safeParse(JSON.parse(raw));
  if(!parsed.success) return reply(400,{error:'Review the highlighted fields.',fields:parsed.error.flatten().fieldErrors});
  const {website, ...request} = parsed.data;
  if(website) return reply(400,{error:'The request could not be accepted. Please email hello@silxor.com.'});
  const url = Deno.env.get('SUPABASE_URL');
  const key = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
  if(!url || !key) return reply(503,{error:'The form is temporarily unavailable. Please email hello@silxor.com.'});
  const client = createClient(url,key,{auth:{persistSession:false,autoRefreshToken:false}});
  const {error} = await client.from('consultation_requests').insert(request);
  if(error) return reply(503,{error:'We could not save your request. Please retry or email hello@silxor.com.'});
  return reply(201,{success:true});
 } catch {
  return reply(400,{error:'Your request could not be processed. Review your details and try again.'});
 }
});