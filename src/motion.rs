use leptos::prelude::*;

#[cfg(feature = "hydrate")]
use wasm_bindgen::prelude::*;
#[cfg(feature = "hydrate")]
use wasm_bindgen::JsCast;

/// Hook: observe an element and return a signal indicating visibility.
/// Uses IntersectionObserver under the hood (Rust-controlled).
#[cfg(feature = "hydrate")]
pub fn use_intersection_reveal(
    node_ref: NodeRef<leptos::html::Div>,
    threshold: f64,
) -> ReadSignal<bool> {
    let (visible, set_visible) = signal(false);

    Effect::new(move |_| {
        if let Some(el) = node_ref.get() {
            let el: web_sys::Element = el.into();
            let cb = Closure::wrap(Box::new(move |entries: js_sys::Array, _obs: web_sys::IntersectionObserver| {
                for i in 0..entries.length() {
                    let entry: web_sys::IntersectionObserverEntry = entries.get(i).unchecked_into();
                    if entry.is_intersecting() {
                        set_visible.set(true);
                    }
                }
            }) as Box<dyn FnMut(js_sys::Array, web_sys::IntersectionObserver)>);

            let options = web_sys::IntersectionObserverInit::new();
            options.set_threshold(&js_sys::Array::of1(&wasm_bindgen::JsValue::from_f64(threshold)));

            if let Ok(observer) = web_sys::IntersectionObserver::new_with_options(cb.as_ref().unchecked_ref(), &options) {
                observer.observe(&el);
                // Store observer and closure for cleanup
                on_cleanup(move || {
                    observer.disconnect();
                });
                cb.forget();
            }
        }
    });

    visible
}

#[cfg(not(feature = "hydrate"))]
pub fn use_intersection_reveal(
    _node_ref: NodeRef<leptos::html::Div>,
    _threshold: f64,
) -> ReadSignal<bool> {
    let (visible, _) = signal(true);
    visible
}

/// Hook: parallax offset based on scroll position.
/// Returns (node_ref, offset_signal).
#[cfg(feature = "hydrate")]
pub fn use_parallax(speed: f64) -> (NodeRef<leptos::html::Div>, ReadSignal<f64>) {
    let node_ref = NodeRef::<leptos::html::Div>::new();
    let (offset, set_offset) = signal(0.0);

    Effect::new(move |_| {
        let el = match node_ref.get() {
            Some(el) => el,
            None => return,
        };
        let el: web_sys::Element = el.into();

        let update = move || {
            let rect = el.get_bounding_client_rect();
            let window_height = web_sys::window().unwrap().inner_height().unwrap().as_f64().unwrap_or(800.0);
            let center = rect.top() + rect.height() / 2.0;
            let viewport_center = window_height / 2.0;
            let distance = center - viewport_center;
            set_offset.set(distance * speed);
        };

        update();

        let cb = Closure::wrap(Box::new(move || {
            update();
        }) as Box<dyn FnMut()>);

        web_sys::window().unwrap().add_event_listener_with_callback("scroll", cb.as_ref().unchecked_ref()).unwrap();
        cb.forget();
    });

    (node_ref, offset)
}

/// Hook: track mouse position relative to an element.
/// Returns (node_ref, (x_signal, y_signal)) where x/y are -1..1 normalized.
#[cfg(feature = "hydrate")]
pub fn use_mouse_position() -> (NodeRef<leptos::html::Div>, ReadSignal<f64>, ReadSignal<f64>) {
    let node_ref = NodeRef::<leptos::html::Div>::new();
    let (x, set_x) = signal(0.0f64);
    let (y, set_y) = signal(0.0f64);

    Effect::new(move |_| {
        let el = match node_ref.get() {
            Some(el) => el,
            None => return,
        };
        let el: web_sys::Element = el.into();

        let el_clone = el.clone();
        let mousemove_cb = Closure::wrap(Box::new(move |ev: web_sys::MouseEvent| {
            let rect = el_clone.get_bounding_client_rect();
            let cx = rect.left() + rect.width() / 2.0;
            let cy = rect.top() + rect.height() / 2.0;
            let nx = ((ev.client_x() as f64) - cx) / (rect.width() / 2.0);
            let ny = ((ev.client_y() as f64) - cy) / (rect.height() / 2.0);
            set_x.set(nx.clamp(-1.0, 1.0));
            set_y.set(ny.clamp(-1.0, 1.0));
        }) as Box<dyn FnMut(web_sys::MouseEvent)>);

        let el_clone2 = el.clone();
        let mouseleave_cb = Closure::wrap(Box::new(move || {
            set_x.set(0.0);
            set_y.set(0.0);
            let _ = &el_clone2;
        }) as Box<dyn FnMut()>);

        el.add_event_listener_with_callback("mousemove", mousemove_cb.as_ref().unchecked_ref()).unwrap();
        el.add_event_listener_with_callback("mouseleave", mouseleave_cb.as_ref().unchecked_ref()).unwrap();

        mousemove_cb.forget();
        mouseleave_cb.forget();
    });

    (node_ref, x, y)
}

#[cfg(not(feature = "hydrate"))]
pub fn use_mouse_position() -> (NodeRef<leptos::html::Div>, ReadSignal<f64>, ReadSignal<f64>) {
    (NodeRef::new(), {
        let (s, _) = signal(0.0);
        s
    }, {
        let (s, _) = signal(0.0);
        s
    })
}

/// Hook: 3D tilt based on mouse position.
/// Returns (node_ref, (rotate_x, rotate_y)) signals.
#[cfg(feature = "hydrate")]
pub fn use_tilt(strength: f64) -> (NodeRef<leptos::html::Div>, ReadSignal<f64>, ReadSignal<f64>) {
    let (node_ref, mx, my) = use_mouse_position();
    let (rx, set_rx) = signal(0.0f64);
    let (ry, set_ry) = signal(0.0f64);

    Effect::new(move |_| {
        let tilt_x = my.get() * strength;
        let tilt_y = -mx.get() * strength;
        set_rx.set(tilt_x);
        set_ry.set(tilt_y);
    });

    (node_ref, rx, ry)
}

#[cfg(not(feature = "hydrate"))]
pub fn use_tilt(_strength: f64) -> (NodeRef<leptos::html::Div>, ReadSignal<f64>, ReadSignal<f64>) {
    (NodeRef::new(), {
        let (s, _) = signal(0.0);
        s
    }, {
        let (s, _) = signal(0.0);
        s
    })
}
