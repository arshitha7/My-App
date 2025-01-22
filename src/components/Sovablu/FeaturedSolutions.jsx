import { motion } from "framer-motion";
import Underline from "../../ui/Underline.jsx";
import { useState } from "react";
import Pattern from "../../ui/RandomPatterns3.jsx";


import { FaCodepen } from "react-icons/fa";
import { FaFileCode } from "react-icons/fa";
import { TbBrandDatabricks } from "react-icons/tb";
import { GrTechnology } from "react-icons/gr";
import { GiArtificialIntelligence } from "react-icons/gi";
import { MdIntegrationInstructions } from "react-icons/md";
import { FaOctopusDeploy } from "react-icons/fa";
import { SiBuiltbybit } from "react-icons/si";
import { GiClassicalKnowledge } from "react-icons/gi";
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';

export default function FeaturedSolutions() {
  const contents = [
    {
      icon: <TbBrandDatabricks />,
      title: "Powerful Data Modelling",
      description:
        "Deploy powerful and versatile tools to achieve the best result in database designing.",
    },
    {
      icon: <FaFileCode />,
      title: "Visual UI Design",
      description:
        "Built for design simplicity with a WYSIWYG drag-and-drop user Interface supported by over 100 intelligent modules.",
    },
    {
      icon: <FaCodepen />,
      title: "Intuitive Logic Definition",
      description:
        "Provide an integration of logic with an instantly understandable designer based on the concept of flow charts.",
    },
    {
      icon: <GrTechnology />,
      title: "Infrastructure Management",
      description:
        "Visualize and manage cloud environments with Sovablu visual tools.",
    },
    {
      icon: <GiArtificialIntelligence />,
      title: "Ai-Accelerated Development",
      description:
        "Sovablu speeds up your development process rapidly with seamless integration of AI technologies.",
    },
    {
      icon: <MdIntegrationInstructions />,
      title: "External Integration",
      description:
        "Safely operate with external systems and bring data from different databases into the system.",
    },
    {
      icon: <FaOctopusDeploy />,
      title: "One-Click Deployment",
      description:
        "Sovablu push applications within a single click and transfers the modifications between environments without an outage.",
    },
    {
      icon: <SiBuiltbybit />,
      title: "Built-In Localization",
      description:
        "Support multiple languages for the apps to be developed and localized with ease.",
    },
    {
      icon: <GiClassicalKnowledge />,
      title: "Cutting-Edge Open Architecture",
      description:
        "Experience virtually unlimited highly efficient and inexpensive serverless cloud solutions based on open-source solutions with no proprietary components.",
    },
    
  ];

  const [hover, setHover] = useState(null);
  const [btnHover,setBtnHover]=useState(null)

  return (
    <div className="py-10 bg-white font-jost relative">
      <Pattern />
      <div className="flex flex-col justify-center items-center mx-10">
        <h1 className="text-xl md:text-3xl lg:text-3xl text-[#0E314C] font-semibold mb-5">
          Key Features of Sovablu No-Code DX Platform
        </h1>
        <Underline />

        <p className="text-base text-gray-500 text-center max-w-lg">
        Sovablu&apos;s No-code platform empowers you to build powerful digital experiences with ease. 
        </p>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10 mt-10">
        {contents.map((item, i) => (
          <div
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
            key={i}
            className="flex bg-white  z-40   flex-col items-start justify-between text-center p-5  gap-3 rounded-lg  shadow-xl group transform hover:-translate-y-2 hover:shadow-2xl group transition-all duration-500"
          >
            {/* <Anim> */}
              <div className=" shadow-lg group-hover:bg-customGreen transition-colors duration-500  rounded-full  p-2 mb-2 ">
                <motion.div
                  initial={{ rotateY: 0 }}
                  animate={{
                    rotateY: hover === i ? [0, 180, 0] : 0,
                  }}
                  transition={{
                    duration: 0.3,
                    repeat: 0,
                   
                  }}
                  className=" text-4xl text-customGreen group-hover:text-white transition-colors duration-500"
                >
                  {item.icon}
                </motion.div>
              </div>
            {/* </Anim> */}

            <h1 className="text-lg font-semibold text-start text-[#0E314C]  ">
              {item.title}
            </h1>
            <p className="text-sm font-semibold text-gray-500 text-start leading-6 ">
              {item.description}
            </p>

            <div className="flex justify-end ml-auto mt-5 relative">
              <motion.button 
               onMouseEnter={()=>setBtnHover(item.title)}
               onMouseLeave={()=>setBtnHover(null)}
              className="text-white shadow-custom  bg-customGreen p-2 px-8 rounded-full text-sm font-semibold  transition-colors duration-300 flex items-center gap-1">
              
               <KeyboardDoubleArrowRightOutlinedIcon 
               sx={{ fontSize: "25px",transition:'all 0.8s ease' }} 
               className={`${btnHover===item.title ?"translate-x-28":"translate-x-0"} absolute left-0 `}/>
               
                <motion.span
                initial={{y:0}}
                animate={btnHover===item.title ?{translateY:[0,20,-20,0],opacity:[1,0,0,0,1],z:-10}:{translateY:[0,-20,20,0],opacity:[1,0,0,0,0,1]}}
                transition={{duration:0.7, ease:'easeInOut'}}
                >
                  Learn More
                  </motion.span>
                
              </motion.button>
            </div>

          </div>
        ))}
      </section>
      
    </div>
  );
}
