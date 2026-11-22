use leptos::prelude::*;
use leptos::ev;
#[cfg(feature = "hydrate")]
use wasm_bindgen::prelude::*;
use crate::assistant::{get_response, load_messages, match_intent, save_messages, clear_messages, ChatMessage, Intent};

const SUGGESTED_QUESTIONS: &[&str] = &[
    "What services do you offer?",
    "Show me your portfolio",
    "How can I contact you?",
    "Where are you located?",
    "What is your process?",
];

#[component]
pub fn Assistant() -> impl IntoView {
    let open = RwSignal::new(false);
    let messages = RwSignal::new(load_messages());
    let input_value = RwSignal::new(String::new());
    let is_typing = RwSignal::new(false);
    let message_id_counter = RwSignal::new(0u64);

    // Initialize message ID counter from loaded messages
    Effect::new(move |_| {
        let msgs = messages.get();
        if let Some(last) = msgs.last() {
            message_id_counter.set(last.id + 1);
        }
    });

    // Auto-scroll to bottom when messages change
    let chat_body_ref = NodeRef::<leptos::html::Div>::new();

    Effect::new(move |_| {
        let _ = messages.get();
        #[cfg(feature = "hydrate")]
        if let Some(el) = chat_body_ref.get() {
            let el: web_sys::Element = el.into();
            el.set_scroll_top(el.scroll_height());
        }
    });

    // Send message handler
    let send_message = move |text: String| {
        if text.trim().is_empty() {
            return;
        }

        let id = message_id_counter.get();
        message_id_counter.set(id + 1);

        let user_msg = ChatMessage {
            id,
            text: text.clone(),
            is_user: true,
            timestamp: current_timestamp(),
        };

        messages.update(|msgs| msgs.push(user_msg));
        save_messages(&messages.get());

        input_value.set(String::new());

        // Show typing indicator
        is_typing.set(true);

        // Generate response after a short delay
        #[cfg(feature = "hydrate")]
        {
            let messages = messages;
            let is_typing = is_typing;
            let message_id_counter = message_id_counter;
            let response_text = get_response(match_intent(&text)).to_string();
            let cb = Closure::once(move || {
                let id = message_id_counter.get();
                message_id_counter.set(id + 1);

                let bot_msg = ChatMessage {
                    id,
                    text: response_text,
                    is_user: false,
                    timestamp: current_timestamp(),
                };

                messages.update(|msgs| msgs.push(bot_msg));
                save_messages(&messages.get());
                is_typing.set(false);
            });

            if let Some(window) = web_sys::window() {
                let _ = window.set_timeout_with_callback_and_timeout_and_arguments_0(
                    cb.as_ref().unchecked_ref(),
                    800,
                );
            }
            cb.forget();
        }

        #[cfg(not(feature = "hydrate"))]
        {
            let intent = match_intent(&text);
            let response = get_response(intent);
            let id = message_id_counter.get();
            message_id_counter.set(id + 1);
            let bot_msg = ChatMessage {
                id,
                text: response.to_string(),
                is_user: false,
                timestamp: current_timestamp(),
            };
            messages.update(|msgs| msgs.push(bot_msg));
            save_messages(&messages.get());
            is_typing.set(false);
        }
    };

    // Clear chat handler
    let on_clear = move |_| {
        messages.set(Vec::new());
        clear_messages();
        message_id_counter.set(0);
    };

    // Toggle open
    let toggle_open = move |_| {
        open.update(|v| *v = !*v);
    };

    // Handle suggested question click
    let on_suggest = move |q: &'static str| {
        send_message(q.to_string());
    };

    // Handle form submit
    let on_submit = move |ev: ev::SubmitEvent| {
        ev.prevent_default();
        let text = input_value.get();
        send_message(text);
    };

    // Handle Enter key in input
    let on_keydown = move |ev: ev::KeyboardEvent| {
        if ev.key() == "Enter" && !ev.shift_key() {
            ev.prevent_default();
            let text = input_value.get();
            send_message(text);
        }
    };

    // Focus management: focus input when chat opens
    let input_ref = NodeRef::<leptos::html::Input>::new();
    Effect::new(move |_| {
        if open.get() {
            #[cfg(feature = "hydrate")]
            if let Some(input) = input_ref.get() {
                let _ = input.focus();
            }
        }
    });

    // Focus management: focus chat button when chat closes
    let chat_button_ref = NodeRef::<leptos::html::Button>::new();
    Effect::new(move |_| {
        if !open.get() {
            // Don't steal focus on initial render
        }
    });

    // Close on Escape
    #[cfg(feature = "hydrate")]
    {
        use leptos_use_event_listener::use_event_listener;
        use leptos::ev;
        Effect::new(move |_| {
            if open.get() {
                let cb = move |ev: ev::KeyboardEvent| {
                    if ev.key() == "Escape" {
                        open.set(false);
                    }
                };
                // We'll handle this via the dialog's keydown
                let _ = cb;
            }
        });
    }

    view! {
        // Floating chat button
        <button
            type="button"
            class="assistant-button"
            aria-label="Open MegaSoft Assistant"
            aria-expanded=move || open.get().to_string()
            aria-controls="assistant-dialog"
            node_ref=chat_button_ref
            on:click=toggle_open
        >
            <svg class="assistant-button__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <span class="assistant-button__label">"Ask"</span>
        </button>

        // Chat dialog
        <div
            id="assistant-dialog"
            class=move || if open.get() { "assistant-dialog is-open" } else { "assistant-dialog" }
            role="dialog"
            aria-modal="true"
            aria-label="MegaSoft Assistant"
            aria-hidden=move || if open.get() { "false" } else { "true" }
        >
            <div class="assistant-dialog__header">
                <div class="assistant-dialog__title">
                    <span class="assistant-dialog__dot" aria-hidden="true"></span>
                    <span>"MegaSoft Assistant"</span>
                </div>
                <div class="assistant-dialog__actions">
                    <button
                        type="button"
                        class="assistant-dialog__clear"
                        aria-label="Clear chat history"
                        on:click=on_clear
                    >
                        "Clear"
                    </button>
                    <button
                        type="button"
                        class="assistant-dialog__close"
                        aria-label="Close assistant"
                        on:click=move |_| open.set(false)
                    >
                        "Close"
                    </button>
                </div>
            </div>

            <div class="assistant-dialog__body" node_ref=chat_body_ref>
                {move || {
                    let msgs = messages.get();
                    if msgs.is_empty() {
                        view! {
                            <div class="assistant-welcome">
                                <p class="assistant-welcome__text">
                                    "Hi! I'm the MegaSoft Assistant. Ask me about our services, portfolio, contact info, or how we work."
                                </p>
                                <div class="assistant-chips">
                                    {SUGGESTED_QUESTIONS.iter().map(|q| {
                                        let q = *q;
                                        view! {
                                            <button
                                                type="button"
                                                class="assistant-chip"
                                                on:click=move |_| on_suggest(q)
                                            >
                                                {q}
                                            </button>
                                        }
                                    }).collect_view()}
                                </div>
                            </div>
                        }.into_any()
                    } else {
                        view! {
                            <div class="assistant-messages">
                                {msgs.iter().map(|msg| {
                                    let is_user = msg.is_user;
                                    let text = msg.text.clone();
                                    let lines: Vec<String> = text.split('\n').map(|l| l.to_string()).collect();
                                    view! {
                                        <div class=if is_user { "assistant-msg assistant-msg--user" } else { "assistant-msg assistant-msg--bot" }>
                                            <div class="assistant-msg__bubble">
                                                {lines.into_iter().map(|line| {
                                                    view! { <p>{line}</p> }
                                                }).collect_view()}
                                            </div>
                                        </div>
                                    }
                                }).collect_view()}
                                {if is_typing.get() {
                                    view! {
                                        <div class="assistant-msg assistant-msg--bot">
                                            <div class="assistant-msg__bubble assistant-typing">
                                                <span class="assistant-typing__dot"></span>
                                                <span class="assistant-typing__dot"></span>
                                                <span class="assistant-typing__dot"></span>
                                            </div>
                                        </div>
                                    }.into_any()
                                } else {
                                    view! { <div></div> }.into_any()
                                }}
                            </div>
                        }.into_any()
                    }
                }}

                // Suggested chips when messages exist
                {move || {
                    let msgs = messages.get();
                    if !msgs.is_empty() && !is_typing.get() {
                        view! {
                            <div class="assistant-chips assistant-chips--bottom">
                                {SUGGESTED_QUESTIONS.iter().take(3).map(|q| {
                                    let q = *q;
                                    view! {
                                        <button
                                            type="button"
                                            class="assistant-chip"
                                            on:click=move |_| on_suggest(q)
                                        >
                                            {q}
                                        </button>
                                    }
                                }).collect_view()}
                            </div>
                        }.into_any()
                    } else {
                        view! { <div></div> }.into_any()
                    }
                }}
            </div>

            <form class="assistant-dialog__input" on:submit=on_submit>
                <input
                    type="text"
                    class="assistant-input"
                    placeholder="Ask about MegaSoft..."
                    aria-label="Type your message"
                    prop:value=move || input_value.get()
                    on:input=move |ev| {
                        #[cfg(feature = "hydrate")]
                        {
                            use wasm_bindgen::JsCast;
                            if let Some(target) = ev.target() {
                                if let Ok(input) = target.dyn_into::<web_sys::HtmlInputElement>() {
                                    input_value.set(input.value());
                                }
                            }
                        }
                    }
                    on:keydown=on_keydown
                    node_ref=input_ref
                />
                <button type="submit" class="assistant-send" aria-label="Send message">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                </button>
            </form>
        </div>
    }
}

fn current_timestamp() -> u64 {
    #[cfg(feature = "hydrate")]
    {
        (js_sys::Date::now() as u64)
    }
    #[cfg(not(feature = "hydrate"))]
    {
        0
    }
}
