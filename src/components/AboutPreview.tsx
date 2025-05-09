
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from "@/components/ui/button";

type AboutPreviewProps = {
  className?: string;
};

const AboutPreview = ({ className }: AboutPreviewProps) => {
  return (
    <section className={cn("py-16", className)} id="about">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            <h2 className="text-3xl font-bold">We're Changing How Solo Travelers Find Accommodation</h2>
            
            <p className="text-lg text-muted-foreground">
              RoomMate Travel was born from a simple idea: travel shouldn't be expensive for those exploring alone. Our platform connects solo travelers, backpackers, and budget-conscious tourists to share hotel rooms and split costs.
            </p>
            
            <p className="text-muted-foreground">
              Founded by three avid travelers who met while sharing accommodations, we understand the challenges and concerns of finding suitable roommates. That's why we've built a secure platform with verified profiles, compatibility matching, and direct messaging.
            </p>
            
            <div className="flex flex-wrap gap-6 pt-4">
              <div>
                <p className="text-3xl font-bold text-travel-primary">10,000+</p>
                <p className="text-sm text-muted-foreground">Successful matches</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-travel-primary">120+</p>
                <p className="text-sm text-muted-foreground">Countries covered</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-travel-primary">40%</p>
                <p className="text-sm text-muted-foreground">Average savings</p>
              </div>
            </div>
            
            <div className="pt-2">
              <Link to="/about">
                <Button className="bg-travel-primary hover:bg-travel-secondary text-white">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative h-[400px] lg:h-[500px] animate-slide-in-right">
            <div className="absolute top-0 right-0 w-3/4 h-3/4 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80" 
                alt="Team working"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-2/3 h-2/3 rounded-lg overflow-hidden shadow-xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=800&auto=format&fit=crop&q=80" 
                alt="Travelers with map"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
