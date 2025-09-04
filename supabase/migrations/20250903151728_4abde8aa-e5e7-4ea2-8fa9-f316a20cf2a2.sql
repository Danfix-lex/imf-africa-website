-- Fix email harvesting vulnerability by ensuring strict access control

-- First, drop any existing policies on email_subscriptions to start fresh
DROP POLICY IF EXISTS "Admins can view email subscriptions" ON public.email_subscriptions;
DROP POLICY IF EXISTS "Service role can view email subscriptions" ON public.email_subscriptions;
DROP POLICY IF EXISTS "Controlled email subscription inserts" ON public.email_subscriptions;
DROP POLICY IF EXISTS "Anyone can view email subscriptions" ON public.email_subscriptions;
DROP POLICY IF EXISTS "Public can view email subscriptions" ON public.email_subscriptions;

-- Create secure policies that prevent email harvesting

-- 1. Only admins and service roles can SELECT (view) email addresses
CREATE POLICY "Only admins and service can view email subscriptions" 
ON public.email_subscriptions 
FOR SELECT 
USING (
  has_role(auth.uid(), 'admin'::app_role) OR 
  ((auth.jwt() ->> 'role'::text) = 'service_role'::text)
);

-- 2. Controlled INSERT with email validation - no SELECT access granted
CREATE POLICY "Controlled email subscription inserts" 
ON public.email_subscriptions 
FOR INSERT 
WITH CHECK (
  -- Email validation
  (email ~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'::text) AND 
  (length(email) <= 254) AND 
  (length(email) >= 5) AND
  -- Prevent duplicate subscriptions
  NOT EXISTS (
    SELECT 1 FROM public.email_subscriptions 
    WHERE email = NEW.email AND is_active = true
  )
);

-- 3. Only admins can UPDATE email subscriptions (e.g., to deactivate)
CREATE POLICY "Only admins can update email subscriptions" 
ON public.email_subscriptions 
FOR UPDATE 
USING (has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- 4. Only admins can DELETE email subscriptions
CREATE POLICY "Only admins can delete email subscriptions" 
ON public.email_subscriptions 
FOR DELETE 
USING (has_role(auth.uid(), 'admin'::app_role));

-- Add an index for better performance on email lookups (admin use)
CREATE INDEX IF NOT EXISTS idx_email_subscriptions_email ON public.email_subscriptions(email);
CREATE INDEX IF NOT EXISTS idx_email_subscriptions_active ON public.email_subscriptions(is_active) WHERE is_active = true;