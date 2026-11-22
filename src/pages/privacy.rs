use leptos::prelude::*;

use crate::components::{PageHero, PageMeta};
use crate::data::site::{EMAIL, LEGAL_NAME};

#[component]
pub fn Privacy() -> impl IntoView {
    view! {
        <PageMeta
            title="Privacy — MegaSoft Nepal"
            description="How MegaSoft handles enquiry and analytics data."
            path="/privacy"
        />

        <PageHero
            label="Privacy"
            title="Privacy, in plain language."
            lead="What we collect, why we collect it, and how to have it removed."
            index="07"
        />

        <section class="section">
            <div class="container prose">
                <h2 class="display display--3">"What we collect"</h2>
                <p>
                    "When you send an enquiry, we receive the name, email address, company, budget range and message you choose to provide. We use them only to reply and to scope the work."
                </p>

                <h2 class="display display--3">"What we do not do"</h2>
                <p>
                    "We do not sell enquiry data. We do not add you to a marketing list without asking. We do not use advertising trackers on this site."
                </p>

                <h2 class="display display--3">"Retention"</h2>
                <p>
                    "Enquiry correspondence is kept for as long as needed to respond and maintain a project record. You can ask us to delete it at any time."
                </p>

                <h2 class="display display--3">"Contact"</h2>
                <p>
                    {LEGAL_NAME} " — " <a class="link-line" href=format!("mailto:{EMAIL}")>{EMAIL}</a>
                </p>
            </div>
        </section>
    }
}
