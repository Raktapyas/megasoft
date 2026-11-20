import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type MetaItem = { label: string; value: string };

type PageHeroProps = {
  label: string;
  title: ReactNode;
  lead?: ReactNode;
  meta?: MetaItem[];
  index?: string;
  children?: ReactNode;
};

export function PageHero({ label, title, lead, meta, index, children }: PageHeroProps) {
  return (
    <header className="relative overflow-hidden border-b border-white/[0.09] bg-ink pt-32 pb-14 text-ivory sm:pt-40 lg:pt-44 lg:pb-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70 [background-image:linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px)] [background-size:25%_100%] [mask-image:linear-gradient(to_bottom,#000,transparent_92%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[320px] right-[-10%] h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle,rgba(201,162,39,0.12),transparent_66%)]"
      />

      <div className="container-x relative">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <div className="flex items-center gap-2.5">
            <Link
              to="/"
              className="inline-flex h-8 items-center rounded-full border border-white/10 bg-white/[0.03] px-3.5 text-[11px] text-slate transition-colors hover:border-white/25 hover:text-ivory"
            >
              Home
            </Link>
            <span className="text-white/20">/</span>
            <span className="inline-flex h-8 items-center rounded-full border border-white/10 bg-white/[0.03] px-3.5 text-[11px] text-white/70">
              {label}
            </span>
          </div>
          {index && (
            <span className="font-sans text-[10px] tracking-[0.14em] text-white/30 uppercase">
              Chapter {index}
            </span>
          )}
        </div>

        <h1 className="display fade-up mt-9 max-w-[1120px] text-[clamp(2.9rem,7.4vw,6.8rem)]">
          {title}
        </h1>

        <div className="mt-10 grid gap-8 border-t border-white/[0.09] pt-8 sm:mt-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            {lead && (
              <p className="max-w-[620px] font-sans text-[clamp(1rem,1.3vw,1.15rem)] leading-[1.65] text-slate">
                {lead}
              </p>
            )}
          </div>
          {meta && meta.length > 0 && (
            <dl className="grid grid-cols-2 gap-x-8 gap-y-6 lg:col-span-5 lg:justify-self-end">
              {meta.map((item) => (
                <div key={item.label}>
                  <dt className="font-sans text-[9.5px] tracking-[0.12em] text-white/25 uppercase">
                    {item.label}
                  </dt>
                  <dd className="mt-2 break-words font-sans text-[12.5px] leading-[1.5] text-white/70">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          )}
        </div>

        {children}
      </div>
    </header>
  );
}
