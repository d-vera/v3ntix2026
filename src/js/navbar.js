// navbar.js — Sticky navigation bar with mobile hamburger menu
import { createLanguageToggle } from './language-toggle.js';

export function createNavbar() {
  const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
  
  const nav = document.createElement('nav');
  nav.className = 'navbar';
  nav.id = 'navbar';

  const links = [
    { href: 'index.html', key: 'nav.home', id: 'index' },
    { href: 'about.html', key: 'nav.about', id: 'about' },
    { href: 'services.html', key: 'nav.services', id: 'services' },
    { href: 'portfolio.html', key: 'nav.portfolio', id: 'portfolio' },
    { href: 'team.html', key: 'nav.team', id: 'team' },
    { href: 'contact.html', key: 'nav.contact', id: 'contact' },
  ];

  const linksHTML = links.map(link => {
    const isActive = currentPage === link.id || (currentPage === '' && link.id === 'index');
    return `<a href="${link.href}" class="nav-link ${isActive ? 'nav-link-active' : ''}" data-i18n="${link.key}">${link.id === 'index' ? 'Home' : link.id.charAt(0).toUpperCase() + link.id.slice(1)}</a>`;
  }).join('');

  nav.innerHTML = `
    <div class="nav-container">
      <a href="index.html" class="nav-logo">
        <span class="logo-v">V3</span><span class="logo-ntix">ntix</span>
      </a>
      <div class="nav-links" id="nav-links">
        ${linksHTML}
        <div class="nav-toggle-wrapper" id="nav-toggle-wrapper"></div>
      </div>
      <div class="nav-right">
        <div class="nav-toggle-desktop" id="nav-toggle-desktop"></div>
        <button class="hamburger" id="hamburger" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  `;

  // Mobile hamburger toggle
  const hamburger = nav.querySelector('#hamburger');
  const navLinks = nav.querySelector('#nav-links');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.classList.toggle('nav-open');
  });

  // Close menu on link click
  nav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
      document.body.classList.remove('nav-open');
    });
  });

  // Sticky navbar on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('navbar-scrolled');
    } else {
      nav.classList.remove('navbar-scrolled');
    }
  });

  return nav;
}

export function injectNavbarToggle() {
  const toggle = createLanguageToggle();
  const desktopWrapper = document.getElementById('nav-toggle-desktop');
  const mobileWrapper = document.getElementById('nav-toggle-wrapper');
  
  if (desktopWrapper) {
    desktopWrapper.appendChild(toggle);
  }
  if (mobileWrapper) {
    const mobileToggle = createLanguageToggle();
    mobileWrapper.appendChild(mobileToggle);
  }
}
