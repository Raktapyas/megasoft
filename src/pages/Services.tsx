import { PageHero } from "../components/PageHero";
import { ServiceRows } from "../components/ServiceRows";
import { Process } from "../components/Process";
import { CTA } from "../components/CTA";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/ui";
import { usePageMeta } from "../hooks/usePageMeta";
import { services } from "../data/services";

const engagements = [
  {
    number: "01",
    title: "A new website",
    text: "A complete build: strategy, design, development and launch. Suited to businesses starting fresh or replacing an outdated site.",
    items: ["Discovery and strategy", "Design and build", "Launch and training"],
  },
  {
    number: "02",
    title: "A redesign",
    text: "For websites that have grown out of their design or their technology. We audit what exists, keep what works and rebuild the rest.",
    items: ["Audit and recommendation", "New design system", "Migration and QA"],
  },
  {
    number: "03",
    title: "Ongoing partnership",
    text: "Support after launch: hosting, maintenance, content updates and incremental improvements as the business changes.",
    items: ["Hosting and maintenance", "Content and campaign support", "Monthly improvements"],
  },
];

export function Services() {
  usePageMeta(
    "Services — Web Design, Development & Digital Marketing | MegaSoft Nepal",
    "Website design and development, CMS, e-commerce, responsive design, domain registration, hosting, SEO, social media marketing and video advertising.",
  );

  return (
    <>
      <PageHero
        index="03"
        label="Services"
        title={
          <>
            Design, build
            <br />
            <span className="text-white/35">and growth.</span>
          </>
        }
        lead="Nine connected disciplines, one team. We can take a project from the first conversation to a live, maintainable website — and keep improving it afterwards."
        meta={[
          { label: "Disciplines", value: `${services.length} services` },
          { label: "Studio", value: "Kathmandu, Nepal" },
          { label: "Engagements", value: "Project or retainer" },
          { label: "Clients", value: "Nepal and international" },
        ]}
      />

      <section className="border-t border-white/[0.09] bg-ink py-20 text-ivory sm:py-24 lg:py-28">
        <div className="container-x">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <Reveal className="lg:col-span-7">
              <SectionHeading
                index="01"
                label="What we do"
                title={
                  <>
                    Capabilities,
                    <br />
                    <span className="text-white/35">end to end.</span>
                  </>
                }
              />
            </Reveal>
            <Reveal delay={100} className="lg:col-span-5 lg:justify-self-end">
              <p className="max-w-sm font-sans text-[15px] leading-[1.7] text-slate">
                Select a service to see how we approach it, what is included and
                examples of the work.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border border-white/[0.09] bg-ink-soft sm:mt-16">
            <ServiceRows items={services} />
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.09] bg-ink py-20 text-ivory sm:py-24 lg:py-28">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
            <Reveal className="lg:col-span-4">
              <SectionHeading
                index="02"
                label="Ways to work together"
                title={
                  <>
                    Start where
                    <br />
                    <span className="text-white/35">you are.</span>
                  </>
                }
              >
                Not every project needs the same shape. We scope the engagement
                around what the business actually needs.
              </SectionHeading>
            </Reveal>

            <div className="lg:col-span-8">
              <div className="grid gap-4 sm:grid-cols-3">
                {engagements.map((item, index) => (
                  <Reveal key={item.number} delay={index * 60}>
                    <div className="group flex h-full flex-col rounded-2xl border border-white/[0.09] bg-ink-soft p-6 transition-colors duration-500 hover:border-white/20">
                      <div className="flex items-center justify-between">
                        <span className="font-sans text-[11px] tracking-[0.1em] text-accent">
                          {item.number}
                        </span>
                        <span className="h-px w-6 bg-white/15 transition-all duration-700 group-hover:w-10 group-hover:bg-accent/60" />
                      </div>
                      <h3 className="mt-8 font-display text-[21px] font-semibold leading-tight tracking-[-0.035em]">
                        {item.title}
                      </h3>
                      <p className="mt-3 font-sans text-[13.5px] leading-[1.7] text-slate">
                        {item.text}
                      </p>
                      <ul className="mt-7 space-y-2.5 border-t border-white/[0.09] pt-5">
                        {item.items.map((entry) => (
                          <li
                            key={entry}
                            className="flex items-start gap-2.5 font-sans text-[12px] text-white/45"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-[7px] h-px w-3 shrink-0 bg-accent/60"
                            />
                            {entry}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Process />
      <CTA />
    </>
  );
}
