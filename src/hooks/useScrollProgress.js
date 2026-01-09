import { useState, useEffect, useCallback } from 'react';
import { calculateScrollProgress, calculateCurrentSection, throttle } from '../utils/scrollUtils';

/**
 * Hook to track scroll progress and current section
 * @param {React.RefObject} containerRef - Reference to scroll container
 * @param {number} sectionCount - Total number of sections
 * @returns {object} Scroll progress and current section
 */
const useScrollProgress = (containerRef, sectionCount = 6) => {
  const [scrollProgress, setScrollProgress] = useState(0); // 0-1
  const [currentSection, setCurrentSection] = useState(0); // 0-based index
  const [scrollPercentage, setScrollPercentage] = useState(0); // 0-100

  const updateProgress = useCallback(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const scrollLeft = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;
    const viewportWidth = window.innerWidth;

    // Calculate progress (0-1)
    const progress = calculateScrollProgress(scrollLeft, maxScroll);
    setScrollProgress(progress);
    setScrollPercentage(Math.round(progress * 100));

    // Calculate current section
    const section = calculateCurrentSection(scrollLeft, sectionCount, viewportWidth);
    setCurrentSection(section);
  }, [containerRef, sectionCount]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Initial update
    updateProgress();

    // Throttled scroll handler
    const handleScroll = throttle(updateProgress, 16); // ~60fps

    container.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [containerRef, updateProgress]);

  return {
    scrollProgress,
    scrollPercentage,
    currentSection,
  };
};

export default useScrollProgress;
