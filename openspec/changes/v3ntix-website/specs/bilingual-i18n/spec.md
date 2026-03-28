## ADDED Requirements

### Requirement: JSON translation files
The system SHALL maintain two JSON translation files (`en.json` and `es.json`) containing all user-facing text content for every page, keyed by a consistent dot-notation identifier (e.g., `hero.title`, `services.card1.title`).

#### Scenario: Translation file structure
- **WHEN** a translation file is loaded
- **THEN** it SHALL contain keys for every text element across all 6 pages, and both files SHALL have identical key structures

### Requirement: Language toggle component
The system SHALL display a language toggle button in the navigation bar that allows switching between English (EN) and Spanish (ES).

#### Scenario: Toggle switches language
- **WHEN** the user clicks the language toggle
- **THEN** all visible text on the current page SHALL update to the selected language without a page reload

#### Scenario: Toggle displays current language
- **WHEN** the page loads
- **THEN** the toggle SHALL visually indicate which language is currently active

### Requirement: Persistent language preference
The system SHALL store the user's language preference in `localStorage` and restore it on subsequent page loads.

#### Scenario: Language persists across pages
- **WHEN** the user selects Spanish on the Home page and navigates to the About page
- **THEN** the About page SHALL render in Spanish

#### Scenario: Language persists across sessions
- **WHEN** the user selects English, closes the browser, and returns later
- **THEN** the site SHALL load in English

### Requirement: Default language detection
The system SHALL default to Spanish if the browser's language starts with "es", otherwise default to English.

#### Scenario: Spanish browser default
- **WHEN** a first-time visitor has browser language set to "es-MX"
- **THEN** the site SHALL render in Spanish

#### Scenario: English browser default
- **WHEN** a first-time visitor has browser language set to "en-US"
- **THEN** the site SHALL render in English
