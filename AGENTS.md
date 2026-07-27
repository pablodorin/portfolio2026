# AGENTS.md

## Project

This repository contains Pablo Dorin's professional software engineering
portfolio and the Endpoint technology blog.

Before making changes, read:

1. PROJECT_CONTEXT.md
2. CONTENT_MASTER.md
3. DESIGN_SYSTEM.md
4. ROADMAP.md

Do not begin implementation before understanding these documents.

## Approved stack

Use:

- React
- JavaScript
- JSX
- HTML
- CSS
- Vite
- npm
- Git

Do not use TypeScript.

Do not create `.ts` or `.tsx` files.

Do not introduce Angular, Next.js, Tailwind CSS, Bootstrap, Material UI,
or another framework unless Pablo explicitly approves it.

Java and Spring Boot are Pablo's primary professional backend stack, but the
portfolio itself is a static React application and does not require a Java
backend.

## Working language

Use English for:

- file names;
- folder names;
- variables;
- functions;
- React components;
- constants;
- code comments;
- commits;
- technical documentation.

User-facing content must support:

- English;
- Spanish;
- French.

English is the default language.

## Engineering principles

- Use functional React components.
- Use modern JavaScript with ES modules.
- Prefer readable code over clever abstractions.
- Keep components small and focused.
- Keep professional content separate from presentation components.
- Avoid duplicated code.
- Use semantic HTML.
- Preserve keyboard accessibility.
- Preserve visible focus states.
- Respect reduced-motion preferences.
- Avoid unnecessary dependencies.
- Use CSS custom properties for design tokens.
- Use clearly scoped CSS.
- Do not place all application styles in one oversized file.

## Content integrity

CONTENT_MASTER.md is the source of truth for professional information.

Never invent:

- employment dates;
- job titles;
- employers;
- responsibilities;
- achievements;
- technologies;
- education;
- certifications;
- language proficiency;
- project results.

When information is missing, use an explicit placeholder or ask for
clarification.

Do not silently complete missing professional information.

## Professional positioning

The portfolio must present Pablo as:

Senior Software Engineer

Specialization:

Java Backend & Full-Stack Development

Professional subtitle:

Enterprise Applications, System Integration & AI-Augmented Engineering

Experience:

18+ years of professional experience.

Do not present Pablo as:

- AI Engineer;
- machine-learning engineer;
- data scientist;
- model developer;
- cybersecurity specialist.

## AI positioning

The central concept is:

AI is a machine tool: powerful and transformative, but technical judgment,
validation, and professional responsibility remain human.

AI-assisted engineering may include:

- analysis;
- technical exploration;
- implementation support;
- refactoring;
- code review;
- test design;
- debugging;
- documentation;
- continuous learning.

OpenAI Codex and ChatGPT must be presented as engineering tools, not as
replacements for professional judgment.

## Version 1 scope

Version 1 is a static professional portfolio.

Do not add:

- authentication;
- user accounts;
- databases;
- backend APIs;
- administrative panels;
- content management systems;
- payment systems;
- comments;
- server-side contact forms;
- analytics or tracking;
- microservices.

Endpoint articles must initially be stored as local content files.

## Design direction

The visual direction must be:

- professional;
- editorial;
- technical;
- restrained;
- contemporary;
- human;
- clear.

Use:

- a light background as the primary visual direction;
- a dark-theme alternative;
- generous whitespace;
- restrained blue accents;
- Git-history-inspired branching lines and nodes;
- subtle visual depth;
- clear typography;
- technology logos only when useful.

Avoid:

- neon developer aesthetics;
- terminal simulations;
- robot imagery;
- AI brain imagery;
- excessive gradients;
- animated particle backgrounds;
- large walls of logos;
- skill percentages;
- proficiency progress bars.

## Parallax and motion

Subtle parallax may be used to add depth.

Preferred uses:

- Git-history lines in the hero background;
- commit-like nodes;
- decorative background layers;
- selected project imagery;
- Endpoint editorial headers.

Rules:

- Keep text, navigation, buttons, and essential content stable.
- Do not use parallax in every section.
- Avoid large or fast movement.
- Avoid scroll hijacking.
- Reduce or disable parallax on mobile.
- Disable non-essential motion when
  `prefers-reduced-motion: reduce` is active.
- Motion must not interfere with readability, navigation, or performance.

## Responsive behaviour

Desktop:

- Use a fixed vertical navigation.
- Keep the main content scrollable.
- Show the active section.
- Keep language and theme controls available.

Mobile:

- Replace the fixed sidebar with a compact accessible header and menu.
- Preserve language and theme controls.
- Maintain comfortable text sizes.
- Avoid horizontal scrolling.

## Development workflow

Before modifying files:

1. Summarize the requested change.
2. Identify the files that will be created or edited.
3. State important assumptions.
4. Limit the work to the requested phase.

After modifying files:

1. List all changed files.
2. Explain the implementation briefly.
3. Run:

   npm run lint

4. Run:

   npm run build

5. Report errors honestly.
6. Do not claim that something works unless it was validated.

## Change strategy

Work in small, reviewable increments.

Do not implement the entire portfolio in one response.

For every phase:

1. Create the smallest functional version.
2. Run it.
3. Validate it.
4. Present the result for review.
5. Continue only after approval.

## Git rules

- Keep commits focused.
- Do not commit generated `dist` content unless deployment requires it.
- Do not expose secrets.
- Do not publish private information.
- Do not publish a personal phone number.
- Do not modify files unrelated to the current task.