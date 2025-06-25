import { Card, CardContent } from "@/components/ui/card";
import { Check, Trophy, Rocket, Sparkles, Zap, ArrowRight, Monitor, Cpu, Calendar, Users, Star, BarChart } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
  const highlights = [
    {
      icon: Star,
      title: "5+ Years Experience",
      description: "Half a decade of delivering exceptional software solutions for businesses across Sri Lanka and beyond.",
      color: "from-blue-600 to-primary"
    },
    {
      icon: Zap,
      title: "Agile Methodologies",
      description: "Leveraging industry-leading development practices to ensure rapid, high-quality project delivery.",
      color: "from-primary to-purple-600"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "A dedicated team of seasoned professionals with specialized expertise across diverse technology stacks.",
      color: "from-cyan-600 to-blue-700"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="lg:col-span-6" variants={itemVariants}>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Cpu className="w-4 h-4 mr-2" />
              About Us
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Established Tech Company in{" "}
              <div className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-blue-600 to-primary bg-clip-text text-transparent">
                  Sri Lanka
                </span>
                <div className="absolute -bottom-1 left-0 right-0 h-3 bg-primary/20 rounded-full -z-10"></div>
              </div>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              With five years of industry experience, Nimtec Solution has established itself as a trusted technology partner in Sri Lanka's competitive tech landscape. We blend deep local market knowledge with international best practices to deliver powerful digital solutions that drive measurable business growth and innovation.
            </p>

            <div className="space-y-8 mb-12">
              {highlights.map((highlight, index) => (
                <motion.div 
                  key={index} 
                  className="group"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${highlight.color} flex items-center justify-center flex-shrink-0 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                      <highlight.icon className="text-white w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">{highlight.title}</h4>
                      <p className="text-muted-foreground">{highlight.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Company Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6 pt-8 border-t border-border"
              variants={itemVariants}
            >
              <div className="p-4 bg-muted/50 rounded-xl backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-colors">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-primary bg-clip-text text-transparent">2019</div>
                <div className="text-muted-foreground font-medium mt-1">Est.</div>
              </div>
              <div className="p-4 bg-muted/50 rounded-xl backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-colors">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">15+</div>
                <div className="text-muted-foreground font-medium mt-1">Team Members</div>
              </div>
              <div className="p-4 bg-muted/50 rounded-xl backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-colors">
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">50+</div>
                <div className="text-muted-foreground font-medium mt-1">Projects</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="lg:col-span-6 relative"
            variants={itemVariants}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Nimtec professional team collaborating in modern workspace"
                className="w-full rounded-2xl object-cover h-[500px] transform hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </div>

            {/* Floating stats card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 z-20"
            >
              <Card className="overflow-hidden border-2 border-primary/20 shadow-xl bg-background/80 backdrop-blur-md">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-5">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/30">
                      <BarChart className="text-white w-7 h-7" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-primary bg-clip-text text-transparent">98%</div>
                      <div className="text-sm font-medium text-muted-foreground">Client Satisfaction</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Second floating element */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute -top-4 -right-4 z-20"
            >
              <Card className="overflow-hidden border border-border/50 shadow-lg bg-background/80 backdrop-blur-md">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-lg flex items-center justify-center shadow-md">
                      <Trophy className="text-white w-5 h-5" />
                    </div>
                    <div className="text-sm font-medium">Tech Excellence Award 2023</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
