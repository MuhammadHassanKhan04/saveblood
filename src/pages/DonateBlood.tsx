import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { saveDonor } from "@/utils/storage";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PhoneInput from "@/components/PhoneInput";
import LocationSelector from "@/components/LocationSelector";
import { Droplet } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const DonateBlood = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    age: "",
    gender: "",
    bloodGroup: "",
    country: "",
    city: "",
    location: "",
    note: "",
  });

  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await saveDonor({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        age: parseInt(formData.age),
        blood_group: formData.bloodGroup,
        city: formData.city,
        country: formData.country,
        available: true,
      });

      if (result) {
        toast.success(t("success.donor"));
        
        setTimeout(() => {
          navigate("/donors");
        }, 1500);
      } else {
        toast.error("Failed to save donor information. Please try again.");
        setIsSubmitting(false);
      }
    } catch (error) {
      toast.error("Failed to save donor information. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
              <Droplet className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              {t("nav.donate")}
            </h1>
            <p className="text-muted-foreground">
              Fill out this form to become a blood donor hero
            </p>
          </div>

          <Card className="p-6 md:p-8 shadow-card animate-slide-up bg-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">{t("form.name")} *</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">{t("form.phone")} *</Label>
                  <PhoneInput
                    value={formData.phone}
                    onChange={(value) => setFormData({ ...formData, phone: value })}
                    selectedCountry={formData.country}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">{t("form.email")} *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="age">{t("form.age")} *</Label>
                  <Input
                    id="age"
                    type="number"
                    required
                    min="18"
                    max="65"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    placeholder="25"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="gender">{t("form.gender")} *</Label>
                  <Select
                    required
                    value={formData.gender}
                    onValueChange={(value) => setFormData({ ...formData, gender: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">{t("form.male")}</SelectItem>
                      <SelectItem value="female">{t("form.female")}</SelectItem>
                      <SelectItem value="other">{t("form.other")}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bloodGroup">{t("form.bloodGroup")} *</Label>
                <Select
                  required
                  value={formData.bloodGroup}
                  onValueChange={(value) => setFormData({ ...formData, bloodGroup: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select blood group" />
                  </SelectTrigger>
                  <SelectContent>
                    {bloodGroups.map((group) => (
                      <SelectItem key={group} value={group}>
                        {group}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <LocationSelector
                country={formData.country}
                city={formData.city}
                location={formData.location}
                onCountryChange={(value) => setFormData({ ...formData, country: value, city: "", location: "" })}
                onCityChange={(value) => setFormData({ ...formData, city: value, location: "" })}
                onLocationChange={(value) => setFormData({ ...formData, location: value })}
                countryLabel={t("form.country")}
                cityLabel={t("form.city")}
                locationLabel={t("form.location")}
              />

              <div className="space-y-2">
                <Label htmlFor="note">{t("form.note")}</Label>
                <Textarea
                  id="note"
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  placeholder="Any additional information..."
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-card hover:shadow-card-hover transition-smooth"
                size="lg"
              >
                {isSubmitting ? t("form.submitting") : t("form.submit")}
              </Button>
            </form>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DonateBlood;
