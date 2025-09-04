-- Update Supabase auth settings to disable email confirmation for immediate login
UPDATE auth.config 
SET 
  enable_signup = true,
  enable_confirmations = false
WHERE true;