/**
 * Scroll utility functions for zen horizontal scroll portfolio
 */

/**
 * Easing functions for smooth animations
 */
export const easing = {
  // Ease out cubic - smooth deceleration
  easeOutCubic: (t) => 1 - Math.pow(1 - t, 3),

  // Ease in out cubic - smooth acceleration and deceleration
  easeInOutCubic: (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,

  // Ease out quad - gentle deceleration
  easeOutQuad: (t) => t * (2 - t),

  // Ease out quint - zen-like slow ending
  easeOutQuint: (t) => 1 - Math.pow(1 - t, 5),
};

/**
 * Calculate scroll progress (0-1) based on scroll position
 * @param {number} scrollLeft - Current scroll position
 * @param {number} maxScroll - Maximum scrollable distance
 * @returns {number} Progress from 0 to 1
 */
export const calculateScrollProgress = (scrollLeft, maxScroll) => {
  if (maxScroll === 0) return 0;
  return Math.max(0, Math.min(1, scrollLeft / maxScroll));
};

/**
 * Calculate current section index based on scroll position
 * @param {number} scrollLeft - Current scroll position
 * @param {number} sectionCount - Total number of sections
 * @param {number} viewportWidth - Width of viewport
 * @returns {number} Current section index (0-based)
 */
export const calculateCurrentSection = (scrollLeft, sectionCount, viewportWidth) => {
  const sectionIndex = Math.round(scrollLeft / viewportWidth);
  return Math.max(0, Math.min(sectionCount - 1, sectionIndex));
};

/**
 * Calculate parallax offset for a layer
 * @param {number} scrollProgress - Scroll progress (0-1)
 * @param {number} speed - Parallax speed multiplier (0.3-0.7 for subtle effect)
 * @param {string} axis - 'x' or 'y' for horizontal or vertical
 * @param {number} range - Maximum offset range in pixels
 * @returns {object} Transform values {x, y}
 */
export const calculateParallaxOffset = (scrollProgress, speed = 0.5, axis = 'x', range = 100) => {
  const offset = scrollProgress * range * speed;

  return {
    x: axis === 'x' ? offset : 0,
    y: axis === 'y' ? offset : 0,
  };
};

/**
 * Smooth scroll to a specific section
 * @param {HTMLElement} container - Scroll container element
 * @param {number} targetSection - Target section index
 * @param {number} duration - Animation duration in ms
 */
export const smoothScrollToSection = (container, targetSection, duration = 800) => {
  if (!container) return;

  const viewportWidth = window.innerWidth;
  const targetScroll = targetSection * viewportWidth;
  const startScroll = container.scrollLeft;
  const distance = targetScroll - startScroll;
  const startTime = performance.now();

  const animateScroll = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easing.easeInOutCubic(progress);

    container.scrollLeft = startScroll + distance * easedProgress;

    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  };

  requestAnimationFrame(animateScroll);
};

/**
 * Get section position information
 * @param {number} sectionIndex - Section index
 * @param {number} viewportWidth - Width of viewport
 * @returns {object} Section position info
 */
export const getSectionPosition = (sectionIndex, viewportWidth) => {
  return {
    left: sectionIndex * viewportWidth,
    center: (sectionIndex + 0.5) * viewportWidth,
    right: (sectionIndex + 1) * viewportWidth,
  };
};

/**
 * Calculate element visibility in viewport
 * @param {DOMRect} rect - Element bounding rect
 * @param {number} threshold - Visibility threshold (0-1)
 * @returns {boolean} Whether element is visible
 */
export const isElementVisible = (rect, threshold = 0.3) => {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  const horizontalVisible = rect.right > 0 && rect.left < viewportWidth;
  const verticalVisible = rect.bottom > 0 && rect.top < viewportHeight;

  if (!horizontalVisible || !verticalVisible) return false;

  // Check threshold
  const visibleWidth = Math.min(rect.right, viewportWidth) - Math.max(rect.left, 0);
  const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
  const visibleArea = visibleWidth * visibleHeight;
  const totalArea = rect.width * rect.height;

  return (visibleArea / totalArea) >= threshold;
};

/**
 * Clamp a value between min and max
 * @param {number} value - Value to clamp
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} Clamped value
 */
export const clamp = (value, min, max) => {
  return Math.max(min, Math.min(max, value));
};

/**
 * Lerp (linear interpolation) between two values
 * @param {number} start - Start value
 * @param {number} end - End value
 * @param {number} t - Progress (0-1)
 * @returns {number} Interpolated value
 */
export const lerp = (start, end, t) => {
  return start + (end - start) * t;
};

/**
 * Map a value from one range to another
 * @param {number} value - Input value
 * @param {number} inMin - Input range minimum
 * @param {number} inMax - Input range maximum
 * @param {number} outMin - Output range minimum
 * @param {number} outMax - Output range maximum
 * @returns {number} Mapped value
 */
export const mapRange = (value, inMin, inMax, outMin, outMax) => {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

/**
 * Detect if device prefers reduced motion
 * @returns {boolean} True if reduced motion is preferred
 */
export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Detect if device is mobile/tablet
 * @returns {object} Device detection info
 */
export const detectDevice = () => {
  const width = window.innerWidth;

  return {
    isMobile: width < 768,
    isTablet: width >= 768 && width < 1024,
    isDesktop: width >= 1024,
    width,
  };
};

/**
 * Throttle function execution
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in ms
 * @returns {Function} Throttled function
 */
export const throttle = (func, limit) => {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Debounce function execution
 * @param {Function} func - Function to debounce
 * @param {number} delay - Delay in ms
 * @returns {Function} Debounced function
 */
export const debounce = (func, delay) => {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
};
