use leptos::prelude::*;
use leptos_router::components::A;

use crate::components::logo::Logo;
use crate::data::services::SERVICES;
use crate::data::site::{
    ADDRESS, EMAIL, ESTABLISHED, FACEBOOK, LEGAL_NAME, MAPS, NAV, PHONE_PRIMARY,
    PHONE_PRIMARY_HREF, PHONE_SECONDARY, PHONE_SECONDARY_HREF, REG_NO,
};

const YEAR: u16 = 2026;

#[component]
pub fn SiteFooter() -> impl IntoView {
    view! {
        <footer class="footer">
            <div class="container">
                <div class="footer__grid">
                    <div class="footer__brand">
                        <Logo size="footer"/>
                        <p class="footer__blurb">
                            "A Kathmandu digital studio building websites, commerce and digital experiences for businesses ready to make their next move."
                        </p>
                        <p class="footer__fact">
                            <span class="footer__dot" aria-hidden="true"></span>
                            "Established " {ESTABLISHED.to_string()} " — Kathmandu, Nepal"
                        </p>
                    </div>

                    <div class="footer__column">
                        <p class="label">"Index"</p>
                        <ul class="footer__list">
                            {NAV
                                .iter()
                                .map(|item| {
                                    view! {
                                        <li>
                                            <A href=item.href attr:class="footer__link">
                                                {item.label}
                                            </A>
                                        </li>
                                    }
                                })
                                .collect_view()}
                            <li>
                                <A href="/privacy" attr:class="footer__link">"Privacy"</A>
                            </li>
                        </ul>
                    </div>

                    <div class="footer__column">
                        <p class="label">"Services"</p>
                        <ul class="footer__list">
                            {SERVICES
                                .iter()
                                .take(5)
                                .map(|service| {
                                    let href = format!("/services/{}", service.slug);
                                    view! {
                                        <li>
                                            <A href=href attr:class="footer__link">
                                                {service.title}
                                            </A>
                                        </li>
                                    }
                                })
                                .collect_view()}
                        </ul>
                    </div>

                    <div class="footer__column">
                        <p class="label">"New business"</p>
                        <ul class="footer__list">
                            <li>
                                <a class="footer__link footer__link--strong" href=format!("mailto:{EMAIL}")>
                                    {EMAIL}
                                </a>
                            </li>
                            <li>
                                <a class="footer__link" href=PHONE_PRIMARY_HREF>
                                    {PHONE_PRIMARY}
                                </a>
                            </li>
                            <li>
                                <a class="footer__link" href=PHONE_SECONDARY_HREF>
                                    {PHONE_SECONDARY}
                                </a>
                            </li>
                            <li>
                                <a class="footer__link footer__link--quiet" href=MAPS target="_blank" rel="noreferrer">
                                    {ADDRESS}
                                </a>
                            </li>
                        </ul>
                        <div class="footer__socials">
                            <a href=FACEBOOK target="_blank" rel="noreferrer">"Facebook"</a>
                            <a href=format!("mailto:{EMAIL}")>"Email"</a>
                        </div>
                    </div>
                </div>

                <div class="footer__legal">
                    <p>
                        "© " {YEAR.to_string()} " " {LEGAL_NAME} " · Registered in Nepal, No. " {REG_NO}
                    </p>
                    <div class="footer__legal-links">
                        <A href="/privacy">"Privacy policy"</A>
                        <a href="#top">"Back to top ↑"</a>
                    </div>
                </div>

                <div class="footer__wordmark" aria-hidden="true">
                    <span>"Megasoft"</span>
                </div>
            </div>
        </footer>
    }
}
