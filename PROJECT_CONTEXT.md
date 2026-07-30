# PROJECT_CONTEXT.md

## Project name

Pablo Dorin — Professional Portfolio

## Purpose

Build a professional portfolio for Pablo Dorin that supports his search for
Senior Software Developer, Java Backend, and Full-Stack positions.

The portfolio must communicate:

1. extensive enterprise software engineering experience;
2. strong Java backend and system-integration capabilities;
3. full-stack development experience;
4. practical AI-augmented engineering workflows;
5. a broader human, cultural, and intellectual perspective.

## Professional positioning

Primary title:

Senior Software Developer

Specialization:

Java Backend & Full-Stack Development

Primary SEO specialization:

Senior Java Developer

Professional subtitle:

Enterprise Applications, System Integration & AI-Augmented Engineering

Experience statement:

18+ years of professional experience.

Developer is the preferred personal professional title. Software engineering
remains valid terminology for the discipline, practices, methods, and
processes. Approved employer-assigned Engineer titles remain unchanged as
historical facts.

Java and Spring Boot are the central professional technologies.

React and JavaScript are used to build the portfolio interface and also
represent Pablo's full-stack experience.

## Target audience

The main audience includes:

- technical recruiters;
- engineering managers;
- software architects;
- Java backend teams;
- full-stack teams;
- international employers;
- remote-first companies;
- consulting companies;
- financial-services organizations;
- enterprise-software organizations.

The site must remain understandable to both technical and non-technical
visitors.

## Approved implementation stack

The portfolio itself will use:

- React;
- JavaScript;
- JSX;
- HTML;
- CSS;
- Vite;
- npm;
- Git;
- GitHub.

Do not use TypeScript.

Do not add a Java backend merely to demonstrate Java knowledge.

Java and Spring Boot must instead be demonstrated through:

- professional experience;
- technology presentation;
- portfolio projects;
- source-code repositories;
- architecture explanations;
- technical articles;
- case studies.

## Site type

Version 1 is a static frontend application.

It will be hosted using GitHub Pages and connected to the custom domain:

pablodorin.com

The site must work correctly over HTTPS.

Phase 10A provides a GitHub Actions workflow that builds the application from
the locked npm dependencies and deploys the generated `dist/` artifact through
GitHub Pages. GitHub Pages must use GitHub Actions as its source. The workflow
exists in the repository, but public deployment has not yet been validated.
Custom-domain configuration, DNS, and HTTPS validation remain pending.

## SEO and metadata

Production origin:

https://pablodorin.com

Canonical homepage:

https://pablodorin.com/

Phase 8A and Phase 8C use a lightweight custom metadata architecture:

- language-specific defaults are present in `index.html`, `es/index.html`, and
  `fr/index.html`;
- locale-specific values are centralised in `src/seo/seoContent.js`;
- one React hook updates existing title, description, Open Graph, Twitter/X,
  and JSON-LD values consistently with the active URL language;
- every language page has a self-referencing canonical;
- every language page exposes the same reciprocal `en`, `es`, `fr`, and
  `x-default` alternate set;
- one `ProfilePage` JSON-LD block describes Pablo through `mainEntity: Person`;
- `robots.txt` references a sitemap containing the three canonical pages.

The final social preview image and LinkedIn banner remain deferred pending
visual-consistency review.

## Languages

Supported languages:

- English (`en`);
- Spanish (`es`);
- French (`fr`).

English is the default language.

The language selector must use text labels:

EN · ES · FR

Do not use flags as language selectors.

An explicit language selection may be recorded in local storage as advisory
data, but the current URL remains the authoritative language source.

Current implementation:

- English remains the default language;
- `/` is the English document;
- `/es/` is the Spanish document;
- `/fr/` is the French document;
- pathname is authoritative, followed by the static document language and then
  an English fallback;
- explicit selection may be recorded under `portfolio-language` as advisory
  data but never redirects or overrides the URL;
- every document has the correct static `lang` before React renders;
- section ids and anchor destinations remain language-independent;
- language changes use real links and perform an expected document navigation;
- the complete Spanish interface and approved portfolio content are available
  through the `es` locale;
- the complete French interface and approved portfolio content are available
  through the `fr` locale.

Implemented navigation structure:

- `/`
- `/es/`
- `/fr/`

The main portfolio language URLs are static and compatible with GitHub Pages.
Endpoint publishes five complete articles in Spanish, English, and French
through fifteen generated static article URLs. Spanish is the editorial source
language. Markdown sources are grouped by publication year and article; the
build generates route documents, metadata, navigation, and the sitemap.

## Themes

The site must provide:

- a light theme;
- a dark theme;
- operating-system preference on the first visit;
- manual theme selection;
- persisted theme preference.

The light theme is the primary visual direction.

The dark theme must preserve the same editorial identity and readability.

Implementation status: Phase 5A implemented.

The selected theme is applied through a `data-theme` attribute on the root
document element. The operating-system preference determines the first visit.
An explicit user selection is persisted locally and overrides the system
preference on later visits. The visual direction is French editorial
minimalism with software-engineering structure, without literal flag
decoration or neon treatment.

The Projects placeholder has been replaced by an accessible four-position
editorial showcase carousel. Professional Portfolio 2026 is the live and
evolving Project 01, JS1 is the planned Project 02, and Projects 03–04 remain
explicitly undefined. The carousel has no autoplay, uses circular navigation,
and exposes verified live-site, repository, and case-study links only for
Project 01. Endpoint Blog publishes five complete articles across fifteen
localized static pages.

## Main navigation

Desktop navigation:

1. Home
2. Experience
3. Technologies
4. Projects
5. AI Workflow
6. Education
7. Endpoint
8. About Me
9. Contact

Desktop behaviour:

- fixed vertical navigation;
- scrollable main content;
- visible active-section indicator;
- language selector;
- theme control;
- professional links.

Mobile behaviour:

- compact header;
- accessible menu button;
- collapsible navigation;
- language selector;
- theme control;
- no permanent sidebar;
- no horizontal scrolling.

## Main page sections

The primary portfolio page will contain:

The numbered headings below identify each section's canonical page position;
their specification blocks remain grouped here for documentation readability.

### 1. Home

A hero introduction presenting:

Pablo Dorin

Senior Software Developer

Java Backend & Full-Stack Development

Enterprise Applications · System Integration · AI-Augmented Engineering

Primary actions:

- View Projects
- Read Endpoint
- Contact Me

The hero should use a clean editorial background without Git-history
decoration.

### 2. Experience

Professional experience presented chronologically.

The Experience index includes a Freelance destination that links directly to
Projects. Freelance does not use a separate Experience entry.

Each experience may include:

- company;
- role;
- dates;
- location;
- context;
- concise description;
- selected responsibilities;
- selected contributions;
- relevant technologies.

The portfolio must not reproduce the CV word for word.

It should emphasize:

- technical decisions;
- architecture;
- system integration;
- software quality;
- business-critical applications;
- international collaboration;
- technical leadership;
- testing;
- reliability;
- performance;
- professional context.

### 3. Technologies

Technologies must be grouped by professional relevance.

#### Core backend

- Java
- Spring Boot
- REST APIs
- SQL
- JUnit
- Git

#### Architecture and integration

- Software Architecture
- System Integration
- Enterprise Applications
- Microservices
- Testing Practices
- Clean Code

#### Frontend and full-stack

- React
- Angular
- JavaScript
- HTML
- CSS

#### Data and infrastructure

- PostgreSQL
- MySQL
- Docker
- Kubernetes
- CI/CD

#### Additional experience

- Node.js
- PHP

Do not imply equal expertise in every technology.

Do not use:

- percentages;
- progress bars;
- star ratings;
- beginner/intermediate/expert labels.

### 6. Education

The main Education section will use only approved information from
`CONTENT_MASTER.md`:

- ORT Argentina — Computer Systems Analyst / Associate's Degree in Systems
  Analysis, 2019–2022;
- University of Buenos Aires — Undergraduate Studies in Psychology,
  2026–Present;
- Selected Participant, International Visitor Leadership Program,
  U.S. Department of State, Washington, DC, 2017.

- Metropolitan University for Education and Work (UMET) — Economics,
  2017–2018; degree not completed.

### 4. Projects

Current showcase order:

#### Professional Portfolio 2026

A live multilingual professional portfolio, technical blog, and project
showcase developed through a human-directed, AI-augmented iterative workflow.

Verified destinations:

- live site: `https://pablodorin.com`;
- repository: `https://github.com/pablodorin/portfolio2026`;
- productivity case study:
  `docs/PORTFOLIO_PRODUCTIVITY_CASE_STUDY.md`.

#### JS1 — Job Application Manager

A portfolio application for registering and managing:

- job applications;
- companies;
- statuses;
- interviews;
- follow-up activities.

Planned backend stack:

- Java;
- Spring Boot;
- PostgreSQL;
- REST APIs;
- tests;
- Git;
- Docker.

The frontend implementation will be decided during the project.

Projects 03 and 04 remain undefined until their technical objectives, scope,
and demonstration value are approved.

#### Java Katas

A curated collection of Java exercises demonstrating:

- problem solving;
- code clarity;
- algorithmic thinking;
- testing;
- continuous practice;
- Git usage.

Each project should eventually present:

- problem;
- context;
- approach;
- technical decisions;
- technologies;
- validation;
- repository;
- current status;
- AI usage when relevant.

### 5. AI Workflow

This is a central section of the portfolio.

Core concept:

AI is a machine tool.

AI may support:

- problem analysis;
- technical exploration;
- implementation;
- refactoring;
- code review;
- test design;
- debugging;
- documentation;
- continuous learning.

The section must clearly state that the following remain human responsibilities:

- understanding the problem;
- architecture decisions;
- acceptance or rejection of generated code;
- functional validation;
- security judgment;
- technical judgment;
- professional responsibility.

Current tools may include:

- OpenAI Codex;
- ChatGPT.

Do not present AI tools as programming languages or frameworks.

Do not present Pablo as an AI Engineer.

### 8. About Me

This section should humanize the professional profile without becoming a
complete autobiography.

Approved themes:

#### Karate and discipline

Pablo practices Shotokan karate.

Possible connections:

- discipline;
- repetition;
- patience;
- self-control;
- continuous improvement.

#### Languages and culture

- Spanish: native;
- English: full professional proficiency;
- French: limited working proficiency and actively improving.

#### Psychology and human behaviour

Pablo is pursuing undergraduate studies in Psychology at the University of
Buenos Aires.

Possible connections:

- motivation;
- decision-making;
- human behaviour;
- teamwork;
- people interacting with complex systems.

#### Broader interests

- history;
- culture;
- travel;
- technology and society;
- transformation of work;
- continuous learning.

Do not include private, financial, medical, or sensitive information.

### 7. Endpoint

Blog name:

Endpoint

Visible portfolio section heading:

Endpoint Blog

Tagline:

Request & Response about the IT industry

Editorial themes:

- software engineering;
- Java;
- AI and software development;
- architecture;
- system integration;
- the IT industry;
- technology and work;
- technical learning;
- professional transformation.

The Endpoint design should remain connected to the portfolio while having a
slightly more editorial identity.

Each article should eventually contain:

- title;
- summary;
- publication date;
- category;
- tags;
- estimated reading time;
- language;
- slug;
- article body.

The approved initial editorial order is:

1. AI-Augmented Engineering
2. Code Is No Longer the Bottleneck
3. Microservices: When They Solve Problems—and When They Multiply Them

The portfolio landing section is localized in English, Spanish, and French.
The Endpoint carousel displays one complete card at a time with article
number, publication date, editorial kicker, title, and compact summary. It
supports circular navigation and reversible chronological ordering. Cards
link to the complete localized articles. Newest-to-oldest is the default
ordering.

Articles are written originally in Spanish. AI-assisted English and French
translations receive author review and show a localized disclosure near the
beginning of every published page.

Approved disclosure text:

- Spanish: `Artículo escrito originalmente en español. Las versiones en inglés
  y francés fueron traducidas con asistencia de IA y revisadas por el autor.`
- English: `Originally written in Spanish. The English and French versions
  were translated with AI assistance and reviewed by the author.`
- French: `Article rédigé à l’origine en espagnol. Les versions anglaise et
  française ont été traduites avec l’aide de l’IA et révisées par l’auteur.`

Article pages provide Back to Endpoint links targeting `#endpoint`
for the current language, accessible Previous and Next links that name their
destinations, and circular navigation across the initial order.

The required Back destinations are `https://pablodorin.com/#endpoint`,
`https://pablodorin.com/es/#endpoint`, and
`https://pablodorin.com/fr/#endpoint`.

### 9. Contact

The contact section may include:

- LinkedIn;
- GitHub;
- professional email;
- downloadable CV;
- Buenos Aires, Argentina;
- availability for remote and international opportunities.

Do not publish:

- home address;
- personal identification numbers;
- financial information;
- private phone numbers.

## Visual identity

The portfolio should feel:

- professional;
- editorial;
- technical;
- contemporary;
- restrained;
- human;
- intellectually curious.

Primary characteristics:

- near-white light environment;
- generous whitespace;
- clear typography;
- structural blue with restrained red counterpoints;
- selectable dark-navy theme with warm off-white text;
- vertical desktop navigation;
- a Git-history-inspired desktop navigation graph;
- subtle use of technology logos;
- restrained motion;
- subtle depth.

Avoid:

- cyberpunk aesthetics;
- neon colors;
- terminal simulations;
- robot imagery;
- AI brain imagery;
- excessive gradients;
- generic stock illustrations;
- animated particle backgrounds;
- crowded card grids;
- visual effects that distract from content.

## Git-history visual concept

Git-history-inspired lines and commit-like nodes are part of the visual
identity.

They represent:

- professional evolution;
- software history;
- branching decisions;
- integration;
- collaboration;
- continuous development.

Their primary use is an accessible desktop navigation graph that connects
portfolio sections through branching and merging paths.

The graph begins at Home and uses three colored paths:

- blue: nodes at Technologies and Education, converging with the coral path at
  About Me;
- coral: nodes at Experience and Projects, converging at Contact;
- purple: nodes at AI Workflow and Endpoint, converging at Contact;
- About Me: a coral node at the blue-to-coral convergence.

Endpoint is a purple node only. Contact is the final coral and purple merge.

The mobile navigation uses the same Git-history topology inside a compact,
collapsible, and accessible menu. Labels remain explicit, so the graph is not
required to understand or operate the links.

Accessibility and final-quality behaviour:

- the page has one main landmark and a translated skip link;
- mobile-menu background content becomes inert while the menu is open;
- Escape closes the mobile menu and restores focus to the menu button;
- mobile navigation moves focus to the selected section;
- active navigation and selected language expose programmatic states;
- reduced-motion mode presents static content without scroll snapping.

They must remain secondary to the content.

## Parallax

Subtle parallax may be considered during Phase 5 after the desktop navigation
graph has been visually validated.

Preferred implementation:

- separate decorative navigation layers;
- slightly different movement speeds;
- slow and restrained motion;
- Git branches and nodes moving independently from navigation labels.

Rules:

- essential text must remain stable;
- navigation must remain stable;
- buttons must remain stable;
- do not use scroll hijacking;
- do not use exaggerated movement;
- do not use parallax in every section;
- reduce or disable the effect on mobile;
- disable non-essential motion when
  `prefers-reduced-motion: reduce` is active;
- preserve performance and readability.

## Content sources

Professional information must come from:

- CONTENT_MASTER.md;
- the approved CV;
- the approved LinkedIn profile;
- approved project documentation;
- information explicitly confirmed by Pablo.

Do not invent missing information.

## Version 1 completion criteria

Version 1 is complete when:

- desktop navigation works;
- mobile navigation works;
- active-section detection works;
- light and dark themes work;
- English, Spanish, and French work;
- professional experience is accurate;
- technologies are presented clearly;
- education is complete and accurate;
- projects are shown;
- the AI Workflow section is included;
- About Me is included;
- Endpoint has an index;
- Endpoint publishes its first three articles in Spanish, English, and French;
- contact links work;
- the CV can be downloaded;
- the design is responsive;
- accessibility basics are satisfied;
- `npm run lint` succeeds;
- `npm run build` succeeds;
- the site is published on GitHub Pages;
- pablodorin.com points to the published site.
