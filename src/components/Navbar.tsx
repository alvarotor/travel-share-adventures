
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

const Navbar = ({ className }: { className?: string }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  // Helper to determine if a link is active
  const isActive = (path: string) => currentPath === path;
  
  return (
    <nav className={cn("sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur", className)}>
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-travel-primary">RoomMate</span>
          <span className="font-medium text-travel-accent">Travel</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <Link 
            to="/" 
            className={cn(
              "text-sm font-medium transition-colors",
              isActive('/') ? "text-travel-primary" : "hover:text-travel-primary"
            )}
          >
            Home
          </Link>
          <Link 
            to="/how-it-works" 
            className={cn(
              "text-sm font-medium transition-colors",
              isActive('/how-it-works') ? "text-travel-primary" : "hover:text-travel-primary"
            )}
          >
            How It Works
          </Link>
          <Link 
            to="/blog" 
            className={cn(
              "text-sm font-medium transition-colors",
              isActive('/blog') ? "text-travel-primary" : "hover:text-travel-primary"
            )}
          >
            Blog
          </Link>
          <Link 
            to="/about" 
            className={cn(
              "text-sm font-medium transition-colors",
              isActive('/about') ? "text-travel-primary" : "hover:text-travel-primary"
            )}
          >
            About Us
          </Link>
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
