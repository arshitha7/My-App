
import { motion } from 'framer-motion';

const RandomShapes = () => {
  // Array of shape types
  const shapes = ['square', 'circle', 'pyramid', 'cross'];

  // Function to generate random colors
  const randomColor = () => {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F033FF', '#FF33A1'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // Motion configuration for animations
  const motionSettings = {
    initial: { opacity: 0, x: 0, y: 0 },
    animate: { opacity: 1, x: [0, 200, 0], y: [0, 200, 0] },
    transition: { duration: 3, repeat: Infinity, repeatType: 'reverse' },
  };
  const generateUniqueKey = () => `${Date.now()}-${Math.random()}`;

  return (
    <div className="absolute w-full h-screen overflow-hidden opacity-20">
      {/* Loop through shapes and render them with animations */}
      {shapes.map((shape) => {
        let shapeElement = null;
        const uniqueKey = generateUniqueKey();

        switch (shape) {
          case 'square':
            shapeElement = (
                <motion.div
                key={uniqueKey}
                className="w-8 h-8 bg-blue-500 absolute"
                style={{
                  backgroundColor: randomColor(),
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                {...motionSettings}
              />
            );
            break;

          case 'circle':
            shapeElement = (
                <motion.div
                key={uniqueKey}
                className="w-10 h-10 rounded-full absolute"
                style={{
                  backgroundColor: randomColor(),
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                {...motionSettings}
              />
            );
            break;

          case 'pyramid':
            shapeElement = (
                <motion.div
                  key={uniqueKey}
                  className="absolute"
                  style={{
                    width: 0,
                    height: 0,
                    borderLeft: '10px solid transparent', 
                    borderRight: '10px solid transparent', 
                    borderBottom: `25px solid ${randomColor()}`, 
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  {...motionSettings}
                />
              );
              
            break;

          case 'cross':
            shapeElement = (
              <motion.div
                key={uniqueKey}
                className="absolute flex items-center justify-center"
                {...motionSettings}
                style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
              >
                <div
                  className="w-8 h-2 bg-green-500 absolute"
                  style={{ backgroundColor: randomColor() }}
                />
                <div
                  className="w-2 h-8 bg-green-500 absolute"
                  style={{ backgroundColor: randomColor() }}
                />
              </motion.div>
            );
            break;

          default:
            break;
        }

        return shapeElement;
      })}
    </div>
  );
};

export default RandomShapes;
