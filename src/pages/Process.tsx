import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Clock, FileText, Stethoscope, Droplet, Coffee, CheckCircle, AlertCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const steps = [
  {
    icon: FileText,
    title: "Registration",
    duration: "5-10 minutes",
    description: "You'll sign in and show your ID. First-time donors will fill out a donor registration form.",
    details: [
      "Bring a valid photo ID",
      "Fill out the donor health history questionnaire",
      "Review important information about the donation process"
    ]
  },
  {
    icon: Stethoscope,
    title: "Health Screening",
    duration: "10-15 minutes",
    description: "A trained staff member will conduct a confidential health assessment.",
    details: [
      "Check your temperature, pulse, and blood pressure",
      "Test a small sample of blood for hemoglobin level",
      "Review your health history questionnaire",
      "Answer any questions privately"
    ]
  },
  {
    icon: Droplet,
    title: "The Donation",
    duration: "8-10 minutes",
    description: "The actual blood donation is quick and relatively painless.",
    details: [
      "Sit comfortably in a donor chair",
      "A sterile needle is inserted for the blood draw",
      "About 1 pint (450ml) of blood is collected",
      "All equipment is sterile and used only once"
    ]
  },
  {
    icon: Coffee,
    title: "Refreshments & Rest",
    duration: "10-15 minutes",
    description: "Take time to relax and enjoy some snacks before leaving.",
    details: [
      "Rest in the canteen area",
      "Enjoy complimentary snacks and drinks",
      "Receive aftercare instructions",
      "Get your donor card or receipt"
    ]
  }
];

const beforeDonation = [
  "Get a good night's sleep",
  "Eat a healthy meal (avoid fatty foods)",
  "Drink plenty of water",
  "Wear comfortable clothing with sleeves that roll up",
  "Bring a list of medications you're taking",
  "Bring your ID"
];

const afterDonation = [
  "Keep the bandage on for at least 4 hours",
  "Avoid heavy lifting or strenuous exercise for 24 hours",
  "Drink plenty of fluids",
  "Eat iron-rich foods",
  "If you feel dizzy, sit or lie down until it passes",
  "Avoid alcohol for 24 hours"
];

const Process = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Clock className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              The Donation Process
            </h1>
            <p className="text-lg text-muted-foreground">
              What to expect when you donate blood - from start to finish
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Step-by-Step Process</h2>
              <p className="text-muted-foreground">The entire process takes about 45-60 minutes</p>
            </div>
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <Card key={index} className="p-6 shadow-card relative overflow-hidden">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                        <step.icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">
                          Step {index + 1}
                        </span>
                        <span className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          {step.duration}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                      <p className="text-muted-foreground mb-4">{step.description}</p>
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start gap-2 text-sm text-foreground">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute left-8 top-24 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="p-8 shadow-card border-2 border-blue-500/20 bg-blue-50/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Before Donation</h3>
              </div>
              <ul className="space-y-3">
                {beforeDonation.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-foreground">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
            
            <Card className="p-8 shadow-card border-2 border-green-500/20 bg-green-50/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-foreground">After Donation</h3>
              </div>
              <ul className="space-y-3">
                {afterDonation.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-foreground">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-2xl mx-auto p-8 text-center bg-primary text-primary-foreground">
            <Droplet className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Ready to Start?</h3>
            <p className="mb-6 opacity-90">
              Now that you know what to expect, take the first step to save lives
            </p>
            <a 
              href="/donate" 
              className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-smooth"
            >
              Register Now
            </a>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Process;
