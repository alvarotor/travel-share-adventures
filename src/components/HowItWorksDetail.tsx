import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Search,
  Users,
  MessageSquare,
  Hotel,
  DollarSign,
  UserPlus,
  Calendar,
  MapPin,
  Shield,
  Check
} from 'lucide-react';

const features = [
  {
    title: "Intelligent Matching",
    description: "Our algorithm pairs travelers with similar interests, schedules, and preferences for optimal compatibility.",
    icon: Users,
  },
  {
    title: "Verified Profiles",
    description: "We verify all users through multiple methods to ensure safety and build a trusted community.",
    icon: Shield,
  },
  {
    title: "Secure Messaging",
    description: "Chat with potential roommates within our platform before committing to any arrangements.",
    icon: MessageSquare,
  },
  {
    title: "Rate Sharing",
    description: "Split accommodation costs directly through our secure payment system for worry-free transactions.",
    icon: DollarSign,
  },
];

const questions = [
  {
    question: "Is it safe to share a room with a stranger?",
    answer: "Safety is our top priority. We verify all users through identity checks, peer reviews, and profile verification. Additionally, our messaging platform allows you to get to know your potential roommate before making any commitments. We also provide safety guidelines and tips for a successful room-sharing experience."
  },
  {
    question: "How does payment work?",
    answer: "Our secure payment system handles all transactions. Both parties agree to the cost-sharing arrangement, and payments are processed through our platform. Funds are not released to the accommodation provider until both parties have checked in, providing security for all involved."
  },
  {
    question: "What if I don't get along with my roommate?",
    answer: "While our matching algorithm is designed to pair compatible travelers, we understand that personalities can sometimes clash. If serious issues arise, our customer support team is available 24/7 to help mediate or find alternative arrangements. We also offer a roommate guarantee policy for certain situations."
  },
  {
    question: "Can I cancel a booking?",
    answer: "Yes, you can cancel a booking according to our cancellation policy and the terms of the specific accommodation. Cancellation details are clearly outlined before you confirm any reservation. In many cases, finding a replacement roommate can help avoid cancellation fees."
  }
];

const HowItWorksDetail = () => {
  return (
    <div className="w-full border-none">
      {/* Detailed Process Steps */}
      <section className="py-16 bg-white border-none">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-8">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-travel-primary/10 flex items-center justify-center text-travel-primary shrink-0">
                    <Search className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">1. Search for your destination</h3>
                    <p className="text-muted-foreground">
                      Enter where you're going, when you'll be there, and your preferences for a roommate. 
                      Our platform finds travelers headed to the same place during your dates.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-travel-primary/10 flex items-center justify-center text-travel-primary shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">2. Browse compatible matches</h3>
                    <p className="text-muted-foreground">
                      Review profiles of potential roommates who match your travel plans. 
                      See their interests, preferences, verified reviews, and compatibility scores.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-travel-primary/10 flex items-center justify-center text-travel-primary shrink-0">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">3. Connect and chat</h3>
                    <p className="text-muted-foreground">
                      Use our secure messaging platform to get to know potential roommates. 
                      Discuss preferences, expectations, and make sure you're a good match.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-travel-primary/10 flex items-center justify-center text-travel-primary shrink-0">
                    <Hotel className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">4. Book together and save</h3>
                    <p className="text-muted-foreground">
                      Once you've found your ideal roommate, book your shared accommodation through our platform. 
                      Split the cost and enjoy savings of up to 50% on your travel expenses.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVucHwwfHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
                alt="People collaborating" 
                className="w-full h-auto rounded-xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Features */}
      <section className="py-16 bg-travel-background border-none">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4">Our Key Features</h2>
          <p className="text-xl text-center text-muted-foreground max-w-2xl mx-auto mb-16">
            We've designed SplitStay Travel with features that make finding a compatible travel roommate safe, easy, and enjoyable.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-sm hover-scale"
              >
                <div className="w-12 h-12 rounded-full bg-travel-primary/10 flex items-center justify-center text-travel-primary mb-4">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Benefits */}
      <section className="py-16 bg-white border-none">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4">Benefits of Room Sharing</h2>
          <p className="text-xl text-center text-muted-foreground max-w-2xl mx-auto mb-16">
            Traveling with a roommate doesn't just save money - it enhances your entire travel experience
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-travel-background">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-travel-primary/10 flex items-center justify-center text-travel-primary">
                  <DollarSign className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold">Save up to 50%</h3>
              </div>
              <p className="text-muted-foreground">
                Split the cost of accommodations and put more of your budget toward experiences, dining, and exploring your destination.
              </p>
            </div>
            
            <div className="p-6 rounded-xl bg-travel-background">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-travel-primary/10 flex items-center justify-center text-travel-primary">
                  <UserPlus className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold">Make New Friends</h3>
              </div>
              <p className="text-muted-foreground">
                Connect with like-minded travelers from around the world and build meaningful relationships that can last a lifetime.
              </p>
            </div>
            
            <div className="p-6 rounded-xl bg-travel-background">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-travel-primary/10 flex items-center justify-center text-travel-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold">Local Insights</h3>
              </div>
              <p className="text-muted-foreground">
                Gain unique perspectives and discover hidden gems through shared experiences and combined travel knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-travel-background border-none">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-center text-muted-foreground max-w-2xl mx-auto mb-16">
            Got questions? We've got answers. If you can't find what you're looking for, feel free to contact us.
          </p>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {questions.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-2">{item.question}</h3>
                <p className="text-muted-foreground">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-travel-primary to-travel-secondary text-white border-none">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to find your perfect travel roommate?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Join thousands of travelers who have saved money and made new friends through SplitStay Travel
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="default" className="bg-white text-travel-primary hover:bg-gray-100">
              <Link to="/">Find a roommate</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/about">Learn more about us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksDetail;
