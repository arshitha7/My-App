import { motion } from "framer-motion";

export default function Underline() {
  return (
    <motion.div className="w-[100px] h-1 bg-customGreen/40 rounded-lg relative mb-5">
      <motion.span
        className="absolute -top-[3px] left-0 -translate-x-1/2 -translate-y-1/2 w-[10px] h-[10px] rounded-full bg-customGreen"
        animate={{
          x: ["0px", "90px"], 
        }}
        transition={{
          duration: 4, 
          repeat: Infinity, 
          repeatType: "loop", 
          ease: "easeInOut", 
        }}
      />
    </motion.div>
  );
}
