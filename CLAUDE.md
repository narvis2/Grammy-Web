# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Grammy-Web is a hotel information website for Grami Hotel, built with Next.js 13 App Router, TypeScript, and Tailwind CSS. It includes room browsing, hotel information, Naver Maps, and Google Analytics. All data is hardcoded (no backend API dependency). Reservations are handled via external Naver Booking link.

## Commands

- `yarn dev` — Start development server
- `yarn build` — Production build
- `yarn lint` — ESLint
- `yarn storybook` — Storybook on port 6006
- `yarn cypress` — E2E tests (Cypress)
- `ANALYZE=true yarn build` — Bundle analysis

## Architecture

### Data Flow

```
Page/Component → Custom Hook (data/hooks/) → Static Data (data/static/)
```

### Key Directories

- `app/` — Next.js App Router pages and layouts
- `components/` — React components organized by feature domain (home/, room/, reservation/, etc.)
- `data/static/` — Hardcoded static data (hotel, rooms, banners, notices, events, beds)
- `data/hooks/` — Custom hooks that return static data (replaced React Query hooks)
- `data/store/` — Zustand stores (modal, offers)
- `data/model/` — TypeScript type definitions
- `data/mapper/` — Data transformation functions
- `data/utils/constants.ts` — Static image URL (GCS), room descriptions

### State Management

- **Zustand** — Client state (modal visibility, offers)
- **Static Data** — All server data is hardcoded in `data/static/` files

### Images

Images are hosted on Google Cloud Storage. The base URL is defined in `data/utils/constants.ts`:
```
https://storage.googleapis.com/grammy_static/
```
Static data files contain image filenames which are combined with this base URL. Plan to migrate to local `public/images/` in the future.

### Routing

- `/@modal/(.)reservation/[roomId]` — Intercepting route for room info modal overlay
- `/reservation/[roomId]` — Full room info page (fallback)
- Room types from static data populate navigation

### Styling

- **Tailwind CSS** as primary (custom color: `third: "#c78390"`)
- **Framer Motion** for animations
- **Swiper** for carousels
- Global CSS in `app/globals.css` for calendar/navbar/slideshow overrides

### SEO

- JSON-LD structured data (LodgingBusiness schema) in layout.tsx
- Open Graph metadata configured
- sitemap.ts for sitemap generation
- Google/Naver site verification configured

## Branch Strategy

- `main` — Production
- `develop` — Development (default working branch)
- Feature branches: `youngjun/*`, merged via PRs

## Commit Convention

Emoji-prefixed messages: `🏷️` server/API, `📌` content, `🔧` fixes.

## Path Alias

`@/*` maps to project root (configured in tsconfig.json).
