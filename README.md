# T.A.C Construction Website

This document describes the repository as it exists in the current working tree. Active code, imports, routes, styles, and assets were treated as the source of truth.

# 1. Project Overview

T.A.C Construction is a residential construction and renovation website intended to present the company, explain its services, show project imagery, and convert visitors into project enquiries.

- **Business:** T.A.C Construction
- **Project stage:** active pre-launch implementation
- **Confirmed planned production domain:** `https://www.tacconstruction.ie`
- **Primary audience:** homeowners seeking renovation, heating, roofing, plumbing, or general construction services
- **Primary conversions:** quote requests through `/contact`, service discovery, and service-detail visits
- **Current status:** the main routes, responsive interface, service interactions, and first technical SEO foundation are implemented; production deployment and client-content verification are not confirmed

The website currently contains provisional or unverified business claims, contact details, statistics, testimonials, project names, locations, dates, and placeholder photography. These must be approved by T.A.C Construction before launch. The contact form is presentation-only and does not send enquiries.

# 2. Technology Stack

The following versions are installed in the audited workspace:

| Technology | Installed version | Current use |
|---|---:|---|
| Next.js | `16.4.2` | App Router, server/client components, metadata, images, routes, sitemap, and robots |
| React | `19.2.4` | UI rendering |
| React DOM | `19.2.4` | Browser rendering |
| TypeScript | `5.9.3` | Strictly typed application code |
| Framer Motion | `12.38.0` | Hero, counters, cards, accordions, modal, lightbox, and entrance motion |
| Tailwind CSS | `4.2.2` | Imported through global CSS; the interface is primarily custom CSS and inline styles rather than utility classes |
| `@tailwindcss/postcss` | `4.2.2` | Tailwind/PostCSS integration |
| ESLint | `9.39.4` | Static analysis |
| `eslint-config-next` | `16.4.2` | Next.js Core Web Vitals and TypeScript lint rules |
| `@types/node` | `20.19.39` | Node.js types |
| `@types/react` | `19.2.14` | React types |
| `@types/react-dom` | `19.2.3` | React DOM types |

The project has no modal, carousel, icon, map, form-provider, backend, testing, or Three.js dependency. `npm list` reports several extraneous transitive WASM packages in the local installation; they are not declared project dependencies and no active source import was found.

# 3. Development Commands

Run commands from the repository root:

```text
G:\trabalhos diversos\TAC Construction\T.A.C Construction
```

```bash
npm install
npm run dev
npm run lint
npm run build
npm run start
```

| Command | Purpose |
|---|---|
| `npm install` | Install dependencies from `package.json` and `package-lock.json` |
| `npm run dev` | Start the Next.js development server |
| `npm run lint` | Run ESLint |
| `npm run build` | Create a production build |
| `npm run start` | Serve an existing production build |

`.next/` is generated Next.js output. Do not edit it manually or treat it as source.

# 4. Current Repository Structure

```text
.
├── public/
│   └── images/
│       ├── about/                    # Active About photos plus unused legacy SVGs
│       ├── hero/                     # Active shared Hero photo plus unused SVG
│       ├── logo/                     # Unused alternate logo assets
│       ├── services/                 # Five service groups; active PNGs and legacy SVGs
│       ├── Logo.png                  # Active Navbar, social, and structured-data logo
│       └── logo-full.png             # Active Footer logo
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   ├── page.tsx             # Active About route
│   │   │   ├── GoogleReviews.tsx    # Active testimonial cards
│   │   │   └── AboutClient.tsx      # Legacy, currently unimported
│   │   ├── contact/
│   │   │   ├── layout.tsx           # Contact metadata
│   │   │   └── page.tsx             # Contact UI and local-only form state
│   │   ├── services/
│   │   │   ├── [slug]/
│   │   │   │   ├── page.tsx         # Static params, metadata, JSON-LD
│   │   │   │   └── ServiceDetailClient.tsx
│   │   │   ├── page.tsx             # Services overview route
│   │   │   └── ServicesListClient.tsx
│   │   ├── HeroSection.tsx           # Active homepage Hero and StatsCounter mount
│   │   ├── HomeClient.tsx            # Homepage services, locked modal, final CTA
│   │   ├── StatsCounter.tsx          # Animated statistics and inline SVG icons
│   │   ├── globals.css               # Global tokens, layout, component, responsive CSS
│   │   ├── layout.tsx                # Root metadata, JSON-LD, global CSS
│   │   ├── page.tsx                  # Homepage composition and metadata
│   │   ├── robots.ts                 # Dynamic robots.txt
│   │   ├── sitemap.ts                # Dynamic sitemap.xml
│   │   └── favicon.ico               # Site icon
│   ├── components/
│   │   ├── AnimateIn.tsx             # Reusable viewport entrance wrapper
│   │   ├── Footer.tsx                # Shared Footer
│   │   ├── ImagePlaceholder.tsx      # Active About image/fallback wrapper
│   │   └── Navbar.tsx                # Shared fixed responsive Navbar
│   └── lib/
│       ├── seo.ts                    # Domain and shared SEO constants
│       └── services.ts               # Canonical service and project data
├── eslint.config.mjs
├── next.config.ts                    # Security headers; X-Powered-By disabled
├── package.json
├── package-lock.json
└── tsconfig.json
```

`tsconfig.json` enables strict checking, the `@/*` alias to `src/*`, bundler module resolution, and no emitted JavaScript. ESLint uses Next.js Core Web Vitals and TypeScript configurations.

# 5. Active Routes

| Route | Source file | Purpose | Current status |
|---|---|---|---|
| `/` | `src/app/page.tsx` | Homepage | Implemented; content and images require approval |
| `/about` | `src/app/about/page.tsx` | Company story, values, and testimonials | Implemented; claims/testimonials are unverified |
| `/services` | `src/app/services/page.tsx` | Services overview and interactive project gallery | Implemented |
| `/services/renovation` | `src/app/services/[slug]/page.tsx` | Full Renovation detail | Statically generated |
| `/services/heating` | `src/app/services/[slug]/page.tsx` | Heating Systems detail | Statically generated |
| `/services/roofing` | `src/app/services/[slug]/page.tsx` | Roofing detail | Statically generated |
| `/services/plumbing` | `src/app/services/[slug]/page.tsx` | Plumbing detail | Statically generated |
| `/services/construction` | `src/app/services/[slug]/page.tsx` | General Construction detail | Statically generated |
| `/contact` | `src/app/contact/page.tsx` | Contact information and project-enquiry form | UI implemented; submission not functional |
| `/robots.txt` | `src/app/robots.ts` | Crawler rules, sitemap, and host | Implemented |
| `/sitemap.xml` | `src/app/sitemap.ts` | Static and service route URLs | Implemented |

Unknown service slugs call `notFound()`. The five valid slugs are generated from `src/lib/services.ts`.

# 6. Global Layout and Shared Components

- **Root layout:** `src/app/layout.tsx` imports global CSS, sets `lang="en-IE"`, loads Outfit through `next/font`, wraps the app in `MotionProvider` (reduced-motion aware), mounts the global `WhatsAppWidget`, establishes `metadataBase`, and emits Organization and WebSite JSON-LD.
- **404:** `src/app/not-found.tsx` renders a branded, non-indexable page reusing the homepage final-CTA styles.
- **Overlay focus:** `src/lib/useDialogFocus.ts` provides initial focus, Escape, optional Tab containment, and focus restoration for the mobile Navbar, Services lightbox, and WhatsApp popover.
- **Navbar:** `src/components/Navbar.tsx` is a fixed, 72px desktop header with logo, Home/About/Services/Contact links, active-route styling, and a quote CTA. At `900px` and below it becomes a toggle-controlled dialog-like mobile panel with backdrop and body-scroll locking.
- **Footer:** `src/components/Footer.tsx` renders brand copy, navigation, service links, contact text, Irish-owned badge, quote CTA, copyright, and agency link. Its contact and ownership claims require verification.
- **Containers:** `.section-shell` uses responsive vertical/horizontal padding; `.page-gutter` supplies shared horizontal gutters. There is no fixed max-width container.
- **Buttons:** global CTA classes exist for the Hero, homepage services header, service modal, and final CTA; many route buttons use component-level inline styles.
- **Breadcrumbs:** `.breadcrumb-bar` is used on service-detail routes. Service details also emit `BreadcrumbList` JSON-LD.
- **Animation:** `AnimateIn` uses a once-only Framer Motion viewport entrance. Other motion is implemented locally.
- **Typography:** Outfit is self-hosted through `next/font/google` (variable font) and exposed as `--font-outfit`; components reference `var(--font-outfit), sans-serif`.
- **Shared colors:** `--bg`, `--fg`, `--red`, `--border`, and `--white` are defined in `:root`.

# 7. Current Homepage Implementation

The visual order is Navbar, Hero, statistics strip, services section, final CTA, and Footer.

## Homepage Hero

- `src/app/HeroSection.tsx` uses a conventional full-width background image, not the former split-screen composition.
- Next.js `Image` uses `fill`, `priority`, `sizes="100vw"`, and `object-fit: cover`.
- Active image: `/images/hero/hero-placeholder.jpg`.
- A separate left-to-right overlay runs from `rgba(8,8,8,0.88)` to `rgba(8,8,8,0.22)`; image opacity is not altered.
- Left-aligned content is positioned above the image.
- Heading: “Refined construction work for homes that need lasting quality.”
- Supporting copy describes renovation, roofing, plumbing, heating, and general building.
- CTAs: “Request a Quote” to `/contact` and “Explore Services” to `/services`.
- Height: `clamp(620px, calc(100vh - 72px), 860px)`; at `768px` and below the minimum is `580px`.
- On smaller screens the overlay becomes darker overall; at `576px` the CTAs stack full width.
- Framer Motion fades the group and staggers upward entrances for the heading, paragraph, and CTAs.
- The `h1` supplies the page heading, the image has descriptive alt text, and the overlay is hidden from assistive technology.
- No eyebrow labels are rendered above headings anywhere on the site (the approved service modal tag is the only exception).
- **Inner-page hero:** About, Services, and Contact share the `.page-main` / `.page-hero` structure in `globals.css`: full-bleed photo, left-to-right dark overlay, bottom-aligned H1 and description.
- The active photograph is still named `hero-placeholder.jpg` and should be treated as provisional.

No active split-layout Hero remains. `public/images/hero-bg.jpg`, `hero-bg-left.jpg`, and `public/images/hero/hero-bg.svg` are unreferenced legacy assets.

## Statistics strip

`StatsCounter` appears immediately below the Hero as a separate off-white strip.

| Value | Label | Inline SVG icon | Duration |
|---:|---|---|---:|
| `15+` | Years Experience | Hard hat | 1.6s |
| `500+` | Projects Delivered | Clipboard/check | 2.0s |
| `98%` | Client Satisfaction | Star | 1.7s |

The numbers start at zero only after 30% of the section enters the viewport. A cubic ease-out calculation runs through `requestAnimationFrame`, finishes at the exact target, runs once, and cancels on cleanup. Server and initial client output both begin at zero, avoiding an intentional hydration mismatch.

The strip is three columns on desktop and three stacked rows at `768px` and below. Icons are 24px on desktop and 20px on smaller screens. These business statistics are provisional and require client confirmation.

## Homepage service cards

- Heading: “Construction & Renovation Services”
- “View All” links to `/services`.
- Five cards appear in this order: Full Renovation, Heating Systems, Roofing, Plumbing, General Construction.
- Data comes directly from `src/lib/services.ts`.
- Each tall, rounded, image-based card uses the service’s first project image, a dark overlay, title, introduction, and circular arrow control.
- Card sequence numbers have been removed; numbers remain inside the modal and other service interfaces.
- The default border is a visible 2px off-white. Pointer hover and keyboard focus change it to T.A.C red; hover also lifts the card, gently scales the image, and colors the arrow.
- At `1440px` and above, all five cards occupy one grid row with no horizontal overflow.
- Below `1440px`, the track uses horizontal scrolling and scroll snapping. Card basis is `clamp(300px, 32vw, 420px)`, which generally exposes about three cards on a large laptop, two to three on narrower laptops/tablets, and one card plus part of the next on mobile.
- At `768px` and below cards are at most 360px and 500px tall; at `576px` they use 84vw.
- Activating any card opens the homepage service-information modal.

### Locked Service Modal Design

The card button records its trigger, then opens an in-page modal backed by the selected object from `src/lib/services.ts`.

- A fixed, blurred, dark overlay covers the viewport.
- Desktop layout is a two-column dark panel: large project image on the left and service content on the right.
- Content includes service number, category tag, title, introduction, detail text, feature list, and “View [Service]” CTA to the service-detail route.
- Close controls are the visible close button, Escape key, and backdrop click.
- Opening locks body scroll, focuses the close button, traps Tab focus within the modal, and closing restores focus to the triggering card.
- `role="dialog"`, `aria-modal`, labelled/described relationships, and descriptive close labels are present.
- Framer Motion animates backdrop opacity and subtle panel opacity/translation/scale.
- At `900px` and below the panel becomes one column with the image above content; mobile heights and padding reduce again at `576px`.

**The current service modal layout and visual design are approved and must not be modified unless explicitly requested by the project owner.**

This is a service-information modal, not the separate Services-page project lightbox.

## Final homepage CTA

The final section immediately before the Footer uses:

- Heading: “Planning a Renovation or Construction Project?”
- Supporting text: “Tell us about your project and take the first step towards a clear, professionally managed build.”
- Primary CTA: “Request a Quote” to `/contact`
- Secondary CTA: “View Our Services” to `/services`

The active design has the light/off-white `var(--bg)` background, a 6px red top border, dark text, and no gradient or photograph. Desktop uses a `1.45fr / 0.55fr` two-column layout with copy left and vertically stacked actions right. At `768px` it becomes one column; actions remain stacked and become full width at `576px`. Padding is `clamp(64px, 8vw, 104px)` vertically and the standard responsive gutter horizontally.

# 8. About Page

The active About implementation is `src/app/about/page.tsx`; `AboutClient.tsx` is not imported.

1. **Hero:** shared `.page-hero` over `/images/about/team-hero.jpg` — “Built with purpose. Finished with care.”
2. **Company story:** three paragraphs beside `ImagePlaceholder` using `/images/about/about-company.jpg` at 4:3.
3. **Mission & Values:** Quality, Reliability, and Experience cards.
4. **Testimonials:** three Framer Motion cards rendered by `GoogleReviews`, each with inline SVG stars and a CSS-only avatar circle.
5. **Footer.**

There is no actual team-member roster or team portrait grid despite the Hero wording. The company story, Dublin coverage, years of experience, values, review names, review roles, and testimonial text require client verification. `ImagePlaceholder` deliberately displays a visible placeholder label over the About company image. The Hero and company photographs are provisional stock/placeholder content.

# 9. Services Overview Page

`/services` renders:

1. Shared Navbar.
2. Shared `.page-hero` over `/images/hero/hero-placeholder.jpg` — “Expert trades and refined construction results.”
3. Five accordion rows driven by `src/lib/services.ts`.
4. An expanded panel with service introduction, feature text, six features, and four project-image buttons.
5. A separate project-image lightbox.
6. Shared Footer.

Only one accordion is open at a time. Expanded panels animate height and opacity. Each 4:3 project thumbnail opens a 16:10 image preview. The lightbox closes through its close button, backdrop click, or Escape, and locks body scroll; it is a labelled modal dialog with focus containment and focus restoration via `useDialogFocus`.

At `1024px` and below the Hero, expanded panel, and project grid collapse to one column. Accordion intro text is hidden at that breakpoint, and the category tag is hidden at `576px`.

# 10. Service Detail Pages

All five pages use `src/app/services/[slug]/page.tsx`, `ServiceDetailClient.tsx`, and data from `src/lib/services.ts`.

| Display title | Slug | Route | Tag |
|---|---|---|---|
| Full Renovation | `renovation` | `/services/renovation` | Residential |
| Heating Systems | `heating` | `/services/heating` | Specialist Trade |
| Roofing | `roofing` | `/services/roofing` | Structural |
| Plumbing | `plumbing` | `/services/plumbing` | Specialist Trade |
| General Construction | `construction` | `/services/construction` | Structural |

Each route contains:

- Back-to-Services breadcrumb bar and `BreadcrumbList` JSON-LD.
- A two-column text Hero with dark title/tag panel and off-white introduction/quote panel; there is no service-detail Hero image.
- A four-image portfolio grid. Items 1 and 4 use 4:3; items 2 and 3 use 3:4.
- A “What’s Included” section with feature summary and six features.
- A red service CTA linking to `/contact`.
- Shared Footer.

`generateStaticParams` returns all five slugs. `generateMetadata` supplies the title, service introduction, canonical, Open Graph, and Twitter fields; invalid slugs return noindex metadata before `notFound()`.

Project names, dates, counties, service descriptions, compliance/certification statements, insurance, warranty, emergency-service wording, and all photography are placeholders or unconfirmed claims requiring approval.

# 11. Contact Page

The Contact route has:

- Shared `.page-hero` reusing `/images/hero/hero-placeholder.jpg`.
- Direct-contact cards for phone, WhatsApp, email, and location.
- Claims for a 24-hour response and 100% Irish ownership.
- A controlled React form with first name, last name, email, phone, service, and message fields.
- A CSS-generated Google Map placeholder.
- Shared Footer.

The form calls `preventDefault()` and only stores values in local component state. It has no server action, API route, form provider, validation messages, required attributes, success state, or data delivery. **It does not send enquiries.**

Focus and blur handlers visually highlight fields, while browser email/tel input types provide only native input semantics. The phone, email, location, WhatsApp label, response time, privacy statement, and ownership claim require confirmation. The contact cards are plain `div` elements: telephone, email, and WhatsApp are not active links. The map is neither embedded nor connected to a map service.

# 12. Design System

## Global tokens

| Token | Value | Use |
|---|---|---|
| `--bg` | `#F5F2EE` | Primary off-white background |
| `--fg` | `#0D0D0D` | Primary dark foreground |
| `--red` | `#C8102E` | T.A.C brand accent |
| `--border` | `rgba(13, 13, 13, 0.12)` | Standard subtle border |
| `--white` | `#FFFFFF` | White surfaces/text |

Common one-off colors include `#F7F4F0`, `#111111`, `#8C1022`, and darker red `#A80C24`.

- **Typography:** Outfit throughout; responsive headings use `clamp()`, heavy weights, tight line height, and negative tracking. Eyebrows and controls use small uppercase, widely tracked text.
- **Borders:** most structural borders are 1px; homepage service cards use a 2px off-white/red border; the final CTA uses a 6px red top accent.
- **Radii:** much of the site remains square; homepage service cards use 26px, their modal uses 24px, and About value/testimonial cards use 14px.
- **Buttons:** red primary, outlined secondary, uppercase compact labels, and restrained hover transitions.
- **Cards:** service cards are photographic/dark; About cards are white with subtle borders and shadows; contact cards are square white panels.
- **Spacing:** `.section-shell` is `clamp(48px, 7vw, 88px) clamp(20px, 5vw, 64px)`; `.page-gutter` is `clamp(20px, 5vw, 64px)`.
- **Animation:** short fades, vertical entrances, subtle lift/scale, and ease-out curves. No particles, 3D, or exaggerated motion.
- **Focus:** a global 3px translucent red focus-visible outline is present.
- **Reduced motion:** `MotionConfig reducedMotion="user"` covers Framer Motion site-wide, a global `prefers-reduced-motion` rule neutralises CSS transitions/animations and smooth scrolling, and the statistics counters jump to their final values.

# 13. Responsive Behaviour

The active CSS breakpoints are `1440px` minimum and `1279px`, `1024px`, `900px`, `768px`, and `576px` maximum.

| Area | Current behavior |
|---|---|
| Navbar | Desktop navigation hides at `900px`; toggle, backdrop, and mobile panel appear. Header/mobile offset reduces from 72px to 68px at `768px`. |
| Homepage Hero | Full-width at all sizes; minimum height becomes 580px at `768px`; overlay darkens and shifts for text contrast; CTAs stack at `576px`. |
| Statistics | Three columns on desktop; three full-width horizontal rows at `768px`; icons shrink from 24px to 20px. |
| Homepage cards | Five-column non-scrolling grid at `1440px+`; horizontal snapping below it; shorter/narrower cards at `768px`; 84vw cards at `576px`. |
| Service modal | Two columns above `900px`; stacked image/content below; image and padding shrink again at `576px`. |
| Final homepage CTA | Two columns above `768px`; stacked below; action group becomes full width at `576px`. |
| About | Story and three-value/testimonial grids collapse to one column at `1024px`. Some About padding is inline and does not receive a smaller route-specific override. |
| Services overview | Hero, expanded content, and project gallery collapse to one column at `1024px`; row intro hides at `1024px`; tag hides at `576px`. |
| Service details | Hero, portfolio, and included-features layout collapse to one column at `1024px`. |
| Contact | Contact/form columns and paired form-field rows collapse at `1024px`; section shell changes to 20px side padding at `768px`. |
| Footer | Four columns become two at `1279px`, then one at `900px`; bottom row wraps. |

# 14. Complete Image Production Inventory

This inventory records active source references and every active visual placement. It does not treat unused files as requirements.

## Audit totals

- **26 unique active files:** 23 photographic files, 2 branding PNGs, and 1 favicon.
- **20 unique service PNGs:** four for each of five services.
- **70 service-image placements:** the same project files are deliberately repeated across cards, modal, Services-page gallery/lightbox, and detail galleries.
- **4 non-service photographic placements:** two share one Hero source; two use separate About sources.
- **1 map placement with no image file:** currently generated with CSS.
- **Social sharing:** all route Open Graph and Twitter placements currently reuse the Navbar logo; there is no dedicated social-share artwork.

All 20 service PNGs are 2400×1800 generated placeholders. `hero-placeholder.jpg`, `team-hero.jpg`, and `about-company.jpg` are 5184×3456 provisional photographs. `Logo.png` is 1594×528; `logo-full.png` is 1601×1212.

## Non-service photographic checklist

```text
HOMEPAGE — Photo 1 — Homepage Hero Background — Horizontal
CONTACT — Photo 1 — Contact Hero Background — Horizontal
ABOUT — Photo 1 — About Team Hero Background — Horizontal
ABOUT — Photo 2 — Company Story Image — Horizontal
CONTACT — Map 1 — Location Map Placement — Horizontal
```

Homepage Photo 1 and Contact Photo 1 currently share `/images/hero/hero-placeholder.jpg`. A shared image is technically valid, but separate approved horizontal photographs are recommended so the two page Heroes are distinct. About Photo 1 uses `/images/about/team-hero.jpg`; About Photo 2 uses `/images/about/about-company.jpg`. The map has no file: it is a CSS grid labelled “Google Map Placeholder.” Its final production choice is an embedded map or a supplied static horizontal map.

## Service placement checklist

The photo number below identifies the current project file, not a new file per line. Repeated photo numbers therefore make reuse explicit.

### Full Renovation

```text
FULL RENOVATION — Photo 1 — Homepage Service Card — Vertical
FULL RENOVATION — Photo 1 — Service Modal Main Image — Vertical
FULL RENOVATION — Photo 1 — Services Overview Gallery Item 1 — Horizontal
FULL RENOVATION — Photo 1 — Services Overview Lightbox Item 1 — Horizontal
FULL RENOVATION — Photo 1 — Service Detail Gallery Item 1 — Horizontal
FULL RENOVATION — Photo 2 — Services Overview Gallery Item 2 — Horizontal
FULL RENOVATION — Photo 2 — Services Overview Lightbox Item 2 — Horizontal
FULL RENOVATION — Photo 2 — Service Detail Gallery Item 2 — Vertical
FULL RENOVATION — Photo 3 — Services Overview Gallery Item 3 — Horizontal
FULL RENOVATION — Photo 3 — Services Overview Lightbox Item 3 — Horizontal
FULL RENOVATION — Photo 3 — Service Detail Gallery Item 3 — Vertical
FULL RENOVATION — Photo 4 — Services Overview Gallery Item 4 — Horizontal
FULL RENOVATION — Photo 4 — Services Overview Lightbox Item 4 — Horizontal
FULL RENOVATION — Photo 4 — Service Detail Gallery Item 4 — Horizontal
```

### Heating Systems

```text
HEATING SYSTEMS — Photo 1 — Homepage Service Card — Vertical
HEATING SYSTEMS — Photo 1 — Service Modal Main Image — Vertical
HEATING SYSTEMS — Photo 1 — Services Overview Gallery Item 1 — Horizontal
HEATING SYSTEMS — Photo 1 — Services Overview Lightbox Item 1 — Horizontal
HEATING SYSTEMS — Photo 1 — Service Detail Gallery Item 1 — Horizontal
HEATING SYSTEMS — Photo 2 — Services Overview Gallery Item 2 — Horizontal
HEATING SYSTEMS — Photo 2 — Services Overview Lightbox Item 2 — Horizontal
HEATING SYSTEMS — Photo 2 — Service Detail Gallery Item 2 — Vertical
HEATING SYSTEMS — Photo 3 — Services Overview Gallery Item 3 — Horizontal
HEATING SYSTEMS — Photo 3 — Services Overview Lightbox Item 3 — Horizontal
HEATING SYSTEMS — Photo 3 — Service Detail Gallery Item 3 — Vertical
HEATING SYSTEMS — Photo 4 — Services Overview Gallery Item 4 — Horizontal
HEATING SYSTEMS — Photo 4 — Services Overview Lightbox Item 4 — Horizontal
HEATING SYSTEMS — Photo 4 — Service Detail Gallery Item 4 — Horizontal
```

### Roofing

```text
ROOFING — Photo 1 — Homepage Service Card — Vertical
ROOFING — Photo 1 — Service Modal Main Image — Vertical
ROOFING — Photo 1 — Services Overview Gallery Item 1 — Horizontal
ROOFING — Photo 1 — Services Overview Lightbox Item 1 — Horizontal
ROOFING — Photo 1 — Service Detail Gallery Item 1 — Horizontal
ROOFING — Photo 2 — Services Overview Gallery Item 2 — Horizontal
ROOFING — Photo 2 — Services Overview Lightbox Item 2 — Horizontal
ROOFING — Photo 2 — Service Detail Gallery Item 2 — Vertical
ROOFING — Photo 3 — Services Overview Gallery Item 3 — Horizontal
ROOFING — Photo 3 — Services Overview Lightbox Item 3 — Horizontal
ROOFING — Photo 3 — Service Detail Gallery Item 3 — Vertical
ROOFING — Photo 4 — Services Overview Gallery Item 4 — Horizontal
ROOFING — Photo 4 — Services Overview Lightbox Item 4 — Horizontal
ROOFING — Photo 4 — Service Detail Gallery Item 4 — Horizontal
```

### Plumbing

```text
PLUMBING — Photo 1 — Homepage Service Card — Vertical
PLUMBING — Photo 1 — Service Modal Main Image — Vertical
PLUMBING — Photo 1 — Services Overview Gallery Item 1 — Horizontal
PLUMBING — Photo 1 — Services Overview Lightbox Item 1 — Horizontal
PLUMBING — Photo 1 — Service Detail Gallery Item 1 — Horizontal
PLUMBING — Photo 2 — Services Overview Gallery Item 2 — Horizontal
PLUMBING — Photo 2 — Services Overview Lightbox Item 2 — Horizontal
PLUMBING — Photo 2 — Service Detail Gallery Item 2 — Vertical
PLUMBING — Photo 3 — Services Overview Gallery Item 3 — Horizontal
PLUMBING — Photo 3 — Services Overview Lightbox Item 3 — Horizontal
PLUMBING — Photo 3 — Service Detail Gallery Item 3 — Vertical
PLUMBING — Photo 4 — Services Overview Gallery Item 4 — Horizontal
PLUMBING — Photo 4 — Services Overview Lightbox Item 4 — Horizontal
PLUMBING — Photo 4 — Service Detail Gallery Item 4 — Horizontal
```

### General Construction

```text
GENERAL CONSTRUCTION — Photo 1 — Homepage Service Card — Vertical
GENERAL CONSTRUCTION — Photo 1 — Service Modal Main Image — Vertical
GENERAL CONSTRUCTION — Photo 1 — Services Overview Gallery Item 1 — Horizontal
GENERAL CONSTRUCTION — Photo 1 — Services Overview Lightbox Item 1 — Horizontal
GENERAL CONSTRUCTION — Photo 1 — Service Detail Gallery Item 1 — Horizontal
GENERAL CONSTRUCTION — Photo 2 — Services Overview Gallery Item 2 — Horizontal
GENERAL CONSTRUCTION — Photo 2 — Services Overview Lightbox Item 2 — Horizontal
GENERAL CONSTRUCTION — Photo 2 — Service Detail Gallery Item 2 — Vertical
GENERAL CONSTRUCTION — Photo 3 — Services Overview Gallery Item 3 — Horizontal
GENERAL CONSTRUCTION — Photo 3 — Services Overview Lightbox Item 3 — Horizontal
GENERAL CONSTRUCTION — Photo 3 — Service Detail Gallery Item 3 — Vertical
GENERAL CONSTRUCTION — Photo 4 — Services Overview Gallery Item 4 — Horizontal
GENERAL CONSTRUCTION — Photo 4 — Services Overview Lightbox Item 4 — Horizontal
GENERAL CONSTRUCTION — Photo 4 — Service Detail Gallery Item 4 — Horizontal
```

## Unique active service files and reuse

| Service | Photo | Current source file | Active placements |
|---|---:|---|---:|
| Full Renovation | 1 | `/images/services/renovation/01-full-home-renovation.png` | 5 |
| Full Renovation | 2 | `/images/services/renovation/02-period-house-restore.png` | 3 |
| Full Renovation | 3 | `/images/services/renovation/03-kitchen-extension.png` | 3 |
| Full Renovation | 4 | `/images/services/renovation/04-interior-fitout.png` | 3 |
| Heating Systems | 1 | `/images/services/heating/01-ch-installation.png` | 5 |
| Heating Systems | 2 | `/images/services/heating/02-boiler-upgrade.png` | 3 |
| Heating Systems | 3 | `/images/services/heating/03-underfloor-heating.png` | 3 |
| Heating Systems | 4 | `/images/services/heating/04-heat-pump-install.png` | 3 |
| Roofing | 1 | `/images/services/roofing/01-full-reroof.png` | 5 |
| Roofing | 2 | `/images/services/roofing/02-flat-roof-replacement.png` | 3 |
| Roofing | 3 | `/images/services/roofing/03-ridge-hip-repair.png` | 3 |
| Roofing | 4 | `/images/services/roofing/04-chimney-repointing.png` | 3 |
| Plumbing | 1 | `/images/services/plumbing/01-bathroom-suite.png` | 5 |
| Plumbing | 2 | `/images/services/plumbing/02-pipework-upgrade.png` | 3 |
| Plumbing | 3 | `/images/services/plumbing/03-ensuite-renovation.png` | 3 |
| Plumbing | 4 | `/images/services/plumbing/04-kitchen-plumbing.png` | 3 |
| General Construction | 1 | `/images/services/construction/01-two-storey-extension.png` | 5 |
| General Construction | 2 | `/images/services/construction/02-garage-conversion.png` | 3 |
| General Construction | 3 | `/images/services/construction/03-attic-conversion.png` | 3 |
| General Construction | 4 | `/images/services/construction/04-garden-room.png` | 3 |

### Recommended final service production

The current implementation requires a minimum of four unique project photographs per service, or 20 total. Because `object-fit: cover` applies different crops:

- Photo 1 must survive a tall homepage card, a tall/large modal panel, and horizontal gallery/lightbox crops.
- Photos 2 and 3 must survive horizontal Services-page crops and vertical service-detail crops.
- Photo 4 is horizontal in all active placements.

One high-resolution shared master per project can work when the subject is centred with generous safe space. For better art direction, produce both portrait and landscape crops for Photos 1–3 and one landscape crop for Photo 4: seven approved derivatives per service, or 35 service derivatives. Using separate files would require a future code/data change; the current code references only four files per service.

## Branding, favicon, and SEO/social placements

```text
SITEWIDE — Brand Asset 1 — Navbar Logo — Horizontal
SITEWIDE — Brand Asset 1 — Organization JSON-LD Logo — Horizontal
SITEWIDE — Brand Asset 1 — Root Open Graph Fallback — Horizontal
SITEWIDE — Brand Asset 1 — Root Twitter Fallback — Horizontal
HOMEPAGE — Brand Asset 1 — Open Graph Share Image — Horizontal
HOMEPAGE — Brand Asset 1 — Twitter Share Image — Horizontal
ABOUT — Brand Asset 1 — Open Graph Share Image — Horizontal
ABOUT — Brand Asset 1 — Twitter Share Image — Horizontal
SERVICES — Brand Asset 1 — Open Graph Share Image — Horizontal
SERVICES — Brand Asset 1 — Twitter Share Image — Horizontal
CONTACT — Brand Asset 1 — Open Graph Share Image — Horizontal
CONTACT — Brand Asset 1 — Twitter Share Image — Horizontal
FULL RENOVATION — Brand Asset 1 — Open Graph Share Image — Horizontal
FULL RENOVATION — Brand Asset 1 — Twitter Share Image — Horizontal
HEATING SYSTEMS — Brand Asset 1 — Open Graph Share Image — Horizontal
HEATING SYSTEMS — Brand Asset 1 — Twitter Share Image — Horizontal
ROOFING — Brand Asset 1 — Open Graph Share Image — Horizontal
ROOFING — Brand Asset 1 — Twitter Share Image — Horizontal
PLUMBING — Brand Asset 1 — Open Graph Share Image — Horizontal
PLUMBING — Brand Asset 1 — Twitter Share Image — Horizontal
GENERAL CONSTRUCTION — Brand Asset 1 — Open Graph Share Image — Horizontal
GENERAL CONSTRUCTION — Brand Asset 1 — Twitter Share Image — Horizontal
SITEWIDE — Brand Asset 2 — Footer Logo — Vertical
SITEWIDE — UI Asset 1 — Browser Favicon — Square
```

Brand Asset 1 is the same `/images/Logo.png` file in every listed placement. Brand Asset 2 is `/images/logo-full.png`. The global favicon is `src/app/favicon.ico`.

The existing logo technically fills every social metadata placement, but a dedicated 1200×630 social-share design is recommended, ideally with route-specific service variants. Implementing those variants would require future metadata and asset changes. Confirm both logo files against the final brand master; the Footer file’s near-square proportions differ from its declared 220×70 render box.

## Decorative and UI graphics

No production bitmap is needed for these active code-native elements:

- Statistics hard-hat, clipboard/check, and star icons: inline outline SVG.
- Homepage card arrow and modal controls: inline SVG.
- About testimonial stars: inline SVG; avatar circles are CSS placeholders, so client portraits would require a future component change.
- Services and service-detail radial-dot fields: CSS gradients.
- Contact map grid: CSS gradients pending the real map choice.
- Footer Irish tricolour and decorative shapes: CSS.

## Unused legacy assets

The following are present but not referenced through the active route import graph and are excluded from the production requirement:

- Root legacy images: `/images/hero-bg.jpg`, `/images/hero-bg-left.jpg`, `/images/team-full.jpg`.
- Hero SVG: `/images/hero/hero-bg.svg`.
- About SVGs: `detail.svg`, `fleet.svg`, `onsite.svg`, `project-main.svg`, and `team-full.svg`.
- Alternate logos under `/images/logo/`.
- The 20 service `.svg` files that correspond to the active `.png` placeholders.
- Starter Next.js assets: `/file.svg`, `/globe.svg`, `/next.svg`, `/vercel.svg`, and `/window.svg`.

# 15. SEO and Metadata

## Confirmed production domain

The confirmed planned origin is `https://www.tacconstruction.ie`. The `www` form is centralized as `SITE_URL` in `src/lib/seo.ts` and is used by implemented production metadata.

## Implemented in code

- `metadataBase` set from `https://www.tacconstruction.ie`.
- Canonicals for Home, About, Services, Contact, and each service detail.
- Route-specific titles and descriptions.
- Open Graph and Twitter metadata for all public content routes.
- Shared social image configuration using `/images/Logo.png`.
- Dynamic `/sitemap.xml` containing four static pages and five service routes.
- Dynamic `/robots.txt` allowing crawling, declaring the sitemap and production host.
- Organization and WebSite JSON-LD in the root layout.
- BreadcrumbList JSON-LD on service-detail routes.
- `en_IE` Open Graph locale and `summary_large_image` Twitter cards.
- Noindex/follow-false metadata for unresolved service slugs during metadata generation.

No incomplete LocalBusiness schema is present.

## Pending or unconfirmed

- Deployment and DNS on the confirmed domain.
- Search Console/Bing verification and sitemap submission.
- Dedicated social-share artwork and live-platform preview testing.
- LocalBusiness data after legal name, address, telephone, service area, hours, and identifiers are approved.
- Analytics, consent, and monitoring.
- Production crawl/index test, redirects, and live canonical verification.

# 16. Content and Business Information Requiring Confirmation

- Phone, email, WhatsApp destination, physical/service-area details, and opening hours.
- Company history, ownership, “100% Irish Owned,” years in business, project count, and satisfaction rate.
- Certifications, registrations, insurance, warranties, compliance, and emergency-service claims.
- The 24-hour response statement.
- Every testimonial and permission to publish the named attribution.
- Service descriptions, feature lists, project names, counties, dates, and portfolio facts.
- Privacy statement, enquiry data handling, retention, recipient, and legal pages.
- All production photographs, logos, favicon, and social artwork.

# 17. Known Gaps and Legacy Items

- The contact form is non-functional and has no submission integration or complete validation.
- Contact details and WhatsApp are not clickable links.
- The map is a CSS placeholder.
- No automated unit, integration, end-to-end, accessibility, or visual regression tests are configured.
- `AboutClient.tsx` exists but is not imported.
- Several legacy images and starter assets are unreferenced.
- Legacy service SVGs remain beside active PNG placeholders.
- About, Services, Contact, and Homepage heroes currently use the same provisional roofing photograph (all active JPGs are byte-identical).
- A full Content-Security-Policy (script/style sources) is deferred until analytics and the map embed are chosen.

# 18. Preservation Rules

- Treat active imports from route-level files as the implementation source of truth.
- Keep `src/lib/services.ts` as the centralized service and project data source.
- Preserve the current homepage service modal unless the project owner explicitly requests a change.
- Do not publish unverified claims, contacts, projects, reviews, or images.
- Do not edit `.next/` or `node_modules/`.
- Read the installed Next.js 16 documentation in `node_modules/next/dist/docs/` before changing framework APIs, as required by `AGENTS.md`.
- Do not delete unused assets or legacy files without confirming they are no longer needed.
- Keep secrets outside the repository in ignored environment files.
- Do not add dependencies where existing framework or browser APIs are sufficient.

# 19. Launch Checklist

## Content and assets

- [ ] Approve all business claims and service copy.
- [ ] Supply and approve the image inventory in Section 14.
- [ ] Approve final logos, favicon, and dedicated social-share artwork.
- [ ] Verify all contact details, links, project facts, and testimonials.
- [ ] Add approved privacy and form-data language.

## Functionality and quality

- [ ] Implement form validation, secure submission, success/error feedback, and delivery monitoring.
- [ ] Connect phone, email, and WhatsApp actions.
- [ ] Replace the map placeholder.
- [x] Add reduced-motion handling and overlay keyboard/focus handling.
- [ ] Add proportionate automated and manual testing.
- [ ] Run `npm run lint` and `npm run build`.
- [ ] Test all routes, interactions, images, links, and responsive breakpoints.

## Production and SEO

- [ ] Deploy to `https://www.tacconstruction.ie`.
- [ ] Verify DNS, HTTPS, redirects, canonicals, metadata, structured data, robots, and sitemap on production.
- [ ] Configure Search Console and submit the sitemap.
- [ ] Add approved LocalBusiness data only after client facts are confirmed.
- [ ] Configure privacy-compliant analytics, consent, uptime, error, form, and Core Web Vitals monitoring.
