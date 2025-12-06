import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { countries, Country } from "@/data/countries";

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  selectedCountry?: string;
  placeholder?: string;
  required?: boolean;
}

const PhoneInput = ({ value, onChange, selectedCountry, placeholder = "Phone number", required }: PhoneInputProps) => {
  const [phoneCode, setPhoneCode] = useState("+1");
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    if (selectedCountry) {
      const country = countries.find(c => c.name === selectedCountry);
      if (country) {
        setPhoneCode(country.phoneCode);
      }
    }
  }, [selectedCountry]);

  useEffect(() => {
    onChange(`${phoneCode} ${phoneNumber}`);
  }, [phoneCode, phoneNumber]);

  // Parse initial value
  useEffect(() => {
    if (value && !phoneNumber) {
      const parts = value.split(" ");
      if (parts.length >= 2) {
        const code = parts[0];
        const number = parts.slice(1).join(" ");
        if (code.startsWith("+")) {
          setPhoneCode(code);
          setPhoneNumber(number);
        }
      }
    }
  }, [value]);

  // Get unique phone codes
  const uniquePhoneCodes = Array.from(
    new Map(countries.map(c => [c.phoneCode, c])).values()
  ).sort((a, b) => a.phoneCode.localeCompare(b.phoneCode));

  return (
    <div className="flex gap-2">
      <Select value={phoneCode} onValueChange={setPhoneCode}>
        <SelectTrigger className="w-[100px]">
          <SelectValue placeholder="+1" />
        </SelectTrigger>
        <SelectContent className="max-h-[300px]">
          {uniquePhoneCodes.map((country) => (
            <SelectItem key={`${country.code}-${country.phoneCode}`} value={country.phoneCode}>
              {country.phoneCode}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Input
        type="tel"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="flex-1"
      />
    </div>
  );
};

export default PhoneInput;
