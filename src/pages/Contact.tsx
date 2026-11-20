import { useState, type FormEvent } from "react";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { usePageMeta } from "../hooks/usePageMeta";
import { site } from "../data/site";
import { services } from "../data/services";

type FormValues = {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  company: "",
  phone: "",
  service: "",
  budget: "",
  message: "",
};

const budgetOptions = [
  "Not sure yet",
  "Under NPR 50,000",
  "NPR 50,000 – 150,000",
  "NPR 150,000 – 500,000",
  "NPR 500,000+",
];

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (values.phone.trim() && !/^[+\d][\d\s()-]{6,}$/.test(values.phone.trim())) {
    errors.phone = "Please enter a valid phone number, or leave this blank.";
  }

  if (!values.service) {
    errors.service = "Please choose a service.";
  }

  if (values.message.trim().length < 20) {
    errors.message = "Please tell us a little more — at least 20 characters.";
  }

  return errors;
}

const inputBase = "field";
const labelBase =
  "block font-sans text-[10px] font-medium tracking-[0.12em] text-white/35 uppercase";

export function Contact() {
  usePageMeta(
    "Contact — Start a project with MegaSoft Nepal",
    "Contact MegaSoft Pvt. Ltd. in Thapagaun, New-Baneshwor, Kathmandu. Call +977 9851054917, email info@megasoft.net.np or send a project enquiry.",
  );

  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [ready, setReady] = useState(false);

  const update = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const first = Object.keys(nextErrors)[0];
      const field = document.querySelector<HTMLElement>(`[name="${first}"]`);
      field?.focus();
      return;
    }

    setReady(true);
  };

  const mailSubject = `Project enquiry — ${values.service || "New project"}`;
  const mailBody = [
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    values.company ? `Company: ${values.company}` : null,
    values.phone ? `Phone: ${values.phone}` : null,
    `Service: ${values.service}`,
    values.budget ? `Budget: ${values.budget}` : null,
    "",
    values.message,
  ]
    .filter((line) => line !== null)
    .join("\n");

  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;

  return (
    <>
      <PageHero
        index="05"
        label="Contact"
        title={
          <>
            Tell us what
            <br />
            <span className="text-white/35">you&rsquo;re building.</span>
          </>
        }
        lead="A new website, a redesign, an online store or a campaign — start with a short note. We will reply with an honest view of how we can help."
        meta={[
          { label: "Studio", value: "Thapagaun, New-Baneshwor" },
          { label: "Phone", value: site.phonePrimary },
          { label: "Email", value: site.email },
          { label: "Preferred", value: "Email or phone" },
        ]}
      />

      <section className="bg-ink py-16 text-ivory sm:py-20 lg:py-24">
        <div className="container-x">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
            {/* Details */}
            <div className="lg:col-span-5">
              <Reveal>
                <div className="flex items-center gap-4 text-white/35">
                  <span className="font-sans text-[9px] tracking-[0.14em]">01</span>
                  <span className="h-px w-8 bg-white/15" />
                  <span className="eyebrow">Contact details</span>
                </div>
                <h2 className="display mt-6 text-[clamp(2rem,4vw,3.2rem)]">
                  Talk to
                  <br />
                  <span className="text-white/35">the studio.</span>
                </h2>
                <p className="mt-5 max-w-sm font-sans text-[14.5px] leading-[1.75] text-slate">
                  Call, write or drop by the office in New-Baneshwor. We are
                  happy to talk through an idea before it becomes a brief.
                </p>
              </Reveal>

              <div className="mt-10">
                <Reveal delay={60}>
                  <a
                    href={`mailto:${site.email}`}
                    className="group flex items-start justify-between gap-5 border-t border-white/[0.09] py-5"
                  >
                    <span>
                      <span className={labelBase}>Email</span>
                      <span className="mt-2 block font-display text-[17px] break-all text-white/85 transition-colors group-hover:text-accent">
                        {site.email}
                      </span>
                      <span className="mt-1 block font-sans text-[11px] text-white/35">
                        {site.emailSecondary}
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="mt-1 text-[12px] text-white/30 transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                    >
                      ↗
                    </span>
                  </a>
                </Reveal>

                <Reveal delay={90}>
                  <div className="border-t border-white/[0.09] py-5">
                    <p className={labelBase}>Phone</p>
                    <div className="mt-2 flex flex-col gap-1 font-display text-[17px] text-white/85">
                      <a
                        href={site.phonePrimaryHref}
                        className="transition-colors hover:text-accent"
                      >
                        {site.phonePrimary}
                      </a>
                      <a
                        href={site.phoneSecondaryHref}
                        className="transition-colors hover:text-accent"
                      >
                        {site.phoneSecondary}
                      </a>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={120}>
                  <a
                    href={site.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-start justify-between gap-5 border-t border-white/[0.09] py-5"
                  >
                    <span>
                      <span className={labelBase}>WhatsApp</span>
                      <span className="mt-2 block font-display text-[17px] text-white/85 transition-colors group-hover:text-accent">
                        Message the studio
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="mt-1 text-[12px] text-white/30 transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                    >
                      ↗
                    </span>
                  </a>
                </Reveal>

                <Reveal delay={150}>
                  <a
                    href={site.maps}
                    target="_blank"
                    rel="noreferrer"
                    className="group block border-t border-white/[0.09] py-5"
                  >
                    <span className={labelBase}>Studio</span>
                    <span className="mt-2 block max-w-xs font-display text-[17px] leading-[1.45] text-white/85 transition-colors group-hover:text-accent">
                      {site.legalName}, {site.address}
                    </span>
                  </a>
                </Reveal>
              </div>

              {/* Location panel */}
              <Reveal delay={180}>
                <div className="relative mt-8 overflow-hidden rounded-2xl border border-white/[0.09] bg-ink-soft p-6 text-ivory">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-50 [background-image:linear-gradient(to_right,rgba(236,233,226,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(236,233,226,0.05)_1px,transparent_1px)] [background-size:48px_48px]"
                  />
                  <div className="relative flex items-start justify-between gap-6">
                    <span className="eyebrow text-ivory/35">Studio location</span>
                    <span className="font-sans text-[8px] tracking-[0.14em] text-ivory/25">
                      27.6918° N / 85.3321° E
                    </span>
                  </div>
                  <p className="relative mt-8 max-w-[15rem] font-display text-[19px] leading-[1.45] text-ivory/85">
                    {site.legalName}
                    <br />
                    {site.address}
                  </p>
                  <a
                    href={site.maps}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative mt-8 inline-flex items-center gap-2 border-t border-ivory/15 pt-4 font-sans text-[9px] tracking-[0.18em] text-ivory/55 uppercase transition-colors hover:text-ivory"
                  >
                    Open in Google Maps
                    <span
                      aria-hidden="true"
                      className="text-[11px] transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    >
                      ↗
                    </span>
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <Reveal delay={80}>
                <div className="rounded-2xl border border-white/[0.09] bg-ink-soft p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="label text-white/30">Project inquiry</p>
                      <h2 className="mt-2.5 font-display text-[24px] leading-tight">
                        Start the conversation
                      </h2>
                    </div>
                    <span className="font-sans text-[8px] tracking-[0.14em] text-white/25">
                      MS / 2026
                    </span>
                  </div>

                  {!ready ? (
                    <form onSubmit={handleSubmit} noValidate className="mt-9">
                      <div className="grid gap-x-7 gap-y-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="name" className={labelBase}>
                            Name <span className="text-accent">*</span>
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            placeholder="Your full name"
                            value={values.name}
                            onChange={(event) => update("name", event.target.value)}
                            aria-invalid={Boolean(errors.name)}
                            aria-describedby={errors.name ? "name-error" : undefined}
                            className={`${inputBase} ${errors.name ? "border-red-500" : ""}`}
                          />
                          {errors.name && (
                            <p
                              id="name-error"
                              className="mt-2 font-sans text-[10.5px] text-red-400"
                            >
                              {errors.name}
                            </p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="email" className={labelBase}>
                            Email <span className="text-accent">*</span>
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            placeholder="you@company.com"
                            value={values.email}
                            onChange={(event) => update("email", event.target.value)}
                            aria-invalid={Boolean(errors.email)}
                            aria-describedby={errors.email ? "email-error" : undefined}
                            className={`${inputBase} ${errors.email ? "border-red-500" : ""}`}
                          />
                          {errors.email && (
                            <p
                              id="email-error"
                              className="mt-2 font-sans text-[10.5px] text-red-400"
                            >
                              {errors.email}
                            </p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="company" className={labelBase}>
                            Company
                          </label>
                          <input
                            id="company"
                            name="company"
                            type="text"
                            autoComplete="organization"
                            placeholder="Business or organisation"
                            value={values.company}
                            onChange={(event) => update("company", event.target.value)}
                            className={inputBase}
                          />
                        </div>

                        <div>
                          <label htmlFor="phone" className={labelBase}>
                            Phone
                          </label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            autoComplete="tel"
                            placeholder="+977"
                            value={values.phone}
                            onChange={(event) => update("phone", event.target.value)}
                            aria-invalid={Boolean(errors.phone)}
                            aria-describedby={errors.phone ? "phone-error" : undefined}
                            className={`${inputBase} ${errors.phone ? "border-red-500" : ""}`}
                          />
                          {errors.phone && (
                            <p
                              id="phone-error"
                              className="mt-2 font-sans text-[10.5px] text-red-400"
                            >
                              {errors.phone}
                            </p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="service" className={labelBase}>
                            Service <span className="text-accent">*</span>
                          </label>
                          <div className="relative">
                            <select
                              id="service"
                              name="service"
                              value={values.service}
                              onChange={(event) => update("service", event.target.value)}
                              aria-invalid={Boolean(errors.service)}
                              aria-describedby={errors.service ? "service-error" : undefined}
                              className={`${inputBase} pr-7 ${errors.service ? "border-red-500" : ""} ${
                                values.service ? "text-ivory" : "text-white/30"
                              }`}
                            >
                              <option value="">Select a service</option>
                              {services.map((service) => (
                                <option key={service.slug} value={service.title}>
                                  {service.title}
                                </option>
                              ))}
                              <option value="Something else">Something else</option>
                            </select>
                            <span
                              aria-hidden="true"
                              className="pointer-events-none absolute right-0 bottom-4 text-[10px] text-white/30"
                            >
                              ↓
                            </span>
                          </div>
                          {errors.service && (
                            <p
                              id="service-error"
                              className="mt-2 font-sans text-[10.5px] text-red-400"
                            >
                              {errors.service}
                            </p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="budget" className={labelBase}>
                            Budget
                          </label>
                          <div className="relative">
                            <select
                              id="budget"
                              name="budget"
                              value={values.budget}
                              onChange={(event) => update("budget", event.target.value)}
                              className={`${inputBase} pr-7 ${values.budget ? "text-ivory" : "text-white/30"}`}
                            >
                              <option value="">Optional</option>
                              {budgetOptions.map((option) => (
                                <option key={option} value={option}>
                                  {option}
                                </option>
                              ))}
                            </select>
                            <span
                              aria-hidden="true"
                              className="pointer-events-none absolute right-0 bottom-4 text-[10px] text-white/30"
                            >
                              ↓
                            </span>
                          </div>
                        </div>

                        <div className="sm:col-span-2">
                          <label htmlFor="message" className={labelBase}>
                            Project details <span className="text-accent">*</span>
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            rows={5}
                            placeholder="What are you building, and what does success look like?"
                            value={values.message}
                            onChange={(event) => update("message", event.target.value)}
                            aria-invalid={Boolean(errors.message)}
                            aria-describedby={errors.message ? "message-error" : undefined}
                            className={`${inputBase} resize-y ${errors.message ? "border-red-500" : ""}`}
                          />
                          {errors.message && (
                            <p
                              id="message-error"
                              className="mt-2 font-sans text-[10.5px] text-red-400"
                            >
                              {errors.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="mt-8 flex flex-col gap-5 border-t border-white/[0.09] pt-6 sm:flex-row sm:items-center sm:justify-between">
                        <p className="max-w-[19rem] font-sans text-[10px] leading-[1.7] text-white/30">
                          Fields marked * are required. This form is validated in
                          your browser; it does not send data on its own.
                        </p>
                        <button
                          type="submit"
                          className="group inline-flex h-[52px] shrink-0 items-center justify-center gap-2.5 rounded-full border border-ivory bg-ivory px-6 font-sans text-[14px] font-medium text-ink transition-colors duration-400 hover:bg-white/90"
                        >
                          Prepare enquiry
                          <span
                            aria-hidden="true"
                            className="text-[12px] transition-transform duration-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          >
                            ↗
                          </span>
                        </button>
                      </div>
                    </form>
                  ) : (
                    <div className="mt-9">
                      <h3 className="font-display text-[24px] leading-tight">
                        Your enquiry is ready.
                      </h3>
                      <p className="mt-3 max-w-md font-sans text-[12px] leading-[1.9] text-slate">
                        Nothing has been sent yet — this website has no server
                        connected to the form. Open your email app below with the
                        message filled in, or write to us directly.
                      </p>

                      <dl className="mt-7 grid gap-x-6 gap-y-4 border-y border-white/[0.09] py-6 sm:grid-cols-2">
                        <div>
                          <dt className={labelBase}>Name</dt>
                          <dd className="mt-1.5 font-sans text-[12px] text-white/70">
                            {values.name}
                          </dd>
                        </div>
                        <div>
                          <dt className={labelBase}>Email</dt>
                          <dd className="mt-1.5 font-sans text-[12px] break-all text-white/70">
                            {values.email}
                          </dd>
                        </div>
                        <div>
                          <dt className={labelBase}>Service</dt>
                          <dd className="mt-1.5 font-sans text-[12px] text-white/70">
                            {values.service}
                          </dd>
                        </div>
                        <div>
                          <dt className={labelBase}>Budget</dt>
                          <dd className="mt-1.5 font-sans text-[12px] text-white/70">
                            {values.budget || "Not specified"}
                          </dd>
                        </div>
                        <div className="sm:col-span-2">
                          <dt className={labelBase}>Message</dt>
                          <dd className="mt-1.5 font-sans text-[12px] leading-[1.8] whitespace-pre-wrap text-white/70">
                            {values.message}
                          </dd>
                        </div>
                      </dl>

                      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                        <a
                          href={mailto}
                          className="group inline-flex h-[52px] items-center justify-center gap-2.5 rounded-full border border-ivory bg-ivory px-6 font-sans text-[14px] font-medium text-ink transition-colors hover:bg-white/90"
                        >
                          Open email app
                          <span
                            aria-hidden="true"
                            className="text-[12px] transition-transform duration-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          >
                            ↗
                          </span>
                        </a>
                        <button
                          type="button"
                          onClick={() => setReady(false)}
                          className="inline-flex h-[52px] items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-6 font-sans text-[14px] font-medium text-slate transition-colors hover:border-white/35 hover:text-ivory"
                        >
                          Edit details
                        </button>
                      </div>

                      <p className="mt-4 font-sans text-[10.5px] text-white/30">
                        Or email us directly at{" "}
                        <a
                          href={`mailto:${site.email}`}
                          className="text-white/60 underline underline-offset-2"
                        >
                          {site.email}
                        </a>
                        .
                      </p>
                    </div>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
