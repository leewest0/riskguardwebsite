# context.md
# Divinity-Agent — Project Context & Current State
# Version: 1.2.2

---

## Project Overview

**Project Name:** RiskGuard
**Description:** GRC SaaS platform for UK tech startups. Provides risk registers, controls libraries mapped to ISO 27001/SOC 2/NIST/PCI DSS/GDPR/HIPAA, tamper-evident evidence storage, AI compliance advisor, external auditor portal, and PDF audit reports. Built and operated by TrusTrak Solutions Ltd, a private limited company registered in England & Wales, headquartered in London.
**Current Phase:** Phase 2 — AI-Automated Risk Management
**Overall Status:** 🟢 On track

---

## Phases & Milestones

| Phase | Name | Status | Notes |
|---|---|---|---|
| 1 | Marketing Website | ✅ Complete | All pages live, Calendly URL set, Lucide icons, /features and /frameworks pages — complete 11 May 2026 |
| 2 | AI-Automated Risk Management | 🔄 In progress | Inject Claude into full risk entry flow — description to mitigation, scoring, control mapping |
| 3 | Multi-Tenant Setup | ⏳ Pending | Subscription & billing, admin monitoring, usage limits per plan |
| 4 | Integrations | ⏳ Pending | Slack, Jira, Microsoft Teams — Q3 target |
| 5 | Pricing & Payments | ⏳ Pending | Stripe billing, plan tiers, upgrade/downgrade flows |

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

- No active blockers. Phase 1 complete. Phase 2 planning in progress.

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

## Out of Scope (Phase 2)

- No UI rebuild — Claude wires into the existing risk modal, no new components
- No self-serve billing yet (Phase 5)
- No multi-tenancy changes (Phase 3)
- No third-party integrations (Phase 4)
