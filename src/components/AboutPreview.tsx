import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from "@/components/ui/button";
import howTravellersChangeAccomodation from '@/assets/how-travelers-change-acommodation.jpeg';

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
              SplitStay Travel was born from a simple idea: travel shouldn't be expensive for those exploring alone. Our platform connects solo travelers, backpackers, and budget-conscious tourists to share hotel rooms and split costs.
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
          
          <div className="relative h-[400px] lg:h-[500px] animate-slide-in-right flex items-center justify-center">
            <div className="absolute inset-0 lg:w-[120%] left-1/2 -translate-x-1/2 rounded-lg overflow-hidden shadow-xl">
              <img 
                src={howTravellersChangeAccomodation}
                alt="How travellers change accommodation"
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
