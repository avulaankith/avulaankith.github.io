# Ankith Reddy Avula — portfolio

A responsive React and Vite portfolio for software engineering and applied AI work. It includes sanitized professional case studies, separate public repository summaries, a role-based project explorer, and a direct download of the latest resume.

## Local setup

Requirements: Node.js and npm.

```sh
npm ci
npm run dev
```

Vite prints a local development URL. The app uses React Router's hash URLs so project case studies work on static GitHub Pages hosting without a server-side routing rule.

## Checks

```sh
npm run lint
npm run build
npm run preview
```

There is no TypeScript configuration or automated test suite in this repository. The production build and ESLint are the available project checks.

## Deployment

The source repository is public. The portfolio is published on GitHub Pages at
https://avulaankith.github.io/ .

From the `portfolio-redesign` branch, publish the current production build with:

```sh
npm run deploy:github
```

This builds Vite and publishes `dist/` to the `gh-pages` branch. GitHub Pages serves
that branch from its root. Hash-based routes support direct case-study links.

The separate Sites deployment remains configured in `.openai/hosting.json` at
https://ankith-reddy-avula.windyshortbread16.chatgpt.site/ .
Updating GitHub Pages does not update that separate deployment.

## Role-based project explorer

“Explore my fit” highlights curated projects for six engineering roles, with a short explanation of their relevance. It does not accept job descriptions or calculate match scores. The former “Ask Ankith AI” interface has been removed.

Ashtadhyayi MCP is listed as an in-progress personal project based on its local repository documentation. Public hosting and broader evaluation remain in progress; no live demo or general Sanskrit reasoning accuracy is claimed.

## Updating portfolio content

- Update experience, skills, education, professional case studies, and public repository descriptions in `src/content/portfolio.js`.
- Keep client work sanitized. Professional work and public projects are rendered in separate sections.
- Add a case study by adding an entry to `projects`, including its `slug`, `flow`, `sections`, category, and status. The route is created automatically at `/#/work/<slug>`.
- Change curated role highlights and relevance descriptions in `roleEvidence` in `src/pages/Home.jsx`.

## Images and resume

- The hero uses the supplied portrait at `public/images/ankith-portrait-cutout.png`. Replace it with an approved portrait at that path to keep the current reference, or update the hero image path in `src/pages/Home.jsx`.
- Project thumbnails are local assets under `public/images/`. Use only images you have permission to publish.
- The resume link points to `public/Ankith-Reddy-Avula-Resume.pdf`, copied from the supplied `Ankith_Reddy_Avula_Amazon_Resume (1).pdf`. Replace that file with the new resume or update `profile.resume` in `src/content/portfolio.js`.
- `public/resume_sde.pdf` is an older September 2024 resume and is not linked as the current resume.

## Content integrity

Some professional project pages are sanitized architecture explanations based on the supplied project brief, not assertions that a specific architecture is deployed. Status and reported metrics are labeled where confirmation is needed. See [CONTENT_REVIEW.md](./CONTENT_REVIEW.md) before strengthening project claims or publishing additional client details.
