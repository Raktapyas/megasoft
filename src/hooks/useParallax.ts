import { useEffect, useRef } from "react";

/** Scroll-linked vertical drift, exposed as the --parallax-y custom property. */
export function useParallax<T extends HTMLElement>(strength = 16) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = node.getBoundingClientRect();
      if (rect.bottom < -80 || rect.top > window.innerHeight + 80) return;

      const viewportCenter = window.innerHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      const normalised = Math.max(
        -1,
        Math.min(
          1,
          (elementCenter - viewportCenter) / (window.innerHeight / 2 + rect.height / 2),
        ),
      );

      node.style.setProperty("--parallax-y", `${(-normalised * strength).toFixed(2)}px`);
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      node.style.removeProperty("--parallax-y");
    };
  }, [strength]);

  return ref;
}
