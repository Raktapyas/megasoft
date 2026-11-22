use leptos::prelude::*;

use crate::components::{PageHero, PageMeta};
use crate::data::site::{
    ADDRESS, EMAIL, MAPS, PHONE_PRIMARY, PHONE_PRIMARY_HREF, PHONE_SECONDARY,
    PHONE_SECONDARY_HREF,
};

#[component]
pub fn Contact() -> impl IntoView {
    view! {
        <PageMeta
            title="Contact — MegaSoft Nepal"
            description="Start a project with MegaSoft in Kathmandu. Tell us what you are building, the timeline and the budget."
            path="/contact"
        />

        <PageHero
            label="Contact"
            title="Tell us what you are building."
            lead="A short note is enough. Who you are, what the business needs, and the decision you are trying to make."
            index="05"
        />

        <section class="section section--tight">
            <div class="container contact-grid">
                <div class="contact-intro">
                    <p class="chip">
                        <span class="chip__dot" aria-hidden="true"></span>
                        "New business"
                    </p>
                    <p class="contact-intro__lead">
                        "We reply to every serious enquiry. If the project is not a fit, we will say so and point you somewhere better."
                    </p>

                    <dl class="contact-facts">
                        <div>
                            <dt class="label">"Email"</dt>
                            <dd>
                                <a class="link-line" href=format!("mailto:{EMAIL}")>{EMAIL}</a>
                            </dd>
                        </div>
                        <div>
                            <dt class="label">"Studio"</dt>
                            <dd>
                                <a href=MAPS target="_blank" rel="noreferrer">{ADDRESS}</a>
                            </dd>
                        </div>
                        <div>
                            <dt class="label">"Phone"</dt>
                            <dd>
                                <a href=PHONE_PRIMARY_HREF>{PHONE_PRIMARY}</a>
                                <a href=PHONE_SECONDARY_HREF>{PHONE_SECONDARY}</a>
                            </dd>
                        </div>
                        <div>
                            <dt class="label">"Hours"</dt>
                            <dd>"Sunday – Friday, 10:00 – 18:00 NPT"</dd>
                        </div>
                    </dl>
                </div>

                <form
                    class="contact-form"
                    action=format!("mailto:{EMAIL}")
                    method="post"
                    enctype="text/plain"
                >
                    <div class="field-group">
                        <label class="field-label" for="name">"Name"</label>
                        <input
                            class="field"
                            id="name"
                            name="name"
                            type="text"
                            autocomplete="name"
                            required
                        />
                    </div>

                    <div class="field-group">
                        <label class="field-label" for="email">"Email"</label>
                        <input
                            class="field"
                            id="email"
                            name="email"
                            type="email"
                            autocomplete="email"
                            required
                        />
                    </div>

                    <div class="field-group">
                        <label class="field-label" for="company">"Company"</label>
                        <input
                            class="field"
                            id="company"
                            name="company"
                            type="text"
                            autocomplete="organization"
                        />
                    </div>

                    <div class="field-group">
                        <label class="field-label" for="budget">"Budget"</label>
                        <select class="field" id="budget" name="budget">
                            <option value="">"Not sure yet"</option>
                            <option value="under-50k">"Under NPR 50,000"</option>
                            <option value="50-150k">"NPR 50,000 – 150,000"</option>
                            <option value="150-500k">"NPR 150,000 – 500,000"</option>
                            <option value="500k-plus">"NPR 500,000+"</option>
                        </select>
                    </div>

                    <div class="field-group field-group--full">
                        <label class="field-label" for="message">"What are you building?"</label>
                        <textarea
                            class="field field--area"
                            id="message"
                            name="message"
                            rows="5"
                            required
                        ></textarea>
                    </div>

                    <div class="contact-form__footer">
                        <p class="contact-form__note">
                            "This opens your email client. A Rust server-side handler replaces it in Phase 3."
                        </p>
                        <button type="submit" class="btn btn--solid">
                            <span>"Send enquiry"</span>
                            <span class="btn__arrow" aria-hidden="true">"↗"</span>
                        </button>
                    </div>
                </form>
            </div>
        </section>
    }
}
