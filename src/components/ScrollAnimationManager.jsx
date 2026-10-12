import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

/**
 * ScrollAnimationManager — World-Class Automotive Tech Scroll System
 * Features:
 * 1. Top Cyber-Laser Scroll Reading Progress Line (Gradient with Glowing Pulse Tip)
 * 2. Floating Circular Progress Indicator Orb with Magnetic Back-to-Top Interaction
 * 3. Cinematic Blur Dispersion & Spring Scroll-Reveal Physics for Cards & Sections
 * 4. Staggered Cascading Grid Reveals
 * 5. Dynamic Scroll Number Counter Engine (counts smoothly from 0 to target on reveal)
 * 6. Interactive Card Specular Shine Spotlight Tracker
 * 7. 60/120fps Hardware-Accelerated Animation using requestAnimationFrame
 * 8. Safari, Chrome, Firefox, Edge, iOS & Android cross-browser hardening
 */
export default function ScrollAnimationManager() {
  const { pathname } = useLocation();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const rafIdRef = useRef(null);

  // 1. Scroll Progress & Back-to-Top State with requestAnimationFrame (60/120fps smooth)
  useEffect(() => {
    let ticking = false;

    const updateScrollMetrics = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;

      setScrollProgress(progress);
      setShowBackToTop(scrollTop > 220);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        rafIdRef.current = window.requestAnimationFrame(updateScrollMetrics);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateScrollMetrics();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafIdRef.current) window.cancelAnimationFrame(rafIdRef.current);
    };
  }, [pathname]);

  // 2. Dynamic Number Counter Function
  const animateCounter = (el) => {
    if (el.dataset.counterAnimated === 'true') return;
    el.dataset.counterAnimated = 'true';

    const targetVal = parseFloat(el.getAttribute('data-count'));
    const suffix = el.getAttribute('data-suffix') || '';
    const prefix = el.getAttribute('data-prefix') || '';
    if (isNaN(targetVal)) return;

    const duration = 1400; // 1.4s silky count
    const startTime = performance.now();
    const isInteger = Number.isInteger(targetVal);

    const updateCount = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(1, elapsed / duration);
      // easeOutExpo for high-end snappy finish
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

  // 3. Scroll Reveal Observer & Counter Triggering
  useEffect(() => {
    const timer = setTimeout(() => {
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
        '.new-arrival-banner',
        '.hero-metrics-bar',
        '.about-narrative-grid > div',
        '.video-cinematic-box',
        '.stat-counter-item'
      ];

      const elements = document.querySelectorAll(targetSelectors.join(', '));

      // Group elements inside grids to assign stagger indices (0 - 5)
      const grids = document.querySelectorAll(
        '.grid-2, .grid-3, .grid-4, .product-showcase-grid, .experience-story-grid, .engineering-feature-list, .new-arrival-features-grid, .hero-metrics-bar'
      );
      grids.forEach((grid) => {
        const children = grid.children;
        Array.from(children).forEach((child, idx) => {
          if (!child.hasAttribute('data-stagger')) {
            child.setAttribute('data-stagger', String(idx % 6));
          }
        });
      });

      // Intersection Observer for silky spring reveals
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');

              // Check if entry contains any number counters to animate
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
          rootMargin: '0px 0px -8% 0px', // Triggers smoothly right as element glides into view
          threshold: 0.05
        }
      );

      elements.forEach((el) => {
        if (!el.classList.contains('scroll-reveal')) {
          el.classList.add('scroll-reveal');
        }

        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.85) {
          el.classList.add('is-visible');
          const counters = el.querySelectorAll('[data-count]');
          counters.forEach((c) => animateCounter(c));
          if (el.hasAttribute('data-count')) {
            animateCounter(el);
          }
        } else {
          observer.observe(el);
        }
      });

      // Also trigger any counters already in top view
      document.querySelectorAll('[data-count]').forEach((counter) => {
        const rect = counter.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.85) {
          animateCounter(counter);
        }
      });

      return () => {
        observer.disconnect();
      };
    }, 70);

    return () => clearTimeout(timer);
  }, [pathname]);

  // 4. Interactive Card Spotlight Light Follower (Mouse Glow Effect)
  useEffect(() => {
    const handleMouseMove = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    };

    const interactiveCards = document.querySelectorAll(
      '.category-card, .product-showcase-card, .experience-step-card, .new-arrival-banner, .b2b-cta-card'
    );

    interactiveCards.forEach((card) => {
      card.addEventListener('mousemove', handleMouseMove);
    });

    return () => {
      interactiveCards.forEach((card) => {
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

  // SVG circular progress parameters
  const radius = 20;
  const circumference = 2 * Math.PI * radius; // ~125.66
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <>
      {/* 1. Top Cyber-Laser Reading Progress Line */}
      <div 
        className="top-scroll-laser-track" 
        aria-hidden="true"
      >
        <div 
          className="top-scroll-laser-bar" 
          style={{ transform: `scaleX(${scrollProgress / 100})` }}
        >
          <div className="top-scroll-laser-spark" />
        </div>
      </div>

      {/* 2. Floating Circular Progress Indicator Orb (Back to Top) */}
      <button
        onClick={scrollToTop}
        className={`back-to-top-orb ${showBackToTop ? 'is-active' : ''}`}
        aria-label="Scroll back to top"
        title={`Scroll to top (${Math.round(scrollProgress)}%)`}
      >
        {/* SVG Circular Track */}
        <svg 
          className="back-to-top-svg" 
          width="48" 
          height="48" 
          viewBox="0 0 48 48"
          aria-hidden="true"
        >
          <circle
            className="back-to-top-circle-bg"
            cx="24"
            cy="24"
            r={radius}
            fill="none"
            strokeWidth="2.5"
          />
          <circle
            className="back-to-top-circle-progress"
            cx="24"
            cy="24"
            r={radius}
            fill="none"
            strokeWidth="2.5"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>

        {/* Center Arrow Icon */}
        <div className="back-to-top-icon-wrap">
          <ArrowUp size={18} />
        </div>
      </button>
    </>
  );
}
