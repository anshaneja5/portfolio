/**
 * BambooTransition - Vertical bamboo stalks as section dividers
 * Adds subtle Japanese aesthetic between sections
 */
const BambooTransition = ({ position = 'right', opacity = 0.3 }) => {
  const positionClass = position === 'left' ? 'left-0' : 'right-0';

  const bambooNodes = [15, 35, 55, 75]; // Node positions in percentages

  return (
    <div className={`absolute ${positionClass} top-0 bottom-0 w-16 pointer-events-none z-10`}>
      {/* Stalk 1 */}
      <div
        className="absolute bamboo-stalk"
        style={{
          left: '20%',
          top: '5%',
          height: '90%',
          opacity: opacity * 0.8,
        }}
      >
        {bambooNodes.map((pos, i) => (
          <div
            key={i}
            className="bamboo-node"
            style={{ top: `${pos}%` }}
          />
        ))}
      </div>

      {/* Stalk 2 */}
      <div
        className="absolute bamboo-stalk"
        style={{
          left: '50%',
          top: '0%',
          height: '95%',
          opacity: opacity,
        }}
      >
        {bambooNodes.map((pos, i) => (
          <div
            key={i}
            className="bamboo-node"
            style={{ top: `${pos}%` }}
          />
        ))}
      </div>

      {/* Stalk 3 */}
      <div
        className="absolute bamboo-stalk"
        style={{
          left: '80%',
          top: '10%',
          height: '85%',
          opacity: opacity * 0.6,
        }}
      >
        {bambooNodes.map((pos, i) => (
          <div
            key={i}
            className="bamboo-node"
            style={{ top: `${pos}%` }}
          />
        ))}
      </div>
    </div>
  );
};

export default BambooTransition;
