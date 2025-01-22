import { motion } from "framer-motion";
import { useState } from "react";
import PropTypes from "prop-types";

export default function Swipe1({ children }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative  group w-auto h-auto cursor-pointer p-3 px-6 rounded-lg font-jost   shadow-custom bg-customGreen text-center font-semibold uppercase hover:bg-gray-950 transition-colors duration-300 overflow-hidden z-50"
      style={{ position: "relative", display: "inline-block" }}
    >
      {/* Top Swipe */}
      <motion.span
        className="absolute top-0 -left-1 h-full w-full bg-purple-500 z-50"
        style={{ zIndex: 1 }}
        initial={{ x: "-100%" }}
        animate={{ x: hover ? "-40%" : "-100%" }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      />
      {/* Bottom Swipe */}
      <motion.span
        className="absolute bottom-0 -right-1 h-full w-full bg-purple-500 z-50"
        style={{ zIndex: 1 }}
        initial={{ x: "100%" }}
        animate={{ x: hover ? "40%" : "100%" }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      />
      {/* Button Text */}
      <motion.span
        className="relative z-50 text-white text-sm tracking-wider "
        style={{ position: "relative", zIndex: 10 }}
        animate={{ color: hover ? "#fff" : "#fff" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {children}
      </motion.span>
    </div>
  );
}

Swipe1.propTypes = {
  children: PropTypes.node.isRequired,
};