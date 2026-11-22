use leptos::prelude::*;
use leptos_meta::{Link as MetaLink, Meta, Title};

use crate::data::site::{NAME, SITE_URL};

#[component]
pub fn PageMeta(
    #[prop(into)] title: String,
    #[prop(into)] description: String,
    #[prop(into)] path: String,
) -> impl IntoView {
    let canonical = format!("{SITE_URL}{path}");
    let og_image = format!("{SITE_URL}/logo.png");

    view! {
        <Title text=title.clone()/>
        <Meta name="description" content=description.clone()/>
        <Meta name="author" content=NAME/>
        <Meta property="og:type" content="website"/>
        <Meta property="og:site_name" content=NAME/>
        <Meta property="og:title" content=title.clone()/>
        <Meta property="og:description" content=description.clone()/>
        <Meta property="og:url" content=canonical.clone()/>
        <Meta property="og:image" content=og_image/>
        <Meta name="twitter:card" content="summary_large_image"/>
        <Meta name="twitter:title" content=title/>
        <Meta name="twitter:description" content=description/>
        <MetaLink rel="canonical" href=canonical/>
    }
}
