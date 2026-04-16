// components/BlogsSection.tsx
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import SectionHeader from "./SectionHeader";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const BlogsSection = () => {
  const ref = useScrollFadeIn(".blog-card");
  const blogs = [
    { img: blog1, title: "Future of Cloud Kitchens", desc: "How virtual kitchen infrastructure is reshaping the food industry.", date: "Mar 2026" },
    { img: blog2, title: "Why Delivery-First Brands Win", desc: "The economics behind delivery-native food operations.", date: "Feb 2026" },
    { img: blog3, title: "Scaling Food Businesses Without Dine-In", desc: "A playbook for operators ready to drop physical dining.", date: "Jan 2026" },
  ];

  return (
    <section id="blog" ref={ref} className="section-padding">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader tag="Blog" title="Insights & Perspectives" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((b) => (
            <article key={b.title} className="blog-card group cursor-pointer overflow-hidden rounded-xl border border-border/50 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={b.img}
                  alt={b.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  width={800}
                  height={600}
                />
              </div>
              <div className="p-5">
                <span className="text-xs text-muted-foreground">{b.date}</span>
                <h3 className="mt-2 font-semibold transition-colors group-hover:text-primary">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;