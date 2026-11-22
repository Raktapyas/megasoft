use leptos::prelude::*;
use leptos_router::components::A;
use leptos_router::hooks::use_params_map;

use crate::components::{Button, PageMeta};
use crate::data::services::{find_service, next_service};

#[component]
pub fn ServiceDetail() -> impl IntoView {
    let params = use_params_map();
    let slug = move || params.read().get("slug").unwrap_or_default();

    view! {
        {move || match find_service(&slug()) {
            Some(service) => {
                let next = next_service(service.slug);
                let next_href = format!("/services/{}", next.slug);
                let index = crate::data::services::SERVICES
                    .iter()
                    .position(|s| s.slug == service.slug)
                    .unwrap_or(0) + 1;
                let total = crate::data::services::SERVICES.len();
                view! {
                    <PageMeta
                        title=format!("{} — MegaSoft Nepal", service.title)
                        description=service.short
                        path=format!("/services/{}", service.slug)
                    />

                    <header class="service-hero">
                        <div class="service-hero__grid" aria-hidden="true"></div>
                        <div class="service-hero__glow" aria-hidden="true"></div>

                        <div class="container service-hero__inner">
                            <div class="service-hero__crumbs">
                                <A href="/" attr:class="crumb">"Home"</A>
                                <span class="crumb__sep" aria-hidden="true">"/"</span>
                                <A href="/services" attr:class="crumb">"Services"</A>
                                <span class="crumb__sep" aria-hidden="true">"/"</span>
                                <span class="crumb crumb--current">{service.title}</span>
                            </div>

                            <div class="service-hero__layout">
                                <div class="service-hero__title-block">
                                    <p class="eyebrow service-hero__eyebrow">{service.tag}</p>
                                    <h1 class="display display--1 service-hero__title">
                                        {service.title}
                                    </h1>
                                    <p class="service-hero__lead">{service.lead}</p>
                                </div>

                                <dl class="service-hero__meta">
                                    <div>
                                        <dt class="label">"Service"</dt>
                                        <dd class="service-hero__meta-value">
                                            {format!("{:02} of {:02}", index, total)}
                                        </dd>
                                    </div>
                                    <div>
                                        <dt class="label">"Discipline"</dt>
                                        <dd class="service-hero__meta-value">{service.tag}</dd>
                                    </div>
                                    <div>
                                        <dt class="label">"Studio"</dt>
                                        <dd class="service-hero__meta-value">"Kathmandu, Nepal"</dd>
                                    </div>
                                    <div>
                                        <dt class="label">"Enquiries"</dt>
                                        <dd class="service-hero__meta-value">
                                            <a href="mailto:info@megasoft.net.np" class="link-line">
                                                "info@megasoft.net.np"
                                            </a>
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </header>

                    <section class="section section--tight">
                        <div class="container">
                            <div class="service-media">
                                <img
                                    src=service.image
                                    alt=service.image_alt
                                    width="800"
                                    height="507"
                                    decoding="async"
                                />
                            </div>
                        </div>
                    </section>

                    <section class="section">
                        <div class="container service-body-grid">
                            <div class="service-body">
                                <p class="section-heading__lead service-body__intro">
                                    "The work begins with the business, not the template: what the site has to achieve, who it has to convince, and what the team needs to maintain after launch."
                                </p>

                                {service.body.iter().map(|paragraph| {
                                    view! {
                                        <p class="body-copy">{*paragraph}</p>
                                    }
                                }).collect_view()}

                                <div class="service-body__actions">
                                    <Button label="Start a project" href="/contact"/>
                                    <Button label="All services" href="/services" variant="outline"/>
                                </div>
                            </div>

                            <aside class="service-includes">
                                <p class="label">"Included"</p>
                                <ul class="service-includes__list">
                                    {service.includes.iter().map(|item| {
                                        view! {
                                            <li class="service-includes__item">
                                                <span class="service-includes__dot" aria-hidden="true"></span>
                                                {*item}
                                            </li>
                                        }
                                    }).collect_view()}
                                </ul>

                                <div class="service-includes__next">
                                    <p class="label">"Next discipline"</p>
                                    <A href=next_href attr:class="service-includes__next-link">
                                        {next.title}
                                        <span aria-hidden="true">"↗"</span>
                                    </A>
                                </div>
                            </aside>
                        </div>
                    </section>
                }
                .into_any()
            }
            None => view! {
                <section class="section">
                    <div class="container">
                        <h1 class="display display--2">"Service not found."</h1>
                        <p class="body-copy">"The service you are looking for does not exist. The index has the full list."</p>
                        <Button label="All services" href="/services" variant="outline"/>
                    </div>
                </section>
            }
            .into_any(),
        }}
    }
}
