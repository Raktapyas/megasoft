# MegaSoft Design System

**Status:** Phase 2 foundation  
**Source of truth:** this document, implemented in `style/`  
**Reference:** Umbra agency system (dark, editorial, one type scale, one easing curve)  
**Stack:** Rust + Leptos 0.8 + WebAssembly. HTML and CSS only for structure and styling.

---

## 1. Principles

1. **One system, not one page.** Every route uses the same grid, type scale, tokens and easing curve.
2. **Editorial, not decorative.** Type, rules and spacing carry the design. Effects are subordinate to reading.
3. **Restraint is the premium signal.** One accent, one display family, one motion vocabulary.
4. **Content before choreography.** No animation compensates for weak copy or low-resolution images.
5. **Accessible by default.** Contrast, focus, keyboard, reduced motion and semantic HTML are not optional.
6. **Performance is design.** Transform/opacity only, no layout thrash, no JS animation libraries.

---

## 2. Colour

| Token | Value | Role |
|---|---|---|
| `--ink` | `#000000` | Page ground (true black) |
| `--ink-soft` | `#0C0C0F` | Raised surface |
| `--ink-lift` | `#141418` | Higher surface / wells |
| `--pewter` | `#2A2A31` | Borders at full strength, scrollbar |
| `--ivory` | `#FFFFFF` | Primary text and solid controls |
| `--ivory-dim` | `#C9C9CE` | Secondary text on dark |
| `--slate` | `#8B8B93` | Muted body text, metadata |
| `--accent` | `#C9A227` | Brass accent: rules, figures, one CTA state |
| `--accent-deep` | `#DCB434` | Hover / focus accent |
| `--hairline` | `rgba(255,255,255,0.09)` | Default 1px rule |
| `--hairline-strong` | `rgba(255,255,255,0.14)` | Hover / active rule |

### Contrast rules

- Body text: `--slate` on `--ink` = **6.21:1** (passes AA).
- Primary text: `--ivory` on `--ink` = **21:1**.
- Accent: `--accent` on `--ink` = **8.68:1**.
- **Never use `white/25`–`white/35` for readable text.** Those are 2.03:1–3.00:1 and fail AA.
- Quiet metadata uses `--slate` or `white/65` (8.63:1), never lighter than `white/45` (4.43:1, still below AA for normal text).
- Large display text only may use `white/40` when it is intentionally atmospheric and duplicated elsewhere in accessible text.

---

## 3. Typography

**Family:** Inter Tight (self-hosted variable WOFF2), fallback `-apple-system`, `SF Pro Display`, `Helvetica Neue`, Arial, sans-serif.

| Style | Size / line-height / tracking / weight | Use |
|---|---|---|
| Display 1 | `clamp(3.1rem, 7.6vw, 7.2rem)` / `0.95` / `-0.042em` / `600` | Home hero only |
| Display 2 | `clamp(2.35rem, 5vw, 4rem)` / `1.0` / `-0.042em` / `600` | Page titles, section titles |
| Display 3 | `clamp(1.75rem, 3vw, 2.5rem)` / `1.06` / `-0.035em` / `600` | Card and case titles |
| Body large | `clamp(1rem, 1.3vw, 1.15rem)` / `1.65` | Section leads, once per section |
| Body | `1rem` / `1.6` / max `68ch` | Paragraphs |
| Small | `0.8125rem` / `1.5` | Captions, labels, fine print |
| Eyebrow | `0.625rem` / `1` / `0.16em` / `500` uppercase | Section labels |
| Label | `0.5625rem` / `1` / `0.16em` / `500` uppercase | Metadata labels |

Rules:

- Headings are `text-wrap: balance`.
- Display text never exceeds two conceptual lines on mobile.
- Body measure is capped at `68ch`.
- Uppercase is reserved for eyebrows, labels and small metadata — never for headlines or project names.
- No more than six sizes on a page.

---

## 4. Spacing

Scale: `4, 8, 12, 16, 24, 30, 40, 45, 64, 88, 100, 120, 160` px.

| Token | Value |
|---|---|
| `--space-1` | `4px` |
| `--space-2` | `8px` |
| `--space-3` | `12px` |
| `--space-4` | `16px` |
| `--space-5` | `24px` |
| `--space-6` | `30px` |
| `--space-7` | `40px` |
| `--space-8` | `45px` |
| `--space-9` | `64px` |
| `--space-10` | `88px` |
| `--space-11` | `100px` |
| `--space-12` | `120px` |
| `--space-13` | `160px` |

Section rhythm: `clamp(5.5rem, 10vw, 10rem)` top/bottom. No arbitrary values between steps.

---

## 5. Layout and grid

- Shell: `max-width: 1200px`, centred.
- Gutters: `20px` mobile, `40px` tablet, `64px` desktop.
- Grid: 12 columns, `32px` gap desktop, `20px` mobile.
- Breakpoints: `640px`, `1024px`, `1280px`.
- Content measures: `68ch` prose, `620px` lead, `1120px` display.
- Page hero: top padding clears the fixed masthead (`clamp(8.5rem, 13vw, 10.5rem)`); bottom `clamp(3rem, 5vw, 4.5rem)`.
- Every page begins with a skip link and a single `<h1>`.

---

## 6. Components

### Buttons

- Height `52px`, radius `999px`, horizontal padding `24px`, gap `10px`.
- Type: `14px / 500`.
- Solid: ivory background, ink text. Hover: `white/90`, border `white/40`.
- Outline: `white/15` border, `white/[0.03]` fill, ivory-dim text. Hover: `white/35` border, `white/[0.06]` fill.
- Arrow `↗` moves `2px` up/right over `400ms` on hover.
- Focus: 1px `--accent-deep` outline, 4px offset.
- Minimum touch target: `44×44px`.

### Navigation (masthead)

- Fixed, top `18px` desktop / `10px` mobile.
- Bar: `64px` desktop / `58px` mobile, radius `16px` / `14px`, background `rgba(8,8,10,0.72)`, `backdrop-filter: blur(20px)`, hairline border.
- Scrolled state: background `rgba(8,8,10,0.9)`, border `white/14`.
- Notched tab under the logo: `184px × 24px` desktop, `152px × 18px` mobile.
- Desktop links: `14px`, slate → ivory, 1px underline grows from left.
- Mobile: full-screen dialog, `clip-path` reveal, display-size links, visible close control, Escape closes, body scroll locked.
- A scrim is mandatory: page text must never collide with the bar.

### Cards and index rows

- Cards: `--ink-soft`, 1px hairline, radius `16px`, no shadow.
- Index rows: image thumb, name, year, discipline; hairline between rows; hover reveals image/clip.
- Never use a grid of equal cards where an index communicates more.

### Fields

- Underline only: 1px `white/12`, transparent ground, `15px` text.
- Placeholder `white/25` is allowed only for placeholders, never labels.
- Focus border `--accent`; error uses a plain sentence, not red alone.
- Labels are always visible; no placeholder-only fields.

### Chips and labels

- Chip: pill, hairline border, `white/[0.03]` fill, `11.5px` slate.
- Label: `9px` uppercase, `0.16em`, slate or `white/65`.

### Links

- Inline links use a 1px line that scales from right to left on hover.
- External links append `↗` and open in a new tab with `rel="noreferrer"`.

---

## 7. Image treatments

- Project media: `3:2` aspect ratio, `object-fit: cover`.
- Default grade: `filter: grayscale(0.08) contrast(1.02) brightness(0.96)`.
- Hover: scale `1.03`, `700ms` Expo; image returns on leave.
- Reveal: `clip-path: inset(0 0 100% 0)` → `inset(0)`, `1200ms` Expo.
- No drop shadows on images. Separate with hairlines or surface contrast.
- Minimum export: `1600×1000` for cards, `2400×1600` for full-bleed, with `srcset`.
- Alt text describes the work, not "image of".

---

## 8. Motion

### Rules

- One easing curve: `--ease-expo: cubic-bezier(0.16, 1, 0.3, 1)`.
- Duration scale: `180ms` (micro), `320ms` (state), `550ms` (link/underline), `1000ms` (reveal), `1200ms` (media clip).
- Animate `transform` and `opacity` only.
- Maximum two scroll-driven effects per viewport.
- One signature sequence per site. Everything else is quiet.
- Reduced motion is the first path written, not a patch.

### Allowed techniques

- CSS transitions and keyframes.
- CSS scroll-driven animations (`animation-timeline: view()` / `scroll()`).
- `clip-path` reveals.
- `@starting-style` for entry states.
- SVG `feTurbulence` for static grain.
- View Transitions where supported, with a no-transition fallback.

### Forbidden

- JavaScript animation libraries (GSAP, Lenis, Motion, Framer Motion).
- Continuous parallax on text.
- Autoplaying carousels.
- Animation that blocks reading or delays LCP.
- Cursor-following effects on touch or reduced-motion.

### Reduced motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 9. Accessibility

- WCAG 2.2 AA minimum.
- Semantic landmarks: `header`, `nav`, `main`, `footer`.
- Skip link is the first focusable element.
- Visible focus ring on every interactive element.
- `aria-expanded` / `aria-controls` on the menu button; Escape closes.
- Dialog has an accessible name; focus is moved into it and returned on close.
- Images: meaningful alt text; decorative images `alt=""`.
- Form errors are announced in text and linked with `aria-describedby`.
- No information conveyed by colour alone.
- Touch targets at least `44×44px`.

---

## 10. Implementation map

| Concern | File |
|---|---|
| Tokens | `style/tokens.css` |
| Reset, typography, accessibility | `style/base.css` |
| Shell, grid, sections | `style/layout.css` |
| Buttons, masthead, cards, fields, media | `style/components.css` |
| Reveals, marquee, reduced motion | `style/motion.css` |
| Entry point | `style/main.css` |
| Components | `src/components/` |
| Pages | `src/pages/` |
| Content data | `src/data/` |

No Tailwind, no Node, no JavaScript application code.
