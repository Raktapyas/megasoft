import { site } from "../data/site";
import { Reveal } from "./Reveal";
import { Button } from "./ui";

export function CTA() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.09] bg-ink text-ivory">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[420px] bg-[radial-gradient(ellipse_at_bottom,rgba(201,162,39,0.16),transparent_68%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-64 left-1/2 h-[640px] w-[140%] -translate-x-1/2 [background-image:linear-gradient(rgba(201,162,39,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(201,162,39,0.09)_1px,transparent_1px)] [background-size:64px_64px] [transform:perspective(520px)_rotateX(62deg)] [mask-image:radial-gradient(ellipse_at_center,#000,transparent_70%)]"
      />

      <div className="container-x relative py-24 text-center sm:py-32 lg:py-36">
        <Reveal>
          <span className="chip">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Next step
          </span>
          <h2 className="display mx-auto mt-8 max-w-[920px] text-[clamp(2.8rem,6.4vw,6rem)]">
            Start something
            <br />
            <span className="text-white/35">worth remembering.</span>
          </h2>
          <p className="mx-auto mt-7 max-w-[520px] font-sans text-[15px] leading-[1.7] text-slate">
            Tell us what you are working on. We will come back with an honest
            view of how we can help — and what it will take.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={`mailto:${site.email}`} className="w-full sm:w-auto">
            Start a project
          </Button>
          <Button href={site.phonePrimaryHref} variant="outline" arrow={false} className="w-full sm:w-auto">
            {site.phonePrimary}
          </Button>
        </Reveal>

        <Reveal delay={180} className="mt-10 flex flex-col items-center gap-2 font-sans text-[12px] text-white/35">
          <a
            href={`mailto:${site.email}`}
            className="transition-colors hover:text-ivory"
          >
            {site.email}
          </a>
          <span>{site.address}</span>
        </Reveal>
      </div>
    </section>
  );
}
