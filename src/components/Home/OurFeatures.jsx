
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";
import AnimBT from "../../ui/AnimBT.jsx";
import Underline from "../../ui/Underline.jsx";
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import ApiOutlinedIcon from '@mui/icons-material/ApiOutlined';
import DataThresholdingOutlinedIcon from '@mui/icons-material/DataThresholdingOutlined';

export default function OurFeatures() {
  return (
    <section className="min-h-screen font-jost bg-[#f7fafd] pt-20 pb-10">
      <div className="flex flex-col justify-center items-center mx-10 ">
        <h1 className="text-xl  md:text-3xl lg:text-3xl text-[#0E314C] font-semibold mb-5">
        Our Promise
        </h1>
        <Underline />

        <p className="text-base text-gray-500 text-center max-w-lg">
        We are committed to providing the highest quality services to our customers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mx-16 my-20 gap-8">
        <section className="flex flex-col items-center justify-center gap-5 ">
          <AnimBT>
            <div className="flex flex-col md:flex-row max-w-3xl gap-5 bg-white rounded-lg p-5 group hover:bg-white hover:shadow-custom transform hover:-translate-y-3 transition-all duration-700">
              <span className="flex items-center justify-center bg-green-200 group-hover:bg-green-500 transition-all duration-500 rounded-full h-12 p-5 w-12">
                <SmartToyOutlinedIcon
                  sx={{ transition: "all 0.5s ease" }}
                  className="text-green-700 text-lg group-hover:text-white transition-all duration-500"
                />
              </span>
              <div className="flex flex-col gap-2 w-auto h-24">
                <h1 className="text-base font-semibold w-fit text-gray-700 cursor-pointer hover:text-green-500">
                AI-Powered Solutions
                </h1>
                <p className="text-sm text-gray-500 font-semibold group-hover:text-gray-500 transition-colors duration-500">
                We&apos;ll leverage artificial intelligence (AI) to enhance user experiences, such as chatbots for customer support, personalized recommendations, and predictive analytics.
                </p>
              </div>
            </div>
          </AnimBT>

          <AnimBT>
            <div className="flex flex-col md:flex-row max-w-3xl  gap-5 bg-white rounded-lg p-5 group hover:bg-white hover:shadow-custom transform hover:-translate-y-3 transition-all duration-700">
              <span className="flex items-center justify-center bg-fuchsia-200 group-hover:bg-fuchsia-500 transition-all duration-500 rounded-full h-12 p-5 w-12">
                <DashboardOutlinedIcon
                  sx={{ transition: "all 0.5s ease" }}
                  className="text-fuchsia-700 text-lg group-hover:text-white transition-all duration-500"
                />
              </span>

              <div className="flex flex-col gap-2 w-auto h-24">
                <h1 className="text-base w-fit font-semibold text-gray-700 cursor-pointer hover:text-green-500">
                Engaging User Experiences 
                </h1>
                <p className="text-sm text-gray-500 font-semibold group-hover:text-gray-500 transition-colors duration-500">
                We’ll create websites and digital products that are visually appealing, user-friendly, and enjoyable to interact with. 
                </p>
              </div>
            </div>
          </AnimBT>

          <AnimBT>
            <div className="flex flex-col md:flex-row max-w-3xl  gap-5 bg-white rounded-lg p-5 group hover:bg-white hover:shadow-custom transform hover:-translate-y-3 transition-all duration-700">
              <span className="flex items-center justify-center bg-orange-200 group-hover:bg-orange-500 transition-all duration-500 rounded-full h-12 p-5 w-12">
                <ViewInArOutlinedIcon
                  sx={{ transition: "all 0.5s ease" }}
                  className="text-orange-700 text-lg group-hover:text-white transition-all duration-500"
                />
              </span>
              <div className="flex flex-col gap-2 w-auto h-24">
                <h1 className="text-base w-fit font-semibold text-gray-700 cursor-pointer hover:text-green-500">
                Accessibility 
                </h1>
                <p className="text-sm text-gray-500 font-semibold group-hover:text-gray-500 transition-colors duration-500">
                We&apos;ll ensure your digital experiences are accessible to all users, including those with liabilities. This includes designing solutions that cater to diverse needs and provide seamless usability for everyone.
                </p>
              </div>
            </div>
          </AnimBT>
        </section>

        <section className="flex flex-col items-center justify-center gap-5 ">
          <AnimBT delay={0.3}>
            <div className="flex flex-col md:flex-row max-w-3xl  gap-5 bg-white rounded-lg p-5 group hover:bg-white hover:shadow-custom transform hover:-translate-y-3 transition-all duration-700">
              <span className="flex items-center justify-center bg-green-200 group-hover:bg-green-500 transition-all duration-500 rounded-full h-12 p-5 w-12">
                <ApiOutlinedIcon
                  sx={{ transition: "all 0.5s ease" }}
                  className="text-green-700 text-lg group-hover:text-white transition-all duration-500"
                />
              </span>
              <div className="flex flex-col gap-2 w-auto h-24">
                <h1 className="text-base w-fit font-semibold text-gray-700 cursor-pointer hover:text-green-500">
                Personalization 
                </h1>
                <p className="text-sm text-gray-500 font-semibold group-hover:text-gray-500 transition-colors duration-500">
                We’ll create personalized experiences for each user, delivering relevant content and offers based on their individual preferences and behavior. 
                </p>
              </div>
            </div>
          </AnimBT>

          <AnimBT delay={0.3}>
            <div className="flex flex-col md:flex-row max-w-3xl  gap-5 bg-white rounded-lg p-5 group hover:bg-white hover:shadow-custom transform hover:-translate-y-3 transition-all duration-700">
              <span className="flex items-center justify-center bg-fuchsia-200 group-hover:bg-fuchsia-500 transition-all duration-500 rounded-full h-12 p-5 w-12">
                <DataThresholdingOutlinedIcon
                  sx={{ transition: "all 0.5s ease" }}
                  className="text-fuchsia-700 text-lg group-hover:text-white transition-all duration-500"
                />
              </span>
              <div className="flex flex-col gap-2 w-auto h-24">
                <h1 className="text-base w-fit font-semibold text-gray-700 cursor-pointer hover:text-green-500">
                Data Driven Decisions 
                </h1>
                <p className="text-sm text-gray-500 font-semibold group-hover:text-gray-500 transition-colors duration-500">
                We&apos;ll leverage data analysis to understand user behavior, track key metrics, and make data-driven decisions to improve performance.
                </p>
              </div>
            </div>
          </AnimBT>

          <AnimBT delay={0.3}>
            <div className="flex flex-col md:flex-row max-w-3xl  gap-5 bg-white rounded-lg p-5 group hover:bg-white hover:shadow-custom transform hover:-translate-y-3 transition-all duration-700">
              <span className="flex items-center justify-center bg-orange-200 group-hover:bg-orange-500 transition-all duration-500 rounded-full h-12 p-5 w-12">
                <AccessTimeOutlinedIcon
                  sx={{ transition: "all 0.5s ease" }}
                  className="text-orange-700 text-lg group-hover:text-white transition-all duration-500"
                />
              </span>
              <div className="flex flex-col gap-2 w-auto h-24">
                <h1 className="text-base w-fit font-semibold text-gray-700 cursor-pointer hover:text-green-500">
                Continuous Improvement 
                </h1>
                <p className="text-sm text-gray-500 font-semibold group-hover:text-gray-500 transition-colors duration-500">
                We&apos;ll continuously monitor and analyze user behavior to identify areas for improvement and optimize your digital experiences over time. 
                </p>
              </div>
            </div>
          </AnimBT>
        </section>
        
      </div>
    </section>
  );
}
