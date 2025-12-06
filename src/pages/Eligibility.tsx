import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Shield, Check, X, AlertTriangle, Clock, Heart, Droplet } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const eligibleCriteria = [
  "Age 17 or older (16 with parental consent in some areas)",
  "Weight at least 110 lbs (50 kg)",
  "In good general health and feeling well",
  "Have not donated blood in the last 56 days",
  "Have a valid ID with photo",
  "Hemoglobin level meets minimum requirements",
  "Blood pressure within acceptable range",
  "No history of blood-borne diseases"
];

const temporaryDeferrals = [
  { reason: "Cold, flu, or other infection", duration: "Until symptoms resolve" },
  { reason: "Antibiotics", duration: "24-48 hours after completing course" },
  { reason: "Tattoo or piercing", duration: "3-12 months depending on location" },
  { reason: "Travel to malaria-endemic areas", duration: "1-3 years" },
  { reason: "Pregnancy", duration: "6 weeks after delivery" },
  { reason: "Surgery", duration: "Varies based on procedure" },
  { reason: "Low iron levels", duration: "Until levels are restored" },
  { reason: "Certain vaccinations", duration: "2-4 weeks" }
];

const permanentDeferrals = [
  "History of HIV/AIDS",
  "History of Hepatitis B or C after age 11",
  "Use of injectable drugs not prescribed by a physician",
  "Certain blood disorders",
  "Certain cancers (varies by type and treatment)",
  "History of Creutzfeldt-Jakob Disease (CJD)"
];

const Eligibility = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Donor Eligibility
            </h1>
            <p className="text-lg text-muted-foreground">
              Check if you're eligible to donate blood and help save lives
            </p>
          </div>
        </div>
      </section>

      {/* Basic Requirements */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 shadow-card border-2 border-green-500/20 bg-green-50/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Basic Requirements</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {eligibleCriteria.map((criteria, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{criteria}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Temporary Deferrals */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 shadow-card border-2 border-yellow-500/20 bg-yellow-50/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-yellow-600" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Temporary Deferrals</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                These conditions may temporarily prevent you from donating, but you may be eligible after the waiting period:
              </p>
              <div className="space-y-4">
                {temporaryDeferrals.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg border border-border">
                    <div className="flex items-center gap-3">
                      <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                      <span className="text-foreground font-medium">{item.reason}</span>
                    </div>
                    <span className="text-sm text-muted-foreground bg-yellow-100 px-3 py-1 rounded-full">
                      {item.duration}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Permanent Deferrals */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 shadow-card border-2 border-red-500/20 bg-red-50/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
                  <X className="w-5 h-5 text-red-600" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Permanent Deferrals</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Certain conditions may permanently prevent blood donation for safety reasons:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {permanentDeferrals.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-2xl mx-auto p-8 text-center bg-primary/5 border-primary/20">
            <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-2">Ready to Donate?</h3>
            <p className="text-muted-foreground mb-6">
              If you meet the eligibility requirements, register now and start saving lives
            </p>
            <a 
              href="/donate" 
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-smooth"
            >
              <Droplet className="w-5 h-5" />
              Register as Donor
            </a>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Eligibility;
