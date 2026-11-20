import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Preloader } from "./Preloader";

export function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen flex-col">
      <Preloader />

      <a
        href="#main"
        className="sr-only z-[90] focus:not-sr-only focus:fixed focus:top-5 focus:left-5 focus:bg-ivory focus:px-5 focus:py-3 focus:font-sans focus:text-[10px] focus:tracking-[0.2em] focus:text-ink focus:uppercase"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main" key={location.pathname} className="page-enter flex-1">
        <div
          aria-hidden="true"
          className="route-line fixed inset-x-0 top-0 z-[55] h-px bg-accent/70"
          key={`line-${location.key}`}
        />
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
