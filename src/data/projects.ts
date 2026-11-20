export type ProjectCategory =
  | "Corporate"
  | "e-Commerce"
  | "Tourism"
  | "NGO"
  | "Educational";

export type Project = {
  slug: string;
  name: string;
  category: ProjectCategory;
  image?: string;
  liveUrl?: string;
  summary: string;
  description: string[];
  scope: string[];
  featured?: boolean;
  monogram?: string;
};

export const categories: Array<ProjectCategory | "All"> = [
  "All",
  "Corporate",
  "e-Commerce",
  "Tourism",
  "NGO",
  "Educational",
];

export const projects: Project[] = [
  {
    slug: "classic-cleaners",
    name: "Classic Cleaners",
    category: "Corporate",
    image: "/projects/classic__cleaners__pf.jpg",
    liveUrl: "https://classiccleaners.com.au/",
    summary:
      "A confident corporate site for a professional cleaning company, with service booking built into the experience.",
    description: [
      "Classic Cleaners needed a website that reflected the professionalism of its service. The result leads with a clear promise, then guides visitors through the company's cleaning services and into a booking flow.",
      "The build pairs a strong visual identity with a straightforward content structure, so the team can keep services, imagery and enquiries current.",
    ],
    scope: ["Website design", "Front-end development", "CMS", "Responsive build"],
    featured: true,
  },
  {
    slug: "amity-carpet",
    name: "Amity Carpet",
    category: "Corporate",
    image: "/projects/amity__carpet__pf.jpg",
    liveUrl: "https://amitycarpet.com/",
    summary:
      "A refined corporate presence for a carpet and flooring business, built around product imagery.",
    description: [
      "Amity Carpet's website presents the business with restraint, letting detailed product imagery and a calm layout carry the brand.",
      "Clean typography, generous spacing and a responsive grid keep the catalogue readable across devices.",
    ],
    scope: ["Website design", "CMS", "Responsive build"],
  },
  {
    slug: "karnali-mart",
    name: "Karnali Mart",
    category: "e-Commerce",
    image: "/projects/karnali__mart__pf.jpg",
    liveUrl: "https://karnalimart.com/",
    summary:
      "An online grocery store bringing Nepali produce — millet, beans, rice and more — to customers nationwide.",
    description: [
      "Karnali Mart is an e-commerce store for Nepali agricultural products. The site introduces the range with rich product photography and a storefront built for browsing by category.",
      "Product listing, cart and checkout are supported by an easy-to-manage catalogue, giving the team control over stock and seasonal ranges.",
    ],
    scope: ["E-commerce design", "Storefront development", "Product catalogue", "Responsive build"],
    featured: true,
  },
  {
    slug: "heaven-interior",
    name: "Heaven Interior",
    category: "Corporate",
    image: "/projects/heaven__pf.jpg",
    liveUrl: "https://heavengroup.com.np/",
    summary:
      "An interior design showcase built to let the work speak, with an editorial approach to project imagery.",
    description: [
      "Heaven Interior's website is a visual portfolio for the studio's interior work, pairing large imagery with concise, structured project information.",
      "The interface stays quiet around the photography, with considered typography and a responsive layout that holds its composition on smaller screens.",
    ],
    scope: ["Website design", "CMS", "Responsive build"],
    featured: true,
  },
  {
    slug: "green-light",
    name: "Green Light",
    category: "Corporate",
    image: "/projects/green__light.jpg",
    liveUrl: "https://greenlight.com.np/",
    summary:
      "A clear, modern corporate website that presents Green Light's organisation and services.",
    description: [
      "Green Light's site gives the organisation a professional digital presence: a considered home page, structured service information and a direct route to contact.",
      "The build is responsive throughout and organised so the team can update content without technical support.",
    ],
    scope: ["Website design", "Front-end development", "CMS"],
  },
  {
    slug: "ugratara-organics",
    name: "Ugratara Organics",
    category: "Corporate",
    image: "/projects/ugratara__pf.jpg",
    liveUrl: "https://ugrataraorganics.com/",
    summary:
      "A warm, product-led brand site for an organic products business.",
    description: [
      "Ugratara Organics needed a web presence that felt as considered as its products. The design uses natural tones, generous imagery and clear product storytelling.",
      "The site is structured for easy browsing and built responsively for customers arriving from social media.",
    ],
    scope: ["Website design", "Brand-led UI", "CMS", "Responsive build"],
    featured: true,
  },
  {
    slug: "skyline-overseas",
    name: "Skyline Overseas",
    category: "Corporate",
    image: "/projects/skyline__pf.jpg",
    liveUrl: "https://skylineoverseas.com.np/",
    summary:
      "A trustworthy corporate site with service information organised for quick, confident decisions.",
    description: [
      "Skyline Overseas' website gives the company a clear, credible presence online, with an organised information architecture and straightforward navigation.",
      "Content is presented in scannable blocks, and the responsive build keeps every page usable on mobile.",
    ],
    scope: ["Website design", "CMS", "Responsive build"],
  },
  {
    slug: "niko-lab",
    name: "Niko Lab",
    category: "Corporate",
    image: "/projects/niko__pf.jpg",
    liveUrl: "https://nikolab.com.np/",
    summary:
      "A precise, professional website for a Kathmandu-based lab, designed around clarity.",
    description: [
      "Niko Lab's site takes a systematic approach: clear sections, legible typography and a structure that helps visitors find information quickly.",
      "The responsive build keeps the same calm hierarchy from desktop down to mobile.",
    ],
    scope: ["Website design", "Front-end development", "Responsive build"],
  },
  {
    slug: "hh-treks",
    name: "HH Treks",
    category: "Tourism",
    image: "/projects/hht__pf.jpg",
    liveUrl: "https://heavenlyholidaytrek.com/",
    summary:
      "A cinematic trekking and expedition site built around Himalayan imagery and detailed trip pages.",
    description: [
      "Heavenly Holiday Treks needed a website that could carry the scale of its subject. Full-width mountain photography sets the tone, while trekking, expedition and peak-climbing itineraries are organised into clear pathways.",
      "The result is a responsive, content-rich site that supports trip discovery and direct enquiries.",
    ],
    scope: ["Website design", "CMS", "Trip architecture", "Responsive build"],
    featured: true,
  },
  {
    slug: "roiels",
    name: "Roiels",
    category: "Corporate",
    image: "/projects/roiels__pf.jpg",
    liveUrl: "https://roiels.com/",
    summary:
      "A minimal corporate identity online, with strong typography and a disciplined layout.",
    description: [
      "Roiels' website strips things back: a restrained palette, confident type and a layout built on clear alignment.",
      "The structure gives each section room to breathe while keeping navigation and contact details immediately accessible.",
    ],
    scope: ["Website design", "Front-end development", "Responsive build"],
    featured: true,
  },
  {
    slug: "obelb",
    name: "Obelb",
    category: "e-Commerce",
    image: "/projects/obleb__pf.jpg",
    liveUrl: "https://obelb.com/",
    summary:
      "A contemporary online store with a clean catalogue and a frictionless shopping flow.",
    description: [
      "Obelb's storefront is built around the products: a tidy catalogue, clear product pages and a checkout that stays out of the way.",
      "The design adapts across screens, with a mobile experience that handles browsing and buying with equal care.",
    ],
    scope: ["E-commerce design", "Storefront development", "Responsive build"],
  },
  {
    slug: "study-affairs",
    name: "Study Affairs",
    category: "Educational",
    image: "/projects/study__afairs__pf.jpg",
    liveUrl: "https://studyaffairs.com.np/",
    summary:
      "An educational consultancy website that makes destinations, courses and next steps easy to navigate.",
    description: [
      "Study Affairs works with students planning education abroad. Its website organises destinations, services and guidance into a structure that is easy to follow.",
      "The design balances reassurance with clarity — informative pages, visible contact routes and a responsive build for students browsing on mobile.",
    ],
    scope: ["Website design", "Information architecture", "CMS", "Responsive build"],
  },
  {
    slug: "pahi-investment",
    name: "Pahi Investment",
    category: "Corporate",
    image: "/projects/pahi__pf.jpg",
    summary:
      "A composed corporate website for an investment company, built on clarity and confidence.",
    description: [
      "Pahi Investment's site presents the company with a measured, professional tone. Structured content and a restrained visual system keep the focus on the information.",
      "The responsive build maintains legibility and hierarchy across devices.",
    ],
    scope: ["Website design", "CMS", "Responsive build"],
  },
  {
    slug: "rima-sewa-samaj",
    name: "Rima Sewa Samaj",
    category: "NGO",
    image: "/projects/rima__pf.jpg",
    summary:
      "A community-focused website that gives an NGO a clear platform for its work and mission.",
    description: [
      "Rima Sewa Samaj's website introduces the organisation, its mission and its activities in an approachable, well-organised layout.",
      "The site is built to be maintained by a small team, with straightforward content sections and a responsive structure.",
    ],
    scope: ["Website design", "CMS", "Responsive build"],
  },
  {
    slug: "ritika-bags",
    name: "Ritika Bags",
    category: "Corporate",
    image: "/projects/ritikabag__pf.jpg",
    summary:
      "A product-focused brand site for a bag retailer, built around visual merchandising.",
    description: [
      "Ritika Bags' website puts the collection first, using consistent product imagery and a simple, elegant browsing structure.",
      "The layout adapts cleanly from desktop to mobile, keeping product detail and contact routes easy to reach.",
    ],
    scope: ["Website design", "Product showcase", "Responsive build"],
  },
  {
    slug: "sagarmatha-pratisthan-nepal",
    name: "Sagarmatha Pratisthan Nepal",
    category: "NGO",
    image: "/projects/spn__pf.jpg",
    summary:
      "An institutional NGO website with a clear structure for programmes, people and purpose.",
    description: [
      "Sagarmatha Pratisthan Nepal's website gives the organisation a credible digital home, with content organised around its identity, programmes and contact information.",
      "The design is calm and legible, supported by a responsive build and an editable content structure.",
    ],
    scope: ["Website design", "CMS", "Responsive build"],
  },
  {
    slug: "royal-home-decoration",
    name: "Royal Home Decoration",
    category: "e-Commerce",
    summary:
      "An e-commerce build for a home decoration business, focused on products and simple purchasing.",
    description: [
      "Royal Home Decoration's site translates a physical home decoration business into an online catalogue, with product presentation and a straightforward route to purchase.",
      "The result is responsive and easy to update, giving the team a foundation they can grow with.",
    ],
    scope: ["E-commerce design", "Storefront development", "Responsive build"],
    monogram: "RHD",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return projects[0];
  return projects[(index + 1) % projects.length];
}
