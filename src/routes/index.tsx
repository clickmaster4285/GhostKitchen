import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import aboutImg from "@/assets/about.jpg";
import solutionImg from "@/assets/solution-diagram.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import caseStudyImg from "@/assets/case-study.jpg";

import {
  Building2,
  TrendingDown,
  Clock,
  MapPin,
  Gauge,
  Cloud,
  Truck,
  Layers,
  BarChart3,
  Rocket,
  Store,
  Wrench,
  Zap,
  Settings,
  ChefHat,
  ArrowRight,
  Mail,
  Twitter,
  Linkedin,
  Github,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PainPointsSection />
      <SolutionSection />
      <FeaturesSection />
      <ServicesSection />
      <CaseStudiesSection />
      <BlogsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

/* ─── Navbar ─── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "About", href: "#about" },
    { label: "Features", href: "#features" },
    { label: "Services", href: "#services" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="text-xl font-bold tracking-tight text-foreground">
          Click<span className="text-primary">masters</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Book a Demo
          </a>
        </div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Menu"
        >
          <span className={`block h-0.5 w-6 bg-foreground transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-foreground transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-foreground transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>
      {mobileOpen && (
        <div className="glass border-t border-border px-6 pb-6 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-2 block rounded-lg bg-primary px-4 py-2 text-center text-sm font-medium text-primary-foreground"
          >
            Book a Demo
          </a>
        </div>
      )}
    </nav>
  );
}

/* ─── Hero ─── */
function HeroSection() {
  const heroImages = [hero1, hero2, hero3, hero4];
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".hero-text", {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative flex min-h-screen items-center overflow-hidden">
      {heroImages.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={img}
            alt={`Ghost kitchen visual ${i + 1}`}
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
            {...(i !== 0 ? { loading: "lazy" as const } : {})}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
        </div>
      ))}

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32">
        <div className="max-w-2xl">
          <h1 className="hero-text text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Built for Delivery.{" "}
            <span className="text-primary">Designed for Scale.</span>
          </h1>
          <p className="hero-text mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Launch and scale virtual food brands without the overhead of traditional dining.
          </p>
          <div className="hero-text mt-10 flex flex-wrap gap-4">
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
            >
              Explore Kitchens <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-accent"
            >
              Book a Demo
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === current ? "w-8 bg-primary" : "w-4 bg-muted-foreground/40"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

/* ─── useScrollFadeIn ─── */
function useScrollFadeIn(selector: string) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(selector).forEach((el, i) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
          opacity: 0,
          y: 30,
          duration: 0.7,
          delay: i * 0.1,
          ease: "power2.out",
        });
      });
    }, ref);
    return () => ctx.revert();
  }, [selector]);
  return ref;
}

/* ─── Section Header ─── */
function SectionHeader({ tag, title, description }: { tag: string; title: string; description?: string }) {
  return (
    <div className="mb-16 max-w-2xl">
      <span className="text-sm font-medium uppercase tracking-widest text-primary">{tag}</span>
      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{description}</p>}
    </div>
  );
}

/* ─── About ─── */
function AboutSection() {
  const ref = useScrollFadeIn(".about-fade");
  return (
    <section id="about" ref={ref} className="section-padding">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeader tag="About Us" title="Technology That Powers Modern Food Brands" />
          <div className="space-y-4 text-muted-foreground">
            <p className="about-fade">
              What started as a focused development team building solutions for real business
              challenges has evolved into a full-scale technology partner for the food industry.
            </p>
            <p className="about-fade">
              We partner with startups and enterprise operators across the food delivery ecosystem —
              streamlining operations, maximizing efficiency, and enabling rapid scale through
              cloud-native infrastructure.
            </p>
            <p className="about-fade text-foreground font-medium">
              Today, Clickmasters builds the systems that power growth, operational excellence, and
              long-term digital transformation for delivery-first food brands.
            </p>
          </div>
        </div>
        <div className="about-fade overflow-hidden rounded-2xl">
          <img
            src={aboutImg}
            alt="Clickmasters team collaborating"
            className="h-full w-full object-cover"
            loading="lazy"
            width={1280}
            height={720}
          />
        </div>
      </div>
    </section>
  );
}

/* ─── Pain Points ─── */
function PainPointsSection() {
  const ref = useScrollFadeIn(".pain-card");
  const painPoints = [
    { icon: Building2, title: "High Rent & Infrastructure", desc: "Traditional kitchens demand massive upfront capital and ongoing lease costs." },
    { icon: TrendingDown, title: "Low Dine-In Margins", desc: "Brick-and-mortar models eat into profits with seating, décor, and front-of-house overhead." },
    { icon: Gauge, title: "Operational Inefficiencies", desc: "Manual workflows and fragmented systems slow down every part of the operation." },
    { icon: Clock, title: "Slow Expansion Cycles", desc: "Opening new locations takes months of planning, permits, and construction." },
    { icon: MapPin, title: "Location Dependency", desc: "Success shouldn't be determined by your physical address or foot traffic." },
  ];

  return (
    <section ref={ref} className="section-padding bg-surface/30">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          tag="The Problem"
          title="Traditional Food Models Are Broken"
          description="Legacy restaurant infrastructure creates barriers that limit growth and drain resources."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {painPoints.map((p) => (
            <div key={p.title} className="pain-card glass-card rounded-xl p-6 transition-all hover:border-primary/20">
              <p.icon className="h-8 w-8 text-primary/70" />
              <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Solution ─── */
function SolutionSection() {
  const ref = useScrollFadeIn(".sol-fade");
  const solutions = [
    { icon: Cloud, label: "Cloud Kitchen Infrastructure" },
    { icon: Truck, label: "Delivery-First Brand System" },
    { icon: Layers, label: "Multi-Brand Kitchen Management" },
    { icon: BarChart3, label: "Data-Driven Menu Optimization" },
    { icon: Rocket, label: "Scalable Operations Without Physical Dining" },
  ];

  return (
    <section ref={ref} className="section-padding">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          tag="The Solution"
          title="The Future of Food Is Infrastructure-Light"
          description="Replace heavy overhead with a modular, delivery-optimized system built for multi-brand scale."
        />
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            {solutions.map((s) => (
              <div key={s.label} className="sol-fade flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <p className="pt-2 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="sol-fade overflow-hidden rounded-2xl">
            <img
              src={solutionImg}
              alt="Cloud kitchen network diagram"
              className="h-full w-full object-cover"
              loading="lazy"
              width={1280}
              height={720}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Features ─── */
function FeaturesSection() {
  const ref = useScrollFadeIn(".feat-card");
  const features = [
    { icon: Layers, title: "Multi-Brand Kitchen Support", desc: "Run multiple virtual brands from a single kitchen unit." },
    { icon: Zap, title: "Real-Time Order Optimization", desc: "AI-powered routing that minimizes prep time and delivery delay." },
    { icon: BarChart3, title: "Smart Menu Analytics", desc: "Data-driven insights to optimize your menu for profitability." },
    { icon: Truck, title: "Delivery Integration Ready", desc: "Seamless connection with all major delivery platforms." },
    { icon: Rocket, title: "Scalable Kitchen Deployment", desc: "Replicate and launch new kitchen units in days, not months." },
  ];

  return (
    <section id="features" ref={ref} className="section-padding bg-surface/30">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          tag="Features"
          title="Built for Operators Who Scale"
          description="Every feature designed to maximize throughput and minimize waste."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="feat-card glass-card group rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <f.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Services ─── */
function ServicesSection() {
  const ref = useScrollFadeIn(".svc-card");
  const services = [
    { icon: Store, title: "Virtual Restaurant Launch", desc: "End-to-end setup of delivery-only restaurant brands." },
    { icon: ChefHat, title: "Ghost Kitchen Setup", desc: "Design, equip, and operationalize cloud kitchen spaces." },
    { icon: Rocket, title: "Brand Scaling Systems", desc: "Replicate successful brands across multiple locations." },
    { icon: Truck, title: "Food Delivery Optimization", desc: "Maximize delivery speed, reduce costs, improve customer experience." },
    { icon: Settings, title: "Operational Automation", desc: "Automate inventory, scheduling, and order workflows." },
  ];

  return (
    <section id="services" ref={ref} className="section-padding">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          tag="Services"
          title="What We Build For You"
          description="From concept to scaled operation — we handle the technology so you can focus on food."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div key={s.title} className="svc-card group flex gap-4 rounded-xl border border-border/50 p-6 transition-all hover:border-primary/20 hover:bg-accent/30">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <s.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Case Studies ─── */
function CaseStudiesSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".counter").forEach((el) => {
        const target = parseInt(el.dataset.target || "0", 10);
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
          onUpdate: () => {
            el.textContent = (el.dataset.prefix || "") + Math.round(obj.val) + (el.dataset.suffix || "");
          },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const metrics = [
    { value: 312, prefix: "+", suffix: "%", label: "Delivery growth in 6 months" },
    { value: 40, prefix: "", suffix: "%", label: "Reduced operational cost" },
    { value: 3, prefix: "", suffix: "", label: "Brands from a single kitchen" },
  ];

  return (
    <section id="case-studies" ref={ref} className="section-padding bg-surface/30">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          tag="Case Studies"
          title="Results That Speak"
          description="Real outcomes from operators who made the switch."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {metrics.map((m) => (
            <div key={m.label} className="glass-card flex flex-col items-center rounded-2xl p-10 text-center">
              <span
                className="counter text-5xl font-bold text-primary"
                data-target={m.value}
                data-prefix={m.prefix}
                data-suffix={m.suffix}
              >
                {m.prefix}0{m.suffix}
              </span>
              <p className="mt-4 text-muted-foreground">{m.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 overflow-hidden rounded-2xl">
          <img
            src={caseStudyImg}
            alt="Analytics dashboard showing delivery metrics"
            className="w-full object-cover"
            loading="lazy"
            width={1280}
            height={720}
          />
        </div>
      </div>
    </section>
  );
}

/* ─── Blogs ─── */
function BlogsSection() {
  const ref = useScrollFadeIn(".blog-card");
  const blogs = [
    { img: blog1, title: "Future of Cloud Kitchens", desc: "How virtual kitchen infrastructure is reshaping the food industry.", date: "Mar 2026" },
    { img: blog2, title: "Why Delivery-First Brands Win", desc: "The economics behind delivery-native food operations.", date: "Feb 2026" },
    { img: blog3, title: "Scaling Food Businesses Without Dine-In", desc: "A playbook for operators ready to drop physical dining.", date: "Jan 2026" },
  ];

  return (
    <section id="blog" ref={ref} className="section-padding">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader tag="Blog" title="Insights & Perspectives" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((b) => (
            <article key={b.title} className="blog-card group cursor-pointer overflow-hidden rounded-xl border border-border/50 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={b.img}
                  alt={b.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  width={800}
                  height={600}
                />
              </div>
              <div className="p-5">
                <span className="text-xs text-muted-foreground">{b.date}</span>
                <h3 className="mt-2 font-semibold transition-colors group-hover:text-primary">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ─── */
function TestimonialsSection() {
  const testimonials = [
    { name: "Sarah K.", role: "COO, FreshBowl Co.", text: "Clickmasters completely transformed our delivery ops. We went from 1 brand to 3 in under 4 months — all from one kitchen." },
    { name: "David R.", role: "Founder, NomadEats", text: "The infrastructure they built let us cut operational costs by nearly half. We're scaling faster than we ever imagined." },
    { name: "Priya M.", role: "VP Operations, QuickBite", text: "Their tech-first approach to ghost kitchens is exactly what the industry needs. Clean, fast, and incredibly efficient." },
    { name: "James L.", role: "CEO, Urban Plate", text: "We launched our virtual brand in 3 weeks. The speed and quality Clickmasters delivers is unmatched." },
  ];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((a) => (a + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="section-padding bg-surface/30">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <SectionHeader tag="Testimonials" title="Trusted by Operators" />
        <div className="relative mt-8 min-h-[200px]">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ${
                i === active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
              }`}
            >
              <div className="glass-card rounded-2xl p-8 text-center">
                <p className="text-lg italic leading-relaxed text-foreground/90">"{t.text}"</p>
                <div className="mt-6">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === active ? "w-8 bg-primary" : "w-4 bg-muted-foreground/30"
              }`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Contact ─── */
function ContactSection() {
  const ref = useScrollFadeIn(".contact-fade");

  return (
    <section id="contact" ref={ref} className="section-padding">
      <div className="mx-auto max-w-3xl px-6">
        <div className="contact-fade text-center">
          <SectionHeader
            tag="Contact"
            title="Let's Build Your Kitchen"
            description="Ready to launch a delivery-first food brand? Get in touch."
          />
        </div>
        <form
          className="contact-fade glass-card mt-8 space-y-6 rounded-2xl p-8"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="group relative">
              <input
                type="text"
                id="name"
                placeholder=" "
                className="peer w-full rounded-lg border border-border bg-transparent px-4 pb-2 pt-5 text-sm text-foreground outline-none transition-colors focus:border-cyan"
              />
              <label
                htmlFor="name"
                className="pointer-events-none absolute left-4 top-2 text-xs text-muted-foreground transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-cyan"
              >
                Name
              </label>
            </div>
            <div className="group relative">
              <input
                type="email"
                id="email"
                placeholder=" "
                className="peer w-full rounded-lg border border-border bg-transparent px-4 pb-2 pt-5 text-sm text-foreground outline-none transition-colors focus:border-cyan"
              />
              <label
                htmlFor="email"
                className="pointer-events-none absolute left-4 top-2 text-xs text-muted-foreground transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-cyan"
              >
                Email
              </label>
            </div>
          </div>
          <div className="group relative">
            <select
              id="business"
              defaultValue=""
              className="w-full appearance-none rounded-lg border border-border bg-transparent px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-cyan"
            >
              <option value="" disabled className="bg-card text-muted-foreground">
                Business Type
              </option>
              <option value="startup" className="bg-card">Startup</option>
              <option value="restaurant" className="bg-card">Restaurant Chain</option>
              <option value="investor" className="bg-card">Investor</option>
              <option value="other" className="bg-card">Other</option>
            </select>
          </div>
          <div className="group relative">
            <textarea
              id="message"
              placeholder=" "
              rows={4}
              className="peer w-full resize-none rounded-lg border border-border bg-transparent px-4 pb-2 pt-5 text-sm text-foreground outline-none transition-colors focus:border-cyan"
            />
            <label
              htmlFor="message"
              className="pointer-events-none absolute left-4 top-2 text-xs text-muted-foreground transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-cyan"
            >
              Message
            </label>
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-primary py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div>
          <p className="text-lg font-bold">
            Click<span className="text-primary">masters</span>
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Delivery-first food systems for modern brands.
          </p>
        </div>
        <div className="flex items-center gap-6">
          <a href="mailto:hello@clickmasters.io" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            hello@clickmasters.io
          </a>
          <div className="flex gap-3">
            <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="#" aria-label="GitHub" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-muted-foreground/60">
        © {new Date().getFullYear()} Clickmasters. All rights reserved.
      </p>
    </footer>
  );
}
