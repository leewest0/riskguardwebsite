# context.md
# Divinity-Agent — Project Context & Current State
# Version: 1.2.2

---

## Project Overview

**Project Name:** RiskGuard
**Description:** GRC SaaS platform for UK tech startups. Provides risk registers, controls libraries mapped to ISO 27001/SOC 2/NIST/PCI DSS/GDPR/HIPAA, tamper-evident evidence storage, AI compliance advisor, external auditor portal, and PDF audit reports. Built and operated by TrusTrak Solutions Ltd, a private limited company registered in England & Wales, headquartered in London.
**Current Phase:** Phase 1 — Marketing website
**Overall Status:** 🟢 On track

---

## Phases & Milestones

| Phase | Name | Status | Notes |
|---|---|---|---|
| 1 | Marketing website | 🔄 In progress | Landing page + About page live. Several footer dead links to fix (Privacy, Terms, Security, Contact). |
| 2 | Authentication & core app | ⏳ Pending | User accounts, onboarding |
| 3 | GRC feature modules | ⏳ Pending | Risk register, controls library, evidence locker |
| 4 | AI Advisor | ⏳ Pending | Claude API integration |
| 5 | Auditor portal + PDF reporting | ⏳ Pending | Time-limited tokens, PDF generation |

---

## Environment

### Key URLs

| Environment | URL | Notes |
|---|---|---|
| Production | TBD (Vercel deploy pending) | — |
| Dev | http://localhost:3000 | `npm run dev` |

### Access & Credentials

- Credentials stored in: `.env.local` (gitignored) / Vercel environment variables for production
- No VPN required

---

## Current Blockers

- Calendly booking link is a placeholder (`CALENDLY_URL` in `app/_components/config.ts`) — needs real link from user
- This is the only remaining Phase 1 blocker — all pages built, icons updated

---

## Key Decisions Already Made

| Decision | Rationale | Date |
|---|---|---|
| Next.js App Router (no Pages Router) | Modern routing, server components, better performance | 2026-05 |
| Tailwind CSS v4 (no config file) | CSS-first `@theme`, no arbitrary bracket values | 2026-05 |
| Dark-only design | Brand identity — no light mode planned for Phase 1 | 2026-05 |
| Instrument Serif + DM Sans | High-end SaaS feel — editorial serif for headings, clean sans for body | 2026-05 |
| mix-blend-mode: screen for logo | Logo PNG is white-on-black (no alpha) — screen blend makes black transparent on dark bg | 2026-05 |
| Cobe v2 globe on About hero | Interactive, dramatic visual for the mission statement | 2026-05 |
| No Pricing page | Removed from nav — will be added in later phase | 2026-05 |
| Dead footer links left as `href="#"` | Privacy, Terms, Security, Contact pages not yet built — explicitly deferred | 2026-05 |
| Divinity Agent installed | Structured AI collaboration context for all future sessions | 2026-05-08 |

---

## Out of Scope (Phase 1)

- No backend, database, or authentication
- No Pricing page (deferred)
- No real dashboard screenshot (DashboardMockup is a coded mockup)
- No actual Lucide icons (emoji placeholders for now)
- No privacy/terms/legal pages (dead links to be built in Phase 1 completion)
