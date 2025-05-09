
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from "@/components/ui/button";

type FeatureHighlightProps = {
  className?: string;
};

const FeatureHighlight = ({ className }: FeatureHighlightProps) => {
  return (
    <section className={cn("py-16", className)}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&auto=format&fit=crop&q=80" 
                alt="Hotel room"
                className="w-full h-full object-cover"
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-travel-dark to-transparent">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-white font-medium">Riverside Hotel, Paris</p>
                    <p className="text-gray-200 text-sm">June 12-16, 2025</p>
                  </div>
                  <div className="bg-white text-travel-dark px-3 py-1 rounded-full text-sm font-medium">
                    Save $350
                  </div>
                </div>
              </div>
            </div>
            
            {/* Chat bubble overlay */}
            <div className="relative -mt-20 ml-20 bg-white p-4 rounded-lg shadow-lg border border-gray-100 w-3/4 max-w-xs animate-slide-up">
              <div className="flex gap-3 items-start mb-3">
                <div className="w-8 h-8 rounded-full bg-travel-primary/20 flex items-center justify-center">
                  <span role="img" aria-label="Profile">👩</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Lisa</p>
                  <p className="text-xs text-muted-foreground">New York, NY</p>
                </div>
              </div>
              <p className="text-sm text-gray-700">"Hi! I'll be in Paris for a conference. I'm clean, quiet, and usually out exploring during the day. Want to share a room?"</p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl font-bold">Match with the Perfect Travel Roommate</h2>
            
            <p className="text-lg text-muted-foreground">
              Our smart matching algorithm connects you with compatible travelers based on your preferences, travel style, and personality.
            </p>
            
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3 items-center">
                <div className="w-6 h-6 rounded-full bg-travel-primary/20 text-travel-primary flex items-center justify-center">
                  ✓
                </div>
                <span>Comprehensive compatibility matching system</span>
              </li>
              <li className="flex gap-3 items-center">
                <div className="w-6 h-6 rounded-full bg-travel-primary/20 text-travel-primary flex items-center justify-center">
                  ✓
                </div>
                <span>Verified profiles with reviews from past roommates</span>
              </li>
              <li className="flex gap-3 items-center">
                <div className="w-6 h-6 rounded-full bg-travel-primary/20 text-travel-primary flex items-center justify-center">
                  ✓
                </div>
                <span>Secure in-app chat with potential roommates</span>
              </li>
              <li className="flex gap-3 items-center">
                <div className="w-6 h-6 rounded-full bg-travel-primary/20 text-travel-primary flex items-center justify-center">
                  ✓
                </div>
                <span>Split booking costs securely through our platform</span>
              </li>
            </ul>
            
            <div className="pt-2">
              <Button className="bg-travel-primary hover:bg-travel-secondary text-white">
                Find Your Match
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlight;
