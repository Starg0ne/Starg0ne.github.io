// ============================================================
// REVEAL ON SCROLL
// ============================================================

const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 60);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

reveals.forEach(el => observer.observe(el));

// ============================================================
// STAGGER DELAY SUR LES ÉLÉMENTS DE LISTE
// ============================================================

document.querySelectorAll('.project-item, .skill-group, .contact-link').forEach((el, i) => {
  el.style.transitionDelay = (i % 4) * 80 + 'ms';
});
