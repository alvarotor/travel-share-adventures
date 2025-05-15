import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

const teamMembers = [
  {
    name: "Alex Chen",
    role: "Co-Founder & CEO",
    bio: "Former travel blogger with 50+ countries under his belt. Started SplitStay Travel after sharing rooms with strangers across Southeast Asia.",
    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150&h=150&auto=format&dpr=2&q=80",
    initials: "AC"
  },
  {
    name: "Maria Rodriguez",
    role: "Co-Founder & CTO",
    bio: "Software engineer and avid backpacker who believes technology can make travel more accessible and affordable for everyone.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&auto=format&dpr=2&q=80",
    initials: "MR"
  },
  {
    name: "David Kim",
    role: "Co-Founder & COO",
    bio: "Former hotel executive passionate about transforming the hospitality industry and promoting sustainable travel practices.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&auto=format&dpr=2&q=80",
    initials: "DK"
  },
  {
    name: "Sarah Johnson",
    role: "Head of User Safety",
    bio: "Security expert dedicated to creating a safe platform where travelers can confidently connect with potential roommates.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&auto=format&dpr=2&q=80",
    initials: "SJ"
  },
  {
    name: "Omar Hassan",
    role: "Head of Partnerships",
    bio: "Former travel agent with extensive connections in the hospitality industry across Europe, Asia, and South America.",
    avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=150&h=150&auto=format&dpr=2&q=80",
    initials: "OH"
  },
  {
    name: "Lin Wei",
    role: "UX Designer",
    bio: "Designer and frequent solo traveler focused on creating intuitive, accessible experiences for users across cultures.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&auto=format&dpr=2&q=80",
    initials: "LW"
  }
];

const About = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-16 bg-travel-dark text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">About SplitStay Travel</h1>
              <p className="text-xl text-gray-300">
                We're making travel more affordable and social by connecting compatible travelers
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    SplitStay Travel was born in 2024 when three avid travelers—Alex, Maria, and David—met while sharing a hostel room in Bangkok. Despite being strangers at first, they connected over their shared love for budget travel and authentic experiences.
                  </p>
                  <p>
                    During their conversation, they realized a common problem: hotels were too expensive for solo travelers, while hostels didn't always offer the privacy and comfort many people wanted. There had to be a middle ground.
                  </p>
                  <p>
                    The idea was simple but powerful—create a platform where solo travelers could connect, share hotel rooms, split costs, and potentially make new friends along the way.
                  </p>
                  <p>
                    Within months, the first version of SplitStay Travel was launched. Today, we've helped thousands of travelers across 120+ countries save money and forge meaningful connections while exploring the world.
                  </p>
                </div>
                
                <div className="mt-8 flex gap-4">
                  <Link to="/sign-in">
                    <Button className="bg-travel-primary hover:bg-travel-secondary text-white">
                      Join Our Community
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="relative h-[500px] hidden lg:block">
                <div className="absolute top-0 right-0 w-2/3 h-2/3 rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=800&auto=format&fit=crop&q=80" 
                    alt="Travelers with map"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 w-2/3 h-2/3 rounded-lg overflow-hidden shadow-xl border-4 border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&auto=format&fit=crop&q=80" 
                    alt="Mountain landscape"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We believe travel should be accessible to everyone, regardless of budget.
                By connecting compatible travelers to share accommodation costs, we're making
                travel more affordable while creating opportunities for meaningful connections.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <Card className="border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-travel-primary/10 flex items-center justify-center text-2xl text-travel-primary">
                      💰
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Make Travel Affordable</h3>
                    <p className="text-muted-foreground">
                      By splitting accommodation costs, travelers can save 30-50% on their lodging expenses.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-travel-primary/10 flex items-center justify-center text-2xl text-travel-primary">
                      🔒
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Create Safe Connections</h3>
                    <p className="text-muted-foreground">
                      Our verification system and review process ensures a secure environment for all users.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-travel-primary/10 flex items-center justify-center text-2xl text-travel-primary">
                      🌍
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Promote Cultural Exchange</h3>
                    <p className="text-muted-foreground">
                      We encourage connections between travelers from different backgrounds and cultures.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're travelers, tech enthusiasts, and hospitality experts passionate about making travel better
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div 
                  key={member.name} 
                  className="bg-white p-6 rounded-xl shadow-sm border text-center hover-scale"
                >
                  <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-travel-primary/20">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>{member.initials}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-travel-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
