import { motion } from "framer-motion";
import { useState } from "react";
import PropTypes from "prop-types";

export default function Login({ children }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative group w-auto h-auto cursor-pointer p-3 px-6 shadow-custom rounded-lg font-jost  bg-customGreen text-center font-semibold uppercase transform hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 overflow-hidden z-50"
      style={{ position: "relative", display: "inline-block" }}
    >
      {/* Top Swipe */}
      <motion.span
        className="absolute top-0 -left-1 h-full w-full bg-white "
        style={{ zIndex: 1 }}
        initial={{ x: "-100%" }}
        animate={{ x: hover ? "-40%" : "-100%" }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      />
      {/* Bottom Swipe */}
      <motion.span
        className="absolute bottom-0 -right-1 h-full w-full bg-white "
        style={{ zIndex: 1 }}
        initial={{ x: "100%" }}
        animate={{ x: hover ? "40%" : "100%" }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      />
      {/* Button Text */}
      <motion.span
        className="relative z-10 text-white text-sm font-semibold tracking-wider"
        style={{ position: "relative", zIndex: 10 }}
        animate={{ color: hover ? "#08002e" : "#fff" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {children}
      </motion.span>
    </div>
  );
}

Login.propTypes = {
  children: PropTypes.node.isRequired,
};