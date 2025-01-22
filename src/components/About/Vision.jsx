import VisionMission from "./visionMissionContent"; // Ensure this file exports the content array
import Anim from "../../ui/Anim.jsx";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import AnimRL from "../../ui/AnimRL.jsx";
import AnimZF from "../../ui/AnimZF.jsx";
import Underline from "../../ui/Underline.jsx";


export default function TestAnim() {
  return (
    <div className="pb-20 pt-10 font-jost bg-black">
      <AnimZF>
       
        <div className="flex flex-col justify-center items-center my-16  space-x-4">
       
            <h1 className="text-gray-200 text-center text-xl md:text-2xl lg:text-3xl font-semibold leading-tight mb-4 ">
            Empowering Innovation: Our Vision and Mission
            </h1>
            <Underline/>
          
        <Anim delay={0.4}>
          <p className="text-sm text-gray-400 text-center max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Anim>
      </div>
      </AnimZF>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-16 justify-center items-center  ">
        {VisionMission?.map((item, i) => {
          const Animated = i === 0 ? Anim : AnimRL;
          return (
            <Animated key={i}>
              <div
                style={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                }}
                className={`relative h-[350px] w-full  max-w-[500px] overflow-hidden bg-[#000] rounded-lg before:absolute before:top-[-50%] before:left-[-50%] before:right-[-50%] before:bottom-[-50%] shadow-2xl
              ${i === 0  ? "before:bg-[conic-gradient(from_0deg,_transparent,_transparent,_#afafaf_75%)] " : "before:bg-[conic-gradient(from_0deg,_transparent,_transparent,_#afafaf_75%)] "}  
              before:animate-spin-slow
            `}
              >
                <div className="absolute inset-1 flex flex-col justify-center bg-black shadow-xl  px-6 space-y-3 md:space-y-6 ">
                  {/* Icon and Title Row */}
                  <div className="flex items-center mb-4">
                    <item.icon className="text-gray-200 mr-4"/>
                    <h2 className="text-xl text-gray-200">
                      {item.title}
                    </h2>
                  </div>

                  {/* List of Points */}
                  <div className="space-y-4">
                    {item.items?.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <ArrowForwardRoundedIcon className="text-gray-400 mt-1" />
                        <p className="text-gray-400 leading-relaxed text-sm md:text-base md:font-medium ">
                          {point.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Animated>
          );
        })}
      </div>
    </div>
  );
}
