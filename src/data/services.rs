#[derive(Clone, Copy)]
pub struct Service {
    pub slug: &'static str,
    pub title: &'static str,
    pub short: &'static str,
    pub tag: &'static str,
}

pub const SERVICES: [Service; 9] = [
    Service {
        slug: "website-design-development",
        title: "Website Design & Development",
        short: "Distinctive, fast websites built around your business goals.",
        tag: "Core discipline",
    },
    Service {
        slug: "cms-development",
        title: "CMS Development",
        short: "A website your team can run without calling a developer.",
        tag: "Platform",
    },
    Service {
        slug: "ecommerce-development",
        title: "E-commerce Development",
        short: "Online stores where browsing feels effortless and buying feels obvious.",
        tag: "Commerce",
    },
    Service {
        slug: "responsive-web-design",
        title: "Responsive Web Design",
        short: "One website that holds its character on every screen.",
        tag: "Craft",
    },
    Service {
        slug: "domain-registration",
        title: "Domain Registration",
        short: "The right address, registered and configured properly.",
        tag: "Infrastructure",
    },
    Service {
        slug: "web-hosting",
        title: "Web Hosting",
        short: "Fast, reliable hosting with the maintenance taken care of.",
        tag: "Infrastructure",
    },
    Service {
        slug: "seo",
        title: "SEO",
        short: "Search visibility built on technical clarity and real content.",
        tag: "Growth",
    },
    Service {
        slug: "social-media-marketing",
        title: "Social Media Marketing",
        short: "Campaign-ready creative and targeted advertising that reaches the right people.",
        tag: "Growth",
    },
    Service {
        slug: "video-animation-advertising",
        title: "Video Animation & Advertising",
        short: "Motion that makes a message land, on the feed and on the screen.",
        tag: "Motion",
    },
];

pub fn find_service(slug: &str) -> Option<Service> {
    SERVICES.iter().copied().find(|service| service.slug == slug)
}

pub fn next_service(slug: &str) -> Service {
    let index = SERVICES
        .iter()
        .position(|service| service.slug == slug)
        .unwrap_or(0);
    SERVICES[(index + 1) % SERVICES.len()]
}
