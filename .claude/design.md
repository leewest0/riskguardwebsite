# design.md
# Divinity-Agent — UI Design System
# Version: 1.2.2

---

## Colour Palette

### Primary / Accent

| Name | Hex / Value | CSS token | Usage |
|---|---|---|---|
| Accent | #1F4DC4 | `--color-accent` | Buttons, links, active states, icon backgrounds |
| Accent bright | #1F4DC4 | `--color-accent-bright` | Hover states, eyebrow tags, gradient highlights |
| Teal | #0CCFB0 | — | Secondary highlights, success states |
| Purple | #A855F7 | — | GDPR framework badge |

### Neutral (Dark Palette — dark-only design)

| Name | Hex | CSS token / Tailwind | Usage |
|---|---|---|---|
| Navy (bg) | #0a0f1e | `--color-navy` / `bg-navy` | Page background |
| Navy mid | #0d1526 | `--color-navy-mid` / `bg-navy-mid` | Alternating section backgrounds |
| Navy light | #111827 | `--color-navy-light` / `bg-navy-light` | Card backgrounds |
| Text primary | #FFFFFF | `text-white` | Headings, key labels |
| Text secondary | #D1D5DB | `text-gray-300` | Body paragraphs |
| Text muted | #6B7280 | `text-gray-500` | Captions, metadata, subtext |
| Border subtle | rgba(255,255,255,0.08) | `border-white/8` | Card borders, section dividers |
| Border accent hover | rgba(79,110,247,0.30) | `border-accent/30` | Card hover state borders |

### Semantic

| Name | Hex | Usage |
|---|---|---|
| Success | #0CCFB0 | Positive states, compliance confirmations |
| Warning | #FBB024 | Caution, pending states |
| Error | #EF4444 | Errors, destructive actions |
| Info | #4F6EF7 | Informational messages |

### Off-Brand Colours — Never Use

- No pure black (#000000) — use `--color-navy` (#0a0f1e) instead
- No light/white backgrounds — this is a dark-only design
- No Bootstrap blue (#0d6efd)
- No colours outside this palette — don't introduce new hex values without updating this file

---

## Typography

**Sans-serif font:** DM Sans — loaded via `next/font/google` as CSS variable `--font-sans`
**Serif font:** Instrument Serif — loaded via `next/font/google` as CSS variable `--font-serif`
**Monospace font:** System stack (code blocks only)

**CSS usage:** `font-sans` → DM Sans, `font-serif` → Instrument Serif (set in `@theme` via `globals.css`)

### Type Scale

| Role | Size | Weight | Line height | Font | Usage |
|---|---|---|---|---|---|
| H1 hero | `clamp(48px, 7vw, 80px)` | 400 | 1.05 | Serif | Landing page hero headline |
| H1 page | `clamp(40px, 6.5vw, 72px)` | 400 | 1.08 | Serif | About/interior page heroes |
| H2 section | `clamp(32px, 5vw, 52px)` | 400 | 1.1 | Serif | Section headings |
| H3 card | 18–20px | 600 | 1.3 | Sans | Card/feature headings |
| Body large | `clamp(16px, 2vw, 19px)` | 300 | 1.65 | Sans | Section intro paragraphs |
| Body | 17px | 300 | 1.75 | Sans | Long-form text blocks |
| Body small | 15px | 300 | 1.6 | Sans | Card body text |
| Caption | 13px | 500 | — | Sans | Labels, badges, fine print |
| Eyebrow tag | 12px | 500 | — | Sans | UPPERCASE + `tracking-widest` above headings |

**Letter spacing:** `-0.02em` on all serif headings.

---

## Spacing System

**Base unit:** 4px (Tailwind default)

All spacing via Tailwind utility classes (`p-8`, `mb-6`, `py-24`, etc.). No custom spacing tokens — use canonical Tailwind values.

---

## Layout & Grid

**Max content width:** 75rem / `max-w-300` (Tailwind token) — used on most sections
**Grid:** CSS Grid for multi-column sections, Flexbox for inline/nav patterns
**Breakpoints:** Tailwind defaults — `sm: 640px`, `md: 768px`, `lg: 1024px`
**Container padding:** `px-6` (24px) on all sections at all breakpoints

---

## Component Patterns

### Buttons

| Variant | Classes | Usage |
|---|---|---|
| Primary CTA | `bg-accent text-white rounded-full px-6 py-3 font-medium` | Main conversion CTA |
| Ghost / text | `text-gray-300 hover:text-white` | Nav links, secondary actions |

- Border radius: `rounded-full` for CTA buttons, `rounded-xl` / `rounded-2xl` for cards
- Never add `:focus-visible` styles that remove outline — always keep accessible focus rings

### Cards

- Background: `bg-navy` or `bg-navy-light`
- Border: `border border-white/8`
- Border radius: `rounded-2xl`
- Padding: `p-8` (32px)
- Hover: `hover:border-accent/30 transition-colors`

### Section eyebrow / tag

```
text-xs font-medium text-accent-bright uppercase tracking-widest mb-4
```

### Gradient accents (accent line on card hover)

```css
background: linear-gradient(90deg, transparent, var(--color-accent), transparent)
```

---

## Iconography

**Current:** Emoji icons (temporary MVP — replace with Lucide React, see backlog)
**Planned:** Lucide React — outline variant for UI, 20px default size
**Rules:**
- All decorative emoji must have `aria-hidden="true"`
- Never mix icon styles in the same view
- Icons must have accessible labels or be `aria-hidden`

---

## Dark Mode

**Supported:** Dark only — no light mode planned for Phase 1
**Implementation:** CSS custom properties via Tailwind v4 `@theme` block in `globals.css`

---

## Animations

- **Scroll reveal:** `FadeUp` component — `IntersectionObserver`, `opacity` + `translateY(24px)` → `0`
- **Hero text:** `animate-fade-up` keyframe class with staggered `animationDelay`
- **Globe:** Cobe v2 RAF loop, 0.0025 rad/frame auto-rotation, drag-to-spin
- All animations must respect `prefers-reduced-motion` (handled in `globals.css`)

---

## Accessibility

- **Contrast ratio:** WCAG AA minimum (4.5:1 for normal text, 3:1 for large text)
- **Focus styles:** Never hidden — always visible, browser default or custom ring
- **Motion:** `prefers-reduced-motion` disables all keyframe animations and FadeUp transitions
- **Touch targets:** Minimum 44×44px for interactive elements
- **Semantic HTML:** Section headings in correct order, landmark roles, `role="list"` on nav lists

---

## What to Avoid

- No light backgrounds — dark navy only throughout
- No off-brand hex values — only colours defined in this palette
- No arbitrary Tailwind bracket values (`max-w-[300px]`) — use canonical tokens
- No Instrument Serif for body text — serif is for headings only
- No removing focus outlines — always style them, never `outline: none` without a replacement
- No font sizes below 13px
- No inline `color:` or `background:` styles for values in the palette — use CSS variables
