# CLAUDE.md — Context for Claude Code

## What is this project?

Waypoint is a website that helps recent movers find outdoor activities in their new city. Think of it as curated local guides — where to go, what's different about the activity here, where to find community, and insider tips only locals know.

## Current state

MVP in progress. One city (Denver), one complete guide (hiking). Four more activities need content: golf, rock climbing, cycling, running. The homepage and Denver hiking guide page are built.

## Key architecture choices

- No database — all content is in TypeScript files for simplicity. We'll add Prisma + Neon later.
- Static generation — these are content pages, not dynamic apps.
- City-first routes — `/denver/hiking` not `/hiking/denver`.
- Dark mode only — the design system uses a dark palette with emerald accents.

## When adding content or pages

- Follow the existing pattern in `src/lib/guides/denver-hiking.ts` for new guides
- The `CityActivityGuide` type in `src/lib/types.ts` defines the shape
- Register new guides in `src/lib/guides.ts`
- Guide pages live at `src/app/{city}/{activity}/page.tsx`

## Styling conventions

- Tailwind utility classes only (no CSS modules)
- `font-display` for headings, `font-body` for text, `font-mono` for stats/numbers
- Components use the `card-hover` class for interactive hover states
- Section dividers use the `section-divider` class
- Accent color is emerald/green (`accent-*` tokens in Tailwind config)

## What to avoid

- Don't add a database or ORM yet
- Don't add authentication or user accounts
- Don't add API routes — everything is server-rendered
- Don't use light mode — the design is dark-only for now
