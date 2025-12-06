import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Building, Heart, Globe, Users, Target, Award, Shield, Droplet } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const stats = [
  { label: "Years of Service", value: "15+", icon: Award },
  { label: "Countries Served", value: "150+", icon: Globe },
  { label: "Lives Saved", value: "5M+", icon: Heart },
  { label: "Active Donors", value: "2M+", icon: Users }
];

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We believe in the power of human kindness and the willingness to help those in need."
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "We maintain the highest standards of safety and quality in all our blood collection and distribution processes."
  },
  {
    icon: Users,
    title: "Community",
    description: "We foster a global community of donors united by the shared goal of saving lives."
  },
  {
    icon: Target,
    title: "Accessibility",
    description: "We strive to make blood donation accessible to everyone, everywhere, at any time."
  }
];

const team = [
  { name: "Dr. Sarah Mitchell", role: "Chief Medical Officer", image: "👩‍⚕️" },
  { name: "James Rodriguez", role: "Director of Operations", image: "👨‍💼" },
  { name: "Dr. Emily Chen", role: "Head of Research", image: "👩‍🔬" },
  { name: "Michael Thompson", role: "Community Manager", image: "👨‍💻" }
];

const AboutUs = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Building className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About SaveLifes
            </h1>
            <p className="text-lg text-muted-foreground">
              Connecting donors with those in need, one donation at a time
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  SaveLifes was founded with a simple yet powerful mission: to ensure that no one dies due to the lack of blood availability. We believe that every person has the potential to be a lifesaver.
                </p>
                <p className="text-muted-foreground">
                  Through technology and community building, we've created a global platform that connects blood donors with recipients in real-time, making the process of finding and donating blood simpler, faster, and more efficient than ever before.
                </p>
              </div>
              <Card className="p-8 bg-primary/5 border-primary/20">
                <Droplet className="w-16 h-16 text-primary mx-auto mb-6" />
                <blockquote className="text-center text-lg italic text-foreground">
                  "Every blood donation is a gift of life. Together, we can ensure that this gift reaches everyone who needs it."
                </blockquote>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  — SaveLifes Founder
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Our Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 text-center shadow-card hover:shadow-card-hover transition-smooth">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="p-6 shadow-card hover:shadow-card-hover transition-smooth border-2 border-transparent hover:border-primary">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Our Team</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <Card key={index} className="p-6 text-center shadow-card hover:shadow-card-hover transition-smooth">
                  <div className="text-5xl mb-4">{member.image}</div>
                  <h3 className="font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-3xl mx-auto p-8 text-center bg-primary text-primary-foreground">
            <Globe className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Our Vision for the Future</h3>
            <p className="text-lg opacity-90 mb-6">
              We envision a world where blood is always available to those who need it, where donors and recipients are connected instantly, and where no life is lost due to blood shortage.
            </p>
            <a 
              href="/donate" 
              className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-smooth"
            >
              <Heart className="w-5 h-5" />
              Join Our Mission
            </a>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
