// components/Footer.tsx
import { Mail, Twitter, Linkedin, Github, MapPin, Phone, Clock, ArrowRight, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Features", href: "#features" },
    { label: "Services", href: "#services" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  const services = [
    { label: "Virtual Restaurant Launch", href: "#services" },
    { label: "Ghost Kitchen Setup", href: "#services" },
    { label: "Brand Scaling Systems", href: "#services" },
    { label: "Food Delivery Optimization", href: "#services" },
  ];

  return (
    <footer className="bg-background text-primary-foreground">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <a href="#" className="text-2xl font-bold tracking-tight">
              Kitchen<span className="text-primary">Flow</span>
            </a>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Built for Delivery. Designed for Scale. Launch and scale virtual food brands without the overhead of traditional dining.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Twitter" className="text-primary-foreground/60 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-primary-foreground/60 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" aria-label="GitHub" className="text-primary-foreground/60 hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Facebook" className="text-primary-foreground/60 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="text-primary-foreground/60 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    <span className="group-hover:translate-x-2 transition-transform">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    <span className="group-hover:translate-x-2 transition-transform">{service.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary/70 shrink-0 mt-0.5" />
                <p className="text-sm text-primary-foreground/70">
               Paris Shopping Mall, 4th floor, Main PWD Rd, PWD Housing Society Sector A, Islamabad, Pakistan
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary/70 shrink-0" />
                <a href="tel:+1234567890" className="text-sm text-primary-foreground/70 hover:text-primary transition-colors">
                  +92 333-1116842
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary/70 shrink-0" />
                <a href="mailto:hello@KitchenFlow.io" className="text-sm text-primary-foreground/70 hover:text-primary transition-colors">
                  marketing@clickmasters.pk
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary/70 shrink-0 mt-0.5" />
                <p className="text-sm text-primary-foreground/70">
                  Mon-Sat: 9:00 AM - 6:00 PM<br />
                  
                </p>
              </div>
            </div>
          </div>
        </div>

     
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
            <p className="text-xs text-primary-foreground/60">
              © {currentYear} KitchenFlow. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-xs text-primary-foreground/60 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-xs text-primary-foreground/60 hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-xs text-primary-foreground/60 hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;