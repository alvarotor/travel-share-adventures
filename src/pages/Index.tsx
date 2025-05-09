
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import FeatureHighlight from '@/components/FeatureHighlight';
import StatsSection from '@/components/StatsSection';
import Testimonials from '@/components/Testimonials';
import BlogPreview from '@/components/BlogPreview';
import AboutPreview from '@/components/AboutPreview';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <HowItWorks />
        <FeatureHighlight />
        <StatsSection />
        <Testimonials />
        <BlogPreview />
        <AboutPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
