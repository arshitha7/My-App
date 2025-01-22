import { motion, AnimatePresence } from "framer-motion";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import PropTypes from "prop-types";

const HoverButton = ({ children, textColor }) => {
  return (
    <AnimatePresence>
      <motion.button
        initial={{
          backgroundColor: "#800080", // Purple background initially
          backgroundImage: `
            linear-gradient(to right, transparent 50%, transparent 50%),
            linear-gradient(to left, transparent 50%, transparent 50%)`, // Fully transparent gradients
          backgroundSize: "200% 100%",
          backgroundPosition: "100% 0, -100% 0", // Gradients start off-screen
        }}
        animate={{
          backgroundColor: "#800080", // Ensure purple background remains consistent
        }}
        whileHover={{
          backgroundImage: `
            linear-gradient(to right, #8fd14f 50%, transparent 50%),
            linear-gradient(to left, #8fd14f 50%, transparent 50%)`, // Gradients slide into view
          backgroundPosition: "50% 0, 50% 0", // Gradients meet at the center
        }}
        exit={{
            backgroundImage: `
            linear-gradient(to right, #8fd14f 50%, transparent 50%),
            linear-gradient(to left, #8fd14f 50%, transparent 50%)`, // Gradients slide into view
          backgroundPosition: "50% 0, 50% 0", // Gradients meet at the center
        }}
        transition={{
          duration: 0.2, // Smooth transitions for both hover and exit
          ease: "easeInOut",
        }}
        className={`relative font-semibold py-3 px-8 shadow-lg z-20 rounded-xl
          border-2  transition-all duration-700 
          focus:outline-none  ${
            textColor ? `${textColor} hover:text-black` : "text-black hover:text-white"
          }`}
        style={{
          position: "relative",
          overflow: "hidden",
          color: "white", // Ensure text is visible on purple
        }}
      >
        <ArrowForwardOutlinedIcon
          fontSize="medium"
          className="absolute left-2 top-1/2 transform -translate-y-1/2"
        />
        {children}
      </motion.button>
    </AnimatePresence>
  );
};

HoverButton.propTypes = {
  children: PropTypes.node.isRequired,
  textColor: PropTypes.string,
};

export default HoverButton;
