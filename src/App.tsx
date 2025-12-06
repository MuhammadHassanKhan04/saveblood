import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { DataProvider } from "@/contexts/DataContext";
import Index from "./pages/Index";
import DonateBlood from "./pages/DonateBlood";
import NeedBlood from "./pages/NeedBlood";
import DonorList from "./pages/DonorList";
import BloodRequests from "./pages/BloodRequests";
import GlobalMap from "./pages/GlobalMap";
import FAQs from "./pages/FAQs";
import Eligibility from "./pages/Eligibility";
import BloodTypes from "./pages/BloodTypes";
import Process from "./pages/Process";
import AboutUs from "./pages/AboutUs";
import OurTeam from "./pages/OurTeam";
import LiveActivity from "./pages/LiveActivity";
import TopDonors from "./pages/TopDonors";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <DataProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/donate" element={<DonateBlood />} />
              <Route path="/need-blood" element={<NeedBlood />} />
              <Route path="/donors" element={<DonorList />} />
              <Route path="/requests" element={<BloodRequests />} />
              <Route path="/global-map" element={<GlobalMap />} />
              <Route path="/faqs" element={<FAQs />} />
              <Route path="/eligibility" element={<Eligibility />} />
              <Route path="/blood-types" element={<BloodTypes />} />
              <Route path="/process" element={<Process />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/team" element={<OurTeam />} />
              <Route path="/live-activity" element={<LiveActivity />} />
              <Route path="/top-donors" element={<TopDonors />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </DataProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
