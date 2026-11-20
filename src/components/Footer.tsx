import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { nav, site, socials } from "../data/site";
import { services } from "../data/services";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.09] bg-ink text-ivory">
      <div className="container-x pt-16 sm:pt-20">
        <div className="grid gap-12 pb-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Logo size="footer" />
            <p className="mt-7 max-w-[19rem] font-sans text-[14px] leading-[1.7] text-slate">
              A Kathmandu digital studio building websites, commerce and digital
              experiences for businesses ready to make their next move.
            </p>
            <p className="mt-7 flex items-center gap-2 font-sans text-[11px] tracking-[0.03em] text-white/35">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Established {site.established} — Kathmandu, Nepal
            </p>
          </div>

          <div className="lg:col-span-2">
            <p className="label text-white/30">Index</p>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="group inline-flex items-center gap-1.5 font-sans text-[13px] text-slate transition-colors hover:text-ivory"
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className="text-[10px] text-transparent transition-colors group-hover:text-accent"
                    >
                      ↗
                    </span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/privacy"
                  className="font-sans text-[13px] text-slate transition-colors hover:text-ivory"
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="label text-white/30">Services</p>
            <ul className="mt-5 space-y-3">
              {services.slice(0, 7).map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="font-sans text-[13px] text-slate transition-colors hover:text-ivory"
                  >
                    {service.navTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="label text-white/30">New business</p>
            <ul className="mt-5 space-y-3.5">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="link-line font-sans text-[13px] break-all text-white/70"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.phonePrimaryHref}
                  className="font-sans text-[13px] text-slate transition-colors hover:text-ivory"
                >
                  {site.phonePrimary}
                </a>
              </li>
              <li>
                <a
                  href={site.phoneSecondaryHref}
                  className="font-sans text-[13px] text-slate transition-colors hover:text-ivory"
                >
                  {site.phoneSecondary}
                </a>
              </li>
              <li>
                <a
                  href={site.maps}
                  target="_blank"
                  rel="noreferrer"
                  className="block max-w-[15rem] font-sans text-[12.5px] leading-[1.65] text-white/35 transition-colors hover:text-ivory"
                >
                  {site.address}
                </a>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-sans text-[10px] tracking-[0.1em] text-white/35 uppercase transition-colors hover:text-ivory"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/[0.09] py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sans text-[11px] text-white/30">
            © {year} {site.legalName} · Registered in Nepal, No. {site.regNo}
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="font-sans text-[10px] tracking-[0.12em] text-white/30 uppercase transition-colors hover:text-ivory"
            >
              Privacy policy
            </Link>
            <button
              type="button"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
                    .matches
                    ? "auto"
                    : "smooth",
                })
              }
              className="group flex items-center gap-2 font-sans text-[10px] tracking-[0.12em] text-white/30 uppercase transition-colors hover:text-ivory"
            >
              Back to top
              <span
                aria-hidden="true"
                className="transition-transform duration-500 group-hover:-translate-y-0.5"
              >
                ↑
              </span>
            </button>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none overflow-hidden border-t border-white/[0.06] pt-4 select-none"
        >
          <span className="display block whitespace-nowrap text-[clamp(4rem,15.5vw,15rem)] leading-[0.78] tracking-[-0.06em] text-white/[0.055]">
            Megasoft
          </span>
        </div>
      </div>
    </footer>
  );
}
