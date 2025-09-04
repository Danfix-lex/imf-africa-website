-- Secure roles model and RLS for email_subscriptions without referencing user_metadata
-- 1) Create enum for roles (idempotent)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_type WHERE typname = 'app_role'
  ) THEN
    CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');
  END IF;
END
$$;

-- 2) Create user_roles table (idempotent)
CREATE TABLE IF NOT EXISTS public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  UNIQUE (user_id, role)
);

-- 3) Enable RLS on user_roles and do not add permissive policies by default
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- 4) Security definer function to check a user's role (avoids recursive RLS)
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = ''
AS $$
  select exists (
    select 1
    from public.user_roles
    where user_id = _user_id
      and role = _role
  );
$$;

-- 5) Harden email_subscriptions SELECT policy without using user_metadata/app_metadata
ALTER TABLE public.email_subscriptions ENABLE ROW LEVEL SECURITY;

-- Drop prior permissive or metadata-based policies if they exist
DROP POLICY IF EXISTS "Only service role or admin can view email subscriptions" ON public.email_subscriptions;
DROP POLICY IF EXISTS "Only service role can view email subscriptions" ON public.email_subscriptions;
DROP POLICY IF EXISTS "Anyone can view email subscriptions" ON public.email_subscriptions;

-- Allow service role to select (server-side operations)
CREATE POLICY "Service role can view email subscriptions"
ON public.email_subscriptions
FOR SELECT
USING ((auth.jwt() ->> 'role') = 'service_role');

-- Allow authenticated admins (backed by user_roles) to select
CREATE POLICY "Admins can view email subscriptions"
ON public.email_subscriptions
FOR SELECT
USING (public.has_role(auth.uid(), 'admin'));

-- Note: Insert policies are intentionally left unchanged to avoid breaking public subscription flow
