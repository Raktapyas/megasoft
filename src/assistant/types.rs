#[derive(Clone, PartialEq)]
pub struct ChatMessage {
    pub id: u64,
    pub text: String,
    pub is_user: bool,
    pub timestamp: u64,
}

#[derive(Clone, Copy, PartialEq, Eq)]
pub enum Intent {
    Greeting,
    Services,
    WebsiteDesign,
    Ecommerce,
    Seo,
    Hosting,
    Domain,
    Cms,
    SocialMedia,
    VideoAnimation,
    ResponsiveDesign,
    Portfolio,
    Contact,
    Location,
    About,
    Process,
    Pricing,
    Technologies,
    Unknown,
}

#[derive(Clone)]
pub struct KnowledgeEntry {
    pub intent: Intent,
    pub keywords: &'static [&'static str],
    pub response: &'static str,
}
