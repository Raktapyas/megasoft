use leptos::prelude::*;
use crate::motion::use_intersection_reveal;

#[component]
pub fn Reveal(
    #[prop(optional, into)] class: String,
    #[prop(default = 0.0)] threshold: f64,
    children: Children,
) -> impl IntoView {
    let node_ref = NodeRef::<leptos::html::Div>::new();
    let visible = use_intersection_reveal(node_ref, threshold);

    let classes = move || {
        if visible.get() {
            format!("reveal is-visible {}", class)
        } else {
            format!("reveal {}", class)
        }
    };

    view! {
        <div node_ref=node_ref class=classes>
            {children()}
        </div>
    }
}
