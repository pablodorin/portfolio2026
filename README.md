# Professional Portfolio 2026

Live site: [pablodorin.com](https://pablodorin.com)

Professional Portfolio 2026 is Pablo Dorin's multilingual professional
portfolio, technical blog, and project showcase. It presents more than
eighteen years of software-development experience through one coherent public
identity focused on Java backend, full-stack development, enterprise
applications, system integration, and AI-augmented engineering.

## Main capabilities

- English, Spanish, and French portfolio entry pages.
- Accessible desktop and mobile navigation with stable section hashes.
- Light and dark themes with persisted preference.
- Professional Experience, Technologies, Projects, AI Workflow, Education,
  Endpoint Blog, About Me, and Contact sections.
- Four-position accessible Projects carousel with no autoplay.
- Six Endpoint articles published in three languages through eighteen generated
  static article pages.
- Downloadable English CV and verified professional links.
- Local institution assets, responsive layouts, and reduced-motion support.
- Localized metadata, canonical and reciprocal `hreflang` links, Open Graph,
  Twitter metadata, JSON-LD, sitemap, and robots directives.
- Cloudflare Web Analytics integrated statically across every public page.

## Technology stack

The current locked installation uses:

- React 19.2.8;
- React DOM 19.2.8;
- Vite 8.1.5;
- JavaScript, JSX, HTML, and CSS;
- Git and GitHub;
- GitHub Actions and GitHub Pages;
- Cloudflare Web Analytics.

Development quality tooling includes ESLint 10.8.0 and
`@vitejs/plugin-react` 6.0.4. The portfolio does not use TypeScript or require
a backend.

## Architecture

The project is a static React multi-page application. Vite builds:

- three portfolio pages at `/`, `/es/`, and `/fr/`;
- one generated static page for every Endpoint article and language.

The URL determines the active language. Shared React components render the
portfolio and article interfaces, while language-specific static documents
provide correct metadata and document language before React loads. Endpoint
articles are stored as Markdown under `src/content/endpoint/<year>/<article>/`.
The build validates the three required translations and generates the React
article registry, route HTML, metadata, circular navigation, and sitemap.

## Publishing an Endpoint article

Create one directory under the publication year and add `es.md`, `en.md`, and
`fr.md`. Each file contains JSON-valued frontmatter followed by level-two
Markdown headings and paragraphs. Use an existing article as the editorial
template.

Run `npm run generate:endpoint` to validate the content and inspect the
generated routes. The same generation runs automatically before development,
lint, and production builds. Generated HTML, the sitemap, and the React article
registry are build artifacts and must not be edited or committed.

## AI-augmented development model

The initial implementation used a human-directed, AI-augmented iterative
workflow:

- Pablo Dorin defined the objectives, scope, requirements, professional
  content, visual references, design direction, acceptance criteria, and
  corrections.
- Pablo reviewed every result, identified defects, and accepted or rejected
  each change.
- Pablo manually performed Git operations, commits, push, publication, and
  production review.
- ChatGPT supported analysis, specification development, editorial
  collaboration, and multilingual content work.
- OpenAI Codex inspected the repository, implemented and refined the code, and
  executed repository validation.

Pablo wrote no code manually during the initial period. This does not imply an
absence of authorship: product direction, requirements, content, design
decisions, validation, and publication remained under his control.

## Initial productivity snapshot

| Metric | Verified value |
| --- | --- |
| Initial active development | 13 hours |
| Initial sessions | 2 |
| Initial period | July 27–28, 2026 |
| Session 1 | July 27, 13:00–19:00 |
| Session 2 | July 28, 14:00–21:00 |
| Manual code written by Pablo | 0 lines |
| Human direction and validation | Pablo Dorin |
| Code implementation | OpenAI Codex |
| Analysis and editorial support | ChatGPT |
| Git, commit, push, and publication | Pablo Dorin |

No conventional-development baseline was recorded, so the project does not
claim a productivity acceleration percentage. Exact Codex token consumption
was not available and is not estimated.

## Validation and quality

Repository validation commands:

```bash
npm run lint
npm run build
git diff --check
```

Accessibility and SEO work are recorded in
[ACCESSIBILITY_AUDIT.md](ACCESSIBILITY_AUDIT.md) and
[SEO_AUDIT.md](SEO_AUDIT.md). Responsive and visual reviews cover mobile,
tablet, desktop, short desktop, light theme, dark theme, keyboard interaction,
and reduced-motion behaviour.

The repository currently has no automated unit or integration test suite.
Linting and a successful production build are validation checks, not automated
tests.

## Deployment

The live site is published at [pablodorin.com](https://pablodorin.com).
GitHub Actions checks out the repository, installs locked dependencies with
`npm ci`, runs lint and the production build, uploads `dist/`, and deploys the
artifact through GitHub Pages. Pablo performs and validates the publication
workflow.

Cloudflare Web Analytics is the selected analytics provider. Its official
beacon exists statically in all twelve source documents and is preserved in
the generated production HTML.

## Documentation

- [Project context](PROJECT_CONTEXT.md)
- [Approved content](CONTENT_MASTER.md)
- [Design system](DESIGN_SYSTEM.md)
- [Roadmap](ROADMAP.md)
- [Accessibility audit](ACCESSIBILITY_AUDIT.md)
- [SEO audit](SEO_AUDIT.md)
- [Repository audit](REPOSITORY_AUDIT.md)
- [Productivity case study](docs/PORTFOLIO_PRODUCTIVITY_CASE_STUDY.md)

## Current status

Professional Portfolio 2026 is live and under continuous development.
Portfolio2026 is Project 01 in the Projects showcase. JS1: Job Application
Manager is the planned Project 02. Projects 03 and 04 remain explicitly
undefined until their objectives and scope are approved.

## Local development

Requirements:

- Node.js 20.19 or later;
- npm.

```bash
npm install
npm run dev
```

Local portfolio URLs:

- `http://localhost:5173/`
- `http://localhost:5173/es/`
- `http://localhost:5173/fr/`

## Author

Pablo Dorin — Senior Software Developer

- Portfolio: [pablodorin.com](https://pablodorin.com)
- LinkedIn: [linkedin.com/in/pablo-dorin](https://www.linkedin.com/in/pablo-dorin/)
- GitHub: [github.com/pablodorin](https://github.com/pablodorin)

## Licence

No open-source licence has been declared. All rights are reserved unless a
licence is added explicitly.
