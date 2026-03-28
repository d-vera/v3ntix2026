// i18n.js — Internationalization module
import en from '../i18n/en.json';
import es from '../i18n/es.json';

const translations = { en, es };
let currentLang = 'en';

/**
 * Get a nested value from an object using dot notation
 */
function getNestedValue(obj, path) {
  return path.split('.').reduce((acc, key) => acc && acc[key], obj);
}

/**
 * Detect the best default language based on browser settings
 */
function detectLanguage() {
  const stored = localStorage.getItem('v3ntix-lang');
  if (stored && translations[stored]) return stored;
  
  const browserLang = navigator.language || navigator.userLanguage;
  return browserLang.startsWith('es') ? 'es' : 'en';
}

/**
 * Apply translations to all elements with data-i18n attribute
 */
function applyTranslations() {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = getNestedValue(translations[currentLang], key);
    if (value !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = value;
      } else if (el.tagName === 'OPTION') {
        el.textContent = value;
      } else {
        el.textContent = value;
      }
    }
  });

  // Update HTML lang attribute
  document.documentElement.lang = currentLang;

  // Dispatch event for other modules
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: currentLang } }));
}

/**
 * Set the current language
 */
export function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('v3ntix-lang', lang);
  applyTranslations();
}

/**
 * Get the current language
 */
export function getLanguage() {
  return currentLang;
}

/**
 * Get a translation by key
 */
export function t(key) {
  return getNestedValue(translations[currentLang], key) || key;
}

/**
 * Initialize i18n system
 */
export function initI18n() {
  currentLang = detectLanguage();
  // Apply after a tiny delay to ensure DOM is ready
  requestAnimationFrame(() => {
    applyTranslations();
  });
}
