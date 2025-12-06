import { useState, useEffect } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { countries, Country } from "@/data/countries";

interface LocationSelectorProps {
  country: string;
  city: string;
  location: string;
  onCountryChange: (country: string) => void;
  onCityChange: (city: string) => void;
  onLocationChange: (location: string) => void;
  countryLabel?: string;
  cityLabel?: string;
  locationLabel?: string;
}

const LocationSelector = ({
  country,
  city,
  location,
  onCountryChange,
  onCityChange,
  onLocationChange,
  countryLabel = "Country",
  cityLabel = "City",
  locationLabel = "Location/Area",
}: LocationSelectorProps) => {
  const [availableCities, setAvailableCities] = useState<string[]>([]);
  const [selectedCountryData, setSelectedCountryData] = useState<Country | null>(null);

  useEffect(() => {
    if (country) {
      const countryData = countries.find(c => c.name === country);
      if (countryData) {
        setSelectedCountryData(countryData);
        setAvailableCities(countryData.cities);
        // Reset city if it's not in the new country's cities
        if (city && !countryData.cities.includes(city)) {
          onCityChange("");
          onLocationChange("");
        }
      }
    } else {
      setAvailableCities([]);
      setSelectedCountryData(null);
    }
  }, [country]);

  return (
    <div className="space-y-4">
      {/* Country Select */}
      <div className="space-y-2">
        <Label>{countryLabel} *</Label>
        <Select value={country} onValueChange={onCountryChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select country" />
          </SelectTrigger>
          <SelectContent className="max-h-[300px]">
            {countries.map((c) => (
              <SelectItem key={c.code} value={c.name}>
                {c.name} ({c.phoneCode})
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* City Select */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>{cityLabel} *</Label>
          <Select 
            value={city} 
            onValueChange={onCityChange}
            disabled={!country}
          >
            <SelectTrigger>
              <SelectValue placeholder={country ? "Select city" : "Select country first"} />
            </SelectTrigger>
            <SelectContent className="max-h-[300px]">
              {availableCities.map((c) => (
                <SelectItem key={c} value={c}>
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Location/Area Input */}
        <div className="space-y-2">
          <Label>{locationLabel} *</Label>
          <Input
            value={location}
            onChange={(e) => onLocationChange(e.target.value)}
            placeholder={city ? `Area in ${city}` : "Select city first"}
            disabled={!city}
            required
          />
        </div>
      </div>
    </div>
  );
};

export default LocationSelector;
