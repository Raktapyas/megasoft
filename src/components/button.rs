use leptos::prelude::*;
use leptos_router::components::A;

#[component]
pub fn Button(
    #[prop(into)] label: String,
    #[prop(optional)] href: Option<&'static str>,
    #[prop(default = "solid")] variant: &'static str,
    #[prop(default = true)] arrow: bool,
    #[prop(optional, into)] class: String,
) -> impl IntoView {
    let classes = format!("btn btn--{variant} {class}");

    match href {
        Some(href) if is_external(href) => view! {
            <a class=classes.clone() href=href target="_blank" rel="noreferrer">
                <ButtonContent label=label arrow=arrow/>
            </a>
        }
        .into_any(),
        Some(href) => view! {
            <A href=href attr:class=classes>
                <ButtonContent label=label arrow=arrow/>
            </A>
        }
        .into_any(),
        None => view! {
            <button type="button" class=classes>
                <ButtonContent label=label arrow=arrow/>
            </button>
        }
        .into_any(),
    }
}

#[component]
fn ButtonContent(label: String, arrow: bool) -> impl IntoView {
    view! {
        <span>{label}</span>
        <span class="btn__arrow" aria-hidden="true">
            {if arrow { "↗" } else { "" }}
        </span>
    }
}

fn is_external(href: &str) -> bool {
    href.starts_with("http://") || href.starts_with("https://") || href.starts_with("mailto:")
}
