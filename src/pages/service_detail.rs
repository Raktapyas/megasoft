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
                view! {
                    <PageMeta
                        title=format!("{} — MegaSoft Nepal", service.title)
                        description=service.short
                        path=format!("/services/{}", service.slug)
                    />

                    <header class="page-hero page-hero--detail">
                        <div class="page-hero__grid" aria-hidden="true"></div>
                        <div class="page-hero__glow" aria-hidden="true"></div>
                        <div class="container page-hero__inner">
                            <div class="page-hero__crumbs">
                                <A href="/" attr:class="crumb">"Home"</A>
                                <span class="crumb__sep" aria-hidden="true">"/"</span>
                                <A href="/services" attr:class="crumb">"Services"</A>
                                <span class="crumb__sep" aria-hidden="true">"/"</span>
                                <span class="crumb crumb--current">{service.title}</span>
                            </div>
                            <p class="eyebrow page-hero__eyebrow">{service.tag}</p>
                            <h1 class="display display--2 page-hero__title">{service.title}</h1>
                            <p class="page-hero__lead">{service.short}</p>
                        </div>
                    </header>

                    <section class="section">
                        <div class="container detail-grid">
                            <div class="detail-main">
                                <p class="detail-lead">
                                    "The work begins with the business, not the template: what the site has to achieve, who it has to convince, and what the team needs to maintain after launch."
                                </p>
                                <p class="body-copy">
                                    "This page is part of the Phase 2 foundation. The full service narrative, deliverables and from-price will be added once the client facts are verified."
                                </p>
                                <div class="detail-actions">
                                    <Button label="Start a project" href="/contact"/>
                                    <Button label="All services" href="/services" variant="outline"/>
                                </div>
                            </div>
                            <aside class="detail-meta">
                                <p class="label">"Discipline"</p>
                                <p class="detail-meta__value">{service.tag}</p>
                                <p class="label">"Studio"</p>
                                <p class="detail-meta__value">"Kathmandu, Nepal"</p>
                                <p class="label">"Next"</p>
                                <A href=next_href attr:class="detail-next">
                                    {next.title}
                                    <span aria-hidden="true">"↗"</span>
                                </A>
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
