pub mod kb;
pub mod matcher;
pub mod storage;
pub mod types;

pub use kb::KNOWLEDGE_BASE;
pub use matcher::{get_response, match_intent};
pub use storage::{load_messages, save_messages, clear_messages};
pub use types::{ChatMessage, Intent};
