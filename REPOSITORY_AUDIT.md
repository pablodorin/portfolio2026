# Repository Audit

## 1. Executive summary

Phase 9A audited the portfolio repository as it existed on 28 July 2026. The
audit was read-only except for the creation of this report and the expected
regeneration of the ignored `dist/` directory by the required production
build.

The repository is small, coherent, and in good condition:

- all 85 tracked files were accounted for;
- the working tree was clean before this report was created;
- no untracked files were present;
- only `dist/` and `node_modules/` were ignored;
- all tracked application modules participate in the import graph;
- all three public binary assets are referenced and reproduced by the build;
- no identical tracked or untracked files were found;
- no functional Vite starter remnants were found;
- no credential-like content, environment files, or telephone number outside
  the approved CV was found;
- the Git remote contains no embedded credentials;
- lint and production build passed;
- `npm audit` reported zero vulnerabilities.

The main cleanup opportunities are an empty local directory, two likely
unnecessary React type packages in this JavaScript-only project, and several
documentation statements that no longer reflect the implemented state.
Nothing was removed or corrected during this phase.

## 2. Repository status

| Item | Result |
| --- | --- |
| Repository root | `C:\Users\Pablo\Documents\desarrollo\des_laboral\je suis IT\portfolio` |
| Git repository | Yes |
| Audit date | 2026-07-28 |
| Tracked files | 85 before this report |
| Untracked files | None before this report |
| Ignored groups | `dist/`, `node_modules/` |
| Root documentation | Present |
| `src/` | Present |
| `public/` | Present |
| `es/` and `fr/` | Present |
| `docs/` | Absent |
| `.github/` | Absent |
| `.vscode/` | Absent |
| Generated `dist/` | Present, ignored, not tracked |
| `node_modules/` | Present, ignored, not tracked |

The audit found one empty local directory:
`src/components/decorative/`. Git does not track empty directories, so it does
not appear in `git status` or `git ls-files`.

## 3. Git status and remote summary

- Current branch: `main`.
- Upstream status: `main...origin/main`.
- Initial working-tree status: clean.
- Configured remote: `origin`.
- Remote host: `github.com`.
- Repository path: `pablodorin/portfolio2026`.
- Transport: HTTPS.
- Embedded remote credentials: none.
- `dist/` tracked: no.
- `node_modules/` tracked: no.
- Environment or private-key files tracked: none.
- Commit, push, branch creation, history rewrite, and remote modification:
  none performed.

No tracked file is unusually large for its purpose. The largest is the About
Me portrait at approximately 440.4 KiB.

## 4. Required production files

The following tracked groups are required production source:

| Group | Classification | Evidence |
| --- | --- | --- |
| `index.html` | Required production source | English Vite entry; static metadata and app mount |
| `es/index.html` | Required production source | Spanish Vite entry |
| `fr/index.html` | Required production source | French Vite entry |
| `src/main.jsx` | Required production source | Referenced by all three HTML entries |
| `src/app/` | Required production source | Root application composition |
| `src/components/` except the empty local directory | Required production source | Components are reachable from the JSX import graph |
| `src/content/` | Required production source | Imported by locale resources |
| `src/hooks/` | Required production source | Imported by layout and presentation code |
| `src/i18n/` | Required production source | Language resolution and all three locale resources |
| `src/sections/` | Required production source | Imported by `src/app/App.jsx` |
| `src/seo/` | Required production source | Runtime metadata and structured data |
| `src/styles/` | Required production source | Imported through `src/styles/global.css` |

`src/sections/SectionPlaceholder.jsx` is not unused: it renders the intentionally
deferred Projects and Endpoint placeholders.

Every tracked JavaScript, JSX, and application CSS file was checked against
imports, entry points, or stylesheet imports. No orphaned production source
file was identified.

## 5. Required public assets

| Path | Size | Classification | Reference evidence | Route result |
| --- | ---: | --- | --- | --- |
| `public/favicon.svg` | 457 B | Required public asset | Root-relative reference in all three HTML entries | Resolves from `/`, `/es/`, `/fr/` |
| `public/cv/Pablo_Dorin_CV_28_JUL_2026_Senior_Software_Developer.pdf` | 53.9 KiB | Required public asset | `src/content/contact.js` | Resolves from all languages through a root-relative path |
| `src/assets/images/pablo-dorin-about.jpg` | 440.4 KiB | Required public asset/source asset | Imported by `src/sections/AboutSection.jsx` | Emitted once as a shared hashed build asset |
| `public/initial-theme.js` | 595 B in build | Required public asset | Root-relative script in all three HTML entries | Resolves from all three routes |
| `public/robots.txt` | 68 B in build | Required public asset | Public crawler configuration | Emitted at the production root |
| `public/sitemap.xml` | 284 B in build | Required public asset | Referenced by `robots.txt` | Emitted at the production root |

SHA-256 comparison found no identical source/public files. The portrait, CV,
and favicon must not be deleted or modified during cleanup without a separate
approved task.

The audit found no missing image, favicon, CV, or metadata asset. Root-relative
public URLs and the Vite-managed portrait are compatible with the three current
language entry points.

## 6. Required configuration files

| Path | Classification | Purpose |
| --- | --- | --- |
| `vite.config.js` | Required build configuration | React plugin and three-entry static build |
| `eslint.config.js` | Required lint configuration | JavaScript/JSX and React lint rules |
| `.gitignore` | Required repository configuration | Excludes generated and local files |
| `package.json` | Required package-management file | Scripts and direct dependencies |
| `package-lock.json` | Required package-management file | Reproducible npm dependency graph |

No suspicious script was found. The available scripts are `dev`, `build`,
`lint`, and `preview`.

## 7. Dependency inventory

`npm ls --depth=0` completed successfully. Installed versions may be newer than
the lower version named in `package.json` while remaining within its declared
range.

| Direct package | Installed | Purpose | Assessment |
| --- | --- | --- | --- |
| `react` | 19.2.8 | Component runtime and hooks | Used |
| `react-dom` | 19.2.8 | Browser rendering | Used |
| `vite` | 8.1.5 | Development and production build | Used |
| `@vitejs/plugin-react` | 6.0.4 | React transformation for Vite | Used |
| `eslint` | 10.8.0 | Lint runner | Used |
| `@eslint/js` | 10.0.1 | Recommended JavaScript rules | Used |
| `eslint-plugin-react-hooks` | 7.1.1 | React Hooks lint rules | Used |
| `eslint-plugin-react-refresh` | 0.5.3 | Vite React refresh lint rule | Used |
| `globals` | 17.8.0 | Browser global declarations | Used |
| `@types/react` | 19.2.17 | React editor/type declarations | No code or explicit type-checking use found |
| `@types/react-dom` | 19.2.3 | React DOM editor/type declarations | No code or explicit type-checking use found |

No duplicate direct package purpose was found. No `preinstall`, `postinstall`,
`prepare`, or other lifecycle script was declared in `package.json` or the lock
metadata.

The two `@types` packages are likely Vite-template development remnants because
the project forbids TypeScript and has no `jsconfig.json`, `tsconfig.json`, or
explicit `checkJs` configuration. Removing them would require an approved 9B
dependency change followed by install, lint, build, and editor validation.

## 8. Vite starter remnants

Searches covered `vite.svg`, `react.svg`, `App.css`, `index.css`, sample
counters, common starter copy, and placeholder logos.

- No Vite or React starter SVG exists.
- No `App.css` or `index.css` exists.
- No demo counter or starter component exists.
- `DESIGN_SYSTEM.md` mentions `App.css` only as an anti-pattern; this is not a
  starter remnant.
- `package.json` retains version `0.0.0`, which is template-like metadata but
  has no runtime or privacy impact. It may be reviewed when release versioning
  is decided.
- `@types/react` and `@types/react-dom` are the only likely package-level
  starter remnants.

## 9. Unused-file candidates

No tracked unused-file candidate was proven.

| Path | Git status | Tracked | Evidence and searches | Removal risk | Recommendation | Confidence |
| --- | --- | --- | --- | --- | --- | --- |
| `src/components/decorative/` | Invisible to Git because empty | No | Recursive directory inventory found no child, import, asset, or configuration entry | Low; a developer may have reserved it for future decorative components | Remove the empty local directory in 9B if Pablo does not want to reserve it | High |

Absence from a JavaScript import was not treated as sufficient evidence.
HTML, CSS `url()`, Vite inputs, public paths, metadata, JSON-LD, locales,
download links, and documentation were also searched.

## 10. Duplicate-file candidates

SHA-256 hashes were calculated for every repository file outside `.git/`,
`node_modules/`, and `dist/`. No identical-content group was found.

The three HTML documents intentionally repeat language-specific static metadata
and are separate Vite entry points, not accidental duplicates. The built
portrait and CV copy source assets into ignored `dist/`; these are expected
build outputs, not source duplicates.

## 11. Deferred branding assets

No social-preview candidate or LinkedIn-banner candidate currently exists in
the repository. Therefore, there is no branding asset to delete, relocate, or
select.

Final social-sharing imagery and the LinkedIn banner remain deferred. If such
files are added before 9B, they must be classified as deferred branding assets
and retained until Pablo explicitly decides their role.

## 12. Generated-output status

`dist/` existed before validation, is ignored, and is not tracked. Before the
required rebuild it contained 11 files totalling approximately 0.81 MiB:

- `dist/index.html`;
- `dist/es/index.html`;
- `dist/fr/index.html`;
- one current JavaScript bundle;
- one current CSS bundle;
- one hashed About Me portrait;
- `dist/robots.txt`;
- `dist/sitemap.xml`;
- `dist/favicon.svg`;
- `dist/initial-theme.js`;
- the current CV under `dist/cv/`.

No source maps, unexpected local files, or multiple obsolete hashed bundle
generations were present. A clean Vite build recreated the same current bundle
names. Generated output should not be treated as source.

`node_modules/` is also ignored and untracked. It contained 4,254 files
totalling approximately 73.82 MiB at audit time.

## 13. `.gitignore` assessment

Current coverage:

- `node_modules`: covered;
- `dist` and `dist-ssr`: covered;
- common npm/yarn/pnpm/lerna logs: covered;
- `.DS_Store`: covered;
- `.idea`: covered;
- most `.vscode` state: covered, while allowing
  `.vscode/extensions.json`;
- common Visual Studio and swap files: covered;
- generic `*.local`: covered.

Gaps or review points:

- environment files such as `.env`, `.env.*`, and their local variants are not
  explicitly covered;
- coverage output such as `coverage/` is not covered;
- Windows `Thumbs.db` and `Desktop.ini` are not covered;
- generic temporary directories/files are not comprehensively covered.

`dist/` is correctly ignored for the current source-based workflow and is not
tracked. The final decision should be confirmed alongside the future GitHub
Pages/GitHub Actions deployment architecture; no change should be made blindly.

## 14. Sensitive-information findings

Heuristic searches covered API keys, tokens, passwords, client secrets, private
keys, connection strings, database credentials, cloud credentials, GitHub and
OpenAI keys, environment files, and credential-like filenames.

Results:

- no credential-like value was found;
- no environment or private-key file was found;
- no remote credential was found;
- no suspicious lifecycle script was found;
- `src/styles/tokens.css` matched a filename search only because “tokens” means
  design tokens; it contains CSS custom properties, not authentication tokens.

Because secret scanning is heuristic, this is not a guarantee against encoded,
obfuscated, historical, or externally injected secrets. Git history was not
rewritten or exhaustively scanned for removed historical secrets.

## 15. Privacy findings

Approved public identity and contact information found in the repository:

- Pablo Dorin;
- Buenos Aires, Argentina;
- `dorin1979@gmail.com`;
- `pablodorin.com`;
- approved LinkedIn and GitHub profile URLs.

No telephone number was found in visible source, metadata, JSON-LD, public
configuration, or website documentation. References to the words “phone” or
“telephone” in project documentation are privacy rules, not phone values.

The approved CV PDF was preserved and was not modified. Its embedded text was
not treated as a cleanup candidate, consistent with the instruction not to
modify the current CV.

No salary, medical, family, home-address, political, union, private-note, or
internal job-search content was identified. Broad keyword hits in styles,
SVG path data, package version numbers, and general editorial content were
reviewed as false positives.

## 16. Local-path findings

No Windows user-profile path, macOS `/Users/` path, Linux `/home/` path,
sandbox path, `.codex` attachment path, or temporary server URL was found in
tracked project content.

`README.md` contains `http://localhost:5173/` as the documented normal Vite
development address. This is appropriate development documentation and is not
referenced by production source, SEO metadata, or public configuration.

The absolute repository path appears only in this audit report to identify the
audited root, as explicitly requested. Repository-relative paths are used for
all findings and recommendations.

## 17. Professional-identity consistency findings

The current public identity is consistently `Senior Software Developer`, with
`Senior Java Developer` used for SEO specialisation.

Relevant Engineer/engineering occurrences were classified as follows:

1. **Current public identity:** no incorrect `Senior Software Engineer` title
   was found in current public content.
2. **Historical employer role:** `Senior Backend / Full-Stack Engineer —
   Contract` in `CONTENT_MASTER.md`, `src/content/experience.js`, and its
   Spanish/French translations is an approved employer-assigned historical
   fact and must remain unchanged.
3. **Discipline or methodology:** `AI-Augmented Engineering`, software
   engineering, engineering workflow/process/practices, engineering managers,
   Java engineering, and translated equivalents are valid contextual terms and
   should remain.
4. **Obsolete documentation:** no obsolete document currently promotes
   `Senior Software Engineer` as Pablo's personal title.
5. **Ambiguous:** `Independent Software Engineering` in `CONTENT_MASTER.md` is
   a work-category heading rather than a personal job title. Preserve it unless
   Pablo prefers editorial harmonisation.

Negative rules such as “Do not present Pablo as an AI Engineer” are valid
governance text and not positioning errors.

## 18. Documentation inconsistencies

The required documentation is useful and should remain. The following items
should be corrected editorially in 9B:

- `README.md` says sections, navigation, themes, languages, content, and
  Endpoint “will be implemented.” Most portfolio features are already
  implemented; only Projects and Endpoint remain deferred.
- `README.md` says the portfolio “includes Endpoint,” although the blog is
  currently represented only by a placeholder and remains deferred.
- `README.md` lists already implemented features under “Planned features”
  without distinguishing implemented and deferred work.
- `DESIGN_SYSTEM.md` names `src/styles/utilities.css` in the recommended
  stylesheet structure, but that file does not exist. The wording should
  clarify that it is optional/planned or remove the dead reference.
- `PROJECT_CONTEXT.md` says the selected language “should persist in local
  storage,” while the implemented URL-authoritative architecture records the
  value only as advisory data. The later implementation section is correct,
  but the earlier sentence is ambiguous.
- `ROADMAP.md` retains the Phase 8A historical bullet “single-homepage
  sitemap.xml.” Phase 8C superseded it with a three-URL sitemap; the historical
  scope should be labelled explicitly to avoid appearing current.
- `ROADMAP.md` Phase 6D remains marked pending although Phase 7 performed
  substantial source-oriented multilingual responsive validation. This may be
  intentional because hands-on linguistic/browser validation is still pending
  and requires Pablo's interpretation.
- `AGENTS.md` and `README.md` describe the repository as containing the
  Endpoint blog. The implementation is still deferred, so “planned Endpoint
  technology blog” would be more precise until that phase is complete.

No documentation file was edited during this audit.

## 19. Largest tracked and untracked files

Largest tracked working-tree files:

| Size | Path |
| ---: | --- |
| 440.4 KiB | `src/assets/images/pablo-dorin-about.jpg` |
| 81.5 KiB | `package-lock.json` |
| 53.9 KiB | `public/cv/Pablo_Dorin_CV_28_JUL_2026_Senior_Software_Developer.pdf` |
| 24.1 KiB | `CONTENT_MASTER.md` |
| 23.5 KiB | `DESIGN_SYSTEM.md` |
| 22.8 KiB | `src/i18n/locales/fr.js` |
| 22.7 KiB | `ROADMAP.md` |
| 22.0 KiB | `src/i18n/locales/es.js` |
| 15.8 KiB | `PROJECT_CONTEXT.md` |

No untracked file existed before this report. No tracked `node_modules` or
generated `dist` content exists. The portrait is the largest Git blob and is
reasonable for its purpose, although a future image-optimisation phase could
compare a visually equivalent WebP/AVIF version without deleting the approved
source prematurely.

## 20. npm audit result or network limitation

`npm audit` reached the registry and completed successfully:

```text
found 0 vulnerabilities
```

No `npm audit fix` variant was run. The initial sandboxed npm invocation failed
before package inspection because Node could not resolve the user-profile path;
the commands were rerun with approved execution access and succeeded. This was
an environment restriction, not a repository defect.

## 21. Lint result

`npm run lint` passed with no ESLint errors or warnings reported.

## 22. Build result

`npm run build` passed with Vite 8.1.5:

- 65 modules transformed;
- `dist/index.html` generated;
- `dist/es/index.html` generated;
- `dist/fr/index.html` generated;
- shared JavaScript, CSS, portrait, favicon, theme script, robots file,
  sitemap, and current CV generated/copied as expected.

The build emitted no source maps and no unexpected file.

## 23. `git diff --check` result

`git diff --check` is to be run after this report is written so that the new
report itself is included in whitespace validation. Its final result is
recorded in the completion response for Phase 9A.

## 24. Recommended Phase 9B cleanup actions

### High-confidence cleanup

1. With Pablo's approval, remove the empty local directory
   `src/components/decorative/`.
2. Update stale documentation statements without changing the implemented
   architecture.

### Review-required cleanup

1. Review removal of `@types/react` and `@types/react-dom`; if approved, update
   both package files through npm and rerun all validation.
2. Decide whether package version `0.0.0` should remain until release or become
   an intentional pre-release version.
3. Review whether the 440.4 KiB portrait warrants a visually verified
   alternative format. Do not delete the current portrait merely because it is
   the largest file.

### Keep

1. All tracked React/JavaScript/CSS production source.
2. All three HTML language entries.
3. Current portrait, favicon, CV, robots file, sitemap, and theme bootstrap.
4. Vite, ESLint, npm, and Git configuration.
5. `package.json` and `package-lock.json`.
6. All eight required project/audit documentation files.
7. Historical Engineer role names and valid engineering terminology.

### Deferred decision

1. Keep `dist/` ignored or change the publication strategy only after GitHub
   Pages/GitHub Actions architecture is approved.
2. Add and select final social-preview and LinkedIn-banner assets only in the
   approved branding phase.
3. Decide future `.github/`, `CNAME`, workflow, and deployment files during
   deployment preparation.
4. Add coverage ignore rules only if test coverage output becomes part of the
   toolchain.

## 25. Items requiring Pablo's explicit decision

1. Whether to remove the empty `src/components/decorative/` directory.
2. Whether to remove `@types/react` and `@types/react-dom`.
3. Whether to change the package version from `0.0.0`.
4. Whether to optimise/replace the portrait after visual comparison.
5. Whether Phase 6D remains pending despite the Phase 7 source-oriented review.
6. Whether to clarify “Independent Software Engineering” editorially while
   preserving its meaning.
7. Whether `dist/` remains ignored under the eventual deployment architecture.
8. Which assets will serve as the social preview and LinkedIn banner.
9. Whether `.gitignore` should gain explicit environment, coverage, Windows,
   and temporary-file patterns in 9B.
10. Approval of the listed documentation corrections before they are applied.

## 26. Files that must not be deleted

The following must be preserved:

- `AGENTS.md`;
- `PROJECT_CONTEXT.md`;
- `CONTENT_MASTER.md`;
- `DESIGN_SYSTEM.md`;
- `ROADMAP.md`;
- `ACCESSIBILITY_AUDIT.md`;
- `SEO_AUDIT.md`;
- `README.md`;
- `index.html`;
- `es/index.html`;
- `fr/index.html`;
- `package.json`;
- `package-lock.json`;
- `vite.config.js`;
- `eslint.config.js`;
- `.gitignore`;
- all imported files under `src/`;
- `src/assets/images/pablo-dorin-about.jpg`;
- `public/favicon.svg`;
- `public/cv/Pablo_Dorin_CV_28_JUL_2026_Senior_Software_Developer.pdf`;
- `public/initial-theme.js`;
- `public/robots.txt`;
- `public/sitemap.xml`.

Ignored `dist/` should also remain untouched until the deployment approach is
approved, even though a clean Vite build can recreate it.

## 27. Remaining risks

- Secret detection cannot prove the absence of obfuscated or historical
  credentials.
- The full Git history was not rewritten or subjected to an external
  specialised secret scanner.
- Unused-code conclusions are based on static imports and comprehensive text
  reference searches, not runtime code coverage.
- External LinkedIn, GitHub, email, and production-domain availability were not
  network-tested.
- The CV remains an approved public document and was not altered; its privacy
  approval should continue to be reviewed whenever a replacement CV is added.
- The portrait is the dominant source asset and may affect initial image
  transfer size, although it is not currently duplicated.
- The final deployment strategy may change the correct treatment of `dist/`,
  `CNAME`, and GitHub workflow files.
- Social imagery, LinkedIn branding, Projects, Endpoint, browser testing, and
  live deployment validation remain deferred.
- Documentation drift may cause future agents to act on stale phase status
  until the identified inconsistencies are corrected.

## 28. Phase 9B resolution

Phase 9B applied Pablo's approved cleanup decisions:

- the confirmed-empty local `src/components/decorative/` directory was
  removed; because Git does not track empty directories, this created no
  tracked deletion;
- `@types/react` and `@types/react-dom` were retained for React and JSX editor
  type information;
- package version `0.0.0` was retained for later release review;
- portrait optimisation remains deferred;
- current documentation was reconciled with the implemented multilingual
  architecture and deferred work;
- `.gitignore` was expanded for environment, coverage, Windows, and temporary
  files;
- `dist/` remains ignored and untracked;
- social-preview and LinkedIn-banner assets remain deferred.
