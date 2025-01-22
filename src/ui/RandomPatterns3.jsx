import { motion } from "framer-motion";
import ShapeImage from "../assets/image2/background/shape5.c9fffb2e.png";

const RandomShapes = () => {
  
  const shapes = [
    "square",
    "circle",
    "pyramid",
    "pyramid2",
    "cross",
    "circleBorder",
    "animatedShape",
    "flippingCircle",
  ];

 
  const randomColor = () => {
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#F033FF", "#FF33A1"];
    return colors[Math.floor(Math.random() * colors.length)];
  };


  const motionSettings = {
    initial: { opacity: 0, x: 0, y: 0 },
    animate: { opacity: 1, x: [0, 200, 0], y: [0, 200, 0] },
    transition: { duration: 3, repeat: Infinity, repeatType: "reverse" },
  };

  return (
    <div className="absolute w-full h-screen overflow-hidden opacity-50 ">
      
      {shapes.map((shape, index) => {
        let shapeElement = null;

        switch (shape) {
          case "square":
            shapeElement = (
              <motion.div
                key={index}
                className="w-4 h-4 bg-orange-500 absolute"
                style={{
                  backgroundColor: randomColor(),
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                {...motionSettings}
              />
            );
            break;

          case "circle":
            shapeElement = (
              <motion.div
                initial={{ opacity: 1 }}
                animate={{
                  opacity: 1,
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }}
                key={index}
                className="w-5 h-5 rounded-full absolute top-[50%] left-[90%] 
                bg-gradient-to-tr from-red-600 via-white to-red-600"
              />
            );
            break;

          case "circleBorder":
            shapeElement = (
              <motion.div
                initial={{ opacity: 1, x: 0, y: 0 }}
                animate={{
                  opacity: 1,
                  x: [0, 400, 200, 0],
                  y: [0, 250, 200, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
                key={index}
                className="w-8 h-8 rounded-full absolute top-28 left-56 
                 border-4 border-gray-300"
              />
            );
            break;

          case "pyramid":
            shapeElement = (
              <motion.div
                initial={{ opacity: 1, x: 0, y: 0 }}
                animate={{
                  opacity: 1,
                  x: [0, 400, 200, 0],
                  y: [0, 250, 200, 0],
                  rotate: [45, 90, 180, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
                key={index}
                className="absolute border"
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: "15px solid transparent",
                  borderRight: "15px solid transparent",
                  borderBottom: `25px solid #74acff`,
                  top: "10%",
                  left: "50%",
                }}
              />
            );

            break;

            case "pyramid2":
                shapeElement = (
                  <motion.div
                    initial={{ opacity: 1, x: 0, y: 0 }}
                    animate={{
                      opacity: 1,
                      x: [200, 50, 0,200],
                      y: [200,  50,0,200],
                      rotate: [45, 90, 180, 360],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    key={index}
                    className="absolute border"
                    style={{
                      width: 0,
                      height: 0,
                      borderLeft: "15px solid transparent",
                      borderRight: "15px solid transparent",
                      borderBottom: `25px solid #74acff`,
                      top: "20%",
                      left: "20%",
                    }}
                  />
                );
    
                break;

          case "cross":
            shapeElement = (
              <motion.div
                key={index}
                className="absolute flex items-center justify-center top-56 left-52"
                initial={{ opacity: 1 }}
                animate={{
                  opacity: 1,
                  rotate: [0, 360], 
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity, 
                  ease: "linear", 
                }}
              >
                <div
                  className="w-8 h-1 bg-green-500 absolute"
                  
                />
                <div
                  className="w-1 h-8 bg-green-500 absolute"
                  
                />
              </motion.div>
            );
            break;

          case "animatedShape":
            shapeElement = (
              <motion.img
                src={ShapeImage}
                alt="Animated Shape"
                initial={{ opacity: 1, x: 0, y: 0 }}
                animate={{
                  opacity: 1,
                  x: [0, 50, -50, 0], 
                  y: [0, -30, 30, 0], 
                  rotate: [0, 45, -45, 0],
                }}
                transition={{
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "easeInOut", 
                }}
                className="absolute"
                style={{
                  width: "100px", 
                  height: "100px", 
                  top: "10px", 
                  right: "10px", 
                }}
              />
            );
            break;

          case "flippingCircle":
            shapeElement = (
              <motion.div
                initial={{ rotateY: 0 }}
                animate={{
                  rotateY: [0, 180, 360,], 
                }}
                transition={{
                  duration: 6, 
                  repeat: Infinity,
                  ease: "linear", 
                }}
                className="absolute flex items-center justify-center shadow-2xl "
                style={{
                  width: "50px", 
                  height: "50px", 
                  borderRadius: "50%", 
                  background: "linear-gradient(to right, #f06565, #f04949)", 
                  // filter:'blur(1px)',
                //   backfaceVisibility: "hidden", // Hides the back when flipped
                  position: "absolute",
                  top: "150px",
                  left: "100px",
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
                }}
              >
                {/* Back Side */}
                {/* <motion.div
                  style={{
                    position: "absolute",
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    background: "linear-gradient(to right, green, yellow)", 
                    transform: "rotateY(180deg)", 
                    backfaceVisibility: "hidden", 
                  }}
                /> */}
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
