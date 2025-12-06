import { useState, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Droplet, Trash2, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useGlobalData } from "@/contexts/DataContext";
import { deleteDonor } from "@/utils/storage";
import { toast } from "sonner";

const DonorList = () => {
  const { t } = useLanguage();
  const { donors, refreshData } = useGlobalData();
  const [bloodFilter, setBloodFilter] = useState("all");
  const [cityFilter, setCityFilter] = useState("all");
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedDonorId, setSelectedDonorId] = useState<string>("");
  const [selectedDonor, setSelectedDonor] = useState<any>(null);
  const [password, setPassword] = useState("");

  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  const cities = useMemo(() => {
    const uniqueCities = Array.from(new Set(donors.map((d) => d.city)));
    return uniqueCities.sort();
  }, [donors]);

  const filteredDonors = useMemo(() => {
    return donors.filter((donor) => {
      const bloodMatch = bloodFilter === "all" || donor.blood_group === bloodFilter;
      const cityMatch = cityFilter === "all" || donor.city === cityFilter;
      return bloodMatch && cityMatch;
    });
  }, [donors, bloodFilter, cityFilter]);

  const handleDeleteClick = (donorId: string) => {
    setSelectedDonorId(donorId);
    setDeleteDialogOpen(true);
    setPassword("");
  };

  const handleDeleteConfirm = async () => {
    if (password === "rmbhahnh") {
      const success = await deleteDonor(selectedDonorId);
      if (success) {
        toast.success("Donor deleted successfully");
        refreshData();
        setDeleteDialogOpen(false);
        setPassword("");
      } else {
        toast.error("Failed to delete donor");
      }
    } else {
      toast.error("Incorrect password");
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
            <Droplet className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            {t("donors.title")}
          </h1>
          <p className="text-muted-foreground">{t("donors.subtitle")}</p>
        </div>

        {/* Filters */}
        <div className="max-w-4xl mx-auto mb-8 grid md:grid-cols-2 gap-4 animate-slide-up">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              {t("donors.filterBlood")}
            </label>
            <Select value={bloodFilter} onValueChange={setBloodFilter}>
              <SelectTrigger className="bg-card">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t("donors.all")}</SelectItem>
                {bloodGroups.map((group) => (
                  <SelectItem key={group} value={group}>
                    {group}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              {t("donors.filterCity")}
            </label>
            <Select value={cityFilter} onValueChange={setCityFilter}>
              <SelectTrigger className="bg-card">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t("donors.all")}</SelectItem>
                {cities.map((city) => (
                  <SelectItem key={city} value={city}>
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Donor Cards */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDonors.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground text-lg">
                No donors found matching your filters.
              </p>
            </div>
          ) : (
            filteredDonors.map((donor) => (
              <Card
                key={donor.id}
                onClick={() => setSelectedDonor(donor)}
                className="p-6 shadow-card hover:shadow-card-hover transition-smooth border-2 border-transparent hover:border-primary animate-fade-in relative group cursor-pointer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-200 h-8 w-8 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-full z-10"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteClick(donor.id);
                  }}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
                <div className="flex items-start justify-between mb-4 pr-8">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {donor.name}
                    </h3>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      {donor.city}, {donor.country}
                    </div>
                  </div>
                  <div className="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full border-2 border-primary">
                    <span className="text-lg font-bold text-primary">
                      {donor.blood_group}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                  <p>
                    <span className="font-medium text-foreground">Age:</span> {donor.age}
                  </p>
                </div>

                <div className="flex gap-2">
                  <Button
                    className="flex-1 bg-primary hover:bg-primary/90"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.location.href = `tel:${donor.phone}`;
                    }}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    {t("donors.call")}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.location.href = `mailto:${donor.email}`;
                    }}
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    {t("donors.email")}
                  </Button>
                </div>
              </Card>
            ))
          )}
        </div>
      </div>

      <Footer />
      
      {/* Donor Details Dialog */}
      <Dialog open={!!selectedDonor} onOpenChange={() => setSelectedDonor(null)}>
        <DialogContent className="sm:max-w-[500px] bg-card">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center gap-2">
              <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full">
                <span className="text-lg font-bold text-primary-foreground">
                  {selectedDonor?.blood_group}
                </span>
              </div>
              {selectedDonor?.name}
            </DialogTitle>
            <DialogDescription>
              Complete donor information and contact details
            </DialogDescription>
          </DialogHeader>
          {selectedDonor && (
            <div className="space-y-4 pt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Blood Group</p>
                  <p className="text-lg font-semibold text-foreground">{selectedDonor.blood_group}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Age</p>
                  <p className="text-lg font-semibold text-foreground">{selectedDonor.age} years</p>
                </div>
              </div>
              
              <div className="space-y-3 border-t border-border pt-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground font-medium">{selectedDonor.city}, {selectedDonor.country}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="text-foreground font-medium">{selectedDonor.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground font-medium">{selectedDonor.email}</p>
                  </div>
                </div>
                
                {selectedDonor.last_donation && (
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Last Donation</p>
                      <p className="text-foreground font-medium">
                        {new Date(selectedDonor.last_donation).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="flex items-center gap-2 pt-2">
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                  selectedDonor.available 
                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" 
                    : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                }`}>
                  {selectedDonor.available ? "Available" : "Not Available"}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
      
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Admin Password Required</AlertDialogTitle>
            <AlertDialogDescription>
              Please enter the admin password to delete this donor.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="py-4">
            <Input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleDeleteConfirm();
                }
              }}
            />
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setPassword("")}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteConfirm}>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default DonorList;
