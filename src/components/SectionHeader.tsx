// components/SectionHeader.tsx
interface SectionHeaderProps {
  tag: string;
  title: string;
  description?: string;
}

const SectionHeader = ({ tag, title, description }: SectionHeaderProps) => {
  return (
    <div className="mb-16 max-w-2xl">
      <span className="text-sm font-medium uppercase tracking-widest text-primary">{tag}</span>
      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{description}</p>}
    </div>
  );
};

export default SectionHeader;