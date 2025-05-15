import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/sonner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { cn } from '@/lib/utils';
import { useTheme } from '@/contexts/ThemeContext';

const formSchema = z.object({
  subject: z.string().min(2, { message: "Subject is required" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

// Mock user data (should match ProfilePage mock data)
const mockProfiles = {
  1: { name: "Sarah Johnson" },
  2: { name: "Michael Chen" },
  3: { name: "Emma Garcia" },
  4: { name: "James Wilson" },
};

const ContactUser = () => {
  const { id } = useParams();
  const { theme } = useTheme();
  const navigate = useNavigate();
  const profile = mockProfiles[Number(id) as keyof typeof mockProfiles];

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject: "",
      message: "",
    },
  });

  const onSubmit = (values: FormValues) => {
    toast.success("Your message has been sent!");
    setTimeout(() => navigate(`/profile/${id}`), 1500);
  };

  if (!profile) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 container py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">User Not Found</h1>
            <Button asChild className="bg-travel-primary">
              <Link to="/room-partners">Back to Room Partners</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 container py-12">
        <div className="max-w-lg mx-auto">
          <Card className={cn(theme === "dark" ? "bg-card border-gray-700" : "bg-white border-gray-200")}>
            <CardContent className="p-8">
              <h1 className="text-2xl font-bold mb-2">Contact {profile.name}</h1>
              <p className="mb-6 text-muted-foreground">
                Send a message to {profile.name.split(' ')[0]}. Please be respectful and provide details about your travel plans or questions.
              </p>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="Message subject" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea rows={5} placeholder="Write your message..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full bg-travel-primary hover:bg-travel-secondary text-white">
                    Send Message
                  </Button>
                </form>
              </Form>
              <div className="mt-6 text-center">
                <Link to={`/profile/${id}`} className="text-travel-primary hover:underline">
                  &larr; Back to Profile
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUser;