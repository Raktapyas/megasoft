use crate::assistant::types::{Intent, KnowledgeEntry};

pub static KNOWLEDGE_BASE: &[KnowledgeEntry] = &[
    KnowledgeEntry {
        intent: Intent::Greeting,
        keywords: &["hello", "hi", "hey", "greetings", "good morning", "good afternoon", "good evening"],
        response: "Hello! Welcome to MegaSoft. I'm here to help you learn about our services, portfolio, and how we can help your business grow online. How can I assist you today?",
    },
    KnowledgeEntry {
        intent: Intent::Services,
        keywords: &["services", "what do you do", "what do you offer", "capabilities", "what can you do", "offerings"],
        response: "MegaSoft offers nine core services:\n\n1. Website Design & Development\n2. CMS Development\n3. E-commerce Development\n4. Responsive Web Design\n5. Domain Registration\n6. Web Hosting\n7. SEO\n8. Social Media Marketing\n9. Video Animation & Advertising\n\nWe handle everything from strategy to launch and ongoing support. Which service would you like to know more about?",
    },
    KnowledgeEntry {
        intent: Intent::WebsiteDesign,
        keywords: &["website design", "web design", "website development", "web development", "build a website", "create a website", "make a website"],
        response: "We design and build websites that add credibility to your business — clear in structure, confident in character and engineered to perform.\n\nEvery project starts with the business, not the template. We research your audience, map the content and define what the website needs to achieve before a single layout is drawn. From there we develop an original visual direction and build it with modern front-end technology.\n\nWhether you need a static brochure site, a dynamic platform, a CMS or a full e-commerce build, the result is the same: a fast, responsive website your team can maintain and your customers can trust.",
    },
    KnowledgeEntry {
        intent: Intent::Ecommerce,
        keywords: &["ecommerce", "e-commerce", "online store", "online shop", "shopping", "store", "sell online"],
        response: "An online store has to do two jobs at once: make the products desirable, and make the path to checkout simple. We build for both.\n\nProduct pages are designed around the decisions a customer actually makes — fit, detail, price, delivery. Category structure, search and filters are planned from real catalogues, not a demo store.\n\nBehind the storefront, the catalogue, orders and enquiries are organised so the team can run day-to-day operations without friction.",
    },
    KnowledgeEntry {
        intent: Intent::Seo,
        keywords: &["seo", "search engine", "google ranking", "search visibility", "search optimization", "search engine optimization"],
        response: "SEO is not a trick applied at the end. It starts with a technically clean website and content that answers what your customers are actually searching for.\n\nWe begin with an audit of the existing site or, on a new build, structure the information architecture around search intent from the start. Titles, headings, metadata and internal links are planned page by page.\n\nThen we measure: which queries bring people in, which pages convert, and where the gaps are. Improvements are made iteratively rather than promised in a single report.",
    },
    KnowledgeEntry {
        intent: Intent::Hosting,
        keywords: &["hosting", "web hosting", "server", "host", "maintain", "maintenance"],
        response: "A good website deserves a stable home. We provide managed hosting with the technical upkeep handled, so your site stays fast and secure.\n\nWe set up hosting that suits the size and traffic of the project, configure SSL and email, and put monitoring and backups in place. Updates are applied without breaking the build.\n\nIf you are moving from an existing provider, we handle the migration — files, databases and email — and check everything is working before switching over.",
    },
    KnowledgeEntry {
        intent: Intent::Domain,
        keywords: &["domain", "domain registration", "domain name", "buy domain", "register domain"],
        response: "Your domain is the foundation of your online presence. We help you choose a name that fits the business and set it up correctly from day one.\n\nWe research availability across relevant extensions, advise on naming that is easy to say and remember, and handle registration and renewal so nothing lapses unexpectedly.\n\nConfiguration matters as much as registration: DNS records, professional email, SSL and redirects are set up so the site and its mail work reliably.",
    },
    KnowledgeEntry {
        intent: Intent::Cms,
        keywords: &["cms", "content management", "wordpress", "manage content", "content management system"],
        response: "A well-built content management system turns your website from a fixed brochure into something your team can grow, week after week.\n\nWe build custom CMS solutions and work with established platforms depending on what the project actually needs. The goal is always the same: editing should feel obvious. Pages, services, projects and news are structured into reusable sections that keep the design intact.\n\nEditors get a clear interface, sensible roles and documentation. Your team publishes on its own schedule, and the site stays consistent as it grows.",
    },
    KnowledgeEntry {
        intent: Intent::SocialMedia,
        keywords: &["social media", "facebook", "instagram", "advertising", "ads", "marketing", "social marketing"],
        response: "Social platforms reward clarity and consistency. We create the design, copy and targeting that put your offer in front of an audience that can act on it.\n\nOur work covers the full campaign: the idea, the creative, the copy and the setup. Facebook and Instagram advertising are planned around a specific objective — enquiries, store visits or sales — rather than reach for its own sake.\n\nAudiences are tested and refined, creative is refreshed before it tires, and performance is reported in terms the business can use.",
    },
    KnowledgeEntry {
        intent: Intent::VideoAnimation,
        keywords: &["video", "animation", "motion", "video ad", "animated", "motion graphics"],
        response: "Video is the fastest way to explain what a business does. We concept, design and produce animation and video ads built for the platforms they will run on.\n\nEach piece begins with a script and storyboard, so the story is resolved before production. Animation, typography and sound are then used with restraint — enough motion to hold attention, never so much that the message gets lost.\n\nDeliverables are exported in the formats each channel needs, from square social cuts to widescreen brand films.",
    },
    KnowledgeEntry {
        intent: Intent::ResponsiveDesign,
        keywords: &["responsive", "mobile", "mobile friendly", "mobile first", "adaptive"],
        response: "Most visitors will meet your website on a phone. We design the mobile experience first, then let the layout grow into larger screens with intent.\n\nFluid grids, type scales and spacing systems replace fixed layouts, so the composition stays balanced from small phones to wide desktop displays. Images are sized and cropped deliberately rather than simply shrunk.\n\nEvery build is tested across modern browsers and devices for layout, touch targets and readability. No horizontal scrolling, no unreadable text, no broken navigation.",
    },
    KnowledgeEntry {
        intent: Intent::Portfolio,
        keywords: &["portfolio", "work", "projects", "examples", "case studies", "showcase", "previous work"],
        response: "We have completed 17 projects across corporate, e-commerce, tourism, education and the social sector. Some of our featured work includes:\n\n- Classic Cleaners — corporate site with booking\n- Karnali Mart — e-commerce grocery store\n- Heaven Interior — interior design showcase\n- Ugratara Organics — organic products brand\n- HH Treks — trekking and expedition site\n- Roiels — minimal corporate identity\n\nYou can browse the full portfolio at megasoft.net.np/work.",
    },
    KnowledgeEntry {
        intent: Intent::Contact,
        keywords: &["contact", "email", "phone", "reach", "get in touch", "enquiry", "enquire", "quote", "hire"],
        response: "You can reach us at:\n\nEmail: info@megasoft.net.np\nPhone: +977 9851054917 / +977 9803520347\nAddress: Thapagaun, New-Baneshwor, Kathmandu, Nepal\n\nOr fill out the contact form at megasoft.net.np/contact. We reply to every serious enquiry. If the project is not a fit, we will say so and point you somewhere better.",
    },
    KnowledgeEntry {
        intent: Intent::Location,
        keywords: &["location", "address", "where", "office", "based", "kathmandu", "nepal", "map"],
        response: "MegaSoft is based in Kathmandu, Nepal.\n\nAddress: Thapagaun, New-Baneshwor, Kathmandu, Nepal\nEstablished: 2011\nRegistered in Nepal, No. 80228/067/068\n\nYou can find us on Google Maps by searching 'Megasoft Pvt. Ltd.'",
    },
    KnowledgeEntry {
        intent: Intent::About,
        keywords: &["about", "studio", "company", "who are you", "team", "history", "background", "megasoft"],
        response: "MegaSoft is a Kathmandu digital studio established in 2011. We have been building websites from Kathmandu since 2011, with long-term client relationships and websites still in service today.\n\nDesign and engineering sit together in one studio, and the people who plan the work are the people who ship it. You speak directly with the people doing the work — no layers of account management.\n\nWe are still independent, still in New-Baneshwor, and still building websites that earn attention and hold it.",
    },
    KnowledgeEntry {
        intent: Intent::Process,
        keywords: &["process", "how it works", "how do you work", "workflow", "steps", "methodology", "approach"],
        response: "Our process follows four clear steps:\n\n1. Discovery — The business, the audience, the content and the decision the site has to support.\n2. Direction — Structure, art direction and a visual system that can hold the whole site.\n3. Build — Responsive front-end, content structure and the engineering to make it last.\n4. Launch — Testing, training, hosting and the support that continues after go-live.\n\nThe same four steps on every project, scaled to the work.",
    },
    KnowledgeEntry {
        intent: Intent::Pricing,
        keywords: &["price", "pricing", "cost", "how much", "budget", "rate", "fee", "charge"],
        response: "Pricing depends on the scope and complexity of the project. We work with businesses of all sizes, from small brochure sites to full e-commerce builds.\n\nThe best way to get an accurate estimate is to tell us about your project — the business, the timeline and the decision you are trying to make. Reach out at info@megasoft.net.np or fill out the contact form at megasoft.net.np/contact.",
    },
    KnowledgeEntry {
        intent: Intent::Technologies,
        keywords: &["technology", "tech stack", "what technology", "framework", "tools", "platform"],
        response: "We use modern, proven technologies for every build:\n\n- Responsive front-end with clean, semantic HTML and CSS\n- Content management systems (custom or established platforms)\n- E-commerce storefronts with cart and checkout\n- SEO-friendly structure and performance optimization\n- Managed hosting with SSL, backups and monitoring\n\nEvery site is built to be fast, accessible and easy for your team to maintain.",
    },
    KnowledgeEntry {
        intent: Intent::Unknown,
        keywords: &[],
        response: "I'm not sure I understood that. I can help you with information about:\n\n- Our services (web design, e-commerce, SEO, hosting, etc.)\n- Our portfolio and past projects\n- Contact information and location\n- How we work and our process\n- Pricing and quotes\n\nTry asking one of the suggested questions below, or rephrase your question.",
    },
];
