# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start development server at localhost:3000
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm slicemachine # Start Prismic SliceMachine UI
```

No test suite is configured.

## Architecture

This is a **Next.js 15 monorepo** (App Router) containing two distinct web applications served from the same deployment, split via route groups:

- **Hub page** (`/`) — landing page linking to both apps
- **Portfolio** (`/(portfolio)/portfolio`) — personal portfolio with projects, skills, about, contact
- **Studio** (`/(bussiness)/studio`) — business/agency site (GTDEV Studio) for client acquisition

### Route structure

```
src/app/
  page.tsx                    # Hub/landing page — links to /portfolio and /studio
  layout.tsx                  # Root layout (Montserrat font, Vercel Analytics, Sonner toaster)
  providers.tsx               # PrismicPreview wrapper
  (portfolio)/                # Personal portfolio route group
    portfolio/page.tsx        # Main portfolio page
    projects/[projectId]/     # Project detail page (data from Prismic)
    articles/                 # Articles fetched from TabNews API
    contact/
  (bussiness)/                # Business site route group
    studio/page.tsx           # Agency landing page
    studio/components/        # Studio-specific components (all self-contained)
  api/revalidate/route.ts     # POST endpoint to revalidate Prismic cache (tag: 'prismic')
  (bussiness)/privacy-policy/
```

### Data sources

- **Prismic CMS** (`src/services/prismic/`) — projects data (custom type `projects`). `getHighlightedProjects()`, `getAllProjects()`, `getProjectByUid()` are the main queries. The Prismic client is in `src/prismicio.ts`. Prismic content is revalidated via `POST /api/revalidate`.
- **TabNews API** (`src/services/tabnews/`, `src/lib/tabnews.ts`) — fetches articles by user `guilhermeft`. Base URL from `NEXT_PUBLIC_TABNEWS_API_URL` env var.
- **Google Sheets** (`src/services/spreadsheet/`, `src/lib/googleapi.ts`) — server action that appends leads (name, phone, email, source) to a spreadsheet. Used by Studio contact forms.

### Environment variables

```
NEXT_PUBLIC_TABNEWS_API_URL   # Required — TabNews API base URL
GOOGLE_CLIENT_EMAIL           # Optional — Google service account for Sheets
GOOGLE_PRIVATE_KEY            # Optional — Google service account private key
SHEET_ID                      # Optional — Google Spreadsheet ID for leads
```

Validated at startup via Zod in `src/utils/env.ts`.

### Shared components & utilities

- `src/components/` — reusable UI components (cards, animations, modals, etc.)
- `src/components/ui/` — shadcn/ui components
- `src/utils/enum.ts` — `ToolLinks` enum (`/portfolio`, `/studio`) used for internal navigation
- `src/lib/utils.ts` — `cn()` utility (clsx + tailwind-merge)
- `src/utils/env.ts` — typed, validated env access (always import from here, not `process.env` directly)

### Styling

- Tailwind CSS v4 with `tailwind-variants` (`tv()`) for component variants
- Prettier sorts Tailwind classes automatically (configured for `tv()` via `tailwindFunctions`)
- Prettier config: single quotes, no semicolons, trailing commas

### Prismic SliceMachine

Slices live in `src/slices/`. The only slice currently is `Projects`. Repository name: `gft-my-portfolio`. Run `pnpm slicemachine` to open the SliceMachine UI for managing content types and slices.
