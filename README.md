# Pablo Dorin — Professional Portfolio

Multilingual professional portfolio for Pablo Dorin, Senior Software
Developer specialising in Java backend and full-stack development.

The site presents professional experience, technologies, education,
AI-augmented development practices, personal interests, and contact resources
for recruiters, engineering teams, and international employers.

## Current implementation

The portfolio is a static React application with three independently loadable
language entry points:

- English: `/`
- Spanish: `/es/`
- French: `/fr/`

Implemented features include:

- static multilingual HTML entry points;
- reciprocal `hreflang` links;
- language-specific metadata;
- light and dark themes with persisted preference;
- accessible desktop and mobile navigation;
- Git-inspired desktop section navigation;
- responsive layouts;
- SEO metadata, Open Graph, Twitter/X metadata, and JSON-LD;
- professional experience, technologies, education, AI Workflow, About Me,
  and Contact sections;
- downloadable English CV.

Projects and the Endpoint technology blog currently remain intentional
placeholders.

## Core technologies

- React
- JavaScript
- Vite
- HTML
- CSS

The project does not use TypeScript or require a backend.

## Local development

Requirements:

- Node.js 20.19 or later
- npm

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Local language URLs:

- `http://localhost:5173/`
- `http://localhost:5173/es/`
- `http://localhost:5173/fr/`

Validate and build:

```bash
npm run lint
npm run build
```

Vite writes generated production output to the ignored `dist/` directory.

## Production URLs

The approved production URL structure is:

- `https://pablodorin.com/`
- `https://pablodorin.com/es/`
- `https://pablodorin.com/fr/`

A GitHub Actions workflow now builds and deploys the generated `dist/` artifact
through GitHub Pages. Final GitHub Pages setup and public custom-domain
validation are still pending; the repository does not yet claim a completed
deployment at `pablodorin.com`.

## Repository structure

```text
.
├── index.html             English entry document
├── es/index.html          Spanish entry document
├── fr/index.html          French entry document
├── public/                Static public assets, CV, robots, and sitemap
├── src/
│   ├── app/               Application composition
│   ├── assets/            Vite-managed source assets
│   ├── components/        Reusable interface components
│   ├── content/           Approved English source content
│   ├── hooks/             Application hooks
│   ├── i18n/              Language resources and URL-based resolution
│   ├── sections/          Portfolio sections
│   ├── seo/               Runtime metadata and structured data
│   └── styles/            Design tokens and scoped styles
└── vite.config.js         Multi-entry production build
```

Project decisions and factual professional content are documented in
`PROJECT_CONTEXT.md`, `CONTENT_MASTER.md`, `DESIGN_SYSTEM.md`, and
`ROADMAP.md`.

## Project status

The core multilingual portfolio, accessibility review, metadata foundation,
and repository cleanup are implemented. The following remain deferred:

- Projects content;
- Endpoint Blog;
- final social-sharing image;
- final LinkedIn banner;
- final GitHub Pages, custom-domain, DNS, and HTTPS validation;
- analytics and Search Console;
- final hands-on cross-browser and linguistic validation.

## Author

Pablo Dorin — Senior Software Developer

- Portfolio: `https://pablodorin.com/`
- LinkedIn: `https://www.linkedin.com/in/pablo-dorin/`
- GitHub: `https://github.com/pablodorin`

## Licence

No open-source licence has been declared. All rights are reserved unless a
licence is added explicitly.
