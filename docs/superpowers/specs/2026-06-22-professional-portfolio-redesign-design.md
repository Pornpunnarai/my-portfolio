# Professional Portfolio Redesign — Design Spec

**Date:** 2026-06-22  
**Status:** Approved (brainstorming)  
**Owner:** Pawnpunnarai Saimoonkham

## Goal

Redesign the portfolio website to look clean, formal, professional, and trustworthy so recruiters can understand the candidate's profile within 30 seconds.

## Requirements Summary

| Decision | Choice |
|----------|--------|
| Structure | Single-page home with sections + separate project detail + full portfolio page |
| Language | EN \| TH toggle in navbar (switches entire page) |
| Contact (primary) | LinkedIn, Email, Download CV |
| Contact (secondary) | Facebook, Instagram in footer only |
| GitHub | Not included (work is in-house / corporate) |
| Featured projects | ASAPH, Pikul Wallet, DLT Taxi Driver, SCB Business Anywhere |
| Color theme | Navy + white + gray (corporate) |
| Approach | Refactor + lightweight design system (no heavy new dependencies) |

## Approach

**Selected: Refactor + Design System (Approach 1)**

Create shared `Layout` (Navbar/Footer), consolidate Home into single-page sections, use CSS variables for the Navy theme, and implement i18n via React Context + JSON translation files. Keeps React 17 + CRA without adding react-i18next.

**Rejected alternatives:**
- react-i18next — unnecessary complexity for a 3-route site
- Reskin only — does not achieve single-page recruiter scan or structural cleanup

## Routing

```
/ (Home — single-page scroll)
├── #hero
├── #about
├── #experience
├── #skills
├── #projects   (4 featured)
└── #contact

/portfolio          → all projects grid
/portfolio/detail   → project detail (existing state-based navigation)
```

- Remove `/resume` route — timeline and Download CV move to `#experience` on home
- Add redirect: `/resume` → `/#experience` for bookmarked links
- Navbar: Logo | About | Experience | Projects | Contact | EN \| TH | Download CV
- Menu items on home use smooth scroll; on other pages navigate to home with hash
- Footer: copyright, LinkedIn, Email, Facebook/Instagram (small, secondary)

## Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--color-navy` | `#1e3a5f` | Navbar accents, headings, primary buttons |
| `--color-navy-dark` | `#152a45` | Button hover |
| `--color-bg` | `#ffffff` | Main background |
| `--color-bg-alt` | `#f7f8fa` | Alternating sections |
| `--color-text` | `#2d3748` | Body text |
| `--color-text-muted` | `#718096` | Dates, subtitles |
| `--color-border` | `#e2e8f0` | Cards, dividers |
| Font | Helvetica Neue (existing) | All text |

**Removed visual elements:** floating color dots, purple gradients, pink navbar (`#ffc0cb8c`), playful hover effects (pink card fill, overline decorations).

## Home Page Sections

### Hero (`#hero`)

- White background, ~85vh height
- Left: name (navy, bold), title line (`Front-End Developer · Mobile Developer`), three stats in a row (`6+ Years` | `15+ Projects` | Download CV button)
- Right: intro image (existing asset)
- No animations

### About (`#about`)

- Background `#f7f8fa`
- 3–4 sentence professional summary focused on cross-platform experience (React, React Native, TypeScript) and enterprise/in-house work
- Bilingual via i18n keys

### Experience (`#experience`)

- Replace react-chrono with a simple CSS vertical timeline
- Each entry: date range (muted) | company (navy, bold) | role | 2–3 bullet points
- Data from current Resume screen: Socket 9 → SiamDApp → SPP CMU → PranWorks
- Download CV button repeated at section end

### Skills (`#skills`)

- Grouped: Languages, Frameworks, Tools
- Display as neutral chips (white bg, gray border) — no colored progress bars
- Examples: React, React Native, TypeScript, JavaScript, HTML/CSS, WordPress, Preact

### Projects (`#projects`)

- 2×2 grid (desktop), 1 column (mobile)
- Cards: image → name → one-line description → tech tags → "View Details" link
- Hover: subtle shadow + navy border (no color fill change)
- Featured: ASAPH, Pikul Wallet, DLT Taxi Driver, SCB Business Anywhere
- Centered button: "View All Projects →" links to `/portfolio`

### Contact (`#contact`)

- Navy background, white text
- Prominent: LinkedIn, Email, Download CV
- Uses existing FontAwesome icons

## Portfolio Pages

### `/portfolio`

- Shared Layout with home
- Heading + one-line subtitle
- 3-column grid (desktop), 2 (tablet), 1 (mobile)
- Uniform card style (no per-project border colors)
- Card always shows image, name, and tech tags (no hover-to-reveal-skill overlay)
- Click navigates to `/portfolio/detail` with existing `state.data` pattern

### `/portfolio/detail`

- Breadcrumb: Home > Projects > [Project Name]
- Project title, description, tech tags
- Image carousel (keep react-responsive-carousel, restyle nav/arrows to navy)
- App Store / Play Store links as outline buttons where available
- "← Back to Projects" link

## Component Structure

```
src/
├── components/
│   ├── Layout/
│   ├── Navbar/
│   ├── Footer/
│   ├── SectionHero/
│   ├── SectionAbout/
│   ├── SectionExperience/
│   ├── SectionSkills/
│   ├── SectionProjects/
│   ├── SectionContact/
│   ├── ProjectCard/
│   └── LanguageToggle/
├── context/
│   └── LanguageContext.js
├── i18n/
│   ├── en.json
│   └── th.json
├── styles/
│   └── _variables.scss
└── screens/
    ├── Home/
    ├── Portfolio/
    └── PortfolioDetail/
```

**Removed:** `screens/Resume/`, duplicated navbar code in each screen.

## Internationalization

- `LanguageContext` stores `lang` (`en` | `th`) in `localStorage`
- `en.json` / `th.json` keyed by section
- Toggle re-renders page without full reload
- Project descriptions: English primary in `MyPortfolio.js`; add `descriptionTh` field per project (translate featured 4 first, others incrementally)

## Dependencies to Remove

| Package | Reason |
|---------|--------|
| `react-chrono` | Replaced by CSS timeline |

**Keep:** react-responsive-carousel, react-bootstrap (layout grid), FontAwesome, react-router-dom v5.

## Responsive & Accessibility

- Mobile: hamburger navbar menu
- Smooth scroll on desktop; jump scroll acceptable on mobile
- Visible focus states on all interactive elements
- Image `alt` text on all project images
- Text on navy background meets WCAG AA contrast

## Out of Scope

- GitHub integration or public repo showcase
- New backend or CMS
- React version upgrade (stay on React 17 for this phase)
- New professional headshot photography (use existing intro image unless user provides one later)
- Full Thai translation of all 15+ project descriptions in v1 (featured 4 + UI strings prioritized)

## Success Criteria

1. Recruiter landing on `/` sees name, role, experience, and contact within one viewport scroll
2. No casual/playful visual elements remain (pink, floating dots, purple gradients)
3. EN \| TH toggle works across all pages
4. All existing projects remain accessible via `/portfolio`
5. Featured projects match the four specified names
6. `/resume` redirects or is removed without broken links in navbar

## Contact Information

| Channel | Value |
|---------|-------|
| LinkedIn | https://www.linkedin.com/in/pawnpunnarai-saimoonkham-b0041b130/ |
| Email | pawnpunnarai.saimoonkham@gmail.com |
| CV | Existing PDF: `Resume - Pawnpunnarai Saimoonkham.pdf` |
