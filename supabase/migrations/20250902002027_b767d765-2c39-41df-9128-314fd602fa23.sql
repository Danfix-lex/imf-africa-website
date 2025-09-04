-- Improve security for email_subscriptions table
-- Drop existing policies that might be too permissive
DROP POLICY IF EXISTS "Anyone can subscribe to emails" ON email_subscriptions;

-- Add rate limiting table for subscription attempts
CREATE TABLE IF NOT EXISTS public.subscription_attempts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  ip_address INET NOT NULL,
  email TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  success BOOLEAN DEFAULT false
);

-- Enable RLS on subscription attempts
ALTER TABLE public.subscription_attempts ENABLE ROW LEVEL SECURITY;

-- Drop existing policy if it exists and recreate
DROP POLICY IF EXISTS "Only admins can view subscription attempts" ON public.subscription_attempts;

-- Only admins can view subscription attempts (for monitoring)
CREATE POLICY "Only admins can view subscription attempts"
ON public.subscription_attempts
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));

-- Create a more restrictive policy for email subscriptions
-- This allows inserts but adds some basic protections
CREATE POLICY "Controlled email subscription inserts"
ON public.email_subscriptions
FOR INSERT
WITH CHECK (
  -- Basic email format validation at DB level
  email ~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
  AND length(email) <= 254
  AND length(email) >= 5
);

-- Add index for better performance on email lookups
CREATE INDEX IF NOT EXISTS idx_email_subscriptions_email ON public.email_subscriptions(email);

-- Add index for subscription attempts monitoring
CREATE INDEX IF NOT EXISTS idx_subscription_attempts_ip_created ON public.subscription_attempts(ip_address, created_at);
CREATE INDEX IF NOT EXISTS idx_subscription_attempts_email_created ON public.subscription_attempts(email, created_at);

-- Secure email subscriptions: prevent email harvesting by restricting SELECT access
-- Only allow service role (backend) to read email subscriptions for admin purposes
CREATE POLICY "Only service role can view email subscriptions"
ON public.email_subscriptions
FOR SELECT
TO service_role
USING (true);

-- This ensures:
-- 1. Public users cannot harvest email addresses
-- 2. Only authenticated backend services can access the subscription list
-- 3. Subscription functionality remains intact for users