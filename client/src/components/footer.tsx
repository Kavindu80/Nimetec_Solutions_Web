import { Code } from "lucide-react";
import { SiLinkedin, SiX, SiFacebook, SiInstagram, SiGithub, SiDribbble } from "react-icons/si";

export default function Footer() {
  const footerSections = [
    {
      title: "Services",
      links: [
        "Web Development",
        "Mobile Apps",
        "Cloud Solutions",
        "API Development",
        "Digital Transformation"
      ]
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Portfolio",
        "Careers",
        "Blog",
        "Contact"
      ]
    }
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: SiLinkedin, href: "#" },
    { name: "X (Twitter)", icon: SiX, href: "#" },
    { name: "Facebook", icon: SiFacebook, href: "#" },
    { name: "Instagram", icon: SiInstagram, href: "#" },
    { name: "GitHub", icon: SiGithub, href: "#" },
    { name: "Dribbble", icon: SiDribbble, href: "#" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Update the URL hash
      window.history.pushState({}, '', `/#${sectionId}`);
      
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-neutral-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Nimtec Solution</h3>
            </div>
            <p className="text-neutral-400 mb-6">
              Leading software development company in Sri Lanka, delivering world-class digital solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="group w-10 h-10 bg-neutral-800 rounded-xl flex items-center justify-center hover:bg-primary transition-all duration-300 hover:transform hover:scale-110 hover:rotate-12"
                  title={social.name}
                >
                  <social.icon 
                    className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" 
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Services & Company */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-6">{section.title}</h4>
              <ul className="space-y-3 text-neutral-400">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button 
                      className="hover:text-primary transition-colors text-left"
                      onClick={() => {
                        if (link === "About Us") scrollToSection("about");
                        else if (link === "Portfolio") scrollToSection("portfolio");
                        else if (link === "Contact") scrollToSection("contact");
                      }}
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-3 text-neutral-400">
              <div className="flex items-center space-x-3">
                <span className="text-accent">📍</span>
                <span>Colombo 03, Sri Lanka</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-accent">📞</span>
                <span>+94 11 234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-accent">✉️</span>
                <span>hello@nimtecsolution.lk</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm">
              © 2024 Nimtec Solution. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-neutral-400 hover:text-primary transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
