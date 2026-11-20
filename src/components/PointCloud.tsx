import { useEffect, useRef } from "react";

const COLUMNS = 72;
const ROWS = 36;

/**
 * Full-bleed canvas atmosphere: a slow wireframe ridge line receding into an
 * amber haze, with a faint star field above. Rendered in 2D for reliability
 * and silence on low-power or reduced-motion devices.
 */
export function PointCloud() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let width = 0;
    let height = 0;
    let frame = 0;
    let time = 0;
    let pointerX = 0;
    let pointerY = 0;
    let targetX = 0;
    let targetY = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const ridgeY = (x: number, depth: number, t: number) => {
      const edge = Math.pow(Math.abs(x - 0.5) * 2, 1.35);
      const ripple =
        Math.sin(x * 8.4 + depth * 5.2 + t * 0.32) * 0.5 +
        Math.sin(x * 17.2 - depth * 2.7 - t * 0.18) * 0.28 +
        Math.cos(x * 3.6 + depth * 8.4 + t * 0.12) * 0.22;
      const lift = height * (0.055 + 0.21 * depth) * edge;
      return (
        height * (0.49 + 0.52 * Math.pow(depth, 1.55)) -
        lift * (0.62 + ripple * 0.5)
      );
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      if (!width || !height) return;

      pointerX += (targetX - pointerX) * 0.045;
      pointerY += (targetY - pointerY) * 0.045;

      // Faint star dust above the horizon.
      context.save();
      context.fillStyle = "rgba(255,255,255,0.34)";
      for (let i = 0; i < 70; i += 1) {
        const sx = ((i * 181.7) % 100) / 100;
        const sy = ((i * 73.3) % 56) / 100;
        const alpha = 0.08 + ((i * 37) % 24) / 100;
        context.globalAlpha = alpha;
        context.fillRect(sx * width + pointerX * 0.2, sy * height, 1, 1);
      }
      context.restore();

      // Wireframe ridges, drawn back to front.
      for (let row = 0; row <= ROWS; row += 1) {
        const depth = row / ROWS;
        const alpha = 0.025 + depth * 0.15;
        context.beginPath();
        for (let column = 0; column <= COLUMNS; column += 1) {
          const x = column / COLUMNS;
          const px = x * width + pointerX * (0.22 + depth * 0.5);
          const py = ridgeY(x, depth, time) + pointerY * (0.18 + depth * 0.32);
          if (column === 0) context.moveTo(px, py);
          else context.lineTo(px, py);
        }
        context.strokeStyle = `rgba(255,255,255,${alpha})`;
        context.lineWidth = depth > 0.82 ? 0.9 : 0.6;
        context.stroke();
      }

      // Longitudinal lines give the mesh its depth.
      for (let column = 0; column <= COLUMNS; column += 3) {
        const x = column / COLUMNS;
        context.beginPath();
        for (let row = 0; row <= ROWS; row += 1) {
          const depth = row / ROWS;
          const px = x * width + pointerX * (0.22 + depth * 0.5);
          const py = ridgeY(x, depth, time) + pointerY * (0.18 + depth * 0.32);
          if (row === 0) context.moveTo(px, py);
          else context.lineTo(px, py);
        }
        context.strokeStyle = "rgba(255,255,255,0.045)";
        context.lineWidth = 0.5;
        context.stroke();
      }

      // A few amber filaments catch the light near the valley.
      context.beginPath();
      for (let column = 0; column <= COLUMNS; column += 1) {
        const x = column / COLUMNS;
        const depth = 0.58;
        const px = x * width + pointerX * 0.55;
        const py = ridgeY(x, depth, time) + pointerY * 0.35;
        if (column === 0) context.moveTo(px, py);
        else context.lineTo(px, py);
      }
      context.strokeStyle = "rgba(220,180,52,0.18)";
      context.lineWidth = 0.8;
      context.stroke();
    };

    const loop = () => {
      time += 0.006;
      draw();
      frame = requestAnimationFrame(loop);
    };

    const onPointer = (event: PointerEvent) => {
      targetX = (event.clientX / window.innerWidth - 0.5) * -26;
      targetY = (event.clientY / window.innerHeight - 0.5) * -12;
    };

    resize();
    draw();

    const observer = new ResizeObserver(() => {
      resize();
      draw();
    });
    observer.observe(canvas);

    if (!reduced) {
      frame = requestAnimationFrame(loop);
      window.addEventListener("pointermove", onPointer, { passive: true });
    }

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("pointermove", onPointer);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="hero-glow" />
      <div className="hero-floor" />
      <canvas ref={canvasRef} className="hero-canvas absolute inset-0 h-full w-full" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
    </div>
  );
}
