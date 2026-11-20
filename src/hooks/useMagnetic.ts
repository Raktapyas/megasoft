import { useEffect, useRef } from "react";

/**
 * Pulls an element gently toward the pointer. Pointer-fine devices only;
 * disabled for reduced-motion users.
 */
export function useMagnetic<T extends HTMLElement>(strength = 0.18, max = 9) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!finePointer || reducedMotion) return;

    let frame = 0;

    const apply = (x: number, y: number) => {
      node.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0)`;
    };

    const onMove = (event: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      const x = event.clientX - (rect.left + rect.width / 2);
      const y = event.clientY - (rect.top + rect.height / 2);

      if (frame) return;
      frame = requestAnimationFrame(() => {
        apply(
          Math.max(-max, Math.min(max, x * strength)),
          Math.max(-max, Math.min(max, y * strength)),
        );
        frame = 0;
      });
    };

    const onLeave = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      node.style.transform = "";
    };

    node.addEventListener("pointermove", onMove, { passive: true });
    node.addEventListener("pointerleave", onLeave);
    node.addEventListener("pointercancel", onLeave);
    node.addEventListener("blur", onLeave);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      node.removeEventListener("pointermove", onMove);
      node.removeEventListener("pointerleave", onLeave);
      node.removeEventListener("pointercancel", onLeave);
      node.removeEventListener("blur", onLeave);
      node.style.transform = "";
    };
  }, [strength, max]);

  return ref;
}
