import { motion } from "framer-motion";
import Anim from "../../ui/Anim.jsx";

import Background from "../../assets/image2/background/banner-bg1.jpg";
import Patterns from "../../ui/RandomPatterns3.jsx";

export default function PrivacyHeader() {
  const sentence =
    "Jezh Technologies holds your privacy in high esteem. We believe in creating a digital oasis where innovation and privacy coexist seamlessly. We encourage you to utilize Jezh services with utmost assurance in our dedication to your well-being and the security of your confidential information. This privacy policy outlines the methods through which we gather information from users of Jezh’s services and visitors to our website. We kindly urge customers and visitors to thoroughly review this privacy policy for a comprehensive understanding. Our commitment to your data’s security is as strong as the currents that shape the Jezh itself."

  return (
    <div className="relative top-14 flex flex-col justify-center items-center  pt-20 font-jost px-4 overflow-hidden ">
      <div className="absolute w-full h-full object-cover  z-[-1]">
        <img src={Background} alt="" />
      </div>
      <Patterns />
      <div className="relative z-10 text-center max-w-4xl mt-0  p-10 rounded-lg ">
        <Anim key="anim-header">
          <h1 className="text-4xl md:text-4xl font-semibold text-neutral-900 mb-8">
            Privacy - Policy
          </h1>
        </Anim>

        <motion.div
          className="text-md text-gray-600 mb-10 leading-relaxed "
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 1 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.03,
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
