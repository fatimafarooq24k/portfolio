interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="font-mono text-sm text-brand-700">{eyebrow}</p>
      <h2 className="mt-3 text-4xl font-semibold leading-[1.2] tracking-tight md:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-lg leading-normal text-ink/70">{description}</p>}
    </div>
  );
}
