import { usePageMeta } from "../hooks/usePageMeta";
import { Button } from "../components/ui";

type NotFoundProps = {
  title?: string;
  message?: string;
};

export function NotFound({
  title = "This page went missing.",
  message = "The link may be broken or the page may have moved. Start from the homepage, or explore the work instead.",
}: NotFoundProps) {
  usePageMeta("Page not found — MegaSoft Nepal");

  return (
    <section className="relative overflow-hidden bg-ink pt-32 pb-20 text-ivory sm:pt-40 sm:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-50 [background-image:linear-gradient(to_right,rgba(236,233,226,0.04)_1px,transparent_1px)] [background-size:25%_100%]"
      />
      <div className="container-x relative">
        <div className="flex items-center gap-4 text-ivory/35">
          <span className="h-px w-8 bg-ivory/20" />
          <span className="eyebrow">Error 404</span>
        </div>
        <h1 className="display fade-up mt-8 max-w-4xl text-[clamp(2.5rem,7vw,5.8rem)] uppercase">
          {title}
        </h1>
        <p className="mt-7 max-w-lg font-sans text-[13px] leading-[1.9] text-ivory/45">
          {message}
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button to="/">Back to homepage</Button>
          <Button to="/work" variant="outline">
            Explore the work
          </Button>
        </div>
        <p
          aria-hidden="true"
          className="display pointer-events-none mt-16 text-[clamp(6rem,22vw,17rem)] leading-[0.75] text-ivory/[0.06] select-none"
        >
          404
        </p>
      </div>
    </section>
  );
}
