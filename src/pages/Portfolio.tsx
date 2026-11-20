import { useState } from "react";
import { PageHero } from "../components/PageHero";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectRail } from "../components/ProjectRail";
import { Reveal } from "../components/Reveal";
import { CTA } from "../components/CTA";
import { SectionHeading } from "../components/ui";
import { usePageMeta } from "../hooks/usePageMeta";
import {
  categories,
  featuredProjects,
  projects,
  type ProjectCategory,
} from "../data/projects";

type Filter = ProjectCategory | "All";

const spans = [
  "lg:col-span-7",
  "lg:col-span-4 lg:col-start-9 lg:mt-24",
  "lg:col-span-5 lg:mt-4",
  "lg:col-span-6 lg:col-start-7 lg:-mt-10",
];

export function Portfolio() {
  usePageMeta(
    "Work — Websites & E-commerce by MegaSoft Nepal",
    "Explore websites and online stores built by MegaSoft for clients in corporate, e-commerce, tourism, education and the social sector.",
  );

  const [filter, setFilter] = useState<Filter>("All");

  const visible =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  const countFor = (category: Filter) =>
    category === "All"
      ? projects.length
      : projects.filter((project) => project.category === category).length;

  return (
    <>
      <PageHero
        index="04"
        label="Work"
        title={
          <>
            Selected work,
            <br />
            <span className="text-white/35">built to last.</span>
          </>
        }
        lead="Websites, stores and digital platforms for clients across sectors — each shaped around a specific business rather than a reusable template. Filter by sector, or open a project to see more."
        meta={[
          { label: "Projects", value: `${projects.length} selected` },
          { label: "Sectors", value: "Five" },
          { label: "Studio", value: "Kathmandu, Nepal" },
          { label: "Since", value: "2011" },
        ]}
      />

      <section className="bg-ink py-20 text-ivory sm:py-24 lg:py-28">
        <div className="container-x">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <Reveal className="lg:col-span-7">
              <SectionHeading
                index="01"
                label={`Featured / ${String(featuredProjects.length).padStart(2, "0")}`}
                title={
                  <>
                    In motion<span className="text-accent">.</span>
                  </>
                }
              />
            </Reveal>
            <Reveal delay={100} className="lg:col-span-4 lg:col-start-9 lg:justify-self-end">
              <p className="max-w-sm font-sans text-[15px] leading-[1.7] text-slate">
                A closer look at selected projects. Drag, swipe or use the
                controls to move through the work.
              </p>
            </Reveal>
          </div>

          <div className="mt-10 sm:mt-14">
            <ProjectRail
              projects={featuredProjects}
              label="Featured project gallery"
            />
          </div>

          <div className="mt-16 flex flex-col gap-6 rounded-2xl border border-white/[0.09] bg-ink-soft p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-baseline gap-4">
              <p className="label text-white/30">The archive</p>
              <span className="hidden font-sans text-[11px] text-white/20 sm:block">
                Filter by sector
              </span>
            </div>
            <div
              className="flex flex-wrap gap-2"
              role="group"
              aria-label="Filter projects by category"
            >
              {categories.map((category) => {
                const active = filter === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setFilter(category)}
                    aria-pressed={active}
                    className={`inline-flex h-9 items-center gap-1.5 rounded-full border px-4 font-sans text-[12px] transition-colors duration-300 ${
                      active
                        ? "border-ivory bg-ivory text-ink"
                        : "border-white/10 bg-white/[0.02] text-slate hover:border-white/25 hover:text-ivory"
                    }`}
                  >
                    {category}
                    <sup className={`text-[8px] ${active ? "text-ink/45" : "text-white/25"}`}>
                      {String(countFor(category)).padStart(2, "0")}
                    </sup>
                  </button>
                );
              })}
            </div>
            <p
              aria-live="polite"
              className="font-sans text-[10px] tracking-[0.12em] text-white/30 uppercase"
            >
              Showing {String(visible.length).padStart(2, "0")} /{" "}
              {String(projects.length).padStart(2, "0")}
            </p>
          </div>

          {visible.length > 0 ? (
            <div
              key={filter}
              className="page-enter mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 sm:gap-y-16 lg:mt-16 lg:grid-cols-12 lg:gap-x-8"
            >
              {visible.map((project, index) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  index={index + 1}
                  size={index % 4 === 0 || index % 4 === 1 ? "large" : "default"}
                  delay={(index % 2) * 60}
                  className={spans[index % 4]}
                />
              ))}
            </div>
          ) : (
            <div className="py-24 text-center">
              <p className="font-display text-[24px] text-white/60">
                Nothing here yet.
              </p>
              <button
                type="button"
                onClick={() => setFilter("All")}
                className="mt-5 font-sans text-[12px] text-slate underline underline-offset-4 transition-colors hover:text-ivory"
              >
                Show all projects
              </button>
            </div>
          )}

          <Reveal>
            <div className="mt-16 flex flex-col gap-5 border-t border-white/[0.09] pt-7 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-md font-sans text-[12.5px] leading-[1.7] text-white/35">
                Project screenshots are reproduced from the live websites built
                by MegaSoft. Some client sites may have changed since launch.
              </p>
              <p className="font-sans text-[10px] tracking-[0.12em] text-white/25 uppercase">
                © MegaSoft Pvt. Ltd.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
