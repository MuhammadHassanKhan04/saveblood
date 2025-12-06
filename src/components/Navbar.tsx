import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Droplet, Users, HeartPulse, Globe, Info, Phone, Mail, Clock, Award, Shield, Heart, Activity, FileText, HelpCircle, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, language, setLanguage } = useLanguage();

  const navigation = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.donate"), href: "/donate" },
    { name: t("nav.need"), href: "/need-blood" },
  ];

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "hi", name: "हिन्दी", flag: "🇮🇳" },
    { code: "ar", name: "العربية", flag: "🇸🇦" },
    { code: "ur", name: "اردو", flag: "🇵🇰" },
    { code: "bn", name: "বাংলা", flag: "🇧🇩" },
    { code: "zh", name: "中文", flag: "🇨🇳" },
    { code: "pt", name: "Português", flag: "🇧🇷" },
    { code: "ru", name: "Русский", flag: "🇷🇺" },
  ];

  return (
    <nav className="bg-card shadow-card sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 animate-fade-in">
            <div className="bg-primary rounded-full p-2">
              <Droplet className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">SaveLifes</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-smooth ${
                  location.pathname === item.href
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Community Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="px-3 py-2 text-sm font-medium">
                  <Users className="mr-2 h-4 w-4" />
                  Community
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 bg-card border-border">
                <DropdownMenuLabel className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-primary" />
                  Blood Community
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem asChild>
                    <Link to="/donors" className="cursor-pointer flex items-center">
                      <Droplet className="mr-2 h-4 w-4 text-primary" />
                      <div>
                        <div className="font-medium">Donor List</div>
                        <div className="text-xs text-muted-foreground">Find donors near you</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/requests" className="cursor-pointer flex items-center">
                      <HeartPulse className="mr-2 h-4 w-4 text-primary" />
                      <div>
                        <div className="font-medium">Blood Requests</div>
                        <div className="text-xs text-muted-foreground">View active requests</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/global-map" className="cursor-pointer flex items-center">
                      <Globe className="mr-2 h-4 w-4 text-primary" />
                      <div>
                        <div className="font-medium">Global Map</div>
                        <div className="text-xs text-muted-foreground">Worldwide donor network</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem asChild>
                    <Link to="/live-activity" className="cursor-pointer flex items-center">
                      <Activity className="mr-2 h-4 w-4 text-green-500" />
                      <div>
                        <div className="font-medium">Live Activity</div>
                        <div className="text-xs text-muted-foreground">Real-time donations</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/top-donors" className="cursor-pointer flex items-center">
                      <Award className="mr-2 h-4 w-4 text-yellow-500" />
                      <div>
                        <div className="font-medium">Top Donors</div>
                        <div className="text-xs text-muted-foreground">Our heroes</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Resources Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="px-3 py-2 text-sm font-medium">
                  <FileText className="mr-2 h-4 w-4" />
                  Resources
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 bg-card border-border">
                <DropdownMenuLabel className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-primary" />
                  Blood Donation Info
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem asChild>
                    <Link to="/faqs" className="cursor-pointer flex items-center">
                      <HelpCircle className="mr-2 h-4 w-4 text-blue-500" />
                      <div>
                        <div className="font-medium">FAQs</div>
                        <div className="text-xs text-muted-foreground">Common questions</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/eligibility" className="cursor-pointer flex items-center">
                      <Shield className="mr-2 h-4 w-4 text-green-500" />
                      <div>
                        <div className="font-medium">Eligibility</div>
                        <div className="text-xs text-muted-foreground">Check if you can donate</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/blood-types" className="cursor-pointer flex items-center">
                      <Heart className="mr-2 h-4 w-4 text-primary" />
                      <div>
                        <div className="font-medium">Blood Types</div>
                        <div className="text-xs text-muted-foreground">Learn about compatibility</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/process" className="cursor-pointer flex items-center">
                      <Clock className="mr-2 h-4 w-4 text-orange-500" />
                      <div>
                        <div className="font-medium">Process</div>
                        <div className="text-xs text-muted-foreground">What to expect</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* About Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="px-3 py-2 text-sm font-medium">
                  <Info className="mr-2 h-4 w-4" />
                  About
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 bg-card border-border">
                <DropdownMenuLabel className="flex items-center gap-2">
                  <Info className="h-4 w-4 text-primary" />
                  About SaveLifes
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem asChild>
                    <Link to="/about" className="cursor-pointer flex items-center">
                      <Building className="mr-2 h-4 w-4 text-blue-500" />
                      <div>
                        <div className="font-medium">Our Mission</div>
                        <div className="text-xs text-muted-foreground">Why we exist</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/team" className="cursor-pointer flex items-center">
                      <Users className="mr-2 h-4 w-4 text-green-500" />
                      <div>
                        <div className="font-medium">Our Team</div>
                        <div className="text-xs text-muted-foreground">Meet the people</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuLabel className="text-xs text-muted-foreground">Contact Us</DropdownMenuLabel>
                <DropdownMenuItem>
                  <Phone className="mr-2 h-4 w-4 text-primary" />
                  <div>
                    <div className="font-medium">Emergency Hotline</div>
                    <div className="text-xs text-primary">+1-800-BLOOD-911</div>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Mail className="mr-2 h-4 w-4 text-primary" />
                  <div>
                    <div className="font-medium">Email Support</div>
                    <div className="text-xs text-primary">support@savelives.com</div>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Clock className="mr-2 h-4 w-4 text-green-500" />
                  <div>
                    <div className="font-medium">Working Hours</div>
                    <div className="text-xs text-muted-foreground">24/7 Available</div>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="px-3 py-2 text-sm font-medium">
                  <Globe className="mr-2 h-4 w-4" />
                  {languages.find(l => l.code === language)?.flag || "🌐"}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-card border-border">
                <DropdownMenuLabel>Select Language</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code as any)}
                    className={language === lang.code ? "bg-primary/10" : ""}
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-card border-t border-border animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-smooth ${
                  location.pathname === item.href
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/donors"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-secondary"
            >
              Donor List
            </Link>
            <Link
              to="/requests"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-secondary"
            >
              Blood Requests
            </Link>
            <Link
              to="/global-map"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-secondary"
            >
              Global Map
            </Link>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as any)}
              className="w-full px-3 py-2 rounded-md text-base font-medium bg-secondary text-foreground border border-border cursor-pointer"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.flag} {lang.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
