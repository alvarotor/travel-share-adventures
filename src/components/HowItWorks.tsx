
import React from 'react';
import { cn } from '@/lib/utils';

const steps = [
  {
    number: 1,
    title: "Search your destination",
    description: "Enter your travel destination, dates, and preferences to find compatible roommates.",
    icon: "📍",
  },
  {
    number: 2,
    title: "Match with travelers",
    description: "Browse profiles of compatible travelers headed to the same destination on similar dates.",
    icon: "👥",
  },
  {
    number: 3,
    title: "Connect & chat",
    description: "Message potential roommates to discuss preferences and confirm if you're a good match.",
    icon: "💬",
  },
  {
    number: 4,
    title: "Book together & save",
    description: "Split the cost of your accommodation and enjoy your trip with your new travel companion.",
    icon: "🏨",
  }
];

type HowItWorksProps = {
  className?: string;
};

const HowItWorks = ({ className }: HowItWorksProps) => {
  return (
    <section className={cn("py-16 bg-travel-background border-none", className)} id="how-it-works">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Finding a travel roommate is easy with our simple 4-step process
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.number} 
              className="relative flex flex-col items-center text-center p-6 rounded-xl bg-white border shadow-sm hover-scale"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 mb-4 rounded-full bg-travel-primary/10 flex items-center justify-center text-2xl">
                {step.icon}
              </div>
              <span className="absolute top-4 right-4 w-6 h-6 rounded-full bg-travel-primary text-white flex items-center justify-center text-sm font-medium">
                {step.number}
              </span>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
