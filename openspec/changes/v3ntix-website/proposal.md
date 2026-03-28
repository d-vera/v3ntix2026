## Why

V3ntix is a software company that provides custom software solutions to businesses, but currently has no web presence. A professional, modern website is needed to:

- Establish credibility and brand identity in the software services market
- Showcase the company's services and past work to potential clients
- Provide bilingual (English/Spanish) accessibility to serve a broader client base
- Create a direct contact channel for prospective customers

## What Changes

- **New multi-page website** built with Vite and Tailwind CSS v4, featuring a dark, tech-forward design with glassmorphism effects and cyan accent colors matching the V3ntix brand
- **6 pages**: Home, About, Services, Portfolio, Team, Contact
- **Bilingual support** (EN/ES) using JSON-based i18n with a language toggle — instant content switching without page reload
- **Responsive design** with mobile-first approach across all breakpoints (mobile, tablet, desktop)
- **Contact form** for lead capture
- **Deployment-ready** for Vercel

## Capabilities

### New Capabilities
- `site-structure`: Vite MPA setup with shared navbar, footer, and consistent page layouts across 6 pages
- `bilingual-i18n`: JSON-based internationalization system (EN/ES) with persistent language preference and toggle component
- `design-system`: Tailwind v4 CSS-first theme with V3ntix brand colors, glassmorphism cards, typography (Space Grotesk + Inter), and micro-animations
- `pages-content`: All page content — hero section, about/mission, services showcase, portfolio grid, team cards, and contact form with placeholder copy in both languages
- `responsive-layout`: Mobile-first responsive layouts with hamburger menu, adaptive grids, and breakpoint-specific styling

### Modified Capabilities
<!-- No existing capabilities to modify — this is a greenfield project -->

## Impact

- **New project structure**: Vite + Tailwind v4 + PostCSS build pipeline
- **Dependencies**: vite, tailwindcss v4, @tailwindcss/vite, Google Fonts (Space Grotesk, Inter)
- **Deployment**: Configured for Vercel static site hosting
- **Assets**: V3ntix logo, placeholder images for portfolio and team sections
