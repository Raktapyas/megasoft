import { useEffect, useLayoutEffect, useRef, useState } from "react";

const SESSION_KEY = "megasoft-intro-seen";

function shouldSkip() {
  if (typeof window === "undefined") return true;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return true;
  try {
    return window.sessionStorage.getItem(SESSION_KEY) === "1";
  } catch {
    return true;
  }
}

export function Preloader() {
  const [visible, setVisible] = useState(() => !shouldSkip());
  const [leaving, setLeaving] = useState(false);
  const [progress, setProgress] = useState(0);
  const raf = useRef(0);
  const holdTimer = useRef<number | undefined>(undefined);
  const endTimer = useRef<number | undefined>(undefined);

  useLayoutEffect(() => {
    if (!visible) return;
    document.documentElement.dataset.intro = "active";
    return () => {
      delete document.documentElement.dataset.intro;
    };
  }, [visible]);

  useEffect(() => {
    if (!visible) return;

    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";

    const duration = 780;
    const start = performance.now();

    const tick = (now: number) => {
      const value = Math.min(1, (now - start) / duration);
      setProgress(Math.round(value * 100));
      if (value < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);

    holdTimer.current = window.setTimeout(() => {
      setLeaving(true);
      delete document.documentElement.dataset.intro;
    }, 900);

    endTimer.current = window.setTimeout(() => {
      document.documentElement.style.overflow = previousOverflow;
      try {
        window.sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        /* storage can be unavailable in private modes */
      }
      setVisible(false);
    }, 1560);

    return () => {
      cancelAnimationFrame(raf.current);
      if (holdTimer.current) window.clearTimeout(holdTimer.current);
      if (endTimer.current) window.clearTimeout(endTimer.current);
      document.documentElement.style.overflow = previousOverflow;
      delete document.documentElement.dataset.intro;
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      className={`intro fixed inset-0 z-[120] flex flex-col justify-between overflow-hidden bg-ink p-6 text-ivory select-none sm:p-9 ${
        leaving ? "intro-out" : ""
      }`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px)] [background-size:25%_100%]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-40%] left-1/2 h-[70%] w-[90%] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(201,162,39,0.16),transparent_66%)]"
      />

      <div className="relative flex items-start justify-between font-sans text-[9px] tracking-[0.16em] text-white/35 uppercase">
        <span>MegaSoft / Digital studio</span>
        <span className="hidden sm:block">Kathmandu — 27.6918° N</span>
      </div>

      <div className="intro-mark relative flex flex-col items-center gap-5">
        <div className="flex items-center gap-3">
          <img
            src="/logo-mark.png"
            alt=""
            width={64}
            height={64}
            className="h-11 w-11 object-contain opacity-90 grayscale"
            draggable={false}
          />
          <span className="font-display text-[15px] font-medium tracking-[0.42em] text-ivory uppercase">
            Megasoft
          </span>
        </div>
        <span className="font-sans text-[9px] tracking-[0.18em] text-white/25 uppercase">
          Independent studio — Est. 2011
        </span>
      </div>

      <div className="relative">
        <div className="flex items-end justify-between border-t border-white/10 pt-4">
          <span className="font-sans text-[9px] tracking-[0.16em] text-white/30 uppercase">
            Kathmandu, Nepal
          </span>
          <span className="font-display text-[clamp(2rem,5vw,3rem)] font-medium leading-none text-ivory/80 tabular-nums">
            {String(progress).padStart(3, "0")}
            <span className="ml-1 align-top font-sans text-[9px] tracking-[0.1em] text-white/30">
              %
            </span>
          </span>
        </div>
        <div className="mt-4 h-px w-full overflow-hidden bg-white/10">
          <div
            className="h-full bg-accent transition-[width] duration-150 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
