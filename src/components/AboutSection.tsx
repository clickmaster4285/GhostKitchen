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
  <SectionHeader 
    tag="About Us" 
    title="Technology That Powers Modern Food Brands" 
  />

  <div className="space-y-4 text-muted-foreground">
    <p className="about-fade">
      Clickmasters is a software development company focused on building high-performance digital solutions for modern food businesses. What began as a small team solving real operational challenges has grown into a trusted technology partner for delivery-first brands.
    </p>

    <p className="about-fade">
      We work with startups and enterprise operators across the food delivery ecosystem — designing and developing scalable systems that streamline operations, improve efficiency, and support rapid growth through cloud-native infrastructure.
    </p>

    <p className="about-fade text-foreground font-medium">
      Today, Clickmasters delivers custom software, automation tools, and digital platforms that power growth, operational excellence, and long-term transformation for food businesses.
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