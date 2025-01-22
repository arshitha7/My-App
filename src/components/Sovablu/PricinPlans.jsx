import Anim from "../../ui/Anim.jsx";
import Underline from "../../ui/Underline.jsx";
import DoneIcon from "@mui/icons-material/Done";
import Pattern from "../../ui/Pattern5.jsx"

export default function PricinPlans() {
  const SpanStyle = "text-sm text-gray-500";
  return (
    <div className="max-w-screen  py-20 font-jost bg-gray-50 relative ">
      <Pattern/>
      <div className="flex flex-col justify-center items-center mb-14">
        <h1 className="text-[#0E314C] text-center text-xl md:text-2xl lg:text-3xl font-semibold leading-tight mb-4 ">
          Our Pricing Plans
        </h1>
        <Underline />

        <Anim delay={0.4}>
          <p className="text-sm text-gray-500 text-center max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Anim>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-center items-center mx-5 md:mx-10">
        <section
          className="flex flex-col  justify-center 
         shadow-lg pb-10 gap-2 w-full rounded-lg z-10
          bg-gradient-to-r from-green-100 via-green-100 to-white"
        >
          <h1 className="font-semibold text-gray-800  text-center transition-colors duration-300 mt-4">
            Free
          </h1>
          <p className="text-sm text-gray-400 text-center">
            Get Your Business Up and running
          </p>

          <h1 className="text-black text-2xl font-semibold mt-2 mb-2 text-center">
            $0
            <span className="text-black text-sm">/Mon</span>
          </h1>
          <div className="flex items-center justify-center">
            <button className="text-white text-xs tracking-wider flex font-semibold bg-green-500 px-4 py-2 rounded-2xl mb-2 hover:bg-black/60 transition-all duration-300 ease-in-out">
              Get Started Free
            </button>
          </div>
          <div className=" flex flex-col ml-5 md:ml-10 gap-3 mt-3 ">
            <div className="flex flex-row gap-2">
              <DoneIcon sx={{ fontSize: "20px" }} className="text-green-400 " />
              <span className={`${SpanStyle}`}>Drag & Drop Builder</span>
            </div>
            <div className="flex flex-row gap-2">
              <DoneIcon sx={{ fontSize: "20px" }} className="text-green-400 " />
              <span className={`${SpanStyle}`}>Lead Generation & Sales</span>
            </div>
            <div className="flex flex-row gap-2">
              <DoneIcon sx={{ fontSize: "20px" }} className="text-green-400 " />
              <span className={`${SpanStyle}`}>Boot & Digital Assistants</span>
            </div>
            <div className="flex flex-row gap-2">
              <DoneIcon sx={{ fontSize: "20px" }} className="text-green-400 " />
              <span className={`${SpanStyle}`}>Customer Service</span>
            </div>
            <div className="flex flex-row gap-2">
              <DoneIcon sx={{ fontSize: "20px" }} className="text-green-400 " />
              <span className={`${SpanStyle}`}>Up to 1000 Subscribers</span>
            </div>
            <div className="flex flex-row gap-2">
              <DoneIcon sx={{ fontSize: "20px" }} className="text-green-400 " />
              <span className={`${SpanStyle}`}>Unlimited Broadcasts</span>
            </div>
            <div className="flex flex-row gap-2">
              <DoneIcon sx={{ fontSize: "20px" }} className="text-green-400 " />
              <span className={`${SpanStyle}`}>
                Landing Pages & Web Widgets
              </span>
            </div>
          </div>
        </section>

        <section
          className="flex flex-col  justify-center 
         shadow-lg pb-10 gap-2 w-full rounded-lg z-10
          bg-gradient-to-r from-green-100 via-green-100 to-white"
        >
          <h1 className="font-semibold text-gray-800  text-center transition-colors duration-300 mt-4">
            Free
          </h1>
          <p className="text-sm text-gray-400 text-center">
            Get Your Business Up and running
          </p>

          <h1 className="text-black text-2xl font-semibold mt-2 mb-2 text-center">
            $149
            <span className="text-black text-sm">/Mon</span>
          </h1>
          <div className="flex items-center justify-center">
            <button className="text-white text-xs tracking-wider flex font-semibold bg-green-500 px-4 py-2 rounded-2xl mb-2 hover:bg-black/60 transition-all duration-300 ease-in-out">
              Start 3 Days Free Trail
            </button>
          </div>
          <div className=" flex flex-col ml-5 md:ml-10 gap-3 mt-3">
            <div className="flex flex-row gap-2">
              <DoneIcon sx={{ fontSize: "20px" }} className="text-green-400 " />
              <span className={`${SpanStyle}`}>Drag & Drop Builder</span>
            </div>
            <div className="flex flex-row gap-2">
              <DoneIcon sx={{ fontSize: "20px" }} className="text-green-400 " />
              <span className={`${SpanStyle}`}>Lead Generation & Sales</span>
            </div>
            <div className="flex flex-row gap-2">
              <DoneIcon sx={{ fontSize: "20px" }} className="text-green-400 " />
              <span className={`${SpanStyle}`}>Boot & Digital Assistants</span>
            </div>
            <div className="flex flex-row gap-2">
              <DoneIcon sx={{ fontSize: "20px" }} className="text-green-400 " />
              <span className={`${SpanStyle}`}>Customer Service</span>
            </div>
            <div className="flex flex-row gap-2">
              <DoneIcon sx={{ fontSize: "20px" }} className="text-green-400 " />
              <span className={`${SpanStyle}`}>Up to 1000 Subscribers</span>
            </div>
            <div className="flex flex-row gap-2">
              <DoneIcon sx={{ fontSize: "20px" }} className="text-green-400 " />
              <span className={`${SpanStyle}`}>Unlimited Broadcasts</span>
            </div>
            <div className="flex flex-row gap-2">
              <DoneIcon sx={{ fontSize: "20px" }} className="text-green-400 " />
              <span className={`${SpanStyle}`}>
                Landing Pages & Web Widgets
              </span>
            </div>
          </div>
        </section>



        <section
          className="flex flex-col  justify-center 
         shadow-lg pb-10 gap-2 w-full rounded-lg z-10
          bg-gradient-to-r from-green-100 via-green-100 to-white"
        >
          <h1 className="font-semibold text-gray-800  text-center transition-colors duration-300 mt-4">
            Free
          </h1>
          <p className="text-sm text-gray-400 text-center">
            Get Your Business Up and running
          </p>

          <h1 className="text-black text-2xl font-semibold mt-2 mb-2 text-center">
            $179
            <span className="text-black text-sm">/Mon</span>
          </h1>
          <div className="flex items-center justify-center">
            <button className="text-white text-xs tracking-wider flex font-semibold bg-green-500 px-4 py-2 rounded-2xl mb-2 hover:bg-black/60 transition-all duration-300 ease-in-out">
            Start 6 Days Free Trail
            </button>
          </div>
          <div className=" flex flex-col ml-5 md:ml-10 gap-3 mt-3">
            <div className="flex flex-row gap-2">
              <DoneIcon sx={{ fontSize: "20px" }} className="text-green-400 " />
              <span className={`${SpanStyle}`}>Drag & Drop Builder</span>
            </div>
            <div className="flex flex-row gap-2">
              <DoneIcon sx={{ fontSize: "20px" }} className="text-green-400 " />
              <span className={`${SpanStyle}`}>Lead Generation & Sales</span>
            </div>
            <div className="flex flex-row gap-2">
              <DoneIcon sx={{ fontSize: "20px" }} className="text-green-400 " />
              <span className={`${SpanStyle}`}>Boot & Digital Assistants</span>
            </div>
            <div className="flex flex-row gap-2">
              <DoneIcon sx={{ fontSize: "20px" }} className="text-green-400 " />
              <span className={`${SpanStyle}`}>Customer Service</span>
            </div>
            <div className="flex flex-row gap-2">
              <DoneIcon sx={{ fontSize: "20px" }} className="text-green-400 " />
              <span className={`${SpanStyle}`}>Up to 1000 Subscribers</span>
            </div>
            <div className="flex flex-row gap-2">
              <DoneIcon sx={{ fontSize: "20px" }} className="text-green-400 " />
              <span className={`${SpanStyle}`}>Unlimited Broadcasts</span>
            </div>
            <div className="flex flex-row gap-2">
              <DoneIcon sx={{ fontSize: "20px" }} className="text-green-400 " />
              <span className={`${SpanStyle}`}>
                Landing Pages & Web Widgets
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
