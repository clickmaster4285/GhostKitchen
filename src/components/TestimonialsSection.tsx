// components/TestimonialsSection.tsx
import { useState, useEffect } from "react";
import SectionHeader from "./SectionHeader";

const TestimonialsSection = () => {
  const testimonials = [
    { name: "Sarah K.", role: "COO, FreshBowl Co.", text: "KitchenFlow completely transformed our delivery ops. We went from 1 brand to 3 in under 4 months — all from one kitchen." },
    { name: "David R.", role: "Founder, NomadEats", text: "The infrastructure they built let us cut operational costs by nearly half. We're scaling faster than we ever imagined." },
    { name: "Priya M.", role: "VP Operations, QuickBite", text: "Their tech-first approach to ghost kitchens is exactly what the industry needs. Clean, fast, and incredibly efficient." },
    { name: "James L.", role: "CEO, Urban Plate", text: "We launched our virtual brand in 3 weeks. The speed and quality KitchenFlow delivers is unmatched." },
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
};

export default TestimonialsSection;