
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/components/ui/sonner';
import {
  Calendar,
  MessageSquare,
  MapPin,
  User,
  Star,
  Languages,
  Briefcase,
  Info,
  Flag,
  Check,
  Clock,
  Globe,
  ThumbsUp,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/contexts/ThemeContext';

// Mock data for profile (in a real app, this would come from an API)
const mockProfiles = {
  1: {
    id: 1,
    name: "Sarah Johnson",
    age: 28,
    location: "New York, USA",
    occupation: "Digital Nomad",
    bio: "Freelance designer who loves exploring new cities and meeting creative people. Early riser, tidy, and quiet. I've been traveling for the past 3 years while working remotely, and I'm always looking for like-minded travelers to share accommodations and experiences with.",
    images: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVucHwwfHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVucHwwfHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVucHwwfHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    ],
    interests: ["Photography", "Art", "Hiking", "Coffee", "Local food", "Cultural events"],
    languages: ["English (Native)", "Spanish (Intermediate)", "French (Basic)"],
    rating: 4.9,
    reviews: 24,
    verified: true,
    compatibility: 92,
    joinDate: "January 2023",
    responseRate: "98%",
    responseTime: "within an hour",
    travelPreferences: {
      sleepSchedule: "Early bird (6am-10pm)",
      cleanliness: "Very tidy",
      smoking: "Non-smoker",
      pets: "Love animals",
      noise: "Quiet environment preferred",
      sharing: "Respectful of personal space",
    },
    pastTrips: [
      {
        destination: "Barcelona, Spain",
        date: "March 2024",
        duration: "2 weeks"
      },
      {
        destination: "Tokyo, Japan",
        date: "November 2023",
        duration: "10 days"
      },
      {
        destination: "Bali, Indonesia",
        date: "June 2023",
        duration: "1 month"
      }
    ],
    reviews: [
      {
        author: "Michael Chen",
        rating: 5,
        date: "April 2024",
        comment: "Sarah was an amazing roommate! Very respectful, clean, and interesting to talk to. We shared a suite in London for a week, and it was a great experience."
      },
      {
        author: "Emma Garcia",
        rating: 5,
        date: "January 2024",
        comment: "We shared an Airbnb in Paris for 5 days. Sarah is quiet, organized, and considerate. Would definitely room with her again!"
      },
      {
        author: "James Wilson",
        rating: 4,
        date: "October 2023",
        comment: "Sarah is a great travel companion. She's independent but also social when appropriate. Very easy to coordinate with."
      }
    ]
  },
  2: {
    id: 2,
    name: "Michael Chen",
    age: 31,
    location: "Vancouver, Canada",
    occupation: "Software Developer",
    bio: "Tech enthusiast traveling while working remotely. Looking for clean, quiet accommodations with good WiFi. I'm a software developer for a tech startup, which allows me to work from anywhere. I love exploring new cities, trying local foods, and meeting new people.",
    images: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVucHwwfHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVucHwwfHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVucHwwfHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80",
    ],
    interests: ["Technology", "Coffee", "Running", "Reading", "Craft beer", "Museums"],
    languages: ["English (Fluent)", "Mandarin (Native)", "Japanese (Basic)"],
    rating: 4.7,
    reviews: 18,
    verified: true,
    compatibility: 85,
    joinDate: "March 2023",
    responseRate: "95%",
    responseTime: "within a few hours",
    travelPreferences: {
      sleepSchedule: "Night owl (10pm-7am)",
      cleanliness: "Very tidy",
      smoking: "Non-smoker",
      pets: "Allergic to cats",
      noise: "Quiet environment preferred",
      sharing: "Independent but friendly",
    },
    pastTrips: [
      {
        destination: "Seoul, South Korea",
        date: "February 2024",
        duration: "2 weeks"
      },
      {
        destination: "Lisbon, Portugal",
        date: "September 2023",
        duration: "3 weeks"
      },
      {
        destination: "New York, USA",
        date: "May 2023",
        duration: "1 week"
      }
    ],
    reviews: [
      {
        author: "Sarah Johnson",
        rating: 5,
        date: "March 2024",
        comment: "Michael was the perfect roommate. Clean, respectful of personal space, and very interesting to chat with when we did hang out."
      },
      {
        author: "Emma Garcia",
        rating: 4,
        date: "December 2023",
        comment: "Great roommate! He's quiet, keeps to himself mostly, but is always pleasant to talk to. Very clean and respectful."
      },
      {
        author: "David Kim",
        rating: 5,
        date: "August 2023",
        comment: "Michael is fantastic to share with. He's clean, considerate, and has interesting stories. Plus, he helped me fix my laptop!"
      }
    ]
  },
  3: {
    id: 3,
    name: "Emma Garcia",
    age: 26,
    location: "Madrid, Spain",
    occupation: "English Teacher",
    bio: "Avid traveler who has visited 30+ countries. I'm sociable but respectful of personal space and privacy. Currently teaching English online, which allows me to travel while working. I love immersing myself in new cultures and learning languages.",
    images: [
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVucHwwfHx8fA%3D%3D&auto=format&fit=crop&w=1361&q=80",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVucHwwfHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80",
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVucHwwfHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80",
    ],
    interests: ["Languages", "Cooking", "Museums", "Dancing", "Books", "Markets"],
    languages: ["English (Fluent)", "Spanish (Native)", "French (Intermediate)", "Italian (Basic)"],
    rating: 4.8,
    reviews: 32,
    verified: true,
    compatibility: 78,
    joinDate: "November 2022",
    responseRate: "99%",
    responseTime: "within minutes",
    travelPreferences: {
      sleepSchedule: "Flexible (adaptable)",
      cleanliness: "Tidy",
      smoking: "Non-smoker",
      pets: "Love animals",
      noise: "Moderate noise is fine",
      sharing: "Social and outgoing",
    },
    pastTrips: [
      {
        destination: "Prague, Czech Republic",
        date: "April 2024",
        duration: "10 days"
      },
      {
        destination: "Marrakech, Morocco",
        date: "January 2024",
        duration: "2 weeks"
      },
      {
        destination: "Vietnam (multiple cities)",
        date: "October 2023",
        duration: "1 month"
      }
    ],
    reviews: [
      {
        author: "Michael Chen",
        rating: 5,
        date: "February 2024",
        comment: "Emma is a fantastic roommate! She's respectful, fun to talk to, and keeps common areas clean. She also introduced me to some amazing local spots."
      },
      {
        author: "Sarah Johnson",
        rating: 4,
        date: "December 2023",
        comment: "Great experience sharing a place with Emma. She's social but also respects when you need space. Very clean and organized."
      },
      {
        author: "James Wilson",
        rating: 5,
        date: "September 2023",
        comment: "Emma is the ideal travel companion! She knows how to balance social time with personal space. Plus, her local recommendations were spot on."
      }
    ]
  },
  4: {
    id: 4,
    name: "James Wilson",
    age: 29,
    location: "Sydney, Australia",
    occupation: "Marketing Specialist",
    bio: "Adventure seeker who loves the outdoors. Clean, organized, and always up for exploring local cuisine. I work in digital marketing, which allows me to travel while maintaining my career. I'm an early riser who enjoys starting the day with exercise.",
    images: [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVucHwwfHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVucHwwfHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVucHwwfHx8fA%3D%3D&auto=format&fit=crop&w=1370&q=80",
    ],
    interests: ["Surfing", "Food", "Fitness", "Photography", "Hiking", "Local markets"],
    languages: ["English (Native)", "Spanish (Basic)"],
    rating: 4.6,
    reviews: 15,
    verified: true,
    compatibility: 73,
    joinDate: "April 2023",
    responseRate: "90%",
    responseTime: "within a day",
    travelPreferences: {
      sleepSchedule: "Early bird (5am-10pm)",
      cleanliness: "Tidy",
      smoking: "Non-smoker",
      pets: "Likes dogs",
      noise: "Quiet in the morning and evening",
      sharing: "Active but respectful",
    },
    pastTrips: [
      {
        destination: "Costa Rica",
        date: "March 2024",
        duration: "3 weeks"
      },
      {
        destination: "Thailand",
        date: "December 2023",
        duration: "2 weeks"
      },
      {
        destination: "New Zealand",
        date: "August 2023",
        duration: "10 days"
      }
    ],
    reviews: [
      {
        author: "Emma Garcia",
        rating: 5,
        date: "April 2024",
        comment: "James is a great roommate - clean, considerate, and fun to be around. He has a very positive energy that makes sharing space enjoyable."
      },
      {
        author: "Michael Chen",
        rating: 4,
        date: "January 2024",
        comment: "Good experience sharing with James. He's active and out a lot, but quiet and respectful when home. Very organized."
      },
      {
        author: "Sarah Johnson",
        rating: 4,
        date: "November 2023",
        comment: "James is a considerate roommate who keeps things tidy and is easy to coordinate with. He's also great at finding cool local spots to check out!"
      }
    ]
  }
};

const ProfilePage = () => {
  const { id } = useParams();
  const [currentImage, setCurrentImage] = useState(0);
  const { theme } = useTheme();
  const profileId = Number(id);
  
  // Get profile data based on ID from params
  const profile = mockProfiles[profileId as keyof typeof mockProfiles];
  
  // If profile not found
  if (!profile) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 container py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Profile Not Found</h1>
            <p className="mb-8">The profile you're looking for doesn't exist or has been removed.</p>
            <Button asChild className="bg-travel-primary">
              <Link to="/room-partners">Back to Room Partners</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const handleNextImage = () => {
    setCurrentImage((prev) => (prev === profile.images.length - 1 ? 0 : prev + 1));
  };
  
  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? profile.images.length - 1 : prev - 1));
  };
  
  const handleContactClick = () => {
    toast.success("Message request sent to " + profile.name);
  };
  
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Profile Header */}
        <div className={cn(
          "py-8 border-b", 
          theme === "dark" ? "bg-travel-dark/30" : "bg-travel-background"
        )}>
          <div className="container">
            <div className="flex justify-between items-center">
              <Link 
                to="/room-partners" 
                className="text-muted-foreground hover:text-travel-primary transition-colors"
              >
                &larr; Back to Room Partners
              </Link>
              
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={handleContactClick}>
                  <Flag className="w-4 h-4 mr-1" /> Report
                </Button>
                <div className="hidden sm:block">
                  <ThemeSwitcher variant="switch" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Photos and Fast Facts */}
            <div className="space-y-6">
              {/* Profile Photos */}
              <Card className="overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <img 
                    src={profile.images[currentImage]} 
                    alt={`${profile.name} profile photo`}
                    className="w-full h-full object-cover"
                  />
                  
                  {profile.images.length > 1 && (
                    <div className="absolute inset-0 flex items-center justify-between p-4">
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="bg-background/50 backdrop-blur-sm rounded-full"
                        onClick={handlePrevImage}
                      >
                        &larr;
                      </Button>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="bg-background/50 backdrop-blur-sm rounded-full"
                        onClick={handleNextImage}
                      >
                        &rarr;
                      </Button>
                    </div>
                  )}
                  
                  {profile.verified && (
                    <div className="absolute top-4 left-4 bg-background/80 text-travel-primary text-xs font-semibold px-2 py-1 rounded-full flex items-center backdrop-blur-sm">
                      <Check className="w-3 h-3 mr-1" /> Verified
                    </div>
                  )}
                </div>
                
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Photo {currentImage + 1} of {profile.images.length}</span>
                  </div>
                </div>
              </Card>
              
              {/* Quick Stats */}
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-lg font-medium">Fast Facts</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-3 text-travel-primary" />
                      <div>
                        <div className="text-sm font-medium">Member since</div>
                        <div className="text-sm text-muted-foreground">{profile.joinDate}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-3 text-travel-primary" />
                      <div>
                        <div className="text-sm font-medium">Rating</div>
                        <div className="text-sm text-muted-foreground">{profile.rating} ({profile.reviews?.length} reviews)</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-3 text-travel-primary" />
                      <div>
                        <div className="text-sm font-medium">Location</div>
                        <div className="text-sm text-muted-foreground">{profile.location}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-3 text-travel-primary" />
                      <div>
                        <div className="text-sm font-medium">Response time</div>
                        <div className="text-sm text-muted-foreground">{profile.responseTime}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <ThumbsUp className="w-4 h-4 mr-3 text-travel-primary" />
                      <div>
                        <div className="text-sm font-medium">Compatibility</div>
                        <div className="text-sm text-muted-foreground">{profile.compatibility}% match with your preferences</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Languages */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-4 flex items-center">
                    <Languages className="w-4 h-4 mr-2 text-travel-primary" />
                    Languages
                  </h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {profile.languages.map((language, index) => (
                      <Badge key={index} variant="outline" className="py-1 px-2">
                        {language}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Middle/Right Column - Profile Details */}
            <div className="lg:col-span-2">
              {/* Profile Header */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={profile.images[0]} alt={profile.name} />
                    <AvatarFallback>{profile.name[0]}</AvatarFallback>
                  </Avatar>
                  
                  <div>
                    <h1 className="text-3xl font-bold">{profile.name}, {profile.age}</h1>
                    <div className="flex items-center text-muted-foreground gap-2">
                      <Briefcase className="w-4 h-4" /> 
                      {profile.occupation}
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3 w-full md:w-auto">
                  <Button className="bg-travel-primary flex-1 md:flex-none" onClick={handleContactClick}>
                    <MessageSquare className="w-4 h-4 mr-2" /> Contact {profile.name.split(' ')[0]}
                  </Button>
                </div>
              </div>
              
              {/* Profile Tabs */}
              <Tabs defaultValue="about" className="space-y-6">
                <TabsList className="mb-2">
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="preferences">Preferences</TabsTrigger>
                  <TabsTrigger value="trips">Past Trips</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews ({profile.reviews?.length})</TabsTrigger>
                </TabsList>
                
                <TabsContent value="about" className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-medium mb-3 flex items-center">
                        <Info className="w-4 h-4 mr-2 text-travel-primary" />
                        About {profile.name.split(' ')[0]}
                      </h3>
                      <p className="text-muted-foreground">{profile.bio}</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-medium mb-4 flex items-center">
                        <User className="w-4 h-4 mr-2 text-travel-primary" />
                        Interests
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {profile.interests.map((interest, index) => (
                          <Badge key={index} className="bg-travel-primary/10 hover:bg-travel-primary/20 text-travel-primary py-1 px-3">
                            {interest}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="preferences" className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-medium mb-4">Travel Preferences</h3>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <div className="text-sm font-medium">Sleep Schedule</div>
                          <div className="text-sm text-muted-foreground">{profile.travelPreferences.sleepSchedule}</div>
                        </div>
                        
                        <div className="space-y-1">
                          <div className="text-sm font-medium">Cleanliness</div>
                          <div className="text-sm text-muted-foreground">{profile.travelPreferences.cleanliness}</div>
                        </div>
                        
                        <div className="space-y-1">
                          <div className="text-sm font-medium">Smoking</div>
                          <div className="text-sm text-muted-foreground">{profile.travelPreferences.smoking}</div>
                        </div>
                        
                        <div className="space-y-1">
                          <div className="text-sm font-medium">Pets</div>
                          <div className="text-sm text-muted-foreground">{profile.travelPreferences.pets}</div>
                        </div>
                        
                        <div className="space-y-1">
                          <div className="text-sm font-medium">Noise Preference</div>
                          <div className="text-sm text-muted-foreground">{profile.travelPreferences.noise}</div>
                        </div>
                        
                        <div className="space-y-1">
                          <div className="text-sm font-medium">Social Style</div>
                          <div className="text-sm text-muted-foreground">{profile.travelPreferences.sharing}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="trips" className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-medium mb-4 flex items-center">
                        <Globe className="w-4 h-4 mr-2 text-travel-primary" />
                        Past Trips
                      </h3>
                      
                      <div className="space-y-4">
                        {profile.pastTrips.map((trip, index) => (
                          <div key={index} className={cn(
                            "p-4 rounded-lg", 
                            theme === "dark" ? "bg-travel-dark/30" : "bg-travel-background/50"
                          )}>
                            <div className="font-medium">{trip.destination}</div>
                            <div className="text-sm text-muted-foreground">
                              {trip.date} • {trip.duration}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="reviews" className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-medium mb-4">
                        Reviews from Past Roommates
                      </h3>
                      
                      <div className="space-y-6">
                        {profile.reviews?.map((review, index) => (
                          <div key={index} className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="font-medium">{review.author}</div>
                              <div className="text-sm text-muted-foreground">{review.date}</div>
                            </div>
                            
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={cn(
                                    "w-4 h-4", 
                                    i < review.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                                  )} 
                                />
                              ))}
                            </div>
                            
                            <p className="text-muted-foreground text-sm">{review.comment}</p>
                            
                            {index < profile.reviews.length - 1 && <Separator className="my-4" />}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProfilePage;
