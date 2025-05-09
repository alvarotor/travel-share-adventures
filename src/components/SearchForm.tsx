
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar as CalendarIcon } from 'lucide-react';
import { toast } from 'sonner';

const popularCities = [
  { value: "new-york", label: "New York" },
  { value: "london", label: "London" },
  { value: "paris", label: "Paris" },
  { value: "tokyo", label: "Tokyo" },
  { value: "bangkok", label: "Bangkok" },
  { value: "bali", label: "Bali" },
  { value: "barcelona", label: "Barcelona" },
  { value: "rome", label: "Rome" },
];

const SearchForm = () => {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!location) {
      toast.error("Please select a destination");
      return;
    }
    
    if (!checkIn) {
      toast.error("Please select a check-in date");
      return;
    }
    
    if (!checkOut) {
      toast.error("Please select a check-out date");
      return;
    }
    
    if (checkIn && checkOut && checkIn >= checkOut) {
      toast.error("Check-out date must be after check-in date");
      return;
    }
    
    // Form is valid
    toast.success("Searching for roommates! This feature will be available soon.");
  };
  
  return (
    <form onSubmit={handleSearch} className="w-full max-w-3xl bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 animate-fade-in">
      <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <label htmlFor="location" className="text-sm font-medium">
            Where to?
          </label>
          <Select value={location} onValueChange={setLocation}>
            <SelectTrigger id="location" className="w-full">
              <SelectValue placeholder="Select destination" />
            </SelectTrigger>
            <SelectContent>
              {popularCities.map((city) => (
                <SelectItem key={city.value} value={city.value}>
                  {city.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="check-in" className="text-sm font-medium">
            Check in
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="check-in"
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !checkIn && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {checkIn ? format(checkIn, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={checkIn}
                onSelect={setCheckIn}
                initialFocus
                disabled={(date) => date < new Date()}
                className="pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="check-out" className="text-sm font-medium">
            Check out
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="check-out"
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !checkOut && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {checkOut ? format(checkOut, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={checkOut}
                onSelect={setCheckOut}
                initialFocus
                disabled={(date) => (checkIn ? date <= checkIn : date <= new Date())}
                className="pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
      
      <div className="px-6 sm:px-8 py-4 bg-gray-50 flex justify-end">
        <Button type="submit" className="bg-travel-primary hover:bg-travel-secondary text-white">
          Find Room Partners
        </Button>
      </div>
    </form>
  );
};

export default SearchForm;
