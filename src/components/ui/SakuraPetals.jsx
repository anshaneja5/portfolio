import { useMemo } from 'react';

/**
 * SakuraPetals - Animated cherry blossom petals
 * Enhanced with parallax support for depth effect
 * @param {number} count - Number of petals
 * @param {number} parallaxSpeed - Parallax speed (0-1, default 0.7 for faster movement)
 * @param {object} parallaxOffset - Manual parallax offset {x, y} from parent
 */
const SakuraPetals = ({ count = 6, parallaxSpeed = 0.7, parallaxOffset = null }) => {
  const petals = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 25}s`,
      animationDuration: `${20 + Math.random() * 15}s`,
      size: 14 + Math.random() * 20,
      opacity: 0.2 + Math.random() * 0.4,
      swayDelay: `${Math.random() * 5}s`,
      // Add parallax variation per petal
      parallaxMultiplier: 0.8 + Math.random() * 0.4, // 0.8-1.2x
    }));
  }, [count]);

  // Calculate parallax transform
  const getParallaxTransform = (petal) => {
    if (!parallaxOffset) return {};

    const multiplier = parallaxSpeed * petal.parallaxMultiplier;
    return {
      transform: `translate(${parallaxOffset.x * multiplier}px, ${parallaxOffset.y * multiplier}px)`,
    };
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute animate-sakura-fall parallax-layer"
          style={{
            left: petal.left,
            top: '-40px',
            animationDelay: petal.animationDelay,
            animationDuration: petal.animationDuration,
            ...getParallaxTransform(petal),
          }}
        >
          <svg
            width={petal.size}
            height={petal.size}
            viewBox="0 0 24 24"
            className="animate-sakura-sway"
            style={{
              opacity: petal.opacity,
              animationDelay: petal.swayDelay,
            }}
          >
            {/* Cherry blossom petal */}
            <ellipse
              cx="12"
              cy="10"
              rx="9"
              ry="5"
              fill="#F6C1C7"
              opacity="0.7"
            />
            <ellipse
              cx="12"
              cy="10"
              rx="6"
              ry="3"
              fill="#FFE5E8"
              opacity="0.9"
            />
            <circle
              cx="12"
              cy="10"
              r="1.5"
              fill="#C9A962"
              opacity="0.6"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default SakuraPetals;
