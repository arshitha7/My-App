import { useNavigate } from "react-router-dom";
import Anim from "../../ui/Anim.jsx";
import { motion } from "framer-motion";
import AnimatedImage from "./Animated-Images/AnimatedImages3.jsx";
import ServiceMainImage from "../../assets/image2/SevicePageImg/main-pic.52b102d9.png";
import AnimRl from "../../ui/AnimRL.jsx";
import RandomP2 from "../../ui/RandomPatterns4.jsx";
import Background from "../../assets/image2/background/banner-bg1.jpg";
import SwipeButton from "../../ui/SwipeButton.jsx/Swipe1.jsx";

export default function Header() {

  
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/services");
  };

  const sentence = "Innovative Partner for Your Digital Transformation ";
  const pargraph =
    "Empowering businesses with cutting-edge technology solutions for seamless growth and innovation.";

  return (
    <div className="font-jost bg-white text-black flex items-center justify-center overflow-hidden relative min-h-screen">
      <RandomP2 />
      <div className="absolute w-full h-full object-cover">
        <img src={Background} alt="img" />
      </div>
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 lg:gap-20 mx-5 md:mx-10 lg:mx-24  px-4 md:px-5 rounded-lg mt-20 md:mt-20">
        <div className="flex flex-col space-y-6 mt-5 md:mt-10 lg:mt-20">
          {/* Content */}
          <Anim>
            <h1 className="text-2xl sm:text-4xl max-w-full md:max-w-md md:text-4xl text-start font-semibold text-[#0E314C] leading-10 tracking-wide mb-2 mt-10">
              {sentence}
            </h1>
          </Anim>

          <motion.div
            className="text-base sm:text-lg md:text-md text-gray-400 leading-relaxed mb-2 max-w-sm"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 1 },
              visible: {
                opacity: 1,
                transition: {
                  delayChildren: 1.5,
                  staggerChildren: 0.05,
                },
              },
            }}
          >
            {pargraph.split("").map((char, index) => (
              <motion.span
                key={index}
                className="inline-block"
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>

          <Anim delay={5.5}>
            <button onClick={handleClick} className="mt-0 md:mt-5">
              <SwipeButton>Learn More </SwipeButton>
            </button>
            <br />
          </Anim>
        </div>

        {/* Right: Conditional Image Rendering */}
        <div className="flex justify-center items-center mt-5 md:mt-20">
          <AnimRl>
            <div className="block md:hidden">
              <img
                src={ServiceMainImage}
                alt="Service Main"
                className="max-w-xs md:max-w-sm h-auto object-contain"
              />
            </div>
          </AnimRl>
          <div className="hidden md:block mt-16">
            <AnimatedImage />
          </div>
        </div>
      </div>
    </div>
  );
}
