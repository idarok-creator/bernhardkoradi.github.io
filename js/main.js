/**
 * Bernhard Koradi — main interactions
 * Subtle parallax on hero, sticky header behaviour, mobile nav
 */

(function () {
  'use strict';

  // --- Elements ---
  const header = document.getElementById('header');
  const heroImageWrap = document.querySelector('.hero-image-wrap');
  const navToggle = document.getElementById('nav-toggle');
  const navMobile = document.getElementById('nav-mobile');
  const mobileLinks = navMobile ? navMobile.querySelectorAll('a') : [];

  // --- Sticky header state ---
  function updateHeader() {
    if (!header) return;
    const scrolled = window.scrollY > 60;
    header.classList.toggle('scrolled', scrolled);
  }

  // --- Hero parallax (subtle upward movement of image) ---
  function updateParallax() {
    if (!heroImageWrap) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const scrollY = window.scrollY;
    const heroHeight = window.innerHeight;

    // Only apply while hero is in view
    if (scrollY < heroHeight) {
      // Move image up at ~30% of scroll speed
      const offset = scrollY * 0.3;
      heroImageWrap.style.transform = `translate3d(0, ${offset}px, 0)`;
    }
  }

  // --- Combined scroll handler (throttled via rAF) ---
  let ticking = false;
  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateHeader();
        updateParallax();
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  updateHeader(); // initial

  // --- Mobile navigation ---
  if (navToggle && navMobile) {
    navToggle.addEventListener('click', () => {
      const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!isOpen));
      navMobile.classList.toggle('open', !isOpen);
      navMobile.setAttribute('aria-hidden', String(isOpen));
      document.body.style.overflow = isOpen ? '' : 'hidden';
    });

    // Close on link click
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.setAttribute('aria-expanded', 'false');
        navMobile.classList.remove('open');
        navMobile.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      });
    });
  }

  // --- Smooth scroll for internal links (extra polish) ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerOffset = 0; // full-bleed sections
        const elementPosition = target.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - headerOffset,
          behavior: 'smooth'
        });
      }
    });
  });

})();
