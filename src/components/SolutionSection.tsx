// components/SolutionSection.tsx
import { Cloud, Truck, Layers, BarChart3, Rocket } from "lucide-react";
import solutionImg from "@/assets/solution-diagram.jpg";
import SectionHeader from "./SectionHeader";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const SolutionSection = () => {
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
};

export default SolutionSection;