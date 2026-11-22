use leptos::prelude::*;

use crate::components::{Button, PageMeta};

#[component]
pub fn NotFound() -> impl IntoView {
    view! {
        <PageMeta
            title="404 — MegaSoft Nepal"
            description="This page was moved, renamed, or never existed. The work is still in the index."
            path="/404"
        />

        <section class="not-found">
            <div class="container not-found__inner">
                <p class="display not-found__status" aria-hidden="true">"404"</p>
                <h1 class="display display--2">"This page was moved, renamed, or never existed."</h1>
                <p class="not-found__lead">
                    "The work is still where you left it. Start with the index, or go back to the studio."
                </p>
                <div class="not-found__actions">
                    <Button label="See the work" href="/work"/>
                    <Button label="Back home" href="/" variant="outline"/>
                </div>
            </div>
        </section>
    }
}
