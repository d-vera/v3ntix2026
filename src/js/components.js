// components.js — Shared initialization for all pages
import { initI18n } from './i18n.js';
import { createNavbar, injectNavbarToggle } from './navbar.js';
import { createFooter } from './footer.js';
import { initScrollAnimations } from './animations.js';

/**
 * Initialize all shared components on a page
 */
export function initPage() {
  // Inject navbar at top of body
  const navbar = createNavbar();
  document.body.prepend(navbar);

  // Inject footer at bottom of body
  const footer = createFooter();
  document.body.appendChild(footer);

  // Initialize language toggle in navbar (after DOM has the navbar)
  injectNavbarToggle();

  // Initialize i18n (detects language, applies translations)
  initI18n();

  // Initialize scroll animations
  requestAnimationFrame(() => {
    initScrollAnimations();
  });

  // Re-apply scroll animations when language changes (new elements may appear)
  window.addEventListener('languageChanged', () => {
    requestAnimationFrame(() => initScrollAnimations());
  });
}
