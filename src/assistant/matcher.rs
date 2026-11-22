use crate::assistant::kb::KNOWLEDGE_BASE;
use crate::assistant::types::Intent;

/// Match user input to an intent using keyword matching.
/// Returns the best matching intent or Unknown if no match.
pub fn match_intent(input: &str) -> Intent {
    let input_lower = input.to_lowercase();
    let input_trimmed = input_lower.trim();

    if input_trimmed.is_empty() {
        return Intent::Unknown;
    }

    // Score each entry by number of keyword matches
    let mut best_intent = Intent::Unknown;
    let mut best_score: usize = 0;

    for entry in KNOWLEDGE_BASE {
        if entry.intent == Intent::Unknown {
            continue;
        }
        let mut score = 0;
        for keyword in entry.keywords {
            if input_trimmed.contains(keyword) {
                score += 1;
            }
        }
        if score > best_score {
            best_score = score;
            best_intent = entry.intent;
        }
    }

    if best_score == 0 {
        Intent::Unknown
    } else {
        best_intent
    }
}

/// Get the response for a given intent.
pub fn get_response(intent: Intent) -> &'static str {
    for entry in KNOWLEDGE_BASE {
        if entry.intent == intent {
            return entry.response;
        }
    }
    // Fallback to Unknown
    for entry in KNOWLEDGE_BASE {
        if entry.intent == Intent::Unknown {
            return entry.response;
        }
    }
    "I'm here to help. Please ask about our services, portfolio, or contact information."
}
