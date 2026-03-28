## ADDED Requirements

### Requirement: Home page hero section
The system SHALL display a hero section on the home page with the V3ntix logo, a tagline, a brief company description, and two CTA buttons ("Contact Us" and "Our Services") over an animated/gradient background.

#### Scenario: Hero renders with content
- **WHEN** the home page loads
- **THEN** the hero section SHALL display the V3ntix logo, tagline text, description text, and two CTA buttons, all translatable via i18n

### Requirement: Home page services preview
The system SHALL display a preview section on the home page showing the 5 services (Custom Software, Web Apps, Mobile Apps, API Integration, IT Consulting) as interactive cards linking to the services page.

#### Scenario: Services preview renders
- **WHEN** the user scrolls to the services section on the home page
- **THEN** 5 service cards SHALL be visible, each with an icon, title, and brief description in the active language

### Requirement: Home page stats counter
The system SHALL display an animated stats counter section showing key company metrics (e.g., projects completed, satisfied clients, years of experience, technologies used) with count-up animation.

#### Scenario: Stats animate on scroll
- **WHEN** the stats section scrolls into the viewport
- **THEN** each stat number SHALL animate from 0 to its target value

### Requirement: About page content
The system SHALL display the About page with company story, mission statement, vision statement, and a list of core values, all translatable via i18n.

#### Scenario: About page renders
- **WHEN** the user navigates to /about.html
- **THEN** the page SHALL display company story, mission, vision, and values sections in the active language

### Requirement: Services page with detailed cards
The system SHALL display the Services page with 5 detailed service cards, each containing an icon, title, extended description, and list of features/deliverables.

#### Scenario: Services page renders all services
- **WHEN** the user navigates to /services.html
- **THEN** 5 service cards SHALL be displayed: Custom Software Development, Web Applications, Mobile Apps, API Integration, and IT Consulting, each with full descriptions

### Requirement: Portfolio page with real project showcase
The system SHALL display the Portfolio page with 3 real project cards based on Dennis Vera's GitHub repositories:

**Project 1: Textile Factory Management System**
- **Type**: Full-stack web application (Frontend + Backend)
- **Description**: A management system for a textile factory, handling trailer/shipment logistics and operations
- **Tech tags**: Full-Stack, Web Application
- **GitHub links**: https://github.com/d-vera/trailer_backend, https://github.com/d-vera/trailer_frontend
- **Category**: Custom Software / Web App

**Project 2: Buddy Gym — Fitness Tracker App**
- **Type**: Full-stack mobile application (Android + Backend API)
- **Description**: A fitness studio companion app that lets users track workouts, manage exercises by muscle group, log training sessions with weight/sets/reps, view training history with time-period filters, and see performance statistics (low/high/last weight per exercise)
- **Tech tags**: Android, Java, Django, Python, MySQL, REST API, JWT Auth, Swagger
- **GitHub links**: https://github.com/d-vera/buddy_gym_app_frontend_2025, https://github.com/d-vera/buddy_gym_app_backend_2025
- **Features to highlight**: User authentication, exercise CRUD by muscle group, training session tracking, history filters (week/month/year), performance statistics, OpenAPI docs
- **Category**: Mobile App / API Integration

**Project 3: Cochabamba Tourism Guide**
- **Type**: Single-page web application
- **Description**: A tourism guide for the city of Cochabamba, Bolivia, featuring top 10 tourist places with image carousels, best towns to visit, contact form, and fully responsive design
- **Tech tags**: React 18, Vite, Tailwind CSS, React Router, JavaScript
- **GitHub link**: https://github.com/d-vera/Cocha_tourism_guide_REACT_2025
- **Pages**: Home, Top 10 Places, Contact, Towns
- **Category**: Web Application

Each card SHALL feature a generated project image, title, description, technology tags, and a "View on GitHub" link. All text SHALL be translatable via i18n.

#### Scenario: Portfolio renders all 3 projects
- **WHEN** the user navigates to /portfolio.html
- **THEN** 3 project cards SHALL be displayed: Textile Factory, Buddy Gym, and Cochabamba Tourism Guide, each with descriptions, tech tags, and GitHub links

#### Scenario: GitHub links are functional
- **WHEN** the user clicks "View on GitHub" on any project card
- **THEN** the link SHALL open the corresponding GitHub repository in a new tab

### Requirement: Team page with founder profile
The system SHALL display the Team page as a founder/about-me showcase for Dennis Vera, featuring:
- **Name**: Dennis Vera Ustariz
- **Title**: Founder, Business Engineer & Full-Stack Developer
- **Photo**: Professional headshot (actual photo provided, stored at `public/images/dennis-vera.jpg`)
- **Headline**: "Web Developer | Enthusiast in React, JavaScript & Modern Web Technologies | Passionate About Frontend & Backend"
- **Bio**: Motivated and detail-oriented web development enthusiast with a strong interest in front-end technologies such as React and modern web design standards. Passionate about both frontend and backend development. Business Engineer with a background from Universidad Católica Boliviana.
- **Location**: Cochabamba, Bolivia
- **Experience**: Web Developer at Metamorfo Digital (2025–Present), Web Developer at Bélica Marketing (2021–2023)
- **Education**: Business Engineering — Universidad Católica Boliviana (2010–2017)
- **Certification**: Learn to Program: The Fundamentals — University of Toronto (2025)
- **Skills**: React, JavaScript (ES6+), Modern Web Design, Frontend & Backend Development
- **Social links**: LinkedIn profile (https://www.linkedin.com/in/dennis-vera-ustariz-a10343147/)
The page SHALL be styled as a prominent single-person founder showcase (not a grid), with a large photo, detailed bio, skill tags, and a timeline of experience.

#### Scenario: Founder profile renders
- **WHEN** the user navigates to /team.html
- **THEN** a founder profile card SHALL be displayed with Dennis Vera's photo, name, title, bio, experience timeline, education, skills, and LinkedIn link

### Requirement: Contact page with form
The system SHALL display the Contact page with a contact form (name, email, service selection dropdown, message textarea, submit button) and company contact information (email, phone, location).

#### Scenario: Contact form renders
- **WHEN** the user navigates to /contact.html
- **THEN** a contact form SHALL be displayed with fields for name, email, service selection, message, and a submit button

#### Scenario: Contact form validation
- **WHEN** the user submits the form with empty required fields
- **THEN** the form SHALL display validation messages and prevent submission

### Requirement: Placeholder content in both languages
The system SHALL include realistic placeholder copy in both English and Spanish for all pages, covering company descriptions, service details, team bios, project descriptions, and contact information.

#### Scenario: English content quality
- **WHEN** the site is viewed in English
- **THEN** all placeholder text SHALL read as professional, cohesive marketing copy

#### Scenario: Spanish content quality
- **WHEN** the site is viewed in Spanish
- **THEN** all placeholder text SHALL read as professional, cohesive marketing copy in proper Spanish
