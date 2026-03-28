## ADDED Requirements

### Requirement: Vite MPA project scaffold
The system SHALL be initialized as a Vite project with multi-page application configuration, with separate HTML entry points for each page (index.html, about.html, services.html, portfolio.html, team.html, contact.html).

#### Scenario: Project initialization
- **WHEN** the project is initialized with `npm create vite`
- **THEN** the project SHALL contain a valid `package.json`, `vite.config.js` with MPA rollup input configuration, and all 6 HTML entry files

### Requirement: Shared navigation bar
The system SHALL include a consistent navigation bar across all pages with links to Home, About, Services, Portfolio, Team, and Contact pages, plus a language toggle button.

#### Scenario: Navigation present on all pages
- **WHEN** a user visits any page of the website
- **THEN** the navigation bar SHALL be visible at the top of the page with links to all 6 pages and the V3ntix logo

#### Scenario: Active page indicator
- **WHEN** a user is on a specific page
- **THEN** the corresponding navigation link SHALL be visually highlighted as active

### Requirement: Shared footer
The system SHALL include a consistent footer across all pages containing quick links, social media icons, copyright notice, and a secondary language toggle.

#### Scenario: Footer present on all pages
- **WHEN** a user visits any page of the website
- **THEN** the footer SHALL be visible at the bottom of the page with navigation links, social media links, and "© 2026 V3ntix" copyright text

### Requirement: Mobile hamburger menu
The system SHALL display a hamburger menu icon on mobile viewports (< 768px) that toggles the navigation links.

#### Scenario: Hamburger menu on mobile
- **WHEN** the viewport width is less than 768px
- **THEN** the navigation links SHALL be hidden and a hamburger menu icon SHALL be displayed

#### Scenario: Hamburger menu toggle
- **WHEN** the user taps the hamburger menu icon
- **THEN** the navigation links SHALL slide in as a mobile menu overlay
