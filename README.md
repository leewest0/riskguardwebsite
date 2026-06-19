# RiskGuard

GRC automation for UK tech startups. Marketing landing page and (forthcoming) product app for **RiskGuard**, a compliance platform that automates ISO 27001, SOC 2, NIST CSF, PCI DSS, GDPR, and HIPAA workflows.

Built and operated by **TrusTrak Solutions Ltd**, London, UK.

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19
- TypeScript
- Tailwind CSS v4 (CSS-based `@theme` config)
- `next/font/google` — Instrument Serif (display) + DM Sans (body)
- `@vercel/analytics` — cookieless page-view analytics
- `@vercel/speed-insights` — Core Web Vitals monitoring

## Project layout

```
app/
├── layout.tsx              Root layout — fonts, metadata, body shell
├── globals.css             Tailwind v4 theme tokens, fonts, animations, noise overlay
├── page.tsx                Public marketing landing page (composes _components/*)
├── _components/            Landing page sections (private — not routable)
│   ├── config.ts           CALENDLY_URL placeholder used by all "Book a Demo" CTAs
│   ├── Logo.tsx            Reusable LogoMark
│   ├── Nav.tsx             Sticky nav + Book a Demo CTA
│   ├── Hero.tsx            Headline, subhead, CTAs, trust badges
│   ├── DashboardMockup.tsx Browser-frame product screenshot
│   ├── FrameworkLogos.tsx  ISO / SOC 2 / NIST / PCI / GDPR / HIPAA row
│   ├── Features.tsx        6-card feature grid
│   ├── Frameworks.tsx      Multi-framework section + audit-ready highlights
│   ├── Stats.tsx           6+ / 99.9% / 10× row
│   ├── FinalCTA.tsx        Closing CTA card
│   └── Footer.tsx          Footer
└── (app)/                  Route group reserved for authenticated app routes
    └── layout.tsx          (login, dashboard, etc. live here in future)
```

The `(app)` parentheses make it a [route group](https://nextjs.org/docs/app/building-your-application/routing/route-groups) — files inside don't add a `/app` URL segment. The landing page sits at `/`.

## Landing page sections

1. **Sticky nav** — logo, anchor links (Features, Frameworks, Pricing, About), Sign in, Book a Demo
2. **Hero** — italic-accented headline, subhead, two CTAs (Book a Demo + walkthrough), four trust badges, animated radial-gradient + grid backdrop
3. **Product dashboard mockup** — browser frame with sidebar nav, four KPI cards, risk register table
4. **Framework logos row** — ISO 27001, SOC 2, NIST CSF, PCI DSS, GDPR, HIPAA
5. **Features grid** — Risk Register, Controls Library, Evidence Locker, AI Advisor, External Auditor Portal, PDF Audit Reports
6. **Multi-framework section** — framework list + audit-ready-in-weeks highlight card
7. **Stats** — 6+ frameworks · 99.9% uptime · 10× faster than spreadsheets
8. **Final CTA** — gradient card with Book a Demo + Start free trial
9. **Footer** — © TrusTrak Solutions Ltd, London UK + Privacy / Terms / Security / Contact

## Theme

Tailwind v4 tokens live in `app/globals.css` under `@theme`:

| Token                  | Value         | Use                          |
|------------------------|---------------|------------------------------|
| `--color-navy`         | `#0a0f1e`     | Page background              |
| `--color-navy-mid`     | `#111827`     | Section dividers             |
| `--color-navy-light`   | `#1a2238`     | Cards, mockup frame          |
| `--color-accent`       | `#4f6ef7`     | Primary CTAs, logo           |
| `--color-accent-bright`| `#6b8aff`     | Hover, italic accents        |
| `--color-teal`         | `#0ccfb0`     | Success states, status dot   |
| `--color-gray-300/500` | slate scale   | Body / muted copy            |

Custom utilities `animate-fade-up` and `animate-pulse-dot` are defined as Tailwind v4 `@utility` blocks.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Available scripts

| Command          | What it does                                  |
|------------------|-----------------------------------------------|
| `npm run dev`    | Start Turbopack dev server on :3000           |
| `npm run build`  | Production build (Turbopack)                  |
| `npm run start`  | Serve the built app                           |
| `npm run lint`   | ESLint (next-config flat config)              |

## Configuration

### Calendly link

All three "Book a Demo" CTAs read from a single constant. Update before launch:

```ts
// app/_components/config.ts
export const CALENDLY_URL = "https://calendly.com/your-link-here";
```

### Adding the product app

Place authenticated routes inside `app/(app)/`. For example:

```
app/(app)/login/page.tsx        →  /login
app/(app)/dashboard/page.tsx    →  /dashboard
app/(app)/risks/page.tsx        →  /risks
```

The route group keeps them isolated from the landing page's layout while sharing the root `app/layout.tsx`. If the app needs its own chrome (sidebar, auth guard), put it in `app/(app)/layout.tsx`.

## Deployment

Native Vercel target. Either:

- **CLI** — `npx vercel` (preview), `npx vercel --prod` (production)
- **GitHub** — push and import at [vercel.com/new](https://vercel.com/new); auto-deploys on every push, preview URLs on every PR

No environment variables required for the landing page. When the product app is added, configure its env vars in Vercel project settings.

## License

Proprietary © TrusTrak Solutions Ltd.
