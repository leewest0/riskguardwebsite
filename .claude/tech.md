# tech.md
# Divinity-Agent — Technology Stack
# Version: 1.2.2

---

## Languages & Runtimes

| Language | Version | Notes |
|---|---|---|
| TypeScript | 5.x | Strict mode — all source files |
| JavaScript | Node 20+ | Runtime for Next.js |

---

## Frameworks & Libraries

| Name | Version | Purpose |
|---|---|---|
| Next.js | 16.2.6 | Full-stack framework (App Router, Turbopack) |
| React | 19.x | UI library |
| Tailwind CSS | v4 | Styling — CSS-based @theme, no tailwind.config.js |
| cobe | 2.x | WebGL globe on About page hero |
| next/font/google | — | Font loading: DM Sans + Instrument Serif |
| next/og (ImageResponse) | — | Dynamic favicon + apple-icon generation at build time |

---

## Database

Not yet implemented — planned for Phase 2 (app build).

---

## Authentication & Sessions

Not yet implemented — planned for Phase 2.

---

## Infrastructure & Hosting

**Cloud provider:** Vercel (planned deployment target)
**CI/CD:** GitHub → Vercel auto-deploy on push to main

---

## Key Environment Variables

| Variable | Purpose |
|---|---|
| (none yet) | Backend env vars will be added when Phase 2 app development begins |

---

## Development Commands

```bash
# Install dependencies
npm install

# Start dev server (Turbopack)
npm run dev

# Type-check
npx tsc --noEmit

# Lint
npm run lint

# Production build
npm run build
```

---

## Error Handling & Logging

Not yet configured — to be set up with the app phase.

---

## Third-Party Services & Integrations

| Service | Purpose | Auth method |
|---|---|---|
| Calendly | Demo booking CTA | Public embed link (no auth) |
| Anthropic API | AI Advisor feature (Phase 4) | API key via env var |

---

## Known Technical Constraints

- **Next.js 16.2.6 has breaking API changes** — always read `node_modules/next/dist/docs/` before writing any Next.js code. Do not rely on training data.
- **Tailwind v4 is CSS-first** — `@theme` block in `globals.css`, no `tailwind.config.js`. Never use arbitrary bracket values like `max-w-[300px]` — use canonical Tailwind tokens or `@theme` custom tokens.
- **cobe v2 API** — `globe.update({ phi, width, height })` + `requestAnimationFrame` loop. No `onRender` callback (removed in v2). Read the type definitions before modifying Globe.tsx.
- **Font CSS variables** — `--font-sans` and `--font-serif` are injected by `next/font`. Never write `var(--font-sans), "DM Sans", sans-serif` — that creates a circular reference. Just use `var(--font-sans)`.
- **Logo PNG** — `riskguard-logo.png` is white-on-black (no alpha). Use `mix-blend-mode: screen` to composite on dark backgrounds so the black disappears. The Nav and other dark-bg uses rely on this.
- **Route groups** — `app/(app)/` is reserved for future authenticated app routes. Marketing components live in `app/_components/` (underscore = private, no route).
