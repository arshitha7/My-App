import AnimBT from "../../ui/AnimBT.jsx";
import Anim from "../../ui/Anim.jsx";
import { FifthContent } from "./fifthSectionContent";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Underline from "../../ui/Underline.jsx";

export default function FifthSection() {
  const [hover, setHover] = useState(null);

  return (
    <div className="flex flex-col  items-center font-jost px-6 py-16 bg-white ">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center mb-10 md:mb-20">
        <Anim>
          <h1 className="text-[#0E314C] text-center text-xl md:text-2xl lg:text-3xl font-semibold leading-tight mb-4">
            Why Choose Us?
          </h1>
          <div className="flex items-center justify-center">
          <Underline />
          </div>
        </Anim>
        <Anim delay={0.4}>
          <p className="text-base text-gray-500 text-center max-w-3xl leading-6">
            At our core, we prioritize quality and client satisfaction. Our
            commitment to excellence is unwavering, as we rigorously adhere to
            industry-leading standards and deliver precise, accurate solutions.
            We foster collaborative partnerships with our clients, maintaining
            open communication and providing exceptional support at every stage.
          </p>
        </Anim>
      </div>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {FifthContent.map((feature, index) => (
          <AnimBT key={index} delay={index * 0.3}>
            <div
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(null)}
              className="relative flex flex-col h-[280px] w-auto p-4 
              shadow-lg rounded-lg
                transition-all duration-500 transform group
                hover:-translate-y-4 hover:bg-white hover:shadow-2xl"
            >
              <feature.icon
                style={{ fontSize: 50, transition: "all 0.5s linear" }}
                className={`rounded-full p-3
    ${
      index === 0 &&
      "bg-green-200 text-green-500 group-hover:bg-green-500 group-hover:text-white"
    }
    ${
      index === 1 &&
      "bg-red-200 text-red-500 group-hover:bg-red-500 group-hover:text-white"
    }
    ${
      index === 2 &&
      "bg-purple-200 text-purple-500 group-hover:bg-purple-500 group-hover:text-white"
    }
  `}
              />

              <h2 className="text-lg font-semibold text-gray-700 mb-4  mt-7">
                {feature.title}
              </h2>

              {/* Description */}
              <p className="text-gray-500  text-sm font-semibold ">{feature.text}</p>

              {/* Animated Underline on Hover */}
              
                <AnimatePresence key={index}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={hover===index ?{ width: "50%" }:{width:0}}
                    transition={{ duration: 0.4 }}
                    exit={{width:0}}
                    className="absolute bottom-0 left-0 h-1 bg-customGreen"
                  />
                  <motion.div
                    initial={{ width: 0 }}
                    animate={hover===index ?{ width: "50%" }:{width:0}}
                    transition={{ duration: 0.4 }}
                    exit={{width:0}}
                    className="absolute bottom-0 right-0 h-1 bg-customGreen"
                  />
                </AnimatePresence>

            </div>
          </AnimBT>
        ))}
      </section>
    </div>
  );
}
