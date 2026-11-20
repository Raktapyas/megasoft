import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { CTA } from "../components/CTA";
import { Marquee } from "../components/Marquee";
import { PointCloud } from "../components/PointCloud";
import { Process } from "../components/Process";
import { ProjectCard } from "../components/ProjectCard";
import { Reveal } from "../components/Reveal";
import { ServiceRows } from "../components/ServiceRows";
import { Button, SectionHeading, TextLink } from "../components/ui";
import { usePageMeta } from "../hooks/usePageMeta";
import { projects, featuredProjects } from "../data/projects";
import { services } from "../data/services";
import { site } from "../data/site";

const principles = [
  {
    number: "01",
    title: "Built on experience",
    text: "Independent since 2011, with a track record of long-term client relationships and websites still in service today.",
  },
  {
    number: "02",
    title: "Design and code together",
    text: "Designers and developers work in the same studio, so the idea that gets approved is the site that gets shipped.",
  },
  {
    number: "03",
    title: "Direct, honest communication",
    text: "You speak with the people doing the work — no layers of account management between you and the project.",
  },
  {
    number: "04",
    title: "Support after launch",
    text: "Hosting, maintenance and updates continue after go-live. A website is a commitment, not a handover.",
  },
];

export function Home() {
  usePageMeta(
    "MegaSoft Nepal — Web Design & Digital Studio, Kathmandu",
    "MegaSoft Pvt. Ltd. is a Kathmandu digital studio building websites, e-commerce and digital experiences for ambitious businesses. Established 2011.",
  );

  const homeServices = services.slice(0, 6);
  const work = featuredProjects.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="hero-section grain relative flex flex-col overflow-hidden bg-ink text-ivory">
        <PointCloud />
        <div aria-hidden="true" className="hero-lines pointer-events-none absolute inset-0" />

        <div className="container-x relative z-10 flex flex-1 flex-col items-center justify-center text-center">
          <div
            className="chip fade-up"
            style={{ "--fade-delay": "80ms" } as CSSProperties}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Digital studio — Kathmandu, Nepal
          </div>

          <h1 className="display mt-12 max-w-[1120px] text-[clamp(3.1rem,7.6vw,7.2rem)] sm:mt-14">
            <span className="headline-mask" style={{ "--line-delay": "60ms" } as CSSProperties}>
              <span>Digital experiences.</span>
            </span>
            <span className="headline-mask" style={{ "--line-delay": "150ms" } as CSSProperties}>
              <span className="text-white/40">Built to move you forward.</span>
            </span>
          </h1>

          <p
            className="fade-up mt-8 max-w-[620px] text-[clamp(1rem,1.55vw,1.3rem)] leading-[1.55] text-slate"
            style={{ "--fade-delay": "360ms" } as CSSProperties}
          >
            Strategy, design and technology for businesses ready to make their
            next move.
          </p>

          <div
            className="fade-up mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row"
            style={{ "--fade-delay": "460ms" } as CSSProperties}
          >
            <Button to="/contact" className="w-full sm:w-auto">
              Start a project
            </Button>
            <Button to="/work" variant="outline" className="w-full sm:w-auto">
              See our work
            </Button>
          </div>

          <p
            className="fade-up mt-7 font-sans text-[11.5px] tracking-[0.02em] text-white/30"
            style={{ "--fade-delay": "540ms" } as CSSProperties}
          >
            One studio, end to end. Established {site.established} — Kathmandu,
            Nepal.
          </p>
        </div>

      </section>

      <section className="border-y border-white/[0.09] bg-ink-soft">
        <div className="container-x fade-up grid grid-cols-2 gap-6 py-6 sm:grid-cols-4">
          {[
            { label: "Founded", value: "2011" },
            { label: "Portfolio", value: `${projects.length} projects` },
            { label: "Sectors", value: "Corporate → NGO" },
            { label: "Based in", value: "New-Baneshwor" },
          ].map((fact) => (
            <div key={fact.label}>
              <p className="label text-white/25">{fact.label}</p>
              <p className="mt-2 font-sans text-[13px] text-white/65">
                {fact.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Marquee items={services.map((service) => service.navTitle)} />

      {/* Studio statement */}
      <section className="relative overflow-hidden bg-ink py-24 text-ivory sm:py-32 lg:py-40">
        <div className="container-x">
          <Reveal className="mx-auto max-w-[940px] text-center">
            <span className="chip">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              The studio
            </span>
            <p className="display mt-8 text-[clamp(2.4rem,4.9vw,4.6rem)]">
              A Kathmandu studio with a global perspective.
              <span className="mt-1 block text-white/35">
                We build digital work that earns attention and holds it.
              </span>
            </p>
          </Reveal>

          <div className="mx-auto mt-16 grid max-w-[960px] gap-10 sm:grid-cols-2 sm:gap-14">
            <Reveal delay={60}>
              <p className="font-sans text-[15px] leading-[1.75] text-slate">
                {site.legalName} is a leading web design company in Nepal,
                providing professional website development for businesses of all
                sizes. We create modern, responsive and SEO-friendly websites
                that help businesses grow online.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="font-sans text-[15px] leading-[1.75] text-slate">
                Established in 2011 and registered under government No.{" "}
                {site.regNo}, we are a team of designers and developers focused
                on building websites that are visually considered, technically
                sound and straightforward to maintain.
              </p>
            </Reveal>
          </div>

          <Reveal delay={160} className="mt-12 flex justify-center">
            <TextLink to="/about">More about MegaSoft</TextLink>
          </Reveal>
        </div>
      </section>

      {/* Selected work */}
      <section className="relative border-t border-white/[0.09] bg-ink py-20 text-ivory sm:py-28 lg:py-32">
        <div className="container-x">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <Reveal className="lg:col-span-7">
              <SectionHeading
                index="02"
                label="Selected work"
                title={
                  <>
                    Work that
                    <br />
                    <span className="text-white/35">moves.</span>
                  </>
                }
              />
            </Reveal>
            <Reveal delay={100} className="lg:col-span-5 lg:justify-self-end">
              <p className="max-w-sm font-sans text-[15px] leading-[1.7] text-slate">
                A selection of websites and online stores built for clients
                across corporate, commerce, tourism, education and the social
                sector.
              </p>
              <div className="mt-6">
                <TextLink to="/work">View all work</TextLink>
              </div>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-x-6 gap-y-12 sm:mt-20 lg:grid-cols-12 lg:gap-x-8">
            <ProjectCard
              project={work[0]}
              className="lg:col-span-7"
              size="large"
              index={1}
            />
            <ProjectCard
              project={work[1]}
              className="lg:col-span-4 lg:col-start-9 lg:mt-24"
              index={2}
            />
            <ProjectCard
              project={work[2]}
              className="lg:col-span-5 lg:mt-4"
              index={3}
            />
            <ProjectCard
              project={work[3]}
              className="lg:col-span-6 lg:col-start-7 lg:-mt-10"
              size="large"
              index={4}
            />
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.09] pt-6">
            <p className="font-sans text-[10px] tracking-[0.14em] text-white/30 uppercase">
              {projects.length} projects in the portfolio — 2011 to today
            </p>
            <Link
              to="/work"
              className="group inline-flex items-center gap-2 font-sans text-[12px] text-slate transition-colors hover:text-ivory"
            >
              Browse the portfolio
              <span
                aria-hidden="true"
                className="text-accent transition-transform duration-500 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              >
                ↘
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative border-t border-white/[0.09] bg-ink py-20 text-ivory sm:py-28 lg:py-32">
        <div className="container-x">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <Reveal className="lg:col-span-7">
              <SectionHeading
                index="03"
                label="Capabilities"
                title={
                  <>
                    From first idea
                    <br />
                    <span className="text-white/35">to a working product.</span>
                  </>
                }
              />
            </Reveal>
            <Reveal delay={100} className="lg:col-span-5 lg:justify-self-end">
              <p className="max-w-sm font-sans text-[15px] leading-[1.7] text-slate">
                Strategy, design, development and growth — delivered by one
                integrated team that stays with the project from kickoff to
                launch and beyond.
              </p>
              <div className="mt-6">
                <TextLink to="/services">All services</TextLink>
              </div>
            </Reveal>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border border-white/[0.09] bg-ink-soft sm:mt-16">
            <ServiceRows items={homeServices} />
          </div>
        </div>
      </section>

      {/* Why MegaSoft */}
      <section className="relative border-t border-white/[0.09] bg-ink py-20 text-ivory sm:py-28 lg:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(201,162,39,0.08),transparent_66%)]"
        />
        <div className="container-x relative">
          <Reveal className="mx-auto max-w-[840px] text-center">
            <span className="chip">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Why MegaSoft
            </span>
            <h2 className="display mt-7 text-[clamp(2.6rem,5.2vw,4.8rem)]">
              Not a website factory.
            </h2>
            <p className="mx-auto mt-6 max-w-xl font-sans text-[15px] leading-[1.7] text-slate">
              Every business is different, so every website should be too. We
              keep the team small, the process direct and the standard high.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {principles.map((item, index) => (
              <Reveal key={item.number} delay={index * 60}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.09] bg-ink-soft p-7 transition-colors duration-500 hover:border-white/20 sm:p-9">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(201,162,39,0.14),transparent_70%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                  />
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-[11px] tracking-[0.12em] text-accent">
                      {item.number}
                    </span>
                    <span className="h-px w-8 bg-white/15 transition-all duration-700 group-hover:w-14 group-hover:bg-accent/60" />
                  </div>
                  <h3 className="mt-10 font-display text-[24px] leading-tight tracking-[-0.03em] text-ivory sm:text-[27px]">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-sm font-sans text-[14px] leading-[1.7] text-slate">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={220} className="mt-10 flex flex-col items-center gap-5 text-center">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button to="/contact">Get a quote</Button>
              <a
                href={site.phonePrimaryHref}
                className="inline-flex h-[52px] items-center rounded-full px-5 font-sans text-[14px] text-slate transition-colors hover:text-ivory"
              >
                Call {site.phonePrimary}
              </a>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 border-t border-white/[0.09] pt-6 font-sans text-[11px] text-white/35">
              <span>Founded 2011</span>
              <span>Kathmandu, Nepal</span>
              <span>Registered Pvt. Ltd.</span>
            </div>
          </Reveal>
        </div>
      </section>

      <Process />
      <CTA />
    </>
  );
}
