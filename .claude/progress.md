# progress.md
# AgentMind — Session Memory & Progress Tracker
# Version: 1.2.2

---

## 🔖 Current State

**As of:** 2026-05-08

Phase 1 (marketing website) is in progress. Landing page (`/`) and About page (`/about`) are built and functional. The About page features a Cobe v2 WebGL spinning globe in the hero background with drag-to-spin interaction. Divinity Agent context files have been installed in `.claude/` and `CLAUDE.md` has been updated to load all of them. Remaining Phase 1 work: build the four legal/info pages currently linked as dead links in the footer (Privacy, Terms, Security, Contact), replace emoji feature icons with Lucide React icons, and update the Calendly placeholder URL.

---

## ✅ Next Session Must Start With

1. Build `/privacy` page (currently `href="#"` in footer)
2. Build `/terms` page (currently `href="#"` in footer)
3. Build `/security` page (currently `href="#"` in footer)
4. Build `/contact` page (currently `href="#"` in footer)
5. Replace emoji icons in `app/_components/Features.tsx` with Lucide React icons
6. Update `CALENDLY_URL` in `app/_components/config.ts` with the real Calendly link

---

## 📋 Session Log

### Session — 2026-05-08

**Summary:**
Built the full RiskGuard marketing website from scratch, including landing page, About page with interactive WebGL globe, and installed the Divinity Agent context system. This was a long multi-phase session.

**Completed:**
- Scaffolded Next.js 16.2.6 project with App Router + Turbopack
- Built full landing page at `app/page.tsx` (Nav, Hero, DashboardMockup, FrameworkLogos, Features, Frameworks, Stats, FinalCTA, Footer)
- Set up Tailwind v4 `@theme` design system in `globals.css` (navy palette, font variables, keyframes, @utility blocks)
- Integrated DM Sans + Instrument Serif via `next/font/google`
- Added `LogoMark` / `LogoFull` components with `mix-blend-mode: screen` for white-on-black PNG logo
- Added dynamic favicon (`app/icon.tsx`) and apple-icon (`app/apple-icon.tsx`) via `ImageResponse`
- Built `/about` route with `AboutHero`, `Story`, `Values`, `CompanyInfo` sections
- Added `FadeUp` scroll-reveal component using `IntersectionObserver`
- Added interactive Cobe v2 WebGL globe to About page hero background (Globe.tsx)
- Removed Pricing from nav
- Fixed multiple Tailwind canonical class warnings (arbitrary bracket values → canonical tokens)
- Fixed cobe v2 API migration (removed `onRender`, added RAF loop + `globe.update()`)
- Fixed circular CSS font variable reference
- Removed unused ESLint disable comments from icon files
- Installed Divinity Agent files in `.claude/`
- Updated `CLAUDE.md` to `@`-import all Divinity Agent context files
- Filled in all Divinity Agent template files with RiskGuard-specific content

**Files Modified:**
| File | Change |
|---|---|
| `CLAUDE.md` | Added @-imports for all Divinity Agent files |
| `.claude/context.md` | Filled in with RiskGuard project state |
| `.claude/product.md` | Filled in with RiskGuard product brief |
| `.claude/tech.md` | Filled in with actual stack + known constraints |
| `.claude/design.md` | Filled in with actual colour palette, typography, component patterns |
| `.claude/structure.md` | Filled in with actual directory tree and architecture |
| `.claude/guidelines.md` | Filled in with project coding conventions |
| `.claude/progress.md` | This file — session log initialised |
| `app/layout.tsx` | Root layout with fonts + dark bg |
| `app/globals.css` | Tailwind v4 @theme, animations, utilities |
| `app/page.tsx` | Landing page |
| `app/_components/*` | All marketing components |
| `app/about/page.tsx` | About page |
| `app/about/Globe.tsx` | Cobe v2 WebGL globe |
| `app/icon.tsx` | Dynamic favicon |
| `app/apple-icon.tsx` | Dynamic apple icon |
| `public/riskguard-logo.png` | Logo asset added |

**Decisions Made:**
| Decision | Reasoning | Alternatives Rejected |
|---|---|---|
| Cobe v2 RAF loop (not onRender) | onRender was removed in cobe v2 — discovered from type defs | Staying on v1 API |
| mix-blend-mode: screen for logo | Logo PNG has black background, no alpha channel | Cropping/re-exporting with transparency |
| Dark-only design | Brand identity, no toggle needed for Phase 1 | Light/dark toggle |
| Globe with radial mask + vignette | Two-layer approach: mask for edge fade, vignette for text readability | Single mask only |

**Errors Encountered:**
| Error | Cause | Fix Applied |
|---|---|---|
| cobe `onRender` TS error | cobe v2 removed onRender callback | Rewrote to RAF loop + `globe.update()` |
| Circular font CSS variable | `--font-sans: var(--font-sans), "DM Sans"` self-references | Removed fallback — just `var(--font-sans)` |
| ESLint flagged unused disable comments | `@next/next/no-img-element` doesn't apply inside ImageResponse | Removed the disable comments |
| Next.js helper function error | Helper functions defined below `export default` in server component | Moved all helpers above the export |
| Tailwind canonical class warnings | Used `flex-shrink-0`, arbitrary brackets, etc. | Replaced with `shrink-0`, canonical tokens |

**Left Incomplete:**
- `/privacy`, `/terms`, `/security`, `/contact` pages — dead links in footer, explicitly deferred by user
- Emoji → Lucide icon replacement in Features.tsx — noted in Notion backlog, not yet started
- Calendly URL still a placeholder in `config.ts`
- "Watch 2-min walkthrough" button still present in Hero.tsx — edit was rejected by user mid-session

**Next Session Priority:**
Build the four missing legal/info pages to resolve dead footer links.

---

## 🧠 Persistent Learnings

- [2026-05-08] cobe v2 (npm `cobe`) removed the `onRender` callback entirely. Use `createGlobe()` then call `globe.update({ phi, width, height })` inside a `requestAnimationFrame` loop. Check `node_modules/cobe/dist/index.d.ts` before modifying.
- [2026-05-08] Tailwind v4 CSS-first config: all tokens in `globals.css` `@theme {}` block. Never use arbitrary bracket values — canonical tokens only. `flex-shrink-0` → `shrink-0`, etc.
- [2026-05-08] Next.js server components: helper functions used in a page must be defined ABOVE the `export default` function or Next.js will throw a build error.
- [2026-05-08] `next/font/google` CSS variable: `--font-sans: var(--font-sans)` is fine; `--font-sans: var(--font-sans), "DM Sans", sans-serif` creates a circular reference and the fallbacks are never reached.
- [2026-05-08] `ImageResponse` JSX (in `icon.tsx`, `apple-icon.tsx`) requires raw `<img>` tags, not `next/image`. The `@next/next/no-img-element` ESLint rule does not apply inside ImageResponse — do not add disable comments, they'll be flagged as unused.

---

## ⚠️ Known Gotchas

- [2026-05-08] The user's logo PNG (`riskguard-logo.png`) is white-on-black with no alpha channel. On dark backgrounds, use `mix-blend-mode: screen` — this makes black pixels transparent. Without it, the black box shows and looks wrong.
- [2026-05-08] `create-next-app` refuses to scaffold into a non-empty directory even if only hidden files (like `.claude/`) are present. Workaround: move hidden files to `/tmp`, scaffold, then restore.

---

## 📦 Completed Phases / Milestones

| Milestone | Completed | Notes |
|---|---|---|
| Marketing website — core pages (landing + about) | 2026-05-08 | Globe, FadeUp, all sections |
| Divinity Agent installed + context filled | 2026-05-08 | All 10 template files populated |

---

## 🗃️ Archive Notice

| Archive File | Period Covered |
|---|---|
| — | — |
