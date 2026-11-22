use leptos::prelude::*;
use leptos_router::components::A;
use leptos_router::hooks::use_params_map;

use crate::components::{Button, PageMeta};
use crate::data::projects::{find_project, next_project};

#[component]
pub fn ProjectDetail() -> impl IntoView {
    let params = use_params_map();
    let slug = move || params.read().get("slug").unwrap_or_default();

    view! {
        {move || match find_project(&slug()) {
            Some(project) => {
                let next = next_project(project.slug);
                let next_href = format!("/work/{}", next.slug);
                view! {
                    <PageMeta
                        title=format!("{} — MegaSoft Nepal", project.name)
                        description=project.summary
                        path=format!("/work/{}", project.slug)
                    />

                    <header class="page-hero page-hero--detail">
                        <div class="page-hero__grid" aria-hidden="true"></div>
                        <div class="page-hero__glow" aria-hidden="true"></div>
                        <div class="container page-hero__inner">
                            <div class="page-hero__crumbs">
                                <A href="/" attr:class="crumb">"Home"</A>
                                <span class="crumb__sep" aria-hidden="true">"/"</span>
                                <A href="/work" attr:class="crumb">"Work"</A>
                                <span class="crumb__sep" aria-hidden="true">"/"</span>
                                <span class="crumb crumb--current">{project.name}</span>
                            </div>
                            <p class="eyebrow page-hero__eyebrow">{project.category}</p>
                            <h1 class="display display--2 page-hero__title">{project.name}</h1>
                            <p class="page-hero__lead">{project.summary}</p>
                        </div>
                    </header>

                    <section class="section section--tight">
                        <div class="container">
                            <div class="detail-media">
                                {if project.image.is_empty() {
                                    view! { <div class="detail-media__fallback">"Project imagery pending"</div> }
                                        .into_any()
                                } else {
                                    view! {
                                        <img
                                            src=project.image
                                            alt=format!("{} website", project.name)
                                            width="800"
                                            height="507"
                                            decoding="async"
                                        />
                                    }
                                    .into_any()
                                }}
                            </div>
                        </div>
                    </section>

                    <section class="section">
                        <div class="container detail-grid">
                            <div class="detail-main">
                                <p class="detail-lead">
                                    "A website is judged in the first few seconds: does it explain the business, does it look like it belongs to this decade, and does it make the next step obvious?"
                                </p>
                                <p class="body-copy">
                                    "This case study is part of the Phase 2 foundation. Client-approved scope, results and a named quote will be added once the facts are verified."
                                </p>
                                <div class="detail-actions">
                                    <Button label="Start a project" href="/contact"/>
                                    <Button label="All work" href="/work" variant="outline"/>
                                </div>
                            </div>
                            <aside class="detail-meta">
                                <p class="label">"Client"</p>
                                <p class="detail-meta__value">{project.name}</p>
                                <p class="label">"Discipline"</p>
                                <p class="detail-meta__value">{project.category}</p>
                                <p class="label">"Studio"</p>
                                <p class="detail-meta__value">"Kathmandu, Nepal"</p>
                                <p class="label">"Next"</p>
                                <A href=next_href attr:class="detail-next">
                                    {next.name}
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
                        <h1 class="display display--2">"Project not found."</h1>
                        <p class="body-copy">"That project is not in the index. The full body of work is one click away."</p>
                        <Button label="See the work" href="/work" variant="outline"/>
                    </div>
                </section>
            }
            .into_any(),
        }}
    }
}
