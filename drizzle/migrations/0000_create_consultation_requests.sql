CREATE TABLE public.consultation_requests (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 created_at timestamptz NOT NULL DEFAULT now(),
 service_areas text[] NOT NULL CHECK (cardinality(service_areas) BETWEEN 1 AND 18 AND service_areas <@ ARRAY['product-team','advisory','cloud','cybersecurity','managed-services','private-ai','identity','software-engineering','hardware-engineering','iam','ciam','pam','pim','nhi','iga','federation','authentication','directories']::text[]),
 company text NOT NULL CHECK (char_length(company) BETWEEN 1 AND 160),
 role text NOT NULL CHECK (char_length(role) BETWEEN 1 AND 100),
 company_size text NOT NULL CHECK (company_size IN ('1 to 10','11 to 50','51 to 200','201 to 1000','1001 to 5000','5001 or more')),
 environment text NOT NULL CHECK (environment IN ('On premises','Hybrid','Cloud')),
 timeline text NOT NULL CHECK (timeline IN ('Exploring options','Within 1 month','1 to 3 months','3 to 6 months','More than 6 months')),
 description text NOT NULL CHECK (char_length(description) BETWEEN 10 AND 2000),
 name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 100),
 work_email text NOT NULL CHECK (char_length(work_email) <= 254 AND work_email ~ '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$'),
 phone text NOT NULL DEFAULT '' CHECK (char_length(phone) <= 40),
 preferred_contact text NOT NULL CHECK (preferred_contact IN ('Email','Phone') AND (preferred_contact <> 'Phone' OR char_length(phone) >= 5)),
 meeting_windows text NOT NULL CHECK (char_length(meeting_windows) BETWEEN 1 AND 300),
 time_zone text NOT NULL CHECK (char_length(time_zone) BETWEEN 1 AND 100)
);
GRANT ALL ON public.consultation_requests TO service_role;
REVOKE ALL ON public.consultation_requests FROM anon, authenticated;
ALTER TABLE public.consultation_requests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Server accepts validated consultation requests" ON public.consultation_requests FOR INSERT TO service_role WITH CHECK (true);
COMMENT ON TABLE public.consultation_requests IS 'Private consultation inquiries. Public submission is exclusively through the validated submit-consultation Edge Function; no public read, update or delete access.';