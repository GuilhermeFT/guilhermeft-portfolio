# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev      # Start development server at localhost:3000
pnpm build    # Build for production
pnpm start    # Start production server
pnpm lint     # Run ESLint
```

No test suite is configured.

## Architecture

**Next.js 16 (App Router)** — single portfolio site with an embedded Payload CMS admin panel, split via route groups:

- **`(web)`** — Public-facing portfolio (currently the hero page at `/`)
- **`(payload)`** — Payload CMS admin panel at `/admin`

### Route structure

```
src/app/
  layout.tsx                      # Root layout — Inter font, Header, ScrollToTop, Toaster, Vercel Analytics
  providers.tsx                   # Client providers wrapper
  (web)/
    page.tsx                      # Homepage (/) — renders HeroSection
    components/
      hero-section.tsx            # Editorial hero: bleed text, portrait, headline, CTAs
  (payload)/
    admin/[[...segments]]/
      page.tsx                    # Payload CMS admin UI
      not-found.tsx
    api/[...slug]/route.ts        # Payload REST/GraphQL API endpoints
  api/revalidate/route.ts         # POST endpoint — triggered by Payload AfterChange hook to revalidate ISR
```

### Data sources

- **Payload CMS** (`src/services/payload/projects.ts`) — self-hosted headless CMS with PostgreSQL. Main queries: `getAllProjects()`, `getHighlightedProjects()`, `getProjectBySlug()`. The `Projects` collection has an AfterChange hook that hits `POST /api/revalidate` for ISR.
- **TabNews API** (`src/services/tabnews/`, `src/lib/tabnews.ts`) — fetches blog posts for user `guilhermeft`. Base URL from `NEXT_PUBLIC_TABNEWS_API_URL` env var.
- **Google Sheets** (`src/services/spreadsheet/`, `src/lib/googleapi.ts`) — server action to append leads (name, phone, email, source, timestamp) to a spreadsheet.

### Payload CMS collections

Defined in `src/collections/`:

- **Projects** — name, slug, isHighlighted, projectLink, repositoryLink, yearStarted, yearFinished, stack (18 tech options), image (with upload sizes), banner, content (Lexical rich text). AfterChange hook triggers ISR revalidation.
- **Media** — alt text; upload sizes: thumbnail (400×300), card (800×600), banner (1920×1080). Static dir: `public/media`.
- **Users** — auth-enabled, email only.

### Environment variables

```
NEXT_PUBLIC_TABNEWS_API_URL   # Required — TabNews API base URL
GOOGLE_CLIENT_EMAIL           # Optional — Google service account for Sheets
GOOGLE_PRIVATE_KEY            # Optional — Google service account private key (escape \n)
SHEET_ID                      # Optional — Google Spreadsheet ID for leads
```

Validated at startup via Zod in `src/utils/env.ts`. Always import from there, not from `process.env` directly.

### Shared components

```
src/components/
  header/
    index.tsx             # Fixed header — transparent → frosted glass on scroll (>20px); manages menu state
    logo-lockup.tsx       # SVG icon + "Guilherme FT" + "SOFTWARE DEVELOPER" subtitle; inverted prop for dark bg
  nav-overlay/
    index.tsx             # Full-screen dark overlay menu — animated items; links: Projects, About, Contact
  scroll-indicator/
    index.tsx             # Animated pill at hero bottom
  scroll-to-top/
    index.tsx             # Floating button appears after 300px scroll
  section/
    index.tsx             # Motion section wrapper with fade-in-up on enter viewport
  card/
    project-card.tsx      # Project card with hover overlay; Rectangle/Square variants
  animations/
    marquee.tsx           # Draggable marquee with spring physics
  rich-text/
    index.tsx             # Renders Payload Lexical rich text to HTML
  timeline-item/
    index.tsx             # Timeline entry component
  tooltip-wrapper/
    index.tsx             # Radix UI tooltip wrapper
  float-toggle-menu/
    index.tsx             # Mobile hamburger toggle (appears on scroll)
  ui/                     # shadcn-style primitives (button, dialog, tabs, tooltip, sonner)
```

### State management

- **Zustand** (`src/store/use-navigation.ts`) — navigation menu open/close state (`isOpen`, `toggleMenu()`)

### Styling

- **Tailwind CSS v4** — no `tailwind.config.js`; all config lives in `src/styles/globals.css` via `@theme inline { ... }`.
- **`tailwind-variants`** (`tv()`) for component variants (configured in Prettier for class sorting).
- **`tailwind-merge` + `clsx`** — combined in `cn()` at `src/lib/utils.ts`.
- Prettier: single quotes, no semicolons, trailing commas. Sorts Tailwind classes automatically (including `tv()`).

### Design system (tokens in `globals.css`)

**Palette (watracz-inspired editorial):**
- `--color-darkest: #0f141e` — primary dark (backgrounds, text)
- `--color-gray-dark/mid: #7a808c / #878a8f` — muted text
- `--color-surface: #f3f3f5` — light backgrounds
- `--color-accent: #007aff` — blue accent (gradient text)
- Editorial palette: `--color-editorial-bg/dark/ink/body/muted/sep` — hero-specific palette

**Key layout tokens:**
- `--header-height: 4.5rem` (72px)
- `--container-max: 1480px`
- `--container-px: 2.5rem`
- `--btn-height: 46px`
- `--radius: 0px` (square/editorial style)
- `--ease-watracz: cubic-bezier(0.3, 0, 0.5, 1)`

**Custom utilities:**
- `@utility container` — auto-margin, max-width, padding-inline
- `@utility h1-large` — fluid headline `clamp(3.875rem, 6vw, 4.5rem)`
- `.hero-bleed-text` — massive background word (`clamp(100px, 23vw, 9999px)`), unlayered for cascade priority

**Typography scale (Tailwind classes):**
- Hero H1: `text-5xl md:text-6xl lg:text-7xl` (48 → 60 → 72px)
- Nav overlay items: `text-5xl md:text-6xl lg:text-7xl` (matches watracz 72px at desktop)
- Body: `text-base`
- Eyebrow: `text-xs tracking-[0.25em]`
- Font: **Inter** (400, 500, 700, 800, 900), `--font-inter`, `--font-sans` + `--font-display` both point to Inter

### Utilities & helpers

- `src/lib/utils.ts` — `cn()` (clsx + tailwind-merge)
- `src/utils/env.ts` — typed, validated env access (Zod)
- `src/utils/const.ts` — `navLinks`, `companies` arrays (legacy paths, may be stale)
- `src/utils/images.ts` — image imports from `src/assets/`
- `src/hooks/use-window-size.ts` — SSR-safe window size hook
