# DESIGN_SYSTEM.md

## Purpose

This document defines the visual and interaction system for Pablo Dorin's
professional portfolio and the Endpoint technology blog.

The design must support the professional content rather than compete with it.

The site should feel:

- professional;
- editorial;
- technical;
- contemporary;
- restrained;
- clear;
- human;
- intellectually curious.

The portfolio must not look like a generic template or a stereotypical
developer website.

---

## Core design principles

### Content first

Professional experience, projects, technical judgment, and writing are the
primary content.

Decorative elements must remain secondary.

The visitor should quickly understand:

- who Pablo Dorin is;
- what type of software engineering work he does;
- his Java backend specialization;
- his full-stack experience;
- his professional history;
- his projects;
- how he uses AI;
- how to contact him.

### Editorial technology

The design should combine:

- the readability of an editorial publication;
- the structure of a technical document;
- the personality of a professional portfolio;
- subtle visual references to software engineering.

### Visual restraint

Use:

- generous whitespace;
- clear hierarchy;
- typography;
- alignment;
- thin borders;
- restrained color;
- subtle depth;
- purposeful motion.

Avoid:

- visual noise;
- excessive decoration;
- oversized cards;
- excessive shadows;
- continuous animation;
- generic developer backgrounds;
- crowded layouts.

### Human identity

The site should not feel anonymous or machine-generated.

The professional profile may be connected with:

- discipline;
- learning;
- psychology;
- languages;
- culture;
- writing;
- professional evolution.

### Accessibility

Every visual decision must preserve:

- readability;
- keyboard navigation;
- visible focus;
- sufficient color contrast;
- reduced-motion support;
- semantic structure;
- responsive behaviour.

---

## Layout

### Desktop

Use a two-area layout:

1. fixed or sticky vertical sidebar;
2. scrollable main content area.

The sidebar should occupy approximately 30% to 34% of the viewport.

Suggested limits:

- minimum width: 320px;
- maximum width: 460px.

The sidebar may contain:

- Pablo Dorin;
- professional title;
- professional subtitle;
- main navigation;
- language selector;
- theme control;
- LinkedIn link;
- GitHub link;
- CV download.

The main content should:

- scroll vertically;
- preserve comfortable reading widths;
- use generous section spacing;
- maintain a clear vertical rhythm;
- avoid excessively wide paragraphs.

Suggested maximum site width:

- approximately 1440px.

Suggested text width:

- between 720px and 900px;
- long paragraphs should not exceed approximately 68 characters per line.

### Tablet

At intermediate widths:

- reduce sidebar width;
- reduce large heading sizes;
- simplify decorative layers;
- reduce parallax intensity;
- avoid compressed two-column content.

### Mobile

On mobile:

- remove the permanent sidebar;
- use a compact header;
- provide an accessible menu button;
- use full-width content;
- preserve language and theme controls;
- maintain comfortable horizontal padding;
- avoid horizontal scrolling;
- reduce decorative complexity;
- disable or strongly reduce parallax.

Suggested horizontal padding:

- approximately 1.25rem.

---

## Spacing

Use a consistent spacing scale.

Suggested values:

- 0.25rem;
- 0.5rem;
- 0.75rem;
- 1rem;
- 1.5rem;
- 2rem;
- 3rem;
- 4rem;
- 6rem;
- 8rem.

Major sections should use generous vertical spacing.

Suggested section spacing:

- minimum: 5rem;
- preferred desktop range: 6rem to 9rem.

Avoid arbitrary spacing values unless technically necessary.

---

## Typography

### Font strategy

Version 1 should use system fonts.

Primary font stack:

- system-ui;
- -apple-system;
- BlinkMacSystemFont;
- Segoe UI;
- sans-serif.

Monospace font stack:

- ui-monospace;
- SFMono-Regular;
- Consolas;
- Liberation Mono;
- monospace.

External fonts may be considered later after visual review.

### Typography rules

Use sans-serif for:

- headings;
- body text;
- navigation;
- buttons;
- project descriptions;
- article content.

Use monospace selectively for:

- dates;
- section numbers;
- categories;
- tags;
- metadata;
- technical labels.

Do not use monospace for long paragraphs.

### Visual hierarchy

The name “Pablo Dorin” should be the strongest typographic element in the hero.

Headings should be:

- large;
- confident;
- readable;
- consistently spaced;
- not excessively uppercase.

Suggested body text:

- 1rem or slightly larger;
- line height around 1.7.

Suggested introductory text:

- between 1.125rem and 1.35rem;
- line height around 1.6.

Suggested large hero heading:

- responsive between approximately 2.75rem and 5.75rem.

Do not use body text smaller than a comfortable reading size.

---

## Color system

Use CSS custom properties.

### Light theme

Suggested palette:

- background: `#f4f5f7`;
- surface: `#ffffff`;
- muted surface: `#eceff3`;
- primary text: `#172033`;
- secondary text: `#596273`;
- muted text: `#7d8594`;
- border: `#d8dde6`;
- stronger border: `#b8c0cd`;
- accent: `#2463eb`;
- accent hover: `#1d4ed8`;
- soft accent: `#dce7ff`;
- focus: `#2463eb`.

Git-history decorative colors:

- blue: `#5b7cfa`;
- purple: `#8b6fd6`;
- coral: `#e77968`;
- neutral: `#b4bdca`.

### Dark theme

Suggested palette:

- background: `#171a20`;
- surface: `#1f232b`;
- muted surface: `#292e38`;
- primary text: `#f0f2f5`;
- secondary text: `#b7bec9`;
- muted text: `#8d96a5`;
- border: `#343a46`;
- stronger border: `#4a5261`;
- accent: `#7398ff`;
- accent hover: `#91adff`;
- soft accent: `#25345c`;
- focus: `#91adff`.

Dark-theme Git-history colors:

- blue: `#7398ff`;
- purple: `#a68ae0`;
- coral: `#ef8b7d`;
- neutral: `#667080`.

### Color rules

Use the main accent for:

- links;
- active navigation;
- primary actions;
- focus indicators;
- selected technical details;
- important Git-history nodes.

Do not use the accent color for every heading.

Secondary Git colors should appear only in decorative elements.

Avoid:

- pure black as the main background;
- pure white as the large page background;
- neon green;
- cyberpunk purple;
- rainbow palettes;
- excessive gradients.

---

## Borders, surfaces, and shadows

Use thin borders to create structure before using shadows.

Suggested border:

- 1px solid the current theme border color.

Suggested border radii:

- small: 0.25rem;
- medium: 0.5rem;
- large: 0.875rem;
- pill: only for tags and compact controls.

Do not make every component heavily rounded.

Shadows must remain subtle.

Do not create a page full of floating cards.

---

## Navigation

### Desktop navigation

The desktop navigation should feel like a professional index.

Suggested format:

- 01 — Home
- 02 — Experience
- 03 — Technologies
- 04 — Projects
- 05 — AI Workflow
- 06 — Education
- 07 — Endpoint
- 08 — About Me
- 09 — Contact

The active item should use:

- stronger contrast;
- accent color;
- a horizontal line or marker;
- a restrained transition.

Inactive items should remain visible but quieter.

Allowed navigation motion:

- subtle indicator expansion;
- color transition;
- small horizontal movement.

Avoid:

- bouncing;
- exaggerated sliding;
- distorted text;
- continuous movement.

### Mobile navigation

The mobile menu must:

- use a real button;
- include an accessible label;
- expose its expanded state;
- support keyboard use;
- close after selecting a section;
- preserve visible focus.

---

## Hero section

The hero must present:

- Pablo Dorin;
- Senior Software Engineer;
- Java Backend & Full-Stack Development;
- Enterprise Applications;
- System Integration;
- AI-Augmented Engineering.

Primary actions:

- View Projects;
- Read Endpoint;
- Contact Me.

The name should be the strongest visual element.

The professional title and specialization must be immediately understandable.

The description should remain concise.

---

## Git-history visual identity

Git-history-inspired lines and commit-like nodes are a recurring visual
language for the portfolio.

They represent:

- professional evolution;
- software history;
- branching decisions;
- collaboration;
- integration;
- continuous development.

Primary location:

- an accessible desktop navigation graph connecting the portfolio sections.

The desktop graph uses three colored paths after the Home commit:

- blue: Technologies and Education, converging with coral at About Me;
- coral: Experience and Projects, converging at Contact;
- purple: AI Workflow and Endpoint, converging at Contact;
- About Me: a coral node at the blue-to-coral convergence.

Endpoint carries only a purple node. Contact is the final coral and purple
merge.

The Home hero should retain a clean editorial background. Mobile navigation
may reuse the Git-history topology inside its accessible collapsible panel.
Every mobile node must retain an explicit text label.

The Git-history design may contain:

- thin branching lines;
- commit-like nodes;
- merging paths;
- outlined nodes;
- selected milestone nodes;
- restrained blue;
- soft purple;
- soft coral;
- neutral gray.

The result must not look like:

- a literal Git client screenshot;
- a circuit board;
- a neural network;
- a random decorative network.

Lines should be:

- thin;
- smooth;
- partially transparent;
- visually secondary to the content.

Avoid:

- glowing nodes;
- very large circles;
- dense networks;
- excessive line crossings;
- animations that distract from reading.

---

## Parallax and visual depth

Subtle parallax may be considered during Phase 5 to give depth to the desktop
navigation graph.

The effect should remain restrained and secondary.

Possible layers:

1. distant neutral branches;
2. colored branches;
3. commit nodes;
4. subtle metadata or grid details;
5. stable foreground content.

Movement rules:

- distant layers move very slowly;
- colored branches move slowly;
- commit nodes may move at a slightly different speed;
- foreground content must remain stable.

Parallax should be based mainly on vertical scrolling.

Cursor-based movement is not required for version 1.

Technical preferences:

- use CSS transforms;
- use lightweight calculations;
- use `requestAnimationFrame` only when necessary;
- avoid changing layout properties such as `top`, `left`, `width`, or
  `height` continuously.

Do not use:

- scroll hijacking;
- forced scrolling speed;
- horizontal page movement;
- cursor trails;
- animated particles;
- full-screen transitions;
- large rotating objects;
- movement attached to every mouse action.

### Reduced motion

When `prefers-reduced-motion: reduce` is active:

- disable parallax;
- disable non-essential entrance animations;
- preserve all content;
- preserve all functionality.

### Mobile motion

On mobile:

- disable or strongly reduce parallax;
- use a mostly static decorative composition;
- preserve performance and battery usage.

---

## Experience section

Professional experience should use an editorial timeline or structured rows.

Avoid presenting every role as an identical floating card.

Each role may display:

- dates;
- company;
- role;
- location;
- professional context;
- concise description;
- selected contributions;
- relevant technologies.

Chronology must be clear.

Concurrent roles must be represented accurately.

Greater visual emphasis may be given to:

- BNP Paribas;
- Kyndryl;
- IBM.

GDEBA and Compra Gamer must remain visible and correctly contextualized.

The initial version should remain readable without requiring interaction.

Expandable details may be considered later.

---

## Technologies section

Technologies must be grouped by professional relevance.

Groups:

1. Core Backend
2. Architecture and Integration
3. Frontend and Full-Stack
4. Data and Infrastructure
5. Additional Experience

Core technologies should receive greater visual emphasis:

- Java;
- Spring Boot;
- REST APIs;
- SQL;
- JUnit;
- Git.

Technology items may contain:

- a logo or recognizable icon;
- the technology name;
- a concise professional context.

Example:

Java  
Enterprise backend development

Do not use:

- percentages;
- progress bars;
- star ratings;
- skill meters;
- unsupported years-of-experience counters;
- animated logo clouds;
- oversized logos.

Do not rely on logos alone to communicate a technology.

---

## Projects section

Projects should be presented as case studies rather than simple image cards.

Each project may contain:

- project title;
- current status;
- problem;
- context;
- approach;
- technical decisions;
- architecture;
- technologies;
- validation;
- repository;
- AI usage;
- future work.

Project status must be explicit.

Examples:

- In development;
- Active practice repository;
- Planned;
- Completed.

Do not visually imply that an unfinished project is complete.

Screenshots must show real project content.

Do not invent application screenshots.

Repository links should clearly identify:

- GitHub repository;
- live demonstration when available;
- documentation when available.

---

## AI Workflow section

This section should distinguish between:

### AI-assisted work

- technical exploration;
- implementation support;
- refactoring;
- testing;
- debugging;
- documentation;
- solution comparison.

### Human responsibility

- understanding the problem;
- architecture;
- technical decisions;
- code acceptance;
- validation;
- security;
- maintainability;
- professional accountability.

The section may use:

- workflow diagrams;
- decision points;
- review loops;
- tool symbols;
- restrained Git-history metaphors.

Do not use:

- robot illustrations;
- artificial brains;
- glowing neural networks;
- magical autonomous-generation imagery.

AI tools must be presented as tools within a professional process.

---

## About Me section

The About Me section should provide personality while remaining
professionally relevant.

Approved subjects:

- Shotokan karate;
- French-language study;
- Psychology;
- history;
- culture;
- travel;
- technology and society;
- continuous learning.

Use concise editorial blocks rather than a long autobiography.

A professional photograph may be included later.

Do not use generic lifestyle stock photography.

Do not publish sensitive personal information.

---

## Endpoint design

Endpoint is the editorial area of the portfolio.

Tagline:

Request & Response on the IT Industry

Endpoint should remain visually connected to the portfolio through:

- typography;
- color;
- spacing;
- navigation;
- theme system;
- Git-history details.

It may have a stronger editorial identity through:

- larger article titles;
- publication metadata;
- article summaries;
- category labels;
- reading-time information;
- long-form typography.

Article previews may contain:

- date;
- category;
- title;
- summary;
- reading time;
- tags.

Avoid placing every article inside a large card.

Prefer editorial rows or restrained lists.

Article pages should provide:

- clear title;
- summary;
- publication date;
- reading time;
- category;
- article body;
- headings;
- code blocks when relevant;
- references when relevant;
- navigation back to Endpoint.

---

## Buttons and links

Primary buttons should use:

- accent background;
- accessible contrast;
- restrained border radius;
- clear hover state;
- visible focus state.

Secondary buttons should use:

- transparent or surface background;
- visible border;
- clear text;
- accent hover.

Links must remain identifiable without relying only on color.

Prefer descriptive labels such as:

- View GitHub repository;
- Read the Endpoint article;
- Download English CV;
- Send an email.

Avoid vague labels such as:

- Click here;
- More;
- Link.

---

## Icons

Use icons only when they improve comprehension.

Icons must:

- use a consistent style;
- align correctly with text;
- remain visible in light and dark themes;
- have accessible labels when necessary.

Do not combine several incompatible icon sets.

Do not place decorative icons beside every heading.

---

## Focus and keyboard behaviour

All interactive elements must show a visible focus state.

Suggested focus style:

- 3px solid focus outline;
- 3px outline offset.

Do not remove browser focus outlines without providing a visible replacement.

Keyboard users must be able to access:

- navigation;
- mobile menu;
- theme control;
- language selector;
- project links;
- article links;
- contact actions.

---

## Images

Images should:

- use appropriate dimensions;
- avoid unnecessary file size;
- preserve aspect ratio;
- use modern formats when practical;
- include alternative text;
- avoid layout shifts.

Decorative images should use empty alternative text when appropriate.

A professional profile image may be considered for the portfolio, but it
must not dominate the hero.

The portfolio photograph decision is independent from the ATS CV, which
remains without a photograph.

---

## Motion timing

Use consistent transition durations.

Suggested values:

- fast: approximately 120ms;
- normal: approximately 220ms;
- slow: approximately 400ms.

Use short transitions for:

- hover;
- focus;
- active navigation;
- theme controls;
- menu interactions.

Animations must never delay access to content.

---

## Styling strategy

Use:

- global design tokens;
- reset styles;
- global typography;
- scoped component styles.

Suggested global structure:

- `src/styles/reset.css`
- `src/styles/tokens.css`
- `src/styles/global.css`
- `src/styles/utilities.css`

Component-specific styles should use clearly named files.

Do not place the entire design in `App.css`.

Do not use inline styles for the primary design system.

Inline styles may be used only for genuinely dynamic values, such as a
calculated parallax transform.

---

## Visual validation checklist

Before approving a section, verify:

1. Is the professional information easy to find?
2. Is the hierarchy clear?
3. Is the body text comfortable to read?
4. Are Git-history graphics secondary to the content?
5. Is parallax subtle?
6. Does the section work without animation?
7. Does it work in light and dark themes?
8. Does it work on mobile?
9. Can it be used with a keyboard?
10. Are focus states visible?
11. Are technology logos consistent?
12. Does it avoid generic developer clichés?
13. Does it look intentional rather than template-generated?
14. Does `npm run lint` succeed?
15. Does `npm run build` succeed?

---

## Final design constraint

The portfolio should communicate:

A senior software engineer with substantial enterprise experience, a strong
Java backend identity, full-stack capability, disciplined technical judgment,
and a thoughtful approach to AI-assisted engineering.

The design must reinforce that message without exaggeration, confusion, or
distraction.
