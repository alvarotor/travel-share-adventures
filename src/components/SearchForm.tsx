
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar as CalendarIcon } from 'lucide-react';
import { toast } from 'sonner';
import { useTheme } from "@/contexts/ThemeContext";

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
  const navigate = useNavigate();
  const { theme } = useTheme();
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
    
    // Form is valid - navigate to room partners page with query params
    const cityLabel = popularCities.find(city => city.value === location)?.label || location;
    const checkInStr = checkIn ? format(checkIn, "MMM dd, yyyy") : '';
    const checkOutStr = checkOut ? format(checkOut, "MMM dd, yyyy") : '';
    
    navigate(`/room-partners?location=${cityLabel}&checkIn=${checkInStr}&checkOut=${checkOutStr}`);
  };
  
  return (
    <form 
      onSubmit={handleSearch} 
      className={cn(
        "w-full max-w-3xl rounded-xl shadow-lg overflow-hidden border animate-fade-in",
        theme === "dark" 
          ? "bg-sidebar border-gray-700" 
          : "bg-white border-gray-100"
      )}
    >
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
                {checkIn ? format(checkIn, "MMM dd, yyyy") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 z-50" align="start">
              <Calendar
                mode="single"
                selected={checkIn}
                onSelect={setCheckIn}
                initialFocus
                disabled={(date) => date < new Date()}
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
                {checkOut ? format(checkOut, "MMM dd, yyyy") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 z-50" align="start">
              <Calendar
                mode="single"
                selected={checkOut}
                onSelect={setCheckOut}
                initialFocus
                disabled={(date) => (checkIn ? date <= checkIn : date <= new Date())}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
      
      <div className={cn(
        "px-6 sm:px-8 py-4 flex justify-end",
        theme === "dark" ? "bg-sidebar-accent" : "bg-gray-50"
      )}>
        <Button type="submit" className="bg-travel-primary hover:bg-travel-secondary text-white">
          Find Room Partners
        </Button>
      </div>
    </form>
  );
};

export default SearchForm;
