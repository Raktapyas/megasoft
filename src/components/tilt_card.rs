use leptos::prelude::*;
use crate::motion::use_tilt;

#[component]
pub fn TiltCard(
    #[prop(optional, into)] class: String,
    children: Children,
) -> impl IntoView {
    let (node_ref, rx, ry) = use_tilt(8.0);

    let transform = move || {
        format!(
            "perspective(1000px) rotateX({}deg) rotateY({}deg)",
            rx.get(),
            ry.get()
        )
    };

    view! {
        <div
            node_ref=node_ref
            class=format!("tilt-card {}", class)
            style:transform=transform
        >
            {children()}
        </div>
    }
}
