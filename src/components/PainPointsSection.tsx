// components/PainPointsSection.tsx
import { Building2, TrendingDown, Clock, MapPin, Gauge } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const PainPointsSection = () => {
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
};

export default PainPointsSection;