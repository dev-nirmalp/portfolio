# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start Next.js dev server
- `npm run build` — Production build (includes lint + type-check)
- `npm run start` — Serve the production build
- `npm run lint` — Run ESLint

## Architecture

Next.js 15 (App Router) + React 19 + TypeScript + Apollo Client 4 portfolio site.

Single-page layout: all 5 sections render on `src/app/page.tsx`. No multi-page routing.

### Key directories
- `src/app/` — Next.js App Router (layout, page, globals.css)
- `src/components/sections/` — 5 section components (Home, Skills, Portfolio, About, Contact)
- `src/components/ui/` — Reusable card components (SkillCard, PortfolioCard, ServiceCard, SectionTitle)
- `src/components/` — Layout components (Navigation, MobileMenu, ColorSwitcher, Breaker, Preloader)
- `src/context/` — React contexts (ColorContext for theme color switcher, NavigationContext for menu/breaker/scroll)
- `src/data/` — Typed content arrays (skills, projects, services)
- `src/lib/apollo-client.ts` — Apollo Client configured with HttpLink
- `src/providers.tsx` — Client-side provider wrapper (Apollo + Color + Navigation)
- `public/images/` — All portfolio images and icons
- `public/fonts/` — Custom Monoton font

### Styling
Global CSS in `src/app/globals.css` (adapted from vanilla CSS). Uses CSS custom properties (`--color`, `--mainColor`) for theming. The color switcher modifies `--color` on `:root` at runtime. Google Fonts (Poppins, Raleway) and Font Awesome loaded via `<link>` tags in layout.

## Apollo Client v4 Notes

- Use `HttpLink` + `link` option instead of the `uri` shorthand on `ApolloClient`
- Import `ApolloProvider` from `@apollo/client/react`, not `@apollo/client`
