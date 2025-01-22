import SettingsInputAntennaOutlinedIcon from "@mui/icons-material/SettingsInputAntennaOutlined";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import Anim from "../../../ui/AnimBT.jsx";
import Underline from "../../../ui/Underline.jsx";
import { AnimatePresence, motion } from "framer-motion";
import useSoftwareDetails from "../../../store/HardwareProduct.js";
import { useNavigate } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export default function ForthSection() {
  const navigate = useNavigate();
  const softwareProductDet = useSoftwareDetails(
    (state) => state.setHardwareProductsDetails
  );

  const handleClick = async (title, index) => {
    try {
      // Validate inputs
      if (!title || typeof title !== "string") {
        throw new Error("Title is missing or invalid.");
      }
      if (typeof index !== "number") {
        throw new Error("Index is missing or not a valid number.");
      }

      // Call the state setter with provided title and index
      await softwareProductDet({ title, index });

      // Navigate to the target page
      navigate("/hardwareProductsDetails");
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const content = [
    {
      title: "Skeegle Helmet",
      Icon: <AutoAwesomeIcon />,
      des: "The smart safety helmet integrates advanced technologies for enhanced workplace safety, including features like real-time monitoring and alerts for potential hazards. ",
    },
    {
      title: "Electronic Voting Machines (EVMs)",
      Icon: <SmartToyIcon />,
      des: "The electronic voting machine (EVM) is a secure, efficient system for conducting elections electronically, ensuring accuracy and integrity invoting processes.",
    },
    {
      title: "Washroom Automation",
      Icon: <SettingsInputAntennaOutlinedIcon />,
      des: "Washroom automation includes sensor-based faucets, soap dispensers, and flush systems, enhancing hygiene and efficiency through touchless operation and water conservation.",
    },
    // {
    //   title: "Guest Greeting Device",
    //   Icon: <AutoAwesomeIcon />,
    //   des: "A guest greeting device offers automated, personalized welcomes using AI and facial recognition, enhancing hospitality experiences with seamless interaction and security features.",
    // },
    // {
    //   title: "School Automation",
    //   Icon: <SmartToyIcon />,
    //   des: "School automation streamlines administrative tasks, attendance tracking, grading, communication and between educators, students, and parents, enhancing efficiency and educational outcomes.",
    // },
    {
      title: "Smart AI Coat ",
      Icon: <SettingsInputAntennaOutlinedIcon />,
      des: "Al-enabled smart coat represents a significant advancement in wearable healthcare technology, offering a proactive approach to health management.",
    },
  ];

  return (
    <div className="py-20 font-jost bg-white">
      <div className="flex flex-col justify-center items-center">
        <h1
          className="text-[#0E314C] text-xl md:text-xl lg:text-2xl font-semibold leading-tight mb-4
           "
        >
          Hardware Products
        </h1>
        <Underline />
        <p className="text-base text-gray-500 mb-10 max-w-lg text-center">
        Explore reliable, efficient, and intelligent hardware for a smarter future. 
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mx-5 md:mx-20 lg:mx-32">
        {content?.map((data, i) => (
          <Anim key={i}>
            <motion.div
              initial={{ rotateX: 0 }}
              whileHover={{ rotateX: 25 }}
              transition={{ duration: 0, ease: "easeInOut" }}
              className={` h-[280px]  bg-gradient-to-r from-purple-200 via-purple-100 to-purple-50 rounded-xl hover:shadow-xl transform transition-all duration-500 ease-in-out hover:-translate-y-3 overflow-hidden group relative`}
            >
              <motion.div className="flex justify-start items-center ml-5 mt-5">
                <motion.div className="text-gray-800 bg-white rounded-full p-3 group-hover:bg-customGreen group-hover:text-white transition-colors duration-1000">
                  {data.Icon}
                </motion.div>
              </motion.div>

              <div className="p-6">
                <h1 className="text-lg font-semibold text-gray-800 mb-2">
                  {data.title}
                </h1>
                <p className="text-gray-600 mb-4 text-sm font-semibold">
                  {data.des}
                </p>
              </div>

              <AnimatePresence>
                <motion.button
                  onClick={() => handleClick(data.title, i)}
                  className="flex ml-auto text-sm px-3 p-2 bg-white text-gray-800 font-semibold rounded-full ease-in-out hover:text-white hover:bg-customGreen transition-colors duration-1000 absolute bottom-5 right-5"
                >
                  Learn More{" "}
                  <MdKeyboardDoubleArrowRight className="ml-1 text-lg" />
                </motion.button>
              </AnimatePresence>
            </motion.div>
          </Anim>
        ))}
      </div>
    </div>
  );
}
