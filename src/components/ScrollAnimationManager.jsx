import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

/**
 * ScrollAnimationManager — Parts Coming In & Forming Scroll Animation System
 * Features:
 * 1. ZERO top progress line (completely removed as requested).
 * 2. Real parts-assembly scroll animation:
 *    - Left cards tilt and glide in from the left.
 *    - Right cards tilt and glide in from the right.
 *    - Center cards elevate with 3D depth perspective and snap into form.
 *    - Images inside containers gently settle from expanded perspective.
 *    - Two-column splits (e.g. Engineering & About) assemble towards each other.
 *    - Section titles unmask and ascend cleanly.
 * 3. Dynamic count-up for statistics as their parent container forms.
 * 4. Hardware-accelerated 60/120fps physics using translate3d and will-change.
 * 5. Minimal, non-intrusive floating back-to-top button.
 */
export default function ScrollAnimationManager() {
  const { pathname } = useLocation();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const rafIdRef = useRef(null);

  // 1. Back to Top Visibility Tracker
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        rafIdRef.current = window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
          setShowBackToTop(scrollTop > 260);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafIdRef.current) window.cancelAnimationFrame(rafIdRef.current);
    };
  }, [pathname]);

  // 2. Animated Number Counter Engine
  const animateCounter = (el) => {
    if (el.dataset.counterAnimated === 'true') return;
    el.dataset.counterAnimated = 'true';

    const targetVal = parseFloat(el.getAttribute('data-count'));
    const suffix = el.getAttribute('data-suffix') || '';
    const prefix = el.getAttribute('data-prefix') || '';
    if (isNaN(targetVal)) return;

    const duration = 1200; // 1.2s smooth count
    const startTime = performance.now();
    const isInteger = Number.isInteger(targetVal);

    const updateCount = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(1, elapsed / duration);
      // easeOutExpo for crisp finish
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentVal = targetVal * ease;

      let formattedNumber;
      if (isInteger) {
        formattedNumber = Math.round(currentVal).toLocaleString();
      } else {
        formattedNumber = currentVal.toFixed(1);
      }

      el.textContent = `${prefix}${formattedNumber}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        el.textContent = `${prefix}${isInteger ? targetVal.toLocaleString() : targetVal}${suffix}`;
      }
    };

    requestAnimationFrame(updateCount);
  };

  // 3. Dynamic Parts Assembly & Formation Observer
  useEffect(() => {
    const timer = setTimeout(() => {
      // 3a. Prepare Section Headers for assembly
      document.querySelectorAll('.section-header').forEach((header) => {
        if (!header.classList.contains('assemble-header')) {
          header.classList.add('assemble-header');
        }
      });

      // 3b. Prepare Two-Column Splits (Image left, content right or vice versa)
      const splitGrids = document.querySelectorAll(
        '.engineering-grid, .about-grid, .about-narrative-grid, .new-arrival-banner, .video-showcase-grid, .contact-grid'
      );
      splitGrids.forEach((grid) => {
        const children = Array.from(grid.children);
        if (children.length >= 2) {
          if (!children[0].classList.contains('assemble-from-left')) {
            children[0].classList.add('assemble-from-left');
          }
          if (!children[1].classList.contains('assemble-from-right')) {
            children[1].classList.add('assemble-from-right');
          }
        }
      });

      // 3c. Prepare Multi-Column Card Grids for Dynamic Inward Assembly
      const cardGrids = document.querySelectorAll(
        '.product-showcase-grid, .experience-story-grid, .grid-2, .grid-3, .grid-4, .hero-metrics-bar'
      );
      cardGrids.forEach((grid) => {
        const children = Array.from(grid.children);
        children.forEach((child, idx) => {
          child.setAttribute('data-stagger', String(idx % 6));

          // Assign directional assembly vectors based on column position
          const mod = idx % 3;
          if (mod === 0) {
            child.classList.add('assemble-left');
          } else if (mod === 1) {
            child.classList.add('assemble-up');
          } else {
            child.classList.add('assemble-right');
          }
        });
      });

      // 3d. Engineering feature sequential list items
      document.querySelectorAll('.engineering-feature-item').forEach((item, idx) => {
        item.classList.add('assemble-sequential');
        item.setAttribute('data-stagger', String(idx % 6));
      });

      // 3e. All target candidate items to observe
      const candidateSelectors = [
        '.assemble-header',
        '.assemble-left',
        '.assemble-up',
        '.assemble-right',
        '.assemble-from-left',
        '.assemble-from-right',
        '.assemble-sequential',
        '.category-card',
        '.product-showcase-card',
        '.experience-step-card',
        '.b2b-cta-card',
        '.credential-card',
        '.hero-metrics-bar'
      ];

      const elements = document.querySelectorAll(candidateSelectors.join(', '));

      // Intersection Observer triggering formation when element enters lower screen
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-formed');

              // Trigger any number counters inside
              const counters = entry.target.querySelectorAll('[data-count]');
              counters.forEach((c) => animateCounter(c));
              if (entry.target.hasAttribute('data-count')) {
                animateCounter(entry.target);
              }

              observer.unobserve(entry.target);
            }
          });
        },
        {
          rootMargin: '0px 0px -10% 0px', // Triggers as element reaches lower 90% of screen
          threshold: 0.05
        }
      );

      elements.forEach((el) => {
        // Elements already in top view on load form immediately
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.85) {
          el.classList.add('is-formed');
          const counters = el.querySelectorAll('[data-count]');
          counters.forEach((c) => animateCounter(c));
          if (el.hasAttribute('data-count')) {
            animateCounter(el);
          }
        } else {
          observer.observe(el);
        }
      });

      return () => {
        observer.disconnect();
      };
    }, 60);

    return () => clearTimeout(timer);
  }, [pathname]);

  // 4. Interactive Specular Card Hover Spotlight
  useEffect(() => {
    const handleMouseMove = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    };

    const cards = document.querySelectorAll(
      '.category-card, .product-showcase-card, .experience-step-card, .new-arrival-banner, .b2b-cta-card'
    );

    cards.forEach((card) => {
      card.addEventListener('mousemove', handleMouseMove);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener('mousemove', handleMouseMove);
      });
    };
  }, [pathname]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Back to Top floating orb button (No top line!) */}
      <button
        onClick={scrollToTop}
        className={`back-to-top-orb ${showBackToTop ? 'is-active' : ''}`}
        aria-label="Scroll back to top"
        title="Scroll to top"
      >
        <ArrowUp size={18} />
      </button>
    </>
  );
}
