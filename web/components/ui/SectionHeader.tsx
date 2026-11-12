interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
  const titleColor = light ? "text-[#f7fef8]" : "text-[#1a1a1a]";
  const descColor = light ? "text-[#c0c481]" : "text-[#5c5c5c]";

  return (
    <div className={`flex flex-col gap-3 ${alignClass}`}>
      {eyebrow && (
        <span
          className="text-xs font-medium uppercase tracking-[0.1em] text-[#5b6569]"
          aria-label={eyebrow}
        >
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-semibold leading-tight ${titleColor}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-base md:text-lg max-w-2xl leading-relaxed ${descColor}`}>
          {description}
        </p>
      )}
    </div>
  );
}
