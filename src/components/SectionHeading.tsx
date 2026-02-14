interface SectionHeadingProps {
  id: string;
  title: string;
  subtitle?: string;
  number?: string;
}

export function SectionHeading({
  id,
  title,
  subtitle,
  number,
}: SectionHeadingProps) {
  return (
    <div id={id} className="scroll-mt-24 mb-8">
      <div className="flex items-baseline gap-3">
        {number && (
          <span className="font-mono text-sm text-accent-600 font-medium">
            {number}
          </span>
        )}
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-gray-100">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="text-gray-400 mt-2 text-base max-w-2xl">{subtitle}</p>
      )}
    </div>
  );
}
