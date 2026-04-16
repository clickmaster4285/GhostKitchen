// components/AboutSection.tsx
import aboutImg from "@/assets/about.jpg";
import SectionHeader from "./SectionHeader";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const AboutSection = () => {
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
};

export default AboutSection;