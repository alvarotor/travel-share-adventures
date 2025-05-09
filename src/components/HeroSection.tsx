
import React from 'react';
import { cn } from '@/lib/utils';
import SearchForm from './SearchForm';

type HeroSectionProps = {
  className?: string;
};

const HeroSection = ({ className }: HeroSectionProps) => {
  return (
    <section 
      className={cn(
        "relative min-h-[90vh] flex items-center justify-center px-4 py-20 overflow-hidden", 
        className
      )}
    >
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&q=80")',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-travel-dark/70 to-travel-dark/50" />
      </div>
      
      {/* Content */}
      <div className="container relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-white space-y-6 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              <span className="block">Travel Together,</span>
              <span className="block text-travel-primary">Pay Less</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 max-w-xl">
              Connect with compatible travelers to share hotel rooms and cut your accommodation costs in half.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center">
                <span className="text-travel-primary text-4xl mr-2">✓</span>
                <span className="text-gray-100">Verified Profiles</span>
              </div>
              <div className="flex items-center">
                <span className="text-travel-primary text-4xl mr-2">✓</span>
                <span className="text-gray-100">Interest Matching</span>
              </div>
              <div className="flex items-center">
                <span className="text-travel-primary text-4xl mr-2">✓</span>
                <span className="text-gray-100">Secure Messaging</span>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-up">
            <SearchForm />
          </div>
        </div>
      </div>
      
      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" fill="#fff">
          <path d="M0,96L80,85.3C160,75,320,53,480,58.7C640,64,800,96,960,96C1120,96,1280,64,1360,48L1440,32L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
