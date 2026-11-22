#[derive(Clone, Copy, PartialEq, Eq)]
pub struct Project {
    pub slug: &'static str,
    pub name: &'static str,
    pub category: &'static str,
    pub image: &'static str,
    pub summary: &'static str,
    pub featured: bool,
}

pub const CATEGORIES: [&str; 6] = [
    "All",
    "Corporate",
    "e-Commerce",
    "Tourism",
    "NGO",
    "Educational",
];

pub const PROJECTS: [Project; 17] = [
    Project {
        slug: "classic-cleaners",
        name: "Classic Cleaners",
        category: "Corporate",
        image: "/projects/classic__cleaners__pf.jpg",
        summary: "A confident corporate site for a professional cleaning company, with service booking built into the experience.",
        featured: true,
    },
    Project {
        slug: "amity-carpet",
        name: "Amity Carpet",
        category: "Corporate",
        image: "/projects/amity__carpet__pf.jpg",
        summary: "A refined corporate presence for a carpet and flooring business, built around product imagery.",
        featured: false,
    },
    Project {
        slug: "karnali-mart",
        name: "Karnali Mart",
        category: "e-Commerce",
        image: "/projects/karnali__mart__pf.jpg",
        summary: "An online grocery store bringing Nepali produce — millet, beans, rice and more — to customers nationwide.",
        featured: true,
    },
    Project {
        slug: "heaven-interior",
        name: "Heaven Interior",
        category: "Corporate",
        image: "/projects/heaven__pf.jpg",
        summary: "An interior design showcase built to let the work speak, with an editorial approach to project imagery.",
        featured: true,
    },
    Project {
        slug: "green-light",
        name: "Green Light",
        category: "Corporate",
        image: "/projects/green__light.jpg",
        summary: "A clear, modern corporate website that presents Green Light's organisation and services.",
        featured: false,
    },
    Project {
        slug: "ugratara-organics",
        name: "Ugratara Organics",
        category: "Corporate",
        image: "/projects/ugratara__pf.jpg",
        summary: "A warm, product-led brand site for an organic products business.",
        featured: true,
    },
    Project {
        slug: "skyline-overseas",
        name: "Skyline Overseas",
        category: "Corporate",
        image: "/projects/skyline__pf.jpg",
        summary: "A trustworthy corporate site with service information organised for quick, confident decisions.",
        featured: false,
    },
    Project {
        slug: "niko-lab",
        name: "Niko Lab",
        category: "Corporate",
        image: "/projects/niko__pf.jpg",
        summary: "A precise, professional website for a Kathmandu-based lab, designed around clarity.",
        featured: false,
    },
    Project {
        slug: "hh-treks",
        name: "HH Treks",
        category: "Tourism",
        image: "/projects/hht__pf.jpg",
        summary: "A cinematic trekking and expedition site built around Himalayan imagery and detailed trip pages.",
        featured: true,
    },
    Project {
        slug: "roiels",
        name: "Roiels",
        category: "Corporate",
        image: "/projects/roiels__pf.jpg",
        summary: "A minimal corporate identity online, with strong typography and a disciplined layout.",
        featured: true,
    },
    Project {
        slug: "obelb",
        name: "Obelb",
        category: "e-Commerce",
        image: "/projects/obleb__pf.jpg",
        summary: "A contemporary online store with a clean catalogue and a frictionless shopping flow.",
        featured: false,
    },
    Project {
        slug: "study-affairs",
        name: "Study Affairs",
        category: "Educational",
        image: "/projects/study__afairs__pf.jpg",
        summary: "An educational consultancy website that makes destinations, courses and next steps easy to navigate.",
        featured: false,
    },
    Project {
        slug: "pahi-investment",
        name: "Pahi Investment",
        category: "Corporate",
        image: "/projects/pahi__pf.jpg",
        summary: "A composed corporate website for an investment company, built on clarity and confidence.",
        featured: false,
    },
    Project {
        slug: "rima-sewa-samaj",
        name: "Rima Sewa Samaj",
        category: "NGO",
        image: "/projects/rima__pf.jpg",
        summary: "A community-focused website that gives an NGO a clear platform for its work and mission.",
        featured: false,
    },
    Project {
        slug: "ritika-bags",
        name: "Ritika Bags",
        category: "Corporate",
        image: "/projects/ritikabag__pf.jpg",
        summary: "A product-focused brand site for a bag retailer, built around visual merchandising.",
        featured: false,
    },
    Project {
        slug: "sagarmatha-pratisthan-nepal",
        name: "Sagarmatha Pratisthan Nepal",
        category: "NGO",
        image: "/projects/spn__pf.jpg",
        summary: "An institutional NGO website with a clear structure for programmes, people and purpose.",
        featured: false,
    },
    Project {
        slug: "royal-home-decoration",
        name: "Royal Home Decoration",
        category: "e-Commerce",
        image: "",
        summary: "An e-commerce build for a home decoration business, focused on products and simple purchasing.",
        featured: false,
    },
];

pub fn find_project(slug: &str) -> Option<Project> {
    PROJECTS.iter().copied().find(|project| project.slug == slug)
}

pub fn featured_projects() -> impl Iterator<Item = Project> {
    PROJECTS.iter().copied().filter(|project| project.featured)
}

pub fn next_project(slug: &str) -> Project {
    let index = PROJECTS
        .iter()
        .position(|project| project.slug == slug)
        .unwrap_or(0);
    PROJECTS[(index + 1) % PROJECTS.len()]
}
