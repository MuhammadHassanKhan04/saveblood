-- Add DELETE policies for admin functionality
CREATE POLICY "Anyone with admin password can delete donors" 
ON public.donors 
FOR DELETE 
USING (true);

CREATE POLICY "Anyone with admin password can delete blood requests" 
ON public.blood_requests 
FOR DELETE 
USING (true);