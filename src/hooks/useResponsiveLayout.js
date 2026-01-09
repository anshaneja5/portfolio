import { useState, useEffect } from 'react';
import { detectDevice, debounce } from '../utils/scrollUtils';

/**
 * Hook to detect and manage responsive layout
 * Returns 'horizontal' for desktop/tablet, 'vertical' for mobile
 */
const useResponsiveLayout = () => {
  const [layout, setLayout] = useState('horizontal');
  const [deviceInfo, setDeviceInfo] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    width: window.innerWidth,
  });

  useEffect(() => {
    const checkLayout = () => {
      const device = detectDevice();
      setDeviceInfo(device);

      // Mobile gets vertical layout, desktop/tablet get horizontal
      if (device.isMobile) {
        setLayout('vertical');
      } else {
        setLayout('horizontal');
      }
    };

    // Initial check
    checkLayout();

    // Debounced resize handler
    const handleResize = debounce(checkLayout, 200);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { layout, deviceInfo };
};

export default useResponsiveLayout;
