# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server with HMR
npm run build     # TypeScript compilation + Vite production build
npm run lint      # ESLint validation
npm run preview   # Preview the production build locally
```

There is no test runner configured in this project.

## Architecture

This is a React 19 + TypeScript + Vite SPA. The project is in early scaffold phase — `App.tsx` is currently a near-empty root component, and the CSS foundation is in place but no feature components exist yet.

**Entry flow:** `index.html` → `src/main.tsx` (ReactDOM root, StrictMode) → `src/App.tsx`

**Styling system:** Two CSS files with a variable-based theming architecture:
- `src/index.css` — global CSS variables, typography, layout, and `prefers-color-scheme` dark mode support
- `src/App.css` — component-level styles (hero section, buttons, responsive grid)

## TypeScript Strictness

The compiler enforces `noUnusedLocals`, `noUnusedParameters`, and `erasableSyntaxOnly`. Unused imports or variables will cause build failures. JSX uses the react-jsx auto-transform (no need to import React in component files).

## Linting

ESLint 9 flat config (`eslint.config.js`) using TypeScript, React Hooks, and React Refresh plugins. Run `npm run lint` before committing.
