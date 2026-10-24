# Chuanling Yu · Portfolio

A responsive, light-themed portfolio built with React, TypeScript, Vite, and Tailwind CSS. All content is local; no API keys, backend, tracking, external font service, or account setup is required.

## Local development

Use Node.js 24 LTS (see `.nvmrc`).

```sh
npm ci
npm run dev
```

Open the Local URL printed by Vite. Project notes expand on each card; filters show applied ML and software work. The mobile navigation supports Escape to close. The résumé is a real local PDF download.

## Validation

```sh
npm run typecheck
npm run lint
npm run build
npm run preview
```

## Content

- `src/data/portfolio.ts`: projects, personal contributions, status, interests, contact URLs, and résumé path.
- `src/components/`: reusable navigation, project card, and icon components.
- `src/styles.css`: Tailwind import, design tokens, responsive styling, and reduced-motion preferences.
- `public/chuanling-yu-resume.pdf`: authorized export of “My Resume,” retrieved October 22, 2026. Replace when updating the résumé.
- `CONTENT_SOURCES.md`: factual provenance and scope decisions.

The orbit illustration is decorative CSS, not a project screenshot or demo. Grade Predictor has the repository link supplied by the user; other projects have no invented links. Research topics are interests, not claims of research experience. Skills are separated into a foundation and areas currently developing.

## GitHub & Vercel

The source is ready to add to a GitHub repository; no remote has been created or pushed. Commit `package-lock.json` and the résumé PDF along with source files. `node_modules/`, build output, secrets, and Vercel local state are ignored.

**Review locally before deployment.** Once approved, import the repository in Vercel, select Node.js 24 and the Vite framework preset, and use `npm run build` with `dist` as the output directory. `vercel.json` provides these settings. No environment variables are needed.

Before publishing, review the personal email and résumé PDF (which includes a phone number), confirm current project status and Summer 2027 availability, and update metadata if needed. No public deployment was performed as part of this build.

## Accessibility

Semantic landmarks, one main heading, a skip link, visible keyboard focus, labeled filter buttons with pressed state, native accessible disclosure controls, a live result count, decorative icons hidden from assistive technology, and reduced-motion support. External profile links announce new-tab behavior. At narrow widths the project grid becomes a single column.
