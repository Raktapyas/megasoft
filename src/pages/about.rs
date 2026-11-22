use leptos::prelude::*;

use crate::components::{Button, PageHero, PageMeta, SectionHeading};
use crate::data::site::{ADDRESS, ESTABLISHED, FACTS, REG_NO};

const PRINCIPLES: [(&str, &str, &str); 4] = [
    (
        "01",
        "Built on experience",
        "Independent since 2011, with long-term client relationships and websites still in service today.",
    ),
    (
        "02",
        "Design and code together",
        "Designers and developers work in the same studio, so the approved idea is the shipped site.",
    ),
    (
        "03",
        "Direct communication",
        "You speak with the people doing the work — no layers of account management.",
    ),
    (
        "04",
        "Support after launch",
        "Hosting, maintenance and updates continue after go-live. A website is a commitment, not a handover.",
    ),
];

#[component]
pub fn About() -> impl IntoView {
    view! {
        <PageMeta
            title="Studio — MegaSoft Nepal"
            description="MegaSoft is a Kathmandu digital studio established in 2011, working across design, development, hosting and digital growth."
            path="/about"
        />

        <PageHero
            label="Studio"
            title="A small studio, in one room."
            lead="MegaSoft has been building websites from Kathmandu since 2011. Design and engineering sit together, and the people who plan the work are the people who ship it."
            index="04"
        />

        <section class="section section--tight">
            <div class="container">
                <div class="fact-strip__grid fact-strip__grid--page">
                    {FACTS
                        .iter()
                        .map(|(label, value)| {
                            view! {
                                <div class="fact">
                                    <p class="label">{*label}</p>
                                    <p class="fact__value">{*value}</p>
                                </div>
                            }
                        })
                        .collect_view()}
                    <div class="fact">
                        <p class="label">"Registered"</p>
                        <p class="fact__value">{REG_NO}</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <SectionHeading
                    index="01"
                    label="How we work"
                    title="Four principles with consequences."
                    lead="Not a values wall. These are the rules that decide how a project runs."
                />

                <div class="principle-grid">
                    {PRINCIPLES
                        .iter()
                        .map(|(number, title, body)| {
                            view! {
                                <article class="principle">
                                    <span class="principle__number">{*number}</span>
                                    <h3 class="display display--3">{*title}</h3>
                                    <p>{*body}</p>
                                </article>
                            }
                        })
                        .collect_view()}
                </div>
            </div>
        </section>

        <section class="section section--ruled">
            <div class="container">
                <div class="studio-note">
                    <p class="eyebrow">"The studio"</p>
                    <p class="display display--2">
                        "Established " {ESTABLISHED.to_string()} ". Based in New-Baneshwor. Still independent."
                    </p>
                    <p class="body-copy">
                        {ADDRESS}
                    </p>
                </div>
                <div class="section__footer">
                    <Button label="Start a project" href="/contact"/>
                </div>
            </div>
        </section>
    }
}
