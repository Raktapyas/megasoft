use leptos::prelude::*;

use crate::components::{PageHero, PageMeta, ProjectCard};
use crate::data::projects::{CATEGORIES, PROJECTS};

#[component]
pub fn Work() -> impl IntoView {
    let filter = RwSignal::new("All".to_string());

    let visible = move || {
        let current = filter.get();
        PROJECTS
            .iter()
            .copied()
            .filter(|project| current == "All" || project.category == current)
            .collect::<Vec<_>>()
    };

    view! {
        <PageMeta
            title="Work — MegaSoft Nepal"
            description="Seventeen websites across corporate, e-commerce, tourism, education and the social sector, designed and built in Kathmandu."
            path="/work"
        />

        <PageHero
            label="Work"
            title="An index, not a gallery."
            lead="Seventeen projects, each with a job to do. Filter by discipline, or read the index from top to bottom."
            index="02"
        />

        <section class="section section--tight">
            <div class="container">
                <div class="filter-bar" role="group" aria-label="Filter projects by discipline">
                    {CATEGORIES
                        .iter()
                        .map(|category| {
                            let category = *category;
                            view! {
                                <button
                                    type="button"
                                    class=move || {
                                        if filter.get() == category { "filter is-active" } else { "filter" }
                                    }
                                    aria-pressed=move || {
                                        if filter.get() == category { "true" } else { "false" }
                                    }
                                    on:click=move |_| filter.set(category.to_string())
                                >
                                    {category}
                                </button>
                            }
                        })
                        .collect_view()}
                </div>

                <p class="filter-count" aria-live="polite">
                    {move || format!("{} projects", visible().len())}
                </p>

                <div class="work-grid work-grid--index">
                    {move || {
                        let projects = visible();
                        if projects.is_empty() {
                            view! {
                                <p class="empty-state">
                                    "No projects in this discipline yet. Try another filter."
                                </p>
                            }
                            .into_any()
                        } else {
                            projects
                                .into_iter()
                                .map(|project| view! { <ProjectCard project=project/> })
                                .collect_view()
                                .into_any()
                        }
                    }}
                </div>
            </div>
        </section>
    }
}
