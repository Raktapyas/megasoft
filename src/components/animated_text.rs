use leptos::prelude::*;

#[component]
pub fn AnimatedText(
    #[prop(into)] text: String,
    #[prop(default = "word")] mode: &'static str,
    #[prop(default = 0)] base_delay: i32,
    #[prop(default = 60)] stagger: i32,
    #[prop(optional, into)] class: String,
) -> impl IntoView {
    let words: Vec<String> = text.split_whitespace().map(|w| w.to_string()).collect();

    view! {
        <span class=format!("animated-text animated-text--{} {}", mode, class)>
            {words
                .into_iter()
                .enumerate()
                .map(|(i, word)| {
                    let delay = base_delay + (i as i32) * stagger;
                    view! {
                        <span class="animated-text__word" style=format!("--delay: {}ms", delay)>
                            <span class="animated-text__inner">{word}</span>
                        </span>
                    }
                })
                .collect_view()}
        </span>
    }
}

#[component]
pub fn AnimatedChars(
    #[prop(into)] text: String,
    #[prop(default = 0)] base_delay: i32,
    #[prop(default = 30)] stagger: i32,
    #[prop(optional, into)] class: String,
) -> impl IntoView {
    let chars: Vec<String> = text.chars().map(|c| {
        if c == ' ' { "\u{00A0}".to_string() } else { c.to_string() }
    }).collect();

    view! {
        <span class=format!("animated-chars {}", class)>
            {chars
                .into_iter()
                .enumerate()
                .map(|(i, ch)| {
                    let delay = base_delay + (i as i32) * stagger;
                    view! {
                        <span class="animated-chars__char" style=format!("--delay: {}ms", delay)>
                            {ch}
                        </span>
                    }
                })
                .collect_view()}
        </span>
    }
}
