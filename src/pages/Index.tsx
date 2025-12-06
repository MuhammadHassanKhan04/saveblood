import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Droplet, Heart, Users, Shield, Globe, HeartPulse } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-primary/10 via-background to-primary/5">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{ backgroundImage: 'url(/hero-bg.png)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-background/80 to-primary/20" />
        </div>

        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute top-60 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-1/3 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-primary rounded-full mb-8 animate-pulse-slow shadow-2xl">
              <Droplet className="w-12 h-12 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 leading-tight">
              {t("hero.title")}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                onClick={() => navigate("/donate")}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-card hover:shadow-card-hover transition-smooth text-xl px-10 py-7"
              >
                <Droplet className="mr-2 h-6 w-6" />
                {t("hero.donateBtn")}
              </Button>
              <Button
                onClick={() => navigate("/need-blood")}
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth text-xl px-10 py-7"
              >
                <HeartPulse className="mr-2 h-6 w-6" />
                {t("hero.needBtn")}
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t("about.title")}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("about.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Why Donate Section */}
      <section id="why-donate" className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12 animate-fade-in">
            {t("whyDonate.title")}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-6 text-center shadow-card hover:shadow-card-hover transition-smooth animate-fade-in border-2 border-transparent hover:border-primary">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {t("whyDonate.reason1")}
              </h3>
              <p className="text-muted-foreground">
                {t("whyDonate.reason1Desc")}
              </p>
            </Card>
            <Card className="p-6 text-center shadow-card hover:shadow-card-hover transition-smooth animate-fade-in border-2 border-transparent hover:border-primary">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {t("whyDonate.reason2")}
              </h3>
              <p className="text-muted-foreground">
                {t("whyDonate.reason2Desc")}
              </p>
            </Card>
            <Card className="p-6 text-center shadow-card hover:shadow-card-hover transition-smooth animate-fade-in border-2 border-transparent hover:border-primary">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {t("whyDonate.reason3")}
              </h3>
              <p className="text-muted-foreground">
                {t("whyDonate.reason3Desc")}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12 animate-fade-in">
            {t("howItWorks.title")}
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center animate-slide-up">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full text-2xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {t("howItWorks.step1")}
                </h3>
                <p className="text-muted-foreground">
                  {t("howItWorks.step1Desc")}
                </p>
              </div>
              <div className="text-center animate-slide-up">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full text-2xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {t("howItWorks.step2")}
                </h3>
                <p className="text-muted-foreground">
                  {t("howItWorks.step2Desc")}
                </p>
              </div>
              <div className="text-center animate-slide-up">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full text-2xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {t("howItWorks.step3")}
                </h3>
                <p className="text-muted-foreground">
                  {t("howItWorks.step3Desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Dashboard Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real-time statistics showing the power of our donor community
            </p>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="p-8 text-center shadow-card hover:shadow-card-hover transition-smooth border-2 border-transparent hover:border-primary group">
              <div className="text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-smooth">1.2M+</div>
              <div className="text-sm text-muted-foreground font-medium">Total Donations</div>
              <div className="text-xs text-muted-foreground mt-1">Last 12 months</div>
            </Card>
            <Card className="p-8 text-center shadow-card hover:shadow-card-hover transition-smooth border-2 border-transparent hover:border-primary group">
              <div className="text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-smooth">3.6M+</div>
              <div className="text-sm text-muted-foreground font-medium">Lives Saved</div>
              <div className="text-xs text-muted-foreground mt-1">And counting</div>
            </Card>
            <Card className="p-8 text-center shadow-card hover:shadow-card-hover transition-smooth border-2 border-transparent hover:border-primary group">
              <div className="text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-smooth">24/7</div>
              <div className="text-sm text-muted-foreground font-medium">Response Time</div>
              <div className="text-xs text-muted-foreground mt-1">Always available</div>
            </Card>
            <Card className="p-8 text-center shadow-card hover:shadow-card-hover transition-smooth border-2 border-transparent hover:border-primary group">
              <div className="text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-smooth">150+</div>
              <div className="text-sm text-muted-foreground font-medium">Countries</div>
              <div className="text-xs text-muted-foreground mt-1">Global reach</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Stories That Matter
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real experiences from donors and recipients in our community
            </p>
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <Card className="p-6 shadow-card hover:shadow-card-hover transition-smooth border-2 border-transparent hover:border-primary">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Sarah Johnson</h4>
                  <p className="text-sm text-muted-foreground">Regular Donor</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                "Donating blood has become a meaningful part of my life. Knowing that I can help save lives with such a simple act is incredibly fulfilling."
              </p>
            </Card>
            <Card className="p-6 shadow-card hover:shadow-card-hover transition-smooth border-2 border-transparent hover:border-primary">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Michael Chen</h4>
                  <p className="text-sm text-muted-foreground">Recipient</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                "I received blood during an emergency surgery. Thanks to generous donors, I'm here today with my family. Forever grateful."
              </p>
            </Card>
            <Card className="p-6 shadow-card hover:shadow-card-hover transition-smooth border-2 border-transparent hover:border-primary">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Emma Williams</h4>
                  <p className="text-sm text-muted-foreground">First-time Donor</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                "I was nervous at first, but the process was smooth and the staff was amazing. Now I donate regularly and encourage others to do the same."
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Contact Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <Shield className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Blood Urgently?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Our 24/7 emergency response team is ready to help you find donors immediately. Every second counts in critical situations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate("/need-blood")}
                size="lg"
                variant="secondary"
                className="text-lg px-8"
              >
                Request Blood Now
              </Button>
              <Button
                onClick={() => navigate("/blood-requests")}
                size="lg"
                variant="outline"
                className="text-lg px-8 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                View Active Requests
              </Button>
            </div>
            <div className="mt-8 pt-8 border-t border-primary-foreground/20">
              <p className="text-sm opacity-75">Emergency Hotline: <span className="font-bold text-lg">1-800-BLOOD-911</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Community CTA */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Globe className="w-16 h-16 mx-auto mb-6 animate-pulse-slow" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Global Community
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Thousands of donors worldwide are making a difference every day
          </p>
          <Button
            onClick={() => navigate("/global-map")}
            size="lg"
            variant="secondary"
            className="text-lg px-8"
          >
            View Global Impact
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
