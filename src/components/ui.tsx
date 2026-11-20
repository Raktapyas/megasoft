import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { useMagnetic } from "../hooks/useMagnetic";

type ButtonProps = {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: "solid" | "solid-dark" | "outline" | "outline-dark";
  className?: string;
  arrow?: boolean;
};

const buttonStyles: Record<string, string> = {
  solid:
    "border-ivory bg-ivory text-ink hover:border-white/40 hover:bg-white/90",
  "solid-dark":
    "border-ivory bg-ivory text-ink hover:border-white/40 hover:bg-white/90",
  outline:
    "border-white/15 bg-white/[0.03] text-ivory/80 hover:border-white/35 hover:bg-white/[0.06] hover:text-ivory",
  "outline-dark":
    "border-white/15 bg-white/[0.03] text-ivory/80 hover:border-white/35 hover:bg-white/[0.06] hover:text-ivory",
};

export function Button({
  children,
  to,
  href,
  variant = "solid",
  className = "",
  arrow = true,
}: ButtonProps) {
  const magneticRef = useMagnetic<HTMLSpanElement>(0.16, 8);
  const classes = `group inline-flex h-[52px] items-center justify-center gap-2.5 rounded-full border px-6 font-sans text-[14px] font-medium transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] ${buttonStyles[variant]}`;

  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <span
          aria-hidden="true"
          className="text-[13px] transition-transform duration-400 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        >
          ↗
        </span>
      )}
    </>
  );

  let control: ReactNode;

  if (to) {
    control = (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  } else if (href) {
    control = (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        className={classes}
      >
        {content}
      </a>
    );
  } else {
    control = (
      <button type="button" className={classes}>
        {content}
      </button>
    );
  }

  return (
    <span
      ref={magneticRef}
      className={`magnetic inline-flex align-top ${className}`}
    >
      {control}
    </span>
  );
}

export function TextLink({
  to,
  href,
  children,
  onLight = false,
  className = "",
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  onLight?: boolean;
  className?: string;
}) {
  const classes = `link-line font-sans text-[12px] font-medium tracking-[0.02em] ${
    onLight ? "text-slate hover:text-ivory" : "text-slate hover:text-ivory"
  } ${className}`;

  const content = (
    <>
      <span>{children}</span>
      <span aria-hidden="true" className="text-[13px] text-accent">
        ↗
      </span>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noreferrer" : undefined}
      className={classes}
    >
      {content}
    </a>
  );
}

export function SectionHeading({
  index,
  label,
  title,
  children,
  light: _light = false,
  className = "",
}: {
  index?: string;
  label: string;
  title: ReactNode;
  children?: ReactNode;
  light?: boolean;
  className?: string;
}) {
  void _light;

  return (
    <div className={className}>
      <div className="flex items-center gap-3">
        {index && (
          <span className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-sans text-[10px] tracking-[0.08em] text-slate">
            {index}
          </span>
        )}
        <span className="eyebrow text-slate">{label}</span>
      </div>
      <h2 className="display mt-6 text-[clamp(2.35rem,5vw,4rem)]">
        {title}
      </h2>
      {children && (
        <div className="mt-6 max-w-[520px] font-sans text-[15px] leading-[1.7] text-slate">
          {children}
        </div>
      )}
    </div>
  );
}
