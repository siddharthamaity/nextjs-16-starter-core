# AGENTS.md

Practical instructions for AI coding agents working in this repository.

## Scope

- Applies to the whole project.
- Prefer small, focused edits.

## Fast Start

- Install deps: `pnpm install`
- Run dev server: `pnpm dev`
- Build: `pnpm build`
- Lint: `pnpm lint`

No test framework is configured. Validate changes with `pnpm lint` and, when relevant, `pnpm build`.

## Project Shape

- Framework: Next.js App Router with source under `src/`
- Path alias: `@/*` -> `./src/*`
- Root layout: `src/app/layout.tsx` (theme provider + local fonts)
- Root route: `src/app/page.tsx` currently renders starter demo content

Starter demo route group:

- `src/app/(delete-this-and-modify-page.tsx)/` is intentionally disposable starter UI.
- For real features, replace/remove this group and point `src/app/page.tsx` (or new routes) to production components.

## Conventions To Keep

- TypeScript strict mode is enabled.
- Formatting/linting follow the repo config.
- Import order is enforced by Prettier plugin; keep imports grouped consistently.
- Existing UI in starter group uses co-located `.css` files per component.

## Theming Notes

- `next-themes` provider is configured in `src/app/layout.tsx`.
- Theme toggling logic exists in `src/app/(delete-this-and-modify-page.tsx)/ThemeSwitch.tsx`.
- If you remove the starter group, preserve or intentionally replace theme behavior.

## Containers

- `next.config.ts` uses `output: 'standalone'` to support Docker images.
- Dockerfiles: `Dockerfile` (Node) and `Dockerfile.bun` (Bun).

## Source Of Truth

- Detailed commands, architecture, and style: [CLAUDE.md](./CLAUDE.md)
- Setup and usage details: [README.md](./README.md)
