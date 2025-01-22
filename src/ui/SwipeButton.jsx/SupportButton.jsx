import { motion } from "framer-motion";
import { useState } from "react";
import PropTypes from "prop-types";

export default function Support({ children }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative group w-auto h-auto cursor-pointer p-2 px-6 rounded-lg font-jost border-2 border-dashed border-customGreen/40   bg-transparent text-center font-semibold uppercase overflow-hidden z-50"
      style={{ position: "relative", display: "inline-block" }}
    >
      {/* Top Swipe */}
      <motion.span
        className="absolute top-0 -left-1 h-full w-full bg-customGreen "
        style={{ zIndex: 1 }}
        initial={{ x: "-100%" }}
        animate={{ x: hover ? "-40%" : "-100%" }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      />
      {/* Bottom Swipe */}
      <motion.span
        className="absolute bottom-0 -right-1 h-full w-full bg-customGreen "
        style={{ zIndex: 1 }}
        initial={{ x: "100%" }}
        animate={{ x: hover ? "40%" : "100%" }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      />
      {/* Button Text */}
      <motion.span
        className="relative z-10 text-white text-xs font-semibold tracking-wider"
        style={{ position: "relative", zIndex: 10 }}
        animate={{ color: hover ? "#fff" : "#000" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {children}
      </motion.span>
    </div>
  );
}

Support.propTypes = {
  children: PropTypes.node.isRequired,
};