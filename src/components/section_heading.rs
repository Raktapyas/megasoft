use leptos::prelude::*;

#[component]
pub fn SectionHeading(
    #[prop(optional)] index: Option<&'static str>,
    #[prop(into)] label: String,
    #[prop(into)] title: String,
    #[prop(optional)] lead: Option<&'static str>,
) -> impl IntoView {
    view! {
        <div class="section-heading">
            <div class="section-heading__meta">
                {index.map(|index| view! { <span class="index-pill">{index}</span> })}
                <span class="eyebrow">{label}</span>
            </div>
            <h2 class="display display--2 section-heading__title">{title}</h2>
            {lead.map(|lead| view! { <p class="section-heading__lead">{lead}</p> })}
        </div>
    }
}
