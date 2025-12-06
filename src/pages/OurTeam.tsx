import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Users, Mail, Linkedin, Heart, Globe, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const leadership = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Chief Executive Officer",
    bio: "Former WHO advisor with 20+ years in healthcare management. Passionate about making blood donation accessible worldwide.",
    image: "👩‍⚕️"
  },
  {
    name: "Dr. James Rodriguez",
    role: "Chief Medical Officer",
    bio: "Hematologist with expertise in transfusion medicine. Led blood banking operations across 15 countries.",
    image: "👨‍⚕️"
  },
  {
    name: "Emily Chen",
    role: "Chief Technology Officer",
    bio: "Tech entrepreneur who previously built healthcare platforms reaching 50M+ users globally.",
    image: "👩‍💻"
  },
  {
    name: "Michael Thompson",
    role: "Chief Operations Officer",
    bio: "Operations expert who scaled NGO logistics in 100+ countries. MBA from Harvard Business School.",
    image: "👨‍💼"
  }
];

const departments = [
  {
    name: "Medical Team",
    count: 150,
    description: "Doctors, nurses, and lab technicians ensuring safety and quality",
    icon: "🏥"
  },
  {
    name: "Technology",
    count: 80,
    description: "Engineers and designers building our platform",
    icon: "💻"
  },
  {
    name: "Community",
    count: 200,
    description: "Coordinators managing donor relationships worldwide",
    icon: "🤝"
  },
  {
    name: "Operations",
    count: 120,
    description: "Logistics experts ensuring timely blood delivery",
    icon: "🚚"
  }
];

const advisors = [
  { name: "Prof. Maria Santos", expertise: "Immunology, Stanford University", image: "👩‍🏫" },
  { name: "Dr. Ahmed Hassan", expertise: "Public Health, WHO", image: "👨‍🔬" },
  { name: "Lisa Wang", expertise: "Healthcare Tech, Former Google", image: "👩‍💼" },
  { name: "Dr. John Smith", expertise: "Transfusion Medicine, Mayo Clinic", image: "👨‍⚕️" }
];

const OurTeam = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Meet Our Team
            </h1>
            <p className="text-lg text-muted-foreground">
              Dedicated professionals working together to save lives every day
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Leadership Team</h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {leadership.map((member, index) => (
              <Card key={index} className="p-6 shadow-card hover:shadow-card-hover transition-smooth border-2 border-transparent hover:border-primary">
                <div className="flex gap-6">
                  <div className="text-6xl">{member.image}</div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                    <div className="flex gap-3">
                      <button className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-smooth">
                        <Mail className="w-4 h-4 text-primary" />
                      </button>
                      <button className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-smooth">
                        <Linkedin className="w-4 h-4 text-primary" />
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Our Departments</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="p-6 text-center shadow-card hover:shadow-card-hover transition-smooth">
                <div className="text-4xl mb-3">{dept.icon}</div>
                <h3 className="font-bold text-foreground mb-1">{dept.name}</h3>
                <p className="text-3xl font-bold text-primary mb-2">{dept.count}+</p>
                <p className="text-xs text-muted-foreground">{dept.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Total Team */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-3xl mx-auto p-8 bg-primary/5 border-primary/20">
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <Globe className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
              <div>
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-3xl font-bold text-primary">550+</div>
                <div className="text-sm text-muted-foreground">Team Members</div>
              </div>
              <div>
                <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-3xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Awards Won</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Advisors Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Advisory Board</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {advisors.map((advisor, index) => (
              <Card key={index} className="p-6 text-center shadow-card hover:shadow-card-hover transition-smooth">
                <div className="text-5xl mb-3">{advisor.image}</div>
                <h3 className="font-bold text-foreground mb-1 text-sm">{advisor.name}</h3>
                <p className="text-xs text-muted-foreground">{advisor.expertise}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-2xl mx-auto p-8 text-center bg-primary text-primary-foreground">
            <Heart className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
            <p className="mb-6 opacity-90">
              We're always looking for passionate individuals who want to make a difference in healthcare
            </p>
            <a 
              href="mailto:careers@savelives.com" 
              className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-smooth"
            >
              <Mail className="w-5 h-5" />
              View Careers
            </a>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurTeam;
