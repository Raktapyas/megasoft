import { useEffect, useRef, useState, type PointerEvent } from "react";
import { Link } from "react-router-dom";
import type { Project } from "../data/projects";

type ProjectRailProps = {
  projects: Project[];
  label?: string;
};

type DragState = {
  down: boolean;
  startX: number;
  startLeft: number;
  moved: boolean;
};

export function ProjectRail({ projects, label = "Featured work" }: ProjectRailProps) {
  const railRef = useRef<HTMLDivElement>(null);
  const drag = useRef<DragState>({
    down: false,
    startX: 0,
    startLeft: 0,
    moved: false,
  });
  const [progress, setProgress] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const max = rail.scrollWidth - rail.clientWidth;
      const next = max > 0 ? rail.scrollLeft / max : 0;
      setProgress(Math.min(1, Math.max(0, next)));
      setAtStart(rail.scrollLeft <= 2);
      setAtEnd(max <= 2 || rail.scrollLeft >= max - 2);
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    rail.addEventListener("scroll", onScroll, { passive: true });
    const resize = new ResizeObserver(onScroll);
    resize.observe(rail);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      rail.removeEventListener("scroll", onScroll);
      resize.disconnect();
    };
  }, []);

  const step = (direction: 1 | -1) => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelector<HTMLElement>("[data-rail-card]");
    const distance = card ? card.offsetWidth + 20 : rail.clientWidth * 0.8;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    rail.scrollBy({
      left: distance * direction,
      behavior: reduced ? "auto" : "smooth",
    });
  };

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse" || event.button !== 0) return;
    const rail = railRef.current;
    if (!rail) return;

    drag.current = {
      down: true,
      startX: event.clientX,
      startLeft: rail.scrollLeft,
      moved: false,
    };
    rail.classList.add("is-dragging");
    rail.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!drag.current.down) return;
    const rail = railRef.current;
    if (!rail) return;

    const distance = event.clientX - drag.current.startX;
    if (Math.abs(distance) > 4) drag.current.moved = true;
    rail.scrollLeft = drag.current.startLeft - distance;
  };

  const endDrag = (event: PointerEvent<HTMLDivElement>) => {
    const rail = railRef.current;
    if (rail?.hasPointerCapture(event.pointerId)) {
      rail.releasePointerCapture(event.pointerId);
    }
    drag.current.down = false;
    rail?.classList.remove("is-dragging");
  };

  return (
    <div className="relative">
      <div
        ref={railRef}
        role="region"
        aria-label={label}
        tabIndex={0}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onClickCapture={(event) => {
          if (!drag.current.moved) return;
          event.preventDefault();
          event.stopPropagation();
          drag.current.moved = false;
        }}
        className="project-rail no-scrollbar -mx-5 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-5 sm:-mx-10 sm:gap-5 sm:scroll-px-10 sm:px-10 lg:-mx-16 lg:scroll-px-16 lg:px-16"
      >
        {projects.map((project, index) => (
          <Link
            key={project.slug}
            to={`/work/${project.slug}`}
            data-rail-card
            draggable={false}
            aria-label={`${project.name} — ${project.category}`}
            className="group relative block aspect-[4/3] w-[82vw] min-w-[280px] max-w-[680px] shrink-0 snap-start overflow-hidden rounded-2xl border border-white/[0.09] bg-ink-soft select-none transition-colors duration-500 hover:border-white/20 sm:aspect-[16/10] sm:w-[58vw] lg:w-[43vw] xl:w-[37vw]"
          >
            {project.image ? (
              <img
                src={project.image}
                alt={`${project.name} website by MegaSoft`}
                loading={index < 2 ? "eager" : "lazy"}
                decoding="async"
                draggable={false}
                className="h-full w-full object-cover object-top brightness-[0.8] saturate-[0.85] transition-all duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.025] group-hover:brightness-100 group-hover:saturate-100"
              />
            ) : (
              <div className="relative grid h-full w-full place-items-center overflow-hidden bg-ink-lift">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,rgba(236,233,226,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(236,233,226,0.06)_1px,transparent_1px)] [background-size:64px_64px]"
                />
                <span className="relative font-display text-[clamp(5rem,13vw,10rem)] font-semibold leading-none text-ivory/75">
                  {project.monogram}
                </span>
              </div>
            )}

            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-80"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 grid place-items-center opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-ink/65 px-4 py-2 text-[11px] text-ivory backdrop-blur-md">
                View project <span className="text-accent">↗</span>
              </span>
            </span>

            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-5 sm:p-7">
              <div>
                <p className="label text-ivory/45">{project.category}</p>
                <h3 className="mt-2 font-display text-[clamp(1.5rem,2.7vw,2.4rem)] font-semibold leading-none tracking-[-0.04em] text-ivory">
                  {project.name}
                </h3>
              </div>
              <span className="label shrink-0 text-ivory/45">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-2 flex items-center gap-5">
        <div className="relative h-px flex-1 bg-white/10">
          <div
            className="absolute inset-y-0 left-0 bg-accent transition-[width] duration-300 ease-out"
            style={{ width: `${Math.max(6, progress * 100)}%` }}
          />
        </div>
        <span className="hidden font-sans text-[8px] tracking-[0.18em] text-ivory/30 uppercase sm:block">
          Drag / swipe
        </span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => step(-1)}
            disabled={atStart}
            aria-label="Previous project"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-[13px] text-slate transition-colors hover:border-white/30 hover:text-ivory disabled:pointer-events-none disabled:opacity-25"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            disabled={atEnd}
            aria-label="Next project"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-[13px] text-slate transition-colors hover:border-white/30 hover:text-ivory disabled:pointer-events-none disabled:opacity-25"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
