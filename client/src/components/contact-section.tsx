import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import { SiLinkedin, SiX, SiFacebook, SiInstagram, SiGithub, SiDribbble } from "react-icons/si";

interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  projectType: string;
  message: string;
}

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactForm>({
    firstName: "",
    lastName: "",
    email: "",
    projectType: "",
    message: ""
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        projectType: "",
        message: ""
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Error sending message",
        description: error.message || "Please try again later.",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Office",
      content: "No. 123, Galle Road\nColombo 03, Sri Lanka"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+94 11 234 5678"
    },
    {
      icon: Mail,
      title: "Email",
      content: "hello@nimtecsolution.lk"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 9:00 AM - 2:00 PM"
    }
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: SiLinkedin, href: "#", color: "var(--primary)" },
    { name: "X (Twitter)", icon: SiX, href: "#", color: "var(--foreground)" },
    { name: "Facebook", icon: SiFacebook, href: "#", color: "var(--primary)" },
    { name: "Instagram", icon: SiInstagram, href: "#", color: "var(--primary)" },
    { name: "GitHub", icon: SiGithub, href: "#", color: "var(--foreground)" },
    { name: "Dribbble", icon: SiDribbble, href: "#", color: "var(--accent)" }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Let's Start Your Project</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your business with cutting-edge software? Get in touch with our team in Sri Lanka.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="bg-muted/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-sm font-medium text-foreground">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      className="mt-2"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-sm font-medium text-foreground">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      className="mt-2"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="mt-2"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="projectType" className="text-sm font-medium text-foreground">
                    Project Type
                  </Label>
                  <Select value={formData.projectType} onValueChange={(value) => handleInputChange("projectType", value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="web">Web Development</SelectItem>
                      <SelectItem value="mobile">Mobile App</SelectItem>
                      <SelectItem value="cloud">Cloud Solutions</SelectItem>
                      <SelectItem value="digital">Digital Transformation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="mt-2"
                    placeholder="Tell us about your project..."
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full gradient-bg text-primary-foreground py-6 hover:shadow-lg transition-all duration-300"
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Get in touch</h3>
              <p className="text-muted-foreground mb-8">
                We're here to help bring your ideas to life. Contact our team for a free consultation
                and let's discuss how we can help your business grow.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="text-primary-foreground w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                    <p className="text-muted-foreground whitespace-pre-line">{info.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-border">
              <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="group flex items-center space-x-3 p-3 bg-background/80 backdrop-blur-sm rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="w-8 h-8 flex items-center justify-center">
                      <social.icon 
                        className="w-5 h-5 transition-colors duration-300" 
                        style={{ color: social.color }}
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-medium text-foreground group-hover:text-primary transition-colors truncate">
                        {social.name}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
