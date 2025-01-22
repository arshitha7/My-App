import  { useEffect } from "react";
import PropTypes from "prop-types";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SmoothSlide = ({ children, delay = 0.3, threshold = 0.2 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden"); 
    }
  }, [inView, controls]);

  const animationVariants = {
    hidden: { opacity: 0, scale: 0.2 }, // Slightly less scale to avoid sudden pop-in
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 1, // Standardized duration for smoother experience
        delay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={animationVariants}
      style={{ overflow: "hidden" }} // Prevents content overflow during scaling
    >
      {children}
    </motion.div>
  );
};

// PropTypes validation
SmoothSlide.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
  threshold: PropTypes.number,
};

export default SmoothSlide;
