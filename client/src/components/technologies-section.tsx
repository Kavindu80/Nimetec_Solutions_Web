import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Database, 
  Cloud, 
  Smartphone, 
  Globe, 
  Server,
  Layers,
  GitBranch,
  Shield,
  Zap,
  Cpu,
  Monitor
} from "lucide-react";
import { SiReact, SiNodedotjs, SiPython, SiJavascript, SiTypescript, SiAmazon, SiGooglecloud, SiMongodb, SiPostgresql, SiRedis, SiDocker, SiKubernetes, SiGit, SiGithub, SiJenkins, SiNginx, SiTailwindcss, SiNextdotjs, SiExpress, SiFastapi, SiDjango, SiFlutter, SiReact as SiReactNative, SiAndroid, SiApple } from "react-icons/si";

// Define CSS keyframes and custom classes 
const fadeInUpAnimation = `
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.7s ease-out forwards;
}

.perspective-800 {
  perspective: 800px;
}
`;

export default function TechnologiesSection() {
  const techCategories = [
    {
      title: "Frontend Technologies",
      icon: Monitor,
      color: "bg-blue-500",
      technologies: [
        { name: "React", icon: SiReact, color: "#61DAFB", level: "Expert" },
        { name: "Next.js", icon: SiNextdotjs, color: "#000000", level: "Expert" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6", level: "Expert" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", level: "Expert" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", level: "Expert" }
      ]
    },
    {
      title: "Backend Technologies",
      icon: Server,
      color: "bg-green-500",
      technologies: [
        { name: "Node.js", icon: SiNodedotjs, color: "#339933", level: "Expert" },
        { name: "Express", icon: SiExpress, color: "#000000", level: "Expert" },
        { name: "Python", icon: SiPython, color: "#3776AB", level: "Advanced" },
        { name: "FastAPI", icon: SiFastapi, color: "#009688", level: "Advanced" },
        { name: "Django", icon: SiDjango, color: "#092E20", level: "Intermediate" }
      ]
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      color: "bg-purple-500",
      technologies: [
        { name: "React Native", icon: SiReactNative, color: "#61DAFB", level: "Expert" },
        { name: "Flutter", icon: SiFlutter, color: "#02569B", level: "Advanced" },
        { name: "iOS", icon: SiApple, color: "#000000", level: "Intermediate" },
        { name: "Android", icon: SiAndroid, color: "#3DDC84", level: "Intermediate" }
      ]
    },
    {
      title: "Cloud & Infrastructure",
      icon: Cloud,
      color: "bg-orange-500",
      technologies: [
        { name: "AWS", icon: SiAmazon, color: "#FF9900", level: "Expert" },
        { name: "Google Cloud", icon: SiGooglecloud, color: "#4285F4", level: "Advanced" },
        { name: "Docker", icon: SiDocker, color: "#2496ED", level: "Expert" },
        { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5", level: "Advanced" },
        { name: "Nginx", icon: SiNginx, color: "#009639", level: "Advanced" }
      ]
    },
    {
      title: "Databases",
      icon: Database,
      color: "bg-red-500",
      technologies: [
        { name: "MongoDB", icon: SiMongodb, color: "#47A248", level: "Expert" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#336791", level: "Expert" },
        { name: "Redis", icon: SiRedis, color: "#DC382D", level: "Advanced" }
      ]
    },
    {
      title: "DevOps & Tools",
      icon: GitBranch,
      color: "bg-gray-600",
      technologies: [
        { name: "Git", icon: SiGit, color: "#F05032", level: "Expert" },
        { name: "GitHub", icon: SiGithub, color: "#181717", level: "Expert" },
        { name: "Jenkins", icon: SiJenkins, color: "#D24939", level: "Advanced" }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Advanced": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "Intermediate": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-muted/30 to-background relative overflow-hidden">
      {/* Insert the CSS */}
      <style dangerouslySetInnerHTML={{ __html: fadeInUpAnimation }} />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 gradient-bg rounded-2xl mb-6">
            <Layers className="text-primary-foreground w-8 h-8" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Technology <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We leverage cutting-edge technologies and proven frameworks to build scalable, 
            secure, and high-performance solutions that drive business success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="tech-card bg-card/50 backdrop-blur-sm border-2 border-border/50 shadow-lg hover:shadow-2xl group">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`w-14 h-14 ${category.color} rounded-xl flex items-center justify-center shadow-lg`}>
                    <category.icon className="text-white w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{category.technologies.length} Technologies</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {category.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="flex items-center justify-between p-4 bg-background/60 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:transform hover:scale-105">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                          <tech.icon className="w-6 h-6" style={{ color: tech.color }} />
                        </div>
                        <div>
                          <span className="font-semibold text-foreground">{tech.name}</span>
                        </div>
                      </div>
                      <Badge className={`${getLevelColor(tech.level)} text-xs font-medium px-3 py-1`}>
                        {tech.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 relative">
          {/* Industrial Pattern Background */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-border"></div>
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-border"></div>
            <div className="absolute left-0 top-0 w-[1px] h-full bg-border"></div>
            <div className="absolute right-0 top-0 w-[1px] h-full bg-border"></div>
            
            {/* Industrial grid pattern */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
            
            {/* Industrial corner elements */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-border"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-border"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-border"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-border"></div>
          </div>

          <div className="max-w-5xl mx-auto relative bg-background py-12 border border-border">
            {/* Section header with industrial style */}
            <div className="absolute top-0 left-0 w-full flex items-center justify-between px-4 py-2 border-b border-border bg-muted/30">
              <div className="text-xs font-mono text-muted-foreground">PERFORMANCE METRICS</div>
              <div className="text-xs font-mono text-muted-foreground">REF.ID:2024-NIM</div>
            </div>
            
            <div className="pt-8 grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border">
              {[
                { 
                  icon: Code2, 
                  value: "25+", 
                  label: "Technologies Mastered"
                },
                { 
                  icon: Zap, 
                  value: "99.9%", 
                  label: "Uptime Guarantee"
                },
                { 
                  icon: Shield, 
                  value: "100%", 
                  label: "Security Focused"
                },
                { 
                  icon: Cpu, 
                  value: "24/7", 
                  label: "Performance Monitoring"
                }
          ].map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center relative px-6 py-10"
                >
                  <div className="relative flex flex-col items-center">
                    {/* Industrial icon container */}
                    <div className="relative flex items-center justify-center w-16 h-16 bg-background border border-border mb-6">
                      {/* Technical blueprint grid background */}
                      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                      
                      {/* Corner accents */}
                      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary"></div>
                      <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-primary"></div>
                      <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-primary"></div>
                      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary"></div>
                      
                      <stat.icon className="w-8 h-8 text-foreground" />
              </div>
                    
                    {/* Value with industrial style */}
                    <div className="text-3xl font-bold text-foreground mb-3">{stat.value}</div>
                    
                    {/* Label with industrial underline */}
                    <div className="relative">
              <div className="text-muted-foreground font-medium">{stat.label}</div>
                      <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-[1px] bg-primary"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
