-- Harden SELECT policy on public.email_subscriptions
-- Keep INSERT policy as-is; restrict reads to service role or admins via JWT claims

-- Ensure RLS is enabled (idempotent)
ALTER TABLE public.email_subscriptions ENABLE ROW LEVEL SECURITY;

-- Drop overly permissive SELECT policy if it exists
DROP POLICY IF EXISTS "Only service role can view email subscriptions" ON public.email_subscriptions;
DROP POLICY IF EXISTS "Anyone can view email subscriptions" ON public.email_subscriptions;

-- Create strict SELECT policy allowing only service role or admin users
CREATE POLICY "Only service role or admin can view email subscriptions"
ON public.email_subscriptions
FOR SELECT
USING (
  (auth.jwt() ->> 'role') = 'service_role'
  OR (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
  OR (auth.jwt() -> 'user_metadata' ->> 'role') = 'admin'
);