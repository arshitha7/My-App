import SettingsInputAntennaOutlinedIcon from "@mui/icons-material/SettingsInputAntennaOutlined";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import Anim from "../../../ui/AnimBT.jsx";
import Underline from "../../../ui/Underline.jsx";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import useSoftwareDetails from "../../../store/SoftwareProductsStore";
import {useNavigate} from "react-router-dom"
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RoomIcon from '@mui/icons-material/Room';
import LayersIcon from '@mui/icons-material/Layers';
import JoinLeftIcon from '@mui/icons-material/JoinLeft';


export default function ForthSection() {
  const navigate = useNavigate()
  const softwareProductDet = useSoftwareDetails(
    (state) => state.setSoftwareProductsDetails
  );

  const handleClick = async (title, index,des) => {
    try {
      if (!title || typeof title !== "string") {
        throw new Error("Title is missing or invalid.");
      }
      if (typeof index !== "number") {
        throw new Error("Index is missing or not a valid number.");
      }
      await softwareProductDet({ title, index, des });
      console.log('data sent to store');
      
      navigate("/softwareProductsDetails");
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const content = [
    {
      title: "Time Tick",
      Icon: <AccessTimeIcon />,
      des: "Time Tick Attendance system uses AI-integrated recognition for facial seamless, accurate, and efficient employee attendance tracking.",
    },
    {
      title: "Maze HCM",
      Icon: <AutoAwesomeIcon />,
      des: "Mace HCM software streamlines HR for businesses of all sizes. Integrated solutions for Time Attendance, Payroll, Leave, Claims, and Appraisal. Safe data, reduced costs, automated workflows, and fewer errors.",
    },
    {
      title: "Trackoon GPS",
      Icon: <RoomIcon />,
      des: "User-friendly school bus fleet management. Streamlines routes, driver assignments, and maintenance. Improves safety & compliance. Easy setup. Cost-effective.",
    },
    {
      title: "Safety Management System",
      Icon: <SettingsInputAntennaOutlinedIcon />,
      des: "Jezh's Aviation SMS software boosts safety with analytics, reduces incidents, and improves safety culture. Mobile solutions enhance on-the-go management.",
    },
    {
      title: "Vendor Management System",
      Icon: <LayersIcon/>,
      des: "Jezh’s vendor management software streamlines vendor relationships. Easily monitor service providers, manage contracts, and track performance. Automated reminders and enhanced security. Seamlessly integrates with existing processes.",
    },
    {
      title: "Maze LMS",
      Icon: <JoinLeftIcon />,
      des: "Maze LMS simplifies learning management with seamless course creation, progress tracking, and assessments. It enhances training efficiency, reduces costs, and improves skill development across organizations of all sizes.",
    },
  ];

  return (
    <div className="py-20 font-jost bg-white">
      <div className="flex flex-col justify-center items-center">
        <h1
          className="text-[#0E314C] text-xl md:text-xl lg:text-2xl font-semibold leading-tight mb-4
           "
        >
          Software Products
        </h1>
        <Underline />
        <p className="text-base text-gray-500 mb-10 max-w-3xl text-center">
        Empowering Your Business with Innovative Solutions. Our comprehensive suite of software solutions is designed to streamline operations, enhance efficiency, and drive growth across your organization. 
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-5 md:mx-10">
        {content?.map((data, i) => (
          <Anim key={i}>
            <motion.div
              initial={{ rotateX: 0 }}
              whileHover={{ rotateX: 25 }}
              transition={{ duration: 0, ease: "easeInOut" }}
              className={`relative bg-gradient-to-r from-purple-200 via-purple-100 h-[320px] to-purple-50 rounded-xl hover:shadow-xl transform transition-all duration-500 ease-in-out hover:-translate-y-3 overflow-hidden group`}
            >
              <motion.div className="flex justify-start items-center ml-5 mt-5">
                <motion.div className="text-gray-800 bg-white rounded-full p-3 group-hover:bg-customGreen group-hover:text-white transition-colors duration-1000">
                  {data.Icon}
                </motion.div>
              </motion.div>

              <div className="p-6 pb-14">
                {" "}
                {/* Add bottom padding for the button */}
                <h1 className="text-lg font-semibold text-gray-800 mb-2 ">
                  {data.title}
                </h1>
                <p className="text-gray-600 mb-4 text-sm font-semibold">
                  {data.des}
                </p>
              </div>

              {/* Button with fixed position at the bottom */}
              <AnimatePresence>
                <motion.button
                  onClick={()=>handleClick(data.title, i,data.des)}
                  className="absolute bottom-5 right-5 flex text-sm px-3 py-2 bg-white text-gray-800 font-semibold rounded-full ease-in-out hover:text-white hover:bg-customGreen transition-colors duration-1000"
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
