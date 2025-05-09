
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const blogPosts = [
  {
    id: 1,
    title: "10 Safety Tips for Sharing Rooms with Strangers",
    excerpt: "Practical advice to ensure a safe and comfortable experience when sharing accommodation with new people.",
    image: "https://images.unsplash.com/photo-1501876725168-00c445821c9e?w=600&auto=format&fit=crop&q=80",
    category: "Safety",
    date: "May 2, 2025",
    author: "Emma Johnson"
  },
  {
    id: 2,
    title: "How to Save 50% on Your Next Vacation with Room Sharing",
    excerpt: "Learn budgeting strategies and how room sharing can dramatically cut your travel expenses.",
    image: "https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?w=600&auto=format&fit=crop&q=80",
    category: "Budgeting",
    date: "April 28, 2025",
    author: "David Lee"
  },
  {
    id: 3,
    title: "Best Cities for First-Time Solo Travelers in 2025",
    excerpt: "Discover the most welcoming and affordable destinations for your first solo adventure.",
    image: "https://images.unsplash.com/photo-1499591934245-40b55745b905?w=600&auto=format&fit=crop&q=80",
    category: "Destinations",
    date: "April 15, 2025",
    author: "Sofia Garcia"
  }
];

type BlogPreviewProps = {
  className?: string;
};

const BlogPreview = ({ className }: BlogPreviewProps) => {
  return (
    <section className={cn("py-16 bg-gray-50", className)} id="blog">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Travel Tips & Insights</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Expert advice and stories from fellow travelers
            </p>
          </div>
          <Link to="/blog">
            <Button variant="outline" className="mt-4 md:mt-0">
              View All Articles
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={post.id} 
              className="overflow-hidden hover-scale border-none shadow-md"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <CardHeader className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="bg-travel-primary/10 text-travel-primary border-travel-primary/20">
                    {post.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                </div>
                <Link to={`/blog/${post.id}`} className="story-link">
                  <h3 className="font-semibold text-xl line-clamp-2 hover:text-travel-primary transition-colors">
                    {post.title}
                  </h3>
                </Link>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
              </CardContent>
              
              <CardFooter className="pt-0">
                <p className="text-sm text-muted-foreground">By {post.author}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
