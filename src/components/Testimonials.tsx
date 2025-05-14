
import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    id: 1,
    content: "I was nervous about sharing a room with a stranger, but SplitStay made it so easy to find someone compatible. We ended up becoming great friends and saving over $400 on our trip to Paris!",
    name: "Sarah J.",
    location: "New York",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&auto=format&dpr=2&q=80",
    initials: "SJ"
  },
  {
    id: 2,
    content: "As a solo backpacker on a budget, this platform has been a game changer. I've used it three times already across Europe and have had positive experiences each time.",
    name: "Miguel R.",
    location: "Barcelona",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&auto=format&dpr=2&q=80",
    initials: "MR"
  },
  {
    id: 3,
    content: "The verification system made me feel safe, and the chat feature let me get to know my roommate before the trip. We ended up splitting costs on everything from the hotel to meals!",
    name: "Aisha T.",
    location: "London",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&auto=format&dpr=2&q=80",
    initials: "AT"
  }
];

type TestimonialsProps = {
  className?: string;
};

const Testimonials = ({ className }: TestimonialsProps) => {
  return (
    <section className={cn("py-16", className)} id="testimonials">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of travelers who have found compatible roommates and saved on accommodation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="hover-scale overflow-hidden border-none shadow-md" 
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex flex-col space-y-4">
                  <div className="relative">
                    <span className="absolute -left-2 -top-2 text-5xl text-travel-primary opacity-20">"</span>
                    <p className="relative z-10 italic text-gray-700">{testimonial.content}</p>
                  </div>
                  
                  <div className="flex items-center pt-4">
                    <Avatar className="h-10 w-10 border-2 border-travel-primary">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.initials}</AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                      <p className="text-sm font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
