// components/ServicesSection.tsx
import { Store, ChefHat, Rocket, Truck, Settings } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const ServicesSection = () => {
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
          {services.map((s) => (
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
};

export default ServicesSection;