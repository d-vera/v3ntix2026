## Context

V3ntix is a software company needing a greenfield website. There is no existing codebase — this is a brand-new project. The website will serve as the company's digital presence, showcasing services to potential B2B clients.

Key constraints:
- Must support bilingual content (English and Spanish) with dynamic switching
- Must follow the V3ntix brand identity: dark navy backgrounds, glowing cyan accents, modern tech aesthetic
- Built as a Vite multi-page application (MPA) with Tailwind CSS v4
- Deployed on Vercel as a static site

## Goals / Non-Goals

**Goals:**
- Build a polished, premium-feeling multi-page website with 6 pages (Home, About, Services, Portfolio, Team, Contact)
- Implement full bilingual support (EN/ES) with persistent language preference
- Create a cohesive design system using Tailwind v4's CSS-first `@theme` configuration
- Ensure full responsiveness across mobile, tablet, and desktop breakpoints
- Include micro-animations, glassmorphism effects, and hover interactions for a modern feel
- Deploy-ready for Vercel with proper configuration

**Non-Goals:**
- No backend/server — this is a static site with placeholder content
- No CMS integration (content is hardcoded in JSON i18n files)
- No user authentication or admin panel
- No e-commerce or payment processing
- No blog or dynamic content generation
- Contact form will be front-end only (no email sending — can be integrated with a service later)

## Decisions

### 1. Vite MPA over SPA
**Decision**: Use Vite's built-in multi-page application support with separate HTML entry points per page.
**Alternatives considered**:
- *SPA with hash router*: Would allow smooth page transitions and simpler i18n state management, but worse SEO and the site feels less like traditional pages.
- *Next.js*: Full SSR framework, but overkill for a static company website and adds React as a dependency.

**Rationale**: True multi-page gives better SEO (each page is a real HTML file), faster initial load per page, and aligns with static site deployment on Vercel. The i18n state is persisted via `localStorage` so language preference carries across page navigations.

### 2. Tailwind CSS v4 with CSS-first configuration
**Decision**: Use Tailwind v4 with `@theme` directive in CSS instead of `tailwind.config.js`.
**Alternatives considered**:
- *Tailwind v3*: More ecosystem support/plugins, but v4 is the modern standard.
- *Vanilla CSS*: More flexibility but loses utility-class productivity.

**Rationale**: v4's `@theme` approach keeps design tokens in CSS where they belong. Custom properties are natively available throughout the codebase.

### 3. JSON-based i18n with vanilla JS
**Decision**: Use simple JSON files (`en.json`, `es.json`) with a lightweight JS module that swaps text content based on `data-i18n` attributes.
**Alternatives considered**:
- *i18next library*: Full-featured but heavy for a static site.
- *Separate HTML files per language*: Simple but causes content duplication and maintenance burden.

**Rationale**: A ~50-line custom i18n module keeps the bundle tiny, works without framework dependencies, and is easy to maintain. Language preference is stored in `localStorage`.

### 4. Google Fonts: Space Grotesk + Inter
**Decision**: Use Space Grotesk for headings and Inter for body text.
**Rationale**: Space Grotesk has a technical, geometric feel that matches the V3ntix brand. Inter is highly readable at all sizes and is the industry standard for web UI text.

### 5. Color palette derived from brand logo
**Decision**: Extract the dark navy to cyan gradient from the V3ntix logo as the foundation of the design system.
- Primary palette: `#0a1628` → `#0f2847` → `#132e4a` (dark navy range)
- Accent palette: `#00d4ff` → `#7dd3fc` → `#bae6fd` (cyan range)
- Glassmorphism: `rgba(15, 40, 71, 0.6)` with `backdrop-blur`

### 6. Deployment on Vercel
**Decision**: Deploy as a static site on Vercel.
**Alternatives considered**:
- *Netlify*: Built-in form handling is convenient, but user prefers Vercel.

**Rationale**: Vercel provides excellent edge network performance, great GitHub integration for auto-deploys, and free SSL/custom domains on the free tier.

## Risks / Trade-offs

- **Contact form has no backend** → Form will collect input but not send emails. Mitigation: can integrate with Formspree, EmailJS, or a Vercel serverless function later.
- **No CMS** → Content updates require code changes and redeployment. Mitigation: JSON i18n files make content easy to find and edit; CMS can be added later if needed.
- **MPA page transitions** → Full page reload on navigation (no smooth SPA transitions). Mitigation: Fast page loads via Vite's optimized builds and Vercel's CDN minimize perceived latency.
- **Tailwind v4 ecosystem maturity** → Fewer community plugins compared to v3. Mitigation: The site uses standard Tailwind features and custom CSS where needed.
