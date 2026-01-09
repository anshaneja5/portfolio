import { useState, useEffect, useCallback, useRef } from 'react';
import { calculateParallaxOffset, prefersReducedMotion } from '../utils/scrollUtils';

/**
 * Hook to calculate parallax transforms based on scroll position
 * @param {React.RefObject} containerRef - Reference to scroll container
 * @param {number} speed - Parallax speed multiplier (0.3-0.7 for subtle effect)
 * @param {string} axis - 'x' or 'y' for horizontal or vertical
 * @param {number} range - Maximum offset range in pixels
 * @returns {object} Transform style object
 */
const useParallax = (containerRef, speed = 0.5, axis = 'x', range = 100) => {
  const [transform, setTransform] = useState({ x: 0, y: 0 });
  const rafId = useRef(null);

  const updateParallax = useCallback(() => {
    if (!containerRef.current || prefersReducedMotion()) {
      setTransform({ x: 0, y: 0 });
      return;
    }

    const container = containerRef.current;
    const scrollLeft = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;

    if (maxScroll === 0) {
      setTransform({ x: 0, y: 0 });
      return;
    }

    const scrollProgress = scrollLeft / maxScroll;
    const offset = calculateParallaxOffset(scrollProgress, speed, axis, range);

    setTransform(offset);
  }, [containerRef, speed, axis, range]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Initial update
    updateParallax();

    const handleScroll = () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }

      rafId.current = requestAnimationFrame(updateParallax);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      container.removeEventListener('scroll', handleScroll);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [containerRef, updateParallax]);

  // Return transform style object
  return {
    style: {
      transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    },
    offset: transform,
  };
};

export default useParallax;
