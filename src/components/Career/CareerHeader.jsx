import { motion } from "framer-motion";
import Anim from "../../ui/Anim.jsx";

import Background from "../../assets/image2/background/banner-bg1.jpg";
import Patterns from "../../ui/RandomPatterns3.jsx";

export default function Header() {
 
  const sentence =
    "Explore exciting opportunities at Jezh Technologies. We're a team of passionate innovators, and we're always looking for talented individuals to join us.";

  return (
    <div className="relative top-14 flex flex-col justify-center items-center  pt-20 font-jost px-4 overflow-hidden ">
      <div className="absolute w-full h-full object-cover  z-[-1]">
        <img src={Background} alt="" />
      </div>
      <Patterns />
      <div className="relative z-10 text-center max-w-4xl mt-0  p-10 rounded-lg ">
        <Anim key="anim-header">
          <h1 className="text-4xl md:text-4xl font-semibold text-neutral-900 mb-8">
          Build Your Future With Jezh 
          </h1>
        </Anim>

        <motion.div
          className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed "
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 1 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05,
                delayChildren: 1,
              },
            },
          }}
        >
          {sentence.split("").map((char, index) => (
            <motion.span
              key={index}
              className="inline-block font-montserrat"
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.div>
      </div>

      

    </div>
  );
}
