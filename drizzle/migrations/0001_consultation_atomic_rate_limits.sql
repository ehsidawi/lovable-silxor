CREATE TABLE public.consultation_rate_limits (
 bucket_key text PRIMARY KEY,
 window_start timestamptz NOT NULL DEFAULT now(),
 attempts integer NOT NULL DEFAULT 0
);
GRANT ALL ON public.consultation_rate_limits TO service_role;
REVOKE ALL ON public.consultation_rate_limits FROM anon, authenticated;
ALTER TABLE public.consultation_rate_limits ENABLE ROW LEVEL SECURITY;
COMMENT ON TABLE public.consultation_rate_limits IS 'Server only keyed HMAC buckets, no raw IP or email. Expired buckets removed on later submissions. One hour window; maximum 24 hour inactivity retention until the next submission.';
CREATE FUNCTION public.reserve_consultation_submission(ip_key text, email_key text)
RETURNS integer LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE k text; lim integer; n integer; start_at timestamptz; wait_seconds integer := 0;
BEGIN
 IF ip_key !~ '^[a-f0-9]{64}$' OR email_key !~ '^[a-f0-9]{64}$' OR ip_key IS NULL OR email_key IS NULL THEN RAISE EXCEPTION 'Invalid limiter key'; END IF;
 PERFORM pg_advisory_xact_lock(784319206);
 DELETE FROM public.consultation_rate_limits WHERE window_start < now() - interval '24 hours';
 FOREACH k IN ARRAY ARRAY['global', 'ip:' || ip_key, 'email:' || email_key] LOOP
  lim := CASE WHEN k = 'global' THEN 60 WHEN k LIKE 'ip:%' THEN 5 ELSE 3 END;
  SELECT attempts, window_start INTO n, start_at FROM public.consultation_rate_limits WHERE bucket_key = k;
  IF FOUND AND start_at > now() - interval '1 hour' AND n >= lim THEN
   wait_seconds := greatest(wait_seconds, ceil(extract(epoch FROM start_at + interval '1 hour' - now()))::integer);
  END IF;
 END LOOP;
 IF wait_seconds > 0 THEN RETURN wait_seconds; END IF;
 FOREACH k IN ARRAY ARRAY['global', 'ip:' || ip_key, 'email:' || email_key] LOOP
  INSERT INTO public.consultation_rate_limits(bucket_key,window_start,attempts) VALUES(k,now(),1)
  ON CONFLICT(bucket_key) DO UPDATE SET attempts = CASE WHEN consultation_rate_limits.window_start <= now() - interval '1 hour' THEN 1 ELSE consultation_rate_limits.attempts + 1 END,
  window_start = CASE WHEN consultation_rate_limits.window_start <= now() - interval '1 hour' THEN now() ELSE consultation_rate_limits.window_start END;
 END LOOP;
 RETURN 0;
END;
$$;
REVOKE ALL ON FUNCTION public.reserve_consultation_submission(text,text) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.reserve_consultation_submission(text,text) TO service_role;