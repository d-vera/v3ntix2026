// language-toggle.js — Language toggle component
import { getLanguage, setLanguage } from './i18n.js';

/**
 * Create a language toggle button
 */
export function createLanguageToggle() {
  const toggle = document.createElement('button');
  toggle.className = 'lang-toggle';
  toggle.setAttribute('aria-label', 'Toggle language');
  toggle.id = 'lang-toggle';

  function updateToggle() {
    const lang = getLanguage();
    toggle.innerHTML = `
      <span class="${lang === 'en' ? 'lang-active' : 'lang-inactive'}">EN</span>
      <span class="lang-divider">|</span>
      <span class="${lang === 'es' ? 'lang-active' : 'lang-inactive'}">ES</span>
    `;
  }

  toggle.addEventListener('click', () => {
    const newLang = getLanguage() === 'en' ? 'es' : 'en';
    setLanguage(newLang);
    updateToggle();
  });

  window.addEventListener('languageChanged', updateToggle);
  updateToggle();

  return toggle;
}
