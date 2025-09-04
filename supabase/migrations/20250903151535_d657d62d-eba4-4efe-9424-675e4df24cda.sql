-- Clear all data from tables (in correct order due to foreign key constraints)

-- First, delete from child tables that reference other tables
DELETE FROM public.media;
DELETE FROM public.programs;
DELETE FROM public.categories;

-- Then delete from other tables
DELETE FROM public.email_subscriptions;
DELETE FROM public.profiles;
DELETE FROM public.subscription_attempts;
DELETE FROM public.user_roles;

-- Clear storage bucket contents (if any files were uploaded)
DELETE FROM storage.objects WHERE bucket_id = 'media';