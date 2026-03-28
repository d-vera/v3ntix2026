## ADDED Requirements

### Requirement: Tailwind v4 CSS-first theme
The system SHALL define all design tokens using Tailwind v4's `@theme` directive in the main CSS file, including custom colors, fonts, spacing, and border-radius values.

#### Scenario: Theme tokens available
- **WHEN** any page is rendered
- **THEN** Tailwind utility classes using custom theme tokens (e.g., `bg-primary-900`, `text-accent-400`) SHALL apply the correct V3ntix brand colors

### Requirement: V3ntix brand color palette
The system SHALL use the following color palette derived from the V3ntix logo:
- Primary: `#0a1628` (darkest navy), `#0f2847` (dark blue), `#132e4a` (medium), `#1a3a5c` (lighter)
- Accent: `#00d4ff` (glowing cyan), `#7dd3fc` (light cyan), `#bae6fd` (subtle cyan)
- Surface: `#0d1f3c` (card backgrounds)
- Glass: `rgba(15, 40, 71, 0.6)` (glassmorphism)

#### Scenario: Brand colors render correctly
- **WHEN** the home page loads
- **THEN** the background SHALL use the primary-900 dark navy, accent elements SHALL use the cyan palette, and text SHALL be white or light cyan for readability

### Requirement: Typography system
The system SHALL use Space Grotesk (Google Fonts) for headings and Inter (Google Fonts) for body text, loaded via `<link>` tags in each HTML file.

#### Scenario: Fonts load correctly
- **WHEN** any page loads
- **THEN** headings SHALL render in Space Grotesk and body text SHALL render in Inter

### Requirement: Glassmorphism card component
The system SHALL provide a reusable glassmorphism card style featuring semi-transparent background, backdrop blur, and subtle border, usable across service cards, portfolio cards, and team cards.

#### Scenario: Glass card appearance
- **WHEN** a glassmorphism card is displayed
- **THEN** it SHALL have a semi-transparent background with `backdrop-blur`, a 1px border with low opacity, and rounded corners

### Requirement: Micro-animations and hover effects
The system SHALL include subtle animations: fade-in on scroll for content sections, hover scale/glow effects on cards and buttons, and smooth transitions on interactive elements.

#### Scenario: Card hover effect
- **WHEN** a user hovers over a service or portfolio card
- **THEN** the card SHALL scale up slightly and display a cyan glow/shadow effect with a smooth transition

#### Scenario: Scroll-triggered fade-in
- **WHEN** a content section scrolls into the viewport
- **THEN** the section SHALL animate in with a fade and slight upward slide

### Requirement: Gradient and glow effects
The system SHALL use gradient backgrounds on the hero section and glowing accent borders/shadows on CTAs and interactive elements.

#### Scenario: Hero gradient
- **WHEN** the home page loads
- **THEN** the hero section SHALL display a gradient background transitioning through the primary color palette

#### Scenario: CTA button glow
- **WHEN** a user hovers over a CTA button
- **THEN** the button SHALL display a cyan glow effect
