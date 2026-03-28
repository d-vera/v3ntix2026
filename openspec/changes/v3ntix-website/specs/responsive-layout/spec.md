## ADDED Requirements

### Requirement: Mobile-first responsive approach
The system SHALL be built with a mobile-first CSS approach where base styles target mobile viewports (< 768px) and progressively enhance for tablet (768px–1024px) and desktop (> 1024px).

#### Scenario: Mobile layout
- **WHEN** the viewport width is less than 768px
- **THEN** content sections SHALL stack vertically, cards SHALL display in a single column, and padding/margins SHALL be optimized for small screens

### Requirement: Tablet responsive layout
The system SHALL display 2-column grid layouts for service cards and portfolio cards on tablet viewports (768px–1024px). The founder profile on the team page SHALL display as a centered single-column layout.

#### Scenario: Tablet grid
- **WHEN** the viewport width is between 768px and 1024px
- **THEN** service and portfolio card grids SHALL display in 2 columns, the founder profile SHALL be centered, and the navigation SHALL show full horizontal links

### Requirement: Desktop responsive layout
The system SHALL display 3-column grid layouts for service cards and portfolio cards on desktop viewports (> 1024px). The founder profile on the team page SHALL display as a centered layout with side-by-side photo and bio.

#### Scenario: Desktop grid
- **WHEN** the viewport width is greater than 1024px
- **THEN** service and portfolio cards SHALL display in 3 columns and the founder profile SHALL display with photo and details side by side

### Requirement: Responsive typography
The system SHALL scale typography sizes across breakpoints — larger headings and body text on desktop, compact sizes on mobile.

#### Scenario: Mobile typography
- **WHEN** the viewport is mobile-sized
- **THEN** the hero heading SHALL be appropriately sized for the screen width without horizontal overflow

#### Scenario: Desktop typography
- **WHEN** the viewport is desktop-sized
- **THEN** the hero heading SHALL be large and impactful, taking advantage of the available space

### Requirement: Responsive images and media
The system SHALL ensure all images scale appropriately and do not overflow their containers on any viewport size.

#### Scenario: Image scaling
- **WHEN** the viewport is resized
- **THEN** all images SHALL scale proportionally within their containers without distortion or overflow

### Requirement: Touch-friendly interactions
The system SHALL ensure all interactive elements (buttons, links, cards, form inputs) have touch-friendly sizes (minimum 44px touch targets) on mobile viewports.

#### Scenario: Touch targets
- **WHEN** the viewport is mobile-sized
- **THEN** all clickable elements SHALL have a minimum touch target size of 44×44 pixels
