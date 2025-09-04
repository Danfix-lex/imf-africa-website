-- Restrict public access to profiles: only owners can read their profile
-- 1) Remove overly permissive public SELECT policy
DROP POLICY IF EXISTS "Profiles are viewable by everyone" ON public.profiles;

-- 2) Create least-privilege SELECT policy for authenticated users
CREATE POLICY "Users can view their own profile"
ON public.profiles
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);
