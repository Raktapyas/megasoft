import { Link } from "react-router-dom";
import type { Service } from "../data/services";
import { Reveal } from "./Reveal";

export function ServiceRows({ items }: { items: Service[] }) {
  return (
    <div>
      {items.map((service, index) => (
        <Reveal key={service.slug} delay={Math.min(index * 35, 180)}>
          <Link
            to={`/services/${service.slug}`}
            className="group relative block overflow-hidden border-b border-white/[0.09] transition-colors duration-500 last:border-b-0 hover:bg-white/[0.025]"
          >
            <span className="pointer-events-none absolute inset-y-0 left-0 w-px scale-y-0 bg-accent/70 transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-y-100" />

            <div className="relative grid grid-cols-[2.2rem_minmax(0,1fr)_auto] items-center gap-4 px-5 py-6 sm:grid-cols-[3rem_minmax(0,1fr)_auto] sm:gap-6 sm:px-8 sm:py-7 lg:grid-cols-[3.5rem_minmax(0,1fr)_18rem_auto]">
              <span className="font-sans text-[11px] tracking-[0.08em] text-accent/80">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="font-display text-[clamp(1.35rem,2.6vw,2rem)] font-semibold leading-tight tracking-[-0.04em] text-ivory transition-colors duration-300">
                {service.navTitle}
              </h3>

              <p className="hidden max-w-[18rem] font-sans text-[14px] leading-[1.65] text-slate lg:block">
                {service.short}
              </p>

              <div className="flex items-center justify-end gap-4">
                <span className="hidden h-[48px] max-w-0 overflow-hidden rounded-lg opacity-0 transition-all duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:max-w-[110px] group-hover:opacity-100 lg:block">
                  <img
                    src={service.image}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="h-full w-[80px] object-cover object-top opacity-80 grayscale"
                  />
                </span>
                <span
                  aria-hidden="true"
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-[12px] text-slate transition-all duration-500 group-hover:border-accent/50 group-hover:text-accent"
                >
                  ↗
                </span>
              </div>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
