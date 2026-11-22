use leptos::prelude::*;

#[component]
pub fn Container(
    #[prop(optional, into)] class: String,
    children: Children,
) -> impl IntoView {
    view! { <div class=format!("container {class}")>{children()}</div> }
}
