import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Award, Medal, Trophy, Star, Droplet, Heart, Crown, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const topDonors = [
  { rank: 1, name: "Robert Williams", country: "USA", donations: 156, bloodType: "O-", badge: "Platinum" },
  { rank: 2, name: "Akiko Tanaka", country: "Japan", donations: 142, bloodType: "A+", badge: "Platinum" },
  { rank: 3, name: "Hans Mueller", country: "Germany", donations: 138, bloodType: "B+", badge: "Platinum" },
  { rank: 4, name: "Maria Garcia", country: "Spain", donations: 125, bloodType: "O+", badge: "Gold" },
  { rank: 5, name: "Ahmed Hassan", country: "Egypt", donations: 118, bloodType: "A-", badge: "Gold" },
  { rank: 6, name: "Sophie Martin", country: "France", donations: 112, bloodType: "AB+", badge: "Gold" },
  { rank: 7, name: "Li Wei", country: "China", donations: 105, bloodType: "B-", badge: "Silver" },
  { rank: 8, name: "Carlos Silva", country: "Brazil", donations: 98, bloodType: "O+", badge: "Silver" },
  { rank: 9, name: "Emma Johnson", country: "UK", donations: 92, bloodType: "A+", badge: "Silver" },
  { rank: 10, name: "Raj Patel", country: "India", donations: 87, bloodType: "B+", badge: "Silver" }
];

const achievements = [
  { name: "First Donation", icon: Droplet, requirement: "Complete your first donation", color: "text-blue-500" },
  { name: "Regular Donor", icon: Star, requirement: "10+ donations", color: "text-yellow-500" },
  { name: "Silver Hero", icon: Medal, requirement: "25+ donations", color: "text-gray-400" },
  { name: "Gold Champion", icon: Trophy, requirement: "50+ donations", color: "text-yellow-600" },
  { name: "Platinum Legend", icon: Crown, requirement: "100+ donations", color: "text-purple-500" },
  { name: "Life Saver", icon: Heart, requirement: "Helped 10+ recipients", color: "text-primary" }
];

const getRankIcon = (rank: number) => {
  switch (rank) {
    case 1:
      return <Crown className="w-6 h-6 text-yellow-500" />;
    case 2:
      return <Medal className="w-6 h-6 text-gray-400" />;
    case 3:
      return <Medal className="w-6 h-6 text-amber-600" />;
    default:
      return <span className="text-lg font-bold text-muted-foreground">#{rank}</span>;
  }
};

const getBadgeColor = (badge: string) => {
  switch (badge) {
    case "Platinum":
      return "bg-purple-500/20 text-purple-600";
    case "Gold":
      return "bg-yellow-500/20 text-yellow-600";
    case "Silver":
      return "bg-gray-500/20 text-gray-600";
    default:
      return "bg-primary/20 text-primary";
  }
};

const TopDonors = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500/20 rounded-full mb-6">
              <Award className="w-8 h-8 text-yellow-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Top Donors Hall of Fame
            </h1>
            <p className="text-lg text-muted-foreground">
              Celebrating our heroes who have made the most impact in saving lives
            </p>
          </div>
        </div>
      </section>

      {/* Top 3 Podium */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto flex items-end justify-center gap-4">
            {/* 2nd Place */}
            <Card className="w-48 p-6 text-center bg-gray-100 border-2 border-gray-300">
              <Medal className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <div className="text-4xl mb-2">🥈</div>
              <h3 className="font-bold text-foreground">{topDonors[1].name}</h3>
              <p className="text-sm text-muted-foreground">{topDonors[1].country}</p>
              <p className="text-2xl font-bold text-primary mt-2">{topDonors[1].donations}</p>
              <p className="text-xs text-muted-foreground">donations</p>
            </Card>

            {/* 1st Place */}
            <Card className="w-56 p-8 text-center bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-400 transform scale-110">
              <Crown className="w-16 h-16 text-yellow-500 mx-auto mb-3" />
              <div className="text-5xl mb-2">🥇</div>
              <h3 className="text-xl font-bold text-foreground">{topDonors[0].name}</h3>
              <p className="text-sm text-muted-foreground">{topDonors[0].country}</p>
              <p className="text-3xl font-bold text-primary mt-2">{topDonors[0].donations}</p>
              <p className="text-xs text-muted-foreground">donations</p>
            </Card>

            {/* 3rd Place */}
            <Card className="w-48 p-6 text-center bg-amber-50 border-2 border-amber-300">
              <Medal className="w-12 h-12 text-amber-600 mx-auto mb-3" />
              <div className="text-4xl mb-2">🥉</div>
              <h3 className="font-bold text-foreground">{topDonors[2].name}</h3>
              <p className="text-sm text-muted-foreground">{topDonors[2].country}</p>
              <p className="text-2xl font-bold text-primary mt-2">{topDonors[2].donations}</p>
              <p className="text-xs text-muted-foreground">donations</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Leaderboard */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-foreground mb-8">Full Leaderboard</h2>
          <div className="max-w-3xl mx-auto space-y-3">
            {topDonors.map((donor, index) => (
              <Card 
                key={index} 
                className={`p-4 shadow-card hover:shadow-card-hover transition-smooth ${index < 3 ? 'border-2 border-primary/20' : ''}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 flex items-center justify-center">
                      {getRankIcon(donor.rank)}
                    </div>
                    <div>
                      <div className="font-bold text-foreground">{donor.name}</div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        {donor.country}
                        <span className="bg-primary/10 text-primary px-2 py-0.5 rounded text-xs font-medium">
                          {donor.bloodType}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getBadgeColor(donor.badge)}`}>
                      {donor.badge}
                    </span>
                    <div className="text-right">
                      <div className="text-xl font-bold text-primary">{donor.donations}</div>
                      <div className="text-xs text-muted-foreground">donations</div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-foreground mb-8">Donor Achievements</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
            {achievements.map((achievement, index) => (
              <Card key={index} className="p-4 text-center shadow-card hover:shadow-card-hover transition-smooth">
                <achievement.icon className={`w-8 h-8 mx-auto mb-2 ${achievement.color}`} />
                <h3 className="font-bold text-foreground mb-1">{achievement.name}</h3>
                <p className="text-xs text-muted-foreground">{achievement.requirement}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-2xl mx-auto p-8 text-center bg-primary text-primary-foreground">
            <Trophy className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Become a Top Donor</h3>
            <p className="mb-6 opacity-90">
              Start your journey today and earn your place in the Hall of Fame
            </p>
            <a 
              href="/donate" 
              className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-smooth"
            >
              <Droplet className="w-5 h-5" />
              Register Now
            </a>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TopDonors;
