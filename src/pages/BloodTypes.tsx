import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Droplet, ArrowRight, Check, X, Info } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const bloodTypes = [
  { type: "A+", percentage: "35.7%", canDonateTo: ["A+", "AB+"], canReceiveFrom: ["A+", "A-", "O+", "O-"] },
  { type: "A-", percentage: "6.3%", canDonateTo: ["A+", "A-", "AB+", "AB-"], canReceiveFrom: ["A-", "O-"] },
  { type: "B+", percentage: "8.5%", canDonateTo: ["B+", "AB+"], canReceiveFrom: ["B+", "B-", "O+", "O-"] },
  { type: "B-", percentage: "1.5%", canDonateTo: ["B+", "B-", "AB+", "AB-"], canReceiveFrom: ["B-", "O-"] },
  { type: "AB+", percentage: "3.4%", canDonateTo: ["AB+"], canReceiveFrom: ["All Types"] },
  { type: "AB-", percentage: "0.6%", canDonateTo: ["AB+", "AB-"], canReceiveFrom: ["A-", "B-", "AB-", "O-"] },
  { type: "O+", percentage: "37.4%", canDonateTo: ["A+", "B+", "AB+", "O+"], canReceiveFrom: ["O+", "O-"] },
  { type: "O-", percentage: "6.6%", canDonateTo: ["All Types"], canReceiveFrom: ["O-"] }
];

const compatibilityMatrix = [
  { donor: "O-", recipients: ["O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+"] },
  { donor: "O+", recipients: ["O+", "A+", "B+", "AB+"] },
  { donor: "A-", recipients: ["A-", "A+", "AB-", "AB+"] },
  { donor: "A+", recipients: ["A+", "AB+"] },
  { donor: "B-", recipients: ["B-", "B+", "AB-", "AB+"] },
  { donor: "B+", recipients: ["B+", "AB+"] },
  { donor: "AB-", recipients: ["AB-", "AB+"] },
  { donor: "AB+", recipients: ["AB+"] }
];

const BloodTypes = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Droplet className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Blood Types & Compatibility
            </h1>
            <p className="text-lg text-muted-foreground">
              Understanding blood types is essential for safe transfusions and donations
            </p>
          </div>
        </div>
      </section>

      {/* Blood Types Grid */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">The 8 Blood Types</h2>
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {bloodTypes.map((blood, index) => (
              <Card key={index} className="p-6 text-center shadow-card hover:shadow-card-hover transition-smooth border-2 border-transparent hover:border-primary">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">{blood.type}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {blood.percentage} of population
                </p>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium text-foreground mb-1">Can Donate To:</p>
                    <p className="text-primary">{blood.canDonateTo.join(", ")}</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Can Receive From:</p>
                    <p className="text-muted-foreground">{blood.canReceiveFrom.join(", ")}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compatibility Chart */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Compatibility Chart</h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary/10">
                  <th className="p-4 text-left font-bold text-foreground border border-border">Donor</th>
                  {["O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+"].map((type) => (
                    <th key={type} className="p-4 text-center font-bold text-foreground border border-border">
                      {type}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compatibilityMatrix.map((row, index) => (
                  <tr key={index} className="hover:bg-secondary/50">
                    <td className="p-4 font-bold text-primary border border-border bg-primary/5">{row.donor}</td>
                    {["O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+"].map((recipient) => (
                      <td key={recipient} className="p-4 text-center border border-border">
                        {row.recipients.includes(recipient) ? (
                          <Check className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-red-500 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Special Types */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="p-8 shadow-card border-2 border-yellow-500/20 bg-yellow-50/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-yellow-600">O-</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">Universal Donor</h3>
              </div>
              <p className="text-muted-foreground">
                O- blood can be given to patients of any blood type. This makes O- donors especially valuable during emergencies when there's no time to determine a patient's blood type.
              </p>
            </Card>
            <Card className="p-8 shadow-card border-2 border-blue-500/20 bg-blue-50/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-blue-600">AB+</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">Universal Recipient</h3>
              </div>
              <p className="text-muted-foreground">
                AB+ individuals can receive blood from any blood type. They are also universal plasma donors because their plasma has no A or B antibodies.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Info Box */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-3xl mx-auto p-8 bg-primary/5 border-primary/20">
            <div className="flex items-start gap-4">
              <Info className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Did You Know?</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Blood type is determined by genetics and inherited from your parents</li>
                  <li>• The Rh factor (+ or -) refers to a specific protein on red blood cells</li>
                  <li>• Knowing your blood type can be life-saving in emergencies</li>
                  <li>• Some rare blood types may require special donor matching</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BloodTypes;
