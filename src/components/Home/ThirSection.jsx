import AnimRL from "../../ui/AnimRL.jsx";
import AnimatedImage from "./Animated-Images/AnimatedImage4.jsx";
import ServiceLeft from "../../assets/images/imageset4/ml-main-pic.600dfb02.png";
import SettingsInputAntennaOutlinedIcon from "@mui/icons-material/SettingsInputAntennaOutlined";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { useState } from "react";
import Anim from "../../ui/Anim.jsx";
import Underline from "../../ui/Underline.jsx";
import { GiVintageRobot } from "react-icons/gi";
import { PiNumberCircleZeroBold } from "react-icons/pi";
import { TiShoppingCart } from "react-icons/ti";
import { MdDeveloperMode } from "react-icons/md";

export default function ForthSection() {
  const [hover, setHover] = useState("");

  const hoverDescriptions = {
    Internet:
      "We specialize in connecting devices and systems to make your home, business, or industrial environments smarter, safer, and more efficient.",
    Artificial:
      "Our AI solutions empower businesses to optimize processes, improve decision-making, and drive automation through intelligent systems.",
    Robotics:
      "We integrate robotics and automation technology to streamline tasks, improve productivity, and ensure operational excellence across industries.",
    default: "Hover over any section to learn more about our expertise.",
    Website:"We specialize in creating visually appealing and highly functional websites that drive traffic, engage visitors, and boost your online presence.",
    Research:"Through continuous research and development, we deliver superior products and services.",
    Commerce:"From strategy and design to development and ongoing support, we guide you through the entire e-commerce process."
  };

  const content = [
    {
      key: "Internet",
      title: "Internet of Things (IoT)",
      Icon: <SettingsInputAntennaOutlinedIcon />,
    },
    {
      key: "Artificial",
      title: "Artificial Intelligence (AI)",
      Icon: <PiNumberCircleZeroBold className="text-2xl"/>,
    },
    {
      key: "Robotics",
      title: "Robotics & Automation",
      Icon: <GiVintageRobot className="text-2xl"/>,
    },
    {
      key: "Website",
      title: "Website Development ",
      Icon: <AutoAwesomeIcon />,
    },
    {
      key: "Research",
      title: "Research & Development ",
      Icon: <MdDeveloperMode className="text-2xl"/>,
    },
    {
      key: "Commerce",
      title: "E-Commerce Services ",
      Icon: <TiShoppingCart className="text-2xl"/>,
    },
  ];
  return (
    <div className="bg-customWhite pb-16 pt-20  font-jost">
    <div className="grid grid-cols-1 md:grid-cols-2 items-center mx-5 md:mx-10 lg:mx-10">
      <div className="relative  ">
        <div className="block md:hidden ">
          <Anim>
            <img
              src={ServiceLeft}
              alt="service"
              className="max-w-xs sm:max-w-sm h-auto object-contain"
            />
          </Anim>
        </div>
        <div className="hidden md:block ml-10 lg:ml-16">
          <AnimatedImage />
        </div>
      </div>
      <AnimRL>
        <div className="relative flex flex-col items-start space-y-8 p-4 lg:p-6 rounded-md mr-5 md:mr-10 ">
          <div className=" mx-5">
            <h1 className="text-[#0E314C]  text-xl md:text-2xl  font-semibold  mb-4">
            Our Excellence in Next-gen Technology
            </h1>
            <Underline />
          </div>

          {/* Expertise Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5  w-full ">
            {content.map((item) => (
              <div
                key={item.key}
                onMouseEnter={() => setHover(item.key)}
                onMouseLeave={() => setHover("")}
                className="flex  flex-col md:flex-row gap-5 shadow-custom bg-white p-2 rounded-md transform hover:-translate-y-2 transition-transform duration-700 hover:bg-gradient-to-tl from-customGreen to-green-500 group "
              >
                <div className="text-customGreen group-hover:text-white transition-colors duration-700 ease-in-out ">
                  {item.Icon}
                </div>
                <div className="flex flex-col">
                  <h2 className="text-sm  font-semibold text-gray-600 mb-2 group-hover:text-white transition-colors duration-700 ease-in-out">
                    {item.title}
                  </h2>
                </div>
              </div>
            ))}

            {/* Description Section */}
          </div>

          <section className="mt-3 h-[60px] flex gap-3 items-start justify-center w-full">
            {content?.map((item, i) => {
              if (item.key === hover) {
                return (
                  <div key={i} className="text-neutral-700 ">
                    {item.Icon}
                  </div>
                );
              }
            })}
            <p
              className={`text-sm tracking-normal transition-all duration-700 ease-in-out ${
                hover
                  ? "opacity-100 max-h-[500px] translate-y-0 text-neutral-700 "
                  : "opacity-0 text-neutral-500 text-center translate-y-10"
              }`}
              style={{
                overflow: "hidden",
                transition: "all 0.7s ease-in-out", // smooth transition
              }}
            >
              {hoverDescriptions[hover] || hoverDescriptions.default}
            </p>
          </section>
        </div>
      </AnimRL>

      {/* Right Section */}
    </div>
    </div>
  );
}
