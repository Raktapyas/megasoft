use leptos::prelude::*;
use leptos_meta::{provide_meta_context, MetaTags, Stylesheet};
use leptos_router::components::{Route, Router, Routes};
use leptos_router::hooks::use_location;
use leptos_router::path;

use crate::components::{SiteFooter, SiteHeader};
use crate::pages::about::About;
use crate::pages::contact::Contact;
use crate::pages::home::Home;
use crate::pages::not_found::NotFound;
use crate::pages::privacy::Privacy;
use crate::pages::project_detail::ProjectDetail;
use crate::pages::service_detail::ServiceDetail;
use crate::pages::services::Services;
use crate::pages::work::Work;

pub fn shell(options: LeptosOptions) -> impl IntoView {
    view! {
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="theme-color" content="#000000"/>
                <link rel="icon" type="image/png" href="/logo-mark.png"/>
                <link rel="apple-touch-icon" href="/logo-mark.png"/>
                <AutoReload options=options.clone()/>
                <HydrationScripts options/>
                <MetaTags/>
            </head>
            <body>
                <App/>
            </body>
        </html>
    }
}

#[component]
pub fn App() -> impl IntoView {
    provide_meta_context();

    view! {
        <Stylesheet id="leptos" href="/pkg/megasoft.css"/>
        <Router>
            <AppShell/>
        </Router>
    }
}

#[component]
fn AppShell() -> impl IntoView {
    let location = use_location();

    Effect::new(move |_| {
        let _ = location.pathname.get();

        #[cfg(feature = "hydrate")]
        if let Some(window) = web_sys::window() {
            let _ = window.scroll_to_with_x_and_y(0.0, 0.0);
        }
    });

    view! {
        <div id="top"></div>
        <a href="#main" class="skip-link">"Skip to content"</a>

        <SiteHeader/>

        <main id="main" tabindex="-1">
            <Routes fallback=|| view! { <NotFound/> }>
                <Route path=path!("/") view=Home/>
                <Route path=path!("/work") view=Work/>
                <Route path=path!("/work/:slug") view=ProjectDetail/>
                <Route path=path!("/services") view=Services/>
                <Route path=path!("/services/:slug") view=ServiceDetail/>
                <Route path=path!("/about") view=About/>
                <Route path=path!("/contact") view=Contact/>
                <Route path=path!("/privacy") view=Privacy/>
            </Routes>
        </main>

        <SiteFooter/>
    }
}
