use leptos::prelude::*;
use leptos_router::components::A;

use crate::components::{Button, PageHero, PageMeta, SectionHeading};
use crate::data::services::SERVICES;

#[component]
pub fn Services() -> impl IntoView {
    view! {
        <PageMeta
            title="Services — MegaSoft Nepal"
            description="Website design and development, CMS, e-commerce, hosting, SEO and digital marketing from a Kathmandu studio."
            path="/services"
        />

        <PageHero
            label="Services"
            title="Capabilities, not a menu."
            lead="Nine disciplines, one integrated team. Every engagement starts with the business problem, not a template."
            index="03"
        />

        <section class="section section--tight">
            <div class="container">
                <div class="service-index service-index--page">
                    {SERVICES
                        .iter()
                        .enumerate()
                        .map(|(index, service)| {
                            let href = format!("/services/{}", service.slug);
                            let number = format!("{:02}", index + 1);
                            view! {
                                <A href=href attr:class="service-row service-row--page">
                                    <span class="service-row__number">{number}</span>
                                    <span class="service-row__title">{service.title}</span>
                                    <span class="service-row__short">{service.short}</span>
                                    <span class="service-row__arrow" aria-hidden="true">"↗"</span>
                                </A>
                            }
                        })
                        .collect_view()}
                </div>
            </div>
        </section>

        <section class="section section--ruled">
            <div class="container">
                <SectionHeading
                    index="01"
                    label="How it runs"
                    title="A small team, a clear process."
                    lead="Discovery, direction, build and launch. The same four steps on every project, scaled to the work."
                />

                <ol class="process-list">
                    <li class="process-step">
                        <span class="process-step__number">"01"</span>
                        <h3 class="display display--3">"Discovery"</h3>
                        <p>"The business, the audience, the content and the decision the site has to support."</p>
                    </li>
                    <li class="process-step">
                        <span class="process-step__number">"02"</span>
                        <h3 class="display display--3">"Direction"</h3>
                        <p>"Structure, art direction and a visual system that can hold the whole site."</p>
                    </li>
                    <li class="process-step">
                        <span class="process-step__number">"03"</span>
                        <h3 class="display display--3">"Build"</h3>
                        <p>"Responsive front-end, content structure and the engineering to make it last."</p>
                    </li>
                    <li class="process-step">
                        <span class="process-step__number">"04"</span>
                        <h3 class="display display--3">"Launch"</h3>
                        <p>"Testing, training, hosting and the support that continues after go-live."</p>
                    </li>
                </ol>

                <div class="section__footer">
                    <Button label="Start a project" href="/contact"/>
                </div>
            </div>
        </section>
    }
}
