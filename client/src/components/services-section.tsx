import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Globe, 
  Smartphone, 
  Cloud, 
  Settings, 
  TrendingUp, 
  Shield, 
  Check, 
  ArrowRight,
  Code,
  Database,
  Zap,
  Users,
  Cog
} from "lucide-react";
import { Link } from "wouter";

export default function ServicesSection() {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Enterprise-grade web applications built with cutting-edge technologies, delivering exceptional performance and user experience.",
      features: ["Progressive Web Apps", "E-commerce Platforms", "Custom CMS Solutions", "Performance Optimization"],
      technologies: ["React", "Next.js", "Vue.js", "Angular"],
      popular: true,
      path: "/services/web-development"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications that provide seamless experiences across iOS and Android platforms.",
      features: ["Cross-platform Apps", "Native iOS/Android", "App Store Optimization", "Push Notifications"],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
      popular: false,
      path: "/services/mobile-development"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud architecture and DevOps solutions ensuring your applications are always available and performant.",
      features: ["AWS/Azure/GCP", "Auto-scaling Infrastructure", "CI/CD Pipelines", "Container Orchestration"],
      technologies: ["Docker", "Kubernetes", "Terraform", "Jenkins"],
      popular: false,
      path: "/services/cloud-solutions"
    },
    {
      icon: Settings,
      title: "API Development",
      description: "Robust, secure, and well-documented APIs that power your applications and enable seamless integrations.",
      features: ["RESTful APIs", "GraphQL", "Microservices", "API Documentation"],
      technologies: ["Node.js", "Python", "Go", "Express"],
      popular: false,
      path: "/services/api-development"
    },
    {
      icon: TrendingUp,
      title: "Digital Transformation",
      description: "Comprehensive digital solutions to modernize your business processes and drive operational efficiency.",
      features: ["Process Automation", "Digital Workflows", "Data Analytics", "Legacy System Migration"],
      technologies: ["AI/ML", "RPA", "Analytics", "Integration"],
      popular: true,
      path: "/services/digital-transformation"
    },
    {
      icon: Shield,
      title: "Maintenance & Support",
      description: "Comprehensive support services to ensure your applications remain secure, updated, and performing optimally.",
      features: ["24/7 Monitoring", "Security Audits", "Performance Tuning", "Bug Fixes & Updates"],
      technologies: ["Monitoring", "Security", "Testing", "Analytics"],
      popular: false,
      path: "/services/maintenance-support"
    }
  ];

  return (
    <section id="services" className="py-12 pb-0 bg-gradient-to-br from-background to-muted/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 gradient-bg rounded-2xl mb-6">
            <Cog className="text-primary-foreground w-8 h-8" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive software development services designed to transform your business 
            and drive growth through innovative technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className={`service-card card-hover bg-card/50 backdrop-blur-sm border-2 shadow-lg group relative overflow-hidden ${
              service.popular ? 'border-primary/30 ring-2 ring-primary/10' : 'border-border/50'
            }`}>
              {service.popular && (
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                  Popular
                </Badge>
              )}
              
              <CardContent className="p-8 relative z-10">
                <div className="service-icon w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 shadow-lg">
                  <service.icon className="text-primary-foreground w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-bold text-card-foreground mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Technology Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs bg-muted/50 text-muted-foreground">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Features List */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-foreground mb-4">Key Features:</h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-muted-foreground">
                        <Check className="text-primary w-4 h-4 mr-3 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="border-t border-border pt-6">
                  <div className="flex items-center justify-end mb-4">
                    <Link href={`${service.path}#content`}>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group/btn"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
              
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
