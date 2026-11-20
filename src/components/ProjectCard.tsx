import { Link } from "react-router-dom";
import type { Project } from "../data/projects";
import { useParallax } from "../hooks/useParallax";
import { useTilt } from "../hooks/useTilt";
import { Reveal } from "./Reveal";

type ProjectCardProps = {
  project: Project;
  delay?: number;
  className?: string;
  size?: "default" | "large";
  index?: number;
};

export function ProjectCard({
  project,
  delay = 0,
  className = "",
  size = "default",
  index,
}: ProjectCardProps) {
  const tiltRef = useTilt<HTMLDivElement>(2.4);
  const parallaxRef = useParallax<HTMLDivElement>(10);

  return (
    <Reveal delay={delay} className={className}>
      <article className="group rounded-2xl border border-white/[0.09] bg-ink-soft p-2 transition-colors duration-500 hover:border-white/20">
        <Link to={`/work/${project.slug}`} className="block [perspective:1400px]">
          <div
            ref={tiltRef}
            className={`media-mask relative overflow-hidden rounded-xl bg-ink-lift transition-transform duration-300 ease-out [transform-style:preserve-3d] ${
              size === "large" ? "aspect-[16/10]" : "aspect-[4/3]"
            }`}
          >
            {project.image ? (
              <div
                ref={parallaxRef}
                className="absolute inset-x-0 -inset-y-[5%] will-change-transform"
                style={{ transform: "translate3d(0, var(--parallax-y, 0px), 0)" }}
              >
                <img
                  src={project.image}
                  alt={`${project.name} website by MegaSoft`}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                  className="h-full w-full object-cover object-top brightness-[0.8] saturate-[0.85] transition-all duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.025] group-hover:brightness-100 group-hover:saturate-100"
                />
              </div>
            ) : (
              <div className="relative grid h-full w-full place-items-center overflow-hidden bg-ink-lift">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:56px_56px]"
                />
                <span className="relative font-display text-[clamp(4rem,11vw,8rem)] font-semibold leading-none text-ivory/75">
                  {project.monogram}
                </span>
              </div>
            )}

            <span className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent opacity-70 transition-opacity duration-700 group-hover:opacity-30" />

            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-10 grid place-items-center opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-ink/65 px-4 py-2 text-[11px] text-ivory backdrop-blur-md">
                View project
                <span className="text-accent">↗</span>
              </span>
            </span>

            <div className="absolute inset-x-3 top-3 z-10 flex items-center justify-between">
              {index !== undefined && (
                <span className="rounded-full border border-white/10 bg-ink/55 px-2.5 py-1 font-sans text-[9px] tracking-[0.1em] text-white/65 backdrop-blur-md">
                  {String(index).padStart(2, "0")}
                </span>
              )}
              <span className="ml-auto rounded-full border border-white/10 bg-ink/55 px-2.5 py-1 font-sans text-[9px] tracking-[0.1em] text-white/65 backdrop-blur-md">
                {project.category}
              </span>
            </div>
          </div>

          <div className="flex items-start justify-between gap-5 px-3.5 pb-3 pt-4">
            <div>
              <h3 className="font-display text-[clamp(1.35rem,2.1vw,1.85rem)] font-semibold leading-tight tracking-[-0.035em] text-ivory transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-0.5">
                {project.name}
              </h3>
              <p className="mt-1.5 font-sans text-[10.5px] tracking-[0.08em] text-white/35 uppercase">
                {project.category}
              </p>
            </div>
            <span
              aria-hidden="true"
              className="mt-1 text-[14px] text-white/30 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
            >
              ↗
            </span>
          </div>
        </Link>
      </article>
    </Reveal>
  );
}
