import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { saveBloodRequest, findMatchingDonors } from "@/utils/storage";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PhoneInput from "@/components/PhoneInput";
import LocationSelector from "@/components/LocationSelector";
import { HeartPulse, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Donor } from "@/utils/storage";

const NeedBlood = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [matchedDonor, setMatchedDonor] = useState<Donor | null>(null);
  const [showMatchDialog, setShowMatchDialog] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    bloodGroup: "",
    reason: "",
    country: "",
    city: "",
    location: "",
  });

  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await saveBloodRequest({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        age: 0,
        blood_group: formData.bloodGroup,
        city: formData.city,
        country: formData.country,
        reason: formData.reason,
        urgent: false,
      });

      if (result) {
        const matchingDonors = await findMatchingDonors(formData.bloodGroup, formData.city);
        
        if (matchingDonors.length > 0) {
          setMatchedDonor(matchingDonors[0]);
          setShowMatchDialog(true);
          toast.success(t("success.request"));
        } else {
          toast.success(t("success.noMatch"));
          setTimeout(() => {
            navigate("/requests");
          }, 2000);
        }
      } else {
        toast.error("Failed to submit request. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to submit request. Please try again.");
    } finally {
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
              <HeartPulse className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              {t("nav.need")}
            </h1>
            <p className="text-muted-foreground">
              Submit your blood requirement and we'll help find a donor
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

              <div className="space-y-2">
                <Label htmlFor="bloodGroup">{t("form.bloodGroup")} *</Label>
                <Select
                  required
                  value={formData.bloodGroup}
                  onValueChange={(value) => setFormData({ ...formData, bloodGroup: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select blood group needed" />
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

              <div className="space-y-2">
                <Label htmlFor="reason">{t("form.reason")} *</Label>
                <Textarea
                  id="reason"
                  required
                  value={formData.reason}
                  onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                  placeholder="Please describe why you need blood..."
                  rows={4}
                />
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

      {/* Match Found Dialog */}
      <Dialog open={showMatchDialog} onOpenChange={setShowMatchDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl text-center text-primary">
              {t("success.match")}
            </DialogTitle>
            <DialogDescription className="text-center">
              We found a donor matching your requirements
            </DialogDescription>
          </DialogHeader>
          {matchedDonor && (
            <Card className="p-6 border-2 border-primary">
              <div className="space-y-4">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-3">
                    <span className="text-2xl font-bold text-primary">
                      {matchedDonor.blood_group}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {matchedDonor.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {matchedDonor.city}, {matchedDonor.country}
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button
                    className="flex-1 bg-primary hover:bg-primary/90"
                    onClick={() => window.location.href = `tel:${matchedDonor.phone}`}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    {t("donors.call")}
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.location.href = `mailto:${matchedDonor.email}`}
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    {t("donors.email")}
                  </Button>
                </div>
                <Button
                  variant="secondary"
                  className="w-full"
                  onClick={() => {
                    setShowMatchDialog(false);
                    navigate("/donors");
                  }}
                >
                  View All Donors
                </Button>
              </div>
            </Card>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default NeedBlood;
