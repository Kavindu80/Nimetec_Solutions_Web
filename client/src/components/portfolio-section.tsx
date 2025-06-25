import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ExternalLink, ArrowUpRight, Briefcase } from "lucide-react";
import { useState, useMemo, memo, useCallback } from "react";
import { Link } from "wouter";

// Memoized portfolio item component to prevent unnecessary re-renders
const PortfolioItem = memo(({ item, projectUrl }: { 
  item: any;
  projectUrl: string;
}) => {
  return (
    <Card className="portfolio-item card-hover overflow-hidden shadow-xl border-2 border-border/50 bg-card/60 backdrop-blur-md group perspective-card">
      <div className="card-inner">
        <div className="relative overflow-hidden">
          <Link href={projectUrl}>
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-56 object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-2 cursor-pointer"
              loading="lazy"
              width="800"
              height="400"
            />
          </Link>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
            <Link href={projectUrl}>
              <Button size="sm" className="glass-effect bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-primary hover:border-primary neon-glow">
                <ExternalLink className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          
          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
            <div className="glass-effect bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
              <div className="flex items-center justify-between">
                <div className="text-white font-medium text-sm">{item.client}</div>
                <div className="flex space-x-1">
                  {item.tags.slice(0, 2).map((tag: string, tagIndex: number) => (
                    <Badge key={tagIndex} className="bg-primary/80 text-white text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground shadow-lg animate-gradient">
            {item.year}
          </Badge>
        </div>
      
        <CardContent className="p-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {item.tags.slice(0, 3).map((tag: string, tagIndex: number) => (
              <Badge 
                key={tagIndex} 
                variant="secondary" 
                className={`text-xs ${
                  tagIndex === 0 
                    ? "bg-primary/10 text-primary border-primary/20" 
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {tag}
              </Badge>
            ))}
          </div>
          
          <h3 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors">
            <Link href={projectUrl}>
              <span className="cursor-pointer hover:underline">{item.title}</span>
            </Link>
          </h3>
          
          <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
            {item.description}
          </p>

          <div className="text-xs text-muted-foreground mb-4">
            <span className="font-medium">Client:</span> {item.client}
          </div>

          <div className="space-y-2 mb-6">
            {item.metrics.slice(0, 2).map((metric: string, metricIndex: number) => (
              <div key={metricIndex} className="flex items-center text-xs text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                {metric}
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{item.year}</span>
            </div>
            <Link href={projectUrl}>
              <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10 group/btn">
                View Details
                <ArrowUpRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </div>
    </Card>
  );
});

// Memoized filter button component
const FilterButton = memo(({ 
  filter, 
  activeFilter, 
  onClick 
}: { 
  filter: { id: string; label: string; count: number }; 
  activeFilter: string;
  onClick: (id: string) => void;
}) => {
  const isActive = activeFilter === filter.id;
  
  return (
    <Button
      variant={isActive ? "default" : "outline"}
      className={`px-6 py-3 rounded-full transition-all duration-300 ${
        isActive 
          ? "gradient-bg text-primary-foreground shadow-lg scale-105" 
          : "border-border text-muted-foreground hover:border-primary hover:text-primary hover:bg-primary/5"
      }`}
      onClick={() => onClick(filter.id)}
    >
      {filter.label}
      <Badge className="ml-2 bg-background/20 text-current border-0">
        {filter.count}
      </Badge>
    </Button>
  );
});

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  // Helper function to get project URL
  const getProjectUrl = useCallback((id: number): string => {
    const urlMap: Record<number, string> = {
      1: "/projects/lanka-marketplace",
      2: "/projects/digital-wallet-pro",
      3: "/projects/mediconnect-lanka",
      4: "/projects/edulanka-online",
      5: "/projects/smart-logistics-hub",
      6: "/projects/tourismLK-mobile"
    };
    return urlMap[id] || "#";
  }, []);

  const portfolioItems = useMemo(() => [
    {
      id: 1,
      title: "Lanka Marketplace",
      description: "A comprehensive e-commerce platform connecting local Sri Lankan businesses with customers worldwide, featuring advanced inventory management and payment integration.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["E-commerce", "Web App", "React", "Node.js"],
      category: "ecommerce",
      year: "2024",
      client: "Lanka Commerce Ltd",
      metrics: ["300% increase in sales", "50K+ active users", "99.9% uptime"]
    },
    {
      id: 2,
      title: "Digital Wallet Pro",
      description: "A secure web-based financial platform with advanced features including online payments, bill management, and cryptocurrency support for the modern Sri Lankan market.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Web App", "FinTech", "React", "Node.js"],
      category: "web",
      year: "2024",
      client: "FinanceForward",
      metrics: ["100K+ users", "4.8★ rating", "Bank-grade security"]
    },
    {
      id: 3,
      title: "MediConnect Lanka",
      description: "A comprehensive healthcare management system connecting patients, doctors, and hospitals across Sri Lanka with telemedicine capabilities and appointment scheduling.",
      image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Web App", "Healthcare", "Vue.js", "Python"],
      category: "web",
      year: "2023",
      client: "Ministry of Health",
      metrics: ["32+ hospitals", "180+ doctors", "3.5K+ patients"]
    },
    {
      id: 4,
      title: "EduLanka Mobile",
      description: "An innovative mobile learning app designed for Sri Lankan students and educators, featuring offline content access, interactive lessons, and progress tracking on smartphones.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Mobile App", "EdTech", "React Native", "Firebase"],
      category: "mobile",
      year: "2023",
      client: "Education Ministry",
      metrics: ["200K+ downloads", "50K+ students", "95% satisfaction"]
    },
    {
      id: 5,
      title: "Smart Logistics Hub",
      description: "AI-powered logistics and supply chain management system for Sri Lankan import/export businesses with real-time tracking and automated customs integration.",
      image: "https://images.unsplash.com/photo-1586528116493-a029325540fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Enterprise", "AI/ML", "Angular", "Python"],
      category: "enterprise",
      year: "2024",
      client: "Ceylon Logistics",
      metrics: ["18% cost reduction", "Real-time tracking", "12+ clients"]
    },
    {
      id: 6,
      title: "TourismLK Mobile",
      description: "Comprehensive tourism app showcasing Sri Lanka's destinations with AR features, booking system, and personalized travel recommendations.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Mobile App", "Tourism", "Flutter", "AR"],
      category: "mobile",
      year: "2023",
      client: "Tourism Board",
      metrics: ["1M+ downloads", "30+ languages", "AR experiences"]
    }
  ], []);

  const filters = useMemo(() => [
    { id: "all", label: "All Projects", count: portfolioItems.length },
    { id: "web", label: "Web Apps", count: portfolioItems.filter(item => item.category === "web").length },
    { id: "mobile", label: "Mobile Apps", count: portfolioItems.filter(item => item.category === "mobile").length },
    { id: "ecommerce", label: "E-commerce", count: portfolioItems.filter(item => item.category === "ecommerce").length },
    { id: "enterprise", label: "Enterprise", count: portfolioItems.filter(item => item.category === "enterprise").length }
  ], [portfolioItems]);

  const filteredItems = useMemo(() => 
    activeFilter === "all" 
    ? portfolioItems 
      : portfolioItems.filter(item => item.category === activeFilter)
  , [activeFilter, portfolioItems]);
  
  const handleFilterChange = useCallback((filterId: string) => {
    setActiveFilter(filterId);
  }, []);

  return (
    <section id="portfolio" className="py-16 pt-8 bg-gradient-to-br from-background to-muted/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 gradient-bg rounded-2xl mb-6">
            <Briefcase className="text-primary-foreground w-8 h-8" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We believe that great products cannot happen without passion, intelligence, and personal commitment.
            Here's our portfolio spanning different industries and demonstrating our technical expertise.
          </p>
        </div>

        {/* Enhanced Portfolio Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {filters.map((filter) => (
            <FilterButton
              key={filter.id}
              filter={filter}
              activeFilter={activeFilter}
              onClick={handleFilterChange}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <PortfolioItem 
              key={item.id} 
              item={item} 
              projectUrl={getProjectUrl(item.id)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
