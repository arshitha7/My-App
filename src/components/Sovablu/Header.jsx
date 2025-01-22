
import Anim from "../../ui/Anim.jsx";
import { motion } from "framer-motion";
import AnimatedImage from "../Home/Animated-Images/Animation2.jsx";
import ServiceMainImage from "../../assets/images/imageset2/service-right-main-pic.30fff806.png";
import AnimRL from "../../ui/AnimRL.jsx";
import RandomP2 from "../../ui/RandomPatterns4.jsx";
import Background from "../../assets/image2/background/banner-bg.jpg";
import { FaRocket } from "react-icons/fa";
import { FaRegFlag } from "react-icons/fa";
import { BsFillGrid1X2Fill } from "react-icons/bs";

export default function Header() {


  const sentence =
    "Effortlessly Build Your Enterprise Apps 10x Faster with Our Sovablu AI-Powered No-Code DX Platform!";
  const pargraph =
    "Seamlessly build and deploy complicated, scalable, cloud-native, AI-augmented applications and processes for your business without writing any code whatsoever.";

  return (
    <div className="font-jost mt-10 bg-white text-black  flex items-center justify-center overflow-hidden relative ">
      <RandomP2 />
      <div className="absolute w-full h-full object-cover  ">
        <img src={Background} alt="img" />
      </div>
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0  max-w-full mx-5 md:mx-10 lg:mx-10  px-4 md:px-5 rounded-lg mt-20 md:mt-20 overflow-hidden">
        {/* : Conditional Image Rendering */}
        <div className=" flex justify-center items-center mt-5 md:mt-0  ">
          <Anim>
            <div className="block md:hidden">
              <img
                src={ServiceMainImage}
                alt="Service Main"
                className=" max-w-xs md:max-w-sm h-auto object-contain"
              />
            </div>
          </Anim>
          <div className="hidden md:block">
            <AnimatedImage />
          </div>
        </div>

        <div className=" flex flex-col justify-center space-y-1 z-50 mt-10">
          <AnimRL>
            <h1 className="text-xl  md:text-2xl max-w-full md:max-w-2xl tracking-tight  text-start font-semibold text-[#0E314C] leading-snug mb-2 ">
              {sentence}
            </h1>
          </AnimRL>

          <motion.div
            className="text-base text-gray-500  mb-2"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 1 },
              visible: {
                opacity: 1,
                transition: {
                  delayChildren: 0.5,
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

         

          <div className="py-5 ">
            {/* Vertical Line */}
            <section className="py-4 w-full relative">
              <div className="absolute left-[18px] top-10 h-full w-[2px] bg-customGreen "></div>{" "}
              <div className="flex gap-6  items-start relative">
                <div className="flex justify-start relative mt-5">
                  <FaRocket className="text-white text-4xl bg-customGreen p-2 rounded-md z-10" />
                </div>
                <div className="flex flex-col space-y-1 w-full">
                  <h1 className="text-base font-semibold text-[#0E314C]">
                    &quot;Pay for what you use&quot; Licensing Model
                  </h1>
                  <p className="text-gray-500 text-base">
                    Receive a specially tailored structurally cheapest pricing
                    model that enables one to only pay for the resources used.
                  </p>
                </div>
              </div>
            </section>

            <section className="py-4 w-full relative">
              <div className="absolute left-[18px] top-10 h-full w-[2px] bg-customGreen"></div>{" "}
              <div className="flex gap-6  items-start relative">
                <div className="flex justify-start relative mt-5">
                  <FaRegFlag className="text-white text-4xl bg-customGreen p-2 rounded-md z-10" />
                </div>
                <div className="flex flex-col space-y-1 w-full">
                  <h1 className="text-base font-semibold text-[#0E314C]">
                    Unlimited Users
                  </h1>
                  <p className="text-gray-500 text-base">
                    Scalability is possible without limitations regarding the
                    number of people using the platform.
                  </p>
                </div>
              </div>
            </section>
            <section className="py-4 w-full">
              <div className="flex gap-6  items-start relative">
                <div className="flex justify-start relative mt-5">
                  <BsFillGrid1X2Fill className="text-white text-4xl bg-customGreen p-2 rounded-md z-10" />
                </div>
                <div className="flex flex-col space-y-1 w-full">
                  <h1 className="text-base font-semibold text-[#0E314C]">
                    Flexible Customer Engagement Models
                  </h1>
                  <p className="text-gray-500 text-base">
                    The type of engagement can be selected from a range of
                    options, which would mean that it is flexible and meets the
                    organizational requirements.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

      </div>
    </div>
  );
}
