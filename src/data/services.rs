#[derive(Clone, Copy)]
pub struct Service {
    pub slug: &'static str,
    pub title: &'static str,
    pub short: &'static str,
    pub lead: &'static str,
    pub body: &'static [&'static str],
    pub includes: &'static [&'static str],
    pub image: &'static str,
    pub image_alt: &'static str,
    pub tag: &'static str,
}

pub const SERVICES: [Service; 9] = [
    Service {
        slug: "website-design-development",
        title: "Website Design & Development",
        short: "Distinctive, fast websites built around your business goals.",
        lead: "We design and build websites that add credibility to your business — clear in structure, confident in character and engineered to perform.",
        body: &[
            "Every project starts with the business, not the template. We research your audience, map the content and define what the website needs to achieve before a single layout is drawn. From there we develop an original visual direction and build it with modern front-end technology.",
            "Whether you need a static brochure site, a dynamic platform, a CMS or a full e-commerce build, the result is the same: a fast, responsive website your team can maintain and your customers can trust.",
        ],
        includes: &[
            "Discovery and content strategy",
            "Art direction and interface design",
            "Front-end and back-end development",
            "SEO-friendly structure and performance",
            "Launch, training and ongoing support",
        ],
        image: "/projects/classic__cleaners__pf.jpg",
        image_alt: "Classic Cleaners website displayed as a portfolio piece",
        tag: "Core discipline",
    },
    Service {
        slug: "cms-development",
        title: "CMS Development",
        short: "A website your team can run without calling a developer.",
        lead: "A well-built content management system turns your website from a fixed brochure into something your team can grow, week after week.",
        body: &[
            "We build custom CMS solutions and work with established platforms depending on what the project actually needs. The goal is always the same: editing should feel obvious. Pages, services, projects and news are structured into reusable sections that keep the design intact.",
            "Editors get a clear interface, sensible roles and documentation. Your team publishes on its own schedule, and the site stays consistent as it grows.",
        ],
        includes: &[
            "Custom CMS or WordPress builds",
            "Reusable page sections and templates",
            "Editor roles and publishing workflows",
            "Media and image optimisation",
            "Documentation and team training",
        ],
        image: "/projects/roiels__pf.jpg",
        image_alt: "Roiels website designed and built by MegaSoft",
        tag: "Platform",
    },
    Service {
        slug: "ecommerce-development",
        title: "E-commerce Development",
        short: "Online stores where browsing feels effortless and buying feels obvious.",
        lead: "An online store has to do two jobs at once: make the products desirable, and make the path to checkout simple. We build for both.",
        body: &[
            "Product pages are designed around the decisions a customer actually makes — fit, detail, price, delivery. Category structure, search and filters are planned from real catalogues, not a demo store.",
            "Behind the storefront, the catalogue, orders and enquiries are organised so the team can run day-to-day operations without friction. The result is a store that is as practical to manage as it is considered to browse.",
        ],
        includes: &[
            "Storefront and product page design",
            "Cart and checkout experience",
            "Payment and delivery integration",
            "Catalogue and order management",
            "Analytics-ready setup",
        ],
        image: "/projects/karnali__mart__pf.jpg",
        image_alt: "Karnali Mart e-commerce storefront",
        tag: "Commerce",
    },
    Service {
        slug: "responsive-web-design",
        title: "Responsive Web Design",
        short: "One website that holds its character on every screen.",
        lead: "Most visitors will meet your website on a phone. We design the mobile experience first, then let the layout grow into larger screens with intent.",
        body: &[
            "Fluid grids, type scales and spacing systems replace fixed layouts, so the composition stays balanced from small phones to wide desktop displays. Images are sized and cropped deliberately rather than simply shrunk.",
            "Every build is tested across modern browsers and devices for layout, touch targets and readability. No horizontal scrolling, no unreadable text, no broken navigation.",
        ],
        includes: &[
            "Mobile-first layout systems",
            "Fluid typography and spacing",
            "Cross-browser quality assurance",
            "Touch and keyboard accessibility",
            "Device performance testing",
        ],
        image: "/projects/green__light.jpg",
        image_alt: "Green Light responsive website",
        tag: "Craft",
    },
    Service {
        slug: "domain-registration",
        title: "Domain Registration",
        short: "The right address, registered and configured properly.",
        lead: "Your domain is the foundation of your online presence. We help you choose a name that fits the business and set it up correctly from day one.",
        body: &[
            "We research availability across relevant extensions, advise on naming that is easy to say and remember, and handle registration and renewal so nothing lapses unexpectedly.",
            "Configuration matters as much as registration: DNS records, professional email, SSL and redirects are set up so the site and its mail work reliably.",
        ],
        includes: &[
            "Domain name research",
            "Registration and renewal",
            "DNS configuration",
            "Business email setup",
            "SSL and redirect configuration",
        ],
        image: "/projects/skyline__pf.jpg",
        image_alt: "Skyline Overseas website",
        tag: "Infrastructure",
    },
    Service {
        slug: "web-hosting",
        title: "Web Hosting",
        short: "Fast, reliable hosting with the maintenance taken care of.",
        lead: "A good website deserves a stable home. We provide managed hosting with the technical upkeep handled, so your site stays fast and secure.",
        body: &[
            "We set up hosting that suits the size and traffic of the project, configure SSL and email, and put monitoring and backups in place. Updates are applied without breaking the build.",
            "If you are moving from an existing provider, we handle the migration — files, databases and email — and check everything is working before switching over.",
        ],
        includes: &[
            "Managed hosting setup",
            "SSL certificates",
            "Backups and uptime monitoring",
            "Core updates and security patches",
            "Migration from an existing host",
        ],
        image: "/projects/niko__pf.jpg",
        image_alt: "Niko Lab website",
        tag: "Infrastructure",
    },
    Service {
        slug: "seo",
        title: "SEO",
        short: "Search visibility built on technical clarity and real content.",
        lead: "SEO is not a trick applied at the end. It starts with a technically clean website and content that answers what your customers are actually searching for.",
        body: &[
            "We begin with an audit of the existing site or, on a new build, structure the information architecture around search intent from the start. Titles, headings, metadata and internal links are planned page by page.",
            "Then we measure: which queries bring people in, which pages convert, and where the gaps are. Improvements are made iteratively rather than promised in a single report.",
        ],
        includes: &[
            "Technical SEO audit",
            "Keyword and intent research",
            "On-page optimisation",
            "Content structure and internal linking",
            "Reporting and iteration",
        ],
        image: "/projects/ugratara__pf.jpg",
        image_alt: "Ugratara Organics brand website",
        tag: "Growth",
    },
    Service {
        slug: "social-media-marketing",
        title: "Social Media Marketing",
        short: "Campaign-ready creative and targeted advertising that reaches the right people.",
        lead: "Social platforms reward clarity and consistency. We create the design, copy and targeting that put your offer in front of an audience that can act on it.",
        body: &[
            "Our work covers the full campaign: the idea, the creative, the copy and the setup. Facebook and Instagram advertising are planned around a specific objective — enquiries, store visits or sales — rather than reach for its own sake.",
            "Audiences are tested and refined, creative is refreshed before it tires, and performance is reported in terms the business can use.",
        ],
        includes: &[
            "Campaign strategy and planning",
            "Ad creative and copywriting",
            "Facebook and Instagram advertising",
            "Audience targeting and testing",
            "Performance reporting",
        ],
        image: "/projects/amity__carpet__pf.jpg",
        image_alt: "Amity Carpet website creative",
        tag: "Growth",
    },
    Service {
        slug: "video-animation-advertising",
        title: "Video Animation & Advertising",
        short: "Motion that makes a message land, on the feed and on the screen.",
        lead: "Video is the fastest way to explain what a business does. We concept, design and produce animation and video ads built for the platforms they will run on.",
        body: &[
            "Each piece begins with a script and storyboard, so the story is resolved before production. Animation, typography and sound are then used with restraint — enough motion to hold attention, never so much that the message gets lost.",
            "Deliverables are exported in the formats each channel needs, from square social cuts to widescreen brand films.",
        ],
        includes: &[
            "Concept and storyboarding",
            "2D animation and motion graphics",
            "Video ad production",
            "Editing, sound and pacing",
            "Platform-ready exports",
        ],
        image: "/projects/obleb__pf.jpg",
        image_alt: "Obelb online store website",
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
