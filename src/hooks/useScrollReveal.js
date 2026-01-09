import { useState, useEffect, useRef } from 'react';
import { prefersReducedMotion } from '../utils/scrollUtils';

/**
 * Hook to reveal elements with fade-in animation when they become visible
 * Uses Intersection Observer for performance
 * @param {number} threshold - Visibility threshold (0-1)
 * @param {boolean} once - Only animate once (default true)
 * @returns {object} Ref to attach to element and visibility state
 */
const useScrollReveal = (threshold = 0.3, once = true) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Skip animation if reduced motion is preferred
    if (prefersReducedMotion()) {
      setIsVisible(true);
      return;
    }

    // Skip if already animated and once is true
    if (once && hasAnimated.current) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          hasAnimated.current = true;

          // Unobserve if once is true
          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '50px',
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, once]);

  return {
    ref: elementRef,
    isVisible,
  };
};

export default useScrollReveal;
