use leptos::prelude::*;
use leptos_router::components::A;

#[component]
pub fn Logo(#[prop(default = "nav")] size: &'static str) -> impl IntoView {
    let mark_class = if size == "footer" {
        "logo__mark logo__mark--footer"
    } else {
        "logo__mark"
    };
    let word_class = if size == "footer" {
        "logo__word logo__word--footer"
    } else {
        "logo__word"
    };

    view! {
        <A href="/" attr:class="logo" attr:aria-label="MegaSoft Pvt. Ltd. — home">
            <img
                src="/logo-mark.png"
                alt=""
                width="64"
                height="64"
                class=mark_class
                decoding="async"
            />
            <span class=word_class>"Megasoft"</span>
        </A>
    }
}
