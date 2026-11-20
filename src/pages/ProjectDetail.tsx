import { Link, useParams } from "react-router-dom";
import { Reveal } from "../components/Reveal";
import { CTA } from "../components/CTA";
import { Button } from "../components/ui";
import { getNextProject, getProject } from "../data/projects";
import { usePageMeta } from "../hooks/usePageMeta";
import { NotFound } from "./NotFound";
import { site } from "../data/site";

export function ProjectDetail() {
  const { slug = "" } = useParams();
  const project = getProject(slug);

  usePageMeta(
    project
      ? `${project.name} — MegaSoft Nepal`
      : "Project not found — MegaSoft Nepal",
    project?.summary,
  );

  if (!project) {
    return (
      <NotFound
        title="That project does not exist."
        message="It may have been renamed. Browse the portfolio to find what you were looking for."
      />
    );
  }

  const next = getNextProject(project.slug);
  const liveHost = project.liveUrl
    ? project.liveUrl.replace("https://", "").replace(/\/$/, "")
    : null;

  return (
    <article>
      <header className="relative overflow-hidden border-b border-ivory/12 bg-ink pt-32 pb-24 text-ivory sm:pt-40 lg:pt-44 lg:pb-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-50 [background-image:linear-gradient(to_right,rgba(236,233,226,0.035)_1px,transparent_1px)] [background-size:25%_100%]"
        />

        <div className="container-x relative">
          <div className="flex flex-wrap items-center gap-3 font-sans text-[9px] tracking-[0.18em] uppercase">
            <Link to="/" className="text-ivory/35 transition-colors hover:text-ivory">
              Home
            </Link>
            <span className="text-ivory/20">/</span>
            <Link
              to="/work"
              className="text-ivory/35 transition-colors hover:text-ivory"
            >
              Work
            </Link>
            <span className="text-ivory/20">/</span>
            <span className="text-ivory/70">{project.name}</span>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-8">
            <div className="lg:col-span-8">
              <h1 className="display fade-up text-[clamp(2.6rem,7.4vw,6.4rem)] uppercase">
                {project.name}
              </h1>
              <p className="mt-7 max-w-2xl font-sans text-[13px] leading-[1.9] text-ivory/45 sm:text-[13.5px]">
                {project.summary}
              </p>
            </div>

            <div className="lg:col-span-4 lg:justify-self-end">
              <dl className="grid grid-cols-2 gap-x-8 gap-y-6">
                <div>
                  <dt className="label text-ivory/25">Client</dt>
                  <dd className="mt-2 font-sans text-[11.5px] text-ivory/75">
                    {project.name}
                  </dd>
                </div>
                <div>
                  <dt className="label text-ivory/25">Sector</dt>
                  <dd className="mt-2 font-sans text-[11.5px] text-ivory/75">
                    {project.category}
                  </dd>
                </div>
                <div>
                  <dt className="label text-ivory/25">Studio</dt>
                  <dd className="mt-2 font-sans text-[11.5px] text-ivory/75">
                    MegaSoft, Kathmandu
                  </dd>
                </div>
                <div>
                  <dt className="label text-ivory/25">Status</dt>
                  <dd className="mt-2 flex items-center gap-2 font-sans text-[11.5px] text-ivory/75">
                    <span className="h-1 w-1 rounded-full bg-accent" />
                    {project.liveUrl ? "Live" : "Delivered"}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </header>

      <div className="relative bg-ink text-ivory">
        <div className="container-x">
          <Reveal className="relative z-10 -mt-12 sm:-mt-16 lg:-mt-20">
            <figure className="mx-auto max-w-[1180px] rounded-2xl border border-white/[0.09] bg-ink-soft p-2">
              <div className="media-mask overflow-hidden rounded-xl bg-ink-lift">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.name} website homepage`}
                    className="aspect-[16/10] w-full object-cover object-top"
                  />
                ) : (
                  <div className="relative grid aspect-[16/10] w-full place-items-center overflow-hidden bg-ink">
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,rgba(236,233,226,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(236,233,226,0.06)_1px,transparent_1px)] [background-size:64px_64px]"
                    />
                    <span className="relative font-display text-[clamp(4rem,12vw,9rem)] text-ivory/80">
                      {project.monogram}
                    </span>
                    <span className="absolute bottom-6 left-6 label text-ivory/35">
                      {project.name}
                    </span>
                  </div>
                )}
              </div>
              <figcaption className="flex items-center justify-between gap-4 px-2 pb-1 pt-4 font-sans text-[10px] tracking-[0.1em] text-white/35 uppercase">
                <span>Website by MegaSoft</span>
                <span>{liveHost ?? project.category}</span>
              </figcaption>
            </figure>
          </Reveal>

          <div className="mt-16 grid gap-12 pb-20 lg:mt-24 lg:grid-cols-12 lg:gap-10 lg:pb-28">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="flex items-center gap-4 text-white/35">
                  <span className="h-px w-8 bg-ink/20" />
                  <span className="eyebrow">The project</span>
                </div>
                <h2 className="display mt-6 text-[clamp(2rem,4vw,3.2rem)] uppercase">
                  What we built.
                </h2>
              </Reveal>

              <div className="mt-8 space-y-6 border-t border-white/[0.09] pt-8">
                {project.description.map((paragraph, index) => (
                  <Reveal key={index} delay={index * 70}>
                    <p className="max-w-xl font-sans text-[13px] leading-[1.95] text-slate">
                      {paragraph}
                    </p>
                  </Reveal>
                ))}
              </div>

              {project.liveUrl && (
                <Reveal delay={120}>
                  <div className="mt-10">
                    <Button href={project.liveUrl} variant="solid-dark">
                      Visit live website
                    </Button>
                    <p className="mt-3 font-sans text-[9.5px] tracking-[0.1em] text-white/30">
                      Opens {liveHost} in a new tab.
                    </p>
                  </div>
                </Reveal>
              )}
            </div>

            <Reveal delay={100} className="lg:col-span-4 lg:col-start-9">
              <div className="border-t border-white/[0.09] pt-6">
                <p className="eyebrow text-white/30">Scope</p>
                <ul className="mt-5">
                  {project.scope.map((item) => (
                    <li
                      key={item}
                      className="border-b border-white/[0.08] py-3 font-sans text-[12px] text-slate"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="eyebrow mt-8 text-white/30">Enquiries</p>
                <a
                  href={`mailto:${site.email}`}
                  className="link-line mt-3 font-sans text-[12px] break-all text-white/75"
                >
                  {site.email}
                </a>

                <div className="mt-8 border-t border-white/[0.09] pt-6">
                  <p className="font-display text-[20px] font-semibold leading-[1.35] tracking-[-0.03em]">
                    Planning something similar?
                  </p>
                  <p className="mt-2.5 font-sans text-[11.5px] leading-[1.8] text-slate">
                    Tell us about the project and we will give you a
                    straightforward view of the options.
                  </p>
                  <Link
                    to="/contact"
                    className="group mt-5 inline-flex items-center gap-2 font-sans text-[12px] text-slate transition-colors hover:text-ivory"
                  >
                    Start a project
                    <span
                      aria-hidden="true"
                      className="text-[12px] transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    >
                      ↗
                    </span>
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Next project */}
      <section className="border-t border-ivory/12 bg-ink text-ivory">
        <Link to={`/work/${next.slug}`} className="group block">
          <div className="container-x grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 text-ivory/35">
                <span className="h-px w-8 bg-ivory/20" />
                <span className="eyebrow">Next project</span>
              </div>
              <h2 className="display mt-6 text-[clamp(2.3rem,5.6vw,4.6rem)] uppercase">
                {next.name}
              </h2>
              <p className="mt-3 font-sans text-[9px] tracking-[0.18em] text-ivory/30 uppercase">
                {next.category}
              </p>
              <span className="mt-8 inline-flex items-center gap-2 font-sans text-[9px] tracking-[0.18em] text-ivory/45 uppercase transition-colors group-hover:text-ivory">
                View project
                <span
                  aria-hidden="true"
                  className="text-[12px] transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                >
                  ↗
                </span>
              </span>
            </div>

            {next.image && (
              <div className="lg:col-span-4 lg:col-start-9">
                <div className="overflow-hidden rounded-2xl border border-white/[0.09] bg-ink-soft p-2">
                  <img
                    src={next.image}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="aspect-[16/10] w-full rounded-xl object-cover object-top brightness-[0.85] saturate-[0.9] transition-all duration-[1100ms] group-hover:scale-[1.02] group-hover:brightness-100 group-hover:saturate-100"
                  />
                </div>
              </div>
            )}
          </div>
        </Link>
      </section>

      <CTA />
    </article>
  );
}
