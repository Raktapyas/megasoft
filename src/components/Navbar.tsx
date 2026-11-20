import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "./Logo";
import { ScrollProgress } from "./ScrollProgress";
import { nav, site } from "../data/site";

const primaryNav = nav.filter(
  (item) => item.to !== "/" && item.to !== "/contact",
);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (desktop.matches) setOpen(false);
    };
    desktop.addEventListener("change", onChange);
    return () => desktop.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="mast">
        <div className="mast__inner">
          <div className="mast__bar" data-scrolled={scrolled}>
            <div className="flex h-full items-center">
              <div className="flex h-full w-[152px] items-center pl-5 sm:w-[184px] sm:pl-7">
                <Logo />
              </div>

              <nav
                aria-label="Primary"
                className="hidden h-full items-center gap-8 pl-8 lg:flex xl:gap-10"
              >
                {primaryNav.map((item) => {
                  const active = location.pathname.startsWith(item.to);
                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      aria-current={active ? "page" : undefined}
                      className={`group relative flex h-full items-center text-[14px] transition-colors duration-300 ${
                        active
                          ? "text-ivory"
                          : "text-slate hover:text-ivory"
                      }`}
                    >
                      {item.label}
                      <span
                        className={`absolute bottom-[18px] left-0 h-px bg-ivory transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] ${
                          active ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="flex h-full items-center gap-3 pr-3 sm:pr-4">
              <Link
                to="/contact"
                className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-5 py-2.5 text-[13px] text-slate transition-colors duration-300 hover:border-white/25 hover:text-ivory sm:inline-flex"
              >
                Start a project
                <span aria-hidden="true" className="text-[11px] text-accent">
                  ↗
                </span>
              </Link>

              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                aria-expanded={open}
                aria-controls="site-menu"
                className="flex h-10 items-center px-3 text-[15px] text-ivory lg:hidden"
              >
                Menu
              </button>
            </div>

            <ScrollProgress />
          </div>
          <div className="mast__tab" aria-hidden="true" />
        </div>
      </header>

      {/* Full-screen navigation */}
      <div
        id="site-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        inert={!open}
        className={`fixed inset-0 z-[70] flex flex-col bg-ink transition-[opacity,clip-path] duration-700 ease-[cubic-bezier(.16,1,.3,1)] lg:hidden ${
          open
            ? "visible opacity-100 [clip-path:inset(0_0_0_0)]"
            : "invisible opacity-0 [clip-path:inset(0_0_100%_0)]"
        }`}
      >
        <div className="pointer-events-none absolute inset-0 opacity-50 [background-image:linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px)] [background-size:25%_100%]" />

        <div className="relative mx-3 mt-2.5 flex h-[58px] shrink-0 items-center justify-between rounded-2xl border border-white/[0.09] bg-[#08080a]/90 px-5 backdrop-blur-xl">
          <Logo />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="text-[15px] text-ivory"
            aria-label="Close menu"
          >
            Close
          </button>
        </div>

        <nav
          aria-label="Mobile"
          className="container-x relative flex flex-1 flex-col justify-center overflow-y-auto py-4"
        >
          {[...primaryNav, { label: "Contact", to: "/contact" }].map(
            (item, index) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                style={{
                  transitionDelay: open ? `${110 + index * 55}ms` : "0ms",
                }}
                className={`group flex items-center justify-between border-t border-white/[0.09] py-5 transition-all duration-700 ease-[cubic-bezier(.16,1,.3,1)] last:border-b ${
                  open ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
                }`}
              >
                <span className="display text-[clamp(2.6rem,11vw,3.6rem)] leading-none">
                  {item.label}
                </span>
                <span
                  aria-hidden="true"
                  className="text-[15px] text-slate transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                >
                  ↗
                </span>
              </Link>
            ),
          )}
        </nav>

        <div className="container-x relative border-t border-white/[0.09] py-6">
          <a
            href={`mailto:${site.email}`}
            className="flex h-14 w-full items-center justify-center rounded-full border border-white bg-ivory text-[15px] font-medium text-ink"
          >
            Start a project
          </a>
          <div className="mt-5 flex items-center justify-between gap-6 text-[12px] text-slate">
            <a href={`mailto:${site.email}`} className="hover:text-ivory">
              {site.email}
            </a>
            <a href={site.phonePrimaryHref} className="hover:text-ivory">
              {site.phonePrimary}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
