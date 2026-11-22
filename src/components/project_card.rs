use leptos::prelude::*;
use leptos_router::components::A;

use crate::data::projects::Project;

#[component]
pub fn ProjectCard(project: Project) -> impl IntoView {
    let href = format!("/work/{}", project.slug);
    let alt = format!("{} website", project.name);

    view! {
        <article class="work-card work-card--3d">
            <A href=href attr:class="work-card__link">
                <div class="work-card__media image-reveal">
                    {if project.image.is_empty() {
                        let display = project.monogram.unwrap_or_else(|| {
                            // compute from name as fallback
                            // This is a static computation, so we use a simple approach
                            ""
                        });
                        let text = if display.is_empty() {
                            project.name.split_whitespace()
                                .filter_map(|w| w.chars().next())
                                .take(2)
                                .collect::<String>()
                        } else {
                            display.to_string()
                        };
                        view! { <div class="work-card__monogram">{text}</div> }.into_any()
                    } else {
                        view! {
                            <img
                                src=project.image
                                alt=alt
                                loading="lazy"
                                decoding="async"
                                width="800"
                                height="507"
                            />
                        }
                        .into_any()
                    }}
                    <span class="work-card__arrow" aria-hidden="true">"↗"</span>
                </div>
                <div class="work-card__body">
                    <span class="eyebrow">{project.category}</span>
                    <h3 class="display display--3 work-card__title">{project.name}</h3>
                    <p class="work-card__summary">{project.summary}</p>
                </div>
            </A>
        </article>
    }
}
