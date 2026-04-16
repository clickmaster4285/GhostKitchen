// components/HeroSection.tsx
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";

const HeroSection = () => {
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
          <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-background/60 to-background/40" />
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
};

export default HeroSection;