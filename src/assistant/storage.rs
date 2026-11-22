use crate::assistant::types::ChatMessage;
#[cfg(feature = "hydrate")]
use wasm_bindgen::JsValue;

#[cfg(feature = "hydrate")]
const STORAGE_KEY: &str = "megasoft_assistant_messages";

#[cfg(feature = "hydrate")]
pub fn save_messages(messages: &[ChatMessage]) {
    if let Some(window) = web_sys::window() {
        if let Ok(Some(storage)) = window.local_storage() {
            // Serialize messages to a simple format: "id|is_user|timestamp|text" per line
            let mut data = String::new();
            for msg in messages {
                // Escape newlines in text
                let escaped_text = msg.text.replace('\n', "\\n");
                data.push_str(&format!("{}|{}|{}|{}\n", msg.id, msg.is_user, msg.timestamp, escaped_text));
            }
            let _ = storage.set_item(STORAGE_KEY, &data);
        }
    }
}

#[cfg(feature = "hydrate")]
pub fn load_messages() -> Vec<ChatMessage> {
    if let Some(window) = web_sys::window() {
        if let Ok(Some(storage)) = window.local_storage() {
            if let Ok(Some(data)) = storage.get_item(STORAGE_KEY) {
                let mut messages = Vec::new();
                for line in data.lines() {
                    let parts: Vec<&str> = line.splitn(4, '|').collect();
                    if parts.len() == 4 {
                        let id = parts[0].parse::<u64>().unwrap_or(0);
                        let is_user = parts[1] == "true";
                        let timestamp = parts[2].parse::<u64>().unwrap_or(0);
                        let text = parts[3].replace("\\n", "\n");
                        messages.push(ChatMessage {
                            id,
                            text,
                            is_user,
                            timestamp,
                        });
                    }
                }
                return messages;
            }
        }
    }
    Vec::new()
}

#[cfg(feature = "hydrate")]
pub fn clear_messages() {
    if let Some(window) = web_sys::window() {
        if let Ok(Some(storage)) = window.local_storage() {
            let _ = storage.remove_item(STORAGE_KEY);
        }
    }
}

#[cfg(not(feature = "hydrate"))]
pub fn save_messages(_messages: &[ChatMessage]) {}

#[cfg(not(feature = "hydrate"))]
pub fn load_messages() -> Vec<ChatMessage> {
    Vec::new()
}

#[cfg(not(feature = "hydrate"))]
pub fn clear_messages() {}

#[cfg(feature = "hydrate")]
fn _use_jsvalue() -> JsValue {
    JsValue::NULL
}
