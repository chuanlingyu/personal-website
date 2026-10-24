# Local validation

Portfolio audit applied and checked October 24, 2026. All work remains local.

## Changes

- Added the user-supplied Grade Predictor repository as an underlined “View code” link, with native keyboard access, visible focus, and an accessible new-tab announcement. No links were invented for other projects.
- Increased project contribution and expanded-note text to 14–16px (14px on mobile). Supporting project labels, dates, tags, and metric captions are 12–13px; summaries and the code link are 14px.
- Removed the body's 320px minimum width, allowed filters and metrics to wrap, allowed narrow content to shrink, and constrained decorative orbit dimensions to their container. No overflow-hiding rule was added. At the smallest widths the education and skills columns stack.
- Grade Predictor shows 0.159 course-GPA MAE on 15,227 held-out samples and identifies approximately 76,000 records as the overall dataset. Evaluation context stays visible on mobile.
- Skyline 3 distinguishes personal API/graph work from team status: map visualization uses bundled JSON; frontend/API integration, integrated traffic simulation, and optimization remain pending. The runtime-verification caveat is preserved.

## Checks

- `npm.cmd run lint`: passed.
- `npm.cmd run typecheck`: passed.
- Fresh `npm.cmd run build`: passed after the final source change (TypeScript and Vite production output).
- Tested production output using Microsoft Edge 156.0.4314.42 through Playwright. Viewport widths: 1440, 1100, 851, 850, 768, 621, 620, 390, and 320px.
- Thirty layout checks passed: notes closed, all notes expanded, and all notes expanded with a stable scrollbar gutter, plus mobile menus open. Conventional 15px scrollbars were enabled: at 320px the document client width and scroll width were both 305px. No elements exceeded the page bounds.
- At every width, filters produced the correct counts (All work: 5, Applied ML: 2, Software: 3), pressed state, and live result text.
- At every width, all five native disclosures opened with Enter, closed with Space, and reopened with Enter. Contribution/note body sizes were verified as 14–16px.
- Mobile navigation opened by keyboard, closed with Escape and restored focus, and closed when its Work link was selected.
- The skip link was first in tab order and navigated to main content. Tab navigation reached View code with a visible outline; Enter opened the supplied GitHub URL in a new tab.
- All internal anchor targets exist; mobile Work navigation and the skip link were exercised. The email link retains the authorized mailto address; no message was sent.
- All three résumé download links downloaded `Chuanling-Yu-Resume.pdf`; each was 89,614 bytes and byte-for-byte identical to the original local PDF.
- Grade Predictor repository and GitHub profile returned HTTP 200. LinkedIn returned HTTP 999, so destination availability could not be verified through automation; its existing URL was preserved.
- No browser console warnings, console errors, or uncaught page errors during checks.
- Desktop and mobile screenshots were captured and visually reviewed, including a detailed crop of expanded notes at 320px.

## Review artifacts

- `.qa/audit-1440.png` and `.qa/audit-1440-expanded.png`
- `.qa/audit-390.png` and `.qa/audit-390-expanded.png`
- `.qa/audit-320.png` and `.qa/audit-320-expanded.png`
- `.qa/audit-390-detail.png` and `.qa/audit-320-expanded-detail.png`
- `.qa/audit-results.json`: measured widths, links, downloads, external HTTP responses, and browser errors.
- `.qa/audit-check.cjs`: local browser check script; uses preinstalled Playwright and Edge without adding project dependencies.
- `.qa/before-portfolio-audit-20261024/`: pre-edit source/document snapshot. This folder has no Git repository, so this preserves the starting files for comparison. `.qa` is already ignored by the existing `.gitignore`.

## Metadata and remaining limitations

`index.html`, the title, description, existing Open Graph title/description/type, and `public/favicon.svg` are byte-for-byte unchanged. No production domain, canonical URL, social URL, or placeholder was added.

After choosing the production domain:

1. Add an absolute canonical URL and matching `og:url` for the final HTTPS homepage.
2. Create and approve a social preview image, then add its absolute `og:image` URL, dimensions, and descriptive `og:image:alt`.
3. Add Twitter/X card metadata (`twitter:card`, title, description, image, and image alt) if social previews are desired. Only add an account handle if supplied and verified.
4. Verify metadata against the eventual deployed page and public preview image. A sitemap/robots policy can also be finalized using the chosen domain.

Testing used desktop Edge with mobile viewport sizes, not physical mobile devices, Safari, Firefox, or a full screen-reader audit. LinkedIn availability remains unverified because of its automated-request response. Email-client delivery was not tested. Original résumé PDF and career source documents were not modified. No repository creation, push, publishing, or deployment was performed.
