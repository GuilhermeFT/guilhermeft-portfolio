---
name: guilhermeft-ui-system
description: >
  Design system for guilhermeft's portfolio site (watracz-inspired editorial aesthetic).
  Use this skill whenever building, styling, or reviewing any UI component, page, section,
  or animation for the guilhermeft-portfolio project. Also activate when the user asks about
  colors, typography, spacing, motion, hover states, or any visual decision for their
  portfolio. Use this skill proactively for any frontend task in this project, even if the
  user doesn't explicitly mention the design system.
---

# guilhermeft Portfolio — UI/UX Design System

**Stack:** Next.js 16 App Router · Tailwind CSS v4 · `motion` (Framer Motion v12) · TypeScript  
**Aesthetic:** Watracz-inspired editorial — minimal, typographic, intentional.  
**All tokens defined in:** `src/styles/globals.css`

---

## Design Philosophy

This site follows an **editorial/magazine aesthetic** modeled on watracz.com:

- **Square edges everywhere** — `--radius: 0px`. No rounded corners on UI elements (only pills use 23px).
- **Single typeface** — Inter at all weights. No display/serif fonts.
- **Restraint** — Minimal color. White background, near-black text, one blue accent.
- **Typography leads** — Size, weight, and tracking carry hierarchy, not color or decoration.
- **Motion is purposeful** — One well-orchestrated page load with staggered reveals beats scattered micro-interactions.
- **Whitespace is structural** — Generous negative space is intentional, not empty.

---

## Color Tokens

All tokens are CSS custom properties defined via `@theme inline { }` in `globals.css`.

### Raw Palette (watracz)
```css
--color-darkest:       #0f141e   /* primary dark — backgrounds, text */
--color-dark-alt:      #0e1322
--color-gray-dark:     #7a808c   /* muted text */
--color-gray-mid:      #878a8f   /* muted text, selection bg */
--color-gray-300:      #ced2d9
--color-gray-200:      #cfd0d2
--color-gray-100:      #d5d5d7
--color-surface:       #f3f3f5   /* light backgrounds */
--color-surface-2:     #f7f7f7
--color-white:         #ffffff
--color-accent:        #007aff   /* blue — text/icon accent ONLY, never bg */
--color-accent-light:  #75bfff   /* gradient text endpoint */
--color-error:         #ff5959
```

### Editorial / Hero Palette
Used exclusively in the hero section. Do NOT use semantic tokens there.
```css
--color-editorial-bg:      #ffffff   /* hero section background */
--color-editorial-dark:    #0d0d0d   /* hero H1 headline */
--color-editorial-ink:     #111111   /* logo name, CTAs, menu trigger */
--color-editorial-body:    #555555   /* hero body paragraph */
--color-editorial-muted:   #888888   /* logo subtitle, eyebrow, separator */
--color-editorial-sep:     #aaaaaa   /* CTA "or" / "ou" separator */
--color-header-scrolled:   rgba(245, 245, 243, 0.92)  /* frosted glass header */
```

### Semantic Tokens (shadcn/ui pattern)
```css
--color-background:             #ffffff
--color-foreground:             #0f141e
--color-muted:                  #f3f3f5
--color-muted-foreground:       #878a8f
--color-border:                 #e7e8e9
--color-primary:                #0f141e
--color-primary-foreground:     #ffffff
--color-secondary:              #f3f3f5
--color-secondary-foreground:   #0f141e
--color-destructive:            #ff5959
--color-card:                   #ffffff
--color-card-foreground:        #0f141e
```

### Overlay Tokens
```css
--color-overlay-dark-30:   color-mix(in srgb, #0f141e 30%, transparent)
--color-overlay-dark-90:   color-mix(in srgb, #0f141e 90%, transparent)
--color-overlay-dark-95:   color-mix(in srgb, #0f141e 95%, transparent)
--color-overlay-dark-98:   color-mix(in srgb, #0f141e 98%, transparent)
--color-overlay-white-95:  color-mix(in srgb, #ffffff 95%, transparent)
```

---

## Typography

**Font:** Inter only (`--font-sans`, `--font-display` both = Inter). Loaded via `next/font/google`, variable `--font-inter`.

### Scale (Tailwind responsive classes, not px/clamp)

| Role | Classes | Notes |
|------|---------|-------|
| Hero H1 | `text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.035em] leading-[1.05]` | 48→60→72px |
| Nav overlay items | `text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.01em] leading-tight` | Same scale |
| Section H1 (global) | `clamp(2.125rem, 4vw, 2.75rem)` weight 800 tracking -0.01em | From base styles |
| Section H2 | `clamp(1.75rem, 3vw, 2rem)` weight 800 tracking -0.01em | |
| Section H3 | `clamp(1.125rem, 2vw, 1.375rem)` weight 500 | |
| H4 | `text-lg font-extrabold` | 18px |
| Eyebrow | `text-xs tracking-[0.25em] uppercase font-medium` | e.g. `text-editorial-muted` |
| Body | `text-base leading-[1.65]` | |
| Small | `text-[0.8125rem] leading-5 font-normal tracking-[0.03em]` | |
| H1 large (utility) | `.h1-large` = `clamp(3.875rem, 6vw, 4.5rem)` weight 800 | For special headings |

### `gradient-text` utility
```css
background: linear-gradient(to bottom left, #007aff, #75bfff);
background-clip: text; color: transparent;
```
Use: `<span className="gradient-text">text</span>`

---

## Layout & Spacing Tokens

```css
--header-height:   4.5rem    /* 72px — always use this, not a hardcoded value */
--container-max:   1480px
--container-px:    2.5rem    /* 40px horizontal padding */
--btn-height:      46px
--radius:          0px       /* ALL UI elements — square is the rule */
--radius-pill:     23px      /* Pills only */
```

**Container utility:**
```html
<div className="container">  <!-- mx-auto max-w-[1480px] px-10 -->
```

---

## Motion & Animation

**Library:** `motion` (import from `'motion/react'`)

### Core easing
```ts
ease: [0.3, 0, 0.5, 1]   // --ease-watracz — use for nearly everything
ease: [0.22, 1, 0.36, 1]  // hero fadeInUp — slightly bouncier
```

### Standard patterns

**Staggered page load (hero pattern):**
```ts
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
}
// Apply with custom={0}, custom={0.1}, custom={0.2}, custom={0.3}
// Order: eyebrow → H1 → body → CTAs
```

**Viewport fade-in-up (section wrappers):**
```ts
<motion.section
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ margin: '100px', once: true, amount: 0.2 }}
  transition={{ duration: 0.7, ease: [0.3, 0, 0.5, 1] }}
>
```

**Nav overlay open/close:**
```ts
// Height: 0% → 100%, duration 0.4–0.5s, ease [0.3, 0, 0.5, 1]
// Menu items stagger: staggerChildren: 0.05, delayChildren: 0.35
// Item: { opacity: 0, y: 20 } → { opacity: 1, y: 0 }
```

**Use `<Section>` wrapper** (`src/components/section/index.tsx`) for all new page sections — it handles viewport animation automatically.

### Transition durations
- Links / color changes: `150ms`
- Hover overlays: `300ms`
- Page enter animations: `600–700ms`
- Bleed text fade-in: `1000ms`
- Scroll indicator bounce loop: `1600ms`

---

## Component Patterns

### Hero Section (`src/app/(web)/components/hero-section.tsx`)
3-layer z-index stack inside `h-dvh min-h-150 overflow-hidden`:
```
z-0  — bleed text (absolute, top-28%, left-0, aria-hidden, pointer-events-none)
z-1  — portrait image (absolute, top-0, right-0, full height, overflow-clipped)
z-10 — left content (relative, flex justify-end pb-20, eyebrow→H1→body→CTAs)
```
- Bleed text uses `.hero-bleed-text` class: `font-size: clamp(100px, 23vw, 9999px)`, white, letter-spacing -0.04em
- Portrait shifts off-screen on mobile via `translate-x-[clamp(0%,...)]`

### Header (`src/components/header/index.tsx`)
- Fixed, full-width, `z-[100]`
- Transparent by default → frosted glass on scroll >20px: `background: --color-header-scrolled` + `backdropFilter: blur(10px)`
- Transition: `background 300ms ease, backdrop-filter 300ms ease`
- Logo left (`<LogoLockup>`), menu trigger right

### Nav Overlay (`src/components/nav-overlay/index.tsx`)
- Full-screen dark overlay (`bg-darkest`, `z-[200]`)
- Height-animated: `0%` → `100%`
- Top bar mirrors header layout
- Links: Projects, About, Contact — staggered fade-in-up
- State managed via Zustand: `src/store/use-navigation.ts` (`isOpen`, `toggleMenu()`)

### Section Wrapper (`src/components/section/index.tsx`)
- Always wrap new content sections in `<Section>` — it handles the viewport animation
- Accepts `disableAnimation` prop

### Cards (`src/components/card/`)
- Group-hover pattern: parent has `group` class, children use `group-hover:*`
- Image hover scale: `group-hover:scale-110 transition-transform duration-300`
- Text animations: `animate-fade-up`, `animate-fade-right` with `animate-delay-*`

---

## Custom CSS Utilities (globals.css)

| Utility | Usage |
|---------|-------|
| `container` | Centered content wrapper — always use for page sections |
| `gradient-text` | Blue gradient text accent |
| `h1-large` | Large fluid headline (clamp 62–72px) |
| `font-display` | Apply display font (= Inter) |
| `hero-bleed-text` | Massive background word — hero only, aria-hidden |

---

## Dos and Don'ts

**DO:**
- Use `--radius: 0px` on all cards, inputs, buttons (square is the rule)
- Use editorial palette tokens (`text-editorial-*`) inside the hero section
- Use semantic tokens (`text-foreground`, `bg-background`) everywhere else
- Use `<Section>` wrapper for all new page sections
- Import `motion` from `'motion/react'`
- Use `cn()` from `src/lib/utils.ts` for conditional class merging

**DON'T:**
- Never use `--color-accent` (#007aff) as a background color
- Never add `rounded-*` Tailwind classes to UI elements (except `rounded-full` for pills)
- Never use Roboto, system-ui, or any font other than Inter
- Never use purple gradients or generic "AI aesthetic" color schemes
- Never hardcode colors — always use CSS custom property tokens
- Never use `tailwind.config.js` — all config is in `src/styles/globals.css`

---

## Key File Paths

| File | Purpose |
|------|---------|
| `src/styles/globals.css` | All design tokens, utilities, keyframes |
| `src/app/(web)/components/hero-section.tsx` | Hero layout + animation reference |
| `src/components/header/index.tsx` | Scroll-aware header with frosted glass |
| `src/components/nav-overlay/index.tsx` | Full-screen animated nav |
| `src/components/section/index.tsx` | Viewport animation wrapper — use for all sections |
| `src/components/card/` | Project card components with hover patterns |
| `src/lib/utils.ts` | `cn()` helper (clsx + tailwind-merge) |
| `src/store/use-navigation.ts` | Menu open/close state (Zustand) |
| `src/utils/env.ts` | Typed env access — always import env vars from here |
