import { supabase } from "@/integrations/supabase/client";

export interface Donor {
  id: string;
  name: string;
  age: number;
  blood_group: string;
  city: string;
  country: string;
  phone: string;
  email: string;
  last_donation?: string;
  available: boolean;
  created_at?: string;
}

export interface BloodRequest {
  id: string;
  name: string;
  age: number;
  blood_group: string;
  city: string;
  country: string;
  phone: string;
  email: string;
  reason: string;
  urgent: boolean;
  created_at?: string;
}

export const getDonors = async (): Promise<Donor[]> => {
  const { data, error } = await supabase
    .from('donors')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) {
    console.error('Error fetching donors:', error);
    return [];
  }
  
  return data || [];
};

export const saveDonor = async (donor: Omit<Donor, "id" | "created_at">): Promise<Donor | null> => {
  const { data, error } = await supabase
    .from('donors')
    .insert([donor])
    .select()
    .single();
  
  if (error) {
    console.error('Error saving donor:', error);
    return null;
  }
  
  return data;
};

export const getBloodRequests = async (): Promise<BloodRequest[]> => {
  const { data, error} = await supabase
    .from('blood_requests')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) {
    console.error('Error fetching blood requests:', error);
    return [];
  }
  
  return data || [];
};

export const saveBloodRequest = async (request: Omit<BloodRequest, "id" | "created_at">): Promise<BloodRequest | null> => {
  const { data, error } = await supabase
    .from('blood_requests')
    .insert([request])
    .select()
    .single();
  
  if (error) {
    console.error('Error saving blood request:', error);
    return null;
  }
  
  return data;
};

export const findMatchingDonors = async (bloodGroup: string, city: string): Promise<Donor[]> => {
  const { data, error } = await supabase
    .from('donors')
    .select('*')
    .eq('blood_group', bloodGroup)
    .ilike('city', city)
    .eq('available', true);
  
  if (error) {
    console.error('Error finding matching donors:', error);
    return [];
  }
  
  return data || [];
};

export const deleteDonor = async (id: string): Promise<boolean> => {
  const { error } = await supabase
    .from('donors')
    .delete()
    .eq('id', id);
  
  if (error) {
    console.error('Error deleting donor:', error);
    return false;
  }
  
  return true;
};

export const deleteBloodRequest = async (id: string): Promise<boolean> => {
  const { error } = await supabase
    .from('blood_requests')
    .delete()
    .eq('id', id);
  
  if (error) {
    console.error('Error deleting blood request:', error);
    return false;
  }
  
  return true;
};
