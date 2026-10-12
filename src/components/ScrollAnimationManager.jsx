import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

/**
 * ScrollAnimationManager
 * Handles:
 * 1. IntersectionObserver reveal animations triggered when elements reach 60% of viewport.
 * 2. Real-time scroll progress bar at the top of the window.
 * 3. Smooth floating 'Back to Top' pill.
 * 4. Staggered card cascading on scroll.
 */
export default function ScrollAnimationManager() {
  const { pathname } = useLocation();
  const [showBackToTop, setShowBackToTop] = useState(false);

  // 1. Back to Top listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Scroll Reveal Observer (Triggers when element reaches ~60% from top of screen)
  useEffect(() => {
    // Timeout gives React time to paint new route DOM elements
    const timer = setTimeout(() => {
      // Find candidate elements to animate
      const targetSelectors = [
        '.section-header',
        '.card',
        '.product-card',
        '.category-card',
        '.product-showcase-card',
        '.engineering-feature-item',
        '.experience-step-card',
        '.credential-card',
        '.gallery-photo-card',
        '.b2b-cta-card',
        '.experience-story-grid > div',
        '.new-arrival-banner'
      ];

      const elements = document.querySelectorAll(targetSelectors.join(', '));

      // Group elements inside grids to assign stagger indices
      const grids = document.querySelectorAll('.grid-2, .grid-3, .grid-4, .product-showcase-grid, .experience-story-grid');
      grids.forEach((grid) => {
        const children = grid.children;
        Array.from(children).forEach((child, idx) => {
          if (!child.hasAttribute('data-stagger')) {
            child.setAttribute('data-stagger', String(idx % 6));
          }
        });
      });

      // Observer: rootMargin '0px 0px -40% 0px' triggers when element top reaches 60% of viewport height!
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          rootMargin: '0px 0px -40% 0px', // Exactly 60% trigger threshold
          threshold: 0.05
        }
      );

      elements.forEach((el) => {
        // Skip elements that are inside the very top hero section (they have keyframe intro)
        if (el.closest('.hero-editorial')) return;

        // Add scroll-reveal base class
        if (!el.classList.contains('scroll-reveal')) {
          el.classList.add('scroll-reveal');
        }

        // Check if element is already within the top 60% on page load
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.65) {
          el.classList.add('is-visible');
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`back-to-top-btn ${showBackToTop ? 'is-active' : ''}`}
      aria-label="Back to top"
      title="Scroll to top"
    >
      <ArrowUp size={20} />
    </button>
  );
}
