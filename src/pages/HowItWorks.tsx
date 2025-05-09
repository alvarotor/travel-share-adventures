
import React from 'react';
import Navbar from '@/components/Navbar';
import HowItWorksDetail from '@/components/HowItWorksDetail';
import Footer from '@/components/Footer';

const HowItWorks = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="py-10 bg-gradient-to-b from-white to-travel-background">
          <div className="container">
            <h1 className="text-4xl font-bold text-center mb-6">How RoomMate Travel Works</h1>
            <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto mb-16">
              Finding a compatible travel roommate and saving on accommodation has never been easier
            </p>
          </div>
        </div>
        <HowItWorksDetail />
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
