/**
 * Little Chief Plumbing — Main JavaScript
 *
 * - Scroll-triggered reveal animations
 * - Sticky header with background/blur on scroll
 * - Mobile navigation toggle
 * - Active nav link highlighting
 * - FAQ accordion
 */

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================
  // DOM refs
  // =========================================================
  const header = document.getElementById('header');
  const navToggle = document.getElementById('nav-toggle');
  const navList = document.getElementById('nav-list');

  // =========================================================
  // Header: background + blur on scroll
  // =========================================================
  if (header) {
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // init
  }

  // =========================================================
  // Mobile nav toggle
  // =========================================================
  if (navToggle && navList) {
    const toggleMenu = (force) => {
      const isOpen = navList.classList.toggle('open', force);
      navToggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    };

    navToggle.addEventListener('click', () => toggleMenu());

    // Close on link click (mobile)
    navList.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (navList.classList.contains('open')) {
          toggleMenu(false);
        }
      });
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navList.classList.contains('open')) {
        toggleMenu(false);
        navToggle.focus();
      }
    });
  }

  // =========================================================
  // Smooth scroll for anchor links (backup for CSS scroll-behavior)
  // =========================================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // =========================================================
  // Active nav link highlighting
  // =========================================================
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (sections.length && navLinks.length) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
  }

  // =========================================================
  // Scroll-triggered reveal animations
  // =========================================================
  const revealElements = document.querySelectorAll('.reveal');

  if (revealElements.length) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -60px 0px',
        threshold: 0.1,
      }
    );

    revealElements.forEach(el => revealObserver.observe(el));
  }

  // =========================================================
  // FAQ Accordion
  // =========================================================
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all others (optional — remove this block to allow multiple open)
      faqItems.forEach(other => {
        if (other !== item && other.classList.contains('open')) {
          other.classList.remove('open');
          other.querySelector('.faq-trigger').setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle current
      item.classList.toggle('open', !isOpen);
      trigger.setAttribute('aria-expanded', String(!isOpen));
    });

    // Keyboard support
    trigger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        trigger.click();
      }
    });
  });

});
