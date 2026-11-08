CREATE TYPE public.app_role AS ENUM ('admin');
CREATE TABLE public.user_roles (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
 role public.app_role NOT NULL,
 UNIQUE(user_id,role)
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
CREATE FUNCTION public.has_role(_user_id uuid, _role public.app_role) RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$ SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id=_user_id AND role=_role) $$;
REVOKE ALL ON FUNCTION public.has_role(uuid,public.app_role) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.has_role(uuid,public.app_role) TO authenticated, service_role;
CREATE POLICY "Users read own roles" ON public.user_roles FOR SELECT TO authenticated USING (user_id=auth.uid());
ALTER TABLE public.consultation_requests ADD COLUMN status text NOT NULL DEFAULT 'new';
ALTER TABLE public.consultation_requests ADD CONSTRAINT consultation_status_values CHECK (status IN ('new','contacted','closed'));
GRANT SELECT ON public.consultation_requests TO authenticated;
GRANT UPDATE(status) ON public.consultation_requests TO authenticated;
CREATE POLICY "Admins read consultations" ON public.consultation_requests FOR SELECT TO authenticated USING (public.has_role(auth.uid(),'admin'));
CREATE POLICY "Admins update consultation status" ON public.consultation_requests FOR UPDATE TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE INDEX consultation_status_created_at ON public.consultation_requests(status,created_at DESC);