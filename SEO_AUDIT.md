# SEO Audit

## 1. Scope

Phase 8A provides the metadata foundation. Phase 8C adds three independently
loadable static language documents and reciprocal `hreflang`. Deployment,
social imagery, Projects, and Endpoint Blog remain outside this scope.

## 2. Static multilingual architecture

Vite 8 multi-page mode builds three HTML entry points that share one React
application and its assets:

- English: `https://pablodorin.com/`
- Spanish: `https://pablodorin.com/es/`
- French: `https://pablodorin.com/fr/`

The pathname is authoritative for the initial language. Each document has the
correct static `html lang` before React loads. There are no automatic language
redirects and no `/en/` page.

## 3. Titles and descriptions

English:

- Title: `Pablo Dorin | Senior Java Developer`
- Description: `Senior software developer specialising in Java backend development, enterprise applications, system integration, and AI-augmented engineering.`

Spanish:

- Title: `Pablo Dorin | Desarrollador Java Senior`
- Description: `Desarrollador de software senior especializado en desarrollo backend con Java, aplicaciones empresariales, integración de sistemas e ingeniería aumentada por IA.`

French:

- Title: `Pablo Dorin | Développeur Java senior`
- Description: `Développeur logiciel senior spécialisé en développement backend Java, applications d’entreprise, intégration de systèmes et ingénierie augmentée par l’IA.`

Every value is present statically in its language document. Runtime metadata
uses the same centralised values and the active URL language.

## 4. Canonical strategy

Every document uses a self-referencing canonical without a section hash:

- `https://pablodorin.com/`
- `https://pablodorin.com/es/`
- `https://pablodorin.com/fr/`

Canonical links do not change with theme selection or section navigation.

## 5. hreflang

All three documents include the same reciprocal set:

- `en` → `https://pablodorin.com/`
- `es` → `https://pablodorin.com/es/`
- `fr` → `https://pablodorin.com/fr/`
- `x-default` → `https://pablodorin.com/`

General language codes are used. The sitemap does not duplicate alternate
annotations.

## 6. Language navigation

EN, ES, and FR are real anchors with `/`, `/es/`, and `/fr/` destinations.
The active language uses `aria-current="page"` plus a visible check mark.
Current section hashes are preserved during cross-language navigation.

Local storage records the chosen language only as advisory data; it does not
select or redirect a document. Theme preference remains effective because all
pages share the same origin and theme-storage key.

Each static language document includes
`<meta name="google" content="notranslate">`. Google Chrome's browser-level
translation suggestions are disabled because the portfolio already provides
human-authored English, Spanish, and French versions.

## 7. Open Graph

Each page contains a language-specific `og:title`, `og:description`, `og:url`,
and primary `og:locale`, plus the other two locales through
`og:locale:alternate`.

No `og:image` is present because Phase 8B remains deferred.

## 8. Twitter/X

Each page uses `twitter:card: summary` with its static language-specific title
and description. No account handle or unapproved image is included.

## 9. Structured data

Each document has exactly one `ProfilePage` / `Person` JSON-LD script.

Stable entity IDs:

- `https://pablodorin.com/#profile`
- `https://pablodorin.com/#person`

The `ProfilePage.url`, language, description, and `Person.jobTitle` match the
current document. Exact `sameAs` values are:

- `https://www.linkedin.com/in/pablo-dorin/`
- `https://github.com/pablodorin`

The schema includes Spanish, English, and French as known languages without
claiming French fluency or including private data.

## 10. robots.txt and sitemap.xml

`robots.txt` allows normal crawling and references:

`https://pablodorin.com/sitemap.xml`

The sitemap contains exactly the three canonical language pages. It excludes
hashes, `/en/`, CV files, assets, Projects, Endpoint, and invented dates.

## 11. Assets and favicon

HTML entry points use root-relative paths for the shared favicon, early theme
script, and React entry module. Vite processes the portrait and application
assets once; the CV remains one root-relative public file.

The favicon has one reference per document and no conflicting legacy reference.

## 12. Social-image status

The final social preview and LinkedIn banner remain deferred pending visual
consistency review. The portrait and favicon are not used as substitutes.

## 13. Validation performed

- Verified installed Vite version and supported `rolldownOptions.input`.
- Parsed all source JSON-LD blocks.
- Parsed the sitemap XML.
- Compared static language, title, canonical, Open Graph locale, JSON-LD
  language, URL, and job title for every entry.
- Verified one canonical, four `hreflang` links, two Open Graph alternate
  locales, and one JSON-LD script per source document.
- Searched for `/en/`, redirects, development URLs, social-image metadata,
  obsolete language buttons, and duplicate metadata.
- Ran `git diff --check`.
- `npm run lint` passed with no errors.
- `npm run build` passed with 65 transformed modules and produced
  `dist/index.html`, `dist/es/index.html`, and `dist/fr/index.html`.
- Parsed and inspected all three generated HTML files, generated public SEO
  files, favicon, shared assets, portrait bundle, and CV.
- Direct Vite development requests to `/`, `/es/`, and `/fr/` returned HTTP 200
  with static `lang` values `en`, `es`, and `fr`.

## 14. Remaining limitations

- The final social-sharing image does not yet exist.
- The LinkedIn banner remains pending.
- Production hosting, live crawler validation, and Search Console are deferred.
- Language navigation performs an expected full-document load.

## 15. Recommendations before deployment

- Validate all three production URLs after static hosting is configured.
- Recheck canonical and reciprocal `hreflang` on the live origin.
- Complete Phase 8B only after the visual identity is fully closed.
- Submit the sitemap only after deployment is approved and live.
