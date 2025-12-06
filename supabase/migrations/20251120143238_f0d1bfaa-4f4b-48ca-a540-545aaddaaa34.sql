-- Create donors table
CREATE TABLE public.donors (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  age INTEGER NOT NULL,
  blood_group TEXT NOT NULL,
  city TEXT NOT NULL,
  country TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  last_donation DATE,
  available BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create blood_requests table
CREATE TABLE public.blood_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  age INTEGER NOT NULL,
  blood_group TEXT NOT NULL,
  city TEXT NOT NULL,
  country TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  reason TEXT NOT NULL,
  urgent BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.donors ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blood_requests ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access (everyone can see all data)
CREATE POLICY "Anyone can view donors"
ON public.donors
FOR SELECT
USING (true);

CREATE POLICY "Anyone can insert donors"
ON public.donors
FOR INSERT
WITH CHECK (true);

CREATE POLICY "Anyone can view blood requests"
ON public.blood_requests
FOR SELECT
USING (true);

CREATE POLICY "Anyone can insert blood requests"
ON public.blood_requests
FOR INSERT
WITH CHECK (true);

-- Enable realtime for both tables
ALTER TABLE public.donors REPLICA IDENTITY FULL;
ALTER TABLE public.blood_requests REPLICA IDENTITY FULL;

ALTER PUBLICATION supabase_realtime ADD TABLE public.donors;
ALTER PUBLICATION supabase_realtime ADD TABLE public.blood_requests;