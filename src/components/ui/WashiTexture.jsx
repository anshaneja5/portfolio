/**
 * WashiTexture - Subtle paper texture overlay
 * Adds Japanese washi paper effect to backgrounds
 */
const WashiTexture = ({ opacity = 0.03 }) => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0"
      >
        <defs>
          <filter id="paper-texture">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves="4"
              result="noise"
            />
            <feColorMatrix
              in="noise"
              type="saturate"
              values="0"
              result="desaturated"
            />
            <feComponentTransfer>
              <feFuncA type="discrete" tableValues="0 1" />
            </feComponentTransfer>
          </filter>
        </defs>
        <rect
          width="100%"
          height="100%"
          filter="url(#paper-texture)"
          opacity={opacity}
        />
      </svg>
    </div>
  );
};

export default WashiTexture;
