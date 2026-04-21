# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server with HMR (no type-check)
npm run start     # Type-check + start dev server
npm run build     # TypeScript compilation + Vite production build
npm run lint      # ESLint validation
npm run preview   # Preview the production build locally
npm run test      # Run Vitest test suite (jsdom environment)
```

Always run `npm run lint` and `npm run test` before considering a task complete.

## Project overview

Little Lemon is a Mediterranean restaurant web app — a React 19 + TypeScript + Vite SPA with two pages:
- `/` — Home: Navbar + Hero + Specials sections
- `/booking` — Table reservation: Navbar + BookingForm driven by `useReducer`

Routing is handled by React Router v7 (`BrowserRouter` + `Routes`/`Route` in `App.tsx`).

## File structure

```
src/
  main.tsx                  # ReactDOM root, StrictMode
  App.tsx                   # BrowserRouter + route definitions
  index.css                 # Global CSS variables + resets
  App.css                   # App-level layout styles
  assets/                   # Images and SVGs
  components/
    BookingForm/            # Controlled form; receives availableTimes + dispatch
    Hero/                   # Homepage hero section
    Navbar/                 # Shared navigation bar
    Specials/               # SpecialCard + Specials container
  pages/
    Home/                   # Composes Navbar + Hero + Specials
    Booking/                # useReducer owner; exports initializeTimes + updateTimes
  setupTests.ts             # Vitest global setup (@testing-library/jest-dom)
```

Each component lives in its own folder with a co-located `.css` file. Pages own pages-level state (e.g. `availableTimes`) and pass it down to components.

## Design system / CSS

All design tokens are CSS custom properties defined in `src/index.css`:

| Variable | Value | Usage |
|---|---|---|
| `--primary-green` | `#495e57` | Primary brand color |
| `--primary-yellow` | `#f4ce14` | Accent / CTA color |
| `--secondary-orange` | `#ee9972` | Secondary accent |
| `--secondary-pink` | `#fbdabb` | Secondary accent |
| `--highlight-dark` | `#333333` | Body text |
| `--highlight-light` | `#edefee` | Light backgrounds |
| `--font-sans` | `'Karla'` | Body font |
| `--font-display` | `'Markazi Text'` | Headings / display font |

Always use these variables in CSS — never hardcode hex colors or font names.

## State management pattern

The booking flow uses React's built-in `useReducer`:
- `initializeTimes()` — returns the initial `string[]` of available time slots
- `updateTimes(state, action)` — reducer; currently returns the same times (TODO: filter by date once API is wired)
- Both are exported from `src/pages/Booking/Booking.tsx` so that tests can import them directly

Do not introduce external state management (Redux, Zustand, etc.) without explicit instruction.

## TypeScript strictness

The compiler enforces:
- `noUnusedLocals` / `noUnusedParameters` — unused imports or variables will cause **build failures**
- `erasableSyntaxOnly` — use `import type` for type-only imports
- `noFallthroughCasesInSwitch`
- JSX uses the `react-jsx` auto-transform — **do not** `import React from 'react'`

## Testing

- Framework: **Vitest** + **@testing-library/react** + **@testing-library/jest-dom**
- Environment: `jsdom` (configured in `vite.config.ts`)
- Setup file: `src/setupTests.ts`
- Test files co-located with components: `ComponentName.test.tsx`
- Run with: `npm run test`

Test conventions:
- Use `describe` / `it` / `expect` (Vitest globals — no imports needed)
- Use `vi.fn()` for mocks
- Query by accessible roles and labels (`getByRole`, `getByLabelText`, `getByText`) — avoid querying by class name or test IDs
- Test reducer functions (`initializeTimes`, `updateTimes`) separately from the component

## Linting

ESLint 9 flat config (`eslint.config.js`) using `typescript-eslint`, `eslint-plugin-react-hooks`, and `eslint-plugin-react-refresh`. Run `npm run lint` before committing.

## Key TODOs in the codebase

- `BookingForm.tsx` `handleSubmit` — wire up to a real reservation API
- `updateTimes` reducer — filter available times based on selected date once the API is available
- No footer, testimonials, or about sections have been built yet

## Assets and documentation

- Restaurant images live in `src/assets/`
- Figma design files and wireframes are in `figma/`
- Project documentation (useful links, wireframe descriptions) lives in `documentation/`
