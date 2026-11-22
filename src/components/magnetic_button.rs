use leptos::prelude::*;
use leptos::ev;

#[component]
pub fn MagneticButton(
    #[prop(into)] label: String,
    #[prop(optional, into)] href: Option<String>,
    #[prop(default = "solid")] variant: &'static str,
    #[prop(default = true)] arrow: bool,
    #[prop(optional, into)] class: String,
) -> impl IntoView {
    let (tx, set_tx) = signal(0.0f64);
    let (ty, set_ty) = signal(0.0f64);

    let on_mouse_move = move |ev: ev::MouseEvent| {
        // Calculate offset from center (simplified - assumes button is at origin)
        let x = ev.offset_x() as f64;
        let y = ev.offset_y() as f64;
        // Magnetic pull: move toward cursor slightly
        set_tx.set((x - 50.0) * 0.15);
        set_ty.set((y - 26.0) * 0.15);
    };

    let on_mouse_leave = move |_| {
        set_tx.set(0.0);
        set_ty.set(0.0);
    };

    let transform = move || format!("translate({}px, {}px)", tx.get(), ty.get());

    let classes = format!("btn btn--{} magnetic {}", variant, class);

    let content = view! {
        <span>{label.clone()}</span>
        <span class="btn__arrow" aria-hidden="true">
            {if arrow { "↗" } else { "" }}
        </span>
    };

    match href {
        Some(href) if href.starts_with("http") || href.starts_with("mailto:") => view! {
            <a
                class=classes.clone()
                href=href
                target="_blank"
                rel="noreferrer"
                style:transform=transform
                on:mousemove=on_mouse_move
                on:mouseleave=on_mouse_leave
            >
                {content}
            </a>
        }
        .into_any(),
        Some(href) => view! {
            <a
                class=classes.clone()
                href=href
                style:transform=transform
                on:mousemove=on_mouse_move
                on:mouseleave=on_mouse_leave
            >
                {content}
            </a>
        }
        .into_any(),
        None => view! {
            <button
                type="button"
                class=classes
                style:transform=transform
                on:mousemove=on_mouse_move
                on:mouseleave=on_mouse_leave
            >
                {content}
            </button>
        }
        .into_any(),
    }
}
