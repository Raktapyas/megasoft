import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { usePageMeta } from "../hooks/usePageMeta";
import { site } from "../data/site";

const linkClass = "text-white/80 underline decoration-white/20 underline-offset-2 transition-colors hover:text-accent";

const sections = [
  {
    id: "who-we-are",
    title: "Who we are",
    body: (
      <>
        <p>
          This website is operated by {site.legalName}, a company registered in
          Nepal under government No. {site.regNo}, with its office at{" "}
          {site.address}.
        </p>
        <p>
          For any question about this policy or about information you have sent
          us, write to{" "}
          <a href={`mailto:${site.email}`} className={linkClass}>
            {site.email}
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "scope",
    title: "What this policy covers",
    body: (
      <p>
        This policy explains what happens to information when you visit this
        website. It covers this site only. It does not cover the websites of our
        clients, or other services we link to.
      </p>
    ),
  },
  {
    id: "information",
    title: "Information this website collects",
    body: (
      <>
        <p>
          This website is a front-end application. It has no user accounts, no
          database and no server-side form processing. We do not ask you to
          register, and we do not set advertising or analytics cookies.
        </p>
        <p>
          The project inquiry form runs entirely in your browser. The details you
          enter are validated locally and are not transmitted or stored by this
          website. When you choose &ldquo;Open email app&rdquo;, the message is
          handed to your own email client for you to review and send. Nothing is
          sent unless you send it yourself.
        </p>
      </>
    ),
  },
  {
    id: "email",
    title: "When you contact us directly",
    body: (
      <>
        <p>
          If you email, call or message us using the contact details shown on
          this site, we receive the information you choose to share — your name,
          contact details and the content of your message. We use it only to
          respond to your enquiry and to manage any work that follows.
        </p>
        <p>
          We do not sell contact information, and we do not add people to
          marketing lists without their agreement.
        </p>
      </>
    ),
  },
  {
    id: "third-parties",
    title: "Third-party services and links",
    body: (
      <>
        <p>
          Typography on this site is loaded from Google Fonts. That request is
          made by your browser to Google&rsquo;s servers, which may receive your
          IP address and basic request information. We do not control how that
          service handles data; Google&rsquo;s own privacy policy applies.
        </p>
        <p>
          This site links to external destinations, including client websites,
          Google Maps, WhatsApp and Facebook. Once you follow one of those links,
          the privacy policy of that service applies, not this one.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies and hosting logs",
    body: (
      <p>
        This website does not create cookies of its own. Our hosting provider may
        keep standard server logs — such as request times and IP addresses — for
        security and reliability. Those logs are used for operational purposes
        and are not combined with any information about you held elsewhere.
      </p>
    ),
  },
  {
    id: "rights",
    title: "Your choices",
    body: (
      <p>
        If you have corresponded with us and would like to know what we hold, ask
        for a correction, or request that routine correspondence be deleted,
        contact us at{" "}
        <a href={`mailto:${site.email}`} className={linkClass}>
          {site.email}
        </a>
        . We will respond within a reasonable period, subject to any records we
        are required to keep by law.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: (
      <p>
        If this website changes in a way that affects privacy — for example, if a
        form is connected to a server — this page will be updated before that
        change takes effect. The date below shows the current version.
      </p>
    ),
  },
];

export function Privacy() {
  usePageMeta(
    "Privacy Policy — MegaSoft Nepal",
    "How MegaSoft Pvt. Ltd. handles information on this website, including the front-end-only project inquiry form and third-party links.",
  );

  return (
    <>
      <PageHero
        label="Legal"
        title="Privacy Policy"
        lead="A plain-language account of what this website does and does not do with your information."
        meta={[
          { label: "Applies to", value: "megasoft.net.np" },
          { label: "Last updated", value: "19 November 2026" },
          { label: "Controller", value: site.legalName },
          { label: "Contact", value: site.email },
        ]}
      />

      <section className="bg-ink py-16 text-ivory sm:py-20 lg:py-24">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <p className="eyebrow text-white/30">Contents</p>
                <nav
                  aria-label="Policy contents"
                  className="mt-5 border-t border-white/[0.09]"
                >
                  {sections.map((section, index) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="group flex items-baseline gap-3 border-b border-white/[0.09] py-3 font-sans text-[12px] text-slate transition-colors hover:text-ivory"
                    >
                      <span className="font-sans text-[9px] text-accent/60">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {section.title}
                    </a>
                  ))}
                </nav>
                <div className="mt-8 border-t border-white/[0.09] pt-5">
                  <p className="max-w-[17rem] font-sans text-[12px] leading-[1.8] text-slate">
                    The short version: this site has no accounts, no analytics
                    and no server-side form. Your inquiry stays in your browser
                    until you send it yourself.
                  </p>
                </div>
              </div>
            </aside>

            <div className="lg:col-span-8">
              <div className="max-w-2xl">
                {sections.map((section, index) => (
                  <Reveal key={section.id} delay={Math.min(index * 25, 120)}>
                    <section
                      id={section.id}
                      className="scroll-mt-28 border-t border-white/[0.09] py-8 first:border-t-0 first:pt-0"
                    >
                      <div className="flex items-baseline gap-4">
                        <span className="font-sans text-[9px] tracking-[0.1em] text-accent/60">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h2 className="font-display text-[22px] font-semibold leading-tight tracking-[-0.03em]">
                          {section.title}
                        </h2>
                      </div>
                      <div className="mt-4 space-y-4 font-sans text-[13.5px] leading-[1.85] text-slate sm:pl-8">
                        {section.body}
                      </div>
                    </section>
                  </Reveal>
                ))}

                <div className="mt-4 border-t border-white/[0.09] pt-8">
                  <p className="font-sans text-[12.5px] leading-[1.8] text-slate">
                    Questions about this policy can be sent to{" "}
                    <a href={`mailto:${site.email}`} className={linkClass}>
                      {site.email}
                    </a>{" "}
                    or raised by phone on{" "}
                    <a href={site.phonePrimaryHref} className={linkClass}>
                      {site.phonePrimary}
                    </a>
                    .
                  </p>
                  <p className="mt-4 font-sans text-[9px] tracking-[0.16em] text-white/30 uppercase">
                    Last updated 19 November 2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
