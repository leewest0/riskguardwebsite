# guidelines.md
# Divinity-Agent — Coding Standards & Guidelines
# Version: 1.2.2

---

## General Principles

- **Readable over clever.** Code is read far more than it is written. If it needs a comment to be understood, it needs to be simpler.
- **Consistent over personal.** Follow the existing patterns in the codebase, even if you'd do it differently. Consistency is more valuable than improvement.
- **Explicit over implicit.** Name things for what they are. Avoid magic.
- **Small, focused units.** Components and functions do one thing. If it needs the word "and" in its name, split it.
- **No unnecessary client components.** Default to server components. Only add `"use client"` when browser APIs (IntersectionObserver, WebGL, scroll state) are genuinely required.

---

## Formatting

**Indentation:** 2 spaces
**Max line length:** 100 characters
**Quotes:** Double quotes for JSX attributes, single quotes for TS/JS strings
**Semicolons:** Always
**Trailing commas:** Always in multi-line
**Formatter:** Prettier (project default)

---

## Naming Conventions

| Context | Convention | Example |
|---|---|---|
| Variables | camelCase | `userEmail`, `isLoading` |
| Functions / components | PascalCase for components, camelCase for functions | `FadeUp`, `getUserById` |
| Constants | SCREAMING_SNAKE_CASE | `CALENDLY_URL`, `FRAMEWORKS` |
| Files — components | PascalCase | `DashboardMockup.tsx`, `Globe.tsx` |
| Files — utilities/config | camelCase | `config.ts` |
| CSS variables | kebab-case | `--color-accent`, `--font-sans` |
| Tailwind tokens | Follow Tailwind conventions | `bg-navy`, `text-accent-bright` |

**Naming rules:**
- Boolean variables start with `is`, `has`, or `can`: `isVisible`, `hasPermission`
- Event handlers start with `handle` or `on`: `handleSubmit`, `onPointerDown`
- No abbreviations except well-known ones (`id`, `url`, `api`, `ref`, `raf`)

---

## Commenting

**When to comment:**
- Non-obvious WHY behind a decision (e.g. why `mix-blend-mode: screen`)
- Workarounds for library quirks (e.g. cobe v2 API migration note)
- Accessibility intent when it isn't obvious from the code

**When NOT to comment:**
- Describing what the code does when the code itself is clear
- Restating the component or function name as a comment above it
- Task context, PR references, or "added for X feature" notes — those belong in git history

---

## React / Next.js Conventions

- Server components are the default — no `"use client"` unless browser APIs are required
- All `"use client"` components are co-located with their route or in `_components/` if shared
- Helper functions inside a page file must be defined ABOVE the `export default` function — Next.js will error otherwise (hoisting issue with server components)
- Use `next/link` for all internal navigation — never `<a href>` for app routes
- Use `next/image` for all `<img>` elements — never raw `<img>` tags
- Never use `<img>` inside `ImageResponse` JSX — that is the one exception where it's required
- Dynamic icon files (`icon.tsx`, `apple-icon.tsx`) use `ImageResponse` from `next/og` — do not add ESLint disable comments for `no-img-element` in these files; the rule doesn't apply inside `ImageResponse`

---

## Tailwind CSS v4 Conventions

- **No arbitrary bracket values** — `max-w-[300px]` is never acceptable. Use canonical Tailwind tokens (`max-w-300` = 75rem) or define a custom token in the `@theme` block in `globals.css`
- **No `tailwind.config.js`** — all customisation lives in `globals.css` via `@theme { }` and `@utility { }`
- Fractional opacity utilities like `bg-white/8`, `border-white/8`, `bg-accent/30` are canonical — use them instead of inline `rgba()` styles where possible
- `shrink-0` not `flex-shrink-0` (deprecated alias)
- `tracking-widest` not `tracking-[0.2em]`

---

## Error Handling

- Never swallow exceptions silently — always surface or rethrow
- Errors exposed to the client must be generic — full details to logs only
- All async operations must have explicit error handling

---

## Version Control

**Branch naming:** `feature/short-description` / `fix/description`
**Commit format:** Conventional Commits

```
feat: add privacy policy page
fix: correct Globe RAF cleanup on unmount
chore: update dependencies
docs: update README with About page
```

- Never commit directly to `main` without review for production-affecting changes
- Never commit `.env.local` or any file containing secrets

---

## What to Avoid

- No `var` in JavaScript — use `const` by default, `let` only when reassignment is needed
- No magic numbers — extract to named constants or CSS variables
- No commented-out code — delete it, git has history
- No `TODO` comments without an owner and a ticket/issue reference
- No raw `<img>` tags (use `next/image`)
- No arbitrary Tailwind bracket values (use `@theme` tokens)
- No inline styles for palette colours (use CSS variables)
- No `"use client"` on components that don't need it
