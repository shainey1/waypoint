# Waypoint

City-specific guides for outdoor activities. Built for people who just moved to a new city and want to get outside.

## Architecture Decisions

- **No database for MVP.** Content lives in TypeScript files under `src/lib/`. When we add city #2 or user accounts, we'll migrate to Prisma + Neon.
- **Static generation.** All pages are statically generated at build time. Content changes infrequently.
- **City-first routing.** URLs are `/{city}/{activity}` (e.g., `/denver/hiking`). No dual-path routing.
- **MDX not yet used.** Guide content is stored as structured data in TS files. MDX can be added later for richer narrative sections.
- **No image hosting.** Using external URLs (Unsplash) for MVP. Migrate to Vercel Blob later.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS (dark mode only)
- Deployed on Vercel

## Project Structure

```
src/
  app/
    page.tsx                    # Homepage
    layout.tsx                  # Root layout
    globals.css                 # Global styles + Tailwind
    denver/
      page.tsx                  # City overview
      hiking/
        page.tsx                # Guide page (the main content page)
  components/
    Header.tsx
    Footer.tsx
    ActivityCard.tsx
    SpotCard.tsx
    CommunityCard.tsx
    DifficultyBadge.tsx
    SectionHeading.tsx
  lib/
    types.ts                    # All TypeScript types
    data.ts                     # Cities + activities definitions
    guides.ts                   # Guide loader (by city/activity slug)
    guides/
      denver-hiking.ts          # Denver hiking content data
```

## Current Scope

- **City:** Denver only
- **Activities:** Hiking (complete), Golf, Rock Climbing, Cycling, Running (need content)
- **Pages:** Homepage, `/denver`, `/denver/hiking`

## Adding a New Activity Guide

1. Create `src/lib/guides/denver-{activity}.ts` following the `CityActivityGuide` type
2. Register it in `src/lib/guides.ts`
3. Create `src/app/denver/{activity}/page.tsx` (can copy hiking page structure)

## Adding a New City

1. Add city to `cities` array in `src/lib/data.ts`
2. Create guide files under `src/lib/guides/{city}-{activity}.ts`
3. Create route directories under `src/app/{city}/`

## Design

- Dark mode only
- Font stack: Space Grotesk (display), DM Sans (body), JetBrains Mono (mono)
- Accent: emerald/green
- Each activity has its own gradient color for visual variety

## Running Locally

```bash
npm install
npm run dev
```

Open http://localhost:3000
