import type { ReactNode } from "react";
import { useParallax } from "../hooks/useParallax";

type ParallaxProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

export function Parallax({ children, className = "", strength = 16 }: ParallaxProps) {
  const ref = useParallax<HTMLDivElement>(strength);

  return (
    <div
      ref={ref}
      className={`will-change-transform ${className}`}
      style={{ transform: "translate3d(0, var(--parallax-y, 0px), 0)" }}
    >
      {children}
    </div>
  );
}
