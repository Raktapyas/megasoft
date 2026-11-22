use leptos::prelude::*;
use leptos_router::components::A;
use leptos_router::hooks::use_location;
#[cfg(feature = "hydrate")]
use leptos_use_window_scroll::use_window_scroll;

use crate::components::logo::Logo;
use crate::data::site::{NAV, PRIMARY_NAV};

#[component]
pub fn SiteHeader() -> impl IntoView {
    let open = RwSignal::new(false);
    let close_ref = NodeRef::<leptos::html::Button>::new();
    let menu_button_ref = NodeRef::<leptos::html::Button>::new();

    #[cfg(feature = "hydrate")]
    let (_, scroll_y) = use_window_scroll();

    #[cfg(not(feature = "hydrate"))]
    let scroll_y = RwSignal::new(0.0);

    let location = use_location();
    let pathname = move || location.pathname.get();
    let scrolled = move || scroll_y.get() > 12.0;

    Effect::new(move |_| {
        let _ = location.pathname.get();
        open.set(false);
    });

    #[cfg(feature = "hydrate")]
    {
        use leptos::ev;
        use leptos_use_event_listener::use_event_listener;

        let _ = use_event_listener(
            leptos::prelude::document(),
            ev::keydown,
            move |event: ev::KeyboardEvent| {
                if event.key() == "Escape" {
                    open.set(false);
                }
            },
        );
    }

    #[cfg(feature = "hydrate")]
    Effect::new(move |_| {
        if open.get() {
            if let Some(button) = close_ref.get() {
                let _ = button.focus();
            }
        }
    });

    #[cfg(feature = "hydrate")]
    Effect::new(move |_| {
        if let Some(body) = leptos::prelude::document().body() {
            let value = if open.get() { "hidden" } else { "" };
            let _ = body.style().set_property("overflow", value);
        }
    });

    #[cfg(feature = "hydrate")]
    on_cleanup(|| {
        if let Some(body) = leptos::prelude::document().body() {
            let _ = body.style().set_property("overflow", "");
        }
    });

    view! {
        <header class="mast">
            <div class="mast__inner">
                <div
                    class="mast__bar"
                    data-scrolled=move || if scrolled() { "true" } else { "false" }
                >
                    <div class="mast__brand">
                        <Logo/>
                    </div>

                    <nav class="mast__nav" aria-label="Primary">
                        {PRIMARY_NAV
                            .iter()
                            .map(|item| {
                                let href = item.href;
                                let label = item.label;
                                view! {
                                    <A
                                        href=href
                                        attr:class=move || {
                                            let active = is_active(href, &pathname());
                                            if active { "mast__link is-active" } else { "mast__link" }
                                        }
                                        attr:aria-current=move || {
                                            if is_active(href, &pathname()) { "page" } else { "false" }
                                        }
                                    >
                                        {label}
                                    </A>
                                }
                            })
                            .collect_view()}
                    </nav>

                    <div class="mast__actions">
                        <A href="/contact" attr:class="mast__cta">
                            <span>"Start a project"</span>
                            <span aria-hidden="true" class="mast__cta-arrow">"↗"</span>
                        </A>
                        <button
                            type="button"
                            class="mast__menu-button"
                            aria-label="Open menu"
                            aria-expanded=move || open.get().to_string()
                            aria-controls="site-menu"
                            node_ref=menu_button_ref
                            on:click=move |_| open.set(true)
                        >
                            "Menu"
                        </button>
                    </div>

                    <div class="scroll-progress" aria-hidden="true"></div>
                </div>
                <div class="mast__tab" aria-hidden="true"></div>
            </div>
        </header>

        <div
            id="site-menu"
            class=move || if open.get() { "menu is-open" } else { "menu" }
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            aria-hidden=move || if open.get() { "false" } else { "true" }
        >
            <div class="menu__top">
                <Logo/>
                <button
                    type="button"
                    class="menu__close"
                    aria-label="Close menu"
                    node_ref=close_ref
                    on:click=move |_| open.set(false)
                >
                    "Close"
                </button>
            </div>

            <nav class="menu__nav" aria-label="Mobile">
                {NAV
                    .iter()
                    .map(|item| {
                        let href = item.href;
                        let label = item.label;
                        view! {
                            <A href=href attr:class="menu__link">
                                <span class="menu__link-label">{label}</span>
                                <span class="menu__link-arrow" aria-hidden="true">
                                    "↗"
                                </span>
                            </A>
                        }
                    })
                    .collect_view()}
            </nav>

            <div class="menu__footer">
                <A href="/contact" attr:class="menu__cta">
                    "Start a project"
                </A>
                <p class="menu__note">"Kathmandu, Nepal — established 2011"</p>
            </div>
        </div>
    }
}

fn is_active(href: &str, path: &str) -> bool {
    if href == "/" {
        path == "/"
    } else {
        path.starts_with(href)
    }
}
