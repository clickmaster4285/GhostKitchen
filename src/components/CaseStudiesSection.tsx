// components/CaseStudiesSection.tsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import caseStudyImg from "@/assets/case-study.webp";
import SectionHeader from "./SectionHeader";

gsap.registerPlugin(ScrollTrigger);

const CaseStudiesSection = () => {
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
};

export default CaseStudiesSection;