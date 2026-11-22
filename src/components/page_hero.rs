use leptos::prelude::*;
use leptos_router::components::A;

#[component]
pub fn PageHero(
    #[prop(into)] label: String,
    #[prop(into)] title: String,
    #[prop(optional)] lead: Option<&'static str>,
    #[prop(optional)] index: Option<&'static str>,
) -> impl IntoView {
    view! {
        <header class="page-hero">
            <div class="page-hero__grid" aria-hidden="true"></div>
            <div class="page-hero__glow" aria-hidden="true"></div>

            <div class="container page-hero__inner">
                <div class="page-hero__crumbs">
                    <A href="/" attr:class="crumb">"Home"</A>
                    <span class="crumb__sep" aria-hidden="true">"/"</span>
                    <span class="crumb crumb--current">{label}</span>
                    {index.map(|index| view! {
                        <span class="page-hero__chapter">"Chapter " {index}</span>
                    })}
                </div>

                <h1 class="display display--2 page-hero__title">{title}</h1>

                {lead.map(|lead| view! {
                    <div class="page-hero__lead-row">
                        <p class="page-hero__lead">{lead}</p>
                    </div>
                })}
            </div>
        </header>
    }
}
