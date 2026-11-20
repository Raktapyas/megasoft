export const site = {
  legalName: "MegaSoft Pvt. Ltd.",
  name: "MegaSoft",
  suffix: "Nepal",
  tagline: "Digital studio, Kathmandu",
  established: 2011,
  regNo: "80228/067/068",
  address: "Thapagaun, New-Baneshwor, Kathmandu, Nepal",
  phonePrimary: "+977 9851054917",
  phonePrimaryHref: "tel:+9779851054917",
  phoneSecondary: "+977 9803520347",
  phoneSecondaryHref: "tel:+9779803520347",
  email: "info@megasoft.net.np",
  emailSecondary: "kiranpahadi@gmail.com",
  whatsapp: "https://wa.me/9779851054917",
  facebook: "https://www.facebook.com/wwwmegasoft",
  maps: "https://www.google.com/maps/place/Megasoft+Pvt.+Ltd./@27.6918072,85.3295501,17z/data=!4m8!3m7!1s0x39eb199615808333:0x13300df86d657228!8m2!3d27.6918025!4d85.332125!9m1!1b1!16s%2Fg%2F11d_9fsl_x?entry=ttu",
  description:
    "MegaSoft is a leading web design company in Nepal based in Kathmandu, providing professional website development services for businesses of all sizes. We create modern, responsive and SEO-friendly websites that help your business grow online.",
};

export const nav = [
  { label: "Home", to: "/" },
  { label: "Work", to: "/work" },
  { label: "Studio", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

export const socials = [
  { label: "Facebook", href: site.facebook },
  { label: "WhatsApp", href: site.whatsapp },
  { label: "Email", href: `mailto:${site.email}` },
];

export const verifiedFacts = [
  { label: "Founded", value: "2011", note: "Kathmandu, Nepal" },
  { label: "Registered", value: "80228/067/068", note: "Government of Nepal" },
  { label: "Studio", value: "New-Baneshwor", note: "Thapagaun, Kathmandu" },
  { label: "Disciplines", value: "Design + Technology", note: "One integrated team" },
];
