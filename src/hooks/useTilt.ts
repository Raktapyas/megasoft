import { useEffect, useRef } from "react";

/**
 * Subtle pointer tilt for media panels. Kept deliberately shallow so it reads
 * as physical depth rather than a gimmick.
 */
export function useTilt<T extends HTMLElement>(maxAngle = 3.2) {
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

    const onMove = (event: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;

      if (frame) return;
      frame = requestAnimationFrame(() => {
        node.style.transform = `perspective(1200px) rotateX(${(-py * maxAngle).toFixed(
          2,
        )}deg) rotateY(${(px * maxAngle).toFixed(2)}deg)`;
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

    return () => {
      if (frame) cancelAnimationFrame(frame);
      node.removeEventListener("pointermove", onMove);
      node.removeEventListener("pointerleave", onLeave);
      node.removeEventListener("pointercancel", onLeave);
      node.style.transform = "";
    };
  }, [maxAngle]);

  return ref;
}
