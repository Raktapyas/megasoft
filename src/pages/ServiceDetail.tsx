import { Link, useParams } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { CTA } from "../components/CTA";
import { Process } from "../components/Process";
import { ProjectCard } from "../components/ProjectCard";
import { SectionHeading, TextLink } from "../components/ui";
import { usePageMeta } from "../hooks/usePageMeta";
import { getService, services } from "../data/services";
import { featuredProjects, projects } from "../data/projects";
import { site } from "../data/site";
import { NotFound } from "./NotFound";

export function ServiceDetail() {
  const { slug = "" } = useParams();
  const service = getService(slug);
  const index = services.findIndex((item) => item.slug === slug);

  usePageMeta(
    service
      ? `${service.title} — MegaSoft Nepal`
      : "Service not found — MegaSoft Nepal",
    service?.short,
  );

  if (!service) {
    return (
      <NotFound
        title="That service does not exist."
        message="The link may be out of date. Browse the full list of services instead."
      />
    );
  }

  const previous = services[(index - 1 + services.length) % services.length];
  const next = services[(index + 1) % services.length];
  const related = [
    ...featuredProjects.filter((project) => project.slug !== service.slug),
    ...projects,
  ]
    .filter(
      (project, projectIndex, arr) =>
        arr.findIndex((p) => p.slug === project.slug) === projectIndex,
    )
    .slice(index % 4, (index % 4) + 3);

  return (
    <>
      <PageHero
        index={String(index + 1).padStart(2, "0")}
        label="Services"
        title={service.title}
        lead={service.lead}
        meta={[
          {
            label: "Service",
            value: `${String(index + 1).padStart(2, "0")} of ${services.length}`,
          },
          { label: "Discipline", value: service.tag },
          { label: "Studio", value: "Kathmandu, Nepal" },
          { label: "Enquiries", value: site.email },
        ]}
      />

      <section className="bg-ink py-16 text-ivory sm:py-20 lg:py-24">
        <div className="container-x">
          <Reveal>
            <figure className="mx-auto max-w-[1000px] rounded-2xl border border-white/[0.09] bg-ink-soft p-2">
              <div className="media-mask aspect-[16/9] overflow-hidden rounded-xl bg-ink-lift">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <figcaption className="flex items-center justify-between px-2 pb-1 pt-4 font-sans text-[10px] tracking-[0.1em] text-white/35 uppercase">
                <span>{service.imageAlt}</span>
                <span>{service.tag}</span>
              </figcaption>
            </figure>
          </Reveal>

          <div className="mt-16 grid gap-12 lg:mt-24 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <Reveal>
                <SectionHeading
                  label="The approach"
                  title="How we do it."
                />
              </Reveal>

              <div className="mt-8 space-y-6 border-t border-white/[0.09] pt-8">
                {service.body.map((paragraph, paragraphIndex) => (
                  <Reveal key={paragraphIndex} delay={paragraphIndex * 70}>
                    <p className="max-w-xl font-sans text-[14.5px] leading-[1.8] text-slate">
                      {paragraph}
                    </p>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={120}>
                <div className="mt-10 flex flex-wrap items-center gap-6">
                  <TextLink to="/contact" onLight>
                    Discuss this service
                  </TextLink>
                  <a
                    href={site.phonePrimaryHref}
                    className="font-sans text-[12px] text-white/35 transition-colors hover:text-ivory"
                  >
                    or call {site.phonePrimary}
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={100} className="lg:col-span-4 lg:col-start-9">
              <div className="rounded-2xl border border-white/[0.09] bg-ink-soft p-6 lg:sticky lg:top-28">
                <p className="eyebrow text-white/30">What&rsquo;s included</p>
                <ul className="mt-5">
                  {service.includes.map((item, itemIndex) => (
                    <li
                      key={item}
                      className="flex items-baseline gap-4 border-b border-white/[0.08] py-3.5"
                    >
                      <span className="font-sans text-[9px] tracking-[0.1em] text-accent/70">
                        {String(itemIndex + 1).padStart(2, "0")}
                      </span>
                      <span className="font-sans text-[12.5px] leading-[1.6] text-white/65">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="group mt-7 flex items-center justify-between border-t border-white/[0.09] pt-4 font-sans text-[12px] text-slate transition-colors hover:text-ivory"
                >
                  Start a conversation
                  <span
                    aria-hidden="true"
                    className="text-[12px] transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    ↗
                  </span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Related work */}
      <section className="border-t border-ivory/12 bg-ink py-16 text-ivory sm:py-20 lg:py-24">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <div className="flex items-center gap-4 text-ivory/35">
                <span className="h-px w-8 bg-ivory/20" />
                <span className="eyebrow">Related work</span>
              </div>
              <h2 className="display mt-6 text-[clamp(2rem,4.4vw,3.6rem)] uppercase">
                A few examples.
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <TextLink to="/work">All projects</TextLink>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((project, relatedIndex) => (
              <ProjectCard
                key={project.slug}
                project={project}
                delay={relatedIndex * 60}
                index={relatedIndex + 1}
              />
            ))}
          </div>
        </div>
      </section>

      <Process />

      <section className="border-t border-ivory/12 bg-ink text-ivory">
        <div className="container-x grid gap-8 py-10 sm:grid-cols-2 sm:py-12">
          <Link
            to={`/services/${previous.slug}`}
            className="group flex items-center gap-5 border-b border-ivory/12 pb-6 sm:border-b-0 sm:pb-0"
          >
            <span
              aria-hidden="true"
              className="text-[15px] text-ivory/35 transition-transform duration-500 group-hover:-translate-x-1 group-hover:text-ivory"
            >
              ←
            </span>
            <span>
              <span className="block font-sans text-[8.5px] tracking-[0.18em] text-ivory/30 uppercase">
                Previous
              </span>
              <span className="mt-2 block font-display text-[16px] text-ivory/75 transition-colors group-hover:text-ivory">
                {previous.navTitle}
              </span>
            </span>
          </Link>
          <Link
            to={`/services/${next.slug}`}
            className="group flex items-center justify-start gap-5 sm:justify-end sm:text-right"
          >
            <span className="order-2 sm:order-1">
              <span className="block font-sans text-[8.5px] tracking-[0.18em] text-ivory/30 uppercase">
                Next
              </span>
              <span className="mt-2 block font-display text-[16px] text-ivory/75 transition-colors group-hover:text-ivory">
                {next.navTitle}
              </span>
            </span>
            <span
              aria-hidden="true"
              className="order-1 text-[15px] text-ivory/35 transition-transform duration-500 group-hover:translate-x-1 group-hover:text-ivory sm:order-2"
            >
              →
            </span>
          </Link>
        </div>
      </section>

      <CTA />
    </>
  );
}
