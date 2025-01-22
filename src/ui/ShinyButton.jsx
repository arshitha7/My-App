import { motion } from "framer-motion";
import PropTypes from "prop-types"; // Import PropTypes

const ShinyButton = ({ children,handleClick }) => {
  return (
    <motion.button
    onClick={handleClick}
      initial={{ "--x": "100%", scale: 1 }}
      animate={{ "--x": "-100%" }}
      whileTap={{ scale: 0.97 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: "spring",
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
      }}
      className="px-6 py-2 rounded-md relative radial-gradient"
    >
      <span className="text-black  tracking-wide font-bold h-full w-full block relative linear-mask">
        {children} {/* Dynamic button text */}
      </span>
      <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
    </motion.button>
  );
};

// Add PropTypes validation
ShinyButton.propTypes = {
  children: PropTypes.node.isRequired, 
  handleClick:PropTypes.func.isRequired
};

export default ShinyButton;
