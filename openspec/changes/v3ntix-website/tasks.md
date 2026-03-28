## 1. Project Setup

- [ ] 1.1 Initialize Vite project with vanilla JS template in the workspace root
- [ ] 1.2 Install Tailwind CSS v4 and `@tailwindcss/vite` plugin
- [ ] 1.3 Configure `vite.config.js` for multi-page application (rollup input for all 6 HTML pages)
- [ ] 1.4 Set up main CSS file with Tailwind v4 `@import` and `@theme` design tokens (brand colors, fonts, spacing)
- [ ] 1.5 Add Google Fonts (Space Grotesk + Inter) links to all HTML files
- [ ] 1.6 Create project directory structure (`src/`, `src/i18n/`, `src/js/`, `public/`)

## 2. Internationalization (i18n) System

- [ ] 2.1 Create `src/i18n/en.json` with all English placeholder content for all 6 pages
- [ ] 2.2 Create `src/i18n/es.json` with all Spanish placeholder content for all 6 pages
- [ ] 2.3 Build `src/js/i18n.js` module — loads JSON, detects browser language, stores preference in localStorage, swaps text via `data-i18n` attributes
- [ ] 2.4 Build language toggle component in `src/js/language-toggle.js` — renders EN/ES toggle button, dispatches language change events

## 3. Shared Components (Navbar + Footer)

- [ ] 3.1 Build `src/js/navbar.js` — sticky navbar with logo, navigation links, language toggle, mobile hamburger menu with slide-in overlay
- [ ] 3.2 Build `src/js/footer.js` — footer with quick links, social media icons, copyright, secondary language indicator
- [ ] 3.3 Create `src/js/components.js` — shared initialization that injects navbar and footer into every page

## 4. Design System & Animations

- [ ] 4.1 Implement glassmorphism card utility classes in CSS (semi-transparent bg, backdrop-blur, subtle border)
- [ ] 4.2 Implement gradient background styles for hero section
- [ ] 4.3 Implement button styles with cyan glow hover effects
- [ ] 4.4 Build `src/js/animations.js` — Intersection Observer-based scroll-triggered fade-in animations
- [ ] 4.5 Implement card hover effects (scale, glow shadow, smooth transitions)

## 5. Home Page

- [ ] 5.1 Create `index.html` with hero section (logo, tagline, description, 2 CTA buttons, gradient background)
- [ ] 5.2 Add services preview section with 5 glassmorphism cards linking to services page
- [ ] 5.3 Add animated stats counter section (projects, clients, years, technologies) with count-up animation on scroll
- [ ] 5.4 Wire up all i18n `data-i18n` attributes for the home page

## 6. About Page

- [ ] 6.1 Create `about.html` with company story section
- [ ] 6.2 Add mission and vision section with styled cards
- [ ] 6.3 Add core values section with icon + description grid
- [ ] 6.4 Wire up all i18n `data-i18n` attributes for the about page

## 7. Services Page

- [ ] 7.1 Create `services.html` with page header
- [ ] 7.2 Build 5 detailed service cards (Custom Software, Web Apps, Mobile Apps, API Integration, IT Consulting) with icons, extended descriptions, and feature lists
- [ ] 7.3 Wire up all i18n `data-i18n` attributes for the services page

## 8. Portfolio Page

- [ ] 8.1 Create `portfolio.html` with page header
- [ ] 8.2 Build project card for "Textile Factory Management System" with description, tech tags (Full-Stack, Web App), and GitHub links
- [ ] 8.3 Build project card for "Buddy Gym — Fitness Tracker App" with description, tech tags (Android, Java, Django, Python, MySQL, REST API, JWT, Swagger), and GitHub links
- [ ] 8.4 Build project card for "Cochabamba Tourism Guide" with description, tech tags (React 18, Vite, Tailwind CSS, React Router, JavaScript), and GitHub link
- [ ] 8.5 Generate project preview images for all 3 portfolio cards
- [ ] 8.6 Add "View on GitHub" buttons linking to the real repositories
- [ ] 8.7 Wire up all i18n `data-i18n` attributes for the portfolio page

## 9. Team Page (Founder Profile)

- [ ] 9.1 Create `team.html` with page header and founder showcase layout
- [ ] 9.2 Build founder profile section with Dennis Vera's real photo (`public/images/dennis-vera.jpg`), name, title (Founder, Business Engineer & Full-Stack Developer), headline, and bio
- [ ] 9.3 Add experience timeline section (Metamorfo Digital 2025–Present, Bélica Marketing 2021–2023)
- [ ] 9.4 Add education section (Universidad Católica Boliviana, 2010–2017) and certification (University of Toronto, 2025)
- [ ] 9.5 Add skill tags section (React, JavaScript, Modern Web Design, Frontend & Backend)
- [ ] 9.6 Add LinkedIn social link button
- [ ] 9.7 Wire up all i18n `data-i18n` attributes for the team page

## 10. Contact Page

- [ ] 10.1 Create `contact.html` with page header
- [ ] 10.2 Build contact form with fields: name, email, service dropdown, message textarea, submit button
- [ ] 10.3 Implement client-side form validation (required fields, email format)
- [ ] 10.4 Add company contact info section (email, phone, location)
- [ ] 10.5 Wire up all i18n `data-i18n` attributes for the contact page

## 11. Responsive Polish

- [ ] 11.1 Test and fix responsive layout across all pages for mobile (< 768px)
- [ ] 11.2 Test and fix responsive layout across all pages for tablet (768px–1024px)
- [ ] 11.3 Test and fix responsive layout across all pages for desktop (> 1024px)
- [ ] 11.4 Verify touch-friendly target sizes (44px minimum) on mobile
- [ ] 11.5 Verify responsive typography scaling across breakpoints

## 12. Deployment Setup

- [ ] 12.1 Create `vercel.json` configuration for static site deployment with clean URL rewrites
- [ ] 12.2 Verify production build (`npm run build`) outputs correctly
- [ ] 12.3 Test all pages in production build locally
