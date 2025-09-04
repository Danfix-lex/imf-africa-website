-- Clear all user data to start fresh
-- Delete profiles first (references auth.users)
DELETE FROM public.profiles;

-- Delete user roles
DELETE FROM public.user_roles;

-- Delete auth users (this will cascade to related data)
DELETE FROM auth.users;