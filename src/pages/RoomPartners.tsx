
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare, Star, Calendar, Check, MapPin } from 'lucide-react';

// Mock data for potential partners
const mockPartners = [
  {
    id: 1,
    name: "Sarah Johnson",
    age: 28,
    location: "New York, USA",
    occupation: "Digital Nomad",
    bio: "Freelance designer who loves exploring new cities and meeting creative people. Early riser, tidy, and quiet.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVucHwwfHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    interests: ["Photography", "Art", "Hiking"],
    languages: ["English", "Spanish"],
    rating: 4.9,
    reviews: 24,
    verified: true,
    compatibility: 92,
  },
  {
    id: 2,
    name: "Michael Chen",
    age: 31,
    location: "Vancouver, Canada",
    occupation: "Software Developer",
    bio: "Tech enthusiast traveling while working remotely. Looking for clean, quiet accommodations with good WiFi.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVucHwwfHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    interests: ["Technology", "Coffee", "Running"],
    languages: ["English", "Mandarin"],
    rating: 4.7,
    reviews: 18,
    verified: true,
    compatibility: 85,
  },
  {
    id: 3,
    name: "Emma Garcia",
    age: 26,
    location: "Madrid, Spain",
    occupation: "English Teacher",
    bio: "Avid traveler who has visited 30+ countries. I'm sociable but respectful of personal space and privacy.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVucHwwfHx8fA%3D%3D&auto=format&fit=crop&w=1361&q=80",
    interests: ["Languages", "Cooking", "Museums"],
    languages: ["English", "Spanish", "French"],
    rating: 4.8,
    reviews: 32,
    verified: true,
    compatibility: 78,
  },
  {
    id: 4,
    name: "James Wilson",
    age: 29,
    location: "Sydney, Australia",
    occupation: "Marketing Specialist",
    bio: "Adventure seeker who loves the outdoors. Clean, organized, and always up for exploring local cuisine.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVucHwwfHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    interests: ["Surfing", "Food", "Fitness"],
    languages: ["English"],
    rating: 4.6,
    reviews: 15,
    verified: true,
    compatibility: 73,
  },
];

const RoomPartners = () => {
  // Using location to get search params (would be passed when clicking "Find Room Partners")
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  
  // Default destination for the mock page
  const destination = queryParams.get('location') || 'New York';
  const checkIn = queryParams.get('checkIn') || 'Jul 15, 2025';
  const checkOut = queryParams.get('checkOut') || 'Jul 22, 2025';
  
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Search Summary */}
        <div className="bg-travel-background py-8 border-b">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold mb-2">Room Partners in {destination}</h1>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {checkIn} - {checkOut}
                  </div>
                  <span>•</span>
                  <div>{mockPartners.length} potential matches</div>
                </div>
              </div>
              
              <Button className="bg-travel-primary">Refine Search</Button>
            </div>
          </div>
        </div>
        
        {/* Results Section */}
        <div className="container py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mockPartners.map(partner => (
              <Card key={partner.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 relative">
                    <img 
                      src={partner.image} 
                      alt={partner.name} 
                      className="w-full h-full object-cover aspect-square md:aspect-auto"
                    />
                    {partner.verified && (
                      <div className="absolute top-2 left-2 bg-white/90 text-travel-primary text-xs font-semibold px-2 py-1 rounded-full flex items-center">
                        <Check className="w-3 h-3 mr-1" /> Verified
                      </div>
                    )}
                  </div>
                  
                  <div className="md:w-2/3 p-6">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-xl font-semibold">{partner.name}, {partner.age}</h3>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <MapPin className="w-3 h-3 mr-1" /> {partner.location}
                        </div>
                      </div>
                      <div className="bg-travel-primary/10 text-travel-primary font-semibold px-2 py-1 rounded-lg text-sm">
                        {partner.compatibility}% Match
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 line-clamp-2">{partner.bio}</p>
                    
                    <div className="mb-4">
                      <div className="text-sm mb-1 font-medium">Interests:</div>
                      <div className="flex flex-wrap gap-1">
                        {partner.interests.map(interest => (
                          <span key={interest} className="bg-travel-background text-xs px-2 py-1 rounded-full">
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-1" />
                        <span className="font-medium">{partner.rating}</span>
                        <span className="text-muted-foreground text-sm ml-1">({partner.reviews} reviews)</span>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex items-center">
                          <MessageSquare className="w-4 h-4 mr-1" /> Message
                        </Button>
                        <Button size="sm" className="bg-travel-primary">View Profile</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          {/* No Results Placeholder - hidden in this mock */}
          <div className="hidden text-center py-16 space-y-4">
            <h3 className="text-2xl font-semibold">No matches found</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              We couldn't find any room partners matching your criteria. Try adjusting your search filters.
            </p>
            <Button className="bg-travel-primary mt-4">Modify Search</Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RoomPartners;
