type MarqueeProps = {
  items: string[];
  className?: string;
};

export function Marquee({ items, className = "" }: MarqueeProps) {
  const row = [...items, ...items];

  return (
    <div
      className={`marquee relative overflow-hidden border-y border-white/[0.09] bg-ink-soft py-5 text-slate ${className}`}
    >
      <div className="marquee-track items-center">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="flex shrink-0 items-center"
            aria-hidden={copy === 1}
          >
            {row.map((item, index) => (
              <span key={`${copy}-${index}`} className="flex items-center">
                <span className="px-6 font-sans text-[13px] font-normal tracking-[0.02em] whitespace-nowrap sm:px-9">
                  {item}
                </span>
                <span
                  aria-hidden="true"
                  className="h-1 w-1 rotate-45 bg-accent/70"
                />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
