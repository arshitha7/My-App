import { motion } from 'framer-motion';

const PatternShapes = () => {
  // Array of different pattern types
  const patterns = ['triangle', 'hexagon', 'diamond', 'star'];

  // Function to generate random colors
  const randomColor = () => {
    const colors = ['#FF6347', '#FFD700', '#32CD32', '#8A2BE2', '#FF1493'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // Motion configuration for animations
  const motionSettings = {
    initial: { opacity: 0, x: 0, y: 0 },
    animate: { opacity: 1, x: [0, 200, 0], y: [0, 200, 0] },
    transition: { duration: 4, repeat: Infinity, repeatType: 'reverse' },
  };

  return (
    <div className="absolute w-full h-[400px] overflow-hidden opacity-20">
      {/* Loop through patterns and render them with animations */}
      {patterns.map((pattern, index) => {
        let patternElement = null;

        switch (pattern) {
          case 'triangle':
            patternElement = (
              <motion.div
                key={index}
                className="absolute"
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: '10px solid transparent',
                  borderRight: '10px solid transparent',
                  borderBottom: `20px solid ${randomColor()}`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                {...motionSettings}
              />
            );
            break;

          case 'hexagon':
            patternElement = (
              <motion.div
                key={index}
                className="absolute"
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: '10px solid transparent',
                  borderRight: '10px solid transparent',
                  borderBottom: `20px solid ${randomColor()}`,
                  borderTop: `25px solid ${randomColor()}`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                {...motionSettings}
              />
            );
            break;

          case 'diamond':
            patternElement = (
              <motion.div
                key={index}
                className="absolute"
                style={{
                  width: '10px',
                  height: '10px',
                  backgroundColor: randomColor(),
                  transform: 'rotate(45deg)',
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                {...motionSettings}
              />
            );
            break;

          case 'star':
            patternElement = (
              <motion.div
                key={index}
                className="absolute"
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: '10px solid transparent',
                  borderRight: '10px solid transparent',
                  borderBottom: '20px solid transparent',
                  borderTop: '25px solid transparent',
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                  backgroundColor: randomColor(),
                }}
                {...motionSettings}
              />
            );
            break;

          default:
            break;
        }

        return patternElement;
      })}
    </div>
  );
};

export default PatternShapes;
