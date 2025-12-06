import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Globe, MapPin, Users, Heart, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useGlobalData } from "@/contexts/DataContext";
import { MapContainer, TileLayer, Marker, Popup, CircleMarker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Card } from "@/components/ui/card";

// Fix for default markers
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const GlobalMap = () => {
  const { t } = useLanguage();
  const { donors } = useGlobalData();

  // Sample coordinates for demonstration
  const donorLocations = [
    { lng: -74.006, lat: 40.7128, country: "USA", city: "New York", donors: 156 },
    { lng: -0.1276, lat: 51.5074, country: "UK", city: "London", donors: 89 },
    { lng: 2.3522, lat: 48.8566, country: "France", city: "Paris", donors: 67 },
    { lng: 13.405, lat: 52.52, country: "Germany", city: "Berlin", donors: 78 },
    { lng: 139.6917, lat: 35.6895, country: "Japan", city: "Tokyo", donors: 134 },
    { lng: 121.4737, lat: 31.2304, country: "China", city: "Shanghai", donors: 201 },
    { lng: 77.209, lat: 28.6139, country: "India", city: "Delhi", donors: 312 },
    { lng: 72.8777, lat: 19.076, country: "India", city: "Mumbai", donors: 287 },
    { lng: 67.0011, lat: 24.8607, country: "Pakistan", city: "Karachi", donors: 145 },
    { lng: 74.3587, lat: 31.5204, country: "Pakistan", city: "Lahore", donors: 98 },
    { lng: -43.1729, lat: -22.9068, country: "Brazil", city: "Rio de Janeiro", donors: 76 },
    { lng: 151.2093, lat: -33.8688, country: "Australia", city: "Sydney", donors: 54 },
    { lng: 37.6173, lat: 55.7558, country: "Russia", city: "Moscow", donors: 89 },
    { lng: 31.2357, lat: 30.0444, country: "Egypt", city: "Cairo", donors: 67 },
    { lng: 36.8219, lat: -1.2921, country: "Kenya", city: "Nairobi", donors: 43 },
    { lng: 18.4241, lat: -33.9249, country: "South Africa", city: "Cape Town", donors: 38 },
    { lng: 55.2708, lat: 25.2048, country: "UAE", city: "Dubai", donors: 112 },
    { lng: 46.6753, lat: 24.7136, country: "Saudi Arabia", city: "Riyadh", donors: 87 },
    { lng: 28.9784, lat: 41.0082, country: "Turkey", city: "Istanbul", donors: 94 },
    { lng: 100.5018, lat: 13.7563, country: "Thailand", city: "Bangkok", donors: 63 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
            <Globe className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            {t("map.title")}
          </h1>
          <p className="text-muted-foreground">{t("map.subtitle")}</p>
        </div>

        {/* Statistics */}
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 animate-slide-up">
          <Card className="p-6 text-center bg-card shadow-card border-2 border-transparent hover:border-primary transition-smooth">
            <Users className="w-8 h-8 text-primary mx-auto mb-2" />
            <div className="text-3xl font-bold text-primary mb-2">{donors.length || 2500}+</div>
            <div className="text-sm text-muted-foreground">Total Donors</div>
          </Card>
          <Card className="p-6 text-center bg-card shadow-card border-2 border-transparent hover:border-primary transition-smooth">
            <Globe className="w-8 h-8 text-primary mx-auto mb-2" />
            <div className="text-3xl font-bold text-primary mb-2">150+</div>
            <div className="text-sm text-muted-foreground">Countries</div>
          </Card>
          <Card className="p-6 text-center bg-card shadow-card border-2 border-transparent hover:border-primary transition-smooth">
            <Heart className="w-8 h-8 text-primary mx-auto mb-2" />
            <div className="text-3xl font-bold text-primary mb-2">
              {(donors.length || 2500) * 3}+
            </div>
            <div className="text-sm text-muted-foreground">Lives Saved</div>
          </Card>
          <Card className="p-6 text-center bg-card shadow-card border-2 border-transparent hover:border-primary transition-smooth">
            <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Active Network</div>
          </Card>
        </div>

        {/* Map Container */}
        <div className="max-w-6xl mx-auto bg-card rounded-xl shadow-card overflow-hidden border-2 border-border animate-fade-in">
          <MapContainer
            center={[20, 0]}
            zoom={2}
            style={{ height: "500px", width: "100%" }}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {donorLocations.map((location, index) => (
              <CircleMarker
                key={index}
                center={[location.lat, location.lng]}
                radius={Math.min(location.donors / 10, 20)}
                pathOptions={{
                  color: "#DC2626",
                  fillColor: "#DC2626",
                  fillOpacity: 0.6,
                  weight: 2,
                }}
              >
                <Popup>
                  <div className="text-center p-2">
                    <h3 className="font-bold text-lg">{location.city}</h3>
                    <p className="text-sm text-gray-600">{location.country}</p>
                    <p className="text-primary font-semibold mt-1">{location.donors} donors</p>
                  </div>
                </Popup>
              </CircleMarker>
            ))}
          </MapContainer>
          <div className="p-6 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground bg-secondary/50">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-primary rounded-full animate-pulse-slow"></div>
              <span>Active Donor Locations</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Click for details</span>
            </div>
          </div>
        </div>

        {/* Blood Type Distribution */}
        <div className="max-w-4xl mx-auto mt-12 animate-slide-up">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">Blood Type Distribution</h2>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((type) => (
              <Card key={type} className="p-4 text-center bg-card hover:bg-primary/10 transition-smooth cursor-pointer">
                <div className="text-2xl font-bold text-primary mb-1">{type}</div>
                <div className="text-xs text-muted-foreground">{Math.floor(Math.random() * 500 + 100)}+</div>
              </Card>
            ))}
          </div>
        </div>

        {/* Impact Statement */}
        <div className="max-w-3xl mx-auto mt-12 text-center bg-gradient-to-br from-primary/10 to-transparent p-8 rounded-xl animate-slide-up">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Making a Global Impact
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Our community of blood donors spans across continents, creating a network of heroes
            ready to save lives at a moment's notice. Every red dot represents hope,
            compassion, and the potential to save up to 3 lives.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GlobalMap;
