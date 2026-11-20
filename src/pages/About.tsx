import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { CTA } from "../components/CTA";
import { SectionHeading, TextLink } from "../components/ui";
import { usePageMeta } from "../hooks/usePageMeta";
import { site } from "../data/site";
import { testimonials } from "../data/testimonials";

const values = [
  {
    number: "01",
    title: "Craft",
    text: "We care about the details other people skip: the spacing, the loading state, the sentence nobody else will read. Quality is cumulative.",
  },
  {
    number: "02",
    title: "Clarity",
    text: "Good design removes confusion. We build clear structures, plain language and interfaces that do not need explaining.",
  },
  {
    number: "03",
    title: "Partnership",
    text: "The best work comes from a real collaboration. We listen, question and advise — then build the thing that serves the business.",
  },
  {
    number: "04",
    title: "Longevity",
    text: "We build for the years after launch: maintainable code, editable content and a team that is still here when you need us.",
  },
];

export function About() {
  usePageMeta(
    "About — MegaSoft Nepal",
    "MegaSoft Pvt. Ltd. is a Kathmandu web design and development studio established in 2011. Learn about our approach, values and clients.",
  );

  return (
    <>
      <PageHero
        index="02"
        label="Studio"
        title={
          <>
            A studio built on craft,
            <br />
            <span className="text-white/35">clarity and relationships.</span>
          </>
        }
        lead={
          <>
            For more than a decade, MegaSoft has helped businesses across Nepal
            and beyond establish a considered presence online. We are designers
            and developers, working from the same studio, on the same side of the
            table as our clients.
          </>
        }
        meta={[
          { label: "Founded", value: "2011" },
          { label: "Based", value: "Kathmandu, Nepal" },
          { label: "Registration", value: "80228/067/068" },
          { label: "Team", value: "Design + development" },
        ]}
      />

      {/* Story */}
      <section className="bg-ink py-20 text-ivory sm:py-24 lg:py-32">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
            <Reveal className="lg:col-span-3">
              <div className="flex items-center gap-3">
                <span className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-sans text-[10px] text-slate">
                  01
                </span>
                <span className="eyebrow text-slate">Our story</span>
              </div>
              <div className="mt-8 max-w-[230px] border-t border-white/[0.09] pt-5">
                <p className="font-sans text-[13px] leading-[1.7] text-white/35">
                  Registered in Nepal under government No. {site.regNo}, based
                  at {site.address}.
                </p>
              </div>
            </Reveal>

            <div className="lg:col-span-9">
              <Reveal>
                <p className="display text-[clamp(1.8rem,3.8vw,3.3rem)]">
                  MegaSoft is a leading web design company in Nepal.
                  <span className="text-white/35">
                    {" "}
                    We build modern, responsive and SEO-friendly websites that
                    help businesses grow online.
                  </span>
                </p>
              </Reveal>

              <div className="mt-12 grid gap-8 border-t border-white/[0.09] pt-8 sm:grid-cols-2 sm:gap-12">
                <Reveal delay={60}>
                  <p className="font-sans text-[14.5px] leading-[1.8] text-slate">
                    Established in 2011 and centrally located in Kathmandu, we
                    have earned a reputation as a team of experienced IT
                    professionals dedicated to website design and development.
                    Our work covers static, dynamic, CMS and e-commerce builds,
                    alongside hosting, search and digital marketing.
                  </p>
                </Reveal>
                <Reveal delay={120}>
                  <p className="font-sans text-[14.5px] leading-[1.8] text-slate">
                    With a local presence and a global perspective, we are
                    positioned to elevate a brand through design and technology
                    together. Whether you need a new website, a redesign or
                    additional functionality, we bring the same standard of craft
                    to the work.
                  </p>
                </Reveal>
              </div>

              <Reveal delay={160}>
                <div className="mt-12 rounded-2xl border border-white/[0.09] bg-ink-soft p-7 sm:p-9">
                  <p className="max-w-2xl font-display text-[clamp(1.2rem,2vw,1.55rem)] font-medium leading-[1.5] tracking-[-0.03em] text-white/85">
                    &ldquo;We are not just a website development company. We are
                    partners in leveraging the power of the digital
                    landscape.&rdquo;
                  </p>
                  <div className="mt-6">
                    <TextLink href={`mailto:${site.email}`}>
                      Talk to the studio
                    </TextLink>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Image band */}
          <div className="mt-16 grid gap-6 sm:mt-24 sm:grid-cols-12">
            <Reveal className="sm:col-span-7">
              <figure className="rounded-2xl border border-white/[0.09] bg-ink-soft p-2">
                <div className="media-mask aspect-[16/10] overflow-hidden rounded-xl bg-ink-lift">
                  <img
                    src="/projects/ugratara__pf.jpg"
                    alt="Ugratara Organics website designed by MegaSoft"
                    loading="lazy"
                    className="h-full w-full object-cover object-top brightness-[0.85] saturate-[0.9] transition-all duration-[1100ms] ease-[cubic-bezier(.16,1,.3,1)] hover:scale-[1.02] hover:brightness-100 hover:saturate-100"
                  />
                </div>
                <figcaption className="flex items-center justify-between px-2 pb-1 pt-4 font-sans text-[10px] tracking-[0.1em] text-white/35 uppercase">
                  <span>Ugratara Organics</span>
                  <span>Brand website</span>
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={100} className="sm:col-span-4 sm:col-start-9 sm:pt-20">
              <figure className="rounded-2xl border border-white/[0.09] bg-ink-soft p-2">
                <div className="media-mask aspect-[4/3] overflow-hidden rounded-xl bg-ink-lift">
                  <img
                    src="/projects/hht__pf.jpg"
                    alt="Heavenly Holiday Treks website designed by MegaSoft"
                    loading="lazy"
                    className="h-full w-full object-cover object-top brightness-[0.85] saturate-[0.9] transition-all duration-[1100ms] ease-[cubic-bezier(.16,1,.3,1)] hover:scale-[1.02] hover:brightness-100 hover:saturate-100"
                  />
                </div>
                <figcaption className="flex items-center justify-between px-2 pb-1 pt-4 font-sans text-[10px] tracking-[0.1em] text-white/35 uppercase">
                  <span>HH Treks</span>
                  <span>Tourism</span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-white/[0.09] bg-ink py-20 text-ivory sm:py-24 lg:py-32">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-10">
            <Reveal className="lg:col-span-4">
              <SectionHeading
                index="02"
                label="What we believe"
                title={
                  <>
                    Four things
                    <br />
                    we refuse to
                    <br />
                    <span className="text-white/35">compromise.</span>
                  </>
                }
              >
                Not a long list of adjectives. These are the working principles
                that shape how every project is run.
              </SectionHeading>
            </Reveal>

            <div className="lg:col-span-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {values.map((value, index) => (
                  <Reveal key={value.number} delay={index * 60}>
                    <div className="group h-full rounded-2xl border border-white/[0.09] bg-ink-soft p-6 transition-colors duration-500 hover:border-white/20 sm:p-7">
                      <div className="flex items-center justify-between">
                        <span className="font-sans text-[11px] tracking-[0.1em] text-accent">
                          {value.number}
                        </span>
                        <span className="h-px w-8 bg-white/15 transition-all duration-700 group-hover:w-14 group-hover:bg-accent/60" />
                      </div>
                      <h3 className="mt-8 font-display text-[23px] font-semibold leading-tight tracking-[-0.035em]">
                        {value.title}
                      </h3>
                      <p className="mt-2.5 font-sans text-[13.5px] leading-[1.7] text-slate">
                        {value.text}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-white/[0.09] bg-ink py-20 text-ivory sm:py-24 lg:py-32">
        <div className="container-x">
          <Reveal className="mx-auto max-w-[760px] text-center">
            <span className="chip">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Client words
            </span>
            <h2 className="display mt-7 text-[clamp(2.4rem,5vw,4.4rem)]">
              What it is like
              <br />
              <span className="text-white/35">to work with us.</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.name} delay={index * 80}>
                <figure className="flex h-full flex-col justify-between rounded-2xl border border-white/[0.09] bg-ink-soft p-7">
                  <div>
                    <span aria-hidden="true" className="font-display text-[36px] leading-none text-accent/40">
                      &ldquo;
                    </span>
                    <blockquote className="mt-2 font-display text-[19px] leading-[1.5] tracking-[-0.02em] text-white/85">
                      {testimonial.quote}
                    </blockquote>
                  </div>
                  <figcaption className="mt-8 border-t border-white/[0.09] pt-5">
                    <p className="font-sans text-[12px] text-white/70">
                      {testimonial.name}
                    </p>
                    <p className="mt-1.5 font-sans text-[10px] tracking-[0.1em] text-white/30 uppercase">
                      {testimonial.role}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <p className="mt-6 font-sans text-[10.5px] text-white/25">
            Client testimonials as published by MegaSoft.
          </p>
        </div>
      </section>

      <CTA />
    </>
  );
}
