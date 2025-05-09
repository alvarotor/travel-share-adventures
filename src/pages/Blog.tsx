
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from 'react-router-dom';

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
  },
  {
    id: 4,
    title: "The Psychology of Travel Friendships: Why They Matter",
    excerpt: "Understanding the unique bonds formed during travel and how they impact your experience.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=80",
    category: "Psychology",
    date: "April 10, 2025",
    author: "Michael Chen"
  },
  {
    id: 5,
    title: "5 Red Flags to Watch for When Meeting Potential Roommates",
    excerpt: "Protect yourself by knowing these warning signs before agreeing to share accommodation.",
    image: "https://images.unsplash.com/photo-1600865624061-9ae881bf0f2f?w=600&auto=format&fit=crop&q=80",
    category: "Safety",
    date: "April 5, 2025",
    author: "Emma Johnson"
  },
  {
    id: 6,
    title: "How to Pack Light but Smart for Extended Budget Travel",
    excerpt: "Essential tips for minimalist packing that won't leave you missing important items.",
    image: "https://images.unsplash.com/photo-1553531384-cc64ac80f931?w=600&auto=format&fit=crop&q=80",
    category: "Packing",
    date: "March 29, 2025",
    author: "James Wilson"
  }
];

const categories = ["All", "Safety", "Budgeting", "Destinations", "Psychology", "Packing"];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  
  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);
  
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-16 bg-travel-dark text-white">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">Travel Blog</h1>
              <p className="text-xl text-gray-300">
                Tips, guides, and stories for the budget-conscious traveler
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container">
            <div className="mb-10 flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Badge 
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"} 
                  className={`text-sm px-4 py-1.5 cursor-pointer ${
                    selectedCategory === category 
                      ? "bg-travel-primary hover:bg-travel-primary/90" 
                      : "hover:bg-travel-primary/10"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <Card 
                  key={post.id} 
                  className="overflow-hidden hover-scale border-none shadow-md"
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
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
