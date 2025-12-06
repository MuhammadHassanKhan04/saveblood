import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { Donor, BloodRequest } from "@/utils/storage";
import { toast } from "sonner";

interface DataContextType {
  donors: Donor[];
  requests: BloodRequest[];
  refreshData: () => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [donors, setDonors] = useState<Donor[]>([]);
  const [requests, setRequests] = useState<BloodRequest[]>([]);

  const fetchDonors = async () => {
    const { data, error } = await supabase
      .from('donors')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error('Error fetching donors:', error);
      return;
    }
    
    setDonors(data || []);
  };

  const fetchRequests = async () => {
    const { data, error } = await supabase
      .from('blood_requests')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error('Error fetching blood requests:', error);
      return;
    }
    
    setRequests(data || []);
  };

  const refreshData = () => {
    fetchDonors();
    fetchRequests();
  };

  useEffect(() => {
    refreshData();

    // Subscribe to realtime changes for donors
    const donorsChannel = supabase
      .channel('donors-changes')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'donors'
        },
        (payload) => {
          const newDonor = payload.new as Donor;
          setDonors(prev => [newDonor, ...prev]);
          
          toast.success(`🩸 New Donor: ${newDonor.name}`, {
            description: `${newDonor.blood_group} - ${newDonor.city}, ${newDonor.country}`,
            duration: 5000,
          });
        }
      )
      .subscribe();

    // Subscribe to realtime changes for blood requests
    const requestsChannel = supabase
      .channel('requests-changes')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'blood_requests'
        },
        (payload) => {
          const newRequest = payload.new as BloodRequest;
          setRequests(prev => [newRequest, ...prev]);
          
          toast.info(`🆘 Blood Request: ${newRequest.name}`, {
            description: `${newRequest.blood_group} needed - ${newRequest.city}, ${newRequest.country}`,
            duration: 5000,
          });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(donorsChannel);
      supabase.removeChannel(requestsChannel);
    };
  }, []);

  return (
    <DataContext.Provider value={{ donors, requests, refreshData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useGlobalData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useGlobalData must be used within DataProvider");
  }
  return context;
};
