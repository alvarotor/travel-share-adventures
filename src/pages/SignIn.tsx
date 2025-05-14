import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from '@/components/ui/sonner';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';

// Define the form schema with validation rule
const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const SignIn = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  
  // Initialize the form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // Handle form submission
  const onSubmit = (values: FormValues) => {
    // In a real application, this would send the data to an API
    console.log(values);
    
    // Show success message
    toast.success("Signed in successfully!");
    
    // Redirect to home page after successful sign in
    setTimeout(() => navigate('/'), 1500);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 container py-16">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">Sign In</h1>
            <p className="mt-2 text-muted-foreground">
              Welcome back to Travel Share Adventures
            </p>
          </div>
          
          <div className={cn(
            "p-6 rounded-lg shadow-md border",
            theme === "dark" ? "bg-card border-gray-700" : "bg-white border-gray-200"
          )}>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="you@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-travel-primary hover:bg-travel-secondary transition-colors"
                >
                  Sign In
                </Button>
              </form>
            </Form>
            
            <div className="mt-6 text-center text-sm">
              <p>
                Don't have an account?{" "}
                <Link to="/sign-up" className="text-travel-primary hover:underline font-medium">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignIn;