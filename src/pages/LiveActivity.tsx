import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Activity, Droplet, Heart, MapPin, Clock, TrendingUp, Users, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const mockActivities = [
  { type: "donation", name: "John D.", location: "New York, USA", bloodType: "O+", time: "2 mins ago" },
  { type: "request", name: "Maria S.", location: "London, UK", bloodType: "A-", time: "5 mins ago" },
  { type: "donation", name: "Ahmed K.", location: "Dubai, UAE", bloodType: "B+", time: "8 mins ago" },
  { type: "match", name: "Lisa W.", location: "Sydney, Australia", bloodType: "AB+", time: "12 mins ago" },
  { type: "donation", name: "Pierre L.", location: "Paris, France", bloodType: "O-", time: "15 mins ago" },
  { type: "request", name: "Yuki T.", location: "Tokyo, Japan", bloodType: "A+", time: "18 mins ago" },
  { type: "donation", name: "Hans M.", location: "Berlin, Germany", bloodType: "B-", time: "22 mins ago" },
  { type: "match", name: "Sofia R.", location: "Madrid, Spain", bloodType: "O+", time: "25 mins ago" },
];

const liveStats = [
  { label: "Donations Today", value: 1247, icon: Droplet, trend: "+12%" },
  { label: "Active Requests", value: 89, icon: Heart, trend: "-5%" },
  { label: "Matches Made", value: 76, icon: Users, trend: "+23%" },
  { label: "Countries Active", value: 42, icon: Globe, trend: "+2" }
];

const LiveActivity = () => {
  const { t } = useLanguage();
  const [activities, setActivities] = useState(mockActivities);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(true);
      setTimeout(() => setPulse(false), 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className={`inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-6 ${pulse ? 'animate-pulse' : ''}`}>
              <Activity className="w-8 h-8 text-green-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Live Activity Feed
            </h1>
            <p className="text-lg text-muted-foreground">
              Real-time blood donations and requests happening around the world
            </p>
            <div className="flex items-center justify-center gap-2 mt-4">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-green-600 font-medium">Live Updates</span>
            </div>
          </div>
        </div>
      </section>

      {/* Live Stats */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {liveStats.map((stat, index) => (
              <Card key={index} className="p-4 shadow-card">
                <div className="flex items-center justify-between mb-2">
                  <stat.icon className="w-5 h-5 text-primary" />
                  <span className={`text-xs font-medium ${stat.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.trend}
                  </span>
                </div>
                <div className="text-2xl font-bold text-foreground">{stat.value.toLocaleString()}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Activity Feed */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
              <Activity className="w-6 h-6 text-green-500" />
              Recent Activity
            </h2>
            <div className="space-y-4">
              {activities.map((activity, index) => (
                <Card 
                  key={index} 
                  className={`p-4 shadow-card hover:shadow-card-hover transition-smooth border-l-4 ${
                    activity.type === 'donation' 
                      ? 'border-l-green-500' 
                      : activity.type === 'request' 
                        ? 'border-l-primary' 
                        : 'border-l-blue-500'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        activity.type === 'donation' 
                          ? 'bg-green-500/20' 
                          : activity.type === 'request' 
                            ? 'bg-primary/20' 
                            : 'bg-blue-500/20'
                      }`}>
                        {activity.type === 'donation' ? (
                          <Droplet className="w-5 h-5 text-green-600" />
                        ) : activity.type === 'request' ? (
                          <Heart className="w-5 h-5 text-primary" />
                        ) : (
                          <Users className="w-5 h-5 text-blue-600" />
                        )}
                      </div>
                      <div>
                        <div className="font-medium text-foreground">
                          {activity.name} 
                          <span className="text-muted-foreground font-normal">
                            {activity.type === 'donation' 
                              ? ' donated blood' 
                              : activity.type === 'request' 
                                ? ' requested blood' 
                                : ' was matched with a donor'}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {activity.location}
                          </span>
                          <span className="bg-primary/10 text-primary px-2 py-0.5 rounded text-xs font-medium">
                            {activity.bloodType}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {activity.time}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Activity Map Placeholder */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-4xl mx-auto p-8 bg-primary/5 border-primary/20 text-center">
            <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-2">See Global Activity</h3>
            <p className="text-muted-foreground mb-6">
              View real-time donations and requests on our interactive world map
            </p>
            <a 
              href="/global-map" 
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-smooth"
            >
              <Globe className="w-5 h-5" />
              Open Global Map
            </a>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LiveActivity;
