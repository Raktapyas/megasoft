use leptos::prelude::*;
use leptos_router::components::A;

use crate::components::{Button, PageMeta, ProjectCard, SectionHeading};
use crate::data::projects::{featured_projects, PROJECTS};
use crate::data::services::SERVICES;
use crate::data::site::{DESCRIPTION, ESTABLISHED, FACTS};

#[component]
pub fn Home() -> impl IntoView {
    view! {
        <PageMeta
            title="MegaSoft Nepal — Web Design & Digital Studio, Kathmandu"
            description=DESCRIPTION
            path="/"
        />

        <section class="hero grain">
            <div class="hero-lines" aria-hidden="true"></div>
            <div class="hero-glow" aria-hidden="true"></div>
            <div class="hero-floor" aria-hidden="true"></div>

            <div class="container hero__inner">
                <p class="chip hero__chip">
                    <span class="chip__dot" aria-hidden="true"></span>
                    "Digital studio — Kathmandu, Nepal"
                </p>

                <h1 class="display display--1 hero__title">
                    <span class="headline-mask">
                        <span>"Digital experiences."</span>
                    </span>
                    <span class="headline-mask">
                        <span class="hero__title-dim">"Built to move you forward."</span>
                    </span>
                </h1>

                <p class="hero__lead">
                    "Strategy, design and technology for businesses ready to make their next move."
                </p>

                <div class="hero__actions">
                    <Button label="Start a project" href="/contact"/>
                    <Button label="See our work" href="/work" variant="outline"/>
                </div>

                <p class="hero__note">
                    "One studio, end to end. Established " {ESTABLISHED.to_string()} " — Kathmandu, Nepal."
                </p>
            </div>
        </section>

        <section class="fact-strip" aria-label="Studio facts">
            <div class="container fact-strip__grid">
                {FACTS
                    .iter()
                    .map(|(label, value)| {
                        view! {
                            <div class="fact">
                                <p class="label">{*label}</p>
                                <p class="fact__value">{*value}</p>
                            </div>
                        }
                    })
                    .collect_view()}
            </div>
        </section>

        <section class="marquee" aria-label="Disciplines">
            <div class="marquee__track" aria-hidden="true">
                {(0..2)
                    .flat_map(|_| SERVICES.iter())
                    .map(|service| {
                        view! {
                            <span class="marquee__item">
                                {service.title}
                                <span class="marquee__dot"></span>
                            </span>
                        }
                    })
                    .collect_view()}
            </div>
        </section>

        <section class="section section--statement">
            <div class="container">
                <div class="statement reveal">
                    <p class="chip">
                        <span class="chip__dot" aria-hidden="true"></span>
                        "The studio"
                    </p>
                    <p class="display display--2 statement__text">
                        "A Kathmandu studio with a global perspective."
                        <span class="statement__dim">
                            "We build digital work that earns attention and holds it."
                        </span>
                    </p>
                </div>
            </div>
        </section>

        <section class="section section--ruled">
            <div class="container">
                <SectionHeading
                    index="01"
                    label="Capabilities"
                    title="What we do, end to end."
                    lead="Strategy, design and engineering under one roof — so the idea that gets approved is the site that ships."
                />

                <div class="service-index">
                    {SERVICES
                        .iter()
                        .take(6)
                        .map(|service| {
                            let href = format!("/services/{}", service.slug);
                            view! {
                                <A href=href attr:class="service-row">
                                    <span class="service-row__tag">{service.tag}</span>
                                    <span class="service-row__title">{service.title}</span>
                                    <span class="service-row__short">{service.short}</span>
                                    <span class="service-row__arrow" aria-hidden="true">"↗"</span>
                                </A>
                            }
                        })
                        .collect_view()}
                </div>

                <div class="section__footer">
                    <Button label="All services" href="/services" variant="outline"/>
                </div>
            </div>
        </section>

        <section class="section section--ruled">
            <div class="container">
                <SectionHeading
                    index="02"
                    label="Selected work"
                    title="Sites in service, not mockups."
                    lead="Seventeen projects across corporate, commerce, tourism, education and the social sector."
                />

                <div class="work-grid">
                    {featured_projects()
                        .take(4)
                        .map(|project| view! { <ProjectCard project=project/> })
                        .collect_view()}
                </div>

                <div class="section__footer section__footer--split">
                    <p class="section__note">
                        {PROJECTS.len().to_string()} " projects in the index."
                    </p>
                    <Button label="See the work" href="/work" variant="outline"/>
                </div>
            </div>
        </section>

        <section class="section cta-section">
            <div class="container">
                <div class="cta-panel">
                    <p class="eyebrow">"New business"</p>
                    <h2 class="display display--2 cta-panel__title">
                        "Tell us what you are building."
                    </h2>
                    <p class="cta-panel__lead">
                        "A short note about the business, the timeline and the decision you are trying to make."
                    </p>
                    <div class="cta-panel__actions">
                        <Button label="Start a project" href="/contact"/>
                        <Button label="Read the studio" href="/about" variant="outline"/>
                    </div>
                </div>
            </div>
        </section>
    }
}
