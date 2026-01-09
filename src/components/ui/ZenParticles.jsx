import { useMemo } from 'react';

/**
 * ZenParticles - Floating zen elements for ambiance
 * Types: 'motes' (light dots), 'leaves' (bamboo), 'ripples' (water circles)
 */
const ZenParticles = ({ type = 'motes', count = 12, color = '#A8B99C' }) => {
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 40}s`,
      duration: `${30 + Math.random() * 20}s`, // 30-50s
      size: Math.random() * 20 + 10, // 10-30px
      opacity: Math.random() * 0.15 + 0.05, // 0.05-0.2
    }));
  }, [count]);

  const renderParticle = (particle) => {
    switch (type) {
      case 'motes':
        return (
          <div
            key={particle.id}
            className="absolute rounded-full animate-zen-float"
            style={{
              left: particle.left,
              top: particle.top,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
              opacity: particle.opacity,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        );

      case 'leaves':
        return (
          <svg
            key={particle.id}
            className="absolute animate-zen-float"
            style={{
              left: particle.left,
              top: particle.top,
              width: `${particle.size}px`,
              height: `${particle.size * 2}px`,
              opacity: particle.opacity,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
            viewBox="0 0 20 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 0 Q5 15, 10 40 Q15 15, 10 0Z"
              fill={color}
            />
          </svg>
        );

      case 'ripples':
        return (
          <div
            key={particle.id}
            className="absolute rounded-full border-2 animate-zen-float"
            style={{
              left: particle.left,
              top: particle.top,
              width: `${particle.size * 2}px`,
              height: `${particle.size * 2}px`,
              borderColor: color,
              opacity: particle.opacity * 0.5,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map(renderParticle)}
    </div>
  );
};

export default ZenParticles;
