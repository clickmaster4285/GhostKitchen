// hooks/useScrollFadeIn.ts
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useScrollFadeIn = (selector: string) => {
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
};