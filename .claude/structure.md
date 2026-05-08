# structure.md
# Divinity-Agent — Codebase Structure & Architecture
# Version: 1.2.2

---

## Directory Tree

```
riskguardhq/
├── app/                              # Next.js App Router root
│   ├── (app)/                        # Route group — future authenticated app routes
│   │   └── layout.tsx                # App shell layout placeholder
│   ├── _components/                  # Shared marketing site components (private — no route)
│   │   ├── config.ts                 # Shared constants (CALENDLY_URL etc.)
│   │   ├── DashboardMockup.tsx       # Animated dashboard UI mockup for Hero section
│   │   ├── FadeUp.tsx                # Scroll-reveal IntersectionObserver wrapper (client)
│   │   ├── FinalCTA.tsx              # Bottom CTA section with Calendly link
│   │   ├── Footer.tsx                # Site footer with nav links
│   │   ├── FrameworkLogos.tsx        # Compliance framework logo/badge strip
│   │   ├── Frameworks.tsx            # Multi-framework section (feature + card)
│   │   ├── Features.tsx              # 6-feature grid section
│   │   ├── Hero.tsx                  # Landing page hero with headline + CTA
│   │   ├── Logo.tsx                  # LogoMark + LogoFull components (mix-blend-mode: screen)
│   │   ├── Nav.tsx                   # Sticky navigation bar (client — scroll state)
│   │   └── Stats.tsx                 # Stats/numbers section (3 metrics)
│   ├── about/                        # /about route
│   │   ├── Globe.tsx                 # Cobe v2 WebGL globe — client component
│   │   └── page.tsx                  # About page (AboutHero, Story, Values, CompanyInfo)
│   ├── globals.css                   # Tailwind v4 @theme config, keyframes, @utility blocks
│   ├── layout.tsx                    # Root layout — font injection, dark bg, global metadata
│   ├── page.tsx                      # Landing page (/) — composes all marketing sections
│   ├── icon.tsx                      # Dynamic 32×32 favicon via ImageResponse
│   └── apple-icon.tsx                # Dynamic 180×180 apple icon via ImageResponse
├── public/
│   └── riskguard-logo.png            # White-on-black trident-T logo PNG
├── .claude/                          # Claude Code + Divinity Agent context files
│   ├── soul.md                       # Agent personality, tone, hard limits
│   ├── metacognition.md              # Thinking protocol for non-trivial tasks
│   ├── security-redlines.md          # Non-negotiable security rules
│   ├── context.md                    # Project status board (phases, blockers)
│   ├── product.md                    # Product brief (what it is, who uses it)
│   ├── tech.md                       # Technology stack and known constraints
│   ├── design.md                     # Design system (palette, type, components)
│   ├── guidelines.md                 # Coding standards and conventions
│   ├── structure.md                  # This file — codebase map
│   └── progress.md                   # Session memory and log
├── CLAUDE.md                         # Claude Code entrypoint — @-imports all context files
├── AGENTS.md                         # Next.js version warning
├── package.json
└── tsconfig.json
```

---

## Key Files — What They Do

| File / Path | Purpose |
|---|---|
| `app/layout.tsx` | Root layout — DM Sans + Instrument Serif font injection, dark navy bg, global metadata |
| `app/globals.css` | Tailwind v4 `@theme` palette definition, animation keyframes, `@utility` blocks, `prefers-reduced-motion` |
| `app/page.tsx` | Marketing landing page — composes Nav, Hero, DashboardMockup, FrameworkLogos, Features, Frameworks, Stats, FinalCTA, Footer |
| `app/_components/config.ts` | Single source of truth for shared URLs (Calendly, etc.) — update here, nowhere else |
| `app/_components/FadeUp.tsx` | IntersectionObserver scroll-reveal — wrap any below-fold section to fade in on scroll |
| `app/_components/Nav.tsx` | Sticky nav — links to `/#features`, `/#frameworks`, `/about`; uses `next/link` |
| `app/_components/Logo.tsx` | `LogoMark` and `LogoFull` — white PNG logo composited with `mix-blend-mode: screen` |
| `app/about/Globe.tsx` | Cobe v2 WebGL spinning globe — RAF loop, drag-to-spin, auto-rotate, London marker |
| `app/about/page.tsx` | `/about` route — standalone page with globe hero, story, values, company info |
| `app/icon.tsx` | Dynamic favicon (32×32) via `ImageResponse` — blue square + logo |
| `app/apple-icon.tsx` | Dynamic apple touch icon (180×180) via `ImageResponse` |

---

## Request / Data Flow (Marketing site — Phase 1)

```
Browser request
  → Vercel Edge Network
  → Next.js App Router
  → app/layout.tsx  (root shell — fonts, global bg, metadata)
  → page.tsx or about/page.tsx  (route segment — server component)
  → _components/*  (server components by default)
      → FadeUp.tsx  ("use client" — IntersectionObserver)
      → Nav.tsx     ("use client" — scroll state)
      → Globe.tsx   ("use client" — WebGL/cobe)
  → HTML response + minimal client JS bundle
```

---

## Architectural Patterns

**Primary pattern:** Next.js App Router — server components by default, client components opt-in with `"use client"`

**Key conventions:**
- Server components for all static marketing content — no `"use client"` unless browser APIs are required
- Client components only where needed: `FadeUp` (IntersectionObserver), `Globe` (WebGL canvas), `Nav` (scroll state)
- Scroll animations via IntersectionObserver in `FadeUp` — must not trigger on initial render above the fold
- Route groups: `(app)/` reserved for authenticated app routes (Phase 2+)
- Private folder: `_components/` underscore prefix = shared components, not a route segment
- All section components are self-contained — they own their own layout, heading, and content

---

## Where New Code Goes

| Type of code | Where it lives |
|---|---|
| New marketing page section component | `app/_components/` |
| New marketing page route | `app/[route]/page.tsx` |
| New authenticated app route (Phase 2+) | `app/(app)/[route]/` |
| New shared config constant or URL | `app/_components/config.ts` |
| New static asset (images, fonts) | `public/` |
| New client-side interactive component | co-located with its route (e.g. `app/about/Globe.tsx`) |

---

## Autoloading & Module Resolution

**Method:** Next.js module resolution — TypeScript path alias `@/` maps to project root
**Config:** `tsconfig.json` — `"paths": { "@/*": ["./*"] }`

---

## Environments & Config Files

| Environment | Config file | Notes |
|---|---|---|
| Local | `.env.local` | Gitignored — never commit |
| Production | Vercel environment variables | Never a flat file in the repo |
