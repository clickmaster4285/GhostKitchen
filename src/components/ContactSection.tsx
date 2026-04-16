// components/ContactSection.tsx
import SectionHeader from "./SectionHeader";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { useState, useRef } from "react";
import { Send, Mail, Phone, MapPin, Clock, Navigation, MessageSquare } from "lucide-react";
import { toast } from "sonner";
import gsap from "gsap";

// Location data
const LOCATION = {
  fullAddress:
    "Paris Shopping Mall, 4th floor, Main PWD Rd, PWD Housing Society Sector A, Islamabad, Punjab 45700, Pakistan",
};

const MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  LOCATION.fullAddress
)}&output=embed`;

const ContactSection = () => {
  const ref = useScrollFadeIn(".contact-fade");
  const btnRef = useRef<HTMLButtonElement>(null);
  
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    businessType: "",
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Valid email is required";
    }
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setIsSubmitting(true);

    if (btnRef.current) {
      gsap.fromTo(btnRef.current, 
        { scale: 1 }, 
        { scale: 1.05, duration: 0.15, yoyo: true, repeat: 1 }
      );
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          phone: form.phone,
          businessType: form.businessType,
        }),
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}: ${res.statusText}`);
      }

      const data = await res.json();

      if (data.success) {
        toast.success("Message sent successfully!");
        setForm({ name: "", email: "", phone: "", message: "", businessType: "" });
        setErrors({});
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to send. Please try again or email marketing@clickmasters.pk");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={ref} className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left side - Contact Info */}
          <div className="space-y-6">
            <div className="contact-fade text-left">
              <SectionHeader
                tag="Contact"
                title="Let's Build Your Kitchen"
                description="Ready to launch a delivery-first food brand? Get in touch."
              />
            </div>

            {/* Address */}
            <div className="contact-fade bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Visit Us</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{LOCATION.fullAddress}</p>
                </div>
              </div>
            </div>

            {/* Call Us and Email Us in same row */}
            <div className="grid grid-cols-2 gap-4">
              <div className="contact-fade bg-card rounded-2xl p-5 border border-border hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 text-sm">Call Us</h3>
                    <p className="text-muted-foreground text-xs">+92 333-1116842</p>
                    <p className="text-muted-foreground text-xs">+92 332-5394285</p>
                  </div>
                </div>
              </div>

              <div className="contact-fade bg-card rounded-2xl p-5 border border-border hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 text-sm">Email Us</h3>
                    <p className="text-muted-foreground text-xs">marketing@clickmasters.pk</p>
                    <p className="text-muted-foreground text-xs">info@clickmasters.pk</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="contact-fade bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Business Hours</h3>
                  <p className="text-muted-foreground text-sm">Monday - Saturday: 9AM - 6PM</p>
                  <p className="text-muted-foreground text-sm">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="contact-fade rounded-2xl overflow-hidden border border-border">
              <iframe
                src={MAP_EMBED_URL}
                width="100%"
                height="200"
                style={{ border: 0 }}
                loading="lazy"
                title="Location"
                className="w-full h-full"
              />
            </div>

            {/* Directions Link */}
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                LOCATION.fullAddress
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-fade inline-flex items-center gap-2 text-primary text-sm hover:underline"
            >
              <Navigation className="w-4 h-4" />
              Get Directions
            </a>
          </div>

          {/* Right side - Form */}
                  <div className="contact-fade">
                     
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-xl border border-border space-y-6">
               <div className="flex gap-2 ">
                          <MessageSquare className="h-5 w-5 text-primary"/>
                          <h1> Send us a message</h1>
                          

                     </div>
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={`w-full rounded-lg border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary ${
                    errors.name ? "border-destructive" : "border-border"
                  }`}
                  placeholder="Your name"
                />
                {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={`w-full rounded-lg border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary ${
                    errors.email ? "border-destructive" : "border-border"
                  }`}
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone <span className="text-muted-foreground text-xs">(Optional)</span>
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                  placeholder="+92 XXX XXXXXXX"
                />
              </div>


              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message <span className="text-primary">*</span>
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={4}
                  className={`w-full rounded-lg border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary resize-none ${
                    errors.message ? "border-destructive" : "border-border"
                  }`}
                  placeholder="Tell us about your food brand..."
                />
                {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
              </div>

              <button
                ref={btnRef}
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-primary py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {isSubmitting ? "Sending Message..." : "Send Message"}
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;