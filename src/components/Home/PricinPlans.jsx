import HoverButton from "../../ui/HoverButton4.jsx";
import HoverButton3 from "../../ui/HoverButton3.jsx";
import Anim from "../../ui/Anim.jsx"
import Underline from "../../ui/Underline";

export default function PricinPlans() {
    const SpanStyle ="text-sm text-gray-400"
  return (
    <div className="max-w-screen  py-20 font-jost bg-gray-50">

<div className="flex flex-col justify-center items-center mb-14">
        <h1 className="text-[#0E314C] text-center text-xl md:text-2xl lg:text-3xl font-semibold leading-tight mb-4 ">
        Pricing Plans
        </h1>
        <Underline />

        <Anim delay={0.4}>
          <p className="text-sm text-gray-500 text-center max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Anim>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <section className="flex flex-col mx-5 md:mx-10 items-center justify-center bg-white shadow-lg pb-10 gap-2 w-full rounded-lg transform hover:-translate-y-3 transition-transform duration-500 group">
          <div className="py-5 bg-white group-hover:bg-custom-gradient  transition-colors duration-500 border-b w-full ">
            <h1 className="font-semibold text-gray-800 group-hover:text-white text-center transition-colors duration-300 ">
              Basic Plan
            </h1>
          </div>
          <h1 className="text-green-400 text-2xl font-semibold mt-2">
            $15.00 
            <span className="text-green-400 text-sm">
                /Mon
                </span>
          </h1>
          <span className={`${SpanStyle}`}>5 GB Bandwidth</span>
          <span className={`${SpanStyle}`}>Highest Speed</span>
          <span className={`${SpanStyle}`}>1 GB Storage</span>
          <span className={`${SpanStyle}`}>Unlimited Website</span>
          <span className={`${SpanStyle}`}>Unlimited Users</span>
          <span className={`${SpanStyle}`}>24x7 Great Support</span>
          <span className={`${SpanStyle}`}><del>Data Security and Backups</del></span>
          <span className={`${SpanStyle}`}><del> Monthly Reports and Analytics</del></span>
          <div className="mt-4">
          <HoverButton>Select Plan</HoverButton>
          </div>
        </section>

        <section className="flex flex-col mx-5 md:mx-10 items-center justify-center bg-white shadow-lg pb-10 gap-2 w-full rounded-lg transform hover:-translate-y-3 transition-transform duration-500 group">
          <div className="py-5 bg-custom-gradient  transition-colors duration-500 border-b w-full ">
            <h1 className="font-semibold text-white text-center transition-colors duration-300 ">
            Advanced Plan
            </h1>
          </div>
          <h1 className="text-green-400 text-2xl font-semibold mt-2">
          $35.00 
            <span className="text-green-400 text-sm">
            /Mon
                </span>
          </h1>
          <span className={`${SpanStyle}`}>10 GB Bandwidth</span>
          <span className={`${SpanStyle}`}>Highest Speed</span>
          <span className={`${SpanStyle}`}>3 GB Storage</span>
          <span className={`${SpanStyle}`}>Unlimited Website</span>
          <span className={`${SpanStyle}`}>Unlimited Users</span>
          <span className={`${SpanStyle}`}>24x7 Great Support</span>
          <span className={`${SpanStyle}`}>Data Security and Backups</span>
          <span className={`${SpanStyle}`}><del> Monthly Reports and Analytics</del></span>
          <div className="mt-4">
          <HoverButton3>Select Plan</HoverButton3>
          </div>
        </section>



        <section className="flex flex-col mx-5 md:mx-10 items-center justify-center bg-white shadow-lg pb-10 gap-2 w-full rounded-lg transform hover:-translate-y-3 transition-transform duration-500 group">
          <div className="py-5 bg-white group-hover:bg-custom-gradient  transition-colors duration-500 border-b w-full ">
            <h1 className="font-semibold text-gray-800 group-hover:text-white text-center transition-colors duration-300 ">
              Basic Plan
            </h1>
          </div>
          <h1 className="text-green-400 text-2xl font-semibold mt-2">
            $15.00 
            <span className="text-green-400 text-sm">
                /Mon
                </span>
          </h1>
          <span className={`${SpanStyle}`}>15 GB Bandwidth</span>
          <span className={`${SpanStyle}`}>Highest Speed</span>
          <span className={`${SpanStyle}`}>5 GB Storage</span>
          <span className={`${SpanStyle}`}>Unlimited Website</span>
          <span className={`${SpanStyle}`}>Unlimited Users</span>
          <span className={`${SpanStyle}`}>24x7 Great Support</span>
          <span className={`${SpanStyle}`}>Data Security and Backups</span>
          <span className={`${SpanStyle}`}> Monthly Reports and Analytics</span>
          <div className="mt-4">
          <HoverButton>Select Plan</HoverButton>
          </div>
        </section>
        
      </div>
    </div>
  );
}
