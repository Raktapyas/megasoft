import { Reveal } from "./Reveal";

const steps = [
  {
    number: "01",
    title: "Discovery",
    text: "We start with the business: goals, audience, content and constraints. Research and strategy come before any design decision.",
  },
  {
    number: "02",
    title: "Design & Development",
    text: "Art direction and interface design move into a responsive build, reviewed with you at clear milestones along the way.",
  },
  {
    number: "03",
    title: "Testing & QA",
    text: "We test across devices and browsers, checking performance, content and accessibility before anything goes live.",
  },
  {
    number: "04",
    title: "Launch & Care",
    text: "Deployment, team training and ongoing maintenance. The website keeps working long after launch day.",
  },
];

export function Process() {
  return (
    <section className="relative border-t border-white/[0.09] bg-ink py-20 text-ivory sm:py-28 lg:py-32">
      <div className="container-x">
        <Reveal className="mx-auto max-w-[820px] text-center">
          <span className="chip">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            How we work
          </span>
          <h2 className="display mt-7 text-[clamp(2.5rem,5vw,4.4rem)]">
            A process built
            <br />
            <span className="text-white/35">on clarity.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-sans text-[15px] leading-[1.7] text-slate">
            Four stages, one continuous conversation. You always know where the
            project stands and what happens next.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 60}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.09] bg-ink-soft p-6 transition-colors duration-500 hover:border-white/20">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-[11px] tracking-[0.1em] text-accent">
                    {step.number}
                  </span>
                  <span className="h-px w-6 bg-white/15 transition-all duration-700 group-hover:w-10 group-hover:bg-accent/60" />
                </div>
                <h3 className="mt-12 font-display text-[21px] font-semibold leading-tight tracking-[-0.035em] text-ivory">
                  {step.title}
                </h3>
                <p className="mt-3 font-sans text-[13.5px] leading-[1.7] text-slate">
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
