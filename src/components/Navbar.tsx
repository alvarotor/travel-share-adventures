
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

const Navbar = ({ className }: { className?: string }) => {
  return (
    <nav className={cn("sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur", className)}>
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-travel-primary">RoomMate</span>
          <span className="font-medium text-travel-accent">Travel</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-travel-primary transition-colors">Home</Link>
          <Link to="/how-it-works" className="text-sm font-medium hover:text-travel-primary transition-colors">How It Works</Link>
          <Link to="/blog" className="text-sm font-medium hover:text-travel-primary transition-colors">Blog</Link>
          <Link to="/about" className="text-sm font-medium hover:text-travel-primary transition-colors">About Us</Link>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden sm:inline-flex">Sign In</Button>
          <Button className="bg-travel-primary hover:bg-travel-secondary text-white">Sign Up</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
