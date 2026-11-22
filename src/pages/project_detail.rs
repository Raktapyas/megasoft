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
                let status = if project.live_url.is_some() { "Live" } else { "Delivered" };
                let live_display = project.live_url.map(|url| {
                    url.replace("https://", "").trim_end_matches('/').to_string()
                });
                view! {
                    <PageMeta
                        title=format!("{} — MegaSoft Nepal", project.name)
                        description=project.summary
                        path=format!("/work/{}", project.slug)
                    />

                    <header class="project-hero">
                        <div class="project-hero__grid" aria-hidden="true"></div>
                        <div class="project-hero__glow" aria-hidden="true"></div>

                        <div class="container project-hero__inner">
                            <div class="project-hero__crumbs">
                                <A href="/" attr:class="crumb">"Home"</A>
                                <span class="crumb__sep" aria-hidden="true">"/"</span>
                                <A href="/work" attr:class="crumb">"Work"</A>
                                <span class="crumb__sep" aria-hidden="true">"/"</span>
                                <span class="crumb crumb--current">{project.name}</span>
                            </div>

                            <div class="project-hero__layout">
                                <div class="project-hero__title-block">
                                    <p class="eyebrow project-hero__eyebrow">{project.category}</p>
                                    <h1 class="display display--1 project-hero__title">
                                        {project.name}
                                    </h1>
                                    <p class="project-hero__lead">{project.summary}</p>
                                </div>

                                <dl class="project-hero__meta">
                                    <div>
                                        <dt class="label">"Client"</dt>
                                        <dd class="project-hero__meta-value">{project.name}</dd>
                                    </div>
                                    <div>
                                        <dt class="label">"Sector"</dt>
                                        <dd class="project-hero__meta-value">{project.category}</dd>
                                    </div>
                                    <div>
                                        <dt class="label">"Studio"</dt>
                                        <dd class="project-hero__meta-value">"MegaSoft, Kathmandu"</dd>
                                    </div>
                                    <div>
                                        <dt class="label">"Status"</dt>
                                        <dd class="project-hero__meta-value">
                                            <span class="status-dot" aria-hidden="true"></span>
                                            {status}
                                        </dd>
                                    </div>
                                    {live_display.map(|display| view! {
                                        <div>
                                            <dt class="label">"Live"</dt>
                                            <dd class="project-hero__meta-value">
                                                <a href=project.live_url.unwrap() target="_blank" rel="noreferrer" class="link-line">
                                                    {display}
                                                    <span aria-hidden="true">"↗"</span>
                                                </a>
                                            </dd>
                                        </div>
                                    })}
                                </dl>
                            </div>
                        </div>
                    </header>

                    <section class="section section--tight">
                        <div class="container">
                            <div class="project-media">
                                {if project.image.is_empty() {
                                    view! {
                                        <div class="project-media__fallback">
                                            <span class="project-media__monogram">{project.monogram.unwrap_or("MS")}</span>
                                            <span class="project-media__note">"Project imagery pending"</span>
                                        </div>
                                    }
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
                        <div class="container project-body-grid">
                            <div class="project-body">
                                <p class="project-body__lead">
                                    "A website is judged in the first few seconds: does it explain the business, does it look like it belongs to this decade, and does it make the next step obvious?"
                                </p>

                                {project.description.iter().map(|paragraph| {
                                    view! {
                                        <p class="body-copy">{*paragraph}</p>
                                    }
                                }).collect_view()}

                                <div class="project-body__actions">
                                    <Button label="Start a project" href="/contact"/>
                                    <Button label="All work" href="/work" variant="outline"/>
                                </div>
                            </div>

                            <aside class="project-scope">
                                <p class="label">"Scope"</p>
                                <ul class="project-scope__list">
                                    {project.scope.iter().map(|item| {
                                        view! {
                                            <li class="project-scope__item">
                                                <span class="project-scope__dot" aria-hidden="true"></span>
                                                {*item}
                                            </li>
                                        }
                                    }).collect_view()}
                                </ul>

                                <div class="project-scope__next">
                                    <p class="label">"Next project"</p>
                                    <A href=next_href attr:class="project-scope__next-link">
                                        {next.name}
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
