# Accessibility Audit

## 1. Scope

This audit covers the current static React portfolio in English, Spanish, and
French. It includes Home, Experience, Technologies, Education, AI Workflow,
About Me, Contact, the Projects showcase carousel, and the Endpoint landing.

The audit excludes SEO, deployment, routing, analytics, final Projects content,
hands-on browser and screen-reader validation of the newly published Endpoint
article pages.

## 2. Target standard

The implementation aims for WCAG 2.2 Level AA where reasonably applicable to
this static portfolio. This work is not a formal WCAG certification.

## 3. Automated checks performed

- ESLint through `npm run lint`.
- Vite production compilation through `npm run build`.
- Git whitespace validation through `git diff --check`.
- Static searches for positive `tabindex` values, empty or placeholder links,
  internal anchor destinations, `target="_blank"` handling, heading elements,
  landmarks, images, and decorative SVG attributes.
- File existence checks for the CV, About Me portrait, and favicon.
- Mathematical contrast calculations for primary, secondary, muted, accent,
  action, and focus colour pairs in both themes.

No accessibility-specific dependency is installed. No axe, Lighthouse,
Playwright, Cypress, or screen-reader automation was used.

Results:

- `npm run lint`: passed with no ESLint errors.
- `npm run build`: passed; Vite transformed 60 modules and produced the
  production bundle.
- `git diff --check`: passed after removing one documentation whitespace issue.
- No additional test command exists in `package.json`.

## 4. Manual checks performed

The source and responsive rules were reviewed for:

- landmark and heading order;
- expected Tab and Shift+Tab order;
- Enter, Space, and Escape behaviour of native controls;
- skip-link target and focus visibility;
- mobile-menu expansion, closure, background isolation, and focus movement;
- theme and language persistence independence;
- active-section semantics;
- link purpose and new-tab behaviour;
- portrait alternative text and intrinsic dimensions;
- decorative Git and workflow SVG treatment;
- reduced-motion fallback and IntersectionObserver failure behaviour;
- proximity scroll snapping, sticky headings, and anchor offsets;
- wrapping, minimum widths, touch targets, and breakpoint behaviour.

The viewport set reviewed against the CSS rules was 320px wide, 360x800,
390x844, tablet width, 1366x768, wide desktop, short desktop, and the effective
mobile layout produced by 200% desktop zoom.

These were source-oriented responsive reviews, not screenshots from every
browser/viewport combination.

## 5. Issues found

1. Page content remained keyboard-reachable behind the open mobile menu.
2. Selecting a mobile navigation link removed the focused link without moving
   focus to the destination.
3. Before Phase 8C, the selected language relied on colour styling for its
   visible distinction despite exposing `aria-pressed`; the current language
   links now use `aria-current="page"` and a visible check mark.
4. English language-option labels for Spanish and French were written in the
   target languages rather than the active interface language.
5. External profile links opened a new tab without an assistive-technology
   announcement.
6. A decorative workflow SVG lacked an explicit `focusable="false"` safeguard.
7. Git navigation focus outlines could be clipped by the sidebar overflow.
8. Scroll snapping remained active under reduced-motion preferences.
9. About-topic links were smaller than the preferred mobile touch target.
10. Focused destinations did not have a shared mobile-header scroll margin.

## 6. Corrections made

- The main page content becomes inert while mobile navigation is open.
- Escape closes the menu and restores focus to the menu button.
- Mobile navigation closes after selection, scrolls to the selected section,
  and focuses that named section without an additional scroll.
- Phase 8C converted language buttons into real links. The active link uses
  `aria-current="page"` and retains the visible check mark.
- English, Spanish, and French language-control labels are internally
  consistent.
- LinkedIn and GitHub retain `rel="noopener noreferrer"` and now include a
  localized, visually hidden new-tab announcement.
- Decorative workflow and Git SVGs are hidden from assistive technology and
  explicitly non-focusable.
- Git navigation focus outlines render inside their links to avoid clipping.
- Focusable elements and programmatically focused sections use a shared
  mobile-header-aware scroll margin.
- Reduced-motion mode disables reveals, transitions, smooth scrolling, and
  scroll snapping.
- Mobile About-topic links meet the preferred 44 CSS pixel target.
- The existing `aria-current="location"` active-section state was preserved.
- Every static language document has the correct `html lang` before hydration,
  and the translated skip link remains the first focusable control.
- Official organisation, institution, and IVLP links use real anchors, open in
  a new tab with `noopener noreferrer`, include a localized assistive
  announcement, and retain visible focus without making entire cards
  interactive.
- The Projects carousel has no autoplay, uses native buttons, exposes a
  controlled polite announcement, preserves focus, supports circular and
  optional arrow-key navigation, removes inactive slides from the DOM, and
  disables its positional transition under reduced motion.

## 7. Remaining limitations

- No screen reader was available, so announcements were reviewed from semantics
  rather than tested with NVDA, JAWS, VoiceOver, or TalkBack.
- No browser automation or accessibility engine was available in the project.
- Chrome, Edge, Firefox, and Safari visual rendering was not independently
  exercised in this environment.
- Keyboard focus order and reflow were audited from the implementation but
  still require final hands-on browser confirmation.
- External LinkedIn and GitHub availability was not network-tested.
- Decorative low-contrast borders and inactive Git branches remain secondary
  visual details; labels and link semantics do not depend on them.

## 8. Test viewport list

- 320px width
- 360x800
- 390x844
- tablet width
- 1366x768
- wide desktop
- short desktop
- effective 200% desktop zoom layout

## 9. Language and theme combinations checked

Message structure, control labels, heading hierarchy, alternative text, and
link announcements were reviewed for:

- English, light and dark;
- Spanish, light and dark;
- French, light and dark.

The calculated text contrast ratios were:

| Pair | Ratio |
| --- | ---: |
| Light secondary text on white | 7.58:1 |
| Light muted text on white | 4.76:1 |
| Light red text on white | 5.13:1 |
| Light focus blue on white | 6.47:1 |
| Dark secondary text on navy surface | 10.64:1 |
| Dark muted text on navy surface | 7.14:1 |
| Dark red text on navy surface | 6.96:1 |
| Dark focus blue on navy surface | 9.39:1 |
| Light primary-action text/background | at least 5.13:1 |
| Dark primary-action text/background | 6.96:1 |

## 10. Deferred recommendations

- Perform a final keyboard walkthrough in current Chrome, Edge, and Firefox.
- Test NVDA with Firefox or Chrome and VoiceOver with Safari when those
  environments are available.
- Recheck responsive reflow with browser text-only zoom and user-selected
  larger default fonts.
- Run browser-native accessibility inspection or axe/Lighthouse only if those
  tools become approved and available.
- Complete a hands-on reflow, keyboard, and cross-browser review of the
  Endpoint landing and nine article pages, and repeat the full audit when
  Projects is implemented.
