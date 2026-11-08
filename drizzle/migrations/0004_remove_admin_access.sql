DROP POLICY IF EXISTS "Admins read consultations" ON public.consultation_requests;
DROP POLICY IF EXISTS "Admins update consultation status" ON public.consultation_requests;
REVOKE SELECT, UPDATE ON public.consultation_requests FROM authenticated;
REVOKE ALL ON public.user_roles FROM authenticated, anon;
COMMENT ON TABLE public.user_roles IS 'DEPRECATED: admin feature removed; pending drop';