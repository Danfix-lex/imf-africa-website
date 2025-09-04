-- Add RLS policies for user_roles table
CREATE POLICY "Only admins and service role can view user roles"
ON public.user_roles 
FOR SELECT 
USING (
  has_role(auth.uid(), 'admin'::app_role) OR 
  (auth.jwt() ->> 'role') = 'service_role'
);

CREATE POLICY "Only admins can manage user roles"
ON public.user_roles 
FOR ALL
USING (has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));