// components/FeaturesSection.tsx
import { Layers, Zap, BarChart3, Truck, Rocket } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const FeaturesSection = () => {
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
};

export default FeaturesSection;