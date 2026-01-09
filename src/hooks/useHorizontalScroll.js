import { useEffect, useCallback, useRef } from 'react';
import { smoothScrollToSection, clamp, prefersReducedMotion } from '../utils/scrollUtils';

/**
 * Hook to handle horizontal scroll interactions
 * Converts wheel/touch events to horizontal scroll
 * @param {React.RefObject} containerRef - Reference to scroll container
 * @param {number} sectionCount - Total number of sections
 * @param {boolean} enabled - Whether horizontal scroll is enabled
 * @returns {object} Scroll control functions
 */
const useHorizontalScroll = (containerRef, sectionCount = 6, enabled = true) => {
  const isScrolling = useRef(false);
  const scrollTimeout = useRef(null);

  // Navigate to specific section with smooth scroll
  const scrollToSection = useCallback((sectionIndex) => {
    if (!containerRef.current) return;

    const clampedIndex = clamp(sectionIndex, 0, sectionCount - 1);
    const duration = prefersReducedMotion() ? 0 : 800;

    smoothScrollToSection(containerRef.current, clampedIndex, duration);
  }, [containerRef, sectionCount]);

  // Navigate to next section
  const scrollToNext = useCallback(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const currentScroll = container.scrollLeft;
    const viewportWidth = window.innerWidth;
    const currentSection = Math.round(currentScroll / viewportWidth);
    const nextSection = Math.min(currentSection + 1, sectionCount - 1);

    scrollToSection(nextSection);
  }, [containerRef, sectionCount, scrollToSection]);

  // Navigate to previous section
  const scrollToPrev = useCallback(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const currentScroll = container.scrollLeft;
    const viewportWidth = window.innerWidth;
    const currentSection = Math.round(currentScroll / viewportWidth);
    const prevSection = Math.max(currentSection - 1, 0);

    scrollToSection(prevSection);
  }, [containerRef, sectionCount, scrollToSection]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !enabled) return;

    // Handle wheel events (mouse wheel / trackpad)
    const handleWheel = (e) => {
      // Allow default behavior on mobile
      if (window.innerWidth < 768) return;

      e.preventDefault();

      const delta = e.deltaY || e.deltaX;

      // Smooth horizontal scroll
      container.scrollLeft += delta;

      // Set scrolling flag
      isScrolling.current = true;

      // Clear existing timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      // Reset scrolling flag after delay
      scrollTimeout.current = setTimeout(() => {
        isScrolling.current = false;
      }, 150);
    };

    // Handle keyboard navigation
    const handleKeyDown = (e) => {
      if (!enabled || isScrolling.current) return;

      const viewportWidth = window.innerWidth;
      const currentScroll = container.scrollLeft;
      const currentSection = Math.round(currentScroll / viewportWidth);

      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ': // Space
          e.preventDefault();
          scrollToNext();
          break;

        case 'ArrowLeft':
        case 'ArrowUp':
          e.preventDefault();
          scrollToPrev();
          break;

        case 'Home':
          e.preventDefault();
          scrollToSection(0);
          break;

        case 'End':
          e.preventDefault();
          scrollToSection(sectionCount - 1);
          break;

        case 'PageDown':
          e.preventDefault();
          scrollToNext();
          break;

        case 'PageUp':
          e.preventDefault();
          scrollToPrev();
          break;

        default:
          break;
      }
    };

    // Add event listeners
    container.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      container.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [containerRef, enabled, sectionCount, scrollToNext, scrollToPrev, scrollToSection]);

  return {
    scrollToSection,
    scrollToNext,
    scrollToPrev,
    isScrolling: isScrolling.current,
  };
};

export default useHorizontalScroll;
