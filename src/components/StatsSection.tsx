
import React from 'react';
import { cn } from '@/lib/utils';

type StatsSectionProps = {
  className?: string;
};

const StatsSection = ({ className }: StatsSectionProps) => {
  return (
    <section className={cn("py-16 bg-travel-primary text-white", className)}>
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Join Our Global Community</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mt-4">
            Thousands of travelers are already saving money and making new friends through RoomMate Travel
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <p className="text-4xl md:text-5xl font-bold">10k+</p>
            <p className="text-white/80">Active Users</p>
          </div>
          
          <div className="space-y-2">
            <p className="text-4xl md:text-5xl font-bold">120+</p>
            <p className="text-white/80">Countries</p>
          </div>
          
          <div className="space-y-2">
            <p className="text-4xl md:text-5xl font-bold">5k+</p>
            <p className="text-white/80">Room Matches</p>
          </div>
          
          <div className="space-y-2">
            <p className="text-4xl md:text-5xl font-bold">$2M+</p>
            <p className="text-white/80">Total Savings</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
