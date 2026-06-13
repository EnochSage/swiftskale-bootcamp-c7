/* SwiftSkale Hub — Bootcamp Page Scripts | js/main.js */

/* 1. Scroll-triggered fade-up animations */
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      fadeObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.fade-up').forEach(el => fadeObserver.observe(el));

/* 2. Staggered module card entrance */
const cards = document.querySelectorAll('.module-card');
cards.forEach((card, i) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(22px)';
  card.style.transition = `opacity .5s ease ${i * 0.055}s, transform .5s ease ${i * 0.055}s, box-shadow .25s, transform .25s`;
});

const gridEl = document.querySelector('.modules-grid');
if (gridEl) {
  const gridObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        cards.forEach(card => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        });
        gridObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.05 });
  gridObserver.observe(gridEl);
}

/* 3. Active nav link highlight on scroll */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
const scrollSpy = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const id = e.target.getAttribute('id');
      navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === `#${id}`
          ? 'var(--ss-deep-violet)' : '';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => scrollSpy.observe(s));