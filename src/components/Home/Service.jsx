import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import Anim from "../../ui/Anim.jsx";
import AnimRL from "../../ui/AnimRL.jsx";
import { RiRobot3Line } from "react-icons/ri";
import Underline from "../../ui/Underline.jsx";

export default function Service() {
  return (
    <div className=" font-jost py-10">
      <div className="flex flex-col justify-center items-center  mb-14 space-x-4">
        
          <h1 className="text-[#0E314C] text-center text-xl md:text-2xl lg:text-3xl font-semibold leading-tight mb-4 ">
            What We Do
          </h1>
          <Underline />
       

        <Anim delay={0.4}>
          <p className="text-md text-gray-500 text-center max-w-lg leading-6">
            Experience the power of technology with Jezh Technologies. We design
            and develop customized solutions that optimize your operations,
            elevate your brand, and deliver exceptional results
          </p>
        </Anim>
      </div>
      <div className=" flex justify-center items-center bg-white mx-5 md:mx-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-10">
          {/* Card 1 */}

          <Anim delay={0.4}>
            <div className="bg-white h-[300px] hover:bg-customGreen rounded-lg border border-dashed border-green-200 hover:border-none font-jost group shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all duration-500">
              <div className="p-6">
                <span className="flex items-center justify-center mb-5 bg-green-200 group-hover:bg-white transition-all duration-500 rounded-full w-12 h-12">
                  <HomeWorkOutlinedIcon
                    sx={{ transition: "all 0.5s" }}
                    className="text-green-700 text-lg "
                  />
                </span>

                <h2 className="text-lg font-bold text-gray-800 group-hover:text-white mb-5 transition-all duration-500  ">
                  Home & Industrial Automation
                </h2>

                <p className="text-gray-500 text-sm font-semibold group-hover:text-gray-100 transition-all duration-500">
                Simplify your life with smart home & industrial automation. Control devices, enhance security, and boost efficiency with intuitive solutions. 
                </p>
              </div>
            </div>
          </Anim>
          {/* Card 2 */}
          <Anim delay={0.6}>
            <div className="bg-white h-[300px] hover:bg-customGreen rounded-lg border border-dashed border-blue-200 hover:border-none font-jost group shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all duration-500">
              <div className="p-6">
                <span className="flex items-center justify-center mb-5 bg-blue-200 group-hover:bg-white transition-all duration-500 rounded-full w-12 h-12">
                  <LanguageOutlinedIcon
                    sx={{ transition: "all 0.5s" }}
                    className="text-blue-700 text-lg "
                  />
                </span>

                <h2 className="text-lg font-bold text-gray-800 group-hover:text-white mb-5 transition-all duration-500 ">
                  Website Development & Digital Presence
                </h2>

                <p className="text-gray-500 font-semibold text-sm group-hover:text-gray-100 transition-all duration-500">
                Jezh Technologies crafts stunning websites that captivate visitors, drive conversions, and deliver exceptional user experiences. 
                </p>
              </div>
            </div>
          </Anim>
          {/* Card 3 */}
          <AnimRL delay={0.4}>
            <div className="bg-white h-[300px] hover:bg-customGreen rounded-lg border border-dashed border-rose-200 hover:border-none font-jost group shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all duration-500">
              <div className="p-6">
                <span className="flex items-center justify-center mb-5 bg-rose-200 group-hover:bg-white transition-all duration-300 rounded-full w-12 h-12">
                  <CodeOutlinedIcon
                    sx={{ transition: "all 0.5s" }}
                    className="text-rose-700 text-lg "
                  />
                </span>

                <h2 className="text-lg font-bold text-gray-800 group-hover:text-white mb-5 transition-all duration-500 ">
                Research & Development
                </h2>

                <p className="text-gray-500 font-semibold text-sm group-hover:text-gray-100 transition-all duration-500">
                We foster a culture of innovation through continuous research and development, exploring cutting-edge technologies to deliver cutting-edge solutions. 
                </p>
              </div>
            </div>
          </AnimRL>
          {/* Card 4 */}
          <AnimRL delay={0.6}>
            <div className="bg-white h-[300px] hover:bg-customGreen rounded-lg border border-dashed border-lime-200 hover:border-none font-jost group shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all duration-500">
              <div className="p-6">
                <span className="flex items-center justify-center mb-5 bg-lime-200 group-hover:bg-white transition-all duration-300 rounded-full w-12 h-12">
                  <RiRobot3Line
                    sx={{ transition: "all 0.5s" }}
                    className="text-lime-700 text-xl "
                  />
                </span>

                <h2 className="text-lg font-bold text-gray-800 group-hover:text-white mb-5 transition-all duration-500 ">
                AI & Robotics <br /> Workshops
                </h2>

                <p className="text-gray-500 font-semibold text-sm  group-hover:text-gray-100 transition-all duration-500">
                Empower your AI & Robotics future! We offer immersive programs that equip you with the skills to thrive in these rapidly evolving fields. 
                </p>
              </div>
            </div>
          </AnimRL>
        </div>
      </div>
    </div>
  );
}
