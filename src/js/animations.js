// animations.js — Intersection Observer-based scroll animations and stats counter

/**
 * Initialize scroll-triggered fade-in animations
 */
export function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  document.querySelectorAll('.fade-in').forEach((el) => {
    observer.observe(el);
  });
}

/**
 * Animate stat counters when they scroll into view
 */
export function initStatsCounter() {
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-count'), 10);
          animateCounter(el, 0, target, 2000);
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => observer.observe(counter));
}

function animateCounter(el, start, end, duration) {
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    const current = Math.floor(start + (end - start) * eased);
    el.textContent = current + (el.hasAttribute('data-suffix') ? el.getAttribute('data-suffix') : '');
    
    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = end + (el.hasAttribute('data-suffix') ? el.getAttribute('data-suffix') : '');
    }
  }

  requestAnimationFrame(update);
}
