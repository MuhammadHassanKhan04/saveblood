import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, Droplet, Heart, Clock, Shield, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const faqs = [
  {
    category: "General",
    icon: HelpCircle,
    questions: [
      {
        q: "What is blood donation?",
        a: "Blood donation is the process of voluntarily giving blood to be used for transfusions or made into biopharmaceutical medications. Donated blood is typically used to help patients during surgeries, trauma, cancer treatments, and for various medical conditions."
      },
      {
        q: "Is blood donation safe?",
        a: "Yes, blood donation is completely safe. All equipment used is sterile, used only once, and then discarded. There is no risk of contracting any disease from donating blood."
      },
      {
        q: "How long does the donation process take?",
        a: "The entire process takes about 45-60 minutes. The actual blood donation only takes 8-10 minutes, but registration, health screening, and post-donation rest add to the total time."
      }
    ]
  },
  {
    category: "Eligibility",
    icon: Shield,
    questions: [
      {
        q: "Who can donate blood?",
        a: "Generally, anyone who is in good health, at least 17 years old (16 with parental consent in some areas), and weighs at least 110 pounds (50 kg) can donate blood. However, specific eligibility may vary by country."
      },
      {
        q: "How often can I donate blood?",
        a: "Whole blood donors can give every 56 days (about 8 weeks). Platelet donors can give every 7 days, up to 24 times per year. Plasma donors can give every 28 days, up to 13 times per year."
      },
      {
        q: "Are there any temporary deferrals?",
        a: "Yes, temporary deferrals may include recent tattoos or piercings, travel to certain countries, recent illness, pregnancy, certain medications, and recent vaccinations. These are usually for a specific time period."
      }
    ]
  },
  {
    category: "Blood Types",
    icon: Droplet,
    questions: [
      {
        q: "What are the different blood types?",
        a: "There are 8 common blood types: A+, A-, B+, B-, AB+, AB-, O+, and O-. Blood type is determined by the presence or absence of certain antigens on the surface of red blood cells."
      },
      {
        q: "What is the universal donor type?",
        a: "O- is considered the universal donor for red blood cells because it can be transfused to patients of any blood type. AB+ is the universal recipient and can receive blood from any type."
      },
      {
        q: "Which blood type is most needed?",
        a: "All blood types are needed, but O- and O+ are in highest demand because O- can be given to anyone and O+ is the most common blood type. Certain blood types may be in higher demand in specific regions."
      }
    ]
  },
  {
    category: "After Donation",
    icon: Heart,
    questions: [
      {
        q: "What should I do after donating blood?",
        a: "After donating, rest for 10-15 minutes at the donation site, drink plenty of fluids, avoid strenuous activities for 24 hours, eat iron-rich foods, and keep the bandage on for several hours."
      },
      {
        q: "Are there any side effects?",
        a: "Most donors feel fine after donating. Some may experience mild dizziness, bruising at the needle site, or fatigue. These are usually temporary and resolve within a day."
      },
      {
        q: "How quickly does my body replace the donated blood?",
        a: "Your body replaces the fluid lost within 24 hours. Red blood cells are replaced within 4-6 weeks. This is why the waiting period between whole blood donations is 56 days."
      }
    ]
  }
];

const FAQs = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <HelpCircle className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about blood donation, eligibility, and the process
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {faqs.map((category, index) => (
              <Card key={index} className="p-6 shadow-card">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">{category.category}</h2>
                </div>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`${index}-${faqIndex}`}>
                      <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-2xl mx-auto p-8 text-center bg-primary/5 border-primary/20">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-2">Still have questions?</h3>
            <p className="text-muted-foreground mb-4">
              Our support team is available 24/7 to help you with any questions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:support@savelives.com" className="text-primary font-medium hover:underline">
                support@savelives.com
              </a>
              <span className="hidden sm:inline text-muted-foreground">|</span>
              <a href="tel:+18002566391" className="text-primary font-medium hover:underline">
                +1-800-BLOOD-911
              </a>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQs;
