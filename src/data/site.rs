pub const SITE_URL: &str = "https://megasoft.net.np";
pub const LEGAL_NAME: &str = "MegaSoft Pvt. Ltd.";
pub const NAME: &str = "MegaSoft";
pub const TAGLINE: &str = "Digital studio, Kathmandu";
pub const ESTABLISHED: u16 = 2011;
pub const REG_NO: &str = "80228/067/068";
pub const ADDRESS: &str = "Thapagaun, New-Baneshwor, Kathmandu, Nepal";
pub const EMAIL: &str = "info@megasoft.net.np";
pub const PHONE_PRIMARY: &str = "+977 9851054917";
pub const PHONE_PRIMARY_HREF: &str = "tel:+9779851054917";
pub const PHONE_SECONDARY: &str = "+977 9803520347";
pub const PHONE_SECONDARY_HREF: &str = "tel:+9779803520347";
pub const FACEBOOK: &str = "https://www.facebook.com/wwwmegasoft";
pub const MAPS: &str = "https://www.google.com/maps/place/Megasoft+Pvt.+Ltd./@27.6918072,85.3295501,17z";

pub const DESCRIPTION: &str = "MegaSoft is a Kathmandu digital studio building websites, e-commerce and digital experiences for ambitious businesses. Established 2011.";

#[derive(Clone, Copy)]
pub struct NavItem {
    pub label: &'static str,
    pub href: &'static str,
    pub description: &'static str,
}

pub const NAV: [NavItem; 5] = [
    NavItem {
        label: "Home",
        href: "/",
        description: "Studio home",
    },
    NavItem {
        label: "Work",
        href: "/work",
        description: "Selected projects",
    },
    NavItem {
        label: "Studio",
        href: "/about",
        description: "About MegaSoft",
    },
    NavItem {
        label: "Services",
        href: "/services",
        description: "What we do",
    },
    NavItem {
        label: "Contact",
        href: "/contact",
        description: "Start a project",
    },
];

/// The four links shown in the desktop masthead.
pub const PRIMARY_NAV: [NavItem; 3] = [NAV[1], NAV[2], NAV[3]];

pub const FACTS: [(&str, &str); 4] = [
    ("Founded", "2011"),
    ("Portfolio", "17 projects"),
    ("Sectors", "Corporate → NGO"),
    ("Based in", "New-Baneshwor"),
];
